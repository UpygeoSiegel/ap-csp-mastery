/**
 * Seed script for AP Calculus AB Unit 2: Topics 2.7 and 2.8
 * Run with: node server/seeds/calculus/unit2-topics-7-8.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-2-7': [
    {
      text: "What is the derivative of $f(x) = \\sin x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos x$" },
        { id: "b", text: "$-\\cos x$" },
        { id: "c", text: "$\\sin x$" },
        { id: "d", text: "$-\\sin x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The derivative of sine is cosine."
    },
    {
      text: "What is the derivative of $f(x) = \\cos x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sin x$" },
        { id: "b", text: "$-\\sin x$" },
        { id: "c", text: "$\\cos x$" },
        { id: "d", text: "$-\\cos x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of cosine is negative sine."
    },
    {
      text: "Find the derivative of $f(x) = e^x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$xe^{x-1}$" },
        { id: "b", text: "$e^x$" },
        { id: "c", text: "$\\ln x$" },
        { id: "d", text: "$\\frac{1}{e^x}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The exponential function $e^x$ is unique because it is its own derivative."
    },
    {
      text: "Find the derivative of $f(x) = \\ln x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x$" },
        { id: "b", text: "$\\frac{1}{x}$" },
        { id: "c", text: "$x$" },
        { id: "d", text: "$\\frac{1}{\\ln x}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of the natural logarithm of $x$ is $1/x$ (for $x > 0$)."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [3 \\sin x]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$3 \\cos x$" },
        { id: "b", text: "$-3 \\cos x$" },
        { id: "c", text: "$\\cos x$" },
        { id: "d", text: "$3 \\sin x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Constant multiple rule: $3 \\cdot \\frac{d}{dx} [\\sin x] = 3 \\cos x$."
    },
    {
      text: "Find the slope of the curve $y = e^x$ at $x = 0$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "$e$" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$y' = e^x$. At $x = 0$, $y' = e^0 = 1$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [\\ln x + \\cos x]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{1}{x} + \\sin x$" },
        { id: "b", text: "$\\frac{1}{x} - \\sin x$" },
        { id: "c", text: "$e^x - \\sin x$" },
        { id: "d", text: "$\\frac{1}{x} + \\cos x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Derivative of $\\ln x$ is $1/x$; derivative of $\\cos x$ is $-\\sin x$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = 2e^x - 5 \\sin x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2e^x - 5 \\cos x$" },
        { id: "b", text: "$2e^x + 5 \\cos x$" },
        { id: "c", text: "$e^x - 5 \\cos x$" },
        { id: "d", text: "$2xe^{x-1} - 5 \\cos x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Apply derivative rules to each term: $2(e^x) - 5(\\cos x)$."
    },
    {
      text: "Find the slope of the curve $y = \\sin x$ at $x = \\pi$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "-1" },
        { id: "c", text: "1" },
        { id: "d", text: "$\\pi$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$y' = \\cos x$. At $x = \\pi$, $y' = \\cos(\\pi) = -1$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\pi \\sin x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\pi \\cos x$" },
        { id: "b", text: "0" },
        { id: "c", text: "$\\cos x$" },
        { id: "d", text: "$\\pi^2 \\cos x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$\\pi$ is a constant multiple."
    },
    {
      text: "What is the second derivative of $f(x) = \\sin x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos x$" },
        { id: "b", text: "$-\\sin x$" },
        { id: "c", text: "$-\\cos x$" },
        { id: "d", text: "$\\sin x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$f'(x) = \\cos x$. $f''(x) = \\frac{d}{dx} [\\cos x] = -\\sin x$."
    },
    {
      text: "Find the derivative of $f(x) = 4 \\ln x + x^2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{4}{x} + 2x$" },
        { id: "b", text: "$\\frac{1}{x} + 2x$" },
        { id: "c", text: "$\\frac{4}{x} + x$" },
        { id: "d", text: "$4e^x + 2x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$4 \\cdot (\\frac{1}{x}) + 2x = \\frac{4}{x} + 2x$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ 10 e^x + 7 ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$10 e^x$" },
        { id: "b", text: "$10 e^x + 7$" },
        { id: "c", text: "$e^x$" },
        { id: "d", text: "$10 xe^{x-1}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Constant 7 goes to zero; $10e^x$ remains $10e^x$."
    },
    {
      text: "If $f(x) = \\ln x$, find $f'(e)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "$\\frac{1}{e}$" },
        { id: "c", text: "$e$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$f'(x) = 1/x$. $f'(e) = 1/e$."
    },
    {
      text: "Which function's derivative is $-\\sin x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sin x$" },
        { id: "b", text: "$\\cos x$" },
        { id: "c", text: "$-\\cos x$" },
        { id: "d", text: "$e^x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of cosine is negative sine."
    },
    {
      text: "Find $f'(x)$ for $f(x) = x^3 - \\ln x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$3x^2 - \\frac{1}{x}$" },
        { id: "b", text: "$3x^2 - x$" },
        { id: "c", text: "$x^2 - \\frac{1}{x}$" },
        { id: "d", text: "$3x^2 + \\frac{1}{x}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Power rule on $x^3$ and log rule on $\\ln x$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\sin x - \\cos x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos x + \\sin x$" },
        { id: "b", text: "$\\cos x - \\sin x$" },
        { id: "c", text: "$-\\cos x - \\sin x$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\cos x - (-\\sin x) = \\cos x + \\sin x$."
    },
    {
      text: "True or False: The derivative of $e^\\pi$ is $e^\\pi$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False, it is 0" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$e^\\pi$ is a constant number (approximately 23.14). The derivative of any constant is zero."
    },
    {
      text: "Find the slope of $y = \\cos x$ at $x = \\pi/2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "-1" },
        { id: "c", text: "1" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$y' = -\\sin x$. At $x = \\pi/2$, $y' = -\\sin(\\pi/2) = -1$."
    },
    {
      text: "If $f(x) = 5e^x$, then $f'(x) = 5e^x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$5e^x$" },
        { id: "b", text: "$e^x$" },
        { id: "c", text: "$5xe^{x-1}$" },
        { id: "d", text: "5" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The constant 5 is preserved and $e^x$ is its own derivative."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\ln(2x) ]$. (Hint: $\\ln(2x) = \\ln 2 + \\ln x$)",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{2}{x}$" },
        { id: "b", text: "$\\frac{1}{x}$" },
        { id: "c", text: "$\\frac{1}{2x}$" },
        { id: "d", text: "2" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Using the property $\\ln(ab) = \\ln a + \\ln b$, we get $\\ln 2 + \\ln x$. Since $\\ln 2$ is a constant, its derivative is 0. The derivative of $\\ln x$ is $1/x$."
    },
    {
      text: "Find $f'(x)$ if $f(x) = \\sin x + e^x + 5$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos x + e^x$" },
        { id: "b", text: "$\\cos x + e^x + 5$" },
        { id: "c", text: "$-\\cos x + e^x$" },
        { id: "d", text: "$\\cos x + xe^{x-1}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Differentiate each term independently."
    },
    {
      text: "What is the second derivative of $f(x) = e^x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x$" },
        { id: "b", text: "0" },
        { id: "c", text: "1" },
        { id: "d", text: "$xe^x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Every derivative of $e^x$ is $e^x$."
    },
    {
      text: "If $f(x) = 10 \\ln x$, find $f'(1)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "10" },
        { id: "c", text: "1" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$f'(x) = 10/x$. $f'(1) = 10/1 = 10$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\cos x + 4x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\sin x + 4$" },
        { id: "b", text: "$\\sin x + 4$" },
        { id: "c", text: "$-\\sin x$" },
        { id: "d", text: "$\\cos x + 4$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Derivative of $\\cos x$ is $-\\sin x$; derivative of $4x$ is 4."
    }
  ],
  'calc-2-8': [
    {
      text: "What is the formula for the Product Rule $\\frac{d}{dx} [f(x) \\cdot g(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f'(x) \\cdot g'(x)$" },
        { id: "b", text: "$f'(x)g(x) + f(x)g'(x)$" },
        { id: "c", text: "$f'(x)g(x) - f(x)g'(x)$" },
        { id: "d", text: "$\\frac{f'(x) + g'(x)}{2}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of a product is 'derivative of the first times the second PLUS the first times the derivative of the second'."
    },
    {
      text: "Find the derivative of $f(x) = x \\cdot \\sin x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos x$" },
        { id: "b", text: "$\\sin x + x \\cos x$" },
        { id: "c", text: "$\\sin x - x \\cos x$" },
        { id: "d", text: "$x \\sin x + \\cos x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$f'(x) = (1)(\\sin x) + (x)(\\cos x) = \\sin x + x \\cos x$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ x^2 \\cdot e^x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2x \\cdot e^x$" },
        { id: "b", text: "$2x \\cdot e^x + x^2 \\cdot e^x$" },
        { id: "c", text: "$x^2 \\cdot e^x$" },
        { id: "d", text: "$2xe^x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$(2x)(e^x) + (x^2)(e^x) = x e^x (2 + x)$."
    },
    {
      text: "If $f(x) = (x^3 + 1) \\cdot \\cos x$, find $f'(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$3x^2 \\cos x - (x^3 + 1) \\sin x$" },
        { id: "b", text: "$3x^2 \\cos x + (x^3 + 1) \\sin x$" },
        { id: "c", text: "$3x^2 \\sin x$" },
        { id: "d", text: "$-3x^2 \\sin x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$(3x^2)(\\cos x) + (x^3 + 1)(-\\sin x) = 3x^2 \\cos x - (x^3 + 1) \\sin x$."
    },
    {
      text: "Find the derivative of $y = x \\cdot \\ln x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{1}{x}$" },
        { id: "b", text: "$\\ln x + 1$" },
        { id: "c", text: "$\\ln x$" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$(1)(\\ln x) + (x)(\\frac{1}{x}) = \\ln x + 1$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ e^x \\cdot \\sin x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x \\cos x$" },
        { id: "b", text: "$e^x (\\sin x + \\cos x)$" },
        { id: "c", text: "$e^x (\\sin x - \\cos x)$" },
        { id: "d", text: "$e^x \\sin x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$(e^x)(\\sin x) + (e^x)(\\cos x) = e^x (\\sin x + \\cos x)$."
    },
    {
      text: "If $h(x) = f(x)g(x)$, and $f(2)=3, f'(2)=4, g(2)=5, g'(2)=6$, find $h'(2)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "24" },
        { id: "b", text: "38" },
        { id: "c", text: "44" },
        { id: "d", text: "30" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$h'(2) = f'(2)g(2) + f(2)g'(2) = (4)(5) + (3)(6) = 20 + 18 = 38$."
    },
    {
      text: "Find the derivative of $f(x) = x^4 \\cdot e^x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$4x^3 e^x$" },
        { id: "b", text: "$x^3 e^x (4 + x)$" },
        { id: "c", text: "$4x^3 + e^x$" },
        { id: "d", text: "$x^4 e^x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$(4x^3)(e^x) + (x^4)(e^x) = x^3 e^x (4 + x)$."
    },
    {
      text: "True or False: The derivative of a product is the product of the derivatives.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "This is a common mistake. You must use the Product Rule formula."
    },
    {
      text: "Find the derivative of $y = (x^2 + 5)(x^3 - 2x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(2x)(3x^2 - 2)$" },
        { id: "b", text: "$(2x)(x^3 - 2x) + (x^2 + 5)(3x^2 - 2)$" },
        { id: "c", text: "$5x^4 + 9x^2 - 10$" },
        { id: "d", text: "Both b and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "Both represent the derivative (one in Product Rule form, one expanded)."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\sqrt{x} \\cdot \\ln x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{\\ln x}{2\\sqrt{x}} + \\frac{1}{\\sqrt{x}}$" },
        { id: "b", text: "$\\frac{\\ln x}{2\\sqrt{x}} + \\frac{\\sqrt{x}}{x}$" },
        { id: "c", text: "$\\frac{\\ln x + 2}{2\\sqrt{x}}$" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$f' = (\\frac{1}{2\\sqrt{x}})(\\ln x) + (\\sqrt{x})(\\frac{1}{x}) = \\frac{\\ln x}{2\\sqrt{x}} + \\frac{1}{\\sqrt{x}}$. Common denominator: $\\frac{\\ln x + 2}{2\\sqrt{x}}$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = (\\sin x)(\\cos x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos^2 x - \\sin^2 x$" },
        { id: "b", text: "$\\cos(2x)$" },
        { id: "c", text: "1" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$(\\cos x)(\\cos x) + (\\sin x)(-\\sin x) = \\cos^2 x - \\sin^2 x$, which is the identity for $\\cos(2x)$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ 5x e^x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$5e^x (x + 1)$" },
        { id: "b", text: "$5e^x$" },
        { id: "c", text: "$5xe^x$" },
        { id: "d", text: "$5 + e^x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$(5)(e^x) + (5x)(e^x) = 5e^x (1 + x)$."
    },
    {
      text: "If $f(x) = x^2 g(x)$, find $f'(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2x g'(x)$" },
        { id: "b", text: "$2x g(x) + x^2 g'(x)$" },
        { id: "c", text: "$2x + g'(x)$" },
        { id: "d", text: "$x^2 g(x)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Standard Product Rule application where $g(x)$ is an unknown function."
    },
    {
      text: "Find the derivative of $y = x^2 \\sin x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2x \\cos x$" },
        { id: "b", text: "$2x \\sin x + x^2 \\cos x$" },
        { id: "c", text: "$2x \\sin x - x^2 \\cos x$" },
        { id: "d", text: "$x^2 \\sin x + 2x \\cos x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$(2x)(\\sin x) + (x^2)(\\cos x)$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ (x+1)e^x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x$" },
        { id: "b", text: "$(x+2)e^x$" },
        { id: "c", text: "$(x+1)e^x$" },
        { id: "d", text: "$xe^x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$(1)(e^x) + (x+1)(e^x) = e^x (1 + x + 1) = (x+2)e^x$."
    },
    {
      text: "If $f(x) = x \\sin x$, find $f'(\\pi/2)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "$\\pi/2$" },
        { id: "d", text: "-1" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$f'(x) = \\sin x + x \\cos x$. $f'(\\pi/2) = \\sin(\\pi/2) + (\\pi/2)\\cos(\\pi/2) = 1 + (\\pi/2)(0) = 1$."
    },
    {
      text: "Find the derivative of $f(x) = x \\cdot \\sqrt{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1.5 \\sqrt{x}$" },
        { id: "b", text: "$\\frac{3}{2}x^{1/2}$" },
        { id: "c", text: "$\\sqrt{x} + \\frac{x}{2\\sqrt{x}}$" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "Product Rule gives $\\sqrt{x} + \\frac{x}{2\\sqrt{x}}$. Simplifying $x \\cdot x^{1/2}$ to $x^{3/2}$ and using Power Rule gives $\\frac{3}{2}x^{1/2}$. Both are equal."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\sin x \\cdot \\ln x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(\\cos x)(\\frac{1}{x})$" },
        { id: "b", text: "$(\\cos x)(\\ln x) + \\frac{\\sin x}{x}$" },
        { id: "c", text: "$(\\cos x)(\\ln x) - \\frac{\\sin x}{x}$" },
        { id: "d", text: "$\\frac{\\sin x}{x}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Derivative of first $(\\cos x) \\cdot$ second $(\\ln x) +$ first $(\\sin x) \\cdot$ derivative of second $(1/x)$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = x^{-2} \\cdot e^x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x (x^{-2} - 2x^{-3})$" },
        { id: "b", text: "$-2x^{-3} e^x$" },
        { id: "c", text: "$e^x (x^{-2} + 2x^{-3})$" },
        { id: "d", text: "$x^{-2} e^x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$(-2x^{-3})(e^x) + (x^{-2})(e^x) = e^x (x^{-2} - 2x^{-3})$."
    },
    {
      text: "The derivative of $f(x)g(x)h(x)$ involves how many terms?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "1" },
        { id: "d", text: "6" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$f'gh + fg'h + fgh'$. Each term differentiates exactly one function while keeping others constant."
    },
    {
      text: "Find the slope of $y = x e^x$ at $x = 1$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e$" },
        { id: "b", text: "$2e$" },
        { id: "c", text: "1" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$y' = e^x + xe^x = e^x(1+x)$. At $x=1, y' = e^1(2) = 2e$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ (x^2 + 1) \\sin x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2x \\cos x$" },
        { id: "b", text: "$2x \\sin x + (x^2 + 1) \\cos x$" },
        { id: "c", text: "$2x \\sin x - (x^2 + 1) \\cos x$" },
        { id: "d", text: "$x^2 \\cos x + 2x \\sin x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$(2x)(\\sin x) + (x^2 + 1)(\\cos x)$."
    },
    {
      text: "If $f(x) = x$, then $\\frac{d}{dx} [f(x)f(x)]$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "$2x$" },
        { id: "c", text: "$x^2$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Product rule: $(1)(x) + (x)(1) = 2x$. This matches the power rule for $x^2$."
    },
    {
      text: "Find the derivative of $y = \\frac{1}{x} \\cdot e^x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x / x^2$" },
        { id: "b", text: "$e^x (\\frac{1}{x} - \\frac{1}{x^2})$" },
        { id: "c", text: "$e^x (\\frac{1}{x} + \\frac{1}{x^2})$" },
        { id: "d", text: "$-e^x / x^2$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$(-\\frac{1}{x^2})(e^x) + (\\frac{1}{x})(e^x) = e^x (\\frac{1}{x} - \\frac{1}{x^2})$."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 2.7 and 2.8...');

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
