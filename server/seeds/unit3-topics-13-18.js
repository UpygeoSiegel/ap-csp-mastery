/**
 * Extra Questions for Unit 3: Topics 3.13 - 3.18
 * 10 hard questions per topic
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questions = {
  'topic-3.13': [ // Developing Procedures
    {
      text: 'Which of the following is a key advantage of using parameters in a procedure?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It allows the procedure to be used with different sets of data without rewriting the code.' },
        { id: 'b', text: 'It makes the procedure execute in less time.' },
        { id: 'c', text: 'It automatically removes any bugs from the procedure code.' },
        { id: 'd', text: 'It ensures that the procedure can only be called once.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Parameters provide flexibility, allowing the same logic to handle varying inputs.',
      difficulty: 'hard'
    },
    {
      text: 'A student is writing a procedure to calculate the surface area of a cube. What would be the MOST appropriate parameter for this procedure?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The length of one side of the cube.' },
        { id: 'b', text: 'The color of the cube.' },
        { id: 'c', text: 'The number of cubes in the program.' },
        { id: 'd', text: 'A list containing all the mathematical formulas ever written.' }
      ],
      correctAnswers: ['a'],
      explanation: 'The surface area depends directly on the side length (Area = 6 * side^2).',
      difficulty: 'hard'
    },
    {
      text: 'What is "procedural abstraction" used for?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To allow a programmer to use a procedure without knowing the specific details of how it works.' },
        { id: 'b', text: 'To make the code as complicated as possible.' },
        { id: 'c', text: 'To store data in a permanent file on the hard drive.' },
        { id: 'd', text: 'To connect the computer to the internet.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Abstraction focuses on what a procedure does, rather than how it does it.',
      difficulty: 'hard'
    },
    {
      text: 'When should a programmer consider creating a new procedure?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'When they find themselves writing the same block of code multiple times.' },
        { id: 'b', text: 'Only when they are working on a project with other people.' },
        { id: 'c', text: 'Only if the program has more than 1,000 lines of code.' },
        { id: 'd', text: 'Never; procedures make programs harder to read.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Procedures are the primary tool for reducing redundancy and improving modularity.',
      difficulty: 'hard'
    },
    {
      text: 'What is the "scope" of a local variable defined inside a procedure?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It can only be accessed and used within that specific procedure.' },
        { id: 'b', text: 'It can be used anywhere in the entire program.' },
        { id: 'c', text: 'It is deleted as soon as the computer is turned off.' },
        { id: 'd', text: 'It can only be used by the procedure that calls this one.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Local variables are encapsulated within the procedure to prevent unintended side effects elsewhere.',
      difficulty: 'hard'
    },
    {
      text: 'Consider:\n\n```\nPROCEDURE mystery(n)\n{\n    IF (n <= 1) { RETURN 1 }\n    ELSE { RETURN n * mystery(n - 1) }\n}\n```\nWhat is `mystery(4)`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '24' },
        { id: 'b', text: '10' },
        { id: 'c', text: '12' },
        { id: 'd', text: '4' }
      ],
      correctAnswers: ['a'],
      explanation: 'This is a factorial calculation: 4 * 3 * 2 * 1 = 24.',
      difficulty: 'hard'
    },
    {
      text: 'Which part of a procedure header defines the data types it expects to receive?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The parameter list' },
        { id: 'b', text: 'The procedure name' },
        { id: 'c', text: 'The RETURN statement' },
        { id: 'd', text: 'The comments above the procedure' }
      ],
      correctAnswers: ['a'],
      explanation: 'Parameters define the "inputs" the procedure is designed to handle.',
      difficulty: 'hard'
    },
    {
      text: 'Can a procedure return more than one value in AP CSP pseudocode?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'No, a procedure can only return a single value (or a single list/collection).' },
        { id: 'b', text: 'Yes, using multiple RETURN statements.' },
        { id: 'c', text: 'Yes, by listing the values separated by commas.' },
        { id: 'd', text: 'Only if it is a mathematical procedure.' }
      ],
      correctAnswers: ['a'],
      explanation: 'A RETURN statement exits the procedure immediately with one result.',
      difficulty: 'hard'
    },
    {
      text: 'What happens to local variables when a procedure finishes executing?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'They are removed from memory.' },
        { id: 'b', text: 'They are saved to the hard drive.' },
        { id: 'c', text: 'They become global variables.' },
        { id: 'd', text: 'They are passed back to the caller automatically.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Local variables only exist for the duration of the procedure call.',
      difficulty: 'hard'
    },
    {
      text: 'True or False: Using procedures makes it easier to test and debug individual parts of a program.',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
        { id: 'c', text: 'Only for large programs' },
        { id: 'd', text: 'Only for programs written in JavaScript' }
      ],
      correctAnswers: ['a'],
      explanation: 'Modular code allows for "unit testing" of specific logic blocks.',
      difficulty: 'hard'
    }
  ],
  'topic-3.14': [ // Libraries
    {
      text: 'What is a "software library"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A collection of pre-written procedures that can be used by other programs.' },
        { id: 'b', text: 'A building where you can go to read books about coding.' },
        { id: 'c', text: 'A type of computer hardware used for storage.' },
        { id: 'd', text: 'A list of all the users of a specific app.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Libraries provide reusable functionality so developers don\'t have to "reinvent the wheel."',
      difficulty: 'hard'
    },
    {
      text: 'What is an "API" (Application Programming Interface) in the context of libraries?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A set of rules and specifications that define how one program can interact with another (or with a library).' },
        { id: 'b', text: 'A secret code used to hack into websites.' },
        { id: 'c', text: 'The physical cable that connects two computers.' },
        { id: 'd', text: 'The screen where the code is displayed.' }
      ],
      correctAnswers: ['a'],
      explanation: 'The API acts as the "manual" or "contract" for using the library.',
      difficulty: 'hard'
    },
    {
      text: 'What is the primary benefit of using a library in your project?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It saves time and effort by allowing you to reuse high-quality, tested code.' },
        { id: 'b', text: 'It makes your program impossible to hack.' },
        { id: 'c', text: 'It reduces the total number of files in your project to one.' },
        { id: 'd', text: 'It automatically translates your code into different languages.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Libraries leverage the work of other experts to simplify development.',
      difficulty: 'hard'
    },
    {
      text: 'When using a library procedure, what information is typically found in the documentation? Select TWO answers.',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'The name of the procedure and the parameters it expects.' },
        { id: 'b', text: 'The specific lines of code inside the procedure.' },
        { id: 'c', text: 'What the procedure returns or what action it performs.' },
        { id: 'd', text: 'The home address of the library\'s author.' }
      ],
      correctAnswers: ['a', 'c'],
      explanation: 'Documentation focuses on the "what" and "how to use," not the "how it works internally" (abstraction).',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is an example of using a library?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using a `Math.random()` function to generate a random number.' },
        { id: 'b', text: 'Writing your own loop to add numbers.' },
        { id: 'c', text: 'Assigning a value to a local variable.' },
        { id: 'd', text: 'Restarting your computer.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Math libraries are built into most languages to provide common functionality.',
      difficulty: 'hard'
    },
    {
      text: 'How does using libraries support the collaborative nature of software development?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It allows developers to share their work and build upon the innovations of others.' },
        { id: 'b', text: 'It prevents other people from seeing your code.' },
        { id: 'c', text: 'It ensures that every programmer writes every line of code themselves.' },
        { id: 'd', text: 'It eliminates the need for team meetings.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Open-source and shared libraries are cornerstones of modern tech ecosystems.',
      difficulty: 'hard'
    },
    {
      text: 'What is a "dependency" in software development?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A library or other software component that your program requires to function.' },
        { id: 'b', text: 'A variable that depends on another variable.' },
        { id: 'c', text: 'A user who uses your app every day.' },
        { id: 'd', text: 'A bug that only happens on weekends.' }
      ],
      correctAnswers: ['a'],
      explanation: 'If your program uses a library, it "depends" on that library being present.',
      difficulty: 'hard'
    },
    {
      text: 'True or False: You must understand the internal code of a library to use its procedures effectively.',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'False' },
        { id: 'b', text: 'True' },
        { id: 'c', text: 'Only if the library is written in Python' },
        { id: 'd', text: 'Only if you want the program to be fast' }
      ],
      correctAnswers: ['a'],
      explanation: 'Abstraction means you only need to know the API, not the implementation.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following describes "modular" software design?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Breaking a system into independent, interchangeable parts (modules).' },
        { id: 'b', text: 'Writing all code in one giant file.' },
        { id: 'c', text: 'Using only one type of loop in the entire program.' },
        { id: 'd', text: 'Making the user interface look like a grid.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Modularity makes large systems manageable, and libraries are often structured as modules.',
      difficulty: 'hard'
    },
    {
      text: 'What is the main risk of using a third-party library?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The library might have security vulnerabilities or bugs that you cannot easily fix.' },
        { id: 'b', text: 'The library will make your computer explode.' },
        { id: 'c', text: 'The library will steal your physical keyboard.' },
        { id: 'd', text: 'There are no risks to using libraries.' }
      ],
      correctAnswers: ['a'],
      explanation: 'You are trusting the library author\'s code quality and security practices.',
      difficulty: 'hard'
    }
  ],
  'topic-3.15': [ // Random Values
    {
      text: 'What is the range of possible values for `RANDOM(1, 10)`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Any integer from 1 to 10 inclusive.' },
        { id: 'b', text: 'Any integer from 1 to 9.' },
        { id: 'c', text: 'Any decimal number between 1.0 and 10.0.' },
        { id: 'd', text: 'Only the numbers 1 and 10.' }
      ],
      correctAnswers: ['a'],
      explanation: 'In AP CSP, RANDOM(a, b) includes both endpoints.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following code segments will simulate rolling a standard 6-sided die?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'RANDOM(1, 6)' },
        { id: 'b', text: 'RANDOM(0, 6)' },
        { id: 'c', text: 'RANDOM(1, 5)' },
        { id: 'd', text: 'RANDOM(1, 7)' }
      ],
      correctAnswers: ['a'],
      explanation: 'A die has faces 1, 2, 3, 4, 5, and 6.',
      difficulty: 'hard'
    },
    {
      text: 'How would you generate a random EVEN number between 2 and 10 inclusive?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'RANDOM(1, 5) * 2' },
        { id: 'b', text: 'RANDOM(2, 10)' },
        { id: 'c', text: 'RANDOM(1, 10) / 2' },
        { id: 'd', text: 'RANDOM(2, 5) * 2' }
      ],
      correctAnswers: ['a'],
      explanation: 'RANDOM(1, 5) gives 1, 2, 3, 4, or 5. Multiplying by 2 gives 2, 4, 6, 8, 10.',
      difficulty: 'hard'
    },
    {
      text: 'What is the probability of `RANDOM(1, 4)` returning the value 3?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '25%' },
        { id: 'b', text: '50%' },
        { id: 'c', text: '33%' },
        { id: 'd', text: '10%' }
      ],
      correctAnswers: ['a'],
      explanation: 'There are 4 possible outcomes (1, 2, 3, 4), each equally likely. 1/4 = 0.25.',
      difficulty: 'hard'
    },
    {
      text: 'Which expression generates a random number from this set: `{10, 20, 30, 40}`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'RANDOM(1, 4) * 10' },
        { id: 'b', text: 'RANDOM(10, 40)' },
        { id: 'c', text: 'RANDOM(1, 40) / 10' },
        { id: 'd', text: 'RANDOM(0, 3) * 10' }
      ],
      correctAnswers: ['a'],
      explanation: '1*10=10, 2*10=20, 3*10=30, 4*10=40.',
      difficulty: 'hard'
    },
    {
      text: 'In a game, a player wins if they roll a 10 on a 10-sided die. Which code segment correctly checks this?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'IF (RANDOM(1, 10) = 10) { DISPLAY(\"Win\") }' },
        { id: 'b', text: 'IF (RANDOM(1, 10) > 10) { DISPLAY(\"Win\") }' },
        { id: 'c', text: 'IF (RANDOM(0, 10) = 10) { DISPLAY(\"Win\") }' },
        { id: 'd', text: 'IF (RANDOM(1, 9) = 10) { DISPLAY(\"Win\") }' }
      ],
      correctAnswers: ['a'],
      explanation: 'The condition must match exactly one of the possible random outcomes.',
      difficulty: 'hard'
    },
    {
      text: 'Consider:\n\n```\nx ← RANDOM(1, 5)\ny ← RANDOM(1, 5)\n```\nWhat is the MAXIMUM possible value of `x + y`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '10' },
        { id: 'b', text: '5' },
        { id: 'c', text: '25' },
        { id: 'd', text: '11' }
      ],
      correctAnswers: ['a'],
      explanation: 'The maximum for each is 5. 5 + 5 = 10.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following can be used to simulate a coin flip (Heads or Tails)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'RANDOM(0, 1)' },
        { id: 'b', text: 'RANDOM(1, 2)' },
        { id: 'c', text: 'Both a and b' },
        { id: 'd', text: 'Neither a nor b' }
      ],
      correctAnswers: ['c'],
      explanation: 'Any call with exactly two outcomes can represent a coin flip.',
      difficulty: 'hard'
    },
    {
      text: 'What is the result of `RANDOM(5, 5)`?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Always 5' },
        { id: 'b', text: 'Always 0' },
        { id: 'c', text: 'A random number between 0 and 5' },
        { id: 'd', text: 'An error' }
      ],
      correctAnswers: ['a'],
      explanation: 'The range start and end are both 5, so 5 is the only possible outcome.',
      difficulty: 'hard'
    },
    {
      text: 'True or False: Standard computer random number generators are usually "pseudo-random," meaning they use a mathematical formula to simulate randomness.',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'True' },
        { id: 'b', text: 'False' },
        { id: 'c', text: 'Only on Windows' },
        { id: 'd', text: 'Only for dice games' }
      ],
      correctAnswers: ['a'],
      explanation: 'True randomness is difficult for computers to achieve without external physical sensors.',
      difficulty: 'hard'
    }
  ],
  'topic-3.16': [ // Simulations
    {
      text: 'Why do scientists use computer simulations instead of real-world experiments in some cases?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The real-world experiment might be too dangerous, expensive, or take too long.' },
        { id: 'b', text: 'Simulations are always 100% accurate and never have errors.' },
        { id: 'c', text: 'Simulations don\'t require any mathematical models.' },
        { id: 'd', text: 'Computers are smarter than scientists.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Simulations provide a safe and efficient way to test "what if" scenarios.',
      difficulty: 'hard'
    },
    {
      text: 'What is a "model" in the context of a simulation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A simplified representation of a real-world system or phenomenon.' },
        { id: 'b', text: 'A 3D printed object of the computer.' },
        { id: 'c', text: 'The person who presents the simulation results.' },
        { id: 'd', text: 'The most expensive computer available.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Models strip away unnecessary details to focus on specific behaviors.',
      difficulty: 'hard'
    },
    {
      text: 'What is a key limitation of any computer simulation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It is only as accurate as the assumptions and data used to create the underlying model.' },
        { id: 'b', text: 'It can only run for a maximum of 10 minutes.' },
        { id: 'c', text: 'It cannot use random numbers.' },
        { id: 'd', text: 'It must be written in a specific language like C++.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Simulations are abstractions; if the model is flawed, the results will be too.',
      difficulty: 'hard'
    },
    {
      text: 'A simulation is used to predict the path of a hurricane. Which of the following would likely be an input to this simulation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Current wind speeds and ocean temperatures.' },
        { id: 'b', text: 'The names of the people living in the hurricane\'s path.' },
        { id: 'c', text: 'The cost of the hurricane insurance.' },
        { id: 'd', text: 'The color of the satellite images.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Inputs should be physical variables that affect the system being modeled.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is a "high-level" abstraction in a flight simulator?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The concept of "lift" acting on the wings.' },
        { id: 'b', text: 'The specific voltage of every wire in the cockpit.' },
        { id: 'c', text: 'The individual atoms in the air.' },
        { id: 'd', text: 'The brand of the computer monitor.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lift is a physics concept that abstracts away the complex air-molecule interactions.',
      difficulty: 'hard'
    },
    {
      text: 'How can randomness be used in a simulation of traffic flow?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To represent the varied behavior of individual drivers (e.g., speed, braking time).' },
        { id: 'b', text: 'To make the simulation code harder to write.' },
        { id: 'c', text: 'To ensure the simulation always produces the exact same result.' },
        { id: 'd', text: 'Randomness should never be used in scientific simulations.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Stochastic (random) elements help capture real-world variability.',
      difficulty: 'hard'
    },
    {
      text: 'What does it mean to "validate" a simulation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Comparing the simulation\'s output to known real-world data to check for accuracy.' },
        { id: 'b', text: 'Checking the code for syntax errors.' },
        { id: 'c', text: 'Buying a license for the simulation software.' },
        { id: 'd', text: 'Making the simulation run faster.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Validation ensures the model actually reflects reality.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is LEAST likely to be simulated?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The taste of a specific brand of soda.' },
        { id: 'b', text: 'The spread of a virus through a population.' },
        { id: 'c', text: 'The structural integrity of a new bridge design.' },
        { id: 'd', text: 'The impact of a comet hitting the Earth.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Subjective experiences (like taste) are much harder to model mathematically than physical systems.',
      difficulty: 'hard'
    },
    {
      text: 'What happens to the complexity of a simulation as more variables are added to the model?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It increases, often requiring more computing power.' },
        { id: 'b', text: 'It decreases, making the simulation faster.' },
        { id: 'c', text: 'It stays exactly the same.' },
        { id: 'd', text: 'The simulation will always crash.' }
      ],
      correctAnswers: ['a'],
      explanation: 'More variables mean more calculations per step.',
      difficulty: 'hard'
    },
    {
      text: 'Can a simulation be used to test a hypothesis?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Yes, by observing how the simulated system reacts to different conditions.' },
        { id: 'b', text: 'No, hypotheses can only be tested in the real world.' },
        { id: 'c', text: 'Only if the simulation is written in Python.' },
        { id: 'd', text: 'Only if the results are approved by the government.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Simulations are powerful tools for the scientific method.',
      difficulty: 'hard'
    }
  ],
  'topic-3.17': [ // Algorithmic Efficiency
    {
      text: 'Which of the following best describes an "unreasonable time" algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An algorithm whose execution time grows exponentially or factorially as the input size increases.' },
        { id: 'b', text: 'An algorithm that takes more than 10 seconds to run.' },
        { id: 'c', text: 'An algorithm that never produces a result.' },
        { id: 'd', text: 'An algorithm that only runs on very old computers.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Unreasonable time (like 2^n) becomes practically impossible to execute even for moderate n.',
      difficulty: 'hard'
    },
    {
      text: 'A programmer has two algorithms to sort a list. Algorithm A is O(N^2) and Algorithm B is O(N log N). Which one is more efficient for very large lists?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Algorithm B' },
        { id: 'b', text: 'Algorithm A' },
        { id: 'c', text: 'They are equally efficient.' },
        { id: 'd', text: 'It depends on the values in the list.' }
      ],
      correctAnswers: ['a'],
      explanation: 'As N grows, N log N grows much slower than N^2.',
      difficulty: 'hard'
    },
    {
      text: 'What is a "heuristic" algorithm?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An algorithm that provides a "good enough" solution to a problem when an exact solution is too slow to find.' },
        { id: 'b', text: 'A perfectly accurate algorithm that always finds the best solution.' },
        { id: 'c', text: 'An algorithm that only works on even numbers.' },
        { id: 'd', text: 'A type of computer virus.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Heuristics trade accuracy for speed in difficult optimization problems.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following growth rates is considered "polynomial time"? Select TWO answers.',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Constant: O(1)' },
        { id: 'b', text: 'Linear: O(N)' },
        { id: 'c', text: 'Exponential: O(2^N)' },
        { id: 'd', text: 'Factorial: O(N!)' }
      ],
      correctAnswers: ['a', 'b'],
      explanation: 'O(1), O(N), O(N^2), etc., are all considered polynomial (reasonable) time.',
      difficulty: 'hard'
    },
    {
      text: 'What is the "Traveling Salesperson Problem" an example of?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An optimization problem that is computationally difficult (unreasonable time for an exact solution).' },
        { id: 'b', text: 'A simple linear search problem.' },
        { id: 'c', text: 'An undecidable problem.' },
        { id: 'd', text: 'A problem that can be solved in O(1) time.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Finding the shortest path between many cities is an NP-hard problem.',
      difficulty: 'hard'
    },
    {
      text: 'If an algorithm takes 10 seconds for 10 items, and 100 seconds for 20 items, what is its likely efficiency?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Exponential (doubling the input increases time by much more than double).' },
        { id: 'b', text: 'Linear (doubling input doubles time).' },
        { id: 'c', text: 'Constant (time stays the same).' },
        { id: 'd', text: 'Logarithmic.' }
      ],
      correctAnswers: ['a'],
      explanation: 'This non-linear growth indicates an unreasonable time complexity.',
      difficulty: 'hard'
    },
    {
      text: 'Can an unreasonable time algorithm be used in practice?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only for very small input sizes.' },
        { id: 'b', text: 'No, never.' },
        { id: 'c', text: 'Only if you have a supercomputer.' },
        { id: 'd', text: 'Yes, for any input size.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Even 2^n is fast if n=2, but impossible if n=100.',
      difficulty: 'hard'
    },
    {
      text: 'What does "constant time" O(1) mean?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The execution time does not depend on the size of the input.' },
        { id: 'b', text: 'The execution time is always exactly 1 second.' },
        { id: 'c', text: 'The algorithm only runs once.' },
        { id: 'd', text: 'The algorithm is very slow.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Examples include accessing a variable or an item at a specific index.',
      difficulty: 'hard'
    },
    {
      text: 'Which efficiency is generally the slowest for large N?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'O(2^N)' },
        { id: 'b', text: 'O(N^2)' },
        { id: 'c', text: 'O(N log N)' },
        { id: 'd', text: 'O(N)' }
      ],
      correctAnswers: ['a'],
      explanation: 'Exponential growth eventually overtakes any polynomial growth.',
      difficulty: 'hard'
    },
    {
      text: 'True or False: Improving the hardware (faster CPU) can turn an unreasonable algorithm into a reasonable one for large inputs.',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'False (The growth rate will still eventually overwhelm any hardware improvement).' },
        { id: 'b', text: 'True' },
        { id: 'c', text: 'Only if you use more RAM' },
        { id: 'd', text: 'Only if the computer is liquid-cooled' }
      ],
      correctAnswers: ['a'],
      explanation: 'The mathematical growth is the limiting factor, not the hardware speed.',
      difficulty: 'hard'
    }
  ],
  'topic-3.18': [ // Undecidable Problems
    {
      text: 'What is an "undecidable problem"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A problem for which no algorithm can be created that always provides a correct yes-or-no answer.' },
        { id: 'b', text: 'A problem that is too difficult for students to solve.' },
        { id: 'c', text: 'A problem that has more than two possible answers.' },
        { id: 'd', text: 'A problem that can only be solved by humans.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Undecidability is a fundamental limit of computation.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is a famous example of an undecidable problem?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The Halting Problem (determining if an arbitrary program will eventually stop or run forever).' },
        { id: 'b', text: 'Sorting a list of names.' },
        { id: 'c', text: 'Finding the shortest path between two cities.' },
        { id: 'd', text: 'Calculating the digits of Pi.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Alan Turing proved that no such general algorithm exists.',
      difficulty: 'hard'
    },
    {
      text: 'If a problem is undecidable, does that mean it is impossible to solve for ANY input?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'No, it just means there is no single algorithm that works correctly for ALL possible inputs.' },
        { id: 'b', text: 'Yes, it is completely impossible.' },
        { id: 'c', text: 'No, it just means humans haven\'t found the algorithm yet.' },
        { id: 'd', text: 'It depends on the programming language.' }
      ],
      correctAnswers: ['a'],
      explanation: 'You can solve specific cases, but not the general problem.',
      difficulty: 'hard'
    },
    {
      text: 'What is the difference between an "unreasonable" problem and an "undecidable" problem?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Unreasonable problems have algorithms but they are very slow; undecidable problems have no algorithm at all.' },
        { id: 'b', text: 'They are two names for the same thing.' },
        { id: 'c', text: 'Unreasonable problems are solved by computers; undecidable by humans.' },
        { id: 'd', text: 'Unreasonable problems are always yes-or-no.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Efficiency vs. Computability.',
      difficulty: 'hard'
    },
    {
      text: 'Why is the Halting Problem significant in computer science?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It demonstrates that there are limits to what can be solved using algorithms.' },
        { id: 'b', text: 'It helps programmers write better loops.' },
        { id: 'c', text: 'It explains why computers sometimes crash.' },
        { id: 'd', text: 'It is the basis for all encryption algorithms.' }
      ],
      correctAnswers: ['a'],
      explanation: 'It is a foundational theoretical result.',
      difficulty: 'hard'
    },
    {
      text: 'Consider a problem: "Determine if this program will ever display the number 42." Is this problem decidable?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'No, this is a variation of the Halting Problem and is undecidable.' },
        { id: 'b', text: 'Yes, you can just run the program and see.' },
        { id: 'c', text: 'Yes, if the program is short enough.' },
        { id: 'd', text: 'Only if the program uses the number 42 in its code.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Determining any non-trivial property of program behavior is generally undecidable (Rice\'s Theorem).',
      difficulty: 'hard'
    },
    {
      text: 'True or False: If a problem is decidable, it must have a reasonable (polynomial) time algorithm.',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'False (It could be decidable but take an unreasonable amount of time).' },
        { id: 'b', text: 'True' },
        { id: 'c', text: 'Only if the input size is small' },
        { id: 'd', text: 'Only for search problems' }
      ],
      correctAnswers: ['a'],
      explanation: 'Decidability only requires *an* algorithm to exist, not a fast one.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following is NOT a characteristic of an undecidable problem?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It can be solved in O(N^2) time.' },
        { id: 'b', text: 'No algorithm exists for the general case.' },
        { id: 'c', text: 'It is a "yes-or-no" decision problem.' },
        { id: 'd', text: 'It is a fundamental concept in theoretical computer science.' }
      ],
      correctAnswers: ['a'],
      explanation: 'O(N^2) would mean it IS decidable and efficient.',
      difficulty: 'hard'
    },
    {
      text: 'What happens if you try to write an algorithm for an undecidable problem?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The algorithm will either be wrong for some inputs or will run forever on some inputs.' },
        { id: 'b', text: 'The computer will refuse to run the code.' },
        { id: 'c', text: 'The algorithm will be 100% correct but very slow.' },
        { id: 'd', text: 'You will win a Nobel Prize.' }
      ],
      correctAnswers: ['a'],
      explanation: 'You cannot satisfy both correctness and termination for all inputs.',
      difficulty: 'hard'
    },
    {
      text: 'Is "Determining if a specific number is prime" an undecidable problem?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'No, it is decidable (there are many algorithms to check for primality).' },
        { id: 'b', text: 'Yes, it is undecidable.' },
        { id: 'c', text: 'Only for very large numbers.' },
        { id: 'd', text: 'Only if the number is even.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Primality testing is a well-known decidable problem.',
      difficulty: 'hard'
    }
  ]
};

async function seedPart3() {
  console.log('Seeding Unit 3 Part 3...');
  let count = 0;
  for (const topicId in questions) {
    const topicQuestions = questions[topicId];
    for (const q of topicQuestions) {
      const qId = `${topicId}-extra-h-${count}`;
      await db.collection('questions').doc(qId).set({
        ...q,
        id: qId,
        topicId: topicId,
        bigIdeaId: 'big-idea-3',
        isCustom: false,
        addedBy: 'system-extra-hard',
        createdAt: new Date(),
        updatedAt: new Date(),
        deactivated: false
      });
      count++;
    }
    console.log(`Added 10 questions for ${topicId}`);
  }
  console.log('Part 3 complete!');
}

seedPart3()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
