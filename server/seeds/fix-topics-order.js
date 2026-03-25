/**
 * Fix missing order field on Topics
 * Run with: node server/seeds/fix-topics-order.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

async function fixTopicsOrder() {
  console.log('Fixing Topics order field...\n');

  const topicsSnapshot = await db.collection('topics').get();

  for (const doc of topicsSnapshot.docs) {
    const topic = doc.data();
    const topicId = doc.id;

    // Extract order from topic ID or name
    let order = topic.order;

    if (order === undefined || order === null) {
      // Try to extract from ID like "topic-3.5" -> 5, or "crd-1-2" -> 2
      const match = topicId.match(/[\-.](\d+)$/);
      if (match) {
        order = parseInt(match[1], 10);
      } else {
        // Try from name like "3.5 Boolean Expressions" -> 5
        const nameMatch = topic.name?.match(/^\d+\.(\d+)/);
        if (nameMatch) {
          order = parseInt(nameMatch[1], 10);
        } else {
          order = 1; // Default
        }
      }

      await doc.ref.update({
        order: order,
        updatedAt: new Date()
      });
      console.log(`Fixed ${topicId}: set order to ${order}`);
    } else {
      console.log(`${topicId}: already has order ${order}`);
    }
  }

  console.log('\nDone!');
}

fixTopicsOrder()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
