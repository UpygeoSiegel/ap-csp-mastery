/**
 * Seed additional questions for Big Idea 3: Algorithms and Programming
 * Run with: node server/seeds/seed-bigidea3-questions.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questionsData = {
  'topic-3.1': [
    // Variables and Assignments - 10 questions
    {
      text: 'What is a variable in programming?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A fixed value that cannot change' },
        { id: 'b', text: 'A named storage location that holds a value' },
        { id: 'c', text: 'A type of loop' },
        { id: 'd', text: 'A function name' }
      ],
      correctAnswers: ['b'],
      explanation: 'A variable is a named storage location in memory that can hold a value which may change during program execution.'
    },
    {
      text: 'If x = 5 and then x = x + 3, what is the value of x?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '3' },
        { id: 'c', text: '8' },
        { id: 'd', text: '15' }
      ],
      correctAnswers: ['c'],
      explanation: 'x starts at 5, then x + 3 = 5 + 3 = 8 is assigned back to x.'
    },
    {
      text: 'What is the assignment operator in most programming languages?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '==' },
        { id: 'b', text: '=' },
        { id: 'c', text: ':' },
        { id: 'd', text: '->' }
      ],
      correctAnswers: ['b'],
      explanation: 'The single equals sign (=) is used for assignment. Double equals (==) is typically used for comparison.'
    },
    {
      text: 'Which of the following is a valid variable name?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2ndPlace' },
        { id: 'b', text: 'my-variable' },
        { id: 'c', text: 'studentName' },
        { id: 'd', text: 'class' }
      ],
      correctAnswers: ['c'],
      explanation: 'Variable names cannot start with numbers, usually cannot contain hyphens, and should avoid reserved words like "class".'
    },
    {
      text: 'What happens when you assign a new value to an existing variable?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An error occurs' },
        { id: 'b', text: 'The old value is replaced with the new value' },
        { id: 'c', text: 'Both values are stored' },
        { id: 'd', text: 'The variable is deleted' }
      ],
      correctAnswers: ['b'],
      explanation: 'When you assign a new value to a variable, the old value is replaced (overwritten) with the new value.'
    },
    {
      text: 'If a = 10 and b = a, then a = 20, what is the value of b?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '20' },
        { id: 'c', text: '30' },
        { id: 'd', text: 'undefined' }
      ],
      correctAnswers: ['a'],
      explanation: 'When b = a is executed, b gets the current value of a (10). Changing a later does not affect b.'
    },
    {
      text: 'What is initialization of a variable?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Deleting a variable' },
        { id: 'b', text: 'Giving a variable its first value' },
        { id: 'c', text: 'Changing a variable type' },
        { id: 'd', text: 'Printing a variable' }
      ],
      correctAnswers: ['b'],
      explanation: 'Initialization is assigning an initial (first) value to a variable when it is created.'
    },
    {
      text: 'In the statement "score = score + 10", what does the right side evaluate first?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The assignment happens first' },
        { id: 'b', text: 'The expression score + 10 is evaluated, then assigned to score' },
        { id: 'c', text: 'Both happen simultaneously' },
        { id: 'd', text: 'This statement causes an error' }
      ],
      correctAnswers: ['b'],
      explanation: 'The right side of an assignment is always evaluated first, then the result is assigned to the variable on the left.'
    },
    {
      text: 'What type of value does a variable hold if it contains "Hello"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Integer' },
        { id: 'b', text: 'Boolean' },
        { id: 'c', text: 'String' },
        { id: 'd', text: 'Float' }
      ],
      correctAnswers: ['c'],
      explanation: 'Text enclosed in quotes is a string. "Hello" is a string value.'
    },
    {
      text: 'If x = 7 and y = 2, what is x MOD y (x modulo y)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '1' },
        { id: 'c', text: '3.5' },
        { id: 'd', text: '14' }
      ],
      correctAnswers: ['b'],
      explanation: 'MOD returns the remainder after division. 7 ÷ 2 = 3 remainder 1, so 7 MOD 2 = 1.'
    }
  ],

  'topic-3.2': [
    // Data Abstraction - 10 questions
    {
      text: 'What is data abstraction?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Deleting unnecessary data' },
        { id: 'b', text: 'Representing complex data with a simpler interface, hiding implementation details' },
        { id: 'c', text: 'Converting data to binary' },
        { id: 'd', text: 'Compressing data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data abstraction simplifies complex data by providing a clean interface while hiding the underlying implementation details.'
    },
    {
      text: 'A list is an example of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A single variable' },
        { id: 'b', text: 'A data abstraction that stores multiple items' },
        { id: 'c', text: 'A type of loop' },
        { id: 'd', text: 'A boolean expression' }
      ],
      correctAnswers: ['b'],
      explanation: 'A list is a data abstraction that allows you to store and manage multiple related items under one name.'
    },
    {
      text: 'What is the main benefit of using data abstraction?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Programs run faster' },
        { id: 'b', text: 'It reduces complexity and makes programs easier to understand and maintain' },
        { id: 'c', text: 'It uses less memory' },
        { id: 'd', text: 'It prevents all errors' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data abstraction manages complexity by letting programmers work with data without needing to know all implementation details.'
    },
    {
      text: 'Which of the following is an example of using abstraction with a list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Storing each student name in a separate variable' },
        { id: 'b', text: 'Using a single list variable called "studentNames" to store all names' },
        { id: 'c', text: 'Printing each name individually' },
        { id: 'd', text: 'Using only integers' }
      ],
      correctAnswers: ['b'],
      explanation: 'Using a list abstracts multiple related values into a single named collection, simplifying the code.'
    },
    {
      text: 'If a list called "grades" contains [85, 90, 78, 92], what is grades[2] (using 1-based indexing)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '85' },
        { id: 'b', text: '90' },
        { id: 'c', text: '78' },
        { id: 'd', text: '92' }
      ],
      correctAnswers: ['b'],
      explanation: 'With 1-based indexing, grades[1]=85, grades[2]=90, grades[3]=78, grades[4]=92.'
    },
    {
      text: 'What does it mean to "traverse" a list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Delete the list' },
        { id: 'b', text: 'Access each element in the list one at a time' },
        { id: 'c', text: 'Sort the list' },
        { id: 'd', text: 'Copy the list' }
      ],
      correctAnswers: ['b'],
      explanation: 'Traversing a list means going through each element, typically using a loop, to access or process each item.'
    },
    {
      text: 'Why would you use a list instead of separate variables?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Easier to manage related data together' },
        { id: 'b', text: 'Can use loops to process all items' },
        { id: 'c', text: 'More scalable when the number of items changes' },
        { id: 'd', text: 'Lists are always faster' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Lists keep related data together, enable loop processing, and scale well. Speed depends on the operation.'
    },
    {
      text: 'What operation adds an element to the end of a list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'INSERT' },
        { id: 'b', text: 'APPEND' },
        { id: 'c', text: 'REMOVE' },
        { id: 'd', text: 'LENGTH' }
      ],
      correctAnswers: ['b'],
      explanation: 'APPEND adds a new element to the end of an existing list.'
    },
    {
      text: 'How does abstraction help when working with a database of 10,000 customer records?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'You must create 10,000 separate variables' },
        { id: 'b', text: 'You can use data structures to manage all records without individual variables' },
        { id: 'c', text: 'Abstraction cannot help with this' },
        { id: 'd', text: 'You must manually type each record' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data structures like lists and databases abstract away the complexity of managing thousands of individual records.'
    },
    {
      text: 'A string can be thought of as:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A single character' },
        { id: 'b', text: 'An abstraction representing a sequence of characters' },
        { id: 'c', text: 'A number' },
        { id: 'd', text: 'A boolean value' }
      ],
      correctAnswers: ['b'],
      explanation: 'A string is an abstraction that represents a sequence of characters as a single unit.'
    }
  ],

  'topic-3.3': [
    // Mathematical Expressions - 10 questions
    {
      text: 'What is the result of 17 / 5 using integer division?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '3.4' },
        { id: 'b', text: '3' },
        { id: 'c', text: '4' },
        { id: 'd', text: '2' }
      ],
      correctAnswers: ['b'],
      explanation: 'Integer division truncates the decimal portion. 17 / 5 = 3.4, which truncates to 3.'
    },
    {
      text: 'What does the MOD operator return?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The quotient of division' },
        { id: 'b', text: 'The remainder after division' },
        { id: 'c', text: 'The product of two numbers' },
        { id: 'd', text: 'The absolute value' }
      ],
      correctAnswers: ['b'],
      explanation: 'MOD (modulo) returns the remainder after integer division. For example, 10 MOD 3 = 1.'
    },
    {
      text: 'What is 15 MOD 4?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '4' },
        { id: 'c', text: '3.75' },
        { id: 'd', text: '11' }
      ],
      correctAnswers: ['a'],
      explanation: '15 ÷ 4 = 3 remainder 3. So 15 MOD 4 = 3.'
    },
    {
      text: 'In most programming languages, what is the order of operations?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Left to right only' },
        { id: 'b', text: 'Parentheses, then multiplication/division, then addition/subtraction' },
        { id: 'c', text: 'Addition first, then multiplication' },
        { id: 'd', text: 'Right to left' }
      ],
      correctAnswers: ['b'],
      explanation: 'Programming follows mathematical order of operations: parentheses first, then *, /, MOD, then +, -.'
    },
    {
      text: 'What is the value of 2 + 3 * 4?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '20' },
        { id: 'b', text: '14' },
        { id: 'c', text: '24' },
        { id: 'd', text: '9' }
      ],
      correctAnswers: ['b'],
      explanation: 'Multiplication happens before addition: 3 * 4 = 12, then 2 + 12 = 14.'
    },
    {
      text: 'What is the value of (2 + 3) * 4?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '20' },
        { id: 'b', text: '14' },
        { id: 'c', text: '24' },
        { id: 'd', text: '9' }
      ],
      correctAnswers: ['a'],
      explanation: 'Parentheses first: 2 + 3 = 5, then 5 * 4 = 20.'
    },
    {
      text: 'If x = 10, what is the value of x / 3 using real (floating-point) division?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '3.33...' },
        { id: 'c', text: '4' },
        { id: 'd', text: '1' }
      ],
      correctAnswers: ['b'],
      explanation: 'Real division keeps the decimal: 10 / 3 = 3.333...'
    },
    {
      text: 'What arithmetic operation would you use to check if a number is even?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Division' },
        { id: 'b', text: 'Multiplication' },
        { id: 'c', text: 'MOD 2 (check if remainder is 0)' },
        { id: 'd', text: 'Subtraction' }
      ],
      correctAnswers: ['c'],
      explanation: 'If number MOD 2 equals 0, the number is even. If it equals 1, the number is odd.'
    },
    {
      text: 'What is -5 MOD 3 in most programming contexts?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1' },
        { id: 'b', text: '-2' },
        { id: 'c', text: '2' },
        { id: 'd', text: 'It varies by language' }
      ],
      correctAnswers: ['d'],
      explanation: 'The behavior of MOD with negative numbers varies between programming languages.'
    },
    {
      text: 'What is 2^3 (2 raised to the power of 3)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '6' },
        { id: 'b', text: '8' },
        { id: 'c', text: '9' },
        { id: 'd', text: '5' }
      ],
      correctAnswers: ['b'],
      explanation: '2^3 = 2 × 2 × 2 = 8.'
    }
  ],

  'topic-3.4': [
    // Strings - 10 questions
    {
      text: 'What is a string?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A numerical value' },
        { id: 'b', text: 'A sequence of characters' },
        { id: 'c', text: 'A boolean value' },
        { id: 'd', text: 'A type of loop' }
      ],
      correctAnswers: ['b'],
      explanation: 'A string is a sequence of characters, typically enclosed in quotes.'
    },
    {
      text: 'What is string concatenation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Splitting a string into parts' },
        { id: 'b', text: 'Joining two or more strings together' },
        { id: 'c', text: 'Converting a string to uppercase' },
        { id: 'd', text: 'Finding the length of a string' }
      ],
      correctAnswers: ['b'],
      explanation: 'Concatenation combines multiple strings into one. "Hello" + " " + "World" = "Hello World".'
    },
    {
      text: 'If str = "HELLO", what is the length of str?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '5' },
        { id: 'c', text: '6' },
        { id: 'd', text: '7' }
      ],
      correctAnswers: ['b'],
      explanation: '"HELLO" contains 5 characters: H, E, L, L, O.'
    },
    {
      text: 'What is the result of "5" + "3" (string concatenation)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '8' },
        { id: 'b', text: '"53"' },
        { id: 'c', text: '"8"' },
        { id: 'd', text: 'Error' }
      ],
      correctAnswers: ['b'],
      explanation: 'String concatenation joins the strings together: "5" + "3" = "53", not mathematical addition.'
    },
    {
      text: 'What does a substring operation do?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Deletes part of a string' },
        { id: 'b', text: 'Extracts a portion of a string' },
        { id: 'c', text: 'Converts string to lowercase' },
        { id: 'd', text: 'Reverses a string' }
      ],
      correctAnswers: ['b'],
      explanation: 'Substring extracts a portion of a string. For example, substring("HELLO", 2, 4) might return "ELL".'
    },
    {
      text: 'In the string "COMPUTER", what character is at index 1 (using 1-based indexing)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'C' },
        { id: 'b', text: 'O' },
        { id: 'c', text: 'M' },
        { id: 'd', text: 'P' }
      ],
      correctAnswers: ['a'],
      explanation: 'With 1-based indexing, index 1 is the first character: C.'
    },
    {
      text: 'How would you typically check if two strings are equal?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using the = operator only' },
        { id: 'b', text: 'Using a comparison operator like == or a string comparison function' },
        { id: 'c', text: 'Strings cannot be compared' },
        { id: 'd', text: 'By checking their lengths only' }
      ],
      correctAnswers: ['b'],
      explanation: 'String comparison typically uses == or special comparison functions, checking character by character.'
    },
    {
      text: 'What is an empty string?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A string with only spaces' },
        { id: 'b', text: 'A string with no characters, represented as ""' },
        { id: 'c', text: 'A string that equals zero' },
        { id: 'd', text: 'A deleted string' }
      ],
      correctAnswers: ['b'],
      explanation: 'An empty string contains no characters and has a length of 0. It is written as "" or \'\'.'
    },
    {
      text: 'What is the result of concatenating "AP" + " " + "CSP"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '"APCSP"' },
        { id: 'b', text: '"AP CSP"' },
        { id: 'c', text: '"AP  CSP"' },
        { id: 'd', text: 'Error' }
      ],
      correctAnswers: ['b'],
      explanation: 'The three strings are joined: "AP" + " " + "CSP" = "AP CSP".'
    },
    {
      text: 'Strings are often used to represent which of the following?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Names' },
        { id: 'b', text: 'Addresses' },
        { id: 'c', text: 'Text messages' },
        { id: 'd', text: 'Mathematical calculations' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Strings represent textual data like names, addresses, and messages. Math calculations use numbers.'
    }
  ],

  'topic-3.5': [
    // Boolean Expressions - 10 questions
    {
      text: 'What are the two possible values of a Boolean expression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0 and 1' },
        { id: 'b', text: 'True and False' },
        { id: 'c', text: 'Yes and No' },
        { id: 'd', text: 'On and Off' }
      ],
      correctAnswers: ['b'],
      explanation: 'Boolean expressions evaluate to either True or False.'
    },
    {
      text: 'What is the result of (5 > 3)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
        { id: 'c', text: '5' },
        { id: 'd', text: '3' }
      ],
      correctAnswers: ['a'],
      explanation: '5 is greater than 3, so the expression evaluates to True.'
    },
    {
      text: 'What does the AND operator do?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Returns True if at least one operand is True' },
        { id: 'b', text: 'Returns True only if both operands are True' },
        { id: 'c', text: 'Returns the opposite value' },
        { id: 'd', text: 'Adds two numbers' }
      ],
      correctAnswers: ['b'],
      explanation: 'AND returns True only when both conditions are True. If either is False, the result is False.'
    },
    {
      text: 'What does the OR operator do?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Returns True if at least one operand is True' },
        { id: 'b', text: 'Returns True only if both operands are True' },
        { id: 'c', text: 'Returns the opposite value' },
        { id: 'd', text: 'Divides two numbers' }
      ],
      correctAnswers: ['a'],
      explanation: 'OR returns True if at least one condition is True. It only returns False if both are False.'
    },
    {
      text: 'What does the NOT operator do?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Combines two conditions' },
        { id: 'b', text: 'Reverses the Boolean value (True becomes False, False becomes True)' },
        { id: 'c', text: 'Compares two values' },
        { id: 'd', text: 'Nothing' }
      ],
      correctAnswers: ['b'],
      explanation: 'NOT inverts the Boolean value: NOT True = False, NOT False = True.'
    },
    {
      text: 'What is the result of (True AND False)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
        { id: 'c', text: 'Error' },
        { id: 'd', text: 'Undefined' }
      ],
      correctAnswers: ['b'],
      explanation: 'AND requires both operands to be True. Since one is False, the result is False.'
    },
    {
      text: 'What is the result of (True OR False)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
        { id: 'c', text: 'Error' },
        { id: 'd', text: 'Undefined' }
      ],
      correctAnswers: ['a'],
      explanation: 'OR returns True if at least one operand is True. Since one is True, the result is True.'
    },
    {
      text: 'What is the result of NOT(True)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
        { id: 'c', text: 'Error' },
        { id: 'd', text: '0' }
      ],
      correctAnswers: ['b'],
      explanation: 'NOT inverts the value: NOT True = False.'
    },
    {
      text: 'What is the result of (4 == 4) AND (3 < 2)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
        { id: 'c', text: '4' },
        { id: 'd', text: 'Error' }
      ],
      correctAnswers: ['b'],
      explanation: '(4 == 4) is True, but (3 < 2) is False. True AND False = False.'
    },
    {
      text: 'Which expression checks if x is between 1 and 10 (inclusive)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '(x > 1) AND (x < 10)' },
        { id: 'b', text: '(x >= 1) AND (x <= 10)' },
        { id: 'c', text: '(x >= 1) OR (x <= 10)' },
        { id: 'd', text: '1 < x < 10' }
      ],
      correctAnswers: ['b'],
      explanation: 'To include 1 and 10, use >= and <=. AND ensures both conditions must be true.'
    }
  ],

  'topic-3.6': [
    // Conditionals - 10 questions
    {
      text: 'What is a conditional statement?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A statement that always executes' },
        { id: 'b', text: 'A statement that executes only when a condition is true' },
        { id: 'c', text: 'A type of loop' },
        { id: 'd', text: 'A variable declaration' }
      ],
      correctAnswers: ['b'],
      explanation: 'Conditional statements (like IF statements) execute code only when their condition evaluates to true.'
    },
    {
      text: 'What keyword is typically used to start a conditional statement?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'LOOP' },
        { id: 'b', text: 'IF' },
        { id: 'c', text: 'REPEAT' },
        { id: 'd', text: 'DEFINE' }
      ],
      correctAnswers: ['b'],
      explanation: 'IF is the standard keyword for starting a conditional statement in most programming languages.'
    },
    {
      text: 'What does the ELSE clause do?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Ends the program' },
        { id: 'b', text: 'Executes when the IF condition is false' },
        { id: 'c', text: 'Creates a loop' },
        { id: 'd', text: 'Defines a variable' }
      ],
      correctAnswers: ['b'],
      explanation: 'ELSE provides an alternative code block that runs when the IF condition is false.'
    },
    {
      text: 'In "IF (grade >= 60) { pass } ELSE { fail }", when does "fail" execute?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When grade is 60 or more' },
        { id: 'b', text: 'When grade is less than 60' },
        { id: 'c', text: 'Always' },
        { id: 'd', text: 'Never' }
      ],
      correctAnswers: ['b'],
      explanation: 'The ELSE block executes when the condition is false, meaning grade < 60.'
    },
    {
      text: 'How many times does a simple IF statement evaluate its condition?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Zero times' },
        { id: 'b', text: 'Once' },
        { id: 'c', text: 'Twice' },
        { id: 'd', text: 'Until it becomes false' }
      ],
      correctAnswers: ['b'],
      explanation: 'A simple IF statement checks its condition once to decide which code block to execute.'
    },
    {
      text: 'What is the purpose of selection in programming?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To repeat code' },
        { id: 'b', text: 'To choose between different code paths based on conditions' },
        { id: 'c', text: 'To store data' },
        { id: 'd', text: 'To define functions' }
      ],
      correctAnswers: ['b'],
      explanation: 'Selection (conditionals) allows programs to make decisions and execute different code based on conditions.'
    },
    {
      text: 'What happens if an IF condition is false and there is no ELSE clause?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An error occurs' },
        { id: 'b', text: 'The IF block still runs' },
        { id: 'c', text: 'The IF block is skipped and the program continues' },
        { id: 'd', text: 'The program stops' }
      ],
      correctAnswers: ['c'],
      explanation: 'If the condition is false and there\'s no ELSE, the IF block is simply skipped.'
    },
    {
      text: 'What is ELSE IF (or ELIF) used for?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To end a conditional' },
        { id: 'b', text: 'To check additional conditions when the first IF is false' },
        { id: 'c', text: 'To create a loop' },
        { id: 'd', text: 'To define a variable' }
      ],
      correctAnswers: ['b'],
      explanation: 'ELSE IF checks another condition when the previous IF (or ELSE IF) condition was false.'
    },
    {
      text: 'If x = 5, what is printed by: IF (x > 10) {print "A"} ELSE {print "B"}?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B' },
        { id: 'c', text: 'AB' },
        { id: 'd', text: 'Nothing' }
      ],
      correctAnswers: ['b'],
      explanation: 'Since 5 > 10 is false, the ELSE block executes and prints "B".'
    },
    {
      text: 'Which problem is solved using conditional statements?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Adding two numbers' },
        { id: 'b', text: 'Determining if a user is old enough to vote' },
        { id: 'c', text: 'Storing a name' },
        { id: 'd', text: 'Displaying text on screen' }
      ],
      correctAnswers: ['b'],
      explanation: 'Checking age requirements involves a condition (age >= 18), making it a perfect use for conditionals.'
    }
  ],

  'topic-3.7': [
    // Nested Conditionals - 10 questions
    {
      text: 'What is a nested conditional?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A conditional that never executes' },
        { id: 'b', text: 'A conditional statement inside another conditional statement' },
        { id: 'c', text: 'A conditional without an ELSE clause' },
        { id: 'd', text: 'Multiple variables' }
      ],
      correctAnswers: ['b'],
      explanation: 'Nested conditionals place one IF statement inside another, creating multiple levels of decision-making.'
    },
    {
      text: 'Why would you use nested conditionals?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To make code run faster' },
        { id: 'b', text: 'To make decisions that depend on multiple conditions in sequence' },
        { id: 'c', text: 'To avoid using variables' },
        { id: 'd', text: 'Nested conditionals should never be used' }
      ],
      correctAnswers: ['b'],
      explanation: 'Nested conditionals handle complex decision-making where outcomes depend on multiple conditions.'
    },
    {
      text: 'In nested conditionals, when does the inner IF statement get evaluated?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Always' },
        { id: 'b', text: 'Never' },
        { id: 'c', text: 'Only when the outer IF condition is true' },
        { id: 'd', text: 'Before the outer IF' }
      ],
      correctAnswers: ['c'],
      explanation: 'The inner IF is only evaluated if the outer IF condition is true.'
    },
    {
      text: 'How many levels of nesting are allowed in conditionals?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only 2' },
        { id: 'b', text: 'Only 3' },
        { id: 'c', text: 'As many as needed, but too many can make code hard to read' },
        { id: 'd', text: 'Nesting is not allowed' }
      ],
      correctAnswers: ['c'],
      explanation: 'There\'s no strict limit, but deeply nested code becomes hard to read and maintain.'
    },
    {
      text: 'What is an alternative to deeply nested conditionals?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using more variables' },
        { id: 'b', text: 'Using compound Boolean expressions with AND/OR' },
        { id: 'c', text: 'Removing all conditions' },
        { id: 'd', text: 'Using more loops' }
      ],
      correctAnswers: ['b'],
      explanation: 'Compound Boolean expressions can sometimes replace nested IFs, making code cleaner.'
    },
    {
      text: 'IF (a > 5) { IF (b < 10) { print "Yes" } } - When is "Yes" printed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When a > 5 only' },
        { id: 'b', text: 'When b < 10 only' },
        { id: 'c', text: 'When both a > 5 AND b < 10' },
        { id: 'd', text: 'When either a > 5 OR b < 10' }
      ],
      correctAnswers: ['c'],
      explanation: 'Both conditions must be true: the outer IF (a > 5) and the inner IF (b < 10).'
    },
    {
      text: 'The nested conditional "IF (x > 0) { IF (x < 100) { ... } }" is equivalent to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'IF (x > 0 OR x < 100)' },
        { id: 'b', text: 'IF (x > 0 AND x < 100)' },
        { id: 'c', text: 'IF (x == 50)' },
        { id: 'd', text: 'IF (x != 0)' }
      ],
      correctAnswers: ['b'],
      explanation: 'Nested IFs where both must be true can be written as a single IF with AND.'
    },
    {
      text: 'What makes code with nested conditionals harder to understand?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Too few conditions' },
        { id: 'b', text: 'Multiple levels of indentation and complex logic flow' },
        { id: 'c', text: 'Using variables' },
        { id: 'd', text: 'Code runs slower' }
      ],
      correctAnswers: ['b'],
      explanation: 'Deep nesting creates complex indentation and makes it harder to follow the logic flow.'
    },
    {
      text: 'A grading system uses: IF score >= 90 then A, ELSE IF score >= 80 then B, etc. This is an example of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A loop' },
        { id: 'b', text: 'Chained conditionals (ELSE IF structure)' },
        { id: 'c', text: 'A function' },
        { id: 'd', text: 'A variable' }
      ],
      correctAnswers: ['b'],
      explanation: 'This is a chain of ELSE IF statements, checking conditions in sequence until one is true.'
    },
    {
      text: 'What is the maximum number of code blocks that can execute in a single IF-ELSE IF-ELSE chain?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'All of them' },
        { id: 'b', text: 'None' },
        { id: 'c', text: 'Exactly one' },
        { id: 'd', text: 'Two' }
      ],
      correctAnswers: ['c'],
      explanation: 'In an IF-ELSE IF-ELSE chain, only one block executes - the first one whose condition is true.'
    }
  ],

  'topic-3.8': [
    // Iteration - 10 questions
    {
      text: 'What is iteration in programming?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Making a decision' },
        { id: 'b', text: 'Repeating a set of instructions multiple times' },
        { id: 'c', text: 'Defining a variable' },
        { id: 'd', text: 'Ending a program' }
      ],
      correctAnswers: ['b'],
      explanation: 'Iteration means repeating code, typically using loops like FOR or WHILE.'
    },
    {
      text: 'Which type of loop repeats a specific number of times?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'WHILE loop' },
        { id: 'b', text: 'FOR loop (or REPEAT n TIMES)' },
        { id: 'c', text: 'IF statement' },
        { id: 'd', text: 'ELSE statement' }
      ],
      correctAnswers: ['b'],
      explanation: 'FOR loops (or REPEAT n TIMES) iterate a predetermined number of times.'
    },
    {
      text: 'Which type of loop repeats until a condition becomes false?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'FOR loop' },
        { id: 'b', text: 'WHILE loop (or REPEAT UNTIL)' },
        { id: 'c', text: 'IF statement' },
        { id: 'd', text: 'PRINT statement' }
      ],
      correctAnswers: ['b'],
      explanation: 'WHILE loops continue repeating as long as their condition is true.'
    },
    {
      text: 'What is an infinite loop?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A loop that runs very fast' },
        { id: 'b', text: 'A loop that never stops because its condition never becomes false' },
        { id: 'c', text: 'A loop inside another loop' },
        { id: 'd', text: 'A loop that runs exactly once' }
      ],
      correctAnswers: ['b'],
      explanation: 'An infinite loop runs forever because the terminating condition is never met.'
    },
    {
      text: 'How many times does this loop run: REPEAT 5 TIMES { print "Hi" }?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '5' },
        { id: 'c', text: '6' },
        { id: 'd', text: '0' }
      ],
      correctAnswers: ['b'],
      explanation: 'REPEAT 5 TIMES runs exactly 5 times, printing "Hi" each time.'
    },
    {
      text: 'What is a loop variable (or counter)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A variable that stores the loop\'s result' },
        { id: 'b', text: 'A variable that tracks how many times the loop has run' },
        { id: 'c', text: 'A variable defined outside the loop' },
        { id: 'd', text: 'A constant value' }
      ],
      correctAnswers: ['b'],
      explanation: 'A loop variable (counter) keeps track of the current iteration, often used in FOR loops.'
    },
    {
      text: 'What does this code do: FOR i = 1 TO 3 { print i }?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Prints 123' },
        { id: 'b', text: 'Prints 1, then 2, then 3 (on separate iterations)' },
        { id: 'c', text: 'Prints 3' },
        { id: 'd', text: 'Prints nothing' }
      ],
      correctAnswers: ['b'],
      explanation: 'The loop runs 3 times with i = 1, then i = 2, then i = 3, printing each value.'
    },
    {
      text: 'Why would you use a loop instead of writing repeated code?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Less code to write and maintain' },
        { id: 'b', text: 'Easier to modify the number of repetitions' },
        { id: 'c', text: 'Can handle variable numbers of repetitions' },
        { id: 'd', text: 'Loops always run faster' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Loops reduce code duplication, are easier to modify, and can handle variable repetitions.'
    },
    {
      text: 'A WHILE loop checks its condition:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only at the end' },
        { id: 'b', text: 'Only at the beginning' },
        { id: 'c', text: 'Before each iteration' },
        { id: 'd', text: 'Never' }
      ],
      correctAnswers: ['c'],
      explanation: 'WHILE loops check the condition before each iteration, including before the first one.'
    },
    {
      text: 'If x = 10 and the loop is WHILE (x > 0) { x = x - 3 }, how many times does it run?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '4' },
        { id: 'c', text: '10' },
        { id: 'd', text: 'Infinite' }
      ],
      correctAnswers: ['b'],
      explanation: 'x goes: 10→7→4→1→-2. The loop runs 4 times (while x is 10, 7, 4, 1) then stops when x = -2.'
    }
  ],

  'topic-3.9': [
    // Developing Algorithms - 10 questions
    {
      text: 'What is an algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A programming language' },
        { id: 'b', text: 'A step-by-step set of instructions to solve a problem' },
        { id: 'c', text: 'A type of computer' },
        { id: 'd', text: 'A variable name' }
      ],
      correctAnswers: ['b'],
      explanation: 'An algorithm is a finite set of instructions that solves a problem or performs a task.'
    },
    {
      text: 'Which of the following is NOT a characteristic of a good algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Clear and unambiguous steps' },
        { id: 'b', text: 'Produces correct output for valid input' },
        { id: 'c', text: 'Runs forever without stopping' },
        { id: 'd', text: 'Can be implemented in code' }
      ],
      correctAnswers: ['c'],
      explanation: 'Algorithms should terminate (finish). Running forever is a flaw, not a feature.'
    },
    {
      text: 'What is sequencing in algorithms?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Making decisions' },
        { id: 'b', text: 'Executing steps in a specific order, one after another' },
        { id: 'c', text: 'Repeating steps' },
        { id: 'd', text: 'Storing data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Sequencing means steps are executed in order, one after another.'
    },
    {
      text: 'The three basic building blocks of algorithms are:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Variables, functions, classes' },
        { id: 'b', text: 'Sequencing, selection, iteration' },
        { id: 'c', text: 'Input, output, storage' },
        { id: 'd', text: 'Numbers, strings, booleans' }
      ],
      correctAnswers: ['b'],
      explanation: 'All algorithms are built from sequencing (order), selection (decisions), and iteration (loops).'
    },
    {
      text: 'What should you do before writing code for an algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Start typing immediately' },
        { id: 'b', text: 'Plan the algorithm using pseudocode or flowcharts' },
        { id: 'c', text: 'Delete all existing code' },
        { id: 'd', text: 'Run the program first' }
      ],
      correctAnswers: ['b'],
      explanation: 'Planning with pseudocode or flowcharts helps clarify the logic before implementation.'
    },
    {
      text: 'Two algorithms solve the same problem. Algorithm A takes 10 steps, Algorithm B takes 100 steps. Which is more efficient?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Algorithm A' },
        { id: 'b', text: 'Algorithm B' },
        { id: 'c', text: 'They are equally efficient' },
        { id: 'd', text: 'Cannot be determined' }
      ],
      correctAnswers: ['a'],
      explanation: 'Algorithm A is more efficient because it solves the problem in fewer steps.'
    },
    {
      text: 'What is debugging?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Adding new features' },
        { id: 'b', text: 'Finding and fixing errors in an algorithm or program' },
        { id: 'c', text: 'Making code run faster' },
        { id: 'd', text: 'Writing documentation' }
      ],
      correctAnswers: ['b'],
      explanation: 'Debugging is the process of identifying and correcting errors (bugs) in code.'
    },
    {
      text: 'How can you verify that an algorithm works correctly?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Test with various inputs including edge cases' },
        { id: 'b', text: 'Trace through the algorithm step by step' },
        { id: 'c', text: 'Compare output to expected results' },
        { id: 'd', text: 'Assume it works without testing' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Testing, tracing, and comparing results all help verify correctness. Never assume!'
    },
    {
      text: 'Combining two existing algorithms to solve a new problem is called:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Copying' },
        { id: 'b', text: 'Algorithm composition' },
        { id: 'c', text: 'Deletion' },
        { id: 'd', text: 'Compression' }
      ],
      correctAnswers: ['b'],
      explanation: 'Algorithm composition combines existing algorithms to create new solutions.'
    },
    {
      text: 'What is an edge case?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A common, typical input' },
        { id: 'b', text: 'An extreme or unusual input that might cause problems' },
        { id: 'c', text: 'A syntax error' },
        { id: 'd', text: 'A type of loop' }
      ],
      correctAnswers: ['b'],
      explanation: 'Edge cases are boundary or extreme inputs (like empty lists, zero, negative numbers) that algorithms must handle.'
    }
  ],

  'topic-3.10': [
    // Lists - 10 questions
    {
      text: 'What is a list in programming?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A single value' },
        { id: 'b', text: 'An ordered collection of items' },
        { id: 'c', text: 'A type of loop' },
        { id: 'd', text: 'A boolean expression' }
      ],
      correctAnswers: ['b'],
      explanation: 'A list is an ordered collection that can hold multiple items, accessed by index.'
    },
    {
      text: 'In a list with 1-based indexing, what index is the first element?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '1' },
        { id: 'c', text: '-1' },
        { id: 'd', text: '2' }
      ],
      correctAnswers: ['b'],
      explanation: 'In 1-based indexing (used in AP CSP), the first element is at index 1.'
    },
    {
      text: 'If myList = [10, 20, 30, 40], what is myList[3] (1-based indexing)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '20' },
        { id: 'c', text: '30' },
        { id: 'd', text: '40' }
      ],
      correctAnswers: ['c'],
      explanation: 'With 1-based indexing: index 1=10, index 2=20, index 3=30, index 4=40.'
    },
    {
      text: 'What operation adds an element to the end of a list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'REMOVE' },
        { id: 'b', text: 'APPEND' },
        { id: 'c', text: 'INSERT at index 1' },
        { id: 'd', text: 'LENGTH' }
      ],
      correctAnswers: ['b'],
      explanation: 'APPEND adds a new element to the end of an existing list.'
    },
    {
      text: 'What does the LENGTH function return for a list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The first element' },
        { id: 'b', text: 'The last element' },
        { id: 'c', text: 'The number of elements in the list' },
        { id: 'd', text: 'The sum of elements' }
      ],
      correctAnswers: ['c'],
      explanation: 'LENGTH returns the count of how many elements are in the list.'
    },
    {
      text: 'How do you typically process every element in a list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Use a conditional' },
        { id: 'b', text: 'Use a loop to iterate through each element' },
        { id: 'c', text: 'Access each element manually' },
        { id: 'd', text: 'Delete the list' }
      ],
      correctAnswers: ['b'],
      explanation: 'Loops (like FOR EACH) iterate through lists, processing each element.'
    },
    {
      text: 'What happens when you access an index that doesn\'t exist in a list?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Returns 0' },
        { id: 'b', text: 'Returns an empty string' },
        { id: 'c', text: 'Causes an error (index out of bounds)' },
        { id: 'd', text: 'Creates a new element' }
      ],
      correctAnswers: ['c'],
      explanation: 'Accessing an invalid index typically causes an "index out of bounds" error.'
    },
    {
      text: 'INSERT(myList, 2, "X") does what?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Replaces the element at index 2 with "X"' },
        { id: 'b', text: 'Inserts "X" at index 2, shifting other elements' },
        { id: 'c', text: 'Appends "X" to the end' },
        { id: 'd', text: 'Removes the element at index 2' }
      ],
      correctAnswers: ['b'],
      explanation: 'INSERT adds a new element at the specified position, shifting existing elements to make room.'
    },
    {
      text: 'REMOVE(myList, 3) does what?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Removes all elements' },
        { id: 'b', text: 'Removes the element at index 3, shifting remaining elements' },
        { id: 'c', text: 'Removes 3 elements' },
        { id: 'd', text: 'Adds 3 to the list' }
      ],
      correctAnswers: ['b'],
      explanation: 'REMOVE deletes the element at the specified index and shifts remaining elements.'
    },
    {
      text: 'What is a common use of lists in programs?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Storing a single value' },
        { id: 'b', text: 'Storing and managing collections of related data' },
        { id: 'c', text: 'Making decisions' },
        { id: 'd', text: 'Defining functions' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lists are ideal for storing collections of related data, like student names or test scores.'
    }
  ]
};

// Add questions for remaining topics (3.11 - 3.18)
const moreQuestions = {
  'topic-3.11': [
    // Binary Search - 10 questions
    { text: 'What is binary search?', type: 'multiple_choice', options: [{ id: 'a', text: 'Searching each element one by one' }, { id: 'b', text: 'Repeatedly dividing a sorted list in half to find a target' }, { id: 'c', text: 'Sorting a list' }, { id: 'd', text: 'Adding elements to a list' }], correctAnswers: ['b'], explanation: 'Binary search efficiently finds items in a sorted list by repeatedly halving the search space.' },
    { text: 'What is required for binary search to work?', type: 'multiple_choice', options: [{ id: 'a', text: 'The list must be unsorted' }, { id: 'b', text: 'The list must be sorted' }, { id: 'c', text: 'The list must be empty' }, { id: 'd', text: 'The list must have odd length' }], correctAnswers: ['b'], explanation: 'Binary search requires a sorted list to work correctly.' },
    { text: 'Binary search is more efficient than linear search for:', type: 'multiple_choice', options: [{ id: 'a', text: 'Small lists' }, { id: 'b', text: 'Unsorted lists' }, { id: 'c', text: 'Large sorted lists' }, { id: 'd', text: 'Lists with duplicates' }], correctAnswers: ['c'], explanation: 'Binary search excels on large sorted lists, reducing search time significantly.' },
    { text: 'In binary search, if the target is less than the middle element, where do you search next?', type: 'multiple_choice', options: [{ id: 'a', text: 'The entire list' }, { id: 'b', text: 'The left half' }, { id: 'c', text: 'The right half' }, { id: 'd', text: 'Give up' }], correctAnswers: ['b'], explanation: 'If target < middle, the target must be in the left (lower) half of a sorted list.' },
    { text: 'How many comparisons does binary search need for a list of 1000 elements (worst case)?', type: 'multiple_choice', options: [{ id: 'a', text: '1000' }, { id: 'b', text: '500' }, { id: 'c', text: 'About 10' }, { id: 'd', text: '100' }], correctAnswers: ['c'], explanation: 'Binary search needs about log₂(1000) ≈ 10 comparisons in the worst case.' },
    { text: 'What is linear search?', type: 'multiple_choice', options: [{ id: 'a', text: 'Dividing list in half' }, { id: 'b', text: 'Checking each element from start until found' }, { id: 'c', text: 'Only checking the first element' }, { id: 'd', text: 'Sorting then searching' }], correctAnswers: ['b'], explanation: 'Linear search checks each element sequentially from the beginning.' },
    { text: 'Linear search works on:', type: 'multiple_choice', options: [{ id: 'a', text: 'Only sorted lists' }, { id: 'b', text: 'Only unsorted lists' }, { id: 'c', text: 'Both sorted and unsorted lists' }, { id: 'd', text: 'Neither' }], correctAnswers: ['c'], explanation: 'Linear search works on any list, sorted or unsorted.' },
    { text: 'Which search is better for a list of 5 elements?', type: 'multiple_choice', options: [{ id: 'a', text: 'Binary search is much better' }, { id: 'b', text: 'Linear search is much better' }, { id: 'c', text: 'They perform similarly for small lists' }, { id: 'd', text: 'Neither works' }], correctAnswers: ['c'], explanation: 'For very small lists, both searches perform similarly.' },
    { text: 'In binary search of [2,4,6,8,10], searching for 6, what is checked first?', type: 'multiple_choice', options: [{ id: 'a', text: '2' }, { id: 'b', text: '6' }, { id: 'c', text: '10' }, { id: 'd', text: '4' }], correctAnswers: ['b'], explanation: 'Binary search starts at the middle element, which is 6 (index 3 in 1-based).' },
    { text: 'If binary search doesn\'t find the target, it returns:', type: 'multiple_choice', options: [{ id: 'a', text: 'The middle element' }, { id: 'b', text: 'An indication that the element was not found' }, { id: 'c', text: 'The first element' }, { id: 'd', text: 'A random element' }], correctAnswers: ['b'], explanation: 'Binary search returns a "not found" indicator (like -1 or false) if the target isn\'t in the list.' }
  ],

  'topic-3.12': [
    // Calling Procedures - 10 questions
    { text: 'What is a procedure (or function)?', type: 'multiple_choice', options: [{ id: 'a', text: 'A variable' }, { id: 'b', text: 'A reusable block of code that performs a specific task' }, { id: 'c', text: 'A type of loop' }, { id: 'd', text: 'A conditional statement' }], correctAnswers: ['b'], explanation: 'A procedure is a named, reusable block of code that performs a specific task.' },
    { text: 'What does it mean to "call" a procedure?', type: 'multiple_choice', options: [{ id: 'a', text: 'Define the procedure' }, { id: 'b', text: 'Execute the procedure\'s code' }, { id: 'c', text: 'Delete the procedure' }, { id: 'd', text: 'Rename the procedure' }], correctAnswers: ['b'], explanation: 'Calling a procedure means executing (running) its code.' },
    { text: 'What are parameters in a procedure?', type: 'multiple_choice', options: [{ id: 'a', text: 'The procedure\'s name' }, { id: 'b', text: 'Values passed into the procedure for it to use' }, { id: 'c', text: 'The procedure\'s return value' }, { id: 'd', text: 'Comments in the code' }], correctAnswers: ['b'], explanation: 'Parameters are inputs that procedures receive when called.' },
    { text: 'What does a RETURN statement do?', type: 'multiple_choice', options: [{ id: 'a', text: 'Ends the program' }, { id: 'b', text: 'Sends a value back to the caller and exits the procedure' }, { id: 'c', text: 'Prints a value' }, { id: 'd', text: 'Creates a loop' }], correctAnswers: ['b'], explanation: 'RETURN sends a value back to wherever the procedure was called and exits the procedure.' },
    { text: 'Why use procedures?', type: 'multiple_select', options: [{ id: 'a', text: 'Code reusability' }, { id: 'b', text: 'Better organization' }, { id: 'c', text: 'Easier debugging' }, { id: 'd', text: 'Programs run slower' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Procedures enable code reuse, better organization, and easier debugging.' },
    { text: 'If calculateArea(5, 10) calls a procedure with parameters length and width, what are 5 and 10?', type: 'multiple_choice', options: [{ id: 'a', text: 'Return values' }, { id: 'b', text: 'Arguments (actual values passed in)' }, { id: 'c', text: 'Variable names' }, { id: 'd', text: 'Loop counters' }], correctAnswers: ['b'], explanation: 'Arguments are the actual values passed to a procedure when it is called.' },
    { text: 'What happens after a procedure without a return statement finishes?', type: 'multiple_choice', options: [{ id: 'a', text: 'The program crashes' }, { id: 'b', text: 'Control returns to where it was called, with no value returned' }, { id: 'c', text: 'The procedure runs again' }, { id: 'd', text: 'The program ends' }], correctAnswers: ['b'], explanation: 'The program continues from where the procedure was called, but no value is returned.' },
    { text: 'A procedure that calculates but doesn\'t return is useful for:', type: 'multiple_choice', options: [{ id: 'a', text: 'Nothing' }, { id: 'b', text: 'Side effects like printing or modifying global variables' }, { id: 'c', text: 'Mathematical calculations only' }, { id: 'd', text: 'Defining variables' }], correctAnswers: ['b'], explanation: 'Procedures without returns are useful for side effects like displaying output.' },
    { text: 'Calling max(3, 7) where max returns the larger value would return:', type: 'multiple_choice', options: [{ id: 'a', text: '3' }, { id: 'b', text: '7' }, { id: 'c', text: '10' }, { id: 'd', text: '4' }], correctAnswers: ['b'], explanation: 'max(3, 7) returns 7, the larger of the two values.' },
    { text: 'What is procedural abstraction?', type: 'multiple_choice', options: [{ id: 'a', text: 'Making procedures longer' }, { id: 'b', text: 'Hiding implementation details so you can use a procedure without knowing how it works' }, { id: 'c', text: 'Removing all procedures' }, { id: 'd', text: 'Adding more parameters' }], correctAnswers: ['b'], explanation: 'Procedural abstraction hides complexity, letting you use procedures without knowing their implementation.' }
  ],

  'topic-3.13': [
    // Developing Procedures - 10 questions
    { text: 'What should you consider when creating a procedure?', type: 'multiple_select', options: [{ id: 'a', text: 'What task the procedure will accomplish' }, { id: 'b', text: 'What parameters it needs' }, { id: 'c', text: 'What it should return (if anything)' }, { id: 'd', text: 'The color of the code' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Good procedure design considers purpose, parameters, and return values.' },
    { text: 'A procedure name should be:', type: 'multiple_choice', options: [{ id: 'a', text: 'As short as possible, like "p1"' }, { id: 'b', text: 'Descriptive of what the procedure does' }, { id: 'c', text: 'Random letters' }, { id: 'd', text: 'A single letter' }], correctAnswers: ['b'], explanation: 'Descriptive names like "calculateAverage" make code self-documenting.' },
    { text: 'What is a local variable?', type: 'multiple_choice', options: [{ id: 'a', text: 'A variable accessible throughout the entire program' }, { id: 'b', text: 'A variable only accessible within the procedure where it\'s defined' }, { id: 'c', text: 'A variable that never changes' }, { id: 'd', text: 'A variable stored on the internet' }], correctAnswers: ['b'], explanation: 'Local variables exist only within the procedure where they are created.' },
    { text: 'Why is it good practice to break large tasks into smaller procedures?', type: 'multiple_choice', options: [{ id: 'a', text: 'It makes the program slower' }, { id: 'b', text: 'It makes code more readable, testable, and reusable' }, { id: 'c', text: 'It uses more memory' }, { id: 'd', text: 'It\'s not good practice' }], correctAnswers: ['b'], explanation: 'Smaller procedures are easier to understand, test, debug, and reuse.' },
    { text: 'A procedure should ideally do:', type: 'multiple_choice', options: [{ id: 'a', text: 'Many unrelated tasks' }, { id: 'b', text: 'One specific task well' }, { id: 'c', text: 'Nothing' }, { id: 'd', text: 'Everything in the program' }], correctAnswers: ['b'], explanation: 'Well-designed procedures focus on doing one thing well (single responsibility).' },
    { text: 'What is the benefit of using parameters instead of global variables?', type: 'multiple_choice', options: [{ id: 'a', text: 'Parameters make procedures dependent on external state' }, { id: 'b', text: 'Parameters make procedures more flexible and self-contained' }, { id: 'c', text: 'There is no benefit' }, { id: 'd', text: 'Global variables are always better' }], correctAnswers: ['b'], explanation: 'Parameters make procedures more flexible and independent of global state.' },
    { text: 'Documentation for a procedure should include:', type: 'multiple_select', options: [{ id: 'a', text: 'What the procedure does' }, { id: 'b', text: 'What parameters it expects' }, { id: 'c', text: 'What it returns' }, { id: 'd', text: 'The programmer\'s favorite color' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Good documentation describes purpose, parameters, and return value.' },
    { text: 'Testing a procedure should include:', type: 'multiple_choice', options: [{ id: 'a', text: 'Only typical inputs' }, { id: 'b', text: 'Various inputs including edge cases' }, { id: 'c', text: 'No testing needed' }, { id: 'd', text: 'Only one input' }], correctAnswers: ['b'], explanation: 'Test with various inputs including edge cases to ensure the procedure works correctly.' },
    { text: 'What is the scope of a variable?', type: 'multiple_choice', options: [{ id: 'a', text: 'Its value' }, { id: 'b', text: 'The region of code where the variable can be accessed' }, { id: 'c', text: 'Its data type' }, { id: 'd', text: 'Its name' }], correctAnswers: ['b'], explanation: 'Scope defines where in the code a variable can be used.' },
    { text: 'Procedures can call other procedures. This is called:', type: 'multiple_choice', options: [{ id: 'a', text: 'Illegal' }, { id: 'b', text: 'Procedure composition or nesting' }, { id: 'c', text: 'Impossible' }, { id: 'd', text: 'A bug' }], correctAnswers: ['b'], explanation: 'Procedures calling other procedures allows building complex behavior from simpler parts.' }
  ],

  'topic-3.14': [
    // Libraries - 10 questions
    { text: 'What is a software library?', type: 'multiple_choice', options: [{ id: 'a', text: 'A building for programmers' }, { id: 'b', text: 'A collection of pre-written code that can be reused' }, { id: 'c', text: 'A type of computer' }, { id: 'd', text: 'A programming language' }], correctAnswers: ['b'], explanation: 'A library is a collection of pre-written, reusable code.' },
    { text: 'Why use libraries?', type: 'multiple_select', options: [{ id: 'a', text: 'Save development time' }, { id: 'b', text: 'Use tested, reliable code' }, { id: 'c', text: 'Access specialized functionality' }, { id: 'd', text: 'Make programs slower' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Libraries save time and provide tested, specialized functionality.' },
    { text: 'What is an API?', type: 'multiple_choice', options: [{ id: 'a', text: 'A type of computer virus' }, { id: 'b', text: 'Application Programming Interface - how programs interact with libraries or services' }, { id: 'c', text: 'A programming language' }, { id: 'd', text: 'A hardware component' }], correctAnswers: ['b'], explanation: 'APIs define how to interact with libraries, services, or other software.' },
    { text: 'To use a library, you typically need to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Rewrite all the code yourself' }, { id: 'b', text: 'Import or include the library in your program' }, { id: 'c', text: 'Delete your existing code' }, { id: 'd', text: 'Nothing special' }], correctAnswers: ['b'], explanation: 'Libraries must be imported/included before their functions can be used.' },
    { text: 'A math library might include:', type: 'multiple_select', options: [{ id: 'a', text: 'Square root function' }, { id: 'b', text: 'Trigonometric functions' }, { id: 'c', text: 'Random number generator' }, { id: 'd', text: 'Video playback' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Math libraries contain mathematical functions, not video playback.' },
    { text: 'What does documentation for a library typically include?', type: 'multiple_choice', options: [{ id: 'a', text: 'Only the source code' }, { id: 'b', text: 'Function descriptions, parameters, return values, and examples' }, { id: 'c', text: 'Nothing useful' }, { id: 'd', text: 'Just the library name' }], correctAnswers: ['b'], explanation: 'Good documentation describes how to use each function in the library.' },
    { text: 'Using RANDOM(1, 10) from a library would:', type: 'multiple_choice', options: [{ id: 'a', text: 'Always return 1' }, { id: 'b', text: 'Return a random number between 1 and 10' }, { id: 'c', text: 'Crash the program' }, { id: 'd', text: 'Return "RANDOM"' }], correctAnswers: ['b'], explanation: 'RANDOM typically returns a random value within the specified range.' },
    { text: 'Libraries promote:', type: 'multiple_choice', options: [{ id: 'a', text: 'Code duplication' }, { id: 'b', text: 'Code reuse and abstraction' }, { id: 'c', text: 'Longer development time' }, { id: 'd', text: 'More bugs' }], correctAnswers: ['b'], explanation: 'Libraries promote code reuse and hide complexity through abstraction.' },
    { text: 'Before using a library function, you should:', type: 'multiple_choice', options: [{ id: 'a', text: 'Ignore the documentation' }, { id: 'b', text: 'Read the documentation to understand how to use it correctly' }, { id: 'c', text: 'Guess the parameters' }, { id: 'd', text: 'Delete your code' }], correctAnswers: ['b'], explanation: 'Reading documentation ensures you use library functions correctly.' },
    { text: 'An advantage of using established libraries is:', type: 'multiple_choice', options: [{ id: 'a', text: 'They are untested' }, { id: 'b', text: 'They have been tested and used by many developers' }, { id: 'c', text: 'They always have bugs' }, { id: 'd', text: 'They slow down development' }], correctAnswers: ['b'], explanation: 'Established libraries are well-tested and proven through widespread use.' }
  ],

  'topic-3.15': [
    // Random Values - 10 questions
    { text: 'What is a random number in programming?', type: 'multiple_choice', options: [{ id: 'a', text: 'A number chosen by the user' }, { id: 'b', text: 'A number generated unpredictably by an algorithm' }, { id: 'c', text: 'Always the number 7' }, { id: 'd', text: 'A number from a formula' }], correctAnswers: ['b'], explanation: 'Random numbers are generated by algorithms to appear unpredictable.' },
    { text: 'RANDOM(1, 6) could simulate:', type: 'multiple_choice', options: [{ id: 'a', text: 'A coin flip' }, { id: 'b', text: 'Rolling a six-sided die' }, { id: 'c', text: 'A countdown' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: 'RANDOM(1, 6) returns 1-6, simulating a standard die roll.' },
    { text: 'How would you simulate a coin flip (heads or tails)?', type: 'multiple_choice', options: [{ id: 'a', text: 'RANDOM(1, 100)' }, { id: 'b', text: 'RANDOM(1, 2) or RANDOM(0, 1)' }, { id: 'c', text: 'RANDOM(1, 10)' }, { id: 'd', text: 'You cannot simulate a coin flip' }], correctAnswers: ['b'], explanation: 'Two possible outcomes (heads/tails) can be represented by RANDOM(1, 2).' },
    { text: 'Random numbers are used in games to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Make the game predictable' }, { id: 'b', text: 'Add unpredictability and variety' }, { id: 'c', text: 'Slow down the game' }, { id: 'd', text: 'Remove all challenge' }], correctAnswers: ['b'], explanation: 'Randomness makes games unpredictable, increasing replay value and challenge.' },
    { text: 'If RANDOM(1, 4) returns 3, the next call to RANDOM(1, 4) will return:', type: 'multiple_choice', options: [{ id: 'a', text: '3 again' }, { id: 'b', text: '4' }, { id: 'c', text: 'Any value from 1 to 4 (unpredictable)' }, { id: 'd', text: '1' }], correctAnswers: ['c'], explanation: 'Each random call is independent; any value in the range is possible.' },
    { text: 'What is the probability of RANDOM(1, 10) returning exactly 7?', type: 'multiple_choice', options: [{ id: 'a', text: '100%' }, { id: 'b', text: '50%' }, { id: 'c', text: '10% (1 out of 10)' }, { id: 'd', text: '0%' }], correctAnswers: ['c'], explanation: 'With 10 equally likely outcomes, each has a 1/10 = 10% probability.' },
    { text: 'Computers generate "pseudo-random" numbers because:', type: 'multiple_choice', options: [{ id: 'a', text: 'They are truly random' }, { id: 'b', text: 'They use deterministic algorithms that appear random' }, { id: 'c', text: 'Computers cannot do math' }, { id: 'd', text: 'Users choose the numbers' }], correctAnswers: ['b'], explanation: 'Pseudo-random numbers come from algorithms and are not truly random, but appear so.' },
    { text: 'A random number generator with a seed:', type: 'multiple_choice', options: [{ id: 'a', text: 'Cannot produce random numbers' }, { id: 'b', text: 'Will produce the same sequence if given the same seed' }, { id: 'c', text: 'Is always broken' }, { id: 'd', text: 'Uses actual randomness' }], correctAnswers: ['b'], explanation: 'Seeds initialize the random algorithm; same seed = same sequence (useful for testing).' },
    { text: 'RANDOM(5, 5) will return:', type: 'multiple_choice', options: [{ id: 'a', text: 'A random number between 1 and 5' }, { id: 'b', text: 'Always 5' }, { id: 'c', text: 'An error' }, { id: 'd', text: '10' }], correctAnswers: ['b'], explanation: 'With the same min and max (5, 5), the only possible result is 5.' },
    { text: 'To pick a random element from a list of 20 items (1-based indexing), use:', type: 'multiple_choice', options: [{ id: 'a', text: 'RANDOM(0, 20)' }, { id: 'b', text: 'RANDOM(1, 20)' }, { id: 'c', text: 'RANDOM(1, 21)' }, { id: 'd', text: 'RANDOM(20, 20)' }], correctAnswers: ['b'], explanation: 'RANDOM(1, 20) gives valid indices for a 20-element list with 1-based indexing.' }
  ],

  'topic-3.16': [
    // Simulations - 10 questions
    { text: 'What is a simulation?', type: 'multiple_choice', options: [{ id: 'a', text: 'A real experiment' }, { id: 'b', text: 'A program that models a real-world process or system' }, { id: 'c', text: 'A type of video game' }, { id: 'd', text: 'A hardware component' }], correctAnswers: ['b'], explanation: 'Simulations are programs that model real-world processes to study or predict behavior.' },
    { text: 'Why use simulations?', type: 'multiple_select', options: [{ id: 'a', text: 'To study scenarios too dangerous to test in real life' }, { id: 'b', text: 'To save time and money compared to real experiments' }, { id: 'c', text: 'To test many scenarios quickly' }, { id: 'd', text: 'Simulations are never useful' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Simulations allow safe, fast, cost-effective exploration of scenarios.' },
    { text: 'A weather simulation might be used to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Control the weather' }, { id: 'b', text: 'Predict future weather patterns' }, { id: 'c', text: 'Make it rain' }, { id: 'd', text: 'Stop hurricanes' }], correctAnswers: ['b'], explanation: 'Weather simulations help predict future weather based on models and data.' },
    { text: 'Simulations typically use what to add unpredictability?', type: 'multiple_choice', options: [{ id: 'a', text: 'User input' }, { id: 'b', text: 'Random numbers' }, { id: 'c', text: 'The internet' }, { id: 'd', text: 'Nothing, they are deterministic' }], correctAnswers: ['b'], explanation: 'Random numbers add variability, making simulations more realistic.' },
    { text: 'A limitation of simulations is:', type: 'multiple_choice', options: [{ id: 'a', text: 'They are always 100% accurate' }, { id: 'b', text: 'They can only be as accurate as their underlying model' }, { id: 'c', text: 'They are too cheap to run' }, { id: 'd', text: 'They take no time' }], correctAnswers: ['b'], explanation: 'Simulations are limited by the accuracy of their models and assumptions.' },
    { text: 'Running a simulation many times helps to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Break the computer' }, { id: 'b', text: 'Get statistically significant results' }, { id: 'c', text: 'Make it run slower' }, { id: 'd', text: 'Use less memory' }], correctAnswers: ['b'], explanation: 'Multiple runs provide more data for reliable statistical conclusions.' },
    { text: 'Flight simulators are used to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Actually fly planes' }, { id: 'b', text: 'Train pilots safely without risk' }, { id: 'c', text: 'Design new airports' }, { id: 'd', text: 'Nothing useful' }], correctAnswers: ['b'], explanation: 'Flight simulators train pilots in a safe environment where crashes don\'t cause harm.' },
    { text: 'What makes a simulation "good"?', type: 'multiple_choice', options: [{ id: 'a', text: 'It runs fast' }, { id: 'b', text: 'It accurately represents the key aspects of the real system' }, { id: 'c', text: 'It has nice graphics' }, { id: 'd', text: 'It\'s complicated' }], correctAnswers: ['b'], explanation: 'Good simulations accurately model the important aspects of real systems.' },
    { text: 'Simulations can help with decisions by:', type: 'multiple_choice', options: [{ id: 'a', text: 'Making decisions for you' }, { id: 'b', text: 'Showing possible outcomes of different choices' }, { id: 'c', text: 'Removing all uncertainty' }, { id: 'd', text: 'Guaranteeing success' }], correctAnswers: ['b'], explanation: 'Simulations help explore "what if" scenarios to inform decision-making.' },
    { text: 'Modeling traffic flow to optimize signal timing is an example of:', type: 'multiple_choice', options: [{ id: 'a', text: 'A game' }, { id: 'b', text: 'A practical simulation application' }, { id: 'c', text: 'An impossible task' }, { id: 'd', text: 'Art' }], correctAnswers: ['b'], explanation: 'Traffic simulations help engineers optimize real-world traffic systems.' }
  ],

  'topic-3.17': [
    // Algorithmic Efficiency - 10 questions
    { text: 'What is algorithmic efficiency?', type: 'multiple_choice', options: [{ id: 'a', text: 'How good the code looks' }, { id: 'b', text: 'How much time and resources an algorithm uses' }, { id: 'c', text: 'The number of lines of code' }, { id: 'd', text: 'How colorful the output is' }], correctAnswers: ['b'], explanation: 'Efficiency measures computational resources (time, memory) an algorithm requires.' },
    { text: 'An efficient algorithm:', type: 'multiple_choice', options: [{ id: 'a', text: 'Uses more resources than necessary' }, { id: 'b', text: 'Solves problems using minimal time and resources' }, { id: 'c', text: 'Has the most lines of code' }, { id: 'd', text: 'Never finishes' }], correctAnswers: ['b'], explanation: 'Efficient algorithms minimize time and resource usage while solving the problem.' },
    { text: 'Linear time complexity O(n) means:', type: 'multiple_choice', options: [{ id: 'a', text: 'Time doesn\'t depend on input size' }, { id: 'b', text: 'Time grows proportionally with input size' }, { id: 'c', text: 'Time grows exponentially' }, { id: 'd', text: 'The algorithm never finishes' }], correctAnswers: ['b'], explanation: 'O(n) means doubling the input roughly doubles the time.' },
    { text: 'Which is more efficient for large inputs: O(n) or O(n²)?', type: 'multiple_choice', options: [{ id: 'a', text: 'O(n²)' }, { id: 'b', text: 'O(n)' }, { id: 'c', text: 'They are equal' }, { id: 'd', text: 'Cannot compare' }], correctAnswers: ['b'], explanation: 'O(n) grows slower than O(n²), so it\'s more efficient for large inputs.' },
    { text: 'Binary search has time complexity:', type: 'multiple_choice', options: [{ id: 'a', text: 'O(n)' }, { id: 'b', text: 'O(log n)' }, { id: 'c', text: 'O(n²)' }, { id: 'd', text: 'O(1)' }], correctAnswers: ['b'], explanation: 'Binary search eliminates half the data each step, giving O(log n) complexity.' },
    { text: 'An algorithm that takes the same time regardless of input size is:', type: 'multiple_choice', options: [{ id: 'a', text: 'O(n)' }, { id: 'b', text: 'O(1) - constant time' }, { id: 'c', text: 'O(n²)' }, { id: 'd', text: 'Impossible' }], correctAnswers: ['b'], explanation: 'O(1) algorithms take constant time, regardless of input size.' },
    { text: 'Why does efficiency matter more for larger inputs?', type: 'multiple_choice', options: [{ id: 'a', text: 'It doesn\'t' }, { id: 'b', text: 'Inefficient algorithms become impractically slow with large inputs' }, { id: 'c', text: 'Large inputs are easier' }, { id: 'd', text: 'Efficiency only matters for small inputs' }], correctAnswers: ['b'], explanation: 'Poor efficiency that\'s acceptable for small data becomes impractical at scale.' },
    { text: 'An algorithm with O(2^n) complexity is:', type: 'multiple_choice', options: [{ id: 'a', text: 'Very efficient' }, { id: 'b', text: 'Exponential and becomes impractical quickly' }, { id: 'c', text: 'Linear' }, { id: 'd', text: 'Constant time' }], correctAnswers: ['b'], explanation: 'Exponential algorithms (O(2^n)) become extremely slow as input grows.' },
    { text: 'What does "reasonable time" mean for algorithms?', type: 'multiple_choice', options: [{ id: 'a', text: 'Exactly 1 second' }, { id: 'b', text: 'Polynomial time or better - practical for real-world use' }, { id: 'c', text: 'Any amount of time' }, { id: 'd', text: 'Infinite time' }], correctAnswers: ['b'], explanation: 'Polynomial time algorithms (O(n), O(n²), etc.) are considered reasonable; exponential is not.' },
    { text: 'When comparing algorithms, we typically consider:', type: 'multiple_choice', options: [{ id: 'a', text: 'Only best case' }, { id: 'b', text: 'Worst case and/or average case performance' }, { id: 'c', text: 'Only the code length' }, { id: 'd', text: 'The programmer\'s name' }], correctAnswers: ['b'], explanation: 'Worst case analysis provides guarantees; average case reflects typical performance.' }
  ],

  'topic-3.18': [
    // Undecidable Problems - 10 questions
    { text: 'What is an undecidable problem?', type: 'multiple_choice', options: [{ id: 'a', text: 'A problem that\'s hard to solve' }, { id: 'b', text: 'A problem for which no algorithm can always give a correct yes/no answer' }, { id: 'c', text: 'A problem with multiple solutions' }, { id: 'd', text: 'A problem that takes too long' }], correctAnswers: ['b'], explanation: 'Undecidable problems cannot be solved by any algorithm for all possible inputs.' },
    { text: 'The Halting Problem asks whether:', type: 'multiple_choice', options: [{ id: 'a', text: 'A program is efficient' }, { id: 'b', text: 'A given program will eventually stop or run forever' }, { id: 'c', text: 'A computer is working' }, { id: 'd', text: 'The user is happy' }], correctAnswers: ['b'], explanation: 'The Halting Problem asks if a program will halt (finish) or loop forever.' },
    { text: 'The Halting Problem is:', type: 'multiple_choice', options: [{ id: 'a', text: 'Easy to solve' }, { id: 'b', text: 'Undecidable - no algorithm can solve it for all programs' }, { id: 'c', text: 'Solved by modern computers' }, { id: 'd', text: 'Not a real problem' }], correctAnswers: ['b'], explanation: 'The Halting Problem was proven undecidable by Alan Turing.' },
    { text: 'Can a computer determine if ANY program has a bug?', type: 'multiple_choice', options: [{ id: 'a', text: 'Yes, easily' }, { id: 'b', text: 'No, this is related to undecidable problems' }, { id: 'c', text: 'Only for small programs' }, { id: 'd', text: 'Only with AI' }], correctAnswers: ['b'], explanation: 'Completely automated bug detection for all programs is undecidable.' },
    { text: 'Undecidable means:', type: 'multiple_choice', options: [{ id: 'a', text: 'The problem is difficult' }, { id: 'b', text: 'It is impossible to create an algorithm that solves it for all cases' }, { id: 'c', text: 'The problem hasn\'t been solved yet' }, { id: 'd', text: 'We need faster computers' }], correctAnswers: ['b'], explanation: 'Undecidable means no algorithm can exist - it\'s proven impossible, not just unknown.' },
    { text: 'Which of these is a decidable problem?', type: 'multiple_choice', options: [{ id: 'a', text: 'The Halting Problem' }, { id: 'b', text: 'Sorting a list of numbers' }, { id: 'c', text: 'Determining if any program will halt' }, { id: 'd', text: 'Finding all bugs in any program' }], correctAnswers: ['b'], explanation: 'Sorting is decidable - algorithms like merge sort always work. The others are undecidable.' },
    { text: 'Undecidable problems show that:', type: 'multiple_choice', options: [{ id: 'a', text: 'Computers can solve everything' }, { id: 'b', text: 'There are fundamental limits to what algorithms can compute' }, { id: 'c', text: 'We just need better programmers' }, { id: 'd', text: 'All problems have solutions' }], correctAnswers: ['b'], explanation: 'Undecidable problems prove fundamental limits exist in computation.' },
    { text: 'A problem being "undecidable" is different from being "intractable" because:', type: 'multiple_choice', options: [{ id: 'a', text: 'They are the same thing' }, { id: 'b', text: 'Undecidable has no algorithm at all; intractable has impractical algorithms' }, { id: 'c', text: 'Intractable means impossible' }, { id: 'd', text: 'Undecidable means hard' }], correctAnswers: ['b'], explanation: 'Intractable problems have solutions but they\'re too slow; undecidable have no solution at all.' },
    { text: 'In practice, how do developers handle undecidable problems?', type: 'multiple_choice', options: [{ id: 'a', text: 'They solve them anyway' }, { id: 'b', text: 'They use approximations or solve restricted versions of the problem' }, { id: 'c', text: 'They ignore them' }, { id: 'd', text: 'They wait for better computers' }], correctAnswers: ['b'], explanation: 'Developers often use heuristics, approximations, or solve simpler restricted cases.' },
    { text: 'Alan Turing proved the Halting Problem undecidable using:', type: 'multiple_choice', options: [{ id: 'a', text: 'A faster computer' }, { id: 'b', text: 'A proof by contradiction' }, { id: 'c', text: 'Trial and error' }, { id: 'd', text: 'A simulation' }], correctAnswers: ['b'], explanation: 'Turing used proof by contradiction to show no halting-detecting algorithm can exist.' }
  ]
};

// Combine all questions
Object.assign(questionsData, moreQuestions);

async function seedQuestions() {
  console.log('Seeding Big Idea 3 questions (10 per topic)...\n');

  let totalAdded = 0;

  for (const [topicId, questions] of Object.entries(questionsData)) {
    console.log(`Adding questions for ${topicId}...`);

    // Get topic info
    const topicDoc = await db.collection('topics').doc(topicId).get();
    const topic = topicDoc.exists ? topicDoc.data() : { name: topicId, bigIdeaId: 'big-idea-3' };

    // Delete existing questions for this topic first
    const existingQuestions = await db.collection('questions').where('topicId', '==', topicId).get();
    const batch = db.batch();
    existingQuestions.docs.forEach(doc => batch.delete(doc.ref));
    if (existingQuestions.size > 0) {
      await batch.commit();
      console.log(`  Deleted ${existingQuestions.size} existing questions`);
    }

    // Add new questions
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const questionId = `${topicId}-q${i + 1}`;

      await db.collection('questions').doc(questionId).set({
        id: questionId,
        ...q,
        topicId,
        topicName: topic.name,
        bigIdeaId: 'big-idea-3',
        isCustom: false,
        addedBy: null,
        addedAt: new Date(),
        deactivated: false,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      totalAdded++;
    }

    console.log(`  Added ${questions.length} questions`);
  }

  console.log(`\nDone! Added ${totalAdded} questions total for Big Idea 3.`);
}

seedQuestions()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
