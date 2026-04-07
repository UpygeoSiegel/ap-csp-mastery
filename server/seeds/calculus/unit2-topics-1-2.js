/**
 * Seed script for AP Calculus AB Unit 2: Topics 2.1 and 2.2
 * Run with: node server/seeds/calculus/unit2-topics-1-2.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-2-1': [
    {
      text: "The average rate of change of a function $f(x)$ over the interval $[a, b]$ is represented by the slope of the:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Tangent line" },
        { id: "b", text: "Secant line" },
        { id: "c", text: "Normal line" },
        { id: "d", text: "Horizontal line" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "A secant line connects two points on a curve, representing the average rate of change between them."
    },
    {
      text: "The instantaneous rate of change of $f(x)$ at $x = c$ is represented by the slope of the:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Secant line" },
        { id: "b", text: "Tangent line" },
        { id: "c", text: "Vertical line" },
        { id: "d", text: "Asymptote" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The tangent line touches the curve at a single point and its slope gives the rate of change at that exact moment."
    },
    {
      text: "Find the average rate of change of $f(x) = x^2$ on the interval $[1, 3]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "4" },
        { id: "c", text: "8" },
        { id: "d", text: "1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Average Rate of Change = $\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = \\frac{8}{2} = 4$."
    },
    {
      text: "If a car travels 150 miles in 3 hours, the value 50 mph represents the car's:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Instantaneous velocity" },
        { id: "b", text: "Average velocity" },
        { id: "c", text: "Acceleration" },
        { id: "d", text: "Position" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Average velocity is the total displacement divided by total time."
    },
    {
      text: "As the interval $[a, x]$ gets smaller ($x$ approaches $a$), the slope of the secant line approaches:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The y-intercept" },
        { id: "b", text: "The slope of the tangent line at $a$" },
        { id: "c", text: "Zero" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "This is the conceptual foundation of the derivative: the limit of average rates is the instantaneous rate."
    },
    {
      text: "Find the average rate of change of $f(x) = \\sin(x)$ on the interval $[0, \\pi/2]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "$2 / \\pi$" },
        { id: "c", text: "$\\pi / 2$" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\frac{\\sin(\\pi/2) - \\sin(0)}{\\pi/2 - 0} = \\frac{1 - 0}{\\pi/2} = 2/\\pi$."
    },
    {
      text: "The expression $\\frac{f(a+h) - f(a)}{h}$ represents the slope of a secant line passing through which two points?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(a, f(a))$ and $(h, f(h))$" },
        { id: "b", text: "$(a, f(a))$ and $(a+h, f(a+h))$" },
        { id: "c", text: "$(0, 0)$ and $(a, f(a))$" },
        { id: "d", text: "$(a, 0)$ and $(a+h, 0)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "This is the 'difference quotient', calculating change in $y$ over change in $x$ (which is $h$)."
    },
    {
      text: "If the average rate of change of a function is constant for all intervals, the function must be:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Quadratic" },
        { id: "b", text: "Linear" },
        { id: "c", text: "Exponential" },
        { id: "d", text: "Trigonometric" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Only lines have a constant slope (rate of change) everywhere."
    },
    {
      text: "A diver jumps from a platform. Their height is $h(t)$. To find the velocity at exactly $1$ second after the jump, you need:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Average rate of change on $[0, 1]$" },
        { id: "b", text: "Instantaneous rate of change at $t = 1$" },
        { id: "c", text: "The total time of the dive" },
        { id: "d", text: "The height at $t = 0$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "'Exactly at' implies an instantaneous value, which is the derivative."
    },
    {
      text: "Given the points $(2, 5)$ and $(2.1, 5.41)$ on the graph of $f(x)$, what is the best estimate for $f'(2)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0.41" },
        { id: "b", text: "4.1" },
        { id: "c", text: "5" },
        { id: "d", text: "2" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Estimate using the secant slope: $\\frac{5.41 - 5}{2.1 - 2} = 0.41 / 0.1 = 4.1$."
    },
    {
      text: "True or False: The instantaneous rate of change can be negative even if the function values are all positive.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Yes. If a function is decreasing (slope is negative), its rate of change is negative, regardless of its $y$-values."
    },
    {
      text: "If $f(x) = 10$, the instantaneous rate of change at any point $x = c$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "0" },
        { id: "c", text: "$c$" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Constant functions do not change, so their rate of change is 0."
    },
    {
      text: "The units of a rate of change are always:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Units of output" },
        { id: "b", text: "Units of input" },
        { id: "c", text: "(Units of output) / (Units of input)" },
        { id: "d", text: "Unitless" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Rate of change is 'change in $y$ per change in $x$' (e.g., meters per second)."
    },
    {
      text: "Which of the following is an appropriate interval to use when estimating the instantaneous rate of change at $x = 5$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$[0, 10]$" },
        { id: "b", text: "$[4.99, 5.01]$" },
        { id: "c", text: "$[5, 100]$" },
        { id: "d", text: "$[-5, 5]$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Smaller intervals provide more accurate estimates of instantaneous rates."
    },
    {
      text: "If the graph of $f(x)$ is a horizontal line, the average rate of change on any interval is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The height of the line" },
        { id: "b", text: "0" },
        { id: "c", text: "1" },
        { id: "d", text: "Infinite" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "No change in $y$ means the slope is 0."
    },
    {
      text: "Find the average rate of change of $f(x) = \\frac{1}{x}$ on $[1, 2]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0.5" },
        { id: "b", text: "-0.5" },
        { id: "c", text: "1" },
        { id: "d", text: "-1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\frac{f(2) - f(1)}{2 - 1} = \\frac{1/2 - 1}{1} = -1/2 = -0.5$."
    },
    {
      text: "At a local maximum of a smooth curve, the instantaneous rate of change is typically:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Positive" },
        { id: "b", text: "Negative" },
        { id: "c", text: "0" },
        { id: "d", text: "Infinite" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "At the peak, the tangent line is horizontal (slope = 0)."
    },
    {
      text: "If the position of a particle is $x(t) = t^3$, what is the average velocity from $t = 0$ to $t = 2$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "4" },
        { id: "b", text: "8" },
        { id: "c", text: "2" },
        { id: "d", text: "12" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$\\frac{x(2) - x(0)}{2 - 0} = \\frac{8 - 0}{2} = 4$."
    },
    {
      text: "If $f(x)$ is increasing on $[a, b]$, its average rate of change on that interval must be:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Zero" },
        { id: "b", text: "Positive" },
        { id: "c", text: "Negative" },
        { id: "d", text: "Constant" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Increasing means $f(b) > f(a)$, so the slope of the secant line is positive."
    },
    {
      text: "Instantaneous rate of change is the ________ of the average rates of change.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "sum" },
        { id: "b", text: "limit" },
        { id: "c", text: "product" },
        { id: "d", text: "inverse" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "As the interval width goes to zero, the average becomes the instantaneous."
    },
    {
      text: "The 'Difference Quotient' is used to calculate:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Area" },
        { id: "b", text: "Average Rate of Change" },
        { id: "c", text: "Roots" },
        { id: "d", text: "Asymptotes" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "It is the formula for the slope of a secant line."
    },
    {
      text: "If $f(x) = x^2 + x$, find the average rate of change on $[0, 2]$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "6" },
        { id: "d", text: "4" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\frac{f(2) - f(0)}{2 - 0} = \\frac{(4+2) - 0}{2} = 6 / 2 = 3$."
    },
    {
      text: "Why can't we find instantaneous rate of change using only algebra (without limits)?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Algebra only works for lines" },
        { id: "b", text: "Finding slope requires two points; instantaneous rate only gives one" },
        { id: "c", text: "Algebra is too old" },
        { id: "d", text: "You can, it just takes longer" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "The slope formula $m = \\frac{y_2 - y_1}{x_2 - x_1}$ becomes $0/0$ if you use the same point twice. Limits resolve this 'division by zero' problem."
    },
    {
      text: "If the instantaneous rate of change of $f(x)$ at $x = 3$ is 5, what is the slope of the tangent line at $x = 3$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "5" },
        { id: "c", text: "15" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "They are two different ways of saying the exact same thing."
    },
    {
      text: "Given $f(1)=4$ and $f(1.001)=4.002$, the instantaneous rate at $x=1$ is approximately:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0.002" },
        { id: "b", text: "2" },
        { id: "c", text: "4" },
        { id: "d", text: "2000" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Rate $\\approx \\frac{4.002 - 4}{1.001 - 1} = \\frac{0.002}{0.001} = 2$."
    }
  ],
  'calc-2-2': [
    {
      text: "Which of the following is the standard limit definition of the derivative $f'(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$" },
        { id: "b", text: "$\\lim_{x \\to 0} \\frac{f(x+h) - f(x)}{h}$" },
        { id: "c", text: "$\\frac{f(x+h) - f(x)}{h}$" },
        { id: "d", text: "$\\lim_{h \\to \\infty} \\frac{f(x+h) - f(x)}{h}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "This is the 'h definition' where $h$ represents the shrinking distance between two points."
    },
    {
      text: "The alternative limit definition of the derivative at a point $x = a$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\lim_{x \\to a} \\frac{f(x) - f(a)}{x - a}$" },
        { id: "b", text: "$\\lim_{h \\to 0} \\frac{f(a) - f(x)}{a - x}$" },
        { id: "c", text: "$\\frac{f(x) - f(a)}{x - a}$" },
        { id: "d", text: "$\\lim_{x \\to 0} f(x)$" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "This form directly calculates the limit of the slope as point $x$ moves toward point $a$."
    },
    {
      text: "In Leibniz notation, the derivative of $y$ with respect to $x$ is written as:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$y'$" },
        { id: "b", text: "$\\frac{dy}{dx}$" },
        { id: "c", text: "$f'(x)$" },
        { id: "d", text: "$\\frac{\\Delta y}{\\Delta x}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$\\frac{dy}{dx}$ uses the 'd' to represent an infinitely small (differential) change."
    },
    {
      text: "Which of the following NOTATIONS is NOT used for the derivative?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f'(x)$" },
        { id: "b", text: "$\\frac{dy}{dx}$" },
        { id: "c", text: "$D_x[f(x)]$" },
        { id: "d", text: "$f^d(x)$" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "Prime, Leibniz, and Differential operator (D) notation are standard; $f^d(x)$ is not."
    },
    {
      text: "If $f'(c)$ exists, we say that $f(x)$ is ________ at $x = c$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Continuous" },
        { id: "b", text: "Differentiable" },
        { id: "c", text: "Integrable" },
        { id: "d", text: "Increasing" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Differentiability is the formal term for 'having a derivative'."
    },
    {
      text: "What does the '$h$' represent in the definition of the derivative?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The height of the function" },
        { id: "b", text: "The horizontal distance between two points" },
        { id: "c", text: "The slope" },
        { id: "d", text: "The limit value" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$h$ is the change in $x$ ($\\Delta x$)."
    },
    {
      text: "Identify the function $f(x)$ and the point $a$ from this limit: $\\lim_{x \\to 3} \\frac{x^4 - 81}{x - 3}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = x^4, a = 3$" },
        { id: "b", text: "$f(x) = 81, a = 3$" },
        { id: "c", text: "$f(x) = x - 3, a = 81$" },
        { id: "d", text: "$f(x) = x^4 - 81, a = 0$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "The form is $\\frac{f(x) - f(a)}{x - a}$. Here, $f(x) = x^4$ and $f(3) = 3^4 = 81$."
    },
    {
      text: "Identify the function $f(x)$ from this limit: $\\lim_{h \\to 0} \\frac{\\cos(x + h) - \\cos(x)}{h}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = h$" },
        { id: "b", text: "$f(x) = \\cos(x)$" },
        { id: "c", text: "$f(x) = \\sin(x)$" },
        { id: "d", text: "$f(x) = x + h$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The limit represents the definition of the derivative for $f(x) = \\cos(x)$."
    },
    {
      text: "The derivative function $f'(x)$ gives the ________ at any point $x$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "y-value" },
        { id: "b", text: "instantaneous slope" },
        { id: "c", text: "average slope" },
        { id: "d", text: "area" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative is a 'slope machine' that tells you how steep the original graph is at any $x$."
    },
    {
      text: "Evaluate the derivative of $f(x) = 5x$ at $x = 2$ using the limit definition.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "2" },
        { id: "b", text: "5" },
        { id: "c", text: "10" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\lim_{h \\to 0} \\frac{5(x+h) - 5x}{h} = \\lim_{h \\to 0} \\frac{5h}{h} = 5$."
    },
    {
      text: "What is the result of $\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$ if $f(x) = x^2$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x$" },
        { id: "b", text: "$2x$" },
        { id: "c", text: "$x^2$" },
        { id: "d", text: "2" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\frac{(x+h)^2 - x^2}{h} = \\frac{x^2 + 2xh + h^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h$. As $h \\to 0$, result is $2x$."
    },
    {
      text: "If $f'(x) = 3x^2$, then $\\frac{dy}{dx}$ evaluated at $x = 2$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "3" },
        { id: "b", text: "12" },
        { id: "c", text: "6" },
        { id: "d", text: "8" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Plug in $x = 2$: $3(2)^2 = 3(4) = 12$."
    },
    {
      text: "The expression $f'(a)$ represents a ________, while $f'(x)$ represents a ________.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "function; number" },
        { id: "b", text: "number; function" },
        { id: "c", text: "limit; tangent" },
        { id: "d", text: "secant; tangent" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$f'(a)$ is the specific slope at $x=a$ (a number). $f'(x)$ is the general formula for any $x$ (a function)."
    },
    {
      text: "In the limit definition, why can't we just plug in $h = 0$ immediately?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It would result in $0/0$" },
        { id: "b", text: "It would result in infinity" },
        { id: "c", text: "The function would be too large" },
        { id: "d", text: "It only works for even numbers" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Immediate substitution gives the indeterminate form $0/0$, which is why we need to simplify the algebra first."
    },
    {
      text: "Find the value of $\\lim_{h \\to 0} \\frac{(2 + h)^2 - 4}{h}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "4" },
        { id: "c", text: "2" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "This is the derivative of $f(x)=x^2$ at $x=2$. Since $f'(x)=2x$, $f'(2)=4$."
    },
    {
      text: "The Leibniz notation $\\frac{d}{dx}$ is an 'operator' that means:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Multiply by $\\frac{d}{dx}$" },
        { id: "b", text: "Take the derivative with respect to x" },
        { id: "c", text: "Divide by dx" },
        { id: "d", text: "Calculate the area" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "It is a command to perform the differentiation process on whatever follows it."
    },
    {
      text: "If $f(x) = mx + b$, what is $f'(x)$ using the limit definition?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x$" },
        { id: "b", text: "$m$" },
        { id: "c", text: "$b$" },
        { id: "d", text: "$mx$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\frac{m(x+h)+b - (mx+b)}{h} = \\frac{mx+mh+b-mx-b}{h} = mh/h = m$."
    },
    {
      text: "Which of the following limits represents $f'(5)$ for $f(x) = \\sqrt{x}$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\lim_{h \\to 0} \\frac{\\sqrt{5+h} - \\sqrt{5}}{h}$" },
        { id: "b", text: "$\\lim_{x \\to 0} \\frac{\\sqrt{x} - \\sqrt{5}}{x - 5}$" },
        { id: "c", text: "$\\lim_{h \\to 5} \\frac{\\sqrt{5+h} - \\sqrt{5}}{h}$" },
        { id: "d", text: "$\\lim_{x \\to 5} \\frac{\\sqrt{x} - \\sqrt{5}}{h}$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Option 'a' matches the standard h-definition at the point $a=5$."
    },
    {
      text: "True or False: If the limit $\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$ exists, the function must be continuous at x.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Differentiability implies continuity. This is a fundamental theorem."
    },
    {
      text: "The 'tangent line' to $f(x)$ at $x = a$ has the equation $y - f(a) = f'(a)(x - a)$. What part of this equation is the derivative?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(a)$" },
        { id: "b", text: "$f'(a)$" },
        { id: "c", text: "$(x - a)$" },
        { id: "d", text: "$y$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative $f'(a)$ is the slope (m) in the point-slope form of the line."
    },
    {
      text: "Calculate $f'(x)$ for $f(x) = c$ (where $c$ is a constant) using the limit definition.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$c$" },
        { id: "b", text: "0" },
        { id: "c", text: "1" },
        { id: "d", text: "$h$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$\\frac{f(x+h) - f(x)}{h} = \\frac{c - c}{h} = \\frac{0}{h} = 0$."
    },
    {
      text: "Identify $f(x)$ and $a$: $\\lim_{h \\to 0} \\frac{(5+h)^3 - 125}{h}$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = x^3, a = 5$" },
        { id: "b", text: "$f(x) = 125, a = 5$" },
        { id: "c", text: "$f(x) = 5x, a = 3$" },
        { id: "d", text: "$f(x) = x^3, a = 0$" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "$f(x)=x^3$ and $f(5)=125$. The limit follows the form $\\frac{f(a+h)-f(a)}{h}$."
    },
    {
      text: "What happens to the secant line as we take the limit defining the derivative?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It becomes a horizontal line" },
        { id: "b", text: "It rotates to become the tangent line" },
        { id: "c", text: "It disappears" },
        { id: "d", text: "It becomes parallel to the y-axis" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "As the second point slides toward the first, the secant line pivots until it just touches the curve at the single point."
    },
    {
      text: "If $\\frac{dy}{dx} = 2x + 3$, what is the rate of change of y with respect to x when $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "3" },
        { id: "c", text: "2" },
        { id: "d", text: "5" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "$2(0) + 3 = 3$."
    },
    {
      text: "The derivative is often described as the ________ of the graph.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "height" },
        { id: "b", text: "steepness" },
        { id: "c", text: "width" },
        { id: "d", text: "curvature" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Derivative measures how fast the y-values are rising or falling relative to x-values."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 2.1 and 2.2...');

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
