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
    const { topicId, classId } = req.body;
    const studentId = req.user.uid;

    if (!topicId) {
      return res.status(400).json({ error: 'Topic ID is required' });
    }

    // Get student's class - use provided classId or default to first class
    const studentClassId = classId || req.user.classIds[0];

    // Verify student is in this class
    if (!req.user.classIds.includes(studentClassId)) {
      return res.status(403).json({ error: 'You are not enrolled in this class' });
    }

    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Get Big Idea for breadcrumb
    let bigIdeaName = '';
    if (topic.bigIdeaId) {
      const bigIdeaDoc = await db.collection('bigIdeas').doc(topic.bigIdeaId).get();
      if (bigIdeaDoc.exists) {
        const bigIdea = bigIdeaDoc.data();
        bigIdeaName = bigIdea.shortName || bigIdea.name;
      }
    }

    // Check if topic is available to student
    const isTopicAvailable = await checkTopicAvailability(studentId, topicId, studentClassId);

    if (!isTopicAvailable.available) {
      const errorResponse = { error: isTopicAvailable.reason };

      // Include wait time info if applicable
      if (isTopicAvailable.waitRequired) {
        errorResponse.waitRequired = true;
        errorResponse.waitUntil = isTopicAvailable.waitUntil;
        errorResponse.remainingMinutes = isTopicAvailable.remainingMinutes;
      }

      return res.status(403).json(errorResponse);
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

      // Collect question IDs from previous attempts (prioritize new questions)
      if (progress.attempts) {
        progress.attempts.forEach(attempt => {
          usedQuestionIds = usedQuestionIds.concat(attempt.questionIds || []);
        });
      }
    }

    // Get questions from questions collection
    const questionsSnapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();

    const allQuestions = questionsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Get active questions (not deactivated by teachers)
    const activeQuestions = allQuestions.filter(q => !q.deactivated);

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
      text: q.text || q.question || '',
      type: q.type,
      options: q.options.map((opt, idx) => ({
        id: opt.id || idx.toString(),
        text: typeof opt === 'string' ? opt : opt.text
      }))
    }));

    res.json({
      attemptId,
      topicId,
      topicName: topic.name,
      bigIdeaName,
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
    const { attemptId, topicId, classId, answers } = req.body;
    const studentId = req.user.uid;

    if (!attemptId || !topicId || !answers) {
      return res.status(400).json({ error: 'Attempt ID, topic ID, and answers are required' });
    }

    // Get student's class - use provided classId or default to first class
    const studentClassId = classId || req.user.classIds[0];

    // Verify student is in this class
    if (!req.user.classIds.includes(studentClassId)) {
      return res.status(403).json({ error: 'You are not enrolled in this class' });
    }

    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Get questions from questions collection
    const questionsSnapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();

    const questions = questionsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Validate and score answers
    const { score, results, questionIds } = scoreQuizAnswers(questions, answers);
    const passed = score >= 4; // 4 out of 5 to pass

    // Calculate total time spent
    const totalTimeMs = results.reduce((sum, r) => sum + (r.timeSpentMs || 0), 0);

    // Prepare attempt data with full question details for review
    const attempt = {
      attemptId,
      timestamp: new Date(),
      score,
      passed,
      questionIds,
      totalTimeMs,
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

    // Update question statistics for item analysis
    await updateQuestionStats(topicId, results);

    // Prepare detailed results with explanations
    const detailedResults = results.map(result => {
      return {
        ...result,
        question: {
          id: result.questionId,
          text: result.questionText,
          type: result.questionType,
          options: result.options
        }
      };
    });

    // Get resources for failed quiz
    let studyResources = null;
    if (!passed) {
      studyResources = topic.resources || null;
      console.log('Student failed quiz, including resources:', studyResources);
    }

    res.json({
      success: true,
      score,
      passed,
      totalQuestions: 5,
      results: detailedResults,
      studyResources,
      message: passed ? 'Congratulations! You passed this topic!' : 'Keep practicing! You can retake this quiz.',
      resourcesMessage: !passed ? 'Here are some resources to help you study:' : null
    });

  } catch (error) {
    console.error('Submit quiz error:', error);
    res.status(500).json({ error: 'Failed to submit quiz' });
  }
});

// Helper function to check if a topic is available to a student
async function checkTopicAvailability(studentId, topicId, classId, classData = null) {
  try {
    // Get class data if not provided
    if (!classData) {
      const classDoc = await db.collection('classes').doc(classId).get();
      if (!classDoc.exists) {
        return { available: false, reason: 'Class not found' };
      }
      classData = classDoc.data();
    }

    const progressionMode = classData.progressionMode || 'linear';
    const retakeWaitMinutes = classData.retakeWaitMinutes || 0;

    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return { available: false, reason: 'Topic not found' };
    }

    const topic = topicDoc.data();

    // Check if student has progress for this topic
    const progressDoc = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', topicId)
      .where('classId', '==', classId)
      .limit(1)
      .get();

    // Check wait time for retakes
    if (!progressDoc.empty) {
      const progress = progressDoc.docs[0].data();

      // Check if there's a retake wait time requirement
      if (retakeWaitMinutes > 0 && progress.attempts && progress.attempts.length > 0) {
        const lastAttempt = progress.attempts[progress.attempts.length - 1];
        const lastAttemptTime = lastAttempt.timestamp.toDate ? lastAttempt.timestamp.toDate() : new Date(lastAttempt.timestamp);
        const waitUntil = new Date(lastAttemptTime.getTime() + retakeWaitMinutes * 60 * 1000);
        const now = new Date();

        if (now < waitUntil) {
          const remainingMs = waitUntil.getTime() - now.getTime();
          const remainingMinutes = Math.ceil(remainingMs / (60 * 1000));
          return {
            available: false,
            reason: `Please wait before retaking this quiz`,
            waitRequired: true,
            waitUntil: waitUntil.toISOString(),
            remainingMinutes
          };
        }
      }

      // Allow retaking if passed or available (and wait time passed)
      if (progress.status === 'passed' || progress.status === 'available') {
        return { available: true };
      }
    }

    // If progression mode is 'unlocked', all topics are available
    if (progressionMode === 'unlocked') {
      return { available: true };
    }

    // Linear progression mode - check prerequisites
    // For first topic (order 1), it's always available
    if (topic.order === 1) {
      return { available: true };
    }

    // Check if previous topic is completed
    const previousTopicSnapshot = await db.collection('topics')
      .where('bigIdeaId', '==', topic.bigIdeaId)
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
function scoreQuizAnswers(questions, submittedAnswers) {
  const results = [];
  let score = 0;
  const questionIds = [];

  submittedAnswers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return;

    questionIds.push(answer.questionId);

    // Normalize correct answers to an array of IDs
    let correctAnswerIds = [];
    if (Array.isArray(question.correctAnswers)) {
      correctAnswerIds = [...question.correctAnswers];
    } else if (question.correctIndex !== undefined) {
      // If it's a legacy question with correctIndex, the ID is the string index
      correctAnswerIds = [question.correctIndex.toString()];
    }

    const isCorrect = arraysEqual(
      [...answer.selectedAnswerIds].sort(),
      [...correctAnswerIds].sort()
    );

    if (isCorrect) score++;

    // Standardize options for the response
    const normalizedOptions = question.options.map((opt, idx) => ({
      id: opt.id || idx.toString(),
      text: typeof opt === 'string' ? opt : opt.text
    }));

    // Get selected answer texts
    const selectedAnswerTexts = answer.selectedAnswerIds.map(id => {
      const option = normalizedOptions.find(o => o.id === id);
      return option ? option.text : 'Unknown';
    });

    // Get correct answer texts
    const correctAnswerTexts = correctAnswerIds.map(id => {
      const option = normalizedOptions.find(o => o.id === id);
      return option ? option.text : 'Unknown';
    });

    results.push({
      questionId: answer.questionId,
      questionText: question.text || question.question || '',
      questionType: question.type || 'multiple_choice',
      options: normalizedOptions,
      selectedAnswerIds: answer.selectedAnswerIds || [],
      selectedAnswerTexts,
      correctAnswerIds: correctAnswerIds,
      correctAnswerTexts,
      correct: isCorrect,
      timeSpentMs: answer.timeSpentMs || 0,
      explanation: question.explanation || ''
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
    // Get current topic to find its order and bigIdeaId
    const currentTopicDoc = await db.collection('topics').doc(currentTopicId).get();
    if (!currentTopicDoc.exists) return;

    const currentTopic = currentTopicDoc.data();
    const nextOrder = currentTopic.order + 1;

    // Find next topic within the same Big Idea
    const nextTopicSnapshot = await db.collection('topics')
      .where('bigIdeaId', '==', currentTopic.bigIdeaId)
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

// Helper function to update question statistics for item analysis
async function updateQuestionStats(topicId, results) {
  try {
    for (const result of results) {
      const questionId = result.questionId;
      const statsRef = db.collection('questionStats').doc(questionId);

      // Get existing stats or create new
      const statsDoc = await statsRef.get();

      if (statsDoc.exists) {
        const stats = statsDoc.data();

        // Update option selections
        const optionSelections = stats.optionSelections || {};
        result.selectedAnswerIds.forEach(optionId => {
          optionSelections[optionId] = (optionSelections[optionId] || 0) + 1;
        });

        // Update stats
        await statsRef.update({
          totalAttempts: (stats.totalAttempts || 0) + 1,
          correctCount: (stats.correctCount || 0) + (result.correct ? 1 : 0),
          incorrectCount: (stats.incorrectCount || 0) + (result.correct ? 0 : 1),
          optionSelections,
          totalTimeSpentMs: (stats.totalTimeSpentMs || 0) + (result.timeSpentMs || 0),
          lastUpdated: new Date()
        });
      } else {
        // Create new stats document
        const optionSelections = {};
        result.selectedAnswerIds.forEach(optionId => {
          optionSelections[optionId] = 1;
        });

        await statsRef.set({
          questionId,
          topicId,
          questionText: result.questionText,
          questionType: result.questionType,
          options: result.options,
          correctAnswerIds: result.correctAnswerIds,
          totalAttempts: 1,
          correctCount: result.correct ? 1 : 0,
          incorrectCount: result.correct ? 0 : 1,
          optionSelections,
          totalTimeSpentMs: result.timeSpentMs || 0,
          createdAt: new Date(),
          lastUpdated: new Date()
        });
      }
    }
  } catch (error) {
    console.error('Update question stats error:', error);
    // Don't throw - this is non-critical analytics
  }
}

module.exports = router;