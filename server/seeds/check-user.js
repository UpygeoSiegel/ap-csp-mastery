const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

async function checkUser() {
  const username = 'wheresthebeef';
  console.log(`Checking for user with username: ${username}`);
  
  const usersSnapshot = await db.collection('users')
    .where('username', '==', username)
    .get();

  if (usersSnapshot.empty) {
    console.log('No user found with that username.');
    
    console.log('\nChecking all users (limit 10):');
    const allUsers = await db.collection('users').limit(10).get();
    allUsers.docs.forEach(doc => {
      const data = doc.data();
      console.log(`- ID: ${doc.id}, Email: ${data.email}, Username: ${data.username}, Role: ${data.role}`);
    });
  } else {
    usersSnapshot.docs.forEach(doc => {
      console.log('User found:');
      console.log(JSON.stringify({ id: doc.id, ...doc.data() }, null, 2));
    });
  }
}

checkUser()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
