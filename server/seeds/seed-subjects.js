/**
 * Seed script to create the subjects collection
 * Run with: node server/seeds/seed-subjects.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const { db } = require('../firebase');

const subjects = [
  {
    id: 'ap-csp',
    name: 'AP Computer Science Principles',
    shortName: 'AP CSP',
    description: 'College Board AP Computer Science Principles course covering computational thinking, programming, and the impact of computing.',
    topLevelTermSingular: 'Big Idea',
    topLevelTermPlural: 'Big Ideas',
    color: '#3B82F6',
    order: 1,
    isActive: true
  },
  {
    id: 'ap-calculus-ab',
    name: 'AP Calculus AB',
    shortName: 'AP Calc AB',
    description: 'College Board AP Calculus AB course covering limits, derivatives, integrals, and their applications.',
    topLevelTermSingular: 'Unit',
    topLevelTermPlural: 'Units',
    color: '#10B981',
    order: 2,
    isActive: true
  }
];

async function seedSubjects() {
  console.log('Seeding subjects collection...');

  try {
    const batch = db.batch();

    for (const subject of subjects) {
      const ref = db.collection('subjects').doc(subject.id);
      batch.set(ref, {
        ...subject,
        createdAt: new Date(),
        updatedAt: new Date()
      }, { merge: true }); // merge to avoid overwriting if already exists
    }

    await batch.commit();
    console.log(`Seeded ${subjects.length} subjects successfully!`);

  } catch (error) {
    console.error('Seeding subjects failed:', error);
    process.exit(1);
  }
}

seedSubjects().then(() => process.exit(0));
