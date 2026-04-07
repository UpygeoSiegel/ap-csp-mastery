/**
 * Seed script for AP Calculus AB Unit 2: Topics 2.9 and 2.10
 * Run with: node server/seeds/calculus/unit2-topics-9-10.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-2-9': [
    {
      text: "What is the formula for the Quotient Rule $\\frac{d}{dx} [\\frac{f(x)}{g(x)}]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{f'(x)g(x) + f(x)g'(x)}{[g(x)]^2}$" },
        { id: "b", text: "$\\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$" },
        { id: "c", text: "$\\frac{f(x)g'(x) - f'(x)g(x)}{[g(x)]^2}$" },
        { id: "d", text: "$\\frac{f'(x)}{g'(x)}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "A common mnemonic is 'Lo-De-Hi minus Hi-De-Lo over Lo-Lo'."
    },
    {
      text: "Find the derivative of $f(x) = \\frac{x}{x + 1}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{1}{(x + 1)^2}$" },
        { id: "b", text: "$-\\frac{1}{(x + 1)^2}$" },
        { id: "c", text: "$\\frac{2x + 1}{(x + 1)^2}$" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{(1)(x+1) - (x)(1)}{(x+1)^2} = \\frac{x+1-x}{(x+1)^2} = \\frac{1}{(x+1)^2}$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\frac{e^x}{x} ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{e^x}{1}$" },
        { id: "b", text: "$\\frac{xe^x - e^x}{x^2}$" },
        { id: "c", text: "$\\frac{e^x - xe^x}{x^2}$" },
        { id: "d", text: "$\\frac{e^x}{x^2}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\frac{(e^x)(x) - (e^x)(1)}{x^2} = \\frac{e^x(x - 1)}{x^2}$."
    },
    {
      text: "If $f(x) = \\frac{\\sin x}{x}$, find $f'(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{x \\cos x - \\sin x}{x^2}$" },
        { id: "b", text: "$\\frac{\\sin x - x \\cos x}{x^2}$" },
        { id: "c", text: "$\\frac{\\cos x}{1}$" },
        { id: "d", text: "$\\frac{x \\cos x + \\sin x}{x^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{(\\cos x)(x) - (\\sin x)(1)}{x^2} = \\frac{x \\cos x - \\sin x}{x^2}$."
    },
    {
      text: "Find the derivative of $y = \\frac{x^2 + 3}{x - 1}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{x^2 - 2x - 3}{(x - 1)^2}$" },
        { id: "b", text: "$\\frac{3x^2 - 2x - 3}{(x - 1)^2}$" },
        { id: "c", text: "$\\frac{2x}{1}$" },
        { id: "d", text: "$\\frac{x^2 + 2x - 3}{(x - 1)^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$\\frac{(2x)(x-1) - (x^2+3)(1)}{(x-1)^2} = \\frac{2x^2-2x-x^2-3}{(x-1)^2} = \\frac{x^2-2x-3}{(x-1)^2}$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\frac{1}{x^2 + 1} ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{1}{2x}$" },
        { id: "b", text: "$-\\frac{2x}{(x^2 + 1)^2}$" },
        { id: "c", text: "$\\frac{2x}{(x^2 + 1)^2}$" },
        { id: "d", text: "$-\\frac{1}{(x^2 + 1)^2}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\frac{(0)(x^2+1) - (1)(2x)}{(x^2+1)^2} = -\\frac{2x}{(x^2+1)^2}$."
    },
    {
      text: "If $h(x) = \\frac{f(x)}{g(x)}$, and $f(1)=2, f'(1)=3, g(1)=4, g'(1)=5$, find $h'(1)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{2}{16}$" },
        { id: "b", text: "$\\frac{1}{8}$" },
        { id: "c", text: "0.5" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$h'(1) = \\frac{f'(1)g(1) - f(1)g'(1)}{[g(1)]^2} = \\frac{(3)(4) - (2)(5)}{4^2} = \\frac{12 - 10}{16} = \\frac{2}{16} = \\frac{1}{8} = 0.125$."
    },
    {
      text: "Find the derivative of $f(x) = \\frac{\\ln x}{x^2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{1 - 2 \\ln x}{x^3}$" },
        { id: "b", text: "$\\frac{x - 2x \\ln x}{x^4}$" },
        { id: "c", text: "$\\frac{1}{2x^3}$" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$\\frac{(\\frac{1}{x})(x^2) - (\\ln x)(2x)}{x^4} = \\frac{x - 2x \\ln x}{x^4}$. Factoring out $x$ gives $\\frac{1 - 2 \\ln x}{x^3}$."
    },
    {
      text: "True or False: You should always simplify the numerator of the quotient rule result.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Simplifying the numerator is essential for finding critical points (where $f'=0$) or second derivatives."
    },
    {
      text: "Find the derivative of $y = \\frac{\\sin x + \\cos x}{e^x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{\\cos x - \\sin x}{e^x}$" },
        { id: "b", text: "$-\\frac{2 \\sin x}{e^x}$" },
        { id: "c", text: "$\\frac{(\\cos x - \\sin x)e^x - (\\sin x + \\cos x)e^x}{e^{2x}}$" },
        { id: "d", text: "Both b and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "Using the rule: $\\frac{(\\cos x - \\sin x)e^x - (\\sin x + \\cos x)e^x}{e^{2x}} = \\frac{e^x [\\cos x - \\sin x - \\sin x - \\cos x]}{e^{2x}} = -\\frac{2 \\sin x}{e^x}$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\frac{x^3}{x^2 - 5} ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{x^4 - 15x^2}{(x^2 - 5)^2}$" },
        { id: "b", text: "$\\frac{3x^2}{2x}$" },
        { id: "c", text: "1.5x" },
        { id: "d", text: "$\\frac{x^4}{(x^2 - 5)^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$\\frac{(3x^2)(x^2-5) - (x^3)(2x)}{(x^2-5)^2} = \\frac{3x^4 - 15x^2 - 2x^4}{(x^2-5)^2} = \\frac{x^4 - 15x^2}{(x^2-5)^2}$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = \\frac{1}{\\ln x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{1}{x (\\ln x)^2}$" },
        { id: "b", text: "$\\frac{1}{x}$" },
        { id: "c", text: "$-\\frac{1}{(\\ln x)^2}$" },
        { id: "d", text: "$\\frac{x}{(\\ln x)^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$\\frac{(0)(\\ln x) - (1)(\\frac{1}{x})}{(\\ln x)^2} = \\frac{-1/x}{(\\ln x)^2} = -\\frac{1}{x (\\ln x)^2}$."
    },
    {
      text: "Which rule is typically preferred if the denominator is a single constant?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Quotient Rule" },
        { id: "b", text: "Constant Multiple Rule" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "If $f(x) = \\frac{g(x)}{5}$, it is much easier to treat it as $\\frac{1}{5} \\cdot g(x)$ rather than using the full quotient rule."
    },
    {
      text: "Find the slope of $y = \\frac{x^2}{x + 2}$ at $x = 0$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "2" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$y' = \\frac{2x(x+2) - x^2(1)}{(x+2)^2}$. At $x = 0$, $y' = \\frac{0 - 0}{4} = 0$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\tan x ]$ using the quotient rule on $(\\frac{\\sin x}{\\cos x})$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sec^2 x$" },
        { id: "b", text: "$\\frac{1}{\\cos^2 x}$" },
        { id: "c", text: "$\\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x}$" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$\\frac{(\\cos x)(\\cos x) - (\\sin x)(-\\sin x)}{\\cos^2 x} = \\frac{\\cos^2 x + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} = \\sec^2 x$."
    },
    {
      text: "Find the derivative of $f(x) = \\frac{x - 1}{x + 1}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{2}{(x + 1)^2}$" },
        { id: "b", text: "0" },
        { id: "c", text: "$-\\frac{2}{(x + 1)^2}$" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{(1)(x+1) - (x-1)(1)}{(x+1)^2} = \\frac{x+1-x+1}{(x+1)^2} = \\frac{2}{(x+1)^2}$."
    },
    {
      text: "If $f(x) = \\frac{k}{g(x)}$, then $f'(x) = -\\frac{k g'(x)}{[g(x)]^2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{k g'(x)}{[g(x)]^2}$" },
        { id: "b", text: "$\\frac{k}{g'(x)}$" },
        { id: "c", text: "0" },
        { id: "d", text: "$\\frac{k g'(x)}{[g(x)]^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{(0)(g) - (k)(g')}{g^2} = -\\frac{kg'}{g^2}$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\frac{5}{x} ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{5}{x^2}$" },
        { id: "b", text: "0" },
        { id: "c", text: "$\\frac{5}{x^2}$" },
        { id: "d", text: "-5" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Power rule $(5x^{-1})$ gives $-5x^{-2}$ or Quotient rule gives $-5/x^2$."
    },
    {
      text: "Find the derivative of $y = \\frac{\\cos x}{\\sin x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\csc^2 x$" },
        { id: "b", text: "$\\sec^2 x$" },
        { id: "c", text: "1" },
        { id: "d", text: "$-\\frac{1}{\\sin^2 x}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$\\frac{(-\\sin x)(\\sin x) - (\\cos x)(\\cos x)}{\\sin^2 x} = -\\frac{\\sin^2 x + \\cos^2 x}{\\sin^2 x} = -\\frac{1}{\\sin^2 x} = -\\csc^2 x$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = \\frac{x + 5}{x^2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{-x - 10}{x^3}$" },
        { id: "b", text: "$\\frac{x - 10}{x^3}$" },
        { id: "c", text: "$\\frac{1}{2x}$" },
        { id: "d", text: "$-\\frac{1}{x^2} - \\frac{10}{x^3}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$\\frac{(1)(x^2) - (x+5)(2x)}{x^4} = \\frac{x^2 - 2x^2 - 10x}{x^4} = \\frac{-x^2 - 10x}{x^4} = \\frac{-x - 10}{x^3}$."
    },
    {
      text: "When is the Quotient Rule result undefined?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Wherever the original function is undefined ($g(x)=0$)" },
        { id: "b", text: "Wherever the numerator is zero" },
        { id: "c", text: "Wherever $x$ is zero" },
        { id: "d", text: "Always" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The denominator of the derivative is $[g(x)]^2$, so the derivative is undefined at the same points as the original function."
    },
    {
      text: "Find the derivative of $y = \\frac{x^2}{e^x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{2x - x^2}{e^x}$" },
        { id: "b", text: "$\\frac{2x}{e^x}$" },
        { id: "c", text: "$\\frac{x^2}{e^x}$" },
        { id: "d", text: "$\\frac{x^2 - 2x}{e^x}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{(2x)(e^x) - (x^2)(e^x)}{(e^x)^2} = \\frac{e^x(2x - x^2)}{e^{2x}} = \\frac{2x - x^2}{e^x}$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\frac{1}{x^4} ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{4}{x^5}$" },
        { id: "b", text: "$\\frac{4}{x^5}$" },
        { id: "c", text: "$-\\frac{4}{x^3}$" },
        { id: "d", text: "$\\frac{1}{4x^3}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$\\frac{(0)(x^4) - (1)(4x^3)}{x^8} = -\\frac{4x^3}{x^8} = -\\frac{4}{x^5}$."
    },
    {
      text: "Find $f'(x)$ if $f(x) = \\frac{x + 2}{x - 2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{4}{(x - 2)^2}$" },
        { id: "b", text: "$\\frac{4}{(x - 2)^2}$" },
        { id: "c", text: "0" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{(1)(x-2) - (x+2)(1)}{(x-2)^2} = \\frac{x-2-x-2}{(x-2)^2} = -\\frac{4}{(x - 2)^2}$."
    },
    {
      text: "The Quotient Rule is essentially an application of the Product Rule combined with the:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Chain Rule (on $g(x)^{-1}$)" },
        { id: "b", text: "Sum Rule" },
        { id: "c", text: "Constant Rule" },
        { id: "d", text: "Power Rule" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f/g = f \\cdot g^{-1}$. Differentiating this product requires the chain rule for the $g^{-1}$ term."
    }
  ],
  'calc-2-10': [
    {
      text: "What is the derivative of $f(x) = \\tan x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sec x$" },
        { id: "b", text: "$\\sec^2 x$" },
        { id: "c", text: "$-\\sec^2 x$" },
        { id: "d", text: "$\\cot x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of tangent is secant squared."
    },
    {
      text: "What is the derivative of $f(x) = \\sec x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sec x \\tan x$" },
        { id: "b", text: "$\\tan^2 x$" },
        { id: "c", text: "$-\\sec x \\tan x$" },
        { id: "d", text: "$\\sec^2 x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The derivative of secant is secant times tangent."
    },
    {
      text: "What is the derivative of $f(x) = \\cot x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\csc^2 x$" },
        { id: "b", text: "$-\\csc^2 x$" },
        { id: "c", text: "$\\sec^2 x$" },
        { id: "d", text: "$-\\tan x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of cotangent is negative cosecant squared."
    },
    {
      text: "What is the derivative of $f(x) = \\csc x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\csc x \\cot x$" },
        { id: "b", text: "$-\\csc x \\cot x$" },
        { id: "c", text: "$-\\csc^2 x$" },
        { id: "d", text: "$-\\sec x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of cosecant is negative cosecant times cotangent."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ 5 \\tan x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$5 \\sec^2 x$" },
        { id: "b", text: "$\\sec^2 x$" },
        { id: "c", text: "$5 \\sec x$" },
        { id: "d", text: "$5 \\cot x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Constant multiple rule applied to tangent."
    },
    {
      text: "Find the slope of $y = \\tan x$ at $x = 0$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "Undefined" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$y' = \\sec^2 x$. At $x = 0$, $y' = (\\sec 0)^2 = (\\frac{1}{\\cos 0})^2 = 1^2 = 1$."
    },
    {
      text: "Which trig function's derivative is negative?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sin x, \\tan x, \\sec x$" },
        { id: "b", text: "$\\cos x, \\cot x, \\csc x$" },
        { id: "c", text: "All of them" },
        { id: "d", text: "None of them" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "All 'co-functions' (cosine, cotangent, cosecant) have derivatives starting with a negative sign."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ x + \\sec x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 + \\sec x \\tan x$" },
        { id: "b", text: "$1 + \\sec^2 x$" },
        { id: "c", text: "$\\sec x \\tan x$" },
        { id: "d", text: "$1 + \\tan x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Differentiate each term independently."
    },
    {
      text: "Find $f'(x)$ for $f(x) = e^x \\tan x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x \\sec^2 x$" },
        { id: "b", text: "$e^x (\\tan x + \\sec^2 x)$" },
        { id: "c", text: "$e^x \\tan x + \\sec^2 x$" },
        { id: "d", text: "$e^x (\\tan x - \\sec^2 x)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Product Rule: $(e^x)(\\tan x) + (e^x)(\\sec^2 x)$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\frac{\\cot x}{x} ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{-x \\csc^2 x - \\cot x}{x^2}$" },
        { id: "b", text: "$\\frac{-\\csc^2 x}{1}$" },
        { id: "c", text: "$\\frac{x \\csc^2 x - \\cot x}{x^2}$" },
        { id: "d", text: "$\\frac{-\\csc^2 x - \\cot x}{x^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Quotient Rule: $\\frac{(-\\csc^2 x)(x) - (\\cot x)(1)}{x^2} = \\frac{-x \\csc^2 x - \\cot x}{x^2}$."
    },
    {
      text: "If $f(x) = \\sec x$, find $f'(\\pi/4)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sqrt{2}$" },
        { id: "b", text: "2" },
        { id: "c", text: "1" },
        { id: "d", text: "$\\frac{\\sqrt{2}}{2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f' = \\sec x \\tan x$. $f'(\\pi/4) = \\sec(\\pi/4)\\tan(\\pi/4) = (\\sqrt{2})(1) = \\sqrt{2}$."
    },
    {
      text: "Find the derivative of $y = \\csc x + \\cot x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\csc x (\\csc x + \\cot x)$" },
        { id: "b", text: "$\\csc x (\\csc x + \\cot x)$" },
        { id: "c", text: "$-\\csc^2 x - \\csc x \\cot x$" },
        { id: "d", text: "Both a and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$y' = -\\csc x \\cot x - \\csc^2 x$. Factoring out $-\\csc x$ gives $-\\csc x (\\cot x + \\csc x)$."
    },
    {
      text: "What is the derivative of $f(x) = \\frac{1}{\\cos x}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sec x \\tan x$" },
        { id: "b", text: "$-\\sin x$" },
        { id: "c", text: "$\\frac{1}{\\sin x}$" },
        { id: "d", text: "$\\sec^2 x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$1/\\cos x$ is $\\sec x$. Its derivative is $\\sec x \\tan x$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ x \\tan x ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\tan x + x \\sec^2 x$" },
        { id: "b", text: "$\\sec^2 x$" },
        { id: "c", text: "$x \\sec^2 x$" },
        { id: "d", text: "$\\tan x + \\sec^2 x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Product Rule: $(1)(\\tan x) + (x)(\\sec^2 x)$."
    },
    {
      text: "Find the slope of $y = \\csc x$ at $x = \\pi/2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "-1" },
        { id: "c", text: "1" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$y' = -\\csc x \\cot x$. At $x = \\pi/2$, $\\cot(\\pi/2) = 0$, so $y' = 0$."
    },
    {
      text: "Which of the following is equal to $\\frac{d}{dx} [ \\tan x - \\sec x ]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sec x (\\sec x - \\tan x)$" },
        { id: "b", text: "$\\sec^2 x - \\sec x \\tan x$" },
        { id: "c", text: "$\\sec x \\tan x - \\sec^2 x$" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$y' = \\sec^2 x - \\sec x \\tan x$. Factoring out $\\sec x$ gives $\\sec x (\\sec x - \\tan x)$."
    },
    {
      text: "True or False: The derivative of $\\tan x$ is always positive.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\sec^2 x = (\\sec x)^2$, which is always positive (where defined). This means the tangent function is always increasing."
    },
    {
      text: "Find the second derivative of $f(x) = \\tan x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2 \\sec^2 x \\tan x$" },
        { id: "b", text: "$\\sec^4 x$" },
        { id: "c", text: "2 \\sec x" },
        { id: "d", text: "$\\sec^2 x \\tan x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f' = \\sec x \\cdot \\sec x$. Using Product Rule: $(\\sec x \\tan x)(\\sec x) + (\\sec x)(\\sec x \\tan x) = 2 \\sec^2 x \\tan x$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\cot(\\pi/2) ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "$-\\csc^2(\\pi/2)$" },
        { id: "c", text: "-1" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\cot(\\pi/2)$ is a constant (zero). The derivative of any constant is zero."
    },
    {
      text: "Find the derivative of $y = \\frac{\\sec x}{e^x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{\\sec x (\\tan x - 1)}{e^x}$" },
        { id: "b", text: "$\\frac{\\sec x \\tan x}{e^x}$" },
        { id: "c", text: "$\\frac{\\sec x \\tan x - \\sec x}{e^{2x}}$" },
        { id: "d", text: "$\\frac{\\sec x (1 - \\tan x)}{e^x}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$\\frac{(\\sec x \\tan x)e^x - (\\sec x)e^x}{e^{2x}} = \\frac{e^x \\sec x (\\tan x - 1)}{e^{2x}} = \\frac{\\sec x (\\tan x - 1)}{e^x}$."
    },
    {
      text: "If $f(x) = x^2 \\cot x$, find $f'(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2x \\cot x - x^2 \\csc^2 x$" },
        { id: "b", text: "$2x \\csc^2 x$" },
        { id: "c", text: "$2x \\cot x + x^2 \\csc^2 x$" },
        { id: "d", text: "$-2x \\csc^2 x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Product Rule: $(2x)(\\cot x) + (x^2)(-\\csc^2 x)$."
    },
    {
      text: "Which derivative formula is the easiest to remember by using the sine and cosine derivatives?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\tan x$ (via sine/cosine quotient)" },
        { id: "b", text: "$\\sec x$ (via $1/\\cos$ quotient)" },
        { id: "c", text: "Both a and b" },
        { id: "d", text: "None" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "All four 'other' trig derivatives can be derived using the quotient rule on the definitions involving sine and cosine."
    },
    {
      text: "Find the slope of $y = \\sec x + \\tan x$ at $x = 0$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "0" },
        { id: "c", text: "2" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$y' = \\sec x \\tan x + \\sec^2 x$. At $x=0: (1)(0) + 1^2 = 1$."
    },
    {
      text: "Evaluate $\\frac{d}{dx} [ \\frac{1}{\\tan x} ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\csc^2 x$" },
        { id: "b", text: "$\\cot x$" },
        { id: "c", text: "$\\sec^2 x$" },
        { id: "d", text: "1 / \\sec^2 x" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$1/\\tan x$ is $\\cot x$. Its derivative is $-\\csc^2 x$."
    },
    {
      text: "The derivative of $\\sec x$ involves ________ functions.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "one" },
        { id: "b", text: "two" },
        { id: "c", text: "three" },
        { id: "d", text: "zero" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "It involves $\\sec x$ and $\\tan x$ (multiplied)."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 2.9 and 2.10...');

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
