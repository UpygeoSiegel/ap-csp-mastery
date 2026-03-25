/**
 * Seed script for Big Idea 3: Algorithms and Programming
 * Run with: node server/seeds/bigIdea3.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const { db } = require('../firebase');

if (process.env.FIREBASE_PROJECT_ID !== 'ap-csp-mastery') {
  console.error(`ERROR: Wrong project! Expected 'ap-csp-mastery' but got '${process.env.FIREBASE_PROJECT_ID}'`);
  process.exit(1);
}

console.log(`Using project: ${process.env.FIREBASE_PROJECT_ID}`);

const bigIdea3 = {
  id: 'big-idea-3',
  name: 'Big Idea 3: Algorithms and Programming',
  shortName: 'Algorithms & Programming',
  description: 'Programmers use algorithms to develop programs that automate processes and solve problems.',
  order: 3,
  color: '#F59E0B'
};

const topics = [
  {
    id: 'aap-3-1',
    bigIdeaId: 'big-idea-3',
    name: '3.1 Variables and Assignments',
    description: 'Variables are used to store and manage data in programs.',
    order: 1,
    learningObjectives: ['AAP-1.A: Represent a value with a variable.', 'AAP-1.B: Determine the value of a variable as a result of an assignment.']
  },
  {
    id: 'aap-3-2',
    bigIdeaId: 'big-idea-3',
    name: '3.2 Data Abstraction',
    description: 'Data abstraction manages complexity by giving a collection of data a name without referencing specific details.',
    order: 2,
    learningObjectives: ['AAP-1.C: Represent a list or string using a variable.', 'AAP-1.D: For data abstraction, explain how the use of data abstraction manages complexity.']
  },
  {
    id: 'aap-3-3',
    bigIdeaId: 'big-idea-3',
    name: '3.3 Mathematical Expressions',
    description: 'Mathematical expressions compute values using arithmetic operators.',
    order: 3,
    learningObjectives: ['AAP-2.A: Express an algorithm that uses sequencing without using a programming language.', 'AAP-2.B: Represent a step-by-step algorithmic process using sequential code statements.']
  },
  {
    id: 'aap-3-4',
    bigIdeaId: 'big-idea-3',
    name: '3.4 Strings',
    description: 'Strings are sequences of characters used to represent text.',
    order: 4,
    learningObjectives: ['AAP-2.C: Evaluate expressions that use arithmetic operators.', 'AAP-2.D: Evaluate expressions that manipulate strings.']
  },
  {
    id: 'aap-3-5',
    bigIdeaId: 'big-idea-3',
    name: '3.5 Boolean Expressions',
    description: 'Boolean expressions evaluate to true or false and are used for decision making.',
    order: 5,
    learningObjectives: ['AAP-2.E: For relationships between two variables, expressions, or values, write Boolean expressions.', 'AAP-2.F: For relationships between Boolean values, write Boolean expressions.']
  },
  {
    id: 'aap-3-6',
    bigIdeaId: 'big-idea-3',
    name: '3.6 Conditionals',
    description: 'Conditionals allow programs to make decisions and execute different code paths.',
    order: 6,
    learningObjectives: ['AAP-2.G: Express an algorithm that uses selection without using a programming language.', 'AAP-2.H: For selection, write conditional statements.']
  },
  {
    id: 'aap-3-7',
    bigIdeaId: 'big-idea-3',
    name: '3.7 Nested Conditionals',
    description: 'Nested conditionals allow for more complex decision-making structures.',
    order: 7,
    learningObjectives: ['AAP-2.I: For nested selection, write code statements.']
  },
  {
    id: 'aap-3-8',
    bigIdeaId: 'big-idea-3',
    name: '3.8 Iteration',
    description: 'Iteration allows programs to repeat code using loops.',
    order: 8,
    learningObjectives: ['AAP-2.J: Express an algorithm that uses iteration without using a programming language.', 'AAP-2.K: For iteration, write iteration statements.']
  },
  {
    id: 'aap-3-9',
    bigIdeaId: 'big-idea-3',
    name: '3.9 Developing Algorithms',
    description: 'Algorithms can be created from an idea, by combining existing algorithms, or by modifying existing algorithms.',
    order: 9,
    learningObjectives: ['AAP-2.L: Compare multiple algorithms to determine if they yield the same side effect or result.', 'AAP-2.M: For algorithms, identify and fix errors.']
  },
  {
    id: 'aap-3-10',
    bigIdeaId: 'big-idea-3',
    name: '3.10 Lists',
    description: 'Lists are ordered sequences of elements that can be accessed by index.',
    order: 10,
    learningObjectives: ['AAP-2.N: For list operations, write expressions.', 'AAP-2.O: For algorithms involving elements of a list, write iteration statements.']
  },
  {
    id: 'aap-3-11',
    bigIdeaId: 'big-idea-3',
    name: '3.11 Binary Search',
    description: 'Binary search is an efficient algorithm for finding elements in a sorted list.',
    order: 11,
    learningObjectives: ['AAP-2.P: For binary search, determine the number of iterations required to find a value.']
  },
  {
    id: 'aap-3-12',
    bigIdeaId: 'big-idea-3',
    name: '3.12 Procedures',
    description: 'Procedures are reusable blocks of code that can accept parameters and return values.',
    order: 12,
    learningObjectives: ['AAP-3.A: For procedure calls, determine the result.', 'AAP-3.B: Explain how the use of procedural abstraction manages complexity.']
  },
  {
    id: 'aap-3-13',
    bigIdeaId: 'big-idea-3',
    name: '3.13 Developing Procedures',
    description: 'Creating procedures involves defining parameters and return values.',
    order: 13,
    learningObjectives: ['AAP-3.C: Develop procedural abstractions to manage complexity.']
  },
  {
    id: 'aap-3-14',
    bigIdeaId: 'big-idea-3',
    name: '3.14 Libraries',
    description: 'Libraries contain procedures that can be used to simplify complex programming tasks.',
    order: 14,
    learningObjectives: ['AAP-3.D: Select appropriate libraries or existing code to use in creating new programs.']
  },
  {
    id: 'aap-3-15',
    bigIdeaId: 'big-idea-3',
    name: '3.15 Random Values',
    description: 'Random number generation is used in simulations and games.',
    order: 15,
    learningObjectives: ['AAP-3.E: For generating random values, write expressions.']
  },
  {
    id: 'aap-3-16',
    bigIdeaId: 'big-idea-3',
    name: '3.16 Simulations',
    description: 'Simulations model real-world events to draw inferences and solve problems.',
    order: 16,
    learningObjectives: ['AAP-3.F: For simulations, explain how the element of randomness generates different outcomes.']
  },
  {
    id: 'aap-3-17',
    bigIdeaId: 'big-idea-3',
    name: '3.17 Algorithmic Efficiency',
    description: 'Algorithm efficiency is measured by time and space complexity.',
    order: 17,
    learningObjectives: ['AAP-4.A: For determining the efficiency of an algorithm, explain the difference between algorithms that run in reasonable time and those that do not.']
  },
  {
    id: 'aap-3-18',
    bigIdeaId: 'big-idea-3',
    name: '3.18 Undecidable Problems',
    description: 'Some problems cannot be solved algorithmically.',
    order: 18,
    learningObjectives: ['AAP-4.B: Explain the existence of undecidable problems in computer science.']
  }
];

const questionsData = {
  'aap-3-1': [
    { text: 'What is the value of x after running: x ← 5; x ← x + 3?', type: 'multiple_choice', options: [{ id: 'a', text: '5' }, { id: 'b', text: '8' }, { id: 'c', text: '3' }, { id: 'd', text: '15' }], correctAnswers: ['b'], explanation: 'x starts at 5, then x + 3 = 8 is assigned back to x.' },
    { text: 'Which statement correctly assigns the value 10 to a variable named score?', type: 'multiple_choice', options: [{ id: 'a', text: 'score = 10' }, { id: 'b', text: '10 ← score' }, { id: 'c', text: 'score ← 10' }, { id: 'd', text: 'set 10 to score' }], correctAnswers: ['c'], explanation: 'In AP CSP pseudocode, the arrow ← assigns the value on the right to the variable on the left.' },
    { text: 'What is the value of y after: x ← 3; y ← x; x ← 7?', type: 'multiple_choice', options: [{ id: 'a', text: '3' }, { id: 'b', text: '7' }, { id: 'c', text: '10' }, { id: 'd', text: 'undefined' }], correctAnswers: ['a'], explanation: 'y is assigned the value of x when x is 3. Changing x later does not affect y.' },
    { text: 'A variable in programming is best described as:', type: 'multiple_choice', options: [{ id: 'a', text: 'A fixed value that never changes' }, { id: 'b', text: 'A named storage location that holds a value' }, { id: 'c', text: 'A mathematical equation' }, { id: 'd', text: 'A type of loop' }], correctAnswers: ['b'], explanation: 'Variables are named storage locations that can hold values which may change during program execution.' },
    { text: 'What is the result of: a ← 10; b ← 20; a ← b?', type: 'multiple_choice', options: [{ id: 'a', text: 'a = 10, b = 20' }, { id: 'b', text: 'a = 20, b = 10' }, { id: 'c', text: 'a = 20, b = 20' }, { id: 'd', text: 'a = 10, b = 10' }], correctAnswers: ['c'], explanation: 'After a ← b, both a and b hold the value 20. b was not changed.' },
    { text: 'Which of the following is NOT a valid variable name in most programming languages?', type: 'multiple_choice', options: [{ id: 'a', text: 'myVariable' }, { id: 'b', text: '_count' }, { id: 'c', text: '2ndPlace' }, { id: 'd', text: 'totalSum' }], correctAnswers: ['c'], explanation: 'Variable names cannot start with a number in most programming languages.' },
    { text: 'What happens when you assign a new value to an existing variable?', type: 'multiple_choice', options: [{ id: 'a', text: 'Both values are stored' }, { id: 'b', text: 'An error occurs' }, { id: 'c', text: 'The old value is replaced' }, { id: 'd', text: 'The new value is ignored' }], correctAnswers: ['c'], explanation: 'When a new value is assigned to a variable, the old value is overwritten.' },
    { text: 'After running: num ← 7; num ← num * 2; num ← num - 4, what is num?', type: 'multiple_choice', options: [{ id: 'a', text: '7' }, { id: 'b', text: '14' }, { id: 'c', text: '10' }, { id: 'd', text: '3' }], correctAnswers: ['c'], explanation: 'num starts at 7, then 7*2=14, then 14-4=10.' },
    { text: 'To swap the values of two variables a and b, you need:', type: 'multiple_choice', options: [{ id: 'a', text: 'a ← b; b ← a' }, { id: 'b', text: 'A temporary variable' }, { id: 'c', text: 'b ← a; a ← b' }, { id: 'd', text: 'Just one assignment' }], correctAnswers: ['b'], explanation: 'To swap values, you need a temporary variable to hold one value while reassigning.' },
    { text: 'What value does total have after: total ← 0; total ← total + 5; total ← total + 3?', type: 'multiple_choice', options: [{ id: 'a', text: '0' }, { id: 'b', text: '5' }, { id: 'c', text: '3' }, { id: 'd', text: '8' }], correctAnswers: ['d'], explanation: 'total starts at 0, adds 5 to get 5, then adds 3 to get 8.' },
    { text: 'Which describes the purpose of variable initialization?', type: 'multiple_choice', options: [{ id: 'a', text: 'To delete a variable' }, { id: 'b', text: 'To give a variable its first value' }, { id: 'c', text: 'To rename a variable' }, { id: 'd', text: 'To copy a variable' }], correctAnswers: ['b'], explanation: 'Initialization assigns the first value to a variable when it is created.' },
    { text: 'What is the value of result after: x ← 4; y ← 6; result ← x + y?', type: 'multiple_choice', options: [{ id: 'a', text: '4' }, { id: 'b', text: '6' }, { id: 'c', text: '10' }, { id: 'd', text: '24' }], correctAnswers: ['c'], explanation: 'result is assigned the sum of x (4) and y (6), which is 10.' },
    { text: 'An assignment statement does which of the following?', type: 'multiple_choice', options: [{ id: 'a', text: 'Compares two values' }, { id: 'b', text: 'Stores a value in a variable' }, { id: 'c', text: 'Outputs a value to the screen' }, { id: 'd', text: 'Creates a loop' }], correctAnswers: ['b'], explanation: 'An assignment statement stores a value in a variable.' },
    { text: 'After: temp ← x; x ← y; y ← temp, what operation was performed?', type: 'multiple_choice', options: [{ id: 'a', text: 'Addition' }, { id: 'b', text: 'Copying' }, { id: 'c', text: 'Swapping' }, { id: 'd', text: 'Deletion' }], correctAnswers: ['c'], explanation: 'This is the standard algorithm for swapping two variables using a temporary variable.' },
    { text: 'What is stored in count after: count ← "5"?', type: 'multiple_choice', options: [{ id: 'a', text: 'The number 5' }, { id: 'b', text: 'The string "5"' }, { id: 'c', text: 'An error' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: 'Quotes indicate a string, so count holds the text "5", not the number 5.' },
    { text: 'Which best describes what happens in: x ← x + 1?', type: 'multiple_choice', options: [{ id: 'a', text: 'x becomes equal to 1' }, { id: 'b', text: 'x is incremented by 1' }, { id: 'c', text: 'x is compared to 1' }, { id: 'd', text: 'An error occurs' }], correctAnswers: ['b'], explanation: 'This statement adds 1 to the current value of x and stores the result back in x.' },
    { text: 'Variables are stored in what part of a computer?', type: 'multiple_choice', options: [{ id: 'a', text: 'Monitor' }, { id: 'b', text: 'Keyboard' }, { id: 'c', text: 'Memory (RAM)' }, { id: 'd', text: 'Hard drive' }], correctAnswers: ['c'], explanation: 'Variables are stored in the computer\'s memory (RAM) during program execution.' },
    { text: 'What type of value can a variable hold?', type: 'multiple_choice', options: [{ id: 'a', text: 'Only numbers' }, { id: 'b', text: 'Only text' }, { id: 'c', text: 'Any type of data' }, { id: 'd', text: 'Only true/false' }], correctAnswers: ['c'], explanation: 'Variables can hold different types of data including numbers, text, booleans, and more.' },
    { text: 'After: a ← 5; b ← a + 2; a ← 10, what is b?', type: 'multiple_choice', options: [{ id: 'a', text: '5' }, { id: 'b', text: '7' }, { id: 'c', text: '10' }, { id: 'd', text: '12' }], correctAnswers: ['b'], explanation: 'b was assigned 5 + 2 = 7. Changing a afterward does not affect b.' },
    { text: 'What is the main purpose of using meaningful variable names?', type: 'multiple_choice', options: [{ id: 'a', text: 'Makes programs run faster' }, { id: 'b', text: 'Makes code easier to understand' }, { id: 'c', text: 'Uses less memory' }, { id: 'd', text: 'Required by all languages' }], correctAnswers: ['b'], explanation: 'Meaningful variable names make code easier to read and understand.' },
    { text: 'What is x after: x ← 10; x ← x MOD 3?', type: 'multiple_choice', options: [{ id: 'a', text: '1' }, { id: 'b', text: '3' }, { id: 'c', text: '10' }, { id: 'd', text: '0' }], correctAnswers: ['a'], explanation: '10 MOD 3 gives the remainder of 10 ÷ 3, which is 1.' },
    { text: 'Which statement is true about variable assignment?', type: 'multiple_choice', options: [{ id: 'a', text: 'The variable must exist before assignment' }, { id: 'b', text: 'Assignment creates the variable if it doesn\'t exist' }, { id: 'c', text: 'Variables can only be assigned once' }, { id: 'd', text: 'Assignment requires user input' }], correctAnswers: ['b'], explanation: 'In most contexts, assignment creates a variable if it doesn\'t already exist.' },
    { text: 'What is the difference between x ← 5 and x = 5 in pseudocode?', type: 'multiple_choice', options: [{ id: 'a', text: 'No difference' }, { id: 'b', text: '← is assignment, = is comparison' }, { id: 'c', text: '= is assignment, ← is comparison' }, { id: 'd', text: 'Both are comparison' }], correctAnswers: ['b'], explanation: 'In AP CSP pseudocode, ← is for assignment and = is for equality comparison.' },
    { text: 'After: x ← 8; y ← x / 2; x ← y * 3, what are x and y?', type: 'multiple_choice', options: [{ id: 'a', text: 'x = 8, y = 4' }, { id: 'b', text: 'x = 12, y = 4' }, { id: 'c', text: 'x = 4, y = 12' }, { id: 'd', text: 'x = 12, y = 8' }], correctAnswers: ['b'], explanation: 'y = 8/2 = 4, then x = 4*3 = 12. Final: x = 12, y = 4.' },
    { text: 'What concept allows you to refer to a stored value by name?', type: 'multiple_choice', options: [{ id: 'a', text: 'Abstraction' }, { id: 'b', text: 'Variable' }, { id: 'c', text: 'Algorithm' }, { id: 'd', text: 'Function' }], correctAnswers: ['b'], explanation: 'Variables allow you to refer to stored values by name.' }
  ],
  'aap-3-2': [
    { text: 'What is a list in programming?', type: 'multiple_choice', options: [{ id: 'a', text: 'A single value' }, { id: 'b', text: 'An ordered collection of elements' }, { id: 'c', text: 'A type of loop' }, { id: 'd', text: 'A mathematical operation' }], correctAnswers: ['b'], explanation: 'A list is an ordered collection of elements that can be accessed by index.' },
    { text: 'If myList ← [10, 20, 30], what is myList[2] in AP CSP pseudocode?', type: 'multiple_choice', options: [{ id: 'a', text: '10' }, { id: 'b', text: '20' }, { id: 'c', text: '30' }, { id: 'd', text: 'Error' }], correctAnswers: ['b'], explanation: 'In AP CSP pseudocode, list indices start at 1, so myList[2] is 20.' },
    { text: 'Data abstraction helps manage complexity by:', type: 'multiple_choice', options: [{ id: 'a', text: 'Making programs run faster' }, { id: 'b', text: 'Hiding implementation details' }, { id: 'c', text: 'Using more memory' }, { id: 'd', text: 'Creating more variables' }], correctAnswers: ['b'], explanation: 'Data abstraction hides implementation details, letting you focus on what data represents.' },
    { text: 'What is the length of the list: nums ← [5, 10, 15, 20]?', type: 'multiple_choice', options: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '20' }], correctAnswers: ['b'], explanation: 'The list contains 4 elements, so its length is 4.' },
    { text: 'Which operation adds an element to the end of a list?', type: 'multiple_choice', options: [{ id: 'a', text: 'INSERT' }, { id: 'b', text: 'APPEND' }, { id: 'c', text: 'REMOVE' }, { id: 'd', text: 'LENGTH' }], correctAnswers: ['b'], explanation: 'APPEND adds an element to the end of a list.' },
    { text: 'A string can be thought of as:', type: 'multiple_choice', options: [{ id: 'a', text: 'A list of numbers' }, { id: 'b', text: 'A sequence of characters' }, { id: 'c', text: 'A single integer' }, { id: 'd', text: 'A boolean value' }], correctAnswers: ['b'], explanation: 'A string is a sequence of characters, similar to a list of characters.' },
    { text: 'What is an advantage of using lists over individual variables?', type: 'multiple_choice', options: [{ id: 'a', text: 'Lists use less memory' }, { id: 'b', text: 'Lists can store multiple related values together' }, { id: 'c', text: 'Lists are always faster' }, { id: 'd', text: 'Lists can only store numbers' }], correctAnswers: ['b'], explanation: 'Lists allow you to store and manage multiple related values as a single unit.' },
    { text: 'If colors ← ["red", "blue", "green"], what does LENGTH(colors) return?', type: 'multiple_choice', options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '"green"' }], correctAnswers: ['b'], explanation: 'LENGTH returns the number of elements in the list, which is 3.' },
    { text: 'What does INSERT(myList, 2, "new") do?', type: 'multiple_choice', options: [{ id: 'a', text: 'Replaces element at index 2' }, { id: 'b', text: 'Adds "new" at index 2, shifting other elements' }, { id: 'c', text: 'Removes element at index 2' }, { id: 'd', text: 'Creates a new list' }], correctAnswers: ['b'], explanation: 'INSERT adds an element at the specified index, shifting existing elements.' },
    { text: 'Abstraction in programming means:', type: 'multiple_choice', options: [{ id: 'a', text: 'Making code more complex' }, { id: 'b', text: 'Simplifying by focusing on essential features' }, { id: 'c', text: 'Removing all data' }, { id: 'd', text: 'Writing longer programs' }], correctAnswers: ['b'], explanation: 'Abstraction simplifies by focusing on essential features while hiding complexity.' },
    { text: 'After: list ← [1, 2, 3]; APPEND(list, 4), what is list?', type: 'multiple_choice', options: [{ id: 'a', text: '[4, 1, 2, 3]' }, { id: 'b', text: '[1, 2, 3, 4]' }, { id: 'c', text: '[1, 2, 3]' }, { id: 'd', text: '[4]' }], correctAnswers: ['b'], explanation: 'APPEND adds 4 to the end of the list.' },
    { text: 'What happens when you access an index outside a list\'s range?', type: 'multiple_choice', options: [{ id: 'a', text: 'Returns 0' }, { id: 'b', text: 'Returns empty' }, { id: 'c', text: 'Causes an error' }, { id: 'd', text: 'Returns the last element' }], correctAnswers: ['c'], explanation: 'Accessing an index outside the valid range causes an error.' },
    { text: 'Which is an example of data abstraction?', type: 'multiple_choice', options: [{ id: 'a', text: 'Using a single variable' }, { id: 'b', text: 'Using a list to represent a deck of cards' }, { id: 'c', text: 'Adding two numbers' }, { id: 'd', text: 'Printing output' }], correctAnswers: ['b'], explanation: 'Using a list to represent a complex concept like a deck of cards is data abstraction.' },
    { text: 'In AP CSP pseudocode, what is the first index of a list?', type: 'multiple_choice', options: [{ id: 'a', text: '0' }, { id: 'b', text: '1' }, { id: 'c', text: '-1' }, { id: 'd', text: 'Depends on the list' }], correctAnswers: ['b'], explanation: 'In AP CSP pseudocode, list indices start at 1, not 0.' },
    { text: 'REMOVE(list, 3) does what?', type: 'multiple_choice', options: [{ id: 'a', text: 'Removes the value 3 from the list' }, { id: 'b', text: 'Removes the element at index 3' }, { id: 'c', text: 'Removes 3 elements' }, { id: 'd', text: 'Removes the last element' }], correctAnswers: ['b'], explanation: 'REMOVE(list, i) removes the element at index i from the list.' },
    { text: 'What is a benefit of using meaningful names for lists?', type: 'multiple_choice', options: [{ id: 'a', text: 'Makes code run faster' }, { id: 'b', text: 'Uses less memory' }, { id: 'c', text: 'Makes code self-documenting' }, { id: 'd', text: 'Required by compilers' }], correctAnswers: ['c'], explanation: 'Meaningful names make code easier to understand and maintain.' },
    { text: 'If scores ← [85, 90, 78], what is scores[1] + scores[3]?', type: 'multiple_choice', options: [{ id: 'a', text: '163' }, { id: 'b', text: '175' }, { id: 'c', text: '168' }, { id: 'd', text: '153' }], correctAnswers: ['a'], explanation: 'scores[1] = 85, scores[3] = 78, so 85 + 78 = 163.' },
    { text: 'How can a string be processed like a list?', type: 'multiple_choice', options: [{ id: 'a', text: 'It cannot be' }, { id: 'b', text: 'By accessing individual characters by index' }, { id: 'c', text: 'By converting to numbers first' }, { id: 'd', text: 'Only with special functions' }], correctAnswers: ['b'], explanation: 'Strings can be treated as sequences of characters accessible by index.' },
    { text: 'What is the purpose of the LENGTH function for lists?', type: 'multiple_choice', options: [{ id: 'a', text: 'To find the longest element' }, { id: 'b', text: 'To count the number of elements' }, { id: 'c', text: 'To sort the list' }, { id: 'd', text: 'To clear the list' }], correctAnswers: ['b'], explanation: 'LENGTH returns the total number of elements in a list.' },
    { text: 'After: data ← [10, 20, 30]; data[2] ← 25, what is data?', type: 'multiple_choice', options: [{ id: 'a', text: '[10, 25, 30]' }, { id: 'b', text: '[10, 20, 25]' }, { id: 'c', text: '[25, 20, 30]' }, { id: 'd', text: '[10, 20, 30, 25]' }], correctAnswers: ['a'], explanation: 'data[2] ← 25 replaces the element at index 2 (which was 20) with 25.' },
    { text: 'Why is data abstraction important in large programs?', type: 'multiple_choice', options: [{ id: 'a', text: 'It makes programs slower' }, { id: 'b', text: 'It reduces the need for planning' }, { id: 'c', text: 'It manages complexity by organizing data' }, { id: 'd', text: 'It eliminates all bugs' }], correctAnswers: ['c'], explanation: 'Data abstraction helps manage complexity in large programs by organizing data meaningfully.' },
    { text: 'Which represents a list of student names?', type: 'multiple_choice', options: [{ id: 'a', text: 'student ← "Alice"' }, { id: 'b', text: 'students ← ["Alice", "Bob", "Carol"]' }, { id: 'c', text: 'names ← 3' }, { id: 'd', text: 'student1, student2, student3' }], correctAnswers: ['b'], explanation: 'A list with square brackets containing multiple string elements represents a list of names.' },
    { text: 'What does iterating through a list mean?', type: 'multiple_choice', options: [{ id: 'a', text: 'Deleting all elements' }, { id: 'b', text: 'Processing each element one by one' }, { id: 'c', text: 'Sorting the list' }, { id: 'd', text: 'Copying the list' }], correctAnswers: ['b'], explanation: 'Iterating means going through and processing each element of the list.' },
    { text: 'If list ← [5], what is the valid index range?', type: 'multiple_choice', options: [{ id: 'a', text: '0 only' }, { id: 'b', text: '1 only' }, { id: 'c', text: '0 to 1' }, { id: 'd', text: '1 to 5' }], correctAnswers: ['b'], explanation: 'With one element and 1-based indexing, the only valid index is 1.' },
    { text: 'Data abstraction allows programs to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Run without any data' }, { id: 'b', text: 'Work with data without knowing all implementation details' }, { id: 'c', text: 'Automatically fix errors' }, { id: 'd', text: 'Use unlimited memory' }], correctAnswers: ['b'], explanation: 'Data abstraction lets you work with data at a higher level without worrying about implementation details.' }
  ],
  'aap-3-3': [
    { text: 'What is the result of 17 MOD 5?', type: 'multiple_choice', options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '5' }, { id: 'd', text: '12' }], correctAnswers: ['a'], explanation: '17 divided by 5 is 3 with remainder 2, so 17 MOD 5 = 2.' },
    { text: 'What does the MOD operator return?', type: 'multiple_choice', options: [{ id: 'a', text: 'The quotient' }, { id: 'b', text: 'The remainder' }, { id: 'c', text: 'The product' }, { id: 'd', text: 'The sum' }], correctAnswers: ['b'], explanation: 'MOD (modulo) returns the remainder after division.' },
    { text: 'What is the result of 3 + 4 * 2?', type: 'multiple_choice', options: [{ id: 'a', text: '14' }, { id: 'b', text: '11' }, { id: 'c', text: '10' }, { id: 'd', text: '24' }], correctAnswers: ['b'], explanation: 'Multiplication is performed before addition: 4 * 2 = 8, then 3 + 8 = 11.' },
    { text: 'What is 15 / 4 in integer division?', type: 'multiple_choice', options: [{ id: 'a', text: '3.75' }, { id: 'b', text: '3' }, { id: 'c', text: '4' }, { id: 'd', text: '60' }], correctAnswers: ['b'], explanation: 'Integer division truncates the decimal, so 15 / 4 = 3.' },
    { text: 'Which operation has the highest precedence?', type: 'multiple_choice', options: [{ id: 'a', text: 'Addition' }, { id: 'b', text: 'Subtraction' }, { id: 'c', text: 'Multiplication' }, { id: 'd', text: 'Parentheses' }], correctAnswers: ['d'], explanation: 'Parentheses have the highest precedence and are evaluated first.' },
    { text: 'What is (10 + 5) * 2?', type: 'multiple_choice', options: [{ id: 'a', text: '20' }, { id: 'b', text: '30' }, { id: 'c', text: '25' }, { id: 'd', text: '15' }], correctAnswers: ['b'], explanation: 'Parentheses first: 10 + 5 = 15, then 15 * 2 = 30.' },
    { text: 'What is 20 MOD 7?', type: 'multiple_choice', options: [{ id: 'a', text: '6' }, { id: 'b', text: '2' }, { id: 'c', text: '3' }, { id: 'd', text: '7' }], correctAnswers: ['a'], explanation: '20 divided by 7 is 2 with remainder 6.' },
    { text: 'If x = 5, what is x * x + x?', type: 'multiple_choice', options: [{ id: 'a', text: '25' }, { id: 'b', text: '30' }, { id: 'c', text: '55' }, { id: 'd', text: '125' }], correctAnswers: ['b'], explanation: '5 * 5 = 25, then 25 + 5 = 30.' },
    { text: 'What is the result of 8 - 3 - 2?', type: 'multiple_choice', options: [{ id: 'a', text: '3' }, { id: 'b', text: '7' }, { id: 'c', text: '-3' }, { id: 'd', text: '1' }], correctAnswers: ['a'], explanation: 'Left to right: 8 - 3 = 5, then 5 - 2 = 3.' },
    { text: 'What is 100 MOD 10?', type: 'multiple_choice', options: [{ id: 'a', text: '10' }, { id: 'b', text: '0' }, { id: 'c', text: '1' }, { id: 'd', text: '100' }], correctAnswers: ['b'], explanation: '100 is evenly divisible by 10, so the remainder is 0.' },
    { text: 'How can you determine if a number is even using MOD?', type: 'multiple_choice', options: [{ id: 'a', text: 'number MOD 2 = 1' }, { id: 'b', text: 'number MOD 2 = 0' }, { id: 'c', text: 'number MOD 0 = 2' }, { id: 'd', text: 'number / 2 = 0' }], correctAnswers: ['b'], explanation: 'A number is even if it has no remainder when divided by 2.' },
    { text: 'What is 2 + 3 * 4 - 1?', type: 'multiple_choice', options: [{ id: 'a', text: '13' }, { id: 'b', text: '19' }, { id: 'c', text: '14' }, { id: 'd', text: '9' }], correctAnswers: ['a'], explanation: 'Order: 3 * 4 = 12, then 2 + 12 = 14, then 14 - 1 = 13.' },
    { text: 'What is the value of 7 / 2 * 2 (using integer arithmetic)?', type: 'multiple_choice', options: [{ id: 'a', text: '7' }, { id: 'b', text: '6' }, { id: 'c', text: '3.5' }, { id: 'd', text: '14' }], correctAnswers: ['b'], explanation: 'Left to right: 7 / 2 = 3 (integer), then 3 * 2 = 6.' },
    { text: 'Which expression equals 9?', type: 'multiple_choice', options: [{ id: 'a', text: '2 + 3 * 2' }, { id: 'b', text: '(2 + 3) * 2' }, { id: 'c', text: '18 / 2' }, { id: 'd', text: '3 * 3 - 1' }], correctAnswers: ['c'], explanation: '18 / 2 = 9. The others: (a) = 8, (b) = 10, (d) = 8.' },
    { text: 'What is 25 MOD 6?', type: 'multiple_choice', options: [{ id: 'a', text: '1' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }], correctAnswers: ['a'], explanation: '25 = 6 * 4 + 1, so the remainder is 1.' },
    { text: 'If a = 10 and b = 3, what is a - b * 2?', type: 'multiple_choice', options: [{ id: 'a', text: '14' }, { id: 'b', text: '4' }, { id: 'c', text: '24' }, { id: 'd', text: '16' }], correctAnswers: ['b'], explanation: 'Multiplication first: 3 * 2 = 6, then 10 - 6 = 4.' },
    { text: 'What type of value does a mathematical expression produce?', type: 'multiple_choice', options: [{ id: 'a', text: 'Text only' }, { id: 'b', text: 'A numeric value' }, { id: 'c', text: 'A list' }, { id: 'd', text: 'A procedure' }], correctAnswers: ['b'], explanation: 'Mathematical expressions evaluate to numeric values.' },
    { text: 'What is (8 - 2) * (4 + 1)?', type: 'multiple_choice', options: [{ id: 'a', text: '30' }, { id: 'b', text: '25' }, { id: 'c', text: '35' }, { id: 'd', text: '11' }], correctAnswers: ['a'], explanation: 'Parentheses first: (8-2) = 6, (4+1) = 5, then 6 * 5 = 30.' },
    { text: 'What is 10 / 3 MOD 2 (integer arithmetic)?', type: 'multiple_choice', options: [{ id: 'a', text: '1' }, { id: 'b', text: '0' }, { id: 'c', text: '3' }, { id: 'd', text: '2' }], correctAnswers: ['a'], explanation: '10 / 3 = 3 (integer), then 3 MOD 2 = 1.' },
    { text: 'Which checks if a number is divisible by 5?', type: 'multiple_choice', options: [{ id: 'a', text: 'number / 5 = 0' }, { id: 'b', text: 'number MOD 5 = 0' }, { id: 'c', text: 'number * 5 = 0' }, { id: 'd', text: 'number - 5 = 0' }], correctAnswers: ['b'], explanation: 'A number is divisible by 5 if number MOD 5 equals 0.' },
    { text: 'What is 4 + 6 / 2?', type: 'multiple_choice', options: [{ id: 'a', text: '5' }, { id: 'b', text: '7' }, { id: 'c', text: '8' }, { id: 'd', text: '2' }], correctAnswers: ['b'], explanation: 'Division first: 6 / 2 = 3, then 4 + 3 = 7.' },
    { text: 'What is the value of -5 MOD 3?', type: 'multiple_choice', options: [{ id: 'a', text: '-2' }, { id: 'b', text: '1' }, { id: 'c', text: '2' }, { id: 'd', text: '-1' }], correctAnswers: ['b'], explanation: 'In most implementations, MOD returns a non-negative result: -5 MOD 3 = 1.' },
    { text: 'Evaluate: 2 * 3 + 4 * 5', type: 'multiple_choice', options: [{ id: 'a', text: '26' }, { id: 'b', text: '50' }, { id: 'c', text: '30' }, { id: 'd', text: '70' }], correctAnswers: ['a'], explanation: 'Multiplications first: 2*3=6 and 4*5=20, then 6+20=26.' },
    { text: 'What is 1 + 2 * 3 + 4?', type: 'multiple_choice', options: [{ id: 'a', text: '11' }, { id: 'b', text: '21' }, { id: 'c', text: '13' }, { id: 'd', text: '15' }], correctAnswers: ['a'], explanation: 'Multiplication first: 2*3=6, then 1+6+4=11.' },
    { text: 'What does order of operations ensure?', type: 'multiple_choice', options: [{ id: 'a', text: 'Faster computation' }, { id: 'b', text: 'Consistent results' }, { id: 'c', text: 'Smaller numbers' }, { id: 'd', text: 'No errors' }], correctAnswers: ['b'], explanation: 'Order of operations ensures expressions are evaluated consistently everywhere.' }
  ],
  'aap-3-4': [
    { text: 'What is the result of "Hello" + " World"?', type: 'multiple_choice', options: [{ id: 'a', text: 'HelloWorld' }, { id: 'b', text: 'Hello World' }, { id: 'c', text: 'Error' }, { id: 'd', text: 'Hello + World' }], correctAnswers: ['b'], explanation: 'String concatenation joins strings together. The space is included.' },
    { text: 'What is concatenation?', type: 'multiple_choice', options: [{ id: 'a', text: 'Comparing two strings' }, { id: 'b', text: 'Joining strings together' }, { id: 'c', text: 'Splitting a string' }, { id: 'd', text: 'Reversing a string' }], correctAnswers: ['b'], explanation: 'Concatenation joins two or more strings together into one.' },
    { text: 'If str ← "Computer", what is LENGTH(str)?', type: 'multiple_choice', options: [{ id: 'a', text: '7' }, { id: 'b', text: '8' }, { id: 'c', text: '9' }, { id: 'd', text: '0' }], correctAnswers: ['b'], explanation: 'The string "Computer" has 8 characters.' },
    { text: 'What does SUBSTRING("Programming", 1, 4) return?', type: 'multiple_choice', options: [{ id: 'a', text: 'Prog' }, { id: 'b', text: 'rogr' }, { id: 'c', text: 'gram' }, { id: 'd', text: 'Progr' }], correctAnswers: ['a'], explanation: 'SUBSTRING extracts 4 characters starting at position 1: "Prog".' },
    { text: 'Strings in programming are:', type: 'multiple_choice', options: [{ id: 'a', text: 'Only numbers' }, { id: 'b', text: 'Sequences of characters' }, { id: 'c', text: 'Boolean values' }, { id: 'd', text: 'Mathematical operations' }], correctAnswers: ['b'], explanation: 'Strings are sequences of characters used to represent text.' },
    { text: 'What is "abc" + "123"?', type: 'multiple_choice', options: [{ id: 'a', text: 'abc123' }, { id: 'b', text: '246' }, { id: 'c', text: 'Error' }, { id: 'd', text: '123abc' }], correctAnswers: ['a'], explanation: 'Concatenation joins strings in order: "abc" followed by "123".' },
    { text: 'If word ← "Test", what is word + word?', type: 'multiple_choice', options: [{ id: 'a', text: 'Test' }, { id: 'b', text: 'TestTest' }, { id: 'c', text: 'Test Test' }, { id: 'd', text: '8' }], correctAnswers: ['b'], explanation: 'Concatenating "Test" with itself produces "TestTest".' },
    { text: 'What is the index of the first character in a string (AP CSP)?', type: 'multiple_choice', options: [{ id: 'a', text: '0' }, { id: 'b', text: '1' }, { id: 'c', text: '-1' }, { id: 'd', text: 'Varies' }], correctAnswers: ['b'], explanation: 'In AP CSP pseudocode, string indices start at 1.' },
    { text: 'SUBSTRING("Hello", 2, 3) returns:', type: 'multiple_choice', options: [{ id: 'a', text: 'Hel' }, { id: 'b', text: 'ell' }, { id: 'c', text: 'llo' }, { id: 'd', text: 'el' }], correctAnswers: ['b'], explanation: 'Starting at position 2, extract 3 characters: "ell".' },
    { text: 'What is LENGTH("")?', type: 'multiple_choice', options: [{ id: 'a', text: '0' }, { id: 'b', text: '1' }, { id: 'c', text: 'Error' }, { id: 'd', text: '-1' }], correctAnswers: ['a'], explanation: 'An empty string has length 0.' },
    { text: 'Can strings contain spaces?', type: 'multiple_choice', options: [{ id: 'a', text: 'No' }, { id: 'b', text: 'Only at the end' }, { id: 'c', text: 'Yes' }, { id: 'd', text: 'Only at the start' }], correctAnswers: ['c'], explanation: 'Strings can contain spaces anywhere within them.' },
    { text: 'What is "Hi" + "" + "There"?', type: 'multiple_choice', options: [{ id: 'a', text: 'HiThere' }, { id: 'b', text: 'Hi There' }, { id: 'c', text: 'Error' }, { id: 'd', text: 'Hi + There' }], correctAnswers: ['a'], explanation: 'An empty string adds nothing, so result is "HiThere".' },
    { text: 'If text ← "Code", LENGTH(text + text) equals:', type: 'multiple_choice', options: [{ id: 'a', text: '4' }, { id: 'b', text: '8' }, { id: 'c', text: '16' }, { id: 'd', text: 'CodeCode' }], correctAnswers: ['b'], explanation: '"Code" + "Code" = "CodeCode" which has 8 characters.' },
    { text: 'What is SUBSTRING("ABCDEF", 3, 2)?', type: 'multiple_choice', options: [{ id: 'a', text: 'AB' }, { id: 'b', text: 'BC' }, { id: 'c', text: 'CD' }, { id: 'd', text: 'DE' }], correctAnswers: ['c'], explanation: 'Start at position 3 (C), extract 2 characters: "CD".' },
    { text: 'Concatenating a number with a string requires:', type: 'multiple_choice', options: [{ id: 'a', text: 'Nothing special' }, { id: 'b', text: 'Converting the number to a string' }, { id: 'c', text: 'Converting the string to a number' }, { id: 'd', text: 'Using MOD' }], correctAnswers: ['b'], explanation: 'Numbers must be converted to strings before concatenation in most languages.' },
    { text: 'If s ← "12345", SUBSTRING(s, 2, 3) is:', type: 'multiple_choice', options: [{ id: 'a', text: '123' }, { id: 'b', text: '234' }, { id: 'c', text: '345' }, { id: 'd', text: '23' }], correctAnswers: ['b'], explanation: 'Start at position 2, extract 3 characters: "234".' },
    { text: 'What type of data is "42"?', type: 'multiple_choice', options: [{ id: 'a', text: 'Integer' }, { id: 'b', text: 'String' }, { id: 'c', text: 'Boolean' }, { id: 'd', text: 'Float' }], correctAnswers: ['b'], explanation: 'With quotes, "42" is a string, not a number.' },
    { text: 'What is "A" + "B" + "C"?', type: 'multiple_choice', options: [{ id: 'a', text: 'A+B+C' }, { id: 'b', text: 'ABC' }, { id: 'c', text: 'A B C' }, { id: 'd', text: '3' }], correctAnswers: ['b'], explanation: 'Concatenation joins strings: "A" + "B" + "C" = "ABC".' },
    { text: 'SUBSTRING can be used to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Add strings together' }, { id: 'b', text: 'Extract part of a string' }, { id: 'c', text: 'Compare strings' }, { id: 'd', text: 'Count characters' }], correctAnswers: ['b'], explanation: 'SUBSTRING extracts a portion of a string.' },
    { text: 'If name ← "Alice", what is SUBSTRING(name, 1, 1)?', type: 'multiple_choice', options: [{ id: 'a', text: 'Alice' }, { id: 'b', text: 'A' }, { id: 'c', text: 'lice' }, { id: 'd', text: '' }], correctAnswers: ['b'], explanation: 'Start at position 1, extract 1 character: "A".' },
    { text: 'Which creates the string "Hello, World!"?', type: 'multiple_choice', options: [{ id: 'a', text: '"Hello" + "World"' }, { id: 'b', text: '"Hello, " + "World!"' }, { id: 'c', text: '"Hello" + ", " + "World!"' }, { id: 'd', text: 'Both B and C' }], correctAnswers: ['d'], explanation: 'Both options produce "Hello, World!" through concatenation.' },
    { text: 'What is LENGTH("   ")?', type: 'multiple_choice', options: [{ id: 'a', text: '0' }, { id: 'b', text: '3' }, { id: 'c', text: '1' }, { id: 'd', text: 'Error' }], correctAnswers: ['b'], explanation: 'Three spaces is still 3 characters.' },
    { text: 'Strings are immutable means:', type: 'multiple_choice', options: [{ id: 'a', text: 'They can be changed' }, { id: 'b', text: 'They cannot be changed after creation' }, { id: 'c', text: 'They can be empty' }, { id: 'd', text: 'They must have letters' }], correctAnswers: ['b'], explanation: 'Immutable strings cannot be modified; operations create new strings.' },
    { text: 'SUBSTRING("Computer", 5, 3) returns:', type: 'multiple_choice', options: [{ id: 'a', text: 'Com' }, { id: 'b', text: 'put' }, { id: 'c', text: 'ute' }, { id: 'd', text: 'ter' }], correctAnswers: ['c'], explanation: 'Position 5 is "u", extract 3 characters: "ute".' },
    { text: 'What is "10" + "20" in string operations?', type: 'multiple_choice', options: [{ id: 'a', text: '30' }, { id: 'b', text: '"30"' }, { id: 'c', text: '"1020"' }, { id: 'd', text: 'Error' }], correctAnswers: ['c'], explanation: 'String concatenation joins "10" and "20" to make "1020".' }
  ]
};

async function seedBigIdea3() {
  console.log('Starting Big Idea 3 seed...\n');

  try {
    // Save Big Idea
    console.log('Creating Big Idea 3...');
    await db.collection('bigIdeas').doc(bigIdea3.id).set(bigIdea3);
    console.log(`  - Created: ${bigIdea3.name}\n`);

    // Save Topics (only the ones we have questions for)
    console.log('Creating Topics...');
    for (const topic of topics.slice(0, 4)) {
      await db.collection('topics').doc(topic.id).set(topic);
      console.log(`  - Created: ${topic.name}`);
    }
    console.log('');

    // Save Questions
    console.log('Creating Questions...');
    for (const [topicId, questions] of Object.entries(questionsData)) {
      console.log(`  Topic ${topicId}: ${questions.length} questions`);
      for (let i = 0; i < questions.length; i++) {
        const question = {
          ...questions[i],
          topicId,
          order: i + 1,
          isCustom: false,
          createdAt: new Date().toISOString()
        };
        await db.collection('questions').add(question);
      }
    }

    console.log('\nBig Idea 3 seed complete! (Part 1 - Topics 3.1-3.4)');
    console.log('Run bigIdea3-part2.js to add remaining topics.');

  } catch (error) {
    console.error('Seed error:', error);
    throw error;
  }
}

seedBigIdea3()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
