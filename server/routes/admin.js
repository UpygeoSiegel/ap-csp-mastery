const express = require('express');
const { db } = require('../firebase');
const { verifyToken, verifyAdmin } = require('../middleware/verifyToken');
const crypto = require('crypto');
const router = express.Router();

// All routes require admin authentication
router.use(verifyToken, verifyAdmin);

// Get all Big Ideas with topic counts
router.get('/big-ideas', async (req, res) => {
  try {
    const bigIdeasSnapshot = await db.collection('bigIdeas')
      .orderBy('order', 'asc')
      .get();

    const bigIdeas = [];

    for (const doc of bigIdeasSnapshot.docs) {
      const bigIdea = { id: doc.id, ...doc.data() };

      // Get topic count for this big idea
      const topicsSnapshot = await db.collection('topics')
        .where('bigIdeaId', '==', doc.id)
        .get();

      // Get question count for all topics in this big idea
      let questionCount = 0;
      for (const topicDoc of topicsSnapshot.docs) {
        const questionsSnapshot = await db.collection('questions')
          .where('topicId', '==', topicDoc.id)
          .get();
        questionCount += questionsSnapshot.size;
      }

      bigIdeas.push({
        ...bigIdea,
        topicCount: topicsSnapshot.size,
        questionCount
      });
    }

    res.json({ bigIdeas });

  } catch (error) {
    console.error('Admin get big ideas error:', error);
    res.status(500).json({ error: 'Failed to fetch big ideas' });
  }
});

// Update topic resources (admin only)
router.put('/topics/:topicId/update-resources', async (req, res) => {
  try {
    const { topicId } = req.params;
    const { resources } = req.body;

    console.log(`Updating resources for topic: ${topicId}`);
    console.log('Received resources:', JSON.stringify(resources, null, 2));

    // Validate input
    if (!resources || typeof resources !== 'object') {
      return res.status(400).json({ error: 'Resources object is required' });
    }

    // Get existing topic
    const topicRef = db.collection('topics').doc(topicId);
    const topicDoc = await topicRef.get();

    if (!topicDoc.exists) {
      console.log(`Topic NOT FOUND: ${topicId}`);
      return res.status(404).json({ error: 'Topic not found' });
    }

    const existingTopic = topicDoc.data();
    console.log(`Found topic: ${existingTopic.name || existingTopic.title}`);
    
    // Preserve existing custom teacher resources
    const existingCustomResources = existingTopic.resources?.customTeacherResources || [];
    
    // Update topic with new resources
    const updatedResources = {
      khanAcademy: resources.khanAcademy || [],
      additional: resources.additional || [],
      customTeacherResources: existingCustomResources
    };

    console.log('Final updatedResources object to save:', JSON.stringify(updatedResources, null, 2));

    await topicRef.update({
      resources: updatedResources,
      updatedAt: new Date()
    });

    console.log('Successfully updated topic in Firestore');

    res.json({
      message: 'Topic resources updated successfully',
      topicId,
      resources: updatedResources
    });

  } catch (error) {
    console.error('Admin update topic resources error:', error);
    res.status(500).json({ error: 'Failed to update topic resources' });
  }
});

// Get all topics for a Big Idea
router.get('/big-ideas/:bigIdeaId/topics', async (req, res) => {
  try {
    const { bigIdeaId } = req.params;

    const topicsSnapshot = await db.collection('topics')
      .where('bigIdeaId', '==', bigIdeaId)
      .get();

    const topics = [];

    for (const doc of topicsSnapshot.docs) {
      const topic = { id: doc.id, ...doc.data() };

      // Get question count
      const questionsSnapshot = await db.collection('questions')
        .where('topicId', '==', doc.id)
        .get();

      // Count active vs deactivated
      let activeCount = 0;
      let deactivatedCount = 0;
      questionsSnapshot.docs.forEach(qDoc => {
        if (qDoc.data().deactivated) {
          deactivatedCount++;
        } else {
          activeCount++;
        }
      });

      topics.push({
        ...topic,
        questionCount: questionsSnapshot.size,
        activeQuestions: activeCount,
        deactivatedQuestions: deactivatedCount
      });
    }

    // Sort by order asc in memory
    topics.sort((a, b) => (a.order || 0) - (b.order || 0));

    res.json({ topics });

  } catch (error) {
    console.error('Admin get topics error:', error);
    res.status(500).json({ error: 'Failed to fetch topics' });
  }
});

// Get all questions for a topic
router.get('/topics/:topicId/questions', async (req, res) => {
  try {
    const { topicId } = req.params;

    // Get topic info
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = { id: topicDoc.id, ...topicDoc.data() };

    // Get questions
    const questionsSnapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();

    const questions = questionsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Get question stats
    const statsSnapshot = await db.collection('questionStats')
      .where('topicId', '==', topicId)
      .get();

    const statsMap = {};
    statsSnapshot.docs.forEach(doc => {
      statsMap[doc.id] = doc.data();
    });

    // Combine questions with stats
    const questionsWithStats = questions.map(q => {
      const stats = statsMap[q.id];
      return {
        ...q,
        stats: stats ? {
          totalAttempts: stats.totalAttempts || 0,
          correctCount: stats.correctCount || 0,
          correctPercentage: stats.totalAttempts > 0
            ? Math.round((stats.correctCount / stats.totalAttempts) * 100)
            : null
        } : null
      };
    });

    res.json({
      topic,
      questions: questionsWithStats
    });

  } catch (error) {
    console.error('Admin get questions error:', error);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// Create a new question
router.post('/questions', async (req, res) => {
  try {
    const { topicId, text, type, options, correctAnswers, explanation, difficulty } = req.body;

    // Validation
    if (!topicId || !text || !type || !options || !correctAnswers) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!['multiple_choice', 'multiple_select'].includes(type)) {
      return res.status(400).json({ error: 'Invalid question type' });
    }

    if (!Array.isArray(options) || options.length < 2) {
      return res.status(400).json({ error: 'At least 2 options are required' });
    }

    if (!Array.isArray(correctAnswers) || correctAnswers.length === 0) {
      return res.status(400).json({ error: 'At least 1 correct answer is required' });
    }

    // Verify topic exists
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    // Generate IDs for options if not provided
    const processedOptions = options.map(opt => ({
      id: opt.id || crypto.randomUUID(),
      text: opt.text
    }));

    const questionData = {
      topicId,
      text,
      type,
      options: processedOptions,
      correctAnswers,
      explanation: explanation || '',
      difficulty: difficulty || 'medium',
      deactivated: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const questionRef = await db.collection('questions').add(questionData);

    res.status(201).json({
      id: questionRef.id,
      ...questionData
    });

  } catch (error) {
    console.error('Admin create question error:', error);
    res.status(500).json({ error: 'Failed to create question' });
  }
});

// Update a question
router.put('/questions/:questionId', async (req, res) => {
  try {
    const { questionId } = req.params;
    const { text, type, options, correctAnswers, explanation, difficulty, deactivated } = req.body;

    // Get existing question
    const questionRef = db.collection('questions').doc(questionId);
    const questionDoc = await questionRef.get();

    if (!questionDoc.exists) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const updateData = {
      updatedAt: new Date()
    };

    if (text !== undefined) updateData.text = text;
    if (type !== undefined) {
      if (!['multiple_choice', 'multiple_select'].includes(type)) {
        return res.status(400).json({ error: 'Invalid question type' });
      }
      updateData.type = type;
    }
    if (options !== undefined) {
      // Generate IDs for options if not provided
      updateData.options = options.map(opt => ({
        id: opt.id || crypto.randomUUID(),
        text: opt.text
      }));
    }
    if (correctAnswers !== undefined) updateData.correctAnswers = correctAnswers;
    if (explanation !== undefined) updateData.explanation = explanation;
    if (difficulty !== undefined) updateData.difficulty = difficulty;
    if (deactivated !== undefined) updateData.deactivated = deactivated;

    await questionRef.update(updateData);

    // Get updated question
    const updatedDoc = await questionRef.get();

    res.json({
      id: questionId,
      ...updatedDoc.data()
    });

  } catch (error) {
    console.error('Admin update question error:', error);
    res.status(500).json({ error: 'Failed to update question' });
  }
});

// Delete a question
router.delete('/questions/:questionId', async (req, res) => {
  try {
    const { questionId } = req.params;

    // Get existing question
    const questionRef = db.collection('questions').doc(questionId);
    const questionDoc = await questionRef.get();

    if (!questionDoc.exists) {
      return res.status(404).json({ error: 'Question not found' });
    }

    // Delete the question
    await questionRef.delete();

    // Also delete associated stats
    const statsRef = db.collection('questionStats').doc(questionId);
    const statsDoc = await statsRef.get();
    if (statsDoc.exists) {
      await statsRef.delete();
    }

    res.json({ message: 'Question deleted successfully' });

  } catch (error) {
    console.error('Admin delete question error:', error);
    res.status(500).json({ error: 'Failed to delete question' });
  }
});

// Toggle question active/deactivated status
router.post('/questions/:questionId/toggle', async (req, res) => {
  try {
    const { questionId } = req.params;

    const questionRef = db.collection('questions').doc(questionId);
    const questionDoc = await questionRef.get();

    if (!questionDoc.exists) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const currentData = questionDoc.data();
    const newDeactivated = !currentData.deactivated;

    await questionRef.update({
      deactivated: newDeactivated,
      updatedAt: new Date()
    });

    res.json({
      id: questionId,
      deactivated: newDeactivated,
      message: newDeactivated ? 'Question deactivated' : 'Question activated'
    });

  } catch (error) {
    console.error('Admin toggle question error:', error);
    res.status(500).json({ error: 'Failed to toggle question status' });
  }
});

// Bulk import questions
router.post('/questions/bulk', async (req, res) => {
  try {
    const { topicId, questions } = req.body;

    if (!topicId || !questions || !Array.isArray(questions)) {
      return res.status(400).json({ error: 'Topic ID and questions array are required' });
    }

    // Verify topic exists
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const batch = db.batch();
    const createdQuestions = [];

    for (const q of questions) {
      if (!q.text || !q.type || !q.options || !q.correctAnswers) {
        continue; // Skip invalid questions
      }

      const processedOptions = q.options.map(opt => ({
        id: opt.id || crypto.randomUUID(),
        text: opt.text
      }));

      const questionData = {
        topicId,
        text: q.text,
        type: q.type,
        options: processedOptions,
        correctAnswers: q.correctAnswers,
        explanation: q.explanation || '',
        difficulty: q.difficulty || 'medium',
        deactivated: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const questionRef = db.collection('questions').doc();
      batch.set(questionRef, questionData);
      createdQuestions.push({ id: questionRef.id, ...questionData });
    }

    await batch.commit();

    res.status(201).json({
      message: `Successfully created ${createdQuestions.length} questions`,
      questions: createdQuestions
    });

  } catch (error) {
    console.error('Admin bulk import error:', error);
    res.status(500).json({ error: 'Failed to import questions' });
  }
});


// Teacher Management
router.get('/teachers', async (req, res) => {
  try {
    const teachersSnapshot = await db.collection('users')
      .where('role', '==', 'teacher')
      .get();

    const teachers = teachersSnapshot.docs.map(doc => ({
      uid: doc.id,
      ...doc.data()
    }));

    // Sort by createdAt desc in memory to avoid needing a composite index
    teachers.sort((a, b) => {
      const dateA = a.createdAt ? (a.createdAt.toDate ? a.createdAt.toDate() : new Date(a.createdAt)) : 0;
      const dateB = b.createdAt ? (b.createdAt.toDate ? b.createdAt.toDate() : new Date(b.createdAt)) : 0;
      return dateB - dateA;
    });

    res.json({ teachers });

  } catch (error) {
    console.error('Admin get teachers error:', error);
    res.status(500).json({ error: 'Failed to fetch teachers' });
  }
});

// Flag Management
router.get('/flags', async (req, res) => {
  try {
    const flagsSnapshot = await db.collection('questionFlags')
      .where('status', '==', 'pending')
      .get();

    const flags = [];
    for (const doc of flagsSnapshot.docs) {
      const flag = { id: doc.id, ...doc.data() };
      
      // Get question details safely
      try {
        const questionDoc = await db.collection('questions').doc(flag.questionId).get();
        if (questionDoc.exists) {
          flag.question = { id: questionDoc.id, ...questionDoc.data() };
        } else {
          flag.question = { text: '[Question Deleted]' };
        }
      } catch (e) {
        flag.question = { text: '[Error loading question]' };
      }
      
      // Get topic details safely
      try {
        const topicDoc = await db.collection('topics').doc(flag.topicId).get();
        if (topicDoc.exists) {
          flag.topicName = topicDoc.data().name || topicDoc.data().title;
        }
      } catch (e) {}
      
      flags.push(flag);
    }

    // Sort by createdAt desc in memory
    flags.sort((a, b) => {
      const dateA = a.createdAt ? (a.createdAt.toDate ? a.createdAt.toDate() : new Date(a.createdAt)) : 0;
      const dateB = b.createdAt ? (b.createdAt.toDate ? b.createdAt.toDate() : new Date(b.createdAt)) : 0;
      return dateB - dateA;
    });

    res.json({ flags });

  } catch (error) {
    console.error('Admin get flags error:', error);
    res.status(500).json({ error: 'Failed to fetch question flags' });
  }
});

router.post('/flags/:flagId/resolve', async (req, res) => {
  try {
    const { flagId } = req.params;
    const { status, adminComment } = req.body; // status: 'resolved' or 'dismissed'

    if (!['resolved', 'dismissed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    await db.collection('questionFlags').doc(flagId).update({
      status,
      adminComment: adminComment || '',
      resolvedAt: new Date(),
      updatedAt: new Date()
    });

    res.json({ message: `Flag ${status} successfully` });

  } catch (error) {
    console.error('Admin resolve flag error:', error);
    res.status(500).json({ error: 'Failed to resolve flag' });
  }
});

module.exports = router;
