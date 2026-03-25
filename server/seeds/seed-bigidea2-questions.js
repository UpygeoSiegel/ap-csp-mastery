/**
 * Seed questions for Big Idea 2: Data
 * Run with: node server/seeds/seed-bigidea2-questions.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questionsData = {
  'topic-2.1': [
    // Binary Numbers - 10 questions
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
        { id: 'd', text: '1001' }
      ],
      correctAnswers: ['a'],
      explanation: '13 = 8 + 4 + 1 = 1×8 + 1×4 + 0×2 + 1×1 = 1101 in binary.'
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
      explanation: 'With n bits, you can represent 2^n different values. 2^4 = 16.'
    },
    {
      text: 'What is a bit?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A small piece of hardware' },
        { id: 'b', text: 'The smallest unit of data in computing, representing 0 or 1' },
        { id: 'c', text: 'A type of software' },
        { id: 'd', text: 'A network connection' }
      ],
      correctAnswers: ['b'],
      explanation: 'A bit (binary digit) is the smallest unit of data and can have a value of either 0 or 1.'
    },
    {
      text: 'What is the decimal equivalent of the binary number 1111?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '14' },
        { id: 'b', text: '15' },
        { id: 'c', text: '16' },
        { id: 'd', text: '17' }
      ],
      correctAnswers: ['b'],
      explanation: '1111 = 1×8 + 1×4 + 1×2 + 1×1 = 8 + 4 + 2 + 1 = 15.'
    },
    {
      text: 'How many bits are in a byte?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '8' },
        { id: 'c', text: '16' },
        { id: 'd', text: '2' }
      ],
      correctAnswers: ['b'],
      explanation: 'A byte consists of 8 bits.'
    },
    {
      text: 'What is overflow in binary arithmetic?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When a calculation produces a negative number' },
        { id: 'b', text: 'When a result requires more bits than are available to store it' },
        { id: 'c', text: 'When dividing by zero' },
        { id: 'd', text: 'When the computer runs out of memory' }
      ],
      correctAnswers: ['b'],
      explanation: 'Overflow occurs when a calculation produces a result too large to fit in the allocated number of bits.'
    },
    {
      text: 'Why do computers use binary (base 2) instead of decimal (base 10)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Binary is easier for humans to understand' },
        { id: 'b', text: 'Electronic circuits can easily represent two states (on/off)' },
        { id: 'c', text: 'Binary uses less electricity' },
        { id: 'd', text: 'Decimal numbers are too large' }
      ],
      correctAnswers: ['b'],
      explanation: 'Computers use binary because electronic circuits can reliably distinguish between two states (high/low voltage, on/off).'
    },
    {
      text: 'What is the largest decimal number that can be represented with 8 bits (unsigned)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '256' },
        { id: 'b', text: '255' },
        { id: 'c', text: '128' },
        { id: 'd', text: '127' }
      ],
      correctAnswers: ['b'],
      explanation: 'With 8 bits unsigned, the range is 0 to 2^8 - 1 = 0 to 255.'
    },
    {
      text: 'What is the binary representation of the decimal number 7?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '111' },
        { id: 'b', text: '1000' },
        { id: 'c', text: '110' },
        { id: 'd', text: '101' }
      ],
      correctAnswers: ['a'],
      explanation: '7 = 4 + 2 + 1 = 1×4 + 1×2 + 1×1 = 111 in binary.'
    }
  ],

  'topic-2.2': [
    // Data Compression - 10 questions
    {
      text: 'What is data compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Making data more accurate' },
        { id: 'b', text: 'Reducing the size of data for storage or transmission' },
        { id: 'c', text: 'Encrypting data for security' },
        { id: 'd', text: 'Converting data to binary' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data compression reduces the number of bits needed to represent data, making files smaller.'
    },
    {
      text: 'What is the difference between lossy and lossless compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossy is faster, lossless is slower' },
        { id: 'b', text: 'Lossy permanently removes some data, lossless preserves all original data' },
        { id: 'c', text: 'Lossy is for text, lossless is for images' },
        { id: 'd', text: 'There is no difference' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossy compression discards some data to achieve smaller file sizes, while lossless compression preserves all original data exactly.'
    },
    {
      text: 'Which of the following is an example of lossy compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'ZIP files' },
        { id: 'b', text: 'MP3 audio files' },
        { id: 'c', text: 'PNG images' },
        { id: 'd', text: 'GIF images' }
      ],
      correctAnswers: ['b'],
      explanation: 'MP3 uses lossy compression, removing audio frequencies that are less audible to humans.'
    },
    {
      text: 'Which type of compression would be best for a text document that needs to be preserved exactly?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossy compression' },
        { id: 'b', text: 'Lossless compression' },
        { id: 'c', text: 'No compression' },
        { id: 'd', text: 'Either would work equally well' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossless compression preserves all original data, making it ideal for text documents where every character matters.'
    },
    {
      text: 'What is run-length encoding?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A way to encrypt data' },
        { id: 'b', text: 'A compression technique that stores repeated values as a count and value' },
        { id: 'c', text: 'A method for running programs faster' },
        { id: 'd', text: 'A way to measure file size' }
      ],
      correctAnswers: ['b'],
      explanation: 'Run-length encoding replaces sequences of repeated data with a count and the repeated value, e.g., "AAAA" becomes "4A".'
    },
    {
      text: 'Why might you choose lossy compression over lossless compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When you need perfect accuracy' },
        { id: 'b', text: 'When you need smaller file sizes and some quality loss is acceptable' },
        { id: 'c', text: 'When compressing text files' },
        { id: 'd', text: 'When you need to decompress quickly' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossy compression achieves much smaller file sizes, which is useful when some quality loss is acceptable (like in streaming video).'
    },
    {
      text: 'Which file format typically uses lossless compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'JPEG' },
        { id: 'b', text: 'MP3' },
        { id: 'c', text: 'PNG' },
        { id: 'd', text: 'MP4' }
      ],
      correctAnswers: ['c'],
      explanation: 'PNG uses lossless compression, preserving all image data exactly.'
    },
    {
      text: 'What happens to image quality when a JPEG image is repeatedly saved?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Quality improves' },
        { id: 'b', text: 'Quality stays the same' },
        { id: 'c', text: 'Quality degrades over multiple saves' },
        { id: 'd', text: 'The file size increases' }
      ],
      correctAnswers: ['c'],
      explanation: 'JPEG uses lossy compression, so each time you save, more data is lost, degrading quality progressively.'
    },
    {
      text: 'What is the main advantage of data compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It makes data more secure' },
        { id: 'b', text: 'It reduces storage space and transmission time' },
        { id: 'c', text: 'It makes data easier to read' },
        { id: 'd', text: 'It makes programs run faster' }
      ],
      correctAnswers: ['b'],
      explanation: 'Compression reduces file sizes, saving storage space and making files faster to transmit over networks.'
    },
    {
      text: 'Which of these would be LEAST appropriate for lossy compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A music file for casual listening' },
        { id: 'b', text: 'A medical X-ray image for diagnosis' },
        { id: 'c', text: 'A video for streaming' },
        { id: 'd', text: 'A photo for social media' }
      ],
      correctAnswers: ['b'],
      explanation: 'Medical images require exact accuracy for proper diagnosis, so lossy compression could be dangerous.'
    }
  ],

  'topic-2.3': [
    // Extracting Information from Data - 10 questions
    {
      text: 'What is metadata?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Data that has been compressed' },
        { id: 'b', text: 'Data about data, such as file creation date or author' },
        { id: 'c', text: 'Encrypted data' },
        { id: 'd', text: 'Deleted data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Metadata is "data about data" - information that describes other data, like when a photo was taken or who created a document.'
    },
    {
      text: 'Which of the following is an example of metadata for a digital photo?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'The date and time the photo was taken' },
        { id: 'b', text: 'The subject of the photo' },
        { id: 'c', text: 'The GPS location where the photo was taken' },
        { id: 'd', text: 'The camera model used' }
      ],
      correctAnswers: ['a', 'c', 'd'],
      explanation: 'Date/time, GPS location, and camera model are all metadata stored automatically. The subject is part of the actual image content.'
    },
    {
      text: 'What is data mining?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Deleting old data' },
        { id: 'b', text: 'The process of discovering patterns and insights in large datasets' },
        { id: 'c', text: 'Compressing data' },
        { id: 'd', text: 'Encrypting sensitive data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data mining analyzes large amounts of data to discover patterns, correlations, and useful insights.'
    },
    {
      text: 'Why is cleaning data important before analysis?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To make files smaller' },
        { id: 'b', text: 'To remove errors, duplicates, and inconsistencies that could affect results' },
        { id: 'c', text: 'To encrypt the data' },
        { id: 'd', text: 'Cleaning data is not important' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data cleaning ensures accuracy by removing errors, duplicates, and fixing inconsistencies before analysis.'
    },
    {
      text: 'What challenge might arise when combining data from multiple sources?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The data becomes too small' },
        { id: 'b', text: 'Different formats, missing values, or inconsistent naming conventions' },
        { id: 'c', text: 'The data becomes more accurate' },
        { id: 'd', text: 'There are no challenges' }
      ],
      correctAnswers: ['b'],
      explanation: 'Combining data from different sources often involves dealing with different formats, missing data, and inconsistent labeling.'
    },
    {
      text: 'What is a dataset?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A single piece of information' },
        { id: 'b', text: 'A collection of related data organized for analysis' },
        { id: 'c', text: 'A type of computer program' },
        { id: 'd', text: 'A compressed file' }
      ],
      correctAnswers: ['b'],
      explanation: 'A dataset is a structured collection of related data, often organized in rows and columns, used for analysis.'
    },
    {
      text: 'What is the purpose of data visualization?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To make data harder to understand' },
        { id: 'b', text: 'To present data in graphical form to reveal patterns and trends' },
        { id: 'c', text: 'To compress data' },
        { id: 'd', text: 'To delete unnecessary data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data visualization uses charts, graphs, and other visual representations to help people understand patterns and insights in data.'
    },
    {
      text: 'Which of these is a potential privacy concern with metadata?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Metadata makes files too large' },
        { id: 'b', text: 'Location data in photos could reveal where someone lives' },
        { id: 'c', text: 'Metadata cannot be read by computers' },
        { id: 'd', text: 'There are no privacy concerns with metadata' }
      ],
      correctAnswers: ['b'],
      explanation: 'Metadata like GPS coordinates in photos can unintentionally reveal sensitive information like home locations.'
    },
    {
      text: 'What does it mean for data to be "biased"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The data is very accurate' },
        { id: 'b', text: 'The data does not accurately represent the population or contains systematic errors' },
        { id: 'c', text: 'The data is encrypted' },
        { id: 'd', text: 'The data is too large' }
      ],
      correctAnswers: ['b'],
      explanation: 'Biased data contains systematic errors or does not fairly represent all groups, which can lead to incorrect conclusions.'
    },
    {
      text: 'What type of insight might you extract from analyzing social media data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Trends in public opinion or sentiment' },
        { id: 'b', text: 'The exact thoughts of individuals' },
        { id: 'c', text: 'Future stock prices with certainty' },
        { id: 'd', text: 'Nothing useful can be learned from social media data' }
      ],
      correctAnswers: ['a'],
      explanation: 'Social media data can reveal trends in public opinion, popular topics, and general sentiment about events or products.'
    }
  ],

  'topic-2.4': [
    // Using Programs with Data - 10 questions
    {
      text: 'What is an advantage of using programs to process data instead of doing it manually?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Programs always make data more accurate' },
        { id: 'b', text: 'Programs can process large amounts of data quickly and consistently' },
        { id: 'c', text: 'Programs never make mistakes' },
        { id: 'd', text: 'Programs are always free' }
      ],
      correctAnswers: ['b'],
      explanation: 'Programs can process millions of data points quickly and apply the same operations consistently, which would be impossible manually.'
    },
    {
      text: 'What is filtering in data processing?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Deleting all data' },
        { id: 'b', text: 'Selecting a subset of data that meets specific criteria' },
        { id: 'c', text: 'Compressing data' },
        { id: 'd', text: 'Encrypting data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Filtering selects only the data that matches certain conditions, like finding all customers from a specific city.'
    },
    {
      text: 'What is sorting in data processing?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Deleting duplicate data' },
        { id: 'b', text: 'Arranging data in a specific order (like alphabetical or numerical)' },
        { id: 'c', text: 'Combining multiple datasets' },
        { id: 'd', text: 'Converting data types' }
      ],
      correctAnswers: ['b'],
      explanation: 'Sorting arranges data in a specified order, such as alphabetically by name or numerically by value.'
    },
    {
      text: 'A program analyzes 10 years of weather data to identify patterns. This is an example of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Data compression' },
        { id: 'b', text: 'Using programs to gain insight from data' },
        { id: 'c', text: 'Data encryption' },
        { id: 'd', text: 'Data deletion' }
      ],
      correctAnswers: ['b'],
      explanation: 'Analyzing large datasets to find patterns and trends is a key way programs help us gain insights from data.'
    },
    {
      text: 'What is aggregation in data processing?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Splitting data into smaller pieces' },
        { id: 'b', text: 'Combining data to compute summary values like totals or averages' },
        { id: 'c', text: 'Deleting old data' },
        { id: 'd', text: 'Encrypting sensitive data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Aggregation combines multiple data values to produce summary statistics like sums, averages, counts, or maximums.'
    },
    {
      text: 'A spreadsheet calculates the average test score from 1000 student records. This is an example of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Data filtering' },
        { id: 'b', text: 'Data aggregation' },
        { id: 'c', text: 'Data compression' },
        { id: 'd', text: 'Data encryption' }
      ],
      correctAnswers: ['b'],
      explanation: 'Calculating an average combines many values into one summary statistic, which is aggregation.'
    },
    {
      text: 'What is a limitation of using programs to analyze data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Programs are too slow' },
        { id: 'b', text: 'Programs can only analyze data as good as the data and algorithms used' },
        { id: 'c', text: 'Programs cannot process numbers' },
        { id: 'd', text: 'Programs always produce correct results' }
      ],
      correctAnswers: ['b'],
      explanation: '"Garbage in, garbage out" - programs can only produce reliable results if the input data is accurate and the algorithms are appropriate.'
    },
    {
      text: 'A program searches through millions of medical records to find patients with similar symptoms. This demonstrates:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'That computers are replacing doctors' },
        { id: 'b', text: 'The ability of programs to process data at a scale impossible for humans' },
        { id: 'c', text: 'That medical data should not be stored digitally' },
        { id: 'd', text: 'That programs always make correct diagnoses' }
      ],
      correctAnswers: ['b'],
      explanation: 'Programs can search and analyze millions of records in seconds, enabling insights that would be impossible to find manually.'
    },
    {
      text: 'What should you consider when interpreting results from a data analysis program?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Whether the data was accurate and complete' },
        { id: 'b', text: 'Whether the analysis method was appropriate' },
        { id: 'c', text: 'Whether correlation implies causation' },
        { id: 'd', text: 'Nothing, programs are always correct' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Critical thinking about data quality, methodology, and proper interpretation of results is essential when analyzing data.'
    },
    {
      text: 'Why might different programs produce different results when analyzing the same data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Computers are unreliable' },
        { id: 'b', text: 'Different algorithms or parameters may be used' },
        { id: 'c', text: 'Data changes every time it is read' },
        { id: 'd', text: 'This never happens' }
      ],
      correctAnswers: ['b'],
      explanation: 'Different programs may use different algorithms, parameters, or analysis methods, leading to different results from the same data.'
    }
  ]
};

async function seedQuestions() {
  console.log('Seeding Big Idea 2 questions...\n');

  let totalAdded = 0;

  for (const [topicId, questions] of Object.entries(questionsData)) {
    console.log(`Adding questions for ${topicId}...`);

    // Get topic info
    const topicDoc = await db.collection('topics').doc(topicId).get();
    const topic = topicDoc.exists ? topicDoc.data() : { name: topicId, bigIdeaId: 'big-idea-2' };

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const questionId = `${topicId}-q${i + 1}`;

      await db.collection('questions').doc(questionId).set({
        id: questionId,
        ...q,
        topicId,
        topicName: topic.name,
        bigIdeaId: 'big-idea-2',
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

  console.log(`\nDone! Added ${totalAdded} questions total.`);
}

seedQuestions()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
