const { db } = require('./server/firebase');

// Mapping of AP CSP topics to Khan Academy resources and general study materials
// All URLs verified as of 2026 - pointing to actual Khan Academy AP CSP content
const topicResourceMapping = {
  // Big Idea 1: Creative Development
  '1.1': { // Collaboration
    topicName: 'Collaboration',
    khanAcademyResources: [
      {
        title: 'AP CSP Vocabulary Review',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/prepare-for-the-2019-ap-cs-p-exam/a/vocabulary-review',
        type: 'article',
        description: 'Review key AP CSP vocabulary including collaboration concepts'
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
        title: 'Programming | AP CSP',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101',
        type: 'unit',
        description: 'Main programming unit covering program design and purpose'
      },
      {
        title: 'Programming Basics',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/what-is-programming/e/programming-basics',
        type: 'exercise',
        description: 'Practice basic programming concepts including DISPLAY() and pseudocode'
      }
    ],
    additionalResources: []
  },

  '1.3': { // Program Design and Development
    topicName: 'Program Design and Development',
    khanAcademyResources: [
      {
        title: 'AP CSP Exam Pseudocode Reference',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/learn-ap-csp-exam-pseudocode/a/ap-csp-exam-pseudocode-reference',
        type: 'article',
        description: 'Learn the pseudocode used in AP CSP exam questions'
      },
      {
        title: 'Building Algorithms',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/building-algorithms/e/expressing-an-algorithm',
        type: 'exercise',
        description: 'Practice expressing algorithms in different forms'
      }
    ],
    additionalResources: []
  },

  '1.4': { // Identifying and Correcting Errors
    topicName: 'Identifying and Correcting Errors',
    khanAcademyResources: [
      {
        title: 'AP CSP Vocabulary Review',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/prepare-for-the-2019-ap-cs-p-exam/a/vocabulary-review',
        type: 'article',
        description: 'Review key vocabulary including error types: syntax, runtime, and logic errors'
      }
    ],
    additionalResources: []
  },

  // Big Idea 2: Data
  '2.1': { // Binary Numbers
    topicName: 'Binary Numbers',
    khanAcademyResources: [
      {
        title: 'Digital Information Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information',
        type: 'unit',
        description: 'Comprehensive unit covering digital information concepts'
      },
      {
        title: 'Binary Numbers',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:binary-numbers/a/bits-and-binary',
        type: 'article',
        description: 'Understanding bits and binary number systems'
      },
      {
        title: 'Bits (Binary Digits)',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:bits-and-bytes/a/bits-binary-digits',
        type: 'article',
        description: 'Learn about bits as the fundamental unit of digital information'
      },
      {
        title: 'Bytes',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:bits-and-bytes/a/byte-sized-bits',
        type: 'article',
        description: 'Understanding bytes and data size'
      },
      {
        title: 'How Do Computers Represent Data?',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:bits-and-bytes/a/digital-data-introduction',
        type: 'article',
        description: 'Introduction to digital data representation'
      },
      {
        title: 'Binary Numbers Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:binary-numbers/e/bits-and-binary-exercise',
        type: 'exercise',
        description: 'Practice converting and working with binary numbers'
      },
      {
        title: 'Converting Decimal to Binary (Video)',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:binary-numbers/v/converting-decimal-numbers-to-binary',
        type: 'video',
        description: 'Video tutorial on decimal to binary conversion'
      }
    ],
    additionalResources: []
  },

  '2.2': { // Data Compression
    topicName: 'Data Compression',
    khanAcademyResources: [
      {
        title: 'Lossy Compression',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:data-compression/a/lossy-compression',
        type: 'article',
        description: 'Understanding lossy compression techniques and trade-offs'
      },
      {
        title: 'The Need for Compression',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:lossless-data-compression/a/file-compression-introduction',
        type: 'article',
        description: 'Introduction to why data compression is necessary'
      },
      {
        title: 'Lossless Text Compression',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/a/text-compression',
        type: 'article',
        description: 'Learn about lossless text compression techniques'
      },
      {
        title: 'Lossless Image Compression',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/a/simple-image-compression',
        type: 'article',
        description: 'Learn about lossless image compression'
      },
      {
        title: 'Lossy vs Lossless Compression Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:data-compression/e/lossy-vs-lossless-compression',
        type: 'exercise',
        description: 'Practice comparing lossy and lossless compression'
      },
      {
        title: 'Lossless File Compression Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:lossless-data-compression/e/lossless-file-compression',
        type: 'exercise',
        description: 'Practice with lossless compression concepts'
      }
    ],
    additionalResources: []
  },

  '2.3': { // Extracting Information from Data
    topicName: 'Extracting Information from Data',
    khanAcademyResources: [
      {
        title: 'Data Analysis & Big Data Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/data-analysis-101',
        type: 'unit',
        description: 'Comprehensive unit on data analysis and big data'
      },
      {
        title: 'The Power of Big Data',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/data-analysis-101/big-data/a/the-power-of-big-data',
        type: 'article',
        description: 'Understanding big data and its applications'
      }
    ],
    additionalResources: []
  },

  '2.4': { // Using Programs with Data
    topicName: 'Using Programs with Data',
    khanAcademyResources: [
      {
        title: 'Data Analysis & Big Data',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/data-analysis-101',
        type: 'unit',
        description: 'Using programs to process and analyze data'
      },
      {
        title: 'Storing Text in Binary',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:digital-information/x2d2f703b37b450a3:storing-text-in-binary/e/storing-other-data-in-binary',
        type: 'exercise',
        description: 'Practice storing different types of data in binary'
      }
    ],
    additionalResources: []
  },

  // Big Idea 3: Algorithms and Programming
  '3.1': { // Variables and Assignments
    topicName: 'Variables and Assignments',
    khanAcademyResources: [
      {
        title: 'Programming Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101',
        type: 'unit',
        description: 'Main programming unit with coverage of variables'
      },
      {
        title: 'Programming Mathematical Expressions',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/numbers-and-math/a/programming-mathematical-expressions',
        type: 'article',
        description: 'Working with variables and mathematical expressions'
      }
    ],
    additionalResources: []
  },

  '3.2': { // Data Abstraction
    topicName: 'Data Abstraction',
    khanAcademyResources: [
      {
        title: 'Programming Lists',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/lists/e/storing-and-updating-lists',
        type: 'exercise',
        description: 'Practice working with lists and data abstraction'
      }
    ],
    additionalResources: []
  },

  '3.3': { // Mathematical Expressions
    topicName: 'Mathematical Expressions',
    khanAcademyResources: [
      {
        title: 'Programming Mathematical Expressions',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/numbers-and-math/a/programming-mathematical-expressions',
        type: 'article',
        description: 'Using mathematical operations in programming'
      },
      {
        title: 'Math Procedures and Constants',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/numbers-and-math/a/mathematical-procedures-and-constants',
        type: 'article',
        description: 'Using math procedures and constants in programs'
      }
    ],
    additionalResources: []
  },

  '3.4': { // Strings
    topicName: 'Strings',
    khanAcademyResources: [
      {
        title: 'Programming Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101',
        type: 'unit',
        description: 'Main programming unit covering string operations'
      },
      {
        title: 'AP CSP Vocabulary Review',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/prepare-for-the-2019-ap-cs-p-exam/a/vocabulary-review',
        type: 'article',
        description: 'Review key vocabulary including string concepts'
      }
    ],
    additionalResources: []
  },

  '3.5': { // Boolean Expressions
    topicName: 'Boolean Expressions',
    khanAcademyResources: [
      {
        title: 'Conditionals with if, else, and Booleans',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/boolean-logic/e/conditionals-with-if--else--and-booleans',
        type: 'exercise',
        description: 'Practice boolean logic and conditional statements'
      }
    ],
    additionalResources: []
  },

  '3.6': { // Conditionals
    topicName: 'Conditionals',
    khanAcademyResources: [
      {
        title: 'Conditionals with if, else, and Booleans',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/boolean-logic/e/conditionals-with-if--else--and-booleans',
        type: 'exercise',
        description: 'Practice if-else statements and conditional logic'
      }
    ],
    additionalResources: []
  },

  '3.7': { // Nested Conditionals
    topicName: 'Nested Conditionals',
    khanAcademyResources: [
      {
        title: 'Conditionals with if, else, and Booleans',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/boolean-logic/e/conditionals-with-if--else--and-booleans',
        type: 'exercise',
        description: 'Practice nested conditional statements'
      }
    ],
    additionalResources: []
  },

  '3.8': { // Iteration
    topicName: 'Iteration',
    khanAcademyResources: [
      {
        title: 'Repetition in Programming',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/repetition-with-loops/a/repetition-with-for-loops',
        type: 'article',
        description: 'Understanding for loops and repetition'
      },
      {
        title: 'Conditional Repetition in Programs',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/repetition-with-loops/a/conditional-repetition-of-instructions',
        type: 'article',
        description: 'Using while loops and conditional repetition'
      },
      {
        title: 'Conditional Repetition Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/repetition-with-loops/e/conditional-repetition-of-instructions',
        type: 'exercise',
        description: 'Practice with loops and iteration'
      }
    ],
    additionalResources: []
  },

  '3.9': { // Developing Algorithms
    topicName: 'Developing Algorithms',
    khanAcademyResources: [
      {
        title: 'Algorithms Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101',
        type: 'unit',
        description: 'Comprehensive unit on algorithms and algorithm design'
      },
      {
        title: 'Expressing an Algorithm',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/building-algorithms/e/expressing-an-algorithm',
        type: 'exercise',
        description: 'Practice expressing and designing algorithms'
      }
    ],
    additionalResources: []
  },

  '3.10': { // Lists
    topicName: 'Lists',
    khanAcademyResources: [
      {
        title: 'Programming Lists',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/lists/e/storing-and-updating-lists',
        type: 'exercise',
        description: 'Practice storing and updating lists'
      }
    ],
    additionalResources: []
  },

  '3.11': { // Binary Search
    topicName: 'Binary Search',
    khanAcademyResources: [
      {
        title: 'Algorithms Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101',
        type: 'unit',
        description: 'Algorithms unit including searching algorithms'
      },
      {
        title: 'AP CSP Vocabulary Review',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/prepare-for-the-2019-ap-cs-p-exam/a/vocabulary-review',
        type: 'article',
        description: 'Review key vocabulary including binary search concepts'
      }
    ],
    additionalResources: []
  },

  '3.12': { // Calling Procedures
    topicName: 'Calling Procedures',
    khanAcademyResources: [
      {
        title: 'Programming Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101',
        type: 'unit',
        description: 'Main programming unit covering procedures and functions'
      },
      {
        title: 'Math Procedures and Constants',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/numbers-and-math/a/mathematical-procedures-and-constants',
        type: 'article',
        description: 'Using built-in math procedures'
      }
    ],
    additionalResources: []
  },

  '3.13': { // Developing Procedures
    topicName: 'Developing Procedures',
    khanAcademyResources: [
      {
        title: 'Programming Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101',
        type: 'unit',
        description: 'Programming unit covering procedure development'
      },
      {
        title: 'AP CSP Exam Pseudocode Reference',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/learn-ap-csp-exam-pseudocode/a/ap-csp-exam-pseudocode-reference',
        type: 'article',
        description: 'Reference for procedure syntax in AP CSP pseudocode'
      }
    ],
    additionalResources: []
  },

  '3.14': { // Libraries
    topicName: 'Libraries',
    khanAcademyResources: [
      {
        title: 'AP CSP Vocabulary Review',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/prepare-for-the-2019-ap-cs-p-exam/a/vocabulary-review',
        type: 'article',
        description: 'Review key vocabulary including library concepts'
      }
    ],
    additionalResources: []
  },

  '3.15': { // Random Values
    topicName: 'Random Values',
    khanAcademyResources: [
      {
        title: 'Simulations Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:simulations',
        type: 'unit',
        description: 'Simulations unit covering random values and their applications'
      },
      {
        title: 'Programming a Simple Simulation',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:simulations/x2d2f703b37b450a3:creating-simulations/a/programming-simple-simulations',
        type: 'article',
        description: 'Using random values in simulations'
      }
    ],
    additionalResources: []
  },

  '3.16': { // Simulations
    topicName: 'Simulations',
    khanAcademyResources: [
      {
        title: 'Simulations Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:simulations',
        type: 'unit',
        description: 'Comprehensive unit on computer simulations'
      },
      {
        title: "What's a Simulation?",
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:simulations/x2d2f703b37b450a3:exploring-simulations/a/whats-a-simulation',
        type: 'article',
        description: 'Introduction to computer simulations'
      },
      {
        title: 'Simulations in Physics',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:simulations/x2d2f703b37b450a3:exploring-simulations/a/physics-simulations',
        type: 'article',
        description: 'Using simulations to model physical systems'
      },
      {
        title: 'Programming a Simple Simulation',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:simulations/x2d2f703b37b450a3:creating-simulations/a/programming-simple-simulations',
        type: 'article',
        description: 'Creating basic simulation programs'
      },
      {
        title: 'Simulations Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:simulations/x2d2f703b37b450a3:exploring-simulations/e/simulations-101',
        type: 'exercise',
        description: 'Practice with simulation concepts'
      }
    ],
    additionalResources: []
  },

  '3.17': { // Algorithmic Efficiency
    topicName: 'Algorithmic Efficiency',
    khanAcademyResources: [
      {
        title: "Measuring an Algorithm's Efficiency",
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/evaluating-algorithms/a/measuring-an-algorithms-efficiency',
        type: 'article',
        description: 'Understanding how to measure algorithm performance'
      },
      {
        title: "Categorizing an Algorithm's Efficiency",
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/evaluating-algorithms/a/comparing-run-time-efficiency',
        type: 'article',
        description: 'Comparing run-time efficiency of algorithms'
      },
      {
        title: 'Measuring Algorithm Efficiency Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/evaluating-algorithms/e/measuring-algorithm-efficiency',
        type: 'exercise',
        description: 'Practice measuring algorithm efficiency'
      },
      {
        title: 'Comparing Efficiencies Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101/evaluating-algorithms/e/comparing-run-time-efficiencies',
        type: 'exercise',
        description: 'Practice comparing algorithm efficiencies'
      }
    ],
    additionalResources: []
  },

  '3.18': { // Undecidable Problems
    topicName: 'Undecidable Problems',
    khanAcademyResources: [
      {
        title: 'Algorithms Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101',
        type: 'unit',
        description: 'Algorithms unit covering computational limits'
      },
      {
        title: 'AP CSP Vocabulary Review',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/prepare-for-the-2019-ap-cs-p-exam/a/vocabulary-review',
        type: 'article',
        description: 'Review key vocabulary including undecidable problems'
      }
    ],
    additionalResources: []
  },

  // Big Idea 4: Computer Systems and Networks
  '4.1': { // The Internet
    topicName: 'The Internet',
    khanAcademyResources: [
      {
        title: 'The Internet Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet',
        type: 'unit',
        description: 'Comprehensive unit on how the Internet works'
      },
      {
        title: 'The Internet Protocol Suite',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/x2d2f703b37b450a3:the-internet-protocol-suite/a/the-internet-protocols',
        type: 'article',
        description: 'Overview of Internet protocols (TCP/IP)'
      },
      {
        title: 'IP Packets',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/x2d2f703b37b450a3:routing-with-redundancy/a/ip-packets',
        type: 'article',
        description: 'Understanding IP packets and data transmission'
      },
      {
        title: 'IP Addresses',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/x2d2f703b37b450a3:addressing-the-internet/a/ip-v4-v6-addresses',
        type: 'article',
        description: 'Understanding IPv4 and IPv6 addresses'
      },
      {
        title: 'Domain Name System (DNS)',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/x2d2f703b37b450a3:web-protocols/a/domain-name-system-dns-protocol',
        type: 'article',
        description: 'How domain names are resolved to IP addresses'
      }
    ],
    additionalResources: []
  },

  '4.2': { // Fault Tolerance
    topicName: 'Fault Tolerance',
    khanAcademyResources: [
      {
        title: 'Internet Routing Protocol',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/x2d2f703b37b450a3:routing-with-redundancy/a/internet-routing',
        type: 'article',
        description: 'How the Internet routes data with redundancy'
      },
      {
        title: 'Internet Routing Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/x2d2f703b37b450a3:routing-with-redundancy/e/internet-packets-and-routing-protocol',
        type: 'exercise',
        description: 'Practice with Internet routing and fault tolerance'
      },
      {
        title: 'Transmission Control Protocol (TCP)',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/tcp-fault-tolerant-transmission-protocol/a/transmission-control-protocol-tcp',
        type: 'article',
        description: 'How TCP provides reliable data transmission'
      }
    ],
    additionalResources: []
  },

  '4.3': { // Parallel and Distributed Computing
    topicName: 'Parallel and Distributed Computing',
    khanAcademyResources: [
      {
        title: 'Algorithms Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/algorithms-101',
        type: 'unit',
        description: 'Algorithms unit including parallel computing concepts'
      },
      {
        title: 'AP CSP Vocabulary Review',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/prepare-for-the-2019-ap-cs-p-exam/a/vocabulary-review',
        type: 'article',
        description: 'Review vocabulary including parallel and distributed computing'
      }
    ],
    additionalResources: []
  },

  // Big Idea 5: Impact of Computing
  '5.1': { // Beneficial and Harmful Effects
    topicName: 'Beneficial and Harmful Effects',
    khanAcademyResources: [
      {
        title: 'Computing Innovations Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:computing-innovations',
        type: 'unit',
        description: 'Explore the positive and negative impacts of technology'
      }
    ],
    additionalResources: []
  },

  '5.2': { // Digital Divide
    topicName: 'Digital Divide',
    khanAcademyResources: [
      {
        title: 'Computing Innovations Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:computing-innovations',
        type: 'unit',
        description: 'Understanding unequal access to technology'
      },
      {
        title: 'AP CSP Vocabulary Review',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/prepare-for-the-2019-ap-cs-p-exam/a/vocabulary-review',
        type: 'article',
        description: 'Review key vocabulary including digital divide concepts'
      }
    ],
    additionalResources: []
  },

  '5.3': { // Computing Bias
    topicName: 'Computing Bias',
    khanAcademyResources: [
      {
        title: 'Computing Innovations Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:computing-innovations',
        type: 'unit',
        description: 'Understanding bias in computing and AI systems'
      }
    ],
    additionalResources: []
  },

  '5.4': { // Crowdsourcing
    topicName: 'Crowdsourcing',
    khanAcademyResources: [
      {
        title: 'Computing Innovations Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:computing-innovations',
        type: 'unit',
        description: 'Learn about crowdsourcing and collaborative problem-solving'
      },
      {
        title: 'AP CSP Vocabulary Review',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/prepare-for-the-2019-ap-cs-p-exam/a/vocabulary-review',
        type: 'article',
        description: 'Review key vocabulary including crowdsourcing'
      }
    ],
    additionalResources: []
  },

  '5.5': { // Legal and Ethical Concerns
    topicName: 'Legal and Ethical Concerns',
    khanAcademyResources: [
      {
        title: 'Computing Innovations Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:computing-innovations',
        type: 'unit',
        description: 'Explore legal and ethical issues in computing'
      },
      {
        title: 'AP CSP Vocabulary Review',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/ap-csp-exam-preparation/prepare-for-the-2019-ap-cs-p-exam/a/vocabulary-review',
        type: 'article',
        description: 'Review key vocabulary including copyright, Creative Commons, and open source'
      }
    ],
    additionalResources: []
  },

  '5.6': { // Safe Computing
    topicName: 'Safe Computing',
    khanAcademyResources: [
      {
        title: 'Online Data Security Unit',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:online-data-security',
        type: 'unit',
        description: 'Comprehensive unit on cybersecurity and safe computing'
      },
      {
        title: 'Phishing Attacks',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:online-data-security/x2d2f703b37b450a3:cyber-attacks/a/phishing-attacks',
        type: 'article',
        description: 'Understanding and recognizing phishing attacks'
      },
      {
        title: 'Phishing and Passwords',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/cybercrime-and-prevention/a/phishing-and-passwords',
        type: 'article',
        description: 'Password security and phishing prevention'
      },
      {
        title: 'Public Key Encryption Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/the-internet/tls-secure-data-transport/e/public-key-encryption',
        type: 'exercise',
        description: 'Practice with encryption concepts'
      },
      {
        title: 'Phishing Attacks Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:online-data-security/x2d2f703b37b450a3:cyber-attacks/e/phishing-attacks',
        type: 'exercise',
        description: 'Practice identifying phishing attacks'
      },
      {
        title: 'Computer Malware Practice',
        url: 'https://www.khanacademy.org/computing/ap-computer-science-principles/x2d2f703b37b450a3:online-data-security/x2d2f703b37b450a3:cyber-attacks/e/computer-malware',
        type: 'exercise',
        description: 'Practice identifying types of malware'
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
