const express = require('express');
const { db, auth, generateUniqueClassCode } = require('../firebase');
const { verifyToken, verifyTeacher, verifyClassAccess } = require('../middleware/verifyToken');
const router = express.Router();

// All routes require authentication
router.use(verifyToken);

// Get teacher's classes
router.get('/', verifyTeacher, async (req, res) => {
  try {
    const teacherId = req.user.uid;

    const classesSnapshot = await db.collection('classes')
      .where('teacherId', '==', teacherId)
      .orderBy('createdAt', 'desc')
      .get();

    const classes = await Promise.all(classesSnapshot.docs.map(async (doc) => {
      const classData = doc.data();
      const classId = doc.id;

      // Get student count
      const studentCount = classData.studentIds ? classData.studentIds.length : 0;

      // Calculate completion percentage
      let completionPercentage = 0;
      if (studentCount > 0) {
        // Get all topics to know total count
        const topicsSnapshot = await db.collection('topics').get();
        const totalTopics = topicsSnapshot.size;

        if (totalTopics > 0) {
          // Get progress for all students in this class
          const progressSnapshot = await db.collection('studentProgress')
            .where('classId', '==', classId)
            .where('status', '==', 'passed')
            .get();

          const totalPossibleProgress = studentCount * totalTopics;
          const actualProgress = progressSnapshot.size;
          completionPercentage = Math.round((actualProgress / totalPossibleProgress) * 100);
        }
      }

      return {
        id: classId,
        name: classData.name,
        code: classData.code,
        subject: classData.subject || 'ap-csp',
        studentCount,
        completionPercentage,
        createdAt: classData.createdAt,
        archived: classData.archived || false,
        retakeWaitMinutes: classData.retakeWaitMinutes || 0,
        progressionMode: classData.progressionMode || 'linear'
      };
    }));

    res.json({ classes });

  } catch (error) {
    console.error('Get classes error:', error);
    res.status(500).json({ error: 'Failed to fetch classes' });
  }
});

// Create new class
router.post('/', verifyTeacher, async (req, res) => {
  try {
    const { name, retakeWaitMinutes = 0, progressionMode = 'linear', subject = 'ap-csp' } = req.body;
    const teacherId = req.user.uid;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Class name is required' });
    }

    // Validate subject
    if (!['ap-csp', 'ap-calculus-ab'].includes(subject)) {
      return res.status(400).json({ error: 'Invalid subject. Must be "ap-csp" or "ap-calculus-ab"' });
    }

    // Validate retakeWaitMinutes (must be multiple of 30, max 480 = 8 hours)
    const waitTime = parseInt(retakeWaitMinutes) || 0;
    if (waitTime < 0 || waitTime > 480 || waitTime % 30 !== 0) {
      return res.status(400).json({ error: 'Wait time must be 0-480 minutes in 30-minute increments' });
    }

    // Validate progressionMode
    if (!['linear', 'unlocked', 'manual'].includes(progressionMode)) {
      return res.status(400).json({ error: 'Progression mode must be "linear", "unlocked", or "manual"' });
    }

    // Generate unique class code
    const classCode = await generateUniqueClassCode();

    // Create class document
    const classData = {
      name: name.trim(),
      code: classCode,
      subject,
      teacherId,
      teacherName: req.user.displayName,
      studentIds: [],
      retakeWaitMinutes: waitTime,
      progressionMode,
      createdAt: new Date()
    };

    const classRef = await db.collection('classes').add(classData);

    // Update teacher's classIds array
    await db.collection('users').doc(teacherId).update({
      classIds: [...(req.user.classIds || []), classRef.id]
    });

    res.status(201).json({
      id: classRef.id,
      ...classData,
      studentCount: 0,
      completionPercentage: 0
    });

  } catch (error) {
    console.error('Create class error:', error);
    res.status(500).json({ error: 'Failed to create class' });
  }
});

// Update class settings
router.patch('/:classId/settings', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId } = req.params;
    const { name, retakeWaitMinutes, progressionMode, subject } = req.body;

    const updateData = { updatedAt: new Date() };

    // Update name if provided
    if (name !== undefined) {
      if (!name.trim()) {
        return res.status(400).json({ error: 'Class name cannot be empty' });
      }
      updateData.name = name.trim();
    }

    // Update subject if provided
    if (subject !== undefined) {
      if (!['ap-csp', 'ap-calculus-ab'].includes(subject)) {
        return res.status(400).json({ error: 'Invalid subject. Must be "ap-csp" or "ap-calculus-ab"' });
      }
      updateData.subject = subject;
    }

    // Update retakeWaitMinutes if provided
    if (retakeWaitMinutes !== undefined) {
      const waitTime = parseInt(retakeWaitMinutes) || 0;
      if (waitTime < 0 || waitTime > 480 || waitTime % 30 !== 0) {
        return res.status(400).json({ error: 'Wait time must be 0-480 minutes in 30-minute increments' });
      }
      updateData.retakeWaitMinutes = waitTime;
    }

    // Update progressionMode if provided
    if (progressionMode !== undefined) {
      if (!['linear', 'unlocked'].includes(progressionMode)) {
        return res.status(400).json({ error: 'Progression mode must be "linear" or "unlocked"' });
      }
      updateData.progressionMode = progressionMode;
    }

    await db.collection('classes').doc(classId).update(updateData);

    // Return updated class data
    const updatedDoc = await db.collection('classes').doc(classId).get();
    const updatedClass = updatedDoc.data();

    res.json({
      id: classId,
      name: updatedClass.name,
      code: updatedClass.code,
      retakeWaitMinutes: updatedClass.retakeWaitMinutes || 0,
      progressionMode: updatedClass.progressionMode || 'linear'
    });

  } catch (error) {
    console.error('Update class settings error:', error);
    res.status(500).json({ error: 'Failed to update class settings' });
  }
});

// Get students in a class
router.get('/:classId/students', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId } = req.params;
    const classData = req.classData;

    if (!classData.studentIds || classData.studentIds.length === 0) {
      return res.json([]);
    }

    // Get student data
    const studentsData = await Promise.all(
      classData.studentIds.map(async (studentId) => {
        try {
          const studentDoc = await db.collection('users').doc(studentId).get();
          if (!studentDoc.exists) return null;

          const student = studentDoc.data();

          // Get student progress
          const progressSnapshot = await db.collection('studentProgress')
            .where('studentId', '==', studentId)
            .where('classId', '==', classId)
            .get();

          // Count completed topics
          let completedTopics = 0;
          const progressMap = {};

          progressSnapshot.docs.forEach(doc => {
            const progress = doc.data();
            progressMap[progress.topicId] = progress;
            if (progress.status === 'passed') {
              completedTopics++;
            }
          });

          // Get total topics
          const topicsSnapshot = await db.collection('topics').get();
          const totalTopics = topicsSnapshot.size;
          const completionPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

          return {
            id: studentId,
            displayName: student.displayName,
            username: student.username,
            email: student.email,
            completedTopics,
            totalTopics,
            completionPercentage,
            progressMap
          };
        } catch (error) {
          console.error(`Error fetching student ${studentId}:`, error);
          return null;
        }
      })
    );

    // Filter out null results
    const validStudents = studentsData.filter(student => student !== null);

    res.json(validStudents);

  } catch (error) {
    console.error('Get students error:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Remove student from class
router.delete('/:classId/students/:studentId', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId, studentId } = req.params;
    const classData = req.classData;

    // Check if student is in the class
    if (!classData.studentIds.includes(studentId)) {
      return res.status(404).json({ error: 'Student not found in this class' });
    }

    // Remove student from class
    const updatedStudentIds = classData.studentIds.filter(id => id !== studentId);
    await db.collection('classes').doc(classId).update({
      studentIds: updatedStudentIds
    });

    // Update student's classIds (remove this class)
    const studentDoc = await db.collection('users').doc(studentId).get();
    if (studentDoc.exists) {
      const studentData = studentDoc.data();
      const updatedClassIds = studentData.classIds.filter(id => id !== classId);
      await db.collection('users').doc(studentId).update({
        classIds: updatedClassIds
      });
    }

    // Delete student's progress for this class
    const progressSnapshot = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('classId', '==', classId)
      .get();

    const batch = db.batch();
    progressSnapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    // Delete teacher overrides for this student in this class
    const overridesSnapshot = await db.collection('teacherOverrides')
      .where('classId', '==', classId)
      .where('studentId', '==', studentId)
      .get();

    const overrideBatch = db.batch();
    overridesSnapshot.docs.forEach(doc => {
      overrideBatch.delete(doc.ref);
    });
    await overrideBatch.commit();

    res.json({ message: 'Student removed successfully' });

  } catch (error) {
    console.error('Remove student error:', error);
    res.status(500).json({ error: 'Failed to remove student' });
  }
});

// Get detailed student progress
router.get('/:classId/students/:studentId/details', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId, studentId } = req.params;

    // Get student data
    const studentDoc = await db.collection('users').doc(studentId).get();
    if (!studentDoc.exists) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const studentData = studentDoc.data();

    // Get all topics
    const topicsSnapshot = await db.collection('topics')
      .orderBy('order', 'asc')
      .get();

    const topics = [];

    for (const topicDoc of topicsSnapshot.docs) {
      const topic = { id: topicDoc.id, ...topicDoc.data() };

      // Get progress for this topic
      const progressDoc = await db.collection('studentProgress')
        .where('studentId', '==', studentId)
        .where('topicId', '==', topic.id)
        .where('classId', '==', classId)
        .limit(1)
        .get();

      let progress = null;
      if (!progressDoc.empty) {
        progress = progressDoc.docs[0].data();
        // Sort attempts by timestamp
        if (progress.attempts) {
          progress.attempts.sort((a, b) => a.timestamp.toDate() - b.timestamp.toDate());
        }
      }

      // Check for teacher overrides
      const overrideDoc = await db.collection('teacherOverrides')
        .where('classId', '==', classId)
        .where('studentId', '==', studentId)
        .where('topicId', '==', topic.id)
        .limit(1)
        .get();

      let override = null;
      if (!overrideDoc.empty) {
        override = overrideDoc.docs[0].data();
      }

      topics.push({
        ...topic,
        progress,
        override
      });
    }

    res.json({
      student: {
        id: studentId,
        displayName: studentData.displayName,
        username: studentData.username,
        email: studentData.email
      },
      topics
    });

  } catch (error) {
    console.error('Get student details error:', error);
    res.status(500).json({ error: 'Failed to fetch student details' });
  }
});

// Get class matrix (students x topics)
router.get('/:classId/matrix', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId } = req.params;
    const { bigIdeaId } = req.query;
    const classData = req.classData;
    const subject = classData.subject || 'ap-csp';

    // Get all Big Ideas
    const bigIdeasSnapshot = await db.collection('bigIdeas')
      .orderBy('order', 'asc')
      .get();

    const bigIdeas = bigIdeasSnapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      .filter(bi => (bi.subject || 'ap-csp') === subject);

    // Get all topics
    const topicsSnapshot = await db.collection('topics')
      .orderBy('order', 'asc')
      .get();

    const allTopics = topicsSnapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      .filter(t => (t.subject || 'ap-csp') === subject);

    // Group topics by Big Idea
    const topicsByBigIdea = {};
    bigIdeas.forEach(bi => {
      topicsByBigIdea[bi.id] = allTopics.filter(t => t.bigIdeaId === bi.id);
    });

    // Filter topics if bigIdeaId is specified
    const topics = bigIdeaId
      ? allTopics.filter(t => t.bigIdeaId === bigIdeaId)
      : allTopics;

    // Get students data with progress
    const students = [];

    if (classData.studentIds && classData.studentIds.length > 0) {
      for (const studentId of classData.studentIds) {
        const studentDoc = await db.collection('users').doc(studentId).get();
        if (!studentDoc.exists) continue;

        const student = studentDoc.data();

        // Get all progress for this student in this class
        const progressSnapshot = await db.collection('studentProgress')
          .where('studentId', '==', studentId)
          .where('classId', '==', classId)
          .get();

        // Build progress map
        const progress = {};
        let passedCount = 0;

        progressSnapshot.docs.forEach(doc => {
          const p = doc.data();
          const attempts = p.attempts || [];
          const bestScore = attempts.length > 0
            ? Math.max(...attempts.map(a => a.score || 0))
            : null;

          progress[p.topicId] = {
            status: p.status,
            bestScore,
            attemptCount: attempts.length,
            retakeUnlocked: p.retakeUnlocked || false
          };

          if (p.status === 'passed') passedCount++;
        });

        const completionPercentage = allTopics.length > 0
          ? Math.round((passedCount / allTopics.length) * 100)
          : 0;

        // Calculate per-Big Idea completion percentages
        const bigIdeaProgress = {};
        bigIdeas.forEach(bi => {
          const biTopics = topicsByBigIdea[bi.id] || [];
          const biPassedCount = biTopics.filter(t =>
            progress[t.id] && progress[t.id].status === 'passed'
          ).length;
          bigIdeaProgress[bi.id] = biTopics.length > 0
            ? Math.round((biPassedCount / biTopics.length) * 100)
            : 0;
        });

        students.push({
          id: studentId,
          displayName: student.displayName,
          username: student.username,
          progress,
          completionPercentage,
          bigIdeaProgress
        });
      }
    }

    res.json({
      classInfo: {
        id: classId,
        name: classData.name,
        code: classData.code,
        progressionMode: classData.progressionMode || 'linear'
      },
      bigIdeas,
      topics,
      students
    });

  } catch (error) {
    console.error('Get class matrix error:', error);
    res.status(500).json({ error: 'Failed to fetch class matrix' });
  }
});

// Get student's attempt details for a specific topic
router.get('/:classId/students/:studentId/topics/:topicId/attempts', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId, studentId, topicId } = req.params;

    // Get student data
    const studentDoc = await db.collection('users').doc(studentId).get();
    if (!studentDoc.exists) {
      return res.status(404).json({ error: 'Student not found' });
    }
    const studentData = studentDoc.data();

    // Get topic data
    const topicDoc = await db.collection('topics').doc(topicId).get();
    if (!topicDoc.exists) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    const topicData = topicDoc.data();

    // Get progress with attempts
    const progressQuery = await db.collection('studentProgress')
      .where('studentId', '==', studentId)
      .where('topicId', '==', topicId)
      .where('classId', '==', classId)
      .limit(1)
      .get();

    if (progressQuery.empty) {
      return res.json({
        student: {
          id: studentId,
          displayName: studentData.displayName,
          username: studentData.username
        },
        topic: {
          id: topicId,
          name: topicData.name
        },
        attempts: []
      });
    }

    const progress = progressQuery.docs[0].data();

    // Format attempts with timestamps
    const attempts = (progress.attempts || []).map(attempt => ({
      ...attempt,
      timestamp: attempt.timestamp.toDate ? attempt.timestamp.toDate() : attempt.timestamp
    })).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Most recent first

    res.json({
      student: {
        id: studentId,
        displayName: studentData.displayName,
        username: studentData.username
      },
      topic: {
        id: topicId,
        name: topicData.name
      },
      status: progress.status,
      attempts
    });

  } catch (error) {
    console.error('Get student attempts error:', error);
    res.status(500).json({ error: 'Failed to fetch student attempts' });
  }
});

// Check if class can be deleted (no students) or archived (has students with exams)
router.get('/:classId/status', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId } = req.params;
    const classData = req.classData;

    const studentCount = classData.studentIds ? classData.studentIds.length : 0;
    const canDelete = studentCount === 0;

    // Check if any students have taken at least one exam
    let hasExamAttempts = false;
    if (studentCount > 0) {
      const progressSnapshot = await db.collection('studentProgress')
        .where('classId', '==', classId)
        .limit(1)
        .get();

      // Check if any progress record has attempts
      if (!progressSnapshot.empty) {
        for (const doc of progressSnapshot.docs) {
          const progress = doc.data();
          if (progress.attempts && progress.attempts.length > 0) {
            hasExamAttempts = true;
            break;
          }
        }

        // If no attempts found in first doc, do a more thorough check
        if (!hasExamAttempts) {
          const allProgressSnapshot = await db.collection('studentProgress')
            .where('classId', '==', classId)
            .get();

          for (const doc of allProgressSnapshot.docs) {
            const progress = doc.data();
            if (progress.attempts && progress.attempts.length > 0) {
              hasExamAttempts = true;
              break;
            }
          }
        }
      }
    }

    const canArchive = studentCount > 0 && hasExamAttempts;

    res.json({
      studentCount,
      canDelete,
      canArchive,
      hasExamAttempts,
      isArchived: classData.archived || false
    });

  } catch (error) {
    console.error('Get class status error:', error);
    res.status(500).json({ error: 'Failed to get class status' });
  }
});

// Archive a class (only if it has students who have taken at least one exam)
router.post('/:classId/archive', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId } = req.params;
    const classData = req.classData;

    const studentCount = classData.studentIds ? classData.studentIds.length : 0;

    if (studentCount === 0) {
      return res.status(400).json({
        error: 'Cannot archive a class with no students. Delete it instead.'
      });
    }

    // Check if any students have taken at least one exam
    const progressSnapshot = await db.collection('studentProgress')
      .where('classId', '==', classId)
      .get();

    let hasExamAttempts = false;
    for (const doc of progressSnapshot.docs) {
      const progress = doc.data();
      if (progress.attempts && progress.attempts.length > 0) {
        hasExamAttempts = true;
        break;
      }
    }

    if (!hasExamAttempts) {
      return res.status(400).json({
        error: 'Cannot archive a class where no students have taken any exams.'
      });
    }

    // Archive the class
    await db.collection('classes').doc(classId).update({
      archived: true,
      archivedAt: new Date()
    });

    res.json({ message: 'Class archived successfully' });

  } catch (error) {
    console.error('Archive class error:', error);
    res.status(500).json({ error: 'Failed to archive class' });
  }
});

// Unarchive a class
router.post('/:classId/unarchive', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId } = req.params;

    await db.collection('classes').doc(classId).update({
      archived: false,
      archivedAt: null
    });

    res.json({ message: 'Class unarchived successfully' });

  } catch (error) {
    console.error('Unarchive class error:', error);
    res.status(500).json({ error: 'Failed to unarchive class' });
  }
});

// Delete a class (only if no students)
router.delete('/:classId', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId } = req.params;
    const teacherId = req.user.uid;
    const classData = req.classData;

    // Check if class has students
    if (classData.studentIds && classData.studentIds.length > 0) {
      return res.status(400).json({
        error: 'Cannot delete a class with students. Archive it instead.'
      });
    }

    // Delete all student progress for this class (should be empty but just in case)
    const progressSnapshot = await db.collection('studentProgress')
      .where('classId', '==', classId)
      .get();

    if (!progressSnapshot.empty) {
      const progressBatch = db.batch();
      progressSnapshot.docs.forEach(doc => {
        progressBatch.delete(doc.ref);
      });
      await progressBatch.commit();
    }

    // Delete all teacher overrides for this class
    const overridesSnapshot = await db.collection('teacherOverrides')
      .where('classId', '==', classId)
      .get();

    if (!overridesSnapshot.empty) {
      const overrideBatch = db.batch();
      overridesSnapshot.docs.forEach(doc => {
        overrideBatch.delete(doc.ref);
      });
      await overrideBatch.commit();
    }

    // Remove class from teacher's classIds
    const teacherRef = db.collection('users').doc(teacherId);
    const teacherDoc = await teacherRef.get();
    if (teacherDoc.exists) {
      const teacherData = teacherDoc.data();
      const updatedClassIds = (teacherData.classIds || []).filter(id => id !== classId);
      await teacherRef.update({ classIds: updatedClassIds });
    }

    // Delete the class
    await db.collection('classes').doc(classId).delete();

    res.json({ message: 'Class deleted successfully' });

  } catch (error) {
    console.error('Delete class error:', error);
    res.status(500).json({ error: 'Failed to delete class' });
  }
});

// Reset student password (teachers only)
router.post('/:classId/students/:studentId/reset-password', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { studentId } = req.params;
    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ error: 'New password must be at least 6 characters long' });
    }

    // Update password in Firebase Auth
    await auth.updateUser(studentId, {
      password: newPassword
    });

    res.json({ message: 'Student password reset successfully' });

  } catch (error) {
    console.error('Reset student password error:', error);
    res.status(500).json({ error: 'Failed to reset student password' });
  }
});

module.exports = router;