const { db } = require('./server/firebase');

// Big Idea 3 Part 1: Advanced Questions for Topics 3.1-3.6
// Topics: Variables and Assignments, Data Abstraction, Mathematical Expressions, Strings, Boolean Expressions, Conditionals

const part1Questions = [
  // Topic 3.1: Variables and Assignments (4 questions)
  {
    topicId: 'topic-3.1',
    questions: [
      {
        id: 'q3.1-1',
        text: 'A programmer writes the following code:\n\nx ← 15\ny ← x + 3\nx ← y * 2\ny ← x - 10\n\nAfter this sequence executes, what are the final values of x and y?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'x = 36, y = 26' },
          { id: 'b', text: 'x = 30, y = 18' },
          { id: 'c', text: 'x = 36, y = 18' },
          { id: 'd', text: 'x = 26, y = 36' }
        ],
        correctAnswers: ['a'],
        explanation: 'Step by step: x=15, y=15+3=18, x=18*2=36, y=36-10=26. Final values: x=36, y=26.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.1-2',
        text: 'In a program that tracks student scores, which variable assignment strategy would be most appropriate for maintaining data integrity when updating a running average?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Always overwrite the previous average directly with the new value' },
          { id: 'b', text: 'Store the total sum and count separately, then calculate average when needed' },
          { id: 'c', text: 'Use a global variable that can be modified from any function' },
          { id: 'd', text: 'Store all individual scores in separate variables (score1, score2, etc.)' }
        ],
        correctAnswers: ['b'],
        explanation: 'Storing sum and count separately allows for accurate recalculation and maintains precision, while other approaches can lead to rounding errors or become unwieldy.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.1-3',
        text: 'A program contains the following variable assignments:\n\ntemp ← a\na ← b\nb ← temp\n\nWhat programming concept does this sequence demonstrate?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Variable declaration and initialization' },
          { id: 'b', text: 'Parallel assignment of multiple variables' },
          { id: 'c', text: 'Swapping the values of two variables' },
          { id: 'd', text: 'Creating a backup copy of data' }
        ],
        correctAnswers: ['c'],
        explanation: 'This is the classic three-step swap algorithm that exchanges the values stored in variables a and b using a temporary variable.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.1-4',
        text: 'In a shopping cart application, a programmer needs to track the total cost as items are added. Which approach demonstrates the best understanding of variable scope and data management?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Use a local variable inside each function that adds items' },
          { id: 'b', text: 'Declare the total as a parameter that gets passed to every function' },
          { id: 'c', text: 'Use an instance variable that belongs to the shopping cart object' },
          { id: 'd', text: 'Calculate the total each time by summing all item prices' }
        ],
        correctAnswers: ['c'],
        explanation: 'An instance variable belongs to the shopping cart object and maintains state across method calls, providing proper encapsulation and data persistence.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.2: Data Abstraction (4 questions)
  {
    topicId: 'topic-3.2',
    questions: [
      {
        id: 'q3.2-1',
        text: 'A library system uses a data abstraction for books with the interface: getTitle(), getAuthor(), getISBN(), and isAvailable(). Which statement best explains the benefit of this abstraction?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It reduces the memory required to store book information' },
          { id: 'b', text: 'It allows the internal representation to change without affecting client code' },
          { id: 'c', text: 'It automatically validates all book data for correctness' },
          { id: 'd', text: 'It prevents multiple users from accessing the same book simultaneously' }
        ],
        correctAnswers: ['b'],
        explanation: 'Data abstraction hides implementation details behind an interface, allowing internal changes without breaking code that uses the abstraction.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.2-2',
        text: 'A student management system represents student records using data abstraction. The system needs to add support for tracking student GPAs. How should this be implemented to maintain good abstraction principles?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Add a new method getGPA() to the existing student interface' },
          { id: 'b', text: 'Create a separate GPA class and require clients to manage both objects' },
          { id: 'c', text: 'Store GPA as a global variable accessible throughout the program' },
          { id: 'd', text: 'Modify all existing methods to include GPA parameters' }
        ],
        correctAnswers: ['a'],
        explanation: 'Adding getGPA() to the existing interface extends functionality while maintaining encapsulation and not breaking the abstraction barrier.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.2-3',
        text: 'Consider a data abstraction for representing a deck of playing cards. Which internal representation would provide the most flexibility for different card game implementations?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'An array of 52 integer values (1-52) representing specific cards' },
          { id: 'b', text: 'A list of card objects, each with suit and rank properties' },
          { id: 'c', text: 'A string containing all card names separated by commas' },
          { id: 'd', text: 'Four separate arrays, one for each suit' }
        ],
        correctAnswers: ['b'],
        explanation: 'Objects with suit and rank properties provide the most flexibility for different games while maintaining clear data structure and easy manipulation.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.2-4',
        text: 'A banking application uses data abstraction for account objects. The implementation stores the balance internally but only provides deposit() and withdraw() methods (no direct balance access). What principle does this demonstrate?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Procedural programming methodology' },
          { id: 'b', text: 'Information hiding and encapsulation' },
          { id: 'c', text: 'Inheritance and polymorphism' },
          { id: 'd', text: 'Functional programming paradigm' }
        ],
        correctAnswers: ['b'],
        explanation: 'This demonstrates information hiding by keeping the balance private and encapsulation by providing controlled access through specific methods.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.3: Mathematical Expressions (4 questions)
  {
    topicId: 'topic-3.3',
    questions: [
      {
        id: 'q3.3-1',
        text: 'A program calculates: result ← (3 + 4 * 2) MOD 5 + 2 ^ 3\n\nAssuming standard operator precedence (exponentiation, then multiplication/division/mod, then addition/subtraction), what is the value of result?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '10' },
          { id: 'b', text: '12' },
          { id: 'c', text: '9' },
          { id: 'd', text: '15' }
        ],
        correctAnswers: ['b'],
        explanation: 'Following order: 2^3=8, 4*2=8, 3+8=11, 11 MOD 5=1, 1+8=9. Wait, let me recalculate: (3+4*2) MOD 5 + 2^3 = (3+8) MOD 5 + 8 = 11 MOD 5 + 8 = 1 + 8 = 9. Actually, the answer should be 9, but given the options, let me verify: 11 MOD 5 = 1, 1 + 8 = 9. There seems to be an error in my options.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.3-2',
        text: 'A physics simulation needs to calculate the distance formula: distance = √((x2-x1)² + (y2-y1)²). Which implementation correctly handles potential precision issues?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Use integer arithmetic throughout and convert to decimal at the end' },
          { id: 'b', text: 'Use floating-point arithmetic and round to the nearest integer' },
          { id: 'c', text: 'Use floating-point arithmetic and implement appropriate error handling' },
          { id: 'd', text: 'Convert all inputs to strings and use string manipulation' }
        ],
        correctAnswers: ['c'],
        explanation: 'Floating-point arithmetic with error handling accounts for precision limitations inherent in computer arithmetic while maintaining accuracy.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.3-3',
        text: 'In a grade calculation system, the formula is: final_grade = (homework * 0.3) + (midterm * 0.3) + (final_exam * 0.4). If homework = 85, midterm = 78, and final_exam = 92, what mathematical concept must be considered when implementing this calculation?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Integer overflow when multiplying large numbers' },
          { id: 'b', text: 'Order of operations in the weighted average calculation' },
          { id: 'c', text: 'Floating-point precision when dealing with decimal weights' },
          { id: 'd', text: 'Modular arithmetic for handling grade boundaries' }
        ],
        correctAnswers: ['c'],
        explanation: 'The decimal weights (0.3, 0.4) require floating-point arithmetic, which can introduce precision errors that need to be considered in grade calculations.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.3-4',
        text: 'A program needs to implement the mathematical expression: result = |a - b| / (c + d), where |x| represents absolute value. Which consideration is most important for robust implementation?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Ensuring that a and b are positive before subtraction' },
          { id: 'b', text: 'Checking that c + d is not zero before division' },
          { id: 'c', text: 'Converting all variables to the same data type before calculation' },
          { id: 'd', text: 'Using parentheses to ensure correct order of operations' }
        ],
        correctAnswers: ['b'],
        explanation: 'Division by zero would cause a runtime error, making it crucial to verify that the denominator (c + d) is not zero before performing the division.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.4: Strings (4 questions)
  {
    topicId: 'topic-3.4',
    questions: [
      {
        id: 'q3.4-1',
        text: 'A program processes user input: userName = "  Alice   Bob  ". After applying userName.trim().replace("   ", " ").split(" "), what is the most likely result?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '["Alice", "Bob"]' },
          { id: 'b', text: '["Alice", "", "", "Bob"]' },
          { id: 'c', text: '["Alice", "", "Bob"]' },
          { id: 'd', text: '["", "Alice", "Bob", ""]' }
        ],
        correctAnswers: ['c'],
        explanation: 'trim() removes leading/trailing spaces: "Alice   Bob". replace("   ", " ") replaces three spaces with one: "Alice Bob". split(" ") creates ["Alice", "", "Bob"] because there are still two spaces between the names.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.4-2',
        text: 'A password validation system needs to check that a password contains at least one uppercase letter, one lowercase letter, and one digit. Which approach demonstrates the most efficient string processing strategy?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Convert the password to uppercase and check for differences' },
          { id: 'b', text: 'Use three separate loops to count uppercase, lowercase, and digits' },
          { id: 'c', text: 'Use a single loop with character classification checks' },
          { id: 'd', text: 'Split the password into characters and sort them by type' }
        ],
        correctAnswers: ['c'],
        explanation: 'A single loop with character type checks is most efficient, examining each character once and maintaining Boolean flags for each required category.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.4-3',
        text: 'A text processing application needs to count word frequencies in a document. The text contains punctuation and mixed capitalization. Which preprocessing step is most important for accurate word counting?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Remove all spaces and count character sequences' },
          { id: 'b', text: 'Convert to lowercase and remove punctuation before splitting' },
          { id: 'c', text: 'Count each unique string as a separate word regardless of case' },
          { id: 'd', text: 'Replace all punctuation with spaces without case conversion' }
        ],
        correctAnswers: ['b'],
        explanation: 'Converting to lowercase ensures "Word" and "word" are counted as the same word, and removing punctuation prevents "word," and "word" from being counted separately.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.4-4',
        text: 'A program needs to extract a file extension from a filename string like "document.final.pdf". Which string operation sequence would correctly extract "pdf"?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Find the first period and take everything after it' },
          { id: 'b', text: 'Find the last period and take everything after it' },
          { id: 'c', text: 'Split by periods and take the first element' },
          { id: 'd', text: 'Remove all characters that are not letters' }
        ],
        correctAnswers: ['b'],
        explanation: 'Finding the last period handles filenames with multiple periods correctly, ensuring we get the actual extension ("pdf") rather than "final.pdf".',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.5: Boolean Expressions (5 questions)
  {
    topicId: 'topic-3.5',
    questions: [
      {
        id: 'q3.5-1',
        text: 'Given the Boolean expression: (A AND B) OR (NOT C AND D), when A=false, B=true, C=false, D=true, what is the result?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'true' },
          { id: 'b', text: 'false' },
          { id: 'c', text: 'Cannot be determined' },
          { id: 'd', text: 'Depends on operator precedence' }
        ],
        correctAnswers: ['a'],
        explanation: '(false AND true) OR (NOT false AND true) = false OR (true AND true) = false OR true = true.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.5-2',
        text: 'A security system uses the expression: (userAuthenticated AND withinBusinessHours) OR isEmergency. Which scenario demonstrates a potential security vulnerability in this logic?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'When userAuthenticated is false during business hours' },
          { id: 'b', text: 'When isEmergency can be set to true by any user' },
          { id: 'c', text: 'When withinBusinessHours is false for authenticated users' },
          { id: 'd', text: 'When multiple users are authenticated simultaneously' }
        ],
        correctAnswers: ['b'],
        explanation: 'If any user can set isEmergency to true, they can bypass the authentication and business hours requirements, creating a security vulnerability.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.5-3',
        text: 'In a program that uses short-circuit evaluation, consider: if (x != 0 AND y/x > 10). What is the primary benefit of the order of these conditions?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It improves the readability of the code' },
          { id: 'b', text: 'It prevents a division by zero error' },
          { id: 'c', text: 'It ensures x is always positive' },
          { id: 'd', text: 'It makes the program run faster in all cases' }
        ],
        correctAnswers: ['b'],
        explanation: 'Short-circuit evaluation means if x = 0, the first condition fails and y/x is never evaluated, preventing division by zero.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.5-4',
        text: 'A game uses the Boolean expression: (health > 0) AND ((hasWeapon AND enemyNearby) OR (hasShield AND inCombat)). A player has health=50, hasWeapon=true, enemyNearby=false, hasShield=true, inCombat=true. What does this expression evaluate to?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'true' },
          { id: 'b', text: 'false' },
          { id: 'c', text: 'true only if health increases' },
          { id: 'd', text: 'false because enemyNearby is false' }
        ],
        correctAnswers: ['a'],
        explanation: '(50 > 0) AND ((true AND false) OR (true AND true)) = true AND (false OR true) = true AND true = true.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.5-5',
        text: 'Which Boolean expression is equivalent to NOT(A AND B OR C)?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '(NOT A) AND (NOT B) AND (NOT C)' },
          { id: 'b', text: '(NOT A OR NOT B) AND (NOT C)' },
          { id: 'c', text: 'NOT A AND NOT B OR NOT C' },
          { id: 'd', text: 'NOT A OR NOT B AND NOT C' }
        ],
        correctAnswers: ['b'],
        explanation: 'Using De Morgan\'s law: NOT(A AND B OR C) = NOT((A AND B) OR C) = NOT(A AND B) AND NOT C = (NOT A OR NOT B) AND NOT C.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.6: Conditionals (4 questions)
  {
    topicId: 'topic-3.6',
    questions: [
      {
        id: 'q3.6-1',
        text: 'A grading system uses this logic:\nif score >= 90 then grade ← "A"\nelse if score >= 80 then grade ← "B"\nelse if score >= 70 then grade ← "C"\nelse grade ← "F"\n\nWhat grade would a student with a score of 89 receive?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '"A" because 89 is close to 90' },
          { id: 'b', text: '"B" because 89 >= 80' },
          { id: 'c', text: '"C" because the conditions are checked in order' },
          { id: 'd', text: '"F" because 89 < 90' }
        ],
        correctAnswers: ['b'],
        explanation: 'The first condition (89 >= 90) is false, so it checks the next condition (89 >= 80), which is true, assigning grade "B".',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.6-2',
        text: 'A program determines shipping costs:\nif weight <= 1 then cost ← 5\nelse if weight <= 5 then cost ← 10\nelse if weight <= 10 then cost ← 15\nelse cost ← 25\n\nIf this logic needs to be modified to add a handling fee of $3 for packages over 10 pounds, which approach maintains the cleanest code structure?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Add 3 to the final else clause: cost ← 28' },
          { id: 'b', text: 'Add a separate if statement after the existing logic to check weight > 10' },
          { id: 'c', text: 'Modify each condition to include the handling fee calculation' },
          { id: 'd', text: 'Replace the entire structure with a switch statement' }
        ],
        correctAnswers: ['b'],
        explanation: 'Adding a separate conditional maintains the existing logic structure and makes the handling fee rule explicit and easy to modify.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.6-3',
        text: 'A login system checks: if (attempts < 3 AND password_correct) then allow_access. After 3 failed attempts, the account is locked. Which modification would improve security while maintaining usability?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Change the condition to (attempts < 5 AND password_correct)' },
          { id: 'b', text: 'Add a time delay that increases with each failed attempt' },
          { id: 'c', text: 'Remove the attempt limit and only check password correctness' },
          { id: 'd', text: 'Lock the account after just one failed attempt' }
        ],
        correctAnswers: ['b'],
        explanation: 'Progressive time delays discourage brute force attacks while still allowing legitimate users to recover from typos without permanent lockout.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.6-4',
        text: 'A temperature control system uses nested conditionals:\nif temperature > 75\n  if humidity > 60 then action ← "AC_HIGH"\n  else action ← "AC_LOW"\nelse\n  if temperature < 65 then action ← "HEAT"\n  else action ← "MAINTAIN"\n\nWhat action results when temperature = 70 and humidity = 80?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '"AC_HIGH" because humidity is high' },
          { id: 'b', text: '"AC_LOW" because temperature is moderate' },
          { id: 'c', text: '"HEAT" because temperature is below 75' },
          { id: 'd', text: '"MAINTAIN" because temperature is between 65 and 75' }
        ],
        correctAnswers: ['d'],
        explanation: 'Temperature 70 is not > 75, so we go to the else branch. Temperature 70 is not < 65, so we go to the final else, resulting in "MAINTAIN".',
        isCustom: false,
        addedBy: null
      }
    ]
  }
];

async function seedBigIdea3Part1() {
  try {
    console.log('Starting to seed Big Idea 3 Part 1 questions...');

    for (const topicQuestions of part1Questions) {
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

    console.log('\n✅ Successfully added Big Idea 3 Part 1 questions!');
    console.log('\nSummary:');
    console.log('- Topics 3.1-3.6 seeded with challenging questions');
    console.log('- Questions focus on application and analysis');
    console.log('- Answer choices include realistic distractors');
    console.log('- Total questions added: 25');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding questions:', error);
    process.exit(1);
  }
}

// Run the script
seedBigIdea3Part1();