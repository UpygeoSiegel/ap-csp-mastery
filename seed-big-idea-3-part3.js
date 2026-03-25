const { db } = require('./server/firebase');

// Big Idea 3 Part 3: Advanced Questions for Topics 3.13-3.18
// Topics: Developing Procedures, Libraries, Random Values, Simulations, Algorithmic Efficiency, Undecidable Problems

const part3Questions = [
  // Topic 3.13: Developing Procedures (4 questions)
  {
    topicId: 'topic-3.13',
    questions: [
      {
        id: 'q3.13-1',
        text: 'A programmer writes a procedure to calculate employee bonuses:\n\nprocedure calculateBonus(salary, performanceRating, yearsEmployed)\n  if performanceRating > 4.0\n    bonus ← salary * 0.15\n  else if performanceRating > 3.0\n    bonus ← salary * 0.10\n  else\n    bonus ← salary * 0.05\n  \n  if yearsEmployed > 5\n    bonus ← bonus + 1000\n  \n  return bonus\n\nWhat design principle does this procedure best demonstrate?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Single responsibility - the procedure has one clear purpose' },
          { id: 'b', text: 'Inheritance - the procedure builds upon existing functionality' },
          { id: 'c', text: 'Polymorphism - the procedure works with different data types' },
          { id: 'd', text: 'Encapsulation - the procedure hides internal implementation details' }
        ],
        correctAnswers: ['a'],
        explanation: 'The procedure has a single, well-defined purpose: calculating employee bonuses based on clear criteria, demonstrating single responsibility principle.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.13-2',
        text: 'When developing a procedure to validate credit card numbers, which parameter design approach provides the best balance of security and usability?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Pass the raw credit card number as a string parameter' },
          { id: 'b', text: 'Pass a credit card object that encapsulates the number and metadata' },
          { id: 'c', text: 'Pass individual digits as separate integer parameters' },
          { id: 'd', text: 'Use global variables instead of parameters for sensitive data' }
        ],
        correctAnswers: ['b'],
        explanation: 'A credit card object encapsulates the data, provides type safety, and can include validation rules while maintaining clear interface boundaries.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.13-3',
        text: 'A team is developing a procedure that currently has 15 parameters and handles user registration, email validation, password hashing, and database storage. What refactoring approach would improve the design?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Combine all parameters into a single large object' },
          { id: 'b', text: 'Break the procedure into smaller, focused procedures' },
          { id: 'c', text: 'Remove parameter validation to simplify the interface' },
          { id: 'd', text: 'Convert all parameters to global variables' }
        ],
        correctAnswers: ['b'],
        explanation: 'Breaking into smaller procedures (registerUser, validateEmail, hashPassword, saveToDatabase) improves maintainability and follows single responsibility principle.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.13-4',
        text: 'A procedure called processOrder needs to handle different types of orders (online, phone, in-store) with different validation rules. Which design approach demonstrates best practices?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Use multiple if-else statements based on order type parameter' },
          { id: 'b', text: 'Create separate procedures for each order type' },
          { id: 'c', text: 'Use a common validation procedure with order-type-specific parameters' },
          { id: 'd', text: 'Hard-code the validation rules inside the procedure' }
        ],
        correctAnswers: ['b'],
        explanation: 'Separate procedures (processOnlineOrder, processPhoneOrder, etc.) provide clarity, maintainability, and allow for type-specific optimizations.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.14: Libraries (4 questions)
  {
    topicId: 'topic-3.14',
    questions: [
      {
        id: 'q3.14-1',
        text: 'A mobile app needs to implement secure communication with a server. The developer considers: (1) Writing custom encryption code, (2) Using a well-established cryptography library, (3) Using basic HTTP without encryption. Which choice best balances security and development efficiency?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Option 1: Custom encryption provides the best security' },
          { id: 'b', text: 'Option 2: Established libraries are secure and proven' },
          { id: 'c', text: 'Option 3: HTTP is simpler and faster to implement' },
          { id: 'd', text: 'Combine all three approaches for maximum security' }
        ],
        correctAnswers: ['b'],
        explanation: 'Established cryptography libraries have been thoroughly tested, peer-reviewed, and are maintained by security experts, making them more secure than custom implementations.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.14-2',
        text: 'A web application uses multiple external libraries: jQuery for DOM manipulation, Lodash for utility functions, and Moment.js for date handling. What is the primary concern when managing these dependencies?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Library file sizes will slow down the application' },
          { id: 'b', text: 'Version conflicts and security vulnerabilities in dependencies' },
          { id: 'c', text: 'Learning curves for developers unfamiliar with the libraries' },
          { id: 'd', text: 'License compatibility issues between different libraries' }
        ],
        correctAnswers: ['b'],
        explanation: 'Version conflicts can break functionality, and security vulnerabilities in dependencies can compromise the entire application, making dependency management crucial.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.14-3',
        text: 'A data science team evaluates libraries for machine learning: TensorFlow (comprehensive but complex), Scikit-learn (user-friendly but limited), and a custom solution (flexible but time-consuming). For a prototype with a tight deadline, which approach is most appropriate?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'TensorFlow for its comprehensive capabilities' },
          { id: 'b', text: 'Scikit-learn for rapid prototyping and ease of use' },
          { id: 'c', text: 'Custom solution for complete control over implementation' },
          { id: 'd', text: 'Avoid machine learning libraries entirely' }
        ],
        correctAnswers: ['b'],
        explanation: 'For prototyping with tight deadlines, Scikit-learn\'s ease of use and quick implementation outweigh its limitations, allowing faster iteration.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.14-4',
        text: 'A game development team needs to choose between building their own physics engine or using an existing library like Box2D. Which factor should have the highest priority in their decision?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The cost of licensing the physics library' },
          { id: 'b', text: 'The team\'s expertise and project timeline constraints' },
          { id: 'c', text: 'The desire to have complete control over all code' },
          { id: 'd', text: 'The programming language preferences of team members' }
        ],
        correctAnswers: ['b'],
        explanation: 'Physics engines are extremely complex. Team expertise and timeline constraints are crucial - building from scratch requires specialized knowledge and significant time investment.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.15: Random Values (5 questions)
  {
    topicId: 'topic-3.15',
    questions: [
      {
        id: 'q3.15-1',
        text: 'A game generates random numbers using: randomValue = random() * 6 + 1. If random() returns values from 0.0 to 0.999..., what is the range of possible randomValue results?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '1.0 to 6.0 (inclusive)' },
          { id: 'b', text: '1.0 to 6.999... (7.0 exclusive)' },
          { id: 'c', text: '0.0 to 6.0 (inclusive)' },
          { id: 'd', text: '1.0 to 7.0 (inclusive)' }
        ],
        correctAnswers: ['b'],
        explanation: 'random() * 6 gives 0.0 to 5.999..., then +1 gives 1.0 to 6.999... The upper bound approaches but never reaches 7.0.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.15-2',
        text: 'A password generator creates random passwords using this approach:\n\ncharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"\npassword = ""\nfor i = 1 to 12\n  index = random(0, length(characters)-1)\n  password = password + characters[index]\n\nWhat potential security issue exists with this implementation?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The password length is too short for modern security standards' },
          { id: 'b', text: 'The character set should include more special symbols' },
          { id: 'c', text: 'The random number generator may not be cryptographically secure' },
          { id: 'd', text: 'Characters can be repeated within the same password' }
        ],
        correctAnswers: ['c'],
        explanation: 'Standard random() functions are often pseudorandom and predictable. Password generation requires cryptographically secure random number generators.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.15-3',
        text: 'A simulation models customer arrivals at a store. Customers arrive randomly throughout the day, with higher frequency during lunch hours. Which approach best models this realistic pattern?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Use uniform random distribution throughout all hours' },
          { id: 'b', text: 'Use different probability distributions for different time periods' },
          { id: 'c', text: 'Generate exactly one customer per hour at random times' },
          { id: 'd', text: 'Use a fixed schedule with slight random variations' }
        ],
        correctAnswers: ['b'],
        explanation: 'Real customer patterns vary by time of day, requiring different probability distributions (e.g., higher rates during lunch) for accurate modeling.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.15-4',
        text: 'A card game needs to shuffle a deck of 52 cards. The current implementation repeatedly swaps random pairs of cards. Which issue might this approach have?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It doesn\'t guarantee every possible permutation is equally likely' },
          { id: 'b', text: 'It takes too much memory to store the card positions' },
          { id: 'c', text: 'It can only work with standard 52-card decks' },
          { id: 'd', text: 'It requires too much computation time to be practical' }
        ],
        correctAnswers: ['a'],
        explanation: 'Random swapping doesn\'t ensure uniform distribution of all permutations. The Fisher-Yates shuffle algorithm guarantees equal probability for all arrangements.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.15-5',
        text: 'A testing framework uses random values to test software robustness. The tests sometimes fail unpredictably. Which practice would improve test reliability while maintaining randomness benefits?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Remove all random elements from tests' },
          { id: 'b', text: 'Use the same random seed for reproducible test runs' },
          { id: 'c', text: 'Only test with the most common input values' },
          { id: 'd', text: 'Increase the range of random values used' }
        ],
        correctAnswers: ['b'],
        explanation: 'Using the same random seed makes tests reproducible while maintaining the benefit of testing with varied inputs. Failed tests can be debugged and reproduced.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.16: Simulations (4 questions)
  {
    topicId: 'topic-3.16',
    questions: [
      {
        id: 'q3.16-1',
        text: 'A traffic simulation models intersection timing to optimize traffic flow. The simulation runs 1000 iterations with different timing patterns. What is the primary benefit of using simulation for this problem?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Simulations are always more accurate than mathematical models' },
          { id: 'b', text: 'Testing in simulation is safer and less expensive than real-world testing' },
          { id: 'c', text: 'Simulations can predict exact future traffic patterns' },
          { id: 'd', text: 'Simulations eliminate the need for real traffic data' }
        ],
        correctAnswers: ['b'],
        explanation: 'Testing traffic timing changes in simulation avoids disrupting real traffic and is much less expensive than implementing changes in actual intersections.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.16-2',
        text: 'A disease spread simulation models how an epidemic might progress through a population. The simulation includes variables for transmission rate, recovery time, and population density. Which factor is most critical for the simulation\'s usefulness?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Using the fastest possible algorithms for performance' },
          { id: 'b', text: 'Basing model parameters on real-world epidemiological data' },
          { id: 'c', text: 'Including every possible variable that might affect disease spread' },
          { id: 'd', text: 'Running the simulation only once to get a definitive answer' }
        ],
        correctAnswers: ['b'],
        explanation: 'Simulation accuracy depends heavily on realistic parameters. Without real-world data, the simulation may provide misleading results for policy decisions.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.16-3',
        text: 'A financial simulation models investment portfolio performance over 30 years using random market conditions. After running 10,000 simulations, the results show a wide range of possible outcomes. How should these results be interpreted?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The average result represents the guaranteed future performance' },
          { id: 'b', text: 'The results show the range of possible outcomes and their probabilities' },
          { id: 'c', text: 'Only the best-case scenario should be used for planning' },
          { id: 'd', text: 'The simulation failed because it didn\'t produce a single clear answer' }
        ],
        correctAnswers: ['b'],
        explanation: 'Monte Carlo simulations provide probability distributions of outcomes, showing ranges and likelihoods rather than single guaranteed results.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.16-4',
        text: 'A factory simulation models production line efficiency with different configurations. The simulation shows that Configuration A produces 5% more output than Configuration B, but the difference seems small. What additional analysis would be most valuable?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Run the simulation with more detailed graphics' },
          { id: 'b', text: 'Analyze the statistical significance and confidence intervals of the results' },
          { id: 'c', text: 'Increase the simulation speed to get results faster' },
          { id: 'd', text: 'Focus only on the configuration that performed better' }
        ],
        correctAnswers: ['b'],
        explanation: 'Statistical significance testing determines if the 5% difference is meaningful or could be due to random variation, crucial for making informed decisions.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.17: Algorithmic Efficiency (4 questions)
  {
    topicId: 'topic-3.17',
    questions: [
      {
        id: 'q3.17-1',
        text: 'A programmer compares two algorithms for finding the maximum value in a list:\n\nAlgorithm A: Sorts the list first (O(n log n)), then returns the last element (O(1))\nAlgorithm B: Iterates through the list once, keeping track of the maximum (O(n))\n\nFor a list of 1 million elements, which statement is most accurate?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Algorithm A is better because sorting provides additional benefits' },
          { id: 'b', text: 'Algorithm B is significantly more efficient for this specific task' },
          { id: 'c', text: 'Both algorithms have essentially the same performance' },
          { id: 'd', text: 'The choice depends on whether the list is already partially sorted' }
        ],
        correctAnswers: ['b'],
        explanation: 'Algorithm B is O(n) vs Algorithm A\'s O(n log n). For 1M elements, this means ~1M operations vs ~20M operations - a significant difference.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.17-2',
        text: 'A social media application needs to find mutual friends between users. Currently, it uses nested loops to compare each user\'s friend list with every other user\'s friend list (O(n²m²) where n is users and m is average friends). Which optimization strategy would provide the greatest efficiency improvement?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Use faster hardware to run the existing algorithm' },
          { id: 'b', text: 'Implement hash tables for O(1) friend lookup operations' },
          { id: 'c', text: 'Limit the number of friends each user can have' },
          { id: 'd', text: 'Run the algorithm only during off-peak hours' }
        ],
        correctAnswers: ['b'],
        explanation: 'Hash tables reduce friend lookup from O(m) to O(1), changing overall complexity from O(n²m²) to O(n²m), a dramatic improvement for large datasets.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.17-3',
        text: 'A database application has two options for processing user queries:\n\nOption 1: Process each query individually as it arrives\nOption 2: Batch queries together and process them simultaneously\n\nUnder which conditions would Option 2 provide better overall efficiency?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'When users require immediate responses to their queries' },
          { id: 'b', text: 'When queries have significant setup overhead and can share resources' },
          { id: 'c', text: 'When the database has unlimited processing capacity' },
          { id: 'd', text: 'When each query accesses completely different data' }
        ],
        correctAnswers: ['b'],
        explanation: 'Batching is efficient when there\'s significant setup overhead (connection establishment, cache warming) that can be amortized across multiple queries.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.17-4',
        text: 'A machine learning algorithm has O(n³) time complexity. The development team wants to process datasets 10 times larger than their current capacity. Assuming no algorithmic improvements, how much more computing power would they need?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '10 times more computing power' },
          { id: 'b', text: '100 times more computing power' },
          { id: 'c', text: '1000 times more computing power' },
          { id: 'd', text: '30 times more computing power' }
        ],
        correctAnswers: ['c'],
        explanation: 'With O(n³) complexity, increasing dataset size by factor of 10 increases computation by 10³ = 1000 times.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.18: Undecidable Problems (4 questions)
  {
    topicId: 'topic-3.18',
    questions: [
      {
        id: 'q3.18-1',
        text: 'A software company wants to build a program that analyzes other programs to determine if they will ever finish running (halt) or run forever. Why is this fundamentally impossible to solve in general?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Current computers don\'t have enough memory to analyze large programs' },
          { id: 'b', text: 'The halting problem is logically undecidable for all possible programs' },
          { id: 'c', text: 'Programming languages are too complex for automated analysis' },
          { id: 'd', text: 'The analysis would take too much time to be practical' }
        ],
        correctAnswers: ['b'],
        explanation: 'The halting problem is provably undecidable - no algorithm can correctly determine for all possible programs whether they halt or run forever.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.18-2',
        text: 'A code review tool attempts to automatically detect all possible bugs in software. The tool works well for many common bug types but struggles with others. What fundamental limitation explains why perfect bug detection is impossible?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Detecting all bugs would require predicting all possible program behaviors' },
          { id: 'b', text: 'Bug detection tools need more sophisticated pattern matching' },
          { id: 'c', text: 'Different programming languages have different bug patterns' },
          { id: 'd', text: 'Bugs are often introduced by human error and are unpredictable' }
        ],
        correctAnswers: ['a'],
        explanation: 'Perfect bug detection would require solving the halting problem and other undecidable problems about program behavior, which is fundamentally impossible.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.18-3',
        text: 'A computer security firm wants to create a program that can determine if any given program contains malware by analyzing its code. What theoretical computer science principle limits this approach?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Malware detection is computationally expensive' },
          { id: 'b', text: 'Malware authors can obfuscate their code' },
          { id: 'c', text: 'Determining program behavior in general is undecidable' },
          { id: 'd', text: 'New malware variants are created faster than detection methods' }
        ],
        correctAnswers: ['c'],
        explanation: 'Perfect malware detection requires determining program behavior, which relates to undecidable problems like the halting problem.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.18-4',
        text: 'Given that some problems are undecidable, what is the most practical approach for software developers when facing complex analysis tasks?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Avoid these problems entirely since they cannot be solved' },
          { id: 'b', text: 'Develop heuristic approaches that work well for most practical cases' },
          { id: 'c', text: 'Wait for more powerful computers that can solve these problems' },
          { id: 'd', text: 'Focus only on problems that have guaranteed perfect solutions' }
        ],
        correctAnswers: ['b'],
        explanation: 'While perfect solutions don\'t exist for undecidable problems, practical heuristic approaches can provide useful results for most real-world cases.',
        isCustom: false,
        addedBy: null
      }
    ]
  }
];

async function seedBigIdea3Part3() {
  try {
    console.log('Starting to seed Big Idea 3 Part 3 questions...');

    for (const topicQuestions of part3Questions) {
      console.log(`Adding questions to ${topicQuestions.topicId}...`);
      
      // Get the current topic document
      const topicDoc = await db.collection('topics').doc(topicQuestions.topicId).get();
      if (!topicDoc.exists) {
        console.log(`Warning: Topic ${topicQuestions.topicId} not found, skipping...`);
        continue;
      }

      const topicData = topicDoc.data();
      
      // Add new questions to existing questions array
      const updatedQuestions = [...(topicData.questions || []), ...topicQuestions.questions];
      
      await db.collection('topics').doc(topicQuestions.topicId).update({
        questions: updatedQuestions,
        updatedAt: new Date()
      });

      console.log(`  Added ${topicQuestions.questions.length} questions to ${topicQuestions.topicId}`);
    }

    console.log('\n✅ Successfully added Big Idea 3 Part 3 questions!');
    console.log('\nSummary:');
    console.log('- Topics 3.13-3.18 seeded with challenging questions');
    console.log('- Questions focus on advanced concepts and real-world applications');
    console.log('- Distractors represent common misconceptions and alternative approaches');
    console.log('- Total questions added: 25');
    
    console.log('\n🎉 BIG IDEA 3 COMPLETE! 🎉');
    console.log('All 18 topics in Algorithms and Programming now have challenging questions');
    console.log('Total questions added across all three parts: 75');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding questions:', error);
    process.exit(1);
  }
}

// Run the script
seedBigIdea3Part3();