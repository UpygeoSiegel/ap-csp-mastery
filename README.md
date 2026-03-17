# CSP Ready - AP Computer Science Principles Mastery Platform

A comprehensive mastery-based quiz platform designed specifically for AP Computer Science Principles teachers and students. Features sequential topic unlocking, detailed progress tracking, and a complete question bank covering all AP CSP curriculum topics.

## 🚀 Features

### For Students
- **Mastery-Based Learning**: Topics unlock sequentially as you master previous ones
- **Interactive Quizzes**: 5-question quizzes with immediate feedback
- **Progress Tracking**: Visual progress map showing completed and available topics
- **Detailed Explanations**: Learn from mistakes with comprehensive explanations
- **Retake System**: Failed quizzes can be retaken with fresh question sets

### For Teachers
- **Class Management**: Create classes with unique codes for easy student enrollment
- **Progress Monitoring**: View detailed progress for all students across all topics
- **Question Bank Management**: Add custom questions and manage existing ones
- **Teacher Overrides**: Unlock topics or mark students as passed when needed
- **Export Features**: Download class progress as CSV for gradebook integration

### Technical Features
- **Firebase Backend**: Secure authentication and real-time database
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **RESTful API**: Clean, documented API endpoints
- **Role-Based Access**: Separate interfaces and permissions for teachers and students

## 📚 Curriculum Coverage

The platform includes 5 comprehensive topics from Unit 1: Digital Information:

1. **Number systems and binary** (25 questions)
2. **Bits, bytes, and data representation** (25 questions)
3. **Text encoding (ASCII, Unicode)** (25 questions)
4. **Analog vs. digital data and sampling** (25 questions)
5. **Lossless vs. lossy compression** (25 questions)

Each topic contains a mix of multiple-choice and multiple-select questions designed to match AP CSP exam format and difficulty.

## 🛠 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Firebase project with Firestore and Authentication enabled

### Step 1: Clone and Install
```bash
git clone <repository-url>
cd ap-exam-mastery
npm install
```

### Step 2: Firebase Setup

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Enable Authentication with Email/Password provider

2. **Generate Service Account Key**
   - In Firebase Console, go to Project Settings > Service Accounts
   - Click "Generate New Private Key"
   - Download the JSON file

3. **Configure Environment Variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your Firebase configuration in `.env`:
   ```env
   FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_PRIVATE_KEY_ID=your-private-key-id
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Private-Key-Here\n-----END PRIVATE KEY-----\n"
   FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project-id.iam.gserviceaccount.com
   FIREBASE_CLIENT_ID=your-client-id
   FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
   FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
   FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
   FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxxxx%40your-project-id.iam.gserviceaccount.com
   
   PORT=3000
   NODE_ENV=development
   APP_DOMAIN=cspready.app
   ```

### Step 3: Initialize Database
```bash
npm run seed
```

This will populate Firestore with all topics and questions.

### Step 4: Start the Server
```bash
npm start
# or for development with auto-restart:
npm run dev
```

The application will be available at `http://localhost:3000`

## 🎯 Usage Guide

### For Teachers

1. **Sign Up**: Visit the homepage and create a teacher account
2. **Create Classes**: Set up classes and get unique class codes
3. **Share Codes**: Give class codes to students for enrollment
4. **Monitor Progress**: View student progress on the dashboard
5. **Manage Questions**: Add custom questions or modify existing ones

### For Students

1. **Sign Up**: Use your teacher's class code to create an account
2. **Start Learning**: Begin with the first unlocked topic
3. **Take Quizzes**: Complete 5-question quizzes (need 4/5 to pass)
4. **Progress**: Topics unlock as you master previous ones
5. **Review**: View detailed results and explanations

## 🔌 API Documentation

### Authentication Endpoints

#### Teacher Signup
```http
POST /api/auth/teacher-signup
Content-Type: application/json

{
  "email": "teacher@school.edu",
  "password": "securepassword",
  "displayName": "Ms. Johnson"
}
```

#### Student Signup
```http
POST /api/auth/student-signup
Content-Type: application/json

{
  "classCode": "ABC123",
  "displayName": "John Smith",
  "username": "johnS",
  "password": "studentpassword"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "teacher@school.edu",
  "password": "securepassword",
  "isTeacher": true
}
```

### Class Management

#### Get Teacher's Classes
```http
GET /api/classes
Authorization: Bearer <firebase-id-token>
```

#### Create New Class
```http
POST /api/classes
Authorization: Bearer <firebase-id-token>
Content-Type: application/json

{
  "name": "Period 3 - AP CSP"
}
```

### Quiz System

#### Start Quiz
```http
POST /api/quizzes/start
Authorization: Bearer <firebase-id-token>
Content-Type: application/json

{
  "topicId": "unit1-topic1"
}
```

#### Submit Quiz
```http
POST /api/quizzes/submit
Authorization: Bearer <firebase-id-token>
Content-Type: application/json

{
  "attemptId": "uuid-here",
  "topicId": "unit1-topic1",
  "answers": [
    {
      "questionId": "q1-1",
      "selectedAnswerIds": ["b"]
    }
  ]
}
```

### Progress Tracking

#### Get Student Progress
```http
GET /api/progress/{studentId}
Authorization: Bearer <firebase-id-token>
```

#### Teacher Override
```http
POST /api/progress/override
Authorization: Bearer <firebase-id-token>
Content-Type: application/json

{
  "studentId": "student-uid",
  "topicId": "unit1-topic2",
  "classId": "class-id",
  "action": "unlock"
}
```

## 📊 Database Schema

### Collections

#### users/{userId}
```javascript
{
  role: "teacher" | "student",
  displayName: "User Name",
  email: "user@domain.com",
  classIds: ["class-id-1"],
  username: "username", // students only
  createdAt: Timestamp
}
```

#### classes/{classId}
```javascript
{
  name: "Period 2 - AP CSP",
  code: "ABC123", // 6-char unique code
  teacherId: "teacher-uid",
  teacherName: "Teacher Name",
  studentIds: ["student-uid-1", "student-uid-2"],
  createdAt: Timestamp
}
```

#### topics/{topicId}
```javascript
{
  name: "Number systems and binary",
  unit: "Unit 1: Digital Information",
  order: 1,
  questions: [
    {
      id: "q1-1",
      text: "What is the decimal value of binary 1011?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "9" },
        { id: "b", text: "11" }
      ],
      correctAnswers: ["b"],
      explanation: "Binary 1011 = 8 + 2 + 1 = 11",
      isCustom: false,
      addedBy: null
    }
  ]
}
```

#### studentProgress/{progressId}
```javascript
{
  studentId: "student-uid",
  topicId: "unit1-topic1",
  classId: "class-id",
  status: "locked" | "available" | "passed",
  attempts: [
    {
      attemptId: "uuid",
      timestamp: Timestamp,
      score: 4,
      passed: true,
      questionIds: ["q1-1", "q1-2"],
      answers: [
        {
          questionId: "q1-1",
          selectedAnswerIds: ["b"],
          correct: true
        }
      ]
    }
  ]
}
```

## 🚢 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
PORT=3000
# ... Firebase config
```

### Deployment Platforms

#### Railway
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

#### Render
1. Create new Web Service
2. Connect repository
3. Set environment variables
4. Deploy

#### Heroku
1. Install Heroku CLI
2. Create Heroku app: `heroku create csp-ready`
3. Set config vars: `heroku config:set FIREBASE_PROJECT_ID=...`
4. Deploy: `git push heroku main`

## 🛡 Security Features

- **Firebase Authentication**: Secure user authentication and session management
- **Role-Based Access**: Separate permissions for teachers and students
- **Input Validation**: Server-side validation for all endpoints
- **Environment Variables**: Sensitive config stored in environment variables
- **CORS Protection**: Configured for production domains

## 🐛 Troubleshooting

### Common Issues

1. **"Firebase project not found"**
   - Check your `FIREBASE_PROJECT_ID` in `.env`
   - Verify the project exists in Firebase Console

2. **"Permission denied"**
   - Ensure Firestore security rules allow authenticated access
   - Check user roles and permissions

3. **"Cannot read properties of undefined"**
   - Run the seed script: `npm run seed`
   - Check that all environment variables are set

4. **"Class code not found"**
   - Verify the teacher has created the class
   - Check that the code is entered correctly (case-sensitive)

## 📝 Development

### Project Structure
```
csp-ready/
├── server/
│   ├── index.js              # Express app entry point
│   ├── firebase.js           # Firebase configuration
│   ├── middleware/
│   │   └── verifyToken.js    # Authentication middleware
│   └── routes/
│       ├── auth.js           # Authentication endpoints
│       ├── classes.js        # Class management
│       ├── progress.js       # Progress tracking
│       ├── quizzes.js        # Quiz system
│       └── questions.js      # Question management
├── public/                   # Static frontend files (to be created)
├── seed/
│   └── seed.js              # Database initialization
├── package.json
└── README.md
```

### Adding New Topics

1. Edit `seed/seed.js`
2. Add topic data with 25 questions
3. Run `npm run seed` to update database

### Custom Question Format
```javascript
{
  id: "unique-id",
  text: "Question text",
  type: "multiple_choice" | "multiple_select",
  options: [
    { id: "a", text: "Option A" },
    { id: "b", text: "Option B" }
  ],
  correctAnswers: ["a"], // Array of option IDs
  explanation: "Explanation of the correct answer",
  isCustom: true,
  addedBy: "teacher-uid"
}
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## 📞 Support

For issues and questions:
1. Check this README and troubleshooting section
2. Search existing GitHub issues
3. Create a new issue with detailed description

---

Built with ❤️ for AP Computer Science Principles educators and students.