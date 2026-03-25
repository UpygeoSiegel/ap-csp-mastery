/**
 * Seed script to create the admin user
 * Run with: node server/seeds/seed-admin-user.js
 */

const { auth, db } = require('../firebase');

const ADMIN_EMAIL = 'siegel.benjamin1@gmail.com';
const ADMIN_PASSWORD = 'dabenis2';
const ADMIN_DISPLAY_NAME = 'Admin';

async function seedAdminUser() {
  console.log('Creating admin user...');
  console.log('Email:', ADMIN_EMAIL);

  try {
    let uid;

    // Check if user already exists in Firebase Auth
    try {
      const existingUser = await auth.getUserByEmail(ADMIN_EMAIL);
      uid = existingUser.uid;
      console.log('User already exists in Firebase Auth with UID:', uid);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        // Create new user in Firebase Auth
        const userRecord = await auth.createUser({
          email: ADMIN_EMAIL,
          password: ADMIN_PASSWORD,
          displayName: ADMIN_DISPLAY_NAME
        });
        uid = userRecord.uid;
        console.log('Created new user in Firebase Auth with UID:', uid);
      } else {
        throw error;
      }
    }

    // Check if user exists in Firestore
    const userDoc = await db.collection('users').doc(uid).get();

    if (userDoc.exists) {
      // Update existing user to be admin
      await db.collection('users').doc(uid).update({
        role: 'admin',
        updatedAt: new Date()
      });
      console.log('Updated existing user to admin role');
    } else {
      // Create new user document in Firestore
      await db.collection('users').doc(uid).set({
        email: ADMIN_EMAIL,
        displayName: ADMIN_DISPLAY_NAME,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log('Created new admin user document in Firestore');
    }

    console.log('\n========================================');
    console.log('Admin user setup complete!');
    console.log('========================================');
    console.log('Email:', ADMIN_EMAIL);
    console.log('Password:', ADMIN_PASSWORD);
    console.log('Role: admin');
    console.log('UID:', uid);
    console.log('========================================\n');

    process.exit(0);

  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
}

seedAdminUser();
