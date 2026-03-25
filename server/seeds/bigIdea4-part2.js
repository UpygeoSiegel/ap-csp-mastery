// Big Idea 4: Computer Systems and Networks - Part 2 (Topic 4.3)
// Run with: node server/seeds/bigIdea4-part2.js

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

if (process.env.FIREBASE_PROJECT_ID !== 'ap-csp-mastery') {
  console.error(`ERROR: Wrong project!`);
  process.exit(1);
}

const topics = [
  {
    id: '4-3',
    name: '4.3 Parallel and Distributed Computing',
    description: 'Understanding parallel and distributed computing concepts',
    bigIdeaId: 'big-idea-4',
    order: 3,
    questions: [
      {
        text: 'What is parallel computing?',
        options: [
          'Computers working in separate rooms',
          'Using multiple processors or cores to execute parts of a program simultaneously',
          'Running programs one after another',
          'A type of Internet connection'
        ],
        correctAnswer: 1,
        explanation: 'Parallel computing uses multiple processing units to execute different parts of a program at the same time, improving performance.'
      },
      {
        text: 'What is the main benefit of parallel computing?',
        options: [
          'It uses less electricity',
          'It can significantly reduce the time needed to complete tasks by doing multiple operations simultaneously',
          'It makes programs simpler to write',
          'It reduces the number of computers needed'
        ],
        correctAnswer: 1,
        explanation: 'Parallel computing can dramatically reduce execution time by performing multiple computations simultaneously instead of sequentially.'
      },
      {
        text: 'What is distributed computing?',
        options: [
          'Giving away computers for free',
          'Using multiple computers connected by a network to work on a problem together',
          'A single computer with multiple monitors',
          'Installing software on multiple computers'
        ],
        correctAnswer: 1,
        explanation: 'Distributed computing involves multiple separate computers communicating over a network to collaborate on solving problems.'
      },
      {
        text: 'Which of the following is an example of distributed computing?',
        options: [
          'A single computer with a fast processor',
          'Cloud computing services where tasks are processed across many data center servers',
          'A laptop running one program',
          'A calculator'
        ],
        correctAnswer: 1,
        explanation: 'Cloud computing is a prime example of distributed computing, where workloads are spread across many networked servers.'
      },
      {
        text: 'What is a "thread" in parallel computing?',
        options: [
          'A type of network cable',
          'A sequence of instructions that can execute independently alongside other threads',
          'A programming error',
          'A computer\'s power cord'
        ],
        correctAnswer: 1,
        explanation: 'A thread is an independent sequence of instructions within a program that can run concurrently with other threads.'
      },
      {
        text: 'Not all problems can be easily parallelized. Which type of problem is HARDEST to parallelize?',
        options: [
          'Processing each pixel of an image independently',
          'Calculating each step of a process that depends on the previous step\'s result',
          'Searching through a large database',
          'Sending emails to many recipients'
        ],
        correctAnswer: 1,
        explanation: 'Sequential dependencies (where each step needs the previous result) are hard to parallelize because steps cannot run simultaneously.'
      },
      {
        text: 'What is a "speedup" in parallel computing?',
        options: [
          'Making a single processor run faster',
          'The ratio of sequential execution time to parallel execution time',
          'Adding more hard drives',
          'Increasing Internet speed'
        ],
        correctAnswer: 1,
        explanation: 'Speedup measures how much faster a parallel program runs compared to its sequential version (e.g., 4x speedup means 4 times faster).'
      },
      {
        text: 'Why doesn\'t doubling the number of processors always double the speed?',
        options: [
          'It always does double the speed',
          'Overhead from coordination, communication, and parts of the problem that can\'t be parallelized limit speedup',
          'Processors don\'t work together',
          'More processors use more memory'
        ],
        correctAnswer: 1,
        explanation: 'Coordination overhead, communication time, and sequential portions of code limit the achievable speedup (Amdahl\'s Law).'
      },
      {
        text: 'What is a "race condition"?',
        options: [
          'A competition between processors',
          'A bug where the program\'s behavior depends on unpredictable timing of parallel operations',
          'A fast algorithm',
          'A type of network connection'
        ],
        correctAnswer: 1,
        explanation: 'A race condition occurs when multiple threads access shared data simultaneously and the result depends on the timing of their execution.'
      },
      {
        text: 'How can race conditions be prevented?',
        options: [
          'By using only one processor',
          'By using synchronization mechanisms like locks or mutexes to control access to shared resources',
          'By running programs faster',
          'Race conditions cannot be prevented'
        ],
        correctAnswer: 1,
        explanation: 'Synchronization mechanisms ensure that only one thread accesses shared data at a time, preventing race conditions.'
      },
      {
        text: 'What is a "deadlock" in parallel computing?',
        options: [
          'A computer that won\'t turn off',
          'A situation where two or more processes are waiting for each other, and none can proceed',
          'A very fast computation',
          'A type of network security'
        ],
        correctAnswer: 1,
        explanation: 'Deadlock occurs when processes are stuck waiting for resources held by each other, creating a cycle where no process can continue.'
      },
      {
        text: 'What is the benefit of using cloud computing for distributed tasks?',
        options: [
          'It eliminates the need for any computers',
          'It allows access to scalable computing resources without owning all the hardware',
          'Cloud computing is always free',
          'Cloud computing is slower than local computing'
        ],
        correctAnswer: 1,
        explanation: 'Cloud computing provides access to scalable, on-demand computing resources without the need to purchase and maintain physical infrastructure.'
      },
      {
        text: 'A task takes 100 seconds on one processor. If 80% can be parallelized perfectly across 4 processors, how long does it take?',
        options: [
          '25 seconds',
          '40 seconds',
          '80 seconds',
          '100 seconds'
        ],
        correctAnswer: 1,
        explanation: 'Sequential part: 20 seconds. Parallel part: 80 seconds ÷ 4 = 20 seconds. Total: 20 + 20 = 40 seconds.'
      },
      {
        text: 'What is "load balancing" in distributed computing?',
        options: [
          'Weighing computers before shipping',
          'Distributing work evenly across multiple processors or computers to maximize efficiency',
          'Reducing the number of tasks',
          'Increasing network bandwidth'
        ],
        correctAnswer: 1,
        explanation: 'Load balancing distributes work evenly to ensure all processors are utilized efficiently, avoiding situations where some are idle while others are overloaded.'
      },
      {
        text: 'Which of the following tasks is well-suited for parallel processing?',
        options: [
          'Reading a book chapter by chapter',
          'Applying a filter to millions of pixels in an image independently',
          'Following a recipe step by step',
          'Waiting for user input'
        ],
        correctAnswer: 1,
        explanation: 'Image processing is well-suited because each pixel can be processed independently, allowing many pixels to be processed simultaneously.'
      },
      {
        text: 'What is a "cluster" in computing?',
        options: [
          'A group of related files',
          'A group of connected computers working together as a unified system',
          'A type of keyboard',
          'A programming technique'
        ],
        correctAnswer: 1,
        explanation: 'A cluster is a group of computers connected together that work as a single system to provide greater computing power and reliability.'
      },
      {
        text: 'What does "scalability" mean in distributed computing?',
        options: [
          'The weight of the computers',
          'The ability to handle increased workload by adding more resources (processors/computers)',
          'The size of the computer screens',
          'The number of files stored'
        ],
        correctAnswer: 1,
        explanation: 'Scalability is the ability of a system to handle growing amounts of work by adding resources, such as more servers or processors.'
      },
      {
        text: 'Why is communication overhead a concern in distributed computing?',
        options: [
          'Talking between programmers takes time',
          'Time spent transferring data between computers can reduce the benefits of parallelization',
          'Computers need microphones',
          'Communication is always instantaneous'
        ],
        correctAnswer: 1,
        explanation: 'Network communication takes time, and if too much time is spent sending data between machines, it can outweigh the benefits of parallel processing.'
      },
      {
        text: 'What is Amdahl\'s Law about?',
        options: [
          'Computer pricing',
          'The theoretical limit on speedup based on the portion of a task that must be sequential',
          'Network security',
          'Memory usage'
        ],
        correctAnswer: 1,
        explanation: 'Amdahl\'s Law states that the speedup from parallelization is limited by the sequential portion of a task that cannot be parallelized.'
      },
      {
        text: 'A web server handles thousands of requests simultaneously. This is an example of:',
        options: [
          'Sequential processing',
          'Parallel or concurrent processing',
          'Offline processing',
          'Manual processing'
        ],
        correctAnswer: 1,
        explanation: 'Handling multiple requests simultaneously is parallel/concurrent processing, where different requests are processed by different threads or processes.'
      },
      {
        text: 'What is "MapReduce"?',
        options: [
          'A way to make maps smaller',
          'A programming model for processing large data sets across many computers in parallel',
          'A type of GPS system',
          'A navigation algorithm'
        ],
        correctAnswer: 1,
        explanation: 'MapReduce is a programming model that divides large tasks into smaller pieces (Map), processes them in parallel, then combines results (Reduce).'
      },
      {
        text: 'Which statement about parallel programming is TRUE?',
        options: [
          'Parallel programs are always simpler than sequential programs',
          'Parallel programming introduces challenges like synchronization and debugging that don\'t exist in sequential programming',
          'All programs should be parallel',
          'Parallel programming requires no special considerations'
        ],
        correctAnswer: 1,
        explanation: 'Parallel programming adds complexity including synchronization, race conditions, deadlocks, and more difficult debugging compared to sequential code.'
      },
      {
        text: 'What is "GPU computing"?',
        options: [
          'Gaming only',
          'Using graphics processing units for general-purpose parallel computation',
          'A type of monitor',
          'Graphics design software'
        ],
        correctAnswer: 1,
        explanation: 'GPUs have thousands of small cores excellent for parallel tasks. GPU computing uses these for general computation, not just graphics.'
      },
      {
        text: 'What is the difference between concurrency and parallelism?',
        options: [
          'They are exactly the same',
          'Concurrency manages multiple tasks (possibly on one core); parallelism executes multiple tasks simultaneously (requires multiple cores)',
          'Parallelism is always slower',
          'Concurrency requires more computers'
        ],
        correctAnswer: 1,
        explanation: 'Concurrency is about managing multiple tasks (interleaving execution). Parallelism is about executing tasks simultaneously on multiple processors.'
      },
      {
        text: 'SETI@Home is an example of:',
        options: [
          'A single supercomputer',
          'Distributed computing where volunteers\' computers contribute processing power',
          'A type of telescope',
          'A space station'
        ],
        correctAnswer: 1,
        explanation: 'SETI@Home was a distributed computing project where volunteers donated their computers\' idle time to analyze radio telescope data.'
      }
    ]
  }
];

async function seedTopics() {
  console.log('Starting to seed Big Idea 4 Part 2 topics and questions...');

  for (const topic of topics) {
    console.log(`\nProcessing topic: ${topic.name}`);

    // Check if topic already exists
    const existingTopic = await db.collection('topics').doc(topic.id).get();

    if (existingTopic.exists) {
      console.log(`Topic ${topic.id} already exists, updating questions...`);
    } else {
      // Create the topic document
      await db.collection('topics').doc(topic.id).set({
        name: topic.name,
        description: topic.description,
        bigIdeaId: topic.bigIdeaId,
        order: topic.order,
        createdAt: new Date()
      });
      console.log(`Created topic: ${topic.name}`);
    }

    // Add questions to the topic's questions subcollection
    const questionsRef = db.collection('topics').doc(topic.id).collection('questions');

    // Delete existing questions first
    const existingQuestions = await questionsRef.get();
    const deletePromises = existingQuestions.docs.map(doc => doc.ref.delete());
    await Promise.all(deletePromises);
    console.log(`Deleted ${existingQuestions.size} existing questions`);

    // Add new questions
    for (let i = 0; i < topic.questions.length; i++) {
      const question = topic.questions[i];
      await questionsRef.add({
        text: question.text,
        options: question.options,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        order: i + 1,
        createdAt: new Date()
      });
    }
    console.log(`Added ${topic.questions.length} questions to ${topic.name}`);
  }

  console.log('\n✅ Big Idea 4 Part 2 seeding completed!');
  console.log('Topics created: 4.3');
  console.log('Total questions: 25');
}

seedTopics()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error seeding topics:', error);
    process.exit(1);
  });
