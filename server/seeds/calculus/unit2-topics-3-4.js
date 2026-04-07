/**
 * Seed script for AP Calculus AB Unit 2: Topics 2.3 and 2.4
 * Run with: node server/seeds/calculus/unit2-topics-3-4.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-2-3': [
    {
      text: "Given the table of values for $f(x)$, what is the best estimate for $f'(3)$?\n$x$: 2.9, 3.0, 3.1 | $f(x)$: 5.41, 6.00, 6.61",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0.6" },
        { id: "b", text: "6.0" },
        { id: "c", text: "3.0" },
        { id: "d", text: "1.2" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Estimate $f'(3)$ using the average rate of change on $[2.9, 3.1]$: $\\frac{6.61 - 5.41}{3.1 - 2.9} = \\frac{1.2}{0.2} = 6.0$."
    },
    {
      text: "To estimate $f'(c)$ from a table, which calculation typically provides the most symmetric and accurate estimate?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\frac{f(c) - f(a)}{c - a}$ where $a < c$" },
        { id: "b", text: "$\\frac{f(b) - f(c)}{b - c}$ where $b > c$" },
        { id: "c", text: "$\\frac{f(b) - f(a)}{b - a}$ where $a < c < b$" },
        { id: "d", text: "$\\frac{f(c)}{c}$" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Using points on either side of $c$ (the symmetric difference quotient) often yields a better approximation of the tangent slope at $c$."
    },
    {
      text: "A graph of $f(x)$ has a tangent line at $x = 4$ that passes through the points $(4, 10)$ and $(5, 13)$. What is $f'(4)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "3" },
        { id: "c", text: "1" },
        { id: "d", text: "4" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative $f'(4)$ is the slope of the tangent line: $\\frac{13 - 10}{5 - 4} = 3$."
    },
    {
      text: "Based on a graph, if the tangent line at $x = 2$ is horizontal, what is the value of $f'(2)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Undefined" },
        { id: "b", text: "0" },
        { id: "c", text: "1" },
        { id: "d", text: "2" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Horizontal lines have a slope of 0."
    },
    {
      text: "If a function $f(x)$ is decreasing near $x = a$, the estimated value of $f'(a)$ should be:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Positive" },
        { id: "b", text: "Negative" },
        { id: "c", text: "Zero" },
        { id: "d", text: "Infinite" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The derivative represents the slope; decreasing functions have negative slopes."
    },
    {
      text: "On a graph, if the curve is getting steeper as $x$ increases, then $f'(x)$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Constant" },
        { id: "b", text: "Increasing" },
        { id: "c", text: "Decreasing" },
        { id: "d", text: "Zero" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Steeper curves mean the slope (derivative) is larger in magnitude."
    },
    {
      text: "Estimate $f'(5)$ using these table values:\n$x$: 4, 5, 6 | $f(x)$: 20, 30, 42",
      type: "multiple_choice",
      options: [
        { id: "a", text: "10" },
        { id: "b", text: "11" },
        { id: "c", text: "12" },
        { id: "d", text: "30" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Average of the two adjacent slopes: $\\frac{\\frac{30-20}{1} + \\frac{42-30}{1}}{2} = \\frac{10 + 12}{2} = 11$. Or simply $\\frac{42-20}{6-4} = \\frac{22}{2} = 11$."
    },
    {
      text: "When estimating a derivative from a graph, we are essentially finding the slope of the tangent line.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "intercept" },
        { id: "b", text: "slope" },
        { id: "c", text: "length" },
        { id: "d", text: "area" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The slope of the tangent line is the visual definition of the derivative."
    },
    {
      text: "If $f(x)$ has a constant slope of -2, what is $f'(100)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "100" },
        { id: "b", text: "-2" },
        { id: "c", text: "0" },
        { id: "d", text: "-200" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "If the slope is constant, the derivative is that constant value everywhere."
    },
    {
      text: "Which value is the best estimate for $f'(1)$ if the tangent line at $x = 1$ is $y = 4x - 5$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "4" },
        { id: "c", text: "-5" },
        { id: "d", text: "-1" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The slope of the line $y = mx + b$ is $m$. Here $m = 4$."
    },
    {
      text: "On the graph of $f(x) = x^2$, which point has a derivative of 0?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$(1, 1)$" },
        { id: "b", text: "$(0, 0)$" },
        { id: "c", text: "$(-1, 1)$" },
        { id: "d", text: "Nowhere" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "At the vertex $(0, 0)$, the tangent line is horizontal (slope = 0)."
    },
    {
      text: "If $f(x)$ values in a table are 10, 15, 20, 25 for $x = 1, 2, 3, 4$, then $f'(x)$ is likely:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x$" },
        { id: "b", text: "5" },
        { id: "c", text: "10" },
        { id: "d", text: "0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The values are increasing by a constant amount of 5 for each unit of $x$, suggesting a linear function with slope 5."
    },
    {
      text: "In a 'zoomed-in' view of a smooth curve at a point, the curve looks like a straight line.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Circle" },
        { id: "b", text: "Straight line" },
        { id: "c", text: "Square" },
        { id: "d", text: "Point" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "This is known as local linearity. The tangent line is the best linear approximation of the curve near that point."
    },
    {
      text: "If $f'(x) > 0$ for all $x$ in an interval, the graph of $f(x)$ must be increasing on that interval.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Horizontal" },
        { id: "b", text: "Increasing" },
        { id: "c", text: "Decreasing" },
        { id: "d", text: "Positive" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Positive slope means the function is rising."
    },
    {
      text: "Estimate $f'(2)$ for $f(x) = \\ln(x)$ using $x = 1.99$ and $x = 2.01$.\n$f(1.99) \\approx 0.6881, f(2.01) \\approx 0.6981$",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0.01" },
        { id: "b", text: "0.5" },
        { id: "c", text: "1" },
        { id: "d", text: "2" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$\\frac{0.6981 - 0.6881}{2.01 - 1.99} = \\frac{0.01}{0.02} = 0.5$. (Note: $f'(x) = \\frac{1}{x}$, so $f'(2) = \\frac{1}{2} = 0.5$)."
    },
    {
      text: "What does it mean if $f'(c)$ is a very large positive number?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The graph is very high up" },
        { id: "b", text: "The graph is very steep and increasing" },
        { id: "c", text: "The graph is almost horizontal" },
        { id: "d", text: "The function is undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Magnitude of the derivative indicates steepness; sign indicates direction."
    },
    {
      text: "To estimate the derivative of a position function $s(t)$ at time $t = 2$, you should find the:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Total distance travelled" },
        { id: "b", text: "Average velocity over a very small interval around $t = 2$" },
        { id: "c", text: "Initial velocity at $t = 0$" },
        { id: "d", text: "Final position" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Instantaneous velocity is the derivative of position, estimated by average velocity over a near-zero interval."
    },
    {
      text: "If the tangent line to $f(x)$ at $x = 3$ is horizontal, then $f'(3) = 0$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "0" },
        { id: "c", text: "3" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Horizontal tangent lines correspond to zero derivatives."
    },
    {
      text: "True or False: Using more points in a table always makes the derivative estimate more accurate.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "False. It's not the number of points that matters, but how close the points are to the target $x$-value."
    },
    {
      text: "If $f'(x)$ is constant, the second derivative $f''(x)$ must be:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Constant" },
        { id: "b", text: "Zero" },
        { id: "c", text: "Increasing" },
        { id: "d", text: "Negative" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The derivative of a constant is zero."
    },
    {
      text: "Estimate the slope of the curve $y = \\sqrt{x}$ at $x = 4$ by calculating the slope of the secant line from $x = 4$ to $x = 4.41$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0.21" },
        { id: "b", text: "0.25" },
        { id: "c", text: "0.5" },
        { id: "d", text: "0.41" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$\\frac{\\sqrt{4.41} - \\sqrt{4}}{4.41 - 4} = \\frac{2.1 - 2}{0.41} = \\frac{0.1}{0.41} \\approx 0.243$. (The actual derivative is $\\frac{1}{2\\sqrt{4}} = 0.25$)."
    },
    {
      text: "Which of the following describes a point where the derivative is likely to be large and negative?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A gentle hill" },
        { id: "b", text: "A steep cliff dropping down" },
        { id: "c", text: "A flat valley" },
        { id: "d", text: "A vertical line" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Negative means decreasing; large magnitude means steep."
    },
    {
      text: "If $f(x) = x^3 - x$, estimate $f'(0)$ using $x = -0.01$ and $x = 0.01$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "-1" },
        { id: "c", text: "1" },
        { id: "d", text: "3" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "$f(0.01) = 0.000001 - 0.01 = -0.009999$. $f(-0.01) = -0.000001 + 0.01 = 0.009999$. Slope = $\\frac{-0.009999 - 0.009999}{0.02} \\approx -1$."
    },
    {
      text: "Visual estimation of a derivative works best on functions that are:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Smooth and continuous" },
        { id: "b", text: "Jagged and broken" },
        { id: "c", text: "Constant" },
        { id: "d", text: "Step functions" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Smoothness (differentiability) is what allows for a clear tangent line."
    },
    {
      text: "A line is tangent to a circle. The slope of this line represents the rate of change of the circles's boundary at that point.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Area" },
        { id: "b", text: "Rate of change" },
        { id: "c", text: "Radius" },
        { id: "d", text: "Circumference" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "In any geometric context, tangent slope represents the instantaneous rate of change."
    }
  ],
  'calc-2-4': [
    {
      text: "Which of the following is a TRUE statement about the relationship between continuity and differentiability?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Continuity implies differentiability" },
        { id: "b", text: "Differentiability implies continuity" },
        { id: "c", text: "They are the same thing" },
        { id: "d", text: "Neither implies the other" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "If a function has a derivative at a point, it MUST be continuous there. The reverse is not always true."
    },
    {
      text: "Which graphical feature causes a function to be continuous but NOT differentiable?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A hole" },
        { id: "b", text: "A sharp corner (cusp)" },
        { id: "c", text: "A horizontal line" },
        { id: "d", text: "A smooth curve" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "At a sharp corner (like $x = 0$ for $|x|$), the slopes from the left and right are different, so the limit defining the derivative DNE."
    },
    {
      text: "If $f(x)$ has a jump discontinuity at $x = 3$, then $f'(3)$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "Undefined (does not exist)" },
        { id: "c", text: "Infinite" },
        { id: "d", text: "3" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Because the function is not continuous at $x = 3$, it cannot be differentiable there."
    },
    {
      text: "What happens to the derivative at a point where the graph has a vertical tangent line?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It is 0" },
        { id: "b", text: "It is infinite (DNE)" },
        { id: "c", text: "It is 1" },
        { id: "d", text: "It is negative" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Vertical lines have undefined slopes. The limit of the difference quotient goes to infinity."
    },
    {
      text: "The function $f(x) = \\sqrt[3]{x}$ is continuous at $x = 0$. Is it differentiable at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, because it has a vertical tangent line" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The graph becomes vertical at the origin, meaning the derivative is undefined."
    },
    {
      text: "If $\\lim_{h \\to 0^-} \\frac{f(a+h)-f(a)}{h} = -1$ and $\\lim_{h \\to 0^+} \\frac{f(a+h)-f(a)}{h} = 1$, then $f(x)$ has a sharp corner at $x = a$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "hole" },
        { id: "b", text: "sharp corner" },
        { id: "c", text: "smooth peak" },
        { id: "d", text: "vertical asymptote" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The left-hand and right-hand derivatives exist but are different, which creates a sharp 'V' or 'wedge' shape."
    },
    {
      text: "Is $f(x) = |x|$ differentiable at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, the derivative is 0" },
        { id: "b", text: "No, because of a sharp corner" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The slope changes abruptly from -1 to 1 at $x = 0$."
    },
    {
      text: "If a function is differentiable on an open interval, it must be continuous on that interval.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Linear" },
        { id: "b", text: "Continuous" },
        { id: "c", text: "Positive" },
        { id: "d", text: "Increasing" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Differentiability is a stricter (stronger) condition than continuity."
    },
    {
      text: "Which function is differentiable everywhere?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = |x|$" },
        { id: "b", text: "$f(x) = x^2$" },
        { id: "c", text: "$f(x) = \\frac{1}{x}$" },
        { id: "d", text: "$f(x) = \\sqrt{x}$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$x^2$ is a polynomial, which is smooth and defined for all real numbers. $\\frac{1}{x}$ and $\\sqrt{x}$ have domain restrictions/discontinuities; $|x|$ has a corner."
    },
    {
      text: "A cusp is a point where the graph has:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A vertical asymptote" },
        { id: "b", text: "A very sharp 'spike' and the derivative goes to infinity" },
        { id: "c", text: "A hole" },
        { id: "d", text: "A horizontal tangent" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Cusps (like in $x^{2/3}$) are non-differentiable points where the tangent behavior becomes vertical."
    },
    {
      text: "To prove $f(x)$ is NOT differentiable at $x = c$, you could show that:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x)$ is not continuous at $x = c$" },
        { id: "b", text: "The left and right limits of the difference quotient are different" },
        { id: "c", text: "The graph has a vertical tangent" },
        { id: "d", text: "All of the above" }
      ],
      correctAnswers: ["d"],
      difficulty: "medium",
      explanation: "Any of these conditions is sufficient to disqualify differentiability."
    },
    {
      text: "True or False: If a function's graph is 'smooth' (no breaks or corners), it is likely differentiable.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Smoothness is the intuitive visual equivalent of differentiability."
    },
    {
      text: "Which of the following piecewise functions is differentiable at $x = 0$?\n$f(x) = x^2$ for $x \\leq 0$; $f(x) = x$ for $x > 0$",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, because the slopes don't match (0 vs 1)" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "While continuous at 0, the derivative from the left is $2x$ (which is 0 at $x=0$) and the derivative from the right is 1. Since $0 \\neq 1$, it's not differentiable."
    },
    {
      text: "If $f(x)$ is differentiable at $x = a$, then $\\lim_{x \\to a} f(x)$ must be:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "$f(a)$" },
        { id: "c", text: "$f'(a)$" },
        { id: "d", text: "Undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Differentiability implies continuity, and the definition of continuity is that the limit equals the function value."
    },
    {
      text: "The 'slope from the left' and 'slope from the right' are formally called:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "One-sided limits" },
        { id: "b", text: "One-sided derivatives" },
        { id: "c", text: "Partial derivatives" },
        { id: "d", text: "Secants" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "These are the limits of the difference quotient from a single direction."
    },
    {
      text: "Can a function be differentiable at an endpoint of its domain?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, because the two-sided limit defining the derivative cannot exist" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Differentiability at a point requires a two-sided limit. At an endpoint, only a one-sided derivative is possible."
    },
    {
      text: "Which of these functions has a vertical tangent line at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = x^2$" },
        { id: "b", text: "$f(x) = x^{1/3}$" },
        { id: "c", text: "$f(x) = |x|$" },
        { id: "d", text: "$f(x) = e^x$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The cube root function is continuous but becomes perfectly vertical at the origin."
    },
    {
      text: "If $f(x)$ is not continuous at $x = c$, can $f'(c)$ be 0?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, $f'(c)$ cannot exist at all" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Continuity is a prerequisite for differentiability."
    },
    {
      text: "Visual check: A graph has an open circle at $(2, 4)$ and a solid dot at $(2, 6)$. Is the function differentiable at $x = 2$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes" },
        { id: "b", text: "No, it's not even continuous" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Removable or jump discontinuities always prevent differentiability."
    },
    {
      text: "A 'differentiable' function is one that is locally linear.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "constant" },
        { id: "b", text: "linear" },
        { id: "c", text: "parabolic" },
        { id: "d", text: "infinite" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Differentiability means that if you zoom in enough, the graph eventually looks like its tangent line."
    },
    {
      text: "Which condition is SUFFICIENT to prove continuity at $x = a$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(a)$ exists" },
        { id: "b", text: "$f'(a)$ exists" },
        { id: "c", text: "$\\lim f(x)$ exists" },
        { id: "d", text: "The graph is positive" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Since differentiability implies continuity, knowing the derivative exists is enough to guarantee continuity."
    },
    {
      text: "At $x = 0$, the function $f(x) = x \\cdot |x|$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Continuous but not differentiable" },
        { id: "b", text: "Differentiable" },
        { id: "c", text: "Neither" },
        { id: "d", text: "Discontinuous" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "Interestingly, the '$x$' term smooths out the corner of the absolute value. The derivative exists and is 0 at $x = 0$."
    },
    {
      text: "If $f(x)$ has a 'kink' or 'corner' at $x = c$, then:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f$ is continuous but not differentiable" },
        { id: "b", text: "$f$ is differentiable but not continuous" },
        { id: "c", text: "$f$ is neither" },
        { id: "d", text: "$f$ is both" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Corners are the standard example of continuity without differentiability."
    },
    {
      text: "Does $f(x) = \\frac{1}{x^2}$ have a derivative at $x = 0$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Yes, it is infinity" },
        { id: "b", text: "No, because the function is undefined at 0" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "If the function doesn't exist, neither can its derivative."
    },
    {
      text: "Which of the following functions is NOT differentiable at $x = 1$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(x) = (x-1)^2$" },
        { id: "b", text: "$f(x) = |x-1|$" },
        { id: "c", text: "$f(x) = x^3$" },
        { id: "d", text: "$f(x) = \\sin(x-1)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "$|x-1|$ has a sharp corner at $x = 1$."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 2.3 and 2.4...');

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
