/**
 * Seed script for AP Calculus AB Unit 1: Topics 1.7 and 1.8
 * Run with: node server/seeds/calculus/unit1-topics-7-8.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-1-7': [
    {
      text: "When evaluating $\\lim_{x \\to c} f(x)$, what is the FIRST procedure you should always attempt?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Factoring" },
        { id: "b", text: "Rationalizing" },
        { id: "c", text: "Direct substitution" },
        { id: "d", text: "L'Hôpital's Rule" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Direct substitution is the fastest method and works for all functions continuous at $c$. Only if it yields an indeterminate form like $\\frac{0}{0}$ do you move to other procedures."
    },
    {
      text: "If direct substitution into a rational function yields $\\frac{0}{5}$, the limit is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "5" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Indeterminate" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$0$ divided by any non-zero number is $0$. This is a determinate form."
    },
    {
      text: "If direct substitution into a rational function yields $\\frac{5}{0}$, the limit:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Is 0" },
        { id: "b", text: "Is 5" },
        { id: "c", text: "Does not exist (infinite behavior)" },
        { id: "d", text: "Requires more factoring" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Non-zero over zero indicates a vertical asymptote. The limit is infinite and therefore does not exist as a real number."
    },
    {
      text: "Which procedure is most appropriate for $\\lim_{x \\to 1} \\frac{x^2 + 2x - 3}{x - 1}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Direct substitution" },
        { id: "b", text: "Factoring and cancelling" },
        { id: "c", text: "Rationalizing the numerator" },
        { id: "d", text: "Squeeze Theorem" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Substitution gives $\\frac{0}{0}$. Since the numerator is a quadratic, factoring is the standard next step."
    },
    {
      text: "Which procedure is most appropriate for $\\lim_{x \\to 0} \\frac{\\sqrt{x + 9} - 3}{x}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Factoring" },
        { id: "b", text: "Rationalizing with a conjugate" },
        { id: "c", text: "Simplifying complex fractions" },
        { id: "d", text: "Direct substitution" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Substitution gives $\\frac{0}{0}$. The presence of a square root suggests using the conjugate to rationalize."
    },
    {
      text: "If $\\lim_{x \\to c^-} f(x) = 2$ and $\\lim_{x \\to c^+} f(x) = 3$, which 'procedure' determines the two-sided limit?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Averaging the two values" },
        { id: "b", text: "Choosing the larger value" },
        { id: "c", text: "Checking for equality of one-sided limits" },
        { id: "d", text: "Direct substitution into the original function" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "A two-sided limit exists if and only if the left and right limits are equal. Since $2 \\neq 3$, the limit DNE."
    },
    {
      text: "Which procedure is best for evaluating $\\lim_{x \\to 0} [x^2 \\sin(\\frac{1}{x})]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Factoring" },
        { id: "b", text: "Squeeze Theorem" },
        { id: "c", text: "Direct substitution" },
        { id: "d", text: "Rationalizing" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Substitution fails because $\\sin(\\frac{1}{x})$ oscillates. Since $x^2$ 'squeezes' the oscillation toward zero, the Squeeze Theorem is appropriate."
    },
    {
      text: "For a piecewise function $f(x)$ that changes at $x = 2$, what procedure is required to find $\\lim_{x \\to 2} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Evaluate $f(2)$" },
        { id: "b", text: "Evaluate one-sided limits from both sides" },
        { id: "c", text: "Ignore the point $x = 2$" },
        { id: "d", text: "Factoring only" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "You must check the limit using the 'left' piece and the 'right' piece to see if they approach the same value."
    },
    {
      text: "If direct substitution results in $\\frac{0}{0}$, does this guarantee that the limit exists?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, it just means you haven't found it yet" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\frac{0}{0}$ is indeterminate. The limit might be a finite number, it might be infinite, or it might not exist due to oscillation."
    },
    {
      text: "Which technique is most efficient for $\\lim_{x \\to 3} \\frac{\\frac{1}{x} - \\frac{1}{3}}{x - 3}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Factoring a difference of squares" },
        { id: "b", text: "Multiplying by a common denominator to simplify the complex fraction" },
        { id: "c", text: "Squeeze Theorem" },
        { id: "d", text: "Direct substitution" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Complex fractions are best handled by clearing the denominators within the numerator."
    },
    {
      text: "When selecting a procedure, if you see an absolute value like $|x - 2|$ in a limit as $x \\to 2$, you should:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Just treat it like $(x - 2)$" },
        { id: "b", text: "Analyze the limit from the left and right separately" },
        { id: "c", text: "Square both sides" },
        { id: "d", text: "Always say the limit is 0" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Absolute values change sign depending on the side of the approach, often leading to jump discontinuities."
    },
    {
      text: "Is factoring useful if direct substitution gives $\\frac{4}{4}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, to be safe" },
        { id: "b", text: "No, the limit is already determined to be $1$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "If substitution gives a determinate value, you are done. Extra work is unnecessary."
    },
    {
      text: "What is the procedure for $\\lim_{x \\to 0} \\frac{\\sin x}{x}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Factor the x" },
        { id: "b", text: "Recognize it as a special trig limit" },
        { id: "c", text: "Cancel the 'sin'" },
        { id: "d", text: "Use L'Hôpital's Rule (if already learned)" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "This is a foundational limit in calculus that students are expected to memorize or derive using the Squeeze Theorem."
    },
    {
      text: "If direct substitution into a polynomial $P(x)$ gives $P(c) = 10$, the limit as $x \\to c$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "10" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Polynomials are continuous everywhere, so the limit always equals the function value."
    },
    {
      text: "Which procedure is used to evaluate $\\lim_{x \\to \\pi/2} \\tan x$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Factoring" },
        { id: "b", text: "Graphical analysis or recognizing the vertical asymptote" },
        { id: "c", text: "Squeeze Theorem" },
        { id: "d", text: "Direct substitution" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\tan(\\pi/2)$ is undefined and involves a vertical asymptote where the left and right behaviors differ ($+\\infty$ vs $-\\infty$), so the limit DNE."
    },
    {
      text: "If a limit involves $(x - c)$ in the denominator and direct substitution gives non-zero / zero, what should you do?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Keep factoring" },
        { id: "b", text: "Identify the type of infinite behavior (asymptote)" },
        { id: "c", text: "The limit is 0" },
        { id: "d", text: "The limit is infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Non-zero/zero is NOT indeterminate; it is a signal of an asymptote. You check the signs from both sides to see if it is $+\\infty$, $-\\infty$, or DNE."
    },
    {
      text: "When can you NOT use the 'factoring' procedure?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "When there are trig functions" },
        { id: "b", text: "When the numerator and denominator are not polynomials" },
        { id: "c", text: "When the limit is $\\frac{0}{0}$" },
        { id: "d", text: "When $x$ approaches infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Factoring is a technique for polynomials. Other functions (roots, trig, exponentials) require different strategies."
    },
    {
      text: "What procedure helps with $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Factoring" },
        { id: "b", text: "Special trig limit recognition" },
        { id: "c", text: "Rationalizing" },
        { id: "d", text: "Direct substitution" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Like $\\frac{\\sin x}{x}$, this is a standard special trig limit (value is $0$)."
    },
    {
      text: "To evaluate $\\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x^2 - 16}$, you would:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Factor the denominator AND rationalize the numerator" },
        { id: "b", text: "Only factor the denominator" },
        { id: "c", text: "Only rationalize the numerator" },
        { id: "d", text: "Either a or c would work" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "You need to reveal the common factor $(x-4)$. Rationalizing the numerator makes it $(x-4)$. Factoring the denominator makes it $(x-4)(x+4)$. Both reveal the source of the $\\frac{0}{0}$."
    },
    {
      text: "When selecting procedures, 'numerical estimation' (tables) should be used:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "As a primary proof" },
        { id: "b", text: "When algebraic methods are unavailable or to verify an answer" },
        { id: "c", text: "Never" },
        { id: "d", text: "On every single problem" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Tables are great for building intuition or handling 'ugly' functions, but algebraic methods are preferred for precision."
    },
    {
      text: "Identify the best procedure for: $\\lim_{x \\to 2} \\frac{x^2 - x - 2}{x^2 - 4}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Factoring" },
        { id: "b", text: "Rationalizing" },
        { id: "c", text: "Squeeze Theorem" },
        { id: "d", text: "Direct substitution" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Both are factorable polynomials that yield $\\frac{0}{0}$."
    },
    {
      text: "True or False: If a limit is $\\frac{0}{0}$, you can conclude it is DNE.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$\\frac{0}{0}$ means 'I don't know yet'. The limit often exists as a finite number."
    },
    {
      text: "Procedure for $\\lim_{x \\to 0} \\frac{x}{\\sin x}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It is 0" },
        { id: "b", text: "It is 1 (reciprocal of a special limit)" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Since $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$, its reciprocal also approaches $1/1 = 1$."
    },
    {
      text: "Which of the following is NOT an algebraic procedure for limits?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Rationalizing the denominator" },
        { id: "b", text: "Expanding a binomial" },
        { id: "c", text: "Graphing the function" },
        { id: "d", text: "Factoring out a GCF" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Graphing is a visual/geometrical method, not an algebraic one."
    },
    {
      text: "When selecting a procedure, if substitution gives $\\frac{0}{-2}$, the limit is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "DNE" },
        { id: "c", text: "Infinity" },
        { id: "d", text: "Indeterminate" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$\\frac{0}{-2} = 0$. You are finished."
    }
  ],
  'calc-1-8': [
    {
      text: "The Squeeze Theorem is also commonly known as the:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Tower Theorem" },
        { id: "b", text: "Sandwich Theorem" },
        { id: "c", text: "Bridge Theorem" },
        { id: "d", text: "Mean Value Theorem" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "It's called the Sandwich Theorem because the function of interest is 'sandwiched' between two others."
    },
    {
      text: "If $g(x) \\leq f(x) \\leq h(x)$ for all $x$ near $c$, and $\\lim_{x \\to c} g(x) = L$ and $\\lim_{x \\to c} h(x) = L$, what is $\\lim_{x \\to c} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "L" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Cannot be determined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "This is the definition of the Squeeze Theorem. If the upper and lower bounds approach $L$, the middle function must also approach $L$."
    },
    {
      text: "Which condition is NOT required for the Squeeze Theorem to apply?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The inequality must hold for all $x$ near $c$" },
        { id: "b", text: "The upper and lower limits must be equal" },
        { id: "c", text: "The middle function $f(x)$ must be continuous at $c$" },
        { id: "d", text: "The limits of $g(x)$ and $h(x)$ must exist and be finite" }
      ],
      correctAnswers: ["c"],
      difficulty: "hard",
      explanation: "The Squeeze Theorem is often used to *find* a limit where the function is NOT continuous (or defined) at $c$."
    },
    {
      text: "To find $\\lim_{x \\to 0} [x^2 \\cos(\\frac{1}{x})]$, which functions are the best 'squeezers'?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$-1$ and $1$" },
        { id: "b", text: "$-x^2$ and $x^2$" },
        { id: "c", text: "$-x$ and $x$" },
        { id: "d", text: "$0$ and $x^2$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Since $-1 \\leq \\cos(\\frac{1}{x}) \\leq 1$, multiplying by $x^2$ gives $-x^2 \\leq x^2 \\cos(\\frac{1}{x}) \\leq x^2$."
    },
    {
      text: "Evaluate $\\lim_{x \\to 0} [x^4 \\sin(\\frac{1}{x^4})]$ using the Squeeze Theorem.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "0" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Because $-x^4 \\leq x^4 \\sin(\\frac{1}{x^4}) \\leq x^4$, and both bounds approach $0$ as $x \\to 0$, the limit is $0$."
    },
    {
      text: "If $2x - 1 \\leq f(x) \\leq x^2$ for all $x$, find $\\lim_{x \\to 1} f(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "2" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Lower bound: $2(1)-1 = 1$. Upper bound: $(1)^2 = 1$. Since they are equal, the limit is $1$."
    },
    {
      text: "Why is the Squeeze Theorem used for $\\lim_{x \\to 0} [x \\sin(\\frac{1}{x})]$ instead of the Product Property?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Product property only works for polynomials" },
        { id: "b", text: "$\\lim_{x \\to 0} \\sin(\\frac{1}{x})$ does not exist (it oscillates)" },
        { id: "c", text: "The sine function is too large" },
        { id: "d", text: "It's just a tradition" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The Product Property requires BOTH individual limits to exist. Since the limit of sine doesn't exist here, we need the Squeeze Theorem."
    },
    {
      text: "If $f(x)$ is squeezed by $g(x) = 5$ and $h(x) = 5 + x^2$, find $\\lim_{x \\to 0} f(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "5" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Both $g(0)=5$ and $h(0)=5$, so $f(x)$ must approach $5$."
    },
    {
      text: "True or False: The Squeeze Theorem can be used to evaluate limits as $x$ approaches infinity.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "As long as the bounds exist and approach the same value as $x \\to \\infty$, the theorem holds."
    },
    {
      text: "Evaluate $\\lim_{x \\to \\infty} \\frac{\\sin x}{x}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "0" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Since $-1 \\leq \\sin x \\leq 1$, we have $-\\frac{1}{x} \\leq \\frac{\\sin x}{x} \\leq \\frac{1}{x}$. As $x \\to \\infty$, both $\\pm \\frac{1}{x}$ approach $0$."
    },
    {
      text: "If $f(x)$ satisfies $1 - x^2 \\leq f(x) \\leq \\cos x$ for all $x$ in $(-1, 1)$, what is $\\lim_{x \\to 0} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "DNE" },
        { id: "d", text: "-1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Lower: $1 - 0 = 1$. Upper: $\\cos(0) = 1$. The limit is $1$."
    },
    {
      text: "The Squeeze Theorem is particularly powerful for functions involving:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Linear terms only" },
        { id: "b", text: "Oscillating trig functions (sin, cos)" },
        { id: "c", text: "Vertical asymptotes" },
        { id: "d", text: "Logarithms" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Trig functions are bounded (-1 to 1), which makes them perfect candidates for sandwiching."
    },
    {
      text: "If $g(x) \\leq f(x) \\leq h(x)$ and $\\lim g(x) = 2$ and $\\lim h(x) = 3$, what can we say about $\\lim f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It is 2.5" },
        { id: "b", text: "It does not exist" },
        { id: "c", text: "It is between 2 and 3 (if it exists)" },
        { id: "d", text: "It must be 2" }
      ],
      correctAnswers: ["c"],
      difficulty: "hard",
      explanation: "The Squeeze Theorem only gives a specific value if the bounds *agree*. If they don't, the limit is simply constrained but not determined."
    },
    {
      text: "Evaluate $\\lim_{x \\to 0} [x^2 \\sin(\\frac{1}{x^2})]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The $x^2$ term goes to zero, dampening the oscillation of $\\sin(\\frac{1}{x^2})$. $-x^2 \\leq f(x) \\leq x^2$ implies the limit is 0."
    },
    {
      text: "What are the squeezing functions for $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ in the classic geometric proof?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "-1 and 1" },
        { id: "b", text: "$\\cos x$ and $1$" },
        { id: "c", text: "$x$ and $x^2$" },
        { id: "d", text: "0 and 1" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "The standard proof uses areas of triangles and sectors to show $\\cos x < \\frac{\\sin x}{x} < 1$. As $x \\to 0$, $\\cos x \\to 1$."
    },
    {
      text: "If $10 - |x| \\leq f(x) \\leq 10 + |x|$, find $\\lim_{x \\to 0} f(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "10" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "As $x \\to 0$, $|x| \\to 0$. Both bounds approach $10$."
    },
    {
      text: "Does the Squeeze Theorem require f(c) to be defined?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Like all limits, the Squeeze Theorem only cares about the behavior *near* $c$, not at $c$ itself."
    },
    {
      text: "Squeeze Theorem: If $\\lim g(x) = L$ and $\\lim h(x) = L$, we say the limit of the middle function is ________.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Trapped" },
        { id: "b", text: "Forced to be L" },
        { id: "c", text: "Undefined" },
        { id: "d", text: "Infinite" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The theorem rigorously proves the middle function has no choice but to approach L."
    },
    {
      text: "Evaluate $\\lim_{x \\to 0} [e^{-1/x^2} \\cos(\\frac{1}{x})]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "0" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Since $-1 \\leq \\cos(\\frac{1}{x}) \\leq 1$, then $-e^{-1/x^2} \\leq f(x) \\leq e^{-1/x^2}$. As $x \\to 0$, $-\\frac{1}{x^2} \\to -\\infty$, and $e^{-\\infty} \\to 0$. Limit is $0$."
    },
    {
      text: "If $f(x) = \\frac{\\sin x}{x}$, we know $-\\frac{1}{x} \\leq f(x) \\leq \\frac{1}{x}$ for $x > 0$. Does this squeeze the limit as $x \\to 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, to 0" },
        { id: "b", text: "No, because the bounds approach $\\pm \\infty$ as $x \\to 0$" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "The Squeeze Theorem only works if the bounds approach a *finite, identical* limit. $\\pm \\infty$ does not qualify."
    },
    {
      text: "Find $\\lim_{x \\to 0} f(x)$ if $4 - x^2 \\leq f(x) \\leq 4 + x^2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "4" },
        { id: "c", text: "DNE" },
        { id: "d", text: "8" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Both $4 - 0$ and $4 + 0$ are $4$."
    },
    {
      text: "Which of these functions is NOT bounded and thus harder to use in Squeeze Theorem?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\sin x$" },
        { id: "b", text: "$\\cos x$" },
        { id: "c", text: "$\\tan x$" },
        { id: "d", text: "$\\arctan x$" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "$\\tan x$ goes to $\\pm \\infty$ near its asymptotes, whereas sin and cos are always between -1 and 1."
    },
    {
      text: "The Squeeze Theorem is a valid way to find a limit even if the function is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Highly erratic and non-algebraic" },
        { id: "b", text: "Only defined for positive numbers" },
        { id: "c", text: "Constant" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "easy",
      explanation: "The theorem doesn't care about the 'nature' of the middle function, only that it stays between the two boundaries."
    },
    {
      text: "Evaluate $\\lim_{x \\to 0} [x^2 \\sin(500x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "500" },
        { id: "b", text: "0" },
        { id: "c", text: "DNE" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The high frequency (500x) doesn't matter; the sine is still bounded by $\\pm 1$, and the $x^2$ term forces the limit to $0$."
    },
    {
      text: "If $\\lim_{x \\to c} |f(x)| = 0$, then $\\lim_{x \\to c} f(x) = 0$. This is a corollary of:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The Power Rule" },
        { id: "b", text: "The Squeeze Theorem" },
        { id: "c", text: "The Quotient Rule" },
        { id: "d", text: "The Chain Rule" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "You can squeeze $f(x)$ between $-|f(x)|$ and $|f(x)|$. If both approach $0$, then $f(x)$ must approach $0$."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 1.7 and 1.8...');

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
