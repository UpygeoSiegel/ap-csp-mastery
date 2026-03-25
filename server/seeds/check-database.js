/**
 * Diagnostic script to check what's in the database
 * Run with: node server/seeds/check-database.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

async function checkDatabase() {
  console.log('=== DATABASE DIAGNOSTIC ===\n');

  // Check Big Ideas
  console.log('BIG IDEAS:');
  console.log('-'.repeat(50));
  const bigIdeasSnapshot = await db.collection('bigIdeas').get();

  if (bigIdeasSnapshot.empty) {
    console.log('  NO BIG IDEAS FOUND!');
  } else {
    bigIdeasSnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log(`  ${doc.id}: "${data.name}" (order: ${data.order})`);
    });
  }

  // Check Topics
  console.log('\n\nTOPICS:');
  console.log('-'.repeat(50));
  const topicsSnapshot = await db.collection('topics').get();

  if (topicsSnapshot.empty) {
    console.log('  NO TOPICS FOUND!');
  } else {
    // Group by bigIdeaId
    const topicsByBigIdea = {};
    topicsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      const bigIdeaId = data.bigIdeaId || 'UNKNOWN';
      if (!topicsByBigIdea[bigIdeaId]) {
        topicsByBigIdea[bigIdeaId] = [];
      }
      topicsByBigIdea[bigIdeaId].push({
        id: doc.id,
        name: data.name,
        order: data.order,
        questionCount: data.questions ? data.questions.length : 0,
        hasQuestionsArray: Array.isArray(data.questions)
      });
    });

    for (const [bigIdeaId, topics] of Object.entries(topicsByBigIdea)) {
      console.log(`\n  ${bigIdeaId}:`);
      topics.sort((a, b) => a.order - b.order).forEach(topic => {
        const qStatus = topic.hasQuestionsArray
          ? `${topic.questionCount} questions`
          : 'NO questions array!';
        console.log(`    - ${topic.id}: "${topic.name}" (${qStatus})`);
      });
    }
  }

  // Check for topics with subcollections (wrong structure)
  console.log('\n\nCHECKING FOR QUESTIONS IN SUBCOLLECTIONS:');
  console.log('-'.repeat(50));

  let foundSubcollections = false;
  for (const topicDoc of topicsSnapshot.docs) {
    const subcoll = await db.collection('topics').doc(topicDoc.id).collection('questions').limit(1).get();
    if (!subcoll.empty) {
      foundSubcollections = true;
      const fullSubcoll = await db.collection('topics').doc(topicDoc.id).collection('questions').get();
      console.log(`  ${topicDoc.id}: ${fullSubcoll.size} questions in subcollection (WRONG!)`);
    }
  }

  if (!foundSubcollections) {
    console.log('  No subcollection questions found (good!)');
  }

  // Check Questions Collection (new structure)
  console.log('\n\nQUESTIONS COLLECTION:');
  console.log('-'.repeat(50));
  const questionsSnapshot = await db.collection('questions').get();

  if (questionsSnapshot.empty) {
    console.log('  NO QUESTIONS FOUND IN QUESTIONS COLLECTION!');
    console.log('  Run: node server/seeds/migrate-questions-to-collection.js');
  } else {
    // Group by topicId
    const questionsByTopic = {};
    questionsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      const topicId = data.topicId || 'UNKNOWN';
      if (!questionsByTopic[topicId]) {
        questionsByTopic[topicId] = { total: 0, active: 0 };
      }
      questionsByTopic[topicId].total++;
      if (!data.deactivated) {
        questionsByTopic[topicId].active++;
      }
    });

    console.log(`  Total questions in collection: ${questionsSnapshot.size}`);
    console.log('\n  Questions per topic:');
    for (const [topicId, counts] of Object.entries(questionsByTopic)) {
      console.log(`    - ${topicId}: ${counts.total} total, ${counts.active} active`);
    }
  }

  console.log('\n=== END DIAGNOSTIC ===');
}

checkDatabase()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
