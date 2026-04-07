/**
 * Seed script for AP Calculus AB Unit 1: Topics 1.13 and 1.14
 * Run with: node server/seeds/calculus/unit1-topics-13-14.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-1-13': [
    {
      text: "A discontinuity is 'removable' if which of the following is true?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The function is defined at that point" },
        { id: "b", text: "The limit as $x$ approaches the point exists and is finite" },
        { id: "c", text: "The function has a vertical asymptote" },
        { id: "d", text: "The one-sided limits are different" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "A hole is removable because both sides of the graph are aiming for the same finite y-value."
    },
    {
      text: "To remove a discontinuity at $x = c$, we must define $f(c)$ such that $f(c)$ equals:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "$\\lim_{x \\to c} f(x)$" },
        { id: "c", text: "$f(0)$" },
        { id: "d", text: "The y-intercept" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Continuity requires the point to be exactly where the limit says the graph is heading."
    },
    {
      text: "If $f(x) = \\frac{x^2 - 9}{x - 3}$, what value should be assigned to $f(3)$ to remove the discontinuity?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "6" },
        { id: "c", text: "9" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Factor to $\\frac{(x-3)(x+3)}{x-3}$. The limit as $x$ approaches 3 is $3+3 = 6$."
    },
    {
      text: "Can a jump discontinuity be removed by redefining the function at a single point?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Redefining a single point cannot connect two separate branches of a graph that are at different heights."
    },
    {
      text: "If a function has a removable discontinuity at $x = 2$, the graph has a ________ at that point.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Vertical asymptote" },
        { id: "b", text: "Jump" },
        { id: "c", text: "Hole" },
        { id: "d", text: "Solid dot" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "A removable discontinuity is visually represented as a hole (open circle)."
    },
    {
      text: "Given $f(x) = \\frac{x}{x}$, what value of $f(0)$ makes the function continuous at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "Undefined" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$\\frac{x}{x} = 1$ for all $x \\neq 0$. The limit as $x \\to 0$ is 1, so we must define $f(0) = 1$."
    },
    {
      text: "Is it possible to remove the discontinuity of $f(x) = \\frac{1}{x}$ at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, define $f(0) = 0$" },
        { id: "b", text: "No, because the limit does not exist (it's infinite)" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Infinite discontinuities are non-removable."
    },
    {
      text: "A piecewise function is $f(x) = \\frac{x^2-1}{x-1}$ for $x \\neq 1$. If we want $f$ to be continuous everywhere, we must set $f(1) = ________$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "0" },
        { id: "d", text: "-1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The limit of $\\frac{(x-1)(x+1)}{x-1}$ as $x$ approaches 1 is $1+1 = 2$."
    },
    {
      text: "Algebraically, how do you identify a removable discontinuity in a rational function?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Find where the denominator is zero" },
        { id: "b", text: "Find a factor common to both the numerator and denominator that results in $\\frac{0}{0}$" },
        { id: "c", text: "Check for negative exponents" },
        { id: "d", text: "Look for trigonometric terms" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "A $\\frac{0}{0}$ indeterminate form usually indicates a factor that can be 'cancelled', leaving a hole."
    },
    {
      text: "If $\\lim_{x \\to 5} f(x) = 10$, but $f(5) = 2$, $f(x)$ has a removable discontinuity. To remove it, what change is needed?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Change the limit to 2" },
        { id: "b", text: "Change the value of $f(5)$ to 10" },
        { id: "c", text: "Move the asymptote" },
        { id: "d", text: "Add 8 to all x-values" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Moving the single point (5, 2) to (5, 10) fills the hole."
    },
    {
      text: "Which of the following describes a non-removable discontinuity?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A hole" },
        { id: "b", text: "A vertical asymptote" },
        { id: "c", text: "A jump" },
        { id: "d", text: "Both b and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "easy",
      explanation: "Jumps and asymptotes involve fundamental breaks in the graph's path that cannot be fixed by a single point."
    },
    {
      text: "Evaluate $\\lim_{x \\to -2} \\frac{x^2 - x - 6}{x + 2}$ to find the y-value needed to remove the discontinuity.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "-5" },
        { id: "c", text: "5" },
        { id: "d", text: "-2" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Factor to $\\frac{(x+2)(x-3)}{x+2}$. Limit is $-2 - 3 = -5$."
    },
    {
      text: "If $f(x) = \\frac{\\sin(x)}{x}$ for $x \\neq 0$, $f(0) = ________$ would make $f$ continuous at 0.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "π" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The special limit $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ is the value needed to fill the hole at the origin."
    },
    {
      text: "A function has a hole at $x = c$ if the simplified denominator ________ equal zero at $x = c$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "does" },
        { id: "b", text: "does NOT" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "If the factor remains in the denominator after cancelling, it's an asymptote, not a hole."
    },
    {
      text: "If a function is continuous everywhere after removing a single discontinuity, the original function was continuous ________.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "nowhere" },
        { id: "b", text: "everywhere except at that one point" },
        { id: "c", text: "on all positive numbers" },
        { id: "d", text: "only at the origin" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Removing a discontinuity 'fixes' the function at its only problematic spot."
    },
    {
      text: "Find the value of $k$ that makes $f(x)$ continuous at $x = 4$:\n$f(x) = \\frac{x^2 - 16}{x - 4}$ for $x \\neq 4$ and $f(4) = k$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "8" },
        { id: "c", text: "16" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$\\lim_{x \\to 4} \\frac{(x+4)(x-4)}{x-4} = 4 + 4 = 8$."
    },
    {
      text: "Is the discontinuity of $f(x) = \\frac{x - 1}{x^2 - 1}$ removable at both $x = 1$ and $x = -1$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, only at $x = 1$" },
        { id: "c", text: "No, only at $x = -1$" },
        { id: "d", text: "No, neither is removable" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Factor to $\\frac{x-1}{(x-1)(x+1)}$. $(x-1)$ cancels (removable). $(x+1)$ remains in the denominator (infinite discontinuity at $x = -1$)."
    },
    {
      text: "If $f(x) = \\frac{|x-2|}{x-2}$, is the discontinuity at $x = 2$ removable?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, it is a jump discontinuity" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "The left limit is -1 and the right limit is 1. Since the limit DNE, it is not removable."
    },
    {
      text: "Redefining $f(c)$ to equal $L$ is valid for removing a discontinuity ONLY if:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "L is infinity" },
        { id: "b", text: "$\\lim_{x \\to c} f(x) = L$" },
        { id: "c", text: "$f(c) = L$" },
        { id: "d", text: "The function is a parabola" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "This is the essence of making the function value match the approach."
    },
    {
      text: "Which function has a removable discontinuity at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = \\frac{x^3}{x}$" },
        { id: "b", text: "$f(x) = \\frac{\\cos(x)}{x}$" },
        { id: "c", text: "$f(x) = \\frac{1}{x^2}$" },
        { id: "d", text: "$f(x) = \\frac{\\ln(x+1)}{x}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$\\frac{x^3}{x}$ simplifies to $x^2$, which has a limit of $0$ at $x=0$. $\\frac{\\ln(x+1)}{x}$ also has a removable discontinuity (limit is $1$), but $\\frac{x^3}{x}$ is simpler to see."
    },
    {
      text: "The 'limit' of $f(x)$ at a removable discontinuity describes:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The height of the hole" },
        { id: "b", text: "The distance to the x-axis" },
        { id: "c", text: "The slope of the line" },
        { id: "d", text: "The y-intercept" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The limit tells you exactly where the gap in the graph is located vertically."
    },
    {
      text: "True or False: Every hole in a graph is a removable discontinuity.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "By definition, a hole is a point where the limit exists but the function value doesn't match or is missing."
    },
    {
      text: "If $f(x) = \\frac{(x - c) \\cdot g(x)}{x - c}$, and $g(x)$ is continuous, then $f$ has a removable discontinuity at:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x = 0$" },
        { id: "b", text: "$x = c$" },
        { id: "c", text: "$x = g(c)$" },
        { id: "d", text: "Nowhere" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The $(x-c)$ factor causes a $\\frac{0}{0}$ form at $x=c$."
    },
    {
      text: "To fix $f(x) = \\frac{x^2 - 1}{x + 1}$ at $x = -1$, we set $f(-1) = ________$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "-2" },
        { id: "c", text: "0" },
        { id: "d", text: "-1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Factor to $\\frac{(x+1)(x-1)}{x+1}$. Limit as $x \\to -1$ is $-1 - 1 = -2$."
    },
    {
      text: "Removable discontinuities often arise from ________ in algebraic expressions.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "common factors" },
        { id: "b", text: "prime numbers" },
        { id: "c", text: "logarithms" },
        { id: "d", text: "square roots of negative numbers" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "When the same factor appears in both the top and bottom of a fraction, it 'removes' itself from the simplified form but leaves a hole in the original domain."
    }
  ],
  'calc-1-14': [
    {
      text: "If $\\lim_{x \\to c} f(x) = \\infty$, the line $x = c$ is a:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Horizontal asymptote" },
        { id: "b", text: "Vertical asymptote" },
        { id: "c", text: "Slant asymptote" },
        { id: "d", text: "Tangent line" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Infinite limits at a finite x-value define vertical asymptotes."
    },
    {
      text: "When evaluating $\\lim_{x \\to 3^+} \\frac{1}{x - 3}$, the limit is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "∞" },
        { id: "c", text: "-∞" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "As $x$ approaches 3 from the right (e.g., $3.1$), $(x-3)$ is a small positive number. $\\frac{1}{\\text{small positive}}$ = large positive."
    },
    {
      text: "When evaluating $\\lim_{x \\to 3^-} \\frac{1}{x - 3}$, the limit is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "∞" },
        { id: "c", text: "-∞" },
        { id: "d", text: "-1" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "As $x$ approaches 3 from the left (e.g., $2.9$), $(x-3)$ is a small negative number. $\\frac{1}{\\text{small negative}}$ = large negative."
    },
    {
      text: "Does the limit $\\lim_{x \\to 0} \\frac{1}{x}$ exist?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, it is infinity" },
        { id: "b", text: "No, because the left limit is $-\\infty$ and the right limit is $+\\infty$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "For a two-sided limit to be $\\infty$, both sides must approach $+\\infty$. If they disagree, the limit simply DNE."
    },
    {
      text: "The function $f(x) = \\frac{1}{x^2}$ has a limit at $x = 0$ of:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "∞" },
        { id: "b", text: "$-\\infty$" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE (disagreement)" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Since $x^2$ is always positive, both sides approach $+\\infty$."
    },
    {
      text: "A rational function has a vertical asymptote at $x = c$ if ________ after all common factors are cancelled.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "the numerator is zero" },
        { id: "b", text: "the denominator is zero" },
        { id: "c", text: "the whole fraction is zero" },
        { id: "d", text: "the x-value is zero" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "A non-cancelled zero in the denominator creates unbounded behavior."
    },
    {
      text: "Evaluate $\\lim_{x \\to 2^-} \\frac{x + 1}{x - 2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "∞" },
        { id: "b", text: "-∞" },
        { id: "c", text: "0" },
        { id: "d", text: "3" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Numerator approaches $3$. Denominator approaches $0$ from the negative side. $\\frac{\\text{positive}}{\\text{small negative}} = -\\infty$."
    },
    {
      text: "Vertical asymptotes occur where the ________ of a function is not defined and the values become unbounded.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "range" },
        { id: "b", text: "domain" },
        { id: "c", text: "slope" },
        { id: "d", text: "y-intercept" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Asymptotes are features found at 'forbidden' x-values."
    },
    {
      text: "How many vertical asymptotes does $f(x) = \\frac{1}{x^2 - 4}$ have?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "$2$" },
        { id: "d", text: "4" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "The denominator is zero at $x = 2$ and $x = -2$."
    },
    {
      text: "If $\\lim_{x \\to c} f(x) = -\\infty$, the graph ________ as it approaches the line $x = c$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "levels off" },
        { id: "b", text: "plummets downwards" },
        { id: "c", text: "crosses the axis" },
        { id: "d", text: "stops" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Negative infinity means y-values are decreasing without bound."
    },
    {
      text: "The natural log function $f(x) = \\ln(x)$ has a vertical asymptote at:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "x = 1" },
        { id: "b", text: "$x = 0$" },
        { id: "c", text: "x = e" },
        { id: "d", text: "It doesn't have one" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "As $x \\to 0$ from the right, $\\ln(x)$ approaches $-\\infty$."
    },
    {
      text: "Find the vertical asymptote(s) of $f(x) = \\frac{x - 1}{x^2 - 1}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x = 1$ and $x = -1$" },
        { id: "b", text: "$x = -1$ only" },
        { id: "c", text: "$x = 1$ only" },
        { id: "d", text: "None" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$x = 1$ is a removable discontinuity (hole). $x = -1$ is an infinite discontinuity (asymptote)."
    },
    {
      text: "True or False: A function can cross its vertical asymptote.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Unlike horizontal asymptotes, a function is never defined at the x-value of a vertical asymptote, so it can never cross it."
    },
    {
      text: "Which of the following functions has NO vertical asymptotes?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = \\frac{x}{x^2 + 1}$" },
        { id: "b", text: "$f(x) = \\tan x$" },
        { id: "c", text: "$f(x) = \\frac{1}{x}$" },
        { id: "d", text: "$f(x) = \\sec x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$x^2 + 1$ is never zero, so there are no infinite discontinuities."
    },
    {
      text: "The behavior of $f(x) = \\tan x$ near $x = \\pi/2$ is an example of:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A removable discontinuity" },
        { id: "b", text: "Infinite limits" },
        { id: "c", text: "A horizontal asymptote" },
        { id: "d", text: "A limit of zero" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Tangent has vertical asymptotes at odd multiples of π/2."
    },
    {
      text: "If $\\lim_{x \\to c^+} f(x) = \\infty$, is it possible for $\\lim_{x \\to c} f(x)$ to exist as a finite number?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "If even one side is infinite, the two-sided limit cannot be a finite real number."
    },
    {
      text: "Evaluate $\\lim_{x \\to 0^+} \\ln(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "∞" },
        { id: "c", text: "-∞" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "The graph of natural log drops to negative infinity as it approaches the y-axis."
    },
    {
      text: "For the function $f(x) = \\frac{5}{(x - k)^2}$, the limit as $x \\to k$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "∞" },
        { id: "b", text: "-∞" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The square ensures the denominator is always positive, so both sides approach +∞."
    },
    {
      text: "A 'non-removable' infinite discontinuity is another name for a:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Hole" },
        { id: "b", text: "Jump" },
        { id: "c", text: "Vertical Asymptote" },
        { id: "d", text: "Endpoint" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Asymptotes are the primary examples of infinite discontinuities."
    },
    {
      text: "Evaluate $\\lim_{x \\to 4^+} \\frac{x + 2}{4 - x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "∞" },
        { id: "b", text: "-∞" },
        { id: "c", text: "6" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Numerator approaches $6$. Denominator approaches $0$ from the negative side (e.g., $4 - 4.1 = -0.1$). $\\frac{\\text{positive}}{\\text{small negative}} = -\\infty$."
    },
    {
      text: "Which trigonometric function has a vertical asymptote at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sin x$" },
        { id: "b", text: "$\\cos x$" },
        { id: "c", text: "$\\csc x$" },
        { id: "d", text: "$\\tan x$" }
      ],
      correctAnswers: ["c"],
      difficulty: "hard",
      explanation: "$\\csc x = \\frac{1}{\\sin x}$. Since $\\sin(0) = 0$, cosecant has an asymptote at 0."
    },
    {
      text: "If a function $f(x)$ has a vertical asymptote at $x = 1$, then $f(1)$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Infinity" },
        { id: "b", text: "0" },
        { id: "c", text: "Undefined" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "A function can never have a finite value at the location of a vertical asymptote."
    },
    {
      text: "The limit $\\lim_{x \\to c} f(x) = \\infty$ is technically a type of ________ limit.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "existing" },
        { id: "b", text: "non-existent (DNE)" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "In strict mathematics, a limit only 'exists' if it equals a finite real number. Infinity describes *how* it fails to exist."
    },
    {
      text: "Find the vertical asymptote of $f(x) = \\frac{e^x}{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x = e$" },
        { id: "b", text: "$x = 0$" },
        { id: "c", text: "No asymptote" },
        { id: "d", text: "$y = 0$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The denominator is zero at $x = 0$ and $e^0 = 1$, so it is an infinite discontinuity."
    },
    {
      text: "Vertical asymptotes provide information about the ________ of a function.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "end behavior" },
        { id: "b", text: "local unbounded behavior" },
        { id: "c", text: "roots" },
        { id: "d", text: "symmetry" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "They tell us where the function values 'explode' to infinity near a specific point."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 1.13 and 1.14...');

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
