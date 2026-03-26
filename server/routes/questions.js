const express = require('express');
const { db, bucket } = require('../firebase');
const { verifyToken, verifyTeacher } = require('../middleware/verifyToken');
const crypto = require('crypto');
const multer = require('multer');
const router = express.Router();

// Configure multer for image uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// All routes require teacher authentication
router.use(verifyToken, verifyTeacher);

// Get all questions for a topic (with teacher-specific activation status)
router.get('/:topicId', async (req, res) => {
  try {
    const { topicId } = req.params;
    const teacherId = req.user.uid;

    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Get all questions for this topic
    const questionsSnapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();

    // Get teacher's question preferences
    const teacherPrefsSnapshot = await db.collection('teacherQuestionPreferences')
      .where('teacherId', '==', teacherId)
      .where('topicId', '==', topicId)
      .get();

    const teacherPrefs = {};
    teacherPrefsSnapshot.forEach(doc => {
      const pref = doc.data();
      teacherPrefs[pref.questionId] = pref;
    });

    // Get question activation counts
    const activationCountsSnapshot = await db.collection('teacherQuestionPreferences')
      .where('topicId', '==', topicId)
      .where('isActive', '==', true)
      .get();

    const activationCounts = {};
    activationCountsSnapshot.forEach(doc => {
      const pref = doc.data();
      activationCounts[pref.questionId] = (activationCounts[pref.questionId] || 0) + 1;
    });

    const questions = questionsSnapshot.docs.map(doc => {
      const question = { id: doc.id, ...doc.data() };
      const teacherPref = teacherPrefs[question.id];
      
      return {
        ...question,
        // Teacher-specific activation status
        isActiveForTeacher: teacherPref?.isActive ?? (question.isTeacherMade ? false : true),
        // Global activation count (popularity)
        activationCount: activationCounts[question.id] || 0,
        // Whether this teacher can edit the question
        canEdit: question.isTeacherMade && question.createdBy === teacherId,
        // Whether this teacher created it
        createdByCurrentTeacher: question.createdBy === teacherId
      };
    });

    // Separate and sort questions
    const systemQuestions = questions
      .filter(q => !q.isTeacherMade)
      .sort((a, b) => {
        // Sort by activation count, then by creation date (newest first)
        if (b.activationCount !== a.activationCount) {
          return b.activationCount - a.activationCount;
        }
        return (b.createdAt?.toDate?.() || new Date(0)) - (a.createdAt?.toDate?.() || new Date(0));
      });
      
    const teacherMadeQuestions = questions
      .filter(q => q.isTeacherMade)
      .sort((a, b) => {
        // Sort by activation count, then by creation date (newest first)
        if (b.activationCount !== a.activationCount) {
          return b.activationCount - a.activationCount;
        }
        return (b.createdAt?.toDate?.() || new Date(0)) - (a.createdAt?.toDate?.() || new Date(0));
      });
      
    const myQuestions = questions
      .filter(q => q.createdByCurrentTeacher)
      .sort((a, b) => (b.createdAt?.toDate?.() || new Date(0)) - (a.createdAt?.toDate?.() || new Date(0)));

    res.json({
      topicId,
      topicName: topic.title || topic.name,
      systemQuestions,
      teacherMadeQuestions,
      myQuestions,
      totalQuestions: questions.length,
      activeQuestionsForTeacher: questions.filter(q => q.isActiveForTeacher).length
    });

  } catch (error) {
    console.error('Get questions error:', error);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// Upload image for question
router.post('/:topicId/upload-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const teacherId = req.user.uid;
    const { topicId } = req.params;
    const fileName = `question-images/${topicId}/${teacherId}/${Date.now()}-${req.file.originalname}`;
    
    const file = bucket.file(fileName);
    const stream = file.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    stream.on('error', (error) => {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Failed to upload image' });
    });

    stream.on('finish', async () => {
      try {
        // Make the file publicly readable
        await file.makePublic();
        
        const imageUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
        
        res.json({
          message: 'Image uploaded successfully',
          imageUrl,
          fileName
        });
      } catch (error) {
        console.error('Make public error:', error);
        res.status(500).json({ error: 'Failed to make image public' });
      }
    });

    stream.end(req.file.buffer);
    
  } catch (error) {
    console.error('Upload image error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

// Add teacher-made question to a topic
router.post('/:topicId', async (req, res) => {
  try {
    const { topicId } = req.params;
    const { text, type, options, correctAnswers, explanation, hasImage, imageUrl, difficulty } = req.body;
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

    // Create new teacher-made question
    const questionId = crypto.randomUUID();
    const newQuestion = {
      id: questionId,
      text: text.trim(),
      type,
      options,
      correctAnswers,
      explanation: explanation.trim(),
      topicId,
      topic: topic.topicCode || topicId.replace('topic-', ''),
      bigIdea: topic.bigIdea || parseInt(topicId.split('-')[1].split('.')[0]),
      difficulty: difficulty || 'medium',
      hasImage: hasImage || false,
      imageUrl: imageUrl || null,
      isTeacherMade: true,
      createdBy: teacherId,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Add question to database
    await db.collection('questions').doc(questionId).set(newQuestion);
    
    // Create teacher preference record (active by default for creator)
    const prefId = crypto.randomUUID();
    const teacherPref = {
      id: prefId,
      teacherId,
      questionId,
      topicId,
      isActive: true,
      activatedAt: new Date(),
      createdAt: new Date()
    };
    
    await db.collection('teacherQuestionPreferences').doc(prefId).set(teacherPref);

    res.status(201).json({
      message: 'Teacher question added successfully',
      question: newQuestion
    });

  } catch (error) {
    console.error('Add question error:', error);
    res.status(500).json({ error: 'Failed to add question' });
  }
});

// Toggle question activation for a specific teacher
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

    // Get or create teacher preference
    const existingPrefSnapshot = await db.collection('teacherQuestionPreferences')
      .where('teacherId', '==', teacherId)
      .where('questionId', '==', questionId)
      .limit(1)
      .get();

    let currentlyActive;
    let prefDoc;
    
    if (!existingPrefSnapshot.empty) {
      prefDoc = existingPrefSnapshot.docs[0];
      currentlyActive = prefDoc.data().isActive;
    } else {
      // Default activation state: system questions are active, teacher-made are inactive
      currentlyActive = !question.isTeacherMade;
    }

    // Check minimum active questions requirement when deactivating
    if (currentlyActive) {
      const activePrefsSnapshot = await db.collection('teacherQuestionPreferences')
        .where('teacherId', '==', teacherId)
        .where('topicId', '==', topicId)
        .where('isActive', '==', true)
        .get();

      // Count all questions that would be active for this teacher
      const allQuestionsSnapshot = await db.collection('questions')
        .where('topicId', '==', topicId)
        .get();
      
      let activeCount = 0;
      allQuestionsSnapshot.forEach(doc => {
        const q = doc.data();
        const hasActivePref = activePrefsSnapshot.docs.some(pref => 
          pref.data().questionId === q.id
        );
        const hasInactivePref = activePrefsSnapshot.docs.some(pref => 
          pref.data().questionId === q.id && !pref.data().isActive
        );
        
        // Question is active if: has active pref OR (no pref and is system question)
        if (hasActivePref || (!hasInactivePref && !q.isTeacherMade)) {
          if (q.id !== questionId) { // Don't count the one being deactivated
            activeCount++;
          }
        }
      });

      if (activeCount < 5) {
        return res.status(400).json({
          error: 'Cannot deactivate question: at least 5 active questions are required for quizzes'
        });
      }
    }

    // Update or create preference
    const newActiveState = !currentlyActive;
    const prefData = {
      teacherId,
      questionId,
      topicId,
      isActive: newActiveState,
      updatedAt: new Date()
    };

    if (newActiveState) {
      prefData.activatedAt = new Date();
    } else {
      prefData.deactivatedAt = new Date();
    }

    if (prefDoc) {
      await prefDoc.ref.update(prefData);
    } else {
      prefData.id = crypto.randomUUID();
      prefData.createdAt = new Date();
      await db.collection('teacherQuestionPreferences').doc(prefData.id).set(prefData);
    }

    res.json({
      message: `Question ${newActiveState ? 'activated' : 'deactivated'} successfully`,
      questionId,
      isActive: newActiveState
    });

  } catch (error) {
    console.error('Toggle question error:', error);
    res.status(500).json({ error: 'Failed to toggle question activation' });
  }
});

// Update a teacher-made question
router.put('/:topicId/:questionId', async (req, res) => {
  try {
    const { topicId, questionId } = req.params;
    const { text, type, options, correctAnswers, explanation, hasImage, imageUrl, difficulty } = req.body;
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

    // Only allow editing teacher-made questions created by this teacher
    if (!question.isTeacherMade || question.createdBy !== teacherId) {
      return res.status(403).json({ error: 'Can only edit your own teacher-made questions' });
    }

    // Validate input (same validation as creation)
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
    const updateData = {
      text: text.trim(),
      type,
      options,
      correctAnswers,
      explanation: explanation.trim(),
      difficulty: difficulty || question.difficulty || 'medium',
      hasImage: hasImage || false,
      imageUrl: imageUrl || null,
      updatedAt: new Date()
    };

    await db.collection('questions').doc(questionId).update(updateData);

    res.json({
      message: 'Question updated successfully',
      question: { ...question, ...updateData }
    });

  } catch (error) {
    console.error('Update question error:', error);
    res.status(500).json({ error: 'Failed to update question' });
  }
});

// Get teacher question preferences for a topic
router.get('/:topicId/preferences', async (req, res) => {
  try {
    const { topicId } = req.params;
    const teacherId = req.user.uid;

    const preferencesSnapshot = await db.collection('teacherQuestionPreferences')
      .where('teacherId', '==', teacherId)
      .where('topicId', '==', topicId)
      .get();

    const preferences = {};
    preferencesSnapshot.forEach(doc => {
      const pref = doc.data();
      preferences[pref.questionId] = pref;
    });

    res.json({ preferences });

  } catch (error) {
    console.error('Get preferences error:', error);
    res.status(500).json({ error: 'Failed to fetch preferences' });
  }
});

// Delete a teacher-made question (hard delete)
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

    // Only allow deleting teacher-made questions created by this teacher
    if (!question.isTeacherMade || question.createdBy !== teacherId) {
      return res.status(403).json({ error: 'Can only delete your own teacher-made questions' });
    }

    // Check minimum active questions (same logic as toggle)
    const activePrefsSnapshot = await db.collection('teacherQuestionPreferences')
      .where('teacherId', '==', teacherId)
      .where('topicId', '==', topicId)
      .where('isActive', '==', true)
      .get();

    const allQuestionsSnapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();
    
    let activeCount = 0;
    allQuestionsSnapshot.forEach(doc => {
      const q = doc.data();
      if (q.id === questionId) return; // Don't count the one being deleted
      
      const hasActivePref = activePrefsSnapshot.docs.some(pref => 
        pref.data().questionId === q.id
      );
      const hasInactivePref = activePrefsSnapshot.docs.some(pref => 
        pref.data().questionId === q.id && !pref.data().isActive
      );
      
      if (hasActivePref || (!hasInactivePref && !q.isTeacherMade)) {
        activeCount++;
      }
    });

    if (activeCount < 5) {
      return res.status(400).json({
        error: 'Cannot delete question: at least 5 active questions are required for quizzes'
      });
    }

    // Delete the question and all related preferences
    const batch = db.batch();
    
    // Delete question
    batch.delete(db.collection('questions').doc(questionId));
    
    // Delete all teacher preferences for this question
    const prefsSnapshot = await db.collection('teacherQuestionPreferences')
      .where('questionId', '==', questionId)
      .get();
      
    prefsSnapshot.forEach(doc => {
      batch.delete(doc.ref);
    });
    
    // Delete associated image if exists
    if (question.imageUrl && question.imageUrl.includes('googleapis.com')) {
      try {
        const fileName = question.imageUrl.split('/').slice(-4).join('/');
        const file = bucket.file(fileName);
        await file.delete();
      } catch (imageError) {
        console.warn('Could not delete associated image:', imageError);
      }
    }
    
    await batch.commit();

    res.json({ message: 'Question and all preferences deleted successfully' });

  } catch (error) {
    console.error('Delete question error:', error);
    res.status(500).json({ error: 'Failed to delete question' });
  }
});

// Get questions for quiz generation (considering teacher preferences)
router.get('/:topicId/for-quiz', async (req, res) => {
  try {
    const { topicId } = req.params;
    const teacherId = req.user.uid;
    const { count = 5, difficulty = 'all' } = req.query;

    // Get all questions for this topic
    const questionsSnapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .get();

    // Get teacher preferences
    const preferencesSnapshot = await db.collection('teacherQuestionPreferences')
      .where('teacherId', '==', teacherId)
      .where('topicId', '==', topicId)
      .get();

    const teacherPrefs = {};
    preferencesSnapshot.forEach(doc => {
      const pref = doc.data();
      teacherPrefs[pref.questionId] = pref;
    });

    // Filter to active questions for this teacher
    const activeQuestions = questionsSnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(question => {
        const teacherPref = teacherPrefs[question.id];
        return teacherPref?.isActive ?? !question.isTeacherMade;
      })
      .filter(question => {
        if (difficulty === 'all') return true;
        return question.difficulty === difficulty;
      });

    // Randomly select questions
    const shuffled = activeQuestions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, parseInt(count));

    res.json({
      questions: selectedQuestions,
      totalAvailable: activeQuestions.length,
      selected: selectedQuestions.length
    });

  } catch (error) {
    console.error('Get quiz questions error:', error);
    res.status(500).json({ error: 'Failed to fetch quiz questions' });
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
        text: q.text.substring(0, 100) + (q.text.length > 100 ? '...' : ''),
        type: q.type,
        isTeacherMade: q.isTeacherMade || false,
        difficulty: q.difficulty || 'medium',
        hasImage: q.hasImage || false,
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
    const teacherMadeQuestions = questions.filter(q => q.isTeacherMade).length;
    const systemQuestions = questions.filter(q => !q.isTeacherMade).length;
    
    // Get teacher's active questions
    const teacherPrefsSnapshot = await db.collection('teacherQuestionPreferences')
      .where('teacherId', '==', req.user.uid)
      .where('topicId', '==', topicId)
      .get();

    const teacherPrefs = {};
    teacherPrefsSnapshot.forEach(doc => {
      const pref = doc.data();
      teacherPrefs[pref.questionId] = pref;
    });

    const activeQuestionsForTeacher = questions.filter(question => {
      const teacherPref = teacherPrefs[question.id];
      return teacherPref?.isActive ?? !question.isTeacherMade;
    }).length;

    const usedQuestions = Object.values(questionStats).filter(s => s.timesUsed > 0).length;
    const averageCorrectRate = usedQuestions > 0 ?
      Math.round(Object.values(questionStats)
        .filter(s => s.timesUsed > 0)
        .reduce((sum, s) => sum + s.correctRate, 0) / usedQuestions) : 0;

    res.json({
      topicId,
      topicName: topic.title || topic.name,
      summary: {
        totalQuestions,
        activeQuestionsForTeacher,
        teacherMadeQuestions,
        systemQuestions,
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

// Get community questions (teacher-made questions from other teachers)
router.get('/:topicId/community', async (req, res) => {
  try {
    const { topicId } = req.params;
    const teacherId = req.user.uid;
    const { sortBy = 'popularity' } = req.query;

    // Get all teacher-made questions for this topic (excluding own questions)
    const questionsSnapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .where('isTeacherMade', '==', true)
      .get();

    // Get activation counts for ranking
    const activationCountsSnapshot = await db.collection('teacherQuestionPreferences')
      .where('topicId', '==', topicId)
      .where('isActive', '==', true)
      .get();

    const activationCounts = {};
    activationCountsSnapshot.forEach(doc => {
      const pref = doc.data();
      activationCounts[pref.questionId] = (activationCounts[pref.questionId] || 0) + 1;
    });

    // Get current teacher's preferences
    const teacherPrefsSnapshot = await db.collection('teacherQuestionPreferences')
      .where('teacherId', '==', teacherId)
      .where('topicId', '==', topicId)
      .get();

    const teacherPrefs = {};
    teacherPrefsSnapshot.forEach(doc => {
      const pref = doc.data();
      teacherPrefs[pref.questionId] = pref;
    });

    // Filter and enhance questions
    const communityQuestions = questionsSnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(question => question.createdBy !== teacherId) // Exclude own questions
      .map(question => ({
        ...question,
        activationCount: activationCounts[question.id] || 0,
        isActiveForTeacher: teacherPrefs[question.id]?.isActive || false,
        canActivate: !teacherPrefs[question.id] || !teacherPrefs[question.id].isActive
      }));

    // Sort based on criteria
    if (sortBy === 'popularity') {
      communityQuestions.sort((a, b) => b.activationCount - a.activationCount);
    } else if (sortBy === 'recent') {
      communityQuestions.sort((a, b) => b.createdAt - a.createdAt);
    } else if (sortBy === 'difficulty') {
      const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
      communityQuestions.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
    }

    res.json({
      topicId,
      questions: communityQuestions,
      totalCommunityQuestions: communityQuestions.length
    });

  } catch (error) {
    console.error('Get community questions error:', error);
    res.status(500).json({ error: 'Failed to fetch community questions' });
  }
});

// Bulk import teacher-made questions
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

    // Process and add questions in batches
    const batch = db.batch();
    const newQuestions = [];
    const newPreferences = [];

    for (const q of questions) {
      const questionId = crypto.randomUUID();
      const newQuestion = {
        id: questionId,
        text: q.text.trim(),
        type: q.type,
        options: q.options,
        correctAnswers: q.correctAnswers,
        explanation: q.explanation.trim(),
        difficulty: q.difficulty || 'medium',
        hasImage: q.hasImage || false,
        imageUrl: q.imageUrl || null,
        topicId,
        topic: topic.topicCode || topicId.replace('topic-', ''),
        bigIdea: topic.bigIdea || parseInt(topicId.split('-')[1].split('.')[0]),
        isTeacherMade: true,
        createdBy: teacherId,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      // Create teacher preference (active by default for creator)
      const prefId = crypto.randomUUID();
      const teacherPref = {
        id: prefId,
        teacherId,
        questionId,
        topicId,
        isActive: true,
        activatedAt: new Date(),
        createdAt: new Date()
      };

      batch.set(db.collection('questions').doc(questionId), newQuestion);
      batch.set(db.collection('teacherQuestionPreferences').doc(prefId), teacherPref);
      
      newQuestions.push(newQuestion);
      newPreferences.push(teacherPref);
    }

    await batch.commit();

    res.status(201).json({
      message: `${newQuestions.length} teacher questions imported successfully`,
      importedQuestions: newQuestions.length,
      questions: newQuestions
    });

  } catch (error) {
    console.error('Bulk import error:', error);
    res.status(500).json({ error: 'Failed to import questions' });
  }
});

module.exports = router;
