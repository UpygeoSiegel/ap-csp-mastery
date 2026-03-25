const { db } = require('./server/firebase');

// Complete AP CSP Curriculum Structure from Screenshots
const apCspCurriculum = [
  // Big Idea 1: Creative Development (10-13% AP Exam Weighting)
  {
    id: 'big-idea-1',
    name: 'Creative Development',
    description: 'Big Idea 1: Creative Development',
    examWeighting: '10-13%',
    topics: [
      {
        id: '1.1',
        name: 'Collaboration',
        bigIdea: 1,
        unit: 'Big Idea 1: Creative Development'
      },
      {
        id: '1.2', 
        name: 'Program Function and Purpose',
        bigIdea: 1,
        unit: 'Big Idea 1: Creative Development'
      },
      {
        id: '1.3',
        name: 'Program Design and Development', 
        bigIdea: 1,
        unit: 'Big Idea 1: Creative Development'
      },
      {
        id: '1.4',
        name: 'Identifying and Correcting Errors',
        bigIdea: 1,
        unit: 'Big Idea 1: Creative Development'
      }
    ]
  },

  // Big Idea 2: Data (17-22% AP Exam Weighting)
  {
    id: 'big-idea-2',
    name: 'Data',
    description: 'Big Idea 2: Data',
    examWeighting: '17-22%',
    topics: [
      {
        id: '2.1',
        name: 'Binary Numbers',
        bigIdea: 2,
        unit: 'Big Idea 2: Data'
      },
      {
        id: '2.2',
        name: 'Data Compression',
        bigIdea: 2,
        unit: 'Big Idea 2: Data'
      },
      {
        id: '2.3',
        name: 'Extracting Information from Data',
        bigIdea: 2,
        unit: 'Big Idea 2: Data'
      },
      {
        id: '2.4',
        name: 'Using Programs with Data',
        bigIdea: 2,
        unit: 'Big Idea 2: Data'
      }
    ]
  },

  // Big Idea 3: Algorithms and Programming (30-35% AP Exam Weighting)
  {
    id: 'big-idea-3',
    name: 'Algorithms and Programming',
    description: 'Big Idea 3: Algorithms and Programming',
    examWeighting: '30-35%',
    topics: [
      {
        id: '3.1',
        name: 'Variables and Assignments',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.2',
        name: 'Data Abstraction',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.3',
        name: 'Mathematical Expressions',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.4',
        name: 'Strings',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.5',
        name: 'Boolean Expressions',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.6',
        name: 'Conditionals',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.7',
        name: 'Nested Conditionals',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.8',
        name: 'Iteration',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.9',
        name: 'Developing Algorithms',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.10',
        name: 'Lists',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.11',
        name: 'Binary Search',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.12',
        name: 'Calling Procedures',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.13',
        name: 'Developing Procedures',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.14',
        name: 'Libraries',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.15',
        name: 'Random Values',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.16',
        name: 'Simulations',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.17',
        name: 'Algorithmic Efficiency',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      },
      {
        id: '3.18',
        name: 'Undecidable Problems',
        bigIdea: 3,
        unit: 'Big Idea 3: Algorithms and Programming'
      }
    ]
  },

  // Big Idea 4: Computer Systems and Networks (11-15% AP Exam Weighting)
  {
    id: 'big-idea-4',
    name: 'Computer Systems and Networks',
    description: 'Big Idea 4: Computer Systems and Networks',
    examWeighting: '11-15%',
    topics: [
      {
        id: '4.1',
        name: 'The Internet',
        bigIdea: 4,
        unit: 'Big Idea 4: Computer Systems and Networks'
      },
      {
        id: '4.2',
        name: 'Fault Tolerance',
        bigIdea: 4,
        unit: 'Big Idea 4: Computer Systems and Networks'
      },
      {
        id: '4.3',
        name: 'Parallel and Distributed Computing',
        bigIdea: 4,
        unit: 'Big Idea 4: Computer Systems and Networks'
      }
    ]
  },

  // Big Idea 5: Impact of Computing (21-26% AP Exam Weighting)
  {
    id: 'big-idea-5',
    name: 'Impact of Computing',
    description: 'Big Idea 5: Impact of Computing',
    examWeighting: '21-26%',
    topics: [
      {
        id: '5.1',
        name: 'Beneficial and Harmful Effects',
        bigIdea: 5,
        unit: 'Big Idea 5: Impact of Computing'
      },
      {
        id: '5.2',
        name: 'Digital Divide',
        bigIdea: 5,
        unit: 'Big Idea 5: Impact of Computing'
      },
      {
        id: '5.3',
        name: 'Computing Bias',
        bigIdea: 5,
        unit: 'Big Idea 5: Impact of Computing'
      },
      {
        id: '5.4',
        name: 'Crowdsourcing',
        bigIdea: 5,
        unit: 'Big Idea 5: Impact of Computing'
      },
      {
        id: '5.5',
        name: 'Legal and Ethical Concerns',
        bigIdea: 5,
        unit: 'Big Idea 5: Impact of Computing'
      },
      {
        id: '5.6',
        name: 'Safe Computing',
        bigIdea: 5,
        unit: 'Big Idea 5: Impact of Computing'
      }
    ]
  }
];

async function addCurriculumToDatabase() {
  try {
    console.log('Starting to add AP CSP curriculum structure to database...');

    // Add each Big Idea and its topics
    for (const bigIdea of apCspCurriculum) {
      console.log(`Adding ${bigIdea.name}...`);

      // Add the Big Idea document
      await db.collection('bigIdeas').doc(bigIdea.id).set({
        id: bigIdea.id,
        name: bigIdea.name,
        description: bigIdea.description,
        examWeighting: bigIdea.examWeighting,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      console.log(`Added Big Idea: ${bigIdea.name}`);

      // Add each topic within the Big Idea
      for (const topic of bigIdea.topics) {
        const topicId = `topic-${topic.id}`;
        
        await db.collection('topics').doc(topicId).set({
          id: topicId,
          topicNumber: topic.id,
          name: topic.name,
          bigIdea: topic.bigIdea,
          bigIdeaId: bigIdea.id,
          unit: topic.unit,
          questions: [], // Empty questions array to start
          createdAt: new Date(),
          updatedAt: new Date()
        });

        console.log(`  Added Topic ${topic.id}: ${topic.name}`);
      }
    }

    console.log('\n✅ Successfully added complete AP CSP curriculum structure to database!');
    console.log('\nSummary:');
    console.log(`- 5 Big Ideas added`);
    console.log(`- ${apCspCurriculum.reduce((total, bi) => total + bi.topics.length, 0)} Topics added`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error adding curriculum to database:', error);
    process.exit(1);
  }
}

// Run the script
addCurriculumToDatabase();