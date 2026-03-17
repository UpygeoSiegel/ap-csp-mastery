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

    // Get topic with all questions
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Separate AI-generated and custom questions
    const aiQuestions = topic.questions.filter(q => !q.isCustom);
    const customQuestions = topic.questions.filter(q => q.isCustom);

    res.json({
      topicId,
      topicName: topic.name,
      topicUnit: topic.unit,
      aiQuestions,
      customQuestions,
      totalQuestions: topic.questions.length,
      activeQuestions: topic.questions.filter(q => !q.deactivated).length
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

    // Get topic document
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Create new question
    const newQuestion = {
      id: crypto.randomUUID(),
      text: text.trim(),
      type,
      options,
      correctAnswers,
      explanation: explanation.trim(),
      isCustom: true,
      addedBy: teacherId,
      addedAt: new Date(),
      deactivated: false
    };

    // Add question to topic
    const updatedQuestions = [...topic.questions, newQuestion];

    await db.collection('topics').doc(topicId).update({
      questions: updatedQuestions,
      updatedAt: new Date()
    });

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

    // Get topic document
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Find the question
    const questionIndex = topic.questions.findIndex(q => q.id === questionId);
    if (questionIndex === -1) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const question = topic.questions[questionIndex];

    // Only allow editing custom questions added by this teacher
    if (!question.isCustom || question.addedBy !== teacherId) {
      return res.status(403).json({ error: 'Can only edit your own custom questions' });
    }

    // Validate input (same validation as POST)
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

    const updatedQuestions = [...topic.questions];
    updatedQuestions[questionIndex] = updatedQuestion;

    await db.collection('topics').doc(topicId).update({
      questions: updatedQuestions,
      updatedAt: new Date()
    });

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

    // Get topic document
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Find the question
    const questionIndex = topic.questions.findIndex(q => q.id === questionId);
    if (questionIndex === -1) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const question = topic.questions[questionIndex];

    // For custom questions, only the creator can deactivate
    if (question.isCustom && question.addedBy !== teacherId) {
      return res.status(403).json({ error: 'Can only modify your own custom questions' });
    }

    // Toggle deactivated status
    const updatedQuestion = {
      ...question,
      deactivated: !question.deactivated,
      deactivatedBy: !question.deactivated ? teacherId : null,
      deactivatedAt: !question.deactivated ? new Date() : null
    };

    const updatedQuestions = [...topic.questions];
    updatedQuestions[questionIndex] = updatedQuestion;

    // Check that we still have enough active questions
    const activeQuestions = updatedQuestions.filter(q => !q.deactivated);
    if (activeQuestions.length < 5) {
      return res.status(400).json({ 
        error: 'Cannot deactivate question: at least 5 active questions are required for quizzes' 
      });
    }

    await db.collection('topics').doc(topicId).update({
      questions: updatedQuestions,
      updatedAt: new Date()
    });

    res.json({
      message: `Question ${updatedQuestion.deactivated ? 'deactivated' : 'reactivated'} successfully`,
      question: updatedQuestion
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

    // Get topic document
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Find the question
    const questionIndex = topic.questions.findIndex(q => q.id === questionId);
    if (questionIndex === -1) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const question = topic.questions[questionIndex];

    // Only allow deleting custom questions added by this teacher
    if (!question.isCustom || question.addedBy !== teacherId) {
      return res.status(403).json({ error: 'Can only delete your own custom questions' });
    }

    // Remove the question
    const updatedQuestions = topic.questions.filter(q => q.id !== questionId);

    // Check that we still have enough active questions
    const activeQuestions = updatedQuestions.filter(q => !q.deactivated);
    if (activeQuestions.length < 5) {
      return res.status(400).json({ 
        error: 'Cannot delete question: at least 5 active questions are required for quizzes' 
      });
    }

    await db.collection('topics').doc(topicId).update({
      questions: updatedQuestions,
      updatedAt: new Date()
    });

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

    // Analyze question usage and performance
    const questionStats = {};

    // Get all progress records that include attempts for this topic
    const progressSnapshot = await db.collection('studentProgress')
      .where('topicId', '==', topicId)
      .get();

    // Initialize stats for all questions
    topic.questions.forEach(q => {
      questionStats[q.id] = {
        id: q.id,
        text: q.text.substring(0, 100) + '...', // Truncated text
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
    const totalQuestions = topic.questions.length;
    const activeQuestions = topic.questions.filter(q => !q.deactivated).length;
    const customQuestions = topic.questions.filter(q => q.isCustom).length;
    const aiQuestions = topic.questions.filter(q => !q.isCustom).length;

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

// Bulk import questions (for future enhancement)
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

    // Process questions
    const newQuestions = questions.map(q => ({
      id: crypto.randomUUID(),
      text: q.text.trim(),
      type: q.type,
      options: q.options,
      correctAnswers: q.correctAnswers,
      explanation: q.explanation.trim(),
      isCustom: true,
      addedBy: teacherId,
      addedAt: new Date(),
      deactivated: false
    }));

    // Add questions to topic
    const updatedQuestions = [...topic.questions, ...newQuestions];

    await db.collection('topics').doc(topicId).update({
      questions: updatedQuestions,
      updatedAt: new Date()
    });

    res.status(201).json({
      message: `${newQuestions.length} questions imported successfully`,
      importedQuestions: newQuestions.length,
      totalQuestions: updatedQuestions.length
    });

  } catch (error) {
    console.error('Bulk import error:', error);
    res.status(500).json({ error: 'Failed to import questions' });
  }
});

module.exports = router;