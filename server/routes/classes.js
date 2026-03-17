const express = require('express');
const { db, generateUniqueClassCode } = require('../firebase');
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
        studentCount,
        completionPercentage,
        createdAt: classData.createdAt
      };
    }));

    res.json(classes);

  } catch (error) {
    console.error('Get classes error:', error);
    res.status(500).json({ error: 'Failed to fetch classes' });
  }
});

// Create new class
router.post('/', verifyTeacher, async (req, res) => {
  try {
    const { name } = req.body;
    const teacherId = req.user.uid;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Class name is required' });
    }

    // Generate unique class code
    const classCode = await generateUniqueClassCode();

    // Create class document
    const classData = {
      name: name.trim(),
      code: classCode,
      teacherId,
      teacherName: req.user.displayName,
      studentIds: [],
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

// Delete a class
router.delete('/:classId', verifyTeacher, verifyClassAccess, async (req, res) => {
  try {
    const { classId } = req.params;
    const teacherId = req.user.uid;

    // Delete all student progress for this class
    const progressSnapshot = await db.collection('studentProgress')
      .where('classId', '==', classId)
      .get();

    const progressBatch = db.batch();
    progressSnapshot.docs.forEach(doc => {
      progressBatch.delete(doc.ref);
    });
    await progressBatch.commit();

    // Delete all teacher overrides for this class
    const overridesSnapshot = await db.collection('teacherOverrides')
      .where('classId', '==', classId)
      .get();

    const overrideBatch = db.batch();
    overridesSnapshot.docs.forEach(doc => {
      overrideBatch.delete(doc.ref);
    });
    await overrideBatch.commit();

    // Remove class from all students' classIds
    const classData = req.classData;
    if (classData.studentIds && classData.studentIds.length > 0) {
      const studentBatch = db.batch();
      for (const studentId of classData.studentIds) {
        const studentRef = db.collection('users').doc(studentId);
        const studentDoc = await studentRef.get();
        if (studentDoc.exists) {
          const studentData = studentDoc.data();
          const updatedClassIds = studentData.classIds.filter(id => id !== classId);
          studentBatch.update(studentRef, { classIds: updatedClassIds });
        }
      }
      await studentBatch.commit();
    }

    // Remove class from teacher's classIds
    const teacherRef = db.collection('users').doc(teacherId);
    const teacherDoc = await teacherRef.get();
    if (teacherDoc.exists) {
      const teacherData = teacherDoc.data();
      const updatedClassIds = teacherData.classIds.filter(id => id !== classId);
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

module.exports = router;