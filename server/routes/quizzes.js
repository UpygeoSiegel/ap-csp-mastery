const express = require('express');
const { db } = require('../firebase');
const { verifyToken, verifyStudent } = require('../middleware/verifyToken');
const crypto = require('crypto');
const router = express.Router();

// All routes require student authentication
router.use(verifyToken, verifyStudent);

// Start a quiz for a topic
router.post('/start', async (req, res) => {
  try {
    const { topicId } = req.body;
    const studentId = req.user.uid;

    if (!topicId) {
      return res.status(400).json({ error: 'Topic ID is required' });
    }

    // Get student's class
    const studentClassId = req.user.classIds[0]; // Students belong to one class

    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Check if topic is available to student
    const isTopicAvailable = await checkTopicAvailability(studentId, topicId, studentClassId);
    
    if (!isTopicAvailable.available) {
      return res.status(403).json({ error: isTopicAvailable.reason });
    }

    // Get student's previous attempts to avoid repeating failed questions
    const progressDoc = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', topicId)
      .where('classId', '==', studentClassId)
      .limit(1)
      .get();

    let usedQuestionIds = [];
    if (!progressDoc.empty) {
      const progress = progressDoc.docs[0].data();
      
      // If already passed, don't allow retaking
      if (progress.status === 'passed') {
        return res.status(403).json({ error: 'Topic already completed' });
      }

      // Collect question IDs from failed attempts
      if (progress.attempts) {
        progress.attempts
          .filter(attempt => !attempt.passed)
          .forEach(attempt => {
            usedQuestionIds = usedQuestionIds.concat(attempt.questionIds);
          });
      }
    }

    // Get active questions (not deactivated by teachers)
    const activeQuestions = topic.questions.filter(q => !q.deactivated);

    if (activeQuestions.length < 5) {
      return res.status(400).json({ error: 'Not enough active questions for this topic' });
    }

    // Select 5 questions, prioritizing unused ones
    const selectedQuestions = selectQuizQuestions(activeQuestions, usedQuestionIds, 5);

    // Generate attempt ID
    const attemptId = crypto.randomUUID();

    // Prepare questions for quiz (without correct answers)
    const quizQuestions = selectedQuestions.map(q => ({
      id: q.id,
      text: q.text,
      type: q.type,
      options: q.options
    }));

    res.json({
      attemptId,
      topicId,
      topicName: topic.name,
      questions: quizQuestions,
      questionIds: selectedQuestions.map(q => q.id)
    });

  } catch (error) {
    console.error('Start quiz error:', error);
    res.status(500).json({ error: 'Failed to start quiz' });
  }
});

// Submit quiz answers
router.post('/submit', async (req, res) => {
  try {
    const { attemptId, topicId, answers } = req.body;
    const studentId = req.user.uid;

    if (!attemptId || !topicId || !answers) {
      return res.status(400).json({ error: 'Attempt ID, topic ID, and answers are required' });
    }

    const studentClassId = req.user.classIds[0];

    // Get topic with correct answers
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Validate and score answers
    const { score, results, questionIds } = scoreQuizAnswers(topic, answers);
    const passed = score >= 4; // 4 out of 5 to pass

    // Prepare attempt data
    const attempt = {
      attemptId,
      timestamp: new Date(),
      score,
      passed,
      questionIds,
      answers: results
    };

    // Update or create student progress
    const progressQuery = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', topicId)
      .where('classId', '==', studentClassId)
      .limit(1)
      .get();

    let newStatus = passed ? 'passed' : 'available';

    if (progressQuery.empty) {
      // Create new progress document
      await db.collection('studentProgress').add({
        studentId,
        topicId,
        classId: studentClassId,
        status: newStatus,
        attempts: [attempt],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    } else {
      // Update existing progress
      const progressDoc = progressQuery.docs[0];
      const existingProgress = progressDoc.data();
      
      const updatedAttempts = [...(existingProgress.attempts || []), attempt];
      const updateData = {
        attempts: updatedAttempts,
        updatedAt: new Date()
      };

      // Only update status if passed (don't change from passed to available)
      if (passed && existingProgress.status !== 'passed') {
        updateData.status = 'passed';
      }

      await progressDoc.ref.update(updateData);
    }

    // If passed, unlock next topic
    if (passed) {
      await unlockNextTopic(studentId, topicId, studentClassId);
    }

    // Prepare detailed results with explanations
    const detailedResults = results.map(result => {
      const question = topic.questions.find(q => q.id === result.questionId);
      return {
        ...result,
        question: {
          id: question.id,
          text: question.text,
          type: question.type,
          options: question.options
        },
        explanation: question.explanation
      };
    });

    res.json({
      success: true,
      score,
      passed,
      totalQuestions: 5,
      results: detailedResults,
      message: passed ? 'Congratulations! You passed this topic!' : 'Keep practicing! You can retake this quiz.'
    });

  } catch (error) {
    console.error('Submit quiz error:', error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
});

// Helper function to check if a topic is available to a student
async function checkTopicAvailability(studentId, topicId, classId) {
  try {
    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return { available: false, reason: 'Topic not found' };
    }

    const topic = topicDoc.data();

    // Check if already passed
    const progressDoc = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', topicId)
      .where('classId', '==', classId)
      .limit(1)
      .get();

    if (!progressDoc.empty) {
      const progress = progressDoc.docs[0].data();
      if (progress.status === 'passed') {
        return { available: false, reason: 'Topic already completed' };
      }
    }

    // For first topic (order 1), it's always available
    if (topic.order === 1) {
      return { available: true };
    }

    // Check if previous topic is completed
    const previousTopicSnapshot = await db.collection('topics')
      .where('order', '==', topic.order - 1)
      .limit(1)
      .get();

    if (previousTopicSnapshot.empty) {
      return { available: false, reason: 'Previous topic not found' };
    }

    const previousTopic = previousTopicSnapshot.docs[0];
    const previousTopicId = previousTopic.id;

    // Check if student has passed the previous topic
    const previousProgressDoc = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', previousTopicId)
      .where('classId', '==', classId)
      .where('status', '==', 'passed')
      .limit(1)
      .get();

    if (previousProgressDoc.empty) {
      // Check for teacher override
      const overrideDoc = await db.collection('teacherOverrides')
        .where('classId', '==', classId)
        .where('studentId', '==', studentId)
        .where('topicId', '==', topicId)
        .limit(1)
        .get();

      if (overrideDoc.empty) {
        return { available: false, reason: 'Previous topic must be completed first' };
      }
    }

    return { available: true };
  } catch (error) {
    console.error('Check topic availability error:', error);
    return { available: false, reason: 'Error checking topic availability' };
  }
}

// Helper function to select quiz questions
function selectQuizQuestions(allQuestions, usedQuestionIds, count) {
  // Separate unused and used questions
  const unusedQuestions = allQuestions.filter(q => !usedQuestionIds.includes(q.id));
  const usedQuestions = allQuestions.filter(q => usedQuestionIds.includes(q.id));

  let selectedQuestions = [];

  // Prioritize unused questions
  if (unusedQuestions.length >= count) {
    // Randomly select from unused questions
    const shuffled = [...unusedQuestions].sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, count);
  } else {
    // Take all unused questions and fill remaining with used questions
    selectedQuestions = [...unusedQuestions];
    const remainingCount = count - unusedQuestions.length;
    const shuffledUsed = [...usedQuestions].sort(() => 0.5 - Math.random());
    selectedQuestions = selectedQuestions.concat(shuffledUsed.slice(0, remainingCount));
  }

  // Shuffle the final selection
  return selectedQuestions.sort(() => 0.5 - Math.random());
}

// Helper function to score quiz answers
function scoreQuizAnswers(topic, submittedAnswers) {
  const results = [];
  let score = 0;
  const questionIds = [];

  submittedAnswers.forEach(answer => {
    const question = topic.questions.find(q => q.id === answer.questionId);
    if (!question) return;

    questionIds.push(answer.questionId);

    const isCorrect = arraysEqual(
      answer.selectedAnswerIds.sort(),
      question.correctAnswers.sort()
    );

    if (isCorrect) score++;

    results.push({
      questionId: answer.questionId,
      selectedAnswerIds: answer.selectedAnswerIds,
      correctAnswerIds: question.correctAnswers,
      correct: isCorrect
    });
  });

  return { score, results, questionIds };
}

// Helper function to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Helper function to unlock next topic
async function unlockNextTopic(studentId, currentTopicId, classId) {
  try {
    // Get current topic to find its order
    const currentTopicDoc = await db.collection('topics').doc(currentTopicId).get();
    if (!currentTopicDoc.exists) return;

    const currentTopic = currentTopicDoc.data();
    const nextOrder = currentTopic.order + 1;

    // Find next topic
    const nextTopicSnapshot = await db.collection('topics')
      .where('order', '==', nextOrder)
      .limit(1)
      .get();

    if (nextTopicSnapshot.empty) return; // No next topic

    const nextTopicId = nextTopicSnapshot.docs[0].id;

    // Check if student already has progress for next topic
    const nextProgressDoc = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', nextTopicId)
      .where('classId', '==', classId)
      .limit(1)
      .get();

    if (nextProgressDoc.empty) {
      // Create available progress for next topic
      await db.collection('studentProgress').add({
        studentId,
        topicId: nextTopicId,
        classId,
        status: 'available',
        attempts: [],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    } else {
      // Update status if locked
      const existingProgress = nextProgressDoc.docs[0].data();
      if (existingProgress.status === 'locked') {
        await nextProgressDoc.docs[0].ref.update({
          status: 'available',
          updatedAt: new Date()
        });
      }
    }
  } catch (error) {
    console.error('Unlock next topic error:', error);
  }
}

module.exports = router;