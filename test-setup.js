const { spawn } = require('child_process');
require('dotenv').config();

console.log('🔧 APproval Setup Verification\n');

// Check Node.js version
console.log('✅ Node.js version:', process.version);

// Check environment variables
const requiredEnvVars = [
  'FIREBASE_PROJECT_ID',
  'FIREBASE_PRIVATE_KEY_ID', 
  'FIREBASE_PRIVATE_KEY',
  'FIREBASE_CLIENT_EMAIL',
  'FIREBASE_CLIENT_ID'
];

console.log('\n📋 Environment Variables:');
let allEnvVarsSet = true;

for (const envVar of requiredEnvVars) {
  if (process.env[envVar]) {
    console.log(`✅ ${envVar}: ${envVar.includes('KEY') ? '[HIDDEN]' : process.env[envVar]}`);
  } else {
    console.log(`❌ ${envVar}: Not set`);
    allEnvVarsSet = false;
  }
}

if (!allEnvVarsSet) {
  console.log('\n🔴 Missing required environment variables!');
  console.log('📖 Please see setup-firebase.md for configuration instructions.');
  process.exit(1);
}

console.log('\n📦 Dependencies:');
try {
  require('express');
  console.log('✅ Express.js');
} catch (e) {
  console.log('❌ Express.js (run: npm install)');
}

try {
  require('firebase-admin');
  console.log('✅ Firebase Admin SDK');
} catch (e) {
  console.log('❌ Firebase Admin SDK (run: npm install)');
}

try {
  require('cors');
  console.log('✅ CORS');
} catch (e) {
  console.log('❌ CORS (run: npm install)');
}

console.log('\n🗂️  Project Structure:');
const fs = require('fs');
const path = require('path');

const expectedFiles = [
  'server/index.js',
  'server/firebase.js',
  'server/routes/auth.js',
  'server/routes/classes.js',
  'server/routes/progress.js',
  'server/routes/quizzes.js',
  'server/routes/questions.js',
  'server/middleware/verifyToken.js',
  'seed/seed.js',
  'public/index.html',
  'public/css/styles.css',
  'public/js/auth.js'
];

for (const file of expectedFiles) {
  if (fs.existsSync(path.join(__dirname, file))) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file}`);
  }
}

console.log('\n📊 Database Content Preview:');
try {
  const { topicsData } = require('./seed/seed.js');
  console.log(`✅ ${topicsData.length} topics ready to seed`);
  console.log(`✅ ${topicsData.reduce((total, topic) => total + topic.questions.length, 0)} questions ready`);
  
  console.log('\nTopics:');
  topicsData.forEach((topic, index) => {
    console.log(`  ${index + 1}. ${topic.name} (${topic.questions.length} questions)`);
  });
} catch (e) {
  console.log('❌ Seed data error:', e.message);
}

console.log('\n🚀 Next Steps:');
console.log('1. Ensure Firebase project is set up (see setup-firebase.md)');
console.log('2. Run: npm run seed (to populate database)');
console.log('3. Run: npm start (to start the server)');
console.log('4. Open: http://localhost:3000');

console.log('\n✨ APproval is ready to launch!');

// Test server start (optional)
if (process.argv.includes('--test-server')) {
  console.log('\n🧪 Testing server start...');
  const server = spawn('node', ['server/index.js'], { stdio: 'pipe' });
  
  setTimeout(() => {
    server.kill();
    console.log('✅ Server can start successfully');
  }, 3000);
  
  server.on('error', (err) => {
    console.log('❌ Server start error:', err.message);
  });
}