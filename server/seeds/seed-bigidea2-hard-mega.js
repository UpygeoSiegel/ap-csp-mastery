/**
 * Extra "Hard" Questions for Big Idea 2: Data
 * 10 hard questions per topic (40 total)
 * Based on 2018 and 2020 AP CSP Exam Styles
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questions = {
  // 2.1 Binary Numbers
  'topic-2.1': [
    {
      text: 'A computer system uses 5 bits to represent non-negative integers. If the current value stored is binary `11110` and the program adds 2 to this value, what will be the result in decimal if the system ignores overflow?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '32' },
        { id: 'c', text: '30' },
        { id: 'd', text: '2' }
      ],
      correctAnswers: ['a'],
      explanation: 'Binary 11110 is 30. Adding 2 gives 32. In binary, 32 is 100000 (6 bits). Since the system only uses 5 bits, the 6th bit is lost, leaving 00000, which is 0.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following describes a situation where an overflow error is MOST likely to occur?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When a program attempts to represent a large prime number using a fixed number of bits.' },
        { id: 'b', text: 'When a program converts a decimal number to a binary fraction.' },
        { id: 'c', text: 'When a program uses a 64-bit integer to store a user\'s age.' },
        { id: 'd', text: 'When a program uses a variable to store the result of 1 divided by 3.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Overflow occurs when a calculated value exceeds the maximum value representable by the allocated number of bits.',
      difficulty: 'hard'
    },
    {
      text: 'What is the binary representation of the decimal value 43?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '101011' },
        { id: 'b', text: '101101' },
        { id: 'c', text: '110101' },
        { id: 'd', text: '101010' }
      ],
      correctAnswers: ['a'],
      explanation: '32 + 8 + 2 + 1 = 43. In binary: 101011.',
      difficulty: 'hard'
    },
    {
      text: 'A certain digital camera represents colors using 3 bits for each RGB component (3 for Red, 3 for Green, 3 for Blue). How many different colors can this camera represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '512' },
        { id: 'b', text: '256' },
        { id: 'c', text: '64' },
        { id: 'd', text: '9' }
      ],
      correctAnswers: ['a'],
      explanation: 'Total bits = 3 + 3 + 3 = 9 bits. 2^9 = 512 distinct values.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is equivalent to the decimal value 15? Select TWO answers.',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Binary 1111' },
        { id: 'b', text: 'Binary 1010' },
        { id: 'c', text: 'Binary 01111' },
        { id: 'd', text: 'Binary 11110' }
      ],
      correctAnswers: ['a', 'c'],
      explanation: '1111 is 8+4+2+1 = 15. Leading zeros (01111) do not change the value.',
      difficulty: 'hard'
    },
    {
      text: 'An artist is using a 4-bit grayscale system where 0000 is black and 1111 is white. They want to create a color that is exactly "middle gray". Which binary value should they use?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0111 or 1000' },
        { id: 'b', text: '0101' },
        { id: 'c', text: '1100' },
        { id: 'd', text: '0011' }
      ],
      correctAnswers: ['a'],
      explanation: 'With 16 levels (0-15), the middle is between 7 (0111) and 8 (1000).',
      difficulty: 'hard'
    },
    {
      text: 'If a computer increases its integer representation from 32 bits to 64 bits, how many more values can it represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2^32 times as many' },
        { id: 'b', text: '2 times as many' },
        { id: 'c', text: '32 times as many' },
        { id: 'd', text: '64 times as many' }
      ],
      correctAnswers: ['a'],
      explanation: '2^64 / 2^32 = 2^(64-32) = 2^32.',
      difficulty: 'hard'
    },
    {
      text: 'What decimal value is represented by the binary number 10001001?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '137' },
        { id: 'b', text: '129' },
        { id: 'c', text: '145' },
        { id: 'd', text: '131' }
      ],
      correctAnswers: ['a'],
      explanation: '128 + 8 + 1 = 137.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following binary values is equal to the sum of decimal 10 and decimal 5?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1111' },
        { id: 'b', text: '1010' },
        { id: 'c', text: '1100' },
        { id: 'd', text: '1011' }
      ],
      correctAnswers: ['a'],
      explanation: '10 + 5 = 15. 15 in binary is 1111.',
      difficulty: 'hard'
    },
    {
      text: 'What is the largest decimal value that can be stored in 3 bits?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '7' },
        { id: 'b', text: '8' },
        { id: 'c', text: '3' },
        { id: 'd', text: '15' }
      ],
      correctAnswers: ['a'],
      explanation: '2^3 - 1 = 8 - 1 = 7 (Binary 111).',
      difficulty: 'hard'
    }
  ],

  // 2.2 Data Compression
  'topic-2.2': [
    {
      text: 'A user is downloading a large software installer. The website offers a "compressed" version of the installer to save time. Which type of compression MUST be used for this file?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossless' },
        { id: 'b', text: 'Lossy' },
        { id: 'c', text: 'Metadata' },
        { id: 'd', text: 'Binary' }
      ],
      correctAnswers: ['a'],
      explanation: 'Software code cannot tolerate any data loss; a single bit change could crash the program.',
      difficulty: 'hard'
    },
    {
      text: 'A video editor is exporting a final movie for a movie theater. They decide NOT to use lossy compression. What is the most likely trade-off of this decision?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The file size will be extremely large, requiring significant storage space.' },
        { id: 'b', text: 'The video quality will be significantly lower.' },
        { id: 'c', text: 'The video will play back faster than normal.' },
        { id: 'd', text: 'The colors in the video will be inverted.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lossless video files are massive compared to compressed formats like MP4.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is an example of "redundancy" that a compression algorithm might exploit?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A large area of solid blue sky in a photograph.' },
        { id: 'b', text: 'A unique password used only once.' },
        { id: 'c', text: 'A completely random sequence of numbers.' },
        { id: 'd', text: 'A single pixel of a different color in a photo.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Algorithms can store "1000 blue pixels" more efficiently than listing each one individually.',
      difficulty: 'hard'
    },
    {
      text: 'How does lossy compression achieve higher compression ratios than lossless compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'By permanently removing data that is unlikely to be noticed by humans.' },
        { id: 'b', text: 'By using more advanced mathematical formulas.' },
        { id: 'c', text: 'By only storing the metadata of the file.' },
        { id: 'd', text: 'By doubling the number of bits used for each value.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Discarding data allows for much smaller files at the cost of some quality.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following formats typically use lossy compression? Select TWO answers.',
      type: 'multiple_select',
      options: [
        { id: 'a', text: '.jpg (images)' },
        { id: 'b', text: '.mp3 (audio)' },
        { id: 'c', text: '.zip (files)' },
        { id: 'd', text: '.txt (text)' }
      ],
      correctAnswers: ['a', 'b'],
      explanation: 'JPEG and MP3 are standard lossy formats. ZIP and TXT must be lossless.',
      difficulty: 'hard'
    },
    {
      text: 'A student claims that they have found a "perfect" lossless compression algorithm that can compress ANY file to half its size. Why is this claim likely false?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It is mathematically impossible to compress all possible data sequences; some random data cannot be compressed further without loss.' },
        { id: 'b', text: 'Only lossy algorithms can compress files by half.' },
        { id: 'c', text: 'Binary numbers cannot be divided in half.' },
        { id: 'd', text: 'Encryption prevents files from being compressed.' }
      ],
      correctAnswers: ['a'],
      explanation: 'The Pigeonhole Principle in information theory proves that no lossless algorithm can compress every possible input.',
      difficulty: 'hard'
    },
    {
      text: 'What is the primary goal of data compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To represent the same information using fewer bits.' },
        { id: 'b', text: 'To make data more secure.' },
        { id: 'c', text: 'To increase the resolution of images.' },
        { id: 'd', text: 'To convert binary data into decimal.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Efficiency in storage and transmission is the core objective.',
      difficulty: 'hard'
    },
    {
      text: 'In a text document, the word "computer" appears 100 times. A compression algorithm replaces every instance of "computer" with the symbol "@". Is this lossless or lossy?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossless, because the original word can be restored by replacing "@" with "computer".' },
        { id: 'b', text: 'Lossy, because the original characters were removed.' },
        { id: 'c', text: 'Neither, it is a type of encryption.' },
        { id: 'd', text: 'Both, depending on the font used.' }
      ],
      correctAnswers: ['a'],
      explanation: 'As long as the mapping is preserved, no information is lost.',
      difficulty: 'hard'
    },
    {
      text: 'Which factor LEAST affects the choice between lossy and lossless compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The weight of the computer hardware.' },
        { id: 'b', text: 'The available storage space.' },
        { id: 'c', text: 'The required level of data integrity.' },
        { id: 'd', text: 'The bandwidth of the internet connection.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Hardware weight is irrelevant to data processing decisions.',
      difficulty: 'hard'
    },
    {
      text: 'What happens to a lossy file if it is compressed and decompressed multiple times?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The quality will progressively degrade (generation loss).' },
        { id: 'b', text: 'The quality will stay the same after the first time.' },
        { id: 'c', text: 'The file will eventually become lossless.' },
        { id: 'd', text: 'The file size will continue to decrease until it is 0 bits.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Each lossy cycle discards more data, leading to noticeable artifacts.',
      difficulty: 'hard'
    }
  ],

  // 2.3 Extracting Information from Data
  'topic-2.3': [
    {
      text: 'A researcher is studying the "digital divide." Which of the following data sets would be LEAST useful for identifying which populations lack internet access?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A database of all active IP addresses in the country.' },
        { id: 'b', text: 'The results of a door-to-door survey about technology use.' },
        { id: 'c', text: 'Map data showing the location of fiber-optic cables.' },
        { id: 'd', text: 'Records of computer sales in different zip codes.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Active IP addresses only tell you who DOES have access, not who doesn\'t or why.',
      difficulty: 'hard'
    },
    {
      text: 'A scientist is using a program to find the average global temperature over the last 100 years. They notice a "spike" in the data for one specific year that is 50 degrees higher than any other year. What should the scientist do first?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Investigate the data for potential errors or sensor malfunctions (data cleaning).' },
        { id: 'b', text: 'Publish the result immediately as a major discovery.' },
        { id: 'c', text: 'Delete that year\'s data without checking.' },
        { id: 'd', text: 'Assume the program is correct and ignore the spike.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Outliers often indicate errors in data collection or entry.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is a "Big Data" technique used to handle Variety in data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using programs to extract information from unstructured sources like video, audio, and text.' },
        { id: 'b', text: 'Buying 100 more hard drives.' },
        { id: 'c', text: 'Converting all data into binary numbers.' },
        { id: 'd', text: 'Only collecting data from one type of sensor.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Variety refers to the different formats data can take, requiring flexible processing tools.',
      difficulty: 'hard'
    },
    {
      text: 'What can happen if a data set used to train a machine learning algorithm is biased?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The algorithm will produce biased or unfair results.' },
        { id: 'b', text: 'The algorithm will run faster.' },
        { id: 'c', text: 'The algorithm will automatically fix the bias.' },
        { id: 'd', text: 'The data will be deleted.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Algorithms learn patterns from data; if the data is unfair, the predictions will be too.',
      difficulty: 'hard'
    },
    {
      text: 'A library system tracks every book checkout. Which question CANNOT be answered using ONLY this data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Why did a specific user choose to check out a specific book?' },
        { id: 'b', text: 'Which book is the most popular?' },
        { id: 'c', text: 'How many books were checked out in October?' },
        { id: 'd', text: 'Which users have overdue books?' }
      ],
      correctAnswers: ['a'],
      explanation: 'Data can show "what" happened, but rarely "why" (human motivation).',
      difficulty: 'hard'
    },
    {
      text: 'What is the role of "data visualization" in the analysis process?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To help humans communicate findings and identify patterns that are not obvious in raw data.' },
        { id: 'b', text: 'To make the program code easier to read.' },
        { id: 'c', text: 'To reduce the file size of the dataset.' },
        { id: 'd', text: 'To encrypt the data for storage.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Visuals bridge the gap between complex data and human understanding.',
      difficulty: 'hard'
    },
    {
      text: 'A store uses "heat maps" showing where customers walk in the aisles. What is the primary purpose of this information extraction?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To optimize the store layout and product placement.' },
        { id: 'b', text: 'To track the names of every customer.' },
        { id: 'c', text: 'To see what color shoes people are wearing.' },
        { id: 'd', text: 'To calculate the store\'s electricity bill.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Spatial analysis helps businesses make data-driven design decisions.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following describes "metadata" for a text message? Select TWO answers.',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'The timestamp of when the message was sent.' },
        { id: 'b', text: 'The phone number of the sender.' },
        { id: 'c', text: 'The actual words written in the message.' },
        { id: 'd', text: 'The emojis used in the message.' }
      ],
      correctAnswers: ['a', 'b'],
      explanation: 'Metadata is context (when, who); the text/emojis are the content (data).',
      difficulty: 'hard'
    },
    {
      text: 'What is "correlation" in data analysis?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A statistical relationship between two variables.' },
        { id: 'b', text: 'A proof that one thing caused another.' },
        { id: 'c', text: 'When two files have the same size.' },
        { id: 'd', text: 'The time it takes to sort a list.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Correlation shows a link, but "correlation does not imply causation."',
      difficulty: 'hard'
    },
    {
      text: 'Why is it important to consider the "provenance" (origin and history) of a data set?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To determine if the data is trustworthy and credible.' },
        { id: 'b', text: 'To see what programming language was used.' },
        { id: 'c', text: 'To make the visualization prettier.' },
        { id: 'd', text: 'To increase the speed of the analysis.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Knowing where data came from helps evaluate its accuracy and potential bias.',
      difficulty: 'hard'
    }
  ],

  // 2.4 Using Programs with Data
  'topic-2.4': [
    {
      text: 'A program is designed to analyze a list of 10 million stock prices. Which of the following is an example of "data aggregation"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Calculating the average price for the entire year.' },
        { id: 'b', text: 'Printing every single price in the list.' },
        { id: 'c', text: 'Searching for a price that is exactly $100.00.' },
        { id: 'd', text: 'Deleting the prices from the weekend.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Aggregation summarizes multiple data points into one value.',
      difficulty: 'hard'
    },
    {
      text: 'A programmer wants to find the "median" of a list of numbers. What must the program do FIRST?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Sort the list in numerical order.' },
        { id: 'b', text: 'Calculate the average of the list.' },
        { id: 'c', text: 'Find the largest number.' },
        { id: 'd', text: 'Count how many numbers are in the list.' }
      ],
      correctAnswers: ['a'],
      explanation: 'The median is the middle value, which only makes sense if the data is ordered.',
      difficulty: 'hard'
    },
    {
      text: 'Which algorithm is MOST efficient for finding a specific value in a LARGE, SORTED list of data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Binary Search' },
        { id: 'b', text: 'Linear Search' },
        { id: 'c', text: 'Random Search' },
        { id: 'd', text: 'Selection Sort' }
      ],
      correctAnswers: ['a'],
      explanation: 'Binary search is significantly faster (O(log N)) than linear search (O(N)) for large datasets.',
      difficulty: 'hard'
    },
    {
      text: 'A program uses "filtering" to help a user find a hotel. Which of the following is a filter?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Showing only hotels that have a 4-star rating or higher.' },
        { id: 'b', text: 'Calculating the total cost of a 3-night stay.' },
        { id: 'c', text: 'Displaying a map of all hotels in the city.' },
        { id: 'd', text: 'Sorting the hotels from cheapest to most expensive.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Filtering selects a subset based on criteria.',
      difficulty: 'hard'
    },
    {
      text: 'What is a "multi-dimensional" list (list of lists) useful for representing in a program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A table or grid of data (like a spreadsheet or game board).' },
        { id: 'b', text: 'A single very long string.' },
        { id: 'c', text: 'A variable that can change its name.' },
        { id: 'd', text: 'A program that has no errors.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Nested lists are the standard way to model 2D data structures.',
      difficulty: 'hard'
    },
    {
      text: 'Why might a program use "sampling" (selecting a random subset) instead of analyzing an entire dataset?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When the full dataset is too large to process in a reasonable amount of time.' },
        { id: 'b', text: 'To make the results 100% accurate.' },
        { id: 'c', text: 'Because sampling is required by law.' },
        { id: 'd', text: 'To ensure the data is encrypted.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Sampling provides a faster estimate when exactness is less critical than speed.',
      difficulty: 'hard'
    },
    {
      text: 'A program analyzes a dataset of 1,000,000 weather records. Which operation is an example of "transforming" data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Converting all temperatures from Fahrenheit to Celsius.' },
        { id: 'b', text: 'Saving the data to a new file.' },
        { id: 'c', text: 'Printing the first 10 records.' },
        { id: 'd', text: 'Counting the number of records.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Transformation involves changing the values or format of the data to a more useful state.',
      difficulty: 'hard'
    },
    {
      text: 'What is the "worst-case" performance of a linear search algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The algorithm must check every single item in the list.' },
        { id: 'b', text: 'The algorithm finds the item on the first try.' },
        { id: 'c', text: 'The algorithm crashes.' },
        { id: 'd', text: 'The algorithm only checks the middle item.' }
      ],
      correctAnswers: ['a'],
      explanation: 'In the worst case, the item is at the end or missing entirely.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is true about using computer programs to process data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'They allow for the analysis of patterns that would be impossible for humans to find manually.' },
        { id: 'b', text: 'They eliminate the need for human critical thinking.' },
        { id: 'c', text: 'They always produce the correct answer regardless of data quality.' },
        { id: 'd', text: 'They only work with numbers, not text or images.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Programs provide scale and computational depth beyond human ability.',
      difficulty: 'hard'
    },
    {
      text: 'A student writes a program to count how many times each word appears in a book. What type of data structure is BEST for storing this information?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A dictionary or map (associating word strings with frequency counts).' },
        { id: 'b', text: 'A single integer variable.' },
        { id: 'c', text: 'A list of every character in the book.' },
        { id: 'd', text: 'A boolean variable.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Key-value pairs are ideal for counting occurrences of unique items.',
      difficulty: 'hard'
    }
  ]
};

async function seedBigIdea2Mega() {
  console.log('Seeding 40 more Big Idea 2 Hard Questions...');
  let totalCount = 0;
  for (const topicId in questions) {
    const topicQuestions = questions[topicId];
    
    // Get existing count from previous seeds to avoid collision
    const snapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .where('addedBy', '==', 'system-extra-hard-mega')
      .get();
    
    let topicCount = snapshot.size;

    for (const q of topicQuestions) {
      const qId = `${topicId}-extra-mega-h-${topicCount}`;
      await db.collection('questions').doc(qId).set({
        ...q,
        id: qId,
        topicId: topicId,
        bigIdeaId: 'big-idea-2',
        isCustom: false,
        addedBy: 'system-extra-hard-mega',
        createdAt: new Date(),
        updatedAt: new Date(),
        deactivated: false
      });
      topicCount++;
      totalCount++;
    }
    console.log(`Added 10 questions for ${topicId}`);
  }
  console.log(`Done! Added ${totalCount} questions to Big Idea 2.`);
}

seedBigIdea2Mega()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
