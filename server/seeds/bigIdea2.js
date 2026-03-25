/**
 * Seed script for Big Idea 2: Data
 * Run with: node server/seeds/bigIdea2.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Use the same Firebase setup as the server
const { db } = require('../firebase');

// Verify we're using the correct project
if (process.env.FIREBASE_PROJECT_ID !== 'ap-csp-mastery') {
  console.error(`ERROR: Wrong project! Expected 'ap-csp-mastery' but got '${process.env.FIREBASE_PROJECT_ID}'`);
  process.exit(1);
}

console.log(`Using project: ${process.env.FIREBASE_PROJECT_ID}`);

// Big Idea 2 structure
const bigIdea2 = {
  id: 'big-idea-2',
  name: 'Big Idea 2: Data',
  shortName: 'Data',
  description: 'Data is central to computing. Understanding how data is represented, stored, and manipulated is essential for computational thinking.',
  order: 2,
  color: '#10B981' // Green
};

// Sub-topics for Big Idea 2
const topics = [
  {
    id: 'dat-2-1',
    bigIdeaId: 'big-idea-2',
    name: '2.1 Binary Numbers',
    description: 'All digital data is represented using binary (base 2) number systems.',
    order: 1,
    learningObjectives: [
      'DAT-1.A: Explain how data can be represented using bits.',
      'DAT-1.B: Explain the consequences of using bits to represent data.',
      'DAT-1.C: For binary numbers, convert between binary and decimal representations.'
    ]
  },
  {
    id: 'dat-2-2',
    bigIdeaId: 'big-idea-2',
    name: '2.2 Data Compression',
    description: 'Data compression reduces the size of data for storage and transmission.',
    order: 2,
    learningObjectives: [
      'DAT-1.D: Compare data compression algorithms to determine which is best in a particular context.'
    ]
  },
  {
    id: 'dat-2-3',
    bigIdeaId: 'big-idea-2',
    name: '2.3 Extracting Information from Data',
    description: 'Information is extracted from data through analysis and visualization.',
    order: 3,
    learningObjectives: [
      'DAT-2.A: Describe what information can be extracted from data.',
      'DAT-2.B: Describe what information can be extracted from metadata.',
      'DAT-2.C: Identify the challenges associated with processing data.',
      'DAT-2.D: Extract information from data using a program.'
    ]
  },
  {
    id: 'dat-2-4',
    bigIdeaId: 'big-idea-2',
    name: '2.4 Using Programs with Data',
    description: 'Programs can be used to process, transform, and analyze data.',
    order: 4,
    learningObjectives: [
      'DAT-2.E: Explain how programs can be used to gain insight and knowledge from data.'
    ]
  }
];

// Questions for each topic (25 questions each)
const questionsData = {
  'dat-2-1': [
    // Binary Numbers Questions
    {
      text: 'What is the decimal equivalent of the binary number 1010?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '8' },
        { id: 'b', text: '10' },
        { id: 'c', text: '12' },
        { id: 'd', text: '5' }
      ],
      correctAnswers: ['b'],
      explanation: '1010 in binary = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 0 + 2 + 0 = 10 in decimal.'
    },
    {
      text: 'What is the binary representation of the decimal number 13?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1101' },
        { id: 'b', text: '1011' },
        { id: 'c', text: '1110' },
        { id: 'd', text: '1100' }
      ],
      correctAnswers: ['a'],
      explanation: '13 = 8 + 4 + 1 = 1×8 + 1×4 + 0×2 + 1×1 = 1101 in binary.'
    },
    {
      text: 'A bit can represent how many different values?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1' },
        { id: 'b', text: '2' },
        { id: 'c', text: '8' },
        { id: 'd', text: '10' }
      ],
      correctAnswers: ['b'],
      explanation: 'A single bit can be either 0 or 1, representing 2 different values.'
    },
    {
      text: 'How many different values can be represented with 8 bits (1 byte)?',
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
      text: 'What is an overflow error?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When a program runs too slowly' },
        { id: 'b', text: 'When a number is too large to be represented with the available bits' },
        { id: 'c', text: 'When data is compressed too much' },
        { id: 'd', text: 'When a file is too large to save' }
      ],
      correctAnswers: ['b'],
      explanation: 'Overflow occurs when a calculation produces a value that exceeds the maximum that can be stored in the available number of bits.'
    },
    {
      text: 'Which of the following can be represented using binary?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Numbers' },
        { id: 'b', text: 'Text characters' },
        { id: 'c', text: 'Images' },
        { id: 'd', text: 'Sound' }
      ],
      correctAnswers: ['a', 'b', 'c', 'd'],
      explanation: 'All digital data - numbers, text, images, sound, and video - is ultimately represented in binary.'
    },
    {
      text: 'What is the decimal value of the binary number 11111111?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '128' },
        { id: 'b', text: '255' },
        { id: 'c', text: '256' },
        { id: 'd', text: '127' }
      ],
      correctAnswers: ['b'],
      explanation: '11111111 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255.'
    },
    {
      text: 'Why do computers use binary instead of decimal?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Binary is faster to calculate' },
        { id: 'b', text: 'Electronic circuits can easily represent two states (on/off)' },
        { id: 'c', text: 'Binary uses less storage' },
        { id: 'd', text: 'Humans prefer binary' }
      ],
      correctAnswers: ['b'],
      explanation: 'Electronic circuits naturally work with two states (high/low voltage, on/off), making binary the most practical system for computers.'
    },
    {
      text: 'What is the binary representation of the decimal number 7?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '101' },
        { id: 'b', text: '110' },
        { id: 'c', text: '111' },
        { id: 'd', text: '1000' }
      ],
      correctAnswers: ['c'],
      explanation: '7 = 4 + 2 + 1 = 1×4 + 1×2 + 1×1 = 111 in binary.'
    },
    {
      text: 'How many bits are needed to represent the decimal number 100?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '6 bits' },
        { id: 'b', text: '7 bits' },
        { id: 'c', text: '8 bits' },
        { id: 'd', text: '10 bits' }
      ],
      correctAnswers: ['b'],
      explanation: '7 bits can represent values 0-127 (2^7 = 128). 6 bits only goes to 63, so 7 bits are needed for 100.'
    },
    {
      text: 'What happens when you add 1 to the binary number 1111?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1112' },
        { id: 'b', text: '10000' },
        { id: 'c', text: '2000' },
        { id: 'd', text: '1110' }
      ],
      correctAnswers: ['b'],
      explanation: '1111 + 1 = 10000 in binary (like how 9999 + 1 = 10000 in decimal). 1111 is 15, and 15 + 1 = 16 = 10000 in binary.'
    },
    {
      text: 'A pixel\'s color is often represented using 24 bits. This allows for how many different colors?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '256 colors' },
        { id: 'b', text: '65,536 colors' },
        { id: 'c', text: 'About 16.7 million colors' },
        { id: 'd', text: '24 colors' }
      ],
      correctAnswers: ['c'],
      explanation: '2^24 = 16,777,216, which is approximately 16.7 million different colors.'
    },
    {
      text: 'In the RGB color model, each color channel uses 8 bits. What is the maximum value for one color channel?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '128' },
        { id: 'b', text: '255' },
        { id: 'c', text: '256' },
        { id: 'd', text: '512' }
      ],
      correctAnswers: ['b'],
      explanation: 'With 8 bits, values range from 0 to 255 (256 total values, but maximum single value is 255).'
    },
    {
      text: 'What is the purpose of ASCII?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To compress images' },
        { id: 'b', text: 'To represent text characters as numbers' },
        { id: 'c', text: 'To encrypt data' },
        { id: 'd', text: 'To speed up calculations' }
      ],
      correctAnswers: ['b'],
      explanation: 'ASCII (American Standard Code for Information Interchange) assigns numeric values to text characters so they can be stored as binary.'
    },
    {
      text: 'The decimal number 32 in binary is:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '11111' },
        { id: 'b', text: '100000' },
        { id: 'c', text: '10000' },
        { id: 'd', text: '32' }
      ],
      correctAnswers: ['b'],
      explanation: '32 is 2^5, so it\'s represented as 100000 in binary (1 followed by five 0s).'
    },
    {
      text: 'What is a consequence of using a fixed number of bits to represent numbers?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'All numbers can be represented exactly' },
        { id: 'b', text: 'There is a limit to how large a number can be represented' },
        { id: 'c', text: 'Numbers are stored more efficiently' },
        { id: 'd', text: 'Calculations are always accurate' }
      ],
      correctAnswers: ['b'],
      explanation: 'A fixed number of bits limits the range of values that can be represented, leading to potential overflow errors.'
    },
    {
      text: 'How are negative numbers typically represented in computers?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'With a minus sign in front' },
        { id: 'b', text: 'Using two\'s complement notation' },
        { id: 'c', text: 'They cannot be represented' },
        { id: 'd', text: 'Using decimal notation' }
      ],
      correctAnswers: ['b'],
      explanation: 'Two\'s complement is the most common method for representing negative numbers in binary.'
    },
    {
      text: 'What is the decimal equivalent of binary 10000?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '8' },
        { id: 'b', text: '10' },
        { id: 'c', text: '16' },
        { id: 'd', text: '32' }
      ],
      correctAnswers: ['c'],
      explanation: '10000 in binary = 1×16 + 0×8 + 0×4 + 0×2 + 0×1 = 16 in decimal.'
    },
    {
      text: 'What is a roundoff error?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When a number is rounded to the nearest integer' },
        { id: 'b', text: 'An error that occurs because floating-point numbers cannot be represented exactly' },
        { id: 'c', text: 'When a calculation takes too long' },
        { id: 'd', text: 'When binary is converted to decimal incorrectly' }
      ],
      correctAnswers: ['b'],
      explanation: 'Roundoff errors occur because some decimal numbers (like 0.1) cannot be represented exactly in binary floating-point format.'
    },
    {
      text: 'Unicode was created to address what limitation of ASCII?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'ASCII was too slow' },
        { id: 'b', text: 'ASCII could only represent 128 characters, not enough for all world languages' },
        { id: 'c', text: 'ASCII used too much storage' },
        { id: 'd', text: 'ASCII could not represent numbers' }
      ],
      correctAnswers: ['b'],
      explanation: 'ASCII only supports 128 characters. Unicode was created to represent characters from all writing systems worldwide.'
    },
    {
      text: 'Converting binary 1100 to decimal: what place value does the leftmost 1 represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '8' },
        { id: 'c', text: '16' },
        { id: 'd', text: '1' }
      ],
      correctAnswers: ['b'],
      explanation: 'In 1100, the leftmost 1 is in the 8s place (2^3 = 8). The places from right to left are: 1, 2, 4, 8.'
    },
    {
      text: 'How many bits are in 2 bytes?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '8' },
        { id: 'c', text: '16' },
        { id: 'd', text: '32' }
      ],
      correctAnswers: ['c'],
      explanation: '1 byte = 8 bits, so 2 bytes = 16 bits.'
    },
    {
      text: 'What is the largest decimal number that can be represented with 4 bits?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '8' },
        { id: 'c', text: '15' },
        { id: 'd', text: '16' }
      ],
      correctAnswers: ['c'],
      explanation: '4 bits can represent 2^4 = 16 values (0-15). The maximum value is 1111 = 15.'
    },
    {
      text: 'Which binary number represents the decimal value 5?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '100' },
        { id: 'b', text: '101' },
        { id: 'c', text: '110' },
        { id: 'd', text: '011' }
      ],
      correctAnswers: ['b'],
      explanation: '5 = 4 + 1 = 1×4 + 0×2 + 1×1 = 101 in binary.'
    },
    {
      text: 'Analog data must be converted to digital through a process called:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Compression' },
        { id: 'b', text: 'Sampling and quantization' },
        { id: 'c', text: 'Encryption' },
        { id: 'd', text: 'Compilation' }
      ],
      correctAnswers: ['b'],
      explanation: 'Analog signals are converted to digital through sampling (measuring at intervals) and quantization (rounding to discrete values).'
    }
  ],
  'dat-2-2': [
    // Data Compression Questions
    {
      text: 'What is the main purpose of data compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To make data more secure' },
        { id: 'b', text: 'To reduce the amount of storage space or transmission time needed' },
        { id: 'c', text: 'To convert data to binary' },
        { id: 'd', text: 'To organize data in folders' }
      ],
      correctAnswers: ['b'],
      explanation: 'Compression reduces file size, saving storage space and reducing transmission time.'
    },
    {
      text: 'What is the difference between lossless and lossy compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossless is faster than lossy' },
        { id: 'b', text: 'Lossless preserves all original data; lossy permanently removes some data' },
        { id: 'c', text: 'Lossy compression is always better' },
        { id: 'd', text: 'There is no difference' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossless compression allows exact reconstruction of original data. Lossy compression achieves smaller sizes by discarding some information.'
    },
    {
      text: 'Which type of compression would be best for a text document?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossy compression' },
        { id: 'b', text: 'Lossless compression' },
        { id: 'c', text: 'No compression is needed' },
        { id: 'd', text: 'Either type works equally well' }
      ],
      correctAnswers: ['b'],
      explanation: 'Text documents require lossless compression because losing any characters would change the meaning.'
    },
    {
      text: 'JPEG is an example of which type of compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossless compression' },
        { id: 'b', text: 'Lossy compression' },
        { id: 'c', text: 'No compression' },
        { id: 'd', text: 'Text compression' }
      ],
      correctAnswers: ['b'],
      explanation: 'JPEG uses lossy compression, which is why image quality decreases when saved multiple times.'
    },
    {
      text: 'Which file format uses lossless compression for images?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'JPEG' },
        { id: 'b', text: 'MP3' },
        { id: 'c', text: 'PNG' },
        { id: 'd', text: 'MP4' }
      ],
      correctAnswers: ['c'],
      explanation: 'PNG (Portable Network Graphics) uses lossless compression, preserving all image data.'
    },
    {
      text: 'MP3 audio files use lossy compression. What is a consequence of this?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The file cannot be played' },
        { id: 'b', text: 'Some audio quality is lost compared to the original' },
        { id: 'c', text: 'The file becomes larger' },
        { id: 'd', text: 'The audio plays faster' }
      ],
      correctAnswers: ['b'],
      explanation: 'MP3 compression removes audio frequencies that are less perceptible to humans, resulting in some quality loss.'
    },
    {
      text: 'Run-length encoding (RLE) is most effective when:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Data has many unique values' },
        { id: 'b', text: 'Data has long sequences of repeated values' },
        { id: 'c', text: 'Data is already compressed' },
        { id: 'd', text: 'Data is encrypted' }
      ],
      correctAnswers: ['b'],
      explanation: 'RLE works by encoding repeated consecutive values as a single value and count, so it works best with repeated patterns.'
    },
    {
      text: 'Which would benefit MOST from lossy compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A bank\'s transaction records' },
        { id: 'b', text: 'A photo being shared on social media' },
        { id: 'c', text: 'A software program\'s source code' },
        { id: 'd', text: 'A legal document' }
      ],
      correctAnswers: ['b'],
      explanation: 'Photos for social media can tolerate some quality loss in exchange for smaller file sizes. Critical documents need lossless compression.'
    },
    {
      text: 'What is a disadvantage of lossy compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Files become too large' },
        { id: 'b', text: 'Original data cannot be perfectly recovered' },
        { id: 'c', text: 'It is too slow' },
        { id: 'd', text: 'It only works on text' }
      ],
      correctAnswers: ['b'],
      explanation: 'Once data is compressed with lossy compression, the removed information is gone forever.'
    },
    {
      text: 'ZIP files typically use which type of compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossy compression' },
        { id: 'b', text: 'Lossless compression' },
        { id: 'c', text: 'No compression' },
        { id: 'd', text: 'Audio compression only' }
      ],
      correctAnswers: ['b'],
      explanation: 'ZIP files use lossless compression algorithms, allowing exact recovery of all original files.'
    },
    {
      text: 'Why might a photographer choose to save images in RAW format instead of JPEG?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'RAW files are smaller' },
        { id: 'b', text: 'RAW preserves all original image data without compression loss' },
        { id: 'c', text: 'RAW is easier to share online' },
        { id: 'd', text: 'RAW files load faster' }
      ],
      correctAnswers: ['b'],
      explanation: 'RAW files contain unprocessed sensor data, preserving maximum quality for professional editing.'
    },
    {
      text: 'Which statement about compression is true?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossless compression always produces smaller files than lossy' },
        { id: 'b', text: 'Lossy compression typically achieves higher compression ratios than lossless' },
        { id: 'c', text: 'All compression is lossless' },
        { id: 'd', text: 'Compressed files cannot be transmitted over the internet' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossy compression can achieve smaller file sizes because it discards data, while lossless must preserve everything.'
    },
    {
      text: 'Video streaming services often use lossy compression because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Video quality doesn\'t matter' },
        { id: 'b', text: 'Smaller files can be transmitted faster over the internet' },
        { id: 'c', text: 'Lossless video doesn\'t exist' },
        { id: 'd', text: 'It\'s required by law' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossy compression reduces video file sizes significantly, enabling smoother streaming over limited bandwidth.'
    },
    {
      text: 'If an image uses only 4 colors, what compression technique would be particularly effective?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using a smaller color palette (indexed color)' },
        { id: 'b', text: 'Converting to video' },
        { id: 'c', text: 'Adding more colors' },
        { id: 'd', text: 'Compression wouldn\'t help' }
      ],
      correctAnswers: ['a'],
      explanation: 'Using an indexed color palette with only the colors needed reduces the bits required per pixel.'
    },
    {
      text: 'The compression ratio is:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The speed of compression' },
        { id: 'b', text: 'The relationship between original size and compressed size' },
        { id: 'c', text: 'The number of colors in an image' },
        { id: 'd', text: 'The quality of the compressed file' }
      ],
      correctAnswers: ['b'],
      explanation: 'Compression ratio compares the original file size to the compressed size (e.g., 10:1 means compressed to 1/10 the original size).'
    },
    {
      text: 'Which is an example of lossless audio format?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'MP3' },
        { id: 'b', text: 'AAC' },
        { id: 'c', text: 'FLAC' },
        { id: 'd', text: 'WMA' }
      ],
      correctAnswers: ['c'],
      explanation: 'FLAC (Free Lossless Audio Codec) compresses audio without losing any data.'
    },
    {
      text: 'A GIF image is limited to how many colors?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '16 colors' },
        { id: 'b', text: '256 colors' },
        { id: 'c', text: '16 million colors' },
        { id: 'd', text: 'Unlimited colors' }
      ],
      correctAnswers: ['b'],
      explanation: 'GIF format uses 8-bit color, limiting images to a palette of 256 colors maximum.'
    },
    {
      text: 'When repeatedly saving a JPEG image, quality degrades because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The file gets corrupted' },
        { id: 'b', text: 'Each save applies lossy compression again, removing more data' },
        { id: 'c', text: 'The colors fade over time' },
        { id: 'd', text: 'This does not actually happen' }
      ],
      correctAnswers: ['b'],
      explanation: 'Each JPEG save recompresses the image, and lossy compression removes additional data each time.'
    },
    {
      text: 'Which scenario requires lossless compression?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Archiving important documents' },
        { id: 'b', text: 'Storing medical images for diagnosis' },
        { id: 'c', text: 'Backing up software' },
        { id: 'd', text: 'Sharing vacation photos on social media' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Documents, medical images, and software require exact preservation. Casual photos can tolerate some quality loss.'
    },
    {
      text: 'Huffman coding is a compression technique that:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Removes data permanently' },
        { id: 'b', text: 'Assigns shorter codes to more frequent values' },
        { id: 'c', text: 'Only works on video' },
        { id: 'd', text: 'Increases file size' }
      ],
      correctAnswers: ['b'],
      explanation: 'Huffman coding is a lossless technique that uses shorter codes for common values and longer codes for rare values.'
    },
    {
      text: 'What happens to metadata when a file is compressed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Metadata is always deleted' },
        { id: 'b', text: 'It depends on the compression method and settings' },
        { id: 'c', text: 'Metadata is never affected' },
        { id: 'd', text: 'Metadata doubles in size' }
      ],
      correctAnswers: ['b'],
      explanation: 'Some compression methods preserve metadata, while others may strip it to reduce file size further.'
    },
    {
      text: 'Which factor does NOT affect how much a file can be compressed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Amount of repeated patterns in the data' },
        { id: 'b', text: 'Type of compression algorithm used' },
        { id: 'c', text: 'The file\'s name' },
        { id: 'd', text: 'Whether lossy or lossless compression is used' }
      ],
      correctAnswers: ['c'],
      explanation: 'The file name does not affect compression. Content patterns, algorithm choice, and compression type all matter.'
    },
    {
      text: 'A 10 MB file is compressed to 2 MB. What is the compression ratio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2:1' },
        { id: 'b', text: '5:1' },
        { id: 'c', text: '10:1' },
        { id: 'd', text: '1:5' }
      ],
      correctAnswers: ['b'],
      explanation: '10 MB to 2 MB is a 5:1 compression ratio (original is 5 times larger than compressed).'
    },
    {
      text: 'Why can\'t random data be significantly compressed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Random data is too large' },
        { id: 'b', text: 'Compression algorithms rely on patterns, which random data lacks' },
        { id: 'c', text: 'Random data is already compressed' },
        { id: 'd', text: 'Computers cannot read random data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Compression works by finding and encoding patterns. Truly random data has no patterns to exploit.'
    },
    {
      text: 'Streaming video typically adjusts quality based on internet speed. This is called:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Static streaming' },
        { id: 'b', text: 'Adaptive bitrate streaming' },
        { id: 'c', text: 'Lossless streaming' },
        { id: 'd', text: 'Compressed downloading' }
      ],
      correctAnswers: ['b'],
      explanation: 'Adaptive bitrate streaming adjusts video quality in real-time based on available bandwidth.'
    }
  ],
  'dat-2-3': [
    // Extracting Information from Data Questions
    {
      text: 'What is the difference between data and information?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'They are the same thing' },
        { id: 'b', text: 'Data is raw facts; information is data that has been processed to be meaningful' },
        { id: 'c', text: 'Information is raw facts; data is processed' },
        { id: 'd', text: 'Data is only numbers; information is only text' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data consists of raw, unprocessed facts. Information is data that has been organized and interpreted to have meaning.'
    },
    {
      text: 'What is metadata?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Data that has been deleted' },
        { id: 'b', text: 'Data about data' },
        { id: 'c', text: 'Compressed data' },
        { id: 'd', text: 'Encrypted data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Metadata is information that describes other data, such as when a file was created or who created it.'
    },
    {
      text: 'Which of the following is an example of metadata for a digital photo?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'The date the photo was taken' },
        { id: 'b', text: 'The GPS location where it was taken' },
        { id: 'c', text: 'The camera model used' },
        { id: 'd', text: 'The subject of the photo (what\'s in it)' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Date, location, and camera model are automatically recorded metadata. The subject requires interpretation and is not metadata.'
    },
    {
      text: 'Data visualization helps people:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Delete unwanted data' },
        { id: 'b', text: 'Identify patterns and trends more easily' },
        { id: 'c', text: 'Compress data' },
        { id: 'd', text: 'Encrypt data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Visualizations like charts and graphs make patterns in data easier to see and understand.'
    },
    {
      text: 'What is a challenge when working with large datasets?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Large datasets are always accurate' },
        { id: 'b', text: 'Processing large datasets may require significant computational resources' },
        { id: 'c', text: 'Large datasets cannot be stored' },
        { id: 'd', text: 'Large datasets are illegal' }
      ],
      correctAnswers: ['b'],
      explanation: 'Large datasets require more storage, memory, and processing power, and may take longer to analyze.'
    },
    {
      text: 'What is data cleaning?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Deleting all data' },
        { id: 'b', text: 'Removing or correcting inaccurate, incomplete, or duplicate data' },
        { id: 'c', text: 'Compressing data files' },
        { id: 'd', text: 'Encrypting sensitive data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data cleaning involves identifying and fixing errors, removing duplicates, and handling missing values.'
    },
    {
      text: 'Why might the same dataset lead to different conclusions when analyzed by different people?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Data always gives the same results' },
        { id: 'b', text: 'Different analysis methods, assumptions, or biases can affect interpretation' },
        { id: 'c', text: 'This is impossible' },
        { id: 'd', text: 'Only computers can analyze data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Analysis choices, statistical methods used, and human biases can all influence how data is interpreted.'
    },
    {
      text: 'A correlation between two variables means:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'One variable definitely causes the other' },
        { id: 'b', text: 'There is a relationship between the variables, but not necessarily causation' },
        { id: 'c', text: 'The variables are identical' },
        { id: 'd', text: 'The data is wrong' }
      ],
      correctAnswers: ['b'],
      explanation: 'Correlation indicates a relationship but does not prove that one variable causes changes in the other.'
    },
    {
      text: 'Which of the following is a potential source of bias in data?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Survey questions that lead respondents to certain answers' },
        { id: 'b', text: 'Collecting data from only one demographic group' },
        { id: 'c', text: 'Missing or incomplete data' },
        { id: 'd', text: 'Using random sampling' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Leading questions, unrepresentative samples, and missing data introduce bias. Random sampling helps reduce bias.'
    },
    {
      text: 'What is a database?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A type of computer virus' },
        { id: 'b', text: 'An organized collection of data that can be searched and retrieved' },
        { id: 'c', text: 'A single spreadsheet' },
        { id: 'd', text: 'A programming language' }
      ],
      correctAnswers: ['b'],
      explanation: 'A database is a structured collection of data organized for efficient storage, retrieval, and management.'
    },
    {
      text: 'Filtering data means:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Deleting all data permanently' },
        { id: 'b', text: 'Selecting only data that meets certain criteria' },
        { id: 'c', text: 'Adding more data' },
        { id: 'd', text: 'Sorting data alphabetically' }
      ],
      correctAnswers: ['b'],
      explanation: 'Filtering extracts a subset of data that matches specified conditions.'
    },
    {
      text: 'What information might be extracted from analyzing traffic data from a website?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Which pages are most popular' },
        { id: 'b', text: 'Peak usage times' },
        { id: 'c', text: 'Geographic location of visitors' },
        { id: 'd', text: 'The website\'s source code' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Traffic data reveals usage patterns, popular content, and user demographics. Source code is not part of traffic data.'
    },
    {
      text: 'What is a trend in data analysis?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A random fluctuation' },
        { id: 'b', text: 'A general direction of change over time' },
        { id: 'c', text: 'A single data point' },
        { id: 'd', text: 'An error in the data' }
      ],
      correctAnswers: ['b'],
      explanation: 'A trend is a pattern showing how data changes over time, such as increasing or decreasing values.'
    },
    {
      text: 'What challenge does incomplete data present?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It makes analysis faster' },
        { id: 'b', text: 'It can lead to inaccurate conclusions' },
        { id: 'c', text: 'It has no effect on analysis' },
        { id: 'd', text: 'It improves data quality' }
      ],
      correctAnswers: ['b'],
      explanation: 'Missing data can skew results and lead to incomplete or incorrect conclusions.'
    },
    {
      text: 'What is data aggregation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Deleting duplicate data' },
        { id: 'b', text: 'Combining data from multiple sources or summarizing data' },
        { id: 'c', text: 'Encrypting data' },
        { id: 'd', text: 'Splitting data into smaller pieces' }
      ],
      correctAnswers: ['b'],
      explanation: 'Aggregation involves combining multiple pieces of data or computing summary statistics (sum, average, etc.).'
    },
    {
      text: 'Privacy concerns related to data collection include:',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Personal information being shared without consent' },
        { id: 'b', text: 'Data being used for purposes other than originally intended' },
        { id: 'c', text: 'Data breaches exposing sensitive information' },
        { id: 'd', text: 'Data being stored securely' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Privacy concerns involve unauthorized sharing, misuse, and security breaches. Secure storage is a positive practice.'
    },
    {
      text: 'What is the purpose of sorting data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To delete unwanted data' },
        { id: 'b', text: 'To arrange data in a specific order for easier analysis' },
        { id: 'c', text: 'To compress the data' },
        { id: 'd', text: 'To encrypt the data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Sorting arranges data in order (alphabetical, numerical, by date) to make it easier to find patterns.'
    },
    {
      text: 'A scatter plot is useful for showing:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Percentages of a whole' },
        { id: 'b', text: 'Relationships between two variables' },
        { id: 'c', text: 'Steps in a process' },
        { id: 'd', text: 'Organizational hierarchy' }
      ],
      correctAnswers: ['b'],
      explanation: 'Scatter plots display pairs of values to reveal potential relationships or correlations between variables.'
    },
    {
      text: 'What is an outlier in a dataset?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The most common value' },
        { id: 'b', text: 'A value significantly different from other values' },
        { id: 'c', text: 'The average value' },
        { id: 'd', text: 'A duplicate entry' }
      ],
      correctAnswers: ['b'],
      explanation: 'An outlier is a data point that differs significantly from the rest of the data, potentially indicating errors or unusual cases.'
    },
    {
      text: 'Machine learning algorithms can be used to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only play games' },
        { id: 'b', text: 'Find patterns in large datasets and make predictions' },
        { id: 'c', text: 'Replace all human jobs' },
        { id: 'd', text: 'Delete data automatically' }
      ],
      correctAnswers: ['b'],
      explanation: 'Machine learning identifies patterns in data and uses them to make predictions or classifications.'
    },
    {
      text: 'What is data mining?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Digging for data underground' },
        { id: 'b', text: 'Searching large datasets to discover patterns and relationships' },
        { id: 'c', text: 'Deleting old data' },
        { id: 'd', text: 'Creating new data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data mining uses computational techniques to discover useful patterns in large datasets.'
    },
    {
      text: 'When combining data from multiple sources, what challenge might arise?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Data becomes more accurate' },
        { id: 'b', text: 'Inconsistent formats or definitions may cause problems' },
        { id: 'c', text: 'No challenges arise' },
        { id: 'd', text: 'Data automatically merges perfectly' }
      ],
      correctAnswers: ['b'],
      explanation: 'Different sources may use different formats, units, or definitions, requiring careful data reconciliation.'
    },
    {
      text: 'What does it mean to transform data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Delete all the data' },
        { id: 'b', text: 'Convert data from one format or structure to another' },
        { id: 'c', text: 'Store data on a different computer' },
        { id: 'd', text: 'Print the data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data transformation involves changing data format, structure, or values to make it suitable for analysis.'
    },
    {
      text: 'Why is sample size important when drawing conclusions from data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Smaller samples always give better results' },
        { id: 'b', text: 'Larger samples generally provide more reliable results' },
        { id: 'c', text: 'Sample size doesn\'t matter' },
        { id: 'd', text: 'Only odd-numbered samples are valid' }
      ],
      correctAnswers: ['b'],
      explanation: 'Larger samples are more likely to be representative of the population and reduce the effect of random variation.'
    },
    {
      text: 'What is a limitation of using averages to summarize data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Averages are always accurate' },
        { id: 'b', text: 'Averages can be skewed by outliers and don\'t show variation' },
        { id: 'c', text: 'Averages cannot be calculated' },
        { id: 'd', text: 'Averages only work with text data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Extreme values (outliers) can significantly affect the average, and averages don\'t show the spread of data.'
    }
  ],
  'dat-2-4': [
    // Using Programs with Data Questions
    {
      text: 'What is a major advantage of using programs to analyze data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Programs always make correct decisions' },
        { id: 'b', text: 'Programs can process large amounts of data faster than humans' },
        { id: 'c', text: 'Programs don\'t need electricity' },
        { id: 'd', text: 'Programs create data from nothing' }
      ],
      correctAnswers: ['b'],
      explanation: 'Computers can analyze millions of data points in seconds, far exceeding human capability.'
    },
    {
      text: 'A program that recommends movies based on viewing history uses:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Random selection' },
        { id: 'b', text: 'Data analysis and pattern matching' },
        { id: 'c', text: 'No data at all' },
        { id: 'd', text: 'Only new releases' }
      ],
      correctAnswers: ['b'],
      explanation: 'Recommendation systems analyze user data and preferences to suggest relevant content.'
    },
    {
      text: 'What can programs do with collected data?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Identify patterns and trends' },
        { id: 'b', text: 'Make predictions' },
        { id: 'c', text: 'Generate visualizations' },
        { id: 'd', text: 'Automatically solve all problems' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Programs can find patterns, predict outcomes, and create visualizations. They cannot automatically solve all problems.'
    },
    {
      text: 'A fitness app tracks steps and calories. This data can be used to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only count steps' },
        { id: 'b', text: 'Provide insights about activity patterns and health trends' },
        { id: 'c', text: 'Nothing useful' },
        { id: 'd', text: 'Predict the weather' }
      ],
      correctAnswers: ['b'],
      explanation: 'Fitness data can reveal activity patterns, progress toward goals, and long-term health trends.'
    },
    {
      text: 'What is a potential risk of programs making automated decisions based on data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Decisions are always perfect' },
        { id: 'b', text: 'Biased data can lead to biased or unfair decisions' },
        { id: 'c', text: 'There are no risks' },
        { id: 'd', text: 'Programs cannot make decisions' }
      ],
      correctAnswers: ['b'],
      explanation: 'If training data contains biases, automated systems may perpetuate or amplify those biases.'
    },
    {
      text: 'Which of the following uses data analysis to provide a service?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Navigation apps suggesting fastest routes' },
        { id: 'b', text: 'Email spam filters' },
        { id: 'c', text: 'Social media content recommendations' },
        { id: 'd', text: 'A printed book' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Navigation, spam filtering, and content recommendations all analyze data to provide their services.'
    },
    {
      text: 'A weather prediction app uses data from sensors and satellites to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Control the weather' },
        { id: 'b', text: 'Make forecasts about future weather conditions' },
        { id: 'c', text: 'Create new weather patterns' },
        { id: 'd', text: 'Delete old weather data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Weather apps analyze current and historical data to predict future weather conditions.'
    },
    {
      text: 'What is one way programs can gain insight from data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'By ignoring all data' },
        { id: 'b', text: 'By identifying correlations between different variables' },
        { id: 'c', text: 'By randomly guessing' },
        { id: 'd', text: 'By deleting the data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Programs can discover relationships between variables that might not be obvious to human observers.'
    },
    {
      text: 'A program that detects fraudulent credit card transactions works by:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Blocking all transactions' },
        { id: 'b', text: 'Analyzing patterns in transaction data to identify unusual activity' },
        { id: 'c', text: 'Allowing all transactions without checking' },
        { id: 'd', text: 'Only checking transactions on Mondays' }
      ],
      correctAnswers: ['b'],
      explanation: 'Fraud detection systems analyze transaction patterns and flag those that deviate from normal behavior.'
    },
    {
      text: 'What is required for a program to make accurate predictions?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'No data is needed' },
        { id: 'b', text: 'Sufficient, relevant, and accurate data' },
        { id: 'c', text: 'Only one data point' },
        { id: 'd', text: 'Predictions are always accurate regardless of data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Predictions depend on having enough high-quality, relevant data to identify reliable patterns.'
    },
    {
      text: 'What does a search engine do with collected data about user searches?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Nothing' },
        { id: 'b', text: 'Uses it to improve search results and target advertisements' },
        { id: 'c', text: 'Deletes it immediately' },
        { id: 'd', text: 'Prints it on paper' }
      ],
      correctAnswers: ['b'],
      explanation: 'Search engines analyze search patterns to improve relevance and personalize advertisements.'
    },
    {
      text: 'A program analyzing social media data could identify:',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Trending topics' },
        { id: 'b', text: 'Public sentiment about a product or event' },
        { id: 'c', text: 'Influential users in a network' },
        { id: 'd', text: 'Private, encrypted messages' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Public social media data can reveal trends, sentiment, and influence. Encrypted messages cannot be analyzed.'
    },
    {
      text: 'What is predictive analytics?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Recording what happened in the past' },
        { id: 'b', text: 'Using data and algorithms to forecast future outcomes' },
        { id: 'c', text: 'Deleting old data' },
        { id: 'd', text: 'Creating random predictions' }
      ],
      correctAnswers: ['b'],
      explanation: 'Predictive analytics uses historical data and statistical techniques to make predictions about future events.'
    },
    {
      text: 'An online store showing "customers also bought" recommendations is using:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Random product selection' },
        { id: 'b', text: 'Analysis of purchasing patterns from customer data' },
        { id: 'c', text: 'Products with the highest prices' },
        { id: 'd', text: 'Only new products' }
      ],
      correctAnswers: ['b'],
      explanation: 'These recommendations are generated by analyzing purchase patterns across many customers.'
    },
    {
      text: 'What is a dashboard in data analysis?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Part of a car' },
        { id: 'b', text: 'A visual display that presents key data and metrics in an organized way' },
        { id: 'c', text: 'A type of database' },
        { id: 'd', text: 'A programming language' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data dashboards provide at-a-glance views of important metrics through visualizations and summaries.'
    },
    {
      text: 'Programs using data for decision-making should be:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Trusted without question' },
        { id: 'b', text: 'Evaluated for accuracy, fairness, and potential biases' },
        { id: 'c', text: 'Used to make all decisions' },
        { id: 'd', text: 'Kept secret from users' }
      ],
      correctAnswers: ['b'],
      explanation: 'Automated decision systems should be scrutinized for accuracy and fairness, especially for important decisions.'
    },
    {
      text: 'What insight might a program gain from analyzing student grades over time?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Students\' favorite colors' },
        { id: 'b', text: 'Patterns in performance and areas needing improvement' },
        { id: 'c', text: 'Students\' home addresses' },
        { id: 'd', text: 'Nothing useful' }
      ],
      correctAnswers: ['b'],
      explanation: 'Grade analysis can reveal trends, identify struggling students, and highlight topics that need more attention.'
    },
    {
      text: 'A program monitoring traffic flow in a city can help:',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Optimize traffic light timing' },
        { id: 'b', text: 'Identify congestion patterns' },
        { id: 'c', text: 'Plan road improvements' },
        { id: 'd', text: 'Control individual car movements' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Traffic data helps optimize signals, identify problem areas, and plan infrastructure, but doesn\'t control individual cars.'
    },
    {
      text: 'What is required for a program to learn from data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Human consciousness' },
        { id: 'b', text: 'Algorithms that can identify patterns and adjust based on outcomes' },
        { id: 'c', text: 'No data is needed' },
        { id: 'd', text: 'Physical sensors only' }
      ],
      correctAnswers: ['b'],
      explanation: 'Machine learning requires algorithms that can process data, find patterns, and improve through feedback.'
    },
    {
      text: 'How can data analysis programs help healthcare?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Identify disease outbreaks early' },
        { id: 'b', text: 'Predict patient risks' },
        { id: 'c', text: 'Assist in diagnosing conditions from medical images' },
        { id: 'd', text: 'Replace all doctors completely' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Data analysis can aid healthcare through outbreak detection, risk prediction, and diagnostic support, but doesn\'t replace doctors.'
    },
    {
      text: 'What is simulation in data analysis?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Copying data exactly' },
        { id: 'b', text: 'Using computer models to mimic real-world processes' },
        { id: 'c', text: 'Deleting simulation files' },
        { id: 'd', text: 'Playing video games' }
      ],
      correctAnswers: ['b'],
      explanation: 'Simulations use data and mathematical models to replicate real-world scenarios for analysis and prediction.'
    },
    {
      text: 'A program that categorizes emails as "spam" or "not spam" is performing:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Random sorting' },
        { id: 'b', text: 'Classification based on learned patterns' },
        { id: 'c', text: 'Email deletion' },
        { id: 'd', text: 'Email creation' }
      ],
      correctAnswers: ['b'],
      explanation: 'Spam filters use classification algorithms trained on examples to categorize new emails.'
    },
    {
      text: 'What does "training a model" mean in machine learning?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Teaching a computer to walk' },
        { id: 'b', text: 'Providing data so the algorithm can learn patterns' },
        { id: 'c', text: 'Physical exercise for computers' },
        { id: 'd', text: 'Writing documentation' }
      ],
      correctAnswers: ['b'],
      explanation: 'Training involves feeding data to an algorithm so it can learn patterns for making predictions or decisions.'
    },
    {
      text: 'Why might a data-driven program fail to work well in new situations?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Programs work equally well in all situations' },
        { id: 'b', text: 'The new situation may be different from the data used to train it' },
        { id: 'c', text: 'Programs never fail' },
        { id: 'd', text: 'New situations don\'t exist' }
      ],
      correctAnswers: ['b'],
      explanation: 'Programs trained on specific data may not generalize well to situations outside their training data.'
    },
    {
      text: 'Real-time data analysis allows programs to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only analyze data from the past' },
        { id: 'b', text: 'Process and respond to data as it is generated' },
        { id: 'c', text: 'Work without any data' },
        { id: 'd', text: 'Store data permanently' }
      ],
      correctAnswers: ['b'],
      explanation: 'Real-time analysis enables immediate response to current conditions, such as stock trading or network monitoring.'
    }
  ]
};

async function seedBigIdea2() {
  console.log('Starting to seed Big Idea 2...');

  try {
    // Create the Big Idea document
    await db.collection('bigIdeas').doc(bigIdea2.id).set({
      name: bigIdea2.name,
      shortName: bigIdea2.shortName,
      description: bigIdea2.description,
      order: bigIdea2.order,
      color: bigIdea2.color,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Created Big Idea 2');

    // Create each topic with its questions
    for (const topic of topics) {
      const questions = questionsData[topic.id] || [];

      // Add metadata to each question
      const processedQuestions = questions.map((q, index) => ({
        ...q,
        id: `${topic.id}-q${index + 1}`,
        isCustom: false,
        addedBy: null,
        addedAt: new Date(),
        deactivated: false
      }));

      await db.collection('topics').doc(topic.id).set({
        name: topic.name,
        description: topic.description,
        bigIdeaId: topic.bigIdeaId,
        order: topic.order,
        learningObjectives: topic.learningObjectives,
        questions: processedQuestions,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      console.log(`Created topic: ${topic.name} with ${processedQuestions.length} questions`);
    }

    console.log('\nSuccessfully seeded Big Idea 2!');
    console.log(`Total topics: ${topics.length}`);
    console.log(`Total questions: ${Object.values(questionsData).flat().length}`);

  } catch (error) {
    console.error('Error seeding Big Idea 2:', error);
    throw error;
  }
}

// Run the seed function
seedBigIdea2()
  .then(() => {
    console.log('Seeding complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
