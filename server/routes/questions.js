const express = require('express');
const { db } = require('../firebase');
const { verifyToken, verifyTeacher } = require('../middleware/verifyToken');
const crypto = require('crypto');
const router = express.Router();

// All routes require teacher authentication
router.use(verifyToken, verifyTeacher);

// Get all questions for a topic
router.get('/:topicId', async (req, res) => {
  try {
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

    // Separate AI-generated and custom questions
    const aiQuestions = questions.filter(q => !q.isCustom);
    const customQuestions = questions.filter(q => q.isCustom);

    res.json({
      topicId,
      topicName: topic.name,
      topicUnit: topic.unit,
      aiQuestions,
      customQuestions,
      totalQuestions: questions.length,
      activeQuestions: questions.filter(q => !q.deactivated).length
    });

  } catch (error) {
    console.error('Get questions error:', error);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// Add custom question to a topic
router.post('/:topicId', async (req, res) => {
  try {
    const { topicId } = req.params;
    const { text, type, options, correctAnswers, explanation } = req.body;
    const teacherId = req.user.uid;

    // Validate input
    if (!text || !type || !options || !correctAnswers || !explanation) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!['multiple_choice', 'multiple_select'].includes(type)) {
      return res.status(400).json({ error: 'Invalid question type' });
    }

    if (!Array.isArray(options) || options.length < 2) {
      return res.status(400).json({ error: 'At least 2 options are required' });
    }

    if (!Array.isArray(correctAnswers) || correctAnswers.length === 0) {
      return res.status(400).json({ error: 'At least one correct answer is required' });
    }

    // Validate options format
    for (const option of options) {
      if (!option.id || !option.text) {
        return res.status(400).json({ error: 'Each option must have an id and text' });
      }
    }

    // Validate correct answers exist in options
    const optionIds = options.map(opt => opt.id);
    for (const correctId of correctAnswers) {
      if (!optionIds.includes(correctId)) {
        return res.status(400).json({ error: 'Correct answer IDs must match option IDs' });
      }
    }

    // For multiple choice, only one correct answer allowed
    if (type === 'multiple_choice' && correctAnswers.length > 1) {
      return res.status(400).json({ error: 'Multiple choice questions can only have one correct answer' });
    }

    // Get topic document to get metadata
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Create new question in questions collection
    const questionId = crypto.randomUUID();
    const newQuestion = {
      id: questionId,
      text: text.trim(),
      type,
      options,
      correctAnswers,
      explanation: explanation.trim(),
      topicId,
      topicName: topic.name,
      bigIdeaId: topic.bigIdeaId,
      isCustom: true,
      addedBy: teacherId,
      addedAt: new Date(),
      deactivated: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    await db.collection('questions').doc(questionId).set(newQuestion);

    res.status(201).json({
      message: 'Question added successfully',
      question: newQuestion
    });

  } catch (error) {
    console.error('Add question error:', error);
    res.status(500).json({ error: 'Failed to add question' });
  }
});

// Update a custom question
router.put('/:topicId/:questionId', async (req, res) => {
  try {
    const { topicId, questionId } = req.params;
    const { text, type, options, correctAnswers, explanation } = req.body;
    const teacherId = req.user.uid;

    // Get question document
    const questionDoc = await db.collection('questions').doc(questionId).get();
    if (!questionDoc.exists) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const question = questionDoc.data();

    // Verify question belongs to topic
    if (question.topicId !== topicId) {
      return res.status(400).json({ error: 'Question does not belong to this topic' });
    }

    // Only allow editing custom questions added by this teacher
    if (!question.isCustom || question.addedBy !== teacherId) {
      return res.status(403).json({ error: 'Can only edit your own custom questions' });
    }

    // Validate input
    if (!text || !type || !options || !correctAnswers || !explanation) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!['multiple_choice', 'multiple_select'].includes(type)) {
      return res.status(400).json({ error: 'Invalid question type' });
    }

    if (!Array.isArray(options) || options.length < 2) {
      return res.status(400).json({ error: 'At least 2 options are required' });
    }

    if (!Array.isArray(correctAnswers) || correctAnswers.length === 0) {
      return res.status(400).json({ error: 'At least one correct answer is required' });
    }

    for (const option of options) {
      if (!option.id || !option.text) {
        return res.status(400).json({ error: 'Each option must have an id and text' });
      }
    }

    const optionIds = options.map(opt => opt.id);
    for (const correctId of correctAnswers) {
      if (!optionIds.includes(correctId)) {
        return res.status(400).json({ error: 'Correct answer IDs must match option IDs' });
      }
    }

    if (type === 'multiple_choice' && correctAnswers.length > 1) {
      return res.status(400).json({ error: 'Multiple choice questions can only have one correct answer' });
    }

    // Update the question
    const updatedQuestion = {
      ...question,
      text: text.trim(),
      type,
      options,
      correctAnswers,
      explanation: explanation.trim(),
      updatedAt: new Date()
    };

    await db.collection('questions').doc(questionId).update(updatedQuestion);

    res.json({
      message: 'Question updated successfully',
      question: updatedQuestion
    });

  } catch (error) {
    console.error('Update question error:', error);
    res.status(500).json({ error: 'Failed to update question' });
  }
});

// Deactivate/reactivate a question
router.patch('/:topicId/:questionId/toggle', async (req, res) => {
  try {
    const { topicId, questionId } = req.params;
    const teacherId = req.user.uid;

    // Get question document
    const questionDoc = await db.collection('questions').doc(questionId).get();
    if (!questionDoc.exists) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const question = questionDoc.data();

    // Verify question belongs to topic
    if (question.topicId !== topicId) {
      return res.status(400).json({ error: 'Question does not belong to this topic' });
    }

    // For custom questions, only the creator can deactivate
    if (question.isCustom && question.addedBy !== teacherId) {
      return res.status(403).json({ error: 'Can only modify your own custom questions' });
    }

    // Check that we still have enough active questions if deactivating
    if (!question.deactivated) {
      const activeQuestionsSnapshot = await db.collection('questions')
        .where('topicId', '==', topicId)
        .where('deactivated', '==', false)
        .get();

      if (activeQuestionsSnapshot.size <= 5) {
        return res.status(400).json({
          error: 'Cannot deactivate question: at least 5 active questions are required for quizzes'
        });
      }
    }

    // Toggle deactivated status
    const updatedQuestion = {
      deactivated: !question.deactivated,
      deactivatedBy: !question.deactivated ? teacherId : null,
      deactivatedAt: !question.deactivated ? new Date() : null,
      updatedAt: new Date()
    };

    await db.collection('questions').doc(questionId).update(updatedQuestion);

    res.json({
      message: `Question ${updatedQuestion.deactivated ? 'deactivated' : 'reactivated'} successfully`,
      question: { ...question, ...updatedQuestion }
    });

  } catch (error) {
    console.error('Toggle question error:', error);
    res.status(500).json({ error: 'Failed to toggle question' });
  }
});

// Delete a custom question (hard delete)
router.delete('/:topicId/:questionId', async (req, res) => {
  try {
    const { topicId, questionId } = req.params;
    const teacherId = req.user.uid;

    // Get question document
    const questionDoc = await db.collection('questions').doc(questionId).get();
    if (!questionDoc.exists) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const question = questionDoc.data();

    // Verify question belongs to topic
    if (question.topicId !== topicId) {
      return res.status(400).json({ error: 'Question does not belong to this topic' });
    }

    // Only allow deleting custom questions added by this teacher
    if (!question.isCustom || question.addedBy !== teacherId) {
      return res.status(403).json({ error: 'Can only delete your own custom questions' });
    }

    // Check that we still have enough active questions
    const activeQuestionsSnapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .where('deactivated', '==', false)
      .get();

    // Count how many will remain (exclude the one being deleted)
    const remainingActive = activeQuestionsSnapshot.docs.filter(doc => doc.id !== questionId).length;
    if (remainingActive < 5) {
      return res.status(400).json({
        error: 'Cannot delete question: at least 5 active questions are required for quizzes'
      });
    }

    // Delete the question
    await db.collection('questions').doc(questionId).delete();

    res.json({ message: 'Question deleted successfully' });

  } catch (error) {
    console.error('Delete question error:', error);
    res.status(500).json({ error: 'Failed to delete question' });
  }
});

// Get question statistics for a topic
router.get('/:topicId/stats', async (req, res) => {
  try {
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

    // Analyze question usage and performance
    const questionStats = {};

    // Get all progress records that include attempts for this topic
    const progressSnapshot = await db.collection('studentProgress')
      .where('topicId', '==', topicId)
      .get();

    // Initialize stats for all questions
    questions.forEach(q => {
      questionStats[q.id] = {
        id: q.id,
        text: q.text.substring(0, 100) + '...',
        type: q.type,
        isCustom: q.isCustom,
        deactivated: q.deactivated || false,
        timesUsed: 0,
        timesCorrect: 0,
        correctRate: 0
      };
    });

    // Process all attempts
    progressSnapshot.docs.forEach(doc => {
      const progress = doc.data();
      if (progress.attempts) {
        progress.attempts.forEach(attempt => {
          if (attempt.answers) {
            attempt.answers.forEach(answer => {
              const questionId = answer.questionId;
              if (questionStats[questionId]) {
                questionStats[questionId].timesUsed++;
                if (answer.correct) {
                  questionStats[questionId].timesCorrect++;
                }
              }
            });
          }
        });
      }
    });

    // Calculate correct rates
    Object.values(questionStats).forEach(stat => {
      if (stat.timesUsed > 0) {
        stat.correctRate = Math.round((stat.timesCorrect / stat.timesUsed) * 100);
      }
    });

    // Summary statistics
    const totalQuestions = questions.length;
    const activeQuestions = questions.filter(q => !q.deactivated).length;
    const customQuestions = questions.filter(q => q.isCustom).length;
    const aiQuestions = questions.filter(q => !q.isCustom).length;

    const usedQuestions = Object.values(questionStats).filter(s => s.timesUsed > 0).length;
    const averageCorrectRate = usedQuestions > 0 ?
      Math.round(Object.values(questionStats)
        .filter(s => s.timesUsed > 0)
        .reduce((sum, s) => sum + s.correctRate, 0) / usedQuestions) : 0;

    res.json({
      topicId,
      topicName: topic.name,
      summary: {
        totalQuestions,
        activeQuestions,
        customQuestions,
        aiQuestions,
        usedQuestions,
        averageCorrectRate
      },
      questionStats: Object.values(questionStats).sort((a, b) => b.timesUsed - a.timesUsed)
    });

  } catch (error) {
    console.error('Get question stats error:', error);
    res.status(500).json({ error: 'Failed to fetch question statistics' });
  }
});

// Bulk import questions
router.post('/:topicId/bulk-import', async (req, res) => {
  try {
    const { topicId } = req.params;
    const { questions } = req.body;
    const teacherId = req.user.uid;

    if (!Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: 'Questions array is required' });
    }

    // Validate all questions first
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.text || !q.type || !q.options || !q.correctAnswers || !q.explanation) {
        return res.status(400).json({ error: `Question ${i + 1}: All fields are required` });
      }

      if (!['multiple_choice', 'multiple_select'].includes(q.type)) {
        return res.status(400).json({ error: `Question ${i + 1}: Invalid question type` });
      }

      if (q.type === 'multiple_choice' && q.correctAnswers.length > 1) {
        return res.status(400).json({ error: `Question ${i + 1}: Multiple choice can only have one correct answer` });
      }
    }

    // Get topic document
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Process and add questions to collection
    const batch = db.batch();
    const newQuestions = [];

    for (const q of questions) {
      const questionId = crypto.randomUUID();
      const newQuestion = {
        id: questionId,
        text: q.text.trim(),
        type: q.type,
        options: q.options,
        correctAnswers: q.correctAnswers,
        explanation: q.explanation.trim(),
        topicId,
        topicName: topic.name,
        bigIdeaId: topic.bigIdeaId,
        isCustom: true,
        addedBy: teacherId,
        addedAt: new Date(),
        deactivated: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      batch.set(db.collection('questions').doc(questionId), newQuestion);
      newQuestions.push(newQuestion);
    }

    await batch.commit();

    // Get total question count
    const totalQuestionsSnapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();

    res.status(201).json({
      message: `${newQuestions.length} questions imported successfully`,
      importedQuestions: newQuestions.length,
      totalQuestions: totalQuestionsSnapshot.size
    });

  } catch (error) {
    console.error('Bulk import error:', error);
    res.status(500).json({ error: 'Failed to import questions' });
  }
});

module.exports = router;
