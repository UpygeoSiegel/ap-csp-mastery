const express = require('express');
const { db } = require('../firebase');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();

// All routes require authentication
router.use(verifyToken);

// Get all Big Ideas
router.get('/big-ideas', async (req, res) => {
  try {
    const bigIdeasSnapshot = await db.collection('bigIdeas')
      .orderBy('order', 'asc')
      .get();

    const bigIdeas = bigIdeasSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json({ bigIdeas });

  } catch (error) {
    console.error('Get big ideas error:', error);
    res.status(500).json({ error: 'Failed to fetch big ideas' });
  }
});

// Helper function to get question count for a topic from questions collection
async function getQuestionCount(topicId) {
  const questionsSnapshot = await db.collection('questions')
    .where('topicId', '==', topicId)
    .get();
  // Filter out deactivated questions (handle both false and undefined/missing)
  const activeQuestions = questionsSnapshot.docs.filter(doc => {
    const data = doc.data();
    return !data.deactivated;
  });
  return activeQuestions.length;
}

// Get a specific Big Idea with its topics
router.get('/big-ideas/:bigIdeaId', async (req, res) => {
  try {
    const { bigIdeaId } = req.params;
    const { classId } = req.query;
    const studentId = req.user.uid;

    // Get the Big Idea
    const bigIdeaDoc = await db.collection('bigIdeas').doc(bigIdeaId).get();

    if (!bigIdeaDoc.exists) {
      return res.status(404).json({ error: 'Big Idea not found' });
    }

    const bigIdea = { id: bigIdeaDoc.id, ...bigIdeaDoc.data() };

    // Get class settings if classId provided
    let classSettings = { progressionMode: 'linear', retakeWaitMinutes: 0 };
    if (classId) {
      const classDoc = await db.collection('classes').doc(classId).get();
      if (classDoc.exists) {
        const classData = classDoc.data();
        classSettings = {
          progressionMode: classData.progressionMode || 'linear',
          retakeWaitMinutes: classData.retakeWaitMinutes || 0
        };
      }
    }

    // Get topics for this Big Idea
    const topicsSnapshot = await db.collection('topics')
      .where('bigIdeaId', '==', bigIdeaId)
      .orderBy('order', 'asc')
      .get();

    const topics = [];

    // First pass: collect all progress data
    const progressMap = {};
    if (classId && req.user.role === 'student') {
      for (const topicDoc of topicsSnapshot.docs) {
        const progressQuery = await db.collection('studentProgress')
          .where('studentId', '==', studentId)
          .where('topicId', '==', topicDoc.id)
          .where('classId', '==', classId)
          .limit(1)
          .get();

        if (!progressQuery.empty) {
          progressMap[topicDoc.id] = progressQuery.docs[0].data();
        }
      }
    }

    for (let i = 0; i < topicsSnapshot.docs.length; i++) {
      const topicDoc = topicsSnapshot.docs[i];
      const topic = { id: topicDoc.id, ...topicDoc.data() };

      // Get progress for this topic if classId provided
      let status = 'locked';
      let bestScore = null;
      let attempts = [];
      let waitUntil = null;
      let remainingMinutes = null;

      if (classId && req.user.role === 'student') {
        const progress = progressMap[topic.id];

        if (progress) {
          status = progress.status;
          attempts = progress.attempts || [];
          if (attempts.length > 0) {
            bestScore = Math.max(...attempts.map(a => a.score || 0));

            // Check wait time for retakes
            if (classSettings.retakeWaitMinutes > 0) {
              const lastAttempt = attempts[attempts.length - 1];
              const lastAttemptTime = lastAttempt.timestamp.toDate ? lastAttempt.timestamp.toDate() : new Date(lastAttempt.timestamp);
              const waitUntilDate = new Date(lastAttemptTime.getTime() + classSettings.retakeWaitMinutes * 60 * 1000);
              const now = new Date();

              if (now < waitUntilDate) {
                waitUntil = waitUntilDate.toISOString();
                remainingMinutes = Math.ceil((waitUntilDate.getTime() - now.getTime()) / (60 * 1000));
              }
            }
          }
        } else if (classSettings.progressionMode === 'unlocked' || topic.order === 1) {
          // All topics available in unlocked mode, or first topic is always available
          status = 'available';
        } else {
          // Linear mode: check if previous topic is passed
          const prevTopicDoc = topicsSnapshot.docs[i - 1];
          if (prevTopicDoc) {
            const prevProgress = progressMap[prevTopicDoc.id];
            if (prevProgress && prevProgress.status === 'passed') {
              status = 'available';
            }
          }
        }

        // Check for teacher overrides
        const overrideQuery = await db.collection('teacherOverrides')
          .where('classId', '==', classId)
          .where('studentId', '==', studentId)
          .where('topicId', '==', topic.id)
          .limit(1)
          .get();

        if (!overrideQuery.empty && status === 'locked') {
          status = 'available';
        }
      }

      // Remove embedded questions array if present (legacy)
      const { questions, ...topicData } = topic;

      // Get question count from questions collection
      const questionCount = await getQuestionCount(topic.id);

      const topicResult = {
        ...topicData,
        questionCount,
        status,
        bestScore,
        attemptCount: attempts.length
      };

      // Include wait time info if applicable
      if (waitUntil) {
        topicResult.waitUntil = waitUntil;
        topicResult.remainingMinutes = remainingMinutes;
      }

      topics.push(topicResult);
    }

    res.json({
      bigIdea,
      topics,
      classSettings
    });

  } catch (error) {
    console.error('Get big idea error:', error);
    res.status(500).json({ error: 'Failed to fetch big idea' });
  }
});

// Get a specific topic details (for teachers to manage questions)
router.get('/:topicId', async (req, res) => {
  try {
    const { topicId } = req.params;

    const topicDoc = await db.collection('topics').doc(topicId).get();

    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = { id: topicDoc.id, ...topicDoc.data() };

    // Remove legacy embedded questions array
    const { questions: legacyQuestions, ...topicData } = topic;

    // Get questions from questions collection
    const questionsSnapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();

    const questions = questionsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Only return questions to teachers
    if (req.user.role !== 'teacher') {
      const questionCount = questions.filter(q => !q.deactivated).length;
      return res.json({
        ...topicData,
        questionCount
      });
    }

    res.json({
      ...topicData,
      questions
    });

  } catch (error) {
    console.error('Get topic error:', error);
    res.status(500).json({ error: 'Failed to fetch topic' });
  }
});

// Get question statistics for a topic (teachers only) - Item Analysis
router.get('/:topicId/question-stats', async (req, res) => {
  try {
    // Only teachers can view question stats
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ error: 'Access denied' });
    }

    const { topicId } = req.params;

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

    // Get all question stats for this topic
    const statsSnapshot = await db.collection('questionStats')
      .where('topicId', '==', topicId)
      .get();

    const statsMap = {};
    statsSnapshot.docs.forEach(doc => {
      statsMap[doc.id] = doc.data();
    });

    // Combine questions with their stats
    const questionsWithStats = questions.map(question => {
      const stats = statsMap[question.id] || {
        totalAttempts: 0,
        correctCount: 0,
        incorrectCount: 0,
        optionSelections: {},
        totalTimeSpentMs: 0
      };

      // Calculate percentages
      const correctPercentage = stats.totalAttempts > 0
        ? Math.round((stats.correctCount / stats.totalAttempts) * 100)
        : null;

      const avgTimeMs = stats.totalAttempts > 0
        ? Math.round(stats.totalTimeSpentMs / stats.totalAttempts)
        : null;

      // Calculate option selection percentages
      const optionStats = (question.options || []).map(option => {
        const selectionCount = stats.optionSelections[option.id] || 0;
        const selectionPercentage = stats.totalAttempts > 0
          ? Math.round((selectionCount / stats.totalAttempts) * 100)
          : 0;
        const isCorrect = question.correctAnswers.includes(option.id);

        return {
          id: option.id,
          text: option.text,
          isCorrect,
          selectionCount,
          selectionPercentage
        };
      });

      return {
        id: question.id,
        text: question.text,
        type: question.type,
        deactivated: question.deactivated || false,
        correctAnswers: question.correctAnswers,
        stats: {
          totalAttempts: stats.totalAttempts,
          correctCount: stats.correctCount,
          incorrectCount: stats.incorrectCount,
          correctPercentage,
          avgTimeMs,
          optionStats
        }
      };
    });

    res.json({
      topicId,
      topicName: topic.name,
      questions: questionsWithStats
    });

  } catch (error) {
    console.error('Get question stats error:', error);
    res.status(500).json({ error: 'Failed to fetch question statistics' });
  }
});

// Get summary statistics for all topics (teachers only) - Overview
router.get('/stats/summary', async (req, res) => {
  try {
    // Only teachers can view stats
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Get all topics
    const topicsSnapshot = await db.collection('topics')
      .orderBy('order', 'asc')
      .get();

    // Get all questions to count per topic
    const allQuestionsSnapshot = await db.collection('questions').get();
    const questionCountByTopic = {};
    allQuestionsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (!data.deactivated) {
        questionCountByTopic[data.topicId] = (questionCountByTopic[data.topicId] || 0) + 1;
      }
    });

    // Get all question stats
    const allStatsSnapshot = await db.collection('questionStats').get();

    // Group stats by topic
    const statsByTopic = {};
    allStatsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (!statsByTopic[data.topicId]) {
        statsByTopic[data.topicId] = [];
      }
      statsByTopic[data.topicId].push(data);
    });

    const topicSummaries = topicsSnapshot.docs.map(doc => {
      const topic = doc.data();
      const topicId = doc.id;
      const questionStats = statsByTopic[topicId] || [];

      // Calculate aggregate stats
      let totalAttempts = 0;
      let totalCorrect = 0;
      let totalTimeMs = 0;

      questionStats.forEach(qs => {
        totalAttempts += qs.totalAttempts || 0;
        totalCorrect += qs.correctCount || 0;
        totalTimeMs += qs.totalTimeSpentMs || 0;
      });

      const overallCorrectPercentage = totalAttempts > 0
        ? Math.round((totalCorrect / totalAttempts) * 100)
        : null;

      const avgTimePerQuestion = totalAttempts > 0
        ? Math.round(totalTimeMs / totalAttempts)
        : null;

      // Find hardest and easiest questions
      let hardestQuestion = null;
      let easiestQuestion = null;
      let lowestCorrectPct = 100;
      let highestCorrectPct = 0;

      questionStats.forEach(qs => {
        if (qs.totalAttempts >= 5) { // Only consider questions with enough data
          const correctPct = (qs.correctCount / qs.totalAttempts) * 100;
          if (correctPct < lowestCorrectPct) {
            lowestCorrectPct = correctPct;
            hardestQuestion = {
              id: qs.questionId,
              text: qs.questionText,
              correctPercentage: Math.round(correctPct)
            };
          }
          if (correctPct > highestCorrectPct) {
            highestCorrectPct = correctPct;
            easiestQuestion = {
              id: qs.questionId,
              text: qs.questionText,
              correctPercentage: Math.round(correctPct)
            };
          }
        }
      });

      return {
        id: topicId,
        name: topic.name,
        bigIdeaId: topic.bigIdeaId,
        order: topic.order,
        questionCount: questionCountByTopic[topicId] || 0,
        stats: {
          totalQuestionAttempts: totalAttempts,
          overallCorrectPercentage,
          avgTimePerQuestionMs: avgTimePerQuestion,
          hardestQuestion,
          easiestQuestion
        }
      };
    });

    res.json({ topics: topicSummaries });

  } catch (error) {
    console.error('Get stats summary error:', error);
    res.status(500).json({ error: 'Failed to fetch statistics summary' });
  }
});

module.exports = router;
