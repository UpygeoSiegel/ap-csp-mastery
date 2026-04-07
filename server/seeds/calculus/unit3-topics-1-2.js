/**
 * Seed script for AP Calculus AB Unit 3: Topics 3.1 and 3.2
 * Run with: node server/seeds/calculus/unit3-topics-1-2.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-3-1': [
    {
      text: "The Chain Rule is used to find the derivative of which type of function?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Product of two functions" },
        { id: "b", text: "Quotient of two functions" },
        { id: "c", text: "Composite of two functions" },
        { id: "d", text: "Sum of two functions" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "The Chain Rule is specifically designed for differentiating composite functions, often written as $f(g(x))$."
    },
    {
      text: "What is the formula for the Chain Rule $d/dx [f(g(x))]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f'(g'(x))$" },
        { id: "b", text: "$f'(g(x)) \\cdot g'(x)$" },
        { id: "c", text: "$f(g'(x)) \\cdot g'(x)$" },
        { id: "d", text: "$f'(x) \\cdot g'(x)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "To differentiate a composite function, take the derivative of the 'outside' function evaluated at the 'inside' function, then multiply by the derivative of the 'inside' function."
    },
    {
      text: "Find the derivative of $f(x) = (x^2 + 1)^5$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$5(x^2 + 1)^4$" },
        { id: "b", text: "$10x(x^2 + 1)^4$" },
        { id: "c", text: "$5(2x)^4$" },
        { id: "d", text: "$10x^4$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Outside: $u^5 \\rightarrow 5u^4$. Inside: $x^2+1 \\rightarrow 2x$. Multiply: $5(x^2+1)^4 \\cdot (2x) = 10x(x^2+1)^4$."
    },
    {
      text: "Find the derivative of $y = \\sin(3x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos(3x)$" },
        { id: "b", text: "$3\\cos(3x)$" },
        { id: "c", text: "$-3\\cos(3x)$" },
        { id: "d", text: "$3\\sin(3x)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Outside: $\\sin(u) \\rightarrow \\cos(u)$. Inside: $3x \\rightarrow 3$. Result: $3\\cos(3x)$."
    },
    {
      text: "Evaluate $d/dx [e^{x^2}]$. ",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^{x^2}$" },
        { id: "b", text: "$2xe^{x^2}$" },
        { id: "c", text: "$e^{2x}$" },
        { id: "d", text: "$2x e^{2x}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Outside: $e^u \\rightarrow e^u$. Inside: $x^2 \\rightarrow 2x$. Result: $2xe^{x^2}$."
    },
    {
      text: "Find the derivative of $f(x) = \\ln(\\sin x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/\\sin x$" },
        { id: "b", text: "$\\cos x / \\sin x$" },
        { id: "c", text: "$\\cot x$" },
        { id: "d", text: "Both b and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "Outside: $\\ln u \\rightarrow 1/u$. Inside: $\\sin x \\rightarrow \\cos x$. Result: $\\cos x / \\sin x$, which is $\\cot x$."
    },
    {
      text: "Calculate the derivative of $y = \\sqrt{x^2 + 1}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / (2\\sqrt{x^2 + 1})$" },
        { id: "b", text: "$x / \\sqrt{x^2 + 1}$" },
        { id: "c", text: "$2x / \\sqrt{x^2 + 1}$" },
        { id: "d", text: "$\\sqrt{2x}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Rewrite as $(x^2+1)^{1/2}$. Derivative: $(1/2)(x^2+1)^{-1/2} \\cdot 2x = x(x^2+1)^{-1/2} = x / \\sqrt{x^2+1}$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = \\cos^2(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2\\cos(x)$" },
        { id: "b", text: "$-2\\cos(x)\\sin(x)$" },
        { id: "c", text: "$-2\\sin(x)$" },
        { id: "d", text: "$-\\sin(2x)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Rewrite as $(\\cos x)^2$. Outside: $u^2 \\rightarrow 2u$. Inside: $\\cos x \\rightarrow -\\sin x$. Result: $-2\\cos x \\sin x$. (Note: This is also $-\\sin(2x)$)."
    },
    {
      text: "Evaluate $d/dx [\\tan(e^x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sec^2(e^x)$" },
        { id: "b", text: "$e^x \\sec^2(e^x)$" },
        { id: "c", text: "$e^x \\tan(e^x)$" },
        { id: "d", text: "$\\sec^2(x) e^x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Outside: $\\tan u \\rightarrow \\sec^2 u$. Inside: $e^x \\rightarrow e^x$. Result: $e^x \\sec^2(e^x)$."
    },
    {
      text: "If $h(x) = f(g(x))$, find $h'(2)$ given: $g(2)=3, g'(2)=5, f(3)=7, f'(3)=4$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "20" },
        { id: "b", text: "28" },
        { id: "c", text: "35" },
        { id: "d", text: "15" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$h'(2) = f'(g(2)) \\cdot g'(2) = f'(3) \\cdot g'(2) = 4 \\cdot 5 = 20$."
    },
    {
      text: "Find the derivative of $y = (4x - 3)^7$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$7(4x-3)^6$" },
        { id: "b", text: "$28(4x-3)^6$" },
        { id: "c", text: "$28x^6$" },
        { id: "d", text: "$4(4x-3)^7$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$7(4x-3)^6 \\cdot (4) = 28(4x-3)^6$."
    },
    {
      text: "Evaluate $d/dx [\\sin(\\cos x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos(\\cos x)$" },
        { id: "b", text: "$-\\sin x \\cos(\\cos x)$" },
        { id: "c", text: "$\\sin x \\cos(\\cos x)$" },
        { id: "d", text: "$\\cos(\\sin x)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Outside: $\\sin u \\rightarrow \\cos u$. Inside: $\\cos x \\rightarrow -\\sin x$. Result: $-\\sin x \\cos(\\cos x)$."
    },
    {
      text: "Find the derivative of $f(x) = e^{-3x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^{-3x}$" },
        { id: "b", text: "$-3e^{-3x}$" },
        { id: "c", text: "$3e^{-3x}$" },
        { id: "d", text: "$-3e^x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Derivative of $e^{kx}$ is $ke^{kx}$."
    },
    {
      text: "What is the derivative of $y = \\ln(x^2 + 5x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / (x^2 + 5x)$" },
        { id: "b", text: "$(2x + 5) / (x^2 + 5x)$" },
        { id: "c", text: "$2x + 5$" },
        { id: "d", text: "$1 / (2x + 5)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Outside: $\\ln u \\rightarrow 1/u$. Inside: $x^2+5x \\rightarrow 2x+5$. Result: $(2x+5) / (x^2+5x)$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = (1/x + 1)^2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2(1/x + 1)$" },
        { id: "b", text: "$-2(1/x + 1) / x^2$" },
        { id: "c", text: "$2/x^2$" },
        { id: "d", text: "$-2/x^3$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$2(1/x + 1) \\cdot (-1/x^2) = -2(1/x + 1) / x^2$."
    },
    {
      text: "The derivative of $f(g(h(x)))$ involves how many nested applications of the Chain Rule?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "One" },
        { id: "b", text: "Two" },
        { id: "c", text: "Three" },
        { id: "d", text: "Zero" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "You differentiate $f$, then $g$, then $h$, requiring two 'links' in the chain."
    },
    {
      text: "Find the derivative of $y = \\sin^3(4x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$3\\sin^2(4x) \\cos(4x)$" },
        { id: "b", text: "$12\\sin^2(4x) \\cos(4x)$" },
        { id: "c", text: "$12\\cos^3(4x)$" },
        { id: "d", text: "$4\\sin^2(4x)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Layer 1: $u^3 \\rightarrow 3u^2$. Layer 2: $\\sin v \\rightarrow \\cos v$. Layer 3: $4x \\rightarrow 4$. Total: $3\\sin^2(4x) \\cdot \\cos(4x) \\cdot 4 = 12\\sin^2(4x)\\cos(4x)$."
    },
    {
      text: "Evaluate $d/dx [\\sqrt{\\sin x}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\cos x / (2\\sqrt{\\sin x})$" },
        { id: "b", text: "$1 / (2\\sqrt{\\cos x})$" },
        { id: "c", text: "$\\cos x \\sqrt{\\sin x}$" },
        { id: "d", text: "$\\sqrt{\\cos x}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$(1/2)(\\sin x)^{-1/2} \\cdot (\\cos x) = \\cos x / (2\\sqrt{\\sin x})$."
    },
    {
      text: "If $f(x) = e^x$ and $g(x) = \\ln x$, find the derivative of $f(g(x))$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^x / x$" },
        { id: "b", text: "1" },
        { id: "c", text: "$1/x$" },
        { id: "d", text: "$e^{\\ln x}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$f(g(x)) = e^{\\ln x} = x$. The derivative of $x$ is 1. (Using Chain Rule: $e^{\\ln x} \\cdot 1/x = x \\cdot 1/x = 1$)."
    },
    {
      text: "Find the slope of the tangent line to $y = (2x-1)^3$ at $x = 1$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "6" },
        { id: "c", text: "1" },
        { id: "d", text: "12" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$y' = 3(2x-1)^2 \\cdot 2 = 6(2x-1)^2$. At $x=1$, $y' = 6(1)^2 = 6$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = \\ln(5x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/5x$" },
        { id: "b", text: "$1/x$" },
        { id: "c", text: "$5/x$" },
        { id: "d", text: "$1/5$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$(1/5x) \\cdot 5 = 1/x$. (Also, $\\ln(5x) = \\ln 5 + \\ln x$, and derivative of $\\ln 5$ is 0)."
    },
    {
      text: "Evaluate $d/dx [\\cos(x^3)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\sin(x^3)$" },
        { id: "b", text: "$-3x^2 \\sin(x^3)$" },
        { id: "c", text: "$3x^2 \\cos(x^2)$" },
        { id: "d", text: "$3x^2 \\sin(x^3)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$-\\sin(x^3) \\cdot (3x^2) = -3x^2 \\sin(x^3)$."
    },
    {
      text: "True or False: The Chain Rule can be thought of as multiplying rates of change.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Yes, $dy/dx = (dy/du) \\cdot (du/dx)$."
    },
    {
      text: "Find the derivative of $y = e^{\\sin x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^{\\cos x}$" },
        { id: "b", text: "$\\cos x \\cdot e^{\\sin x}$" },
        { id: "c", text: "$e^{\\sin x}$" },
        { id: "d", text: "$\\sin x \\cdot e^{\\cos x}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$e^{\\sin x} \\cdot \\cos x = \\cos x \\cdot e^{\\sin x}$."
    },
    {
      text: "Find $f'(x)$ for $f(x) = (x^2 + x)^4$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$4(x^2 + x)^3$" },
        { id: "b", text: "$4(x^2 + x)^3(2x + 1)$" },
        { id: "c", text: "$(2x + 1)^4$" },
        { id: "d", text: "$8x(x^2 + x)^3$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$4(x^2 + x)^3$ (power rule) times $(2x + 1)$ (derivative of inside)."
    }
  ],
  'calc-3-2': [
    {
      text: "Implicit differentiation is necessary when:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The function is explicitly written as $y = f(x)$" },
        { id: "b", text: "The relationship between $x$ and $y$ is defined by an equation that is difficult to solve for $y$" },
        { id: "c", text: "There are only $x$ terms in the equation" },
        { id: "d", text: "The derivative is constant" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "When $y$ is 'tangled' with $x$ (like $x^2 + y^2 = 25$), we differentiate both sides with respect to $x$ implicitly."
    },
    {
      text: "When differentiating a $y$ term with respect to $x$ implicitly, you must always multiply by:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x$" },
        { id: "b", text: "$dy/dx$" },
        { id: "c", text: "$dx/dy$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "By the Chain Rule, $d/dx[f(y)] = f'(y) \\cdot dy/dx$."
    },
    {
      text: "Find $dy/dx$ for the circle $x^2 + y^2 = 25$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-x/y$" },
        { id: "b", text: "$x/y$" },
        { id: "c", text: "$-2x / 2y$" },
        { id: "d", text: "Both a and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "$2x + 2y(dy/dx) = 0 \\rightarrow 2y(dy/dx) = -2x \\rightarrow dy/dx = -x/y$."
    },
    {
      text: "What is $d/dx [y^3]$ in implicit differentiation?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$3y^2$" },
        { id: "b", text: "$3y^2 \\cdot dy/dx$" },
        { id: "c", text: "$3x^2$" },
        { id: "d", text: "$dy/dx$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Use the Power Rule on $y$, then apply the Chain Rule because $y$ is a function of $x$."
    },
    {
      text: "Evaluate $d/dx [xy]$ implicitly using the Product Rule.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$y + x(dy/dx)$" },
        { id: "b", text: "$x + y(dy/dx)$" },
        { id: "c", text: "$dy/dx$" },
        { id: "d", text: "$1 \\cdot dy/dx$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$(d/dx[x]) \\cdot y + x \\cdot (d/dx[y]) = 1 \\cdot y + x \\cdot (dy/dx) = y + x(dy/dx)$."
    },
    {
      text: "Find $dy/dx$ if $y^2 = x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$2y$" },
        { id: "b", text: "$1 / (2y)$" },
        { id: "c", text: "$1/2$" },
        { id: "d", text: "$x/2$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$2y(dy/dx) = 1 \\rightarrow dy/dx = 1/(2y)$."
    },
    {
      text: "If $x + \\sin y = 1$, find $dy/dx$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / \\cos y$" },
        { id: "b", text: "$-1 / \\cos y$" },
        { id: "c", text: "$\\cos y$" },
        { id: "d", text: "$\\sec y$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$1 + \\cos y (dy/dx) = 0 \\rightarrow \\cos y (dy/dx) = -1 \\rightarrow dy/dx = -1/\\cos y$."
    },
    {
      text: "Find the slope of the tangent line to $x^2 - y^2 = 3$ at the point $(2, 1)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "-2" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$2x - 2y(dy/dx) = 0 \\rightarrow dy/dx = x/y$. At $(2, 1)$, slope $= 2/1 = 2$."
    },
    {
      text: "Evaluate $d/dx [e^y]$. ",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$e^y$" },
        { id: "b", text: "$e^y \\cdot dy/dx$" },
        { id: "c", text: "$e^x \\cdot dy/dx$" },
        { id: "d", text: "$y e^{y-1} dy/dx$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative of $e^u$ is $e^u \\cdot du/dx$."
    },
    {
      text: "Find $dy/dx$ if $x^3 + y^3 = xy$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(y - 3x^2) / (3y^2 - x)$" },
        { id: "b", text: "$(3x^2 - y) / (x - 3y^2)$" },
        { id: "c", text: "$3x^2 + 3y^2$" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$3x^2 + 3y^2(dy/dx) = y + x(dy/dx) \\rightarrow (3y^2 - x)(dy/dx) = y - 3x^2 \\rightarrow dy/dx = (y - 3x^2) / (3y^2 - x)$."
    },
    {
      text: "True or False: The result of implicit differentiation for $dy/dx$ can contain both $x$ and $y$ variables.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Since $y$ is not explicitly solved for, the derivative formula usually depends on the location $(x, y)$."
    },
    {
      text: "Find $dy/dx$ for $x^2 y + y^2 x = 6$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-(2xy + y^2) / (x^2 + 2xy)$" },
        { id: "b", text: "$-(x^2 + 2xy) / (2xy + y^2)$" },
        { id: "c", text: "$0$" },
        { id: "d", text: "$1$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$[2xy + x^2(dy/dx)] + [2yx(dy/dx) + y^2] = 0 \\rightarrow (x^2 + 2xy)(dy/dx) = -(2xy + y^2)$."
    },
    {
      text: "What is $d/dx [\\ln y]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1/y$" },
        { id: "b", text: "$(1/y) \\cdot dy/dx$" },
        { id: "c", text: "$1/x$" },
        { id: "d", text: "$dy/dx$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Derivative of $\\ln(u)$ is $(1/u) \\cdot du/dx$."
    },
    {
      text: "If $y = \\sqrt{y} + x$, find $dy/dx$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$1 / (1 - 1/(2\\sqrt{y}))$" },
        { id: "b", text: "$2\\sqrt{y} / (2\\sqrt{y} - 1)$" },
        { id: "c", text: "1" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$dy/dx = (1/(2\\sqrt{y}))dy/dx + 1 \\rightarrow dy/dx (1 - 1/(2\\sqrt{y})) = 1 \\rightarrow dy/dx = 1 / ((2\\sqrt{y}-1)/(2\\sqrt{y})) = 2\\sqrt{y}/(2\\sqrt{y}-1)$."
    },
    {
      text: "Evaluate the derivative of $\\cos(y) = x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sin y$" },
        { id: "b", text: "$-1 / \\sin y$" },
        { id: "c", text: "$-csc y$" },
        { id: "d", text: "Both b and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "$-\\sin y (dy/dx) = 1 \\rightarrow dy/dx = -1/\\sin y = -\\csc y$."
    },
    {
      text: "Find $dy/dx$ at $(1, 1)$ for $x^2 + xy + y^2 = 3$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "-1" },
        { id: "c", text: "0" },
        { id: "d", text: "-3/3" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$2x + y + x(dy/dx) + 2y(dy/dx) = 0$. At $(1, 1)$: $2 + 1 + 1(dy/dx) + 2(dy/dx) = 0 \\rightarrow 3(dy/dx) = -3 \\rightarrow dy/dx = -1$."
    },
    {
      text: "When finding the second derivative $d^2y/dx^2$ implicitly, you often need to:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Differentiate $dy/dx$ again" },
        { id: "b", text: "Substitute the expression for $dy/dx$ back into the result" },
        { id: "c", text: "Ignore the $y$ terms" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "Second derivatives in implicit differentiation require differentiating the first derivative and then simplifying using the original $dy/dx$ formula."
    },
    {
      text: "Find $dy/dx$ for $x = \\tan y$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sec^2 y$" },
        { id: "b", text: "$\\cos^2 y$" },
        { id: "c", text: "$1 / (1 + x^2)$" },
        { id: "d", text: "Both b and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$1 = \\sec^2 y (dy/dx) \\rightarrow dy/dx = 1/\\sec^2 y = \\cos^2 y$. Since $1+\\tan^2 y = \\sec^2 y$, $dy/dx = 1/(1+x^2)$."
    },
    {
      text: "Evaluate $d/dx [y^2 + 2y] = d/dx [x^2]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$dy/dx = x / (y + 1)$" },
        { id: "b", text: "$2y dy/dx + 2 dy/dx = 2x$" },
        { id: "c", text: "$dy/dx = 2x / (2y + 2)$" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "Differentiating gives $2y dy/dx + 2 dy/dx = 2x$. Solving for $dy/dx$ gives $2x / (2y + 2) = x / (y + 1)$."
    },
    {
      text: "Find $dy/dx$ if $x^2 - 3xy = 10$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(2x - 3y) / 3x$" },
        { id: "b", text: "$(3y - 2x) / 3x$" },
        { id: "c", text: "$2x/3$" },
        { id: "d", text: "$2x - 3y$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$2x - [3y + 3x(dy/dx)] = 0 \\rightarrow 2x - 3y = 3x(dy/dx) \\rightarrow dy/dx = (2x - 3y) / 3x$."
    },
    {
      text: "What is the slope of the curve $y^3 + y = x^2$ at the origin $(0, 0)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "Undefined" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$3y^2(dy/dx) + dy/dx = 2x$. At $(0, 0)$: $0 + dy/dx = 0 \\rightarrow dy/dx = 0$."
    },
    {
      text: "Find $dy/dx$ for $x = e^{xy}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(1 - ye^{xy}) / (xe^{xy})$" },
        { id: "b", text: "$1 / (xe^{xy})$" },
        { id: "c", text: "$e^{xy}$" },
        { id: "d", text: "$(1/x - y) / x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$1 = e^{xy}(y + x dy/dx) \\rightarrow 1 = ye^{xy} + xe^{xy}(dy/dx) \\rightarrow dy/dx = (1 - ye^{xy}) / (xe^{xy})$."
    },
    {
      text: "The 'dy/dx' in implicit differentiation represents the ________ of the curve at any point $(x, y)$. ",
      type: "multiple_choice",
      options: [
        { id: "a", text: "slope" },
        { id: "b", text: "area" },
        { id: "c", text: "length" },
        { id: "d", text: "curvature" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Regardless of whether the differentiation is implicit or explicit, the derivative always represents the slope."
    },
    {
      text: "If $x^2 + y^2 = r^2$, find the second derivative $d^2y/dx^2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-r^2 / y^3$" },
        { id: "b", text: "$-1 / y^2$" },
        { id: "c", text: "$-x/y$" },
        { id: "d", text: "$-r/y^2$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$y' = -x/y$. $y'' = [(-1)(y) - (-x)(y')] / y^2 = [-y + x(-x/y)] / y^2 = [(-y^2 - x^2)/y] / y^2 = -(x^2+y^2)/y^3 = -r^2/y^3$."
    },
    {
      text: "Find $dy/dx$ for $\\sqrt{x} + \\sqrt{y} = 4$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-\\sqrt{y/x}$" },
        { id: "b", text: "$\\sqrt{y/x}$" },
        { id: "c", text: "$-1$" },
        { id: "d", text: "$-x/y$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$1/(2\\sqrt{x}) + (1/(2\\sqrt{y}))dy/dx = 0 \\rightarrow (1/(2\\sqrt{y}))dy/dx = -1/(2\\sqrt{x}) \\rightarrow dy/dx = -\\sqrt{y}/\\sqrt{x} = -\\sqrt{y/x}$."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 3.1 and 3.2...');

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
