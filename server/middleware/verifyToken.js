const { auth, db } = require('../firebase');

// Middleware to verify Firebase authentication token
const verifyToken = async (req, res, next) => {
  try {
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

    // Attach user data to request object
    req.user = {
      uid,
      ...userDoc.data()
    };

    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Middleware to verify user is a teacher
const verifyTeacher = async (req, res, next) => {
  if (!req.user || req.user.role !== 'teacher') {
    return res.status(403).json({ error: 'Teacher access required' });
  }
  next();
};

// Middleware to verify user is an admin
const verifyAdmin = async (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

// Middleware to verify user is a student
const verifyStudent = async (req, res, next) => {
  if (!req.user || req.user.role !== 'student') {
    return res.status(403).json({ error: 'Student access required' });
  }
  next();
};

// Middleware to verify user owns a class or is a student in the class
const verifyClassAccess = async (req, res, next) => {
  try {
    const { classId } = req.params;
    const user = req.user;

    const classDoc = await db.collection('classes').doc(classId).get();
    
    if (!classDoc.exists) {
      return res.status(404).json({ error: 'Class not found' });
    }

    const classData = classDoc.data();

    // Teachers can access their own classes
    if (user.role === 'teacher' && classData.teacherId === user.uid) {
      req.classData = classData;
      return next();
    }

    // Students can access classes they belong to
    if (user.role === 'student' && classData.studentIds.includes(user.uid)) {
      req.classData = classData;
      return next();
    }

    return res.status(403).json({ error: 'Access denied to this class' });
  } catch (error) {
    console.error('Class access verification error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  verifyToken,
  verifyTeacher,
  verifyStudent,
  verifyAdmin,
  verifyClassAccess
};