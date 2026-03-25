const { db } = require('./server/firebase');

// Mapping of AP CSP topics to Khan Academy resources and general study materials
const topicResourceMapping = {
  // Big Idea 1: Creative Development
  '1.1': { // Collaboration
    topicName: 'Collaboration',
    khanAcademyResources: [
      {
        title: 'Collaborative Programming',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-environment/a/collaborative-programming',
        type: 'article',
        description: 'Learn about pair programming and collaborative development practices'
      },
      {
        title: 'Version Control Basics',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-environment/a/version-control',
        type: 'article',
        description: 'Understanding version control systems for collaborative work'
      }
    ],
    additionalResources: [
      {
        title: 'Git and GitHub Tutorial',
        url: 'https://www.codecademy.com/learn/learn-git',
        type: 'external',
        description: 'Interactive tutorial on version control with Git'
      }
    ]
  },
  
  '1.2': { // Program Function and Purpose  
    topicName: 'Program Function and Purpose',
    khanAcademyResources: [
      {
        title: 'Planning a Program',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-environment/a/planning-a-program',
        type: 'article',
        description: 'How to plan and design programs with clear purpose'
      },
      {
        title: 'Program Documentation',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-environment/a/program-documentation',
        type: 'article', 
        description: 'Best practices for documenting program functionality'
      }
    ],
    additionalResources: []
  },

  '1.3': { // Program Design and Development
    topicName: 'Program Design and Development',
    khanAcademyResources: [
      {
        title: 'Program Development Process',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-environment/a/program-development-process',
        type: 'article',
        description: 'Learn the iterative program development process'
      },
      {
        title: 'Top-down Design',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-environment/a/top-down-design',
        type: 'article',
        description: 'Breaking down complex problems into manageable parts'
      }
    ],
    additionalResources: []
  },

  '1.4': { // Identifying and Correcting Errors
    topicName: 'Identifying and Correcting Errors',
    khanAcademyResources: [
      {
        title: 'Debugging Strategies',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-environment/a/debugging-strategies',
        type: 'article',
        description: 'Systematic approaches to finding and fixing bugs'
      },
      {
        title: 'Types of Errors',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-environment/a/types-of-errors',
        type: 'article',
        description: 'Understanding syntax, runtime, and logic errors'
      }
    ],
    additionalResources: []
  },

  // Big Idea 2: Data  
  '2.1': { // Binary Numbers
    topicName: 'Binary Numbers',
    khanAcademyResources: [
      {
        title: 'Intro to Number Bases',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:number-bases/a/number-bases-introduction',
        type: 'article',
        description: 'Understanding binary and other number systems'
      },
      {
        title: 'Binary to Decimal Conversion',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:number-bases/a/binary-decimal-conversions',
        type: 'exercise',
        description: 'Practice converting between binary and decimal'
      },
      {
        title: 'Hexadecimal Number System',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:number-bases/a/hexadecimal-number-system',
        type: 'article',
        description: 'Learn about hexadecimal representation'
      }
    ],
    additionalResources: []
  },

  '2.2': { // Data Compression
    topicName: 'Data Compression',  
    khanAcademyResources: [
      {
        title: 'Lossless Data Compression',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:data-compression/a/lossless-data-compression',
        type: 'article',
        description: 'Understanding lossless compression techniques'
      },
      {
        title: 'Lossy Data Compression', 
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:data-compression/a/lossy-data-compression',
        type: 'article',
        description: 'Learn about lossy compression and trade-offs'
      }
    ],
    additionalResources: []
  },

  '2.3': { // Extracting Information from Data
    topicName: 'Extracting Information from Data',
    khanAcademyResources: [
      {
        title: 'Data Visualization',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:data-analysis/a/data-visualization',
        type: 'article',
        description: 'Creating meaningful visualizations from data'
      },
      {
        title: 'Filtering and Cleaning Data',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:data-analysis/a/filtering-cleaning-data',
        type: 'article', 
        description: 'Preparing data for analysis'
      }
    ],
    additionalResources: []
  },

  '2.4': { // Using Programs with Data
    topicName: 'Using Programs with Data',
    khanAcademyResources: [
      {
        title: 'Processing Data with Programs',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:data-analysis/a/processing-data-programs',
        type: 'article',
        description: 'Using programming to process and analyze data'
      }
    ],
    additionalResources: []
  },

  // Big Idea 3: Algorithms and Programming
  '3.1': { // Variables and Assignments
    topicName: 'Variables and Assignments',
    khanAcademyResources: [
      {
        title: 'Variables and Expressions',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-variables/a/variables-expressions',
        type: 'article',
        description: 'Understanding variables and how to use them'
      },
      {
        title: 'Variable Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-variables/e/variables-practice',
        type: 'exercise',
        description: 'Practice working with variables'
      }
    ],
    additionalResources: []
  },

  '3.2': { // Data Abstraction
    topicName: 'Data Abstraction',
    khanAcademyResources: [
      {
        title: 'Introduction to Lists',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-lists/a/intro-to-lists',
        type: 'article',
        description: 'Understanding data abstraction with lists'
      },
      {
        title: 'Working with Lists',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-lists/a/working-with-lists',
        type: 'article',
        description: 'Operations and methods for list manipulation'
      }
    ],
    additionalResources: []
  },

  '3.3': { // Mathematical Expressions
    topicName: 'Mathematical Expressions',
    khanAcademyResources: [
      {
        title: 'Arithmetic Operations',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-expressions/a/arithmetic-operations',
        type: 'article',
        description: 'Using mathematical operations in programming'
      },
      {
        title: 'Order of Operations',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-expressions/a/order-of-operations',
        type: 'article',
        description: 'Understanding operator precedence'
      }
    ],
    additionalResources: []
  },

  '3.4': { // Strings
    topicName: 'Strings',
    khanAcademyResources: [
      {
        title: 'Working with Strings',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-strings/a/working-with-strings',
        type: 'article',
        description: 'String operations and manipulation'
      },
      {
        title: 'String Methods',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-strings/a/string-methods',
        type: 'article',
        description: 'Common string methods and functions'
      }
    ],
    additionalResources: []
  },

  '3.5': { // Boolean Expressions
    topicName: 'Boolean Expressions',
    khanAcademyResources: [
      {
        title: 'Boolean Logic',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-logic/a/boolean-logic',
        type: 'article',
        description: 'Understanding boolean values and logical operators'
      },
      {
        title: 'Logical Operators',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-logic/a/logical-operators',
        type: 'article',
        description: 'AND, OR, and NOT operations'
      }
    ],
    additionalResources: []
  },

  '3.6': { // Conditionals
    topicName: 'Conditionals',
    khanAcademyResources: [
      {
        title: 'Conditional Statements',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-conditionals/a/conditional-statements',
        type: 'article',
        description: 'If-else statements and conditional logic'
      },
      {
        title: 'Conditional Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-conditionals/e/conditional-practice',
        type: 'exercise',
        description: 'Practice with conditional statements'
      }
    ],
    additionalResources: []
  },

  '3.7': { // Nested Conditionals
    topicName: 'Nested Conditionals',
    khanAcademyResources: [
      {
        title: 'Nested Conditionals',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-conditionals/a/nested-conditionals',
        type: 'article',
        description: 'Complex conditional structures'
      },
      {
        title: 'Else-if Statements',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-conditionals/a/else-if-statements',
        type: 'article',
        description: 'Chaining conditional statements'
      }
    ],
    additionalResources: []
  },

  '3.8': { // Iteration
    topicName: 'Iteration',
    khanAcademyResources: [
      {
        title: 'Intro to Loops',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-loops/a/intro-to-loops',
        type: 'article',
        description: 'Understanding loops and repetition'
      },
      {
        title: 'For Loops',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-loops/a/for-loops',
        type: 'article',
        description: 'Using for loops for iteration'
      },
      {
        title: 'While Loops',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-loops/a/while-loops',
        type: 'article',
        description: 'Understanding while loops and their uses'
      }
    ],
    additionalResources: []
  },

  '3.9': { // Developing Algorithms
    topicName: 'Developing Algorithms',
    khanAcademyResources: [
      {
        title: 'Intro to Algorithms',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/intro-to-algorithms/a/what-is-an-algorithm',
        type: 'article',
        description: 'Understanding what algorithms are and how to design them'
      },
      {
        title: 'Algorithm Design Strategies',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/intro-to-algorithms/a/algorithm-design-strategies',
        type: 'article',
        description: 'Approaches to designing effective algorithms'
      }
    ],
    additionalResources: []
  },

  '3.10': { // Lists
    topicName: 'Lists',
    khanAcademyResources: [
      {
        title: 'Introduction to Lists',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-lists/a/intro-to-lists',
        type: 'article',
        description: 'Working with lists and arrays'
      },
      {
        title: 'List Operations',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-lists/a/list-operations',
        type: 'article',
        description: 'Adding, removing, and modifying list elements'
      },
      {
        title: 'Iterating Through Lists',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-lists/a/iterating-through-lists',
        type: 'article',
        description: 'Using loops to process list data'
      }
    ],
    additionalResources: []
  },

  '3.11': { // Binary Search
    topicName: 'Binary Search',
    khanAcademyResources: [
      {
        title: 'Binary Search Algorithm',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/searching-algorithms/a/binary-search',
        type: 'article',
        description: 'Understanding the binary search algorithm'
      },
      {
        title: 'Linear vs Binary Search',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/searching-algorithms/a/linear-vs-binary-search',
        type: 'article',
        description: 'Comparing search algorithm efficiency'
      }
    ],
    additionalResources: []
  },

  '3.12': { // Calling Procedures
    topicName: 'Calling Procedures',
    khanAcademyResources: [
      {
        title: 'Functions and Procedures',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-functions/a/functions-procedures',
        type: 'article',
        description: 'Understanding and using functions'
      },
      {
        title: 'Function Parameters',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-functions/a/function-parameters',
        type: 'article',
        description: 'Passing data to functions'
      }
    ],
    additionalResources: []
  },

  '3.13': { // Developing Procedures
    topicName: 'Developing Procedures',
    khanAcademyResources: [
      {
        title: 'Writing Your Own Functions',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-functions/a/writing-functions',
        type: 'article',
        description: 'Creating custom functions and procedures'
      },
      {
        title: 'Function Return Values',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-functions/a/function-return-values',
        type: 'article',
        description: 'Understanding function outputs'
      }
    ],
    additionalResources: []
  },

  '3.14': { // Libraries
    topicName: 'Libraries',
    khanAcademyResources: [
      {
        title: 'Using Libraries',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-libraries/a/using-libraries',
        type: 'article',
        description: 'Importing and using external libraries'
      },
      {
        title: 'API Documentation',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-libraries/a/api-documentation',
        type: 'article',
        description: 'Reading and understanding API documentation'
      }
    ],
    additionalResources: []
  },

  '3.15': { // Random Values
    topicName: 'Random Values',
    khanAcademyResources: [
      {
        title: 'Generating Random Numbers',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-random/a/generating-random-numbers',
        type: 'article',
        description: 'Using randomness in programs'
      },
      {
        title: 'Random Selection',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/programming-random/a/random-selection',
        type: 'article',
        description: 'Selecting random elements from lists'
      }
    ],
    additionalResources: []
  },

  '3.16': { // Simulations
    topicName: 'Simulations',
    khanAcademyResources: [
      {
        title: 'Intro to Simulations',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/simulations/a/intro-to-simulations',
        type: 'article',
        description: 'Understanding computer simulations'
      },
      {
        title: 'Building a Simple Simulation',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/simulations/a/building-simple-simulation',
        type: 'article',
        description: 'Creating basic simulation models'
      }
    ],
    additionalResources: []
  },

  '3.17': { // Algorithmic Efficiency
    topicName: 'Algorithmic Efficiency',
    khanAcademyResources: [
      {
        title: 'Intro to Efficiency Analysis',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/algorithmic-efficiency/a/efficiency-analysis-intro',
        type: 'article',
        description: 'Understanding algorithm performance'
      },
      {
        title: 'Big-O Notation',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/algorithmic-efficiency/a/big-o-notation',
        type: 'article',
        description: 'Measuring algorithm complexity'
      }
    ],
    additionalResources: []
  },

  '3.18': { // Undecidable Problems
    topicName: 'Undecidable Problems',
    khanAcademyResources: [
      {
        title: 'Decidable and Undecidable Problems',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/decidable-undecidable/a/decidable-undecidable-problems',
        type: 'article',
        description: 'Understanding computational limits'
      },
      {
        title: 'The Halting Problem',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/decidable-undecidable/a/halting-problem',
        type: 'article',
        description: 'A classic undecidable problem'
      }
    ],
    additionalResources: []
  },

  // Big Idea 4: Computer Systems and Networks
  '4.1': { // The Internet
    topicName: 'The Internet',
    khanAcademyResources: [
      {
        title: 'What is the Internet?',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/intro-to-internet/a/what-is-the-internet',
        type: 'article',
        description: 'Understanding the structure of the Internet'
      },
      {
        title: 'Internet Protocols',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/internet-protocols/a/internet-protocols-intro',
        type: 'article',
        description: 'TCP/IP and other Internet protocols'
      },
      {
        title: 'Domain Name System (DNS)',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/internet-protocols/a/domain-name-system-dns',
        type: 'article',
        description: 'How domain names work'
      }
    ],
    additionalResources: []
  },

  '4.2': { // Fault Tolerance
    topicName: 'Fault Tolerance',
    khanAcademyResources: [
      {
        title: 'Internet Redundancy and Fault Tolerance',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/internet-works/a/internet-redundancy-fault-tolerance',
        type: 'article',
        description: 'How the Internet handles failures'
      },
      {
        title: 'Routing and Redundancy',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/internet-works/a/routing-redundancy',
        type: 'article',
        description: 'Multiple paths for data transmission'
      }
    ],
    additionalResources: []
  },

  '4.3': { // Parallel and Distributed Computing
    topicName: 'Parallel and Distributed Computing',
    khanAcademyResources: [
      {
        title: 'Intro to Parallel Computing',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/parallel-computing/a/intro-to-parallel-computing',
        type: 'article',
        description: 'Understanding parallel processing'
      },
      {
        title: 'Distributed Computing',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/parallel-computing/a/distributed-computing',
        type: 'article',
        description: 'Computing across multiple machines'
      }
    ],
    additionalResources: []
  },

  // Big Idea 5: Impact of Computing
  '5.1': { // Beneficial and Harmful Effects
    topicName: 'Beneficial and Harmful Effects',
    khanAcademyResources: [
      {
        title: 'Computing Innovations',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/computing-innovations/a/computing-innovations-intro',
        type: 'article',
        description: 'Positive and negative impacts of technology'
      },
      {
        title: 'Social Media Impact',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/computing-innovations/a/social-media-impact',
        type: 'article',
        description: 'How social media affects society'
      }
    ],
    additionalResources: []
  },

  '5.2': { // Digital Divide
    topicName: 'Digital Divide',
    khanAcademyResources: [
      {
        title: 'Digital Divide Overview',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/digital-divide/a/digital-divide-intro',
        type: 'article',
        description: 'Understanding unequal access to technology'
      },
      {
        title: 'Internet Access Barriers',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/digital-divide/a/internet-access-barriers',
        type: 'article',
        description: 'Economic and geographic barriers to Internet access'
      }
    ],
    additionalResources: []
  },

  '5.3': { // Computing Bias
    topicName: 'Computing Bias',
    khanAcademyResources: [
      {
        title: 'Algorithmic Bias',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/computing-bias/a/algorithmic-bias',
        type: 'article',
        description: 'How algorithms can perpetuate bias'
      },
      {
        title: 'Machine Learning Bias',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/computing-bias/a/machine-learning-bias',
        type: 'article',
        description: 'Bias in AI and machine learning systems'
      }
    ],
    additionalResources: []
  },

  '5.4': { // Crowdsourcing
    topicName: 'Crowdsourcing',
    khanAcademyResources: [
      {
        title: 'Crowdsourcing and Human Computation',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/crowdsourcing/a/crowdsourcing-intro',
        type: 'article',
        description: 'Using crowds to solve problems'
      },
      {
        title: 'Citizen Science Projects',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/crowdsourcing/a/citizen-science-projects',
        type: 'article',
        description: 'Examples of crowdsourced research'
      }
    ],
    additionalResources: []
  },

  '5.5': { // Legal and Ethical Concerns
    topicName: 'Legal and Ethical Concerns',
    khanAcademyResources: [
      {
        title: 'Intellectual Property',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/legal-ethical/a/intellectual-property',
        type: 'article',
        description: 'Copyright, patents, and digital rights'
      },
      {
        title: 'Creative Commons',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/legal-ethical/a/creative-commons',
        type: 'article',
        description: 'Alternative licensing for creative works'
      },
      {
        title: 'Software Piracy',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/global-impact/legal-ethical/a/software-piracy',
        type: 'article',
        description: 'Legal issues around software distribution'
      }
    ],
    additionalResources: []
  },

  '5.6': { // Safe Computing
    topicName: 'Safe Computing',
    khanAcademyResources: [
      {
        title: 'Cybersecurity Overview',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/cybersecurity-encryption/cybersecurity/a/cybersecurity-intro',
        type: 'article',
        description: 'Introduction to cybersecurity concepts'
      },
      {
        title: 'Password Security',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/cybersecurity-encryption/cybersecurity/a/password-security',
        type: 'article',
        description: 'Creating and managing secure passwords'
      },
      {
        title: 'Phishing and Social Engineering',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/cybersecurity-encryption/cybersecurity/a/phishing-social-engineering',
        type: 'article',
        description: 'Recognizing and avoiding cyber attacks'
      },
      {
        title: 'Multi-factor Authentication',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/cybersecurity-encryption/cybersecurity/a/multi-factor-authentication',
        type: 'article',
        description: 'Additional security layers'
      }
    ],
    additionalResources: []
  }
};

// Function to add resource mapping to database
async function addTopicResources() {
  try {
    console.log('Adding topic resource mapping to database...');

    for (const [topicId, resources] of Object.entries(topicResourceMapping)) {
      const docId = `topic-${topicId}`;
      
      // Update existing topic document with resources
      await db.collection('topics').doc(docId).update({
        resources: {
          khanAcademy: resources.khanAcademyResources,
          additional: resources.additionalResources,
          customTeacherResources: [] // Empty array for teacher-added resources
        },
        updatedAt: new Date()
      });

      console.log(`Added resources for Topic ${topicId}: ${resources.topicName}`);
    }

    console.log('\n✅ Successfully added all topic resource mappings!');
    process.exit(0);
  } catch (error) {
    console.error('Error adding topic resources:', error);
    process.exit(1);
  }
}

module.exports = { topicResourceMapping, addTopicResources };

// Run if called directly
if (require.main === module) {
  addTopicResources();
}