/**
 * Seed script for AP Calculus AB Unit 1: Topics 1.3 and 1.4
 * Run with: node server/seeds/calculus/unit1-topics-3-4.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-1-3': [
    {
      text: "A graph of $f(x)$ has a hole at the point (2, 5). At $x = 2$, there is a solid dot at (2, 3). What is $\\lim_{x \\to 2} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "5" },
        { id: "c", text: "Does not exist" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The limit describes the value the function approaches as $x$ gets close to 2. Even though $f(2) = 3$, the 'path' of the graph leads to the $y$-value of 5 from both sides."
    },
    {
      text: "The graph of $g(x)$ approaches $y = 4$ from the left of $x = 1$ and approaches $y = -2$ from the right of $x = 1$. What is $\\lim_{x \\to 1} g(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "-2" },
        { id: "c", text: "1" },
        { id: "d", text: "Does not exist" }
      ],
      correctAnswers: ["d"],
      difficulty: "easy",
      explanation: "Since the left-hand limit (4) and the right-hand limit (-2) are not equal, the two-sided limit does not exist."
    },
    {
      text: "Looking at a graph, if the $y$-values increase without bound as $x$ approaches 3 from both sides, we estimate the limit to be:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "Infinity" },
        { id: "c", text: "3" },
        { id: "d", text: "Undefined at all points" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$Y$-values increasing without bound indicates a vertical asymptote, and the limit is described as infinity (a form of DNE)."
    },
    {
      text: "A graph shows a continuous line passing through (4, -1). What is $\\lim_{x \\to 4} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "-1" },
        { id: "c", text: "0" },
        { id: "d", text: "Cannot be determined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "For a continuous function, the limit as $x$ approaches $c$ is simply the function value $f(c)$."
    },
    {
      text: "On the graph of $f$, there is a vertical asymptote at $x = -2$. As $x$ approaches -2 from the left, the graph goes to infinity. As $x$ approaches -2 from the right, the graph goes to negative infinity. What is $\\lim_{x \\to -2} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Infinity" },
        { id: "b", text: "Negative Infinity" },
        { id: "c", text: "0" },
        { id: "d", text: "Does not exist" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "Because the left and right behaviors are different (one up, one down), the two-sided limit is DNE."
    },
    {
      text: "True or False: If $\\lim_{x \\to c} f(x)$ exists, the graph of $f$ must have a solid dot at $x = c$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "A limit can exist even if there is a hole ($f(c)$ is undefined) or if $f(c)$ is defined at a different $y$-value."
    },
    {
      text: "A graph consists of a horizontal line $y = 2$ for $x < 0$ and a horizontal line $y = 2$ for $x > 0$. There is an open circle at (0, 2). What is $\\lim_{x \\to 0} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "2" },
        { id: "c", text: "Does not exist" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Both sides approach the same $y$-value of 2, so the limit is 2."
    },
    {
      text: "What graphical feature corresponds to a limit failing to exist because the function values oscillate infinitely?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A jump" },
        { id: "b", text: "A vertical asymptote" },
        { id: "c", text: "Infinite 'zig-zagging' near a point" },
        { id: "d", text: "A hole" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Oscillating behavior (like $\\sin(1/x)$ near 0) means the function never settles on one value, so no limit exists."
    },
    {
      text: "If the graph of $f(x)$ has a jump discontinuity at $x = 5$, which of the following is true?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The two-sided limit at $x = 5$ exists" },
        { id: "b", text: "The left-hand and right-hand limits at $x = 5$ exist but are not equal" },
        { id: "c", text: "The function is continuous at $x = 5$" },
        { id: "d", text: "The limit at $x = 5$ is infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "A jump means the graph 'breaks' and restarts at a different height, meaning the two sides approach different finite values."
    },
    {
      text: "If $\\lim_{x \\to 3^+} f(x) = 7$, where on the graph should you look?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "To the left of $x = 3$" },
        { id: "b", text: "To the right of $x = 3$" },
        { id: "c", text: "Directly at $x = 3$" },
        { id: "d", text: "At the $y$-intercept" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The '+' sign means the limit is from the right (values slightly larger than 3)."
    },
    {
      text: "A graph has a hole at (0, 0). What is $\\lim_{x \\to 0} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "Undefined" },
        { id: "c", text: "Does not exist" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The hole indicates the limit value is 0, even if the function isn't defined there."
    },
    {
      text: "If $f(x) = 5$ for all $x$ except $x = 2$, and $f(2) = 10$, what is the limit as $x$ approaches 2?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "5" },
        { id: "c", text: "7.5" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The function is a horizontal line with a single displaced point. The limit follows the line, not the point."
    },
    {
      text: "Which of the following is a 'removable discontinuity' on a graph?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A jump" },
        { id: "b", text: "A vertical asymptote" },
        { id: "c", text: "A hole" },
        { id: "d", text: "A sharp corner" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "A hole is removable because the limit exists; you could 'fix' the continuity by filling in that one point."
    },
    {
      text: "When $x$ approaches 4 from the right, the graph of $f(x)$ approaches $y = 2$. When $x$ approaches 4 from the left, $f(x)$ approaches $y = 2$. What is the two-sided limit?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "4" },
        { id: "c", text: "DNE" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "If both one-sided limits are 2, the two-sided limit is 2."
    },
    {
      text: "If a graph approaches $y = 3$ as $x$ approaches infinity, what kind of asymptote does it have?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Vertical" },
        { id: "b", text: "Horizontal" },
        { id: "c", text: "Slant" },
        { id: "d", text: "None" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "A limit as $x$ goes to infinity resulting in a constant value indicates a horizontal asymptote."
    },
    {
      text: "Graph $G$ has a vertical asymptote at $x = 1$. If $\\lim_{x \\to 1^+} G(x) = \\infty$, what does the graph look like just to the right of $x = 1$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It shoots upwards" },
        { id: "b", text: "It shoots downwards" },
        { id: "c", text: "It levels off at $y = 1$" },
        { id: "d", text: "It has a hole" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Positive infinity means the $y$-values are increasing without bound."
    },
    {
      text: "If $f(x)$ is a step function that steps from $y = 1$ to $y = 2$ at $x = 0$, what is $\\lim_{x \\to 0^-} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The limit from the left ($0^-$) is the value the function has before the step occurs."
    },
    {
      text: "To estimate a limit from a graph, we check the behavior of the $y$-values as we move along the $x$-axis toward the target value from:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The left only" },
        { id: "b", text: "The right only" },
        { id: "c", text: "Both the left and the right" },
        { id: "d", text: "The origin" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "A general limit requires checking both directions to ensure they agree."
    },
    {
      text: "What is the limit of $f(x)$ as $x$ approaches 2 if the graph is a constant horizontal line at $y = -3$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "-3" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The limit of a constant function is always that constant."
    },
    {
      text: "If $\\lim_{x \\to c} f(x) = L$, and $f(c)$ exists, but $f(c) \\neq L$, the discontinuity at $x = c$ is called a:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Jump" },
        { id: "b", text: "Infinite discontinuity" },
        { id: "c", text: "Point discontinuity (Hole)" },
        { id: "d", text: "Non-removable discontinuity" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "A hole exists when the limit exists but doesn't match the function value (or the function value is missing)."
    },
    {
      text: "If a graph has a 'V' shape with the vertex at (1, 0), what is $\\lim_{x \\to 1} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The graph is continuous at the vertex, so the limit is the $y$-value of 0."
    },
    {
      text: "Looking at a graph of $f(x)$, you see that as $x$ approaches 2 from the left, $y$ approaches 5. As $x$ approaches 2 from the right, $y$ approaches 5.0001. What is likely true?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The limit is 5" },
        { id: "b", text: "The limit is 5.0001" },
        { id: "c", text: "There is a tiny jump discontinuity and the limit DNE" },
        { id: "d", text: "The limit is 10.0001" }
      ],
      correctAnswers: ["c"],
      difficulty: "hard",
      explanation: "If the values approach different numbers (no matter how close), the limit does not exist. However, in 'estimation', one might suspect a jump."
    },
    {
      text: "A graph of $f(x)$ consists of points (1, 2), (1.1, 2.1), (1.2, 2.2)... and (0.9, 1.9), (0.8, 1.8). What is the estimated limit as $x$ approaches 1?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The trend from both sides points toward a $y$-value of 2."
    },
    {
      text: "If $\\lim_{x \\to c^-} f(x) = \\infty$ and $\\lim_{x \\to c^+} f(x) = \\infty$, we can say the two-sided limit is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Finite" },
        { id: "b", text: "$\\infty$ (DNE)" },
        { id: "c", text: "$-\\infty$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Since both sides agree on the behavior (unbounded growth), we say the limit is infinity."
    },
    {
      text: "Which of the following describes a limit from a graph that DOES NOT exist?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A smooth curve" },
        { id: "b", text: "A hole filled with a point elsewhere" },
        { id: "c", text: "A gap between two pieces of the graph" },
        { id: "d", text: "A sharp corner like an absolute value graph" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "A gap (jump) means the left and right limits are different, so the two-sided limit DNE."
    }
  ],
  'calc-1-4': [
    {
      text: "Based on the table, estimate $\\lim_{x \\to 3} f(x)$:\n$x$: 2.9, 2.99, 2.999 | $f(x)$: 4.1, 4.01, 4.001\n$x$: 3.1, 3.01, 3.001 | $f(x)$: 3.9, 3.99, 3.999",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "4" },
        { id: "c", text: "Does not exist" },
        { id: "d", text: "4.1" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "As $x$ approaches 3 from both sides, $f(x)$ values are getting closer and closer to 4."
    },
    {
      text: "Based on the table, estimate $\\lim_{x \\to 1} g(x)$:\n$x$: 0.9, 0.99, 0.999 | $g(x)$: 2.5, 2.9, 2.99\n$x$: 1.1, 1.01, 1.001 | $g(x)$: 5.1, 5.01, 5.001",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "5" },
        { id: "c", text: "Does not exist" },
        { id: "d", text: "4" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "The left-hand limit approaches 3, but the right-hand limit approaches 5. Since they are different, the limit DNE."
    },
    {
      text: "Estimate $\\lim_{x \\to 0} f(x)$ from the table:\n$x$: -0.1, -0.01, -0.001 | $f(x)$: 100, 1000, 10000\n$x$: 0.1, 0.01, 0.001 | $f(x)$: 100, 1000, 10000",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "100" },
        { id: "c", text: "Infinity" },
        { id: "d", text: "Negative Infinity" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "As $x$ gets closer to 0, $f(x)$ is growing without bound, suggesting the limit is infinity."
    },
    {
      text: "In a table used to estimate a limit as $x$ approaches 2, which $x$-values are most appropriate?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1, 2, 3" },
        { id: "b", text: "1.9, 1.99, 2.01, 2.1" },
        { id: "c", text: "0, 10, 100" },
        { id: "d", text: "-2, -1, 0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "To estimate a limit, you need values very close to the target $x$-value from both sides."
    },
    {
      text: "If a table shows $f(x)$ values of 3.001, 3.0001, and 3.00001 as $x$ approaches 5, what is the best estimate for the limit?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3.1" },
        { id: "b", text: "3" },
        { id: "c", text: "5" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The values are clearly converging toward 3."
    },
    {
      text: "Given the table, what is $\\lim_{x \\to 2^-} f(x)$?\n$x$: 1.9, 1.99, 1.999 | $f(x)$: 6.8, 6.98, 6.998",
      type: "multiple_choice",
      options: [
        { id: "a", text: "6" },
        { id: "b", text: "7" },
        { id: "c", text: "2" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The values are approaching 7 from the left side."
    },
    {
      text: "A table for $f(x)$ near $x = 4$ shows $f(3.999) = 10$ and $f(4.001) = 10$. The table also shows $f(4) = \\text{undefined}$. What is the estimated limit?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "Undefined" },
        { id: "c", text: "DNE" },
        { id: "d", text: "4" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Limits care about the behavior *near* 4, not *at* 4. Since both sides approach 10, the limit is 10."
    },
    {
      text: "Estimate $\\lim_{x \\to 0} [\\sin(x) / x]$ using these values:\n$x = \\pm 0.1$: 0.99833\n$x = \\pm 0.01$: 0.99998\n$x = \\pm 0.001$: 0.99999",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "Infinity" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The values are clearly approaching 1. This is a famous special limit in calculus."
    },
    {
      text: "What is a potential pitfall of using a table to estimate a limit?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Tables are always 100% accurate" },
        { id: "b", text: "The function might behave unexpectedly between the chosen $x$-values" },
        { id: "c", text: "You cannot use negative numbers in a table" },
        { id: "d", text: "Tables only work for linear functions" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Numerical estimation can be misleading if the function oscillates or changes rapidly at a scale smaller than your intervals."
    },
    {
      text: "Based on the table, estimate $\\lim_{x \\to -1} f(x)$:\n$x$: -1.1, -1.01, -1.001 | $f(x)$: -2.1, -2.01, -2.001\n$x$: -0.9, -0.99, -0.999 | $f(x)$: -1.9, -1.99, -1.999",
      type: "multiple_choice",
      options: [
        { id: "a", text: "-1" },
        { id: "b", text: "-2" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Both sides approach the $y$-value of -2."
    },
    {
      text: "If $f(x)$ values in a table are 10, 100, 1000, 10000 as $x$ approaches 0 from the left, and -10, -100, -1000, -10000 as $x$ approaches 0 from the right, the two-sided limit is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Infinity" },
        { id: "b", text: "Negative Infinity" },
        { id: "c", text: "0" },
        { id: "d", text: "Does not exist" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "The left side goes to $+\\infty$ and the right side goes to $-\\infty$. They don't agree, so the limit DNE."
    },
    {
      text: "Estimate the limit as $x \\to 2$ for $f(x) = (x^2-4)/(x-2)$:\n$x$: 1.9, 1.99, 1.999 | $f(x)$: 3.9, 3.99, 3.999\n$x$: 2.1, 2.01, 2.001 | $f(x)$: 4.1, 4.01, 4.001",
      type: "multiple_choice",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "4" },
        { id: "c", text: "0" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The values approach 4 from both sides. (Algebraically, this function simplifies to $x+2$ for $x \\neq 2$)."
    },
    {
      text: "If a table for $\\lim_{x \\to c} f(x)$ shows $f(x) = 5.0000001$ for all values of $x$ near $c$, what is the best estimate for the limit?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "5.0000001" },
        { id: "c", text: "Cannot be estimated" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "In most calculus contexts, such a value suggests the theoretical limit is exactly 5."
    },
    {
      text: "To find a right-hand limit using a table, you should pick $x$-values that are:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Decreasing toward $c$ (e.g., 3.1, 3.01, 3.001)" },
        { id: "b", text: "Increasing toward $c$ (e.g., 2.9, 2.99, 2.999)" },
        { id: "c", text: "Exactly equal to $c$" },
        { id: "d", text: "Large and positive" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Right-hand limits come from values greater than $c$, so you 'descend' toward $c$."
    },
    {
      text: "If $\\lim_{x \\to 5} f(x)$ is being estimated, and $f(4.999) = 12.001$ and $f(5.001) = 11.999$, what is the estimate?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "12" },
        { id: "c", text: "DNE" },
        { id: "d", text: "11.999" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Both sides are extremely close to 12."
    },
    {
      text: "A table shows $f(x)$ oscillating between 1 and -1 as $x$ approaches 0 (e.g., $f(0.1)=1, f(0.01)=-1, f(0.001)=1$). What is the estimate for $\\lim_{x \\to 0} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "-1" },
        { id: "d", text: "Does not exist" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "Because the values do not converge to a single number, the limit DNE."
    },
    {
      text: "True or False: A table can prove exactly what a limit is.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Tables provide evidence and an estimation, but formal proof requires algebraic or epsilon-delta methods."
    },
    {
      text: "If $f(x) = x^2$, estimate $\\lim_{x \\to 10} f(x)$ using $x = 9.99$ and $x = 10.01$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "100" },
        { id: "c", text: "99.8" },
        { id: "d", text: "100.2" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$9.99^2 \\approx 99.8$ and $10.01^2 \\approx 100.2$. Both are very close to 100."
    },
    {
      text: "When $x$: 0.1, 0.01, 0.001 leads to $f(x)$: 2.718, 2.7182, 2.71828, the limit is likely:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "$e$ (approx 2.718)" },
        { id: "c", text: "3" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "The values are converging to the mathematical constant $e$."
    },
    {
      text: "Estimate the limit from this table:\n$x$: 1.9, 1.99 | $f(x)$: 50, 500\n$x$: 2.1, 2.01 | $f(x)$: -50, -500",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "Infinity" },
        { id: "c", text: "Negative Infinity" },
        { id: "d", text: "Does not exist" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "The left side is growing toward $+\\infty$ and the right side is growing toward $-\\infty$. The limit DNE."
    },
    {
      text: "Which of these is the most likely limit for a table where $f(x)$ values are 0.33, 0.333, 0.3333?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0.3" },
        { id: "b", text: "1/3" },
        { id: "c", text: "0.4" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "0.333... is the decimal representation of 1/3."
    },
    {
      text: "If a table shows $f(x) = 2$ for all $x < 1$ and $f(x) = 3$ for all $x > 1$, the limit as $x \\to 1$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "2.5" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["d"],
      difficulty: "easy",
      explanation: "The limits from the left and right are different ($2 \\neq 3$)."
    },
    {
      text: "In the context of AP Calculus, 'estimating a limit' usually implies using:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Formal proofs" },
        { id: "b", text: "A calculator to check values very close to $c$" },
        { id: "c", text: "Guessing" },
        { id: "d", text: "Only the $y$-intercept" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Numerical estimation involves calculating function values for a sequence of points approaching $c$."
    },
    {
      text: "If a table for $x \\to 0$ shows $f(x)$ values of 1, -1, 1, -1 as $x$ gets smaller, the limit:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "is 0" },
        { id: "b", text: "is 1" },
        { id: "c", text: "is -1" },
        { id: "d", text: "Does not exist" }
      ],
      correctAnswers: ["d"],
      difficulty: "easy",
      explanation: "Lack of convergence to a single value means the limit DNE."
    },
    {
      text: "Given $x = 0.00001, f(x) = 4.99999$. Given $x = -0.00001, f(x) = 5.00001$. What is the estimated limit as $x \\to 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "5" },
        { id: "c", text: "DNE" },
        { id: "d", text: "4.99" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Both sides are extremely close to 5."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 1.3 and 1.4...');

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
