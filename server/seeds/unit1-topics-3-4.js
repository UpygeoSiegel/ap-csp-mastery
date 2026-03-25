/**
 * Unit 1: Digital Information - Topics 1.3-1.4 Questions
 * Run with: node server/seeds/unit1-topics-3-4.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questionsData = {
  'di-3-limitations-binary': [
    {
      text: 'What is an overflow error?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When a program uses too much memory' },
        { id: 'b', text: 'When a number exceeds the maximum value that can be stored in the available bits' },
        { id: 'c', text: 'When a computer overheats' },
        { id: 'd', text: 'When too many programs run at once' }
      ],
      correctAnswers: ['b'],
      explanation: 'Overflow occurs when a calculation produces a result larger than can be represented with the available number of bits.'
    },
    {
      text: 'If a system uses 8 bits for unsigned integers, what is the maximum value it can store?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '128' },
        { id: 'b', text: '255' },
        { id: 'c', text: '256' },
        { id: 'd', text: '512' }
      ],
      correctAnswers: ['b'],
      explanation: '8 bits can represent values 0-255. The maximum unsigned value is 2^8 - 1 = 255.'
    },
    {
      text: 'What happens if you try to store the value 300 in an 8-bit unsigned integer?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It stores correctly' },
        { id: 'b', text: 'An overflow error occurs' },
        { id: 'c', text: 'The computer crashes' },
        { id: 'd', text: 'It rounds to 255' }
      ],
      correctAnswers: ['b'],
      explanation: '300 exceeds the maximum 8-bit value (255), causing an overflow error.'
    },
    {
      text: 'What is a roundoff error?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An error when counting' },
        { id: 'b', text: 'An error that occurs because some decimal values cannot be exactly represented in binary' },
        { id: 'c', text: 'An error when rounding to the nearest integer' },
        { id: 'd', text: 'An error in multiplication' }
      ],
      correctAnswers: ['b'],
      explanation: 'Roundoff errors occur because numbers like 0.1 cannot be exactly represented in binary floating-point format.'
    },
    {
      text: 'The decimal number 0.1 cannot be represented exactly in binary. This is an example of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Overflow error' },
        { id: 'b', text: 'Syntax error' },
        { id: 'c', text: 'Roundoff error' },
        { id: 'd', text: 'Logic error' }
      ],
      correctAnswers: ['c'],
      explanation: '0.1 in binary is a repeating fraction, so it must be approximated, leading to roundoff errors.'
    },
    {
      text: 'Why do some calculations with decimal numbers produce unexpected results in computers?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Computers are bad at math' },
        { id: 'b', text: 'Binary cannot exactly represent all decimal fractions' },
        { id: 'c', text: 'The programs have bugs' },
        { id: 'd', text: 'Memory is corrupted' }
      ],
      correctAnswers: ['b'],
      explanation: 'Some decimal fractions (like 0.1, 0.2) have infinite binary representations and must be approximated.'
    },
    {
      text: 'In a 4-bit system, what value results from adding 15 + 1?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '16' },
        { id: 'b', text: '0 (due to overflow)' },
        { id: 'c', text: '15' },
        { id: 'd', text: 'Error message appears' }
      ],
      correctAnswers: ['b'],
      explanation: '15 is 1111 in 4 bits. Adding 1 gives 10000, but only 4 bits are kept, resulting in 0000 (0).'
    },
    {
      text: 'Which of the following can cause issues due to binary representation limitations?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Financial calculations with cents' },
        { id: 'b', text: 'Scientific calculations with very small decimals' },
        { id: 'c', text: 'Counting whole numbers from 1 to 100' },
        { id: 'd', text: 'Calculating percentages' }
      ],
      correctAnswers: ['a', 'b', 'd'],
      explanation: 'Financial, scientific, and percentage calculations often involve decimals that cannot be exactly represented in binary.'
    },
    {
      text: 'A video game uses 16 bits for a player score. What is the maximum possible score?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '256' },
        { id: 'b', text: '32,767' },
        { id: 'c', text: '65,535' },
        { id: 'd', text: '1,000,000' }
      ],
      correctAnswers: ['c'],
      explanation: '16 bits unsigned: 2^16 - 1 = 65,535 maximum value.'
    },
    {
      text: 'What is the consequence of using more bits to represent numbers?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Slower calculations only' },
        { id: 'b', text: 'Larger range of values but more memory usage' },
        { id: 'c', text: 'Smaller range of values' },
        { id: 'd', text: 'No difference' }
      ],
      correctAnswers: ['b'],
      explanation: 'More bits allow larger numbers but require more storage space.'
    },
    {
      text: 'A programmer adds 0.1 + 0.2 in Python and gets 0.30000000000000004. This is due to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A bug in Python' },
        { id: 'b', text: 'Roundoff error in floating-point representation' },
        { id: 'c', text: 'Integer overflow' },
        { id: 'd', text: 'Incorrect syntax' }
      ],
      correctAnswers: ['b'],
      explanation: 'Both 0.1 and 0.2 cannot be exactly represented in binary, leading to small errors.'
    },
    {
      text: 'How can programmers minimize the impact of roundoff errors?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Use appropriate data types for the task' },
        { id: 'b', text: 'Round results when displaying to users' },
        { id: 'c', text: 'Use integer arithmetic when possible (e.g., cents instead of dollars)' },
        { id: 'd', text: 'Ignore the problem' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Using appropriate types, rounding for display, and avoiding decimals when possible all help minimize roundoff error impacts.'
    },
    {
      text: 'If a counter variable uses 8 bits and increments from 255, what happens?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It becomes 256' },
        { id: 'b', text: 'It wraps around to 0' },
        { id: 'c', text: 'The program stops' },
        { id: 'd', text: 'It stays at 255' }
      ],
      correctAnswers: ['b'],
      explanation: 'This is overflow wraparound. 255 + 1 = 256, but in 8 bits (256 = 100000000), only the lower 8 bits (00000000 = 0) are kept.'
    },
    {
      text: 'Why might a 32-bit system handle larger numbers than a 16-bit system?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '32-bit systems are faster' },
        { id: 'b', text: '32 bits can represent a larger range of values than 16 bits' },
        { id: 'c', text: '32-bit systems have more memory' },
        { id: 'd', text: 'There is no difference' }
      ],
      correctAnswers: ['b'],
      explanation: '32 bits can represent 2^32 values, while 16 bits can only represent 2^16 values.'
    },
    {
      text: 'What is floating-point representation used for?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Storing whole numbers only' },
        { id: 'b', text: 'Storing numbers with decimal points' },
        { id: 'c', text: 'Storing text' },
        { id: 'd', text: 'Storing images' }
      ],
      correctAnswers: ['b'],
      explanation: 'Floating-point representation allows computers to store and process numbers with fractional parts.'
    },
    {
      text: 'An odometer displays miles up to 99,999. What happens when it reaches 100,000?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It displays 100,000' },
        { id: 'b', text: 'It rolls over to 00,000' },
        { id: 'c', text: 'It stops counting' },
        { id: 'd', text: 'It shows an error' }
      ],
      correctAnswers: ['b'],
      explanation: 'Like binary overflow, the odometer wraps around when it exceeds its maximum displayable value.'
    },
    {
      text: 'Which statement about overflow is TRUE?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Overflow only happens with very old computers' },
        { id: 'b', text: 'Overflow can cause programs to produce incorrect results' },
        { id: 'c', text: 'Overflow is always caught by the computer and reported' },
        { id: 'd', text: 'Overflow can only occur with negative numbers' }
      ],
      correctAnswers: ['b'],
      explanation: 'Overflow can silently produce incorrect values without any error message, leading to bugs.'
    },
    {
      text: 'A signed 8-bit integer can represent values in which range?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0 to 255' },
        { id: 'b', text: '-128 to 127' },
        { id: 'c', text: '-256 to 256' },
        { id: 'd', text: '1 to 256' }
      ],
      correctAnswers: ['b'],
      explanation: 'Signed 8-bit integers use one bit for sign, giving range -128 to 127 (still 256 total values).'
    },
    {
      text: 'What is the Year 2038 problem related to?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Running out of IP addresses' },
        { id: 'b', text: 'Overflow in 32-bit time representation' },
        { id: 'c', text: 'Internet running out of bandwidth' },
        { id: 'd', text: 'Computers becoming obsolete' }
      ],
      correctAnswers: ['b'],
      explanation: 'Many systems store time as seconds since 1970 in a signed 32-bit integer, which will overflow in 2038.'
    },
    {
      text: 'Why do financial applications often use integers for currency (cents) instead of floating-point (dollars)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Integers are faster' },
        { id: 'b', text: 'To avoid roundoff errors that could cause financial discrepancies' },
        { id: 'c', text: 'Floating-point numbers are not allowed in banking' },
        { id: 'd', text: 'Integers use less memory' }
      ],
      correctAnswers: ['b'],
      explanation: 'Using integers (cents) avoids the roundoff errors that occur with floating-point decimal calculations.'
    },
    {
      text: 'If a calculation should result in -5, but the system only supports unsigned integers, what happens?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It correctly stores -5' },
        { id: 'b', text: 'An underflow error occurs, potentially wrapping to a large positive number' },
        { id: 'c', text: 'It stores 0' },
        { id: 'd', text: 'It stores 5' }
      ],
      correctAnswers: ['b'],
      explanation: 'Unsigned integers cannot represent negative values. Underflow causes wraparound to a large positive number.'
    },
    {
      text: 'Which of the following numbers CAN be represented exactly in binary?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0.1' },
        { id: 'b', text: '0.3' },
        { id: 'c', text: '0.5' },
        { id: 'd', text: '0.7' }
      ],
      correctAnswers: ['c'],
      explanation: '0.5 = 1/2 = 0.1 in binary, which can be represented exactly. Others are repeating fractions in binary.'
    },
    {
      text: 'What happens when you multiply two large 16-bit numbers?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The result is always correct' },
        { id: 'b', text: 'The result might overflow if it exceeds 16 bits' },
        { id: 'c', text: 'Multiplication cannot overflow' },
        { id: 'd', text: 'The computer automatically uses more bits' }
      ],
      correctAnswers: ['b'],
      explanation: 'Multiplying two 16-bit numbers can produce a result larger than 16 bits, causing overflow.'
    },
    {
      text: 'How did the Ariane 5 rocket failure (1996) relate to overflow?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Fuel tank overflow' },
        { id: 'b', text: 'A 64-bit floating-point number was converted to a 16-bit integer, causing overflow' },
        { id: 'c', text: 'Memory overflow' },
        { id: 'd', text: 'It was unrelated to overflow' }
      ],
      correctAnswers: ['b'],
      explanation: 'The rocket\'s guidance system failed when a 64-bit value was converted to 16 bits, causing overflow and self-destruction.'
    },
    {
      text: 'What is the benefit of using 64-bit integers instead of 32-bit?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Faster processing' },
        { id: 'b', text: 'Can represent much larger numbers before overflow' },
        { id: 'c', text: 'Uses less memory' },
        { id: 'd', text: 'Better for storing text' }
      ],
      correctAnswers: ['b'],
      explanation: '64-bit integers can represent values up to about 9.2 quintillion, far exceeding 32-bit\'s ~4.3 billion maximum.'
    }
  ],

  'di-4-representing-text': [
    {
      text: 'What is ASCII?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A programming language' },
        { id: 'b', text: 'A standard for encoding text characters as numbers' },
        { id: 'c', text: 'A type of computer' },
        { id: 'd', text: 'An image format' }
      ],
      correctAnswers: ['b'],
      explanation: 'ASCII (American Standard Code for Information Interchange) assigns numeric values to characters.'
    },
    {
      text: 'How many characters can standard ASCII represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '26' },
        { id: 'b', text: '128' },
        { id: 'c', text: '256' },
        { id: 'd', text: '65,536' }
      ],
      correctAnswers: ['b'],
      explanation: 'Standard ASCII uses 7 bits, allowing for 128 different characters (0-127).'
    },
    {
      text: 'In ASCII, uppercase "A" has the decimal value 65. What is "B"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '64' },
        { id: 'b', text: '66' },
        { id: 'c', text: '67' },
        { id: 'd', text: '97' }
      ],
      correctAnswers: ['b'],
      explanation: 'Letters are sequential in ASCII. A=65, B=66, C=67, etc.'
    },
    {
      text: 'Why was Unicode created?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'ASCII was too slow' },
        { id: 'b', text: 'To represent characters from all the world\'s writing systems' },
        { id: 'c', text: 'ASCII used too much memory' },
        { id: 'd', text: 'To replace binary numbers' }
      ],
      correctAnswers: ['b'],
      explanation: 'ASCII only supports English characters. Unicode was created to support all languages and symbols worldwide.'
    },
    {
      text: 'How many characters can Unicode represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '256' },
        { id: 'b', text: '65,536' },
        { id: 'c', text: 'Over 140,000 characters' },
        { id: 'd', text: '128' }
      ],
      correctAnswers: ['c'],
      explanation: 'Unicode currently defines over 140,000 characters, covering virtually all writing systems.'
    },
    {
      text: 'In ASCII, lowercase "a" is 97. What is the relationship between uppercase and lowercase letters?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'They have the same value' },
        { id: 'b', text: 'Lowercase letters are 32 more than uppercase' },
        { id: 'c', text: 'Uppercase letters are 32 more than lowercase' },
        { id: 'd', text: 'There is no relationship' }
      ],
      correctAnswers: ['b'],
      explanation: 'In ASCII, lowercase = uppercase + 32. A=65, a=97. Difference is 32.'
    },
    {
      text: 'How is the text "Hi" stored in a computer?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'As pictures of the letters' },
        { id: 'b', text: 'As a sequence of numbers representing each character' },
        { id: 'c', text: 'As sound waves' },
        { id: 'd', text: 'As a single number' }
      ],
      correctAnswers: ['b'],
      explanation: 'Text is stored as a sequence of character codes. "Hi" = 72, 105 in ASCII.'
    },
    {
      text: 'What ASCII value represents the space character?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '32' },
        { id: 'c', text: '64' },
        { id: 'd', text: '255' }
      ],
      correctAnswers: ['b'],
      explanation: 'The space character has ASCII value 32.'
    },
    {
      text: 'Which characters are included in ASCII? (Select all that apply)',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'English letters (A-Z, a-z)' },
        { id: 'b', text: 'Digits (0-9)' },
        { id: 'c', text: 'Chinese characters' },
        { id: 'd', text: 'Punctuation marks' }
      ],
      correctAnswers: ['a', 'b', 'd'],
      explanation: 'ASCII includes English letters, digits, and common punctuation. Chinese characters require Unicode.'
    },
    {
      text: 'UTF-8 is:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A type of computer' },
        { id: 'b', text: 'A variable-length encoding for Unicode characters' },
        { id: 'c', text: 'A programming language' },
        { id: 'd', text: 'An older version of ASCII' }
      ],
      correctAnswers: ['b'],
      explanation: 'UTF-8 is a popular Unicode encoding that uses 1-4 bytes per character, being compatible with ASCII.'
    },
    {
      text: 'In ASCII, the digit "0" has decimal value 48. What is the value of "5"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '50' },
        { id: 'c', text: '53' },
        { id: 'd', text: '55' }
      ],
      correctAnswers: ['c'],
      explanation: 'Digits are sequential: 0=48, 1=49, 2=50, 3=51, 4=52, 5=53.'
    },
    {
      text: 'Why is UTF-8 the most common encoding on the web?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It is the fastest' },
        { id: 'b', text: 'It is compatible with ASCII and supports all Unicode characters' },
        { id: 'c', text: 'It uses the least memory' },
        { id: 'd', text: 'It is required by law' }
      ],
      correctAnswers: ['b'],
      explanation: 'UTF-8 is backward compatible with ASCII (English text stays the same size) while supporting all languages.'
    },
    {
      text: 'What is the binary representation of the character "A" (ASCII 65)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '01000001' },
        { id: 'b', text: '01100001' },
        { id: 'c', text: '00100000' },
        { id: 'd', text: '01000101' }
      ],
      correctAnswers: ['a'],
      explanation: '65 in binary is 01000001.'
    },
    {
      text: 'How many bits does ASCII typically use per character?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4 bits' },
        { id: 'b', text: '7 bits (extended to 8)' },
        { id: 'c', text: '16 bits' },
        { id: 'd', text: '32 bits' }
      ],
      correctAnswers: ['b'],
      explanation: 'ASCII uses 7 bits (0-127), but is often stored in 8 bits (1 byte) for convenience.'
    },
    {
      text: 'What problem arises when different computers use different character encodings?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Computers run slower' },
        { id: 'b', text: 'Text may display as incorrect or garbled characters' },
        { id: 'c', text: 'Files become larger' },
        { id: 'd', text: 'No problems arise' }
      ],
      correctAnswers: ['b'],
      explanation: 'Mismatched encodings cause mojibake - text displayed as wrong characters.'
    },
    {
      text: 'Which encoding would you need to display emoji? 😀',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'ASCII' },
        { id: 'b', text: 'Extended ASCII' },
        { id: 'c', text: 'Unicode (UTF-8 or UTF-16)' },
        { id: 'd', text: 'Binary' }
      ],
      correctAnswers: ['c'],
      explanation: 'Emoji are not in ASCII. They require Unicode, which includes thousands of emoji characters.'
    },
    {
      text: 'What is the hexadecimal representation commonly used for Unicode code points?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Because hexadecimal is faster' },
        { id: 'b', text: 'Because it is more compact than binary and aligns with byte boundaries' },
        { id: 'c', text: 'Because Unicode requires hexadecimal' },
        { id: 'd', text: 'Because decimals cannot represent Unicode' }
      ],
      correctAnswers: ['b'],
      explanation: 'Hexadecimal is compact (2 hex digits = 1 byte) and easier to read than long binary strings.'
    },
    {
      text: 'If a text file contains 100 ASCII characters, approximately how many bytes is the file?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '50 bytes' },
        { id: 'b', text: '100 bytes' },
        { id: 'c', text: '200 bytes' },
        { id: 'd', text: '800 bytes' }
      ],
      correctAnswers: ['b'],
      explanation: 'ASCII uses 1 byte per character, so 100 characters = approximately 100 bytes.'
    },
    {
      text: 'The newline character in ASCII (code 10) is an example of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A printable character' },
        { id: 'b', text: 'A control character' },
        { id: 'c', text: 'A punctuation mark' },
        { id: 'd', text: 'A letter' }
      ],
      correctAnswers: ['b'],
      explanation: 'Control characters (like newline, tab, backspace) control text formatting rather than displaying symbols.'
    },
    {
      text: 'In UTF-8, an ASCII character uses how many bytes?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1 byte' },
        { id: 'b', text: '2 bytes' },
        { id: 'c', text: '3 bytes' },
        { id: 'd', text: '4 bytes' }
      ],
      correctAnswers: ['a'],
      explanation: 'UTF-8 uses 1 byte for ASCII characters (0-127), making it fully compatible with ASCII.'
    },
    {
      text: 'A Chinese character in UTF-8 typically requires:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1 byte' },
        { id: 'b', text: '2 bytes' },
        { id: 'c', text: '3 bytes' },
        { id: 'd', text: '4 bytes' }
      ],
      correctAnswers: ['c'],
      explanation: 'Chinese, Japanese, and Korean characters typically use 3 bytes in UTF-8.'
    },
    {
      text: 'What does "encoding" mean in the context of text representation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Encrypting text for security' },
        { id: 'b', text: 'The system for mapping characters to numeric values' },
        { id: 'c', text: 'Compressing text to save space' },
        { id: 'd', text: 'Translating text to another language' }
      ],
      correctAnswers: ['b'],
      explanation: 'Encoding defines how characters are represented as numbers (and ultimately binary).'
    },
    {
      text: 'Which statement about ASCII and Unicode is TRUE?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Unicode is a subset of ASCII' },
        { id: 'b', text: 'ASCII is a subset of Unicode' },
        { id: 'c', text: 'They are completely unrelated' },
        { id: 'd', text: 'They use the same codes for all characters' }
      ],
      correctAnswers: ['b'],
      explanation: 'Unicode includes all ASCII characters with the same codes (0-127), making ASCII a subset.'
    },
    {
      text: 'What would happen if you opened a UTF-8 encoded file as ASCII?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It would display correctly' },
        { id: 'b', text: 'English characters would display correctly, but non-ASCII characters would be garbled' },
        { id: 'c', text: 'The file would not open' },
        { id: 'd', text: 'All characters would be deleted' }
      ],
      correctAnswers: ['b'],
      explanation: 'Since UTF-8 is compatible with ASCII, ASCII characters work fine, but multi-byte characters break.'
    },
    {
      text: 'The string "Hello" in ASCII would be stored as which sequence of decimal numbers?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '72, 101, 108, 108, 111' },
        { id: 'b', text: '104, 101, 108, 108, 111' },
        { id: 'c', text: '72, 69, 76, 76, 79' },
        { id: 'd', text: '8, 5, 12, 12, 15' }
      ],
      correctAnswers: ['a'],
      explanation: 'H=72, e=101, l=108, l=108, o=111 in ASCII.'
    }
  ]
};

async function updateTopicsWithQuestions() {
  console.log('Adding questions to Unit 1 Topics 1.3-1.4...\n');

  for (const [topicId, questions] of Object.entries(questionsData)) {
    const processedQuestions = questions.map((q, index) => ({
      ...q,
      id: `${topicId}-q${index + 1}`,
      isCustom: false,
      addedBy: null,
      addedAt: new Date(),
      deactivated: false
    }));

    await db.collection('topics').doc(topicId).update({
      questions: processedQuestions,
      updatedAt: new Date()
    });

    console.log(`Updated ${topicId} with ${processedQuestions.length} questions`);
  }

  console.log('\nDone!');
}

updateTopicsWithQuestions()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
