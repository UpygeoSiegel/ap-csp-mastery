/**
 * Seed script for AP Calculus AB Unit 1: Topics 1.15 and 1.16
 * Run with: node server/seeds/calculus/unit1-topics-15-16.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-1-15': [
    {
      text: "If $\\lim_{x \\to \\infty} f(x) = L$, the line $y = L$ is a:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Vertical asymptote" },
        { id: "b", text: "Horizontal asymptote" },
        { id: "c", text: "Slant asymptote" },
        { id: "d", text: "Tangent line" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Horizontal asymptotes describe the behavior of a function as $x$ goes to $\\pm\\infty$."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{3x^2 + 5}{x^2 - 2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "3" },
        { id: "c", text: "Infinity" },
        { id: "d", text: "-2.5" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Since the degrees are equal (2), the limit is the ratio of leading coefficients: $3/1 = 3$."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{x + 10}{x^2 + 1}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "Infinity" },
        { id: "d", text: "10" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The degree of the denominator (2) is greater than the degree of the numerator (1), so the function approaches 0."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{x^3 - 1}{x^2 + 4}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "∞" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "The degree of the numerator (3) is greater than the degree of the denominator (2), so the limit is infinite."
    },
    {
      text: "Which type of function grows the fastest as x approaches infinity?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Logarithmic ($\\ln x$)" },
        { id: "b", text: "Polynomial ($x^n$)" },
        { id: "c", text: "Exponential ($e^x$)" },
        { id: "d", text: "Linear ($x$)" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Exponential functions eventually outgrow any polynomial or logarithmic function. The hierarchy is $\\text{Exponential} > \\text{Polynomial} > \\text{Logarithmic}$."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{e^x}{x^{100}}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "∞" },
        { id: "c", text: "1" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Even with a high power like $x^{100}$, the exponential function $e^x$ grows faster, so the limit is infinity."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{\\ln(x)}{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "∞" },
        { id: "d", text: "e" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Polynomials grow faster than logarithms, so the denominator dominates, leading to a limit of 0."
    },
    {
      text: "True or False: A function can cross its horizontal asymptote.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Yes. Horizontal asymptotes only describe end behavior. A function can oscillate around or cross the line many times before settling near it."
    },
    {
      text: "What is the horizontal asymptote of $f(x) = \\frac{2x - 1}{\\sqrt{x^2 + 1}}$ as $x$ approaches $\\infty$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "y = 0" },
        { id: "b", text: "y = 2" },
        { id: "c", text: "y = 1" },
        { id: "d", text: "y = -2" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$\\sqrt{x^2}$ is effectively $x$ for large positive $x$. The ratio of leading terms is $2x / x = 2$."
    },
    {
      text: "What is the horizontal asymptote of $f(x) = \\frac{2x - 1}{\\sqrt{x^2 + 1}}$ as $x$ approaches $-\\infty$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "y = 2" },
        { id: "b", text: "y = -2" },
        { id: "c", text: "y = 0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "As $x \\to -\\infty$, $\\sqrt{x^2} = |x| = -x$. The ratio becomes $2x / (-x) = -2$."
    },
    {
      text: "How many horizontal asymptotes can a single function have?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Exactly 1" },
        { id: "b", text: "At most 2" },
        { id: "c", text: "Infinite" },
        { id: "d", text: "None" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "A function can have one as $x \\to \\infty$ and a different one as $x \\to -\\infty$ (or the same one, or none)."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{\\sin(x)}{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "0" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Since $\\sin(x)$ is bounded between -1 and 1, and $x$ is growing to infinity, the fraction must approach 0."
    },
    {
      text: "If a rational function has a horizontal asymptote at $y = 0$, which statement is true about the degrees of the numerator (n) and denominator (d)?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "n = d" },
        { id: "b", text: "n < d" },
        { id: "c", text: "n > d" },
        { id: "d", text: "n = 0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The denominator must 'grow faster' for the limit at infinity to be zero."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{1 - 2x^3}{x^3 + 100x^2}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "-2" },
        { id: "c", text: "0" },
        { id: "d", text: "-0.02" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Degrees are both 3. Limit is $-2 / 1 = -2$."
    },
    {
      text: "Which function has $y = 1$ as a horizontal asymptote?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = \\frac{x + 1}{x}$" },
        { id: "b", text: "$f(x) = \\frac{1}{x + 1}$" },
        { id: "c", text: "$f(x) = x^2$" },
        { id: "d", text: "$f(x) = \\sin x$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$\\lim_{x \\to \\infty} \\frac{x+1}{x} = 1$."
    },
    {
      text: "As $x$ approaches $-\\infty$, the function $f(x) = e^x$ approaches:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "∞" },
        { id: "b", text: "-∞" },
        { id: "c", text: "0" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "$e^{-\\text{large number}} = \\frac{1}{e^{\\text{large number}}}$, which is very close to 0."
    },
    {
      text: "To evaluate $\\lim_{x \\to \\infty}$ of a rational function algebraically, you divide every term by:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "x" },
        { id: "b", text: "The highest power of x in the denominator" },
        { id: "c", text: "The constant term" },
        { id: "d", text: "The leading coefficient" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "This formal method reveals which terms disappear (go to 0) and which remain as coefficients."
    },
    {
      text: "Find $\\lim_{x \\to \\infty} \\frac{x + 2}{\\sqrt{x} + 1}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "∞" },
        { id: "d", text: "2" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "$x$ grows faster than $\\sqrt{x}$ (degree 1 vs degree 0.5), so the limit is infinite."
    },
    {
      text: "What is $\\lim_{x \\to \\infty} \\arctan(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "∞" },
        { id: "b", text: "$\\pi/2$" },
        { id: "c", text: "$\\pi$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Inverse tangent has horizontal asymptotes at $\\pm \\pi/2$."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{(\\ln x)^{10}}{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "∞" },
        { id: "c", text: "1" },
        { id: "d", text: "10" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Any power of $x$ will eventually dominate any power of $\\ln(x)$."
    },
    {
      text: "The behavior 'top heavy' degree in a rational function leads to:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A limit of 0" },
        { id: "b", text: "A finite non-zero limit" },
        { id: "c", text: "An infinite limit" },
        { id: "d", text: "A horizontal asymptote at y = 1" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "'Top heavy' means the numerator has a higher degree, so values grow without bound."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{5x^4 - 2x}{3x^4 + 1000}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "5/3" },
        { id: "c", text: "∞" },
        { id: "d", text: "5" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Ratio of leading coefficients for equal degrees: $5/3$."
    },
    {
      text: "A function has a slant (oblique) asymptote if the degree of the numerator is ________ the degree of the denominator.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "exactly one more than" },
        { id: "b", text: "less than" },
        { id: "c", text: "equal to" },
        { id: "d", text: "double" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "A one-degree difference results in a linear slant asymptote (found via long division)."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{\\cos x + x}{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "DNE" },
        { id: "d", text: "∞" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Split the fraction: $\\frac{\\cos(x)}{x} + \\frac{x}{x}$. As $x \\to \\infty$, $\\frac{\\cos(x)}{x} \\to 0$ and $\\frac{x}{x} = 1$. Total limit is 1."
    },
    {
      text: "Is it possible for a function to have no limit as $x \\to \\infty$ without going to $\\pm\\infty$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, if it oscillates (like $\\sin x$)" },
        { id: "b", text: "No, all functions eventually level off or explode" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Periodic functions like sine and cosine never settle on a single value, so their limit at infinity DNE."
    }
  ],
  'calc-1-16': [
    {
      text: "The Intermediate Value Theorem (IVT) requires that the function must be ________ on the closed interval $[a, b]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Differentiable" },
        { id: "b", text: "Continuous" },
        { id: "c", text: "Positive" },
        { id: "d", text: "Increasing" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Continuity is the 'no breaks' condition that ensures all values between $f(a)$ and $f(b)$ are hit."
    },
    {
      text: "If $f(x)$ is continuous on $[1, 3]$ and $f(1) = 4$ and $f(3) = 10$, then IVT guarantees there is a value $c$ in $[1, 3]$ such that $f(c) = :$",
      type: "multiple_choice",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "7" },
        { id: "c", text: "12" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "IVT guarantees every value between the outputs 4 and 10. 7 is the only option in that range."
    },
    {
      text: "The IVT is often used to prove that a function has a ________ on an interval.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Maximum" },
        { id: "b", text: "Minimum" },
        { id: "c", text: "Zero (root)" },
        { id: "d", text: "Horizontal asymptote" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "If $f(a)$ is negative and $f(b)$ is positive, IVT guarantees $f(c) = 0$ somewhere in between."
    },
    {
      text: "Does IVT apply if $f(x)$ has a hole at the midpoint of the interval?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, because the function is not continuous" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Any break in continuity (like a hole) means you might 'skip' over the target value."
    },
    {
      text: "If $f(x)$ is continuous on $[0, 2]$ and $f(0) = -5$ and $f(2) = 5$, what is the target value guaranteed by the 'existence of a root' logic?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(c) = 0$" },
        { id: "b", text: "$f(c) = 2$" },
        { id: "c", text: "$f(c) = -5$" },
        { id: "d", text: "$f(c) = 5$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Since 0 is between -5 and 5, $f(c) = 0$ must occur."
    },
    {
      text: "The IVT is an ________ theorem, meaning it tells us a value exists but not how to find it.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Exact" },
        { id: "b", text: "Existence" },
        { id: "c", text: "Computational" },
        { id: "d", text: "Algebraic" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Like many major calculus theorems, IVT guarantees existence without providing a formula for the point $c$."
    },
    {
      text: "If $f(x) = x^2 + 1$, does IVT guarantee $f(c) = 0$ on the interval $[-1, 1]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, because the interval spans across 0" },
        { id: "b", text: "No, because both $f(-1)$ and $f(1)$ are positive" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$f(-1) = 2$ and $f(1) = 2$. 0 is not between 2 and 2. (In fact, $x^2+1$ is never zero)."
    },
    {
      text: "For IVT to guarantee $f(c) = k$, $k$ must be:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Positive" },
        { id: "b", text: "Between $f(a)$ and $f(b)$" },
        { id: "c", text: "An integer" },
        { id: "d", text: "Equal to zero" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The 'Intermediate' in IVT refers to $k$ being between the endpoint y-values."
    },
    {
      text: "True or False: If a function is NOT continuous, it is IMPOSSIBLE for it to satisfy the conclusion of IVT.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "False. A discontinuous function *might* still hit every value, but the theorem no longer *guarantees* it."
    },
    {
      text: "Which of the following is a necessary part of an IVT justification on the AP exam?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Stating the function is continuous" },
        { id: "b", text: "Showing that the target value is between the endpoint values" },
        { id: "c", text: "Naming the theorem (IVT)" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "AP graders look for the condition (continuity), the inequality (f(a) < k < f(b)), and the theorem name."
    },
    {
      text: "If a function is continuous on $[0, 10]$, $f(0) = 1$ and $f(10) = 1$, does IVT guarantee $f(c) = 5$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, because 5 is not between 1 and 1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The values must differ for the range of guaranteed values to be non-empty."
    },
    {
      text: "IVT ensures that continuous functions ________.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "are always positive" },
        { id: "b", text: "don't skip y-values" },
        { id: "c", text: "are always increasing" },
        { id: "d", text: "have no slopes" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "No breaks means the function 'travels' through every intermediate height."
    },
    {
      text: "If f is continuous on $[a, b]$ and $f(a) \\cdot f(b) < 0$, then:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "f has at least one root in $(a, b)$" },
        { id: "b", text: "f is always negative" },
        { id: "c", text: "f is always positive" },
        { id: "d", text: "f has a maximum at zero" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f(a) \\cdot f(b) < 0$ means the outputs have opposite signs (one +, one -). Thus, 0 is between them."
    },
    {
      text: "Can IVT be used to prove a function hits a specific value multiple times?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, it only guarantees AT LEAST one time" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The theorem guarantees existence (≥ 1), but not uniqueness or a specific count."
    },
    {
      text: "A hiker starts at 8 AM and reaches the summit at 12 PM. Does IVT guarantee they were at the halfway point at exactly 10 AM?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, it only guarantees they were at the halfway height at SOME time between 8 and 12" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "IVT guarantees values of the dependent variable (height) based on the independent variable (time), but doesn't fix the specific time."
    },
    {
      text: "Which of these functions violates IVT's condition on $[-1, 1]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = x^3$" },
        { id: "b", text: "$f(x) = \\frac{1}{x}$" },
        { id: "c", text: "$f(x) = \\sin x$" },
        { id: "d", text: "$f(x) = |x|$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$\\frac{1}{x}$ is not continuous on $[-1, 1]$ due to the asymptote at 0."
    },
    {
      text: "If $f(x)$ is continuous and $f(0)=1, f(1)=2, f(2)=0$. How many roots are guaranteed on $[0, 2]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Zero" },
        { id: "b", text: "At least one (between 1 and 2)" },
        { id: "c", text: "Exactly two" },
        { id: "d", text: "One at $x=2$" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "From x=1 to x=2, the function goes from 2 to 0. Since $f(2)=0$, it actually HAS a root at 2, but IVT specifically guarantees one in the interval where signs (relative to target) change."
    },
    {
      text: "The IVT is a property of ________ functions.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Linear" },
        { id: "b", text: "Continuous" },
        { id: "c", text: "Rational" },
        { id: "d", text: "Polynomial" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "While other functions might have it, only continuous functions are guaranteed to have the IVT property."
    },
    {
      text: "If f is continuous on [2, 4], f(2)=10, and f(4)=20, can $f(c)$ be 30 for some $c$ in [2, 4]?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, it's possible, but IVT doesn't guarantee it" },
        { id: "b", text: "No, it's impossible" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The function could go up to 30 and come back down, but IVT only guarantees the values *between* 10 and 20."
    },
    {
      text: "Which of the following is a classic real-world 'IVT' situation?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A temperature rising from 60 to 70 degrees" },
        { id: "b", text: "A bank account balance jumping with a deposit" },
        { id: "c", text: "A digital clock changing from 1:59 to 2:00" },
        { id: "d", text: "A light switch being flipped" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Temperature changes continuously; it cannot go from 60 to 70 without passing through 65."
    },
    {
      text: "If $f(x)$ is continuous on $[a, b]$, then the image (range) of the interval $[a, b]$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Also a closed interval" },
        { id: "b", text: "A set of discrete points" },
        { id: "c", text: "Always positive" },
        { id: "d", text: "Infinite" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "This is a deeper topological result related to IVT and the Extreme Value Theorem."
    },
    {
      text: "Does IVT guarantee that $f(c) = \\frac{f(a) + f(b)}{2}$ exists?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, because the average is always between the two values" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The average of two numbers is always between them, so IVT guarantees it."
    },
    {
      text: "To use IVT to prove $f(x) = x^3 + x - 1$ has a root in $[0, 1]$, you would show:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(0) = -1$ and $f(1) = 1$" },
        { id: "b", text: "The function is a polynomial (continuous)" },
        { id: "c", text: "0 is between -1 and 1" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "This covers the condition, the evidence, and the conclusion."
    },
    {
      text: "If $f(x)$ is continuous and $f(1)=5$ and $f(10)=-5$, IVT ensures:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "f has a root" },
        { id: "b", text: "$f(5) = 0$" },
        { id: "c", text: "f is decreasing" },
        { id: "d", text: "$f(0)$ exists" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Crossing from positive to negative requires passing through zero."
    },
    {
      text: "Intermediate Value Theorem is essentially a ________ theorem.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "connectedness" },
        { id: "b", text: "rate of change" },
        { id: "c", text: "area" },
        { id: "d", text: "limit" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "It formally captures the idea that the graph of a continuous function is a single connected piece."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 1.15 and 1.16...');

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
