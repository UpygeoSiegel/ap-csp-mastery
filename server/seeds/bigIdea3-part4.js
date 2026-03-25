// Big Idea 3: Algorithms and Programming - Part 4 (Topics 3.14-3.18)
// Run with: node server/seeds/bigIdea3-part4.js

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

if (process.env.FIREBASE_PROJECT_ID !== 'ap-csp-mastery') {
  console.error(`ERROR: Wrong project!`);
  process.exit(1);
}

const topics = [
  {
    id: '3-14',
    name: '3.14 Libraries',
    description: 'Understanding and using software libraries and APIs',
    bigIdeaId: 'big-idea-3',
    order: 14,
    questions: [
      {
        text: 'What is a software library?',
        options: [
          'A collection of prewritten code that can be reused in programs',
          'A physical location where programmers work',
          'A type of programming language',
          'A database for storing user information'
        ],
        correctAnswer: 0,
        explanation: 'A software library is a collection of prewritten code (functions, procedures, classes) that programmers can use in their own programs to avoid rewriting common functionality.'
      },
      {
        text: 'Which of the following is a benefit of using libraries in programming?',
        options: [
          'Programs will always run faster',
          'Programmers can use tested, reliable code without writing it from scratch',
          'Libraries eliminate all bugs from programs',
          'Libraries are required for all programs to run'
        ],
        correctAnswer: 1,
        explanation: 'Libraries allow programmers to use code that has already been written and tested, saving development time and reducing errors from rewriting common functionality.'
      },
      {
        text: 'What is an API (Application Programming Interface)?',
        options: [
          'A programming language for web development',
          'A set of rules and protocols that allow different software applications to communicate',
          'A type of computer hardware',
          'A debugging tool for finding errors'
        ],
        correctAnswer: 1,
        explanation: 'An API defines how different software components should interact, providing a set of rules and protocols for communication between applications or libraries.'
      },
      {
        text: 'A programmer wants to add mathematical functions like square root and trigonometry to their program. What should they do?',
        options: [
          'Write all the mathematical functions from scratch',
          'Import a math library that provides these functions',
          'Avoid using mathematical operations',
          'Use only addition and subtraction'
        ],
        correctAnswer: 1,
        explanation: 'Importing a math library provides access to tested, optimized mathematical functions without needing to implement them from scratch.'
      },
      {
        text: 'Which statement about libraries is FALSE?',
        options: [
          'Libraries can be created by individual programmers',
          'Libraries can be shared and used by many different programs',
          'All libraries are free and open source',
          'Libraries help reduce code duplication'
        ],
        correctAnswer: 2,
        explanation: 'Not all libraries are free and open source. Many libraries are proprietary or require licenses for commercial use.'
      },
      {
        text: 'What does it mean to "import" a library in a program?',
        options: [
          'To copy the library files to a USB drive',
          'To make the library\'s functionality available for use in the current program',
          'To translate the library into another language',
          'To delete the library from the computer'
        ],
        correctAnswer: 1,
        explanation: 'Importing a library makes its functions, procedures, and other code available for use in the current program.'
      },
      {
        text: 'A developer needs to create graphics for a game. Which approach is most efficient?',
        options: [
          'Write all graphics rendering code from scratch',
          'Use a graphics library designed for game development',
          'Avoid using any graphics in the game',
          'Copy graphics code from random websites without attribution'
        ],
        correctAnswer: 1,
        explanation: 'Using a graphics library provides optimized, tested code specifically designed for rendering graphics, saving significant development time.'
      },
      {
        text: 'What is documentation in the context of software libraries?',
        options: [
          'Legal paperwork for software ownership',
          'Written explanations of how to use the library\'s features and functions',
          'The source code of the library',
          'Error messages produced by the library'
        ],
        correctAnswer: 1,
        explanation: 'Documentation provides explanations, examples, and specifications for how to use a library\'s features, helping programmers understand and correctly use the library.'
      },
      {
        text: 'Why might a programmer choose NOT to use a particular library?',
        options: [
          'The library provides functionality the program needs',
          'The library\'s license is incompatible with the project\'s requirements',
          'The library has good documentation',
          'The library is well-maintained and updated regularly'
        ],
        correctAnswer: 1,
        explanation: 'License incompatibility can prevent use of a library, especially in commercial projects where certain open-source licenses may impose restrictions.'
      },
      {
        text: 'What is a "dependency" in software development?',
        options: [
          'A bug in the code',
          'A library or component that a program requires to function',
          'The speed of a program',
          'A type of programming language'
        ],
        correctAnswer: 1,
        explanation: 'A dependency is a library or external component that a program relies on to function properly. The program "depends" on these external resources.'
      },
      {
        text: 'Which of the following best describes how libraries promote collaboration?',
        options: [
          'Libraries prevent other programmers from seeing code',
          'Libraries allow programmers to share solutions that others can use in their own projects',
          'Libraries make programs run slower',
          'Libraries require all programmers to use the same computer'
        ],
        correctAnswer: 1,
        explanation: 'Libraries enable collaboration by allowing programmers to share reusable solutions that others can incorporate into their own projects.'
      },
      {
        text: 'A web developer wants to add interactive charts to a website. What is the best approach?',
        options: [
          'Draw all charts manually using basic shapes',
          'Use a charting library that provides pre-built chart components',
          'Avoid using any data visualization',
          'Take screenshots of charts from other websites'
        ],
        correctAnswer: 1,
        explanation: 'A charting library provides pre-built, customizable chart components that handle the complex rendering and interactivity, saving significant development effort.'
      },
      {
        text: 'What happens when a library is updated to a new version?',
        options: [
          'All programs using the library automatically stop working',
          'Programs may need to be tested or updated to work with the new version',
          'The old version of the library is automatically deleted everywhere',
          'Nothing changes for programs using the library'
        ],
        correctAnswer: 1,
        explanation: 'Library updates may introduce changes that affect programs using the library, so testing and potentially updating code may be necessary.'
      },
      {
        text: 'Which of the following is an example of using an API?',
        options: [
          'Writing a program that only uses basic arithmetic',
          'A weather app requesting current weather data from a weather service',
          'Typing a document in a word processor',
          'Turning on a computer'
        ],
        correctAnswer: 1,
        explanation: 'When a weather app requests data from a weather service, it uses the service\'s API to communicate and retrieve information.'
      },
      {
        text: 'What is "abstraction" in the context of libraries?',
        options: [
          'Making code more complicated',
          'Hiding complex implementation details and providing a simpler interface',
          'Removing all comments from code',
          'Making programs run slower'
        ],
        correctAnswer: 1,
        explanation: 'Libraries provide abstraction by hiding complex implementation details and offering a simpler interface for programmers to use.'
      },
      {
        text: 'A programmer is using a library function but getting unexpected results. What should they do first?',
        options: [
          'Delete the library immediately',
          'Check the library\'s documentation to ensure they\'re using the function correctly',
          'Rewrite the entire library',
          'Ignore the problem'
        ],
        correctAnswer: 1,
        explanation: 'Consulting documentation is the first step to verify correct usage of library functions and understand expected inputs and outputs.'
      },
      {
        text: 'What is a potential drawback of relying heavily on external libraries?',
        options: [
          'Code becomes more readable',
          'Programs may break if libraries are discontinued or incompatible updates are released',
          'Development time decreases',
          'Code reuse increases'
        ],
        correctAnswer: 1,
        explanation: 'Heavy reliance on external libraries creates dependencies that can cause issues if libraries are discontinued, have security vulnerabilities, or release breaking changes.'
      },
      {
        text: 'Which statement best describes the relationship between libraries and procedures?',
        options: [
          'Libraries and procedures are the same thing',
          'Libraries typically contain multiple procedures and functions that can be used together',
          'Procedures cannot exist inside libraries',
          'Libraries replace the need for procedures'
        ],
        correctAnswer: 1,
        explanation: 'Libraries are collections that typically contain multiple related procedures, functions, and other code that work together to provide functionality.'
      },
      {
        text: 'A student is creating a mobile app and needs to add a map feature. What is the most practical approach?',
        options: [
          'Create their own satellite imaging and mapping system',
          'Use a mapping API like Google Maps or OpenStreetMap',
          'Draw maps by hand and scan them',
          'Avoid including maps in the app'
        ],
        correctAnswer: 1,
        explanation: 'Using an existing mapping API provides professional-quality maps and functionality without the impossible task of creating a mapping system from scratch.'
      },
      {
        text: 'What does it mean when a library is "open source"?',
        options: [
          'The library costs money to use',
          'The library\'s source code is publicly available and can be viewed, modified, and distributed',
          'The library only works on certain computers',
          'The library has no documentation'
        ],
        correctAnswer: 1,
        explanation: 'Open source means the library\'s source code is publicly available, allowing anyone to view, modify, and often redistribute it under certain license terms.'
      },
      {
        text: 'Why is it important to understand what functions a library provides before using it?',
        options: [
          'To make the program run slower',
          'To ensure the library meets the program\'s needs and to use it correctly',
          'Libraries should never be researched before use',
          'To avoid writing any code'
        ],
        correctAnswer: 1,
        explanation: 'Understanding a library\'s capabilities ensures it meets project requirements and helps programmers use its functions correctly and efficiently.'
      },
      {
        text: 'Which of the following is NOT a common type of software library?',
        options: [
          'Math libraries for numerical calculations',
          'Graphics libraries for visual rendering',
          'Hardware libraries that physically modify computer components',
          'Network libraries for internet communication'
        ],
        correctAnswer: 2,
        explanation: 'Software libraries are code-based and cannot physically modify hardware. Math, graphics, and network libraries are all common types of software libraries.'
      },
      {
        text: 'A team is developing software and wants to ensure consistency across their codebase. How can libraries help?',
        options: [
          'Libraries make code inconsistent',
          'Using shared libraries ensures team members use the same tested functions and approaches',
          'Libraries prevent teamwork',
          'Libraries only work for individual programmers'
        ],
        correctAnswer: 1,
        explanation: 'Shared libraries promote consistency by providing common functions and approaches that all team members can use, ensuring uniform implementation.'
      },
      {
        text: 'What is the purpose of library versioning (e.g., version 1.0, 2.0)?',
        options: [
          'To make libraries more confusing',
          'To track changes and allow developers to use specific versions compatible with their code',
          'Versioning serves no purpose',
          'To make older versions unavailable'
        ],
        correctAnswer: 1,
        explanation: 'Versioning tracks changes to libraries over time and allows developers to use specific versions that are compatible with their code.'
      },
      {
        text: 'When a programmer "calls" a library function, what happens?',
        options: [
          'The programmer phones the library developer',
          'The program executes the code in that function and may receive a return value',
          'The library is deleted',
          'A new library is created'
        ],
        correctAnswer: 1,
        explanation: 'Calling a library function executes the code within that function, potentially with arguments, and may return a value to the calling program.'
      }
    ]
  },
  {
    id: '3-15',
    name: '3.15 Random Values',
    description: 'Using random number generation in programs',
    bigIdeaId: 'big-idea-3',
    order: 15,
    questions: [
      {
        text: 'What does the RANDOM(1, 6) function return in AP CSP pseudocode?',
        options: [
          'Always returns 1',
          'A random integer from 1 to 6, inclusive',
          'Always returns 6',
          'A random decimal between 1 and 6'
        ],
        correctAnswer: 1,
        explanation: 'RANDOM(a, b) returns a random integer from a to b, inclusive. So RANDOM(1, 6) returns 1, 2, 3, 4, 5, or 6 with equal probability.'
      },
      {
        text: 'Which of the following correctly simulates a coin flip (heads = 1, tails = 0)?',
        options: [
          'RANDOM(1, 2)',
          'RANDOM(0, 1)',
          'RANDOM(0, 2)',
          'RANDOM(1, 100)'
        ],
        correctAnswer: 1,
        explanation: 'RANDOM(0, 1) returns either 0 or 1 with equal probability, perfectly simulating a fair coin flip.'
      },
      {
        text: 'What is a pseudorandom number?',
        options: [
          'A number that is completely unpredictable',
          'A number generated by an algorithm that appears random but is determined by a starting value',
          'A number that is always the same',
          'A number that only appears in pseudo code'
        ],
        correctAnswer: 1,
        explanation: 'Pseudorandom numbers are generated by deterministic algorithms but appear random. They are determined by an initial "seed" value.'
      },
      {
        text: 'A game needs to randomly select a player from a list of 10 players (indexed 1 to 10). Which expression should be used?',
        options: [
          'RANDOM(0, 9)',
          'RANDOM(1, 10)',
          'RANDOM(1, 100)',
          'RANDOM(0, 10)'
        ],
        correctAnswer: 1,
        explanation: 'RANDOM(1, 10) returns a value from 1 to 10 inclusive, matching the player indices.'
      },
      {
        text: 'What is the range of possible values for RANDOM(5, 15)?',
        options: [
          '5 to 14',
          '6 to 15',
          '5 to 15',
          '0 to 15'
        ],
        correctAnswer: 2,
        explanation: 'RANDOM(a, b) is inclusive of both endpoints, so RANDOM(5, 15) returns integers from 5 to 15.'
      },
      {
        text: 'Why might a programmer use random values in a program?',
        options: [
          'To make the program run faster',
          'To create unpredictability, such as in games or simulations',
          'To eliminate all bugs',
          'Random values should never be used in programming'
        ],
        correctAnswer: 1,
        explanation: 'Random values create unpredictability, which is useful in games, simulations, testing, cryptography, and many other applications.'
      },
      {
        text: 'If RANDOM(1, 4) is called 1000 times, approximately how many times would you expect to get the value 2?',
        options: [
          '100 times',
          '250 times',
          '500 times',
          '1000 times'
        ],
        correctAnswer: 1,
        explanation: 'With four equally likely outcomes (1, 2, 3, 4), each has a 1/4 probability. Out of 1000 calls, we expect each value approximately 250 times.'
      },
      {
        text: 'What is a "seed" in random number generation?',
        options: [
          'A type of plant used in programming',
          'The starting value that determines the sequence of random numbers generated',
          'The final random number produced',
          'A programming error'
        ],
        correctAnswer: 1,
        explanation: 'A seed is the initial value used by a pseudorandom number generator. The same seed produces the same sequence of "random" numbers.'
      },
      {
        text: 'Which code segment will assign a random even number between 2 and 10 (inclusive) to variable x?',
        options: [
          'x ← RANDOM(2, 10)',
          'x ← RANDOM(1, 5) * 2',
          'x ← RANDOM(0, 10)',
          'x ← RANDOM(2, 10) / 2'
        ],
        correctAnswer: 1,
        explanation: 'RANDOM(1, 5) returns 1, 2, 3, 4, or 5. Multiplying by 2 gives 2, 4, 6, 8, or 10 - all even numbers in the desired range.'
      },
      {
        text: 'A simulation needs a 30% chance of rain. Which approach correctly implements this?',
        options: [
          'IF (RANDOM(1, 100) ≤ 30) then rain',
          'IF (RANDOM(1, 100) = 30) then rain',
          'IF (RANDOM(1, 3) = 1) then rain',
          'IF (RANDOM(0, 1) = 0.3) then rain'
        ],
        correctAnswer: 0,
        explanation: 'RANDOM(1, 100) ≤ 30 is true for values 1-30, which is 30 out of 100 possible outcomes, or 30%.'
      },
      {
        text: 'What is the probability of RANDOM(1, 10) returning a value greater than 7?',
        options: [
          '30%',
          '70%',
          '50%',
          '10%'
        ],
        correctAnswer: 0,
        explanation: 'Values greater than 7 are 8, 9, and 10. That\'s 3 out of 10 equally likely outcomes, or 30%.'
      },
      {
        text: 'A program uses RANDOM(1, 6) + RANDOM(1, 6) to simulate rolling two dice. What is the range of possible sums?',
        options: [
          '1 to 6',
          '2 to 12',
          '1 to 12',
          '0 to 12'
        ],
        correctAnswer: 1,
        explanation: 'Each die produces 1-6, so the minimum sum is 1+1=2 and maximum is 6+6=12.'
      },
      {
        text: 'Which statement about computer-generated random numbers is true?',
        options: [
          'They are truly random and completely unpredictable',
          'They are typically pseudorandom, generated by algorithms',
          'They can only generate even numbers',
          'They always produce the same number'
        ],
        correctAnswer: 1,
        explanation: 'Most computer random number generators are pseudorandom - they use algorithms that produce sequences that appear random but are deterministic.'
      },
      {
        text: 'A quiz app wants to randomly select 5 questions from a pool of 20 questions. What must be ensured?',
        options: [
          'The same question can be selected multiple times',
          'Once a question is selected, it should not be selected again',
          'All 20 questions must always be used',
          'Questions must be selected in order'
        ],
        correctAnswer: 1,
        explanation: 'To select 5 different questions, the program must avoid duplicates by tracking which questions have already been selected.'
      },
      {
        text: 'What would be the output of: result ← RANDOM(5, 5)',
        options: [
          'An error because the values are the same',
          'Always 5',
          'A random value between 1 and 5',
          'Always 0'
        ],
        correctAnswer: 1,
        explanation: 'When both parameters are the same, RANDOM(5, 5) can only return 5, as that is the only integer in the range.'
      },
      {
        text: 'A game awards bonus points with the following probabilities: 50% chance of 10 points, 30% chance of 20 points, 20% chance of 50 points. Which approach is correct?',
        options: [
          'Use RANDOM(10, 50)',
          'Use RANDOM(1, 100) and check ranges: 1-50 gives 10 points, 51-80 gives 20 points, 81-100 gives 50 points',
          'Use RANDOM(1, 3)',
          'Use RANDOM(10, 20)'
        ],
        correctAnswer: 1,
        explanation: 'Using RANDOM(1, 100) with ranges allows precise probability control: 50 values for 50%, 30 values for 30%, 20 values for 20%.'
      },
      {
        text: 'Why is it important that random number generators produce uniformly distributed values?',
        options: [
          'It makes the program run faster',
          'Each possible value has an equal chance of being selected, ensuring fairness',
          'It reduces memory usage',
          'It makes debugging easier'
        ],
        correctAnswer: 1,
        explanation: 'Uniform distribution means each value in the range has equal probability, which is essential for fair simulations, games, and statistical applications.'
      },
      {
        text: 'A program needs to randomly select either "rock", "paper", or "scissors". If r ← RANDOM(1, 3), which mapping is correct?',
        options: [
          'r=1: rock, r=2: rock, r=3: scissors',
          'r=1: rock, r=2: paper, r=3: scissors',
          'r=1: paper, r=2: paper, r=3: paper',
          'The mapping doesn\'t matter'
        ],
        correctAnswer: 1,
        explanation: 'Each value of r should map to one choice: r=1 for rock, r=2 for paper, r=3 for scissors gives equal probability to each option.'
      },
      {
        text: 'What is the probability of getting the same value twice when calling RANDOM(1, 6) two times?',
        options: [
          '1/36 (approximately 2.8%)',
          '1/6 (approximately 16.7%)',
          '1/3 (approximately 33.3%)',
          '1/2 (50%)'
        ],
        correctAnswer: 1,
        explanation: 'The first call can be any value. The second call has a 1/6 chance of matching it. So the probability of a match is 1/6.'
      },
      {
        text: 'Which application would NOT typically use random number generation?',
        options: [
          'A card game that shuffles a deck',
          'A calculator that adds two numbers',
          'A simulation of traffic patterns',
          'A password generator'
        ],
        correctAnswer: 1,
        explanation: 'A basic calculator performs deterministic operations and doesn\'t need randomness. The other applications rely on random selection.'
      },
      {
        text: 'To generate a random number between 100 and 200 inclusive, which expression is correct?',
        options: [
          'RANDOM(1, 100) + 100',
          'RANDOM(100, 200)',
          'RANDOM(1, 100) * 2',
          'RANDOM(0, 100)'
        ],
        correctAnswer: 1,
        explanation: 'RANDOM(100, 200) directly generates a random integer from 100 to 200 inclusive.'
      },
      {
        text: 'A program simulates flipping a biased coin that has a 70% chance of heads. Which implementation is correct?',
        options: [
          'IF (RANDOM(1, 10) ≤ 7) then heads',
          'IF (RANDOM(1, 2) = 1) then heads',
          'IF (RANDOM(1, 100) = 70) then heads',
          'IF (RANDOM(0, 1) = 0.7) then heads'
        ],
        correctAnswer: 0,
        explanation: 'RANDOM(1, 10) ≤ 7 is true for values 1-7, which is 7 out of 10 outcomes, or 70%.'
      },
      {
        text: 'What is the purpose of using random values in software testing?',
        options: [
          'To make tests always pass',
          'To test the program with a variety of inputs that might not be anticipated',
          'To skip testing certain features',
          'To make testing faster'
        ],
        correctAnswer: 1,
        explanation: 'Random testing (fuzz testing) helps discover bugs by testing with varied, unexpected inputs that developers might not think to test manually.'
      },
      {
        text: 'If a list has 8 elements and uses 1-based indexing, which expression correctly selects a random element?',
        options: [
          'list[RANDOM(0, 7)]',
          'list[RANDOM(1, 8)]',
          'list[RANDOM(0, 8)]',
          'list[RANDOM(1, 7)]'
        ],
        correctAnswer: 1,
        explanation: 'With 1-based indexing, valid indices are 1 through 8. RANDOM(1, 8) generates these indices correctly.'
      },
      {
        text: 'Two different computers run the same program with RANDOM(1, 100). Will they get the same sequence of random numbers?',
        options: [
          'Yes, always',
          'Only if they use the same seed value',
          'Never, because each computer is different',
          'Only if they run at the same time'
        ],
        correctAnswer: 1,
        explanation: 'Pseudorandom number generators produce the same sequence when given the same seed. Without identical seeds, sequences will differ.'
      }
    ]
  },
  {
    id: '3-16',
    name: '3.16 Simulations',
    description: 'Creating and using computer simulations',
    bigIdeaId: 'big-idea-3',
    order: 16,
    questions: [
      {
        text: 'What is a computer simulation?',
        options: [
          'A game played on a computer',
          'A model that represents a real-world process or system',
          'A type of programming language',
          'A method for storing data'
        ],
        correctAnswer: 1,
        explanation: 'A simulation is a computer model that represents a real-world process, system, or phenomenon, allowing study and experimentation without the real thing.'
      },
      {
        text: 'Why might scientists use a computer simulation instead of conducting a real experiment?',
        options: [
          'Simulations are always more accurate than real experiments',
          'Real experiments may be too dangerous, expensive, time-consuming, or impossible',
          'Scientists are not allowed to do real experiments',
          'Computers are required for all scientific research'
        ],
        correctAnswer: 1,
        explanation: 'Simulations allow study of phenomena that would be impractical in reality due to danger (nuclear reactions), cost (space missions), time (evolution), or impossibility (studying the past).'
      },
      {
        text: 'What is an abstraction in the context of simulations?',
        options: [
          'Including every possible detail from reality',
          'Simplifying reality by including only relevant features while omitting unnecessary details',
          'Making the simulation more complicated',
          'Adding random errors to the simulation'
        ],
        correctAnswer: 1,
        explanation: 'Abstraction in simulations means simplifying reality by including only the features relevant to what is being studied, while leaving out unnecessary complexity.'
      },
      {
        text: 'A weather simulation predicts tomorrow\'s temperature within 2 degrees. What does this illustrate?',
        options: [
          'Simulations are always perfectly accurate',
          'Simulations cannot predict anything',
          'Simulations provide approximations that may have some margin of error',
          'Weather cannot be simulated'
        ],
        correctAnswer: 2,
        explanation: 'Simulations are models that approximate reality. They may have margins of error due to simplifications and limitations in modeling complex systems.'
      },
      {
        text: 'Which of the following is a limitation of computer simulations?',
        options: [
          'They run too quickly',
          'They may not account for all real-world variables or may have inaccurate assumptions',
          'They use too little computer memory',
          'They are too easy to create'
        ],
        correctAnswer: 1,
        explanation: 'Simulations are limited by their models and assumptions. They cannot include all real-world variables and may be based on incomplete or inaccurate understanding.'
      },
      {
        text: 'A traffic simulation is used to test new road designs. What advantage does this provide?',
        options: [
          'The simulation is the actual road',
          'Engineers can test designs without building them first, saving time and money',
          'Simulations guarantee the road will work perfectly',
          'Traffic simulations don\'t require any data'
        ],
        correctAnswer: 1,
        explanation: 'Simulations allow testing designs before implementation, identifying potential problems without the cost and risk of building actual roads.'
      },
      {
        text: 'What role does random number generation play in many simulations?',
        options: [
          'It makes simulations completely predictable',
          'It introduces variability to model uncertainty and probabilistic events',
          'It reduces the accuracy of simulations',
          'Random numbers are never used in simulations'
        ],
        correctAnswer: 1,
        explanation: 'Random numbers model uncertainty, natural variability, and probabilistic events in simulations, making them more realistic.'
      },
      {
        text: 'A flight simulator is used to train pilots. Which statement is true?',
        options: [
          'The simulator must include every atom in the aircraft',
          'The simulator abstracts the flying experience to include relevant controls and responses while omitting unnecessary details',
          'Simulators cannot help train pilots',
          'Simulators are only for entertainment'
        ],
        correctAnswer: 1,
        explanation: 'Flight simulators abstract flying by including controls, instruments, visual feedback, and physics while omitting irrelevant details like individual aircraft components.'
      },
      {
        text: 'Running a simulation multiple times with the same inputs might produce different results. Why?',
        options: [
          'The computer is broken',
          'The simulation includes random elements that vary between runs',
          'Simulations should always produce identical results',
          'The simulation is poorly designed'
        ],
        correctAnswer: 1,
        explanation: 'Simulations often include random elements (Monte Carlo methods) to model variability. Different random values in each run lead to different outcomes.'
      },
      {
        text: 'An epidemiologist uses a simulation to model disease spread. What is being abstracted?',
        options: [
          'Nothing - every person is modeled individually with complete detail',
          'Population behavior, transmission rates, and contact patterns are simplified representations of reality',
          'The simulation models every virus particle',
          'Simulations cannot model disease spread'
        ],
        correctAnswer: 1,
        explanation: 'Disease simulations abstract complex human behavior and biological processes into simplified models with parameters like transmission rates and contact patterns.'
      },
      {
        text: 'Which factor does NOT typically affect the accuracy of a simulation?',
        options: [
          'Quality of the underlying mathematical model',
          'Accuracy of input data',
          'The color of the computer running the simulation',
          'The assumptions built into the simulation'
        ],
        correctAnswer: 2,
        explanation: 'The color of the computer has no effect on simulation accuracy. Model quality, data accuracy, and assumptions are key factors.'
      },
      {
        text: 'A simulation of planetary orbits uses Newton\'s laws of gravity. If a new physical law is discovered that affects orbits, what happens?',
        options: [
          'The simulation automatically updates itself',
          'The simulation must be modified to incorporate the new understanding',
          'Simulations cannot model planetary orbits',
          'The new law would have no effect on the simulation'
        ],
        correctAnswer: 1,
        explanation: 'Simulations are based on current understanding. New discoveries require updating the simulation\'s model to maintain accuracy.'
      },
      {
        text: 'What is a "Monte Carlo simulation"?',
        options: [
          'A simulation run in Monaco',
          'A simulation that uses random sampling to model probabilistic systems',
          'A simulation that always produces the same result',
          'A simulation of casino games only'
        ],
        correctAnswer: 1,
        explanation: 'Monte Carlo simulations use random sampling and probability to model complex systems, running many iterations to understand the range of possible outcomes.'
      },
      {
        text: 'A company simulates customer behavior in a store. Which is an appropriate level of abstraction?',
        options: [
          'Model the neural activity in each customer\'s brain',
          'Model customer movement patterns, purchasing decisions, and time spent in areas',
          'Include no details about customers at all',
          'Model the molecular structure of each product'
        ],
        correctAnswer: 1,
        explanation: 'An appropriate abstraction includes relevant behaviors (movement, purchases, time) without unnecessary biological or physical details.'
      },
      {
        text: 'Simulations are often used in "what-if" analysis. What does this mean?',
        options: [
          'Testing how the system responds to different scenarios or changes',
          'Asking questions without using a computer',
          'Guessing results without running the simulation',
          'Only simulating events that have already happened'
        ],
        correctAnswer: 0,
        explanation: '"What-if" analysis uses simulations to explore how systems respond to different scenarios, inputs, or changes, helping with planning and decision-making.'
      },
      {
        text: 'A climate simulation predicts temperatures 100 years in the future. Why might this prediction be uncertain?',
        options: [
          'Computers cannot do calculations that far ahead',
          'Small errors and uncertainties compound over time, and future events are inherently unpredictable',
          'Climate cannot be simulated',
          'The simulation runs too fast'
        ],
        correctAnswer: 1,
        explanation: 'Long-term predictions have uncertainty because small modeling errors accumulate, and future human actions and natural events cannot be perfectly predicted.'
      },
      {
        text: 'Which of the following would be HARDEST to simulate accurately?',
        options: [
          'The trajectory of a thrown ball',
          'Human creativity and decision-making in novel situations',
          'The orbit of the moon',
          'Water flowing through a pipe'
        ],
        correctAnswer: 1,
        explanation: 'Human creativity involves complex cognitive processes that are not well understood and are extremely difficult to model, unlike physical systems with known equations.'
      },
      {
        text: 'A city uses a simulation to plan new public transit. What should officials understand about the results?',
        options: [
          'The simulation results are guaranteed to match reality exactly',
          'Results are estimates based on models and assumptions that may differ from reality',
          'Simulations are useless for planning',
          'No real data is needed to run the simulation'
        ],
        correctAnswer: 1,
        explanation: 'Officials should understand that simulation results are estimates based on models and assumptions, useful for planning but not guaranteed to match reality.'
      },
      {
        text: 'What is the purpose of validating a simulation?',
        options: [
          'To make the simulation run faster',
          'To check that the simulation accurately represents the real-world system it models',
          'To add more random numbers',
          'To delete the simulation\'s code'
        ],
        correctAnswer: 1,
        explanation: 'Validation compares simulation results with real-world data to verify that the simulation accurately represents the system being modeled.'
      },
      {
        text: 'A physics simulation models objects falling under gravity. If air resistance is ignored, what does this demonstrate?',
        options: [
          'A programming error',
          'An intentional simplification (abstraction) that makes the simulation less complex but also less realistic in some conditions',
          'Air resistance doesn\'t exist',
          'The simulation is completely useless'
        ],
        correctAnswer: 1,
        explanation: 'Ignoring air resistance is a deliberate simplification. The simulation is still useful for many purposes but less accurate when air resistance matters.'
      },
      {
        text: 'Why might a simulation be run thousands of times?',
        options: [
          'Because the first run always fails',
          'To understand the range of possible outcomes and their probabilities',
          'To waste computing resources',
          'Simulations must always be run exactly 1000 times'
        ],
        correctAnswer: 1,
        explanation: 'Multiple runs with different random values reveal the distribution of possible outcomes, helping understand the range and likelihood of different results.'
      },
      {
        text: 'Which statement about simulations and real experiments is most accurate?',
        options: [
          'Simulations should always replace real experiments',
          'Real experiments should always replace simulations',
          'Simulations and real experiments can complement each other, each having different strengths',
          'Simulations and real experiments give identical information'
        ],
        correctAnswer: 2,
        explanation: 'Simulations and experiments complement each other. Experiments provide real data for validation; simulations allow exploration of scenarios difficult to test in reality.'
      },
      {
        text: 'A student creates a simulation of bouncing balls. The balls pass through walls sometimes. What might be wrong?',
        options: [
          'Balls cannot be simulated',
          'The collision detection algorithm may have flaws or the time step may be too large',
          'Computers cannot handle physics',
          'Nothing - this is expected behavior'
        ],
        correctAnswer: 1,
        explanation: 'Balls passing through walls indicates problems with the collision detection algorithm or the simulation using time steps too large to catch fast-moving objects.'
      },
      {
        text: 'What is a key benefit of using simulations in education?',
        options: [
          'Students can experiment with dangerous or inaccessible systems safely',
          'Simulations replace the need for any real learning',
          'Students don\'t need to understand the underlying concepts',
          'Simulations are too complex for education'
        ],
        correctAnswer: 0,
        explanation: 'Educational simulations allow students to safely experiment with systems like chemical reactions, physics, or historical events that would otherwise be dangerous or impossible to access.'
      },
      {
        text: 'A financial simulation predicts stock prices. What should investors understand?',
        options: [
          'The predictions are guaranteed to be correct',
          'Simulations are based on historical data and assumptions that may not apply to future conditions',
          'Financial markets cannot be simulated at all',
          'Simulations always overestimate stock prices'
        ],
        correctAnswer: 1,
        explanation: 'Financial simulations use historical patterns and assumptions. Future markets may behave differently, so predictions have inherent uncertainty.'
      }
    ]
  },
  {
    id: '3-17',
    name: '3.17 Algorithmic Efficiency',
    description: 'Evaluating the efficiency of algorithms',
    bigIdeaId: 'big-idea-3',
    order: 17,
    questions: [
      {
        text: 'What does "algorithmic efficiency" measure?',
        options: [
          'How colorful the code looks',
          'The amount of resources (time and/or space) an algorithm uses relative to input size',
          'How many programmers worked on the algorithm',
          'The cost of the computer running the algorithm'
        ],
        correctAnswer: 1,
        explanation: 'Algorithmic efficiency measures how algorithm resource usage (time, memory) scales with input size, helping compare different approaches.'
      },
      {
        text: 'An algorithm takes 100 steps to process 10 items and 10,000 steps to process 100 items. What type of growth does this represent?',
        options: [
          'Linear (constant increase)',
          'Quadratic (polynomial increase)',
          'Logarithmic (very slow increase)',
          'Constant (no increase)'
        ],
        correctAnswer: 1,
        explanation: 'When input increases 10x (10→100) and steps increase 100x (100→10000), this suggests quadratic (n²) growth.'
      },
      {
        text: 'Which algorithm is more efficient for large inputs: one that takes n steps or one that takes n² steps?',
        options: [
          'The n² algorithm is always more efficient',
          'The n algorithm is more efficient for large inputs',
          'Both are equally efficient',
          'Efficiency cannot be compared'
        ],
        correctAnswer: 1,
        explanation: 'For large n, n² grows much faster than n. An algorithm taking n steps is significantly more efficient than one taking n² steps.'
      },
      {
        text: 'What is "reasonable time" in the context of algorithm analysis?',
        options: [
          'Any algorithm that finishes in under 1 second',
          'An algorithm whose running time grows polynomially (like n, n², n³) with input size',
          'An algorithm that never finishes',
          'The time it takes to write the algorithm'
        ],
        correctAnswer: 1,
        explanation: 'In CS, "reasonable time" means polynomial time complexity. These algorithms are generally tractable, unlike exponential time algorithms.'
      },
      {
        text: 'An algorithm\'s time doubles when input size doubles. What is its time complexity?',
        options: [
          'Constant',
          'Linear',
          'Quadratic',
          'Exponential'
        ],
        correctAnswer: 1,
        explanation: 'When time doubles as input doubles, this is linear growth. The time is directly proportional to input size.'
      },
      {
        text: 'Which statement about binary search and linear search is correct?',
        options: [
          'Linear search is always faster',
          'Binary search is more efficient for large sorted lists',
          'Both have the same efficiency',
          'Neither can search through lists'
        ],
        correctAnswer: 1,
        explanation: 'Binary search has O(log n) efficiency versus O(n) for linear search. For large sorted lists, binary search is significantly faster.'
      },
      {
        text: 'An algorithm examines every pair of items in a list. If the list has n items, how many comparisons are made?',
        options: [
          'n comparisons',
          'Approximately n²/2 comparisons',
          'log n comparisons',
          '2n comparisons'
        ],
        correctAnswer: 1,
        explanation: 'Examining every pair of n items requires n(n-1)/2 comparisons, which is approximately n²/2 and grows quadratically.'
      },
      {
        text: 'What does it mean if an algorithm has "exponential" time complexity?',
        options: [
          'It runs very quickly',
          'Running time doubles (or more) with each additional input item, making it impractical for large inputs',
          'It uses very little memory',
          'It can solve any problem'
        ],
        correctAnswer: 1,
        explanation: 'Exponential algorithms (like 2ⁿ) become impractical quickly because running time grows extremely fast with input size.'
      },
      {
        text: 'A sorting algorithm takes 1 second for 1000 items and 4 seconds for 2000 items. What is its likely complexity?',
        options: [
          'Linear (n)',
          'Quadratic (n²)',
          'Logarithmic (log n)',
          'Constant'
        ],
        correctAnswer: 1,
        explanation: 'Input doubled (2x) but time quadrupled (4x). This suggests quadratic complexity: when n doubles, n² quadruples.'
      },
      {
        text: 'Why is algorithm efficiency important?',
        options: [
          'It only matters for academic research',
          'Efficient algorithms can handle larger problems and complete tasks faster, especially as data grows',
          'All algorithms are equally efficient',
          'Efficiency is only about code appearance'
        ],
        correctAnswer: 1,
        explanation: 'Algorithm efficiency determines whether problems can be solved practically, especially as data sizes increase in real-world applications.'
      },
      {
        text: 'Which complexity grows SLOWEST as input size increases?',
        options: [
          'n²',
          'n',
          'log n',
          '2ⁿ'
        ],
        correctAnswer: 2,
        explanation: 'Logarithmic (log n) grows slowest. For example, log₂(1000) ≈ 10, while n=1000, n²=1,000,000, and 2¹⁰⁰⁰ is astronomically large.'
      },
      {
        text: 'An algorithm processes a list by looking at each element once. What is its time complexity?',
        options: [
          'Constant',
          'Linear',
          'Quadratic',
          'Exponential'
        ],
        correctAnswer: 1,
        explanation: 'Looking at each element once means the algorithm does n operations for n elements - linear time complexity.'
      },
      {
        text: 'A problem has no known algorithm that runs in polynomial time. What is this called?',
        options: [
          'An easy problem',
          'An intractable or hard problem',
          'An unsolvable problem',
          'A linear problem'
        ],
        correctAnswer: 1,
        explanation: 'Problems with no known polynomial-time solution are called intractable or computationally hard (like many NP-hard problems).'
      },
      {
        text: 'If a linear search checks 1 million items in 1 second, approximately how long would checking 10 million items take?',
        options: [
          '1 second',
          '10 seconds',
          '100 seconds',
          '1 million seconds'
        ],
        correctAnswer: 1,
        explanation: 'Linear search has linear complexity. If input is 10x larger, time is 10x longer: 1 second × 10 = 10 seconds.'
      },
      {
        text: 'What is space complexity?',
        options: [
          'How much physical space the computer takes',
          'How much memory an algorithm uses relative to input size',
          'The number of spaces in the code',
          'How far data travels through wires'
        ],
        correctAnswer: 1,
        explanation: 'Space complexity measures how memory usage grows with input size, just as time complexity measures how execution time grows.'
      },
      {
        text: 'An algorithm takes the same amount of time regardless of input size. What is its complexity?',
        options: [
          'Linear',
          'Quadratic',
          'Constant',
          'Logarithmic'
        ],
        correctAnswer: 2,
        explanation: 'Constant complexity (O(1)) means the algorithm takes the same time regardless of input size.'
      },
      {
        text: 'Which operation on a list typically has linear time complexity?',
        options: [
          'Accessing an element by index',
          'Finding the maximum value',
          'Getting the length of the list',
          'Adding to the end of the list (in most implementations)'
        ],
        correctAnswer: 1,
        explanation: 'Finding the maximum requires examining every element, which takes n steps for n elements - linear complexity.'
      },
      {
        text: 'A nested loop where the outer loop runs n times and the inner loop also runs n times has what complexity?',
        options: [
          'n',
          'n + n = 2n',
          'n × n = n²',
          'log n'
        ],
        correctAnswer: 2,
        explanation: 'Nested loops multiply: n iterations times n iterations equals n² total operations - quadratic complexity.'
      },
      {
        text: 'Why might an algorithm with worse theoretical complexity sometimes run faster for small inputs?',
        options: [
          'This is impossible',
          'Constant factors and setup costs may dominate for small inputs, making a "worse" algorithm faster',
          'Small inputs are not processed by algorithms',
          'Complexity analysis is always wrong'
        ],
        correctAnswer: 1,
        explanation: 'For small inputs, constant factors and overhead can matter more than asymptotic complexity. A "slower" O(n log n) algorithm might outperform a "faster" O(n) algorithm with high constants on small data.'
      },
      {
        text: 'The traveling salesman problem (finding shortest route visiting all cities) is known to be:',
        options: [
          'Solvable in linear time',
          'Solvable in logarithmic time',
          'An intractable problem with no known efficient algorithm for optimal solutions',
          'Trivial to solve'
        ],
        correctAnswer: 2,
        explanation: 'The traveling salesman problem is NP-hard. No polynomial-time algorithm is known for finding optimal solutions, making it intractable for large inputs.'
      },
      {
        text: 'Which represents the FASTEST growing complexity?',
        options: [
          'n³',
          'n!',
          'n²',
          '2ⁿ'
        ],
        correctAnswer: 1,
        explanation: 'Factorial (n!) grows fastest: 10! = 3,628,800 while 2¹⁰ = 1,024 and 10³ = 1,000. Factorial growth is even faster than exponential.'
      },
      {
        text: 'If doubling the input size makes an algorithm take 8 times longer, what is its likely complexity?',
        options: [
          'Linear (n)',
          'Quadratic (n²)',
          'Cubic (n³)',
          'Logarithmic (log n)'
        ],
        correctAnswer: 2,
        explanation: 'When input doubles and time increases 8-fold (2³), the complexity is cubic (n³). Doubling n means n³ becomes (2n)³ = 8n³.'
      },
      {
        text: 'A heuristic algorithm:',
        options: [
          'Always finds the optimal solution',
          'Finds a good (but not necessarily optimal) solution more quickly than an exact algorithm',
          'Is always slower than exact algorithms',
          'Cannot solve any problems'
        ],
        correctAnswer: 1,
        explanation: 'Heuristic algorithms trade optimality for speed, finding good solutions quickly when exact optimal solutions would take too long to compute.'
      },
      {
        text: 'Comparing two algorithms with complexities n² and n log n for processing 1 million items:',
        options: [
          'n² is significantly more efficient',
          'n log n is significantly more efficient',
          'They are equally efficient',
          'Neither can process 1 million items'
        ],
        correctAnswer: 1,
        explanation: 'For n = 1,000,000: n² = 10¹² operations, while n log n ≈ 20 million operations. The n log n algorithm is vastly more efficient.'
      },
      {
        text: 'What is the primary purpose of Big O notation?',
        options: [
          'To measure exact running time in seconds',
          'To classify algorithms by how their resource needs grow with input size',
          'To count the number of lines of code',
          'To measure the cost of computers'
        ],
        correctAnswer: 1,
        explanation: 'Big O notation classifies algorithms by their growth rate, describing how time or space requirements scale with input size, ignoring constant factors.'
      }
    ]
  },
  {
    id: '3-18',
    name: '3.18 Undecidable Problems',
    description: 'Understanding problems that cannot be solved by any algorithm',
    bigIdeaId: 'big-idea-3',
    order: 18,
    questions: [
      {
        text: 'What is an undecidable problem?',
        options: [
          'A problem that is difficult but eventually solvable',
          'A problem for which no algorithm can be written that will always produce a correct yes/no answer',
          'A problem that computers refuse to solve',
          'A problem with multiple correct answers'
        ],
        correctAnswer: 1,
        explanation: 'An undecidable problem cannot be solved by any algorithm for all possible inputs. No program can always determine the correct answer.'
      },
      {
        text: 'The Halting Problem asks whether a given program will:',
        options: [
          'Run faster than expected',
          'Eventually stop (halt) or run forever for a given input',
          'Produce the correct output',
          'Use too much memory'
        ],
        correctAnswer: 1,
        explanation: 'The Halting Problem asks: given a program and input, will the program eventually halt or run forever? This was proven undecidable by Alan Turing.'
      },
      {
        text: 'Why is the Halting Problem important in computer science?',
        options: [
          'It shows that computers can solve every problem',
          'It proves that there are limits to what can be computed',
          'It is only of historical interest',
          'It shows that all programs eventually halt'
        ],
        correctAnswer: 1,
        explanation: 'The Halting Problem demonstrates fundamental limits of computation - there are problems that no algorithm can solve for all cases.'
      },
      {
        text: 'Which statement about undecidable problems is TRUE?',
        options: [
          'With a fast enough computer, all undecidable problems can be solved',
          'Undecidable problems cannot be solved algorithmically for all possible inputs',
          'Undecidable problems don\'t exist',
          'Only quantum computers can solve undecidable problems'
        ],
        correctAnswer: 1,
        explanation: 'Undecidability is a mathematical property, not a limitation of speed or technology. No computer, no matter how powerful, can solve undecidable problems for all inputs.'
      },
      {
        text: 'If someone claims to have written a program that solves the Halting Problem for all inputs, what do we know?',
        options: [
          'They have made a breakthrough in computer science',
          'Their claim must be incorrect - it has been mathematically proven impossible',
          'They are using a quantum computer',
          'Their program is just slow'
        ],
        correctAnswer: 1,
        explanation: 'Turing proved mathematically that no such program can exist. Any claim to have solved the Halting Problem for all inputs must be incorrect.'
      },
      {
        text: 'For a specific, simple program like "print hello and stop", can we determine if it halts?',
        options: [
          'No, we can never determine if any program halts',
          'Yes, for many specific programs we can determine if they halt',
          'Only by running the program forever',
          'Determining halting is always impossible'
        ],
        correctAnswer: 1,
        explanation: 'We can analyze many specific programs and determine if they halt. The undecidability means no single algorithm works for ALL possible programs.'
      },
      {
        text: 'What is the difference between an unsolvable instance and an undecidable problem?',
        options: [
          'They are the same thing',
          'An undecidable problem has no algorithm that works for all instances; individual instances might still be solvable',
          'An unsolvable instance is harder than an undecidable problem',
          'There is no difference'
        ],
        correctAnswer: 1,
        explanation: 'An undecidable problem lacks a general algorithm for all cases. However, specific instances of the problem might be solvable.'
      },
      {
        text: 'A program that checks if another program contains an infinite loop is:',
        options: [
          'Easy to write',
          'Equivalent to solving the Halting Problem and therefore impossible for all programs',
          'Already built into all programming languages',
          'Only useful for web development'
        ],
        correctAnswer: 1,
        explanation: 'Detecting infinite loops in all programs is equivalent to the Halting Problem, which is undecidable. No algorithm can detect all infinite loops.'
      },
      {
        text: 'Which of the following is a decidable problem?',
        options: [
          'Determining if an arbitrary program halts on all inputs',
          'Determining if a number is prime',
          'Determining if two arbitrary programs produce the same output for all inputs',
          'Determining if an arbitrary program will ever produce any output'
        ],
        correctAnswer: 1,
        explanation: 'Primality testing is decidable - there are algorithms that correctly determine if any number is prime. The other options involve general program behavior analysis, which is undecidable.'
      },
      {
        text: 'What proves that the Halting Problem is undecidable?',
        options: [
          'Computers are too slow',
          'A logical contradiction arises when assuming a halting-detection program exists',
          'Nobody has tried hard enough',
          'Hardware limitations'
        ],
        correctAnswer: 1,
        explanation: 'Turing\'s proof shows that assuming a halting-detection program exists leads to a logical contradiction (a program that halts if and only if it doesn\'t halt).'
      },
      {
        text: 'An algorithm that might run forever on some inputs is called:',
        options: [
          'A decision algorithm',
          'A semi-algorithm or partial algorithm',
          'An optimal algorithm',
          'A quantum algorithm'
        ],
        correctAnswer: 1,
        explanation: 'A semi-algorithm or partial algorithm may not terminate for all inputs, unlike a decision algorithm which must always halt and give an answer.'
      },
      {
        text: 'If problem A can be reduced to problem B (A is at least as hard as B), and B is undecidable, what do we know about A?',
        options: [
          'A is definitely decidable',
          'A is also undecidable',
          'A might be easier than B',
          'Nothing can be determined'
        ],
        correctAnswer: 1,
        explanation: 'If we can transform any instance of undecidable problem B into problem A, then A must also be undecidable. If A were decidable, we could use it to solve B.'
      },
      {
        text: 'What is the significance of undecidable problems for software verification?',
        options: [
          'All software can be perfectly verified',
          'Complete automatic verification of all software properties is impossible',
          'Undecidable problems don\'t affect software',
          'Verification is simple'
        ],
        correctAnswer: 1,
        explanation: 'Undecidability means we cannot build tools that automatically verify all properties of all programs. Some verification tasks are inherently limited.'
      },
      {
        text: 'Consider this program: "while (true) { }". Does it halt?',
        options: [
          'Yes, immediately',
          'No, it runs forever',
          'It\'s impossible to tell',
          'It depends on the computer'
        ],
        correctAnswer: 1,
        explanation: 'This specific program has an obvious infinite loop and clearly never halts. The Halting Problem being undecidable doesn\'t mean we can\'t analyze simple cases.'
      },
      {
        text: 'Why can\'t we simply run a program to see if it halts?',
        options: [
          'Running programs is not allowed',
          'If it doesn\'t halt quickly, we can\'t distinguish between "will halt eventually" and "runs forever"',
          'Programs cannot be run',
          'This method always works perfectly'
        ],
        correctAnswer: 1,
        explanation: 'Running a program doesn\'t tell us if it will halt - it might halt after 1 year or run forever. We can\'t know by just waiting.'
      },
      {
        text: 'A "computable" or "decidable" problem is one that:',
        options: [
          'Is very difficult to solve',
          'Has an algorithm that always halts with a correct answer for all inputs',
          'Cannot be solved by computers',
          'Requires infinite time'
        ],
        correctAnswer: 1,
        explanation: 'A decidable/computable problem has an algorithm that terminates with a correct yes/no answer for every possible input.'
      },
      {
        text: 'The discovery of undecidable problems showed that:',
        options: [
          'Mathematics has no limits',
          'There are inherent theoretical limits to what computation can achieve',
          'All problems can be solved with enough time',
          'Computer science is not a real science'
        ],
        correctAnswer: 1,
        explanation: 'Undecidability reveals fundamental theoretical limits on computation that no amount of technological advancement can overcome.'
      },
      {
        text: 'Can undecidable problems have practical implications?',
        options: [
          'No, they are purely theoretical',
          'Yes, they affect what we can automate, verify, and prove about software',
          'They only matter for mathematicians',
          'They have been solved by modern computers'
        ],
        correctAnswer: 1,
        explanation: 'Undecidability has practical implications for software verification, compiler optimization, security analysis, and many other computing tasks.'
      },
      {
        text: 'Rice\'s theorem states that:',
        options: [
          'All programs can be analyzed',
          'Any non-trivial property about the behavior of programs is undecidable',
          'Rice invented the computer',
          'Programs should use more rice'
        ],
        correctAnswer: 1,
        explanation: 'Rice\'s theorem proves that any non-trivial question about what a program computes (not just whether it halts) is undecidable.'
      },
      {
        text: 'If we can\'t solve the Halting Problem, how do programmers deal with infinite loops?',
        options: [
          'They ignore the problem',
          'They use timeouts, testing, code review, and careful design, though these aren\'t perfect',
          'They use special computers',
          'Infinite loops don\'t exist in practice'
        ],
        correctAnswer: 1,
        explanation: 'Practical approaches include timeouts, testing, code reviews, and design patterns. These help but can\'t guarantee catching all infinite loops.'
      },
      {
        text: 'The concept of undecidability applies to:',
        options: [
          'Only the Halting Problem',
          'Many different computational problems across various domains',
          'Only theoretical computer science',
          'Only very old computers'
        ],
        correctAnswer: 1,
        explanation: 'Undecidability applies to many problems: virus detection, equivalence of programs, database query optimization, and more.'
      },
      {
        text: 'Virus detection being related to the Halting Problem means:',
        options: [
          'All viruses can be detected',
          'No antivirus can guarantee detection of all possible viruses',
          'Viruses don\'t exist',
          'Computers are immune to viruses'
        ],
        correctAnswer: 1,
        explanation: 'Since detecting all malicious behavior reduces to the Halting Problem, no antivirus can guarantee detecting every possible virus.'
      },
      {
        text: 'What happens when a problem is "reduced" to the Halting Problem?',
        options: [
          'The problem becomes easier',
          'Solving the problem would require solving the Halting Problem, proving the original problem is also undecidable',
          'The problem is automatically solved',
          'The problem disappears'
        ],
        correctAnswer: 1,
        explanation: 'Reducing a problem to the Halting Problem shows that solving it would require solving the Halting Problem, proving the original problem is undecidable.'
      },
      {
        text: 'Gödel\'s incompleteness theorems and the Halting Problem both demonstrate:',
        options: [
          'That all mathematical questions can be answered',
          'Fundamental limitations in formal systems and computation',
          'That mathematics is useless',
          'That computers are omnipotent'
        ],
        correctAnswer: 1,
        explanation: 'Both reveal fundamental limitations - Gödel showed limits of formal mathematical systems, Turing showed limits of computation. These results are deeply connected.'
      },
      {
        text: 'A program analyzer that claims to detect ALL bugs in ANY program:',
        options: [
          'Is a standard tool used by all programmers',
          'Cannot exist due to the undecidability of general program properties',
          'Already exists and works perfectly',
          'Is easy to create'
        ],
        correctAnswer: 1,
        explanation: 'Due to Rice\'s theorem and the Halting Problem, no tool can detect all bugs in all possible programs. Such a tool is theoretically impossible.'
      }
    ]
  }
];

async function seedTopics() {
  console.log('Starting to seed Big Idea 3 Part 4 topics and questions...');

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

  console.log('\n✅ Big Idea 3 Part 4 seeding completed!');
  console.log('Topics created: 3.14-3.18');
  console.log('Total questions: 125');
}

seedTopics()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error seeding topics:', error);
    process.exit(1);
  });
