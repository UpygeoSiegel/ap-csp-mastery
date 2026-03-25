// Big Idea 4: Computer Systems and Networks - Part 1 (Topics 4.1-4.2)
// Run with: node server/seeds/bigIdea4-part1.js

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

if (process.env.FIREBASE_PROJECT_ID !== 'ap-csp-mastery') {
  console.error(`ERROR: Wrong project!`);
  process.exit(1);
}

const topics = [
  {
    id: '4-1',
    name: '4.1 The Internet',
    description: 'Understanding how the Internet works',
    bigIdeaId: 'big-idea-4',
    order: 1,
    questions: [
      {
        text: 'What is the Internet?',
        options: [
          'A single computer network owned by one company',
          'A network of interconnected networks that communicate using shared protocols',
          'A wireless technology for phones only',
          'A type of software application'
        ],
        correctAnswer: 1,
        explanation: 'The Internet is a global network of interconnected networks that use shared communication protocols (TCP/IP) to exchange data.'
      },
      {
        text: 'What is a protocol in the context of computer networking?',
        options: [
          'A type of computer virus',
          'A set of rules that define how data is transmitted and received over a network',
          'A brand of network cable',
          'A government regulation'
        ],
        correctAnswer: 1,
        explanation: 'A protocol is an agreed-upon set of rules that govern how data is formatted, transmitted, and received across networks.'
      },
      {
        text: 'What does TCP/IP stand for?',
        options: [
          'Total Computer Processing/Internet Provider',
          'Transmission Control Protocol/Internet Protocol',
          'Technical Computer Program/Internet Platform',
          'Transfer Control Process/Internal Protocol'
        ],
        correctAnswer: 1,
        explanation: 'TCP/IP stands for Transmission Control Protocol/Internet Protocol, the fundamental protocols that enable Internet communication.'
      },
      {
        text: 'What is the purpose of an IP address?',
        options: [
          'To provide a physical location of a computer',
          'To uniquely identify a device on a network',
          'To store data on the Internet',
          'To speed up Internet connections'
        ],
        correctAnswer: 1,
        explanation: 'An IP address uniquely identifies a device on a network, allowing data to be routed to the correct destination.'
      },
      {
        text: 'What is packet switching?',
        options: [
          'Turning network devices on and off',
          'Breaking data into smaller packets that are routed independently through the network',
          'Switching between different Internet providers',
          'Packaging software for distribution'
        ],
        correctAnswer: 1,
        explanation: 'Packet switching breaks data into small packets that travel independently through the network, potentially taking different routes to reach the destination.'
      },
      {
        text: 'What is a router\'s primary function?',
        options: [
          'To store files',
          'To forward data packets between networks toward their destination',
          'To create websites',
          'To generate electricity'
        ],
        correctAnswer: 1,
        explanation: 'Routers forward data packets between networks, determining the best path for data to travel to reach its destination.'
      },
      {
        text: 'What is DNS (Domain Name System)?',
        options: [
          'A security system for networks',
          'A system that translates domain names (like google.com) into IP addresses',
          'A type of Internet connection',
          'A programming language'
        ],
        correctAnswer: 1,
        explanation: 'DNS translates human-readable domain names into numerical IP addresses that computers use to identify each other on the network.'
      },
      {
        text: 'What happens when you type a URL into a web browser?',
        options: [
          'The website is downloaded directly from a satellite',
          'DNS resolves the domain to an IP, and your browser requests the web page from that server',
          'The URL is sent to the government for approval',
          'A new website is created'
        ],
        correctAnswer: 1,
        explanation: 'The browser uses DNS to find the server\'s IP address, then sends a request to that server, which responds with the web page content.'
      },
      {
        text: 'What is bandwidth?',
        options: [
          'The physical width of a network cable',
          'The maximum amount of data that can be transmitted over a connection in a given time',
          'The number of users on a network',
          'The height of a wireless signal'
        ],
        correctAnswer: 1,
        explanation: 'Bandwidth is the maximum data transfer capacity of a network connection, typically measured in bits per second (bps).'
      },
      {
        text: 'What is latency in networking?',
        options: [
          'The amount of data being transferred',
          'The time delay between sending a request and receiving a response',
          'The physical distance between computers',
          'The number of connected devices'
        ],
        correctAnswer: 1,
        explanation: 'Latency is the time delay in data transmission, often called "lag." It\'s the time it takes for data to travel from source to destination.'
      },
      {
        text: 'What is HTTP?',
        options: [
          'A type of network cable',
          'A protocol for transferring web pages and other content over the Internet',
          'A computer operating system',
          'A security certificate'
        ],
        correctAnswer: 1,
        explanation: 'HTTP (Hypertext Transfer Protocol) is the protocol used for transmitting web pages and content between web servers and browsers.'
      },
      {
        text: 'What does HTTPS add to HTTP?',
        options: [
          'Faster speeds',
          'Encryption for secure, private communication',
          'More colorful websites',
          'Larger file sizes'
        ],
        correctAnswer: 1,
        explanation: 'HTTPS adds encryption (typically TLS/SSL) to HTTP, securing the data transmitted between the browser and server.'
      },
      {
        text: 'What is a packet in computer networking?',
        options: [
          'A physical envelope containing hardware',
          'A small unit of data transmitted over a network, containing part of a message plus routing information',
          'A type of computer virus',
          'A network administrator'
        ],
        correctAnswer: 1,
        explanation: 'A packet is a small unit of data that includes payload (actual data) plus header information for routing and reassembly.'
      },
      {
        text: 'Why does the Internet use multiple layers of protocols?',
        options: [
          'To confuse hackers',
          'Each layer handles specific functions, making the system modular and easier to update',
          'It doesn\'t actually use multiple layers',
          'To make the Internet slower'
        ],
        correctAnswer: 1,
        explanation: 'Layered protocols (like the TCP/IP model) separate functions, allowing each layer to be developed and updated independently.'
      },
      {
        text: 'What is the difference between the World Wide Web and the Internet?',
        options: [
          'They are exactly the same thing',
          'The Internet is the infrastructure; the Web is a service that runs on it using HTTP',
          'The Web is hardware; the Internet is software',
          'The Internet is only for email'
        ],
        correctAnswer: 1,
        explanation: 'The Internet is the global network infrastructure. The World Wide Web is a service that runs on the Internet, using HTTP to serve web pages.'
      },
      {
        text: 'What is an ISP?',
        options: [
          'Internal System Protocol',
          'Internet Service Provider - a company that provides Internet access',
          'Internet Security Program',
          'Integrated Software Platform'
        ],
        correctAnswer: 1,
        explanation: 'An ISP (Internet Service Provider) is a company that provides customers with access to the Internet.'
      },
      {
        text: 'What role do data centers play in the Internet?',
        options: [
          'They manufacture computers',
          'They house servers that store and process data for websites and online services',
          'They are just office buildings',
          'They control Internet traffic speeds'
        ],
        correctAnswer: 1,
        explanation: 'Data centers are facilities containing servers that host websites, cloud services, and store/process large amounts of data.'
      },
      {
        text: 'What is IPv6?',
        options: [
          'The sixth version of Internet Privacy',
          'A newer IP addressing system that provides many more unique addresses than IPv4',
          'A type of wireless Internet',
          'An Internet speed measurement'
        ],
        correctAnswer: 1,
        explanation: 'IPv6 uses 128-bit addresses (vs. IPv4\'s 32-bit), providing approximately 340 undecillion unique addresses to accommodate growing Internet needs.'
      },
      {
        text: 'How do packets from the same message sometimes take different routes to their destination?',
        options: [
          'This never happens - all packets take the same route',
          'Routers independently forward each packet based on current network conditions',
          'Packets choose their own routes randomly',
          'Users manually select routes for each packet'
        ],
        correctAnswer: 1,
        explanation: 'Routers make independent decisions for each packet based on network conditions, congestion, and routing tables, so packets may take different paths.'
      },
      {
        text: 'What is a MAC address?',
        options: [
          'An address only for Apple computers',
          'A unique hardware identifier assigned to a network interface',
          'A password for Internet access',
          'A type of IP address'
        ],
        correctAnswer: 1,
        explanation: 'A MAC (Media Access Control) address is a unique identifier assigned to network hardware, used for communication within a local network.'
      },
      {
        text: 'What is the purpose of the TCP protocol?',
        options: [
          'To assign IP addresses',
          'To ensure reliable, ordered delivery of data by handling error correction and retransmission',
          'To create web pages',
          'To filter spam emails'
        ],
        correctAnswer: 1,
        explanation: 'TCP ensures reliable delivery by checking for errors, requesting retransmission of lost packets, and assembling packets in correct order.'
      },
      {
        text: 'What is a server in the context of the Internet?',
        options: [
          'A person who serves food',
          'A computer that provides data, services, or resources to other computers (clients)',
          'Any computer connected to the Internet',
          'A type of Internet cable'
        ],
        correctAnswer: 1,
        explanation: 'A server is a computer that provides services, data, or resources to other computers (clients) that request them over a network.'
      },
      {
        text: 'What happens if a packet is lost during transmission?',
        options: [
          'The entire message is lost forever',
          'TCP detects the missing packet and requests retransmission',
          'The message is delivered incomplete',
          'The Internet shuts down'
        ],
        correctAnswer: 1,
        explanation: 'TCP tracks packets using sequence numbers. If a packet is lost, TCP detects this and requests the sender to retransmit the missing packet.'
      },
      {
        text: 'What is a firewall?',
        options: [
          'A wall that prevents fires in data centers',
          'A security system that monitors and controls network traffic based on rules',
          'A type of fast Internet connection',
          'A protocol for sending email'
        ],
        correctAnswer: 1,
        explanation: 'A firewall is a network security system that monitors incoming and outgoing traffic, blocking or allowing it based on security rules.'
      },
      {
        text: 'What is net neutrality?',
        options: [
          'A law about fishing nets',
          'The principle that ISPs should treat all Internet traffic equally without discrimination',
          'A type of network security',
          'A method for measuring Internet speed'
        ],
        correctAnswer: 1,
        explanation: 'Net neutrality is the principle that ISPs should treat all data on the Internet equally, not discriminating by user, website, or content type.'
      }
    ]
  },
  {
    id: '4-2',
    name: '4.2 Fault Tolerance',
    description: 'Understanding how systems handle failures',
    bigIdeaId: 'big-idea-4',
    order: 2,
    questions: [
      {
        text: 'What is fault tolerance?',
        options: [
          'Accepting mistakes in programming',
          'A system\'s ability to continue operating properly when components fail',
          'A type of computer error',
          'Forgiving network administrators for mistakes'
        ],
        correctAnswer: 1,
        explanation: 'Fault tolerance is the ability of a system to continue functioning correctly even when some of its components fail.'
      },
      {
        text: 'What is redundancy in the context of fault tolerance?',
        options: [
          'Repeating the same mistake',
          'Having backup components or pathways that can take over if primary ones fail',
          'Using more electricity than needed',
          'Sending extra data that isn\'t needed'
        ],
        correctAnswer: 1,
        explanation: 'Redundancy means having duplicate or backup components, connections, or systems ready to take over if primary ones fail.'
      },
      {
        text: 'Why was the Internet originally designed to be fault tolerant?',
        options: [
          'To make it run faster',
          'To allow communication to continue even if parts of the network were damaged (originally for military purposes)',
          'To reduce costs',
          'To make it easier to use'
        ],
        correctAnswer: 1,
        explanation: 'The Internet\'s predecessor (ARPANET) was designed to maintain communication even if parts of the network were destroyed, originally for military resilience.'
      },
      {
        text: 'If multiple paths exist between two points on the Internet, what happens when one path fails?',
        options: [
          'All communication stops',
          'Data is automatically rerouted through alternative paths',
          'The Internet needs to be restarted',
          'Users must manually select a new path'
        ],
        correctAnswer: 1,
        explanation: 'With multiple paths, routers can automatically redirect traffic through alternative routes when a path fails, maintaining connectivity.'
      },
      {
        text: 'What is a single point of failure?',
        options: [
          'A system with no failures',
          'A component whose failure would cause the entire system to stop working',
          'A very reliable component',
          'A backup system'
        ],
        correctAnswer: 1,
        explanation: 'A single point of failure is a component that, if it fails, will cause the entire system to fail because there is no backup.'
      },
      {
        text: 'In a fault-tolerant network, what happens when a router fails?',
        options: [
          'The entire network goes offline',
          'Traffic is rerouted through other available paths',
          'All data is lost',
          'Users cannot access any websites'
        ],
        correctAnswer: 1,
        explanation: 'In a fault-tolerant network with redundant connections, traffic is automatically rerouted through alternative paths when a router fails.'
      },
      {
        text: 'What is RAID in data storage?',
        options: [
          'A type of computer virus',
          'A technique using multiple hard drives with redundancy to protect against drive failure',
          'A network security tool',
          'A programming language'
        ],
        correctAnswer: 1,
        explanation: 'RAID (Redundant Array of Independent Disks) uses multiple drives to provide redundancy, allowing the system to continue operating if a drive fails.'
      },
      {
        text: 'Why do large websites often use multiple data centers?',
        options: [
          'To use more electricity',
          'To maintain service if one data center fails or to serve users closer to them',
          'Data centers are very small',
          'It\'s required by law'
        ],
        correctAnswer: 1,
        explanation: 'Multiple data centers provide redundancy (if one fails, others continue) and can improve performance by serving users from closer locations.'
      },
      {
        text: 'What is the benefit of having multiple routes between network nodes?',
        options: [
          'It makes the network slower',
          'It increases fault tolerance - if one route fails, others are available',
          'It increases the cost without benefit',
          'It prevents any data from being transmitted'
        ],
        correctAnswer: 1,
        explanation: 'Multiple routes increase fault tolerance by providing alternative paths for data if primary routes fail or become congested.'
      },
      {
        text: 'A network has 4 nodes where every node connects directly to every other node. How many connections fail before any two nodes cannot communicate?',
        options: [
          '1 connection',
          '2 connections',
          '3 connections',
          'It depends on which connections fail'
        ],
        correctAnswer: 3,
        explanation: 'In a fully connected network of 4 nodes, each pair has a direct connection plus alternate paths through other nodes. The specific impact depends on which connections fail.'
      },
      {
        text: 'What is load balancing?',
        options: [
          'Weighing network equipment',
          'Distributing work across multiple servers to prevent any single server from being overwhelmed',
          'Reducing network speed',
          'Measuring electricity usage'
        ],
        correctAnswer: 1,
        explanation: 'Load balancing distributes traffic or processing across multiple servers, improving performance and providing redundancy if one server fails.'
      },
      {
        text: 'What does it mean when a system has "high availability"?',
        options: [
          'It\'s expensive to purchase',
          'It\'s designed to be operational and accessible almost all the time with minimal downtime',
          'It\'s available in many stores',
          'It has many users'
        ],
        correctAnswer: 1,
        explanation: 'High availability refers to systems designed to be operational nearly all the time, typically through redundancy and fault-tolerant design.'
      },
      {
        text: 'What is the purpose of backup systems?',
        options: [
          'To make systems run slower',
          'To allow recovery of data or service if primary systems fail',
          'To store deleted files permanently',
          'To increase network speed'
        ],
        correctAnswer: 1,
        explanation: 'Backup systems store copies of data or provide alternative service capabilities to enable recovery if primary systems fail.'
      },
      {
        text: 'In the context of the Internet, what provides redundancy at the physical level?',
        options: [
          'Using only one Internet cable globally',
          'Multiple cables, connection types (fiber, cable, satellite), and geographic routes',
          'A single data center',
          'Using only wireless connections'
        ],
        correctAnswer: 1,
        explanation: 'Physical redundancy includes multiple cables, different types of connections, and geographically diverse routes to maintain connectivity if some paths fail.'
      },
      {
        text: 'What is failover?',
        options: [
          'When a system completely stops working',
          'Automatically switching to a backup system when the primary system fails',
          'A type of network error',
          'Manually restarting a computer'
        ],
        correctAnswer: 1,
        explanation: 'Failover is the automatic switching to a redundant or backup system when the primary system fails, ensuring continued operation.'
      },
      {
        text: 'Why might a company use cloud computing services from multiple providers?',
        options: [
          'To increase complexity',
          'To avoid dependence on a single provider and maintain service if one provider has issues',
          'Cloud providers are all the same',
          'To decrease security'
        ],
        correctAnswer: 1,
        explanation: 'Using multiple cloud providers avoids single-provider dependence and provides redundancy if one provider experiences outages.'
      },
      {
        text: 'What happens to data integrity when a fault-tolerant system experiences a failure?',
        options: [
          'All data is immediately lost',
          'The system is designed to preserve data integrity even during failures',
          'Data becomes corrupt',
          'Users must re-enter all data'
        ],
        correctAnswer: 1,
        explanation: 'Fault-tolerant systems are designed to maintain data integrity during failures through redundancy, backups, and recovery mechanisms.'
      },
      {
        text: 'A mesh network topology provides fault tolerance because:',
        options: [
          'It uses only one connection between nodes',
          'Multiple paths exist between nodes, allowing rerouting if connections fail',
          'All data goes through a central hub',
          'It doesn\'t require any connections'
        ],
        correctAnswer: 1,
        explanation: 'Mesh networks have multiple connections between nodes, so if some connections fail, data can be rerouted through alternative paths.'
      },
      {
        text: 'What is the trade-off of building highly fault-tolerant systems?',
        options: [
          'They are simpler to build',
          'They typically require more resources (cost, hardware, complexity) for redundancy',
          'They are less reliable',
          'They use less electricity'
        ],
        correctAnswer: 1,
        explanation: 'Fault tolerance requires redundancy, which increases costs (duplicate hardware, backup systems) and complexity (managing multiple components).'
      },
      {
        text: 'What is geographic redundancy?',
        options: [
          'Using the same location for all systems',
          'Distributing systems across different physical locations to protect against regional failures',
          'A type of GPS technology',
          'Mapping network locations'
        ],
        correctAnswer: 1,
        explanation: 'Geographic redundancy places systems in different locations to protect against regional issues like natural disasters, power outages, or local network failures.'
      },
      {
        text: 'If a network has nodes A, B, C, D with connections A-B, B-C, C-D, and A-D, what happens if connection B-C fails?',
        options: [
          'A cannot communicate with C',
          'A can still reach C through A-D-C',
          'The entire network fails',
          'D becomes unreachable'
        ],
        correctAnswer: 1,
        explanation: 'With redundant paths, A can still reach C via A-D-C (going through D instead of B), demonstrating fault tolerance.'
      },
      {
        text: 'What is the difference between fault tolerance and fault prevention?',
        options: [
          'They are the same thing',
          'Prevention tries to stop faults; tolerance allows operation despite faults',
          'Prevention is more expensive',
          'Tolerance prevents all faults'
        ],
        correctAnswer: 1,
        explanation: 'Fault prevention tries to stop failures from occurring; fault tolerance accepts that failures will happen and designs systems to continue operating despite them.'
      },
      {
        text: 'Why is the Internet considered more fault-tolerant than a system where all data passes through one central point?',
        options: [
          'Central points are more reliable',
          'The Internet\'s distributed design has no single point of failure for the entire network',
          'The Internet uses less equipment',
          'Central points are always available'
        ],
        correctAnswer: 1,
        explanation: 'The Internet\'s distributed design means no single failure can bring down the entire network, unlike centralized systems where the central point is a single point of failure.'
      },
      {
        text: 'What role does software play in fault tolerance?',
        options: [
          'Software cannot help with fault tolerance',
          'Software can detect failures, switch to backups, retry operations, and manage redundancy',
          'Software only causes faults',
          'Software makes systems less reliable'
        ],
        correctAnswer: 1,
        explanation: 'Software plays a crucial role by detecting failures, managing failover, retrying operations, and coordinating redundant systems.'
      },
      {
        text: 'What is the "five nines" (99.999%) availability target?',
        options: [
          'A network speed measurement',
          'A goal for systems to be available 99.999% of the time, allowing only about 5 minutes of downtime per year',
          'A security rating',
          'The number of backups required'
        ],
        correctAnswer: 1,
        explanation: 'Five nines availability means 99.999% uptime, translating to only about 5.26 minutes of allowed downtime per year - a common target for critical systems.'
      }
    ]
  }
];

async function seedTopics() {
  console.log('Starting to seed Big Idea 4 Part 1 topics and questions...');

  // First, ensure Big Idea 4 exists
  const bigIdea4Ref = db.collection('bigIdeas').doc('big-idea-4');
  const bigIdea4Doc = await bigIdea4Ref.get();

  if (!bigIdea4Doc.exists) {
    await bigIdea4Ref.set({
      name: 'Computer Systems and Networks',
      shortName: 'CSN',
      color: '#059669', // emerald-600
      order: 4,
      createdAt: new Date()
    });
    console.log('Created Big Idea 4: Computer Systems and Networks');
  }

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

  console.log('\n✅ Big Idea 4 Part 1 seeding completed!');
  console.log('Topics created: 4.1-4.2');
  console.log('Total questions: 50');
}

seedTopics()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error seeding topics:', error);
    process.exit(1);
  });
