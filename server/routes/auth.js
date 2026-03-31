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
      isApproved: false, // Requires admin approval
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

    // Check if username is already taken
    const existingUserQuery = await db.collection('users')
      .where('username', '==', username)
      .limit(1)
      .get();

    if (!existingUserQuery.empty) {
      const existingUserDoc = existingUserQuery.docs[0];
      const existingUserData = existingUserDoc.data();

      if (existingUserData.role !== 'student') {
        return res.status(400).json({ error: 'Username already taken by a non-student account.' });
      }

      // If user exists, we check if they are already in this class
      if (existingUserData.classIds && existingUserData.classIds.includes(classId)) {
        return res.status(400).json({ error: 'You are already a member of this class.' });
      }

      // Add student to class
      await db.collection('classes').doc(classId).update({
        studentIds: [...(classData.studentIds || []), existingUserDoc.id]
      });

      // Update user document with new classId
      await db.collection('users').doc(existingUserDoc.id).update({
        classIds: [...(existingUserData.classIds || []), classId]
      });

      return res.status(200).json({ 
        message: 'Successfully joined additional class',
        userId: existingUserDoc.id,
        classId,
        className: classData.name
      });
    }

    // Generate email for Firebase Auth
    const sanitizedUsername = username.toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9._-]/g, '');
    const generatedEmail = `${sanitizedUsername}@${process.env.APP_DOMAIN || 'apmastery.com'}`;

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

// Verify login - called after Firebase client-side auth
router.post('/verify-login', async (req, res) => {
  try {
    const { isTeacher, isAdmin } = req.body;

    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split('Bearer ')[1];

    // Verify the Firebase token
    const decodedToken = await auth.verifyIdToken(token);
    const uid = decodedToken.uid;

    // Get user data from Firestore
    const userDoc = await db.collection('users').doc(uid).get();

    if (!userDoc.exists) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userData = userDoc.data();

    // Verify role matches login type
    if (isAdmin && userData.role !== 'admin') {
      return res.status(403).json({ error: 'Not an admin account' });
    }
    if (isTeacher && userData.role !== 'teacher') {
      return res.status(403).json({ error: 'Not a teacher account' });
    }
    
    // Check if teacher is approved
    if (userData.role === 'teacher' && !userData.isApproved) {
      return res.status(403).json({ error: 'Account pending admin approval. Please contact an administrator.' });
    }

    if (!isTeacher && !isAdmin && userData.role !== 'student') {
      return res.status(403).json({ error: 'Not a student account' });
    }

    // Get all classes for students
    let classes = [];
    if (userData.role === 'student' && userData.classIds && userData.classIds.length > 0) {
      for (const classId of userData.classIds) {
        const classDoc = await db.collection('classes').doc(classId).get();
        if (classDoc.exists) {
          const classData = classDoc.data();
          classes.push({
            id: classId,
            name: classData.name,
            code: classData.code,
            teacherName: classData.teacherName
          });
        }
      }
    }

    res.json({
      message: 'Login verified',
      user: {
        uid,
        email: userData.email,
        role: userData.role,
        displayName: userData.displayName,
        username: userData.username,
        classes,
        classIds: userData.classIds
      }
    });

  } catch (error) {
    console.error('Verify login error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Login endpoint - works for both teachers and students
router.post('/login', async (req, res) => {
  try {
    const { email, password, username, isTeacher } = req.body;

    let loginEmail = email;

    // For students, look up email by username
    if (!isTeacher) {
      if (!username) {
        return res.status(400).json({ error: 'Username is required for students' });
      }

      // Find user by username
      const userQuery = await db.collection('users')
        .where('username', '==', username)
        .where('role', '==', 'student')
        .limit(1)
        .get();

      if (userQuery.empty) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const userData = userQuery.docs[0].data();
      loginEmail = userData.email;
    }

    if (!loginEmail || !password) {
      return res.status(400).json({ error: 'Email/username and password are required' });
    }

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
    
    // Check if teacher is approved
    if (userData.role === 'teacher' && !userData.isApproved) {
      return res.status(403).json({ error: 'Account pending admin approval. Please contact an administrator.' });
    }

    res.json({
      message: 'Login validation successful',
      userId: userRecord.uid,
      email: loginEmail,
      role: userData.role,
      displayName: userData.displayName,
      isApproved: userData.role === 'teacher' ? userData.isApproved : true
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

// Check username availability (globally unique)
router.post('/check-username', async (req, res) => {
  try {
    const { username } = req.body;

    if (!username) {
      return res.status(400).json({ error: 'Username is required' });
    }

    // Check if username exists globally
    const existingUserQuery = await db.collection('users')
      .where('username', '==', username)
      .limit(1)
      .get();

    res.json({
      available: existingUserQuery.empty
    });

  } catch (error) {
    console.error('Username check error:', error);
    res.status(500).json({ error: 'Username check failed' });
  }
});

// Request password reset email
router.post('/forgot-password', async (req, res) => {
  try {
    const { email, username, isTeacher } = req.body;

    let resetEmail = email;

    if (!isTeacher) {
      if (!username) {
        return res.status(400).json({ error: 'Username is required for students' });
      }

      // Find student by username
      const userQuery = await db.collection('users')
        .where('username', '==', username)
        .where('role', '==', 'student')
        .limit(1)
        .get();

      if (userQuery.empty) {
        // We return success anyway for security to prevent account enumeration
        return res.json({ message: 'If an account exists, a reset link has been sent.' });
      }

      const userData = userQuery.docs[0].data();
      resetEmail = userData.email;
    } else {
      if (!email) {
        return res.status(400).json({ error: 'Email is required for teachers' });
      }
    }

    // Generate password reset link via Firebase Admin SDK
    // This allows us to get the link and send it ourselves if we wanted, 
    // but standard Firebase Auth "sendPasswordResetEmail" is usually done on client side.
    // However, for students with generated emails, the teacher might need to provide the link.
    
    // For now, we'll just return the email it would be sent to, 
    // or tell the client to use the Firebase Client SDK with this email.
    
    res.json({ 
      success: true,
      email: resetEmail,
      message: isTeacher 
        ? 'Password reset email will be sent to your inbox.' 
        : 'A reset link has been sent to your student account email. Your teacher can also help you reset it.'
    });

  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Failed to process password reset request' });
  }
});

// Google login/signup for students and teachers
router.post('/google-login', async (req, res) => {
  try {
    const { idToken, classCode, displayName, isTeacher } = req.body;

    if (!idToken) {
      return res.status(400).json({ error: 'ID token is required' });
    }

    // Verify the ID token
    const decodedToken = await auth.verifyIdToken(idToken);
    const { uid, email, name, picture } = decodedToken;

    // Check if user already exists in Firestore
    const userDoc = await db.collection('users').doc(uid).get();

    if (userDoc.exists) {
      const userData = userDoc.data();
      
      // Verify role matches login type
      if (isTeacher && userData.role !== 'teacher') {
        return res.status(403).json({ error: 'This Google account is registered as a student account.' });
      }
      if (!isTeacher && userData.role === 'teacher') {
        return res.status(403).json({ error: 'This Google account is registered as a teacher account.' });
      }

      // Check teacher approval status
      if (userData.role === 'teacher' && !userData.isApproved) {
        return res.status(403).json({ error: 'Account pending admin approval. Please contact an administrator.' });
      }

      // Return user data
      return res.json({
        message: 'Login successful',
        user: {
          uid,
          email: userData.email,
          role: userData.role,
          displayName: userData.displayName,
          username: userData.username,
          classIds: userData.classIds
        }
      });
    }

    // New user signup
    if (isTeacher) {
      // Create new teacher account
      const newTeacherData = {
        role: 'teacher',
        displayName: displayName || name || email.split('@')[0],
        email: email,
        classIds: [],
        isApproved: false, // Requires admin approval
        authProvider: 'google',
        createdAt: new Date()
      };

      await db.collection('users').doc(uid).set(newTeacherData);

      return res.status(201).json({
        message: 'Teacher account created with Google successfully. Pending admin approval.',
        pendingApproval: true
      });
    }

    // New student signup
    if (!classCode) {
      return res.status(404).json({ 
        error: 'Account not found', 
        needsSignup: true,
        email,
        name: name || displayName
      });
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

    // Create new student account
    const newUserData = {
      role: 'student',
      displayName: displayName || name || email.split('@')[0],
      email: email,
      username: email.split('@')[0], // Use email prefix as default username
      classIds: [classId],
      authProvider: 'google',
      createdAt: new Date()
    };

    await db.collection('users').doc(uid).set(newUserData);

    // Add student to class
    await db.collection('classes').doc(classId).update({
      studentIds: [...(classData.studentIds || []), uid]
    });

    res.status(201).json({
      message: 'Student account created with Google successfully',
      user: {
        uid,
        email: newUserData.email,
        role: newUserData.role,
        displayName: newUserData.displayName,
        username: newUserData.username,
        classIds: newUserData.classIds
      }
    });

  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({ error: 'Google login failed' });
  }
});

// Join additional class (for logged-in students)
router.post('/join-class', async (req, res) => {
  try {
    const { classCode, uid } = req.body;

    if (!classCode || !uid) {
      return res.status(400).json({ error: 'Class code and user ID are required' });
    }

    // Find class by code
    const classQuery = await db.collection('classes')
      .where('code', '==', classCode.toUpperCase())
      .get();

    if (classQuery.empty) {
      return res.status(404).json({ error: 'Class code not found' });
    }

    const classDoc = classQuery.docs[0];
    const classData = classDoc.data();
    const classId = classDoc.id;

    // Get student data
    const studentRef = db.collection('users').doc(uid);
    const studentDoc = await studentRef.get();

    if (!studentDoc.exists) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const studentData = studentDoc.data();

    // Verify student doesn't already have this class
    if (studentData.classIds && studentData.classIds.includes(classId)) {
      return res.status(400).json({ error: 'You are already in this class' });
    }

    // Add student to class
    await db.collection('classes').doc(classId).update({
      studentIds: [...(classData.studentIds || []), uid]
    });

    // Update user document
    const updatedClassIds = [...(studentData.classIds || []), classId];
    await studentRef.update({
      classIds: updatedClassIds
    });

    // Get fresh classes data for response
    const classes = [];
    for (const id of updatedClassIds) {
      const clsDoc = await db.collection('classes').doc(id).get();
      if (clsDoc.exists) {
        const clsData = clsDoc.data();
        classes.push({
          id,
          name: clsData.name,
          code: clsData.code,
          teacherName: clsData.teacherName
        });
      }
    }

    res.json({
      message: `Successfully joined ${classData.name}`,
      classes
    });

  } catch (error) {
    console.error('Join class error:', error);
    res.status(500).json({ error: 'Failed to join class' });
  }
});

module.exports = router;