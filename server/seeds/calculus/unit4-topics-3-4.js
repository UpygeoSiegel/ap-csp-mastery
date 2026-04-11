/**
 * Seed script for AP Calculus AB Unit 4: Topics 4.3 and 4.4
 * Run with: node server/seeds/calculus/unit4-topics-3-4.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-4-3': [
    {
      text: "A function $f$ is continuous on the closed interval $[2, 5]$ with $f(2) = 17$ and $f(5) = 17$. Which of the following additional conditions guarantees that there is a number $c$ in the open interval $(2, 5)$ such that $f'(c) = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f$ is differentiable on the open interval $(2, 5)$." },
        { id: "b", text: "$f$ has a relative extremum on the open interval $(2, 5)$." },
        { id: "c", text: "No additional conditions are necessary." },
        { id: "d", text: "$\\int_2^5 f(x) dx$ exists." }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "This is Rolle's Theorem, a special case of the Mean Value Theorem. It requires continuity on $[a, b]$ and differentiability on $(a, b)$ to guarantee $f'(c) = \\frac{f(b)-f(a)}{b-a}$."
    },
    {
      text: "The Mean Value Theorem guarantees the existence of a $c$ in $(1, 3)$ for $f(x) = x^2$ such that $f'(c)$ is equal to:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$4$" },
        { id: "b", text: "$2$" },
        { id: "c", text: "$8$" },
        { id: "d", text: "$1$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$\\frac{f(3)-f(1)}{3-1} = \\frac{9-1}{2} = 4$."
    },
    {
      text: "For which of the following functions does the Mean Value Theorem NOT apply on the interval $[-1, 1]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = |x|$" },
        { id: "b", text: "$f(x) = x^2$" },
        { id: "c", text: "$f(x) = e^x$" },
        { id: "d", text: "$f(x) = \\sin x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f(x) = |x|$ is not differentiable at $x=0$, which is inside the interval $(-1, 1)$."
    },
    {
      text: "If $f'(x) > 0$ for all $x$ in $(a, b)$, then the Mean Value Theorem implies that for any $x_1, x_2$ in $[a, b]$ with $x_1 < x_2$:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x_1) < f(x_2)$" },
        { id: "b", text: "$f(x_1) > f(x_2)$" },
        { id: "c", text: "$f(x_1) = f(x_2)$" },
        { id: "d", text: "$f'(x_1) = f'(x_2)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "By MVT, $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$. Since $f'(c) > 0$ and $x_2 - x_1 > 0$, then $f(x_2) - f(x_1) > 0 \\Rightarrow f(x_2) > f(x_1)$."
    },
    {
      text: "If $f(x) = x^3 - x$ on $[0, 2]$, find the value of $c$ that satisfies the Mean Value Theorem.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{2}{\\sqrt{3}}$" },
        { id: "b", text: "$1$" },
        { id: "c", text: "$\\sqrt{3}$" },
        { id: "d", text: "$\\frac{4}{3}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$\\frac{f(2)-f(0)}{2-0} = \\frac{6-0}{2} = 3$. $f'(x) = 3x^2 - 1$. $3c^2 - 1 = 3 \\Rightarrow 3c^2 = 4 \\Rightarrow c^2 = 4/3 \\Rightarrow c = 2/\\sqrt{3}$."
    }
  ],
  'calc-4-4': [
    {
      text: "Let $f$ be the piecewise-linear function defined by $f(x) = 2x-2$ for $x < 3$ and $f(x) = 2x-4$ for $x \\ge 3$. Which of the following statements are true?\nI. $\\lim_{h \\to 0^-} \\frac{f(3+h)-f(3)}{h} = 2$\nII. $\\lim_{h \\to 0^+} \\frac{f(3+h)-f(3)}{h} = 2$\nIII. $f'(3) = 2$",
      type: "multiple_choice",
      options: [
        { id: "a", text: "II only" },
        { id: "b", text: "I and II only" },
        { id: "c", text: "I, II, and III" },
        { id: "d", text: "None" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f(3) = 2(3)-4 = 2$. For II: $\\lim_{h \\to 0^+} \\frac{(2(3+h)-4)-2}{h} = \\frac{6+2h-6}{h} = 2$. For I: $\\lim_{h \\to 0^-} \\frac{(2(3+h)-2)-2}{h} = \\frac{6+2h-4}{h} = \\frac{2+2h}{h} = \\pm \\infty$. Since the left limit doesn't exist (the function is discontinuous at $x=3$), $f'(3)$ does not exist."
    },
    {
      text: "The graph of a differentiable function $f$ is shown. At which point is $f'(x)$ the greatest?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A point where the graph is increasing most steeply" },
        { id: "b", text: "A relative maximum" },
        { id: "c", text: "A relative minimum" },
        { id: "d", text: "An x-intercept" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$f'(x)$ represents the slope. The greatest slope occurs where the graph is steepest in the upward direction."
    },
    {
      text: "If $f'(x)$ changes from positive to negative at $x=c$, then $f$ has a ________ at $x=c$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Relative maximum" },
        { id: "b", text: "Relative minimum" },
        { id: "c", text: "Point of inflection" },
        { id: "d", text: "Vertical asymptote" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "First Derivative Test: Increasing to decreasing indicates a peak (relative maximum)."
    },
    {
      text: "If $f''(x) > 0$ on $(a, b)$, then $f'(x)$ is ________ on $(a, b)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Increasing" },
        { id: "b", text: "Decreasing" },
        { id: "c", text: "Positive" },
        { id: "d", text: "Negative" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The second derivative is the derivative of the first derivative. If $f'' > 0$, then $f'$ is increasing."
    },
    {
      text: "The graph of $f'$ is shown. On which interval is $f$ increasing?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Where the graph of $f'$ is above the x-axis" },
        { id: "b", text: "Where the graph of $f'$ is increasing" },
        { id: "c", text: "Where the graph of $f'$ is concave up" },
        { id: "d", text: "Where the graph of $f'$ is below the x-axis" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f$ increases when its derivative $f'$ is positive."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 4.3 and 4.4...');

  try {
    let totalSeeded = 0;
    for (const [topicId, questions] of Object.entries(questionsData)) {
      const batch = db.batch();
      
      for (const q of questions) {
        const ref = db.collection('questions').doc();
        batch.set(ref, {
          ...q,
          topicId,
          isTeacherMade: false,
          createdAt: new Date(),
          updatedAt: new Date()
        });
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
