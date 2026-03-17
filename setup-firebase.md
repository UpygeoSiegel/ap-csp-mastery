# Firebase Setup Instructions

The application is ready to run, but you need to configure Firebase first. Here's a step-by-step guide:

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Create a project"
3. Name your project (e.g., "ap-csp-mastery")
4. Follow the setup wizard

## Step 2: Enable Firestore Database

1. In your Firebase project, click "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to you

## Step 3: Enable Authentication

1. Click "Authentication" in the sidebar
2. Go to "Sign-in method" tab
3. Enable "Email/Password" provider

## Step 4: Get Service Account Credentials

1. Go to Project Settings (gear icon)
2. Click "Service accounts" tab
3. Click "Generate new private key"
4. Download the JSON file
5. Copy the values to your `.env` file

## Step 5: Configure Environment Variables

Update your `.env` file with the downloaded credentials:

```env
FIREBASE_PROJECT_ID=your-actual-project-id
FIREBASE_PRIVATE_KEY_ID=your-private-key-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Actual-Private-Key\n-----END PRIVATE KEY-----"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your-client-id
```

## Step 6: Test the Setup

Once configured correctly, run:

```bash
npm run seed
```

This will populate your Firestore database with all the topics and questions.

## Step 7: Start the Server

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Troubleshooting

**"5 NOT_FOUND" Error**: This means Firestore database hasn't been created yet. Follow Step 2 above.

**"Permission denied" Error**: Check that your service account has the right permissions in Firebase Console.

**"Invalid credentials" Error**: Double-check that all environment variables match your downloaded JSON file exactly.

## Current Status

✅ Backend API complete with all routes
✅ Database schema designed  
✅ Seed script ready with 5 topics and 125 questions
✅ Frontend foundation with authentication forms
✅ Complete documentation and setup instructions

🔧 **Next**: Configure Firebase following the steps above, then run the seed script to populate your database.