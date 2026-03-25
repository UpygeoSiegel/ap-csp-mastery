/**
 * Seed script for Khan Academy-style AP CSP Topics
 * Based on Khan Academy's AP Computer Science Principles curriculum
 * Run with: node server/seeds/khan-academy-topics.js
 *
 * This creates all topics with empty question arrays (locked quizzes)
 * that can be populated with questions later.
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const { db } = require('../firebase');

// Verify we're using the correct project
if (process.env.FIREBASE_PROJECT_ID !== 'ap-csp-mastery') {
  console.error(`ERROR: Wrong project! Expected 'ap-csp-mastery' but got '${process.env.FIREBASE_PROJECT_ID}'`);
  console.error('Please update your .env file to use the correct project.');
  process.exit(1);
}

console.log(`Using project: ${process.env.FIREBASE_PROJECT_ID}`);

// ============================================
// KHAN ACADEMY AP CSP CURRICULUM STRUCTURE
// ============================================

const bigIdeas = [
  {
    id: 'digital-information',
    name: 'Unit 1: Digital Information',
    shortName: 'Digital Information',
    description: 'Learn how computers represent all types of information using binary (bits). Explore how text, images, and sound are digitally encoded, and understand data compression techniques.',
    order: 1,
    color: '#3B82F6' // Blue
  },
  {
    id: 'the-internet',
    name: 'Unit 2: The Internet',
    shortName: 'The Internet',
    description: 'Discover how the Internet works, from packets and protocols to DNS and HTTP. Learn about network architecture and how data travels across the globe.',
    order: 2,
    color: '#8B5CF6' // Purple
  },
  {
    id: 'intro-to-programming',
    name: 'Unit 3: Intro to Programming',
    shortName: 'Intro to Programming',
    description: 'Start your programming journey with fundamental concepts including variables, data types, operators, and basic input/output.',
    order: 3,
    color: '#10B981' // Green
  },
  {
    id: 'programming-functions-logic',
    name: 'Unit 4: Programming with Functions & Logic',
    shortName: 'Functions & Logic',
    description: 'Learn to write more complex programs using conditionals, loops, functions, and procedures. Understand how to break problems into manageable pieces.',
    order: 4,
    color: '#F59E0B' // Amber
  },
  {
    id: 'programming-lists',
    name: 'Unit 5: Programming with Lists',
    shortName: 'Lists',
    description: 'Master working with lists (arrays) to store and process collections of data. Learn iteration, searching, and filtering techniques.',
    order: 5,
    color: '#EF4444' // Red
  },
  {
    id: 'algorithms',
    name: 'Unit 6: Algorithms',
    shortName: 'Algorithms',
    description: 'Explore how algorithms solve problems efficiently. Learn about search algorithms, sorting algorithms, and how to analyze algorithm efficiency.',
    order: 6,
    color: '#06B6D4' // Cyan
  },
  {
    id: 'data-analysis',
    name: 'Unit 7: Data Analysis',
    shortName: 'Data Analysis',
    description: 'Learn to collect, process, and analyze data using programs. Understand data visualization and how to extract meaningful information from datasets.',
    order: 7,
    color: '#84CC16' // Lime
  },
  {
    id: 'simulations',
    name: 'Unit 8: Simulations',
    shortName: 'Simulations',
    description: 'Create computational models that simulate real-world processes. Learn about randomness, abstraction, and the power of simulation in problem-solving.',
    order: 8,
    color: '#EC4899' // Pink
  },
  {
    id: 'cybersecurity',
    name: 'Unit 9: Online Data Security',
    shortName: 'Cybersecurity',
    description: 'Understand threats to online security and how to protect against them. Learn about encryption, authentication, and safe computing practices.',
    order: 9,
    color: '#F97316' // Orange
  },
  {
    id: 'global-impact',
    name: 'Unit 10: Global Impact of Computing',
    shortName: 'Global Impact',
    description: 'Examine how computing affects society, including benefits and harms. Explore topics like digital divide, bias in algorithms, and ethical considerations.',
    order: 10,
    color: '#6366F1' // Indigo
  }
];

// Topics organized by Big Idea (Unit)
const topicsData = {
  'digital-information': [
    {
      id: 'di-1-bits-bytes',
      name: '1.1 Bits and Bytes',
      description: 'Understand the fundamental units of digital information: bits and bytes.',
      order: 1,
      learningObjectives: [
        'Define a bit as the smallest unit of data',
        'Explain how bits combine to form bytes',
        'Calculate storage capacity using bits and bytes'
      ]
    },
    {
      id: 'di-2-binary-numbers',
      name: '1.2 Binary Numbers',
      description: 'Learn to convert between binary and decimal number systems.',
      order: 2,
      learningObjectives: [
        'Convert binary numbers to decimal',
        'Convert decimal numbers to binary',
        'Understand place value in binary'
      ]
    },
    {
      id: 'di-3-limitations-binary',
      name: '1.3 Limitations of Binary',
      description: 'Explore overflow errors, roundoff errors, and the limits of digital representation.',
      order: 3,
      learningObjectives: [
        'Explain overflow errors',
        'Understand roundoff errors in floating-point numbers',
        'Recognize the limitations of fixed-width representation'
      ]
    },
    {
      id: 'di-4-representing-text',
      name: '1.4 Representing Text in Binary',
      description: 'Learn how computers encode text using ASCII and Unicode.',
      order: 4,
      learningObjectives: [
        'Explain how ASCII represents characters',
        'Understand the purpose of Unicode',
        'Convert between characters and their binary codes'
      ]
    },
    {
      id: 'di-5-representing-images',
      name: '1.5 Representing Images in Binary',
      description: 'Discover how digital images are stored as pixels and color values.',
      order: 5,
      learningObjectives: [
        'Explain how pixels represent images',
        'Understand RGB color encoding',
        'Calculate image file sizes based on resolution and color depth'
      ]
    },
    {
      id: 'di-6-representing-sound',
      name: '1.6 Representing Sound in Binary',
      description: 'Learn how analog sound is converted to digital through sampling.',
      order: 6,
      learningObjectives: [
        'Explain the sampling process',
        'Understand sample rate and bit depth',
        'Recognize tradeoffs in audio quality vs file size'
      ]
    },
    {
      id: 'di-7-lossless-compression',
      name: '1.7 Lossless Data Compression',
      description: 'Explore compression techniques that preserve all original data.',
      order: 7,
      learningObjectives: [
        'Explain run-length encoding',
        'Understand how lossless compression works',
        'Identify when lossless compression is appropriate'
      ]
    },
    {
      id: 'di-8-lossy-compression',
      name: '1.8 Lossy Data Compression',
      description: 'Learn about compression that reduces file size by removing some data.',
      order: 8,
      learningObjectives: [
        'Compare lossy vs lossless compression',
        'Understand JPEG and MP3 compression',
        'Evaluate tradeoffs between quality and file size'
      ]
    }
  ],

  'the-internet': [
    {
      id: 'inet-1-what-is-internet',
      name: '2.1 What is the Internet?',
      description: 'Understand the basic structure and purpose of the Internet.',
      order: 1,
      learningObjectives: [
        'Define the Internet as a network of networks',
        'Distinguish between the Internet and World Wide Web',
        'Identify key components of Internet infrastructure'
      ]
    },
    {
      id: 'inet-2-packets-routing',
      name: '2.2 Packets and Routing',
      description: 'Learn how data is broken into packets and routed across networks.',
      order: 2,
      learningObjectives: [
        'Explain packet switching',
        'Understand how routers direct traffic',
        'Describe fault tolerance in network design'
      ]
    },
    {
      id: 'inet-3-ip-addresses',
      name: '2.3 IP Addresses',
      description: 'Understand how devices are identified on the Internet.',
      order: 3,
      learningObjectives: [
        'Explain IPv4 and IPv6 addressing',
        'Understand the role of IP addresses',
        'Recognize the need for more IP addresses'
      ]
    },
    {
      id: 'inet-4-dns',
      name: '2.4 Domain Name System (DNS)',
      description: 'Learn how domain names are translated to IP addresses.',
      order: 4,
      learningObjectives: [
        'Explain the purpose of DNS',
        'Understand DNS hierarchy',
        'Trace a DNS lookup process'
      ]
    },
    {
      id: 'inet-5-protocols',
      name: '2.5 Internet Protocols (TCP/IP)',
      description: 'Understand the protocols that enable Internet communication.',
      order: 5,
      learningObjectives: [
        'Explain the role of TCP and IP',
        'Understand the layered protocol model',
        'Describe how protocols ensure reliable delivery'
      ]
    },
    {
      id: 'inet-6-http-web',
      name: '2.6 HTTP and the World Wide Web',
      description: 'Learn how web browsers and servers communicate.',
      order: 6,
      learningObjectives: [
        'Explain HTTP request-response cycle',
        'Understand URLs and their components',
        'Describe the difference between HTTP and HTTPS'
      ]
    },
    {
      id: 'inet-7-scalability',
      name: '2.7 Scalability and Redundancy',
      description: 'Explore how the Internet handles growth and failures.',
      order: 7,
      learningObjectives: [
        'Explain network scalability',
        'Understand redundancy in network design',
        'Describe how the Internet maintains reliability'
      ]
    }
  ],

  'intro-to-programming': [
    {
      id: 'prog1-1-what-is-programming',
      name: '3.1 What is Programming?',
      description: 'Introduction to programming concepts and why we program.',
      order: 1,
      learningObjectives: [
        'Define programming and its purpose',
        'Understand how computers execute instructions',
        'Identify real-world applications of programming'
      ]
    },
    {
      id: 'prog1-2-variables',
      name: '3.2 Variables and Data Types',
      description: 'Learn to store and manage data using variables.',
      order: 2,
      learningObjectives: [
        'Declare and initialize variables',
        'Identify different data types (numbers, strings, booleans)',
        'Understand variable naming conventions'
      ]
    },
    {
      id: 'prog1-3-operators',
      name: '3.3 Operators and Expressions',
      description: 'Use operators to perform calculations and comparisons.',
      order: 3,
      learningObjectives: [
        'Use arithmetic operators (+, -, *, /, MOD)',
        'Apply comparison operators (=, <, >, <=, >=)',
        'Combine operators in expressions'
      ]
    },
    {
      id: 'prog1-4-input-output',
      name: '3.4 Input and Output',
      description: 'Learn to receive input from users and display output.',
      order: 4,
      learningObjectives: [
        'Accept user input in programs',
        'Display output to users',
        'Process input to produce meaningful output'
      ]
    },
    {
      id: 'prog1-5-strings',
      name: '3.5 Working with Strings',
      description: 'Manipulate and process text data in programs.',
      order: 5,
      learningObjectives: [
        'Concatenate strings',
        'Access individual characters',
        'Use string length and substring operations'
      ]
    },
    {
      id: 'prog1-6-pseudocode',
      name: '3.6 Pseudocode and Flowcharts',
      description: 'Plan programs using pseudocode and visual diagrams.',
      order: 6,
      learningObjectives: [
        'Write pseudocode to plan algorithms',
        'Create flowcharts for program logic',
        'Translate between pseudocode and actual code'
      ]
    }
  ],

  'programming-functions-logic': [
    {
      id: 'prog2-1-conditionals',
      name: '4.1 Conditionals (If Statements)',
      description: 'Make decisions in programs using conditional statements.',
      order: 1,
      learningObjectives: [
        'Write if statements',
        'Use if-else for two-way decisions',
        'Chain conditions with else-if'
      ]
    },
    {
      id: 'prog2-2-boolean-logic',
      name: '4.2 Boolean Logic',
      description: 'Combine conditions using AND, OR, and NOT operators.',
      order: 2,
      learningObjectives: [
        'Use AND to require multiple conditions',
        'Use OR to allow alternative conditions',
        'Use NOT to negate conditions'
      ]
    },
    {
      id: 'prog2-3-nested-conditionals',
      name: '4.3 Nested Conditionals',
      description: 'Handle complex decisions with nested if statements.',
      order: 3,
      learningObjectives: [
        'Write nested conditional statements',
        'Trace execution through nested conditions',
        'Simplify complex nested logic'
      ]
    },
    {
      id: 'prog2-4-loops-intro',
      name: '4.4 Introduction to Loops',
      description: 'Repeat code using loop structures.',
      order: 4,
      learningObjectives: [
        'Understand the purpose of loops',
        'Use REPEAT loops for fixed iterations',
        'Avoid infinite loops'
      ]
    },
    {
      id: 'prog2-5-while-loops',
      name: '4.5 While Loops',
      description: 'Repeat code while a condition is true.',
      order: 5,
      learningObjectives: [
        'Write while loop conditions',
        'Trace while loop execution',
        'Choose between REPEAT and WHILE'
      ]
    },
    {
      id: 'prog2-6-functions',
      name: '4.6 Functions and Procedures',
      description: 'Create reusable blocks of code with functions.',
      order: 6,
      learningObjectives: [
        'Define and call procedures',
        'Pass parameters to procedures',
        'Return values from functions'
      ]
    },
    {
      id: 'prog2-7-function-params',
      name: '4.7 Parameters and Return Values',
      description: 'Pass data into functions and get results back.',
      order: 7,
      learningObjectives: [
        'Use multiple parameters',
        'Understand return statements',
        'Distinguish between parameters and arguments'
      ]
    },
    {
      id: 'prog2-8-documentation',
      name: '4.8 Program Documentation',
      description: 'Write clear comments and documentation for code.',
      order: 8,
      learningObjectives: [
        'Write meaningful comments',
        'Document function behavior',
        'Acknowledge code from other sources'
      ]
    }
  ],

  'programming-lists': [
    {
      id: 'prog3-1-intro-lists',
      name: '5.1 Introduction to Lists',
      description: 'Store collections of data using lists (arrays).',
      order: 1,
      learningObjectives: [
        'Create and initialize lists',
        'Access elements by index',
        'Understand list length'
      ]
    },
    {
      id: 'prog3-2-modifying-lists',
      name: '5.2 Modifying Lists',
      description: 'Add, remove, and update elements in lists.',
      order: 2,
      learningObjectives: [
        'Append elements to lists',
        'Insert elements at specific positions',
        'Remove elements from lists'
      ]
    },
    {
      id: 'prog3-3-iterating-lists',
      name: '5.3 Iterating Through Lists',
      description: 'Process each element in a list using loops.',
      order: 3,
      learningObjectives: [
        'Use FOR EACH loops with lists',
        'Use index-based iteration',
        'Process all elements in a list'
      ]
    },
    {
      id: 'prog3-4-searching-lists',
      name: '5.4 Searching Lists',
      description: 'Find specific elements within lists.',
      order: 4,
      learningObjectives: [
        'Implement linear search',
        'Check if an element exists',
        'Find minimum and maximum values'
      ]
    },
    {
      id: 'prog3-5-filtering-lists',
      name: '5.5 Filtering Lists',
      description: 'Create new lists based on criteria.',
      order: 5,
      learningObjectives: [
        'Filter elements meeting a condition',
        'Create subsets of lists',
        'Combine filtering with other operations'
      ]
    },
    {
      id: 'prog3-6-list-algorithms',
      name: '5.6 List Processing Algorithms',
      description: 'Common algorithms for working with lists.',
      order: 6,
      learningObjectives: [
        'Calculate sum and average of list elements',
        'Count elements meeting criteria',
        'Combine multiple list operations'
      ]
    }
  ],

  'algorithms': [
    {
      id: 'algo-1-what-is-algorithm',
      name: '6.1 What is an Algorithm?',
      description: 'Understand the concept and characteristics of algorithms.',
      order: 1,
      learningObjectives: [
        'Define an algorithm',
        'Identify algorithm characteristics (sequence, precision, finite)',
        'Recognize algorithms in everyday life'
      ]
    },
    {
      id: 'algo-2-expressing-algorithms',
      name: '6.2 Expressing Algorithms',
      description: 'Represent algorithms in different formats.',
      order: 2,
      learningObjectives: [
        'Write algorithms in natural language',
        'Convert to pseudocode',
        'Create flowchart representations'
      ]
    },
    {
      id: 'algo-3-linear-search',
      name: '6.3 Linear Search',
      description: 'Search through data one element at a time.',
      order: 3,
      learningObjectives: [
        'Implement linear search',
        'Analyze when to use linear search',
        'Count comparisons in linear search'
      ]
    },
    {
      id: 'algo-4-binary-search',
      name: '6.4 Binary Search',
      description: 'Efficiently search sorted data by dividing in half.',
      order: 4,
      learningObjectives: [
        'Understand binary search requirements',
        'Implement binary search',
        'Compare efficiency to linear search'
      ]
    },
    {
      id: 'algo-5-sorting-intro',
      name: '6.5 Introduction to Sorting',
      description: 'Understand why and how we sort data.',
      order: 5,
      learningObjectives: [
        'Explain the importance of sorting',
        'Identify sorted vs unsorted data',
        'Recognize different sorting criteria'
      ]
    },
    {
      id: 'algo-6-selection-sort',
      name: '6.6 Selection Sort',
      description: 'Sort by repeatedly selecting the minimum element.',
      order: 6,
      learningObjectives: [
        'Trace selection sort execution',
        'Implement selection sort',
        'Analyze selection sort efficiency'
      ]
    },
    {
      id: 'algo-7-algorithm-efficiency',
      name: '6.7 Algorithm Efficiency',
      description: 'Compare algorithms based on their speed and resource usage.',
      order: 7,
      learningObjectives: [
        'Understand time complexity basics',
        'Compare algorithm efficiency',
        'Recognize reasonable vs unreasonable time'
      ]
    },
    {
      id: 'algo-8-undecidable-problems',
      name: '6.8 Undecidable Problems',
      description: 'Explore problems that cannot be solved by any algorithm.',
      order: 8,
      learningObjectives: [
        'Define decidable vs undecidable problems',
        'Understand the halting problem',
        'Recognize limitations of computation'
      ]
    }
  ],

  'data-analysis': [
    {
      id: 'data-1-what-is-data',
      name: '7.1 What is Data?',
      description: 'Understand the difference between data and information.',
      order: 1,
      learningObjectives: [
        'Define data and information',
        'Identify different types of data',
        'Understand data sources'
      ]
    },
    {
      id: 'data-2-metadata',
      name: '7.2 Metadata',
      description: 'Learn about data that describes other data.',
      order: 2,
      learningObjectives: [
        'Define metadata',
        'Identify metadata examples',
        'Understand privacy implications of metadata'
      ]
    },
    {
      id: 'data-3-collecting-data',
      name: '7.3 Collecting Data',
      description: 'Explore methods and challenges of data collection.',
      order: 3,
      learningObjectives: [
        'Identify data collection methods',
        'Recognize bias in data collection',
        'Understand sampling techniques'
      ]
    },
    {
      id: 'data-4-cleaning-data',
      name: '7.4 Cleaning Data',
      description: 'Prepare data for analysis by handling errors and inconsistencies.',
      order: 4,
      learningObjectives: [
        'Identify data quality issues',
        'Handle missing and duplicate data',
        'Normalize inconsistent data'
      ]
    },
    {
      id: 'data-5-visualizing-data',
      name: '7.5 Visualizing Data',
      description: 'Create charts and graphs to reveal patterns.',
      order: 5,
      learningObjectives: [
        'Choose appropriate visualization types',
        'Create clear and accurate visualizations',
        'Interpret data visualizations'
      ]
    },
    {
      id: 'data-6-patterns-trends',
      name: '7.6 Finding Patterns and Trends',
      description: 'Extract meaningful insights from data analysis.',
      order: 6,
      learningObjectives: [
        'Identify trends over time',
        'Recognize correlations',
        'Distinguish correlation from causation'
      ]
    },
    {
      id: 'data-7-using-programs',
      name: '7.7 Using Programs with Data',
      description: 'Automate data processing with programs.',
      order: 7,
      learningObjectives: [
        'Process data files with programs',
        'Automate data analysis tasks',
        'Generate reports from data'
      ]
    }
  ],

  'simulations': [
    {
      id: 'sim-1-what-is-simulation',
      name: '8.1 What is a Simulation?',
      description: 'Understand computational models of real-world processes.',
      order: 1,
      learningObjectives: [
        'Define simulation',
        'Identify benefits of simulations',
        'Recognize simulation examples'
      ]
    },
    {
      id: 'sim-2-building-simulations',
      name: '8.2 Building Simulations',
      description: 'Create simple simulations using programming.',
      order: 2,
      learningObjectives: [
        'Design simulation parameters',
        'Implement simulation logic',
        'Run and analyze simulation results'
      ]
    },
    {
      id: 'sim-3-randomness',
      name: '8.3 Randomness in Simulations',
      description: 'Use random numbers to model uncertainty.',
      order: 3,
      learningObjectives: [
        'Generate random numbers',
        'Apply randomness to simulations',
        'Understand pseudo-random numbers'
      ]
    },
    {
      id: 'sim-4-abstraction',
      name: '8.4 Abstraction in Simulations',
      description: 'Simplify complex systems for modeling.',
      order: 4,
      learningObjectives: [
        'Identify what to include and exclude',
        'Create appropriate abstractions',
        'Understand tradeoffs in abstraction'
      ]
    },
    {
      id: 'sim-5-limitations',
      name: '8.5 Limitations of Simulations',
      description: 'Recognize what simulations cannot accurately predict.',
      order: 5,
      learningObjectives: [
        'Identify simulation limitations',
        'Understand model accuracy',
        'Evaluate simulation results critically'
      ]
    }
  ],

  'cybersecurity': [
    {
      id: 'cyber-1-intro-security',
      name: '9.1 Introduction to Cybersecurity',
      description: 'Understand the importance of online security.',
      order: 1,
      learningObjectives: [
        'Define cybersecurity',
        'Identify common threats',
        'Understand the CIA triad (Confidentiality, Integrity, Availability)'
      ]
    },
    {
      id: 'cyber-2-pii',
      name: '9.2 Personal Identifiable Information (PII)',
      description: 'Protect sensitive personal information online.',
      order: 2,
      learningObjectives: [
        'Define PII',
        'Identify types of PII',
        'Understand risks of PII exposure'
      ]
    },
    {
      id: 'cyber-3-encryption',
      name: '9.3 Encryption',
      description: 'Learn how data is protected through encryption.',
      order: 3,
      learningObjectives: [
        'Understand symmetric encryption',
        'Learn about public key cryptography',
        'Recognize encrypted vs unencrypted data'
      ]
    },
    {
      id: 'cyber-4-authentication',
      name: '9.4 Authentication',
      description: 'Verify identity and protect access to systems.',
      order: 4,
      learningObjectives: [
        'Understand password security',
        'Learn about multi-factor authentication',
        'Implement strong authentication practices'
      ]
    },
    {
      id: 'cyber-5-phishing',
      name: '9.5 Phishing and Social Engineering',
      description: 'Recognize and avoid social engineering attacks.',
      order: 5,
      learningObjectives: [
        'Identify phishing attempts',
        'Understand social engineering tactics',
        'Practice safe online behavior'
      ]
    },
    {
      id: 'cyber-6-malware',
      name: '9.6 Malware and Software Security',
      description: 'Protect systems from malicious software.',
      order: 6,
      learningObjectives: [
        'Identify types of malware',
        'Understand how malware spreads',
        'Implement protective measures'
      ]
    },
    {
      id: 'cyber-7-network-security',
      name: '9.7 Network Security',
      description: 'Secure data as it travels across networks.',
      order: 7,
      learningObjectives: [
        'Understand secure connections (HTTPS)',
        'Learn about firewalls and VPNs',
        'Recognize network vulnerabilities'
      ]
    }
  ],

  'global-impact': [
    {
      id: 'impact-1-computing-innovations',
      name: '10.1 Computing Innovations',
      description: 'Explore how computing has transformed society.',
      order: 1,
      learningObjectives: [
        'Identify computing innovations',
        'Analyze innovation impacts',
        'Understand how innovations evolve'
      ]
    },
    {
      id: 'impact-2-beneficial-effects',
      name: '10.2 Beneficial Effects of Computing',
      description: 'Examine positive impacts of computing on society.',
      order: 2,
      learningObjectives: [
        'Identify benefits in various sectors',
        'Understand accessibility improvements',
        'Recognize efficiency gains'
      ]
    },
    {
      id: 'impact-3-harmful-effects',
      name: '10.3 Harmful Effects of Computing',
      description: 'Recognize negative consequences of computing.',
      order: 3,
      learningObjectives: [
        'Identify potential harms',
        'Understand unintended consequences',
        'Recognize misuse of technology'
      ]
    },
    {
      id: 'impact-4-digital-divide',
      name: '10.4 The Digital Divide',
      description: 'Understand inequalities in access to technology.',
      order: 4,
      learningObjectives: [
        'Define the digital divide',
        'Identify causes of the divide',
        'Explore solutions to inequality'
      ]
    },
    {
      id: 'impact-5-bias-computing',
      name: '10.5 Bias in Computing',
      description: 'Recognize and address bias in algorithms and data.',
      order: 5,
      learningObjectives: [
        'Identify sources of bias',
        'Understand algorithmic bias',
        'Consider fairness in computing'
      ]
    },
    {
      id: 'impact-6-crowdsourcing',
      name: '10.6 Crowdsourcing and Citizen Science',
      description: 'Explore collaborative problem-solving through technology.',
      order: 6,
      learningObjectives: [
        'Define crowdsourcing',
        'Identify crowdsourcing examples',
        'Understand benefits and challenges'
      ]
    },
    {
      id: 'impact-7-legal-ethical',
      name: '10.7 Legal and Ethical Concerns',
      description: 'Navigate legal and ethical issues in computing.',
      order: 7,
      learningObjectives: [
        'Understand intellectual property',
        'Learn about software licensing',
        'Consider ethical responsibilities'
      ]
    },
    {
      id: 'impact-8-safe-computing',
      name: '10.8 Safe Computing Practices',
      description: 'Develop habits for responsible technology use.',
      order: 8,
      learningObjectives: [
        'Protect personal information',
        'Verify information sources',
        'Practice digital citizenship'
      ]
    }
  ]
};

async function seedKhanAcademyTopics() {
  console.log('\n========================================');
  console.log('Khan Academy AP CSP Topic Seeder');
  console.log('========================================\n');

  try {
    // First, clear existing bigIdeas and topics
    console.log('Clearing existing data...');

    const existingBigIdeas = await db.collection('bigIdeas').get();
    const existingTopics = await db.collection('topics').get();

    const batch1 = db.batch();
    existingBigIdeas.docs.forEach(doc => batch1.delete(doc.ref));
    if (existingBigIdeas.docs.length > 0) {
      await batch1.commit();
      console.log(`Deleted ${existingBigIdeas.docs.length} existing big ideas`);
    }

    const batch2 = db.batch();
    existingTopics.docs.forEach(doc => batch2.delete(doc.ref));
    if (existingTopics.docs.length > 0) {
      await batch2.commit();
      console.log(`Deleted ${existingTopics.docs.length} existing topics`);
    }

    // Create all Big Ideas (Units)
    console.log('\nCreating Units (Big Ideas)...');
    for (const bigIdea of bigIdeas) {
      await db.collection('bigIdeas').doc(bigIdea.id).set({
        name: bigIdea.name,
        shortName: bigIdea.shortName,
        description: bigIdea.description,
        order: bigIdea.order,
        color: bigIdea.color,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      console.log(`  Created: ${bigIdea.name}`);
    }

    // Create all Topics with empty questions (locked state)
    console.log('\nCreating Topics (with empty question arrays)...');
    let totalTopics = 0;

    for (const [bigIdeaId, topics] of Object.entries(topicsData)) {
      console.log(`\n  ${bigIdeaId}:`);

      for (const topic of topics) {
        await db.collection('topics').doc(topic.id).set({
          name: topic.name,
          description: topic.description,
          bigIdeaId: bigIdeaId,
          order: topic.order,
          learningObjectives: topic.learningObjectives,
          questions: [], // Empty - all quizzes start locked
          createdAt: new Date(),
          updatedAt: new Date()
        });
        console.log(`    - ${topic.name}`);
        totalTopics++;
      }
    }

    console.log('\n========================================');
    console.log('Seeding Complete!');
    console.log('========================================');
    console.log(`Total Units: ${bigIdeas.length}`);
    console.log(`Total Topics: ${totalTopics}`);
    console.log('\nAll topics have empty question arrays (locked quizzes).');
    console.log('Add questions to topics to unlock them for students.');

  } catch (error) {
    console.error('\nError seeding data:', error);
    throw error;
  }
}

// Run the seed function
seedKhanAcademyTopics()
  .then(() => {
    console.log('\nSeeding complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
