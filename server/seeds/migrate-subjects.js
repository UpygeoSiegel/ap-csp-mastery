/**
 * Migration script to add 'subject' field to existing bigIdeas and classes.
 * Default subject is 'ap-csp'.
 * Run with: node server/seeds/migrate-subjects.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const { db } = require('../firebase');

async function migrateSubjects() {
  console.log('Starting migration: adding subject field to bigIdeas and classes...');

  try {
    // 1. Update bigIdeas
    console.log('Updating bigIdeas...');
    const bigIdeasSnapshot = await db.collection('bigIdeas').get();
    let bigIdeasUpdated = 0;

    const bigIdeasBatch = db.batch();
    bigIdeasSnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (!data.subject) {
        bigIdeasBatch.update(doc.ref, { subject: 'ap-csp', updatedAt: new Date() });
        bigIdeasUpdated++;
      }
    });

    if (bigIdeasUpdated > 0) {
      await bigIdeasBatch.commit();
      console.log(`Updated ${bigIdeasUpdated} bigIdeas.`);
    } else {
      console.log('No bigIdeas needed updating.');
    }

    // 2. Update classes
    console.log('Updating classes...');
    const classesSnapshot = await db.collection('classes').get();
    let classesUpdated = 0;

    const classesBatch = db.batch();
    classesSnapshot.docs.forEach(doc => {
      const data = doc.data();
      if (!data.subject) {
        classesBatch.update(doc.ref, { subject: 'ap-csp', updatedAt: new Date() });
        classesUpdated++;
      }
    });

    if (classesUpdated > 0) {
      await classesBatch.commit();
      console.log(`Updated ${classesUpdated} classes.`);
    } else {
      console.log('No classes needed updating.');
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

migrateSubjects().then(() => process.exit(0));
