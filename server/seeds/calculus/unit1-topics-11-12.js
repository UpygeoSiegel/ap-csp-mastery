/**
 * Seed script for AP Calculus AB Unit 1: Topics 1.11 and 1.12
 * Run with: node server/seeds/calculus/unit1-topics-11-12.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-1-11': [
    {
      text: "Which of the following is the complete formal definition of continuity at $x = c$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(c)$ exists" },
        { id: "b", text: "$\\lim_{x \\to c} f(x)$ exists" },
        { id: "c", text: "$\\lim_{x \\to c} f(x) = f(c)$" },
        { id: "d", text: "$f(c)$ is a real number" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "While all are parts, the statement 'the limit equals the function value' encompasses the entire definition (it implies the function is defined and the limit exists)."
    },
    {
      text: "Step 1 of the continuity test requires that:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The limit exists" },
        { id: "b", text: "$f(c)$ is defined" },
        { id: "c", text: "$f(x)$ is linear" },
        { id: "d", text: "c is positive" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "You cannot have continuity if there is no point at the location."
    },
    {
      text: "Step 2 of the continuity test requires that:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\lim_{x \\to c} f(x)$ exists" },
        { id: "b", text: "$f(c) = 0$" },
        { id: "c", text: "x approaches infinity" },
        { id: "d", text: "The graph is a straight line" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The behavior from both sides must approach a single finite value."
    },
    {
      text: "If $\\lim_{x \\to c^-} f(x) = 4$ and $\\lim_{x \\to c^+} f(x) = 4$, but $f(c) = 6$, does $f(x)$ pass the continuity test?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, it fails Step 3 (limit does not match function value)" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Even though the limit exists (4) and the function is defined (6), they are not equal, so the function is discontinuous."
    },
    {
      text: "What type of discontinuity is always 'not continuous at a point' because the limit DOES NOT exist?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Removable" },
        { id: "b", text: "Jump" },
        { id: "c", text: "Both Jump and Infinite" },
        { id: "d", text: "Hole" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "In both jump and infinite discontinuities, the two-sided limit fails to exist, violating Step 2 of the continuity test."
    },
    {
      text: "A piecewise function has $f(x) = x + k$ for $x < 1$ and $f(x) = 3x^2$ for $x \\geq 1$. For $f(x)$ to be continuous at $x = 1$, what must $k$ be?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "3" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Left limit: $1 + k$. Right limit/Value: $3(1)^2 = 3$. Set them equal: $1 + k = 3 \\to k = 2$."
    },
    {
      text: "True or False: If a function is defined at $x = c$, it must be continuous at $x = c$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Definition is only the first of three steps. You also need the limit to exist and match the value."
    },
    {
      text: "If a function fails Step 2 of the continuity test at $x = c$, can it still have a removable discontinuity?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "No. A removable discontinuity (hole) requires the limit to exist. Failing Step 2 means the limit DNE."
    },
    {
      text: "In the context of the AP exam, 'justify using the definition of continuity' means you must:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Draw a graph" },
        { id: "b", text: "Check all three steps of the limit/value definition" },
        { id: "c", text: "Use the Power Rule" },
        { id: "d", text: "Show the function is increasing" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The College Board expects the 3-step limit-based proof for full credit on continuity justifications."
    },
    {
      text: "If $f(x) = \\frac{x - 2}{x - 2}$, is it continuous at $x = 2$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, because it equals 1" },
        { id: "b", text: "No, because $f(2)$ is undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Even though the limit exists (1), the function is undefined at $x = 2$, failing Step 1."
    },
    {
      text: "Which function is continuous at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = \\frac{1}{x}$" },
        { id: "b", text: "$f(x) = |x|$" },
        { id: "c", text: "$f(x) = \\frac{\\sin x}{x}$" },
        { id: "d", text: "$f(x) = \\tan x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$f(0)=|0|=0$ and $\\lim_{x \\to 0} |x|=0$. All others are undefined at $x = 0$."
    },
    {
      text: "If $\\lim_{x \\to c} f(x) = L$, and we want to 'remove' the discontinuity at $x = c$, we should define $f(c)$ to be:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "$L$" },
        { id: "c", text: "$c$" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Defining the point to match the limit makes the function continuous (filling the hole)."
    },
    {
      text: "Does $f(x) = \\sin x$ pass the continuity test at $x = \\pi$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, $\\sin(\\pi)=0$ and $\\lim_{x \\to \\pi} \\sin x = 0$" },
        { id: "b", text: "No, trig functions are never continuous" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Sine is continuous for all real numbers."
    },
    {
      text: "What is the result of the continuity test for $f(x) = \\sqrt{x}$ at $x = -1$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Continuous" },
        { id: "b", text: "Discontinuous because $f(-1)$ is not a real number" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The function must be defined in the real number system for Step 1 to pass."
    },
    {
      text: "If a function is continuous at $x = c$, can it have a vertical tangent line at $x = c$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Yes (e.g., $\\sqrt[3]{x}$ at $x=0$). It's continuous but not differentiable."
    },
    {
      text: "If $\\lim_{x \\to 3} f(x)$ DNE, can the function be continuous at $x = 3$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Failing Step 2 (existence of limit) automatically makes it discontinuous."
    },
    {
      text: "A graph has a solid dot at $(1, 5)$ and the curve leads into it from both sides. This function is ________ at $x = 1$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Continuous" },
        { id: "b", text: "Discontinuous" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The visuals indicate that all three conditions are met."
    },
    {
      text: "If $f(x) = x^2$ for $x \\neq 0$ and $f(0) = 1$, is $f$ continuous at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, Step 3 fails ($0 \\neq 1$)" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The limit as $x$ approaches 0 is 0, but the function value is 1."
    },
    {
      text: "Which of these is a point of discontinuity for $f(x) = \\frac{1}{x^2 - 1}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x = 0$" },
        { id: "b", text: "$x = 1$" },
        { id: "c", text: "$x = 2$" },
        { id: "d", text: "$x = -2$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$x^2 - 1 = 0$ at $x = 1$ and $x = -1$."
    },
    {
      text: "Can we talk about continuity at $x = 5$ if the function's domain is $[0, 4]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, the function must be defined at the point" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Continuity is only defined for points within the domain or on its boundary."
    },
    {
      text: "If $f(x)$ is continuous at $x = c$, then $|f(x)|$ is ________ at $x = c$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Continuous" },
        { id: "b", text: "Discontinuous" },
        { id: "c", text: "Differentiable" },
        { id: "d", text: "Zero" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "The absolute value of a continuous function is also continuous."
    },
    {
      text: "Which requirement ensures there isn't a 'jump' in the graph?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(c)$ exists" },
        { id: "b", text: "$\\lim_{x \\to c} f(x)$ exists" },
        { id: "c", text: "$f(c)$ is positive" },
        { id: "d", text: "c is an integer" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "A 'jump' means the limit DNE. Requiring the limit to exist prevents jumps."
    },
    {
      text: "Which requirement ensures there isn't a 'hole' in the graph?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(c)$ exists AND $\\lim_{x \\to c} f(x) = f(c)$" },
        { id: "b", text: "$f(c)$ is undefined" },
        { id: "c", text: "The graph is a parabola" },
        { id: "d", text: "$\\lim_{x \\to c} f(x) = \\infty$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "A hole exists if $f(c)$ is missing or mismatched. Step 1 and Step 3 prevent these."
    },
    {
      text: "If $f(x) = x^3 + 2x + 1$, is it continuous at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, because all polynomials are continuous" },
        { id: "b", text: "No, because it is cubic" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Polynomials are the gold standard for continuity."
    },
    {
      text: "Is $f(x) = e^x$ continuous at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, $e^0 = 1$ and $\\lim_{x \\to 0} e^x = 1$" },
        { id: "b", text: "No, exponentials have asymptotes" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Exponential functions are continuous everywhere."
    }
  ],
  'calc-1-12': [
    {
      text: "A function is continuous on an open interval $(a, b)$ if it is continuous at:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The midpoint only" },
        { id: "b", text: "Every point in the interval" },
        { id: "c", text: "The endpoints $a$ and $b$" },
        { id: "d", text: "At least one point" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Continuity on an interval means there are no breaks anywhere inside it."
    },
    {
      text: "To be continuous on the closed interval $[a, b]$, a function must be continuous on $(a, b)$ AND:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(a) = f(b)$" },
        { id: "b", text: "Continuous from the right at $a$ and from the left at $b$" },
        { id: "c", text: "Differentiable at $a$ and $b$" },
        { id: "d", text: "Positive everywhere" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Closed interval continuity requires the function to 'connect' to its endpoints from the inside."
    },
    {
      text: "The function $f(x) = \\sqrt{x}$ is continuous on which interval?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(-\\infty, \\infty)$" },
        { id: "b", text: "$(0, \\infty)$" },
        { id: "c", text: "$[0, \\infty)$" },
        { id: "d", text: "$[-1, 1]$" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Square roots are defined and continuous for all $x \\geq 0$."
    },
    {
      text: "Which of the following functions is continuous on the interval $[0, \\pi]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = \\tan x$" },
        { id: "b", text: "$f(x) = \\sin x$" },
        { id: "c", text: "$f(x) = \\frac{1}{x - 1}$" },
        { id: "d", text: "$f(x) = \\sec x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\tan(x)$ and $\\sec(x)$ have asymptotes at $\\pi/2$. $\\frac{1}{x-1}$ has an asymptote at $x = 1$. Sine is continuous everywhere."
    },
    {
      text: "If $f(x)$ is continuous on $[2, 5]$, what can we say about $\\lim_{x \\to 2^+} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It must equal $f(2)$" },
        { id: "b", text: "It must equal 0" },
        { id: "c", text: "It does not have to exist" },
        { id: "d", text: "It equals $f(5)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "This is the definition of right-continuity at the left endpoint."
    },
    {
      text: "If $f(x)$ is continuous on $[2, 5]$, what can we say about $\\lim_{x \\to 5^+} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It must equal $f(5)$" },
        { id: "b", text: "Nothing; the interval ends at 5, so the right side isn't required" },
        { id: "c", text: "It must be infinity" },
        { id: "d", text: "It equals $f(2)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Continuity on $[a, b]$ only requires behavior from the *inside*. We don't care what happens to the right of $b$."
    },
    {
      text: "The function $f(x) = \\frac{1}{x^2 + 1}$ is continuous on:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(-\\infty, \\infty)$" },
        { id: "b", text: "$(-1, 1)$" },
        { id: "c", text: "$[0, \\infty)$" },
        { id: "d", text: "Only where $x \\neq 0$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Since $x^2 + 1$ is never zero, the denominator is never zero, and the function has no discontinuities."
    },
    {
      text: "Is $f(x) = \\ln(x)$ continuous on the interval $[0, 1]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, it is not defined at $x = 0$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Natural log has a vertical asymptote at $x = 0$, so it cannot be continuous on any interval including $0$."
    },
    {
      text: "If $f$ and $g$ are continuous on $[a, b]$, then $f - g$ is continuous on:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$[a, b]$" },
        { id: "b", text: "$(a, b)$" },
        { id: "c", text: "$\\{a, b\\}$" },
        { id: "d", text: "$(-\\infty, \\infty)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The difference of two continuous functions is continuous on their common interval."
    },
    {
      text: "If a function is continuous on $(-\\infty, \\infty)$, it is often called:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Always positive" },
        { id: "b", text: "Everywhere continuous" },
        { id: "c", text: "A polynomial" },
        { id: "d", text: "Bounded" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "This means there are absolutely no breaks in the domain of all real numbers."
    },
    {
      text: "Which of these is continuous on $[1, 2]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = \\frac{1}{x - 1.5}$" },
        { id: "b", text: "$f(x) = \\frac{1}{x - 3}$" },
        { id: "c", text: "$f(x) = \\frac{1}{x^2}$" },
        { id: "d", text: "Both b and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "$\\frac{1}{x - 3}$ has a problem at $x = 3$ (outside the interval). $\\frac{1}{x^2}$ has a problem at $x = 0$ (outside). $\\frac{1}{x - 1.5}$ has a problem inside the interval."
    },
    {
      text: "If $f(x)$ is continuous on $[a, b]$, the Extreme Value Theorem guarantees that f has:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A root" },
        { id: "b", text: "A maximum and a minimum value" },
        { id: "c", text: "A positive derivative" },
        { id: "d", text: "A horizontal asymptote" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "This is a key theorem relating continuity on closed intervals to optimization."
    },
    { id: "calc-1-12-13", text: "Continuous functions on closed intervals are 'well-behaved' because they don't have:", type: "multiple_choice", options: [{id: "a", text: "Slopes"}, {id: "b", text: "Holes, jumps, or vertical asymptotes"}, {id: "c", text: "Y-intercepts"}, {id: "d", text: "Roots"}], correctAnswers: ["b"], difficulty: "easy", explanation: "Continuity specifically excludes these three types of breaks." },
    {
      text: "True or False: If a function is continuous on $(0, 1)$, it must be continuous on $[0, 1]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "False. It could have holes or asymptotes at the endpoints $x = 0$ or $x = 1$."
    },
    {
      text: "The composition of two continuous functions is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Sometimes continuous" },
        { id: "b", text: "Always continuous (on the appropriate domain)" },
        { id: "c", text: "Never continuous" },
        { id: "d", text: "Only continuous if they are linear" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "This is a fundamental theorem: if $g$ is continuous at $c$ and $f$ is continuous at $g(c)$, then $f(g(x))$ is continuous at $c$."
    },
    {
      text: "Which of these functions is continuous on $[-1, 1]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = \\frac{1}{x}$" },
        { id: "b", text: "$f(x) = \\sqrt{x + 1}$" },
        { id: "c", text: "$f(x) = \\ln(x + 1)$" },
        { id: "d", text: "$f(x) = \\tan(\\frac{\\pi x}{2})$" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$\\sqrt{x+1}$ is defined for $x \\geq -1$. $\\ln(x+1)$ is only defined for $x > -1$ (hole/asymptote at $-1$). $\\frac{1}{x}$ has a break at $0$. tan has breaks at $\\pm 1$."
    },
    {
      text: "Continuity on an interval is a requirement for which major calculus theorem?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Intermediate Value Theorem" },
        { id: "b", text: "Mean Value Theorem" },
        { id: "c", text: "Fundamental Theorem of Calculus" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "Almost every major theorem in calculus starts with the phrase 'If $f$ is continuous on $[a, b]$...'."
    },
    {
      text: "If a function is continuous on $(-\\infty, \\infty)$, its graph:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Is a single, connected curve" },
        { id: "b", text: "Must be a line" },
        { id: "c", text: "Must cross the x-axis" },
        { id: "d", text: "Never stops increasing" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "No breaks means one continuous piece."
    },
    {
      text: "Is $f(x) = \\frac{1}{x}$ continuous on the interval $(1, 10)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Yes. The only discontinuity is at $x=0$, which is not in this interval."
    },
    {
      text: "Which interval of continuity is correct for $f(x) = \\sqrt{4 - x^2}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(-\\infty, \\infty)$" },
        { id: "b", text: "$(-2, 2)$" },
        { id: "c", text: "$[-2, 2]$" },
        { id: "d", text: "$[0, 4]$" }
      ],
      correctAnswers: ["c"],
      difficulty: "hard",
      explanation: "The domain is where $4 - x^2 \\geq 0$, which is $[-2, 2]$. It is continuous on this entire domain."
    },
    {
      text: "If $f(x)$ is continuous on $[a, b]$, then the limit as x approaches c exists for every c in:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$[a, b]$" },
        { id: "b", text: "$(a, b)$" },
        { id: "c", text: "Only at $x = 0$" },
        { id: "d", text: "Outside $[a, b]$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Inside the interval, two-sided limits must exist. At the endpoints, only one-sided limits are guaranteed by the definition."
    },
    {
      text: "A 'discontinuous' function on an interval must have at least ________ point(s) of discontinuity.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "One" },
        { id: "b", text: "Two" },
        { id: "c", text: "Infinite" },
        { id: "d", text: "Zero" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "A single break is enough to disqualify the interval from being continuous."
    },
    {
      text: "Can a function be continuous on $[0, 1]$ if $f(0.5)$ is undefined?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Continuity on an interval requires continuity at every point in that interval."
    },
    {
      text: "Rational functions are continuous everywhere EXCEPT where:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The numerator is zero" },
        { id: "b", text: "The denominator is zero" },
        { id: "c", text: "The x-value is negative" },
        { id: "d", text: "They are always continuous" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Zeroes of the denominator create either holes or asymptotes."
    },
    {
      text: "If $f(x) = k$ (a constant), it is continuous on:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(-\\infty, \\infty)$" },
        { id: "b", text: "Only at x = k" },
        { id: "c", text: "Only for x > 0" },
        { id: "d", text: "Nowhere" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Constant functions are the simplest continuous functions."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 1.11 and 1.12...');

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
