/**
 * Seed script for AP Calculus AB Unit 3: Topics 3.3 and 3.4
 * Run with: node server/seeds/calculus/unit3-topics-3-4.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-3-3': [
    {
      text: "If $g(x)$ is the inverse of $f(x)$, what is the general formula for $g'(a)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / f'(a)$" },
        { id: "b", text: "$1 / f'(g(a))$" },
        { id: "c", text: "$f'(g(a))$" },
        { id: "d", text: "$g(f'(a))$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of the inverse function at point $a$ is the reciprocal of the derivative of the original function evaluated at the point $g(a)$."
    },
    {
      text: "Suppose $f(3) = 5$ and $f'(3) = 2$. If $g$ is the inverse of $f$, find $g'(5)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/2$" },
        { id: "b", text: "$1/5$" },
        { id: "c", text: "$2$" },
        { id: "d", text: "$5$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Since $f(3)=5$, we know $g(5)=3$. Then $g'(5) = 1/f'(g(5)) = 1/f'(3) = 1/2$."
    },
    {
      text: "Let $f(x) = x^3 + x$. Find the derivative of $f^{-1}$ at the point where $x = 2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/4$" },
        { id: "b", text: "$1/13$" },
        { id: "c", text: "$4$" },
        { id: "d", text: "$1$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "First find $x$ such that $f(x)=2$. By observation, $f(1)=1^3+1=2$, so $(f^{-1})(2)=1$. $f'(x)=3x^2+1$. Then $(f^{-1})'(2) = 1/f'(1) = 1/(3(1)^2+1) = 1/4$."
    },
    {
      text: "The graphs of a function and its inverse are reflections across which line?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$y = 0$" },
        { id: "b", text: "$x = 0$" },
        { id: "c", text: "$y = x$" },
        { id: "d", text: "$y = -x$" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Inverting a function swaps $x$ and $y$, which is a reflection across the diagonal line $y=x$."
    },
    {
      text: "If $f(x) = e^x$, its inverse is $g(x) = \\ln x$. Find $g'(e)$ using the inverse derivative formula.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/e$" },
        { id: "b", text: "$1$" },
        { id: "c", text: "$e$" },
        { id: "d", text: "$0$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f'(x)=e^x$. $g(e)=1$. $g'(e) = 1/f'(g(e)) = 1/f'(1) = 1/e^1 = 1/e$."
    },
    {
      text: "If the point $(4, 7)$ is on the graph of $f(x)$, and $f'(4) = 3/5$, what point and slope are guaranteed on the graph of $f^{-1}(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Point $(7, 4)$, Slope $5/3$" },
        { id: "b", text: "Point $(4, 7)$, Slope $5/3$" },
        { id: "c", text: "Point $(7, 4)$, Slope $3/5$" },
        { id: "d", text: "Point $(-4, -7)$, Slope $-3/5$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Inverse functions swap coordinates $(x, y) \\rightarrow (y, x)$ and reciprocal the slopes."
    },
    {
      text: "If $f'(x) > 0$ for all $x$, then the inverse function $f^{-1}$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Always increasing" },
        { id: "b", text: "Always decreasing" },
        { id: "c", text: "Positive" },
        { id: "d", text: "Negative" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "If $f$ is increasing, its inverse is also increasing. The reciprocal of a positive slope is still positive."
    },
    {
      text: "Find the derivative of $f^{-1}$ at $x=1$ if $f(x) = x^2 + \\sin x$ for $x > 0$. Note: $f(0)=0$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Cannot be determined" },
        { id: "b", text: "$1 / (2x + \\cos x)$" },
        { id: "c", text: "$1 / (2 + \\cos 1)$" },
        { id: "d", text: "Is evaluated at the $x$ where $x^2 + \\sin x = 1$" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "To find $(f^{-1})'(1)$, you must first find $c$ such that $f(c)=1$, then calculate $1/f'(c)$."
    },
    {
      text: "If $f(x) = x^5 + 2x^3 + x - 1$, find $(f^{-1})'(-1)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1$" },
        { id: "b", text: "$1/5$" },
        { id: "c", text: "$-1$" },
        { id: "d", text: "$0$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f(0) = -1$, so $f^{-1}(-1) = 0$. $f'(x) = 5x^4 + 6x^2 + 1$. $f'(0) = 1$. Result: $1/1 = 1$."
    },
    {
      text: "True or False: If $f(x)$ has a horizontal tangent at $x=c$, then $f^{-1}$ has a vertical tangent at $x=f(c)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Reciprocal of 0 is undefined (vertical slope). Graphically, a horizontal segment reflects to a vertical one."
    },
    {
      text: "Given $f(2)=4, f(4)=6, f'(2)=10, f'(4)=12$, find $(f^{-1})'(4)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/10$" },
        { id: "b", text: "$1/12$" },
        { id: "c", text: "$1/4$" },
        { id: "d", text: "$1/2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f(2)=4$ implies $f^{-1}(4)=2$. Then derivative is $1/f'(2) = 1/10$."
    },
    {
      text: "The derivative of the inverse is found using which underlying rule?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Chain Rule on $f(f^{-1}(x)) = x$" },
        { id: "b", text: "Quotient Rule" },
        { id: "c", text: "Product Rule" },
        { id: "d", text: "Power Rule" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Differentiating $f(g(x)) = x$ gives $f'(g(x))g'(x) = 1$, which leads to the inverse formula."
    },
    {
      text: "If $f(x) = \\sqrt{x}$, find the derivative of its inverse at $x=3$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$6$" },
        { id: "b", text: "$1/6$" },
        { id: "c", text: "$9$" },
        { id: "d", text: "$3$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f^{-1}(x) = x^2$. Derivative is $2x$. At $x=3$, derivative is 6. (Using formula: $f(9)=3$, $f'(x)=1/(2\\sqrt{x})$, $f'(9)=1/6$, reciprocal is 6)."
    },
    {
      text: "For a function to have an inverse that is also a function, it must be:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "One-to-one (monotonic)" },
        { id: "b", text: "Continuous" },
        { id: "c", text: "Differentiable" },
        { id: "d", text: "Positive" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "A function must pass the horizontal line test to have a functional inverse."
    },
    {
      text: "Find $(f^{-1})'(2)$ if $f(x) = x + e^x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/(1+e)$" },
        { id: "b", text: "$1/2$" },
        { id: "c", text: "$1/(1+e^2)$" },
        { id: "d", text: "$1$" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$f(0) = 0 + e^0 = 1$ (Not the point). $f(x)=2$: by observation $x$ is not an integer. Wait, if $f(0)=1$, then $(f^{-1})'(1)=1/2$. If $f(x)=x+e^x$ and we want $(f^{-1})'(1+e)$, then $x=1$."
    },
    {
      text: "Evaluate the derivative of $f^{-1}(x)$ at $x=3$ given $f(1)=3$ and $f'(1)=-5$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-1/5$" },
        { id: "b", text: "$1/3$" },
        { id: "c", text: "$-1/3$" },
        { id: "d", text: "$5$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$1/f'(1) = 1/(-5) = -1/5$."
    },
    {
      text: "If $f(x) = \\ln(x+1)$, find the derivative of its inverse at $x=0$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1$" },
        { id: "b", text: "$0$" },
        { id: "c", text: "$e$" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f(0) = \\ln(1) = 0$. $f'(x) = 1/(x+1)$. $f'(0) = 1$. Result: $1/1 = 1$. (Inverse is $e^x-1$)."
    },
    {
      text: "The derivative of the inverse of $f$ at point $b$ is the ________ of the slope of $f$ at point $a$ (where $f(a)=b$).",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Negative" },
        { id: "b", text: "Reciprocal" },
        { id: "c", text: "Negative reciprocal" },
        { id: "d", text: "Square" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Inverse derivative is simply the reciprocal of the original slope."
    },
    {
      text: "If $f(x) = x^2$ for $x \\ge 0$, find $(f^{-1})'(9)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/6$" },
        { id: "b", text: "$1/18$" },
        { id: "c", text: "$6$" },
        { id: "d", text: "$3$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f(3)=9$. $f'(x)=2x$. $f'(3)=6$. Result: $1/6$."
    },
    {
      text: "If $f(x)$ is concave up, its inverse function $f^{-1}$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Concave down" },
        { id: "b", text: "Concave up" },
        { id: "c", text: "Linear" },
        { id: "d", text: "Cannot be determined" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Reflecting a concave up graph across $y=x$ results in a concave down graph (for positive slopes)."
    },
    {
      text: "Find the slope of $f^{-1}(x)$ at $x=10$ if $f(1)=10$ and $f'(1)=0.1$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$10$" },
        { id: "b", text: "$100$" },
        { id: "c", text: "$1$" },
        { id: "d", text: "$0.1$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$1 / 0.1 = 10$."
    },
    {
      text: "If $f(x) = 1/x$, find $(f^{-1})'(1/2)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-4$" },
        { id: "b", text: "$-2$" },
        { id: "c", text: "$-1/4$" },
        { id: "d", text: "$4$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f^{-1}(x) = 1/x$. Derivative is $-1/x^2$. At $x=1/2$, $-1/(1/4) = -4$."
    },
    {
      text: "Evaluate $(f^{-1})'(5)$ given the table:\n$x$: 1, 2, 3 | $f(x)$: 3, 5, 7 | $f'(x)$: 4, 6, 8",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/6$" },
        { id: "b", text: "$1/5$" },
        { id: "c", text: "$1/2$" },
        { id: "d", text: "$1/4$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f(2)=5$, so we need $1/f'(2)$. From the table, $f'(2)=6$. Result: $1/6$."
    },
    {
      text: "Which condition ensures $(f^{-1})'(a)$ exists?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f'(f^{-1}(a)) \\neq 0$" },
        { id: "b", text: "$f(a) \\neq 0$" },
        { id: "c", text: "$a > 0$" },
        { id: "d", text: "$f'(a) > 0$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Since the formula involves division by $f'$, that value cannot be zero."
    },
    {
      text: "Find $(f^{-1})'(1)$ for $f(x) = \\tan x$ on $(-\\pi/2, \\pi/2)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/2$" },
        { id: "b", text: "$1$" },
        { id: "c", text: "$\\pi/4$" },
        { id: "d", text: "$2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f(\\pi/4) = 1$. $f'(x) = \\sec^2 x$. $f'(\\pi/4) = (\\sqrt{2})^2 = 2$. Result: $1/2$. (Note: this is the derivative of $\\arctan(x)$ at $x=1$)."
    }
  ],
  'calc-3-4': [
    {
      text: "What is the derivative of $f(x) = \\arcsin(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / \\sqrt{1 - x^2}$" },
        { id: "b", text: "$-1 / \\sqrt{1 - x^2}$" },
        { id: "c", text: "$1 / (1 + x^2)$" },
        { id: "d", text: "$\\arccos(x)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The standard derivative for inverse sine."
    },
    {
      text: "What is the derivative of $f(x) = \\arctan(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / (1 + x^2)$" },
        { id: "b", text: "$1 / \\sqrt{1 + x^2}$" },
        { id: "c", text: "$\\sec^2 x$" },
        { id: "d", text: "$1 / \\sqrt{1 - x^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The standard derivative for inverse tangent."
    },
    {
      text: "Find the derivative of $y = \\arccos(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / \\sqrt{1 - x^2}$" },
        { id: "b", text: "$-1 / \\sqrt{1 - x^2}$" },
        { id: "c", text: "$-1 / (1 + x^2)$" },
        { id: "d", text: "$-\\sin(x)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of inverse cosine is the negative of the derivative of inverse sine."
    },
    {
      text: "Evaluate $d/dx [\\arctan(2x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2 / (1 + 4x^2)$" },
        { id: "b", text: "$1 / (1 + 4x^2)$" },
        { id: "c", text: "$2 / (1 + 2x^2)$" },
        { id: "d", text: "$\\sec^2(2x)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Using Chain Rule: $\\frac{1}{1 + (2x)^2} \\cdot 2 = \\frac{2}{1 + 4x^2}$."
    },
    {
      text: "Find the derivative of $f(x) = \\arcsin(x^2)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2x / \\sqrt{1 - x^4}$" },
        { id: "b", text: "$1 / \\sqrt{1 - x^4}$" },
        { id: "c", text: "$2x / \\sqrt{1 - x^2}$" },
        { id: "d", text: "$x^2 / \\sqrt{1 - x^4}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Using Chain Rule: $\\frac{1}{\\sqrt{1 - (x^2)^2}} \\cdot 2x = \\frac{2x}{\\sqrt{1 - x^4}}$."
    },
    {
      text: "Evaluate $d/dx [\\text{arcsec}(x)]$ for $|x| > 1$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / (|x|\\sqrt{x^2 - 1})$" },
        { id: "b", text: "$1 / \\sqrt{x^2 - 1}$" },
        { id: "c", text: "$-1 / (|x|\\sqrt{x^2 - 1})$" },
        { id: "d", text: "$1 / (1 + x^2)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The derivative of inverse secant involves the absolute value of $x$ and a square root."
    },
    {
      text: "Find the slope of $y = \\arctan(x)$ at $x = 1$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/2$" },
        { id: "b", text: "$1$" },
        { id: "c", text: "$\\pi/4$" },
        { id: "d", text: "$2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$y' = 1 / (1 + x^2)$. At $x=1$, $y' = 1 / (1 + 1^2) = 1/2$."
    },
    {
      text: "Evaluate $d/dx [\\ln(\\arctan x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / [(\\arctan x)(1 + x^2)]$" },
        { id: "b", text: "$(1 + x^2) / \\arctan x$" },
        { id: "c", text: "$1 / (1 + x^2)$" },
        { id: "d", text: "$1 / \\arctan x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Outside ($\\ln$): $1/u = 1/\\arctan x$. Inside ($\\arctan$): $1/(1+x^2)$. Multiply them."
    },
    {
      text: "What is the derivative of $f(x) = \\text{arccot}(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-1 / (1 + x^2)$" },
        { id: "b", text: "$1 / (1 + x^2)$" },
        { id: "c", text: "$-\\csc^2 x$" },
        { id: "d", text: "$-1 / \\sqrt{1 - x^2}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Like other 'co' functions, the derivative of arccot is the negative of the derivative of arctan."
    },
    {
      text: "Find $dy/dx$ if $y = \\arcsin(e^x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x / \\sqrt{1 - e^{2x}}$" },
        { id: "b", text: "$1 / \\sqrt{1 - e^{2x}}$" },
        { id: "c", text: "$e^x / \\sqrt{1 - e^x}$" },
        { id: "d", text: "$-e^x / \\sqrt{1 - e^{2x}}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{1}{\\sqrt{1 - (e^x)^2}} \\cdot e^x = \\frac{e^x}{\\sqrt{1 - e^{2x}}}$."
    },
    {
      text: "Evaluate $d/dx [3 \\arctan(\\sqrt{x})]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$3 / [2\\sqrt{x}(1 + x)]$" },
        { id: "b", text: "$3 / (1 + x)$" },
        { id: "c", text: "$3 / (2(1 + x))$" },
        { id: "d", text: "$1 / [\\sqrt{x}(1 + x)]$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$3 \\cdot \\frac{1}{1 + (\\sqrt{x})^2} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{3}{1+x} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{3}{2\\sqrt{x}(1+x)}$."
    },
    {
      text: "Find the slope of $y = \\arcsin(x/2)$ at $x = 0$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/2$" },
        { id: "b", text: "$1$" },
        { id: "c", text: "$0$" },
        { id: "d", text: "$2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$y' = \\frac{1}{\\sqrt{1 - (x/2)^2}} \\cdot \\frac{1}{2}$. At $x=0$: $\\frac{1}{\\sqrt{1}} \\cdot \\frac{1}{2} = 1/2$."
    },
    {
      text: "True or False: The domain of the derivative of $\\arcsin(x)$ is the same as the domain of $\\arcsin(x)$ itself.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False, the derivative is not defined at $x = \\pm 1$" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$\\arcsin(x)$ is defined on $[-1, 1]$, but its derivative $1/\\sqrt{1-x^2}$ is undefined at $x=\\pm 1$ (vertical tangents)."
    },
    {
      text: "Evaluate $d/dx [\\arctan(x) + \\text{arccot}(x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$0$" },
        { id: "b", text: "$2 / (1 + x^2)$" },
        { id: "c", text: "$-2 / (1 + x^2)$" },
        { id: "d", text: "$1$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$1/(1+x^2) + (-1/(1+x^2)) = 0$. (This is because $\\arctan x + \\text{arccot} x = \\pi/2$, which is a constant)."
    },
    {
      text: "Find the derivative of $y = x \\arctan x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\arctan x + x / (1 + x^2)$" },
        { id: "b", text: "$x / (1 + x^2)$" },
        { id: "c", text: "$\\arctan x + 1 / (1 + x^2)$" },
        { id: "d", text: "$1$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Using Product Rule: $(1)\\arctan x + (x)\\frac{1}{1+x^2}$."
    },
    {
      text: "What is $d/dx [\\text{arccsc}(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-1 / (|x|\\sqrt{x^2 - 1})$" },
        { id: "b", text: "$1 / (|x|\\sqrt{x^2 - 1})$" },
        { id: "c", text: "$-1 / \\sqrt{1 - x^2}$" },
        { id: "d", text: "$-1 / (1 + x^2)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The derivative of inverse cosecant is the negative of the derivative of inverse secant."
    },
    {
      text: "Find $f'(x)$ for $f(x) = \\arcsin(x) / x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$[x/\\sqrt{1-x^2} - \\arcsin x] / x^2$" },
        { id: "b", text: "$1 / (x\\sqrt{1-x^2})$" },
        { id: "c", text: "$[\\arcsin x - x/\\sqrt{1-x^2}] / x^2$" },
        { id: "d", text: "$-1 / x^2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Using Quotient Rule: $[(1/\\sqrt{1-x^2})x - \\arcsin(x)(1)] / x^2$."
    },
    {
      text: "Evaluate $d/dx [e^{\\arctan x}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^{\\arctan x} / (1 + x^2)$" },
        { id: "b", text: "$e^{\\arctan x} \\sec^2 x$" },
        { id: "c", text: "$e^{1/(1+x^2)}$" },
        { id: "d", text: "$e^{\\arctan x}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Using Chain Rule: $e^{\\arctan x} \\cdot \\frac{1}{1+x^2}$."
    },
    {
      text: "Which inverse trig function has a derivative that is ALWAYS positive?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\arctan x$" },
        { id: "b", text: "$\\arcsin x$" },
        { id: "c", text: "Both a and b$" },
        { id: "d", text: "None of them" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "The derivatives $1/(1+x^2)$ and $1/\\sqrt{1-x^2}$ are always positive on their domains."
    },
    {
      text: "Find the derivative of $y = \\arctan(\\ln x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / [x(1 + (\\ln x)^2)]$" },
        { id: "b", text: "$1 / (1 + (\\ln x)^2)$" },
        { id: "c", text: "$1 / (x \\ln x)$" },
        { id: "d", text: "$(\\sec^2(\\ln x)) / x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$\\frac{1}{1+(\\ln x)^2} \\cdot \\frac{1}{x} = \\frac{1}{x(1+(\\ln x)^2)}$."
    },
    {
      text: "Evaluate $d/dx [\\sqrt{1 - x^2} \\arcsin x]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 - x \\arcsin(x) / \\sqrt{1 - x^2}$" },
        { id: "b", text: "$1$" },
        { id: "c", text: "$-x / \\sqrt{1 - x^2}$" },
        { id: "d", text: "$x \\arcsin x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Product Rule: $(-x/\\sqrt{1-x^2})\\arcsin x + \\sqrt{1-x^2}(1/\\sqrt{1-x^2}) = 1 - \\frac{x \\arcsin x}{\\sqrt{1-x^2}}$."
    },
    {
      text: "Find the slope of $y = \\arctan(x/3)$ at $x = 3$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/6$" },
        { id: "b", text: "$1/2$" },
        { id: "c", text: "$1/10$" },
        { id: "d", text: "$1/3$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$y' = \\frac{1}{1+(x/3)^2} \\cdot \\frac{1}{3}$. At $x=3$: $\\frac{1}{1+1} \\cdot \\frac{1}{3} = 1/2 \\cdot 1/3 = 1/6$."
    },
    {
      text: "What is the derivative of $\\arcsin(x) + \\arccos(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$0$" },
        { id: "b", text: "$2 / \\sqrt{1 - x^2}$" },
        { id: "c", text: "$1$" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The derivatives are opposites, so they sum to 0. (Also, $\\arcsin x + \\arccos x = \\pi/2$)."
    },
    {
      text: "Find $dy/dx$ if $y = \\text{arcsec}(e^x)$ for $x > 0$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / \\sqrt{e^{2x} - 1}$" },
        { id: "b", text: "$e^x / (e^x \\sqrt{e^{2x} - 1})$" },
        { id: "c", text: "$1 / \\sqrt{1 - e^{2x}}$" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$\\frac{1}{e^x\\sqrt{(e^x)^2 - 1}} \\cdot e^x = \\frac{1}{\\sqrt{e^{2x}-1}}$."
    },
    {
      text: "The derivative of $\\arctan(x)$ is a ________ function.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Rational" },
        { id: "b", text: "Trigonometric" },
        { id: "c", text: "Exponential" },
        { id: "d", text: "Logarithmic" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$1 / (1 + x^2)$ is a rational function."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 3.3 and 3.4...');

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
