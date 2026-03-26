/**
 * Extra Questions for Big Idea 1: Creative Development
 * Total: 25 questions across all topics
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const extraQuestions = {
  'crd-1-1': [
    {
      text: 'A software company is developing a new navigation app and decides to use crowdsourcing to gather real-time traffic data from users. Which of the following is the primary benefit of this approach?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It eliminates the need for any internal testing by the company.' },
        { id: 'b', text: 'It provides a more comprehensive and up-to-date data set than the company could collect on its own.' },
        { id: 'c', text: 'It guarantees that the app will never have any technical glitches.' },
        { id: 'd', text: 'It allows the company to avoid paying for any server infrastructure.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Crowdsourcing leverages a large number of users to provide data that would be difficult or impossible for a single entity to collect manually.'
    },
    {
      text: 'When developing a facial recognition algorithm, a team includes developers from various ethnic backgrounds and age groups. Why is this diversity MOST beneficial for the innovation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It ensures the code is written in multiple programming languages.' },
        { id: 'b', text: 'It reduces the total cost of development.' },
        { id: 'c', text: 'It helps identify and reduce potential biases in how the algorithm performs for different users.' },
        { id: 'd', text: 'It makes the program run faster on different types of hardware.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Diverse perspectives help identify biases that might otherwise go unnoticed, leading to more equitable and effective computing innovations.'
    },
    {
      text: 'A development team uses a version control system (like Git) while working on a shared codebase. Which of the following are benefits of this practice? Select TWO answers.',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'It allows multiple developers to work on the same file simultaneously and merge their changes.' },
        { id: 'b', text: 'It automatically fixes logic errors in the code before they are committed.' },
        { id: 'c', text: 'It maintains a history of changes, allowing the team to revert to previous versions if needed.' },
        { id: 'd', text: 'It eliminates the need for writing documentation for the program.' }
      ],
      correctAnswers: ['a', 'c'],
      explanation: 'Version control systems facilitate collaboration by managing concurrent changes and providing a reliable history of the project.'
    },
    {
      text: 'Which of the following best describes the role of "active listening" during a team brainstorming session for a new app feature?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Recording the meeting so it can be listened to later.' },
        { id: 'b', text: 'Making sure your own ideas are heard above everyone else\'s.' },
        { id: 'c', text: 'Focusing fully on what is being said and asking clarifying questions to ensure understanding.' },
        { id: 'd', text: 'Only listening to the team leader and ignoring other members.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Active listening is a critical interpersonal skill in collaboration that ensures all perspectives are understood and valued.'
    },
    {
      text: 'A team is using an "Agile" development process and holds brief daily "stand-up" meetings. What is the primary purpose of these meetings?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To give a long, detailed presentation on new technologies.' },
        { id: 'b', text: 'To quickly share progress, identify obstacles, and align on the day\'s goals.' },
        { id: 'c', text: 'To socialise and avoid working on the codebase.' },
        { id: 'd', text: 'To allow the manager to assign all tasks for the next month.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Daily stand-ups are designed to facilitate quick communication and keep the team unblocked and aligned.'
    },
    {
      text: 'How can online collaborative tools (like shared documents or virtual whiteboards) improve the creative development process?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'By replacing the need for an iterative design process.' },
        { id: 'b', text: 'By allowing team members in different locations to contribute ideas and feedback in real-time.' },
        { id: 'c', text: 'By automatically generating the final code from the whiteboard sketches.' },
        { id: 'd', text: 'By ensuring that no disagreements ever occur between team members.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Online tools bridge geographical gaps, enabling diverse teams to collaborate effectively regardless of location.'
    }
  ],
  'crd-1-2': [
    {
      text: 'Which of the following best distinguishes the "purpose" of a computing innovation from its "function"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Purpose is how the code works; function is why it was created.' },
        { id: 'b', text: 'Purpose is the problem it solves or the goal it achieves; function is the internal process it follows.' },
        { id: 'c', text: 'They are the same thing and can be used interchangeably.' },
        { id: 'd', text: 'Purpose describes the inputs; function describes the outputs.' }
      ],
      correctAnswers: ['b'],
      explanation: 'The purpose is the "why" (e.g., to help people find lost keys), while the function is the "how" (e.g., using Bluetooth to track a signal).'
    },
    {
      text: 'A smart fitness tracker monitors a user\'s heart rate and steps taken throughout the day. At the end of the day, it displays a summary and sends a notification if the user met their goal. Which of the following is an OUTPUT of this system?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The user\'s physical movement (steps).' },
        { id: 'b', text: 'The heart rate sensor data.' },
        { id: 'c', text: 'The notification displayed on the screen.' },
        { id: 'd', text: 'The user\'s age and weight settings.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Output is the data or action produced by the program, such as the notification or the summary display.'
    },
    {
      text: 'What is the primary purpose of a "High-Level Language" (like Python or Java) in the context of creative development?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To make the computer run as fast as possible.' },
        { id: 'b', text: 'To allow humans to write programs using English-like keywords and structures that are easier to understand.' },
        { id: 'c', text: 'To eliminate the need for any hardware components.' },
        { id: 'd', text: 'To ensure that the program can only be run on one specific type of computer.' }
      ],
      correctAnswers: ['b'],
      explanation: 'High-level languages abstract away complex hardware details, allowing developers to focus on logic and creativity.'
    },
    {
      text: 'A developer is building an app that suggests recipes based on the ingredients a user has in their fridge. Which of the following would be the MOST likely inputs for this program? Select TWO answers.',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'A list of ingredient names entered by the user.' },
        { id: 'b', text: 'The time it takes to cook the meal (output).' },
        { id: 'c', text: 'A photo of the inside of the fridge taken by the user.' },
        { id: 'd', text: 'The final nutritional value of the recipe.' }
      ],
      correctAnswers: ['a', 'c'],
      explanation: 'Inputs are the raw data the program receives (text list or photo) to process into suggestions.'
    },
    {
      text: 'Consider a video streaming service. Which of the following describes a FUNCTION of the program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To provide entertainment to people during their free time.' },
        { id: 'b', text: 'To allow users to watch movies without going to a theater.' },
        { id: 'c', text: 'The algorithm that compresses video data for faster transmission over the internet.' },
        { id: 'd', text: 'To help independent filmmakers reach a wider audience.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Compression is a technical function (how the program works), while the other options describe the broader purpose.'
    },
    {
      text: 'An automated irrigation system uses soil moisture sensors to decide when to water plants. What is the "state" or "condition" the program checks to produce an output?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The amount of water in the tank.' },
        { id: 'b', text: 'The current soil moisture level compared to a pre-set threshold.' },
        { id: 'c', text: 'The color of the plants.' },
        { id: 'd', text: 'The cost of the water used.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Programs often function by comparing input data (moisture levels) against conditions to determine what output (watering) is needed.'
    }
  ],
  'crd-1-3': [
    {
      text: 'A developer creates a "Minimum Viable Product" (MVP) of a new social media app. What is the primary advantage of this approach in the design process?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It ensures the app is perfect and feature-complete before any user sees it.' },
        { id: 'b', text: 'It allows the developer to get feedback on core features early and iterate based on user needs.' },
        { id: 'c', text: 'It prevents other companies from copying the idea.' },
        { id: 'd', text: 'It eliminates the need for any further development after the MVP release.' }
      ],
      correctAnswers: ['b'],
      explanation: 'An MVP focuses on essential features to test a concept and gather user feedback for future iterations.'
    },
    {
      text: 'Why do designers often create "User Personas" (fictional characters representing different user types) before building a program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To have someone to blame if the program fails.' },
        { id: 'b', text: 'To help the team empathize with users and design features that meet their specific needs and goals.' },
        { id: 'c', text: 'To increase the marketing budget of the project.' },
        { id: 'd', text: 'To replace the need for actual user testing.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Personas guide the design process by keeping the focus on the actual needs, behaviors, and goals of the target audience.'
    },
    {
      text: 'Which of the following is an example of an "incremental" development process?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Writing the entire program code in one session and then testing it once.' },
        { id: 'b', text: 'Building and testing one small feature at a time, then adding it to the existing program.' },
        { id: 'c', text: 'Hiring 100 developers to work on different parts of the code without talking to each other.' },
        { id: 'd', text: 'Deleting the entire project and starting over every week.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Incremental development builds the program in small, manageable pieces, making it easier to test and refine as you go.'
    },
    {
      text: 'A developer is writing documentation for a complex algorithm. Who is the PRIMARY audience for this documentation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The end-user who will be using the app interface.' },
        { id: 'b', text: 'The computer processor that will execute the code.' },
        { id: 'c', text: 'Other developers (or the original developer in the future) who may need to maintain or update the code.' },
        { id: 'd', text: 'The government agency that regulates software.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Technical documentation is essential for ensuring that code is maintainable, readable, and understandable by humans.'
    },
    {
      text: 'When designing a user interface for a mobile app, which factor is MOST important for ensuring accessibility?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using the most expensive graphics possible.' },
        { id: 'b', text: 'Ensuring high contrast between text and background for users with visual impairments.' },
        { id: 'c', text: 'Making sure the app only works on the latest smartphone models.' },
        { id: 'd', text: 'Adding as many buttons and menus as possible to the home screen.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Accessibility ensures that a program can be used by as many people as possible, including those with disabilities.'
    },
    {
      text: 'What is the benefit of using "Modular Design" when developing a large-scale software system?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It makes the final program file size much smaller.' },
        { id: 'b', text: 'It allows different parts of the system to be developed, tested, and updated independently.' },
        { id: 'c', text: 'It ensures that if one part of the code has a bug, the entire program will crash instantly.' },
        { id: 'd', text: 'It eliminates the need for using variables in the code.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Modularity breaks a complex system into independent pieces (modules), improving manageability and reducing the impact of changes.'
    }
  ],
  'crd-1-4': [
    {
      text: 'A student writes a program to calculate the total price of items in a shopping cart. The program runs without crashing, but the total is always 10% lower than expected. What type of error is this?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Syntax Error' },
        { id: 'b', text: 'Logic Error' },
        { id: 'c', text: 'Runtime Error' },
        { id: 'd', text: 'Overflow Error' }
      ],
      correctAnswers: ['b'],
      explanation: 'A logic error occurs when the program runs but produces incorrect results because the underlying algorithm is flawed.'
    },
    {
      text: 'Which of the following practices is MOST likely to help a developer find a logic error in a nested loop?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Adding more loops to the program.' },
        { id: 'b', text: 'Changing the names of all the variables to single letters.' },
        { id: 'c', text: 'Inserting "print" or "display" statements to track the values of loop variables at each step.' },
        { id: 'd', text: 'Re-typing the entire program from scratch without looking at the original.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Tracing the values of variables helps the developer see exactly where the logic diverges from the expected behavior.'
    },
    {
      text: 'A program is supposed to print the numbers from 1 to 10. Instead, it prints the numbers from 1 to 9 and then stops. This is an example of what common error?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Infinite Loop' },
        { id: 'b', text: 'Off-by-one error' },
        { id: 'c', text: 'Syntax error' },
        { id: 'd', text: 'Division by zero' }
      ],
      correctAnswers: ['b'],
      explanation: 'Off-by-one errors are a type of logic error where a loop or calculation iterates one time too many or too few.'
    },
    {
      text: 'When testing a program that accepts a user\'s age as input (which must be between 1 and 120), which values would be considered "boundary cases" or "edge cases"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '25, 50, and 75' },
        { id: 'b', text: '0, 1, 120, and 121' },
        { id: 'c', text: 'Only the number 50' },
        { id: 'd', text: 'Any number between 1 and 120' }
      ],
      correctAnswers: ['b'],
      explanation: 'Boundary cases test the minimum and maximum allowed values, as well as values just outside the allowed range, to ensure proper validation.'
    },
    {
      text: 'What is the purpose of a "try-catch" or error-handling block in a program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To prevent the program from ever having any bugs.' },
        { id: 'b', text: 'To allow the program to respond gracefully to runtime errors instead of crashing.' },
        { id: 'c', text: 'To make the code run twice as fast.' },
        { id: 'd', text: 'To automatically rewrite the code to fix syntax errors.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Error handling allows a program to "catch" problems (like a missing file or a bad network connection) and provide an alternative action or message.'
    },
    {
      text: 'A developer uses a library of code written by someone else to add a "map" feature to their app. Which of the following is the most ethical and professional action to take?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Pretend they wrote the code themselves to impress their boss.' },
        { id: 'b', text: 'Acknowledge the use of the library in the program\'s documentation or "about" section.' },
        { id: 'c', text: 'Delete the library and try to rewrite it from scratch without any help.' },
        { id: 'd', text: 'Only use the code if the original author never finds out.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Properly attributing and acknowledging code from other sources is a fundamental principle of professional and ethical software development.'
    },
    {
      text: 'Consider the following pseudo-code:\n\nsum <- 0\ncounter <- 1\nREPEAT UNTIL (counter > 5)\n{\n  sum <- sum + counter\n}\nDISPLAY(sum)\n\nWhat will happen when this code is executed?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It will display the number 15.' },
        { id: 'b', text: 'It will display the number 5.' },
        { id: 'c', text: 'It will enter an infinite loop because "counter" is never updated.' },
        { id: 'd', text: 'It will cause a syntax error.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Because the "counter" variable is never incremented inside the loop, the condition "counter > 5" will never be true, resulting in an infinite loop.'
    }
  ]
};

async function seedExtraQuestions() {
  console.log('Starting to seed extra questions for Big Idea 1...');

  try {
    let totalAdded = 0;

    for (const topicId in extraQuestions) {
      const questions = extraQuestions[topicId];
      
      // Get current number of questions for this topic to avoid ID collisions
      const snapshot = await db.collection('questions')
        .where('topicId', '==', topicId)
        .get();
      
      let nextNum = snapshot.size + 1;

      for (const q of questions) {
        const questionId = `${topicId}-extra-q${nextNum}`;

        await db.collection('questions').doc(questionId).set({
          ...q,
          id: questionId,
          topicId: topicId,
          bigIdeaId: 'big-idea-1',
          isCustom: false,
          addedBy: 'system-extra',
          addedAt: new Date(),
          deactivated: false,
          createdAt: new Date(),
          updatedAt: new Date()
        });

        nextNum++;
        totalAdded++;
      }
      console.log(`Added ${questions.length} extra questions for topic ${topicId}`);
    }

    console.log(`Successfully added ${totalAdded} extra questions!`);
  } catch (error) {
    console.error('Error seeding extra questions:', error);
    process.exit(1);
  }
}

seedExtraQuestions()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
