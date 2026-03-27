/**
 * Seed script for Khan Academy inspired questions
 * Adds 10 new questions to each topic (1.1 to 5.6)
 * Run with: node server/seeds/seed-khan-questions.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Use the same Firebase setup as the server
const { db } = require('../firebase');

const topicsList = [
  { id: 'crd-1-1', name: '1.1 Collaboration', bigIdeaId: 'big-idea-1' },
  { id: 'crd-1-2', name: '1.2 Program Function and Purpose', bigIdeaId: 'big-idea-1' },
  { id: 'crd-1-3', name: '1.3 Program Design and Development', bigIdeaId: 'big-idea-1' },
  { id: 'crd-1-4', name: '1.4 Identifying and Correcting Errors', bigIdeaId: 'big-idea-1' },
  { id: 'dat-2-1', name: '2.1 Binary Numbers', bigIdeaId: 'big-idea-2' },
  { id: 'dat-2-2', name: '2.2 Data Compression', bigIdeaId: 'big-idea-2' },
  { id: 'dat-2-3', name: '2.3 Extracting Information from Data', bigIdeaId: 'big-idea-2' },
  { id: 'dat-2-4', name: '2.4 Using Programs with Data', bigIdeaId: 'big-idea-2' },
  { id: 'aap-3-1', name: '3.1 Variables and Assignments', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-2', name: '3.2 Data Abstraction', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-3', name: '3.3 Mathematical Expressions', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-4', name: '3.4 Strings', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-5', name: '3.5 Boolean Expressions', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-6', name: '3.6 Conditionals', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-7', name: '3.7 Nested Conditionals', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-8', name: '3.8 Iteration', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-9', name: '3.9 Developing Algorithms', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-10', name: '3.10 Lists', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-11', name: '3.11 Binary Search', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-12', name: '3.12 Calling Procedures', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-13', name: '3.13 Developing Procedures', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-14', name: '3.14 Libraries', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-15', name: '3.15 Random Values', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-16', name: '3.16 Simulations', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-17', name: '3.17 Algorithmic Efficiency', bigIdeaId: 'big-idea-3' },
  { id: 'aap-3-18', name: '3.18 Undecidable Problems', bigIdeaId: 'big-idea-3' },
  { id: 'csn-4-1', name: '4.1 The Internet', bigIdeaId: 'big-idea-4' },
  { id: 'csn-4-2', name: '4.2 Fault Tolerance', bigIdeaId: 'big-idea-4' },
  { id: 'csn-4-3', name: '4.3 Parallel and Distributed Computing', bigIdeaId: 'big-idea-4' },
  { id: 'ioc-5-1', name: '5.1 Beneficial and Harmful Effects', bigIdeaId: 'big-idea-5' },
  { id: 'ioc-5-2', name: '5.2 Digital Divide', bigIdeaId: 'big-idea-5' },
  { id: 'ioc-5-3', name: '5.3 Computing Bias', bigIdeaId: 'big-idea-5' },
  { id: 'ioc-5-4', name: '5.4 Crowdsourcing', bigIdeaId: 'big-idea-5' },
  { id: 'ioc-5-5', name: '5.5 Legal and Ethical Concerns', bigIdeaId: 'big-idea-5' },
  { id: 'ioc-5-6', name: '5.6 Safe Computing', bigIdeaId: 'big-idea-5' }
];

// Helper to generate questions based on topics
function generateQuestions(topicId) {
  const questions = [];
  
  // Topic-specific logic for generating 10 questions
  switch(topicId) {
    case 'crd-1-1': // Collaboration
      for(let i=1; i<=10; i++) {
        questions.push({
          text: `Question ${i} on Collaboration: Which of the following best describes how a diverse development team helps in creating a computing innovation?`,
          type: 'multiple_choice',
          options: [
            { id: 'a', text: 'It reduces the need for documentation.' },
            { id: 'b', text: 'It allows for multiple perspectives to be considered during the design process.' },
            { id: 'c', text: 'It guarantees that the program will have zero logic errors.' },
            { id: 'd', text: 'It makes the development process faster by eliminating the need for meetings.' }
          ],
          correctAnswers: ['b'],
          explanation: 'Diverse teams bring different experiences and viewpoints, leading to more inclusive and effective software design.',
          tags: ['khan']
        });
      }
      break;
    
    case 'dat-2-1': // Binary Numbers
      for(let i=1; i<=10; i++) {
        const val = Math.floor(Math.random() * 31) + 1;
        const binary = val.toString(2);
        questions.push({
          text: `Question ${i} on Binary: What is the decimal (base 10) value of the binary number ${binary}?`,
          type: 'multiple_choice',
          options: [
            { id: 'a', text: `${val}` },
            { id: 'b', text: `${val + 1}` },
            { id: 'c', text: `${val - 1}` },
            { id: 'd', text: `${val * 2}` }
          ].sort(() => Math.random() - 0.5),
          correctAnswers: ['a'],
          explanation: `The binary number ${binary} converts to ${val} in decimal.`,
          tags: ['khan']
        });
      }
      break;

    case 'dat-2-2': // Data Compression
      for(let i=1; i<=10; i++) {
        questions.push({
          text: `Question ${i} on Compression: A user wants to compress a text document so that they can perfectly restore the original file later. Which type of compression should they use?`,
          type: 'multiple_choice',
          options: [
            { id: 'a', text: 'Lossy compression' },
            { id: 'b', text: 'Lossless compression' },
            { id: 'c', text: 'Analog compression' },
            { id: 'd', text: 'Metadata compression' }
          ],
          correctAnswers: ['b'],
          explanation: 'Lossless compression allows for the exact reconstruction of the original data.',
          tags: ['khan']
        });
      }
      break;

    case 'aap-3-1': // Variables and Assignments
      for(let i=1; i<=10; i++) {
        const val1 = Math.floor(Math.random() * 10);
        const val2 = Math.floor(Math.random() * 10);
        questions.push({
          text: `Question ${i} on Variables: What will be displayed after the following code segment is executed?\n\nx ← ${val1}\ny ← ${val2}\nx ← x + y\nDISPLAY(x)`,
          type: 'multiple_choice',
          options: [
            { id: 'a', text: `${val1}` },
            { id: 'b', text: `${val2}` },
            { id: 'c', text: `${val1 + val2}` },
            { id: 'd', text: `${val1}${val2}` }
          ],
          correctAnswers: ['c'],
          explanation: `The variable x is updated to the sum of ${val1} and ${val2}.`,
          tags: ['khan']
        });
      }
      break;

    case 'csn-4-1': // The Internet
      for(let i=1; i<=10; i++) {
        questions.push({
          text: `Question ${i} on The Internet: Which of the following is responsible for translating human-readable domain names (like example.com) into IP addresses?`,
          type: 'multiple_choice',
          options: [
            { id: 'a', text: 'HTTP' },
            { id: 'b', text: 'TCP' },
            { id: 'c', text: 'DNS' },
            { id: 'd', text: 'IP' }
          ],
          correctAnswers: ['c'],
          explanation: 'The Domain Name System (DNS) acts like a phone book for the internet.',
          tags: ['khan']
        });
      }
      break;

    case 'ioc-5-1': // Beneficial and Harmful Effects
      for(let i=1; i<=10; i++) {
        questions.push({
          text: `Question ${i} on Impact: Which of the following is an example of an unintended negative effect of a social media platform?`,
          type: 'multiple_choice',
          options: [
            { id: 'a', text: 'Allowing people to connect with distant relatives.' },
            { id: 'b', text: 'Providing a space for people to share their hobbies.' },
            { id: 'c', text: 'The rapid spread of misinformation during an election.' },
            { id: 'd', text: 'Enabling small businesses to advertise to local customers.' }
          ],
          correctAnswers: ['c'],
          explanation: 'Unintended effects are consequences that the designers did not specifically plan for, such as the spread of false information.',
          tags: ['khan']
        });
      }
      break;

    default:
      // Generic fallback for other topics
      for(let i=1; i<=10; i++) {
        questions.push({
          text: `Question ${i} on ${topicsList.find(t => t.id === topicId).name.split(' ')[1]}: Which of the following best represents a core concept in this topic?`,
          type: 'multiple_choice',
          options: [
            { id: 'a', text: 'Option A (Correct)' },
            { id: 'b', text: 'Option B' },
            { id: 'c', text: 'Option C' },
            { id: 'd', text: 'Option D' }
          ],
          correctAnswers: ['a'],
          explanation: 'This is a placeholder explanation for the generated question.',
          tags: ['khan']
        });
      }
  }
  
  return questions;
}

async function seedKhanQuestions() {
  console.log('🚀 Starting to seed Khan Academy inspired questions...');

  try {
    let totalQuestions = 0;

    for (const topic of topicsList) {
      console.log(`Processing Topic: ${topic.name}...`);
      const questions = generateQuestions(topic.id);

      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const questionId = `khan-${topic.id}-q${i + 1}`;

        await db.collection('questions').doc(questionId).set({
          ...q,
          id: questionId,
          topicId: topic.id,
          topicName: topic.name,
          bigIdeaId: topic.bigIdeaId,
          isCustom: true, // Marked as custom since we generated them
          addedBy: 'khan-generator',
          addedAt: new Date(),
          deactivated: false,
          createdAt: new Date(),
          updatedAt: new Date()
        });

        totalQuestions++;
      }
      console.log(`  ✅ Added ${questions.length} questions.`);
    }

    console.log('\n✨ Seeding complete!');
    console.log(`Total questions added: ${totalQuestions}`);
    process.exit(0);

  } catch (error) {
    console.error('❌ Error seeding questions:', error);
    process.exit(1);
  }
}

seedKhanQuestions();
