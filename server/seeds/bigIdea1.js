/**
 * Seed script for Big Idea 1: Creative Development
 * Run with: node server/seeds/bigIdea1.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Use the same Firebase setup as the server
const { db } = require('../firebase');

// Verify we're using the correct project
if (process.env.FIREBASE_PROJECT_ID !== 'ap-csp-mastery') {
  console.error(`ERROR: Wrong project! Expected 'ap-csp-mastery' but got '${process.env.FIREBASE_PROJECT_ID}'`);
  console.error('Please update your .env file to use the correct project.');
  process.exit(1);
}

console.log(`Using project: ${process.env.FIREBASE_PROJECT_ID}`);

// Big Idea 1 structure
const bigIdea1 = {
  id: 'big-idea-1',
  name: 'Big Idea 1: Creative Development',
  shortName: 'Creative Development',
  description: 'Computing is a creative discipline that enables innovation through collaboration and iterative design.',
  order: 1,
  color: '#3B82F6' // Blue
};

// Sub-topics for Big Idea 1
const topics = [
  {
    id: 'crd-1-1',
    bigIdeaId: 'big-idea-1',
    name: '1.1 Collaboration',
    description: 'Effective collaboration produces computing innovations that reflect diverse perspectives.',
    order: 1,
    learningObjectives: [
      'CRD-1.A: Explain how computing innovations are improved through collaboration.',
      'CRD-1.B: Explain how computing innovations are developed by groups of people.',
      'CRD-1.C: Demonstrate effective interpersonal skills during collaboration.'
    ]
  },
  {
    id: 'crd-1-2',
    bigIdeaId: 'big-idea-1',
    name: '1.2 Program Function and Purpose',
    description: 'Programs are developed to satisfy user needs and to express creativity.',
    order: 2,
    learningObjectives: [
      'CRD-2.A: Describe the purpose of a computing innovation.',
      'CRD-2.B: Explain how a program or code segment functions.',
      'CRD-2.C: Identify input(s) to a program.',
      'CRD-2.D: Identify output(s) produced by a program.',
      'CRD-2.E: Develop a program using a development process.',
      'CRD-2.F: Design a program and its user interface.'
    ]
  },
  {
    id: 'crd-1-3',
    bigIdeaId: 'big-idea-1',
    name: '1.3 Program Design and Development',
    description: 'Developers use an iterative development process to create programs.',
    order: 3,
    learningObjectives: [
      'CRD-2.E: Develop a program using a development process.',
      'CRD-2.F: Design a program and its user interface.',
      'CRD-2.G: Describe the purpose of a code segment or program by writing documentation.'
    ]
  },
  {
    id: 'crd-1-4',
    bigIdeaId: 'big-idea-1',
    name: '1.4 Identifying and Correcting Errors',
    description: 'Testing and debugging are essential to developing correct programs.',
    order: 4,
    learningObjectives: [
      'CRD-2.H: Acknowledge code segments used from other sources.',
      'CRD-2.I: Identify errors in a program.',
      'CRD-2.J: Correct errors in a program.'
    ]
  }
];

// Questions for each topic (25 questions each)
const questionsData = {
  'crd-1-1': [
    // Collaboration Questions
    {
      text: 'Which of the following is a benefit of collaborating with others when developing a computing innovation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It eliminates the need for testing' },
        { id: 'b', text: 'It allows diverse perspectives to be incorporated' },
        { id: 'c', text: 'It guarantees the program will have no errors' },
        { id: 'd', text: 'It reduces the need for documentation' }
      ],
      correctAnswers: ['b'],
      explanation: 'Collaboration brings together people with different backgrounds, skills, and perspectives, leading to more creative and comprehensive solutions.'
    },
    {
      text: 'A team is developing a mobile app. Which collaborative practice would be MOST effective for ensuring all team members understand the project goals?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Having one person make all decisions' },
        { id: 'b', text: 'Regular team meetings to discuss progress and challenges' },
        { id: 'c', text: 'Working independently without communication' },
        { id: 'd', text: 'Only communicating through code comments' }
      ],
      correctAnswers: ['b'],
      explanation: 'Regular team meetings allow all members to share ideas, discuss challenges, and stay aligned on project goals.'
    },
    {
      text: 'What is pair programming?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Two programmers working on separate projects' },
        { id: 'b', text: 'Two programmers sharing one computer, with one typing and one reviewing' },
        { id: 'c', text: 'A programmer and a manager working together' },
        { id: 'd', text: 'Two computers connected to share code' }
      ],
      correctAnswers: ['b'],
      explanation: 'Pair programming involves two developers working together at one workstation. One writes code while the other reviews each line as it is typed.'
    },
    {
      text: 'Which of the following tools would be MOST useful for collaboration among team members working remotely?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Version control systems like Git' },
        { id: 'b', text: 'Video conferencing software' },
        { id: 'c', text: 'Shared document editors' },
        { id: 'd', text: 'A personal diary' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Version control, video conferencing, and shared documents all facilitate remote collaboration by enabling communication, code sharing, and document collaboration.'
    },
    {
      text: 'A development team consists of members from different countries. Which of the following is a potential BENEFIT of this diverse team?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Communication will be more difficult' },
        { id: 'b', text: 'The team will have different cultural perspectives that can improve the product' },
        { id: 'c', text: 'Time zone differences will slow development' },
        { id: 'd', text: 'Language barriers will prevent collaboration' }
      ],
      correctAnswers: ['b'],
      explanation: 'Diverse teams bring different cultural perspectives, which can lead to more innovative solutions that work for a broader audience.'
    },
    {
      text: 'Why is it important to have clear communication when collaborating on a computing project?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To ensure everyone understands their responsibilities and project goals' },
        { id: 'b', text: 'To avoid having meetings' },
        { id: 'c', text: 'To make sure only one person does all the work' },
        { id: 'd', text: 'To eliminate the need for documentation' }
      ],
      correctAnswers: ['a'],
      explanation: 'Clear communication ensures all team members understand what needs to be done, preventing misunderstandings and duplicated effort.'
    },
    {
      text: 'Which interpersonal skill is MOST important during a disagreement between team members about a design decision?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Insisting your idea is correct' },
        { id: 'b', text: 'Active listening and considering other viewpoints' },
        { id: 'c', text: 'Ignoring the disagreement' },
        { id: 'd', text: 'Making the decision without discussion' }
      ],
      correctAnswers: ['b'],
      explanation: 'Active listening and considering other viewpoints helps resolve disagreements constructively and may lead to better solutions.'
    },
    {
      text: 'A team member suggests an idea that differs from the original plan. What is the best response?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Reject it immediately to stay on schedule' },
        { id: 'b', text: 'Consider the idea and discuss its merits with the team' },
        { id: 'c', text: 'Ignore the suggestion' },
        { id: 'd', text: 'Tell them to work on it alone' }
      ],
      correctAnswers: ['b'],
      explanation: 'New ideas should be considered and discussed. They might improve the project, even if they differ from the original plan.'
    },
    {
      text: 'What is the primary purpose of code reviews in a collaborative development environment?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To criticize other programmers' },
        { id: 'b', text: 'To find errors and improve code quality' },
        { id: 'c', text: 'To slow down development' },
        { id: 'd', text: 'To assign blame for bugs' }
      ],
      correctAnswers: ['b'],
      explanation: 'Code reviews help identify bugs, improve code quality, and share knowledge among team members.'
    },
    {
      text: 'Which of the following describes effective collaboration?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'One person does all the work while others watch' },
        { id: 'b', text: 'Team members share responsibilities and communicate regularly' },
        { id: 'c', text: 'Team members work in isolation without sharing progress' },
        { id: 'd', text: 'Only the team leader makes decisions' }
      ],
      correctAnswers: ['b'],
      explanation: 'Effective collaboration involves shared responsibilities, regular communication, and collective decision-making.'
    },
    {
      text: 'How can version control systems like Git support collaboration?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'By preventing anyone from making changes' },
        { id: 'b', text: 'By allowing multiple people to work on code simultaneously and merge changes' },
        { id: 'c', text: 'By deleting old versions of code' },
        { id: 'd', text: 'By only allowing one person to edit at a time' }
      ],
      correctAnswers: ['b'],
      explanation: 'Version control systems allow multiple developers to work on the same codebase, track changes, and merge their work together.'
    },
    {
      text: 'A team is developing an app for elderly users. Why might including elderly people in the development process be beneficial?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It is not beneficial' },
        { id: 'b', text: 'They can provide insights into usability and accessibility needs' },
        { id: 'c', text: 'They can write the code faster' },
        { id: 'd', text: 'They do not need to be included' }
      ],
      correctAnswers: ['b'],
      explanation: 'Including target users in development helps ensure the product meets their actual needs and is accessible to them.'
    },
    {
      text: 'What is a potential challenge of online collaboration?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Easier scheduling of meetings' },
        { id: 'b', text: 'Miscommunication due to lack of face-to-face interaction' },
        { id: 'c', text: 'Too much communication' },
        { id: 'd', text: 'Faster development time' }
      ],
      correctAnswers: ['b'],
      explanation: 'Online collaboration can lead to miscommunication because non-verbal cues are often missing in digital communication.'
    },
    {
      text: 'Which practice helps maintain accountability in a collaborative project?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Not assigning specific tasks to anyone' },
        { id: 'b', text: 'Clear assignment of responsibilities and deadlines' },
        { id: 'c', text: 'Letting anyone work on any task at any time' },
        { id: 'd', text: 'Avoiding documentation of who did what' }
      ],
      correctAnswers: ['b'],
      explanation: 'Clear assignment of responsibilities and deadlines helps ensure everyone knows what they need to do and by when.'
    },
    {
      text: 'A project requires expertise in both art design and programming. What is the best approach?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Have only programmers work on it' },
        { id: 'b', text: 'Collaborate with team members who have different skill sets' },
        { id: 'c', text: 'Skip the art design component' },
        { id: 'd', text: 'Have one person learn both skills' }
      ],
      correctAnswers: ['b'],
      explanation: 'Bringing together people with different skills leads to a better product than trying to have one person do everything.'
    },
    {
      text: 'What should a team do when a member is struggling with their assigned task?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Replace them immediately' },
        { id: 'b', text: 'Offer help and collaborate to solve the problem' },
        { id: 'c', text: 'Ignore the problem' },
        { id: 'd', text: 'Blame them for project delays' }
      ],
      correctAnswers: ['b'],
      explanation: 'Effective teams support struggling members through collaboration and assistance rather than blame.'
    },
    {
      text: 'Why is it valuable to receive feedback from multiple team members during development?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It slows down the project' },
        { id: 'b', text: 'Different perspectives can identify issues and improvements you might miss' },
        { id: 'c', text: 'It creates confusion' },
        { id: 'd', text: 'It is not valuable' }
      ],
      correctAnswers: ['b'],
      explanation: 'Multiple perspectives help identify bugs, usability issues, and potential improvements that a single person might overlook.'
    },
    {
      text: 'Which communication method would be most appropriate for complex technical discussions?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Brief text messages' },
        { id: 'b', text: 'Video call with screen sharing' },
        { id: 'c', text: 'Leaving notes on paper' },
        { id: 'd', text: 'Social media posts' }
      ],
      correctAnswers: ['b'],
      explanation: 'Video calls with screen sharing allow for real-time discussion, visual demonstration, and immediate clarification of complex topics.'
    },
    {
      text: 'What is the benefit of documenting decisions made during team meetings?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It wastes time' },
        { id: 'b', text: 'It creates a record that team members can reference later' },
        { id: 'c', text: 'It is not necessary' },
        { id: 'd', text: 'It prevents future collaboration' }
      ],
      correctAnswers: ['b'],
      explanation: 'Documentation creates a reference for decisions, helping maintain consistency and informing team members who missed meetings.'
    },
    {
      text: 'How does collaboration help in creating computing innovations for a global audience?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It does not help' },
        { id: 'b', text: 'Diverse team members can provide insights into different cultural needs and preferences' },
        { id: 'c', text: 'It makes the product more expensive' },
        { id: 'd', text: 'It limits creativity' }
      ],
      correctAnswers: ['b'],
      explanation: 'Team members from different backgrounds understand different cultural contexts, helping create products that work well globally.'
    },
    {
      text: 'What role does compromise play in collaborative projects?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It leads to worse outcomes' },
        { id: 'b', text: 'It helps find solutions that incorporate multiple viewpoints' },
        { id: 'c', text: 'One person should always get their way' },
        { id: 'd', text: 'It should be avoided' }
      ],
      correctAnswers: ['b'],
      explanation: 'Compromise allows teams to find solutions that balance different perspectives and needs, often leading to better outcomes.'
    },
    {
      text: 'A student wants to improve their collaboration skills. Which activity would help MOST?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Working alone on all projects' },
        { id: 'b', text: 'Participating in group projects and practicing active listening' },
        { id: 'c', text: 'Avoiding team assignments' },
        { id: 'd', text: 'Only giving feedback, never receiving it' }
      ],
      correctAnswers: ['b'],
      explanation: 'Collaboration skills improve through practice in group settings and actively working on interpersonal skills like listening.'
    },
    {
      text: 'Which of the following is an example of an effective way to divide work in a team project?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Give all the hard tasks to one person' },
        { id: 'b', text: 'Assign tasks based on team members\' strengths and interests' },
        { id: 'c', text: 'Let everyone work on the same task' },
        { id: 'd', text: 'Randomly assign tasks without consideration' }
      ],
      correctAnswers: ['b'],
      explanation: 'Assigning tasks based on strengths and interests leverages each team member\'s abilities and keeps people engaged.'
    },
    {
      text: 'What should happen when two team members have conflicting ideas about how to implement a feature?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The conflict should be ignored' },
        { id: 'b', text: 'They should discuss the pros and cons of each approach with the team' },
        { id: 'c', text: 'One person should quit the team' },
        { id: 'd', text: 'They should implement both approaches without discussion' }
      ],
      correctAnswers: ['b'],
      explanation: 'Discussing different approaches helps the team make an informed decision and may lead to a better solution.'
    },
    {
      text: 'How does collaboration typically affect the quality of a computing innovation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It decreases quality due to too many opinions' },
        { id: 'b', text: 'It typically improves quality through diverse input and error checking' },
        { id: 'c', text: 'It has no effect on quality' },
        { id: 'd', text: 'Quality only depends on the team leader' }
      ],
      correctAnswers: ['b'],
      explanation: 'Collaboration typically improves quality because multiple people can catch errors, provide feedback, and contribute different expertise.'
    }
  ],
  'crd-1-2': [
    // Program Function and Purpose Questions
    {
      text: 'What is the purpose of a computing innovation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To solve a problem or fulfill a need' },
        { id: 'b', text: 'To be as complex as possible' },
        { id: 'c', text: 'To use the newest technology only' },
        { id: 'd', text: 'To replace all human workers' }
      ],
      correctAnswers: ['a'],
      explanation: 'Computing innovations are created to solve problems, fulfill needs, or express creativity.'
    },
    {
      text: 'Which of the following best describes program input?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The final result displayed to the user' },
        { id: 'b', text: 'Data that is provided to a program for processing' },
        { id: 'c', text: 'The programming language used' },
        { id: 'd', text: 'The computer\'s hardware' }
      ],
      correctAnswers: ['b'],
      explanation: 'Input is data that a program receives and processes to produce output.'
    },
    {
      text: 'Which of the following is an example of program output?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A user typing on a keyboard' },
        { id: 'b', text: 'A mouse click' },
        { id: 'c', text: 'A message displayed on the screen' },
        { id: 'd', text: 'A file being uploaded' }
      ],
      correctAnswers: ['c'],
      explanation: 'Output is the result of a program\'s processing, such as displayed text, images, or sounds.'
    },
    {
      text: 'A weather app displays the current temperature. What is the output?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The user\'s location' },
        { id: 'b', text: 'The temperature displayed on the screen' },
        { id: 'c', text: 'The button the user pressed' },
        { id: 'd', text: 'The internet connection' }
      ],
      correctAnswers: ['b'],
      explanation: 'The temperature display is the output - the result that the program produces for the user.'
    },
    {
      text: 'In a game where users tap the screen to score points, what is the input?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The score displayed' },
        { id: 'b', text: 'The game\'s graphics' },
        { id: 'c', text: 'The user\'s screen taps' },
        { id: 'd', text: 'The sound effects' }
      ],
      correctAnswers: ['c'],
      explanation: 'The screen taps are input - data from the user that the program processes.'
    },
    {
      text: 'What is the relationship between a program\'s input and output?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'They are unrelated' },
        { id: 'b', text: 'The program processes input to produce output' },
        { id: 'c', text: 'Output always equals input' },
        { id: 'd', text: 'Input comes after output' }
      ],
      correctAnswers: ['b'],
      explanation: 'Programs take input, process it according to their logic, and produce output.'
    },
    {
      text: 'A program converts Celsius to Fahrenheit. If the input is 0°C, what describes the output?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The original temperature in Celsius' },
        { id: 'b', text: 'An error message' },
        { id: 'c', text: 'The converted temperature: 32°F' },
        { id: 'd', text: 'No output is produced' }
      ],
      correctAnswers: ['c'],
      explanation: 'The program processes the input (0°C) and produces output (32°F) using the conversion formula.'
    },
    {
      text: 'Which best describes a program\'s behavior?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'How the program looks on screen' },
        { id: 'b', text: 'How the program responds to inputs and produces outputs' },
        { id: 'c', text: 'The programming language used' },
        { id: 'd', text: 'The number of lines of code' }
      ],
      correctAnswers: ['b'],
      explanation: 'A program\'s behavior is how it responds to different inputs and what outputs it produces.'
    },
    {
      text: 'A spell-checker highlights misspelled words. What is the program\'s purpose?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To count words in a document' },
        { id: 'b', text: 'To identify and indicate spelling errors' },
        { id: 'c', text: 'To change the document\'s font' },
        { id: 'd', text: 'To translate text to another language' }
      ],
      correctAnswers: ['b'],
      explanation: 'The spell-checker\'s purpose is to help users identify spelling errors in their text.'
    },
    {
      text: 'Which of the following could be inputs for a music streaming app? (Select all that apply)',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'User pressing play button' },
        { id: 'b', text: 'Song being played through speakers' },
        { id: 'c', text: 'User searching for an artist' },
        { id: 'd', text: 'User adjusting the volume' }
      ],
      correctAnswers: ['a', 'c', 'd'],
      explanation: 'Pressing play, searching, and adjusting volume are all user inputs. The song playing is output.'
    },
    {
      text: 'A fitness app tracks steps using a phone\'s sensors. What type of input is this?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'User input' },
        { id: 'b', text: 'Sensor input' },
        { id: 'c', text: 'No input' },
        { id: 'd', text: 'Output' }
      ],
      correctAnswers: ['b'],
      explanation: 'Sensor input comes from device sensors (accelerometer, GPS) rather than direct user interaction.'
    },
    {
      text: 'Why is it important to clearly define a program\'s purpose before development?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It is not important' },
        { id: 'b', text: 'To guide design decisions and ensure the program meets user needs' },
        { id: 'c', text: 'To make the program more complex' },
        { id: 'd', text: 'To avoid writing documentation' }
      ],
      correctAnswers: ['b'],
      explanation: 'A clear purpose guides all development decisions and helps ensure the final product meets its goals.'
    },
    {
      text: 'An e-commerce website allows users to purchase products. Which is an output of this system?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The customer clicking "Add to Cart"' },
        { id: 'b', text: 'The customer entering credit card information' },
        { id: 'c', text: 'An order confirmation email sent to the customer' },
        { id: 'd', text: 'The customer browsing products' }
      ],
      correctAnswers: ['c'],
      explanation: 'The confirmation email is output - something the system produces for the user.'
    },
    {
      text: 'A program that helps users learn vocabulary shows a word and waits for a definition. What describes this interaction?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Output only' },
        { id: 'b', text: 'Input only' },
        { id: 'c', text: 'Both input (user\'s answer) and output (displayed word)' },
        { id: 'd', text: 'Neither input nor output' }
      ],
      correctAnswers: ['c'],
      explanation: 'The program outputs the word and receives the user\'s definition as input.'
    },
    {
      text: 'Which statement best describes how programs express creativity?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Programs cannot be creative' },
        { id: 'b', text: 'Programs express creativity through unique solutions, designs, and features' },
        { id: 'c', text: 'Only art programs are creative' },
        { id: 'd', text: 'Creativity only comes from using new programming languages' }
      ],
      correctAnswers: ['b'],
      explanation: 'Programs express creativity through innovative solutions, user interface designs, features, and how they solve problems.'
    },
    {
      text: 'A navigation app provides driving directions. What is the input and what is the output?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Input: the map; Output: the destination' },
        { id: 'b', text: 'Input: destination and current location; Output: driving directions' },
        { id: 'c', text: 'Input: driving directions; Output: destination' },
        { id: 'd', text: 'Input: the car; Output: the road' }
      ],
      correctAnswers: ['b'],
      explanation: 'The app receives locations as input and processes them to output directions.'
    },
    {
      text: 'A program\'s function refers to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The brand of computer it runs on' },
        { id: 'b', text: 'What the program does and how it behaves' },
        { id: 'c', text: 'The color scheme of the program' },
        { id: 'd', text: 'The number of users' }
      ],
      correctAnswers: ['b'],
      explanation: 'A program\'s function describes what the program does - its behavior and capabilities.'
    },
    {
      text: 'Which describes the function of a calculator program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To display colorful buttons' },
        { id: 'b', text: 'To perform mathematical calculations based on user input' },
        { id: 'c', text: 'To connect to the internet' },
        { id: 'd', text: 'To play music' }
      ],
      correctAnswers: ['b'],
      explanation: 'A calculator\'s function is to take numerical input and perform calculations.'
    },
    {
      text: 'A photo editing app can apply filters, crop images, and adjust brightness. These describe the app\'s:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Inputs only' },
        { id: 'b', text: 'Functions or features' },
        { id: 'c', text: 'Outputs only' },
        { id: 'd', text: 'Errors' }
      ],
      correctAnswers: ['b'],
      explanation: 'These are the functions or features - what the app can do for users.'
    },
    {
      text: 'The same program can produce different outputs based on different inputs. This is because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The program is broken' },
        { id: 'b', text: 'Programs process input according to their logic to produce relevant output' },
        { id: 'c', text: 'Output is random' },
        { id: 'd', text: 'This is not possible' }
      ],
      correctAnswers: ['b'],
      explanation: 'Programs are designed to process different inputs and produce appropriate outputs based on their programming logic.'
    },
    {
      text: 'A video game responds to controller inputs by moving a character on screen. The character movement is:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Input' },
        { id: 'b', text: 'Output' },
        { id: 'c', text: 'Neither' },
        { id: 'd', text: 'An error' }
      ],
      correctAnswers: ['b'],
      explanation: 'The character movement displayed on screen is output - the result of processing the controller input.'
    },
    {
      text: 'Which question helps identify a program\'s purpose?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'How many lines of code does it have?' },
        { id: 'b', text: 'What problem does it solve or what need does it fulfill?' },
        { id: 'c', text: 'What color is the interface?' },
        { id: 'd', text: 'How old is the program?' }
      ],
      correctAnswers: ['b'],
      explanation: 'Understanding what problem a program solves helps identify its core purpose.'
    },
    {
      text: 'A smart thermostat automatically adjusts temperature based on time of day and user preferences. What are the inputs?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Current time' },
        { id: 'b', text: 'User preference settings' },
        { id: 'c', text: 'The adjusted temperature setting (output)' },
        { id: 'd', text: 'Current room temperature' }
      ],
      correctAnswers: ['a', 'b', 'd'],
      explanation: 'Time, user preferences, and current temperature are all inputs the thermostat uses. The adjusted temperature setting is output.'
    },
    {
      text: 'A translation app converts text from one language to another. The original text is ____ and the translated text is ____.',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'output; input' },
        { id: 'b', text: 'input; output' },
        { id: 'c', text: 'both are inputs' },
        { id: 'd', text: 'both are outputs' }
      ],
      correctAnswers: ['b'],
      explanation: 'The original text is input (what the program receives) and the translation is output (what it produces).'
    },
    {
      text: 'Which best describes why understanding a program\'s function is important for users?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It helps users understand what the program can do for them' },
        { id: 'b', text: 'It is not important for users' },
        { id: 'c', text: 'Users don\'t need to know how programs work' },
        { id: 'd', text: 'Only programmers need to understand function' }
      ],
      correctAnswers: ['a'],
      explanation: 'Understanding a program\'s function helps users know how to use it effectively and what to expect.'
    }
  ],
  'crd-1-3': [
    // Program Design and Development Questions
    {
      text: 'What is an iterative development process?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Writing all code at once without testing' },
        { id: 'b', text: 'A cycle of designing, building, testing, and improving a program repeatedly' },
        { id: 'c', text: 'Only planning without coding' },
        { id: 'd', text: 'Deleting code after it is written' }
      ],
      correctAnswers: ['b'],
      explanation: 'Iterative development involves repeated cycles of development, testing, and refinement.'
    },
    {
      text: 'Which of the following is a benefit of incremental development?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Problems can be identified and fixed early' },
        { id: 'b', text: 'All features must be completed before any testing' },
        { id: 'c', text: 'No planning is required' },
        { id: 'd', text: 'Code cannot be changed once written' }
      ],
      correctAnswers: ['a'],
      explanation: 'Incremental development allows for early detection and correction of problems.'
    },
    {
      text: 'What is the purpose of a program specification or requirements document?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To describe what the program should do' },
        { id: 'b', text: 'To write the actual code' },
        { id: 'c', text: 'To test the program' },
        { id: 'd', text: 'To delete unnecessary features' }
      ],
      correctAnswers: ['a'],
      explanation: 'Specifications document what the program needs to accomplish before development begins.'
    },
    {
      text: 'What is pseudocode?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A specific programming language' },
        { id: 'b', text: 'A way to describe algorithms using plain language or informal notation' },
        { id: 'c', text: 'Code that has bugs' },
        { id: 'd', text: 'Compiled machine code' }
      ],
      correctAnswers: ['b'],
      explanation: 'Pseudocode is an informal way of describing algorithms that can be understood without knowing a specific programming language.'
    },
    {
      text: 'Why would a developer create a flowchart before writing code?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To make the code run faster' },
        { id: 'b', text: 'To visualize the logic and flow of the program' },
        { id: 'c', text: 'Flowcharts are required for all programs' },
        { id: 'd', text: 'To avoid writing any code' }
      ],
      correctAnswers: ['b'],
      explanation: 'Flowcharts help visualize the logic and structure of a program before implementation.'
    },
    {
      text: 'What is a prototype in software development?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The final version of the software' },
        { id: 'b', text: 'An early version used to test concepts and get feedback' },
        { id: 'c', text: 'A type of bug' },
        { id: 'd', text: 'The programming language' }
      ],
      correctAnswers: ['b'],
      explanation: 'A prototype is an early model used to test ideas and gather feedback before full development.'
    },
    {
      text: 'User interface design is important because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It determines how users interact with the program' },
        { id: 'b', text: 'It is not important' },
        { id: 'c', text: 'It only affects the program\'s speed' },
        { id: 'd', text: 'It is only relevant for games' }
      ],
      correctAnswers: ['a'],
      explanation: 'User interface design directly affects how users interact with and experience the program.'
    },
    {
      text: 'What should be considered when designing a user interface?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Ease of use' },
        { id: 'b', text: 'Accessibility for users with disabilities' },
        { id: 'c', text: 'Visual clarity' },
        { id: 'd', text: 'Making it as complex as possible' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Good UI design considers usability, accessibility, and clarity - not complexity.'
    },
    {
      text: 'A developer receives feedback that users find a feature confusing. What should they do?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Ignore the feedback' },
        { id: 'b', text: 'Consider redesigning the feature based on the feedback' },
        { id: 'c', text: 'Remove all features' },
        { id: 'd', text: 'Blame the users' }
      ],
      correctAnswers: ['b'],
      explanation: 'User feedback should be considered to improve the program and make it more user-friendly.'
    },
    {
      text: 'What is the purpose of documentation in a program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To make the program run faster' },
        { id: 'b', text: 'To explain how the program works and how to use it' },
        { id: 'c', text: 'Documentation is not needed' },
        { id: 'd', text: 'To increase the file size' }
      ],
      correctAnswers: ['b'],
      explanation: 'Documentation explains the program\'s functionality, helping users and other developers understand it.'
    },
    {
      text: 'Code comments are used to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Make the program run faster' },
        { id: 'b', text: 'Explain what sections of code do for human readers' },
        { id: 'c', text: 'Hide code from users' },
        { id: 'd', text: 'Add bugs to the code' }
      ],
      correctAnswers: ['b'],
      explanation: 'Comments explain code to human readers and don\'t affect how the program runs.'
    },
    {
      text: 'Which of the following is part of the development process?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Planning and design' },
        { id: 'b', text: 'Writing code' },
        { id: 'c', text: 'Testing and debugging' },
        { id: 'd', text: 'All development must happen in one day' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Development includes planning, coding, testing, and debugging - and takes time.'
    },
    {
      text: 'What is the purpose of breaking a problem into smaller parts?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To make it harder to solve' },
        { id: 'b', text: 'To make complex problems more manageable' },
        { id: 'c', text: 'Breaking problems into parts is not useful' },
        { id: 'd', text: 'To create more bugs' }
      ],
      correctAnswers: ['b'],
      explanation: 'Breaking problems into smaller, manageable parts makes them easier to solve and test.'
    },
    {
      text: 'A modular design means:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The program is written as one large block of code' },
        { id: 'b', text: 'The program is divided into separate, independent sections' },
        { id: 'c', text: 'The program has no structure' },
        { id: 'd', text: 'The program cannot be modified' }
      ],
      correctAnswers: ['b'],
      explanation: 'Modular design divides a program into independent modules that can be developed and tested separately.'
    },
    {
      text: 'Why is it helpful to reuse code?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It saves time and reduces errors' },
        { id: 'b', text: 'Reusing code is not helpful' },
        { id: 'c', text: 'It makes programs slower' },
        { id: 'd', text: 'It increases the number of bugs' }
      ],
      correctAnswers: ['a'],
      explanation: 'Reusing tested code saves development time and reduces the chance of introducing new bugs.'
    },
    {
      text: 'What is a library in programming?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A building where programmers work' },
        { id: 'b', text: 'A collection of pre-written code that can be used in programs' },
        { id: 'c', text: 'A type of bug' },
        { id: 'd', text: 'A programming language' }
      ],
      correctAnswers: ['b'],
      explanation: 'A library is a collection of pre-written code that developers can use in their programs.'
    },
    {
      text: 'What is an API (Application Programming Interface)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A type of computer virus' },
        { id: 'b', text: 'A set of rules and tools for building software and interacting with other services' },
        { id: 'c', text: 'A programming language' },
        { id: 'd', text: 'A type of monitor' }
      ],
      correctAnswers: ['b'],
      explanation: 'An API defines how different software components should interact with each other.'
    },
    {
      text: 'During the design phase, a developer creates wireframes. What are wireframes?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Physical wires used in computers' },
        { id: 'b', text: 'Basic visual guides showing the layout of a user interface' },
        { id: 'c', text: 'Final program code' },
        { id: 'd', text: 'Computer hardware' }
      ],
      correctAnswers: ['b'],
      explanation: 'Wireframes are simple sketches or diagrams showing the basic layout and structure of a user interface.'
    },
    {
      text: 'What is the purpose of user stories in development?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To entertain developers' },
        { id: 'b', text: 'To describe features from a user\'s perspective' },
        { id: 'c', text: 'To replace all code' },
        { id: 'd', text: 'To create bugs' }
      ],
      correctAnswers: ['b'],
      explanation: 'User stories describe features in terms of what users need, helping guide development.'
    },
    {
      text: 'What does "refactoring" mean in programming?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Adding new features' },
        { id: 'b', text: 'Restructuring existing code without changing its functionality' },
        { id: 'c', text: 'Deleting all code' },
        { id: 'd', text: 'Creating new bugs' }
      ],
      correctAnswers: ['b'],
      explanation: 'Refactoring improves code structure and readability without changing what the code does.'
    },
    {
      text: 'A developer notices repeated code in several places. What is the best practice?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Leave it as is' },
        { id: 'b', text: 'Extract the repeated code into a reusable function' },
        { id: 'c', text: 'Copy it more times' },
        { id: 'd', text: 'Delete all copies' }
      ],
      correctAnswers: ['b'],
      explanation: 'Extracting repeated code into functions follows the DRY principle (Don\'t Repeat Yourself).'
    },
    {
      text: 'What is the benefit of naming variables and functions descriptively?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It makes the code harder to read' },
        { id: 'b', text: 'It makes the code self-documenting and easier to understand' },
        { id: 'c', text: 'Naming doesn\'t matter' },
        { id: 'd', text: 'Short names are always better' }
      ],
      correctAnswers: ['b'],
      explanation: 'Descriptive names help others (and your future self) understand what the code does.'
    },
    {
      text: 'In agile development, what is a "sprint"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Running fast while coding' },
        { id: 'b', text: 'A short, fixed time period for completing specific work' },
        { id: 'c', text: 'A type of bug' },
        { id: 'd', text: 'The final release' }
      ],
      correctAnswers: ['b'],
      explanation: 'A sprint is a time-boxed period (usually 1-4 weeks) during which specific work must be completed.'
    },
    {
      text: 'What is the purpose of version control in development?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To track changes and allow collaboration on code' },
        { id: 'b', text: 'To make code run faster' },
        { id: 'c', text: 'To create user interfaces' },
        { id: 'd', text: 'Version control is not useful' }
      ],
      correctAnswers: ['a'],
      explanation: 'Version control systems track code changes, enable collaboration, and allow reverting to previous versions.'
    },
    {
      text: 'What should a developer do before starting to write code for a new feature?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Start coding immediately without any planning' },
        { id: 'b', text: 'Understand requirements and plan the approach' },
        { id: 'c', text: 'Delete all existing code' },
        { id: 'd', text: 'Planning is not necessary' }
      ],
      correctAnswers: ['b'],
      explanation: 'Understanding requirements and planning helps ensure the code meets its intended purpose.'
    }
  ],
  'crd-1-4': [
    // Identifying and Correcting Errors Questions
    {
      text: 'What is a syntax error?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An error in the program\'s logic' },
        { id: 'b', text: 'A mistake in the grammar/rules of the programming language' },
        { id: 'c', text: 'An error caused by wrong input' },
        { id: 'd', text: 'A hardware malfunction' }
      ],
      correctAnswers: ['b'],
      explanation: 'Syntax errors occur when code doesn\'t follow the rules of the programming language.'
    },
    {
      text: 'What is a logic error?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A mistake in spelling a keyword' },
        { id: 'b', text: 'When the program runs but produces incorrect results' },
        { id: 'c', text: 'When the program won\'t compile' },
        { id: 'd', text: 'A hardware problem' }
      ],
      correctAnswers: ['b'],
      explanation: 'Logic errors occur when the program runs but doesn\'t produce the expected results due to flawed logic.'
    },
    {
      text: 'What is a runtime error?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An error that prevents the program from compiling' },
        { id: 'b', text: 'An error that occurs while the program is running' },
        { id: 'c', text: 'A typing mistake' },
        { id: 'd', text: 'An error in the documentation' }
      ],
      correctAnswers: ['b'],
      explanation: 'Runtime errors occur during program execution, such as division by zero or accessing invalid memory.'
    },
    {
      text: 'What is debugging?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Adding more bugs to a program' },
        { id: 'b', text: 'The process of finding and fixing errors in a program' },
        { id: 'c', text: 'Removing all code from a program' },
        { id: 'd', text: 'Making a program run slower' }
      ],
      correctAnswers: ['b'],
      explanation: 'Debugging is the systematic process of identifying and fixing errors (bugs) in code.'
    },
    {
      text: 'Which of the following can help identify errors in a program?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Testing with various inputs' },
        { id: 'b', text: 'Code review by another person' },
        { id: 'c', text: 'Using print statements to track values' },
        { id: 'd', text: 'Never running the program' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Testing, code reviews, and print statements all help identify errors. Not running the program would prevent finding any errors.'
    },
    {
      text: 'A program is supposed to calculate the average of numbers but always returns 0. This is most likely a:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Syntax error' },
        { id: 'b', text: 'Logic error' },
        { id: 'c', text: 'The program is working correctly' },
        { id: 'd', text: 'Hardware error' }
      ],
      correctAnswers: ['b'],
      explanation: 'Since the program runs but gives wrong results, this is a logic error in the calculation.'
    },
    {
      text: 'What is a test case?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A type of computer' },
        { id: 'b', text: 'A specific input and the expected output used to verify program behavior' },
        { id: 'c', text: 'A programming language' },
        { id: 'd', text: 'A way to hide bugs' }
      ],
      correctAnswers: ['b'],
      explanation: 'A test case consists of input values and expected outputs to verify the program works correctly.'
    },
    {
      text: 'Why should you test edge cases?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Edge cases don\'t need testing' },
        { id: 'b', text: 'Edge cases often reveal bugs that normal inputs don\'t' },
        { id: 'c', text: 'To make testing take longer' },
        { id: 'd', text: 'Edge cases never cause errors' }
      ],
      correctAnswers: ['b'],
      explanation: 'Edge cases (extreme or boundary values) often reveal bugs that typical inputs might not expose.'
    },
    {
      text: 'A program works for positive numbers but crashes when given a negative number. This is likely:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Working as intended' },
        { id: 'b', text: 'An issue that would be found by testing edge cases' },
        { id: 'c', text: 'Impossible to fix' },
        { id: 'd', text: 'A syntax error' }
      ],
      correctAnswers: ['b'],
      explanation: 'Testing with negative numbers (an edge case) would have revealed this issue.'
    },
    {
      text: 'What is the purpose of error messages?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To confuse programmers' },
        { id: 'b', text: 'To help identify what went wrong and where' },
        { id: 'c', text: 'Error messages are not useful' },
        { id: 'd', text: 'To make the program run faster' }
      ],
      correctAnswers: ['b'],
      explanation: 'Error messages provide information about what went wrong, helping developers fix issues.'
    },
    {
      text: 'Which practice helps prevent errors?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Writing all code at once before testing' },
        { id: 'b', text: 'Testing code frequently during development' },
        { id: 'c', text: 'Never testing' },
        { id: 'd', text: 'Ignoring error messages' }
      ],
      correctAnswers: ['b'],
      explanation: 'Frequent testing helps catch errors early when they\'re easier to fix.'
    },
    {
      text: 'Code from an online source should be:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Used without any attribution' },
        { id: 'b', text: 'Acknowledged and cited appropriately' },
        { id: 'c', text: 'Claimed as entirely your own' },
        { id: 'd', text: 'Never used under any circumstances' }
      ],
      correctAnswers: ['b'],
      explanation: 'Code from other sources should be properly attributed to acknowledge the original author\'s work.'
    },
    {
      text: 'Why is it important to acknowledge code used from other sources?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'To give credit to the original author' },
        { id: 'b', text: 'To comply with licensing requirements' },
        { id: 'c', text: 'To document where code came from for future reference' },
        { id: 'd', text: 'It is not important' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Attribution gives credit, ensures license compliance, and helps document the code\'s origins.'
    },
    {
      text: 'A breakpoint in debugging is used to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Break the computer' },
        { id: 'b', text: 'Pause program execution at a specific line to examine values' },
        { id: 'c', text: 'Delete code' },
        { id: 'd', text: 'Speed up the program' }
      ],
      correctAnswers: ['b'],
      explanation: 'Breakpoints pause execution so developers can examine variable values and program state.'
    },
    {
      text: 'What is a common cause of an "index out of bounds" error?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Trying to access an array element that doesn\'t exist' },
        { id: 'b', text: 'Adding two numbers' },
        { id: 'c', text: 'Printing text' },
        { id: 'd', text: 'Declaring a variable' }
      ],
      correctAnswers: ['a'],
      explanation: 'This error occurs when trying to access an array index that is beyond the array\'s size.'
    },
    {
      text: 'A program enters an infinite loop. This is a type of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Syntax error' },
        { id: 'b', text: 'Logic error' },
        { id: 'c', text: 'Correct behavior' },
        { id: 'd', text: 'Compile-time error' }
      ],
      correctAnswers: ['b'],
      explanation: 'An infinite loop is a logic error where the loop condition never becomes false.'
    },
    {
      text: 'Which of the following is a good practice when debugging?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Change many things at once and hope for the best' },
        { id: 'b', text: 'Change one thing at a time and test after each change' },
        { id: 'c', text: 'Don\'t test after making changes' },
        { id: 'd', text: 'Delete all the code' }
      ],
      correctAnswers: ['b'],
      explanation: 'Changing one thing at a time helps identify exactly what fixed or caused a problem.'
    },
    {
      text: 'What is "rubber duck debugging"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Debugging while in a bathtub' },
        { id: 'b', text: 'Explaining your code line by line to find errors, even to an inanimate object' },
        { id: 'c', text: 'A type of hardware' },
        { id: 'd', text: 'A programming language' }
      ],
      correctAnswers: ['b'],
      explanation: 'Rubber duck debugging involves explaining code aloud, which often helps identify logical issues.'
    },
    {
      text: 'Tracing a program means:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Drawing pictures of the program' },
        { id: 'b', text: 'Following the execution step by step to track variable values' },
        { id: 'c', text: 'Copying code from another program' },
        { id: 'd', text: 'Deleting the program' }
      ],
      correctAnswers: ['b'],
      explanation: 'Tracing involves following code execution step by step to understand what values variables hold.'
    },
    {
      text: 'An off-by-one error typically occurs when:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A loop iterates one too many or one too few times' },
        { id: 'b', text: 'The computer overheats' },
        { id: 'c', text: 'The program runs too fast' },
        { id: 'd', text: 'Variables are named incorrectly' }
      ],
      correctAnswers: ['a'],
      explanation: 'Off-by-one errors occur when loops or array access are one step off from the intended range.'
    },
    {
      text: 'What should you do if a program compiles but produces unexpected output?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Assume the output is correct' },
        { id: 'b', text: 'Check the logic and trace through the code' },
        { id: 'c', text: 'Delete the program' },
        { id: 'd', text: 'Buy a new computer' }
      ],
      correctAnswers: ['b'],
      explanation: 'Unexpected output usually indicates a logic error that requires tracing and debugging.'
    },
    {
      text: 'Unit testing involves:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Testing the entire program at once' },
        { id: 'b', text: 'Testing individual components or functions separately' },
        { id: 'c', text: 'Not testing at all' },
        { id: 'd', text: 'Only testing after the program is complete' }
      ],
      correctAnswers: ['b'],
      explanation: 'Unit testing tests individual components in isolation to ensure each part works correctly.'
    },
    {
      text: 'A null pointer or undefined variable error occurs when:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A variable is properly initialized' },
        { id: 'b', text: 'Trying to use a variable that hasn\'t been assigned a value' },
        { id: 'c', text: 'The program runs successfully' },
        { id: 'd', text: 'All tests pass' }
      ],
      correctAnswers: ['b'],
      explanation: 'These errors occur when code tries to use variables that haven\'t been properly initialized.'
    },
    {
      text: 'Why is it important to handle unexpected inputs in a program?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It is not important' },
        { id: 'b', text: 'To prevent crashes and ensure the program behaves correctly' },
        { id: 'c', text: 'To make the program slower' },
        { id: 'd', text: 'Unexpected inputs never occur' }
      ],
      correctAnswers: ['b'],
      explanation: 'Handling unexpected inputs prevents crashes and makes programs more robust.'
    },
    {
      text: 'What is input validation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Accepting any input without checking' },
        { id: 'b', text: 'Checking that input meets expected criteria before processing' },
        { id: 'c', text: 'Outputting data' },
        { id: 'd', text: 'A type of output' }
      ],
      correctAnswers: ['b'],
      explanation: 'Input validation checks that data meets expected requirements before the program uses it.'
    }
  ]
};

async function seedBigIdea1() {
  console.log('Starting to seed Big Idea 1...');

  try {
    // Create the Big Idea document
    await db.collection('bigIdeas').doc(bigIdea1.id).set({
      name: bigIdea1.name,
      shortName: bigIdea1.shortName,
      description: bigIdea1.description,
      order: bigIdea1.order,
      color: bigIdea1.color,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Created Big Idea 1');

    let totalQuestions = 0;

    // Create each topic and its questions (in separate collection)
    for (const topic of topics) {
      const questions = questionsData[topic.id] || [];

      // Create topic document (without embedded questions)
      await db.collection('topics').doc(topic.id).set({
        name: topic.name,
        description: topic.description,
        bigIdeaId: topic.bigIdeaId,
        order: topic.order,
        learningObjectives: topic.learningObjectives,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      console.log(`Created topic: ${topic.name}`);

      // Create questions in separate collection
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const questionId = `${topic.id}-q${i + 1}`;

        await db.collection('questions').doc(questionId).set({
          ...q,
          id: questionId,
          topicId: topic.id,
          topicName: topic.name,
          bigIdeaId: topic.bigIdeaId,
          isCustom: false,
          addedBy: null,
          addedAt: new Date(),
          deactivated: false,
          createdAt: new Date(),
          updatedAt: new Date()
        });

        totalQuestions++;
      }

      console.log(`  - Added ${questions.length} questions to questions collection`);
    }

    console.log('Successfully seeded Big Idea 1!');
    console.log(`Total topics: ${topics.length}`);
    console.log(`Total questions: ${totalQuestions}`);

  } catch (error) {
    console.error('Error seeding Big Idea 1:', error);
    throw error;
  }
}

// Run the seed function
seedBigIdea1()
  .then(() => {
    console.log('Seeding complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Seeding failed:', error);
    process.exit(1);
  });
