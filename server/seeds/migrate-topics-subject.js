/**
 * Migration script to add 'subject' field to all topics based on their parent bigIdea.
 * Run with: node server/seeds/migrate-topics-subject.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const { db } = require('../firebase');

async function migrateTopicsSubject() {
  console.log('Starting migration: adding subject field to topics...');

  try {
    // 1. Get all bigIdeas to map id -> subject
    const bigIdeasSnapshot = await db.collection('bigIdeas').get();
    const bigIdeaSubjectMap = {};
    bigIdeasSnapshot.docs.forEach(doc => {
      bigIdeaSubjectMap[doc.id] = doc.data().subject || 'ap-csp';
    });

    // 2. Update topics
    const topicsSnapshot = await db.collection('topics').get();
    let topicsUpdated = 0;

    const batch = db.batch();
    topicsSnapshot.docs.forEach(doc => {
      const data = doc.data();
      const subject = bigIdeaSubjectMap[data.bigIdeaId] || 'ap-csp';
      
      if (!data.subject) {
        batch.update(doc.ref, { subject: subject, updatedAt: new Date() });
        topicsUpdated++;
      }
    });

    if (topicsUpdated > 0) {
      await batch.commit();
      console.log(`Updated ${topicsUpdated} topics with subject.`);
    } else {
      console.log('No topics needed updating.');
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrateTopicsSubject().then(() => process.exit(0));
