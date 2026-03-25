/**
 * Seed HARD questions for Big Idea 3, Part 2 (Topics 3.7-3.12)
 * These use AP CSP pseudocode and have plausible distractors
 * Run with: node server/seeds/seed-bigidea3-hard-part2.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const hardQuestions = {
  'topic-3.7': [
    {
      question: `What is displayed?\n\n\`\`\`\nx ← 5\ny ← 8\nIF (x < 10)\n{\n    IF (y < 5)\n    {\n        DISPLAY("A")\n    }\n    ELSE\n    {\n        IF (x + y > 10)\n        {\n            DISPLAY("B")\n        }\n        ELSE\n        {\n            DISPLAY("C")\n        }\n    }\n}\nELSE\n{\n    DISPLAY("D")\n}\n\`\`\``,
      options: ['"B"', '"A"', '"C"', '"D"'],
      correctIndex: 0,
      explanation: 'x=5: x<10 is true (enter first IF). y=8: y<5 is false (go to ELSE). x+y=13: 13>10 is true → "B". Trace each nested level carefully.'
    },
    {
      question: `What is the value of result?\n\n\`\`\`\na ← 3\nb ← 7\nc ← 5\nresult ← 0\nIF (a < b)\n{\n    IF (b < c)\n    {\n        result ← 1\n    }\n    ELSE\n    {\n        IF (a < c)\n        {\n            result ← 2\n        }\n        ELSE\n        {\n            result ← 3\n        }\n    }\n}\nELSE\n{\n    result ← 4\n}\n\`\`\``,
      options: ['2', '1', '3', '4'],
      correctIndex: 0,
      explanation: 'a=3, b=7, c=5. a<b (3<7) true. b<c (7<5) false → ELSE. a<c (3<5) true → result=2. Students must trace all three comparisons.'
    },
    {
      question: `A grading program uses nested conditionals. What grade is assigned for score = 75?\n\n\`\`\`\nIF (score ≥ 90)\n{\n    grade ← "A"\n}\nELSE\n{\n    IF (score ≥ 80)\n    {\n        grade ← "B"\n    }\n    ELSE\n    {\n        IF (score ≥ 70)\n        {\n            grade ← "C"\n        }\n        ELSE\n        {\n            IF (score ≥ 60)\n            {\n                grade ← "D"\n            }\n            ELSE\n            {\n                grade ← "F"\n            }\n        }\n    }\n}\n\`\`\``,
      options: ['"C"', '"B"', '"D"', '"F"'],
      correctIndex: 0,
      explanation: 'score=75: 75≥90 false, 75≥80 false, 75≥70 true → grade="C". The nested IF-ELSE structure finds the first matching range.'
    },
    {
      question: `What is displayed when age=17 and hasLicense=true?\n\n\`\`\`\nIF (age ≥ 16)\n{\n    IF (hasLicense)\n    {\n        IF (age ≥ 18)\n        {\n            DISPLAY("Can drive alone")\n        }\n        ELSE\n        {\n            DISPLAY("Can drive with adult")\n        }\n    }\n    ELSE\n    {\n        DISPLAY("Get a license first")\n    }\n}\nELSE\n{\n    DISPLAY("Too young")\n}\n\`\`\``,
      options: ['"Can drive with adult"', '"Can drive alone"', '"Get a license first"', '"Too young"'],
      correctIndex: 0,
      explanation: 'age=17≥16 true, hasLicense true, age=17≥18 false → "Can drive with adult". Three levels of nesting must be traced.'
    },
    {
      question: `How many possible different outputs can this code produce?\n\n\`\`\`\nIF (condition1)\n{\n    IF (condition2)\n    {\n        DISPLAY("A")\n    }\n    ELSE\n    {\n        DISPLAY("B")\n    }\n}\nELSE\n{\n    IF (condition3)\n    {\n        DISPLAY("C")\n    }\n    ELSE\n    {\n        DISPLAY("D")\n    }\n}\n\`\`\``,
      options: ['4', '2', '3', '8'],
      correctIndex: 0,
      explanation: 'There are 4 possible paths: A (c1 true, c2 true), B (c1 true, c2 false), C (c1 false, c3 true), D (c1 false, c3 false). Each path leads to exactly one output.'
    },
    {
      question: `What is the output?\n\n\`\`\`\nnum ← 12\nIF (num MOD 2 = 0)\n{\n    IF (num MOD 3 = 0)\n    {\n        IF (num MOD 4 = 0)\n        {\n            DISPLAY("Divisible by 12")\n        }\n        ELSE\n        {\n            DISPLAY("Divisible by 6")\n        }\n    }\n    ELSE\n    {\n        DISPLAY("Divisible by 2 only")\n    }\n}\nELSE\n{\n    DISPLAY("Odd")\n}\n\`\`\``,
      options: ['"Divisible by 12"', '"Divisible by 6"', '"Divisible by 2 only"', '"Odd"'],
      correctIndex: 0,
      explanation: '12 MOD 2=0 true, 12 MOD 3=0 true, 12 MOD 4=0 true → "Divisible by 12". All three nested conditions are satisfied.'
    },
    {
      question: `What is displayed when x=0, y=0?\n\n\`\`\`\nIF (x > 0)\n{\n    IF (y > 0)\n    {\n        DISPLAY("Quadrant I")\n    }\n    ELSE\n    {\n        DISPLAY("Quadrant IV")\n    }\n}\nELSE\n{\n    IF (y > 0)\n    {\n        DISPLAY("Quadrant II")\n    }\n    ELSE\n    {\n        DISPLAY("Quadrant III")\n    }\n}\n\`\`\``,
      options: ['"Quadrant III"', '"Quadrant I"', '"Quadrant II"', '"Origin"'],
      correctIndex: 0,
      explanation: 'x=0: x>0 false → ELSE. y=0: y>0 false → "Quadrant III". Note: This code doesn\'t handle the origin (0,0) or axes correctly, but per the logic, it outputs "Quadrant III".'
    },
    {
      question: `What is result when a=true, b=false, c=true?\n\n\`\`\`\nIF (a)\n{\n    IF (b)\n    {\n        result ← 1\n    }\n    ELSE\n    {\n        IF (c)\n        {\n            result ← 2\n        }\n        ELSE\n        {\n            result ← 3\n        }\n    }\n}\nELSE\n{\n    IF (c)\n    {\n        result ← 4\n    }\n    ELSE\n    {\n        result ← 5\n    }\n}\n\`\`\``,
      options: ['2', '1', '3', '4'],
      correctIndex: 0,
      explanation: 'a=true (enter first IF), b=false (go to ELSE), c=true → result=2. Students must track boolean values through three levels.'
    },
    {
      question: `A shipping calculator uses nested conditionals. What is the shipping cost for weight=15 and distance=500?\n\n\`\`\`\nIF (weight ≤ 10)\n{\n    IF (distance ≤ 100)\n    {\n        cost ← 5\n    }\n    ELSE\n    {\n        cost ← 10\n    }\n}\nELSE\n{\n    IF (distance ≤ 100)\n    {\n        cost ← 15\n    }\n    ELSE\n    {\n        IF (weight ≤ 20)\n        {\n            cost ← 25\n        }\n        ELSE\n        {\n            cost ← 50\n        }\n    }\n}\n\`\`\``,
      options: ['25', '15', '50', '10'],
      correctIndex: 0,
      explanation: 'weight=15: 15≤10 false → ELSE. distance=500: 500≤100 false → inner ELSE. weight=15: 15≤20 true → cost=25.'
    },
    {
      question: `Which set of inputs causes "Special" to be displayed?\n\n\`\`\`\nIF (x > 0)\n{\n    IF (y > 0)\n    {\n        IF (x = y)\n        {\n            DISPLAY("Special")\n        }\n    }\n}\n\`\`\``,
      options: ['x = 5, y = 5', 'x = -5, y = -5', 'x = 5, y = -5', 'x = 0, y = 0'],
      correctIndex: 0,
      explanation: 'Need x>0 AND y>0 AND x=y. Only x=5, y=5 satisfies all three conditions. x=-5,y=-5 fails x>0. x=0,y=0 fails x>0.'
    }
  ],

  'topic-3.8': [
    {
      question: `What is displayed?\n\n\`\`\`\ncount ← 0\ni ← 10\nREPEAT UNTIL (i < 1)\n{\n    count ← count + 1\n    i ← i - 2\n}\nDISPLAY(count)\n\`\`\``,
      options: ['5', '10', '4', '6'],
      correctIndex: 0,
      explanation: 'i starts at 10. Loop: i=10→8→6→4→2→0. When i=0, i<1 is true, loop stops. count increments 5 times (for i=10,8,6,4,2). Students might miscount or confuse the stopping condition.'
    },
    {
      question: `What is the final value of sum?\n\n\`\`\`\nsum ← 0\nREPEAT 5 TIMES\n{\n    sum ← sum + 2\n    sum ← sum * 2\n}\n\`\`\``,
      options: ['124', '60', '20', '62'],
      correctIndex: 0,
      explanation: 'Each iteration: +2 then *2. Start 0: 0+2=2, 2*2=4. Then 4+2=6, 6*2=12. Then 12+2=14, 14*2=28. Then 28+2=30, 30*2=60. Then 60+2=62, 62*2=124. Final: 124.'
    },
    {
      question: `How many times does "Hello" display?\n\n\`\`\`\nx ← 1\nREPEAT UNTIL (x > 100)\n{\n    DISPLAY("Hello")\n    x ← x * 2\n}\n\`\`\``,
      options: ['7', '100', '6', '8'],
      correctIndex: 0,
      explanation: 'x doubles each iteration: 1→2→4→8→16→32→64→128. When x=128, x>100 is true, loop stops. "Hello" displayed for x=1,2,4,8,16,32,64 = 7 times.'
    },
    {
      question: `What is displayed?\n\n\`\`\`\nn ← 5\nresult ← 1\nREPEAT n TIMES\n{\n    result ← result * n\n    n ← n - 1\n}\nDISPLAY(result)\n\`\`\``,
      options: ['600', '120', '3125', '1'],
      correctIndex: 0,
      explanation: 'Tricky: REPEAT n TIMES uses initial n=5. But n changes! Iteration 1: result=1*5=5, n=4. Iter 2: result=5*4=20, n=3. Iter 3: result=20*3=60, n=2. Iter 4: result=60*2=120, n=1. Iter 5: result=120*1=120. Final: 120? Wait, let me recalculate. Actually in AP pseudocode REPEAT n TIMES evaluates n once at the start, so it loops 5 times. Result: 5*4*3*2*1 = 120. But wait, result starts at 1, so: 1*5=5, 5*4=20, 20*3=60, 60*2=120, 120*1=120. Hmm that gives 120 but I put 600. Let me reconsider... Actually each time we multiply by current n THEN decrement. So: result=1*5=5 (n→4), result=5*4=20 (n→3), result=20*3=60 (n→2), result=60*2=120 (n→1), result=120*1=120. So answer should be 120. Let me fix the answer.'
    },
    {
      question: `What is the output?\n\n\`\`\`\na ← 3\nb ← 2\nREPEAT a TIMES\n{\n    REPEAT b TIMES\n    {\n        DISPLAY("*")\n    }\n}\n\`\`\``,
      options: ['6 asterisks', '5 asterisks', '9 asterisks', '3 asterisks'],
      correctIndex: 0,
      explanation: 'Outer loop runs 3 times. Each outer iteration runs inner loop 2 times. Total: 3 × 2 = 6 asterisks. Nested loops multiply iterations.'
    },
    {
      question: `What is the value of counter?\n\n\`\`\`\ncounter ← 0\ni ← 1\nREPEAT UNTIL (i > 10)\n{\n    IF (i MOD 2 = 0)\n    {\n        counter ← counter + 1\n    }\n    i ← i + 1\n}\n\`\`\``,
      options: ['5', '10', '4', '6'],
      correctIndex: 0,
      explanation: 'Loop runs for i=1 to 10. counter increments when i is even: 2,4,6,8,10 → 5 times. This counts even numbers from 1 to 10.'
    },
    {
      question: `What is displayed?\n\n\`\`\`\nx ← 0\ny ← 10\nREPEAT UNTIL (x ≥ y)\n{\n    x ← x + 3\n    y ← y - 2\n}\nDISPLAY(x)\nDISPLAY(y)\n\`\`\``,
      options: ['9 then 4', '12 then 2', '6 then 6', '15 then 0'],
      correctIndex: 0,
      explanation: 'Track x and y: (0,10)→(3,8)→(6,6)→(9,4). After (9,4): x≥y (9≥4) is true, loop stops. Final: x=9, y=4.'
    },
    {
      question: `This code should sum numbers from 1 to n. What is wrong?\n\n\`\`\`\nn ← 5\nsum ← 0\ni ← 0\nREPEAT n TIMES\n{\n    sum ← sum + i\n    i ← i + 1\n}\n\`\`\``,
      options: ['i should start at 1, not 0', 'sum should start at 1', 'The loop should run n+1 times', 'i ← i + 1 should come before sum ← sum + i'],
      correctIndex: 0,
      explanation: 'With i=0: sum = 0+1+2+3+4 = 10 (sums 0-4, not 1-5). With i=1: sum = 1+2+3+4+5 = 15 (correct). OR move increment before addition.'
    },
    {
      question: `What is the value of product?\n\n\`\`\`\nproduct ← 1\nn ← 4\nREPEAT UNTIL (n = 0)\n{\n    product ← product * n\n    n ← n - 1\n}\n\`\`\``,
      options: ['24', '0', '4', '10'],
      correctIndex: 0,
      explanation: 'This calculates 4! (factorial). product: 1*4=4, 4*3=12, 12*2=24, 24*1=24. When n=0, loop stops. Final product=24=4!'
    },
    {
      question: `How many iterations does this loop execute?\n\n\`\`\`\ni ← 100\nREPEAT UNTIL (i ≤ 0)\n{\n    i ← i - 7\n}\n\`\`\``,
      options: ['15', '14', '16', '100'],
      correctIndex: 0,
      explanation: 'i decreases by 7 each iteration: 100→93→86→...→2→-5. We need smallest k where 100-7k ≤ 0, i.e., k ≥ 100/7 ≈ 14.3. So k=15 iterations. Verify: after 14 iterations i=2, after 15 i=-5≤0.'
    }
  ],

  'topic-3.9': [
    {
      question: `This algorithm should find the maximum value in a list. What is the error?\n\n\`\`\`\nlist ← [3, 7, 2, 9, 4]\nmax ← 0\nFOR EACH num IN list\n{\n    IF (num > max)\n    {\n        max ← num\n    }\n}\nDISPLAY(max)\n\`\`\``,
      options: ['max should be initialized to list[1] or negative infinity, not 0', 'The condition should be num ≥ max', 'max should be initialized to the length of the list', 'The algorithm is correct'],
      correctIndex: 0,
      explanation: 'If all values were negative (e.g., [-5,-3,-1]), max=0 would never update and return 0, which isn\'t in the list. Initialize max to list[1] or a very small number.'
    },
    {
      question: `What does this algorithm compute?\n\n\`\`\`\nlist ← [4, 8, 2, 6, 10]\nresult ← list[1]\nFOR EACH item IN list\n{\n    IF (item < result)\n    {\n        result ← item\n    }\n}\nDISPLAY(result)\n\`\`\``,
      options: ['The minimum value in the list (2)', 'The maximum value in the list (10)', 'The first value in the list (4)', 'The last value in the list (10)'],
      correctIndex: 0,
      explanation: 'result starts at 4 (list[1]). It updates whenever a smaller item is found: 4→2 (when item=2). Final result=2, the minimum.'
    },
    {
      question: `What is displayed after this algorithm runs?\n\n\`\`\`\nlist ← [1, 2, 3, 4, 5]\nsum ← 0\ncount ← 0\nFOR EACH num IN list\n{\n    IF (num MOD 2 = 1)\n    {\n        sum ← sum + num\n        count ← count + 1\n    }\n}\nDISPLAY(sum / count)\n\`\`\``,
      options: ['3', '9', '15', '2.5'],
      correctIndex: 0,
      explanation: 'Odd numbers: 1, 3, 5. sum = 1+3+5 = 9. count = 3. Average = 9/3 = 3. This calculates the average of odd numbers.'
    },
    {
      question: `This algorithm checks if a list is sorted in ascending order. When does it return false incorrectly?\n\n\`\`\`\nPROCEDURE isSorted(list)\n{\n    i ← 1\n    REPEAT UNTIL (i ≥ LENGTH(list))\n    {\n        IF (list[i] > list[i + 1])\n        {\n            RETURN false\n        }\n        i ← i + 1\n    }\n    RETURN true\n}\n\`\`\``,
      options: ['It works correctly for ascending order', 'When the list has duplicates', 'When the list has one element', 'When the list is empty'],
      correctIndex: 0,
      explanation: 'The algorithm correctly checks if each element ≤ next element. Duplicates are fine (3≤3 doesn\'t trigger >). Single element: loop doesn\'t run, returns true. Empty list might cause issues depending on implementation.'
    },
    {
      question: `What does this algorithm do?\n\n\`\`\`\nPROCEDURE mystery(n)\n{\n    IF (n ≤ 1)\n    {\n        RETURN n\n    }\n    RETURN mystery(n-1) + mystery(n-2)\n}\n\`\`\``,
      options: ['Computes the nth Fibonacci number', 'Computes n factorial', 'Computes 2^n', 'Computes the sum from 1 to n'],
      correctIndex: 0,
      explanation: 'Base cases: F(0)=0, F(1)=1. Recursive case: F(n)=F(n-1)+F(n-2). This is the Fibonacci sequence definition.'
    },
    {
      question: `An algorithm searches for a target in a list. What is returned when target is not found?\n\n\`\`\`\nPROCEDURE linearSearch(list, target)\n{\n    i ← 1\n    REPEAT UNTIL (i > LENGTH(list))\n    {\n        IF (list[i] = target)\n        {\n            RETURN i\n        }\n        i ← i + 1\n    }\n    RETURN -1\n}\n\`\`\``,
      options: ['-1', '0', 'LENGTH(list)', 'Nothing (error)'],
      correctIndex: 0,
      explanation: 'If target isn\'t found, the loop completes without returning, then RETURN -1 executes. -1 is a common "not found" indicator since valid indices are positive.'
    },
    {
      question: `What is the output of this selection sort pass?\n\n\`\`\`\nlist ← [5, 2, 8, 1, 9]\nminIndex ← 1\nFOR i ← 2 TO LENGTH(list)\n{\n    IF (list[i] < list[minIndex])\n    {\n        minIndex ← i\n    }\n}\ntemp ← list[1]\nlist[1] ← list[minIndex]\nlist[minIndex] ← temp\nDISPLAY(list)\n\`\`\``,
      options: ['[1, 2, 8, 5, 9]', '[1, 2, 5, 8, 9]', '[5, 2, 8, 1, 9]', '[2, 5, 8, 1, 9]'],
      correctIndex: 0,
      explanation: 'Find minimum: compare 5,2,8,1,9. min is 1 at index 4. Swap list[1] and list[4]: [5,2,8,1,9] → [1,2,8,5,9]. One pass of selection sort.'
    },
    {
      question: `This algorithm counts occurrences of a value. What is displayed?\n\n\`\`\`\nlist ← [1, 2, 2, 3, 2, 4, 2]\ntarget ← 2\ncount ← 0\nFOR EACH item IN list\n{\n    IF (item = target)\n    {\n        count ← count + 1\n    }\n}\nDISPLAY(count)\n\`\`\``,
      options: ['4', '2', '3', '7'],
      correctIndex: 0,
      explanation: 'Count 2s in the list: positions 2,3,5,7 contain 2. count = 4. The algorithm correctly counts occurrences.'
    },
    {
      question: `What does this algorithm compute for list = [3, 1, 4, 1, 5]?\n\n\`\`\`\nlist ← [3, 1, 4, 1, 5]\nresult ← 0\nFOR i ← 1 TO LENGTH(list) - 1\n{\n    diff ← list[i + 1] - list[i]\n    IF (diff < 0)\n    {\n        diff ← -diff\n    }\n    result ← result + diff\n}\nDISPLAY(result)\n\`\`\``,
      options: ['9', '4', '14', '5'],
      correctIndex: 0,
      explanation: 'Sum of absolute differences between consecutive elements: |1-3|=2, |4-1|=3, |1-4|=3, |5-1|=4. Total: 2+3+3+4... wait let me recalculate. Differences: 1-3=-2→2, 4-1=3, 1-4=-3→3, 5-1=4. Sum: 2+3+3+4=12. Hmm, 9 doesn\'t match. Let me recount: |1-3|=2, |4-1|=3, |1-4|=3, |5-1|=4. 2+3+3+4=12. I need to fix this question.'
    },
    {
      question: `Which algorithm design approach does this represent?\n\n\`\`\`\nPROCEDURE solve(problem)\n{\n    IF (problem is simple)\n    {\n        RETURN simple solution\n    }\n    ELSE\n    {\n        subproblem1 ← first half of problem\n        subproblem2 ← second half of problem\n        solution1 ← solve(subproblem1)\n        solution2 ← solve(subproblem2)\n        RETURN combine(solution1, solution2)\n    }\n}\n\`\`\``,
      options: ['Divide and conquer', 'Brute force', 'Greedy algorithm', 'Linear search'],
      correctIndex: 0,
      explanation: 'This breaks a problem into smaller subproblems, solves them recursively, then combines results. This is the divide and conquer paradigm (used in merge sort, binary search).'
    }
  ],

  'topic-3.10': [
    {
      question: `What is displayed?\n\n\`\`\`\nlist ← [10, 20, 30, 40, 50]\nAPPEND(list, 60)\nREMOVE(list, 3)\nINSERT(list, 2, 15)\nDISPLAY(list)\n\`\`\``,
      options: ['[10, 15, 20, 40, 50, 60]', '[10, 15, 30, 40, 50, 60]', '[10, 20, 15, 40, 50, 60]', '[15, 10, 20, 40, 50, 60]'],
      correctIndex: 0,
      explanation: 'Start: [10,20,30,40,50]. APPEND 60: [10,20,30,40,50,60]. REMOVE index 3 (30): [10,20,40,50,60]. INSERT 15 at index 2: [10,15,20,40,50,60].'
    },
    {
      question: `What is the value of list[4] after this code?\n\n\`\`\`\nlist ← [5, 10, 15, 20, 25]\nlist[2] ← list[4]\nlist[4] ← list[2] + list[3]\n\`\`\``,
      options: ['35', '40', '30', '20'],
      correctIndex: 0,
      explanation: 'list[2] ← list[4] = 20. Now list = [5,20,15,20,25]. list[4] ← list[2] + list[3] = 20 + 15 = 35. Note: list[2] changed before the second assignment.'
    },
    {
      question: `What does this code display?\n\n\`\`\`\nlist ← [1, 2, 3, 4, 5]\ni ← 1\nREPEAT UNTIL (i > LENGTH(list))\n{\n    IF (list[i] MOD 2 = 0)\n    {\n        REMOVE(list, i)\n    }\n    ELSE\n    {\n        i ← i + 1\n    }\n}\nDISPLAY(list)\n\`\`\``,
      options: ['[1, 3, 5]', '[2, 4]', '[1, 2, 3, 4, 5]', '[1, 3]'],
      correctIndex: 0,
      explanation: 'This removes even numbers. Key: only increment i when NOT removing. i=1: 1 odd, i=2. i=2: 2 even, remove (list=[1,3,4,5]). i=2: 3 odd, i=3. i=3: 4 even, remove (list=[1,3,5]). i=3: 5 odd, i=4. i=4 > 3, stop. Result: [1,3,5].'
    },
    {
      question: `What is displayed?\n\n\`\`\`\na ← [1, 2, 3]\nb ← a\nAPPEND(b, 4)\nDISPLAY(LENGTH(a))\n\`\`\``,
      options: ['3 (if copy) or 4 (if reference)', '4', '3', '7'],
      correctIndex: 0,
      explanation: 'This depends on whether b←a creates a copy or a reference. In AP pseudocode, typically it\'s a copy (value semantics), so a stays [1,2,3] with length 3. In some languages with reference semantics, both would be length 4.'
    },
    {
      question: `What is the result of this code?\n\n\`\`\`\nlist ← []\nFOR i ← 1 TO 5\n{\n    APPEND(list, i * i)\n}\nDISPLAY(list[3])\n\`\`\``,
      options: ['9', '4', '3', '16'],
      correctIndex: 0,
      explanation: 'Build list of squares: 1,4,9,16,25. list = [1,4,9,16,25]. list[3] = 9 (third element). Remember: 1-indexed!'
    },
    {
      question: `What does this code compute?\n\n\`\`\`\nlist ← [4, 7, 2, 9, 1]\nn ← LENGTH(list)\nFOR i ← 1 TO n - 1\n{\n    FOR j ← 1 TO n - i\n    {\n        IF (list[j] > list[j + 1])\n        {\n            temp ← list[j]\n            list[j] ← list[j + 1]\n            list[j + 1] ← temp\n        }\n    }\n}\nDISPLAY(list)\n\`\`\``,
      options: ['[1, 2, 4, 7, 9] - sorted ascending', '[9, 7, 4, 2, 1] - sorted descending', '[4, 7, 2, 9, 1] - unchanged', '[2, 4, 7, 1, 9] - partially sorted'],
      correctIndex: 0,
      explanation: 'This is bubble sort. It repeatedly swaps adjacent elements if out of order, "bubbling" largest elements to the end. Result is ascending sorted list.'
    },
    {
      question: `After this code runs, what is sum?\n\n\`\`\`\nlist ← [10, 20, 30, 40, 50]\nsum ← 0\nFOR i ← 1 TO LENGTH(list)\n{\n    IF (i MOD 2 = 1)\n    {\n        sum ← sum + list[i]\n    }\n}\n\`\`\``,
      options: ['90', '60', '100', '150'],
      correctIndex: 0,
      explanation: 'Add elements at odd indices: i=1 (10), i=3 (30), i=5 (50). sum = 10+30+50 = 90. Even indices (2,4) are skipped.'
    },
    {
      question: `What is displayed?\n\n\`\`\`\nlist ← [5, 10, 15]\nnewList ← []\nFOR EACH item IN list\n{\n    INSERT(newList, 1, item)\n}\nDISPLAY(newList)\n\`\`\``,
      options: ['[15, 10, 5]', '[5, 10, 15]', '[5, 5, 5]', '[15, 15, 15]'],
      correctIndex: 0,
      explanation: 'INSERT at position 1 each time pushes previous elements back. Insert 5: [5]. Insert 10 at 1: [10,5]. Insert 15 at 1: [15,10,5]. This reverses the list.'
    },
    {
      question: `What is the value of result?\n\n\`\`\`\nlist1 ← [1, 2, 3]\nlist2 ← [4, 5, 6]\nresult ← []\nFOR i ← 1 TO LENGTH(list1)\n{\n    APPEND(result, list1[i] + list2[i])\n}\nDISPLAY(result)\n\`\`\``,
      options: ['[5, 7, 9]', '[1, 2, 3, 4, 5, 6]', '[4, 10, 18]', '[5, 5, 5]'],
      correctIndex: 0,
      explanation: 'Element-wise addition: 1+4=5, 2+5=7, 3+6=9. result = [5,7,9]. This is vector addition.'
    },
    {
      question: `How many elements are in finalList?\n\n\`\`\`\nlist ← [1, 2, 2, 3, 3, 3, 4]\nfinalList ← []\nFOR EACH item IN list\n{\n    found ← false\n    FOR EACH existing IN finalList\n    {\n        IF (existing = item)\n        {\n            found ← true\n        }\n    }\n    IF (NOT found)\n    {\n        APPEND(finalList, item)\n    }\n}\nDISPLAY(LENGTH(finalList))\n\`\`\``,
      options: ['4', '7', '3', '1'],
      correctIndex: 0,
      explanation: 'This removes duplicates. Only adds item if not already in finalList. Unique values: 1,2,3,4. LENGTH = 4.'
    }
  ],

  'topic-3.11': [
    {
      question: `A sorted list has 1000 elements. What is the maximum number of comparisons binary search needs to find a target (or determine it's not present)?`,
      options: ['10', '500', '1000', '100'],
      correctIndex: 0,
      explanation: 'Binary search halves the search space each comparison. For n elements, max comparisons = ⌈log₂(n)⌉. log₂(1000) ≈ 9.97, so max 10 comparisons. This is much better than linear search\'s 1000.'
    },
    {
      question: `What is displayed when searching for 7?\n\n\`\`\`\nlist ← [1, 3, 5, 7, 9, 11, 13]\ntarget ← 7\nlow ← 1\nhigh ← LENGTH(list)\nsteps ← 0\nREPEAT UNTIL (low > high)\n{\n    mid ← (low + high) / 2   // integer division\n    steps ← steps + 1\n    IF (list[mid] = target)\n    {\n        DISPLAY(steps)\n    }\n    ELSE IF (list[mid] < target)\n    {\n        low ← mid + 1\n    }\n    ELSE\n    {\n        high ← mid - 1\n    }\n}\n\`\`\``,
      options: ['1', '2', '3', '4'],
      correctIndex: 0,
      explanation: 'list has 7 elements. First mid = (1+7)/2 = 4. list[4] = 7 = target. Found in 1 step! The target happens to be exactly at the middle.'
    },
    {
      question: `Binary search is performed on this list for target = 8:\n\n\`\`\`\nlist ← [2, 4, 6, 8, 10, 12, 14, 16]\n\`\`\`\n\nWhich elements are compared with the target?`,
      options: ['10, 6, 8', '2, 4, 6, 8', '10, 4, 8', '8 only'],
      correctIndex: 0,
      explanation: 'Step 1: mid=(1+8)/2=4, list[4]=8? No, list[4]=8. Wait, 1-indexed: list=[2,4,6,8,10,12,14,16]. mid=4, list[4]=8=target. Found! Actually just 8. Let me reconsider... mid=(1+8)/2=4.5→4. list[4]=8. Found in 1 comparison. Hmm, the answer I gave is wrong.'
    },
    {
      question: `What happens if binary search is used on an UNSORTED list?`,
      options: ['It may return incorrect results or miss the target even if present', 'It automatically sorts the list first', 'It works correctly but slower', 'It always returns -1'],
      correctIndex: 0,
      explanation: 'Binary search relies on sorted order to eliminate half the elements. With unsorted data, the algorithm may look in the wrong half and miss the target entirely. Always sort first or use linear search.'
    },
    {
      question: `In binary search, what is the purpose of the condition low > high?`,
      options: ['Indicates the target is not in the list', 'Indicates the target was found', 'Indicates the list is empty', 'Indicates an error occurred'],
      correctIndex: 0,
      explanation: 'When low > high, the search range is empty—we\'ve checked everywhere the target could be. This means the target isn\'t in the list. The loop terminates and typically returns -1 or "not found".'
    },
    {
      question: `A binary search on a sorted list of 64 elements will examine at most how many elements?`,
      options: ['6', '32', '7', '64'],
      correctIndex: 2,
      explanation: 'log₂(64) = 6, so at most 6 comparisons... wait, that\'s 6 not 7. Let me reconsider. 2^6=64, so log₂(64)=6. Maximum is 6 comparisons. But if we include the possibility of one more check, it could be 7. Actually for 64 elements: after 6 halvings we\'re down to 1 element. So max is 6. But 7 if ceiling... ⌈log₂(64+1)⌉ = ⌈6.02⌉ = 7. The exact formula for max comparisons is ⌊log₂(n)⌋ + 1 = 6 + 1 = 7. So 7 is correct.'
    },
    {
      question: `Which modification would make this binary search find the LAST occurrence of a duplicate value?\n\n\`\`\`\nIF (list[mid] = target)\n{\n    RETURN mid\n}\n\`\`\``,
      options: ['When found, set low ← mid + 1 and continue, save mid as result', 'When found, set high ← mid - 1 and continue', 'Return mid + 1 instead of mid', 'No modification needed'],
      correctIndex: 0,
      explanation: 'To find the last occurrence, when we find the target, save it and keep searching the right half (low ← mid + 1). This continues until the range is exhausted, and we return the last saved position.'
    },
    {
      question: `Compare binary search vs linear search for a sorted list of 1,000,000 elements. Approximately how many times faster is binary search in the worst case?`,
      options: ['50,000 times faster', '20 times faster', '1000 times faster', 'Same speed'],
      correctIndex: 0,
      explanation: 'Linear: up to 1,000,000 comparisons. Binary: log₂(1,000,000) ≈ 20 comparisons. Ratio: 1,000,000/20 = 50,000. Binary search is dramatically more efficient for large sorted data.'
    },
    {
      question: `What is the result of binary search for target = 0 in this list?\n\n\`\`\`\nlist ← [1, 2, 3, 4, 5]\n\`\`\``,
      options: ['Not found (-1 or equivalent)', 'Returns index 1', 'Returns index 0', 'Error'],
      correctIndex: 0,
      explanation: 'Target 0 is less than all elements. Binary search will keep setting high ← mid - 1 until low > high. The element is not found, returning -1 or "not found".'
    },
    {
      question: `Which data structure and search method is MOST efficient for frequent lookups by a unique key?`,
      options: ['Hash table with direct access', 'Sorted array with binary search', 'Unsorted array with linear search', 'Linked list with linear search'],
      correctIndex: 0,
      explanation: 'Hash tables provide O(1) average-case lookup by key. Binary search on sorted array is O(log n). Linear search is O(n). For frequent lookups, hash tables are fastest, though binary search is excellent when data must stay sorted.'
    }
  ],

  'topic-3.12': [
    {
      question: `What is displayed?\n\n\`\`\`\nPROCEDURE double(x)\n{\n    RETURN x * 2\n}\n\na ← 5\nb ← double(a)\nc ← double(b) + double(a)\nDISPLAY(c)\n\`\`\``,
      options: ['30', '20', '40', '15'],
      correctIndex: 0,
      explanation: 'double(5) = 10, so b = 10. c = double(10) + double(5) = 20 + 10 = 30. Each call is independent and uses its argument value.'
    },
    {
      question: `What is displayed?\n\n\`\`\`\nPROCEDURE mystery(a, b)\n{\n    RETURN a + b * 2\n}\n\nDISPLAY(mystery(3, mystery(2, 1)))\n\`\`\``,
      options: ['11', '7', '9', '14'],
      correctIndex: 0,
      explanation: 'Inner call: mystery(2,1) = 2 + 1*2 = 4. Outer call: mystery(3,4) = 3 + 4*2 = 11. Work inside-out for nested calls.'
    },
    {
      question: `What does this code display?\n\n\`\`\`\nPROCEDURE addTax(price, rate)\n{\n    RETURN price + price * rate\n}\n\ntotal ← addTax(100, 0.08) + addTax(50, 0.08)\nDISPLAY(total)\n\`\`\``,
      options: ['162', '150', '158', '112'],
      correctIndex: 0,
      explanation: 'addTax(100, 0.08) = 100 + 8 = 108. addTax(50, 0.08) = 50 + 4 = 54. total = 108 + 54 = 162.'
    },
    {
      question: `What is the output?\n\n\`\`\`\nPROCEDURE increment(n)\n{\n    n ← n + 1\n    RETURN n\n}\n\nx ← 5\ny ← increment(x)\nDISPLAY(x)\nDISPLAY(y)\n\`\`\``,
      options: ['5 then 6', '6 then 6', '5 then 5', '6 then 5'],
      correctIndex: 0,
      explanation: 'In AP pseudocode, parameters are passed by value. The procedure modifies its local copy of n, not the original x. So x remains 5, and y gets the returned value 6.'
    },
    {
      question: `What is displayed?\n\n\`\`\`\nPROCEDURE max(a, b)\n{\n    IF (a > b)\n    {\n        RETURN a\n    }\n    ELSE\n    {\n        RETURN b\n    }\n}\n\nresult ← max(max(3, 7), max(5, 2))\nDISPLAY(result)\n\`\`\``,
      options: ['7', '5', '3', '2'],
      correctIndex: 0,
      explanation: 'Inner calls: max(3,7)=7, max(5,2)=5. Outer call: max(7,5)=7. The nested calls find max of all four values.'
    },
    {
      question: `What happens when this code runs?\n\n\`\`\`\nPROCEDURE greet(name)\n{\n    DISPLAY("Hello, ")\n    DISPLAY(name)\n}\n\ngreet("World")\nx ← greet("Claude")\nDISPLAY(x)\n\`\`\``,
      options: ['Displays "Hello, World" then "Hello, Claude" then undefined/nothing', '"Hello, World" then "Hello, Claude" then "Hello, Claude"', 'Error - cannot assign procedure with no return', '"Hello, World" only'],
      correctIndex: 0,
      explanation: 'greet has no RETURN statement, so it returns nothing/undefined. The first call displays "Hello, World". The second displays "Hello, Claude" and x gets undefined. Displaying x shows nothing or undefined.'
    },
    {
      question: `What is the result?\n\n\`\`\`\nPROCEDURE power(base, exp)\n{\n    result ← 1\n    REPEAT exp TIMES\n    {\n        result ← result * base\n    }\n    RETURN result\n}\n\nDISPLAY(power(2, 3) + power(3, 2))\n\`\`\``,
      options: ['17', '13', '12', '36'],
      correctIndex: 0,
      explanation: 'power(2,3) = 2³ = 8. power(3,2) = 3² = 9. Sum = 8 + 9 = 17.'
    },
    {
      question: `What is displayed?\n\n\`\`\`\nPROCEDURE mystery(x)\n{\n    IF (x ≤ 0)\n    {\n        RETURN 0\n    }\n    RETURN x + mystery(x - 1)\n}\n\nDISPLAY(mystery(4))\n\`\`\``,
      options: ['10', '4', '24', '15'],
      correctIndex: 0,
      explanation: 'This is recursive sum: mystery(4) = 4 + mystery(3) = 4 + 3 + mystery(2) = 4+3+2+1+0 = 10. It computes 1+2+3+4 = 10.'
    },
    {
      question: `Which procedure call correctly uses this procedure?\n\n\`\`\`\nPROCEDURE calculateArea(length, width)\n{\n    RETURN length * width\n}\n\`\`\``,
      options: ['area ← calculateArea(5, 3)', 'calculateArea(length: 5, width: 3)', 'area ← calculateArea(5)', 'calculateArea ← (5, 3)'],
      correctIndex: 0,
      explanation: 'Procedures are called with arguments in parentheses matching parameter order. area ← calculateArea(5, 3) correctly passes 5 as length and 3 as width, storing the result in area.'
    },
    {
      question: `What is the output?\n\n\`\`\`\nPROCEDURE isEven(n)\n{\n    RETURN n MOD 2 = 0\n}\n\nPROCEDURE isOdd(n)\n{\n    RETURN NOT isEven(n)\n}\n\nDISPLAY(isOdd(7))\nDISPLAY(isEven(7))\n\`\`\``,
      options: ['true then false', 'false then true', 'true then true', 'false then false'],
      correctIndex: 0,
      explanation: 'isEven(7) = (7 MOD 2 = 0) = (1 = 0) = false. isOdd(7) = NOT false = true. isOdd reuses isEven, demonstrating procedural abstraction.'
    }
  ]
};

// Fix question 4 in topic-3.8 (the factorial calculation)
hardQuestions['topic-3.8'][3] = {
  question: `What is displayed?\n\n\`\`\`\nn ← 5\nresult ← 1\nREPEAT n TIMES\n{\n    result ← result * n\n    n ← n - 1\n}\nDISPLAY(result)\n\`\`\``,
  options: ['120', '600', '3125', '1'],
  correctIndex: 0,
  explanation: 'REPEAT n TIMES evaluates n=5 once. Loop runs 5 times: result=1*5=5 (n→4), 5*4=20 (n→3), 20*3=60 (n→2), 60*2=120 (n→1), 120*1=120. This computes 5! = 120.'
};

// Fix question 9 in topic-3.9 (consecutive differences)
hardQuestions['topic-3.9'][8] = {
  question: `What does this algorithm compute for list = [3, 1, 4, 1, 5]?\n\n\`\`\`\nlist ← [3, 1, 4, 1, 5]\nresult ← 0\nFOR i ← 1 TO LENGTH(list) - 1\n{\n    diff ← list[i + 1] - list[i]\n    IF (diff < 0)\n    {\n        diff ← -diff\n    }\n    result ← result + diff\n}\nDISPLAY(result)\n\`\`\``,
  options: ['12', '4', '14', '5'],
  correctIndex: 0,
  explanation: 'Sum of absolute differences: |1-3|=2, |4-1|=3, |1-4|=3, |5-1|=4. Total: 2+3+3+4=12. This measures total variation in the list.'
};

// Fix question 3 in topic-3.11 (binary search trace)
hardQuestions['topic-3.11'][2] = {
  question: `Binary search is performed on this list for target = 6:\n\n\`\`\`\nlist ← [2, 4, 6, 8, 10, 12, 14, 16]\n\`\`\`\n\nWhich elements are compared with the target (in order)?`,
  options: ['8, 4, 6', '2, 4, 6', '8, 6', '6 only'],
  correctIndex: 0,
  explanation: 'Step 1: mid=(1+8)/2=4, list[4]=8>6, search left. Step 2: mid=(1+3)/2=2, list[2]=4<6, search right. Step 3: mid=(3+3)/2=3, list[3]=6=target. Comparisons: 8, 4, 6.'
};

// Fix question 6 in topic-3.11 (64 elements)
hardQuestions['topic-3.11'][5] = {
  question: `A binary search on a sorted list of 64 elements will examine at most how many elements?`,
  options: ['7', '32', '6', '64'],
  correctIndex: 0,
  explanation: 'For n elements, max comparisons = ⌊log₂(n)⌋ + 1. For n=64: log₂(64)=6, so max = 6+1 = 7 comparisons. After 6 halvings of 64, we have 1 element left, needing one final comparison.'
};

async function seedHardQuestions() {
  console.log('Seeding HARD questions for Big Idea 3, Part 2 (Topics 3.7-3.12)...\n');

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
  console.log(`\n✓ Successfully added ${totalAdded} hard questions for topics 3.7-3.12`);
}

seedHardQuestions()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
