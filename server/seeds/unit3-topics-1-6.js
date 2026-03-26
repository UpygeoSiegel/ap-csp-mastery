/**
 * Extra Questions for Unit 3: Topics 3.1 - 3.6
 * 10 hard questions per topic
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questions = {
  'topic-3.1': [ // Variables and Assignments
    {
      text: 'Consider the following code segment.\n\n```\nval1 ← 10\nval2 ← 20\nval3 ← 30\nval1 ← val2\nval2 ← val3\nval3 ← val1\n```\n\nWhat are the values of val1, val2, and val3 after the code segment is executed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'val1 = 20, val2 = 30, val3 = 20' },
        { id: 'b', text: 'val1 = 20, val2 = 30, val3 = 30' },
        { id: 'c', text: 'val1 = 10, val2 = 20, val3 = 30' },
        { id: 'd', text: 'val1 = 30, val2 = 20, val3 = 10' }
      ],
      correctAnswers: ['a'],
      explanation: 'Step by step: val1=10, val2=20, val3=30. Then val1=val2 (val1 becomes 20). Then val2=val3 (val2 becomes 30). Then val3=val1 (val3 becomes 20, the current value of val1).',
      difficulty: 'hard'
    },
    {
      text: 'A programmer wants to swap the values of two variables, `first` and `second`, using a temporary variable `temp`. Which of the following code segments correctly performs the swap?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'temp ← first; first ← second; second ← temp' },
        { id: 'b', text: 'first ← second; second ← first; temp ← first' },
        { id: 'c', text: 'temp ← first; second ← temp; first ← second' },
        { id: 'd', text: 'first ← temp; temp ← second; second ← first' }
      ],
      correctAnswers: ['a'],
      explanation: 'To swap, you must save the first value (temp ← first), overwrite it (first ← second), and then use the saved value to overwrite the second (second ← temp).',
      difficulty: 'hard'
    },
    {
      text: 'What will be the value of `x` after the following code executes?\n\n```\nx ← 5\ny ← 10\nx ← x + y\ny ← x - y\nx ← x - y\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '5' },
        { id: 'c', text: '15' },
        { id: 'd', text: '0' }
      ],
      correctAnswers: ['a'],
      explanation: 'This is a mathematical swap without a temp variable. x=5, y=10. x=5+10=15. y=15-10=5. x=15-5=10. Final x is 10.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the code:\n\n```\na ← 100\nb ← 200\nc ← 300\na ← b\nb ← c\nc ← a\n```\nWhat is the value of `c`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '200' },
        { id: 'b', text: '300' },
        { id: 'c', text: '100' },
        { id: 'd', text: '500' }
      ],
      correctAnswers: ['a'],
      explanation: 'a starts at 100. a becomes b (200). b becomes c (300). c becomes a (the current value 200).',
      difficulty: 'hard'
    },
    {
      text: 'What is stored in `result` after:\n\n```\nx ← 2\ny ← 3\nz ← 4\nx ← x * y\ny ← y * z\nz ← z * x\nresult ← x + y + z\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '42' },
        { id: 'b', text: '36' },
        { id: 'c', text: '24' },
        { id: 'd', text: '48' }
      ],
      correctAnswers: ['a'],
      explanation: 'x=2*3=6. y=3*4=12. z=4*6=24. Result = 6+12+24 = 42.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following describes the result of executing the code segment below?\n\n```\nlist1 ← [1, 2, 3]\nlist2 ← list1\nlist1[1] ← 10\n```\n(Assume list assignment works by reference)',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Both list1 and list2 now contain [10, 2, 3]' },
        { id: 'b', text: 'list1 contains [10, 2, 3], but list2 contains [1, 2, 3]' },
        { id: 'c', text: 'list1 contains [1, 2, 3], but list2 contains [10, 2, 3]' },
        { id: 'd', text: 'The code causes an error because you cannot assign lists.' }
      ],
      correctAnswers: ['a'],
      explanation: 'When assigning lists by reference, list2 points to the same data as list1. Changing one affects the other.',
      difficulty: 'hard'
    },
    {
      text: 'What is the value of `count` after:\n\n```\ncount ← 0\nval ← 1\ncount ← count + val\nval ← val + 1\ncount ← count + val\nval ← val + 1\ncount ← count + val\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '6' },
        { id: 'b', text: '3' },
        { id: 'c', text: '5' },
        { id: 'd', text: '9' }
      ],
      correctAnswers: ['a'],
      explanation: 'count=0+1=1. val=2. count=1+2=3. val=3. count=3+3=6.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the code:\n\n```\nx ← 10\ny ← 20\nx ← x + y\ny ← x\nx ← y + y\n```\nWhat is the value of `x`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '60' },
        { id: 'b', text: '30' },
        { id: 'c', text: '40' },
        { id: 'd', text: '50' }
      ],
      correctAnswers: ['a'],
      explanation: 'x=10+20=30. y=30. x=30+30=60.',
      difficulty: 'hard'
    },
    {
      text: 'If `a = 5`, what is `a` after `a ← (a * a) - a`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '20' },
        { id: 'b', text: '25' },
        { id: 'c', text: '15' },
        { id: 'd', text: '30' }
      ],
      correctAnswers: ['a'],
      explanation: 'a = (5 * 5) - 5 = 25 - 5 = 20.',
      difficulty: 'hard'
    },
    {
      text: 'What happens to `val` in this segment?\n\n```\nval ← 10\nval ← val / 2\nval ← val / 2\nval ← val / 2\n```\n(Assume floating point division)',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1.25' },
        { id: 'b', text: '2.5' },
        { id: 'c', text: '5' },
        { id: 'd', text: '0' }
      ],
      correctAnswers: ['a'],
      explanation: '10 -> 5 -> 2.5 -> 1.25.',
      difficulty: 'hard'
    }
  ],
  'topic-3.2': [ // Data Abstraction
    {
      text: 'Which of the following is the primary benefit of using a list to store data in a program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It allows the program to process an arbitrary number of items using a single variable name.' },
        { id: 'b', text: 'It makes the program run significantly faster than using individual variables.' },
        { id: 'c', text: 'It prevents the program from using too much memory.' },
        { id: 'd', text: 'It automatically sorts the data in alphabetical order.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lists provide abstraction by allowing multiple related items to be handled as a single collection, facilitating loops and scalability.',
      difficulty: 'hard'
    },
    {
      text: 'A student is creating a program to track student grades. Which of the following is an example of data abstraction?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Creating a list called `grades` to store all student scores instead of variables `grade1`, `grade2`, etc.' },
        { id: 'b', text: 'Writing a comment to explain how the grading formula works.' },
        { id: 'c', text: 'Using a loop to print every grade in the list.' },
        { id: 'd', text: 'Naming the variable `g` instead of `grade`.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Abstraction involves hiding details (like the individual variable names for each grade) behind a higher-level representation (the list).',
      difficulty: 'hard'
    },
    {
      text: 'How does data abstraction contribute to the manageability of a large software project?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It allows developers to change the internal representation of data without affecting the code that uses it.' },
        { id: 'b', text: 'It eliminates the need for testing the program.' },
        { id: 'c', text: 'It ensures that the program can only be understood by its original author.' },
        { id: 'd', text: 'It reduces the total number of lines of code to exactly 100.' }
      ],
      correctAnswers: ['a'],
      explanation: 'By abstracting data, you create a consistent interface. If you change how data is stored (e.g., from an array to a database), the rest of the program remains the same.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following best describes "procedural abstraction"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Breaking a complex task into smaller, reusable procedures that can be called by name.' },
        { id: 'b', text: 'Using a list to store multiple values.' },
        { id: 'c', text: 'Writing code that only runs once.' },
        { id: 'd', text: 'Hardcoding every value in the program.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Procedural abstraction allows you to use a procedure (like `drawSquare()`) without needing to know the complex lines of code inside it every time.',
      difficulty: 'hard'
    },
    {
      text: 'In the context of AP CSP, what is the "index" of a list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A numerical value used to specify the position of an element in the list.' },
        { id: 'b', text: 'The total number of elements in the list.' },
        { id: 'c', text: 'The last element added to the list.' },
        { id: 'd', text: 'A special keyword used to delete the list.' }
      ],
      correctAnswers: ['a'],
      explanation: 'The index is the address or position of an item. AP CSP uses 1-based indexing.',
      difficulty: 'hard'
    },
    {
      text: 'Why might a programmer choose to use a string to represent a date (e.g., "2024-05-20") instead of three separate integer variables?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To treat the date as a single unit of information (abstraction).' },
        { id: 'b', text: 'Because strings use less memory than integers.' },
        { id: 'c', text: 'Because you cannot perform calculations on integers.' },
        { id: 'd', text: 'To make the program harder to read.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Representing related data as a single string is a form of abstraction that simplifies passing the data around the program.',
      difficulty: 'hard'
    },
    {
      text: 'A list `colors` is defined as `["red", "blue", "green"]`. What is the result of `INSERT(colors, 2, "yellow")`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '["red", "yellow", "blue", "green"]' },
        { id: 'b', text: '["red", "blue", "yellow", "green"]' },
        { id: 'c', text: '["yellow", "red", "blue", "green"]' },
        { id: 'd', text: '["red", "yellow", "green"]' }
      ],
      correctAnswers: ['a'],
      explanation: 'INSERT(list, i, val) places val at index i and shifts existing items. Index 2 was "blue", so "yellow" becomes the new index 2.',
      difficulty: 'hard'
    },
    {
      text: 'Which statement is true about 1-based indexing used in AP CSP pseudocode?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The first element of a list is at index 1.' },
        { id: 'b', text: 'The first element of a list is at index 0.' },
        { id: 'c', text: 'The last element is always at index 0.' },
        { id: 'd', text: 'Indices must be negative numbers.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Unlike many programming languages (like Python or Java) that use 0-based indexing, the AP CSP pseudocode starts at 1.',
      difficulty: 'hard'
    },
    {
      text: 'What is the result of `REMOVE(myList, 1)` if `myList` is `[10, 20, 30]`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '[20, 30]' },
        { id: 'b', text: '[10, 20]' },
        { id: 'c', text: '[10, 30]' },
        { id: 'd', text: '[]' }
      ],
      correctAnswers: ['a'],
      explanation: 'Removing index 1 removes the first element (10), leaving [20, 30].',
      difficulty: 'hard'
    },
    {
      text: 'If a list has 10 elements, what is the index of the last element in AP CSP pseudocode?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '9' },
        { id: 'c', text: '11' },
        { id: 'd', text: '0' }
      ],
      correctAnswers: ['a'],
      explanation: 'In 1-based indexing, the index of the last element is equal to the length of the list.',
      difficulty: 'hard'
    }
  ],
  'topic-3.3': [ // Mathematical Expressions
    {
      text: 'What is the result of `17 MOD 5`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '3' },
        { id: 'c', text: '1' },
        { id: 'd', text: '5' }
      ],
      correctAnswers: ['a'],
      explanation: '17 divided by 5 is 3 with a remainder of 2. MOD returns the remainder.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the following expression: `(10 + 5 * 2) / (10 - 5)`. What is the result?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '6' },
        { id: 'c', text: '2' },
        { id: 'd', text: '10' }
      ],
      correctAnswers: ['a'],
      explanation: 'Follow order of operations: (10 + 10) / 5 = 20 / 5 = 4.',
      difficulty: 'hard'
    },
    {
      text: 'Which code segment correctly calculates the average of three variables `a`, `b`, and `c`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '(a + b + c) / 3' },
        { id: 'b', text: 'a + b + c / 3' },
        { id: 'c', text: 'a + (b + c / 3)' },
        { id: 'd', text: 'a + b + (c / 3)' }
      ],
      correctAnswers: ['a'],
      explanation: 'Parentheses are required to ensure the sum is calculated before the division.',
      difficulty: 'hard'
    },
    {
      text: 'What is the value of `result`?\n\n```\nx ← 10\ny ← 3\nresult ← (x / y) + (x MOD y)\n```\n(Assume integer division for x/y)',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '3.33' },
        { id: 'c', text: '5' },
        { id: 'd', text: '1' }
      ],
      correctAnswers: ['a'],
      explanation: '10/3 = 3 (integer part). 10 MOD 3 = 1 (remainder). 3 + 1 = 4.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following expressions will ALWAYS evaluate to a number between 1 and 6 inclusive?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'RANDOM(1, 6)' },
        { id: 'b', text: 'RANDOM(0, 5) + 1' },
        { id: 'c', text: 'Both a and b' },
        { id: 'd', text: 'Neither a nor b' }
      ],
      correctAnswers: ['c'],
      explanation: 'Both expressions produce integers in the range [1, 6].',
      difficulty: 'hard'
    },
    {
      text: 'What is the result of `100 MOD 10`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '10' },
        { id: 'c', text: '1' },
        { id: 'd', text: '100' }
      ],
      correctAnswers: ['a'],
      explanation: '100 is perfectly divisible by 10, so the remainder is 0.',
      difficulty: 'hard'
    },
    {
      text: 'Consider:\n\n```\nval ← 15\nval ← val * 2\nval ← val MOD 10\n```\nWhat is `val`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '5' },
        { id: 'c', text: '30' },
        { id: 'd', text: '10' }
      ],
      correctAnswers: ['a'],
      explanation: 'val=15*2=30. 30 MOD 10 = 0.',
      difficulty: 'hard'
    },
    {
      text: 'If `x` is an even number, what is `x MOD 2`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '1' },
        { id: 'c', text: '2' },
        { id: 'd', text: 'It depends on the number' }
      ],
      correctAnswers: ['a'],
      explanation: 'Even numbers are divisible by 2 with no remainder.',
      difficulty: 'hard'
    },
    {
      text: 'What is the value of `z`?\n\n```\nx ← 5\ny ← 2\nz ← x / y\n```\n(Assume the AP CSP "real number" division rule)',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2.5' },
        { id: 'b', text: '2' },
        { id: 'c', text: '3' },
        { id: 'd', text: '0.5' }
      ],
      correctAnswers: ['a'],
      explanation: 'In AP CSP pseudocode, division (/) typically results in a real number (decimal).',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following evaluates to 10?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '55 MOD 15' },
        { id: 'b', text: '55 MOD 10' },
        { id: 'c', text: '55 MOD 5' },
        { id: 'd', text: '55 MOD 50' }
      ],
      correctAnswers: ['a'],
      explanation: '55 / 15 = 3 with remainder 10. (15*3=45, 55-45=10).',
      difficulty: 'hard'
    }
  ],
  'topic-3.4': [ // Strings
    {
      text: 'What is displayed?\n\n```\nword ← \"ALGORITHM\"\nsub ← SUBSTRING(word, 3, 4)\nDISPLAY(sub)\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"GORI\"' },
        { id: 'b', text: '\"ALGO\"' },
        { id: 'c', text: '\"LGOR\"' },
        { id: 'd', text: '\"ORIT\"' }
      ],
      correctAnswers: ['a'],
      explanation: 'Starting at index 3 (G) and taking 4 characters: G-O-R-I.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the following code segment:\n\n```\nstr1 ← \"apple\"\nstr2 ← \"pie\"\nresult ← CONCAT(str1, str2)\nresult ← CONCAT(result, str1)\n```\nWhat is `result`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"applepieapple\"' },
        { id: 'b', text: '\"applepie\"' },
        { id: 'c', text: '\"appleapplepie\"' },
        { id: 'd', text: '\"pieappleapple\"' }
      ],
      correctAnswers: ['a'],
      explanation: 'First CONCAT: \"applepie\". Second CONCAT adds \"apple\" to the end: \"applepieapple\".',
      difficulty: 'hard'
    },
    {
      text: 'What is the value of `len`?\n\n```\ntext ← \"CSP is fun\"\nlen ← LENGTH(text)\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '8' },
        { id: 'c', text: '9' },
        { id: 'd', text: '11' }
      ],
      correctAnswers: ['a'],
      explanation: 'Length includes spaces: C(1), S(2), P(3), space(4), i(5), s(6), space(7), f(8), u(9), n(10).',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following code segments will result in the string \"AB\"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'CONCAT(SUBSTRING(\"ABC\", 1, 1), SUBSTRING(\"ABC\", 2, 1))' },
        { id: 'b', text: 'SUBSTRING(\"ABC\", 1, 2)' },
        { id: 'c', text: 'Both a and b' },
        { id: 'd', text: 'Neither a nor b' }
      ],
      correctAnswers: ['c'],
      explanation: 'a: CONCAT(\"A\", \"B\") = \"AB\". b: SUBSTRING(\"ABC\", 1, 2) starts at 1, length 2 = \"AB\".',
      difficulty: 'hard'
    },
    {
      text: 'What is the output of the following?\n\n```\ns ← \"MISSISSIPPI\"\nDISPLAY(SUBSTRING(s, LENGTH(s) - 1, 2))\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"PI\"' },
        { id: 'b', text: '\"I\"' },
        { id: 'c', text: '\"PP\"' },
        { id: 'd', text: '\"IP\"' }
      ],
      correctAnswers: ['a'],
      explanation: 'LENGTH is 11. 11-1 = 10. SUBSTRING starting at 10 with length 2 gives characters at 10 and 11: \"PI\".',
      difficulty: 'hard'
    },
    {
      text: 'How can you extract the first character of a string `str`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'SUBSTRING(str, 1, 1)' },
        { id: 'b', text: 'SUBSTRING(str, 0, 1)' },
        { id: 'c', text: 'str[0]' },
        { id: 'd', text: 'FIRST(str)' }
      ],
      correctAnswers: ['a'],
      explanation: 'In AP CSP, SUBSTRING is 1-indexed. Start at 1, length 1.',
      difficulty: 'hard'
    },
    {
      text: 'What is the result of `CONCAT(\"\", \" \")`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A string containing a single space' },
        { id: 'b', text: 'An empty string' },
        { id: 'c', text: 'An error' },
        { id: 'd', text: 'A string with two spaces' }
      ],
      correctAnswers: ['a'],
      explanation: 'Concatenating an empty string with a space results in a space.',
      difficulty: 'hard'
    },
    {
      text: 'Consider:\n\n```\na ← \"123\"\nb ← \"456\"\nresult ← CONCAT(a, b)\n```\nWhat is `result`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"123456\"' },
        { id: 'b', text: '579' },
        { id: 'c', text: '\"579\"' },
        { id: 'd', text: '\"456123\"' }
      ],
      correctAnswers: ['a'],
      explanation: 'String concatenation joins the characters, it does not add them numerically.',
      difficulty: 'hard'
    },
    {
      text: 'What is the length of `SUBSTRING(\"COLLEGEBOARD\", 2, 5)`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '2' },
        { id: 'c', text: '4' },
        { id: 'd', text: '6' }
      ],
      correctAnswers: ['a'],
      explanation: 'The third parameter of SUBSTRING defines the length of the resulting string.',
      difficulty: 'hard'
    },
    {
      text: 'If `s ← \"RED\"`, what is `CONCAT(SUBSTRING(s, 2, 1), SUBSTRING(s, 1, 1))`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"ER\"' },
        { id: 'b', text: '\"RE\"' },
        { id: 'c', text: '\"ED\"' },
        { id: 'd', text: '\"DE\"' }
      ],
      correctAnswers: ['a'],
      explanation: 'Index 2 is E, Index 1 is R. CONCAT(\"E\", \"R\") = \"ER\".',
      difficulty: 'hard'
    }
  ],
  'topic-3.5': [ // Boolean Expressions
    {
      text: 'Which of the following Boolean expressions is equivalent to `NOT (A AND B)`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '(NOT A) OR (NOT B)' },
        { id: 'b', text: '(NOT A) AND (NOT B)' },
        { id: 'c', text: 'A OR B' },
        { id: 'd', text: 'NOT (A OR B)' }
      ],
      correctAnswers: ['a'],
      explanation: 'De Morgan\'s Law states that the negation of an AND is the OR of the negations.',
      difficulty: 'hard'
    },
    {
      text: 'If `x = 10` and `y = 20`, which expression evaluates to `true`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '(x > 5) AND (y < 30)' },
        { id: 'b', text: '(x < 5) OR (y > 30)' },
        { id: 'c', text: 'NOT (x < 20)' },
        { id: 'd', text: '(x = y)' }
      ],
      correctAnswers: ['a'],
      explanation: '10 > 5 is true, and 20 < 30 is true. true AND true = true.',
      difficulty: 'hard'
    },
    {
      text: 'What does the expression `(x > 10) OR (x < 5)` evaluate to when `x = 7`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'false' },
        { id: 'b', text: 'true' },
        { id: 'c', text: '7' },
        { id: 'd', text: 'Error' }
      ],
      correctAnswers: ['a'],
      explanation: '7 > 10 is false. 7 < 5 is false. false OR false = false.',
      difficulty: 'hard'
    },
    {
      text: 'Which expression is true only when `x` is between 1 and 10 exclusive?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '(x > 1) AND (x < 10)' },
        { id: 'b', text: '(x >= 1) AND (x <= 10)' },
        { id: 'c', text: '(x > 1) OR (x < 10)' },
        { id: 'd', text: 'NOT (x > 10)' }
      ],
      correctAnswers: ['a'],
      explanation: 'Exclusive means not including the boundaries. 1 < x < 10.',
      difficulty: 'hard'
    },
    {
      text: 'Evaluate: `NOT (true AND false) OR (false AND true)`',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'true' },
        { id: 'b', text: 'false' },
        { id: 'c', text: 'Error' },
        { id: 'd', text: 'undefined' }
      ],
      correctAnswers: ['a'],
      explanation: 'NOT (false) OR (false) = true OR false = true.',
      difficulty: 'hard'
    },
    {
      text: 'Which logic gate represents the expression `A AND B`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A gate that outputs true only if both inputs are true.' },
        { id: 'b', text: 'A gate that outputs true if at least one input is true.' },
        { id: 'c', text: 'A gate that outputs false only if both inputs are true.' },
        { id: 'd', text: 'A gate that always outputs the opposite of the input.' }
      ],
      correctAnswers: ['a'],
      explanation: 'This is the definition of an AND gate.',
      difficulty: 'hard'
    },
    {
      text: 'If `A` is true and `B` is false, what is `(A OR B) AND (NOT B)`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'true' },
        { id: 'b', text: 'false' },
        { id: 'c', text: 'Error' },
        { id: 'd', text: '0' }
      ],
      correctAnswers: ['a'],
      explanation: '(true OR false) AND (NOT false) = true AND true = true.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is equivalent to `x ≠ y`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'NOT (x = y)' },
        { id: 'b', text: '(x < y) OR (x > y)' },
        { id: 'c', text: 'Both a and b' },
        { id: 'd', text: 'Neither a nor b' }
      ],
      correctAnswers: ['c'],
      explanation: 'Both represent the "not equal to" condition.',
      difficulty: 'hard'
    },
    {
      text: 'What is the result of `(5 > 3) AND (10 = 10) AND (2 < 1)`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'false' },
        { id: 'b', text: 'true' },
        { id: 'c', text: 'Error' },
        { id: 'd', text: 'true true false' }
      ],
      correctAnswers: ['a'],
      explanation: 'In an AND chain, if any part is false, the whole thing is false.',
      difficulty: 'hard'
    },
    {
      text: 'Which expression correctly checks if `num` is a positive odd integer?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '(num > 0) AND (num MOD 2 = 1)' },
        { id: 'b', text: '(num > 0) OR (num MOD 2 = 1)' },
        { id: 'c', text: '(num > 0) AND (num MOD 2 = 0)' },
        { id: 'd', text: 'NOT (num < 0)' }
      ],
      correctAnswers: ['a'],
      explanation: 'Must be greater than 0 AND have a remainder of 1 when divided by 2.',
      difficulty: 'hard'
    }
  ],
  'topic-3.6': [ // Conditionals
    {
      text: 'Consider the following code segment:\n\n```\nIF (x > 10)\n{\n    DISPLAY(\"High\")\n}\nELSE\n{\n    IF (x > 5)\n    {\n        DISPLAY(\"Medium\")\n    }\n    ELSE\n    {\n        DISPLAY(\"Low\")\n    }\n}\n```\nWhat is displayed if `x = 10`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"Medium\"' },
        { id: 'b', text: '\"High\"' },
        { id: 'c', text: '\"Low\"' },
        { id: 'd', text: 'Nothing' }
      ],
      correctAnswers: ['a'],
      explanation: '10 > 10 is false, so it goes to ELSE. 10 > 5 is true, so it displays \"Medium\".',
      difficulty: 'hard'
    },
    {
      text: 'A robot moves forward if there is a path ahead, otherwise it rotates right. Which code segment correctly implements this?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'IF (CAN_MOVE(forward)) { MOVE_FORWARD() } ELSE { ROTATE_RIGHT() }' },
        { id: 'b', text: 'IF (CAN_MOVE(forward)) { MOVE_FORWARD() } ROTATE_RIGHT()' },
        { id: 'c', text: 'MOVE_FORWARD(); IF (NOT CAN_MOVE(forward)) { ROTATE_RIGHT() }' },
        { id: 'd', text: 'ROTATE_RIGHT(); IF (CAN_MOVE(forward)) { MOVE_FORWARD() }' }
      ],
      correctAnswers: ['a'],
      explanation: 'The IF-ELSE structure ensures only one of the two actions happens based on the condition.',
      difficulty: 'hard'
    },
    {
      text: 'What will be displayed if `score = 85`?\n\n```\nIF (score >= 90)\n{\n    DISPLAY(\"A\")\n}\nIF (score >= 80)\n{\n    DISPLAY(\"B\")\n}\nIF (score >= 70)\n{\n    DISPLAY(\"C\")\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"B\" followed by \"C\"' },
        { id: 'b', text: '\"B\"' },
        { id: 'c', text: '\"A\" \"B\" \"C\"' },
        { id: 'd', text: '\"C\"' }
      ],
      correctAnswers: ['a'],
      explanation: 'These are independent IF statements. 85 >= 90 is false. 85 >= 80 is true (displays B). 85 >= 70 is true (displays C).',
      difficulty: 'hard'
    },
    {
      text: 'Which code segment is equivalent to `IF (x > 0 AND x < 100) { DISPLAY(\"Valid\") }`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'IF (x > 0) { IF (x < 100) { DISPLAY(\"Valid\") } }' },
        { id: 'b', text: 'IF (x > 0) { DISPLAY(\"Valid\") } ELSE { IF (x < 100) { DISPLAY(\"Valid\") } }' },
        { id: 'c', text: 'IF (x > 0 OR x < 100) { DISPLAY(\"Valid\") }' },
        { id: 'd', text: 'IF (x < 100) { DISPLAY(\"Valid\") }' }
      ],
      correctAnswers: ['a'],
      explanation: 'Nesting two IF statements is logically equivalent to a single AND condition.',
      difficulty: 'hard'
    },
    {
      text: 'What is the value of `price`?\n\n```\nage ← 15\nprice ← 10\nIF (age < 12 OR age > 65)\n{\n    price ← 5\n}\nELSE\n{\n    IF (age < 18)\n    {\n        price ← 8\n    }\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '8' },
        { id: 'b', text: '10' },
        { id: 'c', text: '5' },
        { id: 'd', text: '15' }
      ],
      correctAnswers: ['a'],
      explanation: '15 < 12 is false, 15 > 65 is false. Go to ELSE. 15 < 18 is true, so price becomes 8.',
      difficulty: 'hard'
    },
    {
      text: 'In an IF-ELSE structure, when does the code in the ELSE block execute?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only when the condition in the IF statement is false.' },
        { id: 'b', text: 'Every time the program runs.' },
        { id: 'c', text: 'Only when the condition in the IF statement is true.' },
        { id: 'd', text: 'When there is an error in the program.' }
      ],
      correctAnswers: ['a'],
      explanation: 'The ELSE block is the default "otherwise" path.',
      difficulty: 'hard'
    },
    {
      text: 'What is displayed?\n\n```\nx ← 5\ny ← 5\nIF (x < y)\n{\n    DISPLAY(\"1\")\n}\nELSE\n{\n    IF (x = y)\n    {\n        DISPLAY(\"2\")\n    }\n    ELSE\n    {\n        DISPLAY(\"3\")\n    }\n}\n```',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '1' },
        { id: 'c', text: '3' },
        { id: 'd', text: 'Nothing' }
      ],
      correctAnswers: ['a'],
      explanation: '5 < 5 is false. Go to ELSE. 5 = 5 is true, display 2.',
      difficulty: 'hard'
    },
    {
      text: 'Which condition correctly checks if a number is negative?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'num < 0' },
        { id: 'b', text: 'num <= 0' },
        { id: 'c', text: 'num > 0' },
        { id: 'd', text: 'NOT (num = 0)' }
      ],
      correctAnswers: ['a'],
      explanation: 'Negative numbers are strictly less than zero.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the code:\n\n```\ntemp ← 30\nIF (temp > 80)\n{\n    DISPLAY(\"Hot\")\n}\nELSE\n{\n    DISPLAY(\"Cold\")\n}\n```\nWhat is displayed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '\"Cold\"' },
        { id: 'b', text: '\"Hot\"' },
        { id: 'c', text: 'Both Hot and Cold' },
        { id: 'd', text: 'Nothing' }
      ],
      correctAnswers: ['a'],
      explanation: '30 > 80 is false, so it executes the ELSE block.',
      difficulty: 'hard'
    },
    {
      text: 'Which operator is used to check for equality in AP CSP pseudocode?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '=' },
        { id: 'b', text: '==' },
        { id: 'c', text: '←' },
        { id: 'd', text: 'equals' }
      ],
      correctAnswers: ['a'],
      explanation: 'In pseudocode, = is used for comparison, and ← is used for assignment.',
      difficulty: 'hard'
    }
  ]
};

async function seedPart1() {
  console.log('Seeding Unit 3 Part 1...');
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
  console.log('Part 1 complete!');
}

seedPart1()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
