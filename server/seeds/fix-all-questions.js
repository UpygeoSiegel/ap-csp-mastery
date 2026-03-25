/**
 * Fix all questions - converts to correct format and stores in topic document
 * Run with: node server/seeds/fix-all-questions.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

if (process.env.FIREBASE_PROJECT_ID !== 'ap-csp-mastery') {
  console.error(`ERROR: Wrong project!`);
  process.exit(1);
}

// Helper to convert simple format to app format
function convertQuestions(questions, topicId) {
  const letters = ['a', 'b', 'c', 'd'];
  return questions.map((q, index) => ({
    id: `${topicId}-q${index + 1}`,
    text: q.text,
    type: 'multiple_choice',
    options: q.options.map((opt, i) => ({ id: letters[i], text: opt })),
    correctAnswers: [letters[q.correctAnswer]],
    explanation: q.explanation,
    isCustom: false,
    addedBy: null,
    addedAt: new Date(),
    deactivated: false
  }));
}

// Topic 3.14 Libraries
const topic314 = {
  id: 'aap-3-14',
  name: '3.14 Libraries',
  description: 'Understanding and using software libraries and APIs',
  bigIdeaId: 'big-idea-3',
  order: 14,
  questions: [
    { text: 'What is a software library?', options: ['A collection of prewritten code that can be reused in programs', 'A physical location where programmers work', 'A type of programming language', 'A database for storing user information'], correctAnswer: 0, explanation: 'A software library is a collection of prewritten code that programmers can use.' },
    { text: 'Which of the following is a benefit of using libraries in programming?', options: ['Programs will always run faster', 'Programmers can use tested, reliable code without writing it from scratch', 'Libraries eliminate all bugs from programs', 'Libraries are required for all programs to run'], correctAnswer: 1, explanation: 'Libraries allow programmers to use code that has already been written and tested.' },
    { text: 'What is an API (Application Programming Interface)?', options: ['A programming language for web development', 'A set of rules and protocols that allow different software applications to communicate', 'A type of computer hardware', 'A debugging tool for finding errors'], correctAnswer: 1, explanation: 'An API defines how different software components should interact.' },
    { text: 'A programmer wants to add mathematical functions like square root. What should they do?', options: ['Write all the mathematical functions from scratch', 'Import a math library that provides these functions', 'Avoid using mathematical operations', 'Use only addition and subtraction'], correctAnswer: 1, explanation: 'Importing a math library provides access to tested, optimized mathematical functions.' },
    { text: 'Which statement about libraries is FALSE?', options: ['Libraries can be created by individual programmers', 'Libraries can be shared and used by many different programs', 'All libraries are free and open source', 'Libraries help reduce code duplication'], correctAnswer: 2, explanation: 'Not all libraries are free and open source. Many require licenses.' },
    { text: 'What does it mean to "import" a library in a program?', options: ['To copy library files to a USB drive', 'To make the library\'s functionality available for use in the current program', 'To translate the library into another language', 'To delete the library from the computer'], correctAnswer: 1, explanation: 'Importing a library makes its functions available for use in the current program.' },
    { text: 'A developer needs to create graphics for a game. Which approach is most efficient?', options: ['Write all graphics rendering code from scratch', 'Use a graphics library designed for game development', 'Avoid using any graphics in the game', 'Copy graphics code from random websites'], correctAnswer: 1, explanation: 'Using a graphics library provides optimized, tested code for rendering graphics.' },
    { text: 'What is documentation in the context of software libraries?', options: ['Legal paperwork for software ownership', 'Written explanations of how to use the library\'s features', 'The source code of the library', 'Error messages produced by the library'], correctAnswer: 1, explanation: 'Documentation provides explanations and examples for how to use a library.' },
    { text: 'Why might a programmer choose NOT to use a particular library?', options: ['The library provides functionality the program needs', 'The library\'s license is incompatible with the project\'s requirements', 'The library has good documentation', 'The library is well-maintained'], correctAnswer: 1, explanation: 'License incompatibility can prevent use of a library in commercial projects.' },
    { text: 'What is a "dependency" in software development?', options: ['A bug in the code', 'A library or component that a program requires to function', 'The speed of a program', 'A type of programming language'], correctAnswer: 1, explanation: 'A dependency is a library that a program relies on to function properly.' },
    { text: 'Which best describes how libraries promote collaboration?', options: ['Libraries prevent other programmers from seeing code', 'Libraries allow programmers to share solutions that others can use', 'Libraries make programs run slower', 'Libraries require all programmers to use the same computer'], correctAnswer: 1, explanation: 'Libraries enable collaboration by allowing programmers to share reusable solutions.' },
    { text: 'A web developer wants to add interactive charts. What is the best approach?', options: ['Draw all charts manually using basic shapes', 'Use a charting library that provides pre-built chart components', 'Avoid using any data visualization', 'Take screenshots of charts from other websites'], correctAnswer: 1, explanation: 'A charting library provides pre-built, customizable chart components.' },
    { text: 'What happens when a library is updated to a new version?', options: ['All programs using the library automatically stop working', 'Programs may need to be tested or updated to work with the new version', 'The old version is automatically deleted everywhere', 'Nothing changes for programs using the library'], correctAnswer: 1, explanation: 'Library updates may introduce changes that affect programs using the library.' },
    { text: 'Which is an example of using an API?', options: ['Writing a program that only uses basic arithmetic', 'A weather app requesting current weather data from a weather service', 'Typing a document in a word processor', 'Turning on a computer'], correctAnswer: 1, explanation: 'When a weather app requests data from a weather service, it uses the service\'s API.' },
    { text: 'What is "abstraction" in the context of libraries?', options: ['Making code more complicated', 'Hiding complex implementation details and providing a simpler interface', 'Removing all comments from code', 'Making programs run slower'], correctAnswer: 1, explanation: 'Libraries provide abstraction by hiding complex details and offering a simpler interface.' },
    { text: 'A programmer is getting unexpected results from a library function. What should they do first?', options: ['Delete the library immediately', 'Check the library\'s documentation to ensure correct usage', 'Rewrite the entire library', 'Ignore the problem'], correctAnswer: 1, explanation: 'Consulting documentation is the first step to verify correct usage of library functions.' },
    { text: 'What is a potential drawback of relying heavily on external libraries?', options: ['Code becomes more readable', 'Programs may break if libraries are discontinued or have incompatible updates', 'Development time decreases', 'Code reuse increases'], correctAnswer: 1, explanation: 'Heavy reliance on external libraries creates dependencies that can cause issues.' },
    { text: 'Which best describes the relationship between libraries and procedures?', options: ['Libraries and procedures are the same thing', 'Libraries typically contain multiple procedures and functions', 'Procedures cannot exist inside libraries', 'Libraries replace the need for procedures'], correctAnswer: 1, explanation: 'Libraries are collections that contain multiple related procedures and functions.' },
    { text: 'A student needs to add a map feature to a mobile app. What is the most practical approach?', options: ['Create their own satellite imaging system', 'Use a mapping API like Google Maps or OpenStreetMap', 'Draw maps by hand and scan them', 'Avoid including maps in the app'], correctAnswer: 1, explanation: 'Using an existing mapping API provides professional-quality maps without building from scratch.' },
    { text: 'What does it mean when a library is "open source"?', options: ['The library costs money to use', 'The library\'s source code is publicly available and can be viewed and modified', 'The library only works on certain computers', 'The library has no documentation'], correctAnswer: 1, explanation: 'Open source means the source code is publicly available for viewing and modification.' },
    { text: 'Why is it important to understand what functions a library provides before using it?', options: ['To make the program run slower', 'To ensure the library meets the program\'s needs and to use it correctly', 'Libraries should never be researched before use', 'To avoid writing any code'], correctAnswer: 1, explanation: 'Understanding a library\'s capabilities ensures it meets project requirements.' },
    { text: 'Which is NOT a common type of software library?', options: ['Math libraries for numerical calculations', 'Graphics libraries for visual rendering', 'Hardware libraries that physically modify computer components', 'Network libraries for internet communication'], correctAnswer: 2, explanation: 'Software libraries are code-based and cannot physically modify hardware.' },
    { text: 'How can libraries help ensure consistency across a team\'s codebase?', options: ['Libraries make code inconsistent', 'Using shared libraries ensures team members use the same tested functions', 'Libraries prevent teamwork', 'Libraries only work for individual programmers'], correctAnswer: 1, explanation: 'Shared libraries promote consistency by providing common functions for all team members.' },
    { text: 'What is the purpose of library versioning (e.g., version 1.0, 2.0)?', options: ['To make libraries more confusing', 'To track changes and allow developers to use specific compatible versions', 'Versioning serves no purpose', 'To make older versions unavailable'], correctAnswer: 1, explanation: 'Versioning tracks changes and allows developers to use compatible versions.' },
    { text: 'When a programmer "calls" a library function, what happens?', options: ['The programmer phones the library developer', 'The program executes the code in that function and may receive a return value', 'The library is deleted', 'A new library is created'], correctAnswer: 1, explanation: 'Calling a library function executes its code and may return a value.' }
  ]
};

// Topic 3.15 Random Values
const topic315 = {
  id: 'aap-3-15',
  name: '3.15 Random Values',
  description: 'Using random number generation in programs',
  bigIdeaId: 'big-idea-3',
  order: 15,
  questions: [
    { text: 'What does RANDOM(1, 6) return in AP CSP pseudocode?', options: ['Always returns 1', 'A random integer from 1 to 6, inclusive', 'Always returns 6', 'A random decimal between 1 and 6'], correctAnswer: 1, explanation: 'RANDOM(a, b) returns a random integer from a to b, inclusive.' },
    { text: 'Which correctly simulates a coin flip (heads = 1, tails = 0)?', options: ['RANDOM(1, 2)', 'RANDOM(0, 1)', 'RANDOM(0, 2)', 'RANDOM(1, 100)'], correctAnswer: 1, explanation: 'RANDOM(0, 1) returns either 0 or 1 with equal probability.' },
    { text: 'What is a pseudorandom number?', options: ['A number that is completely unpredictable', 'A number generated by an algorithm that appears random but is determined by a starting value', 'A number that is always the same', 'A number that only appears in pseudocode'], correctAnswer: 1, explanation: 'Pseudorandom numbers are generated by deterministic algorithms but appear random.' },
    { text: 'A game needs to randomly select a player from a list of 10 players (indexed 1 to 10). Which expression?', options: ['RANDOM(0, 9)', 'RANDOM(1, 10)', 'RANDOM(1, 100)', 'RANDOM(0, 10)'], correctAnswer: 1, explanation: 'RANDOM(1, 10) returns a value from 1 to 10 inclusive.' },
    { text: 'What is the range of possible values for RANDOM(5, 15)?', options: ['5 to 14', '6 to 15', '5 to 15', '0 to 15'], correctAnswer: 2, explanation: 'RANDOM(a, b) is inclusive of both endpoints.' },
    { text: 'Why might a programmer use random values?', options: ['To make the program run faster', 'To create unpredictability, such as in games or simulations', 'To eliminate all bugs', 'Random values should never be used'], correctAnswer: 1, explanation: 'Random values create unpredictability for games, simulations, and testing.' },
    { text: 'If RANDOM(1, 4) is called 1000 times, approximately how many times would you expect to get 2?', options: ['100 times', '250 times', '500 times', '1000 times'], correctAnswer: 1, explanation: 'Each of four outcomes has 1/4 probability, so expect about 250 occurrences.' },
    { text: 'What is a "seed" in random number generation?', options: ['A type of plant used in programming', 'The starting value that determines the sequence of random numbers', 'The final random number produced', 'A programming error'], correctAnswer: 1, explanation: 'A seed is the initial value used by a pseudorandom number generator.' },
    { text: 'Which code assigns a random even number between 2 and 10 (inclusive) to x?', options: ['x ← RANDOM(2, 10)', 'x ← RANDOM(1, 5) * 2', 'x ← RANDOM(0, 10)', 'x ← RANDOM(2, 10) / 2'], correctAnswer: 1, explanation: 'RANDOM(1, 5) returns 1-5. Multiplying by 2 gives 2, 4, 6, 8, or 10.' },
    { text: 'A simulation needs a 30% chance of rain. Which approach is correct?', options: ['IF (RANDOM(1, 100) ≤ 30) then rain', 'IF (RANDOM(1, 100) = 30) then rain', 'IF (RANDOM(1, 3) = 1) then rain', 'IF (RANDOM(0, 1) = 0.3) then rain'], correctAnswer: 0, explanation: 'RANDOM(1, 100) ≤ 30 is true for values 1-30, which is 30%.' },
    { text: 'What is the probability of RANDOM(1, 10) returning a value greater than 7?', options: ['30%', '70%', '50%', '10%'], correctAnswer: 0, explanation: 'Values 8, 9, 10 are greater than 7. That\'s 3 out of 10, or 30%.' },
    { text: 'RANDOM(1, 6) + RANDOM(1, 6) simulates rolling two dice. What is the range of sums?', options: ['1 to 6', '2 to 12', '1 to 12', '0 to 12'], correctAnswer: 1, explanation: 'Minimum sum is 1+1=2, maximum is 6+6=12.' },
    { text: 'Which statement about computer-generated random numbers is true?', options: ['They are truly random and completely unpredictable', 'They are typically pseudorandom, generated by algorithms', 'They can only generate even numbers', 'They always produce the same number'], correctAnswer: 1, explanation: 'Most computer random number generators are pseudorandom.' },
    { text: 'A quiz app selects 5 questions from 20. What must be ensured?', options: ['The same question can be selected multiple times', 'Once a question is selected, it should not be selected again', 'All 20 questions must always be used', 'Questions must be selected in order'], correctAnswer: 1, explanation: 'To select 5 different questions, avoid duplicates by tracking selections.' },
    { text: 'What would be the output of: result ← RANDOM(5, 5)?', options: ['An error because the values are the same', 'Always 5', 'A random value between 1 and 5', 'Always 0'], correctAnswer: 1, explanation: 'When both parameters are 5, RANDOM(5, 5) can only return 5.' },
    { text: 'A game awards: 50% chance of 10 points, 30% chance of 20 points, 20% chance of 50 points. Which approach?', options: ['Use RANDOM(10, 50)', 'Use RANDOM(1, 100) and check ranges: 1-50 gives 10 pts, 51-80 gives 20 pts, 81-100 gives 50 pts', 'Use RANDOM(1, 3)', 'Use RANDOM(10, 20)'], correctAnswer: 1, explanation: 'Using RANDOM(1, 100) with ranges allows precise probability control.' },
    { text: 'Why is uniform distribution important in random number generators?', options: ['It makes the program run faster', 'Each possible value has an equal chance of being selected, ensuring fairness', 'It reduces memory usage', 'It makes debugging easier'], correctAnswer: 1, explanation: 'Uniform distribution means each value has equal probability, essential for fairness.' },
    { text: 'A program selects "rock", "paper", or "scissors". If r ← RANDOM(1, 3), which mapping is correct?', options: ['r=1: rock, r=2: rock, r=3: scissors', 'r=1: rock, r=2: paper, r=3: scissors', 'r=1: paper, r=2: paper, r=3: paper', 'The mapping doesn\'t matter'], correctAnswer: 1, explanation: 'Each value maps to one choice for equal probability.' },
    { text: 'What is the probability of getting the same value twice when calling RANDOM(1, 6) two times?', options: ['1/36 (about 2.8%)', '1/6 (about 16.7%)', '1/3 (about 33.3%)', '1/2 (50%)'], correctAnswer: 1, explanation: 'The first call can be any value. The second has 1/6 chance of matching.' },
    { text: 'Which application would NOT typically use random number generation?', options: ['A card game that shuffles a deck', 'A calculator that adds two numbers', 'A simulation of traffic patterns', 'A password generator'], correctAnswer: 1, explanation: 'A basic calculator performs deterministic operations without randomness.' },
    { text: 'To generate a random number between 100 and 200 inclusive, which expression?', options: ['RANDOM(1, 100) + 100', 'RANDOM(100, 200)', 'RANDOM(1, 100) * 2', 'RANDOM(0, 100)'], correctAnswer: 1, explanation: 'RANDOM(100, 200) directly generates a random integer from 100 to 200.' },
    { text: 'A biased coin has a 70% chance of heads. Which implementation is correct?', options: ['IF (RANDOM(1, 10) ≤ 7) then heads', 'IF (RANDOM(1, 2) = 1) then heads', 'IF (RANDOM(1, 100) = 70) then heads', 'IF (RANDOM(0, 1) = 0.7) then heads'], correctAnswer: 0, explanation: 'RANDOM(1, 10) ≤ 7 is true for 7 out of 10 outcomes, or 70%.' },
    { text: 'What is the purpose of using random values in software testing?', options: ['To make tests always pass', 'To test with a variety of inputs that might not be anticipated', 'To skip testing certain features', 'To make testing faster'], correctAnswer: 1, explanation: 'Random testing helps discover bugs by testing with varied, unexpected inputs.' },
    { text: 'If a list has 8 elements with 1-based indexing, which expression selects a random element?', options: ['list[RANDOM(0, 7)]', 'list[RANDOM(1, 8)]', 'list[RANDOM(0, 8)]', 'list[RANDOM(1, 7)]'], correctAnswer: 1, explanation: 'With 1-based indexing, valid indices are 1-8. RANDOM(1, 8) works correctly.' },
    { text: 'Two different computers run the same program with RANDOM(1, 100). Will they get the same sequence?', options: ['Yes, always', 'Only if they use the same seed value', 'Never, because each computer is different', 'Only if they run at the same time'], correctAnswer: 1, explanation: 'Pseudorandom generators produce the same sequence with the same seed.' }
  ]
};

// Topic 3.16 Simulations
const topic316 = {
  id: 'aap-3-16',
  name: '3.16 Simulations',
  description: 'Creating and using computer simulations',
  bigIdeaId: 'big-idea-3',
  order: 16,
  questions: [
    { text: 'What is a computer simulation?', options: ['A game played on a computer', 'A model that represents a real-world process or system', 'A type of programming language', 'A method for storing data'], correctAnswer: 1, explanation: 'A simulation is a computer model representing a real-world process or system.' },
    { text: 'Why might scientists use a computer simulation instead of a real experiment?', options: ['Simulations are always more accurate', 'Real experiments may be too dangerous, expensive, time-consuming, or impossible', 'Scientists are not allowed to do real experiments', 'Computers are required for all research'], correctAnswer: 1, explanation: 'Simulations allow study of phenomena that would be impractical in reality.' },
    { text: 'What is an abstraction in the context of simulations?', options: ['Including every possible detail from reality', 'Simplifying reality by including only relevant features', 'Making the simulation more complicated', 'Adding random errors'], correctAnswer: 1, explanation: 'Abstraction means simplifying reality to include only relevant features.' },
    { text: 'A weather simulation predicts temperature within 2 degrees. What does this illustrate?', options: ['Simulations are always perfectly accurate', 'Simulations cannot predict anything', 'Simulations provide approximations with some margin of error', 'Weather cannot be simulated'], correctAnswer: 2, explanation: 'Simulations are models that approximate reality with possible margins of error.' },
    { text: 'Which is a limitation of computer simulations?', options: ['They run too quickly', 'They may not account for all real-world variables', 'They use too little memory', 'They are too easy to create'], correctAnswer: 1, explanation: 'Simulations cannot include all real-world variables and may have inaccurate assumptions.' },
    { text: 'A traffic simulation tests new road designs. What advantage does this provide?', options: ['The simulation is the actual road', 'Engineers can test designs without building them first', 'Simulations guarantee the road will work', 'Traffic simulations don\'t require data'], correctAnswer: 1, explanation: 'Simulations allow testing designs before implementation, saving time and money.' },
    { text: 'What role does random number generation play in many simulations?', options: ['It makes simulations completely predictable', 'It introduces variability to model uncertainty and probabilistic events', 'It reduces accuracy', 'Random numbers are never used in simulations'], correctAnswer: 1, explanation: 'Random numbers model uncertainty and natural variability in simulations.' },
    { text: 'A flight simulator trains pilots. Which statement is true?', options: ['The simulator must include every atom in the aircraft', 'The simulator abstracts the flying experience to include relevant controls and responses', 'Simulators cannot help train pilots', 'Simulators are only for entertainment'], correctAnswer: 1, explanation: 'Flight simulators abstract flying to include relevant controls while omitting unnecessary details.' },
    { text: 'Running a simulation multiple times with the same inputs might produce different results. Why?', options: ['The computer is broken', 'The simulation includes random elements that vary between runs', 'Simulations should always produce identical results', 'The simulation is poorly designed'], correctAnswer: 1, explanation: 'Simulations often include random elements that lead to different outcomes each run.' },
    { text: 'An epidemiologist models disease spread. What is being abstracted?', options: ['Nothing - every person is modeled individually', 'Population behavior, transmission rates, and contact patterns are simplified', 'The simulation models every virus particle', 'Simulations cannot model disease spread'], correctAnswer: 1, explanation: 'Disease simulations abstract complex behavior into simplified models with parameters.' },
    { text: 'Which factor does NOT typically affect simulation accuracy?', options: ['Quality of the mathematical model', 'Accuracy of input data', 'The color of the computer running the simulation', 'The assumptions built into the simulation'], correctAnswer: 2, explanation: 'Computer color has no effect on simulation accuracy.' },
    { text: 'A planetary orbit simulation uses Newton\'s laws. If a new physical law is discovered, what happens?', options: ['The simulation automatically updates', 'The simulation must be modified to incorporate the new understanding', 'Simulations cannot model planetary orbits', 'The new law has no effect on the simulation'], correctAnswer: 1, explanation: 'Simulations based on current understanding require updates for new discoveries.' },
    { text: 'What is a "Monte Carlo simulation"?', options: ['A simulation run in Monaco', 'A simulation that uses random sampling to model probabilistic systems', 'A simulation that always produces the same result', 'A simulation of casino games only'], correctAnswer: 1, explanation: 'Monte Carlo simulations use random sampling to model complex probabilistic systems.' },
    { text: 'A company simulates customer behavior in a store. Which is an appropriate level of abstraction?', options: ['Model the neural activity in each customer\'s brain', 'Model customer movement patterns, purchasing decisions, and time spent', 'Include no details about customers', 'Model the molecular structure of each product'], correctAnswer: 1, explanation: 'Appropriate abstraction includes relevant behaviors without unnecessary details.' },
    { text: 'Simulations are often used in "what-if" analysis. What does this mean?', options: ['Testing how the system responds to different scenarios', 'Asking questions without using a computer', 'Guessing results without running the simulation', 'Only simulating events that have happened'], correctAnswer: 0, explanation: '"What-if" analysis uses simulations to explore different scenarios.' },
    { text: 'A climate simulation predicts temperatures 100 years ahead. Why might this be uncertain?', options: ['Computers cannot calculate that far ahead', 'Small errors compound over time, and future events are unpredictable', 'Climate cannot be simulated', 'The simulation runs too fast'], correctAnswer: 1, explanation: 'Long-term predictions have uncertainty because errors accumulate.' },
    { text: 'Which would be HARDEST to simulate accurately?', options: ['The trajectory of a thrown ball', 'Human creativity and decision-making in novel situations', 'The orbit of the moon', 'Water flowing through a pipe'], correctAnswer: 1, explanation: 'Human creativity involves complex cognitive processes difficult to model.' },
    { text: 'A city uses a simulation to plan public transit. What should officials understand about results?', options: ['Results are guaranteed to match reality', 'Results are estimates based on models that may differ from reality', 'Simulations are useless for planning', 'No real data is needed'], correctAnswer: 1, explanation: 'Simulation results are estimates based on models, useful but not guaranteed.' },
    { text: 'What is the purpose of validating a simulation?', options: ['To make the simulation run faster', 'To check that the simulation accurately represents the real-world system', 'To add more random numbers', 'To delete the simulation\'s code'], correctAnswer: 1, explanation: 'Validation compares simulation results with real-world data for accuracy.' },
    { text: 'A physics simulation ignores air resistance. What does this demonstrate?', options: ['A programming error', 'An intentional simplification that makes the simulation less complex', 'Air resistance doesn\'t exist', 'The simulation is useless'], correctAnswer: 1, explanation: 'Ignoring air resistance is a deliberate simplification for many purposes.' },
    { text: 'Why might a simulation be run thousands of times?', options: ['Because the first run always fails', 'To understand the range of possible outcomes and their probabilities', 'To waste computing resources', 'Simulations must run exactly 1000 times'], correctAnswer: 1, explanation: 'Multiple runs reveal the distribution of possible outcomes.' },
    { text: 'Which statement about simulations and real experiments is most accurate?', options: ['Simulations should always replace experiments', 'Real experiments should always replace simulations', 'Simulations and experiments can complement each other', 'They give identical information'], correctAnswer: 2, explanation: 'Simulations and experiments complement each other with different strengths.' },
    { text: 'A student\'s bouncing ball simulation has balls passing through walls. What might be wrong?', options: ['Balls cannot be simulated', 'The collision detection algorithm may have flaws or the time step is too large', 'Computers cannot handle physics', 'This is expected behavior'], correctAnswer: 1, explanation: 'Balls passing through walls indicates collision detection problems.' },
    { text: 'What is a key benefit of using simulations in education?', options: ['Students can experiment with dangerous or inaccessible systems safely', 'Simulations replace the need for any real learning', 'Students don\'t need to understand underlying concepts', 'Simulations are too complex for education'], correctAnswer: 0, explanation: 'Educational simulations allow safe experimentation with otherwise inaccessible systems.' },
    { text: 'A financial simulation predicts stock prices. What should investors understand?', options: ['Predictions are guaranteed to be correct', 'Simulations are based on assumptions that may not apply to future conditions', 'Financial markets cannot be simulated', 'Simulations always overestimate prices'], correctAnswer: 1, explanation: 'Financial simulations use assumptions that may not apply to future conditions.' }
  ]
};

// Topic 3.17 Algorithmic Efficiency
const topic317 = {
  id: 'aap-3-17',
  name: '3.17 Algorithmic Efficiency',
  description: 'Evaluating the efficiency of algorithms',
  bigIdeaId: 'big-idea-3',
  order: 17,
  questions: [
    { text: 'What does "algorithmic efficiency" measure?', options: ['How colorful the code looks', 'The amount of resources (time/space) an algorithm uses relative to input size', 'How many programmers worked on the algorithm', 'The cost of the computer'], correctAnswer: 1, explanation: 'Algorithmic efficiency measures how resource usage scales with input size.' },
    { text: 'An algorithm takes 100 steps for 10 items and 10,000 steps for 100 items. What type of growth?', options: ['Linear', 'Quadratic', 'Logarithmic', 'Constant'], correctAnswer: 1, explanation: 'Input 10x larger, steps 100x larger suggests quadratic (n²) growth.' },
    { text: 'Which algorithm is more efficient for large inputs: n steps or n² steps?', options: ['The n² algorithm is always more efficient', 'The n algorithm is more efficient for large inputs', 'Both are equally efficient', 'Efficiency cannot be compared'], correctAnswer: 1, explanation: 'For large n, n² grows much faster than n, so n is more efficient.' },
    { text: 'What is "reasonable time" in algorithm analysis?', options: ['Any algorithm finishing in under 1 second', 'An algorithm with running time that grows polynomially', 'An algorithm that never finishes', 'The time to write the algorithm'], correctAnswer: 1, explanation: 'Reasonable time means polynomial time complexity.' },
    { text: 'An algorithm\'s time doubles when input doubles. What is its complexity?', options: ['Constant', 'Linear', 'Quadratic', 'Exponential'], correctAnswer: 1, explanation: 'When time doubles as input doubles, this is linear growth.' },
    { text: 'Which statement about binary search and linear search is correct?', options: ['Linear search is always faster', 'Binary search is more efficient for large sorted lists', 'Both have the same efficiency', 'Neither can search through lists'], correctAnswer: 1, explanation: 'Binary search has O(log n) versus O(n) for linear search.' },
    { text: 'An algorithm examines every pair of items in a list of n items. How many comparisons?', options: ['n comparisons', 'Approximately n²/2 comparisons', 'log n comparisons', '2n comparisons'], correctAnswer: 1, explanation: 'Examining every pair requires n(n-1)/2 comparisons, which is approximately n²/2.' },
    { text: 'What does it mean if an algorithm has "exponential" time complexity?', options: ['It runs very quickly', 'Running time doubles (or more) with each additional input item', 'It uses very little memory', 'It can solve any problem'], correctAnswer: 1, explanation: 'Exponential algorithms become impractical quickly as input grows.' },
    { text: 'A sorting algorithm takes 1 second for 1000 items and 4 seconds for 2000 items. What complexity?', options: ['Linear (n)', 'Quadratic (n²)', 'Logarithmic (log n)', 'Constant'], correctAnswer: 1, explanation: 'Input doubled (2x) but time quadrupled (4x) suggests quadratic complexity.' },
    { text: 'Why is algorithm efficiency important?', options: ['It only matters for academic research', 'Efficient algorithms can handle larger problems faster', 'All algorithms are equally efficient', 'Efficiency is only about code appearance'], correctAnswer: 1, explanation: 'Efficiency determines whether problems can be solved practically.' },
    { text: 'Which complexity grows SLOWEST as input increases?', options: ['n²', 'n', 'log n', '2ⁿ'], correctAnswer: 2, explanation: 'Logarithmic (log n) grows slowest of these options.' },
    { text: 'An algorithm looks at each list element once. What is its time complexity?', options: ['Constant', 'Linear', 'Quadratic', 'Exponential'], correctAnswer: 1, explanation: 'Looking at each element once is n operations - linear time.' },
    { text: 'A problem has no known algorithm that runs in polynomial time. What is this called?', options: ['An easy problem', 'An intractable or hard problem', 'An unsolvable problem', 'A linear problem'], correctAnswer: 1, explanation: 'Problems with no known polynomial-time solution are intractable.' },
    { text: 'If linear search checks 1 million items in 1 second, how long for 10 million items?', options: ['1 second', '10 seconds', '100 seconds', '1 million seconds'], correctAnswer: 1, explanation: 'Linear search has linear complexity. 10x input = 10x time.' },
    { text: 'What is space complexity?', options: ['Physical space the computer takes', 'How much memory an algorithm uses relative to input size', 'Number of spaces in the code', 'How far data travels'], correctAnswer: 1, explanation: 'Space complexity measures how memory usage grows with input size.' },
    { text: 'An algorithm takes the same time regardless of input size. What is its complexity?', options: ['Linear', 'Quadratic', 'Constant', 'Logarithmic'], correctAnswer: 2, explanation: 'Constant complexity (O(1)) means same time regardless of input size.' },
    { text: 'Which operation on a list typically has linear time complexity?', options: ['Accessing an element by index', 'Finding the maximum value', 'Getting the length of the list', 'Adding to the end'], correctAnswer: 1, explanation: 'Finding the maximum requires examining every element - linear complexity.' },
    { text: 'A nested loop where outer runs n times and inner runs n times has what complexity?', options: ['n', 'n + n = 2n', 'n × n = n²', 'log n'], correctAnswer: 2, explanation: 'Nested loops multiply: n × n = n² operations - quadratic complexity.' },
    { text: 'Why might an algorithm with worse theoretical complexity run faster for small inputs?', options: ['This is impossible', 'Constant factors and setup costs may dominate for small inputs', 'Small inputs aren\'t processed by algorithms', 'Complexity analysis is always wrong'], correctAnswer: 1, explanation: 'For small inputs, constant factors can matter more than asymptotic complexity.' },
    { text: 'The traveling salesman problem (finding shortest route visiting all cities) is known to be:', options: ['Solvable in linear time', 'Solvable in logarithmic time', 'An intractable problem with no known efficient algorithm', 'Trivial to solve'], correctAnswer: 2, explanation: 'The traveling salesman problem is NP-hard with no known polynomial-time solution.' },
    { text: 'Which represents the FASTEST growing complexity?', options: ['n³', 'n!', 'n²', '2ⁿ'], correctAnswer: 1, explanation: 'Factorial (n!) grows fastest, even faster than exponential.' },
    { text: 'If doubling input makes an algorithm take 8 times longer, what is its likely complexity?', options: ['Linear (n)', 'Quadratic (n²)', 'Cubic (n³)', 'Logarithmic (log n)'], correctAnswer: 2, explanation: 'When input doubles and time increases 8-fold (2³), complexity is cubic (n³).' },
    { text: 'A heuristic algorithm:', options: ['Always finds the optimal solution', 'Finds a good (not necessarily optimal) solution more quickly', 'Is always slower than exact algorithms', 'Cannot solve any problems'], correctAnswer: 1, explanation: 'Heuristic algorithms trade optimality for speed.' },
    { text: 'Comparing n² and n log n for processing 1 million items:', options: ['n² is significantly more efficient', 'n log n is significantly more efficient', 'They are equally efficient', 'Neither can process 1 million items'], correctAnswer: 1, explanation: 'For n = 1,000,000: n² = 10¹² vs n log n ≈ 20 million operations.' },
    { text: 'What is the primary purpose of Big O notation?', options: ['To measure exact running time in seconds', 'To classify algorithms by how their resource needs grow with input size', 'To count the number of lines of code', 'To measure computer cost'], correctAnswer: 1, explanation: 'Big O classifies algorithms by their growth rate with input size.' }
  ]
};

// Topic 3.18 Undecidable Problems
const topic318 = {
  id: 'aap-3-18',
  name: '3.18 Undecidable Problems',
  description: 'Understanding problems that cannot be solved by any algorithm',
  bigIdeaId: 'big-idea-3',
  order: 18,
  questions: [
    { text: 'What is an undecidable problem?', options: ['A problem that is difficult but eventually solvable', 'A problem for which no algorithm can always produce a correct yes/no answer', 'A problem that computers refuse to solve', 'A problem with multiple correct answers'], correctAnswer: 1, explanation: 'An undecidable problem cannot be solved by any algorithm for all possible inputs.' },
    { text: 'The Halting Problem asks whether a given program will:', options: ['Run faster than expected', 'Eventually stop (halt) or run forever for a given input', 'Produce the correct output', 'Use too much memory'], correctAnswer: 1, explanation: 'The Halting Problem asks if a program will halt or run forever.' },
    { text: 'Why is the Halting Problem important in computer science?', options: ['It shows computers can solve every problem', 'It proves there are limits to what can be computed', 'It is only of historical interest', 'It shows all programs eventually halt'], correctAnswer: 1, explanation: 'The Halting Problem demonstrates fundamental limits of computation.' },
    { text: 'Which statement about undecidable problems is TRUE?', options: ['With a fast enough computer, all undecidable problems can be solved', 'Undecidable problems cannot be solved algorithmically for all inputs', 'Undecidable problems don\'t exist', 'Only quantum computers can solve them'], correctAnswer: 1, explanation: 'Undecidability is a mathematical property, not a hardware limitation.' },
    { text: 'If someone claims to have written a program that solves the Halting Problem for all inputs:', options: ['They have made a breakthrough', 'Their claim must be incorrect - it has been proven impossible', 'They are using a quantum computer', 'Their program is just slow'], correctAnswer: 1, explanation: 'Turing proved mathematically that no such program can exist.' },
    { text: 'For a specific, simple program like "print hello and stop", can we determine if it halts?', options: ['No, we can never determine if any program halts', 'Yes, for many specific programs we can determine if they halt', 'Only by running the program forever', 'Determining halting is always impossible'], correctAnswer: 1, explanation: 'We can analyze many specific programs. Undecidability means no single algorithm works for ALL programs.' },
    { text: 'What is the difference between an unsolvable instance and an undecidable problem?', options: ['They are the same thing', 'An undecidable problem has no algorithm for all instances; individual instances might be solvable', 'An unsolvable instance is harder', 'There is no difference'], correctAnswer: 1, explanation: 'An undecidable problem lacks a general algorithm, but specific instances might be solvable.' },
    { text: 'A program that checks if another program contains an infinite loop is:', options: ['Easy to write', 'Equivalent to solving the Halting Problem and therefore impossible for all programs', 'Already built into all languages', 'Only useful for web development'], correctAnswer: 1, explanation: 'Detecting infinite loops in all programs is equivalent to the Halting Problem.' },
    { text: 'Which of the following is a decidable problem?', options: ['Determining if an arbitrary program halts on all inputs', 'Determining if a number is prime', 'Determining if two arbitrary programs produce the same output', 'Determining if an arbitrary program will ever produce output'], correctAnswer: 1, explanation: 'Primality testing is decidable - there are algorithms that correctly determine if any number is prime.' },
    { text: 'What proves that the Halting Problem is undecidable?', options: ['Computers are too slow', 'A logical contradiction arises when assuming a halting-detection program exists', 'Nobody has tried hard enough', 'Hardware limitations'], correctAnswer: 1, explanation: 'Turing\'s proof shows that assuming such a program exists leads to contradiction.' },
    { text: 'An algorithm that might run forever on some inputs is called:', options: ['A decision algorithm', 'A semi-algorithm or partial algorithm', 'An optimal algorithm', 'A quantum algorithm'], correctAnswer: 1, explanation: 'A semi-algorithm may not terminate for all inputs.' },
    { text: 'If problem A can be reduced to undecidable problem B, what do we know about A?', options: ['A is definitely decidable', 'A is also undecidable', 'A might be easier than B', 'Nothing can be determined'], correctAnswer: 1, explanation: 'If we can transform undecidable B into A, then A must also be undecidable.' },
    { text: 'What is the significance of undecidable problems for software verification?', options: ['All software can be perfectly verified', 'Complete automatic verification of all software properties is impossible', 'Undecidable problems don\'t affect software', 'Verification is simple'], correctAnswer: 1, explanation: 'Undecidability means we cannot automatically verify all properties of all programs.' },
    { text: 'Consider this program: "while (true) { }". Does it halt?', options: ['Yes, immediately', 'No, it runs forever', 'It\'s impossible to tell', 'It depends on the computer'], correctAnswer: 1, explanation: 'This specific program has an obvious infinite loop and never halts.' },
    { text: 'Why can\'t we simply run a program to see if it halts?', options: ['Running programs is not allowed', 'If it doesn\'t halt quickly, we can\'t distinguish "will halt eventually" from "runs forever"', 'Programs cannot be run', 'This method always works'], correctAnswer: 1, explanation: 'Running a program doesn\'t tell us if it will halt - we can\'t know by just waiting.' },
    { text: 'A "computable" or "decidable" problem is one that:', options: ['Is very difficult to solve', 'Has an algorithm that always halts with a correct answer for all inputs', 'Cannot be solved by computers', 'Requires infinite time'], correctAnswer: 1, explanation: 'A decidable problem has an algorithm that terminates with a correct answer for every input.' },
    { text: 'The discovery of undecidable problems showed that:', options: ['Mathematics has no limits', 'There are inherent theoretical limits to what computation can achieve', 'All problems can be solved with enough time', 'Computer science is not a real science'], correctAnswer: 1, explanation: 'Undecidability reveals fundamental theoretical limits on computation.' },
    { text: 'Can undecidable problems have practical implications?', options: ['No, they are purely theoretical', 'Yes, they affect what we can automate, verify, and prove about software', 'They only matter for mathematicians', 'They have been solved by modern computers'], correctAnswer: 1, explanation: 'Undecidability has practical implications for verification, optimization, and security.' },
    { text: 'Rice\'s theorem states that:', options: ['All programs can be analyzed', 'Any non-trivial property about the behavior of programs is undecidable', 'Rice invented the computer', 'Programs should use more rice'], correctAnswer: 1, explanation: 'Rice\'s theorem proves any non-trivial question about what a program computes is undecidable.' },
    { text: 'If we can\'t solve the Halting Problem, how do programmers deal with infinite loops?', options: ['They ignore the problem', 'They use timeouts, testing, code review, and careful design', 'They use special computers', 'Infinite loops don\'t exist in practice'], correctAnswer: 1, explanation: 'Practical approaches include timeouts, testing, and code reviews, though not perfect.' },
    { text: 'The concept of undecidability applies to:', options: ['Only the Halting Problem', 'Many different computational problems across various domains', 'Only theoretical computer science', 'Only very old computers'], correctAnswer: 1, explanation: 'Undecidability applies to many problems across various domains.' },
    { text: 'Virus detection being related to the Halting Problem means:', options: ['All viruses can be detected', 'No antivirus can guarantee detection of all possible viruses', 'Viruses don\'t exist', 'Computers are immune to viruses'], correctAnswer: 1, explanation: 'Since detecting all malicious behavior reduces to the Halting Problem, no antivirus can detect every possible virus.' },
    { text: 'What happens when a problem is "reduced" to the Halting Problem?', options: ['The problem becomes easier', 'Solving the problem would require solving the Halting Problem, proving it undecidable', 'The problem is automatically solved', 'The problem disappears'], correctAnswer: 1, explanation: 'Reducing to the Halting Problem shows the original problem is also undecidable.' },
    { text: 'Gödel\'s incompleteness theorems and the Halting Problem both demonstrate:', options: ['All mathematical questions can be answered', 'Fundamental limitations in formal systems and computation', 'Mathematics is useless', 'Computers are omnipotent'], correctAnswer: 1, explanation: 'Both reveal fundamental limitations in formal systems and computation.' },
    { text: 'A program analyzer that claims to detect ALL bugs in ANY program:', options: ['Is a standard tool', 'Cannot exist due to the undecidability of general program properties', 'Already exists and works perfectly', 'Is easy to create'], correctAnswer: 1, explanation: 'Due to Rice\'s theorem, no tool can detect all bugs in all possible programs.' }
  ]
};

// Topic 4.1 The Internet
const topic41 = {
  id: 'csn-4-1',
  name: '4.1 The Internet',
  description: 'Understanding how the Internet works',
  bigIdeaId: 'big-idea-4',
  order: 1,
  questions: [
    { text: 'What is the Internet?', options: ['A single computer network owned by one company', 'A network of interconnected networks that communicate using shared protocols', 'A wireless technology for phones only', 'A type of software application'], correctAnswer: 1, explanation: 'The Internet is a global network of interconnected networks using shared protocols.' },
    { text: 'What is a protocol in computer networking?', options: ['A type of computer virus', 'A set of rules that define how data is transmitted and received', 'A brand of network cable', 'A government regulation'], correctAnswer: 1, explanation: 'A protocol is an agreed-upon set of rules for data communication.' },
    { text: 'What does TCP/IP stand for?', options: ['Total Computer Processing/Internet Provider', 'Transmission Control Protocol/Internet Protocol', 'Technical Computer Program/Internet Platform', 'Transfer Control Process/Internal Protocol'], correctAnswer: 1, explanation: 'TCP/IP is Transmission Control Protocol/Internet Protocol, fundamental for Internet communication.' },
    { text: 'What is the purpose of an IP address?', options: ['To provide a physical location of a computer', 'To uniquely identify a device on a network', 'To store data on the Internet', 'To speed up Internet connections'], correctAnswer: 1, explanation: 'An IP address uniquely identifies a device on a network.' },
    { text: 'What is packet switching?', options: ['Turning network devices on and off', 'Breaking data into smaller packets that are routed independently', 'Switching between different Internet providers', 'Packaging software for distribution'], correctAnswer: 1, explanation: 'Packet switching breaks data into packets that travel independently through the network.' },
    { text: 'What is a router\'s primary function?', options: ['To store files', 'To forward data packets between networks toward their destination', 'To create websites', 'To generate electricity'], correctAnswer: 1, explanation: 'Routers forward data packets between networks to reach their destination.' },
    { text: 'What is DNS (Domain Name System)?', options: ['A security system for networks', 'A system that translates domain names into IP addresses', 'A type of Internet connection', 'A programming language'], correctAnswer: 1, explanation: 'DNS translates human-readable domain names into numerical IP addresses.' },
    { text: 'What happens when you type a URL into a web browser?', options: ['The website is downloaded from a satellite', 'DNS resolves the domain to an IP, and your browser requests the page from that server', 'The URL is sent to the government for approval', 'A new website is created'], correctAnswer: 1, explanation: 'The browser uses DNS to find the server\'s IP, then requests the page from that server.' },
    { text: 'What is bandwidth?', options: ['The physical width of a network cable', 'The maximum amount of data that can be transmitted over a connection in a given time', 'The number of users on a network', 'The height of a wireless signal'], correctAnswer: 1, explanation: 'Bandwidth is the maximum data transfer capacity of a network connection.' },
    { text: 'What is latency in networking?', options: ['The amount of data being transferred', 'The time delay between sending a request and receiving a response', 'The physical distance between computers', 'The number of connected devices'], correctAnswer: 1, explanation: 'Latency is the time delay in data transmission, often called "lag."' },
    { text: 'What is HTTP?', options: ['A type of network cable', 'A protocol for transferring web pages and content over the Internet', 'A computer operating system', 'A security certificate'], correctAnswer: 1, explanation: 'HTTP (Hypertext Transfer Protocol) is used for transmitting web pages.' },
    { text: 'What does HTTPS add to HTTP?', options: ['Faster speeds', 'Encryption for secure, private communication', 'More colorful websites', 'Larger file sizes'], correctAnswer: 1, explanation: 'HTTPS adds encryption (TLS/SSL) to HTTP for secure communication.' },
    { text: 'What is a packet in computer networking?', options: ['A physical envelope containing hardware', 'A small unit of data transmitted over a network with routing information', 'A type of computer virus', 'A network administrator'], correctAnswer: 1, explanation: 'A packet is a small unit of data with payload and header information.' },
    { text: 'Why does the Internet use multiple layers of protocols?', options: ['To confuse hackers', 'Each layer handles specific functions, making the system modular', 'It doesn\'t actually use multiple layers', 'To make the Internet slower'], correctAnswer: 1, explanation: 'Layered protocols separate functions, allowing independent development and updates.' },
    { text: 'What is the difference between the World Wide Web and the Internet?', options: ['They are exactly the same thing', 'The Internet is the infrastructure; the Web is a service that runs on it', 'The Web is hardware; the Internet is software', 'The Internet is only for email'], correctAnswer: 1, explanation: 'The Internet is infrastructure. The Web is a service running on it using HTTP.' },
    { text: 'What is an ISP?', options: ['Internal System Protocol', 'Internet Service Provider - a company that provides Internet access', 'Internet Security Program', 'Integrated Software Platform'], correctAnswer: 1, explanation: 'An ISP provides customers with access to the Internet.' },
    { text: 'What role do data centers play in the Internet?', options: ['They manufacture computers', 'They house servers that store and process data for websites and services', 'They are just office buildings', 'They control Internet traffic speeds'], correctAnswer: 1, explanation: 'Data centers contain servers that host websites, cloud services, and process data.' },
    { text: 'What is IPv6?', options: ['The sixth version of Internet Privacy', 'A newer IP addressing system that provides many more unique addresses', 'A type of wireless Internet', 'An Internet speed measurement'], correctAnswer: 1, explanation: 'IPv6 uses 128-bit addresses, providing far more unique addresses than IPv4.' },
    { text: 'How do packets from the same message sometimes take different routes?', options: ['This never happens', 'Routers independently forward each packet based on current conditions', 'Packets choose their own routes randomly', 'Users manually select routes'], correctAnswer: 1, explanation: 'Routers make independent decisions for each packet based on conditions.' },
    { text: 'What is a MAC address?', options: ['An address only for Apple computers', 'A unique hardware identifier assigned to a network interface', 'A password for Internet access', 'A type of IP address'], correctAnswer: 1, explanation: 'A MAC address is a unique identifier assigned to network hardware.' },
    { text: 'What is the purpose of the TCP protocol?', options: ['To assign IP addresses', 'To ensure reliable, ordered delivery of data with error correction', 'To create web pages', 'To filter spam emails'], correctAnswer: 1, explanation: 'TCP ensures reliable delivery by checking errors and handling retransmission.' },
    { text: 'What is a server in the context of the Internet?', options: ['A person who serves food', 'A computer that provides data, services, or resources to other computers', 'Any computer connected to the Internet', 'A type of Internet cable'], correctAnswer: 1, explanation: 'A server is a computer that provides services or resources to client computers.' },
    { text: 'What happens if a packet is lost during transmission?', options: ['The entire message is lost forever', 'TCP detects the missing packet and requests retransmission', 'The message is delivered incomplete', 'The Internet shuts down'], correctAnswer: 1, explanation: 'TCP tracks packets and requests retransmission of any that are lost.' },
    { text: 'What is a firewall?', options: ['A wall that prevents fires in data centers', 'A security system that monitors and controls network traffic', 'A type of fast Internet connection', 'A protocol for sending email'], correctAnswer: 1, explanation: 'A firewall monitors network traffic and blocks/allows it based on security rules.' },
    { text: 'What is net neutrality?', options: ['A law about fishing nets', 'The principle that ISPs should treat all Internet traffic equally', 'A type of network security', 'A method for measuring Internet speed'], correctAnswer: 1, explanation: 'Net neutrality is the principle that ISPs should treat all data equally.' }
  ]
};

// Topic 4.2 Fault Tolerance
const topic42 = {
  id: 'csn-4-2',
  name: '4.2 Fault Tolerance',
  description: 'Understanding how systems handle failures',
  bigIdeaId: 'big-idea-4',
  order: 2,
  questions: [
    { text: 'What is fault tolerance?', options: ['Accepting mistakes in programming', 'A system\'s ability to continue operating properly when components fail', 'A type of computer error', 'Forgiving network administrators'], correctAnswer: 1, explanation: 'Fault tolerance is the ability to continue functioning despite component failures.' },
    { text: 'What is redundancy in the context of fault tolerance?', options: ['Repeating the same mistake', 'Having backup components or pathways that can take over if primary ones fail', 'Using more electricity than needed', 'Sending extra unneeded data'], correctAnswer: 1, explanation: 'Redundancy means having backups ready to take over if primary components fail.' },
    { text: 'Why was the Internet originally designed to be fault tolerant?', options: ['To make it run faster', 'To allow communication to continue even if parts of the network were damaged', 'To reduce costs', 'To make it easier to use'], correctAnswer: 1, explanation: 'The Internet was designed for military resilience if parts were destroyed.' },
    { text: 'If multiple paths exist between two points on the Internet, what happens when one fails?', options: ['All communication stops', 'Data is automatically rerouted through alternative paths', 'The Internet needs to be restarted', 'Users must manually select a new path'], correctAnswer: 1, explanation: 'With multiple paths, routers can automatically redirect traffic through alternatives.' },
    { text: 'What is a single point of failure?', options: ['A system with no failures', 'A component whose failure would cause the entire system to stop working', 'A very reliable component', 'A backup system'], correctAnswer: 1, explanation: 'A single point of failure causes the entire system to fail if it fails.' },
    { text: 'In a fault-tolerant network, what happens when a router fails?', options: ['The entire network goes offline', 'Traffic is rerouted through other available paths', 'All data is lost', 'Users cannot access any websites'], correctAnswer: 1, explanation: 'In a fault-tolerant network, traffic is automatically rerouted.' },
    { text: 'What is RAID in data storage?', options: ['A type of computer virus', 'A technique using multiple hard drives with redundancy to protect against drive failure', 'A network security tool', 'A programming language'], correctAnswer: 1, explanation: 'RAID uses multiple drives to provide redundancy if a drive fails.' },
    { text: 'Why do large websites often use multiple data centers?', options: ['To use more electricity', 'To maintain service if one data center fails or to serve users closer to them', 'Data centers are very small', 'It\'s required by law'], correctAnswer: 1, explanation: 'Multiple data centers provide redundancy and can improve performance.' },
    { text: 'What is the benefit of having multiple routes between network nodes?', options: ['It makes the network slower', 'It increases fault tolerance - if one route fails, others are available', 'It increases cost without benefit', 'It prevents any data from being transmitted'], correctAnswer: 1, explanation: 'Multiple routes increase fault tolerance by providing alternatives.' },
    { text: 'A network has 4 nodes where every node connects to every other. How many connections fail before any two nodes cannot communicate?', options: ['1 connection', '2 connections', '3 connections', 'It depends on which connections fail'], correctAnswer: 3, explanation: 'In a fully connected network, the impact depends on which specific connections fail.' },
    { text: 'What is load balancing?', options: ['Weighing network equipment', 'Distributing work across multiple servers to prevent overload', 'Reducing network speed', 'Measuring electricity usage'], correctAnswer: 1, explanation: 'Load balancing distributes traffic across servers for performance and redundancy.' },
    { text: 'What does it mean when a system has "high availability"?', options: ['It\'s expensive to purchase', 'It\'s designed to be operational almost all the time with minimal downtime', 'It\'s available in many stores', 'It has many users'], correctAnswer: 1, explanation: 'High availability means the system is operational nearly all the time.' },
    { text: 'What is the purpose of backup systems?', options: ['To make systems run slower', 'To allow recovery of data or service if primary systems fail', 'To store deleted files permanently', 'To increase network speed'], correctAnswer: 1, explanation: 'Backup systems enable recovery if primary systems fail.' },
    { text: 'What provides redundancy at the physical level on the Internet?', options: ['Using only one Internet cable globally', 'Multiple cables, connection types, and geographic routes', 'A single data center', 'Using only wireless connections'], correctAnswer: 1, explanation: 'Physical redundancy includes multiple cables, types, and geographic routes.' },
    { text: 'What is failover?', options: ['When a system completely stops working', 'Automatically switching to a backup system when the primary fails', 'A type of network error', 'Manually restarting a computer'], correctAnswer: 1, explanation: 'Failover is automatic switching to a backup system when primary fails.' },
    { text: 'Why might a company use cloud computing services from multiple providers?', options: ['To increase complexity', 'To avoid dependence on a single provider and maintain service if one has issues', 'Cloud providers are all the same', 'To decrease security'], correctAnswer: 1, explanation: 'Using multiple providers avoids single-provider dependence and provides redundancy.' },
    { text: 'What happens to data integrity when a fault-tolerant system experiences a failure?', options: ['All data is immediately lost', 'The system is designed to preserve data integrity even during failures', 'Data becomes corrupt', 'Users must re-enter all data'], correctAnswer: 1, explanation: 'Fault-tolerant systems are designed to maintain data integrity during failures.' },
    { text: 'A mesh network topology provides fault tolerance because:', options: ['It uses only one connection between nodes', 'Multiple paths exist between nodes, allowing rerouting if connections fail', 'All data goes through a central hub', 'It doesn\'t require any connections'], correctAnswer: 1, explanation: 'Mesh networks have multiple connections allowing rerouting if some fail.' },
    { text: 'What is the trade-off of building highly fault-tolerant systems?', options: ['They are simpler to build', 'They typically require more resources (cost, hardware, complexity)', 'They are less reliable', 'They use less electricity'], correctAnswer: 1, explanation: 'Fault tolerance requires more resources and complexity for redundancy.' },
    { text: 'What is geographic redundancy?', options: ['Using the same location for all systems', 'Distributing systems across different physical locations', 'A type of GPS technology', 'Mapping network locations'], correctAnswer: 1, explanation: 'Geographic redundancy places systems in different locations for protection.' },
    { text: 'If a network has nodes A, B, C, D with connections A-B, B-C, C-D, and A-D, what happens if B-C fails?', options: ['A cannot communicate with C', 'A can still reach C through A-D-C', 'The entire network fails', 'D becomes unreachable'], correctAnswer: 1, explanation: 'With redundant paths, A can reach C via A-D-C, demonstrating fault tolerance.' },
    { text: 'What is the difference between fault tolerance and fault prevention?', options: ['They are the same thing', 'Prevention tries to stop faults; tolerance allows operation despite faults', 'Prevention is more expensive', 'Tolerance prevents all faults'], correctAnswer: 1, explanation: 'Prevention stops failures; tolerance allows operation despite failures.' },
    { text: 'Why is the Internet more fault-tolerant than a system where all data passes through one central point?', options: ['Central points are more reliable', 'The Internet\'s distributed design has no single point of failure for the entire network', 'The Internet uses less equipment', 'Central points are always available'], correctAnswer: 1, explanation: 'The Internet\'s distributed design avoids a single point of failure.' },
    { text: 'What role does software play in fault tolerance?', options: ['Software cannot help with fault tolerance', 'Software can detect failures, switch to backups, retry operations, and manage redundancy', 'Software only causes faults', 'Software makes systems less reliable'], correctAnswer: 1, explanation: 'Software plays a crucial role in detecting failures and managing redundancy.' },
    { text: 'What is the "five nines" (99.999%) availability target?', options: ['A network speed measurement', 'A goal for systems to be available 99.999% of the time, allowing about 5 minutes downtime per year', 'A security rating', 'The number of backups required'], correctAnswer: 1, explanation: 'Five nines means 99.999% uptime, about 5 minutes of allowed downtime per year.' }
  ]
};

// Topic 4.3 Parallel and Distributed Computing
const topic43 = {
  id: 'csn-4-3',
  name: '4.3 Parallel and Distributed Computing',
  description: 'Understanding parallel and distributed computing concepts',
  bigIdeaId: 'big-idea-4',
  order: 3,
  questions: [
    { text: 'What is parallel computing?', options: ['Computers working in separate rooms', 'Using multiple processors or cores to execute parts of a program simultaneously', 'Running programs one after another', 'A type of Internet connection'], correctAnswer: 1, explanation: 'Parallel computing uses multiple processing units to execute simultaneously.' },
    { text: 'What is the main benefit of parallel computing?', options: ['It uses less electricity', 'It can significantly reduce the time needed to complete tasks', 'It makes programs simpler to write', 'It reduces the number of computers needed'], correctAnswer: 1, explanation: 'Parallel computing can dramatically reduce execution time.' },
    { text: 'What is distributed computing?', options: ['Giving away computers for free', 'Using multiple computers connected by a network to work on a problem together', 'A single computer with multiple monitors', 'Installing software on multiple computers'], correctAnswer: 1, explanation: 'Distributed computing involves multiple computers collaborating over a network.' },
    { text: 'Which is an example of distributed computing?', options: ['A single computer with a fast processor', 'Cloud computing services where tasks are processed across many servers', 'A laptop running one program', 'A calculator'], correctAnswer: 1, explanation: 'Cloud computing is a prime example of distributed computing.' },
    { text: 'What is a "thread" in parallel computing?', options: ['A type of network cable', 'A sequence of instructions that can execute independently alongside other threads', 'A programming error', 'A computer\'s power cord'], correctAnswer: 1, explanation: 'A thread is an independent sequence of instructions that can run concurrently.' },
    { text: 'Which type of problem is HARDEST to parallelize?', options: ['Processing each pixel of an image independently', 'Calculating each step of a process that depends on the previous step', 'Searching through a large database', 'Sending emails to many recipients'], correctAnswer: 1, explanation: 'Sequential dependencies are hard to parallelize because steps cannot run simultaneously.' },
    { text: 'What is a "speedup" in parallel computing?', options: ['Making a single processor run faster', 'The ratio of sequential execution time to parallel execution time', 'Adding more hard drives', 'Increasing Internet speed'], correctAnswer: 1, explanation: 'Speedup measures how much faster a parallel program runs than sequential.' },
    { text: 'Why doesn\'t doubling the number of processors always double the speed?', options: ['It always does double the speed', 'Overhead from coordination and parts that can\'t be parallelized limit speedup', 'Processors don\'t work together', 'More processors use more memory'], correctAnswer: 1, explanation: 'Coordination overhead and sequential portions limit achievable speedup.' },
    { text: 'What is a "race condition"?', options: ['A competition between processors', 'A bug where behavior depends on unpredictable timing of parallel operations', 'A fast algorithm', 'A type of network connection'], correctAnswer: 1, explanation: 'A race condition occurs when results depend on unpredictable timing of operations.' },
    { text: 'How can race conditions be prevented?', options: ['By using only one processor', 'By using synchronization mechanisms like locks to control access to shared resources', 'By running programs faster', 'Race conditions cannot be prevented'], correctAnswer: 1, explanation: 'Synchronization mechanisms ensure controlled access to shared data.' },
    { text: 'What is a "deadlock" in parallel computing?', options: ['A computer that won\'t turn off', 'A situation where two or more processes are waiting for each other, and none can proceed', 'A very fast computation', 'A type of network security'], correctAnswer: 1, explanation: 'Deadlock occurs when processes are stuck waiting for resources held by each other.' },
    { text: 'What is the benefit of cloud computing for distributed tasks?', options: ['It eliminates the need for any computers', 'It allows access to scalable computing resources without owning hardware', 'Cloud computing is always free', 'Cloud computing is slower than local computing'], correctAnswer: 1, explanation: 'Cloud computing provides scalable, on-demand resources without owning hardware.' },
    { text: 'A task takes 100 seconds on one processor. If 80% can be parallelized perfectly across 4 processors, how long?', options: ['25 seconds', '40 seconds', '80 seconds', '100 seconds'], correctAnswer: 1, explanation: 'Sequential: 20 seconds. Parallel: 80/4 = 20 seconds. Total: 40 seconds.' },
    { text: 'What is "load balancing" in distributed computing?', options: ['Weighing computers before shipping', 'Distributing work evenly across multiple processors or computers', 'Reducing the number of tasks', 'Increasing network bandwidth'], correctAnswer: 1, explanation: 'Load balancing distributes work evenly to maximize efficiency.' },
    { text: 'Which task is well-suited for parallel processing?', options: ['Reading a book chapter by chapter', 'Applying a filter to millions of pixels in an image independently', 'Following a recipe step by step', 'Waiting for user input'], correctAnswer: 1, explanation: 'Image processing is well-suited because each pixel can be processed independently.' },
    { text: 'What is a "cluster" in computing?', options: ['A group of related files', 'A group of connected computers working together as a unified system', 'A type of keyboard', 'A programming technique'], correctAnswer: 1, explanation: 'A cluster is a group of connected computers that work as a single system.' },
    { text: 'What does "scalability" mean in distributed computing?', options: ['The weight of the computers', 'The ability to handle increased workload by adding more resources', 'The size of computer screens', 'The number of files stored'], correctAnswer: 1, explanation: 'Scalability is the ability to handle growing work by adding resources.' },
    { text: 'Why is communication overhead a concern in distributed computing?', options: ['Talking between programmers takes time', 'Time spent transferring data between computers can reduce parallelization benefits', 'Computers need microphones', 'Communication is always instantaneous'], correctAnswer: 1, explanation: 'Network communication takes time, which can outweigh parallelization benefits.' },
    { text: 'What is Amdahl\'s Law about?', options: ['Computer pricing', 'The theoretical limit on speedup based on the sequential portion of a task', 'Network security', 'Memory usage'], correctAnswer: 1, explanation: 'Amdahl\'s Law states that speedup is limited by the sequential portion of a task.' },
    { text: 'A web server handles thousands of requests simultaneously. This is an example of:', options: ['Sequential processing', 'Parallel or concurrent processing', 'Offline processing', 'Manual processing'], correctAnswer: 1, explanation: 'Handling multiple requests simultaneously is parallel/concurrent processing.' },
    { text: 'What is "MapReduce"?', options: ['A way to make maps smaller', 'A programming model for processing large data sets across many computers in parallel', 'A type of GPS system', 'A navigation algorithm'], correctAnswer: 1, explanation: 'MapReduce divides tasks, processes in parallel, then combines results.' },
    { text: 'Which statement about parallel programming is TRUE?', options: ['Parallel programs are always simpler than sequential', 'Parallel programming introduces challenges like synchronization and debugging', 'All programs should be parallel', 'Parallel programming requires no special considerations'], correctAnswer: 1, explanation: 'Parallel programming adds complexity including synchronization and debugging challenges.' },
    { text: 'What is "GPU computing"?', options: ['Gaming only', 'Using graphics processing units for general-purpose parallel computation', 'A type of monitor', 'Graphics design software'], correctAnswer: 1, explanation: 'GPUs have thousands of cores excellent for parallel tasks beyond graphics.' },
    { text: 'What is the difference between concurrency and parallelism?', options: ['They are exactly the same', 'Concurrency manages multiple tasks (possibly on one core); parallelism executes tasks simultaneously (requires multiple cores)', 'Parallelism is always slower', 'Concurrency requires more computers'], correctAnswer: 1, explanation: 'Concurrency manages tasks; parallelism executes them simultaneously.' },
    { text: 'SETI@Home is an example of:', options: ['A single supercomputer', 'Distributed computing where volunteers\' computers contribute processing power', 'A type of telescope', 'A space station'], correctAnswer: 1, explanation: 'SETI@Home was a distributed computing project using volunteers\' idle computers.' }
  ]
};

// All topics to process
const allTopics = [topic314, topic315, topic316, topic317, topic318, topic41, topic42, topic43];

async function fixAllQuestions() {
  console.log('Starting to fix all questions...\n');

  // First, ensure Big Idea 4 exists
  const bigIdea4Ref = db.collection('bigIdeas').doc('big-idea-4');
  const bigIdea4Doc = await bigIdea4Ref.get();
  if (!bigIdea4Doc.exists) {
    await bigIdea4Ref.set({
      name: 'Big Idea 4: Computer Systems and Networks',
      shortName: 'CSN',
      color: '#059669',
      order: 4,
      createdAt: new Date()
    });
    console.log('Created Big Idea 4: Computer Systems and Networks\n');
  }

  for (const topic of allTopics) {
    console.log(`Processing: ${topic.name}`);

    // Convert questions to correct format
    const convertedQuestions = convertQuestions(topic.questions, topic.id);

    // Update or create the topic with embedded questions
    await db.collection('topics').doc(topic.id).set({
      name: topic.name,
      description: topic.description,
      bigIdeaId: topic.bigIdeaId,
      order: topic.order,
      questions: convertedQuestions,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    console.log(`  ✓ Saved ${convertedQuestions.length} questions\n`);

    // Clean up any subcollection questions that might exist
    const subcollection = await db.collection('topics').doc(topic.id).collection('questions').get();
    if (!subcollection.empty) {
      const batch = db.batch();
      subcollection.docs.forEach(doc => batch.delete(doc.ref));
      await batch.commit();
      console.log(`  Cleaned up ${subcollection.size} subcollection questions\n`);
    }
  }

  // Also clean up the old topic IDs that were created with wrong format
  const oldTopicIds = ['3-14', '3-15', '3-16', '3-17', '3-18', '4-1', '4-2', '4-3'];
  for (const oldId of oldTopicIds) {
    const oldDoc = await db.collection('topics').doc(oldId).get();
    if (oldDoc.exists) {
      // Delete subcollection first
      const subColl = await db.collection('topics').doc(oldId).collection('questions').get();
      if (!subColl.empty) {
        const batch = db.batch();
        subColl.docs.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
      }
      // Delete the topic
      await db.collection('topics').doc(oldId).delete();
      console.log(`Deleted old topic: ${oldId}`);
    }
  }

  console.log('\n✅ All questions fixed!');
  console.log('Topics: aap-3-14 through aap-3-18, csn-4-1 through csn-4-3');
  console.log('Total: 200 questions');
}

fixAllQuestions()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
