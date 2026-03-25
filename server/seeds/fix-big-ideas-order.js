/**
 * Fix missing order field on Big Ideas
 * Run with: node server/seeds/fix-big-ideas-order.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const bigIdeasData = {
  'big-idea-1': { order: 1, name: 'Big Idea 1: Creative Development', shortName: 'Creative Development', color: '#3B82F6' },
  'big-idea-2': { order: 2, name: 'Big Idea 2: Data', shortName: 'Data', color: '#10B981' },
  'big-idea-3': { order: 3, name: 'Big Idea 3: Algorithms and Programming', shortName: 'Algorithms & Programming', color: '#F59E0B' },
  'big-idea-4': { order: 4, name: 'Big Idea 4: Computing Systems and Networks', shortName: 'Systems & Networks', color: '#8B5CF6' },
  'big-idea-5': { order: 5, name: 'Big Idea 5: Impact of Computing', shortName: 'Impact of Computing', color: '#EC4899' }
};

async function fixBigIdeas() {
  console.log('Fixing Big Ideas order and metadata...\n');

  for (const [id, data] of Object.entries(bigIdeasData)) {
    const docRef = db.collection('bigIdeas').doc(id);
    const doc = await docRef.get();

    if (doc.exists) {
      await docRef.update({
        order: data.order,
        name: data.name,
        shortName: data.shortName,
        color: data.color,
        updatedAt: new Date()
      });
      console.log(`Updated ${id} with order: ${data.order}`);
    } else {
      await docRef.set({
        ...data,
        description: `Big Idea ${data.order}`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log(`Created ${id} with order: ${data.order}`);
    }
  }

  console.log('\nDone! All Big Ideas now have proper order.');
}

fixBigIdeas()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
