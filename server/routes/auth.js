const express = require('express');
const { auth, db, generateUniqueClassCode } = require('../firebase');
const router = express.Router();

// Teacher signup
router.post('/teacher-signup', async (req, res) => {
  try {
    const { email, password, displayName } = req.body;

    // Validate input
    if (!email || !password || !displayName) {
      return res.status(400).json({ error: 'Email, password, and display name are required' });
    }

    // Create Firebase Auth user
    const userRecord = await auth.createUser({
      email,
      password,
      displayName
    });

    // Create user document in Firestore
    await db.collection('users').doc(userRecord.uid).set({
      role: 'teacher',
      displayName,
      email,
      classIds: [],
      createdAt: new Date()
    });

    res.status(201).json({ 
      message: 'Teacher account created successfully',
      userId: userRecord.uid 
    });

  } catch (error) {
    console.error('Teacher signup error:', error);
    
    // Handle specific Firebase Auth errors
    if (error.code === 'auth/email-already-exists') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    if (error.code === 'auth/invalid-email') {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    if (error.code === 'auth/weak-password') {
      return res.status(400).json({ error: 'Password is too weak' });
    }

    res.status(500).json({ error: 'Failed to create teacher account' });
  }
});

// Student signup with class code
router.post('/student-signup', async (req, res) => {
  try {
    const { classCode, displayName, username, password } = req.body;

    // Validate input
    if (!classCode || !displayName || !username || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Find class by code
    const classQuery = await db.collection('classes')
      .where('code', '==', classCode.toUpperCase())
      .get();

    if (classQuery.empty) {
      return res.status(400).json({ error: 'Invalid class code' });
    }

    const classDoc = classQuery.docs[0];
    const classData = classDoc.data();
    const classId = classDoc.id;

    // Check if username is already taken in this class
    const existingUserQuery = await db.collection('users')
      .where('username', '==', username)
      .where('classIds', 'array-contains', classId)
      .get();

    if (!existingUserQuery.empty) {
      return res.status(400).json({ error: 'Username already taken in this class' });
    }

    // Generate email for Firebase Auth
    const generatedEmail = `${username}_${classCode}@${process.env.APP_DOMAIN || 'cspready.app'}`;

    // Create Firebase Auth user
    const userRecord = await auth.createUser({
      email: generatedEmail,
      password,
      displayName
    });

    // Create user document in Firestore
    await db.collection('users').doc(userRecord.uid).set({
      role: 'student',
      displayName,
      email: generatedEmail,
      username,
      classIds: [classId],
      createdAt: new Date()
    });

    // Add student to class
    await db.collection('classes').doc(classId).update({
      studentIds: [...(classData.studentIds || []), userRecord.uid]
    });

    res.status(201).json({ 
      message: 'Student account created successfully',
      userId: userRecord.uid,
      classId,
      className: classData.name
    });

  } catch (error) {
    console.error('Student signup error:', error);
    
    // Handle specific Firebase Auth errors
    if (error.code === 'auth/email-already-exists') {
      return res.status(400).json({ error: 'This combination already exists. Try a different username.' });
    }
    if (error.code === 'auth/weak-password') {
      return res.status(400).json({ error: 'Password is too weak' });
    }

    res.status(500).json({ error: 'Failed to create student account' });
  }
});

// Login endpoint - works for both teachers and students
router.post('/login', async (req, res) => {
  try {
    const { email, password, classCode, username, isTeacher } = req.body;

    let loginEmail = email;

    // For students, construct email from username and class code
    if (!isTeacher) {
      if (!classCode || !username) {
        return res.status(400).json({ error: 'Username and class code are required for students' });
      }

      // Verify class code exists
      const classQuery = await db.collection('classes')
        .where('code', '==', classCode.toUpperCase())
        .get();

      if (classQuery.empty) {
        return res.status(400).json({ error: 'Invalid class code' });
      }

      loginEmail = `${username}_${classCode}@${process.env.APP_DOMAIN || 'cspready.app'}`;
    }

    if (!loginEmail || !password) {
      return res.status(400).json({ error: 'Email/username and password are required' });
    }

    // Note: Firebase Auth verification happens on the client side
    // This endpoint is mainly for validation and returning user info
    
    // Get user by email to verify account exists
    let userRecord;
    try {
      userRecord = await auth.getUserByEmail(loginEmail);
    } catch (authError) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Get user data from Firestore
    const userDoc = await db.collection('users').doc(userRecord.uid).get();
    
    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User data not found' });
    }

    const userData = userDoc.data();

    // Verify role matches login type
    if (isTeacher && userData.role !== 'teacher') {
      return res.status(401).json({ error: 'Invalid teacher credentials' });
    }
    if (!isTeacher && userData.role !== 'student') {
      return res.status(401).json({ error: 'Invalid student credentials' });
    }

    res.json({ 
      message: 'Login validation successful',
      userId: userRecord.uid,
      email: loginEmail,
      role: userData.role,
      displayName: userData.displayName
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Validate class code endpoint
router.post('/validate-class-code', async (req, res) => {
  try {
    const { classCode } = req.body;

    if (!classCode) {
      return res.status(400).json({ error: 'Class code is required' });
    }

    const classQuery = await db.collection('classes')
      .where('code', '==', classCode.toUpperCase())
      .get();

    if (classQuery.empty) {
      return res.status(404).json({ error: 'Class code not found' });
    }

    const classData = classQuery.docs[0].data();

    res.json({
      valid: true,
      className: classData.name,
      teacherName: classData.teacherName || 'Teacher'
    });

  } catch (error) {
    console.error('Class code validation error:', error);
    res.status(500).json({ error: 'Validation failed' });
  }
});

// Check username availability in a class
router.post('/check-username', async (req, res) => {
  try {
    const { username, classCode } = req.body;

    if (!username || !classCode) {
      return res.status(400).json({ error: 'Username and class code are required' });
    }

    // Find class by code
    const classQuery = await db.collection('classes')
      .where('code', '==', classCode.toUpperCase())
      .get();

    if (classQuery.empty) {
      return res.status(400).json({ error: 'Invalid class code' });
    }

    const classId = classQuery.docs[0].id;

    // Check if username exists in this class
    const existingUserQuery = await db.collection('users')
      .where('username', '==', username)
      .where('classIds', 'array-contains', classId)
      .get();

    res.json({
      available: existingUserQuery.empty
    });

  } catch (error) {
    console.error('Username check error:', error);
    res.status(500).json({ error: 'Username check failed' });
  }
});

module.exports = router;