/**
 * Seed script for AP Calculus AB Units and Topics
 * Run with: node server/seeds/seed-ap-calculus-ab.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const { db } = require('../firebase');

const bigIdeas = [
  {
    id: 'calc-limits-continuity',
    name: 'Unit 1: Limits and Continuity',
    shortName: 'Limits & Continuity',
    description: 'Understand the concept of a limit, the foundation of calculus. Explore continuity, the Intermediate Value Theorem, and limits at infinity.',
    order: 1,
    color: '#3B82F6', // Blue
    subject: 'ap-calculus-ab'
  },
  {
    id: 'calc-diff-intro',
    name: 'Unit 2: Differentiation: Definition and Fundamental Properties',
    shortName: 'Intro to Differentiation',
    description: 'Define the derivative as a rate of change. Learn power rule, product rule, quotient rule, and derivatives of transcendental functions.',
    order: 2,
    color: '#8B5CF6', // Purple
    subject: 'ap-calculus-ab'
  },
  {
    id: 'calc-diff-advanced',
    name: 'Unit 3: Differentiation: Composite, Implicit, and Inverse Functions',
    shortName: 'Advanced Differentiation',
    description: 'Master the chain rule, implicit differentiation, and derivatives of inverse trigonometric functions.',
    order: 3,
    color: '#10B981', // Green
    subject: 'ap-calculus-ab'
  },
  {
    id: 'calc-diff-contextual',
    name: 'Unit 4: Contextual Applications of Differentiation',
    shortName: 'Contextual Differentiation',
    description: 'Apply derivatives to real-world contexts including motion (position, velocity, acceleration) and related rates.',
    order: 4,
    color: '#F59E0B', // Amber
    subject: 'ap-calculus-ab'
  },
  {
    id: 'calc-diff-analytical',
    name: 'Unit 5: Analytical Applications of Differentiation',
    shortName: 'Analytical Differentiation',
    description: 'Use the Mean Value Theorem, extreme values, concavity, and optimization to analyze function behavior and graphs.',
    order: 5,
    color: '#EF4444', // Red
    subject: 'ap-calculus-ab'
  },
  {
    id: 'calc-integration-intro',
    name: 'Unit 6: Integration and Accumulation of Change',
    shortName: 'Intro to Integration',
    description: 'Understand the definite integral as accumulation of change. Learn the Fundamental Theorem of Calculus and integration techniques like u-substitution.',
    order: 6,
    color: '#06B6D4', // Cyan
    subject: 'ap-calculus-ab'
  },
  {
    id: 'calc-diff-equations',
    name: 'Unit 7: Differential Equations',
    shortName: 'Differential Equations',
    description: 'Model situations with differential equations. Explore slope fields and separation of variables.',
    order: 7,
    color: '#84CC16', // Lime
    subject: 'ap-calculus-ab'
  },
  {
    id: 'calc-integration-apps',
    name: 'Unit 8: Applications of Integration',
    shortName: 'Integration Apps',
    description: 'Apply integration to find average value, area between curves, and volumes of solids of revolution.',
    order: 8,
    color: '#EC4899', // Pink
    subject: 'ap-calculus-ab'
  }
];

const topicsData = {
  'calc-limits-continuity': [
    { id: 'calc-1-1', name: '1.1 Introducing Calculus', order: 1 },
    { id: 'calc-1-2', name: '1.2 Defining Limits & Notation', order: 2 },
    { id: 'calc-1-3', name: '1.3 Estimating Limits from Graphs', order: 3 },
    { id: 'calc-1-4', name: '1.4 Estimating Limits from Tables', order: 4 },
    { id: 'calc-1-5', name: '1.5 Algebraic Properties of Limits', order: 5 },
    { id: 'calc-1-6', name: '1.6 Algebraic Manipulation for Limits', order: 6 },
    { id: 'calc-1-7', name: '1.7 Selecting Procedures for Limits', order: 7 },
    { id: 'calc-1-8', name: '1.8 Squeeze Theorem', order: 8 },
    { id: 'calc-1-9', name: '1.9 Connecting Continuity', order: 9 },
    { id: 'calc-1-10', name: '1.10 Types of Discontinuities', order: 10 },
    { id: 'calc-1-11', name: '1.11 Defining Continuity at a Point', order: 11 },
    { id: 'calc-1-12', name: '1.12 Continuity over an Interval', order: 12 },
    { id: 'calc-1-13', name: '1.13 Removing Discontinuities', order: 13 },
    { id: 'calc-1-14', name: '1.14 Infinite Limits & Vertical Asymptotes', order: 14 },
    { id: 'calc-1-15', name: '1.15 Limits at Infinity & Horizontal Asymptotes', order: 15 },
    { id: 'calc-1-16', name: '1.16 Intermediate Value Theorem (IVT)', order: 16 }
  ],
  'calc-diff-intro': [
    { id: 'calc-2-1', name: '2.1 Average vs Instantaneous Rates of Change', order: 1 },
    { id: 'calc-2-2', name: '2.2 Defining the Derivative', order: 2 },
    { id: 'calc-2-3', name: '2.3 Estimating Derivatives at a Point', order: 3 },
    { id: 'calc-2-4', name: '2.4 Differentiability & Continuity', order: 4 },
    { id: 'calc-2-5', name: '2.5 Power Rule', order: 5 },
    { id: 'calc-2-6', name: '2.6 Constant, Sum, Difference Rules', order: 6 },
    { id: 'calc-2-7', name: '2.7 Derivatives of cos, sin, e^x, ln(x)', order: 7 },
    { id: 'calc-2-8', name: '2.8 Product Rule', order: 8 },
    { id: 'calc-2-9', name: '2.9 Quotient Rule', order: 9 },
    { id: 'calc-2-10', name: '2.10 Derivatives of tan, cot, sec, csc', order: 10 }
  ],
  'calc-diff-advanced': [
    { id: 'calc-3-1', name: '3.1 Chain Rule', order: 1 },
    { id: 'calc-3-2', name: '3.2 Implicit Differentiation', order: 2 },
    { id: 'calc-3-3', name: '3.3 Differentiating Inverse Functions', order: 3 },
    { id: 'calc-3-4', name: '3.4 Differentiating Inverse Trig Functions', order: 4 },
    { id: 'calc-3-5', name: '3.5 Selecting Procedures for Derivatives', order: 5 },
    { id: 'calc-3-6', name: '3.6 Higher-Order Derivatives', order: 6 }
  ],
  'calc-diff-contextual': [
    { id: 'calc-4-1', name: '4.1 Interpreting Derivative in Context', order: 1 },
    { id: 'calc-4-2', name: '4.2 Straight-Line Motion (PVA)', order: 2 },
    { id: 'calc-4-3', name: '4.3 Rates of Change in Other Contexts', order: 3 },
    { id: 'calc-4-4', name: '4.4 Intro to Related Rates', order: 4 },
    { id: 'calc-4-5', name: '4.5 Solving Related Rates Problems', order: 5 },
    { id: 'calc-4-6', name: '4.6 Linearization', order: 6 },
    { id: 'calc-4-7', name: '4.7 L\'Hôpital\'s Rule', order: 7 }
  ],
  'calc-diff-analytical': [
    { id: 'calc-5-1', name: '5.1 Mean Value Theorem', order: 1 },
    { id: 'calc-5-2', name: '5.2 Extreme Values & Critical Points', order: 2 },
    { id: 'calc-5-3', name: '5.3 Increasing/Decreasing Intervals', order: 3 },
    { id: 'calc-5-4', name: '5.4 First Derivative Test', order: 4 },
    { id: 'calc-5-5', name: '5.5 Candidates Test (Global Extrema)', order: 5 },
    { id: 'calc-5-6', name: '5.6 Concavity', order: 6 },
    { id: 'calc-5-7', name: '5.7 Second Derivative Test', order: 7 },
    { id: 'calc-5-8', name: '5.8 Sketching Graphs', order: 8 },
    { id: 'calc-5-9', name: '5.9 Connecting f, f\', and f\'\'', order: 9 },
    { id: 'calc-5-10', name: '5.10 Intro to Optimization', order: 10 },
    { id: 'calc-5-11', name: '5.11 Solving Optimization Problems', order: 11 },
    { id: 'calc-5-12', name: '5.12 Behaviors of Implicit Relations', order: 12 }
  ],
  'calc-integration-intro': [
    { id: 'calc-6-1', name: '6.1 Accumulations of Change', order: 1 },
    { id: 'calc-6-2', name: '6.2 Riemann Sums', order: 2 },
    { id: 'calc-6-3', name: '6.3 Definite Integral Notation', order: 3 },
    { id: 'calc-6-4', name: '6.4 Fundamental Theorem of Calculus', order: 4 },
    { id: 'calc-6-5', name: '6.5 Behavior of Accumulation Functions', order: 5 },
    { id: 'calc-6-6', name: '6.6 Properties of Definite Integrals', order: 6 },
    { id: 'calc-6-7', name: '6.7 FTC & Definite Integrals', order: 7 },
    { id: 'calc-6-8', name: '6.8 Antiderivatives & Indefinite Integrals', order: 8 },
    { id: 'calc-6-9', name: '6.9 U-Substitution', order: 9 },
    { id: 'calc-6-10', name: '6.10 Long Division & Completing the Square', order: 10 },
    { id: 'calc-6-11', name: '6.11 Selecting Techniques for Integration', order: 11 }
  ],
  'calc-diff-equations': [
    { id: 'calc-7-1', name: '7.1 Modeling with Differential Equations', order: 1 },
    { id: 'calc-7-2', name: '7.2 Verifying Solutions', order: 2 },
    { id: 'calc-7-3', name: '7.3 Sketching Slope Fields', order: 3 },
    { id: 'calc-7-4', name: '7.4 Reasoning Using Slope Fields', order: 4 },
    { id: 'calc-7-5', name: '7.5 Separation of Variables (General)', order: 5 },
    { id: 'calc-7-6', name: '7.6 Separation of Variables (Particular)', order: 6 },
    { id: 'calc-7-7', name: '7.7 Exponential Models', order: 7 }
  ],
  'calc-integration-apps': [
    { id: 'calc-8-1', name: '8.1 Average Value of a Function', order: 1 },
    { id: 'calc-8-2', name: '8.2 Motion (PVA) using Integrals', order: 2 },
    { id: 'calc-8-3', name: '8.3 Accumulation Functions in Context', order: 3 },
    { id: 'calc-8-4', name: '8.4 Area Between Curves (f(x))', order: 4 },
    { id: 'calc-8-5', name: '8.5 Area Between Curves (f(y))', order: 5 },
    { id: 'calc-8-6', name: '8.6 Intersecting Curves', order: 6 },
    { id: 'calc-8-7', name: '8.7 Cross Sections: Squares & Rectangles', order: 7 },
    { id: 'calc-8-8', name: '8.8 Cross Sections: Triangles & Semicircles', order: 8 },
    { id: 'calc-8-9', name: '8.9 Disc Method (X or Y axis)', order: 9 },
    { id: 'calc-8-10', name: '8.10 Washer Method (X or Y axis)', order: 10 },
    { id: 'calc-8-11', name: '8.11 Disc/Washer Method (Other Axes)', order: 11 }
  ]
};

async function seedAPCalculusAB() {
  console.log('Seeding AP Calculus AB curriculum...');

  try {
    const bigIdeasBatch = db.batch();
    for (const bigIdea of bigIdeas) {
      const ref = db.collection('bigIdeas').doc(bigIdea.id);
      bigIdeasBatch.set(ref, {
        ...bigIdea,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    await bigIdeasBatch.commit();
    console.log(`Seeded ${bigIdeas.length} units.`);

    for (const [bigIdeaId, topics] of Object.entries(topicsData)) {
      const topicsBatch = db.batch();
      topics.forEach(topic => {
        const ref = db.collection('topics').doc(topic.id);
        topicsBatch.set(ref, {
          ...topic,
          bigIdeaId,
          subject: 'ap-calculus-ab', // Add subject field for filtering
          description: '', // Empty for now
          learningObjectives: [], // Empty for now
          questions: [], // Empty for now
          createdAt: new Date(),
          updatedAt: new Date()
        });
      });
      await topicsBatch.commit();
      console.log(`Seeded topics for ${bigIdeaId}.`);
    }

    console.log('AP Calculus AB seeding completed successfully!');
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedAPCalculusAB().then(() => process.exit(0));
