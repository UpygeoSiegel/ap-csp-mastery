/**
 * Migration script to move questions from embedded arrays to separate collection
 * Run with: node server/seeds/migrate-questions-to-collection.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

async function migrateQuestions() {
  console.log('=== MIGRATING QUESTIONS TO SEPARATE COLLECTION ===\n');
  console.log(`Using project: ${process.env.FIREBASE_PROJECT_ID}`);

  try {
    // Get all topics
    const topicsSnapshot = await db.collection('topics').get();

    if (topicsSnapshot.empty) {
      console.log('No topics found in database!');
      return;
    }

    console.log(`Found ${topicsSnapshot.size} topics\n`);

    let totalQuestionsMigrated = 0;
    let topicsProcessed = 0;

    for (const topicDoc of topicsSnapshot.docs) {
      const topic = topicDoc.data();
      const topicId = topicDoc.id;

      console.log(`Processing topic: ${topicId} - ${topic.name}`);

      // Check if topic has embedded questions
      const embeddedQuestions = topic.questions || [];

      if (embeddedQuestions.length === 0) {
        console.log(`  - No embedded questions found, checking questions collection...`);

        // Check if questions already exist in collection
        const existingQuestions = await db.collection('questions')
          .where('topicId', '==', topicId)
          .get();

        if (!existingQuestions.empty) {
          console.log(`  - Found ${existingQuestions.size} questions in collection`);
        } else {
          console.log(`  - No questions found anywhere for this topic`);
        }
        continue;
      }

      console.log(`  - Found ${embeddedQuestions.length} embedded questions to migrate`);

      // Migrate each question to the questions collection
      const batch = db.batch();
      let questionsInBatch = 0;

      for (const question of embeddedQuestions) {
        // Create question document with topicId reference
        const questionRef = db.collection('questions').doc(question.id);

        batch.set(questionRef, {
          ...question,
          topicId: topicId,
          topicName: topic.name,
          bigIdeaId: topic.bigIdeaId,
          createdAt: question.addedAt || new Date(),
          updatedAt: new Date()
        });

        questionsInBatch++;
        totalQuestionsMigrated++;
      }

      // Commit the batch
      if (questionsInBatch > 0) {
        await batch.commit();
        console.log(`  - Migrated ${questionsInBatch} questions`);
      }

      topicsProcessed++;
    }

    console.log('\n=== MIGRATION COMPLETE ===');
    console.log(`Topics processed: ${topicsProcessed}`);
    console.log(`Total questions migrated: ${totalQuestionsMigrated}`);

    // Verify migration
    console.log('\n=== VERIFICATION ===');
    const questionsCount = await db.collection('questions').get();
    console.log(`Questions in 'questions' collection: ${questionsCount.size}`);

  } catch (error) {
    console.error('Migration error:', error);
    throw error;
  }
}

migrateQuestions()
  .then(() => {
    console.log('\nMigration finished successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Migration failed:', err);
    process.exit(1);
  });
