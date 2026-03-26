const admin = require('firebase-admin');
require('dotenv').config();

// Validate required environment variables
const requiredEnvVars = [
  'FIREBASE_PROJECT_ID',
  'FIREBASE_PRIVATE_KEY_ID', 
  'FIREBASE_PRIVATE_KEY',
  'FIREBASE_CLIENT_EMAIL',
  'FIREBASE_CLIENT_ID'
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI || "https://accounts.google.com/o/oauth2/auth",
  token_uri: process.env.FIREBASE_TOKEN_URI || "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL || "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
};

console.log('Initializing Firebase with project:', serviceAccount.project_id);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`
  });
}

const db = admin.firestore();
const auth = admin.auth();
const bucket = admin.storage().bucket();

// Helper function to generate unique class codes
const generateClassCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Helper function to check if class code is unique
const isClassCodeUnique = async (code) => {
  const snapshot = await db.collection('classes').where('code', '==', code).get();
  return snapshot.empty;
};

// Generate a unique class code
const generateUniqueClassCode = async () => {
  let code;
  let isUnique = false;
  
  do {
    code = generateClassCode();
    isUnique = await isClassCodeUnique(code);
  } while (!isUnique);
  
  return code;
};

module.exports = {
  admin,
  db,
  auth,
  bucket,
  generateUniqueClassCode
};