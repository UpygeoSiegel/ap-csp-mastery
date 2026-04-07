/**
 * Seed script for AP Calculus AB Unit 1: Topics 1.5 and 1.6
 * Run with: node server/seeds/calculus/unit1-topics-5-6.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-1-5': [
    {
      text: "If $\\lim_{x \\to c} f(x) = 4$ and $\\lim_{x \\to c} g(x) = -3$, what is $\\lim_{x \\to c} [f(x) + g(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "7" },
        { id: "b", text: "1" },
        { id: "c", text: "-12" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Using the Sum Property: $\\lim [f(x) + g(x)] = \\lim f(x) + \\lim g(x) = 4 + (-3) = 1$."
    },
    {
      text: "If $\\lim_{x \\to 2} f(x) = 5$, what is $\\lim_{x \\to 2} [3 \\cdot f(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "15" },
        { id: "c", text: "8" },
        { id: "d", text: "2" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Using the Constant Multiple Property: $\\lim [k \\cdot f(x)] = k \\cdot \\lim f(x) = 3 \\cdot 5 = 15$."
    },
    {
      text: "If $\\lim_{x \\to 0} f(x) = 2$ and $\\lim_{x \\to 0} g(x) = 10$, what is $\\lim_{x \\to 0} [f(x) \\cdot g(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "12" },
        { id: "b", text: "20" },
        { id: "c", text: "5" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Using the Product Property: $\\lim [f(x) \\cdot g(x)] = (\\lim f(x)) \\cdot (\\lim g(x)) = 2 \\cdot 10 = 20$."
    },
    {
      text: "If $\\lim_{x \\to 4} f(x) = 16$, what is $\\lim_{x \\to 4} \\sqrt{f(x)}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "16" },
        { id: "b", text: "4" },
        { id: "c", text: "256" },
        { id: "d", text: "8" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Using the Power Property (specifically roots): $\\lim [f(x)^{1/n}] = [\\lim f(x)]^{1/n}$. Here, $\\sqrt{16} = 4$."
    },
    {
      text: "If $\\lim_{x \\to c} f(x) = 0$ and $\\lim_{x \\to c} g(x) = 5$, what is $\\lim_{x \\to c} [f(x) / g(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "5" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Using the Quotient Property: $0 / 5 = 0$. The limit exists as long as the denominator's limit is non-zero."
    },
    {
      text: "If $\\lim_{x \\to 1} f(x) = 3$, what is $\\lim_{x \\to 1} [f(x)]^2$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "6" },
        { id: "c", text: "9" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Using the Power Property: $\\lim [f(x)^n] = [\\lim f(x)]^n = 3^2 = 9$."
    },
    {
      text: "If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then $\\lim_{x \\to a} [f(x) - g(x)]$ is equal to:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$L + M$" },
        { id: "b", text: "$L \\cdot M$" },
        { id: "c", text: "$L - M$" },
        { id: "d", text: "$L / M$" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "This is the Difference Property of limits."
    },
    {
      text: "Under what condition does $\\lim_{x \\to c} [f(x) / g(x)] = [\\lim f(x)] / [\\lim g(x)]$ NOT apply?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "When $\\lim f(x) = 0$" },
        { id: "b", text: "When $\\lim g(x) = 0$" },
        { id: "c", text: "When $f(x)$ is a polynomial" },
        { id: "d", text: "When $c$ is a negative number" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The Quotient Property only applies if the limit of the denominator is not zero."
    },
    {
      text: "If $\\lim_{x \\to 2} f(x) = 7$ and $\\lim_{x \\to 2} g(x) = 2$, find $\\lim_{x \\to 2} [f(x) \\cdot g(x) - 10]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "14" },
        { id: "b", text: "4" },
        { id: "c", text: "24" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\lim [f(x) \\cdot g(x) - 10] = (\\lim f(x) \\cdot \\lim g(x)) - \\lim 10 = (7 \\cdot 2) - 10 = 14 - 10 = 4$."
    },
    {
      text: "Suppose $\\lim_{x \\to 3} f(x) = -1$. What is $\\lim_{x \\to 3} [f(x)]^3$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "-1" },
        { id: "b", text: "1" },
        { id: "c", text: "-3" },
        { id: "d", text: "3" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "$(-1)^3 = -1$."
    },
    {
      text: "If $\\lim_{x \\to c} f(x)$ exists and $k$ is a constant, then $\\lim_{x \\to c} [k]$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$c$" },
        { id: "b", text: "$k$" },
        { id: "c", text: "$f(c)$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The limit of a constant is always the constant itself."
    },
    {
      text: "If $\\lim_{x \\to 5} f(x) = 10$ and $\\lim_{x \\to 5} g(x) = 2$, find $\\lim_{x \\to 5} [f(x) / (2 \\cdot g(x))]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "2.5" },
        { id: "c", text: "10" },
        { id: "d", text: "2" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$10 / (2 \\cdot 2) = 10 / 4 = 2.5$."
    },
    {
      text: "True or False: $\\lim_{x \\to c} [f(x) + g(x)]$ exists ONLY if both $\\lim f(x)$ and $\\lim g(x)$ exist individually.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "While the property requires both to exist, it is possible for the sum to have a limit even if the individual functions do not (e.g., $f(x)=1/x$ and $g(x)=-1/x$ as $x \\to 0$)."
    },
    {
      text: "If $\\lim_{x \\to c} f(x) = 25$, find $\\lim_{x \\to c} [\\sqrt{f(x)} + f(x)/5]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "10" },
        { id: "c", text: "30" },
        { id: "d", text: "25" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\sqrt{25} + 25/5 = 5 + 5 = 10$."
    },
    {
      text: "Limit properties allow us to evaluate limits of complex expressions by:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Breaking them into simpler parts" },
        { id: "b", text: "Ignoring the constants" },
        { id: "c", text: "Only looking at the highest power" },
        { id: "d", text: "Always using a calculator" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The properties of limits are essentially 'divide and conquer' rules for calculus."
    },
    {
      text: "If $\\lim_{x \\to -2} [f(x) + 5] = 12$, what is $\\lim_{x \\to -2} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "12" },
        { id: "b", text: "17" },
        { id: "c", text: "7" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "$\\lim f(x) + 5 = 12$ implies $\\lim f(x) = 12 - 5 = 7$."
    },
    {
      text: "Which property is used here: $\\lim_{x \\to c} [x \\cdot f(x)] = [\\lim x] \\cdot [\\lim f(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Sum Property" },
        { id: "b", text: "Product Property" },
        { id: "c", text: "Constant Multiple Property" },
        { id: "d", text: "Power Property" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The product of two functions ($x$ and $f(x)$) follows the Product Property."
    },
    {
      text: "If $\\lim_{x \\to 3} f(x) = 4$, what is $\\lim_{x \\to 3} [1 / f(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "3" },
        { id: "c", text: "1/4" },
        { id: "d", text: "0.2" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Using the Quotient Property with 1 in the numerator."
    },
    {
      text: "If $\\lim_{x \\to c} f(x) = L$, what is $\\lim_{x \\to c} [f(x) - L]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$L$" },
        { id: "b", text: "0" },
        { id: "c", text: "$c$" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$L - L = 0$. This confirms that $f(x)$ is getting arbitrarily close to its limit."
    },
    {
      text: "If $\\lim_{x \\to 0} g(x) = -1$, find $\\lim_{x \\to 0} [g(x) + 2] / [g(x)]^2$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "-1" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$(-1 + 2) / (-1)^2 = 1 / 1 = 1$."
    },
    {
      text: "Can we use limit properties if one of the individual limits is infinity?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, always" },
        { id: "b", text: "No, the properties only apply to finite real number limits" },
        { id: "c", text: "Only for addition" },
        { id: "d", text: "Only if the other limit is zero" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Formal limit properties (Sum, Product, etc.) are defined for cases where the limits exist as finite real numbers."
    },
    {
      text: "If $f(x) = x$, then $\\lim_{x \\to c} f(x) = c$. This is known as the:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Constant rule" },
        { id: "b", text: "Identity rule" },
        { id: "c", text: "Power rule" },
        { id: "d", text: "Zero rule" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The limit of $x$ as $x$ approaches $c$ is $c$."
    },
    {
      text: "If $\\lim_{x \\to c} f(x) = 8$, what is $\\lim_{x \\to c} [f(x)]^{2/3}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "2" },
        { id: "c", text: "16" },
        { id: "d", text: "8" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$."
    },
    {
      text: "If $\\lim_{x \\to 1} f(x) = 2$ and $\\lim_{x \\to 1} g(x) = 3$, what is $\\lim_{x \\to 1} [3 \\cdot f(x) - 2 \\cdot g(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "12" },
        { id: "c", text: "6" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$3(2) - 2(3) = 6 - 6 = 0$."
    },
    {
      text: "Which property allows us to say $\\lim [f(x)]^n = [\\lim f(x)]^n$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Product Property" },
        { id: "b", text: "Power Property" },
        { id: "c", text: "Quotient Property" },
        { id: "d", text: "Scalar Property" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "This is the Power Property of limits."
    }
  ],
  'calc-1-6': [
    {
      text: "Evaluate $\\lim_{x \\to 2} [\\frac{x^2 - 4}{x - 2}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "2" },
        { id: "c", text: "4" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Factor the numerator: $(x-2)(x+2)$. Cancel $(x-2)$ to get $\\lim (x+2)$. Substitute $x=2$ to get 4."
    },
    {
      text: "Evaluate $\\lim_{x \\to 3} [\\frac{x^2 - 9}{x^2 - 2x - 3}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "3/2" },
        { id: "c", text: "6/4" },
        { id: "d", text: "1.5" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Factor both: $[(x-3)(x+3)] / [(x-3)(x+1)]$. Cancel $(x-3)$ to get $(x+3)/(x+1)$. Substitute $x=3$: 6/4 = 3/2."
    },
    {
      text: "When evaluating a limit results in $0/0$, this is called:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "An undefined result" },
        { id: "b", text: "An indeterminate form" },
        { id: "c", text: "Zero" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$0/0$ is indeterminate because it doesn't tell us the value of the limit; further algebraic manipulation is required."
    },
    {
      text: "Evaluate $\\lim_{x \\to 0} [\\frac{\\sqrt{x + 1} - 1}{x}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "1/2" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["c"],
      difficulty: "hard",
      explanation: "Multiply numerator and denominator by the conjugate $\\sqrt{x+1}+1$. Numerator becomes $(x+1)-1 = x$. Cancel $x$ to get $1/(\\sqrt{x+1}+1)$. Substitute $x=0$: 1/2."
    },
    {
      text: "Evaluate $\\lim_{x \\to 1} [\\frac{x - 1}{x^2 + 2x - 3}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1/4" },
        { id: "b", text: "0" },
        { id: "c", text: "1/2" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Factor denominator: $(x-1)(x+3)$. Cancel $(x-1)$ to get $1/(x+3)$. Substitute $x=1$: 1/4."
    },
    {
      text: "To evaluate $\\lim_{x \\to 4} [\\frac{\\sqrt{x} - 2}{x - 4}]$, which technique is most useful?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Factoring the denominator as a difference of squares" },
        { id: "b", text: "Multiplying by the conjugate of the numerator" },
        { id: "c", text: "Both a and b" },
        { id: "d", text: "Long division" }
      ],
      correctAnswers: ["c"],
      difficulty: "hard",
      explanation: "You can either rationalize the numerator OR view $x-4$ as $(\\sqrt{x}-2)(\\sqrt{x}+2)$ and factor the denominator."
    },
    {
      text: "Evaluate $\\lim_{x \\to 5} [\\frac{x^2 - 25}{x - 5}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "10" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Factor: $(x-5)(x+5)$. Cancel $(x-5)$ to get $x+5$. Substitute $x=5$: 10."
    },
    {
      text: "Evaluate $\\lim_{x \\to 0} [\\frac{1 / (x + 2) - 1 / 2}{x}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1/4" },
        { id: "b", text: "-1/4" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Simplify the complex fraction in the numerator: $[2 - (x+2)] / [2(x+2)] = -x / [2(x+2)]$. Divide by $x$ to get $-1 / [2(x+2)]$. Substitute $x=0$: -1/4."
    },
    {
      text: "If $\\lim_{x \\to c} [f(x) / g(x)]$ results in $5 / 0$, what is the conclusion?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The limit is 0" },
        { id: "b", text: "The limit is 5" },
        { id: "c", text: "The limit does not exist (infinite behavior)" },
        { id: "d", text: "Keep factoring" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Non-zero / zero indicates a vertical asymptote, meaning the limit does not exist (it's infinite)."
    },
    {
      text: "Evaluate $\\lim_{x \\to -1} [\\frac{x^2 - 1}{x + 1}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "-2" },
        { id: "c", text: "2" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Factor numerator: $(x+1)(x-1)$. Cancel $(x+1)$ to get $x-1$. Substitute $x=-1$: -2."
    },
    {
      text: "What is the conjugate of $(\\sqrt{x} + 3)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x + 9$" },
        { id: "b", text: "$\\sqrt{x} - 3$" },
        { id: "c", text: "$-(\\sqrt{x} + 3)$" },
        { id: "d", text: "$1 / (\\sqrt{x} + 3)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The conjugate of $(a + b)$ is $(a - b)$."
    },
    {
      text: "Evaluate $\\lim_{x \\to 2} [\\frac{x^3 - 8}{x - 2}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "8" },
        { id: "c", text: "12" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["c"],
      difficulty: "hard",
      explanation: "Factor the sum/difference of cubes: $x^3 - 8 = (x-2)(x^2 + 2x + 4)$. Cancel $(x-2)$. Substitute $x=2$: $4+4+4 = 12$."
    },
    {
      text: "Evaluate $\\lim_{x \\to 0} [x / (x^2 + x)]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "1" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Factor the denominator: $x(x+1)$. Cancel $x$ to get $1/(x+1)$. Substitute $x=0$: 1."
    },
    {
      text: "Which of the following is an indeterminate form?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0 / 1" },
        { id: "b", text: "1 / 0" },
        { id: "c", text: "0 / 0" },
        { id: "d", text: "Infinity / 1" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Only $0/0$ (and $\\infty/\\infty$) are considered indeterminate forms in basic limit evaluation."
    },
    {
      text: "Evaluate $\\lim_{x \\to 9} [\\frac{x - 9}{\\sqrt{x} - 3}]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "6" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Factor numerator as a difference of squares: $(\\sqrt{x}-3)(\\sqrt{x}+3)$. Cancel $(\\sqrt{x}-3)$ to get $\\sqrt{x}+3$. Substitute $x=9$: 3+3 = 6."
    },
    {
      text: "Evaluate $\\lim_{x \\to 4} [ \\frac{x^2 - 5x + 4}{x^2 - 3x - 4} ]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "3/5" },
        { id: "c", text: "1" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Factor both: $[(x-4)(x-1)] / [(x-4)(x+1)]$. Cancel $(x-4)$ to get $(x-1)/(x+1)$. Substitute $x=4$: 3/5."
    },
    {
      text: "Rationalizing the numerator is a strategy used when the limit contains:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A polynomial" },
        { id: "b", text: "A square root" },
        { id: "c", text: "An absolute value" },
        { id: "d", text: "A trigonometric function" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Conjugates are used to clear square roots from a part of the fraction to reveal common factors."
    },
    {
      text: "Evaluate $\\lim_{x \\to 0} [ \\frac{\\sqrt{x + 4} - 2}{x} ].",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1/2" },
        { id: "b", text: "1/4" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Multiply by conjugate: $[(x+4)-4] / [x(\\sqrt{x+4}+2)] = x / [x(\\sqrt{x+4}+2)]$. Cancel $x$ to get $1/(\\sqrt{x+4}+2)$. Substitute $x=0$: $1/(2+2) = 1/4$."
    },
    {
      text: "If direct substitution into $\\lim_{x \\to c} [f(x)]$ yields a non-zero number, you are:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Finished; that is the limit" },
        { id: "b", text: "Required to factor" },
        { id: "c", text: "Required to rationalize" },
        { id: "d", text: "Wrong" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "If the function is defined and continuous at $c$, direct substitution is the correct and final step."
    },
    {
      text: "Evaluate $\\lim_{x \\to 1} [ \\frac{x^2 + x - 2}{x^2 - 1} ].",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "3/2" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Factor: $[(x+2)(x-1)] / [(x+1)(x-1)]$. Cancel $(x-1)$ to get $(x+2)/(x+1)$. Substitute $x=1$: 3/2."
    },
    {
      text: "Evaluate $\\lim_{x \\to 2} [ \\frac{x^2 - 4}{x^2 + 4} ].",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "4" },
        { id: "c", text: "DNE" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Direct substitution: $(4-4)/(4+4) = 0/8 = 0$. Manipulation is only needed for $0/0$."
    },
    {
      text: "What happens to the factor $(x - c)$ when you resolve a $0/0$ limit algebraically?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It becomes zero" },
        { id: "b", text: "It is cancelled from the numerator and denominator" },
        { id: "c", text: "It is squared" },
        { id: "d", text: "It moves to the exponent" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The $0/0$ form is usually caused by a hidden factor of $(x-c)$ in both parts of the fraction."
    },
    {
      text: "Evaluate $\\lim_{x \\to 3} [ \\frac{1/x - 1/3}{x - 3} ].",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1/9" },
        { id: "b", text: "-1/9" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Numerator: $(3-x)/(3x)$. Rewrite as $-(x-3)/(3x)$. Divide by $(x-3)$ to get $-1/(3x)$. Substitute $x=3$: -1/9."
    },
    {
      text: "Evaluate $\\lim_{x \\to -3} [ \\frac{x^2 + 5x + 6}{x^2 - 9} ].",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1/6" },
        { id: "b", text: "0" },
        { id: "c", text: "-1/6" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Factor: $[(x+3)(x+2)] / [(x+3)(x-3)]$. Cancel $(x+3)$ to get $(x+2)/(x-3)$. Substitute $x=-3$: $(-1)/(-6) = 1/6$."
    },
    {
      text: "Evaluate $\\lim_{x \\to 0} [ \\frac{x^2 + 2x}{x} ].",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "2" },
        { id: "c", text: "DNE" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Factor out $x$: $x(x+2)/x$. Cancel $x$ to get $x+2$. Substitute $x=0$: 2."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 1.5 and 1.6...');

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
