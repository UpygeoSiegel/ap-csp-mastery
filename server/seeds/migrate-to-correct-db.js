/**
 * Migration script to copy Big Ideas and Topics from wrong database to correct one
 *
 * Before running:
 * 1. Rename your correct service account key to: serviceAccountKey.json
 * 2. Rename the wrong database key to: serviceAccountKey-wrong.json
 *
 * Run with: node server/seeds/migrate-to-correct-db.js
 */

const admin = require('firebase-admin');
const path = require('path');

// Initialize the CORRECT database (ap-csp-mastery)
const correctApp = admin.initializeApp({
  credential: admin.credential.cert(require(path.join(__dirname, '../../serviceAccountKey.json')))
}, 'correct');

// Initialize the WRONG database (ap-csp-mastery-d520f)
const wrongApp = admin.initializeApp({
  credential: admin.credential.cert(require(path.join(__dirname, '../../serviceAccountKey-wrong.json')))
}, 'wrong');

const correctDb = correctApp.firestore();
const wrongDb = wrongApp.firestore();

async function migrateData() {
  console.log('Starting migration...\n');

  try {
    // Migrate Big Ideas
    console.log('Migrating Big Ideas...');
    const bigIdeasSnapshot = await wrongDb.collection('bigIdeas').get();

    for (const doc of bigIdeasSnapshot.docs) {
      await correctDb.collection('bigIdeas').doc(doc.id).set(doc.data());
      console.log(`  - Migrated Big Idea: ${doc.id}`);
    }
    console.log(`Migrated ${bigIdeasSnapshot.size} Big Ideas\n`);

    // Migrate Topics
    console.log('Migrating Topics...');
    const topicsSnapshot = await wrongDb.collection('topics').get();

    for (const doc of topicsSnapshot.docs) {
      await correctDb.collection('topics').doc(doc.id).set(doc.data());
      console.log(`  - Migrated Topic: ${doc.id}`);
    }
    console.log(`Migrated ${topicsSnapshot.size} Topics\n`);

    console.log('Migration complete!');

  } catch (error) {
    console.error('Migration error:', error);
    throw error;
  }
}

migrateData()
  .then(() => {
    console.log('\nDone! You can now delete serviceAccountKey-wrong.json');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Migration failed:', error);
    process.exit(1);
  });
