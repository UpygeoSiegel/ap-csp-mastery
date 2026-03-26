/**
 * Extra Questions for Unit 3: Topics 3.7 - 3.12
 * 10 hard questions per topic
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questions = {
  'topic-3.7': [ // Nested Conditionals
    {
      text: 'Consider the following code segment:\n\n```\nIF (x > 0)\n{\n    IF (y > 0)\n    {\n        DISPLAY(\"Q1\")\n    }\n    ELSE\n    {\n        DISPLAY(\"Q4\")\n    }\n}\nELSE\n{\n    IF (y > 0)\n    {\n        DISPLAY(\"Q2\")\n    }\n    ELSE\n    {\n        DISPLAY(\"Q3\")\n    }\n}\n```\nWhat is displayed if `x = -5` and `y = 5`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"Q2\"' },
        { id: 'b', text: '\"Q1\"' },
        { id: 'c', text: '\"Q3\"' },
        { id: 'd', text: '\"Q4\"' }
      ],
      correctAnswers: ['a'],
      explanation: 'x is -5 (not > 0), so go to the outer ELSE. y is 5 (is > 0), so go to the inner IF. Displays \"Q2\".',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following describes a situation where nested conditionals are MOST useful?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When a decision needs to be made based on multiple, dependent criteria.' },
        { id: 'b', text: 'When you want to repeat a block of code 10 times.' },
        { id: 'c', text: 'When you need to store a list of names.' },
        { id: 'd', text: 'When you want to calculate the square root of a number.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Nested conditionals allow for complex branching logic where the second condition only matters if the first one is true (or false).',
      difficulty: 'hard'
    },
    {
      text: 'What is displayed if `score = 82` and `isLate = true`?\n\n```\nIF (score > 90)\n{\n    IF (isLate)\n    {\n        DISPLAY(\"A-\")\n    }\n    ELSE\n    {\n        DISPLAY(\"A\")\n    }\n}\nELSE\n{\n    IF (score > 80)\n    {\n        IF (isLate)\n        {\n            DISPLAY(\"B-\")\n        }\n        ELSE\n        {\n            DISPLAY(\"B\")\n        }\n    }\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"B-\"' },
        { id: 'b', text: '\"B\"' },
        { id: 'c', text: '\"A-\"' },
        { id: 'd', text: 'Nothing is displayed' }
      ],
      correctAnswers: ['a'],
      explanation: 'score 82 > 90 is false. Go to outer ELSE. 82 > 80 is true. isLate is true. Displays \"B-\".',
      difficulty: 'hard'
    },
    {
      text: 'Which code segment is equivalent to the following?\n\n```\nIF (A)\n{\n    IF (B)\n    {\n        DISPLAY(\"Success\")\n    }\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'IF (A AND B) { DISPLAY(\"Success\") }' },
        { id: 'b', text: 'IF (A OR B) { DISPLAY(\"Success\") }' },
        { id: 'c', text: 'IF (A) { DISPLAY(\"Success\") } IF (B) { DISPLAY(\"Success\") }' },
        { id: 'd', text: 'IF (NOT A AND NOT B) { DISPLAY(\"Success\") }' }
      ],
      correctAnswers: ['a'],
      explanation: 'Nested IFs where the inner one only runs if the outer one is true is logically the same as an AND operation.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the code:\n\n```\nIF (x = 1)\n{\n    DISPLAY(\"One\")\n}\nELSE\n{\n    IF (x = 2)\n    {\n        DISPLAY(\"Two\")\n    }\n    ELSE\n    {\n        DISPLAY(\"Other\")\n    }\n}\n```\nIf `x = 3`, what is displayed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"Other\"' },
        { id: 'b', text: '\"One\"' },
        { id: 'c', text: '\"Two\"' },
        { id: 'd', text: 'Nothing' }
      ],
      correctAnswers: ['a'],
      explanation: 'x is not 1, and x is not 2. The innermost ELSE executes.',
      difficulty: 'hard'
    },
    {
      text: 'What will the following code display if `age = 10`?\n\n```\nIF (age >= 18)\n{\n    DISPLAY(\"Adult\")\n}\nELSE\n{\n    IF (age >= 13)\n    {\n        DISPLAY(\"Teen\")\n    }\n    ELSE\n    {\n        DISPLAY(\"Child\")\n    }\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"Child\"' },
        { id: 'b', text: '\"Teen\"' },
        { id: 'c', text: '\"Adult\"' },
        { id: 'd', text: 'Nothing' }
      ],
      correctAnswers: ['a'],
      explanation: '10 is not >= 18, and 10 is not >= 13. Displays \"Child\".',
      difficulty: 'hard'
    },
    {
      text: 'If `num = 15`, what is displayed?\n\n```\nIF (num MOD 3 = 0)\n{\n    IF (num MOD 5 = 0)\n    {\n        DISPLAY(\"FizzBuzz\")\n    }\n    ELSE\n    {\n        DISPLAY(\"Fizz\")\n    }\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"FizzBuzz\"' },
        { id: 'b', text: '\"Fizz\"' },
        { id: 'c', text: '\"Buzz\"' },
        { id: 'd', text: 'Nothing' }
      ],
      correctAnswers: ['a'],
      explanation: '15 MOD 3 is 0. 15 MOD 5 is 0. Both conditions are met.',
      difficulty: 'hard'
    },
    {
      text: 'Which structure is used to handle multiple mutually exclusive conditions?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'IF-ELSE IF-ELSE' },
        { id: 'b', text: 'A single IF statement' },
        { id: 'c', text: 'A REPEAT loop' },
        { id: 'd', text: 'A variable assignment' }
      ],
      correctAnswers: ['a'],
      explanation: 'This chain ensures that only the first matching block executes.',
      difficulty: 'hard'
    },
    {
      text: 'What happens if the outer condition of a nested conditional is false?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The entire inner conditional is skipped.' },
        { id: 'b', text: 'The inner conditional is checked anyway.' },
        { id: 'c', text: 'The program crashes.' },
        { id: 'd', text: 'The inner ELSE block executes.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Execution only enters the outer block if the condition is true. If false, everything inside is ignored.',
      difficulty: 'hard'
    },
    {
      text: 'What is the value of `category`?\n\n```\nprice ← 50\nIF (price > 100)\n{\n    category ← \"Luxury\"\n}\nELSE\n{\n    IF (price > 20)\n    {\n        category ← \"Standard\"\n    }\n    ELSE\n    {\n        category ← \"Budget\"\n    }\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"Standard\"' },
        { id: 'b', text: '\"Luxury\"' },
        { id: 'c', text: '\"Budget\"' },
        { id: 'd', text: 'undefined' }
      ],
      correctAnswers: ['a'],
      explanation: '50 is not > 100. 50 is > 20. Sets to Standard.',
      difficulty: 'hard'
    }
  ],
  'topic-3.8': [ // Iteration
    {
      text: 'What is displayed?\n\n```\nx ← 1\nREPEAT 4 TIMES\n{\n    x ← x * 2\n}\nDISPLAY(x)\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '16' },
        { id: 'b', text: '8' },
        { id: 'c', text: '32' },
        { id: 'd', text: '4' }
      ],
      correctAnswers: ['a'],
      explanation: 'x starts at 1. Iterations: 1*2=2, 2*2=4, 4*2=8, 8*2=16.',
      difficulty: 'hard'
    },
    {
      text: 'How many times will \"Hello\" be displayed?\n\n```\ni ← 1\nREPEAT UNTIL (i > 5)\n{\n    DISPLAY(\"Hello\")\n    i ← i + 2\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '5' },
        { id: 'c', text: '2' },
        { id: 'd', text: '6' }
      ],
      correctAnswers: ['a'],
      explanation: 'i starts at 1. i=1 (displays), i becomes 3. i=3 (displays), i becomes 5. i=5 (displays), i becomes 7. 7 > 5 is true, loop stops.',
      difficulty: 'hard'
    },
    {
      text: 'What is the final value of `sum`?\n\n```\nsum ← 0\ncounter ← 1\nREPEAT 5 TIMES\n{\n    sum ← sum + counter\n    counter ← counter + 1\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '15' },
        { id: 'b', text: '10' },
        { id: 'c', text: '21' },
        { id: 'd', text: '5' }
      ],
      correctAnswers: ['a'],
      explanation: 'Calculates the sum of integers 1 to 5: 1+2+3+4+5 = 15.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the following code segment:\n\n```\nlist ← [10, 20, 30]\nFOR EACH val IN list\n{\n    IF (val > 15)\n    {\n        DISPLAY(val)\n    }\n}\n```\nWhat is displayed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '20 30' },
        { id: 'b', text: '10 20 30' },
        { id: 'c', text: '30' },
        { id: 'd', text: 'Nothing' }
      ],
      correctAnswers: ['a'],
      explanation: 'The loop checks each value. 10 is not > 15. 20 and 30 are, so they are displayed.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following will result in an infinite loop?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'i ← 1; REPEAT UNTIL (i = 0) { i ← i + 1 }' },
        { id: 'b', text: 'i ← 5; REPEAT UNTIL (i = 0) { i ← i - 1 }' },
        { id: 'c', text: 'i ← 1; REPEAT 10 TIMES { i ← i + 1 }' },
        { id: 'd', text: 'i ← 10; REPEAT UNTIL (i < 0) { i ← i - 5 }' }
      ],
      correctAnswers: ['a'],
      explanation: 'Starting at 1 and incrementing will never make i equal to 0, so the loop never terminates.',
      difficulty: 'hard'
    },
    {
      text: 'What is displayed?\n\n```\nn ← 5\nREPEAT UNTIL (n < 1)\n{\n    DISPLAY(n)\n    n ← n - 2\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '5 3 1' },
        { id: 'b', text: '5 4 3 2 1' },
        { id: 'c', text: '5 3' },
        { id: 'd', text: '1 3 5' }
      ],
      correctAnswers: ['a'],
      explanation: 'n=5 (display), n=3. n=3 (display), n=1. n=1 (display), n=-1. Loop stops.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the nested loop:\n\n```\nREPEAT 2 TIMES\n{\n    REPEAT 3 TIMES\n    {\n        DISPLAY(\"*\")\n    }\n    DISPLAY(\"-\")\n}\n```\nWhat is the output?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '***-***-' },
        { id: 'b', text: '*-*-*-' },
        { id: 'c', text: '******--' },
        { id: 'd', text: '---***' }
      ],
      correctAnswers: ['a'],
      explanation: 'Inner loop runs 3 times (***), then \"-\". This whole process repeats twice.',
      difficulty: 'hard'
    },
    {
      text: 'If `list = [1, 2, 3, 4]`, what is the value of `total`?\n\n```\ntotal ← 0\nFOR EACH item IN list\n{\n    total ← total + (item * item)\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '30' },
        { id: 'b', text: '10' },
        { id: 'c', text: '16' },
        { id: 'd', text: '40' }
      ],
      correctAnswers: ['a'],
      explanation: 'Sum of squares: 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30.',
      difficulty: 'hard'
    },
    {
      text: 'How many times does the inner loop execute total?\n\n```\nREPEAT 5 TIMES\n{\n    REPEAT 10 TIMES\n    {\n        MOVE_FORWARD()\n    }\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '50' },
        { id: 'b', text: '15' },
        { id: 'c', text: '10' },
        { id: 'd', text: '5' }
      ],
      correctAnswers: ['a'],
      explanation: 'The outer loop runs 5 times, and for each time, the inner runs 10 times. 5 * 10 = 50.',
      difficulty: 'hard'
    },
    {
      text: 'What is the result of `i` after:\n\n```\ni ← 0\nREPEAT UNTIL (i >= 10)\n{\n    i ← i + 3\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '12' },
        { id: 'b', text: '10' },
        { id: 'c', text: '9' },
        { id: 'd', text: '13' }
      ],
      correctAnswers: ['a'],
      explanation: 'i sequence: 0, 3, 6, 9, 12. 12 is the first value >= 10.',
      difficulty: 'hard'
    }
  ],
  'topic-3.9': [ // Developing Algorithms
    {
      text: 'A programmer is developing an algorithm to find the largest number in a list. Which of the following is a necessary step?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Initialize a variable to the first element of the list to track the current maximum.' },
        { id: 'b', text: 'Sort the list in descending order first.' },
        { id: 'c', text: 'Add all numbers in the list together.' },
        { id: 'd', text: 'Multiply every number by -1.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Starting with the first element ensures you have a baseline to compare other elements against.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following best describes the "efficiency" of an algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The amount of resources (like time or memory) the algorithm consumes as the input size grows.' },
        { id: 'b', text: 'How many lines of code the programmer wrote.' },
        { id: 'c', text: 'Whether or not the algorithm produces the correct answer.' },
        { id: 'd', text: 'The color of the computer it runs on.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Efficiency is typically measured using "Big O" notation, focusing on execution time and space complexity.',
      difficulty: 'hard'
    },
    {
      text: 'What is the "selection" component of an algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using a condition to decide which part of the code to execute.' },
        { id: 'b', text: 'Repeating a block of code multiple times.' },
        { id: 'c', text: 'Assigning a value to a variable.' },
        { id: 'd', text: 'Defining a new procedure.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Selection refers to IF-statements and decision making.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is an example of "sequencing" in an algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Executing steps one after another in the order they are written.' },
        { id: 'b', text: 'Repeating a task until a condition is met.' },
        { id: 'c', text: 'Using a procedure to perform a calculation.' },
        { id: 'd', text: 'Creating a list to store data.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Sequencing is the fundamental concept of linear execution of instructions.',
      difficulty: 'hard'
    },
    {
      text: 'When developing an algorithm, why is it helpful to use pseudocode instead of a specific programming language?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It allows the programmer to focus on the logic without worrying about specific syntax rules.' },
        { id: 'b', text: 'Pseudocode can be executed directly by any computer.' },
        { id: 'c', text: 'Pseudocode is more complex and detailed than actual code.' },
        { id: 'd', text: 'Pseudocode automatically fixes logic errors.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Pseudocode is a high-level tool for planning and communication.',
      difficulty: 'hard'
    },
    {
      text: 'What is an "algorithm"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A precise, step-by-step set of instructions for solving a problem.' },
        { id: 'b', text: 'A type of computer hardware.' },
        { id: 'c', text: 'A social media platform.' },
        { id: 'd', text: 'A programming language like Python.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Algorithms are abstract concepts that define how a task is performed.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is NOT one of the three building blocks of algorithms?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Encryption' },
        { id: 'b', text: 'Sequencing' },
        { id: 'c', text: 'Selection' },
        { id: 'd', text: 'Iteration' }
      ],
      correctAnswers: ['a'],
      explanation: 'Sequencing, Selection, and Iteration are the fundamental building blocks.',
      difficulty: 'hard'
    },
    {
      text: 'If two algorithms solve the same problem correctly, which one is generally preferred?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The one that is more efficient (faster or uses less memory).' },
        { id: 'b', text: 'The one that uses more variables.' },
        { id: 'c', text: 'The one that was written first.' },
        { id: 'd', text: 'The one that has more comments.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Efficiency is a key metric for algorithm quality.',
      difficulty: 'hard'
    },
    {
      text: 'What is the purpose of "refining" an algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To make it more efficient or easier to understand.' },
        { id: 'b', text: 'To change the problem it is solving.' },
        { id: 'c', text: 'To add more errors to the code.' },
        { id: 'd', text: 'To delete all the documentation.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Iterative design involves refining logic for better performance or clarity.',
      difficulty: 'hard'
    },
    {
      text: 'True or False: The same algorithm can be expressed in many different programming languages.',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
        { id: 'c', text: 'Only if the languages are the same type' },
        { id: 'd', text: 'Only if the computer is powerful enough' }
      ],
      correctAnswers: ['a'],
      explanation: 'Algorithms are language-independent logic.',
      difficulty: 'hard'
    }
  ],
  'topic-3.10': [ // Lists
    {
      text: 'What is in `myList` after this code?\n\n```\nmyList ← [1, 2, 3]\nAPPEND(myList, 4)\nINSERT(myList, 2, 5)\nREMOVE(myList, 1)\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '[5, 2, 3, 4]' },
        { id: 'b', text: '[1, 5, 2, 3, 4]' },
        { id: 'c', text: '[5, 3, 4]' },
        { id: 'd', text: '[2, 5, 3, 4]' }
      ],
      correctAnswers: ['a'],
      explanation: 'Start: [1,2,3]. APPEND 4: [1,2,3,4]. INSERT 5 at 2: [1,5,2,3,4]. REMOVE 1: [5,2,3,4].',
      difficulty: 'hard'
    },
    {
      text: 'How do you access the last element of a list `L`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'L[LENGTH(L)]' },
        { id: 'b', text: 'L[LENGTH(L) - 1]' },
        { id: 'c', text: 'L[0]' },
        { id: 'd', text: 'L.last()' }
      ],
      correctAnswers: ['a'],
      explanation: 'AP CSP uses 1-based indexing, so the last index is the length.',
      difficulty: 'hard'
    },
    {
      text: 'What does `INSERT(myList, 1, val)` do?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Adds `val` to the beginning of the list and shifts other items right.' },
        { id: 'b', text: 'Overwrites the first element with `val`.' },
        { id: 'c', text: 'Adds `val` to the end of the list.' },
        { id: 'd', text: 'Deletes the first element.' }
      ],
      correctAnswers: ['a'],
      explanation: 'INSERT adds an element at a specific index without overwriting.',
      difficulty: 'hard'
    },
    {
      text: 'If `list = [10, 20, 30]`, what is `list[2]`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '20' },
        { id: 'b', text: '10' },
        { id: 'c', text: '30' },
        { id: 'd', text: 'Error' }
      ],
      correctAnswers: ['a'],
      explanation: 'Index 1 is 10, Index 2 is 20.',
      difficulty: 'hard'
    },
    {
      text: 'What is the length of `list` after `REMOVE(list, 1)` if it originally had 5 items?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '5' },
        { id: 'c', text: '6' },
        { id: 'd', text: '0' }
      ],
      correctAnswers: ['a'],
      explanation: 'REMOVE reduces the total count of items in the list.',
      difficulty: 'hard'
    },
    {
      text: 'Which operation adds an item to the very end of a list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'APPEND' },
        { id: 'b', text: 'INSERT' },
        { id: 'c', text: 'REMOVE' },
        { id: 'd', text: 'SELECT' }
      ],
      correctAnswers: ['a'],
      explanation: 'APPEND is specifically for adding to the end.',
      difficulty: 'hard'
    },
    {
      text: 'What happens to the indices of items in a list when an item is REMOVED from the middle?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The indices of all subsequent items decrease by 1.' },
        { id: 'b', text: 'The indices stay the same, leaving a gap.' },
        { id: 'c', text: 'The indices of all previous items increase by 1.' },
        { id: 'd', text: 'All indices are randomized.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lists are contiguous; items shift left to fill the gap.',
      difficulty: 'hard'
    },
    {
      text: 'Consider:\n\n```\nlist ← [\"A\", \"B\", \"C\"]\nlist[2] ← \"Z\"\n```\nWhat is the list now?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '[\"A\", \"Z\", \"C\"]' },
        { id: 'b', text: '[\"A\", \"B\", \"Z\"]' },
        { id: 'c', text: '[\"A\", \"Z\", \"B\", \"C\"]' },
        { id: 'd', text: '[\"Z\", \"B\", \"C\"]' }
      ],
      correctAnswers: ['a'],
      explanation: 'Assignment using brackets [i] overwrites the existing value at that index.',
      difficulty: 'hard'
    },
    {
      text: 'Can a list store different types of data (e.g., strings and numbers) in AP CSP pseudocode?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Yes' },
        { id: 'b', text: 'No' },
        { id: 'c', text: 'Only if the list is empty first' },
        { id: 'd', text: 'Only if the computer is a Mac' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lists in CSP are flexible collections.',
      difficulty: 'hard'
    },
    {
      text: 'What is the result of `LENGTH([])`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '1' },
        { id: 'c', text: 'Error' },
        { id: 'd', text: 'undefined' }
      ],
      correctAnswers: ['a'],
      explanation: 'An empty list has a length of 0.',
      difficulty: 'hard'
    }
  ],
  'topic-3.11': [ // Binary Search
    {
      text: 'What is the primary requirement for performing a binary search on a list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The list must be sorted.' },
        { id: 'b', text: 'The list must contain only numbers.' },
        { id: 'c', text: 'The list must have an even number of elements.' },
        { id: 'd', text: 'The list must be very small.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Binary search relies on the ability to eliminate half the remaining items, which is only possible if the data is ordered.',
      difficulty: 'hard'
    },
    {
      text: 'In a list of 100 sorted items, what is the MAXIMUM number of comparisons a binary search would need to find a target value?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '7' },
        { id: 'b', text: '100' },
        { id: 'c', text: '50' },
        { id: 'd', text: '10' }
      ],
      correctAnswers: ['a'],
      explanation: '2^6 = 64, 2^7 = 128. So 7 comparisons are enough to narrow down 100 items.',
      difficulty: 'hard'
    },
    {
      text: 'Which algorithm is faster for finding an item in a LARGE sorted list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Binary Search' },
        { id: 'b', text: 'Linear Search' },
        { id: 'c', text: 'They are the same speed' },
        { id: 'd', text: 'Linear search is faster' }
      ],
      correctAnswers: ['a'],
      explanation: 'Binary search is O(log n), while linear search is O(n). For large n, log n is much smaller.',
      difficulty: 'hard'
    },
    {
      text: 'If a target value is LESS than the middle element in a binary search, where should the search continue?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'In the left half of the list (lower indices).' },
        { id: 'b', text: 'In the right half of the list (higher indices).' },
        { id: 'c', text: 'At the very end of the list.' },
        { id: 'd', text: 'The search should restart from the beginning.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Since the list is sorted, values smaller than the middle must be to the left.',
      difficulty: 'hard'
    },
    {
      text: 'A binary search is performed on the list `[10, 20, 30, 40, 50, 60, 70]`. What is the first element compared to the target?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '40' },
        { id: 'b', text: '10' },
        { id: 'c', text: '70' },
        { id: 'd', text: '30' }
      ],
      correctAnswers: ['a'],
      explanation: 'The search always starts at the middle element.',
      difficulty: 'hard'
    },
    {
      text: 'What happens to the search space in each step of a binary search?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It is cut in half.' },
        { id: 'b', text: 'It is reduced by 1.' },
        { id: 'c', text: 'It stays the same.' },
        { id: 'd', text: 'It doubles.' }
      ],
      correctAnswers: ['a'],
      explanation: 'This "divide and conquer" approach is what makes it efficient.',
      difficulty: 'hard'
    },
    {
      text: 'For a list of size N, what is the time complexity of linear search?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'O(N)' },
        { id: 'b', text: 'O(log N)' },
        { id: 'c', text: 'O(1)' },
        { id: 'd', text: 'O(N^2)' }
      ],
      correctAnswers: ['a'],
      explanation: 'Linear search might have to check every single element.',
      difficulty: 'hard'
    },
    { id: 'q-bin-8',
      text: 'How many comparisons are needed for a binary search on 1,000,000 items?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'About 20' },
        { id: 'b', text: 'About 500,000' },
        { id: 'c', text: 'Exactly 1,000' },
        { id: 'd', text: 'About 100' }
      ],
      correctAnswers: ['a'],
      explanation: '2^20 is slightly more than 1,000,000.',
      difficulty: 'hard'
    },
    {
      text: 'True or False: Linear search can be used on unsorted lists.',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
        { id: 'c', text: 'Only if the list contains strings' },
        { id: 'd', text: 'Only if the list is empty' }
      ],
      correctAnswers: ['a'],
      explanation: 'Linear search doesn\'t care about order; it just checks one by one.',
      difficulty: 'hard'
    },
    {
      text: 'What is the "best case" scenario for binary search?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The target value is the middle element.' },
        { id: 'b', text: 'The target value is at the beginning.' },
        { id: 'c', text: 'The target value is at the end.' },
        { id: 'd', text: 'The target value is not in the list.' }
      ],
      correctAnswers: ['a'],
      explanation: 'If it\'s the middle, you find it in exactly 1 comparison.',
      difficulty: 'hard'
    }
  ],
  'topic-3.12': [ // Calling Procedures
    {
      text: 'What is a "parameter" in a procedure?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A variable used to pass data into a procedure when it is called.' },
        { id: 'b', text: 'The result returned by the procedure.' },
        { id: 'c', text: 'The name of the procedure itself.' },
        { id: 'd', text: 'A comment inside the procedure.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Parameters act as placeholders for the actual values (arguments) passed during the call.',
      difficulty: 'hard'
    },
    {
      text: 'Consider:\n\n```\nPROCEDURE calc(a, b)\n{\n    RETURN a * b + 2\n}\n\nx ← calc(3, 4)\n```\nWhat is `x`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '14' },
        { id: 'b', text: '12' },
        { id: 'c', text: '9' },
        { id: 'd', text: '24' }
      ],
      correctAnswers: ['a'],
      explanation: '3 * 4 + 2 = 12 + 2 = 14.',
      difficulty: 'hard'
    },
    {
      text: 'Why do programmers use procedures?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To reduce code duplication and make programs easier to maintain.' },
        { id: 'b', text: 'To make the code run slower.' },
        { id: 'c', text: 'To hide errors from the user.' },
        { id: 'd', text: 'To ensure the program only runs on one computer.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Procedures encapsulate logic for reuse, improving readability and maintainability.',
      difficulty: 'hard'
    },
    {
      text: 'What is an "argument" in the context of calling a procedure?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The actual value passed into the procedure during a call.' },
        { id: 'b', text: 'A disagreement between two programmers.' },
        { id: 'c', text: 'The code inside the procedure.' },
        { id: 'd', text: 'A variable that only exists inside the procedure.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Arguments are the values; parameters are the names defined in the procedure signature.',
      difficulty: 'hard'
    },
    {
      text: 'Consider:\n\n```\nPROCEDURE check(n)\n{\n    IF (n > 10) { RETURN true } ELSE { RETURN false }\n}\n\nresult ← check(5)\n```\nWhat is `result`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'false' },
        { id: 'b', text: 'true' },
        { id: 'c', text: '5' },
        { id: 'd', text: 'Error' }
      ],
      correctAnswers: ['a'],
      explanation: '5 > 10 is false, so it returns false.',
      difficulty: 'hard'
    },
    {
      text: 'Can a procedure call another procedure?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Yes' },
        { id: 'b', text: 'No' },
        { id: 'c', text: 'Only if they have the same name' },
        { id: 'd', text: 'Only if they are in different files' }
      ],
      correctAnswers: ['a'],
      explanation: 'Procedures can be nested and call each other to build complex behavior.',
      difficulty: 'hard'
    },
    {
      text: 'What happens to the flow of execution when a procedure is called?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It jumps to the procedure, runs its code, then returns to where it left off.' },
        { id: 'b', text: 'It stops the program completely.' },
        { id: 'c', text: 'It runs the rest of the main program first, then the procedure.' },
        { id: 'd', text: 'It skips the procedure entirely.' }
      ],
      correctAnswers: ['a'],
      explanation: 'This is the standard "call and return" mechanism.',
      difficulty: 'hard'
    },
    {
      text: 'What is the purpose of the `RETURN` statement?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To send a value back to the code that called the procedure.' },
        { id: 'b', text: 'To repeat the procedure 10 times.' },
        { id: 'c', text: 'To print a message to the screen.' },
        { id: 'd', text: 'To delete all variables.' }
      ],
      correctAnswers: ['a'],
      explanation: 'RETURN provides the "output" of the procedure.',
      difficulty: 'hard'
    },
    {
      text: 'Consider:\n\n```\nPROCEDURE mystery(x)\n{\n    RETURN x + x\n}\n\nval ← mystery(mystery(5))\n```\nWhat is `val`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '20' },
        { id: 'b', text: '10' },
        { id: 'c', text: '25' },
        { id: 'd', text: '15' }
      ],
      correctAnswers: ['a'],
      explanation: 'Inner call: mystery(5) returns 10. Outer call: mystery(10) returns 20.',
      difficulty: 'hard'
    },
    {
      text: 'What is a procedure with no return value often called?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A void procedure or a subroutine.' },
        { id: 'b', text: 'An empty procedure.' },
        { id: 'c', text: 'A recursive procedure.' },
        { id: 'd', text: 'An illegal procedure.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Procedures can perform actions (like DISPLAY) without returning data.',
      difficulty: 'hard'
    }
  ]
};

async function seedPart2() {
  console.log('Seeding Unit 3 Part 2...');
  let count = 0;
  for (const topicId in questions) {
    const topicQuestions = questions[topicId];
    for (const q of topicQuestions) {
      const qId = `${topicId}-extra-h-${count}`;
      await db.collection('questions').doc(qId).set({
        ...q,
        id: qId,
        topicId: topicId,
        bigIdeaId: 'big-idea-3',
        isCustom: false,
        addedBy: 'system-extra-hard',
        createdAt: new Date(),
        updatedAt: new Date(),
        deactivated: false
      });
      count++;
    }
    console.log(`Added 10 questions for ${topicId}`);
  }
  console.log('Part 2 complete!');
}

seedPart2()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
