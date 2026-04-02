const express = require('express');
const { db } = require('../firebase');
const { verifyToken, verifyTeacher, verifyStudent } = require('../middleware/verifyToken');
const router = express.Router();

router.use(verifyToken);

// Get student's full progress map
router.get('/:studentId', async (req, res) => {
  try {
    const { studentId } = req.params;
    const { classId } = req.query;
    const requestingUser = req.user;

    // Students can only view their own progress
    if (requestingUser.role === 'student' && requestingUser.uid !== studentId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Get student data
    const studentDoc = await db.collection('users').doc(studentId).get();
    if (!studentDoc.exists) {
      return res.status(404).json({ error: 'Student not found' });
    }
    const student = studentDoc.data();

    // Teachers can view progress for students in their classes
    if (requestingUser.role === 'teacher') {
      const studentClassIds = student.classIds || [];

      // Check if teacher owns any of the student's classes
      const teacherClassesSnapshot = await db.collection('classes')
        .where('teacherId', '==', requestingUser.uid)
        .get();

      const teacherClassIds = teacherClassesSnapshot.docs.map(doc => doc.id);
      const hasAccess = studentClassIds.some(cid => teacherClassIds.includes(cid));

      if (!hasAccess) {
        return res.status(403).json({ error: 'Access denied to this student' });
      }
    }

    // Determine which class to show progress for
    let studentClassId = classId;
    if (!studentClassId) {
      // Default to first class
      studentClassId = student.classIds && student.classIds.length > 0 ? student.classIds[0] : null;
    }

    // Verify student is in this class
    if (studentClassId && student.classIds && !student.classIds.includes(studentClassId)) {
      return res.status(403).json({ error: 'Student is not in this class' });
    }

    // Get all topics ordered by their sequence
    const topicsSnapshot = await db.collection('topics')
      .orderBy('order', 'asc')
      .get();

    const topicsProgress = [];

    for (const topicDoc of topicsSnapshot.docs) {
      const topic = { id: topicDoc.id, ...topicDoc.data() };

      // Get progress for this topic
      const progressQuery = await db.collection('studentProgress')
        .where('studentId', '==', studentId)
        .where('topicId', '==', topic.id)
        .where('classId', '==', studentClassId)
        .limit(1)
        .get();

      let progress = null;
      if (!progressQuery.empty) {
        progress = progressQuery.docs[0].data();
      }

      // Check for teacher overrides
      const overrideQuery = await db.collection('teacherOverrides')
        .where('classId', '==', studentClassId)
        .where('studentId', '==', studentId)
        .where('topicId', '==', topic.id)
        .limit(1)
        .get();

      let override = null;
      if (!overrideQuery.empty) {
        override = overrideQuery.docs[0].data();
      }

      // Determine topic status
      let status = 'locked';
      if (progress) {
        status = progress.status;
      } else if (override) {
        status = 'available'; // Teacher override unlocks topic
      } else if (topic.order === 1) {
        status = 'available'; // First topic is always available
      }

      topicsProgress.push({
        id: topic.id,
        name: topic.name,
        unit: topic.unit,
        order: topic.order,
        status,
        progress,
        override,
        attempts: progress ? progress.attempts || [] : [],
        bestScore: progress && progress.attempts ? 
          Math.max(...progress.attempts.map(a => a.score)) : null
      });
    }

    // Calculate overall statistics
    const totalTopics = topicsProgress.length;
    const passedTopics = topicsProgress.filter(t => t.status === 'passed').length;
    const availableTopics = topicsProgress.filter(t => t.status === 'available').length;
    const completionPercentage = totalTopics > 0 ? Math.round((passedTopics / totalTopics) * 100) : 0;

    res.json({
      studentId,
      topics: topicsProgress,
      statistics: {
        totalTopics,
        passedTopics,
        availableTopics,
        lockedTopics: totalTopics - passedTopics - availableTopics,
        completionPercentage,
        isTestReady: completionPercentage === 100
      }
    });

  } catch (error) {
    console.error('Get progress error:', error);
    res.status(500).json({ error: 'Failed to fetch progress' });
  }
});

// Get detailed progress for a specific topic
router.get('/:studentId/:topicId', async (req, res) => {
  try {
    const { studentId, topicId } = req.params;
    const requestingUser = req.user;

    // Same access control as above
    if (requestingUser.role === 'student' && requestingUser.uid !== studentId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    if (requestingUser.role === 'teacher') {
      const studentDoc = await db.collection('users').doc(studentId).get();
      if (!studentDoc.exists) {
        return res.status(404).json({ error: 'Student not found' });
      }

      const student = studentDoc.data();
      const studentClassIds = student.classIds || [];

      const teacherClassesSnapshot = await db.collection('classes')
        .where('teacherId', '==', requestingUser.uid)
        .get();

      const teacherClassIds = teacherClassesSnapshot.docs.map(doc => doc.id);
      const hasAccess = studentClassIds.some(classId => teacherClassIds.includes(classId));

      if (!hasAccess) {
        return res.status(403).json({ error: 'Access denied to this student' });
      }
    }

    // Get topic
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const topic = topicDoc.data();

    // Get student's class
    let studentClassId;
    if (requestingUser.role === 'student') {
      studentClassId = requestingUser.classIds[0];
    } else {
      const studentDoc = await db.collection('users').doc(studentId).get();
      const student = studentDoc.data();
      studentClassId = student.classIds[0];
    }

    // Get progress
    const progressQuery = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', topicId)
      .where('classId', '==', studentClassId)
      .limit(1)
      .get();

    let progress = null;
    if (!progressQuery.empty) {
      progress = progressQuery.docs[0].data();
      
      // Sort attempts by timestamp and add detailed question information
      if (progress.attempts) {
        progress.attempts = progress.attempts
          .sort((a, b) => a.timestamp.toDate() - b.timestamp.toDate())
          .map(attempt => {
            // Add question details to each answer
            const detailedAnswers = attempt.answers.map(answer => {
              const question = topic.questions.find(q => q.id === answer.questionId);
              return {
                ...answer,
                question: question ? {
                  text: question.text,
                  type: question.type,
                  options: question.options,
                  explanation: question.explanation
                } : null
              };
            });

            return {
              ...attempt,
              answers: detailedAnswers,
              timestamp: attempt.timestamp.toDate()
            };
          });
      }
    }

    res.json({
      studentId,
      topicId,
      topicName: topic.name,
      topicUnit: topic.unit,
      progress: progress || {
        status: 'locked',
        attempts: []
      }
    });

  } catch (error) {
    console.error('Get topic progress error:', error);
    res.status(500).json({ error: 'Failed to fetch topic progress' });
  }
});

// Teacher override - unlock topic or mark as passed
router.post('/override', verifyTeacher, async (req, res) => {
  try {
    const { studentId, topicId, classId, action } = req.body; // action: 'unlock', 'pass', or 'retake'
    const teacherId = req.user.uid;

    if (!studentId || !topicId || !classId || !action) {
      return res.status(400).json({ error: 'Student ID, topic ID, class ID, and action are required' });
    }

    if (!['unlock', 'pass', 'retake'].includes(action)) {
      return res.status(400).json({ error: 'Action must be "unlock", "pass", or "retake"' });
    }

    // Verify teacher owns the class
    const classDoc = await db.collection('classes').doc(classId).get();
    if (!classDoc.exists || classDoc.data().teacherId !== teacherId) {
      return res.status(403).json({ error: 'Access denied to this class' });
    }

    // Verify student is in the class
    const classData = classDoc.data();
    if (!classData.studentIds.includes(studentId)) {
      return res.status(404).json({ error: 'Student not found in this class' });
    }

    // Get or create progress document
    const progressQuery = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', topicId)
      .where('classId', '==', classId)
      .limit(1)
      .get();

    const overrideData = {
      classId,
      studentId,
      topicId,
      unlockedBy: teacherId,
      unlockedAt: new Date(),
      action
    };

    if (action === 'unlock' || action === 'retake') {
      if (progressQuery.empty) {
        // Create new progress document
        await db.collection('studentProgress').add({
          studentId,
          topicId,
          classId,
          status: 'available',
          retakeUnlocked: action === 'retake',
          attempts: [],
          createdAt: new Date(),
          updatedAt: new Date()
        });
      } else {
        // Update existing progress
        const progressDoc = progressQuery.docs[0];
        const existingProgress = progressDoc.data();
        
        const updateData = { updatedAt: new Date() };
        if (existingProgress.status === 'locked') {
          updateData.status = 'available';
        }
        if (action === 'retake') {
          updateData.retakeUnlocked = true;
        }

        await progressDoc.ref.update(updateData);
      }

      // Record the override
      const existingOverrideQuery = await db.collection('teacherOverrides')
        .where('classId', '==', classId)
        .where('studentId', '==', studentId)
        .where('topicId', '==', topicId)
        .limit(1)
        .get();

      if (existingOverrideQuery.empty) {
        await db.collection('teacherOverrides').add(overrideData);
      } else {
        await existingOverrideQuery.docs[0].ref.update(overrideData);
      }

      res.json({ message: action === 'retake' ? 'Retake unlocked successfully' : 'Topic unlocked successfully' });

    } else if (action === 'pass') {
      // Mark topic as passed
      if (progressQuery.empty) {
        // Create new progress document with passed status
        await db.collection('studentProgress').add({
          studentId,
          topicId,
          classId,
          status: 'passed',
          attempts: [{
            attemptId: 'teacher-override',
            timestamp: new Date(),
            score: 5,
            passed: true,
            questionIds: [],
            answers: [],
            note: 'Marked as passed by teacher'
          }],
          createdAt: new Date(),
          updatedAt: new Date()
        });
      } else {
        // Update existing progress
        const progressDoc = progressQuery.docs[0];
        const existingProgress = progressDoc.data();
        
        const overrideAttempt = {
          attemptId: 'teacher-override',
          timestamp: new Date(),
          score: 5,
          passed: true,
          questionIds: [],
          answers: [],
          note: 'Marked as passed by teacher'
        };

        await progressDoc.ref.update({
          status: 'passed',
          attempts: [...(existingProgress.attempts || []), overrideAttempt],
          updatedAt: new Date()
        });
      }

      // Record the override
      const existingOverrideQuery = await db.collection('teacherOverrides')
        .where('classId', '==', classId)
        .where('studentId', '==', studentId)
        .where('topicId', '==', topicId)
        .limit(1)
        .get();

      if (existingOverrideQuery.empty) {
        await db.collection('teacherOverrides').add(overrideData);
      } else {
        await existingOverrideQuery.docs[0].ref.update(overrideData);
      }

      // Unlock next topic
      await unlockNextTopicForStudent(studentId, topicId, classId);

      res.json({ message: 'Topic marked as passed successfully' });
    }

  } catch (error) {
    console.error('Teacher override error:', error);
    res.status(500).json({ error: 'Override failed' });
  }
});

// Reset student progress for a topic
router.post('/reset', verifyTeacher, async (req, res) => {
  try {
    const { studentId, topicId, classId } = req.body;
    const teacherId = req.user.uid;

    if (!studentId || !topicId || !classId) {
      return res.status(400).json({ error: 'Student ID, topic ID, and class ID are required' });
    }

    // Verify teacher owns the class
    const classDoc = await db.collection('classes').doc(classId).get();
    if (!classDoc.exists || classDoc.data().teacherId !== teacherId) {
      return res.status(403).json({ error: 'Access denied to this class' });
    }

    // Delete progress document
    const progressQuery = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', topicId)
      .where('classId', '==', classId)
      .get();

    const batch = db.batch();
    progressQuery.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    // Delete teacher overrides
    const overrideQuery = await db.collection('teacherOverrides')
      .where('classId', '==', classId)
      .where('studentId', '==', studentId)
      .where('topicId', '==', topicId)
      .get();

    overrideQuery.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();

    res.json({ message: 'Progress reset successfully' });

  } catch (error) {
    console.error('Reset progress error:', error);
    res.status(500).json({ error: 'Reset failed' });
  }
});

// Helper function to unlock next topic
async function unlockNextTopicForStudent(studentId, currentTopicId, classId) {
  try {
    // Get current topic order and bigIdeaId
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
    const nextProgressQuery = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', nextTopicId)
      .where('classId', '==', classId)
      .limit(1)
      .get();

    if (nextProgressQuery.empty) {
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
      const existingProgress = nextProgressQuery.docs[0].data();
      if (existingProgress.status === 'locked') {
        await nextProgressQuery.docs[0].ref.update({
          status: 'available',
          updatedAt: new Date()
        });
      }
    }
  } catch (error) {
    console.error('Unlock next topic error:', error);
  }
}

// Bulk teacher override - unlock topic or retake for all students in class
router.post('/override-bulk', verifyTeacher, async (req, res) => {
  try {
    const { topicId, classId, action } = req.body; // action: 'unlock' or 'retake'
    const teacherId = req.user.uid;

    if (!topicId || !classId || !action) {
      return res.status(400).json({ error: 'Topic ID, class ID, and action are required' });
    }

    if (!['unlock', 'retake'].includes(action)) {
      return res.status(400).json({ error: 'Action must be "unlock" or "retake"' });
    }

    // Verify teacher owns the class
    const classDoc = await db.collection('classes').doc(classId).get();
    if (!classDoc.exists || classDoc.data().teacherId !== teacherId) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const classData = classDoc.data();
    const studentIds = classData.studentIds || [];

    if (studentIds.length === 0) {
      return res.json({ message: 'No students in class' });
    }

    const batch = db.batch();
    const now = new Date();

    for (const studentId of studentIds) {
      const progressQuery = await db.collection('studentProgress')
        .where('studentId', '==', studentId)
        .where('topicId', '==', topicId)
        .where('classId', '==', classId)
        .limit(1)
        .get();

      if (progressQuery.empty) {
        // Create new progress document
        const newProgressRef = db.collection('studentProgress').doc();
        batch.set(newProgressRef, {
          studentId,
          topicId,
          classId,
          status: 'available',
          retakeUnlocked: action === 'retake',
          attempts: [],
          createdAt: now,
          updatedAt: now
        });
      } else {
        // Update existing progress
        const progressDoc = progressQuery.docs[0];
        const existingProgress = progressDoc.data();
        
        const updateData = { updatedAt: now };
        if (existingProgress.status === 'locked') {
          updateData.status = 'available';
        }
        if (action === 'retake') {
          updateData.retakeUnlocked = true;
        }

        batch.update(progressDoc.ref, updateData);
      }

      // Record the override for each student
      const overrideRef = db.collection('teacherOverrides').doc();
      batch.set(overrideRef, {
        classId,
        studentId,
        topicId,
        unlockedBy: teacherId,
        unlockedAt: now,
        action,
        isBulk: true
      });
    }

    await batch.commit();

    res.json({ 
      message: action === 'retake' 
        ? `Retakes unlocked for all ${studentIds.length} students` 
        : `Topic unlocked for all ${studentIds.length} students` 
    });

  } catch (error) {
    console.error('Bulk override error:', error);
    res.status(500).json({ error: 'Failed to perform bulk action' });
  }
});

module.exports = router;