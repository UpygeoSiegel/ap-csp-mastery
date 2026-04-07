/**
 * Seed script for AP Calculus AB Unit 1: Topics 1.1 and 1.2
 * Run with: node server/seeds/calculus/unit1-topics-1-2.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });

const { db } = require('../../firebase');

const questionsData = {
  'calc-1-1': [
    {
      text: "Which of the following is the fundamental mathematical concept upon which all of calculus is built?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The derivative" },
        { id: "b", text: "The integral" },
        { id: "c", text: "The limit" },
        { id: "d", text: "Algebraic manipulation" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "The concept of a limit is the foundation of calculus. Derivatives and integrals are both defined using limits."
    },
    {
      text: "Calculus is primarily the study of:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Static geometric shapes" },
        { id: "b", text: "Change and motion" },
        { id: "c", text: "Solving polynomial equations" },
        { id: "d", text: "Arithmetic operations" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Calculus provides the tools to model and analyze dynamic systems where quantities are changing."
    },
    {
      text: "The 'tangent line problem' is a classic problem that leads to the definition of:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The area under a curve" },
        { id: "b", text: "The derivative" },
        { id: "c", text: "A vertical asymptote" },
        { id: "d", text: "A sequence" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Finding the slope of a tangent line at a single point requires the use of limits and leads directly to the concept of the derivative."
    },
    {
      text: "The 'area problem' (finding the area of a region with curved boundaries) is a classic problem that leads to the definition of:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The derivative" },
        { id: "b", text: "The limit" },
        { id: "c", text: "The integral" },
        { id: "d", text: "Continuity" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Approximating areas with rectangles and taking the limit as the number of rectangles approaches infinity leads to the definite integral."
    },
    {
      text: "If a car's position is given by $s(t)$, what calculus concept represents the car's instantaneous velocity?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The limit of $s(t)$ as $t$ approaches infinity" },
        { id: "b", text: "The area under the $s(t)$ curve" },
        { id: "c", text: "The derivative of $s(t)$" },
        { id: "d", text: "The average value of $s(t)$" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "The derivative represents an instantaneous rate of change. For position, that rate of change is velocity."
    },
    {
      text: "Which of the following describes a situation where calculus is necessary rather than just algebra?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Finding the slope of a line between two points" },
        { id: "b", text: "Finding the average speed over a 2-hour trip" },
        { id: "c", text: "Finding the instantaneous rate at which water is leaking from a tank" },
        { id: "d", text: "Finding the area of a rectangle" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Algebra can find average rates of change over an interval. Calculus is needed to find the rate of change at a specific instant."
    },
    {
      text: "True or False: Without the concept of a limit, we could not precisely define the slope of a curve at a single point.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "The slope of a curve at a point is the limit of the slopes of secant lines as the interval between the points approaches zero."
    },
    {
      text: "Differential calculus focuses on ____________, while integral calculus focuses on ____________.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "accumulation; rates of change" },
        { id: "b", text: "limits; continuity" },
        { id: "c", text: "rates of change; accumulation" },
        { id: "d", text: "algebra; geometry" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Derivatives (differential calculus) measure how fast things change; integrals (integral calculus) measure total accumulation or area."
    },
    {
      text: "Which pre-calculus concept is used to approximate the slope of a tangent line?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The area of a circle" },
        { id: "b", text: "The slope of a secant line" },
        { id: "c", text: "The y-intercept of a line" },
        { id: "d", text: "The vertex of a parabola" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "A secant line connects two points on a curve. As those points get closer together, the secant line's slope approximates the tangent line's slope."
    },
    {
      text: "In the study of limits, what are we examining?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The exact value of a function at $x = c$" },
        { id: "b", text: "The behavior of a function as $x$ gets arbitrarily close to $c$" },
        { id: "c", text: "The domain of the function" },
        { id: "d", text: "The roots of the function" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Limits describe what happens to the output of a function as the input approaches a specific value, regardless of the value at that exact point."
    },
    {
      text: "Which of these is NOT an example of a rate of change?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Miles per hour" },
        { id: "b", text: "Gallons per minute" },
        { id: "c", text: "Total number of students in a school" },
        { id: "d", text: "Bacteria growth per day" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Total number is a quantity, not a rate. Rates describe how one quantity changes with respect to another (usually time)."
    },
    {
      text: "The 'limit process' allows us to move from the ____________ to the ____________.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "finite; infinite" },
        { id: "b", text: "average; instantaneous" },
        { id: "c", text: "known; unknown" },
        { id: "d", text: "algebra; calculus" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "By taking the limit as an interval becomes infinitely small, we move from average rates over that interval to instantaneous rates at a point."
    },
    {
      text: "If you sum infinitely many infinitely small quantities, you are performing a process that leads to:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Differentiation" },
        { id: "b", text: "Integration" },
        { id: "c", text: "Factoring" },
        { id: "d", text: "Simplification" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "This is the essence of integration: summing up 'differential' (infinitely small) pieces to find a total amount."
    },
    {
      text: "Why is the limit $x \\to c$ of $f(x)$ different from $f(c)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It isn't; they are always the same" },
        { id: "b", text: "$f(c)$ is the value AT $c$; the limit is the value the function APPROACHES near $c$" },
        { id: "c", text: "$f(c)$ must be an integer, while the limit can be any number" },
        { id: "d", text: "The limit is always larger than $f(c)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The limit is about the journey (approaching), while the function value is about the destination (being there)."
    },
    {
      text: "Which mathematician is credited with the independent development of calculus alongside Isaac Newton?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Gottfried Wilhelm Leibniz" },
        { id: "b", text: "Euclid" },
        { id: "c", text: "Pythagoras" },
        { id: "d", text: "René Descartes" }
      ],
      correctAnswers: ["a"],
      difficulty: "easy",
      explanation: "Leibniz and Newton independently developed calculus in the late 17th century. Leibniz's notation ($\\frac{dy}{dx}$) is still widely used today."
    },
    {
      text: "How does calculus define the 'slope of a curve'?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "As the slope of a line connecting the start and end of the curve" },
        { id: "b", text: "As the slope of the tangent line at a specific point" },
        { id: "c", text: "As the average of all y-values" },
        { id: "d", text: "Curves do not have slopes" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "In calculus, the slope of a curve at a point is defined as the slope of the line that just 'grazes' the curve at that point (the tangent line)."
    },
    {
      text: "The concept of 'instantaneous velocity' resolves Zeno's Arrow Paradox by using:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Infinite series" },
        { id: "b", text: "The concept of a limit" },
        { id: "c", text: "Standard algebra" },
        { id: "d", text: "Geometry" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "The paradox suggests an arrow can't move because at any instant it is at rest. Calculus shows that even if displacement is 0 at a point, the limit of change/time can still exist."
    },
    {
      text: "In the expression 'the limit as $x$ approaches $c$ of $f(x)$ is $L$', $L$ represents:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The $x$-value" },
        { id: "b", text: "The $y$-value being approached" },
        { id: "c", text: "The slope of the line" },
        { id: "d", text: "The domain" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The limit value $L$ is the output ($y$-value) that the function values $f(x)$ get closer to."
    },
    {
      text: "Which of the following describes the relationship between a secant line and a tangent line?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "They are the same thing" },
        { id: "b", text: "A tangent line is the limit of secant lines" },
        { id: "c", text: "A secant line is the derivative of a tangent line" },
        { id: "d", text: "They are always perpendicular" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "As the distance between the two points of a secant line approaches zero, the secant line approaches the tangent line."
    },
    {
      text: "When finding the area under a curve, what happens as we increase the number of rectangles used for approximation?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The error in approximation increases" },
        { id: "b", text: "The approximation gets closer to the actual area" },
        { id: "c", text: "The area of each rectangle increases" },
        { id: "d", text: "The total area decreases to zero" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "More rectangles mean thinner rectangles that fit the curved boundary more precisely, reducing the approximation error."
    },
    {
      text: "The Fundamental Theorem of Calculus connects which two main branches?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Algebra and Trigonometry" },
        { id: "b", text: "Differential and Integral Calculus" },
        { id: "c", text: "Geometry and Statistics" },
        { id: "d", text: "Limits and Continuity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The FTC shows that differentiation and integration are inverse processes, a profound discovery in mathematics."
    },
    {
      text: "Which of the following is a real-world application of integral calculus?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Calculating the volume of a heart chamber" },
        { id: "b", text: "Finding the maximum profit of a company" },
        { id: "c", text: "Determining the speed of a falling object" },
        { id: "d", text: "Finding the slope of a mountain" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Volume calculations for irregular shapes (like a heart) involve summing up infinitely many cross-sectional areas, which is integration."
    },
    {
      text: "If you know the rate at which an oil spill is spreading, which calculus tool would you use to find the total area covered after 5 hours?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Differentiation" },
        { id: "b", text: "Integration" },
        { id: "c", text: "The Squeeze Theorem" },
        { id: "d", text: "A linear equation" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Integration allows you to accumulate a rate of change (area per hour) to find a total amount (total area)."
    },
    {
      text: "The study of calculus is often called 'the mathematics of ________'.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Numbers" },
        { id: "b", text: "Shapes" },
        { id: "c", text: "Change" },
        { id: "d", text: "Logic" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Calculus is uniquely designed to handle dynamic, changing systems where constant rates (like in algebra) don't apply."
    },
    {
      text: "What is the primary difference between average speed and instantaneous speed?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Average speed uses algebra; instantaneous speed uses calculus/limits" },
        { id: "b", text: "Instantaneous speed is always faster" },
        { id: "c", text: "Average speed is for cars; instantaneous is for planes" },
        { id: "d", text: "There is no difference" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "Average speed is total distance / total time (algebra). Instantaneous speed is the speed at a specific moment in time (calculus)."
    }
  ],
  'calc-1-2': [
    {
      text: "What is the formal notation for 'the limit of $f(x)$ as $x$ approaches $c$ is $L$'?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(c) = L$" },
        { id: "b", text: "$\\lim_{x \\to c} f(x) = L$" },
        { id: "c", text: "$L = f(x) \\to c$" },
        { id: "d", text: "$\\text{limit}(c) = f(L)$" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "The standard notation uses 'lim' with the approaching value written beneath it."
    },
    {
      text: "If $\\lim_{x \\to c} f(x) = L$, which of the following MUST be true?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(c)$ is defined" },
        { id: "b", text: "$f(c) = L$" },
        { id: "c", text: "As $x$ gets closer to $c$, $f(x)$ gets closer to $L$" },
        { id: "d", text: "$f(x)$ is continuous at $x = c$" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "A limit only describes the behavior *near* $c$. $f(c)$ might be undefined or equal to a completely different value."
    },
    {
      text: "In the definition of a limit, the value of $f(x)$ at exactly $x = c$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The most important part" },
        { id: "b", text: "Irrelevant to the existence of the limit" },
        { id: "c", text: "Always equal to the limit" },
        { id: "d", text: "Always undefined" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "The existence and value of a limit depend only on the function's values in the 'neighborhood' of $c$, not at $c$ itself."
    },
    {
      text: "What does the notation $\\lim_{x \\to c^+} f(x)$ represent?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A positive limit" },
        { id: "b", text: "The limit as $x$ approaches $c$ from the left" },
        { id: "c", text: "The limit as $x$ approaches $c$ from the right" },
        { id: "d", text: "The absolute value of the limit" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "The '+' superscript denotes a one-sided limit from values greater than $c$ (the right side)."
    },
    {
      text: "For a two-sided limit $\\lim_{x \\to c} f(x)$ to exist, which condition must be met?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$f(c)$ must exist" },
        { id: "b", text: "The left-hand limit and right-hand limit must both exist and be equal" },
        { id: "c", text: "The function must be positive" },
        { id: "d", text: "$x$ must approach $c$ from only one direction" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "Equality of one-sided limits is the core requirement for the existence of a general (two-sided) limit."
    },
    {
      text: "If $\\lim_{x \\to 3^-} f(x) = 5$ and $\\lim_{x \\to 3^+} f(x) = 5$, what is $\\lim_{x \\to 3} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "10" },
        { id: "c", text: "5" },
        { id: "d", text: "Does not exist" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "Since both one-sided limits equal 5, the two-sided limit exists and also equals 5."
    },
    {
      text: "If $\\lim_{x \\to 2^-} f(x) = 4$ and $\\lim_{x \\to 2^+} f(x) = -4$, what is $\\lim_{x \\to 2} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "4" },
        { id: "c", text: "-4" },
        { id: "d", text: "Does not exist (DNE)" }
      ],
      correctAnswers: ["d"],
      difficulty: "easy",
      explanation: "The one-sided limits are not equal ($4 \\neq -4$), so the two-sided limit does not exist."
    },
    {
      text: "In the limit notation $\\lim_{x \\to c} f(x) = L$, '$x \\to c$' is read as:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$x$ is greater than $c$" },
        { id: "b", text: "$x$ equals $c$" },
        { id: "c", text: "$x$ approaches $c$" },
        { id: "d", text: "$x$ is less than $c$" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "The arrow indicates that $x$ is moving toward the value $c$ but not necessarily reaching it."
    },
    {
      text: "A 'hole' in a graph at $x = c$ is a common place where:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The limit does not exist" },
        { id: "b", text: "The limit exists even though $f(c)$ is undefined" },
        { id: "c", text: "The function is continuous" },
        { id: "d", text: "The derivative is infinite" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "A hole (removable discontinuity) means the function approaches a single value from both sides, but that value is 'missing' at the point itself."
    },
    {
      text: "Which of the following is NOT a reason a limit might fail to exist at $x = c$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The function approaches different values from the left and right" },
        { id: "b", text: "The function increases or decreases without bound" },
        { id: "c", text: "The function oscillates between two values near $c$" },
        { id: "d", text: "The value of $f(c)$ is different from the values near $c$" }
      ],
      correctAnswers: ["d"],
      difficulty: "hard",
      explanation: "$f(c)$ being different from the limit is a jump or hole (discontinuity), but the limit itself still exists if the behavior from both sides is consistent."
    },
    {
      text: "What can we say about $\\lim_{x \\to 0} [\\frac{1}{x^2}]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "It is 0" },
        { id: "b", text: "It is 1" },
        { id: "c", text: "It approach infinity (DNE)" },
        { id: "d", text: "It is undefined" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "As $x$ gets close to 0, $\\frac{1}{x^2}$ gets arbitrarily large. We often say the limit is infinity, which is a specific type of 'does not exist'."
    },
    {
      text: "When a function $f(x)$ oscillates infinitely between -1 and 1 as $x$ approaches 0, we say $\\lim_{x \\to 0} f(x)$:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "is 0" },
        { id: "b", text: "is $\\pm 1$" },
        { id: "c", text: "Does not exist" },
        { id: "d", text: "is 1" }
      ],
      correctAnswers: ["c"],
      difficulty: "hard",
      explanation: "If the function doesn't settle toward a single value as it approaches $c$, the limit does not exist. (Example: $\\sin(1/x)$)"
    },
    {
      text: "The statement '$f(x)$ can be made as close to $L$ as we want by taking $x$ sufficiently close to $c$' is the informal basis for:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "The Power Rule" },
        { id: "b", text: "The Epsilon-Delta definition of a limit" },
        { id: "c", text: "The Mean Value Theorem" },
        { id: "d", text: "The Chain Rule" }
      ],
      correctAnswers: ["b"],
      difficulty: "hard",
      explanation: "This is the 'layman's terms' version of the precise mathematical $(\\epsilon, \\delta)$ definition of a limit."
    },
    {
      text: "If $\\lim_{x \\to c} f(x) = L$, what is the value of $\\lim_{x \\to c} [f(x) - L]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$L$" },
        { id: "b", text: "$c$" },
        { id: "c", text: "0" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "If $f(x)$ approaches $L$, then the difference between them must approach 0."
    },
    {
      text: "Suppose $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$. What is $\\lim_{x \\to a} [f(x) + g(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$L \\cdot M$" },
        { id: "b", text: "$L / M$" },
        { id: "c", text: "$L + M$" },
        { id: "d", text: "$L - M$" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "The limit of a sum is the sum of the limits (provided both limits exist)."
    },
    {
      text: "If $f(x) = 2x + 1$, what is $\\lim_{x \\to 5} f(x)$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "5" },
        { id: "b", text: "10" },
        { id: "c", text: "11" },
        { id: "d", text: "DNE" }
      ],
      correctAnswers: ["c"],
      difficulty: "easy",
      explanation: "For polynomial functions, the limit can be found by direct substitution: $2(5) + 1 = 11$."
    },
    {
      text: "If a function has a vertical asymptote at $x = c$, the limit as $x$ approaches $c$:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "is 0" },
        { id: "b", text: "exists and is finite" },
        { id: "c", text: "is either infinity, negative infinity, or does not exist due to different behaviors" },
        { id: "d", text: "is equal to $f(c)$" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Vertical asymptotes indicate the function's output values are growing without bound, meaning no finite limit exists."
    },
    {
      text: "One-sided limits are particularly useful for analyzing:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Polynomials" },
        { id: "b", text: "Piecewise functions" },
        { id: "c", text: "Linear equations" },
        { id: "d", text: "Constants" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Piecewise functions often change behavior at specific $x$-values, making it necessary to check the limit from each direction independently."
    },
    {
      text: "If $\\lim_{x \\to 1} f(x) = 4$, but $f(1) = 10$, the function $f(x)$ is:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Continuous at $x = 1$" },
        { id: "b", text: "Not defined at $x = 1$" },
        { id: "c", text: "Discontinuous at $x = 1$" },
        { id: "d", text: "Linear" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "For continuity, the limit must equal the function value. Here, $4 \\neq 10$, so it is discontinuous."
    },
    {
      text: "In the limit $\\lim_{x \\to c} f(x) = L$, $L$ must be a:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "Variable" },
        { id: "b", text: "Real number" },
        { id: "c", text: "Function" },
        { id: "d", text: "Limit can only be infinity" }
      ],
      correctAnswers: ["b"],
      difficulty: "medium",
      explanation: "When we say a limit 'exists', we mean $L$ is a specific real number."
    },
    {
      text: "True or False: If $f(x) = g(x)$ for all $x$ except $x = c$, then $\\lim_{x \\to c} f(x) = \\lim_{x \\to c} g(x)$.",
      type: "multiple_choice",
      options: [
        { id: "a", text: "True" },
        { id: "b", text: "False" }
      ],
      correctAnswers: ["a"],
      difficulty: "hard",
      explanation: "Limits don't care about the point $x = c$. If the functions are identical everywhere else, their limits as they approach $c$ must be identical."
    },
    {
      text: "If $\\lim_{x \\to 4} f(x) = 0$ and $\\lim_{x \\to 4} g(x) = 3$, what is $\\lim_{x \\to 4} [f(x) / g(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "3" },
        { id: "c", text: "DNE" },
        { id: "d", text: "1/3" }
      ],
      correctAnswers: ["a"],
      difficulty: "medium",
      explanation: "0 / 3 = 0. The limit of a quotient is the quotient of the limits, provided the denominator limit is not 0."
    },
    {
      text: "If $\\lim_{x \\to 4} f(x) = 3$ and $\\lim_{x \\to 4} g(x) = 0$, what is $\\lim_{x \\to 4} [f(x) / g(x)]$?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "0" },
        { id: "b", text: "3" },
        { id: "c", text: "DNE" },
        { id: "d", text: "Infinity" }
      ],
      correctAnswers: ["c"],
      difficulty: "medium",
      explanation: "Division by zero is undefined. In this context, the function increases without bound, so the limit does not exist."
    },
    {
      text: "The graph of $f(x)$ has a jump at $x = 2$. Which of the following is true?",
      type: "multiple_choice",
      options: [
        { id: "a", text: "$\\lim_{x \\to 2^-} f(x) = \\lim_{x \\to 2^+} f(x)$" },
        { id: "b", text: "$\\lim_{x \\to 2^-} f(x) \\neq \\lim_{x \\to 2^+} f(x)$" },
        { id: "c", text: "$f(2)$ must be undefined" },
        { id: "d", text: "The limit exists" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "A 'jump' discontinuity occurs when the left-hand and right-hand limits are finite but different."
    },
    {
      text: "In calculus, the word 'limit' refers to:",
      type: "multiple_choice",
      options: [
        { id: "a", text: "A maximum possible value" },
        { id: "b", text: "A value that a function is getting closer and closer to" },
        { id: "c", text: "A boundary that cannot be crossed" },
        { id: "d", text: "The end of the domain" }
      ],
      correctAnswers: ["b"],
      difficulty: "easy",
      explanation: "Unlike the everyday use of 'limit' as a cap or boundary, in math it describes approaching behavior."
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Calculus Questions for Topics 1.1 and 1.2...');

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
