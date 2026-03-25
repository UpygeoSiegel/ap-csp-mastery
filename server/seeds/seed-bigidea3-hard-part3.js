/**
 * Seed HARD questions for Big Idea 3, Part 3 (Topics 3.13-3.18)
 * These use AP CSP pseudocode and have plausible distractors
 * Run with: node server/seeds/seed-bigidea3-hard-part3.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const hardQuestions = {
  'topic-3.13': [
    {
      question: `A programmer wants to create a procedure that calculates the area of different shapes. Which approach demonstrates BEST use of procedural abstraction?`,
      options: [
        'Create separate procedures: circleArea(r), rectangleArea(l,w), triangleArea(b,h)',
        'Create one procedure with many IF statements checking a "shape" parameter',
        'Write the formulas directly in the main code each time needed',
        'Create one procedure that returns all areas in a list'
      ],
      correctIndex: 0,
      explanation: 'Separate procedures for each shape provide clear interfaces, single responsibilities, and reusable abstractions. One large procedure with IF statements reduces readability. Inline code reduces reusability.'
    },
    {
      question: `What does this procedure return for sumRange(3, 7)?\n\n\`\`\`\nPROCEDURE sumRange(start, end)\n{\n    sum ← 0\n    i ← start\n    REPEAT UNTIL (i > end)\n    {\n        sum ← sum + i\n        i ← i + 1\n    }\n    RETURN sum\n}\n\`\`\``,
      options: ['25', '21', '28', '15'],
      correctIndex: 0,
      explanation: 'Sums integers from 3 to 7: 3+4+5+6+7 = 25. The procedure abstracts the summation pattern for any range.'
    },
    {
      question: `Which procedure header demonstrates good parameter design?\n\nThe procedure should convert temperature between Celsius and Fahrenheit in either direction.`,
      options: [
        'PROCEDURE convertTemp(temp, fromUnit, toUnit)',
        'PROCEDURE convertTemp(celsius, fahrenheit)',
        'PROCEDURE convertTemp(temp)',
        'PROCEDURE convertCelsiusToFahrenheit(c) and PROCEDURE convertFahrenheitToCelsius(f)'
      ],
      correctIndex: 3,
      explanation: 'Two separate, clearly-named procedures are better than one with multiple parameters. Each procedure has one clear purpose. Option A could work but is more complex. Option B is unclear about direction. Option C lacks necessary information.'
    },
    {
      question: `What is displayed?\n\n\`\`\`\nPROCEDURE factorial(n)\n{\n    IF (n ≤ 1)\n    {\n        RETURN 1\n    }\n    RETURN n * factorial(n - 1)\n}\n\nDISPLAY(factorial(5))\n\`\`\``,
      options: ['120', '24', '5', '15'],
      correctIndex: 0,
      explanation: 'factorial(5) = 5 * factorial(4) = 5 * 4 * 3 * 2 * 1 = 120. This recursive procedure demonstrates how a function can call itself with a smaller input.'
    },
    {
      question: `A developer writes this procedure:\n\n\`\`\`\nPROCEDURE processData(list)\n{\n    result ← filter(list)\n    result ← sort(result)\n    result ← removeDuplicates(result)\n    RETURN result\n}\n\`\`\`\n\nWhat programming principle does this demonstrate?`,
      options: [
        'Procedural abstraction - building complex behavior from simpler procedures',
        'Iteration - looping through data',
        'Selection - making decisions',
        'Data abstraction - organizing data'
      ],
      correctIndex: 0,
      explanation: 'processData uses three other procedures (filter, sort, removeDuplicates) to accomplish a complex task. This is procedural abstraction - hiding complexity behind simple interfaces and combining procedures.'
    },
    {
      question: `What modification makes this procedure correctly find the average?\n\n\`\`\`\nPROCEDURE average(list)\n{\n    sum ← 0\n    FOR EACH item IN list\n    {\n        sum ← sum + item\n    }\n    RETURN sum\n}\n\`\`\``,
      options: [
        'Change RETURN sum to RETURN sum / LENGTH(list)',
        'Add count ← count + 1 inside the loop',
        'Change sum ← 0 to sum ← LENGTH(list)',
        'The procedure is already correct'
      ],
      correctIndex: 0,
      explanation: 'Average = sum / count. The procedure correctly sums but forgets to divide. Return sum / LENGTH(list) computes the average.'
    },
    {
      question: `What is returned by mystery([1, 4, 2, 8, 5])?\n\n\`\`\`\nPROCEDURE mystery(list)\n{\n    IF (LENGTH(list) = 0)\n    {\n        RETURN 0\n    }\n    max ← list[1]\n    min ← list[1]\n    FOR EACH item IN list\n    {\n        IF (item > max)\n        {\n            max ← item\n        }\n        IF (item < min)\n        {\n            min ← item\n        }\n    }\n    RETURN max - min\n}\n\`\`\``,
      options: ['7', '8', '1', '9'],
      correctIndex: 0,
      explanation: 'The procedure finds max (8) and min (1), then returns their difference (8-1=7). This is the range of the list.'
    },
    {
      question: `Why might a programmer choose to write a procedure with no return value (a "void" procedure)?`,
      options: [
        'When the procedure performs an action like displaying output or modifying external state',
        'Procedures must always return a value',
        'To make the code run faster',
        'When working with lists only'
      ],
      correctIndex: 0,
      explanation: 'Procedures without return values perform side effects: printing, modifying global variables, updating files, or changing parameters (in languages with pass-by-reference). Not all procedures compute and return a value.'
    },
    {
      question: `What is the output?\n\n\`\`\`\nPROCEDURE double(x)\n{\n    x ← x * 2\n    RETURN x\n}\n\nPROCEDURE quadruple(x)\n{\n    x ← double(x)\n    x ← double(x)\n    RETURN x\n}\n\nDISPLAY(quadruple(3))\n\`\`\``,
      options: ['12', '6', '24', '9'],
      correctIndex: 0,
      explanation: 'quadruple(3): x = double(3) = 6, then x = double(6) = 12. The procedure reuses double to multiply by 4.'
    },
    {
      question: `Which describes the relationship between these two procedures?\n\n\`\`\`\nPROCEDURE isPositive(n)\n{\n    RETURN n > 0\n}\n\nPROCEDURE absValue(n)\n{\n    IF (isPositive(n))\n    {\n        RETURN n\n    }\n    RETURN -n\n}\n\`\`\``,
      options: [
        'absValue calls isPositive - demonstrating procedure reuse',
        'isPositive calls absValue - demonstrating recursion',
        'They are independent procedures',
        'absValue returns the same value as isPositive'
      ],
      correctIndex: 0,
      explanation: 'absValue uses isPositive to check the sign, then returns appropriately. This shows how procedures can build on each other, with isPositive being a helper procedure.'
    }
  ],

  'topic-3.14': [
    {
      question: `A student uses a library procedure SORT(list) that sorts a list in ascending order. The documentation doesn't specify the algorithm used. Why is this an example of good abstraction?`,
      options: [
        'The user only needs to know WHAT the procedure does, not HOW it works internally',
        'The user needs to understand the sorting algorithm to use it',
        'Libraries must always document their internal algorithms',
        'Using libraries is bad practice because you cannot see the code'
      ],
      correctIndex: 0,
      explanation: 'Abstraction hides implementation details. Users only need to know the interface (input: list, output: sorted list), not whether it uses quicksort, mergesort, etc. This allows the library to be improved without affecting users.'
    },
    {
      question: `A library provides these procedures:\n\n- HTTP_GET(url) → returns response\n- HTTP_POST(url, data) → returns response  \n- PARSE_JSON(text) → returns data structure\n\nWhat type of library is this most likely?`,
      options: [
        'A web/networking library for making API calls',
        'A mathematical computation library',
        'A graphics/visualization library',
        'A file system library'
      ],
      correctIndex: 0,
      explanation: 'HTTP_GET, HTTP_POST, and PARSE_JSON are typical web programming procedures for making requests to servers and parsing responses. This is a networking/API library.'
    },
    {
      question: `A library has a RANDOM(min, max) procedure. A programmer writes:\n\n\`\`\`\nresult ← RANDOM(1, 6) + RANDOM(1, 6)\n\`\`\`\n\nWhat are the possible values of result?`,
      options: ['2 to 12', '1 to 6', '2 to 6', '1 to 12'],
      correctIndex: 0,
      explanation: 'Each RANDOM(1,6) returns 1-6. Minimum sum: 1+1=2. Maximum sum: 6+6=12. This simulates rolling two dice.'
    },
    {
      question: `Why do programmers use libraries instead of writing all code from scratch?`,
      options: [
        'All of the above are valid reasons',
        'Libraries are tested and debugged by experts',
        'Libraries save development time',
        'Libraries provide functionality that would be complex to implement'
      ],
      correctIndex: 0,
      explanation: 'Libraries offer pre-written, tested code that saves time and provides expert implementations of complex algorithms. Using libraries is a best practice in software development.'
    },
    {
      question: `A graphics library provides:\n\n- drawCircle(x, y, radius)\n- drawRectangle(x, y, width, height)\n- setColor(r, g, b)\n\nWhat code draws a red circle at position (100, 100) with radius 50?`,
      options: [
        'setColor(255, 0, 0) then drawCircle(100, 100, 50)',
        'drawCircle(100, 100, 50, "red")',
        'setColor("red") then drawCircle(100, 100, 50)',
        'drawCircle(100, 100, 50) then setColor(255, 0, 0)'
      ],
      correctIndex: 0,
      explanation: 'setColor takes RGB values (255,0,0 = red) and must be called before drawing. drawCircle takes x, y, radius. Order matters: set color first, then draw.'
    },
    {
      question: `A library documentation shows:\n\n\`\`\`\nPROCEDURE encrypt(plaintext, key) → ciphertext\nPROCEDURE decrypt(ciphertext, key) → plaintext\n\`\`\`\n\nWhat property must be true for these procedures to be useful?`,
      options: [
        'decrypt(encrypt(message, key), key) must equal message',
        'encrypt and decrypt must use the same algorithm',
        'The key must be the same length as the message',
        'encrypt(decrypt(message, key), key) must equal message'
      ],
      correctIndex: 0,
      explanation: 'Encryption is only useful if it can be reversed. Decrypting an encrypted message with the same key must return the original. This is the fundamental property of symmetric encryption.'
    },
    {
      question: `What is an API (Application Programming Interface)?`,
      options: [
        'A set of procedures and protocols that allow different software components to communicate',
        'The internal implementation of a library',
        'A programming language',
        'A type of database'
      ],
      correctIndex: 0,
      explanation: 'An API defines how to interact with a software component - what procedures are available, what parameters they take, and what they return. It\'s the public interface, not the internal implementation.'
    },
    {
      question: `A math library provides: SQRT(n), ABS(n), POWER(base, exp), LOG(n). A programmer needs to calculate the distance between points (3,4) and (7,1). Which expression is correct?`,
      options: [
        'SQRT(POWER(7-3, 2) + POWER(1-4, 2))',
        'ABS(7-3) + ABS(1-4)',
        'SQRT(ABS(7-3) + ABS(1-4))',
        'POWER(7-3, 2) + POWER(1-4, 2)'
      ],
      correctIndex: 0,
      explanation: 'Distance formula: √((x₂-x₁)² + (y₂-y₁)²). Using the library: SQRT(POWER(7-3, 2) + POWER(1-4, 2)) = SQRT(16 + 9) = SQRT(25) = 5.'
    },
    {
      question: `When choosing between multiple libraries that provide similar functionality, which factor is LEAST important?`,
      options: [
        'The programming language the library was written in internally',
        'How well the library is documented',
        'Whether the library is actively maintained',
        'The library\'s performance characteristics'
      ],
      correctIndex: 0,
      explanation: 'The internal implementation language is hidden by abstraction - users don\'t need to know it. Documentation, maintenance, and performance directly affect usability and reliability.'
    },
    {
      question: `A library procedure has this signature:\n\n\`\`\`\nPROCEDURE readFile(filepath, encoding, errorHandler)\n\`\`\`\n\nWhat does the errorHandler parameter likely represent?`,
      options: [
        'A procedure to call if the file cannot be read',
        'The error message to display',
        'A boolean indicating whether to handle errors',
        'The line number where errors occurred'
      ],
      correctIndex: 0,
      explanation: 'Passing a procedure as a parameter (callback) is common for error handling. If readFile fails, it calls errorHandler instead of crashing, allowing custom error responses.'
    }
  ],

  'topic-3.15': [
    {
      question: `What are the possible values of result?\n\n\`\`\`\nresult ← RANDOM(1, 4) * RANDOM(1, 4)\n\`\`\``,
      options: [
        '1, 2, 3, 4, 6, 8, 9, 12, 16',
        '1 through 16',
        '2, 4, 6, 8, 10, 12, 14, 16',
        '1, 4, 9, 16'
      ],
      correctIndex: 0,
      explanation: 'Each RANDOM is 1-4. Products: 1×1=1, 1×2=2, 1×3=3, 1×4=4, 2×2=4, 2×3=6, 2×4=8, 3×3=9, 3×4=12, 4×4=16. Unique values: 1,2,3,4,6,8,9,12,16. Note: 5,7,10,11,13,14,15 are impossible.'
    },
    {
      question: `A game needs to randomly select one of 5 players (numbered 1-5) where player 1 has twice the chance of being selected as others. Which code is correct?`,
      options: [
        'r ← RANDOM(1,6); IF r ≤ 2 THEN player←1 ELSE player←r-1',
        'player ← RANDOM(1, 5)',
        'player ← RANDOM(1, 10) MOD 5 + 1',
        'IF RANDOM(1,2)=1 THEN player←1 ELSE player←RANDOM(2,5)'
      ],
      correctIndex: 0,
      explanation: 'Need player 1 with prob 2/6, others 1/6 each. RANDOM(1,6): if 1 or 2 → player 1, if 3→2, if 4→3, if 5→4, if 6→5. This gives 2/6 for player 1, 1/6 for others.'
    },
    {
      question: `What is the probability that this code displays "WIN"?\n\n\`\`\`\na ← RANDOM(1, 10)\nb ← RANDOM(1, 10)\nIF (a = b)\n{\n    DISPLAY("WIN")\n}\n\`\`\``,
      options: ['10% (1/10)', '1% (1/100)', '50% (1/2)', '20% (1/5)'],
      correctIndex: 0,
      explanation: 'There are 100 equally likely outcomes (10×10). a=b in exactly 10 cases: (1,1), (2,2), ..., (10,10). Probability = 10/100 = 10% = 1/10.'
    },
    {
      question: `This code simulates a coin flip. What is wrong?\n\n\`\`\`\nflip ← RANDOM(0, 1)\nIF (flip = 0)\n{\n    DISPLAY("Heads")\n}\nIF (flip = 1)\n{\n    DISPLAY("Tails")\n}\n\`\`\``,
      options: [
        'Nothing is wrong; this correctly simulates a fair coin',
        'RANDOM should be RANDOM(1, 2)',
        'The second IF should be ELSE',
        'flip should be compared to 0.5'
      ],
      correctIndex: 0,
      explanation: 'RANDOM(0,1) returns either 0 or 1 with equal probability. The code correctly maps 0→Heads and 1→Tails. Using ELSE would also work but isn\'t required.'
    },
    {
      question: `What does this code compute over many runs?\n\n\`\`\`\ncount ← 0\nREPEAT 1000 TIMES\n{\n    r ← RANDOM(1, 6)\n    IF (r = 6)\n    {\n        count ← count + 1\n    }\n}\nDISPLAY(count / 1000)\n\`\`\``,
      options: [
        'Approximately 0.167 (probability of rolling 6)',
        'Approximately 6',
        'Approximately 0.5',
        'Exactly 166 or 167'
      ],
      correctIndex: 0,
      explanation: 'This estimates P(rolling 6) by simulation. With 1000 trials, count≈167, and count/1000≈0.167≈1/6. This is a Monte Carlo simulation.'
    },
    {
      question: `A program needs to randomly shuffle a list. Which approach is correct?\n\n\`\`\`\nFOR i ← LENGTH(list) DOWN TO 2\n{\n    j ← RANDOM(1, i)\n    swap list[i] and list[j]\n}\n\`\`\``,
      options: [
        'This is the Fisher-Yates shuffle - correct and unbiased',
        'This only partially shuffles the list',
        'This will cause an error when i = 2',
        'This biases toward certain permutations'
      ],
      correctIndex: 0,
      explanation: 'Fisher-Yates shuffle: swap each position with a random earlier position (including itself). This produces all n! permutations with equal probability. It\'s the standard shuffling algorithm.'
    },
    {
      question: `What is the expected average value after running this 10000 times?\n\n\`\`\`\nsum ← RANDOM(1,6) + RANDOM(1,6) + RANDOM(1,6)\n\`\`\``,
      options: ['10.5', '9', '18', '12'],
      correctIndex: 0,
      explanation: 'Expected value of one die: (1+2+3+4+5+6)/6 = 3.5. Three dice: 3.5 × 3 = 10.5. Over many trials, the average converges to this expected value.'
    },
    {
      question: `To simulate a 70% chance of success, which code is correct?`,
      options: [
        'IF (RANDOM(1, 100) ≤ 70) success ← true',
        'IF (RANDOM(1, 10) = 7) success ← true',
        'IF (RANDOM(0, 1) = 0.7) success ← true',
        'IF (RANDOM(1, 70) ≤ 70) success ← true'
      ],
      correctIndex: 0,
      explanation: 'RANDOM(1,100) gives integers 1-100. Values 1-70 (70 values) represent success = 70/100 = 70%. Option B gives 10%. Option C compares to a float (won\'t work). Option D always succeeds.'
    },
    {
      question: `What does "pseudo-random" mean in the context of computer-generated random numbers?`,
      options: [
        'Numbers that appear random but are generated by a deterministic algorithm',
        'Numbers that are truly random from quantum processes',
        'Numbers that are only partially random',
        'Numbers generated by user input'
      ],
      correctIndex: 0,
      explanation: 'Computers use algorithms (PRNGs) that produce sequences that appear random but are deterministic - given the same seed, they produce the same sequence. "Pseudo" means "appearing to be."'
    },
    {
      question: `A password generator uses RANDOM to select characters. Which is the MOST secure approach?`,
      options: [
        'Use a cryptographically secure random number generator',
        'Use the current time as the random seed',
        'Call RANDOM multiple times for each character',
        'Use RANDOM(1, 26) for letters only'
      ],
      correctIndex: 0,
      explanation: 'Cryptographically secure PRNGs are designed to be unpredictable even if some outputs are known. Regular RANDOM may be predictable if the seed is guessed. Time-based seeds are particularly vulnerable.'
    }
  ],

  'topic-3.16': [
    {
      question: `A simulation models traffic flow at an intersection. Which is NOT a benefit of using simulation vs. real-world testing?`,
      options: [
        'Simulations guarantee perfectly accurate predictions',
        'Simulations are safer (no real accidents)',
        'Simulations are cheaper than building test intersections',
        'Simulations can test years of traffic in minutes'
      ],
      correctIndex: 0,
      explanation: 'Simulations approximate reality but cannot guarantee perfect predictions - they depend on model accuracy. They ARE safer, cheaper, and faster than real-world testing.'
    },
    {
      question: `A disease spread simulation uses these parameters:\n\n- infectionRate: probability of spreading per contact\n- contactsPerDay: average contacts per person\n- recoveryTime: days until recovery\n\nWhat happens if infectionRate is doubled?`,
      options: [
        'Disease spreads faster, potentially infecting more people',
        'Disease spreads slower due to immunity',
        'Recovery time decreases',
        'Number of contacts decreases'
      ],
      correctIndex: 0,
      explanation: 'Higher infection rate means each contact is more likely to spread disease, causing faster exponential growth. This demonstrates how simulations test parameter sensitivity.'
    },
    {
      question: `A Monte Carlo simulation estimates π by:\n1. Generating random points in a square from (0,0) to (1,1)\n2. Counting points inside a quarter circle of radius 1\n3. Calculating: π ≈ 4 × (points inside / total points)\n\nWhy does this work?`,
      options: [
        'The ratio of circle area to square area equals π/4',
        'Random points always land on π',
        'The diagonal of the square equals π',
        'Monte Carlo simulations always return π'
      ],
      correctIndex: 0,
      explanation: 'Quarter circle area = πr²/4 = π/4. Square area = 1. Ratio of points inside ≈ area ratio = π/4. So π ≈ 4 × ratio. This demonstrates using randomness to estimate mathematical values.'
    },
    {
      question: `A weather simulation correctly predicts sunny weather 80% of the time when it\'s actually sunny, and correctly predicts rain 70% of the time when it\'s actually rainy. The simulation predicts rain. What can we conclude?`,
      options: [
        'There\'s a 70% chance it will actually rain (assuming it\'s a rainy day)',
        'It will definitely rain',
        'There\'s an 80% chance of sun',
        'We cannot make any prediction'
      ],
      correctIndex: 0,
      explanation: 'The 70% accuracy for rainy days means: IF it\'s actually rainy, the simulation predicts rain 70% of the time. But we need to consider base rates (how often it actually rains) for full analysis.'
    },
    {
      question: `Which scenario is BEST suited for simulation rather than direct calculation?`,
      options: [
        'Modeling stock market behavior over 10 years',
        'Calculating compound interest',
        'Finding the area of a triangle',
        'Converting between temperature scales'
      ],
      correctIndex: 0,
      explanation: 'Stock markets involve countless variables, random events, and human behavior - too complex for direct formulas. Simulations can model many scenarios. The others have simple direct formulas.'
    },
    {
      question: `A simulation runs 1000 trials and gets an average result of 42. Running it again gives 43. A third run gives 41. What explains this variation?`,
      options: [
        'Random number generation causes different outcomes each run',
        'The simulation has bugs',
        'The computer clock affects results',
        '1000 trials is too few to get any answer'
      ],
      correctIndex: 0,
      explanation: 'Simulations use random numbers, so each run produces slightly different results. More trials reduce variation but never eliminate it. The results (41-43) are all close to the "true" value.'
    },
    {
      question: `A flight simulator for pilot training must:\n\n1. Respond in real-time\n2. Accurately model aircraft physics\n3. Simulate various weather conditions\n\nWhich tradeoff is MOST common in simulations?`,
      options: [
        'Accuracy vs. speed: more accurate models run slower',
        'Weather vs. physics: can\'t simulate both',
        'Real-time vs. training: real-time isn\'t useful for training',
        'Color vs. accuracy: colorful graphics reduce accuracy'
      ],
      correctIndex: 0,
      explanation: 'More detailed physical models require more computation, slowing the simulation. Designers must balance model accuracy with real-time performance requirements. This is a fundamental simulation tradeoff.'
    },
    {
      question: `A simulation models a new medication\'s effects. It shows 95% effectiveness in treating symptoms. Before approving the drug, what MUST also happen?`,
      options: [
        'Real clinical trials with actual patients',
        'Running the simulation 1 million times',
        'Having another computer verify the simulation',
        'Nothing - simulations are sufficient for drug approval'
      ],
      correctIndex: 0,
      explanation: 'Simulations cannot capture all biological complexity. Real clinical trials are legally required for drug approval because simulations may miss real-world effects, side effects, or interactions.'
    },
    {
      question: `An ecosystem simulation models predator-prey relationships. Adding which feature would MOST improve realism?`,
      options: [
        'Seasonal variations in food supply and birth rates',
        'Exactly 1000 animals of each species',
        'Removing random elements',
        'Making all animals move at the same speed'
      ],
      correctIndex: 0,
      explanation: 'Real ecosystems have seasonal cycles affecting food, reproduction, and behavior. Adding this makes the model more realistic. Removing randomness or enforcing uniformity reduces realism.'
    },
    {
      question: `What is a key limitation of ALL computer simulations?`,
      options: [
        'They are models of reality, not reality itself - they cannot capture everything',
        'They can only run for a few seconds',
        'They cannot use random numbers',
        'They always give the exact same results'
      ],
      correctIndex: 0,
      explanation: 'Every simulation is a simplified model that omits some real-world factors. No simulation perfectly represents reality. Understanding model limitations is crucial for interpreting results.'
    }
  ],

  'topic-3.17': [
    {
      question: `Algorithm A takes 100 steps for input size 10 and 400 steps for input size 20. Algorithm B takes 20 steps for size 10 and 40 steps for size 20. Which statement is correct?`,
      options: [
        'A is O(n²), B is O(n) - B scales better for large inputs',
        'A is faster because 100 > 20 for size 10',
        'Both have the same efficiency',
        'Cannot determine efficiency from this data'
      ],
      correctIndex: 0,
      explanation: 'A: 100=10², 400=20² → O(n²). B: 20=2×10, 40=2×20 → O(n). For large n, O(n) vastly outperforms O(n²). B will eventually beat A despite A\'s coefficients.'
    },
    {
      question: `What is the time complexity of this code?\n\n\`\`\`\nFOR i ← 1 TO n\n{\n    FOR j ← 1 TO n\n    {\n        FOR k ← 1 TO n\n        {\n            DISPLAY(i + j + k)\n        }\n    }\n}\n\`\`\``,
      options: ['O(n³)', 'O(n²)', 'O(n)', 'O(3n)'],
      correctIndex: 0,
      explanation: 'Three nested loops, each running n times: n × n × n = n³ total iterations. This is O(n³), also called cubic time complexity.'
    },
    {
      question: `A list has n elements. Linear search takes n comparisons in the worst case. Binary search takes log₂(n) comparisons. For n = 1,000,000, approximately how many comparisons does binary search need?`,
      options: ['20', '500,000', '1,000', '100'],
      correctIndex: 0,
      explanation: 'log₂(1,000,000) ≈ 20 (since 2²⁰ ≈ 1,000,000). Binary search needs only about 20 comparisons vs. 1,000,000 for linear search. This shows the power of O(log n) algorithms.'
    },
    {
      question: `Which algorithm has the BEST worst-case time complexity for sorting n elements?`,
      options: [
        'Merge sort: O(n log n)',
        'Bubble sort: O(n²)',
        'Selection sort: O(n²)',
        'Insertion sort: O(n²)'
      ],
      correctIndex: 0,
      explanation: 'Merge sort guarantees O(n log n) even in the worst case. Bubble, selection, and insertion sort are all O(n²) in the worst case. For large n, merge sort is significantly faster.'
    },
    {
      question: `An algorithm\'s runtime doubles when the input size doubles. What is its time complexity?`,
      options: ['O(n)', 'O(n²)', 'O(log n)', 'O(2ⁿ)'],
      correctIndex: 0,
      explanation: 'If runtime doubles when n doubles, runtime ∝ n. This is linear time, O(n). O(n²) would quadruple. O(log n) would increase by 1. O(2ⁿ) would increase dramatically.'
    },
    {
      question: `What is the time complexity of this code?\n\n\`\`\`\ni ← n\nWHILE (i > 1)\n{\n    // do something in constant time\n    i ← i / 2\n}\n\`\`\``,
      options: ['O(log n)', 'O(n)', 'O(n/2)', 'O(1)'],
      correctIndex: 0,
      explanation: 'i is halved each iteration: n → n/2 → n/4 → ... → 1. This takes log₂(n) steps. Halving repeatedly is the hallmark of O(log n) algorithms (like binary search).'
    },
    {
      question: `Which statement about Big-O notation is TRUE?`,
      options: [
        'It describes how runtime grows as input size increases, ignoring constants',
        'It measures exact runtime in seconds',
        'O(100n) is worse than O(n²) for all inputs',
        'It only applies to sorting algorithms'
      ],
      correctIndex: 0,
      explanation: 'Big-O describes growth rate, ignoring constant factors. O(100n) and O(n) are the same - both linear. O(n²) eventually exceeds any O(n) as n grows, regardless of constants.'
    },
    {
      question: `An algorithm runs in O(2ⁿ) time. If it takes 1 second for n=20, approximately how long for n=30?`,
      options: [
        'About 1000 seconds (17 minutes)',
        '10 seconds',
        '30 seconds',
        '1.5 seconds'
      ],
      correctIndex: 0,
      explanation: 'O(2ⁿ): going from n=20 to n=30 means 2³⁰/2²⁰ = 2¹⁰ = 1024 times longer. So 1 second × 1024 ≈ 1000 seconds ≈ 17 minutes. Exponential algorithms become impractical quickly.'
    },
    {
      question: `What is the time complexity of finding the minimum value in an unsorted list of n elements?`,
      options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
      correctIndex: 0,
      explanation: 'Must examine every element once to ensure we\'ve found the minimum (any unchecked element could be smaller). This requires exactly n comparisons, so O(n).'
    },
    {
      question: `Algorithms A and B both solve the same problem. A is O(n²) with small constants, B is O(n log n) with large constants. For small inputs, A might be faster. What happens as n grows very large?`,
      options: [
        'B eventually becomes faster and the gap keeps widening',
        'A remains faster due to smaller constants',
        'They become equally fast',
        'It depends on the specific input values'
      ],
      correctIndex: 0,
      explanation: 'For any constants, n² eventually exceeds n log n. Constants only determine the crossover point. For large n, the lower-order algorithm (B) always wins, and the gap grows without bound.'
    }
  ],

  'topic-3.18': [
    {
      question: `The Halting Problem asks: "Given a program and input, determine if it halts or runs forever." Why is this problem undecidable?`,
      options: [
        'Any program that claims to solve it leads to a logical contradiction',
        'Computers are too slow to analyze programs',
        'Programs can have infinitely many inputs',
        'It requires quantum computing'
      ],
      correctIndex: 0,
      explanation: 'Turing proved that assuming a halting detector exists leads to contradiction: we can construct a program that halts if and only if the detector says it doesn\'t halt. This self-reference makes the problem unsolvable in general.'
    },
    {
      question: `Which problem is undecidable?`,
      options: [
        'Given any program P, determine if P ever outputs "hello"',
        'Given a list, determine if it is sorted',
        'Given a number, determine if it is prime',
        'Given a maze, determine if a path exists'
      ],
      correctIndex: 0,
      explanation: 'Determining if a program produces specific output is undecidable (reducible to the halting problem). The others are decidable: sorting is O(n), primality testing exists, maze paths can be found with BFS/DFS.'
    },
    {
      question: `A company claims their software can analyze any code and guarantee it has no bugs. Why is this claim impossible?`,
      options: [
        'Proving arbitrary program correctness is undecidable (Rice\'s theorem)',
        'Bugs are subjective',
        'They need more testing time',
        'Only humans can find bugs'
      ],
      correctIndex: 0,
      explanation: 'Rice\'s theorem states that any non-trivial property of programs is undecidable. Bug-freedom is such a property. Limited analysis is possible, but guarantees for all programs are mathematically impossible.'
    },
    {
      question: `What is the relationship between undecidable and unsolvable problems?`,
      options: [
        'Undecidable problems cannot be solved by any algorithm, ever',
        'Undecidable problems just need faster computers',
        'Undecidable problems can be solved for some inputs',
        'All problems are eventually solvable with better algorithms'
      ],
      correctIndex: 2,
      explanation: 'Undecidable problems can often be solved for SPECIFIC inputs - we can run a program and observe it halt. What\'s impossible is a GENERAL algorithm that works for ALL inputs. The impossibility is proven mathematically.'
    },
    {
      question: `A problem requires checking if two programs always produce the same output. This is called the equivalence problem. Is it decidable?`,
      options: [
        'No - it reduces to the halting problem and is undecidable',
        'Yes - just run both programs and compare outputs',
        'Yes - analyze the source code directly',
        'Only for programs under 100 lines'
      ],
      correctIndex: 0,
      explanation: 'Program equivalence is undecidable. If we could solve it, we could solve halting: program P halts ⟺ P is equivalent to a program that returns immediately. Any significant program property is typically undecidable.'
    },
    {
      question: `Which approach do developers use despite the halting problem being unsolvable?`,
      options: [
        'Heuristics that catch common cases but may not handle all programs',
        'Solving the halting problem with quantum computers',
        'Avoiding loops entirely',
        'Using only decidable programming languages'
      ],
      correctIndex: 0,
      explanation: 'While perfect solutions are impossible, heuristics, static analyzers, and testing catch many real bugs. Linters, type checkers, and code review help despite not being complete solutions.'
    },
    {
      question: `The Post Correspondence Problem (PCP) is undecidable. Given tiles with strings, can you arrange them so top and bottom strings match? This is used to prove:`,
      options: [
        'Other problems are undecidable by reduction',
        'All string problems are undecidable',
        'Tiles are harder than computers',
        'Quantum computers can solve all problems'
      ],
      correctIndex: 0,
      explanation: 'PCP is a known undecidable problem useful for proving OTHER problems undecidable. If problem X can encode PCP, then X is also undecidable. This is proof by reduction.'
    },
    {
      question: `Can a computer determine if a given mathematical statement is true or false?`,
      options: [
        'No - Gödel proved some true statements cannot be proven within any consistent system',
        'Yes - computers can check all proofs',
        'Only with quantum computing',
        'Yes - given enough time'
      ],
      correctIndex: 0,
      explanation: 'Gödel\'s incompleteness theorems prove that in any consistent formal system complex enough for arithmetic, there exist true statements that cannot be proven. This is related to undecidability.'
    },
    {
      question: `A virus scanner claims to detect "all possible malware." Why is this impossible in principle?`,
      options: [
        'Detecting if arbitrary code is malicious is undecidable',
        'New malware is created daily',
        'Malware can hide from scanners',
        'Virus definitions become outdated'
      ],
      correctIndex: 0,
      explanation: 'Determining if arbitrary code does "bad things" (deletes files, steals data) is undecidable - reducible to halting. Real scanners use signatures and heuristics but cannot guarantee detection of all malware.'
    },
    {
      question: `What is the practical impact of undecidability on programmers?`,
      options: [
        'Some problems require accepting approximate or partial solutions',
        'Programmers cannot write complex programs',
        'All programs must be finite',
        'There is no practical impact'
      ],
      correctIndex: 0,
      explanation: 'Undecidability means perfect solutions don\'t exist for certain problems. Programmers use timeouts, approximations, heuristics, and human oversight. Understanding limits helps set realistic expectations.'
    }
  ]
};

async function seedHardQuestions() {
  console.log('Seeding HARD questions for Big Idea 3, Part 3 (Topics 3.13-3.18)...\n');

  const batch = db.batch();
  let totalAdded = 0;

  for (const [topicId, questions] of Object.entries(hardQuestions)) {
    console.log(`\nAdding hard questions for ${topicId}:`);

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const questionId = `${topicId}-hard-${i + 1}`;

      const questionDoc = {
        id: questionId,
        topicId: topicId,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
        difficulty: 'hard',
        isCustom: false,
        deactivated: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      batch.set(db.collection('questions').doc(questionId), questionDoc);
      totalAdded++;
    }

    console.log(`  Added ${questions.length} hard questions to ${topicId}`);
  }

  await batch.commit();
  console.log(`\n✓ Successfully added ${totalAdded} hard questions for topics 3.13-3.18`);
}

seedHardQuestions()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
