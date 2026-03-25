const { db } = require('./server/firebase');

// Big Idea 1: Creative Development - Advanced Questions  
// Topics: 1.1 Collaboration, 1.2 Program Function and Purpose, 1.3 Program Design and Development, 1.4 Identifying and Correcting Errors

const bigIdea1Questions = [
  // Topic 1.1: Collaboration (6 questions)
  {
    topicId: 'topic-1.1',
    questions: [
      {
        id: 'q1.1-1',
        text: 'A software development team uses version control to manage their project. When two developers simultaneously modify the same function and attempt to merge their changes, conflicts arise. Which collaborative practice would most effectively prevent this issue?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Assign each developer to work on completely separate files' },
          { id: 'b', text: 'Establish communication protocols and coordinate work on shared components' },
          { id: 'c', text: 'Have only one person make all code changes to avoid conflicts' },
          { id: 'd', text: 'Work on separate copies of the project without version control' }
        ],
        correctAnswers: ['b'],
        explanation: 'Effective collaboration requires communication and coordination, especially when working on shared components, rather than isolation or centralized control.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.1-2',
        text: 'A diverse team developing a mobile app includes members with different cultural backgrounds and technical expertise. During design discussions, some team members\' ideas are consistently overlooked. What collaborative approach would best address this challenge?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Let the most experienced programmer make all design decisions' },
          { id: 'b', text: 'Implement structured brainstorming and ensure all voices are heard equally' },
          { id: 'c', text: 'Vote on all decisions with majority rule' },
          { id: 'd', text: 'Separate team members by expertise and have them work independently' }
        ],
        correctAnswers: ['b'],
        explanation: 'Inclusive collaboration requires structured processes that actively ensure all team members can contribute their perspectives and expertise.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.1-3',
        text: 'A team is developing an educational game. The programmer wants to focus on technical features, the designer emphasizes visual appeal, and the educator prioritizes learning outcomes. How should they resolve these different priorities?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Choose the priority of whoever has the most experience' },
          { id: 'b', text: 'Integrate all perspectives by defining success criteria that address each concern' },
          { id: 'c', text: 'Focus on only one priority to avoid compromise' },
          { id: 'd', text: 'Rotate leadership so each person gets to prioritize their area' }
        ],
        correctAnswers: ['b'],
        explanation: 'Effective collaboration involves integrating diverse perspectives and establishing shared success criteria that address multiple stakeholder concerns.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.1-4',
        text: 'An open source project receives contributions from hundreds of developers worldwide. To maintain code quality while encouraging participation, which collaborative structure would be most effective?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Accept all contributions automatically to encourage maximum participation' },
          { id: 'b', text: 'Establish clear contribution guidelines and peer review processes' },
          { id: 'c', text: 'Restrict contributions to only the original development team' },
          { id: 'd', text: 'Randomly select which contributions to include in the project' }
        ],
        correctAnswers: ['b'],
        explanation: 'Large-scale collaboration requires clear processes and quality control mechanisms to balance participation with project integrity.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.1-5',
        text: 'A team working remotely across different time zones faces challenges with real-time communication and decision-making. Which collaborative strategy would best address these constraints?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Require all team members to work during the same hours' },
          { id: 'b', text: 'Use asynchronous communication tools and establish clear documentation practices' },
          { id: 'c', text: 'Have the team leader make all decisions without consultation' },
          { id: 'd', text: 'Split the project so each person works completely independently' }
        ],
        correctAnswers: ['b'],
        explanation: 'Remote collaboration across time zones requires asynchronous communication strategies and thorough documentation to maintain coordination.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.1-6',
        text: 'During a collaborative project, one team member consistently misses deadlines and doesn\'t respond to communications, affecting the entire project. How should the team address this collaborative challenge?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Ignore the problem and work around the unresponsive member' },
          { id: 'b', text: 'Address the issue directly with clear expectations and support, involving project leadership if necessary' },
          { id: 'c', text: 'Immediately remove the member from the project without discussion' },
          { id: 'd', text: 'Reduce the project scope to accommodate the reduced capacity' }
        ],
        correctAnswers: ['b'],
        explanation: 'Effective collaboration requires addressing performance issues constructively with clear communication and appropriate escalation when necessary.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 1.2: Program Function and Purpose (6 questions)
  {
    topicId: 'topic-1.2',
    questions: [
      {
        id: 'q1.2-1',
        text: 'A developer creates a fitness tracking app that monitors daily activities. However, user feedback reveals that people primarily use it to compare their progress with friends rather than track personal health goals. This scenario illustrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The program is functioning incorrectly and needs to be fixed' },
          { id: 'b', text: 'Users often find purposes for programs beyond the original intent' },
          { id: 'c', text: 'Social features should never be included in health applications' },
          { id: 'd', text: 'The developer failed to understand user needs during design' }
        ],
        correctAnswers: ['b'],
        explanation: 'This demonstrates how users may adopt programs for purposes beyond the original design intent, which is a common and often valuable phenomenon.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.2-2',
        text: 'A school district implements a program to automate student scheduling. The intended purpose is to create efficient schedules, but the program inadvertently reduces course diversity by prioritizing computational efficiency over educational breadth. This situation highlights:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Why automation should never be used in educational settings' },
          { id: 'b', text: 'The importance of considering broader impacts beyond the primary function' },
          { id: 'c', text: 'How technical optimization always improves educational outcomes' },
          { id: 'd', text: 'Why human schedulers are always superior to automated systems' }
        ],
        correctAnswers: ['b'],
        explanation: 'This illustrates how programs can achieve their stated function while having unintended consequences that affect the broader purpose and stakeholder needs.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.2-3',
        text: 'A ride-sharing app\'s primary function is connecting drivers with passengers. However, its data analytics also reveal traffic patterns that help city planners optimize transportation infrastructure. This demonstrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'How programs can serve multiple purposes and stakeholder groups' },
          { id: 'b', text: 'Why programs should focus on only one specific function' },
          { id: 'c', text: 'How data collection is the primary purpose of all modern applications' },
          { id: 'd', text: 'Why transportation apps should be developed by government agencies' }
        ],
        correctAnswers: ['a'],
        explanation: 'This shows how well-designed programs can serve multiple purposes and create value for different stakeholders beyond their primary function.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.2-4',
        text: 'A developer creates a program to help small businesses manage inventory. To ensure the program serves its intended purpose effectively, which approach is most important during development?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Focus exclusively on technical performance and speed' },
          { id: 'b', text: 'Regularly gather feedback from actual small business owners during development' },
          { id: 'c', text: 'Copy features from existing large enterprise inventory systems' },
          { id: 'd', text: 'Prioritize visual design over functional requirements' }
        ],
        correctAnswers: ['b'],
        explanation: 'Understanding the target users\' needs through regular feedback ensures the program fulfills its intended purpose effectively.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.2-5',
        text: 'A language learning app was designed to help users achieve conversational fluency. However, data shows most users only complete beginner lessons and don\'t progress further. How should the developers respond to this gap between intended purpose and actual usage?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Blame users for not using the app as intended' },
          { id: 'b', text: 'Investigate barriers to progression and redesign the user experience accordingly' },
          { id: 'c', text: 'Remove advanced lessons since users don\'t access them' },
          { id: 'd', text: 'Add more beginner content since that\'s what users prefer' }
        ],
        correctAnswers: ['b'],
        explanation: 'When there\'s a gap between intended purpose and actual usage, developers should investigate underlying causes and adapt the program design.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.2-6',
        text: 'A weather forecasting program is designed to provide accurate predictions for farmers. However, the interface is complex and requires meteorological expertise to interpret. This situation demonstrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The program functions correctly since the data is accurate' },
          { id: 'b', text: 'A disconnect between program function and user accessibility needs' },
          { id: 'c', text: 'Why farmers should learn meteorology to use the program' },
          { id: 'd', text: 'The importance of technical accuracy over user experience' }
        ],
        correctAnswers: ['b'],
        explanation: 'A program may function correctly but fail to serve its purpose if it\'s not accessible to its intended users, highlighting the importance of user-centered design.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 1.3: Program Design and Development (6 questions)
  {
    topicId: 'topic-1.3',
    questions: [
      {
        id: 'q1.3-1',
        text: 'A team develops a social media platform using an iterative design process. After releasing an initial version, user feedback reveals that the content discovery feature is confusing. Which development approach best demonstrates iterative design principles?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Defend the original design and educate users on how to use it properly' },
          { id: 'b', text: 'Redesign the feature based on user feedback and release an updated version' },
          { id: 'c', text: 'Remove the content discovery feature entirely to avoid confusion' },
          { id: 'd', text: 'Wait to collect more feedback before making any changes' }
        ],
        correctAnswers: ['b'],
        explanation: 'Iterative design involves continuously refining the program based on user feedback and testing, making improvements in successive versions.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.3-2',
        text: 'During the design phase of a banking application, developers must consider security, usability, regulatory compliance, and performance. Which approach best manages these competing requirements?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Prioritize security above all other concerns' },
          { id: 'b', text: 'Create a balanced design that addresses all requirements through careful trade-offs' },
          { id: 'c', text: 'Focus on usability first and add security features later' },
          { id: 'd', text: 'Let regulatory requirements determine all design decisions' }
        ],
        correctAnswers: ['b'],
        explanation: 'Effective program design requires balancing multiple requirements and constraints through thoughtful analysis and trade-offs rather than single-minded focus.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.3-3',
        text: 'A development team creates prototypes to test different approaches for a new feature. They build low-fidelity mockups, gather user feedback, then create high-fidelity prototypes for further testing. This process demonstrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Inefficient development that wastes time on throwaway work' },
          { id: 'b', text: 'Progressive refinement through prototyping and user validation' },
          { id: 'c', text: 'Over-engineering that makes the development process too complex' },
          { id: 'd', text: 'Lack of clear vision requiring too much external input' }
        ],
        correctAnswers: ['b'],
        explanation: 'Prototyping allows developers to test ideas quickly and refine designs based on feedback before committing to full implementation.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.3-4',
        text: 'A mobile app development project faces a tight deadline. The team must decide between implementing all planned features with minimal testing or focusing on core features with thorough testing. Which principle should guide their decision?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Always implement all planned features to meet stakeholder expectations' },
          { id: 'b', text: 'Prioritize core functionality and quality over comprehensive feature coverage' },
          { id: 'c', text: 'Extend the deadline to avoid making difficult trade-offs' },
          { id: 'd', text: 'Release without testing since features can be fixed in future updates' }
        ],
        correctAnswers: ['b'],
        explanation: 'Good design and development practices prioritize delivering reliable core functionality over comprehensive but potentially unreliable feature sets.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.3-5',
        text: 'A team designing an accessibility-focused application involves users with disabilities throughout the development process as consultants and testers. This approach represents:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Unnecessary complication of the development process' },
          { id: 'b', text: 'User-centered design that includes stakeholders in the development process' },
          { id: 'c', text: 'Outsourcing design decisions to people outside the development team' },
          { id: 'd', text: 'A marketing strategy to appeal to a niche user base' }
        ],
        correctAnswers: ['b'],
        explanation: 'Including target users, especially those with specialized needs, in the design process ensures the program effectively serves its intended audience.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.3-6',
        text: 'A development team uses modular design, breaking their program into independent components that can be developed and tested separately. What is the primary advantage of this approach?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It reduces the total amount of code that needs to be written' },
          { id: 'b', text: 'It enables parallel development and easier maintenance and debugging' },
          { id: 'c', text: 'It automatically improves the program\'s performance and speed' },
          { id: 'd', text: 'It eliminates the need for integration testing between components' }
        ],
        correctAnswers: ['b'],
        explanation: 'Modular design enables teams to work on different components simultaneously and makes it easier to isolate and fix problems during development and maintenance.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 1.4: Identifying and Correcting Errors (7 questions)
  {
    topicId: 'topic-1.4',
    questions: [
      {
        id: 'q1.4-1',
        text: 'A program calculates student grades correctly for most cases but produces incorrect results when a student has extra credit that pushes their percentage above 100%. This represents which type of error?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Syntax error that prevents the program from running' },
          { id: 'b', text: 'Runtime error that causes the program to crash' },
          { id: 'c', text: 'Logic error that produces incorrect results under specific conditions' },
          { id: 'd', text: 'Compilation error that prevents the code from being built' }
        ],
        correctAnswers: ['c'],
        explanation: 'This is a logic error - the program runs without crashing but doesn\'t handle the edge case of scores over 100%, producing incorrect results.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.4-2',
        text: 'A developer is debugging a program that sometimes crashes when processing user input. The crash only occurs with certain types of input and is difficult to reproduce consistently. What debugging strategy would be most effective?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Rewrite the entire input processing module from scratch' },
          { id: 'b', text: 'Add logging to track program state and input values leading up to crashes' },
          { id: 'c', text: 'Ignore the crashes since they only happen sometimes' },
          { id: 'd', text: 'Remove all input validation to simplify the code' }
        ],
        correctAnswers: ['b'],
        explanation: 'For intermittent bugs, systematic logging helps identify patterns and conditions that lead to the error, making it easier to reproduce and fix.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.4-3',
        text: 'A team discovers that their mobile app drains battery faster than expected. The app functions correctly but has a performance issue. Which approach represents the most systematic way to identify the cause?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Randomly modify different parts of the code until battery usage improves' },
          { id: 'b', text: 'Use profiling tools to measure which components consume the most resources' },
          { id: 'c', text: 'Ask users to avoid using features that might cause high battery usage' },
          { id: 'd', text: 'Reduce all functionality to minimize battery consumption' }
        ],
        correctAnswers: ['b'],
        explanation: 'Profiling tools provide data-driven insights into resource consumption, allowing developers to identify and address the specific causes of performance issues.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.4-4',
        text: 'A program contains a bug where user data is occasionally lost during saves. The development team implements automated testing to catch this issue. Which testing approach would be most effective for this type of error?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Test the save function once with a standard data set' },
          { id: 'b', text: 'Run repeated tests with various data types and sizes to stress-test the save functionality' },
          { id: 'c', text: 'Only test the save function when users report problems' },
          { id: 'd', text: 'Manually review the save function code without running tests' }
        ],
        correctAnswers: ['b'],
        explanation: 'Intermittent data loss requires comprehensive testing with various inputs and stress conditions to reliably reproduce and identify the bug.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.4-5',
        text: 'A developer receives a bug report that includes steps to reproduce the issue, expected behavior, actual behavior, and system information. However, they cannot reproduce the bug on their development machine. What should be their next step?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Close the bug report as unreproducible' },
          { id: 'b', text: 'Test on different systems and configurations that match the user\'s environment' },
          { id: 'c', text: 'Ask the user to fix the issue themselves' },
          { id: 'd', text: 'Assume the user made an error in their report' }
        ],
        correctAnswers: ['b'],
        explanation: 'Environment-dependent bugs require testing in conditions that match the user\'s setup, as the issue may be specific to certain configurations.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.4-6',
        text: 'While fixing a bug in one part of a program, a developer inadvertently introduces a new bug in a different, seemingly unrelated part. This situation illustrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Why bugs should never be fixed to avoid creating new problems' },
          { id: 'b', text: 'The importance of comprehensive testing after making any code changes' },
          { id: 'c', text: 'Why individual developers should not be allowed to fix bugs' },
          { id: 'd', text: 'The need to rewrite the entire program when bugs are discovered' }
        ],
        correctAnswers: ['b'],
        explanation: 'Code changes can have unexpected side effects, making regression testing essential to ensure fixes don\'t introduce new problems.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1.4-7',
        text: 'A program works correctly during development but fails when deployed to the production server due to different configuration settings. This scenario demonstrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'A fundamental flaw in the program\'s logic that must be rewritten' },
          { id: 'b', text: 'The importance of testing in environments that match the deployment environment' },
          { id: 'c', text: 'Why programs should only be developed on production servers' },
          { id: 'd', text: 'The need to avoid using configuration settings in programs' }
        ],
        correctAnswers: ['b'],
        explanation: 'Environment-specific issues highlight the need for testing in staging environments that closely match production settings before deployment.',
        isCustom: false,
        addedBy: null
      }
    ]
  }
];

async function seedBigIdea1() {
  try {
    console.log('Starting to seed Big Idea 1 - Creative Development questions...');

    for (const topicQuestions of bigIdea1Questions) {
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

    console.log('\n✅ Successfully added Big Idea 1 questions!');
    console.log('\nSummary:');
    console.log('- Topic 1.1 (Collaboration): 6 questions on team dynamics, communication, and inclusive practices');
    console.log('- Topic 1.2 (Program Function and Purpose): 6 questions on user needs, intended vs. actual usage, and purpose alignment');
    console.log('- Topic 1.3 (Program Design and Development): 6 questions on iterative design, prototyping, and user-centered development');
    console.log('- Topic 1.4 (Identifying and Correcting Errors): 7 questions on debugging strategies, testing approaches, and error types');
    console.log('- All questions emphasize real-world development scenarios and professional practices');
    console.log('- Distractors represent common misconceptions about software development processes');
    console.log('- Total questions added: 25');
    
    console.log('\n🎉 BIG IDEA 1 COMPLETE! 🎉');
    console.log('Creative Development topics now have comprehensive question coverage');
    console.log('Focus on collaborative practices, user-centered design, and systematic problem-solving');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding questions:', error);
    process.exit(1);
  }
}

// Run the script
seedBigIdea1();