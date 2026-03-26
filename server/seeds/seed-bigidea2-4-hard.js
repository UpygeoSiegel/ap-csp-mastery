/**
 * Extra Questions for Big Idea 2 and 4
 * 20 hard questions for Big Idea 2 (5 per topic)
 * 20 hard questions for Big Idea 4 (approx 7 per topic)
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questions = {
  // BIG IDEA 2: DATA (20 questions)
  'topic-2.1': [
    {
      text: 'Which of the following is the 8-bit binary representation of the decimal number 130?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '10000010' },
        { id: 'b', text: '01111110' },
        { id: 'c', text: '10000001' },
        { id: 'd', text: '11000010' }
      ],
      correctAnswers: ['a'],
      explanation: '128 + 2 = 130. In binary: 10000010.',
      difficulty: 'hard'
    },
    {
      text: 'A computer system uses 6 bits to represent integers. What is the maximum decimal value that can be represented if only non-negative integers are used?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '63' },
        { id: 'b', text: '64' },
        { id: 'c', text: '31' },
        { id: 'd', text: '127' }
      ],
      correctAnswers: ['a'],
      explanation: 'With n bits, the max value is 2^n - 1. 2^6 - 1 = 64 - 1 = 63.',
      difficulty: 'hard'
    },
    {
      text: 'A programmer is working with a 4-bit system. They add the binary numbers 1011 and 0101. What will be the result in decimal if overflow is ignored?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '0 (due to overflow)' },
        { id: 'b', text: '16' },
        { id: 'c', text: '1' },
        { id: 'd', text: '15' }
      ],
      correctAnswers: ['a'],
      explanation: '1011 (11) + 0101 (5) = 10000 (16). In a 4-bit system, the 5th bit is lost, leaving 0000 (0).',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following best explains why some numbers, like 0.1, cannot be represented exactly in binary?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'They result in infinitely repeating binary fractions.' },
        { id: 'b', text: 'Binary can only represent whole numbers.' },
        { id: 'c', text: 'The computer does not have enough RAM.' },
        { id: 'd', text: '0.1 is an undecidable number.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Just as 1/3 is repeating in base 10 (0.333...), some fractions like 1/10 are repeating in base 2, leading to round-off errors.',
      difficulty: 'hard'
    },
    {
      text: 'How many bytes are required to store a 1024-bit encryption key?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '128' },
        { id: 'b', text: '1024' },
        { id: 'c', text: '256' },
        { id: 'd', text: '512' }
      ],
      correctAnswers: ['a'],
      explanation: '1 byte = 8 bits. 1024 / 8 = 128 bytes.',
      difficulty: 'hard'
    }
  ],
  'topic-2.2': [
    {
      text: 'A video streaming service uses an algorithm that discards high-frequency audio data that the human ear cannot typically hear. What type of compression is this?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossy' },
        { id: 'b', text: 'Lossless' },
        { id: 'c', text: 'Metadata' },
        { id: 'd', text: 'Binary' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lossy compression works by permanently removing data that is deemed unnecessary or less noticeable.',
      difficulty: 'hard'
    },
    {
      text: 'A user compresses a folder of text documents into a .ZIP file. After unzipping, the documents are identical to the originals. This is an example of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossless compression' },
        { id: 'b', text: 'Lossy compression' },
        { id: 'c', text: 'Data mining' },
        { id: 'd', text: 'Abstraction' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lossless compression allows for the perfect reconstruction of the original data.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is a disadvantage of lossy compression compared to lossless compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The quality of the data is reduced.' },
        { id: 'b', text: 'The file size is usually larger.' },
        { id: 'c', text: 'It takes much longer to decompress.' },
        { id: 'd', text: 'It cannot be used for image files.' }
      ],
      correctAnswers: ['a'],
      explanation: 'The trade-off for smaller file sizes in lossy compression is a loss of detail or quality.',
      difficulty: 'hard'
    },
    {
      text: 'Which situation MOST requires lossless compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Sending a medical X-ray for diagnostic analysis.' },
        { id: 'b', text: 'Posting a selfie on social media.' },
        { id: 'c', text: 'Streaming a background music track.' },
        { id: 'd', text: 'Watching a low-resolution preview of a video.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Medical data requires 100% accuracy; any loss of detail could lead to a misdiagnosis.',
      difficulty: 'hard'
    },
    {
      text: 'If a file is compressed with a 4:1 compression ratio, what percentage of the original size is the compressed file?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '25%' },
        { id: 'b', text: '40%' },
        { id: 'c', text: '75%' },
        { id: 'd', text: '4%' }
      ],
      correctAnswers: ['a'],
      explanation: 'A 4:1 ratio means the compressed file is 1/4 (25%) of the original size.',
      difficulty: 'hard'
    }
  ],
  'topic-2.3': [
    {
      text: 'A researcher is looking at a dataset of 1 million credit card transactions. Which of the following would be the most effective way to identify fraudulent activity?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using a program to identify patterns and outliers in the transaction locations and amounts.' },
        { id: 'b', text: 'Manually reading through every transaction one by one.' },
        { id: 'c', text: 'Sorting the transactions by date and checking the first 100.' },
        { id: 'd', text: 'Deleting all transactions under $10 to save time.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Automated pattern recognition and outlier detection are standard tools for fraud analysis in large datasets.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is NOT an example of metadata for a digital photograph?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The actual colors of the pixels in the image.' },
        { id: 'b', text: 'The GPS coordinates where the photo was taken.' },
        { id: 'c', text: 'The model of the camera used.' },
        { id: 'd', text: 'The date and time the file was created.' }
      ],
      correctAnswers: ['a'],
      explanation: 'The pixel data is the primary data; metadata is the descriptive information *about* the file.',
      difficulty: 'hard'
    },
    {
      text: 'A student uses a spreadsheet to calculate the average height of students in their class. What is this an example of?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Transforming data into information.' },
        { id: 'b', text: 'Creating metadata.' },
        { id: 'c', text: 'Lossy compression.' },
        { id: 'd', text: 'A round-off error.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Processing raw data (individual heights) to find a meaningful statistic (the average) creates new information.',
      difficulty: 'hard'
    },
    {
      text: 'Why might a data scientist use a visualization like a scatter plot instead of a raw table of numbers?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To more easily spot correlations and trends between two variables.' },
        { id: 'b', text: 'Because scatter plots take up less memory than tables.' },
        { id: 'c', text: 'To hide the actual values of the data points.' },
        { id: 'd', text: 'Because computers cannot read tables.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Visualizations leverage human visual perception to identify complex relationships in data.',
      difficulty: 'hard'
    },
    {
      text: 'What is a "data breach"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The unauthorized access or release of sensitive or private data.' },
        { id: 'b', text: 'When a hard drive runs out of space.' },
        { id: 'c', text: 'When a program has a syntax error.' },
        { id: 'd', text: 'A type of high-speed data cable.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Data breaches are serious security incidents that compromise data privacy.',
      difficulty: 'hard'
    }
  ],
  'topic-2.4': [
    {
      text: 'A program processes a list of temperatures and prints only those that are above freezing. This is an example of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Filtering' },
        { id: 'b', text: 'Aggregation' },
        { id: 'c', text: 'Sorting' },
        { id: 'd', text: 'Metadata' }
      ],
      correctAnswers: ['a'],
      explanation: 'Filtering involves selecting a subset of data that meets a specific condition.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is true about "cleaning" data with a program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It can automate the removal of duplicate records and the fixing of formatting errors.' },
        { id: 'b', text: 'It ensures that the data is 100% accurate without any human review.' },
        { id: 'c', text: 'It is only necessary for very small datasets.' },
        { id: 'd', text: 'It permanently deletes all the data.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Programs are efficient at standardizing data and removing obvious errors at scale.',
      difficulty: 'hard'
    },
    {
      text: 'A programmer uses a "linear search" to find a value in an unsorted list of 1 million items. In the worst case, how many comparisons must the program make?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1,000,000' },
        { id: 'b', text: '1' },
        { id: 'c', text: '500,000' },
        { id: 'd', text: '20' }
      ],
      correctAnswers: ['a'],
      explanation: 'In the worst case of a linear search, the target is at the very end or not present at all, requiring N comparisons.',
      difficulty: 'hard'
    },
    {
      text: 'A weather program combines data from 100 different weather stations to create a national map. This is an example of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Data aggregation' },
        { id: 'b', text: 'Lossy compression' },
        { id: 'c', text: 'Round-off error' },
        { id: 'd', text: 'Variable assignment' }
      ],
      correctAnswers: ['a'],
      explanation: 'Aggregation is the process of collecting and summarizing data from multiple sources.',
      difficulty: 'hard'
    },
    {
      text: 'What is "Big Data" often characterized by?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Volume, Velocity, and Variety' },
        { id: 'b', text: 'Small file sizes and high speed' },
        { id: 'c', text: 'No metadata' },
        { id: 'd', text: 'Only binary numbers' }
      ],
      correctAnswers: ['a'],
      explanation: 'These "3 Vs" define the unique challenges of processing massive datasets.',
      difficulty: 'hard'
    }
  ],

  // BIG IDEA 4: COMPUTER SYSTEMS AND NETWORKS (20 questions)
  'topic-4.1': [
    {
      text: 'Which of the following best describes the "Internet"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A network of networks built on open, common protocols.' },
        { id: 'b', text: 'A single, central computer that stores all websites.' },
        { id: 'c', text: 'A private network owned by the government.' },
        { id: 'd', text: 'A collection of physical cables only.' }
      ],
      correctAnswers: ['a'],
      explanation: 'The Internet is a global, decentralized system of interconnected networks.',
      difficulty: 'hard'
    },
    {
      text: 'What is the role of the "IP" (Internet Protocol) in transmitting data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To define how packets are addressed and routed across the network.' },
        { id: 'b', text: 'To ensure that every packet arrives in the correct order.' },
        { id: 'c', text: 'To encrypt data for security.' },
        { id: 'd', text: 'To display web pages in a browser.' }
      ],
      correctAnswers: ['a'],
      explanation: 'IP is the foundational protocol for addressing and routing on the Internet.',
      difficulty: 'hard'
    },
    {
      text: 'What is the "DNS" (Domain Name System) used for?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To translate human-readable names (like example.com) into IP addresses.' },
        { id: 'b', text: 'To store all the files for a website.' },
        { id: 'c', text: 'To prevent viruses from entering a computer.' },
        { id: 'd', text: 'To calculate the speed of an internet connection.' }
      ],
      correctAnswers: ['a'],
      explanation: 'DNS acts as the "phonebook" of the Internet, mapping names to numbers.',
      difficulty: 'hard'
    },
    {
      text: 'Which protocol is responsible for breaking data into packets and ensuring they are reassembled correctly at the destination?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'TCP (Transmission Control Protocol)' },
        { id: 'b', text: 'IP (Internet Protocol)' },
        { id: 'c', text: 'HTTP (Hypertext Transfer Protocol)' },
        { id: 'd', text: 'UDP (User Datagram Protocol)' }
      ],
      correctAnswers: ['a'],
      explanation: 'TCP provides reliable, ordered, and error-checked delivery of packets.',
      difficulty: 'hard'
    },
    {
      text: 'What is the primary difference between IPv4 and IPv6?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'IPv6 uses more bits for addresses, allowing for many more unique devices.' },
        { id: 'b', text: 'IPv6 is much slower than IPv4.' },
        { id: 'c', text: 'IPv4 is used for websites, and IPv6 is used for emails.' },
        { id: 'd', text: 'IPv6 requires physical fiber-optic cables.' }
      ],
      correctAnswers: ['a'],
      explanation: 'IPv6 was created to solve the exhaustion of 32-bit IPv4 addresses by using 128-bit addresses.',
      difficulty: 'hard'
    },
    {
      text: 'What is "bandwidth"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The maximum amount of data that can be sent over a network in a given amount of time.' },
        { id: 'b', text: 'The physical width of an ethernet cable.' },
        { id: 'c', text: 'The time it takes for a single packet to travel to its destination.' },
        { id: 'd', text: 'The number of computers connected to a router.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Bandwidth is a measure of network capacity (e.g., bits per second).',
      difficulty: 'hard'
    },
    {
      text: 'Which protocol is used to request and transmit web pages over the Internet?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'HTTP / HTTPS' },
        { id: 'b', text: 'SMTP' },
        { id: 'c', text: 'FTP' },
        { id: 'd', text: 'TCP' }
      ],
      correctAnswers: ['a'],
      explanation: 'Hypertext Transfer Protocol is the foundation of the World Wide Web.',
      difficulty: 'hard'
    }
  ],
  'topic-4.2': [
    {
      text: 'What does it mean for a network to be "fault-tolerant"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It can continue to function even if some components or connections fail.' },
        { id: 'b', text: 'It is impossible for any part of the network to ever fail.' },
        { id: 'c', text: 'It automatically detects and fixes all software bugs.' },
        { id: 'd', text: 'It only allows one computer to connect at a time.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Fault tolerance is achieved through redundancy, allowing for alternative paths if one fails.',
      difficulty: 'hard'
    },
    {
      text: 'How does "redundancy" contribute to the reliability of the Internet?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'By providing multiple paths between devices, so data can be rerouted if one path is blocked.' },
        { id: 'b', text: 'By making sure every packet is sent ten times to ensure it arrives.' },
        { id: 'c', text: 'By requiring all users to have two separate routers.' },
        { id: 'd', text: 'By preventing the use of wireless connections.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Redundancy ensures there is no single point of failure in the network topology.',
      difficulty: 'hard'
    },
    {
      text: 'A network has 4 routers connected in a square. If one connection between two routers breaks, can they still communicate? Why?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Yes, because the data can travel the "long way" around the square.' },
        { id: 'b', text: 'No, because data can only travel over the shortest path.' },
        { id: 'c', text: 'Yes, but only if the routers are from the same manufacturer.' },
        { id: 'd', text: 'No, because the entire square network is now broken.' }
      ],
      correctAnswers: ['a'],
      explanation: 'A square (or ring) topology provides two paths between any two points, making it fault-tolerant to a single break.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is a potential downside of adding extreme redundancy to a network?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Increased cost and complexity of the physical infrastructure.' },
        { id: 'b', text: 'The network will become slower for all users.' },
        { id: 'c', text: 'The network will be more prone to hacking.' },
        { id: 'd', text: 'It will decrease the fault tolerance.' }
      ],
      correctAnswers: ['a'],
      explanation: 'While redundancy improves reliability, it requires more cables, routers, and management.',
      difficulty: 'hard'
    },
    {
      text: 'What is a "single point of failure"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A component whose failure will cause the entire system to stop working.' },
        { id: 'b', text: 'A computer that only has one user.' },
        { id: 'c', text: 'A network that only has one virus.' },
        { id: 'd', text: 'A type of ethernet cable.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Identifying and removing single points of failure is the goal of creating fault-tolerant systems.',
      difficulty: 'hard'
    },
    {
      text: 'Why is the decentralized nature of the Internet important for its survival during a major disaster?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Because there is no "central" hub that can be destroyed to take down the whole system.' },
        { id: 'b', text: 'Because every computer on the Internet is shielded from radiation.' },
        { id: 'c', text: 'Because the Internet does not use physical cables.' },
        { id: 'd', text: 'Because disasters only affect one type of computer.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Decentralization ensures that the network as a whole is resilient even if large sections are damaged.',
      difficulty: 'hard'
    },
    {
      text: 'If Router A is connected to Router B, and B is connected to Router C, what is the impact if Router B fails?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Router A can no longer communicate with Router C (unless there is another path).' },
        { id: 'b', text: 'Router A and C will automatically connect wirelessly.' },
        { id: 'c', text: 'The entire Internet will stop working.' },
        { id: 'd', text: 'Nothing; the signal will jump over the failed router.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Without a redundant path, the failure of an intermediate node (Router B) breaks the connection between its neighbors.',
      difficulty: 'hard'
    }
  ],
  'topic-4.3': [
    {
      text: 'A programmer has a task that takes 100 minutes to complete on a single processor. They divide the task into 4 equal parts and run them simultaneously on 4 processors. What is the theoretical "speedup"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4' },
        { id: 'b', text: '25' },
        { id: 'c', text: '100' },
        { id: 'd', text: '1' }
      ],
      correctAnswers: ['a'],
      explanation: 'Speedup is (Sequential Time / Parallel Time). 100 / 25 = 4.',
      difficulty: 'hard'
    },
    {
      text: 'What is the "sequential" portion of a task?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The part of the code that must be executed one step at a time and cannot be parallelized.' },
        { id: 'b', text: 'The entire program code.' },
        { id: 'c', text: 'The first 10 lines of the program.' },
        { id: 'd', text: 'The part of the program that handles user input.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Amdahl\'s Law states that the sequential portion limits the maximum possible speedup from parallelization.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following describes "distributed computing"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A system where multiple autonomous computers communicate over a network to solve a large problem.' },
        { id: 'b', text: 'A single computer with many processors inside it.' },
        { id: 'c', text: 'Shipping physical computers to different locations.' },
        { id: 'd', text: 'Using a cloud storage service to save files.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Distributed systems leverage the power of many separate machines working together.',
      difficulty: 'hard'
    },
    {
      text: 'Why does adding more processors to a parallel system NOT always result in an equivalent increase in speed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Because of the overhead required for communication and coordination between processors.' },
        { id: 'b', text: 'Because processors get tired if they work together.' },
        { id: 'c', text: 'Because every program has an undecidable portion.' },
        { id: 'd', text: 'Because computers can only run one loop at a time.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Coordinate overhead and sequential dependencies limit scalability.',
      difficulty: 'hard'
    },
    {
      text: 'In a parallel system, what is "efficiency"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The ratio of speedup to the number of processors used.' },
        { id: 'b', text: 'The total amount of electricity used.' },
        { id: 'c', text: 'The number of lines of code per second.' },
        { id: 'd', text: 'How many fans are required to cool the system.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Efficiency measures how well the processors are being utilized (Ideal efficiency is 1.0).',
      difficulty: 'hard'
    },
    {
      text: 'A task has a 20% sequential portion. According to Amdahl\'s Law, what is the maximum possible speedup, even with an infinite number of processors?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '20' },
        { id: 'c', text: '80' },
        { id: 'd', text: 'Infinite' }
      ],
      correctAnswers: ['a'],
      explanation: 'Max speedup = 1 / (sequential portion). 1 / 0.20 = 5.',
      difficulty: 'hard'
    }
  ]
};

async function seedExtraBigIdeas() {
  console.log('Seeding Big Idea 2 and 4 Extra Hard Questions...');
  let totalCount = 0;
  for (const topicId in questions) {
    const topicQuestions = questions[topicId];
    const bigIdeaId = topicId.startsWith('topic-2') ? 'big-idea-2' : 'big-idea-4';
    
    // Get existing count to avoid collision
    const snapshot = await db.collection('questions')
      .where('topicId', '==', topicId)
      .where('addedBy', '==', 'system-extra-hard-v2')
      .get();
    
    let topicCount = snapshot.size;

    for (const q of topicQuestions) {
      const qId = `${topicId}-extra-h2-${topicCount}`;
      await db.collection('questions').doc(qId).set({
        ...q,
        id: qId,
        topicId: topicId,
        bigIdeaId: bigIdeaId,
        isCustom: false,
        addedBy: 'system-extra-hard-v2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deactivated: false
      });
      topicCount++;
      totalCount++;
    }
    console.log(`Added ${topicQuestions.length} questions for ${topicId}`);
  }
  console.log(`Done! Added ${totalCount} questions across Big Ideas 2 and 4.`);
}

seedExtraBigIdeas()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
