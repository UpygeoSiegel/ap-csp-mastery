/**
 * Seed script for AP Calculus AB Unit 5: Topics 5.1, 5.2, and 5.3
 * Run with: node server/seeds/calculus/unit5-topics-1-3.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-5-1': [
    {
      text: "The function $f$ is continuous on $[0, 4]$ and differentiable on $(0, 4)$. If $f(0) = 5$ and $f(4) = 13$, the Mean Value Theorem guarantees a value $c$ in $(0, 4)$ such that $f'(c) = $",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2$" },
        { id: "b", text: "$8$" },
        { id: "c", text: "$0$" },
        { id: "d", text: "$4$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$\\frac{f(4)-f(0)}{4-0} = \\frac{13-5}{4} = \\frac{8}{4} = 2$."
    },
    {
      text: "A car travels on a straight road. At $t=0$, the car's position is $x=0$. At $t=2$ hours, the car's position is $x=120$ miles. Which theorem guarantees there was at least one moment where the car's instantaneous velocity was exactly $60$ mph?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Mean Value Theorem" },
        { id: "b", text: "Intermediate Value Theorem" },
        { id: "c", text: "Extreme Value Theorem" },
        { id: "d", text: "Squeeze Theorem" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The average velocity is $120/2 = 60$ mph. The MVT guarantees that $v(t) = v_{avg}$ at some point."
    }
  ],
  'calc-5-2': [
    {
      text: "Find the critical points of $f(x) = x^3 - 3x^2 - 9x + 5$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x = -1$ and $x = 3$" },
        { id: "b", text: "$x = 1$ and $x = -3$" },
        { id: "c", text: "$x = 0$ and $x = 3$" },
        { id: "d", text: "$x = -1$ and $x = 5$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x-3)(x+1)$. $f'(x)=0$ at $x=3, -1$."
    },
    {
      text: "If $f'(c) = 0$ and $f''(c) > 0$, then $f$ has a ________ at $x=c$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Relative minimum" },
        { id: "b", text: "Relative maximum" },
        { id: "c", text: "Inflection point" },
        { id: "d", text: "Vertical asymptote" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "By the Second Derivative Test, a horizontal tangent ($f'=0$) and concave up ($f'' > 0$) indicates a relative minimum."
    }
  ],
  'calc-5-3': [
    {
      text: "On which interval is the function $f(x) = e^x - x$ increasing?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(0, \\infty)$" },
        { id: "b", text: "$(-\\infty, 0)$" },
        { id: "c", text: "$(1, \\infty)$" },
        { id: "d", text: "Always increasing" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f'(x) = e^x - 1$. $e^x - 1 > 0 \\Rightarrow e^x > 1 \\Rightarrow x > 0$."
    },
    {
      text: "If $f'(x) < 0$ for all $x$ in $(a, b)$, then $f$ is ________ on $(a, b)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Decreasing" },
        { id: "b", text: "Increasing" },
        { id: "c", text: "Concave down" },
        { id: "d", text: "Constant" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "A negative derivative means the function's values are falling as $x$ increases."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 5.1, 5.2, and 5.3...');
  try {
    let totalSeeded = 0;
    for (const [topicId, questions] of Object.entries(questionsData)) {
      const batch = db.batch();
      for (const q of questions) {
        const ref = db.collection('questions').doc();
        batch.set(ref, { ...q, topicId, isTeacherMade: false, createdAt: new Date(), updatedAt: new Date() });
        totalSeeded++;
      }
      await batch.commit();
      console.log(`Seeded ${questions.length} questions for topic ${topicId}`);
    }
    console.log(`Successfully seeded ${totalSeeded} total questions.`);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}
seedQuestions().then(() => process.exit(0));
