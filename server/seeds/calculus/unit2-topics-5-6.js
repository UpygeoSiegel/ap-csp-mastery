/**
 * Seed script for AP Calculus AB Unit 2: Topics 2.5 and 2.6
 * Run with: node server/seeds/calculus/unit2-topics-5-6.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-2-5': [
    {
      text: "According to the Power Rule, what is the derivative of $f(x) = x^n$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$nx^n$" },
        { id: "b", text: "$nx^{n-1}$" },
        { id: "c", text: "$\\frac{x^{n+1}}{n+1}$" },
        { id: "d", text: "$n^2x^n$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The Power Rule states that you multiply by the exponent and then subtract one from the exponent."
    },
    {
      text: "Find $f'(x)$ for $f(x) = x^5$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$5x^4$" },
        { id: "b", text: "$x^4$" },
        { id: "c", text: "$5x^6$" },
        { id: "d", text: "$4x^5$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$\\frac{d}{dx} [x^5] = 5 \\cdot x^{5-1} = 5x^4$."
    },
    {
      text: "Find the derivative of $f(x) = x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "$x$" },
        { id: "d", text: "$x^2$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$x$ is $x^1$. Using the power rule: $1 \\cdot x^0 = 1 \\cdot 1 = 1$."
    },
    {
      text: "Find the derivative of $f(x) = \\frac{1}{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "$-\\frac{1}{x^2}$" },
        { id: "c", text: "$\\ln(x)$" },
        { id: "d", text: "$\\frac{1}{x^2}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Rewrite $\\frac{1}{x}$ as $x^{-1}$. Applying the Power Rule: $-1 \\cdot x^{-2} = -\\frac{1}{x^2}$."
    },
    {
      text: "Find the derivative of $f(x) = \\sqrt{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1/2" },
        { id: "b", text: "$\\frac{1}{2\\sqrt{x}}$" },
        { id: "c", text: "$2\\sqrt{x}$" },
        { id: "d", text: "$x^{-1/2}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Rewrite $\\sqrt{x}$ as $x^{1/2}$. Applying the Power Rule: $\\frac{1}{2} \\cdot x^{-1/2} = \\frac{1}{2\\sqrt{x}}$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [x^{-3}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-3x^{-4}$" },
        { id: "b", text: "$-3x^{-2}$" },
        { id: "c", text: "$3x^{-4}$" },
        { id: "d", text: "$-2x^{-3}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$-3 \\cdot x^{-3-1} = -3x^{-4}$."
    },
    {
      text: "Find the slope of the curve $y = x^3$ at the point $x = 2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "8" },
        { id: "b", text: "12" },
        { id: "c", text: "6" },
        { id: "d", text: "4" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$y' = 3x^2$. At $x = 2$, $y' = 3(2)^2 = 3(4) = 12$."
    },
    {
      text: "Find the derivative of $f(x) = \\sqrt[3]{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{1}{3}x^{-2/3}$" },
        { id: "b", text: "$3x^2$" },
        { id: "c", text: "$\\frac{1}{3}x^{2/3}$" },
        { id: "d", text: "$x^{-3}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Rewrite as $x^{1/3}$. Derivative is $\\frac{1}{3}x^{1/3 - 1} = \\frac{1}{3}x^{-2/3}$."
    },
    {
      text: "Find the derivative of $f(x) = \\frac{1}{x^4}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$4x^3$" },
        { id: "b", text: "$-\\frac{4}{x^5}$" },
        { id: "c", text: "$\\frac{1}{4x^3}$" },
        { id: "d", text: "$-\\frac{4}{x^3}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$x^{-4}$ derivative is $-4x^{-5} = -\\frac{4}{x^5}$."
    },
    {
      text: "True or False: The Power Rule works for any real number exponent $n$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Yes, $n$ can be positive, negative, fractional, or even irrational (like $\\pi$)."
    },
    {
      text: "Find $f'(x)$ if $f(x) = x^{3/2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{3}{2}x^{1/2}$" },
        { id: "b", text: "$\\frac{3}{2}x^{5/2}$" },
        { id: "c", text: "$\\frac{2}{3}x^{1/2}$" },
        { id: "d", text: "$\\sqrt{x}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{3}{2} \\cdot x^{3/2 - 1} = \\frac{3}{2}x^{1/2}$."
    },
    {
      text: "Find the derivative of $f(x) = \\frac{1}{\\sqrt{x}}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{1}{2x^{3/2}}$" },
        { id: "b", text: "$\\frac{1}{2\\sqrt{x}}$" },
        { id: "c", text: "$-\\frac{1}{2}\\sqrt{x}$" },
        { id: "d", text: "$x^{1/2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Rewrite as $x^{-1/2}$. Derivative is $-\\frac{1}{2}x^{-3/2} = -\\frac{1}{2x^{3/2}}$."
    },
    {
      text: "Find $\\frac{d}{dx} [x^\\pi]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\pi x^{\\pi-1}$" },
        { id: "b", text: "$\\pi x^\\pi$" },
        { id: "c", text: "$x^{\\pi-1}$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Applying the power rule to an irrational exponent: $\\pi \\cdot x^{\\pi-1}$."
    },
    {
      text: "If $f(x) = x^2$, find $f'(\\pi)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\pi^2$" },
        { id: "b", text: "$2\\pi$" },
        { id: "c", text: "2" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$f'(x) = 2x$. Substitute $x = \\pi$ to get $2\\pi$."
    },
    {
      text: "Find the derivative of $f(x) = x^{100}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$100x^{99}$" },
        { id: "b", text: "$x^{99}$" },
        { id: "c", text: "$100x^{100}$" },
        { id: "d", text: "$99x^{100}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$100 \\cdot x^{100-1} = 100x^{99}$."
    },
    {
      text: "Which function has a derivative of $3x^2$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = x^2$" },
        { id: "b", text: "$f(x) = x^3$" },
        { id: "c", text: "$f(x) = 3x$" },
        { id: "d", text: "$f(x) = x^4$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Applying the Power Rule to $x^3$ gives $3x^2$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = \\frac{1}{x^3}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{3}{x^4}$" },
        { id: "b", text: "$\\frac{3}{x^4}$" },
        { id: "c", text: "$-\\frac{3}{x^2}$" },
        { id: "d", text: "$\\frac{1}{3x^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$x^{-3}$ derivative is $-3x^{-4} = -\\frac{3}{x^4}$."
    },
    {
      text: "Find the derivative of $f(x) = x^{-1/2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{1}{2}x^{-3/2}$" },
        { id: "b", text: "$-\\frac{1}{2}x^{1/2}$" },
        { id: "c", text: "$\\frac{1}{2}x^{-3/2}$" },
        { id: "d", text: "$-\\frac{3}{2}x^{-1/2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Multiply by exponent $(-1/2)$ and subtract 1 from exponent $(-1/2 - 1 = -3/2)$."
    },
    {
      text: "Find $\\frac{d}{dx} [x^{4/3}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{4}{3}x^{1/3}$" },
        { id: "b", text: "$\\frac{3}{4}x^{1/3}$" },
        { id: "c", text: "$\\frac{4}{3}x^{7/3}$" },
        { id: "d", text: "$\\frac{1}{3}x^{4/3}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{4}{3}x^{4/3 - 1} = \\frac{4}{3}x^{1/3}$."
    },
    {
      text: "What is the derivative of $f(x) = x^0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "$x$" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$x^0 = 1$ (a constant). The derivative of a constant is 0."
    },
    {
      text: "Evaluate the derivative of $f(x) = x^e$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$ex^{e-1}$" },
        { id: "b", text: "$e^x$" },
        { id: "c", text: "$x^e$" },
        { id: "d", text: "$ex^e$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "This is a power function, not an exponential function. The Power Rule applies: $ex^{e-1}$."
    },
    {
      text: "Find the slope of $y = \\sqrt{x}$ at $x = 9$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "1/6" },
        { id: "c", text: "1/3" },
        { id: "d", text: "6" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$y' = \\frac{1}{2\\sqrt{x}}$. At $x = 9$, $y' = \\frac{1}{2 \\cdot 3} = \\frac{1}{6}$."
    },
    {
      text: "Identify the function whose derivative is $\\frac{1}{3\\sqrt[3]{x^2}}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x^{1/3}$" },
        { id: "b", text: "$x^3$" },
        { id: "c", text: "$x^{-1/3}$" },
        { id: "d", text: "$3x^{1/3}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$\\frac{d}{dx} [x^{1/3}] = \\frac{1}{3}x^{-2/3} = \\frac{1}{3x^{2/3}} = \\frac{1}{3\\sqrt[3]{x^2}}$."
    },
    {
      text: "If $f(x) = x^{-2}$, find $f'(1).",
      type: "multiple_choice",
      options: [
        { id: "a", text: "-2" },
        { id: "b", text: "1" },
        { id: "c", text: "-1" },
        { id: "d", text: "2" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f'(x) = -2x^{-3}$. $f'(1) = -2(1)^{-3} = -2$."
    },
    {
      text: "Find the derivative of $f(x) = x^{2/3}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{2}{3}x^{-1/3}$" },
        { id: "b", text: "$\\frac{2}{3}x^{1/3}$" },
        { id: "c", text: "$\\frac{3}{2}x^{1/3}$" },
        { id: "d", text: "$\\sqrt[3]{x^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{2}{3}x^{2/3 - 1} = \\frac{2}{3}x^{-1/3}$."
    }
  ],
  'calc-2-6': [
    {
      text: "Find the derivative of $f(x) = 7x^4$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$28x^3$" },
        { id: "b", text: "$7x^3$" },
        { id: "c", text: "$28x^4$" },
        { id: "d", text: "$4x^3$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Using the Constant Multiple Rule: $7 \\cdot \\frac{d}{dx}[x^4] = 7 \\cdot (4x^3) = 28x^3$."
    },
    {
      text: "Find the derivative of $f(x) = x^3 + x^2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$3x^2 + 2x$" },
        { id: "b", text: "$5x^4$" },
        { id: "c", text: "$x^2 + x$" },
        { id: "d", text: "$6x^2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Using the Sum Rule: $\\frac{d}{dx}[x^3] + \\frac{d}{dx}[x^2] = 3x^2 + 2x$."
    },
    {
      text: "What is the derivative of any constant function $f(x) = c$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$c$" },
        { id: "b", text: "0" },
        { id: "c", text: "1" },
        { id: "d", text: "$x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Constants don't change, so their rate of change is 0."
    },
    {
      text: "Find $f'(x)$ for $f(x) = 4x^3 - 5x + 2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$12x^2 - 5$" },
        { id: "b", text: "$12x^2 - 5x$" },
        { id: "c", text: "$4x^2 - 5$" },
        { id: "d", text: "$12x^3 - 5$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{d}{dx} [4x^3] - \\frac{d}{dx} [5x] + \\frac{d}{dx} [2] = 12x^2 - 5 + 0$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [10x^2 - 3\\sqrt{x}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$20x - \\frac{3}{2\\sqrt{x}}$" },
        { id: "b", text: "$20x - 3\\sqrt{x}$" },
        { id: "c", text: "$10x - 1.5\\sqrt{x}$" },
        { id: "d", text: "$20x - 1.5x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$20x - 3 \\cdot (\\frac{1}{2} x^{-1/2}) = 20x - \\frac{3}{2\\sqrt{x}}$."
    },
    {
      text: "Find the derivative of $f(x) = (x + 2)(x - 2)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2x$" },
        { id: "b", text: "$x^2 - 4$" },
        { id: "c", text: "1" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Expand first: $f(x) = x^2 - 4$. Then $f'(x) = 2x$."
    },
    {
      text: "If $f(x) = 3x^2$ and $g(x) = x^3$, find $(f + g)'(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$6x + 3x^2$" },
        { id: "b", text: "$x^3 + 3x^2$" },
        { id: "c", text: "$9x^2$" },
        { id: "d", text: "$6x + x^2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$f'(x) = 6x$ and $g'(x) = 3x^2$. The sum is $6x + 3x^2$."
    },
    {
      text: "Find the derivative of $f(x) = \\frac{1}{x} + \\frac{1}{x^2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{1}{x^2} - \\frac{2}{x^3}$" },
        { id: "b", text: "$\\frac{1}{x^2} + \\frac{2}{x^3}$" },
        { id: "c", text: "$-\\frac{1}{x^2} + \\frac{2}{x^3}$" },
        { id: "d", text: "$\\ln(x) - \\frac{2}{x^3}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{d}{dx} [x^{-1} + x^{-2}] = -x^{-2} - 2x^{-3} = -\\frac{1}{x^2} - \\frac{2}{x^3}$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = 5$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "0" },
        { id: "c", text: "1" },
        { id: "d", text: "$x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of any constant is zero."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\frac{x^3 + 2x}{x} ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2x$" },
        { id: "b", text: "$3x^2 + 2$" },
        { id: "c", text: "$x^2 + 2$" },
        { id: "d", text: "$2x + 2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Simplify first: $\\frac{x^3}{x} + \\frac{2x}{x} = x^2 + 2$. Derivative is $2x$."
    },
    {
      text: "Find the slope of the tangent line to $y = 2x^4 - 3x^2$ at $x = 1$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "8" },
        { id: "b", text: "2" },
        { id: "c", text: "5" },
        { id: "d", text: "-1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$y' = 8x^3 - 6x$. At $x = 1$, $y' = 8(1) - 6(1) = 2$."
    },
    {
      text: "If $f(x) = kx^n$, then $f'(x) = knx^{n-1}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$knx^{n-1}$" },
        { id: "b", text: "$nx^{n-1}$" },
        { id: "c", text: "$knx^n$" },
        { id: "d", text: "$kx^{n-1}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Constant multiple rule combined with the power rule."
    },
    {
      text: "Find $f'(x)$ if $f(x) = \\pi x^2 + e$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2\\pi x$" },
        { id: "b", text: "$2\\pi x + 1$" },
        { id: "c", text: "$\\pi^2 x$" },
        { id: "d", text: "$2x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\pi$ is a constant multiple, $e$ is a constant. $\\frac{d}{dx} [\\pi x^2] + \\frac{d}{dx} [e] = 2\\pi x + 0$."
    },
    {
      text: "Find the derivative of $f(x) = \\frac{x^2 + 1}{2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x$" },
        { id: "b", text: "$x/2$" },
        { id: "c", text: "$2x$" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Rewrite as $\\frac{1}{2}(x^2 + 1)$. Derivative is $\\frac{1}{2} \\cdot (2x) = x$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ x + x^2 + x^3 ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 + 2x + 3x^2$" },
        { id: "b", text: "$6x^2$" },
        { id: "c", text: "$x + 2x + 3x$" },
        { id: "d", text: "$3x^2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Differentiate each term independently: 1, $2x$, and $3x^2$."
    },
    {
      text: "Find $f'(x)$ if $f(x) = 4\\sqrt{x} + \\frac{2}{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{2}{\\sqrt{x}} - \\frac{2}{x^2}$" },
        { id: "b", text: "$\\frac{4}{\\sqrt{x}} + \\frac{2}{x^2}$" },
        { id: "c", text: "$\\frac{2}{\\sqrt{x}} + \\frac{2}{x^2}$" },
        { id: "d", text: "$\\frac{1}{\\sqrt{x}} - \\frac{2}{x^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$4 \\cdot (\\frac{1}{2} x^{-1/2}) + 2 \\cdot (-x^{-2}) = \\frac{2}{\\sqrt{x}} - \\frac{2}{x^2}$."
    },
    {
      text: "If the position of an object is $s(t) = 16t^2 + 20t + 5$, what is its velocity at time $t$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$32t + 20$" },
        { id: "b", text: "$32t$" },
        { id: "c", text: "$16t + 20$" },
        { id: "d", text: "$32t + 25$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Velocity is the derivative of position: $v(t) = s'(t) = 32t + 20$."
    },
    {
      text: "Find the derivative of $f(x) = 10x - \\frac{x}{5}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "9.8" },
        { id: "b", text: "$10 - \\frac{1}{5}$" },
        { id: "c", text: "9" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "$\\frac{d}{dx} [10x] - \\frac{d}{dx} [ (\\frac{1}{5})x ] = 10 - \\frac{1}{5} = 9.8$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ (2x + 3)^2 ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$8x + 12$" },
        { id: "b", text: "$4x + 6$" },
        { id: "c", text: "$4x^2 + 12x + 9$" },
        { id: "d", text: "$2(2x + 3)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Expand first: $4x^2 + 12x + 9$. Derivative is $8x + 12$."
    },
    {
      text: "If $f(x) = 3x^4$ and $g(x) = 2x^4$, find $(f - g)'(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$4x^3$" },
        { id: "b", text: "$12x^3 - 8x^3$" },
        { id: "c", text: "$x^4$" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "$(3x^4 - 2x^4)' = (x^4)' = 4x^3$. Or $12x^3 - 8x^3 = 4x^3$."
    },
    {
      text: "Find the derivative of $f(x) = \\sqrt{2}x + \\sqrt{3}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sqrt{2}$" },
        { id: "b", text: "$\\sqrt{2} + \\sqrt{3}$" },
        { id: "c", text: "$\\frac{1}{2\\sqrt{2}}$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\sqrt{2}$ is the slope of the linear term; $\\sqrt{3}$ is a constant whose derivative is 0."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\frac{1}{4x} ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{1}{4x^2}$" },
        { id: "b", text: "1/4" },
        { id: "c", text: "$-\\frac{4}{x^2}$" },
        { id: "d", text: "$-\\frac{1}{x^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Rewrite as $(\\frac{1}{4})x^{-1}$. Derivative is $(\\frac{1}{4})(-1)x^{-2} = -\\frac{1}{4x^2}$."
    },
    {
      text: "If $f(x) = x^3 - 4x^2 + 3x - 10$, find $f'(2)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "-1" },
        { id: "b", text: "$12 - 16 + 3$" },
        { id: "c", text: "3" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "$f'(x) = 3x^2 - 8x + 3$. $f'(2) = 3(4) - 8(2) + 3 = 12 - 16 + 3 = -1$."
    },
    {
      text: "Find the derivative of $f(x) = \\frac{x^3 + 1}{5}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{3x^2}{5}$" },
        { id: "b", text: "$3x^2$" },
        { id: "c", text: "$\\frac{x^2}{5}$" },
        { id: "d", text: "3/5" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$\\frac{1}{5} \\cdot \\frac{d}{dx} [x^3 + 1] = \\frac{1}{5} \\cdot (3x^2) = \\frac{3x^2}{5}$."
    },
    {
      text: "$\\frac{d}{dx} [ f(x) - g(x) + h(x) ]$ is equal to:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f'(x) - g'(x) + h'(x)$" },
        { id: "b", text: "$f'(x) + g'(x) + h'(x)$" },
        { id: "c", text: "$f(x) - g(x) + h(x)$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The derivative of a linear combination of functions is the same linear combination of their derivatives."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 2.5 and 2.6...');

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
