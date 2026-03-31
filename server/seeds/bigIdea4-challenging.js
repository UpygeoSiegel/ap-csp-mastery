/**
 * Big Idea 4: Computer Systems and Networks - Challenging Questions
 * 15 challenging questions per topic (45 total)
 * Run with: node server/seeds/bigIdea4-challenging.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questions = {
  // TOPIC 4.1: THE INTERNET (15 challenging questions)
  'topic-4.1': [
    {
      text: 'A company\'s website uses a content delivery network (CDN) with servers located in multiple countries. When a user in Japan requests the website, which of the following BEST explains how the CDN improves performance?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The CDN encrypts the data so it travels faster through the network.' },
        { id: 'b', text: 'The CDN serves the content from a server geographically closer to the user, reducing latency.' },
        { id: 'c', text: 'The CDN compresses all images to 10% of their original size before transmission.' },
        { id: 'd', text: 'The CDN bypasses the DNS lookup process entirely.' }
      ],
      correctAnswers: ['b'],
      explanation: 'CDNs cache content on servers distributed globally. When a user makes a request, the CDN serves content from the nearest server, significantly reducing latency compared to fetching from a distant origin server.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following statements correctly explains how the Internet facilitates communication at a large scale?\n\nI. A central monitoring computer tracks and maintains all connections.\nII. Data is routed between points through multiple paths, allowing rerouting if a connection fails.\nIII. Standardized protocols allow computers from different manufacturers to communicate.',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'I and II only' },
        { id: 'b', text: 'I and III only' },
        { id: 'c', text: 'II and III only' },
        { id: 'd', text: 'I, II, and III' }
      ],
      correctAnswers: ['c'],
      explanation: 'The Internet is decentralized with no central monitoring computer (I is false). It uses multiple routing paths for fault tolerance (II is true) and standardized protocols like TCP/IP for interoperability (III is true).',
      difficulty: 'hard'
    },
    {
      text: 'A user sends an email with a 5 MB attachment. The email is broken into packets for transmission. Which of the following BEST describes why packet switching is used rather than sending the entire file as one continuous stream?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Packet switching allows the network to be shared efficiently among many users, and individual packets can be rerouted if paths become congested.' },
        { id: 'b', text: 'Packet switching encrypts each packet separately, making the transmission more secure.' },
        { id: 'c', text: 'Packet switching ensures that all data arrives in the exact order it was sent without any possibility of reordering.' },
        { id: 'd', text: 'Packet switching eliminates the need for error checking at the destination.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Packet switching allows multiple users to share network resources efficiently. If one path is congested, packets can take alternative routes. TCP handles reordering at the destination, not the network itself.',
      difficulty: 'hard'
    },
    {
      text: 'Internet Protocol version 6 (IPv6) was developed to address limitations of IPv4. Which of the following BEST describes a benefit of IPv6 over IPv4?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'IPv6 addresses are shorter than IPv4 addresses, allowing faster packet routing.' },
        { id: 'b', text: 'IPv6 provides a vastly larger address space, accommodating many more devices on the Internet.' },
        { id: 'c', text: 'IPv6 eliminates the need for routers in network communication.' },
        { id: 'd', text: 'IPv6 encrypts all data automatically without requiring HTTPS.' }
      ],
      correctAnswers: ['b'],
      explanation: 'IPv4 uses 32-bit addresses (~4.3 billion addresses). IPv6 uses 128-bit addresses (~340 undecillion addresses), solving address exhaustion as billions of IoT devices connect to the Internet.',
      difficulty: 'hard'
    },
    {
      text: 'A certificate authority is used in Internet communications. Which of the following BEST describes the role of a certificate authority?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It certifies that a website does not contain viruses or malware.' },
        { id: 'b', text: 'It issues digital certificates that verify the authenticity of encryption keys used in secure communications.' },
        { id: 'c', text: 'It maintains a database mapping all domain names to their corresponding IP addresses.' },
        { id: 'd', text: 'It assigns new IP addresses to devices when they connect to the Internet.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Certificate authorities issue digital certificates that verify the ownership and authenticity of public encryption keys, enabling trust in HTTPS connections. DNS handles domain-to-IP mapping, and DHCP assigns IP addresses.',
      difficulty: 'hard'
    },
    {
      text: 'A user types "www.example.com" into their browser. The following steps occur, but not necessarily in this order:\n\n1. The browser sends an HTTP request to the web server.\n2. The DNS server returns the IP address for example.com.\n3. The browser queries a DNS server for example.com.\n4. The web server sends the requested web page back to the browser.\n\nWhat is the correct order of these steps?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1, 2, 3, 4' },
        { id: 'b', text: '3, 2, 1, 4' },
        { id: 'c', text: '2, 3, 4, 1' },
        { id: 'd', text: '3, 1, 2, 4' }
      ],
      correctAnswers: ['b'],
      explanation: 'First, the browser queries DNS (3) to get the IP address. DNS returns the IP (2). Then the browser sends an HTTP request (1). Finally, the server responds with the web page (4).',
      difficulty: 'hard'
    },
    {
      text: 'A network administrator observes that data packets from Computer A to Computer B sometimes take different routes through the network. Which of the following BEST explains this behavior?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The network is malfunctioning and routing packets incorrectly.' },
        { id: 'b', text: 'Routers make independent forwarding decisions for each packet based on current network conditions and routing tables.' },
        { id: 'c', text: 'The packets are being intercepted by a malicious actor and redirected.' },
        { id: 'd', text: 'TCP requires that alternate packets take different routes for load balancing.' }
      ],
      correctAnswers: ['b'],
      explanation: 'This is normal Internet behavior. Routers use dynamic routing protocols to independently determine the best path for each packet based on current conditions like congestion and link availability.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is TRUE about the relationship between HTTP and TCP/IP?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'HTTP and TCP/IP are competing protocols that cannot be used together.' },
        { id: 'b', text: 'HTTP is a higher-level protocol that uses TCP/IP as its underlying transport mechanism for reliable data delivery.' },
        { id: 'c', text: 'TCP/IP is used only for email, while HTTP is used only for web pages.' },
        { id: 'd', text: 'HTTP replaces TCP/IP for all modern web communications.' }
      ],
      correctAnswers: ['b'],
      explanation: 'HTTP operates at the application layer and relies on TCP/IP for reliable packet delivery. TCP handles breaking data into packets, ensuring delivery, and reassembly. IP handles addressing and routing.',
      difficulty: 'hard'
    },
    {
      text: 'An Internet user wants to send private data securely. Which of the following provides the MOST security for transmitting this data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Certifying the data with a Creative Commons license before sending' },
        { id: 'b', text: 'Sending the data using a connection with high bandwidth' },
        { id: 'c', text: 'Sending the data using public-key encryption' },
        { id: 'd', text: 'Sending the data using redundant routing paths' }
      ],
      correctAnswers: ['c'],
      explanation: 'Public-key encryption ensures only the intended recipient can decrypt the data. Creative Commons is for licensing, bandwidth affects speed not security, and redundant routing improves reliability but not confidentiality.',
      difficulty: 'hard'
    },
    {
      text: 'A smartphone user notices their device has both a MAC address and an IP address. Which of the following BEST describes the difference between these two types of addresses?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'MAC addresses are used for WiFi connections; IP addresses are used only for cellular connections.' },
        { id: 'b', text: 'MAC addresses are permanent hardware identifiers for network interfaces; IP addresses are logical addresses assigned by the network that can change.' },
        { id: 'c', text: 'MAC addresses are longer than IP addresses, so they provide better security.' },
        { id: 'd', text: 'MAC addresses are assigned by Internet Service Providers; IP addresses are built into the hardware.' }
      ],
      correctAnswers: ['b'],
      explanation: 'MAC addresses are hardware identifiers burned into network interfaces (like a serial number). IP addresses are logical addresses assigned by networks (via DHCP) and can change when you connect to different networks.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following scenarios BEST demonstrates the purpose of the TCP protocol specifically (as opposed to IP)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A router determines the next hop for a packet traveling from New York to London.' },
        { id: 'b', text: 'A receiving computer requests retransmission of a corrupted packet and reassembles packets in correct order.' },
        { id: 'c', text: 'A domain name like "google.com" is translated into a numerical IP address.' },
        { id: 'd', text: 'A packet header includes the source and destination IP addresses.' }
      ],
      correctAnswers: ['b'],
      explanation: 'TCP provides reliable, ordered delivery. It handles error detection, requests retransmission of lost/corrupted packets, and reassembles packets in order. IP handles addressing and routing, DNS handles name resolution.',
      difficulty: 'hard'
    },
    {
      text: 'A web application stores user session data in browser cookies. If an attacker intercepts the HTTP traffic, they could potentially steal these cookies. Which of the following would BEST protect against this attack?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using a faster Internet connection with higher bandwidth' },
        { id: 'b', text: 'Using HTTPS instead of HTTP to encrypt the communication' },
        { id: 'c', text: 'Using IPv6 instead of IPv4 for the connection' },
        { id: 'd', text: 'Using packet switching instead of circuit switching' }
      ],
      correctAnswers: ['b'],
      explanation: 'HTTPS encrypts all communication between browser and server, preventing attackers from reading intercepted traffic. IPv6, bandwidth, and packet switching don\'t provide encryption.',
      difficulty: 'hard'
    },
    {
      text: 'A school network blocks access to certain websites. This filtering is MOST likely implemented at which layer of the network?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The physical layer, by blocking specific network cables' },
        { id: 'b', text: 'The application layer, by a firewall or proxy server inspecting HTTP requests' },
        { id: 'c', text: 'The DNS layer, by having DNS return false IP addresses' },
        { id: 'd', text: 'Both B and C are common approaches to content filtering' }
      ],
      correctAnswers: ['d'],
      explanation: 'Content filtering is commonly implemented using application-layer firewalls that inspect URLs, and/or DNS filtering that blocks resolution of prohibited domains. Both approaches are widely used.',
      difficulty: 'hard'
    },
    {
      text: 'Two computers on different continents establish a video call. The call uses UDP rather than TCP. Which of the following BEST explains why UDP might be preferred for this application?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'UDP provides stronger encryption than TCP for video data.' },
        { id: 'b', text: 'UDP prioritizes low latency over guaranteed delivery, which is better for real-time applications where slight data loss is acceptable.' },
        { id: 'c', text: 'UDP automatically compresses video data to reduce bandwidth usage.' },
        { id: 'd', text: 'UDP routes packets through more direct paths than TCP.' }
      ],
      correctAnswers: ['b'],
      explanation: 'For real-time applications like video calls, low latency is more important than guaranteed delivery. If a few frames are lost, UDP doesn\'t waste time requesting retransmission - it moves on. TCP\'s reliability guarantees add latency.',
      difficulty: 'hard'
    },
    {
      text: 'A company operates a web service that receives 10,000 requests per second. They use a load balancer to distribute requests across 50 web servers. Which of the following is NOT a benefit of this architecture?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'If one server fails, the remaining servers can handle the traffic.' },
        { id: 'b', text: 'The load balancer ensures no single server becomes overwhelmed with requests.' },
        { id: 'c', text: 'The load balancer encrypts all traffic using public-key cryptography.' },
        { id: 'd', text: 'The system can be scaled by adding more servers behind the load balancer.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Load balancers distribute traffic for performance and availability, not encryption. While some load balancers can handle SSL termination, encryption is not their primary purpose. The other options are core benefits of load balancing.',
      difficulty: 'hard'
    }
  ],

  // TOPIC 4.2: FAULT TOLERANCE (15 challenging questions)
  'topic-4.2': [
    {
      text: 'The diagram shows two network configurations. Configuration I has devices P, Q, R, S connected in a ring. Configuration II has the same devices connected in a star with S in the center.\n\nIn which configuration(s) is it possible for device P to communicate with device R if exactly one connection fails?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Configuration I only' },
        { id: 'b', text: 'Configuration II only' },
        { id: 'c', text: 'Both Configuration I and Configuration II' },
        { id: 'd', text: 'Neither Configuration I nor Configuration II' }
      ],
      correctAnswers: ['a'],
      explanation: 'In a ring (I), if one connection fails, data can travel the "long way" around. In a star (II) with S at center, if the P-S or S-R connection fails, P cannot reach R because all traffic must go through S.',
      difficulty: 'hard'
    },
    {
      text: 'A cloud storage service stores each file on three different servers in different geographic regions. If one server becomes unavailable, the file can still be accessed from the other two. This approach PRIMARILY demonstrates which principle?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Data compression to reduce storage costs' },
        { id: 'b', text: 'Redundancy to maintain availability during failures' },
        { id: 'c', text: 'Encryption to protect data from unauthorized access' },
        { id: 'd', text: 'Load balancing to improve download speeds' }
      ],
      correctAnswers: ['b'],
      explanation: 'Storing multiple copies (replication) across different locations is redundancy. It ensures data remains available even when individual servers or entire regions experience failures.',
      difficulty: 'hard'
    },
    {
      text: 'A network has 5 nodes (A, B, C, D, E) with connections: A-B, A-C, B-C, B-D, C-D, C-E, D-E. What is the MINIMUM number of connections that must fail before node A can no longer communicate with node E?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1' },
        { id: 'b', text: '2' },
        { id: 'c', text: '3' },
        { id: 'd', text: '4' }
      ],
      correctAnswers: ['b'],
      explanation: 'A connects to B and C. E connects to C and D. If both A-B and A-C fail, A is isolated. Alternatively, paths from A to E include: A-B-D-E, A-B-C-E, A-C-E, A-C-D-E. At minimum, 2 strategic failures (like A-B and A-C) isolate A.',
      difficulty: 'hard'
    },
    {
      text: 'A hospital\'s patient monitoring system uses multiple sensors to track vital signs. If one sensor fails, the system continues operating with data from remaining sensors, though with reduced accuracy. This design demonstrates:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Complete fault prevention through redundant error checking' },
        { id: 'b', text: 'Graceful degradation - maintaining partial functionality during component failures' },
        { id: 'c', text: 'Automatic fault repair using backup sensor activation' },
        { id: 'd', text: 'Fault isolation to prevent cascading system failures' }
      ],
      correctAnswers: ['b'],
      explanation: 'Graceful degradation allows a system to continue operating with reduced functionality when components fail, rather than failing completely. The system remains useful, though not at full capability.',
      difficulty: 'hard'
    },
    {
      text: 'An e-commerce website uses a database cluster where data is written to a primary database and automatically copied to two replica databases. If the primary fails, one replica is promoted to primary. This setup achieves high availability but has a tradeoff. What is the MOST likely tradeoff?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The website becomes slower because all queries go to replicas.' },
        { id: 'b', text: 'Increased cost and complexity from maintaining multiple synchronized databases.' },
        { id: 'c', text: 'Data cannot be read while it is being replicated.' },
        { id: 'd', text: 'The system can only handle half as many users.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Database replication for high availability requires additional hardware, network bandwidth, synchronization mechanisms, and operational complexity. This increases both cost and system complexity.',
      difficulty: 'hard'
    },
    {
      text: 'The Internet was originally designed to be fault-tolerant for military purposes. Which architectural decision MOST contributed to this fault tolerance?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using a single, heavily protected central routing computer' },
        { id: 'b', text: 'Distributed routing with no single point of failure and multiple paths between nodes' },
        { id: 'c', text: 'Requiring all data to be encrypted before transmission' },
        { id: 'd', text: 'Limiting the network to only military computers' }
      ],
      correctAnswers: ['b'],
      explanation: 'The Internet\'s distributed architecture means no single node is critical to the entire network. Multiple routing paths ensure that if some connections are destroyed, data can be rerouted through surviving paths.',
      difficulty: 'hard'
    },
    {
      text: 'A company wants to ensure their web service remains available even if an entire data center goes offline. Which of the following solutions would BEST address this requirement?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Installing a more powerful server in the existing data center' },
        { id: 'b', text: 'Adding more network connections within the same data center' },
        { id: 'c', text: 'Deploying redundant systems in geographically separate data centers with automatic failover' },
        { id: 'd', text: 'Using RAID storage for all servers in the current data center' }
      ],
      correctAnswers: ['c'],
      explanation: 'Geographic redundancy with automatic failover protects against regional disasters, power outages, or other events that could take down an entire data center. Other options only protect against failures within a single location.',
      difficulty: 'hard'
    },
    {
      text: 'A network administrator is evaluating two potential network topologies:\n\nTopology A: 6 nodes fully connected (every node connected to every other node)\nTopology B: 6 nodes in a ring\n\nWhich statement about fault tolerance is TRUE?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Topology A can tolerate more connection failures than Topology B before any two nodes become unreachable.' },
        { id: 'b', text: 'Topology B can tolerate more connection failures than Topology A.' },
        { id: 'c', text: 'Both topologies have identical fault tolerance.' },
        { id: 'd', text: 'Topology A has no fault tolerance because it has too many connections.' }
      ],
      correctAnswers: ['a'],
      explanation: 'In a fully connected network of 6 nodes, there are 15 connections, and any node can reach any other through multiple paths. In a ring, just one connection failure creates a longer path, and two strategic failures can isolate nodes.',
      difficulty: 'hard'
    },
    {
      text: 'A streaming service uses the following redundancy strategy:\n- Video files stored in 3 data centers\n- 2 DNS servers\n- 1 payment processing server\n\nWhich component represents the greatest risk to service availability?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Video file storage' },
        { id: 'b', text: 'DNS servers' },
        { id: 'c', text: 'Payment processing server' },
        { id: 'd', text: 'All components have equal risk' }
      ],
      correctAnswers: ['c'],
      explanation: 'The payment processing server is a single point of failure - if it fails, no payments can be processed. The other components have redundancy (3 data centers for video, 2 DNS servers).',
      difficulty: 'hard'
    },
    {
      text: 'A self-driving car system is designed so that if the primary computer fails, a backup computer immediately takes over control. If both fail, the car safely pulls over and stops. This design demonstrates:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only redundancy' },
        { id: 'b', text: 'Only graceful degradation' },
        { id: 'c', text: 'Both redundancy (backup computer) and graceful degradation (safe stop)' },
        { id: 'd', text: 'Neither redundancy nor graceful degradation' }
      ],
      correctAnswers: ['c'],
      explanation: 'The backup computer is redundancy - a duplicate system ready to take over. The safe stop when both fail is graceful degradation - the system fails in a controlled, safe manner rather than catastrophically.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is TRUE about the tradeoffs of designing highly fault-tolerant systems?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Fault-tolerant systems are always faster than non-fault-tolerant systems.' },
        { id: 'b', text: 'Increased fault tolerance typically requires more resources (cost, hardware, complexity) for redundancy.' },
        { id: 'c', text: 'Fault tolerance eliminates the possibility of any system failures.' },
        { id: 'd', text: 'Fault tolerance can only be achieved through software, not hardware.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Redundancy requires duplicate components, additional infrastructure, and more complex management. This increases cost and complexity. Fault tolerance doesn\'t eliminate failures - it allows systems to survive them.',
      difficulty: 'hard'
    },
    {
      text: 'A website uses DNS round-robin to distribute traffic across 4 web servers. If one server fails, what happens to users who are directed to that server?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Users are automatically redirected to a working server instantly.' },
        { id: 'b', text: 'Users directed to the failed server will experience errors until DNS records are updated or cached entries expire.' },
        { id: 'c', text: 'DNS immediately detects the failure and removes the server from rotation.' },
        { id: 'd', text: 'The other 3 servers automatically take over the failed server\'s IP address.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Basic DNS round-robin has no health checking. Users whose DNS cache points to the failed server will get errors. This is why load balancers with health checks are preferred for critical applications.',
      difficulty: 'hard'
    },
    {
      text: 'A bank\'s ATM network is designed with the principle that "no single component failure should prevent customers from accessing their accounts." This principle is BEST described as:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Eliminating all possible points of failure' },
        { id: 'b', text: 'Designing to avoid single points of failure through redundancy' },
        { id: 'c', text: 'Ensuring the system never fails under any circumstances' },
        { id: 'd', text: 'Making the system simpler to reduce failure possibilities' }
      ],
      correctAnswers: ['b'],
      explanation: 'This describes designing around single points of failure. It doesn\'t claim to eliminate all failures or guarantee 100% uptime - it ensures that any single component failure won\'t cause complete system failure.',
      difficulty: 'hard'
    },
    {
      text: 'Compare these two backup strategies for a critical database:\n\nStrategy A: Full backup every night to a local disk\nStrategy B: Continuous replication to a server in a different city\n\nWhich statement is TRUE?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Strategy A provides better protection against data center disasters.' },
        { id: 'b', text: 'Strategy B provides better protection against data loss from recent changes and regional disasters.' },
        { id: 'c', text: 'Both strategies provide identical protection.' },
        { id: 'd', text: 'Strategy A is always preferred because it is simpler.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Strategy B (continuous replication to a different city) protects against regional disasters and minimizes data loss since changes are continuously synchronized. Strategy A could lose up to a day of data and both copies could be destroyed in a local disaster.',
      difficulty: 'hard'
    },
    {
      text: 'A distributed system uses a "heartbeat" mechanism where servers regularly send signals to indicate they are operational. If a server misses 3 consecutive heartbeats, it is considered failed. What is the PRIMARY purpose of this mechanism?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To increase the processing speed of each server' },
        { id: 'b', text: 'To detect failures so the system can initiate automatic failover to redundant components' },
        { id: 'c', text: 'To synchronize the clocks across all servers' },
        { id: 'd', text: 'To encrypt communications between servers' }
      ],
      correctAnswers: ['b'],
      explanation: 'Heartbeat mechanisms are used for failure detection in distributed systems. When a server stops sending heartbeats, other components can detect this and trigger failover to backup systems, maintaining availability.',
      difficulty: 'hard'
    }
  ],

  // TOPIC 4.3: PARALLEL AND DISTRIBUTED COMPUTING (15 challenging questions)
  'topic-4.3': [
    {
      text: 'A video rendering application needs to apply a color filter to each of 1 million pixels in an image. This task is BEST suited for parallel processing because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Video rendering always requires multiple computers.' },
        { id: 'b', text: 'Each pixel can be processed independently without needing results from other pixels.' },
        { id: 'c', text: 'The pixels must be processed in a specific sequential order.' },
        { id: 'd', text: 'Parallel processing reduces the total number of computations required.' }
      ],
      correctAnswers: ['b'],
      explanation: 'This is an "embarrassingly parallel" problem - each pixel\'s calculation is independent of others. All pixels can be processed simultaneously on different cores, achieving near-linear speedup.',
      difficulty: 'hard'
    },
    {
      text: 'A program has a sequential portion that takes 20% of execution time and a parallelizable portion that takes 80%. According to Amdahl\'s Law, what is the MAXIMUM speedup achievable, even with unlimited processors?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4x' },
        { id: 'b', text: '5x' },
        { id: 'c', text: '8x' },
        { id: 'd', text: 'Unlimited' }
      ],
      correctAnswers: ['b'],
      explanation: 'Amdahl\'s Law: Maximum speedup = 1 / (sequential portion). With 20% sequential (0.20): Max speedup = 1/0.20 = 5x. The sequential portion is the bottleneck that limits parallelization benefits.',
      difficulty: 'hard'
    },
    {
      text: 'A task takes 100 seconds on one processor. If 75% of the task can be perfectly parallelized across 4 processors, what is the new execution time?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '25 seconds' },
        { id: 'b', text: '43.75 seconds' },
        { id: 'c', text: '50 seconds' },
        { id: 'd', text: '75 seconds' }
      ],
      correctAnswers: ['b'],
      explanation: 'Sequential portion: 25% of 100 = 25 seconds. Parallel portion: 75% of 100 = 75 seconds, divided by 4 processors = 18.75 seconds. Total: 25 + 18.75 = 43.75 seconds.',
      difficulty: 'hard'
    },
    {
      text: 'A weather simulation divides the atmosphere into a 3D grid. Each grid cell\'s next state depends on the current state of its neighboring cells. Why does this create challenges for parallel processing?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Weather data cannot be represented digitally.' },
        { id: 'b', text: 'Cells on processor boundaries need data from neighbors on other processors, requiring inter-processor communication and synchronization.' },
        { id: 'c', text: 'Weather simulations can only run on a single computer.' },
        { id: 'd', text: 'The grid is too small to benefit from parallelization.' }
      ],
      correctAnswers: ['b'],
      explanation: 'While the grid can be partitioned across processors, cells at partition boundaries depend on neighboring cells owned by other processors. This requires data exchange and synchronization, adding overhead.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following problems is LEAST suitable for parallel processing?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Searching a large database for records matching a query' },
        { id: 'b', text: 'Calculating the nth Fibonacci number where each number depends on the previous two' },
        { id: 'c', text: 'Applying an image filter to millions of independent pixels' },
        { id: 'd', text: 'Processing millions of independent web requests' }
      ],
      correctAnswers: ['b'],
      explanation: 'Fibonacci calculation has sequential dependencies - F(n) requires F(n-1) and F(n-2), which require F(n-2), F(n-3), F(n-4), etc. This inherent sequential dependency makes parallelization difficult.',
      difficulty: 'hard'
    },
    {
      text: 'A distributed computing project (like SETI@Home) uses thousands of volunteers\' computers to analyze data. Which of the following is a PRIMARY advantage of this approach?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Each volunteer computer processes data faster than a supercomputer.' },
        { id: 'b', text: 'It harnesses massive computational power at low cost by utilizing idle resources from many computers.' },
        { id: 'c', text: 'The data is more secure because it is distributed across many locations.' },
        { id: 'd', text: 'Volunteer computers never experience failures.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Volunteer computing aggregates idle computational resources from thousands of computers, providing massive processing power without the cost of purchasing and maintaining dedicated supercomputers.',
      difficulty: 'hard'
    },
    {
      text: 'In parallel computing, a "race condition" occurs when:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'One processor finishes its task before another processor.' },
        { id: 'b', text: 'The program\'s behavior depends on the unpredictable timing of concurrent operations accessing shared data.' },
        { id: 'c', text: 'Processors compete to have the highest clock speed.' },
        { id: 'd', text: 'The parallel version runs faster than the sequential version.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Race conditions occur when multiple threads access shared data concurrently and the final result depends on the non-deterministic order of execution. This can cause bugs that are difficult to reproduce and debug.',
      difficulty: 'hard'
    },
    {
      text: 'Two processes are running concurrently:\n\nProcess A holds Lock 1 and is waiting for Lock 2.\nProcess B holds Lock 2 and is waiting for Lock 1.\n\nThis situation is called:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Load balancing' },
        { id: 'b', text: 'Deadlock' },
        { id: 'c', text: 'Race condition' },
        { id: 'd', text: 'Parallel speedup' }
      ],
      correctAnswers: ['b'],
      explanation: 'Deadlock occurs when processes are waiting for resources held by each other, forming a cycle where no process can proceed. Both processes will wait indefinitely unless the deadlock is detected and resolved.',
      difficulty: 'hard'
    },
    {
      text: 'A data processing pipeline has three stages: Extract (2 min), Transform (6 min), and Load (2 min). If these stages can be pipelined so that while one dataset is being transformed, the previous dataset is being loaded and the next is being extracted, what is the approximate time to process 10 datasets?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '100 minutes (10 × 10 minutes each)' },
        { id: 'b', text: '64 minutes (initial pipeline fill + 9 × 6-minute transform cycles)' },
        { id: 'c', text: '60 minutes' },
        { id: 'd', text: '30 minutes' }
      ],
      correctAnswers: ['b'],
      explanation: 'First dataset takes full 10 min (2+6+2). Then each subsequent dataset completes every 6 min (the longest stage). Total ≈ 10 + (9 × 6) = 64 minutes. Pipelining overlaps independent stages.',
      difficulty: 'hard'
    },
    {
      text: 'GPU computing is particularly effective for certain types of problems. Which characteristic makes a problem well-suited for GPU processing?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The problem requires complex branching logic with many conditional statements.' },
        { id: 'b', text: 'The problem involves applying the same operation to thousands of data elements simultaneously.' },
        { id: 'c', text: 'The problem has significant sequential dependencies between steps.' },
        { id: 'd', text: 'The problem requires processing a small amount of data with high precision.' }
      ],
      correctAnswers: ['b'],
      explanation: 'GPUs have thousands of cores optimized for SIMD (Single Instruction, Multiple Data) operations - applying the same operation to many data elements simultaneously. This makes them ideal for graphics, machine learning, and scientific simulations.',
      difficulty: 'hard'
    },
    {
      text: 'MapReduce is a programming model for processing large datasets. In the "Map" phase, the framework:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Creates a geographic map of where the data is stored.' },
        { id: 'b', text: 'Applies a function to each piece of input data independently, producing key-value pairs.' },
        { id: 'c', text: 'Combines all the data into a single output file.' },
        { id: 'd', text: 'Sorts the data alphabetically.' }
      ],
      correctAnswers: ['b'],
      explanation: 'In MapReduce, the Map phase processes input data in parallel, applying a user-defined function to each element and emitting key-value pairs. The Reduce phase then aggregates values with the same key.',
      difficulty: 'hard'
    },
    {
      text: 'A company is deciding between buying a single powerful server ($50,000) or ten smaller servers ($6,000 each) for a parallelizable workload. Which factor would MOST favor choosing the distributed solution of ten servers?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The workload has significant sequential dependencies.' },
        { id: 'b', text: 'The workload is embarrassingly parallel with no inter-node communication needed, plus the distributed approach provides fault tolerance.' },
        { id: 'c', text: 'The company has limited network bandwidth between servers.' },
        { id: 'd', text: 'The company needs results in real-time with minimal latency.' }
      ],
      correctAnswers: ['b'],
      explanation: 'For embarrassingly parallel workloads (where tasks are independent), distributed servers provide more total computing power for similar cost, plus redundancy if one server fails. Sequential dependencies or high communication needs favor single powerful servers.',
      difficulty: 'hard'
    },
    {
      text: 'What is the key difference between concurrency and parallelism?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'There is no difference; the terms are interchangeable.' },
        { id: 'b', text: 'Concurrency involves managing multiple tasks (potentially on one core through interleaving); parallelism involves simultaneous execution on multiple cores.' },
        { id: 'c', text: 'Parallelism is always faster than concurrency.' },
        { id: 'd', text: 'Concurrency requires more processors than parallelism.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Concurrency is about dealing with multiple tasks at once (structure) - they may execute in interleaved fashion on one core. Parallelism is about executing multiple tasks simultaneously (execution) - requires multiple processors.',
      difficulty: 'hard'
    },
    {
      text: 'A web application runs on 10 servers. Load monitoring shows:\n- 3 servers at 90% CPU usage\n- 7 servers at 10% CPU usage\n\nThis indicates a problem with:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Having too many servers' },
        { id: 'b', text: 'Load balancing - traffic is not being distributed evenly' },
        { id: 'c', text: 'The servers being too powerful' },
        { id: 'd', text: 'Network bandwidth limitations' }
      ],
      correctAnswers: ['b'],
      explanation: 'Effective load balancing should distribute work evenly. Having some servers overloaded while others are idle indicates the load balancer is not distributing requests properly, causing inefficient resource utilization.',
      difficulty: 'hard'
    },
    {
      text: 'A sorting algorithm is modified to work in parallel. The original sequential algorithm sorts 1 million records in 60 seconds. The parallel version on 4 processors takes 20 seconds. What is the efficiency of the parallel implementation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '75%' },
        { id: 'b', text: '100%' },
        { id: 'c', text: '50%' },
        { id: 'd', text: '25%' }
      ],
      correctAnswers: ['a'],
      explanation: 'Speedup = 60/20 = 3x. Efficiency = Speedup / Number of processors = 3/4 = 0.75 = 75%. Perfect efficiency (100%) would mean 4x speedup with 4 processors. The 25% loss is due to parallelization overhead.',
      difficulty: 'hard'
    }
  ]
};

async function seedChallengingQuestions() {
  console.log('Seeding Big Idea 4 Challenging Questions...');
  console.log('=========================================');

  let totalCount = 0;

  for (const topicId of Object.keys(questions)) {
    const topicQuestions = questions[topicId];
    console.log(`\nProcessing topic ${topicId}: ${topicQuestions.length} questions`);

    // Add questions to the questions collection
    for (let i = 0; i < topicQuestions.length; i++) {
      const q = topicQuestions[i];
      const qId = `${topicId}-challenge-${i + 1}`;

      await db.collection('questions').doc(qId).set({
        id: qId,
        text: q.text,
        type: q.type,
        options: q.options,
        correctAnswers: q.correctAnswers,
        explanation: q.explanation,
        difficulty: q.difficulty || 'hard',
        topicId: topicId,
        bigIdeaId: 'big-idea-4',
        isCustom: false,
        addedBy: 'system-challenging-v1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deactivated: false
      });

      totalCount++;
    }

    console.log(`  Added ${topicQuestions.length} questions for topic ${topicId}`);
  }

  console.log('\n=========================================');
  console.log(`Done! Added ${totalCount} challenging questions for Big Idea 4.`);
  console.log('Topics covered: 4.1, 4.2, 4.3');
  console.log('Questions per topic: 15');
}

seedChallengingQuestions()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error seeding questions:', error);
    process.exit(1);
  });
