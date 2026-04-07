const express = require('express');
const { auth, db, generateUniqueClassCode } = require('../firebase');
const router = express.Router();

// Helper to get student classes details
async function getStudentClasses(classIds) {
  const classes = [];
  if (classIds && classIds.length > 0) {
    for (const classId of classIds) {
      try {
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
      } catch (err) {
        console.error(`Error fetching class ${classId}:`, err);
      }
    }
  }
  return classes;
}

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
      isApproved: true,
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
    const { classCode, displayName, email, password, username } = req.body;

    // Validate input
    if (!classCode || !displayName || !email || !password) {
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

    // Use provided username or default to email prefix
    const studentUsername = username || email.split('@')[0];

    // Check if email is already taken in Firestore
    const existingEmailQuery = await db.collection('users')
      .where('email', '==', email.toLowerCase())
      .limit(1)
      .get();

    if (!existingEmailQuery.empty) {
      return res.status(400).json({ error: 'Email already in use.' });
    }

    // Create Firebase Auth user
    const userRecord = await auth.createUser({
      email: email.toLowerCase(),
      password,
      displayName
    });

    // Create user document in Firestore
    await db.collection('users').doc(userRecord.uid).set({
      role: 'student',
      displayName,
      email: email.toLowerCase(),
      username: studentUsername,
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
      return res.status(400).json({ error: 'Email already exists.' });
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

    if (!isTeacher && !isAdmin && userData.role !== 'student') {
      return res.status(403).json({ error: 'Not a student account' });
    }

    // Get all classes for students
    let classes = [];
    if (userData.role === 'student') {
      classes = await getStudentClasses(userData.classIds);
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
    const { email, password, username, identifier, isTeacher } = req.body;

    let loginEmail = email;

    // For students, look up email by username OR the provided email string
    if (!isTeacher) {
      const studentIdentifier = identifier || username || email;
      if (!studentIdentifier) {
        return res.status(400).json({ error: 'Email or username is required for students' });
      }

      // Check if identifier is an email format
      const isEmailFormat = studentIdentifier.includes('@');

      let userQuery;
      
      // We'll search by both email AND username in case of overlaps or confusion
      // Priority 1: Search by email
      if (isEmailFormat) {
        userQuery = await db.collection('users')
          .where('email', '==', studentIdentifier.toLowerCase())
          .where('role', '==', 'student')
          .limit(1)
          .get();
      }

      // Priority 2: Search by username (case-insensitive and exact)
      if (!userQuery || userQuery.empty) {
        // Try lowercase username
        userQuery = await db.collection('users')
          .where('username', '==', studentIdentifier.toLowerCase())
          .where('role', '==', 'student')
          .limit(1)
          .get();
          
        if (userQuery.empty) {
          // Try original case username
          userQuery = await db.collection('users')
            .where('username', '==', studentIdentifier)
            .where('role', '==', 'student')
            .limit(1)
            .get();
        }
      }

      // Priority 3: If it looks like an email but wasn't found as one, try it as a username
      if (userQuery.empty && isEmailFormat) {
         userQuery = await db.collection('users')
          .where('username', '==', studentIdentifier)
          .where('role', '==', 'student')
          .limit(1)
          .get();
      }

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
      const identifier = username || email;
      if (!identifier) {
        return res.status(400).json({ error: 'Email or username is required for students' });
      }

      const isEmail = identifier.includes('@');
      let userQuery;

      if (isEmail) {
        userQuery = await db.collection('users')
          .where('email', '==', identifier.toLowerCase())
          .where('role', '==', 'student')
          .limit(1)
          .get();
      } else {
        // Try lowercase first
        userQuery = await db.collection('users')
          .where('username', '==', identifier.toLowerCase())
          .where('role', '==', 'student')
          .limit(1)
          .get();
          
        if (userQuery.empty) {
          // Try original case as fallback
          userQuery = await db.collection('users')
            .where('username', '==', identifier)
            .where('role', '==', 'student')
            .limit(1)
            .get();
        }
      }

      if (userQuery.empty) {
        // We return success anyway for security to prevent account enumeration
        return res.json({ message: 'If an account exists, a reset link has been sent.' });
      }

      const userData = userQuery.docs[0].data();
      resetEmail = userData.email;
      
      // If it's still a generated email, they can't actually receive the link
      if (resetEmail && resetEmail.includes('@') && resetEmail.split('@')[1] === (process.env.APP_DOMAIN || 'cspready.app')) {
         return res.status(400).json({ 
           error: 'This account does not have a real email address linked. Please ask your teacher to reset your password for you.' 
         });
      }
    } else {
      if (!email) {
        return res.status(400).json({ error: 'Email is required for teachers' });
      }
    }

    res.json({ 
      success: true,
      email: resetEmail,
      message: isTeacher 
        ? 'Password reset email will be sent to your inbox.' 
        : 'A reset link has been sent to your student account email.'
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

      // Get all classes for students
      let classes = [];
      if (userData.role === 'student') {
        classes = await getStudentClasses(userData.classIds);
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
          classes,
          classIds: userData.classIds
        }
      });
    }

    // New user signup
    if (isTeacher) {
      const newTeacherData = {
        role: 'teacher',
        displayName: displayName || name || email.split('@')[0],
        email: email,
        classIds: [],
        isApproved: true,
        authProvider: 'google',
        createdAt: new Date()
      };

      await db.collection('users').doc(uid).set(newTeacherData);

      return res.status(201).json({
        message: 'Teacher account created with Google successfully',
        user: {
          uid,
          email: newTeacherData.email,
          role: newTeacherData.role,
          displayName: newTeacherData.displayName,
          classIds: newTeacherData.classIds
        }
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

    // Get all classes (just the one they joined)
    const classes = await getStudentClasses(newUserData.classIds);

    res.status(201).json({
      message: 'Student account created with Google successfully',
      user: {
        uid,
        email: newUserData.email,
        role: newUserData.role,
        displayName: newUserData.displayName,
        username: newUserData.username,
        classes,
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