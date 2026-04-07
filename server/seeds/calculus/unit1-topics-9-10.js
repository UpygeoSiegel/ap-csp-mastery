/**
 * Seed script for AP Calculus AB Unit 1: Topics 1.9 and 1.10
 * Run with: node server/seeds/calculus/unit1-topics-9-10.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-1-9': [
    {
      text: "Which of the following is NOT one of the three requirements for $f(x)$ to be continuous at $x = c$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(c)$ must exist" },
        { id: "b", text: "$\\lim_{x \\to c} f(x)$ must exist" },
        { id: "c", text: "$f'(c)$ must exist" },
        { id: "d", text: "$\\lim_{x \\to c} f(x) = f(c)$" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Differentiability ($f'(c)$ existing) is a stronger condition than continuity. Continuity only requires the function to be defined, the limit to exist, and the two to match."
    },
    {
      text: "Informally, a function is continuous on an interval if its graph can be drawn:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Without lifting your pencil" },
        { id: "b", text: "In a straight line" },
        { id: "c", text: "Using only positive numbers" },
        { id: "d", text: "With a ruler" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The 'pencil test' is a common informal way to describe continuity: no holes, jumps, or asymptotes."
    },
    {
      text: "If $\\lim_{x \\to c} f(x)$ exists but $f(c)$ is undefined, $f(x)$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Continuous at $x = c$" },
        { id: "b", text: "Discontinuous at $x = c$" },
        { id: "c", text: "Differentiable at $x = c$" },
        { id: "d", text: "Increasing at $x = c$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Continuity fails if the function is not defined at the point, even if the limit exists (this would be a hole)."
    },
    {
      text: "If $f(x)$ is continuous at $x = 4$, and we know $\\lim_{x \\to 4} f(x) = 7$, then $f(4)$ must be:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "4" },
        { id: "c", text: "7" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "By definition, if a function is continuous, the limit and the function value are identical."
    },
    {
      text: "Which type of function is continuous over its entire domain?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Polynomial functions" },
        { id: "b", text: "Rational functions" },
        { id: "c", text: "Trigonometric functions" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "All basic parent functions (polynomial, rational, trig, radical, exponential, log) are continuous wherever they are defined (on their domain)."
    },
    {
      text: "If a function is continuous on the closed interval $[a, b]$, it must also be continuous on:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The open interval $(a, b)$" },
        { id: "b", text: "The entire real line" },
        { id: "c", text: "All positive numbers" },
        { id: "d", text: "The interval $[a, b)$ only" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Continuity on $[a, b]$ implies continuity at every point within the interval $(a, b)$."
    },
    {
      text: "A piecewise function has $\\lim_{x \\to 2^-} f(x) = 5$ and $\\lim_{x \\to 2^+} f(x) = 5$. For $f(x)$ to be continuous at $x = 2$, what else must be true?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(2)$ must be undefined" },
        { id: "b", text: "$f(2)$ must equal 5" },
        { id: "c", text: "$f(2)$ can be any number" },
        { id: "d", text: "The derivative at $x = 2$ must be 5" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The two-sided limit is 5. To be continuous, $f(2)$ must exist and match that limit."
    },
    {
      text: "Which of the following is a classic example of a function that is NOT continuous at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = x^2$" },
        { id: "b", text: "$f(x) = \\frac{1}{x}$" },
        { id: "c", text: "$f(x) = \\sin x$" },
        { id: "d", text: "$f(x) = e^x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$\\frac{1}{x}$ has an infinite discontinuity at $x = 0$ because it is undefined and has a vertical asymptote."
    },
    {
      text: "True or False: A function can have a limit at $x = c$ but still be discontinuous at $x = c$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Yes, this occurs at a 'removable discontinuity' (a hole)."
    },
    {
      text: "Continuity describes the ________ nature of a function's graph.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "unbroken" },
        { id: "b", text: "steep" },
        { id: "c", text: "positive" },
        { id: "d", text: "symmetric" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Continuity means there are no breaks, jumps, or holes in the curve."
    },
    {
      text: "If $f(x)$ and $g(x)$ are both continuous at $x = c$, which of the following is also guaranteed to be continuous at $x = c$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) + g(x)$" },
        { id: "b", text: "$f(x) \\cdot g(x)$" },
        { id: "c", text: "$f(g(x))$, assuming $f$ is continuous at $g(c)$" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "Continuity is preserved under addition, multiplication, and composition (given the conditions are met)."
    },
    {
      text: "The function $f(x) = |x|$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Continuous everywhere" },
        { id: "b", text: "Discontinuous at $x = 0$" },
        { id: "c", text: "Only continuous for $x > 0$" },
        { id: "d", text: "Continuous except at $x = 0$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The absolute value function has no breaks. At $x = 0$, the limit is $0$ and the function value is $0$."
    },
    {
      text: "If $f(x)$ is continuous on $[1, 5]$, then $\\lim_{x \\to 3} f(x)$ is equal to:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(1)$" },
        { id: "b", text: "$f(5)$" },
        { id: "c", text: "$f(3)$" },
        { id: "d", text: "3" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Continuity on the interval means it is continuous at the point $x = 3$, so limit = value."
    },
    {
      text: "Why is $f(x) = \\frac{x^2 - 1}{x - 1}$ discontinuous at $x = 1$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The limit does not exist" },
        { id: "b", text: "$f(1)$ is undefined" },
        { id: "c", text: "The limit is infinity" },
        { id: "d", text: "It is not discontinuous" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The denominator becomes zero at $x = 1$, making the function undefined. Even though the limit exists (it's 2), the first condition of continuity fails."
    },
    {
      text: "For a function to be continuous from the right at $x = c$, we require:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\lim_{x \\to c^+} f(x) = f(c)$" },
        { id: "b", text: "$\\lim_{x \\to c^-} f(x) = f(c)$" },
        { id: "c", text: "$f(c) > 0$" },
        { id: "d", text: "$c > 0$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Right-continuity means the right-hand limit matches the function value at the point."
    },
    {
      text: "Most elementary functions (like trig and log) are continuous on:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The set of all real numbers" },
        { id: "b", text: "Their respective domains" },
        { id: "c", text: "Only positive intervals" },
        { id: "d", text: "Closed intervals only" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Functions like $\\ln(x)$ or $\\tan(x)$ have discontinuities, but they are continuous at every point where they are actually defined."
    },
    {
      text: "If $f(x)$ has a jump discontinuity at $x = c$, which condition of continuity fails?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(c)$ must exist" },
        { id: "b", text: "$\\lim_{x \\to c} f(x)$ must exist" },
        { id: "c", text: "$f(c) = 0$" },
        { id: "d", text: "None of them" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "In a jump discontinuity, the left and right limits are different, so the two-sided limit does not exist."
    },
    {
      text: "Is every continuous function differentiable?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "No. For example, $f(x) = |x|$ is continuous at $x = 0$ but not differentiable there (it has a sharp corner)."
    },
    {
      text: "Is every differentiable function continuous?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Yes. Differentiability is a stronger property; if a function has a derivative at a point, it must be continuous there."
    },
    {
      text: "The graph of $f(x)$ shows a vertical asymptote at $x = 2$. Is $f(x)$ continuous at $x = 2$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Vertical asymptotes represent infinite discontinuities."
    },
    {
      text: "To determine if $f(x)$ is continuous at $x = c$ using a table, you would check if:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The y-values approach the same number from both sides" },
        { id: "b", text: "That number is equal to the value of $f(c)$" },
        { id: "c", text: "The table contains only integers" },
        { id: "d", text: "Both a and b" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "You need the limit to exist (a) and match the function value (b)."
    },
    {
      text: "If $f(x) = 3x - 1$, is it continuous at $x = 10$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, because it is a polynomial" },
        { id: "b", text: "No, because 10 is too large" },
        { id: "c", text: "Yes, but only if $f(10) = 0$" },
        { id: "d", text: "No, because it is a line" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Linear functions are polynomials, and all polynomials are continuous for all real numbers."
    },
    {
      text: "If a function is continuous on $(a, b)$ and $\\lim_{x \\to a^+} f(x) = f(a)$ and $\\lim_{x \\to b^-} f(x) = f(b)$, we say it is continuous on:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(a, b)$" },
        { id: "b", text: "$[a, b]$" },
        { id: "c", text: "$[a, b)$" },
        { id: "d", text: "$(a, b]$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Continuity on a closed interval requires continuity inside and one-sided continuity at the endpoints."
    },
    {
      text: "Which of the following describes a function that is continuous but has a 'displaced' point?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A continuous function cannot have a displaced point" },
        { id: "b", text: "A jump discontinuity" },
        { id: "c", text: "A removable discontinuity" },
        { id: "d", text: "An infinite discontinuity" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "A displaced point (limit exists but limit $\\neq f(c)$) is by definition a discontinuity."
    },
    {
      text: "Continuity is a ________ property of a function.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "local (at a point)" },
        { id: "b", text: "global (on an interval)" },
        { id: "c", text: "Both a and b" },
        { id: "d", text: "Neither" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "We can discuss continuity at a single point or over a set of points."
    }
  ],
  'calc-1-10': [
    {
      text: "A discontinuity where the limit exists but does not equal the function value is called a:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Jump discontinuity" },
        { id: "b", text: "Infinite discontinuity" },
        { id: "c", text: "Removable discontinuity" },
        { id: "d", text: "Oscillating discontinuity" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "A 'hole' is removable because you could redefine the function at that one point to make it continuous."
    },
    {
      text: "What type of discontinuity does $f(x) = \\frac{1}{x^2}$ have at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Removable" },
        { id: "b", text: "Jump" },
        { id: "c", text: "Infinite" },
        { id: "d", text: "None" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "The function has a vertical asymptote at $x = 0$ where y-values go to infinity."
    },
    {
      text: "A piecewise function where the left-hand limit is 4 and the right-hand limit is 10 has a:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Removable discontinuity" },
        { id: "b", text: "Jump discontinuity" },
        { id: "c", text: "Infinite discontinuity" },
        { id: "d", text: "Point discontinuity" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "When the one-sided limits are finite but different, the graph 'jumps' from one value to another."
    },
    {
      text: "If a factor can be cancelled from the numerator and denominator of a rational function, it indicates a ________ discontinuity.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Jump" },
        { id: "b", text: "Infinite" },
        { id: "c", text: "Removable (Hole)" },
        { id: "d", text: "Continuous" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Cancelled factors (like $x-2$) result in holes in the graph."
    },
    {
      text: "If a factor remains in the denominator after simplification, it indicates a ________ discontinuity.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Removable" },
        { id: "b", text: "Jump" },
        { id: "c", text: "Infinite (Asymptote)" },
        { id: "d", text: "Oscillating" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Remaining factors in the denominator cause the function to approach $\\pm$infinity, creating a vertical asymptote."
    },
    {
      text: "Which of the following functions has a jump discontinuity at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = \\frac{x}{x}$" },
        { id: "b", text: "$f(x) = \\frac{|x|}{x}$" },
        { id: "c", text: "$f(x) = \\frac{1}{x}$" },
        { id: "d", text: "$f(x) = \\sin x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$\\frac{|x|}{x}$ is $-1$ for $x < 0$ and $+1$ for $x > 0$, creating a jump at 0."
    },
    {
      text: "A 'removable' discontinuity means:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The function is not defined there" },
        { id: "b", text: "The limit exists at that point" },
        { id: "c", text: "The graph has a vertical asymptote" },
        { id: "d", text: "The graph has a break" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The key characteristic of a removable discontinuity is that the two sides 'aim' for the same spot."
    },
    {
      text: "What type of discontinuity is found in $f(x) = \\sin(\\frac{1}{x})$ at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Jump" },
        { id: "b", text: "Infinite" },
        { id: "c", text: "Oscillating" },
        { id: "d", text: "Removable" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "The function oscillates infinitely between $-1$ and $1$ as $x \\to 0$, so it never settles on a limit."
    },
    {
      text: "True or False: All rational functions have only removable discontinuities.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Rational functions frequently have infinite discontinuities (vertical asymptotes) as well."
    },
    {
      text: "The function $f(x) = \\frac{1}{x - 3}$ has an infinite discontinuity at:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x = 0$" },
        { id: "b", text: "$x = 3$" },
        { id: "c", text: "$x = -3$" },
        { id: "d", text: "$y = 3$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Setting the denominator to zero gives $x = 3$."
    },
    {
      text: "Which of these is NOT a standard term for a type of discontinuity?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Removable" },
        { id: "b", text: "Step" },
        { id: "c", text: "Jump" },
        { id: "d", text: "Infinite" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "While 'step function' is a thing, the discontinuity itself is called a 'jump discontinuity'."
    },
    {
      text: "If $f(x) = \\frac{x^2 - 16}{x - 4}$, what is the y-value of the hole?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "8" },
        { id: "c", text: "0" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Factor to $\\frac{(x-4)(x+4)}{x-4}$. Simplified version is $x+4$. Limit as $x \\to 4$ is $4+4 = 8$."
    },
    {
      text: "A jump discontinuity occurs when:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "One-sided limits are infinite" },
        { id: "b", text: "One-sided limits exist and are finite but different" },
        { id: "c", text: "The function is undefined" },
        { id: "d", text: "The limit is zero" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "This creates a 'step' or 'jump' in the graph's y-values."
    },
    {
      text: "The graph of the tangent function has what type of discontinuities at $\\pm \\pi/2, \\pm 3\\pi/2$, etc.?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Jump" },
        { id: "b", text: "Removable" },
        { id: "c", text: "Infinite" },
        { id: "d", text: "Continuous" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "The tangent function has vertical asymptotes at these values."
    },
    {
      text: "Can a function have a removable discontinuity and an infinite discontinuity at the same x-value?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "No. Infinite means the limit is $\\pm\\infty$. Removable means the limit exists as a finite real number. They are mutually exclusive."
    },
    {
      text: "If a function is defined as $f(x) = 2$ for $x < 1$ and $f(x) = 2$ for $x > 1$, with $f(1)$ undefined, the discontinuity is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Jump" },
        { id: "b", text: "Infinite" },
        { id: "c", text: "Removable" },
        { id: "d", text: "None" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Both sides approach $2$, so the limit exists. Since $f(1)$ is missing, it's a hole (removable)."
    },
    {
      text: "Which function has an infinite discontinuity at $x = 2$ and a removable discontinuity at $x = -2$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = \\frac{x + 2}{x^2 - 4}$" },
        { id: "b", text: "$f(x) = \\frac{x - 2}{x^2 - 4}$" },
        { id: "c", text: "$f(x) = \\frac{x^2 - 4}{x - 2}$" },
        { id: "d", text: "$f(x) = \\frac{1}{x^2 - 4}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "$f(x) = \\frac{x+2}{(x-2)(x+2)}$. The $(x+2)$ cancels (removable at $-2$). The $(x-2)$ remains in denominator (infinite at $2$)."
    },
    {
      text: "On a graph, a hole is represented by:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A solid dot" },
        { id: "b", text: "An open circle" },
        { id: "c", text: "A dashed line" },
        { id: "d", text: "An arrow" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Standard notation for a missing point is an open circle."
    },
    {
      text: "A function has a jump discontinuity at $x = 0$. What can you say about $\\lim_{x \\to 0} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It is 0" },
        { id: "b", text: "It is infinity" },
        { id: "c", text: "It does not exist" },
        { id: "d", text: "It is equal to $f(0)$" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Since the left and right limits are different, the two-sided limit fails to exist."
    },
    {
      text: "Which of the following is a non-removable discontinuity?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Hole" },
        { id: "b", text: "Jump" },
        { id: "c", text: "Infinite" },
        { id: "d", text: "Both b and c" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "Jump and infinite discontinuities cannot be 'fixed' by changing a single point."
    },
    {
      text: "In the context of rational functions, how do you find the x-coordinate of a hole?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Find where the denominator is zero" },
        { id: "b", text: "Find where BOTH numerator and denominator are zero" },
        { id: "c", text: "Find where only the numerator is zero" },
        { id: "d", text: "Find the y-intercept" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "A $\\frac{0}{0}$ form at $x = c$ usually indicates a removable factor."
    },
    {
      text: "What type of discontinuity is most common in 'piecewise' functions defined with < and >?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Jump" },
        { id: "b", text: "Removable" },
        { id: "c", text: "Infinite" },
        { id: "d", text: "Continuous" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "If the pieces don't meet at the boundary, a jump is created."
    },
    {
      text: "If $\\lim_{x \\to 2^-} f(x) = \\infty$, the function has an ________ discontinuity at $x = 2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Removable" },
        { id: "b", text: "Jump" },
        { id: "c", text: "Infinite" },
        { id: "d", text: "Zero" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "An infinite limit from either side indicates an infinite discontinuity."
    },
    {
      text: "A 'vertical asymptote' is the graphical representation of an:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Infinite discontinuity" },
        { id: "b", text: "Jump discontinuity" },
        { id: "c", text: "Removable discontinuity" },
        { id: "d", text: "Hole" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "These terms describe the same mathematical behavior."
    },
    {
      text: "True or False: If a function is undefined at $x = c$, it MUST have a discontinuity there.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Yes. The first condition of continuity is that $f(c)$ must exist. If it doesn't, the function is discontinuous at that point."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 1.9 and 1.10...');

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
