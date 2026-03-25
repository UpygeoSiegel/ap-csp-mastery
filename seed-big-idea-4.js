const { db } = require('./server/firebase');

// Big Idea 4: Computer Systems and Networks - Advanced Questions
// Topics: 4.1 The Internet, 4.2 Fault Tolerance, 4.3 Parallel and Distributed Computing

const bigIdea4Questions = [
  // Topic 4.1: The Internet (12 questions)
  {
    topicId: 'topic-4.1',
    questions: [
      {
        id: 'q4.1-1',
        text: 'A company\'s website becomes inaccessible after their main server fails, but their email service hosted on a different server continues working. This scenario best demonstrates which principle of Internet architecture?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Centralized control ensures better reliability' },
          { id: 'b', text: 'Distributed systems can maintain partial functionality during failures' },
          { id: 'c', text: 'Internet protocols automatically reroute all traffic' },
          { id: 'd', text: 'Redundant servers prevent any service interruptions' }
        ],
        correctAnswers: ['b'],
        explanation: 'The Internet\'s distributed architecture allows different services to operate independently. When one service fails, others can continue functioning.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-2',
        text: 'A data packet travels from a computer in New York to a server in Tokyo. Due to network congestion, different packets take different routes through the Internet. What Internet design principle enables this flexibility?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Packet switching with dynamic routing protocols' },
          { id: 'b', text: 'Circuit switching that reserves dedicated paths' },
          { id: 'c', text: 'Centralized routing tables managed by ISPs' },
          { id: 'd', text: 'Direct point-to-point connections between all computers' }
        ],
        correctAnswers: ['a'],
        explanation: 'Packet switching allows data to be broken into packets that can take different routes, while dynamic routing protocols adapt to network conditions in real-time.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-3',
        text: 'A government attempts to block access to certain websites by instructing local Internet service providers to filter traffic. However, citizens find ways to access these sites using VPNs and proxy servers. This situation illustrates which characteristic of Internet architecture?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The Internet was designed to be easily controlled by authorities' },
          { id: 'b', text: 'Decentralized design makes comprehensive censorship difficult' },
          { id: 'c', text: 'Internet protocols include built-in security features' },
          { id: 'd', text: 'All Internet traffic must pass through government servers' }
        ],
        correctAnswers: ['b'],
        explanation: 'The Internet\'s decentralized, distributed architecture makes it inherently resistant to centralized control, as traffic can find alternative paths.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-4',
        text: 'When you send an email from your laptop, it might pass through your router, your ISP, several intermediate networks, and the recipient\'s ISP before reaching its destination. This demonstrates which Internet concept?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Network hierarchy with multiple interconnected layers' },
          { id: 'b', text: 'Direct peer-to-peer communication between devices' },
          { id: 'c', text: 'Centralized email servers that handle all communication' },
          { id: 'd', text: 'Sequential processing through predetermined pathways' }
        ],
        correctAnswers: ['a'],
        explanation: 'The Internet is organized as a hierarchy of interconnected networks, from local networks through ISPs to backbone providers, forming a "network of networks."',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-5',
        text: 'A streaming video service experiences quality issues during peak evening hours when many users are watching. The company decides to place content servers closer to users in major cities. This strategy is an example of:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Increasing bandwidth by upgrading network infrastructure' },
          { id: 'b', text: 'Reducing latency through geographic distribution of resources' },
          { id: 'c', text: 'Implementing stronger security protocols for data transmission' },
          { id: 'd', text: 'Converting from packet switching to circuit switching' }
        ],
        correctAnswers: ['b'],
        explanation: 'Content Delivery Networks (CDNs) place servers geographically closer to users to reduce latency and improve performance, especially during high-demand periods.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-6',
        text: 'During a major natural disaster, some Internet infrastructure is damaged, but most users can still access websites and services, though possibly through different routes. This resilience is primarily due to:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Government emergency protocols that prioritize critical traffic' },
          { id: 'b', text: 'Automatic switching to satellite Internet connections' },
          { id: 'c', text: 'Redundant pathways and adaptive routing in network design' },
          { id: 'd', text: 'Built-in error correction in all Internet protocols' }
        ],
        correctAnswers: ['c'],
        explanation: 'The Internet\'s redundant infrastructure and adaptive routing protocols automatically find alternative paths when some routes become unavailable.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-7',
        text: 'A company wants to ensure their critical business application has reliable Internet connectivity. They sign contracts with two different ISPs and configure their systems to automatically switch if one connection fails. This approach demonstrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Load balancing to improve application performance' },
          { id: 'b', text: 'Redundancy planning to increase fault tolerance' },
          { id: 'c', text: 'Network segmentation for improved security' },
          { id: 'd', text: 'Bandwidth aggregation to increase connection speed' }
        ],
        correctAnswers: ['b'],
        explanation: 'Using multiple ISPs creates redundant Internet connections, increasing fault tolerance by providing alternative pathways if one connection fails.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-8',
        text: 'The Internet Protocol (IP) treats all packets equally, without regard for the type of data they contain (email, video, web pages, etc.). This characteristic is known as:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Network neutrality - treating all Internet traffic equally' },
          { id: 'b', text: 'Protocol standardization - using common communication rules' },
          { id: 'c', text: 'Data encryption - securing all transmitted information' },
          { id: 'd', text: 'Quality of Service - prioritizing important traffic' }
        ],
        correctAnswers: ['a'],
        explanation: 'Network neutrality is the principle that Internet traffic should be treated equally, without discrimination based on content, application, or service type.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-9',
        text: 'A new social media application becomes popular and causes a 300% increase in Internet traffic in a particular region. Despite this surge, other Internet services continue to function normally. This demonstrates which Internet design feature?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Unlimited bandwidth capacity on all network connections' },
          { id: 'b', text: 'Scalability through distributed architecture and load sharing' },
          { id: 'c', text: 'Automatic quality reduction to maintain service availability' },
          { id: 'd', text: 'Priority systems that favor established services over new ones' }
        ],
        correctAnswers: ['b'],
        explanation: 'The Internet\'s distributed design and multiple pathways allow it to scale and handle increased traffic loads without completely disrupting existing services.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-10',
        text: 'An international corporation needs to ensure secure communication between offices in different countries. They implement a Virtual Private Network (VPN) over the public Internet. This approach leverages which Internet characteristic?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The Internet\'s built-in security prevents unauthorized access' },
          { id: 'b', text: 'Public infrastructure can support private, secure communications' },
          { id: 'c', text: 'Internet protocols automatically encrypt all transmitted data' },
          { id: 'd', text: 'Corporate networks have priority over regular Internet traffic' }
        ],
        correctAnswers: ['b'],
        explanation: 'VPNs demonstrate how the Internet\'s public infrastructure can be used to create secure, private communication channels through encryption and tunneling.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-11',
        text: 'A researcher studying Internet growth notices that as more devices connect to the Internet, the network becomes more valuable to all users. This phenomenon is an example of:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Network congestion effects reducing overall performance' },
          { id: 'b', text: 'Network effects where value increases with participation' },
          { id: 'c', text: 'Bandwidth limitations constraining network expansion' },
          { id: 'd', text: 'Protocol overhead increasing with network complexity' }
        ],
        correctAnswers: ['b'],
        explanation: 'Network effects describe how networks become more valuable as more people use them - more Internet users means more content, services, and communication opportunities.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.1-12',
        text: 'A small country with limited Internet infrastructure wants to improve its citizens\' access to global websites. The most effective approach would likely focus on:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Building direct connections to every major website globally' },
          { id: 'b', text: 'Establishing multiple connections to Internet backbone providers' },
          { id: 'c', text: 'Creating a national firewall to control all Internet access' },
          { id: 'd', text: 'Requiring all citizens to use government-provided devices' }
        ],
        correctAnswers: ['b'],
        explanation: 'Connecting to Internet backbone providers gives access to the entire global Internet through the interconnected network infrastructure, rather than requiring individual connections.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 4.2: Fault Tolerance (7 questions)
  {
    topicId: 'topic-4.2',
    questions: [
      {
        id: 'q4.2-1',
        text: 'A cloud storage service stores each user file on three different servers in different geographic locations. If one server fails, the file remains accessible from the other two servers. This strategy primarily provides:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Improved file access speed through parallel downloads' },
          { id: 'b', text: 'Data redundancy to maintain availability during failures' },
          { id: 'c', text: 'Enhanced security through distributed access controls' },
          { id: 'd', text: 'Reduced storage costs by sharing resources across locations' }
        ],
        correctAnswers: ['b'],
        explanation: 'Storing multiple copies (replicas) of data across different locations provides redundancy, ensuring data remains available even when individual servers fail.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.2-2',
        text: 'A hospital\'s patient monitoring system uses multiple sensors to track each patient\'s vital signs. If one sensor fails, the system continues operating using data from the remaining sensors. This design demonstrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Graceful degradation - maintaining partial functionality during component failures' },
          { id: 'b', text: 'Complete fault prevention through redundant error checking' },
          { id: 'c', text: 'Automatic fault repair using backup sensor activation' },
          { id: 'd', text: 'Fault isolation to prevent cascading system failures' }
        ],
        correctAnswers: ['a'],
        explanation: 'Graceful degradation allows a system to continue operating with reduced functionality when some components fail, rather than experiencing complete failure.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.2-3',
        text: 'An online banking system is designed so that if the main database server becomes unavailable, user account lookups automatically switch to a backup database that is continuously synchronized. What potential issue must be carefully managed with this approach?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The backup system may not have the most recent transaction data' },
          { id: 'b', text: 'Users will experience slower response times on the backup system' },
          { id: 'c', text: 'The backup system cannot handle the same volume of transactions' },
          { id: 'd', text: 'Security credentials must be manually transferred to the backup system' }
        ],
        correctAnswers: ['a'],
        explanation: 'Data consistency is crucial in financial systems. If synchronization isn\'t instantaneous, the backup may lack the most recent transactions, potentially causing data integrity issues.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.2-4',
        text: 'A distributed file system splits large files into smaller chunks and stores copies of each chunk on multiple servers. When a user requests a file, the system retrieves chunks from whichever servers are currently available. This approach provides fault tolerance through:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Error correction codes that can reconstruct corrupted data' },
          { id: 'b', text: 'Redundant storage with dynamic reconstruction capabilities' },
          { id: 'c', text: 'Real-time monitoring that prevents server failures' },
          { id: 'd', text: 'Centralized backup systems that mirror all data' }
        ],
        correctAnswers: ['b'],
        explanation: 'By storing multiple copies of file chunks across different servers, the system can reconstruct complete files even when some servers are unavailable.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.2-5',
        text: 'A company\'s critical business application runs on a cluster of servers. When the workload increases, additional servers are automatically added to the cluster. When servers fail, they are automatically removed and replaced. This scenario best illustrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Load balancing to distribute work evenly across resources' },
          { id: 'b', text: 'Auto-scaling with self-healing capabilities for fault tolerance' },
          { id: 'c', text: 'Resource optimization to minimize operational costs' },
          { id: 'd', text: 'Performance monitoring with predictive failure analysis' }
        ],
        correctAnswers: ['b'],
        explanation: 'Auto-scaling adjusts resources based on demand, while self-healing automatically replaces failed components, both contributing to system fault tolerance.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.2-6',
        text: 'An air traffic control system uses multiple independent computers to process flight data. Each computer processes the same data and their results are compared. If the results differ, the system flags a potential error. This approach is called:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Parallel processing to increase computational speed' },
          { id: 'b', text: 'Redundant computation for error detection and fault tolerance' },
          { id: 'c', text: 'Distributed computing to handle large datasets' },
          { id: 'd', text: 'Load sharing to optimize resource utilization' }
        ],
        correctAnswers: ['b'],
        explanation: 'This describes redundant computation where multiple systems perform the same calculations independently, allowing error detection through result comparison.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.2-7',
        text: 'A social media platform is designed so that if their main data center goes offline, traffic is automatically redirected to backup data centers in other regions. Users may notice slightly slower performance but can continue using the service. What trade-off does this fault tolerance strategy involve?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Security is reduced in favor of availability' },
          { id: 'b', text: 'Higher operational costs to maintain multiple data centers' },
          { id: 'c', text: 'Reduced functionality to ensure system stability' },
          { id: 'd', text: 'Increased complexity makes the system harder to maintain' }
        ],
        correctAnswers: ['b'],
        explanation: 'Geographic redundancy requires maintaining multiple data centers with duplicate infrastructure and staff, significantly increasing operational costs for improved fault tolerance.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 4.3: Parallel and Distributed Computing (6 questions)
  {
    topicId: 'topic-4.3',
    questions: [
      {
        id: 'q4.3-1',
        text: 'A weather prediction model needs to process atmospheric data for millions of geographic points. The computation is divided so that different processors handle different geographic regions simultaneously. This approach is most effective when:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'All geographic regions have identical weather patterns' },
          { id: 'b', text: 'Calculations for each region can be performed independently' },
          { id: 'c', text: 'The total dataset is too small for a single processor' },
          { id: 'd', text: 'Weather patterns change very slowly over time' }
        ],
        correctAnswers: ['b'],
        explanation: 'Parallel processing is most effective for embarrassingly parallel problems where tasks can be performed independently without significant interdependency.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.3-2',
        text: 'A video rendering application splits a movie into individual frames and assigns different computers to render different frames simultaneously. However, the final step requires combining all frames in correct sequence. This illustrates which characteristic of parallel computing?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Parallel execution can eliminate all sequential dependencies' },
          { id: 'b', text: 'Some tasks require coordination and cannot be fully parallelized' },
          { id: 'c', text: 'Parallel computing always produces results faster than sequential processing' },
          { id: 'd', text: 'The number of processors determines the maximum speedup possible' }
        ],
        correctAnswers: ['b'],
        explanation: 'Many algorithms have inherently sequential portions that cannot be parallelized, limiting the overall speedup achievable through parallel processing.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.3-3',
        text: 'A cryptocurrency mining operation uses thousands of computers worldwide to solve mathematical puzzles. Each computer works on the same problem independently, and the first to find a solution shares it with the network. This demonstrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Distributed computing with competitive parallel processing' },
          { id: 'b', text: 'Coordinated parallel processing with work division' },
          { id: 'c', text: 'Sequential processing across multiple machines' },
          { id: 'd', text: 'Fault-tolerant computing with automatic error correction' }
        ],
        correctAnswers: ['a'],
        explanation: 'This is distributed computing where many independent computers compete to solve the same problem, with the first successful solution being adopted by the network.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.3-4',
        text: 'A machine learning algorithm training on a large dataset splits the data across multiple computers. Each computer processes its portion and then all computers share their results to update a common model. What challenge does this approach primarily address?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Insufficient memory on individual machines to hold the complete dataset' },
          { id: 'b', text: 'Network bandwidth limitations between distributed computers' },
          { id: 'c', text: 'Coordination overhead in synchronizing distributed computations' },
          { id: 'd', text: 'Security concerns with sharing data across multiple systems' }
        ],
        correctAnswers: ['a'],
        explanation: 'Data parallelism in machine learning often addresses the problem of datasets too large to fit in a single machine\'s memory, requiring distribution across multiple systems.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.3-5',
        text: 'A scientific simulation that models molecular interactions needs to frequently exchange boundary condition data between different processors handling adjacent regions. As more processors are added, the communication overhead eventually outweighs the computational benefits. This scenario illustrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Perfect scaling where more processors always improve performance' },
          { id: 'b', text: 'Communication bottlenecks that limit parallel efficiency' },
          { id: 'c', text: 'Load imbalancing causing uneven work distribution' },
          { id: 'd', text: 'Memory limitations preventing effective parallelization' }
        ],
        correctAnswers: ['b'],
        explanation: 'As the number of processors increases, communication overhead can become a significant bottleneck, eventually limiting the benefits of additional parallelization.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4.3-6',
        text: 'A global online game distributes its servers across different continents to serve players worldwide. Each regional server handles local player interactions, but occasionally servers must communicate for cross-regional events. This architecture primarily optimizes for:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Computational load balancing across all servers equally' },
          { id: 'b', text: 'Minimizing network latency for most player interactions' },
          { id: 'c', text: 'Centralized control over all game state information' },
          { id: 'd', text: 'Maximizing server utilization through resource sharing' }
        ],
        correctAnswers: ['b'],
        explanation: 'Geographic distribution of servers reduces network latency for local players by placing computational resources closer to users, improving responsiveness.',
        isCustom: false,
        addedBy: null
      }
    ]
  }
];

async function seedBigIdea4() {
  try {
    console.log('Starting to seed Big Idea 4 - Computer Systems and Networks questions...');

    for (const topicQuestions of bigIdea4Questions) {
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

    console.log('\n✅ Successfully added Big Idea 4 questions!');
    console.log('\nSummary:');
    console.log('- Topic 4.1 (The Internet): 12 challenging questions covering network architecture, protocols, and Internet characteristics');
    console.log('- Topic 4.2 (Fault Tolerance): 7 questions on redundancy, graceful degradation, and system resilience');  
    console.log('- Topic 4.3 (Parallel and Distributed Computing): 6 questions on parallelization, distributed systems, and scalability');
    console.log('- All questions emphasize real-world applications and system design principles');
    console.log('- Distractors represent common misconceptions about network and system behavior');
    console.log('- Total questions added: 25');
    
    console.log('\n🎉 BIG IDEA 4 COMPLETE! 🎉');
    console.log('Computer Systems and Networks topics now have comprehensive question coverage');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding questions:', error);
    process.exit(1);
  }
}

// Run the script
seedBigIdea4();