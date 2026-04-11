const express = require('express');
const { db } = require('../firebase');
const { verifyToken } = require('../middleware/verifyToken');
const crypto = require('crypto');
const router = express.Router();

// All routes require authentication
router.use(verifyToken);

// Get all topics organized by Big Ideas (for question management)
router.get('/', async (req, res) => {
  try {
    const { subject } = req.query;

    // Get Big Ideas
    let bigIdeasQuery = db.collection('bigIdeas').orderBy('order', 'asc');
    if (subject) {
      bigIdeasQuery = bigIdeasQuery.where('subject', '==', subject);
    }
    const bigIdeasSnapshot = await bigIdeasQuery.get();

    // Get all topics
    const topicsSnapshot = await db.collection('topics')
      .orderBy('order', 'asc')
      .get();

    // Organize topics by Big Idea
    const bigIdeasWithTopics = [];
    
    for (const bigIdeaDoc of bigIdeasSnapshot.docs) {
      const bigIdea = { id: bigIdeaDoc.id, ...bigIdeaDoc.data() };
      
      // Get topics for this Big Idea
      const bigIdeaTopics = topicsSnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(topic => topic.bigIdea === bigIdea.order)
        .map(topic => ({
          ...topic,
          topicCode: topic.id.replace('topic-', ''), // Convert topic-3.1 to 3.1
          title: getTopicTitle(topic.id) // Get proper title
        }));

      if (bigIdeaTopics.length > 0) {
        bigIdeasWithTopics.push({
          ...bigIdea,
          name: bigIdea.name || `Big Idea ${bigIdea.order}`,
          topics: bigIdeaTopics
        });
      }
    }

    res.json({ bigIdeas: bigIdeasWithTopics });

  } catch (error) {
    console.error('Get topics error:', error);
    res.status(500).json({ error: 'Failed to fetch topics' });
  }
});

// Helper function to get topic titles
function getTopicTitle(topicId) {
  const topicTitles = {
    // Big Idea 1
    'topic-1.1': 'Collaboration',
    'topic-1.2': 'Program Function and Purpose',
    'topic-1.3': 'Program Design and Development',
    'topic-1.4': 'Identifying and Correcting Errors',
    // Big Idea 2
    'topic-2.1': 'Binary Numbers',
    'topic-2.2': 'Data Compression',
    'topic-2.3': 'Extracting Information from Data',
    'topic-2.4': 'Using Programs with Data',
    // Big Idea 3
    'topic-3.1': 'Variables and Assignment',
    'topic-3.2': 'Data Abstraction',
    'topic-3.3': 'Mathematical Expressions',
    'topic-3.4': 'Strings',
    'topic-3.5': 'Boolean Expressions',
    'topic-3.6': 'Conditionals',
    'topic-3.7': 'Nested Conditionals',
    'topic-3.8': 'Iteration',
    'topic-3.9': 'Developing Algorithms',
    'topic-3.10': 'Lists',
    'topic-3.11': 'Binary Search',
    'topic-3.12': 'Calling Procedures',
    'topic-3.13': 'Developing Procedures',
    'topic-3.14': 'Libraries',
    'topic-3.15': 'Random Values',
    'topic-3.16': 'Simulations',
    'topic-3.17': 'Algorithmic Efficiency',
    'topic-3.18': 'Undecidable Problems',
    // Big Idea 4
    'topic-4.1': 'The Internet',
    'topic-4.2': 'Fault Tolerance',
    'topic-4.3': 'Parallel and Distributed Computing',
    // Big Idea 5
    'topic-5.1': 'Beneficial and Harmful Effects',
    'topic-5.2': 'Digital Divide',
    'topic-5.3': 'Computing Bias',
    'topic-5.4': 'Crowdsourcing',
    'topic-5.5': 'Legal and Ethical Concerns',
    'topic-5.6': 'Safe Computing'
  };
  
  return topicTitles[topicId] || topicId.replace('topic-', '').replace('-', '.');
}

// Get all Big Ideas
router.get('/big-ideas', async (req, res) => {
  try {
    const { classId } = req.query;
    
    let query = db.collection('bigIdeas');
    let shouldSort = true;
    
    // If classId is provided, filter by the class's subject
    if (classId) {
      const classDoc = await db.collection('classes').doc(classId).get();
      if (classDoc.exists) {
        const classData = classDoc.data();
        const subject = classData.subject || 'ap-csp'; // Default to ap-csp for legacy
        query = query.where('subject', '==', subject);
      }
    } else {
      query = query.orderBy('order', 'asc');
      shouldSort = false;
    }

    const bigIdeasSnapshot = await query.get();

    let bigIdeas = bigIdeasSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    if (shouldSort) {
      bigIdeas.sort((a, b) => (a.order || 0) - (b.order || 0));
    }

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
      .get();

    const topicsDocs = topicsSnapshot.docs.sort((a, b) => (a.data().order || 0) - (b.data().order || 0));
    const topics = [];

    // First pass: collect all progress data
    const progressMap = {};
    if (classId && req.user.role === 'student') {
      for (const topicDoc of topicsDocs) {
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

    for (let i = 0; i < topicsDocs.length; i++) {
      const topicDoc = topicsDocs[i];
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

            // Manual Mode Override: Even if passed or wait time is over, must be manually unlocked for retake
            if (classSettings.progressionMode === 'manual' && !progress.retakeUnlocked && status === 'passed') {
              // If already passed and not explicitly unlocked for retake, it's not "available" for quiz
              // But we still want them to be able to see resources, so we keep status as 'passed'
            }
          }
        } else if (classSettings.progressionMode === 'unlocked' || topic.order === 1) {
          // All topics available in unlocked mode, or first topic is always available
          // EXCEPT in manual mode, where even the first topic must be unlocked
          if (classSettings.progressionMode === 'manual' && topic.order === 1) {
             status = 'locked';
          } else {
             status = 'available';
          }
        } else if (classSettings.progressionMode === 'linear') {
          // Linear mode: check if previous topic is passed
          const prevTopicDoc = topicsSnapshot.docs[i - 1];
          if (prevTopicDoc) {
            const prevProgress = progressMap[prevTopicDoc.id];
            if (prevProgress && prevProgress.status === 'passed') {
              status = 'available';
            }
          }
        } else if (classSettings.progressionMode === 'manual') {
            // In manual mode, if no progress record exists, it's locked
            status = 'locked';
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
        attemptCount: attempts.length,
        retakeUnlocked: (classId && progressMap[topic.id]?.retakeUnlocked) || false
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

      // Ensure optionSelections exists
      const optionSelections = stats.optionSelections || {};

      // Calculate percentages
      const totalAttempts = stats.totalAttempts || 0;
      const correctPercentage = totalAttempts > 0
        ? Math.round(((stats.correctCount || 0) / totalAttempts) * 100)
        : null;

      const avgTimeMs = totalAttempts > 0
        ? Math.round((stats.totalTimeSpentMs || 0) / totalAttempts)
        : null;

      // Calculate option selection percentages
      const correctAnswers = question.correctAnswers || [];
      const optionStats = (question.options || []).map(option => {
        const selectionCount = optionSelections[option.id] || 0;
        const selectionPercentage = totalAttempts > 0
          ? Math.round((selectionCount / totalAttempts) * 100)
          : 0;
        const isCorrect = correctAnswers.includes(option.id);

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
        correctAnswers: correctAnswers,
        stats: {
          totalAttempts: totalAttempts,
          correctCount: stats.correctCount || 0,
          incorrectCount: stats.incorrectCount || 0,
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
    const { subject } = req.query;

    // Only teachers can view stats
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Get Big Ideas
    let bigIdeasQuery = db.collection('bigIdeas');
    if (subject) {
      bigIdeasQuery = bigIdeasQuery.where('subject', '==', subject);
    }
    
    const bigIdeasSnapshot = await bigIdeasQuery.get();
    const bigIdeas = bigIdeasSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      topics: [],
      topMissedQuestions: []
    })).sort((a, b) => (a.order || 0) - (b.order || 0));

    const allowedBigIdeaIds = bigIdeas.map(bi => bi.id);

    // Get all topics
    const topicsSnapshot = await db.collection('topics').get();
    const sortedTopics = topicsSnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => (a.order || 0) - (b.order || 0));

    // Get all question stats
    const allStatsSnapshot = await db.collection('questionStats').get();

    // Group stats by topic
    const statsByTopic = {};
    const allQuestionStats = [];
    allStatsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      allQuestionStats.push(data);
      if (!statsByTopic[data.topicId]) {
        statsByTopic[data.topicId] = [];
      }
      statsByTopic[data.topicId].push(data);
    });

    const topicSummaries = sortedTopics
      .filter(topic => allowedBigIdeaIds.includes(topic.bigIdeaId))
      .map(topic => {
        const topicId = topic.id;
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

        const avgTimePerQuestionMs = totalAttempts > 0
          ? Math.round(totalTimeMs / totalAttempts)
          : null;

        // Get Top 10 missed for this topic
        const topMissed = questionStats
          .filter(qs => (qs.totalAttempts || 0) >= 3)
          .map(qs => {
            const total = qs.totalAttempts || 1;
            const optionSelections = qs.optionSelections || {};
            const options = qs.options || [];
            const correctIds = qs.correctAnswerIds || [];

            const optionStats = options.map(opt => ({
              id: opt.id,
              text: opt.text,
              isCorrect: correctIds.includes(opt.id),
              selectionPercentage: Math.round(((optionSelections[opt.id] || 0) / total) * 100)
            }));

            return {
              id: qs.questionId,
              text: qs.questionText,
              correctPercentage: Math.round(((qs.correctCount || 0) / total) * 100),
              totalAttempts: qs.totalAttempts,
              optionStats
            };
          })
          .sort((a, b) => a.correctPercentage - b.correctPercentage)
          .slice(0, 10);

        return {
          id: topicId,
          name: topic.name,
          bigIdeaId: topic.bigIdeaId,
          order: topic.order,
          stats: {
            totalQuestionAttempts: totalAttempts,
            overallCorrectPercentage,
            avgTimePerQuestionMs,
            topMissedQuestions: topMissed
          }
        };
      });

    // Nest topics into Big Ideas and calculate Big Idea level Top 10
    bigIdeas.forEach(bi => {
      bi.topics = topicSummaries.filter(t => t.bigIdeaId === bi.id);
      
      // Calculate Top 10 for the entire Big Idea
      const biQuestionStats = allQuestionStats.filter(qs => {
        const topic = topicSummaries.find(t => t.id === qs.topicId);
        return topic && topic.bigIdeaId === bi.id;
      });

      bi.topMissedQuestions = biQuestionStats
        .filter(qs => (qs.totalAttempts || 0) >= 5)
        .map(qs => {
          const total = qs.totalAttempts || 1;
          const optionSelections = qs.optionSelections || {};
          const options = qs.options || [];
          const correctIds = qs.correctAnswerIds || [];

          const optionStats = options.map(opt => ({
            id: opt.id,
            text: opt.text,
            isCorrect: correctIds.includes(opt.id),
            selectionPercentage: Math.round(((optionSelections[opt.id] || 0) / total) * 100)
          }));

          return {
            id: qs.questionId,
            text: qs.questionText,
            correctPercentage: Math.round(((qs.correctCount || 0) / total) * 100),
            totalAttempts: qs.totalAttempts,
            topicId: qs.topicId,
            optionStats
          };
        })
        .sort((a, b) => a.correctPercentage - b.correctPercentage)
        .slice(0, 10);
    });

    res.json({ bigIdeas });

  } catch (error) {
    console.error('Get stats summary error:', error);
    res.status(500).json({ error: 'Failed to fetch statistics summary' });
  }
});

// Add custom resource to a topic (teachers only)
router.post('/:topicId/resources', async (req, res) => {
  try {
    // Only teachers can add resources
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ error: 'Access denied' });
    }

    const { topicId } = req.params;
    const { title, url, type, description } = req.body;

    if (!title || !url || !type || !description) {
      return res.status(400).json({ 
        error: 'Title, URL, type, and description are required' 
      });
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    // Validate resource type
    const validTypes = ['article', 'video', 'exercise', 'external', 'tutorial', 'document'];
    if (!validTypes.includes(type)) {
      return res.status(400).json({ 
        error: 'Type must be one of: ' + validTypes.join(', ') 
      });
    }

    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();
    const currentResources = topic.resources || { khanAcademy: [], additional: [], customTeacherResources: [] };

    // Create new resource object
    const newResource = {
      id: crypto.randomUUID(),
      title: title.trim(),
      url: url.trim(),
      type,
      description: description.trim(),
      addedBy: req.user.uid,
      addedAt: new Date()
    };

    // Add to custom teacher resources
    currentResources.customTeacherResources = currentResources.customTeacherResources || [];
    currentResources.customTeacherResources.push(newResource);

    // Update topic document
    await db.collection('topics').doc(topicId).update({
      resources: currentResources,
      updatedAt: new Date()
    });

    res.json({
      success: true,
      message: 'Resource added successfully',
      resource: newResource
    });

  } catch (error) {
    console.error('Add resource error:', error);
    res.status(500).json({ error: 'Failed to add resource' });
  }
});

// Update a custom resource (teachers only)
router.put('/:topicId/resources/:resourceId', async (req, res) => {
  try {
    // Only teachers can update resources
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ error: 'Access denied' });
    }

    const { topicId, resourceId } = req.params;
    const { title, url, type, description } = req.body;

    if (!title || !url || !type || !description) {
      return res.status(400).json({ 
        error: 'Title, URL, type, and description are required' 
      });
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    // Validate resource type
    const validTypes = ['article', 'video', 'exercise', 'external', 'tutorial', 'document'];
    if (!validTypes.includes(type)) {
      return res.status(400).json({ 
        error: 'Type must be one of: ' + validTypes.join(', ') 
      });
    }

    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();
    const currentResources = topic.resources || { khanAcademy: [], additional: [], customTeacherResources: [] };

    // Find and update the resource
    const resourceIndex = currentResources.customTeacherResources.findIndex(r => r.id === resourceId);
    
    if (resourceIndex === -1) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    // Update the resource
    currentResources.customTeacherResources[resourceIndex] = {
      ...currentResources.customTeacherResources[resourceIndex],
      title: title.trim(),
      url: url.trim(),
      type,
      description: description.trim(),
      updatedAt: new Date()
    };

    // Update topic document
    await db.collection('topics').doc(topicId).update({
      resources: currentResources,
      updatedAt: new Date()
    });

    res.json({
      success: true,
      message: 'Resource updated successfully',
      resource: currentResources.customTeacherResources[resourceIndex]
    });

  } catch (error) {
    console.error('Update resource error:', error);
    res.status(500).json({ error: 'Failed to update resource' });
  }
});

// Delete a custom resource (teachers only)
router.delete('/:topicId/resources/:resourceId', async (req, res) => {
  try {
    // Only teachers can delete resources
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ error: 'Access denied' });
    }

    const { topicId, resourceId } = req.params;

    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();
    const currentResources = topic.resources || { khanAcademy: [], additional: [], customTeacherResources: [] };

    // Find and remove the resource
    const resourceIndex = currentResources.customTeacherResources.findIndex(r => r.id === resourceId);
    
    if (resourceIndex === -1) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    // Remove the resource
    currentResources.customTeacherResources.splice(resourceIndex, 1);

    // Update topic document
    await db.collection('topics').doc(topicId).update({
      resources: currentResources,
      updatedAt: new Date()
    });

    res.json({
      success: true,
      message: 'Resource deleted successfully'
    });

  } catch (error) {
    console.error('Delete resource error:', error);
    res.status(500).json({ error: 'Failed to delete resource' });
  }
});

// Get all resources for a topic (accessible to all authenticated users)
router.get('/:topicId/resources', async (req, res) => {
  try {
    const { topicId } = req.params;

    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();
    const resources = topic.resources || { khanAcademy: [], additional: [], customTeacherResources: [] };

    res.json({
      topicId,
      topicName: topic.name,
      resources
    });

  } catch (error) {
    console.error('Get resources error:', error);
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
});

module.exports = router;
