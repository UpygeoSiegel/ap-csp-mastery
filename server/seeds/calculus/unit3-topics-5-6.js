/**
 * Seed script for AP Calculus AB Unit 3: Topics 3.5 and 3.6
 * Run with: node server/seeds/calculus/unit3-topics-5-6.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-3-5': [
    {
      text: "Which combination of rules is best for differentiating $f(x) = x^2 e^{3x}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Product Rule and Chain Rule" },
        { id: "b", text: "Quotient Rule and Power Rule" },
        { id: "c", text: "Sum Rule and Constant Rule" },
        { id: "d", text: "Only the Product Rule" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "You need the Product Rule because of the $x^2 \\cdot e^{3x}$ structure, and the Chain Rule for the $e^{3x}$ term."
    },
    {
      text: "Evaluate $d/dx [\\frac{\\sin(x^2)}{x}]$. Which rule should be the PRIMARY structure applied first?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Quotient Rule" },
        { id: "b", text: "Chain Rule" },
        { id: "c", text: "Product Rule" },
        { id: "d", text: "Power Rule" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The overall structure is a fraction, so the Quotient Rule is the outermost 'shell' of the derivative."
    },
    {
      text: "Find the derivative of $y = \\sqrt{x} \\ln(x^2 + 1)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{\\ln(x^2+1)}{2\\sqrt{x}} + \\frac{2x\\sqrt{x}}{x^2+1}$" },
        { id: "b", text: "$\\frac{1}{2\\sqrt{x}} \\cdot \\frac{2x}{x^2+1}$" },
        { id: "c", text: "$\\frac{2x}{x^2+1}$" },
        { id: "d", text: "$\\frac{\\ln(x^2+1)}{2\\sqrt{x}}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Product Rule: $(\\frac{1}{2\\sqrt{x}})\\ln(x^2+1) + (\\sqrt{x})(\\frac{2x}{x^2+1})$."
    },
    {
      text: "To differentiate $y = (\\frac{x+1}{x-1})^3$, which is the most efficient first step?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Chain Rule with $u^3$ as the outside function" },
        { id: "b", text: "Expand the binomial cube first" },
        { id: "c", text: "Quotient Rule first" },
        { id: "d", text: "Take the natural log of both sides" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Treating the fraction as the 'inside' function for the Chain Rule avoids messy expansion."
    },
    {
      text: "Evaluate $d/dx [e^x \\sin(2x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x(\\sin(2x) + 2\\cos(2x))$" },
        { id: "b", text: "$e^x\\cos(2x)$" },
        { id: "c", text: "$2e^x\\cos(2x)$" },
        { id: "d", text: "$e^x\\sin(2x) + 2\\cos(2x)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Product Rule: $(e^x)\\sin(2x) + (e^x)(2\\cos(2x)) = e^x(\\sin(2x) + 2\\cos(2x))$."
    },
    {
      text: "When differentiating $y = \\ln^4(x)$, which rule is applied first?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Power Rule (on the exponent 4)" },
        { id: "b", text: "Log Rule" },
        { id: "c", text: "Chain Rule with $\\ln x$ inside" },
        { id: "d", text: "Both a and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "$\\ln^4(x)$ is $(\\ln x)^4$. This requires the Chain Rule, using the Power Rule as the outer function."
    },
    {
      text: "Find the derivative of $f(x) = x \\arctan(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\arctan x + \\frac{x}{1+x^2}$" },
        { id: "b", text: "$\\frac{1}{1+x^2}$" },
        { id: "c", text: "$\\arctan x + 1$" },
        { id: "d", text: "$\\frac{x}{1+x^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Product Rule: $(1)\\arctan x + (x)\\frac{1}{1+x^2}$."
    },
    {
      text: "Which procedure is needed for $y = \\sin(\\sqrt{\\ln x})$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Multiple applications of the Chain Rule" },
        { id: "b", text: "Product Rule and Quotient Rule" },
        { id: "c", text: "Only the Power Rule" },
        { id: "d", text: "Implicit differentiation" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "There are three nested layers: $\\sin(\\dots)$, $\\sqrt{\\dots}$, and $\\ln(\\dots)$."
    },
    {
      text: "Evaluate $d/dx [\\frac{e^{2x}}{x^2}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{2e^{2x}(x-1)}{x^3}$" },
        { id: "b", text: "$\\frac{e^{2x}}{x}$" },
        { id: "c", text: "$\\frac{2xe^{2x} - 2xe^{2x}}{x^4}$" },
        { id: "d", text: "$e^{2x} / x^2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Quotient Rule: $\\frac{(2e^{2x})x^2 - (e^{2x})(2x)}{x^4} = \\frac{2x e^{2x}(x-1)}{x^4} = \\frac{2e^{2x}(x-1)}{x^3}$."
    },
    {
      text: "If $y = (x^2+1) \\cos(3x)$, find $y'$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2x \\cos(3x) - 3(x^2+1) \\sin(3x)$" },
        { id: "b", text: "$2x \\cos(3x) + 3(x^2+1) \\sin(3x)$" },
        { id: "c", text: "$-6x \\sin(3x)$" },
        { id: "d", text: "$2x - 3\\sin(3x)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Product Rule: $(2x)\\cos(3x) + (x^2+1)(-3\\sin(3x))$."
    },
    {
      text: "Find the derivative of $f(x) = \\ln(\\frac{x}{x+1})$. Which method is FASTEST?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Use log properties to rewrite as $\\ln x - \\ln(x+1)$ first" },
        { id: "b", text: "Use Chain Rule with Quotient Rule inside" },
        { id: "c", text: "Chain Rule with Product Rule inside" },
        { id: "d", text: "Direct substitution" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Rewriting using $\\ln(a/b) = \\ln a - \\ln b$ makes the differentiation trivial: $1/x - 1/(x+1)$."
    },
    {
      text: "Evaluate $d/dx [\\sin^2(x) + \\cos^2(x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$0$" },
        { id: "b", text: "$2\\sin x - 2\\cos x$" },
        { id: "c", text: "$1$" },
        { id: "d", text: "$2\\sin x \\cos x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "By identity, $\\sin^2 x + \\cos^2 x = 1$. The derivative of a constant is 0. (Calculated: $2\\sin x \\cos x - 2\\cos x \\sin x = 0$)."
    },
    {
      text: "To differentiate $y = e^{\\sin(x) \\cos(x)}$, you need:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Chain Rule and Product Rule" },
        { id: "b", text: "Chain Rule only" },
        { id: "c", text: "Product Rule only" },
        { id: "d", text: "Quotient Rule" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The exponent is a product, and the overall function is an exponential composite."
    },
    {
      text: "Find $y'$ for $y = \\sqrt{1 + \\sqrt{x}}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{1}{4\\sqrt{x}\\sqrt{1+\\sqrt{x}}}$" },
        { id: "b", text: "$\\frac{1}{2\\sqrt{1+\\sqrt{x}}}$" },
        { id: "c", text: "$\\frac{1}{2\\sqrt{x}}$" },
        { id: "d", text: "$\\frac{\\sqrt{x}}{4}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$y' = \\frac{1}{2\\sqrt{1+\\sqrt{x}}} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{1}{4\\sqrt{x}\\sqrt{1+\\sqrt{x}}}$."
    },
    {
      text: "Evaluate $d/dx [\\arctan(e^x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{e^x}{1+e^{2x}}$" },
        { id: "b", text: "$\\frac{1}{1+e^{2x}}$" },
        { id: "c", text: "$\\frac{e^x}{1+e^x}$" },
        { id: "d", text: "$e^x \\sec^2(e^x)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{1}{1+(e^x)^2} \\cdot e^x = \\frac{e^x}{1+e^{2x}}$."
    },
    {
      text: "Find the slope of $y = \\frac{ln x}{x}$ at $x=e$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$0$" },
        { id: "b", text: "$1/e^2$" },
        { id: "c", text: "$1$" },
        { id: "d", text: "$-1/e^2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$y' = \\frac{(1/x)x - \\ln(x)(1)}{x^2} = \\frac{1 - \\ln x}{x^2}$. At $x=e$, $y' = \\frac{1-1}{e^2} = 0$."
    },
    {
      text: "Which procedure is necessary for $x^2 + y^2 = \\sin(xy)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Implicit differentiation with Chain and Product Rules" },
        { id: "b", text: "Only the Power Rule" },
        { id: "c", text: "Solving for $y$ first" },
        { id: "d", text: "Only the Chain Rule" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$y$ is implicit, the right side is composite, and the 'inside' of the sine is a product."
    },
    {
      text: "Find $dy/dx$ if $y = e^{x \\ln x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^{x \\ln x}(\\ln x + 1)$" },
        { id: "b", text: "$x^x(\\ln x + 1)$" },
        { id: "c", text: "$x e^{x \\ln x}$" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "Using Chain Rule: $e^{x \\ln x} \\cdot \\frac{d}{dx}[x \\ln x] = e^{x \\ln x}(\\ln x + 1)$. Since $e^{x \\ln x} = (e^{\\ln x})^x = x^x$, both are correct."
    },
    {
      text: "Evaluate $d/dx [ \\ln(\\cos x) ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\tan x$" },
        { id: "b", text: "$\\tan x$" },
        { id: "c", text: "$1 / \\cos x$" },
        { id: "d", text: "$-\\sin x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{1}{\\cos x} \\cdot (-\\sin x) = -\\tan x$."
    },
    {
      text: "To differentiate $y = \\sqrt[3]{\\frac{x^2+1}{x^2-1}}$, the BEST strategy is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Logarithmic differentiation" },
        { id: "b", text: "Expanding the cubic root" },
        { id: "c", text: "Multiple Chain Rules" },
        { id: "d", text: "Power Rule only" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Taking the log of both sides allows you to use properties to simplify the root and the fraction before differentiating."
    },
    {
      text: "Find $f'(x)$ for $f(x) = \\sin(e^x \\ln x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos(e^x \\ln x) \\cdot [e^x \\ln x + e^x/x]$" },
        { id: "b", text: "$\\cos(e^x \\ln x)$" },
        { id: "c", text: "$e^x/x \\cos(e^x \\ln x)$" },
        { id: "d", text: "$\\cos(e^x \\ln x) [e^x \\ln x]$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Chain Rule on $\\sin(u)$ gives $\\cos(u) \\cdot u'$. Product Rule on $u = e^x \\ln x$ gives $e^x \\ln x + e^x/x$."
    },
    {
      text: "If $y = \\ln(x^2)$, find $y'$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2/x$" },
        { id: "b", text: "$1/x^2$" },
        { id: "c", text: "$2x$" },
        { id: "d", text: "$1/2x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Either use Chain Rule: $(1/x^2) \\cdot 2x = 2/x$, or log property $\\ln(x^2) = 2 \\ln x$, so derivative is $2(1/x)$."
    },
    {
      text: "Evaluate $d/dx [ \\sin(\\arctan x) ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{\\cos(\\arctan x)}{1+x^2}$" },
        { id: "b", text: "$\\cos(\\arctan x)$" },
        { id: "c", text: "$\\frac{1}{1+x^2}$" },
        { id: "d", text: "$\\sec^2 x \\cos(\\arctan x)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Chain Rule: $\\cos(\\arctan x) \\cdot \\frac{1}{1+x^2}$."
    },
    {
      text: "Find $y'$ if $y = e^x / (e^x + 1)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{e^x}{(e^x+1)^2}$" },
        { id: "b", text: "$1$" },
        { id: "c", text: "$\\frac{e^{2x}}{(e^x+1)^2}$" },
        { id: "d", text: "$\\frac{e^x-1}{(e^x+1)^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Quotient Rule: $\\frac{e^x(e^x+1) - e^x(e^x)}{(e^x+1)^2} = \\frac{e^{2x} + e^x - e^{2x}}{(e^x+1)^2} = \\frac{e^x}{(e^x+1)^2}$."
    },
    {
      text: "True or False: $d/dx [f(g(x))]$ is always equal to $g'(x) f'(g(x))$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "This is simply the Chain Rule written with the factors in reverse order."
    }
  ],
  'calc-3-6': [
    {
      text: "If $f(x) = x^4$, what is the second derivative $f''(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$4x^3$" },
        { id: "b", text: "$12x^2$" },
        { id: "c", text: "$24x$" },
        { id: "d", text: "$24$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$f'(x) = 4x^3$, then $f''(x) = 12x^2$."
    },
    {
      text: "What is the third derivative of $f(x) = \\sin x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos x$" },
        { id: "b", text: "$-\\cos x$" },
        { id: "c", text: "$-\\sin x$" },
        { id: "d", text: "$\\sin x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$f'=\\cos x$, $f''=-\\sin x$, $f'''=-\\cos x$."
    },
    {
      text: "The acceleration of a particle is the ________ derivative of its position function.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "first" },
        { id: "b", text: "second" },
        { id: "c", text: "third" },
        { id: "d", text: "zero-th" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Position $\\rightarrow$ Velocity (1st) $\\rightarrow$ Acceleration (2nd)."
    },
    {
      text: "Find $d^2y/dx^2$ if $y = e^{2x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2e^{2x}$" },
        { id: "b", text: "$4e^{2x}$" },
        { id: "c", text: "$e^{2x}$" },
        { id: "d", text: "$8e^{2x}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$y' = 2e^{2x}$, $y'' = 2(2e^{2x}) = 4e^{2x}$."
    },
    {
      text: "Calculate the fourth derivative of $f(x) = x^3 + 2x^2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$6$" },
        { id: "b", text: "$0$" },
        { id: "c", text: "$12$" },
        { id: "d", text: "$x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "For a polynomial of degree $n$, any derivative higher than $n$ is always 0."
    },
    {
      text: "If $f''(x) < 0$ on an interval, the graph of $f(x)$ is ________ on that interval.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Concave up" },
        { id: "b", text: "Concave down" },
        { id: "c", text: "Increasing" },
        { id: "d", text: "Decreasing" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "A negative second derivative indicates that the slope is decreasing, which corresponds to a concave down shape."
    },
    {
      text: "Find $d^2y/dx^2$ for $y = \\ln x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/x^2$" },
        { id: "b", text: "$-1/x^2$" },
        { id: "c", text: "$1/x$" },
        { id: "d", text: "$-1/x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$y' = x^{-1}$. Then $y'' = -1x^{-2} = -1/x^2$."
    },
    {
      text: "Evaluate $f'''(0)$ for $f(x) = e^x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$0$" },
        { id: "b", text: "$1$" },
        { id: "c", text: "$e$" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "All derivatives of $e^x$ are $e^x$. $e^0 = 1$."
    },
    {
      text: "Find $d^2y/dx^2$ if $x^2 + y^2 = 1$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-1/y^3$" },
        { id: "b", text: "$-x/y$" },
        { id: "c", text: "$-1/y^2$" },
        { id: "d", text: "$-1/y$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$y' = -x/y$. $y'' = \\frac{(-1)(y) - (-x)(y')}{y^2} = \\frac{-y + x(-x/y)}{y^2} = \\frac{-y^2-x^2}{y^3} = \\frac{-1}{y^3}$."
    },
    {
      text: "The notation $\\frac{d^2y}{dx^2}$ refers to which derivative?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "First" },
        { id: "b", text: "Second" },
        { id: "c", text: "Third" },
        { id: "d", text: "Derivative squared" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "This is Leibniz notation for the second derivative."
    },
    {
      text: "Find $f''(x)$ if $f(x) = \\tan x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2\\sec^2 x \\tan x$" },
        { id: "b", text: "$\\sec^4 x$" },
        { id: "c", text: "$\\sec^2 x$" },
        { id: "d", text: "$2\\sec x \\tan x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f' = \\sec^2 x = (\\sec x)^2$. $f'' = 2(\\sec x) \\cdot (\\sec x \\tan x) = 2\\sec^2 x \\tan x$."
    },
    {
      text: "If $s(t)$ is position, what does $s'''(t)$ represent?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Velocity" },
        { id: "b", text: "Acceleration" },
        { id: "c", text: "Jerk" },
        { id: "d", text: "Speed" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "The rate of change of acceleration is called jerk."
    },
    {
      text: "Find the value of $f''(1)$ for $f(x) = x^3 - 5x^2 + 2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-4$" },
        { id: "b", text: "$-7$" },
        { id: "c", text: "$-10$" },
        { id: "d", text: "$6$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f'(x) = 3x^2 - 10x$, $f''(x) = 6x - 10$. At $x=1$, $6-10 = -4$."
    },
    {
      text: "Calculate $d^2/dx^2 [\\cos(2x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-4\\cos(2x)$" },
        { id: "b", text: "$-2\\sin(2x)$" },
        { id: "c", text: "$4\\cos(2x)$" },
        { id: "d", text: "$\\cos(2x)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$y' = -2\\sin(2x)$, $y'' = -2(2\\cos(2x)) = -4\\cos(2x)$."
    },
    {
      text: "True or False: The derivative of $f'(x)$ is written as $f''(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The second derivative is the derivative of the first derivative."
    },
    {
      text: "Find $d^2y/dx^2$ if $y = \\sqrt{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\frac{1}{4x^{3/2}}$" },
        { id: "b", text: "$\\frac{1}{2\\sqrt{x}}$" },
        { id: "c", text: "$-\\frac{1}{2x^{3/2}}$" },
        { id: "d", text: "$\\frac{1}{4x^{3/2}}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$y' = \\frac{1}{2}x^{-1/2}$, $y'' = -\\frac{1}{4}x^{-3/2} = -\\frac{1}{4x\\sqrt{x}}$."
    },
    {
      text: "Evaluate $f''(0)$ if $f(x) = e^{-x^2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-2$" },
        { id: "b", text: "$0$" },
        { id: "c", text: "$2$" },
        { id: "d", text: "$1$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f' = -2xe^{-x^2}$. $f'' = (-2)e^{-x^2} + (-2x)(-2xe^{-x^2}) = e^{-x^2}(-2 + 4x^2)$. At $x=0$, $1(-2 + 0) = -2$."
    },
    {
      text: "If $f(x)$ is a line, what is its second derivative?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The slope" },
        { id: "b", text: "Zero" },
        { id: "c", text: "One" },
        { id: "d", text: "Constant" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "First derivative is a constant (the slope), second derivative is 0."
    },
    {
      text: "Which function satisfies $f''(x) = f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x$" },
        { id: "b", text: "$\\sin x$" },
        { id: "c", text: "$x^2$" },
        { id: "d", text: "$\\ln x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "For $e^x$, every derivative is $e^x$. (For $\\sin x$, $f'' = -\\sin x$)."
    },
    {
      text: "Find $d^3y/dx^3$ for $y = 1/x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-6/x^4$" },
        { id: "b", text: "$6/x^4$" },
        { id: "c", text: "$-1/x^4$" },
        { id: "d", text: "$2/x^3$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$y'= -x^{-2}$, $y''= 2x^{-3}$, $y'''= -6x^{-4} = -6/x^4$."
    },
    {
      text: "The concavity of a graph is determined by the sign of which derivative?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "First" },
        { id: "b", text: "Second" },
        { id: "c", text: "Third" },
        { id: "d", text: "Zero-th" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Second derivative tests concavity."
    },
    {
      text: "Find $f''(x)$ if $f(x) = \\ln(2x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-1/x^2$" },
        { id: "b", text: "$1/x^2$" },
        { id: "c", text: "$-4/x^2$" },
        { id: "d", text: "$-1/4x^2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f'(x) = \\frac{1}{2x} \\cdot 2 = 1/x$. Then $f''(x) = -1/x^2$."
    },
    {
      text: "Evaluate the second derivative of $y = x^e$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e(e-1)x^{e-2}$" },
        { id: "b", text: "$e^x$" },
        { id: "c", text: "$e^2 x^e$" },
        { id: "d", text: "$0$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Use Power Rule twice: $ex^{e-1} \\rightarrow e(e-1)x^{e-2}$."
    },
    {
      text: "If $f^{(n)}(x)$ denotes the $n$-th derivative, what is $f^{(10)}(x)$ for $f(x) = x^9$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$9!$" },
        { id: "b", text: "$0$" },
        { id: "c", text: "$1$" },
        { id: "d", text: "$90$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The 10th derivative of a 9th degree polynomial is 0."
    },
    {
      text: "Find $d^2y/dx^2$ for $y = \\sin(x) \\cos(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-2\\sin(2x)$" },
        { id: "b", text: "$-\\sin(2x)$" },
        { id: "c", text: "$-4\\sin x \\cos x$" },
        { id: "d", text: "Both a and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$y = \\frac{1}{2}\\sin(2x)$. $y' = \\cos(2x)$. $y'' = -2\\sin(2x) = -4\\sin x \\cos x$."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 3.5 and 3.6...');

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
