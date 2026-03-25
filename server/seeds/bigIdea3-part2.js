/**
 * Seed script for Big Idea 3: Part 2 (Topics 3.5-3.8)
 * Run with: node server/seeds/bigIdea3-part2.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

if (process.env.FIREBASE_PROJECT_ID !== 'ap-csp-mastery') {
  console.error(`ERROR: Wrong project!`);
  process.exit(1);
}

const topics = [
  {
    id: 'aap-3-5',
    bigIdeaId: 'big-idea-3',
    name: '3.5 Boolean Expressions',
    description: 'Boolean expressions evaluate to true or false and are used for decision making.',
    order: 5,
    learningObjectives: ['AAP-2.E', 'AAP-2.F']
  },
  {
    id: 'aap-3-6',
    bigIdeaId: 'big-idea-3',
    name: '3.6 Conditionals',
    description: 'Conditionals allow programs to make decisions and execute different code paths.',
    order: 6,
    learningObjectives: ['AAP-2.G', 'AAP-2.H']
  },
  {
    id: 'aap-3-7',
    bigIdeaId: 'big-idea-3',
    name: '3.7 Nested Conditionals',
    description: 'Nested conditionals allow for more complex decision-making structures.',
    order: 7,
    learningObjectives: ['AAP-2.I']
  },
  {
    id: 'aap-3-8',
    bigIdeaId: 'big-idea-3',
    name: '3.8 Iteration',
    description: 'Iteration allows programs to repeat code using loops.',
    order: 8,
    learningObjectives: ['AAP-2.J', 'AAP-2.K']
  }
];

const questionsData = {
  'aap-3-5': [
    { text: 'What are the two possible values of a Boolean expression?', type: 'multiple_choice', options: [{ id: 'a', text: '0 and 1' }, { id: 'b', text: 'true and false' }, { id: 'c', text: 'yes and no' }, { id: 'd', text: 'on and off' }], correctAnswers: ['b'], explanation: 'Boolean expressions evaluate to either true or false.' },
    { text: 'What is the result of 5 > 3?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '5' }, { id: 'd', text: '3' }], correctAnswers: ['a'], explanation: '5 is greater than 3, so the expression is true.' },
    { text: 'What is the result of (10 = 10)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '10' }, { id: 'd', text: '20' }], correctAnswers: ['a'], explanation: '10 equals 10, so the expression is true.' },
    { text: 'What does the AND operator do?', type: 'multiple_choice', options: [{ id: 'a', text: 'Returns true if at least one condition is true' }, { id: 'b', text: 'Returns true only if both conditions are true' }, { id: 'c', text: 'Reverses a Boolean value' }, { id: 'd', text: 'Compares two numbers' }], correctAnswers: ['b'], explanation: 'AND returns true only when both conditions are true.' },
    { text: 'What does the OR operator do?', type: 'multiple_choice', options: [{ id: 'a', text: 'Returns true only if both conditions are true' }, { id: 'b', text: 'Returns true if at least one condition is true' }, { id: 'c', text: 'Reverses a Boolean value' }, { id: 'd', text: 'Adds two numbers' }], correctAnswers: ['b'], explanation: 'OR returns true if either or both conditions are true.' },
    { text: 'What is NOT true?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '0' }, { id: 'd', text: '1' }], correctAnswers: ['b'], explanation: 'NOT reverses the Boolean value, so NOT true equals false.' },
    { text: 'What is (true AND false)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: 'Error' }, { id: 'd', text: 'undefined' }], correctAnswers: ['b'], explanation: 'AND requires both to be true; since one is false, the result is false.' },
    { text: 'What is (true OR false)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: 'Error' }, { id: 'd', text: 'undefined' }], correctAnswers: ['a'], explanation: 'OR is true if at least one operand is true.' },
    { text: 'What is 7 ≠ 7?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '7' }, { id: 'd', text: '0' }], correctAnswers: ['b'], explanation: '7 equals 7, so "not equal" is false.' },
    { text: 'What is (4 < 5) AND (6 > 2)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '4' }, { id: 'd', text: '6' }], correctAnswers: ['a'], explanation: 'Both 4 < 5 and 6 > 2 are true, so AND returns true.' },
    { text: 'What is NOT (5 > 10)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '5' }, { id: 'd', text: '10' }], correctAnswers: ['a'], explanation: '5 > 10 is false, so NOT false is true.' },
    { text: 'Which operator checks if two values are equal?', type: 'multiple_choice', options: [{ id: 'a', text: '←' }, { id: 'b', text: '=' }, { id: 'c', text: '≠' }, { id: 'd', text: '<' }], correctAnswers: ['b'], explanation: 'The = operator checks equality in Boolean expressions.' },
    { text: 'What is (false OR false)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: 'Error' }, { id: 'd', text: '0' }], correctAnswers: ['b'], explanation: 'OR needs at least one true; both are false, so result is false.' },
    { text: 'If x = 5, what is (x > 3) AND (x < 10)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '5' }, { id: 'd', text: 'Error' }], correctAnswers: ['a'], explanation: '5 > 3 is true and 5 < 10 is true, so AND returns true.' },
    { text: 'What is (3 ≥ 3)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '3' }, { id: 'd', text: '6' }], correctAnswers: ['a'], explanation: '3 is equal to 3, so "greater than or equal" is true.' },
    { text: 'Which expression is equivalent to NOT (a AND b)?', type: 'multiple_choice', options: [{ id: 'a', text: 'a OR b' }, { id: 'b', text: '(NOT a) OR (NOT b)' }, { id: 'c', text: '(NOT a) AND (NOT b)' }, { id: 'd', text: 'a AND b' }], correctAnswers: ['b'], explanation: 'By De Morgan\'s law: NOT (a AND b) = (NOT a) OR (NOT b).' },
    { text: 'What is (10 ≤ 5)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '10' }, { id: 'd', text: '5' }], correctAnswers: ['b'], explanation: '10 is not less than or equal to 5, so the result is false.' },
    { text: 'If age = 20, what is (age ≥ 18)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '20' }, { id: 'd', text: '18' }], correctAnswers: ['a'], explanation: '20 is greater than or equal to 18, so the expression is true.' },
    { text: 'What is NOT NOT true?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: 'Error' }, { id: 'd', text: 'undefined' }], correctAnswers: ['a'], explanation: 'NOT true is false, NOT false is true.' },
    { text: 'Which is true when both conditions are false?', type: 'multiple_choice', options: [{ id: 'a', text: 'false AND false' }, { id: 'b', text: 'false OR false' }, { id: 'c', text: 'NOT false' }, { id: 'd', text: 'None of these' }], correctAnswers: ['c'], explanation: 'NOT false is true; AND and OR of two false values are both false.' },
    { text: 'What is (true AND true AND false)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: 'Error' }, { id: 'd', text: '0' }], correctAnswers: ['b'], explanation: 'All values must be true for AND to return true; one is false.' },
    { text: 'What is (false OR true OR false)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: 'Error' }, { id: 'd', text: '1' }], correctAnswers: ['a'], explanation: 'At least one value is true, so OR returns true.' },
    { text: 'Boolean expressions are used for:', type: 'multiple_choice', options: [{ id: 'a', text: 'Arithmetic calculations' }, { id: 'b', text: 'Making decisions in programs' }, { id: 'c', text: 'Storing text' }, { id: 'd', text: 'Creating lists' }], correctAnswers: ['b'], explanation: 'Boolean expressions are used in conditionals to make decisions.' },
    { text: 'What is (5 = 5) OR (3 > 10)?', type: 'multiple_choice', options: [{ id: 'a', text: 'true' }, { id: 'b', text: 'false' }, { id: 'c', text: '5' }, { id: 'd', text: '3' }], correctAnswers: ['a'], explanation: '5 = 5 is true; OR only needs one true to return true.' },
    { text: 'What relational operator means "less than"?', type: 'multiple_choice', options: [{ id: 'a', text: '>' }, { id: 'b', text: '<' }, { id: 'c', text: '≥' }, { id: 'd', text: '≤' }], correctAnswers: ['b'], explanation: 'The < symbol means "less than".' }
  ],
  'aap-3-6': [
    { text: 'What does an IF statement do?', type: 'multiple_choice', options: [{ id: 'a', text: 'Repeats code multiple times' }, { id: 'b', text: 'Executes code only if a condition is true' }, { id: 'c', text: 'Stores a value in a variable' }, { id: 'd', text: 'Defines a procedure' }], correctAnswers: ['b'], explanation: 'IF statements execute code only when the condition evaluates to true.' },
    { text: 'What happens if the condition in an IF statement is false?', type: 'multiple_choice', options: [{ id: 'a', text: 'The code runs anyway' }, { id: 'b', text: 'An error occurs' }, { id: 'c', text: 'The code block is skipped' }, { id: 'd', text: 'The program ends' }], correctAnswers: ['c'], explanation: 'When the condition is false, the code block is skipped.' },
    { text: 'What is the purpose of ELSE?', type: 'multiple_choice', options: [{ id: 'a', text: 'To end the program' }, { id: 'b', text: 'To provide alternative code when IF is false' }, { id: 'c', text: 'To repeat code' }, { id: 'd', text: 'To define variables' }], correctAnswers: ['b'], explanation: 'ELSE provides code to execute when the IF condition is false.' },
    { text: 'In IF(score ≥ 60) { DISPLAY("Pass") }, when does "Pass" display?', type: 'multiple_choice', options: [{ id: 'a', text: 'When score is less than 60' }, { id: 'b', text: 'When score is 60 or more' }, { id: 'c', text: 'Always' }, { id: 'd', text: 'Never' }], correctAnswers: ['b'], explanation: 'The condition score ≥ 60 is true when score is 60 or greater.' },
    { text: 'What does selection mean in programming?', type: 'multiple_choice', options: [{ id: 'a', text: 'Choosing which code to execute based on conditions' }, { id: 'b', text: 'Selecting items from a list' }, { id: 'c', text: 'Repeating code' }, { id: 'd', text: 'Defining variables' }], correctAnswers: ['a'], explanation: 'Selection means choosing which code path to execute based on conditions.' },
    { text: 'How many branches can a simple IF-ELSE statement have?', type: 'multiple_choice', options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '3' }, { id: 'd', text: 'Unlimited' }], correctAnswers: ['b'], explanation: 'IF-ELSE has two branches: one for true, one for false.' },
    { text: 'What is output? x ← 10; IF(x > 5) { DISPLAY("Big") } ELSE { DISPLAY("Small") }', type: 'multiple_choice', options: [{ id: 'a', text: 'Big' }, { id: 'b', text: 'Small' }, { id: 'c', text: 'BigSmall' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['a'], explanation: '10 > 5 is true, so "Big" is displayed.' },
    { text: 'Can an IF statement exist without an ELSE?', type: 'multiple_choice', options: [{ id: 'a', text: 'No, ELSE is required' }, { id: 'b', text: 'Yes, ELSE is optional' }, { id: 'c', text: 'Only in some languages' }, { id: 'd', text: 'Only with loops' }], correctAnswers: ['b'], explanation: 'ELSE is optional; IF can stand alone.' },
    { text: 'What value must the condition in an IF statement evaluate to?', type: 'multiple_choice', options: [{ id: 'a', text: 'A number' }, { id: 'b', text: 'A string' }, { id: 'c', text: 'A Boolean (true/false)' }, { id: 'd', text: 'A list' }], correctAnswers: ['c'], explanation: 'IF conditions must evaluate to a Boolean: true or false.' },
    { text: 'What is displayed? age ← 15; IF(age ≥ 18) { DISPLAY("Adult") }', type: 'multiple_choice', options: [{ id: 'a', text: 'Adult' }, { id: 'b', text: '15' }, { id: 'c', text: '18' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['d'], explanation: '15 is not ≥ 18, so nothing is displayed (no ELSE block).' },
    { text: 'Conditionals allow programs to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Only run once' }, { id: 'b', text: 'Make decisions' }, { id: 'c', text: 'Store data' }, { id: 'd', text: 'Connect to the internet' }], correctAnswers: ['b'], explanation: 'Conditionals enable programs to make decisions based on data.' },
    { text: 'What is output? IF(true) { DISPLAY("A") } ELSE { DISPLAY("B") }', type: 'multiple_choice', options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'AB' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['a'], explanation: 'The condition is always true, so "A" is displayed.' },
    { text: 'What is output? IF(false) { DISPLAY("Yes") }', type: 'multiple_choice', options: [{ id: 'a', text: 'Yes' }, { id: 'b', text: 'No' }, { id: 'c', text: 'false' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['d'], explanation: 'The condition is false and there\'s no ELSE, so nothing displays.' },
    { text: 'Which is a valid IF statement?', type: 'multiple_choice', options: [{ id: 'a', text: 'IF x = 5' }, { id: 'b', text: 'IF(x = 5) { code }' }, { id: 'c', text: 'IF code THEN x = 5' }, { id: 'd', text: 'x = 5 IF true' }], correctAnswers: ['b'], explanation: 'IF requires a condition in parentheses followed by a code block.' },
    { text: 'What does the condition control?', type: 'multiple_choice', options: [{ id: 'a', text: 'How fast code runs' }, { id: 'b', text: 'Whether code executes' }, { id: 'c', text: 'What variables exist' }, { id: 'd', text: 'Program memory' }], correctAnswers: ['b'], explanation: 'The condition determines whether the code block executes.' },
    { text: 'What is output? n ← 0; IF(n = 0) { DISPLAY("Zero") } ELSE { DISPLAY("Not zero") }', type: 'multiple_choice', options: [{ id: 'a', text: 'Zero' }, { id: 'b', text: 'Not zero' }, { id: 'c', text: '0' }, { id: 'd', text: 'Error' }], correctAnswers: ['a'], explanation: 'n equals 0, so the condition is true and "Zero" displays.' },
    { text: 'Selection is also called:', type: 'multiple_choice', options: [{ id: 'a', text: 'Iteration' }, { id: 'b', text: 'Conditional execution' }, { id: 'c', text: 'Sequencing' }, { id: 'd', text: 'Abstraction' }], correctAnswers: ['b'], explanation: 'Selection is also known as conditional execution or branching.' },
    { text: 'What happens after an IF or ELSE block completes?', type: 'multiple_choice', options: [{ id: 'a', text: 'Program ends' }, { id: 'b', text: 'Loop repeats' }, { id: 'c', text: 'Execution continues to next statement' }, { id: 'd', text: 'Returns to start' }], correctAnswers: ['c'], explanation: 'After the IF/ELSE, execution continues with the next statement.' },
    { text: 'What is output? temp ← 75; IF(temp > 80) { DISPLAY("Hot") }; DISPLAY("Done")', type: 'multiple_choice', options: [{ id: 'a', text: 'Hot' }, { id: 'b', text: 'Done' }, { id: 'c', text: 'HotDone' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: '75 is not > 80, so "Hot" is skipped, but "Done" always prints.' },
    { text: 'Which best describes when to use conditionals?', type: 'multiple_choice', options: [{ id: 'a', text: 'When you need to repeat code' }, { id: 'b', text: 'When different actions depend on data values' }, { id: 'c', text: 'When storing lists' }, { id: 'd', text: 'When printing output' }], correctAnswers: ['b'], explanation: 'Use conditionals when different actions should happen based on data values.' },
    { text: 'What is max after: x←5; y←8; IF(x>y){max←x}ELSE{max←y}', type: 'multiple_choice', options: [{ id: 'a', text: '5' }, { id: 'b', text: '8' }, { id: 'c', text: '13' }, { id: 'd', text: 'undefined' }], correctAnswers: ['b'], explanation: '5 is not > 8, so ELSE runs and max becomes 8.' },
    { text: 'How does IF-ELSE differ from just IF?', type: 'multiple_choice', options: [{ id: 'a', text: 'IF-ELSE is faster' }, { id: 'b', text: 'IF-ELSE guarantees one block executes' }, { id: 'c', text: 'No difference' }, { id: 'd', text: 'IF-ELSE uses less memory' }], correctAnswers: ['b'], explanation: 'IF-ELSE ensures exactly one of the two blocks will execute.' },
    { text: 'Can the condition of an IF contain a variable?', type: 'multiple_choice', options: [{ id: 'a', text: 'No, only constants' }, { id: 'b', text: 'Yes' }, { id: 'c', text: 'Only numbers' }, { id: 'd', text: 'Only strings' }], correctAnswers: ['b'], explanation: 'Conditions often use variables to make dynamic decisions.' },
    { text: 'What is result? IF(3 < 2){result←"A"}ELSE{result←"B"}', type: 'multiple_choice', options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'AB' }, { id: 'd', text: 'Error' }], correctAnswers: ['b'], explanation: '3 < 2 is false, so ELSE runs and result is "B".' },
    { text: 'What keyword creates a conditional branch?', type: 'multiple_choice', options: [{ id: 'a', text: 'REPEAT' }, { id: 'b', text: 'IF' }, { id: 'c', text: 'PROCEDURE' }, { id: 'd', text: 'RETURN' }], correctAnswers: ['b'], explanation: 'IF creates a conditional branch in the program flow.' }
  ],
  'aap-3-7': [
    { text: 'What is a nested conditional?', type: 'multiple_choice', options: [{ id: 'a', text: 'A loop inside a conditional' }, { id: 'b', text: 'An IF statement inside another IF statement' }, { id: 'c', text: 'Multiple variables in one condition' }, { id: 'd', text: 'A conditional without ELSE' }], correctAnswers: ['b'], explanation: 'Nested conditionals are IF statements inside other IF statements.' },
    { text: 'Why use nested conditionals?', type: 'multiple_choice', options: [{ id: 'a', text: 'To make code faster' }, { id: 'b', text: 'To handle complex decision-making with multiple criteria' }, { id: 'c', text: 'To use less memory' }, { id: 'd', text: 'To avoid using variables' }], correctAnswers: ['b'], explanation: 'Nested conditionals handle complex decisions with multiple criteria.' },
    { text: 'How many conditions are checked in a two-level nested IF?', type: 'multiple_choice', options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '1 or 2 depending on first result' }, { id: 'd', text: 'Always 3' }], correctAnswers: ['c'], explanation: 'The inner condition is only checked if the outer condition is true.' },
    { text: 'What is output? x←10; IF(x>5){IF(x>15){DISPLAY("A")}ELSE{DISPLAY("B")}}', type: 'multiple_choice', options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'AB' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: 'x>5 is true, but x>15 is false, so inner ELSE displays "B".' },
    { text: 'In nested conditionals, which condition is checked first?', type: 'multiple_choice', options: [{ id: 'a', text: 'The innermost' }, { id: 'b', text: 'The outermost' }, { id: 'c', text: 'Both simultaneously' }, { id: 'd', text: 'Random order' }], correctAnswers: ['b'], explanation: 'The outer condition is checked first; inner is checked only if outer is true.' },
    { text: 'Nested conditionals can be rewritten using:', type: 'multiple_choice', options: [{ id: 'a', text: 'Only loops' }, { id: 'b', text: 'Compound Boolean expressions with AND/OR' }, { id: 'c', text: 'Only procedures' }, { id: 'd', text: 'Nothing, they are unique' }], correctAnswers: ['b'], explanation: 'Nested IFs can often be rewritten using AND/OR in a single condition.' },
    { text: 'What is output? a←5; b←10; IF(a<b){IF(a<0){DISPLAY("X")}ELSE{DISPLAY("Y")}}ELSE{DISPLAY("Z")}', type: 'multiple_choice', options: [{ id: 'a', text: 'X' }, { id: 'b', text: 'Y' }, { id: 'c', text: 'Z' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: 'a<b is true, a<0 is false, so inner ELSE displays "Y".' },
    { text: 'What is a disadvantage of deeply nested conditionals?', type: 'multiple_choice', options: [{ id: 'a', text: 'They run faster' }, { id: 'b', text: 'They are harder to read and maintain' }, { id: 'c', text: 'They use less memory' }, { id: 'd', text: 'They are more secure' }], correctAnswers: ['b'], explanation: 'Deep nesting makes code harder to understand and maintain.' },
    { text: 'What is equivalent to IF(a){IF(b){code}}?', type: 'multiple_choice', options: [{ id: 'a', text: 'IF(a OR b){code}' }, { id: 'b', text: 'IF(a AND b){code}' }, { id: 'c', text: 'IF(NOT a){code}' }, { id: 'd', text: 'IF(a){code}; IF(b){code}' }], correctAnswers: ['b'], explanation: 'Nested IFs checking both a and b can be combined with AND.' },
    { text: 'What is output? score←85; IF(score≥90){DISPLAY("A")}ELSE{IF(score≥80){DISPLAY("B")}ELSE{DISPLAY("C")}}', type: 'multiple_choice', options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'C' }, { id: 'd', text: 'AB' }], correctAnswers: ['b'], explanation: '85 is not ≥90, but is ≥80, so "B" displays.' },
    { text: 'When is the innermost code executed in nested IFs?', type: 'multiple_choice', options: [{ id: 'a', text: 'Always' }, { id: 'b', text: 'When all outer conditions are true' }, { id: 'c', text: 'When any condition is true' }, { id: 'd', text: 'Never' }], correctAnswers: ['b'], explanation: 'Innermost code runs only when all enclosing conditions are true.' },
    { text: 'What is output? IF(true){IF(false){DISPLAY("1")}ELSE{DISPLAY("2")}}', type: 'multiple_choice', options: [{ id: 'a', text: '1' }, { id: 'b', text: '2' }, { id: 'c', text: '12' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: 'Outer is true, inner is false, so inner ELSE displays "2".' },
    { text: 'How can you simplify nested conditionals?', type: 'multiple_choice', options: [{ id: 'a', text: 'Add more levels' }, { id: 'b', text: 'Use compound conditions or early returns' }, { id: 'c', text: 'Remove all conditions' }, { id: 'd', text: 'Convert to loops' }], correctAnswers: ['b'], explanation: 'Compound conditions (AND/OR) or early returns can reduce nesting.' },
    { text: 'What is output? n←0; IF(n>0){IF(n<10){DISPLAY("Small")}}ELSE{DISPLAY("Not positive")}', type: 'multiple_choice', options: [{ id: 'a', text: 'Small' }, { id: 'b', text: 'Not positive' }, { id: 'c', text: 'SmallNot positive' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: 'n>0 is false, so ELSE displays "Not positive".' },
    { text: 'Nested conditionals create:', type: 'multiple_choice', options: [{ id: 'a', text: 'One branch' }, { id: 'b', text: 'Two branches' }, { id: 'c', text: 'Multiple possible execution paths' }, { id: 'd', text: 'Infinite loops' }], correctAnswers: ['c'], explanation: 'Each level of nesting multiplies the possible execution paths.' },
    { text: 'What is output? IF(5>3){IF(3>1){IF(1>0){DISPLAY("All true")}}}', type: 'multiple_choice', options: [{ id: 'a', text: 'All true' }, { id: 'b', text: 'Nothing' }, { id: 'c', text: 'Error' }, { id: 'd', text: '5' }], correctAnswers: ['a'], explanation: 'All three conditions are true, so the innermost code executes.' },
    { text: 'What determines which ELSE pairs with which IF?', type: 'multiple_choice', options: [{ id: 'a', text: 'Alphabetical order' }, { id: 'b', text: 'ELSE pairs with nearest preceding IF' }, { id: 'c', text: 'ELSE pairs with first IF' }, { id: 'd', text: 'Random pairing' }], correctAnswers: ['b'], explanation: 'ELSE pairs with the closest preceding IF at the same nesting level.' },
    { text: 'What is output? t←25; IF(t>30){DISPLAY("Hot")}ELSE{IF(t>20){DISPLAY("Warm")}ELSE{DISPLAY("Cool")}}', type: 'multiple_choice', options: [{ id: 'a', text: 'Hot' }, { id: 'b', text: 'Warm' }, { id: 'c', text: 'Cool' }, { id: 'd', text: 'HotWarm' }], correctAnswers: ['b'], explanation: 't is not >30 but is >20, so "Warm" displays.' },
    { text: 'Can ELSE IF be used instead of nested IF inside ELSE?', type: 'multiple_choice', options: [{ id: 'a', text: 'No' }, { id: 'b', text: 'Yes, and it often improves readability' }, { id: 'c', text: 'Only in some languages' }, { id: 'd', text: 'Only without conditions' }], correctAnswers: ['b'], explanation: 'ELSE IF chains are clearer than deeply nested IF-ELSE.' },
    { text: 'How many outcomes are possible with 3 nested binary IFs?', type: 'multiple_choice', options: [{ id: 'a', text: '3' }, { id: 'b', text: '6' }, { id: 'c', text: '8' }, { id: 'd', text: '4' }], correctAnswers: ['c'], explanation: 'Each IF has 2 branches, so 2³ = 8 possible outcomes.' },
    { text: 'What is output? x←5;y←5; IF(x=y){IF(x>0){DISPLAY("Equal positive")}}', type: 'multiple_choice', options: [{ id: 'a', text: 'Equal positive' }, { id: 'b', text: 'Equal' }, { id: 'c', text: 'positive' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['a'], explanation: 'Both conditions are true, so "Equal positive" displays.' },
    { text: 'What is a code smell related to nested conditionals?', type: 'multiple_choice', options: [{ id: 'a', text: 'Too few conditions' }, { id: 'b', text: 'Arrow-shaped code (deep nesting)' }, { id: 'c', text: 'Using AND' }, { id: 'd', text: 'Using variables' }], correctAnswers: ['b'], explanation: 'Arrow-shaped or deeply nested code is hard to maintain.' },
    { text: 'What is output? IF(false){IF(true){DISPLAY("A")}}ELSE{DISPLAY("B")}', type: 'multiple_choice', options: [{ id: 'a', text: 'A' }, { id: 'b', text: 'B' }, { id: 'c', text: 'AB' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: 'Outer IF is false, so ELSE displays "B"; inner IF is never reached.' },
    { text: 'Nested conditionals are evaluated:', type: 'multiple_choice', options: [{ id: 'a', text: 'All at once' }, { id: 'b', text: 'Inside out' }, { id: 'c', text: 'Outside in, one level at a time' }, { id: 'd', text: 'Randomly' }], correctAnswers: ['c'], explanation: 'Outer conditions are checked first, then inner ones if outer is true.' },
    { text: 'What is the maximum nesting depth recommended for readability?', type: 'multiple_choice', options: [{ id: 'a', text: '1' }, { id: 'b', text: '2-3' }, { id: 'c', text: '10' }, { id: 'd', text: 'Unlimited' }], correctAnswers: ['b'], explanation: 'Generally, 2-3 levels of nesting maintains good readability.' }
  ],
  'aap-3-8': [
    { text: 'What does iteration mean in programming?', type: 'multiple_choice', options: [{ id: 'a', text: 'Making decisions' }, { id: 'b', text: 'Repeating code' }, { id: 'c', text: 'Defining variables' }, { id: 'd', text: 'Creating procedures' }], correctAnswers: ['b'], explanation: 'Iteration means repeating code, typically using loops.' },
    { text: 'What does REPEAT 5 TIMES { DISPLAY("Hi") } output?', type: 'multiple_choice', options: [{ id: 'a', text: 'Hi' }, { id: 'b', text: 'HiHiHiHiHi' }, { id: 'c', text: '5' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: 'The code displays "Hi" five times.' },
    { text: 'Which loop continues while a condition is true?', type: 'multiple_choice', options: [{ id: 'a', text: 'REPEAT n TIMES' }, { id: 'b', text: 'REPEAT UNTIL' }, { id: 'c', text: 'FOR EACH' }, { id: 'd', text: 'REPEAT WHILE' }], correctAnswers: ['d'], explanation: 'REPEAT WHILE continues as long as the condition is true.' },
    { text: 'What is a loop counter?', type: 'multiple_choice', options: [{ id: 'a', text: 'A variable that tracks iterations' }, { id: 'b', text: 'A way to exit loops' }, { id: 'c', text: 'A type of condition' }, { id: 'd', text: 'A procedure call' }], correctAnswers: ['a'], explanation: 'A loop counter is a variable that tracks the number of iterations.' },
    { text: 'What is output? i←1; REPEAT UNTIL(i>3){DISPLAY(i);i←i+1}', type: 'multiple_choice', options: [{ id: 'a', text: '123' }, { id: 'b', text: '1234' }, { id: 'c', text: '12' }, { id: 'd', text: '321' }], correctAnswers: ['a'], explanation: 'i goes 1,2,3 and stops when i becomes 4 (>3).' },
    { text: 'What is an infinite loop?', type: 'multiple_choice', options: [{ id: 'a', text: 'A loop that runs once' }, { id: 'b', text: 'A loop that never stops' }, { id: 'c', text: 'A loop with no code inside' }, { id: 'd', text: 'A loop that runs backwards' }], correctAnswers: ['b'], explanation: 'An infinite loop never meets its exit condition and runs forever.' },
    { text: 'What causes an infinite loop?', type: 'multiple_choice', options: [{ id: 'a', text: 'Too much code inside' }, { id: 'b', text: 'Condition never becomes false/true (for UNTIL)' }, { id: 'c', text: 'Using variables' }, { id: 'd', text: 'Nesting loops' }], correctAnswers: ['b'], explanation: 'Infinite loops occur when the exit condition is never satisfied.' },
    { text: 'What is output? sum←0; REPEAT 4 TIMES{sum←sum+2}; DISPLAY(sum)', type: 'multiple_choice', options: [{ id: 'a', text: '2' }, { id: 'b', text: '4' }, { id: 'c', text: '8' }, { id: 'd', text: '0' }], correctAnswers: ['c'], explanation: 'Adding 2 four times: 0+2+2+2+2 = 8.' },
    { text: 'FOR EACH item IN list does what?', type: 'multiple_choice', options: [{ id: 'a', text: 'Runs once' }, { id: 'b', text: 'Iterates through each element of the list' }, { id: 'c', text: 'Deletes items' }, { id: 'd', text: 'Sorts the list' }], correctAnswers: ['b'], explanation: 'FOR EACH iterates through every element in the list once.' },
    { text: 'What is output? list←[1,2,3]; sum←0; FOR EACH n IN list{sum←sum+n}; DISPLAY(sum)', type: 'multiple_choice', options: [{ id: 'a', text: '1' }, { id: 'b', text: '3' }, { id: 'c', text: '6' }, { id: 'd', text: '123' }], correctAnswers: ['c'], explanation: 'Sum of list elements: 1+2+3 = 6.' },
    { text: 'How do you stop a loop early?', type: 'multiple_choice', options: [{ id: 'a', text: 'Delete the loop' }, { id: 'b', text: 'Use a break or return statement' }, { id: 'c', text: 'Add more iterations' }, { id: 'd', text: 'You cannot stop loops early' }], correctAnswers: ['b'], explanation: 'Break statements can exit a loop before the condition is met.' },
    { text: 'What is output? x←5; REPEAT UNTIL(x=0){x←x-1}; DISPLAY(x)', type: 'multiple_choice', options: [{ id: 'a', text: '5' }, { id: 'b', text: '1' }, { id: 'c', text: '0' }, { id: 'd', text: '-1' }], correctAnswers: ['c'], explanation: 'x decreases until it equals 0, then the loop stops.' },
    { text: 'Why use loops instead of repeating code manually?', type: 'multiple_choice', options: [{ id: 'a', text: 'Loops are slower' }, { id: 'b', text: 'Loops reduce code duplication and errors' }, { id: 'c', text: 'Loops use more memory' }, { id: 'd', text: 'There is no advantage' }], correctAnswers: ['b'], explanation: 'Loops eliminate duplicate code and reduce potential for errors.' },
    { text: 'What is output? count←0; REPEAT 10 TIMES{count←count+1}; DISPLAY(count)', type: 'multiple_choice', options: [{ id: 'a', text: '0' }, { id: 'b', text: '1' }, { id: 'c', text: '10' }, { id: 'd', text: '11' }], correctAnswers: ['c'], explanation: 'count increases by 1 each of 10 iterations: final value is 10.' },
    { text: 'REPEAT UNTIL differs from REPEAT WHILE how?', type: 'multiple_choice', options: [{ id: 'a', text: 'UNTIL runs while condition is false' }, { id: 'b', text: 'WHILE runs while condition is true' }, { id: 'c', text: 'Both A and B' }, { id: 'd', text: 'No difference' }], correctAnswers: ['c'], explanation: 'UNTIL runs until condition becomes true; WHILE runs while it IS true.' },
    { text: 'What happens if REPEAT 0 TIMES { code }?', type: 'multiple_choice', options: [{ id: 'a', text: 'Runs once' }, { id: 'b', text: 'Runs forever' }, { id: 'c', text: 'Code never executes' }, { id: 'd', text: 'Error' }], correctAnswers: ['c'], explanation: 'Zero iterations means the code inside never runs.' },
    { text: 'What is output? n←1; REPEAT 3 TIMES{n←n*2}; DISPLAY(n)', type: 'multiple_choice', options: [{ id: 'a', text: '2' }, { id: 'b', text: '6' }, { id: 'c', text: '8' }, { id: 'd', text: '3' }], correctAnswers: ['c'], explanation: '1*2=2, 2*2=4, 4*2=8.' },
    { text: 'Nested loops are:', type: 'multiple_choice', options: [{ id: 'a', text: 'Loops inside loops' }, { id: 'b', text: 'Two separate loops' }, { id: 'c', text: 'Loops with conditions' }, { id: 'd', text: 'Loops that run once' }], correctAnswers: ['a'], explanation: 'Nested loops are loops placed inside other loops.' },
    { text: 'How many times does inner loop run? REPEAT 3 TIMES{REPEAT 2 TIMES{code}}', type: 'multiple_choice', options: [{ id: 'a', text: '2' }, { id: 'b', text: '3' }, { id: 'c', text: '5' }, { id: 'd', text: '6' }], correctAnswers: ['d'], explanation: 'Inner loop runs 2 times for each of 3 outer iterations: 3×2=6.' },
    { text: 'What is output? i←10; REPEAT UNTIL(i<5){i←i-2}; DISPLAY(i)', type: 'multiple_choice', options: [{ id: 'a', text: '4' }, { id: 'b', text: '5' }, { id: 'c', text: '6' }, { id: 'd', text: '10' }], correctAnswers: ['a'], explanation: 'i: 10→8→6→4. At 4, i<5 is true, so loop stops.' },
    { text: 'What is the purpose of loop initialization?', type: 'multiple_choice', options: [{ id: 'a', text: 'To end the loop' }, { id: 'b', text: 'To set up variables before the loop starts' }, { id: 'c', text: 'To skip iterations' }, { id: 'd', text: 'To nest loops' }], correctAnswers: ['b'], explanation: 'Initialization sets variables to their starting values before looping.' },
    { text: 'What is output? REPEAT 4 TIMES{DISPLAY("*")}', type: 'multiple_choice', options: [{ id: 'a', text: '*' }, { id: 'b', text: '****' }, { id: 'c', text: '4' }, { id: 'd', text: '4*' }], correctAnswers: ['b'], explanation: 'Displays * four times: ****.' },
    { text: 'A loop that runs exactly n times is called:', type: 'multiple_choice', options: [{ id: 'a', text: 'Conditional loop' }, { id: 'b', text: 'Definite/count-controlled loop' }, { id: 'c', text: 'Infinite loop' }, { id: 'd', text: 'Nested loop' }], correctAnswers: ['b'], explanation: 'Definite or count-controlled loops run a predetermined number of times.' },
    { text: 'What is a sentinel value?', type: 'multiple_choice', options: [{ id: 'a', text: 'A loop counter' }, { id: 'b', text: 'A special value that signals loop termination' }, { id: 'c', text: 'The first element' }, { id: 'd', text: 'A variable name' }], correctAnswers: ['b'], explanation: 'A sentinel value signals when to stop a loop (e.g., -1 to end input).' },
    { text: 'What is output? total←0; FOR EACH x IN [5,10,15]{total←total+x}; DISPLAY(total)', type: 'multiple_choice', options: [{ id: 'a', text: '5' }, { id: 'b', text: '15' }, { id: 'c', text: '30' }, { id: 'd', text: '51015' }], correctAnswers: ['c'], explanation: 'Sum: 5+10+15 = 30.' }
  ]
};

async function seed() {
  console.log('Seeding Big Idea 3 Part 2 (Topics 3.5-3.8)...\n');
  try {
    for (const topic of topics) {
      await db.collection('topics').doc(topic.id).set(topic);
      console.log(`Created topic: ${topic.name}`);
    }

    for (const [topicId, questions] of Object.entries(questionsData)) {
      console.log(`Adding ${questions.length} questions to ${topicId}...`);
      for (let i = 0; i < questions.length; i++) {
        await db.collection('questions').add({
          ...questions[i],
          topicId,
          order: i + 1,
          isCustom: false,
          createdAt: new Date().toISOString()
        });
      }
    }
    console.log('\nPart 2 complete!');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

seed().then(() => process.exit(0)).catch(() => process.exit(1));
