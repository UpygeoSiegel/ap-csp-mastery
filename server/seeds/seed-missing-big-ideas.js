/**
 * Seed script to create missing Big Ideas and Topics
 * based on questions that already exist in the database
 * Run with: node server/seeds/seed-missing-big-ideas.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

// Define all Big Ideas
const bigIdeas = [
  {
    id: 'big-idea-1',
    name: 'Big Idea 1: Creative Development',
    shortName: 'Creative Development',
    description: 'Computing is a creative discipline that enables innovation through collaboration and iterative design.',
    order: 1,
    color: '#3B82F6'
  },
  {
    id: 'big-idea-2',
    name: 'Big Idea 2: Data',
    shortName: 'Data',
    description: 'Data is central to computing. Understanding how data is represented, stored, and manipulated is essential.',
    order: 2,
    color: '#10B981'
  },
  {
    id: 'big-idea-3',
    name: 'Big Idea 3: Algorithms and Programming',
    shortName: 'Algorithms & Programming',
    description: 'Programmers use algorithms to develop programs that automate processes and solve problems.',
    order: 3,
    color: '#F59E0B'
  },
  {
    id: 'big-idea-4',
    name: 'Big Idea 4: Computing Systems and Networks',
    shortName: 'Systems & Networks',
    description: 'Computer systems and networks facilitate the transfer of data and enable collaboration.',
    order: 4,
    color: '#8B5CF6'
  },
  {
    id: 'big-idea-5',
    name: 'Big Idea 5: Impact of Computing',
    shortName: 'Impact of Computing',
    description: 'Computers and computing have revolutionized our lives, with both beneficial and harmful effects.',
    order: 5,
    color: '#EC4899'
  }
];

// Define topics based on existing question topic IDs in the database
const topics = [
  // Big Idea 3 topics (topic-3.x format found in questions)
  { id: 'topic-3.1', bigIdeaId: 'big-idea-3', name: '3.1 Variables and Assignments', description: 'Variables are used to store and manage data in programs.', order: 1 },
  { id: 'topic-3.2', bigIdeaId: 'big-idea-3', name: '3.2 Data Abstraction', description: 'Data abstraction manages complexity by giving a collection of data a name.', order: 2 },
  { id: 'topic-3.3', bigIdeaId: 'big-idea-3', name: '3.3 Mathematical Expressions', description: 'Mathematical expressions compute values using arithmetic operators.', order: 3 },
  { id: 'topic-3.4', bigIdeaId: 'big-idea-3', name: '3.4 Strings', description: 'Strings are sequences of characters used to represent text.', order: 4 },
  { id: 'topic-3.5', bigIdeaId: 'big-idea-3', name: '3.5 Boolean Expressions', description: 'Boolean expressions evaluate to true or false for decision making.', order: 5 },
  { id: 'topic-3.6', bigIdeaId: 'big-idea-3', name: '3.6 Conditionals', description: 'Conditionals allow programs to make decisions and execute different code paths.', order: 6 },
  { id: 'topic-3.7', bigIdeaId: 'big-idea-3', name: '3.7 Nested Conditionals', description: 'Nested conditionals allow for more complex decision-making structures.', order: 7 },
  { id: 'topic-3.8', bigIdeaId: 'big-idea-3', name: '3.8 Iteration', description: 'Iteration allows programs to repeat code using loops.', order: 8 },
  { id: 'topic-3.9', bigIdeaId: 'big-idea-3', name: '3.9 Developing Algorithms', description: 'Algorithms can be created from an idea or by combining existing algorithms.', order: 9 },
  { id: 'topic-3.10', bigIdeaId: 'big-idea-3', name: '3.10 Lists', description: 'Lists are used to store multiple items in a single variable.', order: 10 },
  { id: 'topic-3.11', bigIdeaId: 'big-idea-3', name: '3.11 Binary Search', description: 'Binary search is an efficient algorithm for finding items in a sorted list.', order: 11 },
  { id: 'topic-3.12', bigIdeaId: 'big-idea-3', name: '3.12 Calling Procedures', description: 'Procedures are reusable blocks of code that perform specific tasks.', order: 12 },
  { id: 'topic-3.13', bigIdeaId: 'big-idea-3', name: '3.13 Developing Procedures', description: 'Developing procedures involves creating reusable code components.', order: 13 },
  { id: 'topic-3.14', bigIdeaId: 'big-idea-3', name: '3.14 Libraries', description: 'Libraries provide pre-written code that can be used in programs.', order: 14 },
  { id: 'topic-3.15', bigIdeaId: 'big-idea-3', name: '3.15 Random Values', description: 'Random values add unpredictability to programs.', order: 15 },
  { id: 'topic-3.16', bigIdeaId: 'big-idea-3', name: '3.16 Simulations', description: 'Simulations model real-world processes using programs.', order: 16 },
  { id: 'topic-3.17', bigIdeaId: 'big-idea-3', name: '3.17 Algorithmic Efficiency', description: 'Algorithmic efficiency measures how well an algorithm performs.', order: 17 },
  { id: 'topic-3.18', bigIdeaId: 'big-idea-3', name: '3.18 Undecidable Problems', description: 'Some problems cannot be solved by any algorithm.', order: 18 },

  // Big Idea 4 topics
  { id: 'topic-4.1', bigIdeaId: 'big-idea-4', name: '4.1 The Internet', description: 'The Internet is a network of interconnected computing devices.', order: 1 },
  { id: 'topic-4.2', bigIdeaId: 'big-idea-4', name: '4.2 Fault Tolerance', description: 'Fault tolerance allows systems to continue operating despite failures.', order: 2 },
  { id: 'topic-4.3', bigIdeaId: 'big-idea-4', name: '4.3 Parallel and Distributed Computing', description: 'Parallel and distributed computing divides tasks across multiple processors.', order: 3 },

  // Big Idea 5 topics
  { id: 'topic-5.1', bigIdeaId: 'big-idea-5', name: '5.1 Beneficial and Harmful Effects', description: 'Computing has both beneficial and harmful effects on society.', order: 1 },
  { id: 'topic-5.2', bigIdeaId: 'big-idea-5', name: '5.2 Digital Divide', description: 'The digital divide refers to unequal access to technology.', order: 2 },
  { id: 'topic-5.3', bigIdeaId: 'big-idea-5', name: '5.3 Computing Bias', description: 'Computing systems can reflect and amplify human biases.', order: 3 },
  { id: 'topic-5.4', bigIdeaId: 'big-idea-5', name: '5.4 Crowdsourcing', description: 'Crowdsourcing uses contributions from many people to solve problems.', order: 4 },
  { id: 'topic-5.5', bigIdeaId: 'big-idea-5', name: '5.5 Legal and Ethical Concerns', description: 'Computing raises important legal and ethical questions.', order: 5 },
  { id: 'topic-5.6', bigIdeaId: 'big-idea-5', name: '5.6 Safe Computing', description: 'Safe computing practices protect users and data from threats.', order: 6 }
];

async function seedMissingData() {
  console.log('=== SEEDING MISSING BIG IDEAS AND TOPICS ===\n');
  console.log(`Using project: ${process.env.FIREBASE_PROJECT_ID}`);

  try {
    // Seed Big Ideas
    console.log('\nSeeding Big Ideas...');
    for (const bigIdea of bigIdeas) {
      const existingDoc = await db.collection('bigIdeas').doc(bigIdea.id).get();
      if (existingDoc.exists) {
        console.log(`  - ${bigIdea.id} already exists, skipping`);
      } else {
        await db.collection('bigIdeas').doc(bigIdea.id).set({
          ...bigIdea,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        console.log(`  + Created ${bigIdea.id}: ${bigIdea.name}`);
      }
    }

    // Seed Topics
    console.log('\nSeeding Topics...');
    for (const topic of topics) {
      const existingDoc = await db.collection('topics').doc(topic.id).get();
      if (existingDoc.exists) {
        console.log(`  - ${topic.id} already exists, skipping`);
      } else {
        await db.collection('topics').doc(topic.id).set({
          ...topic,
          learningObjectives: [],
          createdAt: new Date(),
          updatedAt: new Date()
        });
        console.log(`  + Created ${topic.id}: ${topic.name}`);
      }
    }

    // Update questions to have correct bigIdeaId
    console.log('\nUpdating questions with bigIdeaId...');
    const questionsSnapshot = await db.collection('questions').get();
    let updatedCount = 0;

    for (const doc of questionsSnapshot.docs) {
      const question = doc.data();
      const topicId = question.topicId;

      // Find the topic to get the bigIdeaId
      const topic = topics.find(t => t.id === topicId);
      if (topic && question.bigIdeaId !== topic.bigIdeaId) {
        await db.collection('questions').doc(doc.id).update({
          bigIdeaId: topic.bigIdeaId,
          updatedAt: new Date()
        });
        updatedCount++;
      }
    }
    console.log(`  Updated ${updatedCount} questions with correct bigIdeaId`);

    console.log('\n=== SEEDING COMPLETE ===');

    // Verify
    console.log('\nVerification:');
    const bigIdeasCount = await db.collection('bigIdeas').get();
    const topicsCount = await db.collection('topics').get();
    const questionsCount = await db.collection('questions').get();

    console.log(`  Big Ideas: ${bigIdeasCount.size}`);
    console.log(`  Topics: ${topicsCount.size}`);
    console.log(`  Questions: ${questionsCount.size}`);

  } catch (error) {
    console.error('Seeding error:', error);
    throw error;
  }
}

seedMissingData()
  .then(() => {
    console.log('\nDone!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Failed:', err);
    process.exit(1);
  });
