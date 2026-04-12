const express = require('express');
const { db } = require('../firebase');
const { verifyToken, verifyTeacher, verifyStudent } = require('../middleware/verifyToken');
const crypto = require('crypto');
const router = express.Router();

router.use(verifyToken);

/**
 * AP CSP Exam Weights (scaled to 50 questions)
 * BI 1: 10-13% (~6)
 * BI 2: 17-22% (~10)
 * BI 3: 30-35% (~16)
 * BI 4: 11-15% (~7)
 * BI 5: 21-26% (~11)
 * Total: 50
 */
const BI_WEIGHTS = {
  'big-idea-1': 6,
  'big-idea-2': 10,
  'big-idea-3': 16,
  'big-idea-4': 7,
  'big-idea-5': 11
};

// Assign a practice test to a class
router.post('/assign', verifyTeacher, async (req, res) => {
  try {
    const { classId, title = 'Full Practice Exam' } = req.body;
    const teacherId = req.user.uid;

    if (!classId) {
      return res.status(400).json({ error: 'Class ID is required' });
    }

    // Verify teacher owns the class
    const classDoc = await db.collection('classes').doc(classId).get();
    if (!classDoc.exists || classDoc.data().teacherId !== teacherId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Create the practice test assignment
    const testId = crypto.randomUUID();
    const assignment = {
      testId,
      classId,
      teacherId,
      title,
      type: 'random_50',
      createdAt: new Date(),
      active: true,
      results: {} // Map of studentId -> score
    };

    await db.collection('practiceTests').doc(testId).set(assignment);

    res.status(201).json({ 
      message: 'Practice test assigned successfully',
      testId 
    });

  } catch (error) {
    console.error('Assign practice test error:', error);
    res.status(500).json({ error: 'Failed to assign practice test' });
  }
});

// Get assigned practice tests for a student
router.get('/student', verifyStudent, async (req, res) => {
  try {
    const studentId = req.user.uid;
    const { classId } = req.query;

    if (!classId) {
      return res.status(400).json({ error: 'Class ID is required' });
    }

    const testsSnapshot = await db.collection('practiceTests')
      .where('classId', '==', classId)
      .where('active', '==', true)
      .get();

    const tests = testsSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        createdAt: data.createdAt,
        completed: !!(data.results && data.results[studentId]),
        score: data.results ? data.results[studentId]?.score : null
      };
    });

    res.json({ tests });

  } catch (error) {
    console.error('Get student tests error:', error);
    res.status(500).json({ error: 'Failed to fetch practice tests' });
  }
});

// Start a practice test
router.get('/start/:testId', verifyStudent, async (req, res) => {
  try {
    const { testId } = req.params;
    const studentId = req.user.uid;

    const testDoc = await db.collection('practiceTests').doc(testId).get();
    if (!testDoc.exists) {
      return res.status(404).json({ error: 'Practice test not found' });
    }

    const testData = testDoc.data();

    // Verify student is in the class
    const userDoc = await db.collection('users').doc(studentId).get();
    const userData = userDoc.data();
    if (!userData.classIds.includes(testData.classId)) {
      return res.status(403).json({ error: 'Not enrolled in this class' });
    }

    // GENERATE THE RANDOM 50 QUESTIONS
    const selectedQuestionIds = [];
    const allBigIdeas = Object.keys(BI_WEIGHTS);

    for (const biId of allBigIdeas) {
      const targetCount = BI_WEIGHTS[biId];
      
      // Get all topics for this Big Idea
      const topicsSnapshot = await db.collection('topics')
        .where('bigIdeaId', '==', biId)
        .get();
      
      const topicIds = topicsSnapshot.docs.map(doc => doc.id);
      
      // Get all questions for these topics
      const questionsSnapshot = await db.collection('questions')
        .where('topicId', 'in', topicIds)
        .get();
      
      const allBiQuestions = questionsSnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(q => !q.deactivated);

      // Group questions by topic to ensure representation
      const questionsByTopic = {};
      topicIds.forEach(id => questionsByTopic[id] = []);
      allBiQuestions.forEach(q => {
        if (questionsByTopic[q.topicId]) {
          questionsByTopic[q.topicId].push(q);
        }
      });

      // 1. First, take one random question from EVERY topic in this Big Idea
      const biSelected = [];
      topicIds.forEach(tId => {
        const topicQs = questionsByTopic[tId];
        if (topicQs.length > 0) {
          const randomQ = topicQs[Math.floor(Math.random() * topicQs.length)];
          biSelected.push(randomQ);
        }
      });

      // 2. If we need more to hit the targetCount, fill with random questions from the BI pool
      // 3. If we ALREADY have more than targetCount (like BI 3 having 18 topics but 16 target), 
      //    we'll actually keep them all to ensure representation as requested.
      //    The final count might be slightly > 50 but every topic will be there.
      
      const remainingNeeded = targetCount - biSelected.length;
      if (remainingNeeded > 0) {
        const availablePool = allBiQuestions.filter(q => !biSelected.some(sq => sq.id === q.id));
        const shuffledPool = availablePool.sort(() => 0.5 - Math.random());
        biSelected.push(...shuffledPool.slice(0, remainingNeeded));
      }

      selectedQuestionIds.push(...biSelected);
    }

    // Final Shuffle
    const finalQuestions = selectedQuestionIds
      .sort(() => 0.5 - Math.random())
      .map(q => ({
        id: q.id,
        text: q.text || q.question || '',
        type: q.type || 'multiple_choice',
        options: (q.options || []).map((opt, idx) => ({
          id: opt.id || idx.toString(),
          text: typeof opt === 'string' ? opt : opt.text
        }))
      }));

    res.json({
      testId,
      title: testData.title,
      questions: finalQuestions,
      attemptId: `practice-${testId}-${Date.now()}`
    });

  } catch (error) {
    console.error('Start practice test error:', error);
    res.status(500).json({ error: 'Failed to generate practice test' });
  }
});

// Helper function to compare arrays
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) return false;
  }
  return true;
}

// Helper to score quiz answers
function scoreQuizAnswers(questions, submittedAnswers) {
  const results = [];
  let score = 0;
  const questionIds = [];

  submittedAnswers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return;

    questionIds.push(answer.questionId);

    // Normalize correct answers
    let correctAnswerIds = [];
    if (Array.isArray(question.correctAnswers)) {
      correctAnswerIds = [...question.correctAnswers];
    } else if (question.correctIndex !== undefined) {
      correctAnswerIds = [question.correctIndex.toString()];
    }

    const isCorrect = arraysEqual(answer.selectedAnswerIds, correctAnswerIds);
    if (isCorrect) score++;

    const normalizedOptions = (question.options || []).map((opt, idx) => ({
      id: opt.id || idx.toString(),
      text: typeof opt === 'string' ? opt : opt.text
    }));

    results.push({
      questionId: answer.questionId,
      questionText: question.text || question.question || '',
      correct: isCorrect,
      selectedAnswerTexts: (answer.selectedAnswerIds || []).map(id => normalizedOptions.find(o => o.id === id)?.text || 'Unknown'),
      correctAnswerTexts: correctAnswerIds.map(id => normalizedOptions.find(o => o.id === id)?.text || 'Unknown'),
      explanation: question.explanation || ''
    });
  });

  return { score, results, questionIds };
}

// Submit practice test results
router.post('/submit', verifyStudent, async (req, res) => {
  try {
    const { testId, answers } = req.body;
    const studentId = req.user.uid;

    if (!testId || !answers) {
      return res.status(400).json({ error: 'Test ID and answers are required' });
    }

    const testDoc = await db.collection('practiceTests').doc(testId).get();
    if (!testDoc.exists) {
      return res.status(404).json({ error: 'Practice test not found' });
    }

    // Fetch questions to score
    const questionIds = answers.map(a => a.questionId);
    const questions = [];
    for (const id of questionIds) {
      const qDoc = await db.collection('questions').doc(id).get();
      if (qDoc.exists) {
        questions.push({ id: qDoc.id, ...qDoc.data() });
      }
    }

    const { score, results } = scoreQuizAnswers(questions, answers);

    // Update results in practiceTest document
    const resultData = {
      score,
      total: questions.length,
      completedAt: new Date(),
      // We don't store full results per student in the assignment to save space,
      // but we update the summary.
    };

    await db.collection('practiceTests').doc(testId).update({
      [`results.${studentId}`]: resultData
    });

    res.json({
      score,
      totalQuestions: questions.length,
      passed: true,
      message: `Practice exam completed! Your score: ${score}/${questions.length}`,
      results
    });

  } catch (error) {
    console.error('Submit practice test error:', error);
    res.status(500).json({ error: 'Failed to submit practice test' });
  }
});

module.exports = router;
