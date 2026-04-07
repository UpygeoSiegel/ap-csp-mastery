const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import Firebase setup
require('./firebase');

// Import routes
const authRoutes = require('./routes/auth');
const classRoutes = require('./routes/classes');
const progressRoutes = require('./routes/progress');
const quizRoutes = require('./routes/quizzes');
const questionRoutes = require('./routes/questions');
const topicRoutes = require('./routes/topics');
const adminRoutes = require('./routes/admin');
const subjectRoutes = require('./routes/subjects');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Request logger for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/subjects', subjectRoutes);

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Serve static files HTML fallback
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/student/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/student/dashboard.html'));
});

app.get('/teacher/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/teacher/dashboard.html'));
});

app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin/dashboard.html'));
});

app.get('/admin/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/admin/login.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'AP Mastery API'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`AP Mastery server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Access the application at: http://localhost:${PORT}`);
});