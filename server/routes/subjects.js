const express = require('express');
const { db } = require('../firebase');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();

// Get all active subjects
router.get('/', verifyToken, async (req, res) => {
  try {
    const subjectsSnapshot = await db.collection('subjects')
      .where('isActive', '==', true)
      .orderBy('order', 'asc')
      .get();

    const subjects = subjectsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json({ subjects });
  } catch (error) {
    console.error('Get subjects error:', error);
    res.status(500).json({ error: 'Failed to fetch subjects' });
  }
});

// Get a specific subject by ID
router.get('/:subjectId', verifyToken, async (req, res) => {
  try {
    const { subjectId } = req.params;

    const subjectDoc = await db.collection('subjects').doc(subjectId).get();

    if (!subjectDoc.exists) {
      return res.status(404).json({ error: 'Subject not found' });
    }

    res.json({
      id: subjectDoc.id,
      ...subjectDoc.data()
    });
  } catch (error) {
    console.error('Get subject error:', error);
    res.status(500).json({ error: 'Failed to fetch subject' });
  }
});

// Get units (Big Ideas) for a specific subject
router.get('/:subjectId/units', verifyToken, async (req, res) => {
  try {
    const { subjectId } = req.params;

    // Verify subject exists
    const subjectDoc = await db.collection('subjects').doc(subjectId).get();
    if (!subjectDoc.exists) {
      return res.status(404).json({ error: 'Subject not found' });
    }

    const subjectData = subjectDoc.data();

    // Get all Big Ideas/Units for this subject (using 'subject' field for consistency)
    const unitsSnapshot = await db.collection('bigIdeas')
      .where('subject', '==', subjectId)
      .orderBy('order', 'asc')
      .get();

    const units = unitsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json({
      subject: {
        id: subjectDoc.id,
        ...subjectData
      },
      units,
      terminology: {
        singular: subjectData.topLevelTermSingular,
        plural: subjectData.topLevelTermPlural
      }
    });
  } catch (error) {
    console.error('Get subject units error:', error);
    res.status(500).json({ error: 'Failed to fetch subject units' });
  }
});

module.exports = router;
