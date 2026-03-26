/**
 * Extra Questions for Big Idea 2: Data
 * 10 hard questions per topic
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questions = {
  'topic-2.1': [ // Binary Numbers
    {
      text: 'What is the decimal equivalent of the binary number `110101`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '53' },
        { id: 'b', text: '45' },
        { id: 'c', text: '55' },
        { id: 'd', text: '61' }
      ],
      correctAnswers: ['a'],
      explanation: '1*32 + 1*16 + 0*8 + 1*4 + 0*2 + 1*1 = 32 + 16 + 4 + 1 = 53.',
      difficulty: 'hard'
    },
    {
      text: 'A computer uses 4 bits to represent non-negative integers. What is the result of adding the binary numbers `1101` and `0110` in this system?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Overflow error (sum exceeds 15)' },
        { id: 'b', text: '10011' },
        { id: 'c', text: '0011' },
        { id: 'd', text: '1111' }
      ],
      correctAnswers: ['a'],
      explanation: '1101 is 13, 0110 is 6. 13 + 6 = 19. With 4 bits, the maximum value is 2^4 - 1 = 15. Since 19 > 15, an overflow error occurs.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following binary numbers is equivalent to the decimal value 25?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '11001' },
        { id: 'b', text: '10101' },
        { id: 'c', text: '11101' },
        { id: 'd', text: '10011' }
      ],
      correctAnswers: ['a'],
      explanation: '16 + 8 + 1 = 25. In binary: 11001.',
      difficulty: 'hard'
    },
    {
      text: 'How many distinct values can be represented using an 8-bit binary sequence?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '256' },
        { id: 'b', text: '255' },
        { id: 'c', text: '128' },
        { id: 'd', text: '512' }
      ],
      correctAnswers: ['a'],
      explanation: 'An n-bit sequence can represent 2^n values. 2^8 = 256 (values 0 through 255).',
      difficulty: 'hard'
    },
    {
      text: 'A color is represented in RGB format using 8 bits for each color component (Red, Green, Blue). How many total bits are used to represent one color?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '24' },
        { id: 'b', text: '8' },
        { id: 'c', text: '16' },
        { id: 'd', text: '32' }
      ],
      correctAnswers: ['a'],
      explanation: '3 components * 8 bits per component = 24 bits.',
      difficulty: 'hard'
    },
    {
      text: 'What happens when a program attempts to store a number that is too large for the number of bits allocated for it?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An overflow error occurs.' },
        { id: 'b', text: 'A syntax error occurs.' },
        { id: 'c', text: 'A round-off error occurs.' },
        { id: 'd', text: 'The program automatically increases the bit size.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Overflow happens when the result of a calculation exceeds the fixed range of the data type.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following decimal values is LARGEST?\n\nI. Binary 10110\nII. Binary 1100\nIII. Decimal 20',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'I' },
        { id: 'b', text: 'II' },
        { id: 'c', text: 'III' },
        { id: 'd', text: 'They are all equal' }
      ],
      correctAnswers: ['a'],
      explanation: 'I: 16+4+2=22. II: 8+4=12. III: 20. 22 is the largest.',
      difficulty: 'hard'
    },
    {
      text: 'A programmer wants to double the value of a positive binary number. Which operation achieves this?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Adding a 0 to the right end of the binary sequence (shifting left).' },
        { id: 'b', text: 'Adding a 1 to the left end of the sequence.' },
        { id: 'c', text: 'Flipping all the 0s to 1s.' },
        { id: 'd', text: 'Removing the rightmost digit.' }
      ],
      correctAnswers: ['a'],
      explanation: 'In base 2, shifting left (adding a trailing 0) is equivalent to multiplying by 2, just like adding a 0 in base 10 multiplies by 10.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is true about hexadecimal (Base 16) compared to binary (Base 2)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Hexadecimal can represent the same value using fewer digits than binary.' },
        { id: 'b', text: 'Hexadecimal is more accurate than binary.' },
        { id: 'c', text: 'Hexadecimal can only represent even numbers.' },
        { id: 'd', text: 'Computers process hexadecimal faster than binary.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Hexadecimal is a concise way for humans to read binary data. One hex digit represents exactly 4 binary bits.',
      difficulty: 'hard'
    },
    {
      text: 'What decimal value does the binary `0.1` represent in a fixed-point system?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0.5' },
        { id: 'b', text: '0.1' },
        { id: 'c', text: '0.25' },
        { id: 'd', text: '1.0' }
      ],
      correctAnswers: ['a'],
      explanation: 'The first place to the right of the binary point is 2^-1, which is 1/2 or 0.5.',
      difficulty: 'hard'
    }
  ],
  'topic-2.2': [ // Data Compression
    {
      text: 'A photographer chooses to save their images in JPEG format (lossy) instead of PNG (lossless). Which of the following is the most likely reason?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To reduce the file size, allowing more images to be stored on a memory card.' },
        { id: 'b', text: 'To ensure the images never lose any detail when edited.' },
        { id: 'c', text: 'Because JPEG images are always higher resolution than PNG.' },
        { id: 'd', text: 'Lossy compression is required for color images.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lossy compression (JPEG) achieves much smaller file sizes by discarding data that is less perceptible to the human eye.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is a characteristic of lossless compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The original data can be perfectly reconstructed from the compressed file.' },
        { id: 'b', text: 'It removes redundant data permanently to save space.' },
        { id: 'c', text: 'It is typically used for video streaming to reduce lag.' },
        { id: 'd', text: 'It can only be used for text files.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lossless compression (like ZIP or PNG) ensures 100% data integrity.',
      difficulty: 'hard'
    },
    {
      text: 'In which scenario would lossless compression be PREFERRED over lossy compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Storing a legal document or a computer program executable.' },
        { id: 'b', text: 'Streaming a movie on a smartphone.' },
        { id: 'c', text: 'Sending a quick photo in a text message.' },
        { id: 'd', text: 'Listening to music on a wireless earbud.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Legal documents and code cannot tolerate any data loss; even a single missing character could change the meaning.',
      difficulty: 'hard'
    },
    {
      text: 'What is the "compression ratio"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The ratio between the size of the uncompressed data and the size of the compressed data.' },
        { id: 'b', text: 'The time it takes to compress a file.' },
        { id: 'c', text: 'The number of colors in an image.' },
        { id: 'd', text: 'The speed of the internet connection used to download the file.' }
      ],
      correctAnswers: ['a'],
      explanation: 'A higher ratio means more efficient compression.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is true about lossy compression algorithms?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'They often achieve significantly higher compression ratios than lossless algorithms.' },
        { id: 'b', text: 'They are only useful for black-and-white data.' },
        { id: 'c', text: 'They guarantee that no information is discarded.' },
        { id: 'd', text: 'They are becoming obsolete as storage becomes cheaper.' }
      ],
      correctAnswers: ['a'],
      explanation: 'By sacrificing some quality, lossy compression can reduce file sizes to a fraction of the original.',
      difficulty: 'hard'
    },
    {
      text: 'A student compresses a text file using a simple Run-Length Encoding (RLE) algorithm. The original text was "AAAAABBBCC". The compressed version is "5A3B2C". What type of compression is this?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossless' },
        { id: 'b', text: 'Lossy' },
        { id: 'c', text: 'Encryption' },
        { id: 'd', text: 'Decimal' }
      ],
      correctAnswers: ['a'],
      explanation: 'Since the original string can be perfectly reconstructed from "5A3B2C", it is lossless.',
      difficulty: 'hard'
    },
    {
      text: 'Which file extension is MOST likely associated with lossy audio compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '.mp3' },
        { id: 'b', text: '.wav' },
        { id: 'c', text: '.flac' },
        { id: 'd', text: '.txt' }
      ],
      correctAnswers: ['a'],
      explanation: 'MP3 is a common lossy audio format. WAV and FLAC are typically lossless.',
      difficulty: 'hard'
    },
    {
      text: 'Why is data compression important for the Internet?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It reduces the amount of data that needs to be transmitted, resulting in faster load times.' },
        { id: 'b', text: 'It makes data transmission more secure from hackers.' },
        { id: 'c', text: 'It allows computers to use less electricity.' },
        { id: 'd', text: 'It automatically translates websites into different languages.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Compressed data travels faster and uses less bandwidth.',
      difficulty: 'hard'
    },
    {
      text: 'An image is 1MB uncompressed. After lossless compression, it is 600KB. After lossy compression, it is 100KB. Which statement is true?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The lossy version is smaller but might have visible artifacts or lower quality.' },
        { id: 'b', text: 'The lossless version is better because it is smaller.' },
        { id: 'c', text: 'The original 1MB file is required to view either compressed version.' },
        { id: 'd', text: 'The 100KB file is a perfectly accurate copy of the 1MB file.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lossy compression trades quality for a dramatic reduction in size.',
      difficulty: 'hard'
    },
    {
      text: 'What does "heuristics" mean in the context of creating a compression algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using a "good enough" method to find a compression pattern when an exhaustive search would take too long.' },
        { id: 'b', text: 'A mathematical proof that the compression is lossless.' },
        { id: 'c', text: 'The speed of the computer processor.' },
        { id: 'd', text: 'The type of data being compressed.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Finding the *perfect* compression for a large file is computationally hard, so heuristics are used to find a very good one quickly.',
      difficulty: 'hard'
    }
  ],
  'topic-2.3': [ // Extracting Information from Data
    {
      text: 'A city uses sensors to track traffic flow at 50 intersections. Which of the following is an example of using "metadata" about this data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Recording the time and date when each sensor reading was taken.' },
        { id: 'b', text: 'Calculating the average number of cars per hour.' },
        { id: 'c', text: 'Predicting which intersection will be busiest tomorrow.' },
        { id: 'd', text: 'Changing the timing of the traffic lights.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Metadata is data *about* data (e.g., when, where, and by what device the traffic count was recorded).',
      difficulty: 'hard'
    },
    {
      text: 'A researcher is analyzing a massive dataset of social media posts. What is the PRIMARY challenge of "Big Data"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The data is so large and complex that it is difficult to process using traditional database tools.' },
        { id: 'b', text: 'Social media posts are always written in code.' },
        { id: 'c', text: 'Big Data can only be stored on supercomputers.' },
        { id: 'd', text: 'It is impossible to find patterns in large datasets.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Big Data is defined by the 3 Vs: Volume, Velocity, and Variety, which exceed standard processing capabilities.',
      difficulty: 'hard'
    },
    {
      text: 'What is "data mining"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Discovering patterns and relationships in large datasets to extract useful information.' },
        { id: 'b', text: 'Searching for physical gold using a computer.' },
        { id: 'c', text: 'Deleting unwanted files from a hard drive.' },
        { id: 'd', text: 'Manually entering data into a spreadsheet.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Data mining uses algorithms to find non-obvious insights in large amounts of data.',
      difficulty: 'hard'
    },
    {
      text: 'A company analyzes customer purchase history to suggest new products. Which of the following is this an example of?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Predictive analytics' },
        { id: 'b', text: 'Data encryption' },
        { id: 'c', text: 'Lossy compression' },
        { id: 'd', text: 'Hardware upgrade' }
      ],
      correctAnswers: ['a'],
      explanation: 'Predictive analytics uses historical data to make informed guesses about future behavior.',
      difficulty: 'hard'
    },
    {
      text: 'Why is "cleaning" or "filtering" data an important step before analysis?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To remove errors, duplicates, or irrelevant information that could skew the results.' },
        { id: 'b', text: 'To make the file size larger.' },
        { id: 'c', text: 'To ensure the data is encrypted.' },
        { id: 'd', text: 'To change the purpose of the research.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Real-world data is often "messy." Cleaning ensures the analysis is based on accurate information.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is a potential privacy concern related to data collection?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Personally Identifiable Information (PII) could be leaked or misused.' },
        { id: 'b', text: 'The data might be compressed too much.' },
        { id: 'c', text: 'The data might be too accurate.' },
        { id: 'd', text: 'The analysis might take too long.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Collecting and storing PII carries significant ethical and legal responsibilities.',
      difficulty: 'hard'
    },
    {
      text: 'A bar chart shows the number of ice cream cones sold per month. What is the "trend" being identified?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'How sales change over time (e.g., increasing in summer).' },
        { id: 'b', text: 'The exact price of one cone.' },
        { id: 'c', text: 'The flavor of the most popular cone.' },
        { id: 'd', text: 'The name of the employee who sold the most.' }
      ],
      correctAnswers: ['a'],
      explanation: 'A trend is a general direction in which something is developing or changing.',
      difficulty: 'hard'
    },
    {
      text: 'What is "data visualization"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Representing data in a graphical or pictorial format to make it easier to understand.' },
        { id: 'b', text: 'Looking at raw binary code on a screen.' },
        { id: 'c', text: 'Storing data on a USB drive.' },
        { id: 'd', text: 'Converting text to speech.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Visuals help humans spot patterns and outliers that are hard to see in raw tables.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following describes "unstructured data"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A collection of random photos and video clips.' },
        { id: 'b', text: 'A spreadsheet with rows and columns.' },
        { id: 'c', text: 'A database table with defined fields.' },
        { id: 'd', text: 'An alphabetical list of names.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Unstructured data does not follow a pre-defined model (like a spreadsheet), making it harder to analyze.',
      difficulty: 'hard'
    },
    {
      text: 'A health app tracks a user\'s sleep patterns for a year. How could this data be used to provide "insight"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'By identifying a correlation between exercise days and better sleep quality.' },
        { id: 'b', text: 'By showing the user\'s name on the screen.' },
        { id: 'c', text: 'By deleting the data every week to save space.' },
        { id: 'd', text: 'By selling the user a new pillow.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Insight comes from finding meaningful connections within the data.',
      difficulty: 'hard'
    }
  ],
  'topic-2.4': [ // Using Programs with Data
    {
      text: 'Which of the following is a benefit of using a program to analyze a dataset containing millions of records?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The program can perform calculations much faster and more accurately than a human.' },
        { id: 'b', text: 'The program will automatically know the context and meaning of the data.' },
        { id: 'c', text: 'The program will eliminate the need for any data cleaning.' },
        { id: 'd', text: 'The program will never have any bugs.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Scale and speed are the primary reasons for using automated data analysis.',
      difficulty: 'hard'
    },
    {
      text: 'A programmer is writing a script to find the average value in a list of 10,000 numbers. Which algorithm is most appropriate?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Iterate through the list, summing all values, and then divide by the list length.' },
        { id: 'b', text: 'Sort the list and take the middle element.' },
        { id: 'c', text: 'Randomly pick 10 numbers and average them.' },
        { id: 'd', text: 'Find the largest and smallest numbers and average them.' }
      ],
      correctAnswers: ['a'],
      explanation: 'The mean average requires every data point to be summed.',
      difficulty: 'hard'
    },
    {
      text: 'What is the purpose of "filtering" data in a program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To create a subset of the data that meets specific criteria (e.g., all users over age 18).' },
        { id: 'b', text: 'To encrypt the data for security.' },
        { id: 'c', text: 'To compress the data to save space.' },
        { id: 'd', text: 'To translate the data into a different language.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Filtering narrows the focus of the analysis to a relevant group.',
      difficulty: 'hard'
    },
    {
      text: 'A program uses a "search" algorithm to find a specific name in a database. Which factor MOST affects the speed of this program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The total number of records in the database.' },
        { id: 'b', text: 'The font size of the text in the database.' },
        { id: 'c', text: 'The name of the programmer.' },
        { id: 'd', text: 'The color of the computer case.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Algorithm performance is typically tied to input size (N).',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is an example of "aggregating" data in a program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Calculating the total sum of all sales for the month.' },
        { id: 'b', text: 'Printing a list of each individual sale.' },
        { id: 'c', text: 'Changing the price of an item.' },
        { id: 'd', text: 'Deleting an old customer record.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Aggregation combines multiple data points into a single summary value (Sum, Count, Average).',
      difficulty: 'hard'
    },
    {
      text: 'Why might a programmer use a "multi-dimensional" array or a list of lists to store data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To represent table-like data with rows and columns (e.g., a spreadsheet).' },
        { id: 'b', text: 'To make the program run on two computers at once.' },
        { id: 'c', text: 'To store data in 3D space.' },
        { id: 'd', text: 'To prevent the data from being deleted.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Nested structures are ideal for complex, related data groups.',
      difficulty: 'hard'
    },
    {
      text: 'A program is designed to identify "outliers" in a dataset. What is an outlier?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A data point that is significantly different from the other values in the set.' },
        { id: 'b', text: 'The first value in the list.' },
        { id: 'c', text: 'A value that is exactly equal to the average.' },
        { id: 'd', text: 'A piece of data that was accidentally deleted.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Identifying outliers is crucial for finding errors or unique events in data.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following describes "scalability" in a data-processing program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The ability of the program to handle increasingly larger amounts of data efficiently.' },
        { id: 'b', text: 'The physical size of the computer screen.' },
        { id: 'c', text: 'How many people can use the program at the same time.' },
        { id: 'd', text: 'The weight of the server.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Scalable programs maintain performance as the workload grows.',
      difficulty: 'hard'
    },
    {
      text: 'Consider a program that sorts a list of 1,000 names. If the number of names increases to 1,000,000, which type of algorithm would be MOST important for maintaining performance?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An efficient algorithm with a low growth rate (like O(N log N)).' },
        { id: 'b', text: 'A simple algorithm that is easy to write.' },
        { id: 'c', text: 'An algorithm that uses more memory.' },
        { id: 'd', text: 'A random sort algorithm.' }
      ],
      correctAnswers: ['a'],
      explanation: 'At large scales, efficiency (growth rate) becomes the dominant factor.',
      difficulty: 'hard'
    },
    {
      text: 'A programmer is using a "simulation" to generate data about a virtual ecosystem. What is the PRIMARY source of this data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Mathematical models and algorithms within the program.' },
        { id: 'b', text: 'Sensors placed in a real forest.' },
        { id: 'c', text: 'Interviews with biologists.' },
        { id: 'd', text: 'Historical weather records.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Simulated data is "synthetic"—it is created by the code itself based on rules.',
      difficulty: 'hard'
    }
  ]
};

async function seedBigIdea2() {
  console.log('Seeding Big Idea 2 Hard Questions...');
  let totalCount = 0;
  for (const topicId in questions) {
    const topicQuestions = questions[topicId];
    let topicCount = 0;
    for (const q of topicQuestions) {
      const qId = `${topicId}-extra-h-${topicCount}`;
      await db.collection('questions').doc(qId).set({
        ...q,
        id: qId,
        topicId: topicId,
        bigIdeaId: 'big-idea-2',
        isCustom: false,
        addedBy: 'system-extra-hard',
        createdAt: new Date(),
        updatedAt: new Date(),
        deactivated: false
      });
      topicCount++;
      totalCount++;
    }
    console.log(`Added 10 questions for ${topicId}`);
  }
  console.log(`Big Idea 2 complete! Added ${totalCount} questions.`);
}

seedBigIdea2()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
