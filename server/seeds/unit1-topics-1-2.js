/**
 * Unit 1: Digital Information - Topics 1.1-1.2 Questions
 * Run with: node server/seeds/unit1-topics-1-2.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questionsData = {
  'di-1-bits-bytes': [
    {
      text: 'What is a bit?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A small piece of a computer' },
        { id: 'b', text: 'The smallest unit of data in computing, representing a 0 or 1' },
        { id: 'c', text: 'A type of computer virus' },
        { id: 'd', text: 'A measurement of internet speed' }
      ],
      correctAnswers: ['b'],
      explanation: 'A bit (binary digit) is the smallest unit of data in computing and can only have two values: 0 or 1.'
    },
    {
      text: 'How many bits are in one byte?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2 bits' },
        { id: 'b', text: '4 bits' },
        { id: 'c', text: '8 bits' },
        { id: 'd', text: '16 bits' }
      ],
      correctAnswers: ['c'],
      explanation: 'One byte consists of 8 bits. This is a fundamental unit of digital storage.'
    },
    {
      text: 'Which of the following are valid values for a single bit?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '1' },
        { id: 'c', text: '2' },
        { id: 'd', text: '10' }
      ],
      correctAnswers: ['a', 'b'],
      explanation: 'A bit can only represent two values: 0 or 1. Values like 2 or 10 require multiple bits.'
    },
    {
      text: 'How many different values can be represented with a single bit?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1' },
        { id: 'b', text: '2' },
        { id: 'c', text: '8' },
        { id: 'd', text: '256' }
      ],
      correctAnswers: ['b'],
      explanation: 'A single bit can represent 2 different values: 0 and 1.'
    },
    {
      text: 'How many different values can be represented with 1 byte (8 bits)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '8' },
        { id: 'b', text: '16' },
        { id: 'c', text: '128' },
        { id: 'd', text: '256' }
      ],
      correctAnswers: ['d'],
      explanation: 'With n bits, you can represent 2^n values. 2^8 = 256 different values (0-255).'
    },
    {
      text: 'What is the formula to calculate how many values can be represented with n bits?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'n × 2' },
        { id: 'b', text: '2^n (2 to the power of n)' },
        { id: 'c', text: 'n^2 (n squared)' },
        { id: 'd', text: 'n + 2' }
      ],
      correctAnswers: ['b'],
      explanation: 'The number of values that can be represented with n bits is 2^n (2 raised to the power of n).'
    },
    {
      text: 'Which unit is larger?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Bit' },
        { id: 'b', text: 'Byte' },
        { id: 'c', text: 'They are the same size' },
        { id: 'd', text: 'It depends on the computer' }
      ],
      correctAnswers: ['b'],
      explanation: 'A byte is larger because it contains 8 bits.'
    },
    {
      text: 'How many bits are in 3 bytes?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '11' },
        { id: 'c', text: '24' },
        { id: 'd', text: '32' }
      ],
      correctAnswers: ['c'],
      explanation: '3 bytes × 8 bits per byte = 24 bits.'
    },
    {
      text: 'What does KB stand for in computing?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Kilo-bit' },
        { id: 'b', text: 'Kilobyte' },
        { id: 'c', text: 'Keyboard' },
        { id: 'd', text: 'Key binary' }
      ],
      correctAnswers: ['b'],
      explanation: 'KB stands for Kilobyte, which is approximately 1,000 bytes (or exactly 1,024 bytes in binary).'
    },
    {
      text: 'Approximately how many bytes are in 1 Megabyte (MB)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1,000 bytes' },
        { id: 'b', text: '10,000 bytes' },
        { id: 'c', text: '1,000,000 bytes' },
        { id: 'd', text: '1,000,000,000 bytes' }
      ],
      correctAnswers: ['c'],
      explanation: '1 Megabyte is approximately 1 million bytes (1,000,000 or more precisely 1,048,576 bytes).'
    },
    {
      text: 'Put these storage units in order from smallest to largest:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Byte, Bit, Kilobyte, Megabyte' },
        { id: 'b', text: 'Bit, Byte, Kilobyte, Megabyte' },
        { id: 'c', text: 'Kilobyte, Megabyte, Bit, Byte' },
        { id: 'd', text: 'Megabyte, Kilobyte, Byte, Bit' }
      ],
      correctAnswers: ['b'],
      explanation: 'From smallest to largest: Bit < Byte < Kilobyte < Megabyte < Gigabyte < Terabyte.'
    },
    {
      text: 'Why do computers use bits (0s and 1s) to represent data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Because 0 and 1 are the only numbers computers understand' },
        { id: 'b', text: 'Because electronic circuits can easily distinguish between two states (on/off)' },
        { id: 'c', text: 'Because binary is faster than decimal' },
        { id: 'd', text: 'Because there are only two types of data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Electronic circuits can reliably distinguish between two states (high/low voltage, on/off), making binary the most practical system.'
    },
    {
      text: 'How many different values can be represented with 4 bits?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '8' },
        { id: 'c', text: '16' },
        { id: 'd', text: '32' }
      ],
      correctAnswers: ['c'],
      explanation: '2^4 = 16 different values can be represented with 4 bits.'
    },
    {
      text: 'A file is 2 KB in size. How many bytes is this?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2 bytes' },
        { id: 'b', text: '200 bytes' },
        { id: 'c', text: '2,000 bytes (approximately)' },
        { id: 'd', text: '20,000 bytes' }
      ],
      correctAnswers: ['c'],
      explanation: '2 KB = 2 × 1,000 bytes = approximately 2,000 bytes (or exactly 2,048 bytes).'
    },
    {
      text: 'Which of the following could NOT be represented by a single bit?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'True or False' },
        { id: 'b', text: 'Yes or No' },
        { id: 'c', text: 'On or Off' },
        { id: 'd', text: 'Red, Green, or Blue' }
      ],
      correctAnswers: ['d'],
      explanation: 'A bit can only represent 2 values. Red, Green, or Blue has 3 options, requiring at least 2 bits.'
    },
    {
      text: 'How many bits would you need to represent 100 different values?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '6 bits' },
        { id: 'b', text: '7 bits' },
        { id: 'c', text: '8 bits' },
        { id: 'd', text: '100 bits' }
      ],
      correctAnswers: ['b'],
      explanation: '6 bits = 64 values (not enough). 7 bits = 128 values (enough for 100). You need 7 bits.'
    },
    {
      text: 'What is a nibble in computing?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2 bits' },
        { id: 'b', text: '4 bits' },
        { id: 'c', text: '16 bits' },
        { id: 'd', text: 'Half a bit' }
      ],
      correctAnswers: ['b'],
      explanation: 'A nibble is 4 bits, which is half of a byte.'
    },
    {
      text: 'A video game character can face 8 different directions. What is the minimum number of bits needed to represent all directions?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2 bits' },
        { id: 'b', text: '3 bits' },
        { id: 'c', text: '4 bits' },
        { id: 'd', text: '8 bits' }
      ],
      correctAnswers: ['b'],
      explanation: '2^3 = 8 values. Three bits can represent exactly 8 different directions.'
    },
    {
      text: 'Which storage size is equivalent to 1,024 Megabytes?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1 Kilobyte' },
        { id: 'b', text: '1 Gigabyte' },
        { id: 'c', text: '1 Terabyte' },
        { id: 'd', text: '1 Petabyte' }
      ],
      correctAnswers: ['b'],
      explanation: '1,024 Megabytes = 1 Gigabyte (GB).'
    },
    {
      text: 'If you have 2 bits, which values can you represent?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: '00' },
        { id: 'b', text: '01' },
        { id: 'c', text: '10' },
        { id: 'd', text: '11' }
      ],
      correctAnswers: ['a', 'b', 'c', 'd'],
      explanation: 'With 2 bits, you can represent 4 values: 00, 01, 10, and 11.'
    },
    {
      text: 'A smartphone app stores user preferences using bits. If there are 5 yes/no preferences, how many bits are needed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2 bits' },
        { id: 'b', text: '5 bits' },
        { id: 'c', text: '10 bits' },
        { id: 'd', text: '32 bits' }
      ],
      correctAnswers: ['b'],
      explanation: 'Each yes/no preference needs 1 bit. 5 preferences need 5 bits.'
    },
    {
      text: 'What is the relationship between bits and bytes?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1 bit = 8 bytes' },
        { id: 'b', text: '1 byte = 8 bits' },
        { id: 'c', text: '1 bit = 1 byte' },
        { id: 'd', text: '1 byte = 2 bits' }
      ],
      correctAnswers: ['b'],
      explanation: '1 byte equals 8 bits. This is a fundamental relationship in computing.'
    },
    {
      text: 'How many bytes would be needed to store 32 bits of data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2 bytes' },
        { id: 'b', text: '4 bytes' },
        { id: 'c', text: '8 bytes' },
        { id: 'd', text: '32 bytes' }
      ],
      correctAnswers: ['b'],
      explanation: '32 bits ÷ 8 bits per byte = 4 bytes.'
    },
    {
      text: 'Why is understanding bits and bytes important for programmers?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It helps them write faster code' },
        { id: 'b', text: 'It helps understand storage requirements and data limitations' },
        { id: 'c', text: 'It is only important for hardware engineers' },
        { id: 'd', text: 'It is not important for modern programming' }
      ],
      correctAnswers: ['b'],
      explanation: 'Understanding bits and bytes helps programmers make informed decisions about data types, storage, and system limitations.'
    },
    {
      text: 'A simple true/false quiz has 10 questions. What is the minimum number of bits needed to store all answers?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4 bits' },
        { id: 'b', text: '10 bits' },
        { id: 'c', text: '20 bits' },
        { id: 'd', text: '100 bits' }
      ],
      correctAnswers: ['b'],
      explanation: 'Each true/false answer requires 1 bit. 10 questions × 1 bit = 10 bits minimum.'
    }
  ],

  'di-2-binary-numbers': [
    {
      text: 'What is the decimal equivalent of the binary number 101?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '5' },
        { id: 'c', text: '6' },
        { id: 'd', text: '101' }
      ],
      correctAnswers: ['b'],
      explanation: '101 in binary = 1×4 + 0×2 + 1×1 = 4 + 0 + 1 = 5 in decimal.'
    },
    {
      text: 'What is the binary representation of the decimal number 6?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '101' },
        { id: 'b', text: '110' },
        { id: 'c', text: '011' },
        { id: 'd', text: '111' }
      ],
      correctAnswers: ['b'],
      explanation: '6 = 4 + 2 = 1×4 + 1×2 + 0×1 = 110 in binary.'
    },
    {
      text: 'In binary, what are the place values from right to left for the first 4 positions?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1, 2, 3, 4' },
        { id: 'b', text: '1, 2, 4, 8' },
        { id: 'c', text: '2, 4, 6, 8' },
        { id: 'd', text: '1, 10, 100, 1000' }
      ],
      correctAnswers: ['b'],
      explanation: 'Binary place values are powers of 2: 2^0=1, 2^1=2, 2^2=4, 2^3=8.'
    },
    {
      text: 'What is the decimal equivalent of binary 1111?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '11' },
        { id: 'b', text: '14' },
        { id: 'c', text: '15' },
        { id: 'd', text: '16' }
      ],
      correctAnswers: ['c'],
      explanation: '1111 = 8 + 4 + 2 + 1 = 15.'
    },
    {
      text: 'What is the binary representation of decimal 10?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1010' },
        { id: 'b', text: '1001' },
        { id: 'c', text: '1100' },
        { id: 'd', text: '10' }
      ],
      correctAnswers: ['a'],
      explanation: '10 = 8 + 2 = 1×8 + 0×4 + 1×2 + 0×1 = 1010 in binary.'
    },
    {
      text: 'What is the decimal value of binary 10000?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '8' },
        { id: 'b', text: '10' },
        { id: 'c', text: '16' },
        { id: 'd', text: '32' }
      ],
      correctAnswers: ['c'],
      explanation: '10000 in binary = 1×16 = 16 in decimal (2^4).'
    },
    {
      text: 'What is 11 + 1 in binary?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '12' },
        { id: 'b', text: '100' },
        { id: 'c', text: '101' },
        { id: 'd', text: '110' }
      ],
      correctAnswers: ['b'],
      explanation: '11 (decimal 3) + 1 = 100 (decimal 4). In binary, 1+1=10 (carry the 1).'
    },
    {
      text: 'What is the binary representation of decimal 1?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '1' },
        { id: 'c', text: '01' },
        { id: 'd', text: '10' }
      ],
      correctAnswers: ['b'],
      explanation: 'The decimal number 1 is simply 1 in binary.'
    },
    {
      text: 'What decimal number does the binary 1000 represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '8' },
        { id: 'c', text: '16' },
        { id: 'd', text: '1000' }
      ],
      correctAnswers: ['b'],
      explanation: '1000 in binary = 1×8 + 0×4 + 0×2 + 0×1 = 8.'
    },
    {
      text: 'What is the binary representation of decimal 15?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1110' },
        { id: 'b', text: '1111' },
        { id: 'c', text: '10000' },
        { id: 'd', text: '1101' }
      ],
      correctAnswers: ['b'],
      explanation: '15 = 8 + 4 + 2 + 1 = 1111 in binary.'
    },
    {
      text: 'In the binary number 1101, what is the place value of the leftmost 1?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1' },
        { id: 'b', text: '4' },
        { id: 'c', text: '8' },
        { id: 'd', text: '16' }
      ],
      correctAnswers: ['c'],
      explanation: 'In 1101, positions from right are: 1s, 2s, 4s, 8s. The leftmost 1 is in the 8s place.'
    },
    {
      text: 'What is decimal 7 in binary?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '101' },
        { id: 'b', text: '110' },
        { id: 'c', text: '111' },
        { id: 'd', text: '1000' }
      ],
      correctAnswers: ['c'],
      explanation: '7 = 4 + 2 + 1 = 111 in binary.'
    },
    {
      text: 'What happens when you add 1 to binary 111?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '112' },
        { id: 'b', text: '1000' },
        { id: 'c', text: '1111' },
        { id: 'd', text: '1001' }
      ],
      correctAnswers: ['b'],
      explanation: '111 (decimal 7) + 1 = 1000 (decimal 8). All bits carry over.'
    },
    {
      text: 'What is the decimal equivalent of binary 1100?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '11' },
        { id: 'c', text: '12' },
        { id: 'd', text: '13' }
      ],
      correctAnswers: ['c'],
      explanation: '1100 = 1×8 + 1×4 + 0×2 + 0×1 = 8 + 4 = 12.'
    },
    {
      text: 'How do you convert decimal to binary?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Divide by 10 repeatedly' },
        { id: 'b', text: 'Divide by 2 repeatedly and record remainders' },
        { id: 'c', text: 'Multiply by 2 repeatedly' },
        { id: 'd', text: 'Subtract powers of 10' }
      ],
      correctAnswers: ['b'],
      explanation: 'To convert decimal to binary, repeatedly divide by 2 and record the remainders, reading them bottom to top.'
    },
    {
      text: 'What is the decimal value of binary 10101?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '17' },
        { id: 'b', text: '19' },
        { id: 'c', text: '21' },
        { id: 'd', text: '23' }
      ],
      correctAnswers: ['c'],
      explanation: '10101 = 16 + 0 + 4 + 0 + 1 = 21.'
    },
    {
      text: 'What is binary 100 + binary 100?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '200' },
        { id: 'b', text: '1000' },
        { id: 'c', text: '110' },
        { id: 'd', text: '1100' }
      ],
      correctAnswers: ['b'],
      explanation: '100 (decimal 4) + 100 (decimal 4) = 1000 (decimal 8).'
    },
    {
      text: 'What is the maximum decimal value that can be stored in 4 bits?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '8' },
        { id: 'c', text: '15' },
        { id: 'd', text: '16' }
      ],
      correctAnswers: ['c'],
      explanation: 'With 4 bits, the maximum is 1111 = 15. (16 values: 0-15)'
    },
    {
      text: 'What decimal number does binary 11111111 represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '127' },
        { id: 'b', text: '128' },
        { id: 'c', text: '255' },
        { id: 'd', text: '256' }
      ],
      correctAnswers: ['c'],
      explanation: '11111111 = 128+64+32+16+8+4+2+1 = 255.'
    },
    {
      text: 'What is the binary representation of decimal 20?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '10100' },
        { id: 'b', text: '10010' },
        { id: 'c', text: '11000' },
        { id: 'd', text: '10110' }
      ],
      correctAnswers: ['a'],
      explanation: '20 = 16 + 4 = 10100 in binary.'
    },
    {
      text: 'In binary, what is 1010 - 101?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '101' },
        { id: 'b', text: '100' },
        { id: 'c', text: '110' },
        { id: 'd', text: '1000' }
      ],
      correctAnswers: ['a'],
      explanation: '1010 (decimal 10) - 101 (decimal 5) = 101 (decimal 5).'
    },
    {
      text: 'What is the smallest 5-bit binary number (unsigned)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '00000' },
        { id: 'b', text: '00001' },
        { id: 'c', text: '10000' },
        { id: 'd', text: '11111' }
      ],
      correctAnswers: ['a'],
      explanation: 'The smallest 5-bit unsigned binary number is 00000, which equals 0 in decimal.'
    },
    {
      text: 'What powers of 2 sum to make decimal 25? (Select all that apply)',
      type: 'multiple_select',
      options: [
        { id: 'a', text: '16' },
        { id: 'b', text: '8' },
        { id: 'c', text: '4' },
        { id: 'd', text: '1' }
      ],
      correctAnswers: ['a', 'b', 'd'],
      explanation: '25 = 16 + 8 + 1 = 11001 in binary.'
    },
    {
      text: 'What is binary 11 multiplied by binary 10?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '101' },
        { id: 'b', text: '110' },
        { id: 'c', text: '111' },
        { id: 'd', text: '1000' }
      ],
      correctAnswers: ['b'],
      explanation: '11 (decimal 3) × 10 (decimal 2) = 110 (decimal 6).'
    },
    {
      text: 'What decimal value does binary 100000 represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '16' },
        { id: 'b', text: '32' },
        { id: 'c', text: '64' },
        { id: 'd', text: '100' }
      ],
      correctAnswers: ['b'],
      explanation: '100000 = 2^5 = 32 in decimal.'
    }
  ]
};

async function updateTopicsWithQuestions() {
  console.log('Adding questions to Unit 1 Topics 1.1-1.2...\n');

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
