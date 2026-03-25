const { db } = require('./server/firebase');

// Big Idea 3 Part 2: Advanced Questions for Topics 3.7-3.12
// Topics: Nested Conditionals, Iteration, Developing Algorithms, Lists, Binary Search, Calling Procedures

const part2Questions = [
  // Topic 3.7: Nested Conditionals (4 questions)
  {
    topicId: 'topic-3.7',
    questions: [
      {
        id: 'q3.7-1',
        text: 'A ride-sharing app uses nested conditionals to determine surge pricing:\n\nif weather == "storm"\n  if demand > 50 then price ← base * 3.0\n  else price ← base * 2.5\nelse\n  if demand > 100 then price ← base * 2.0\n  else if demand > 50 then price ← base * 1.5\n  else price ← base\n\nWhat price multiplier is applied when weather="clear" and demand=75?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '1.0 (base price)' },
          { id: 'b', text: '1.5 times base price' },
          { id: 'c', text: '2.0 times base price' },
          { id: 'd', text: '2.5 times base price' }
        ],
        correctAnswers: ['b'],
        explanation: 'Weather is not "storm", so we go to the else branch. Demand 75 is not > 100, but is > 50, so price = base * 1.5.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.7-2',
        text: 'A student information system processes transcript requests with this nested logic:\n\nif student_enrolled\n  if grades_complete\n    if fees_paid then status ← "approved"\n    else status ← "pending_payment"\n  else status ← "pending_grades"\nelse status ← "not_eligible"\n\nWhat is the primary benefit of this nested structure compared to using multiple separate if statements?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It executes faster by avoiding unnecessary condition checks' },
          { id: 'b', text: 'It prevents contradictory status assignments' },
          { id: 'c', text: 'It requires less memory to execute' },
          { id: 'd', text: 'It automatically handles all edge cases' }
        ],
        correctAnswers: ['a'],
        explanation: 'Nested conditionals use short-circuit logic - if student_enrolled is false, the inner conditions are never evaluated, improving efficiency.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.7-3',
        text: 'A security system uses deeply nested conditionals to grant access. The nesting becomes difficult to read and maintain. Which refactoring approach would improve code quality while maintaining the same logic?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Convert nested ifs to a single complex Boolean expression' },
          { id: 'b', text: 'Use guard clauses with early returns for failure conditions' },
          { id: 'c', text: 'Replace all conditionals with a switch statement' },
          { id: 'd', text: 'Combine all conditions into one massive if statement' }
        ],
        correctAnswers: ['b'],
        explanation: 'Guard clauses handle failure conditions early with returns, reducing nesting depth and improving readability while maintaining the same logic flow.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.7-4',
        text: 'An e-commerce system determines shipping methods:\n\nif weight < 2\n  if priority then method ← "express_small"\n  else method ← "standard_small"\nelse\n  if destination == "local"\n    if priority then method ← "local_rush"\n    else method ← "local_standard"\n  else\n    if weight < 10 then method ← "ground"\n    else method ← "freight"\n\nFor a package with weight=5, destination="remote", priority=true, what shipping method is selected?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '"express_small"' },
          { id: 'b', text: '"local_rush"' },
          { id: 'c', text: '"ground"' },
          { id: 'd', text: '"freight"' }
        ],
        correctAnswers: ['c'],
        explanation: 'Weight 5 is not < 2, destination "remote" is not "local", so we go to the final else branch. Weight 5 < 10, so method = "ground".',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.8: Iteration (5 questions)
  {
    topicId: 'topic-3.8',
    questions: [
      {
        id: 'q3.8-1',
        text: 'A program calculates compound interest using this loop:\n\nbalance ← 1000\nfor i = 1 to 5\n  balance ← balance * 1.05\n\nAfter the loop completes, which value is closest to the final balance?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '$1,250' },
          { id: 'b', text: '$1,276' },
          { id: 'c', text: '$1,300' },
          { id: 'd', text: '$1,325' }
        ],
        correctAnswers: ['b'],
        explanation: '$1000 * (1.05)^5 = $1000 * 1.2762815625 ≈ $1,276. The compound interest formula is applied 5 times.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.8-2',
        text: 'A data processing application needs to find the maximum value in a list of sensor readings. Which iteration approach provides the most reliable error handling?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Use a for loop and assume the first element is always the maximum' },
          { id: 'b', text: 'Use a while loop and check for empty list before starting' },
          { id: 'c', text: 'Use nested loops to compare every element with every other element' },
          { id: 'd', text: 'Use recursion instead of iteration for better performance' }
        ],
        correctAnswers: ['b'],
        explanation: 'Checking for an empty list before iteration prevents errors, and a while loop allows for flexible continuation conditions based on data validity.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.8-3',
        text: 'A program uses this loop to process user input:\n\nrepeat\n  input ← getUserInput()\n  processInput(input)\nuntil input == "quit"\n\nWhat potential issue exists with this implementation?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The loop will never execute if the first input is "quit"' },
          { id: 'b', text: 'The "quit" command will be processed before the loop exits' },
          { id: 'c', text: 'The loop cannot handle multiple consecutive "quit" commands' },
          { id: 'd', text: 'The getUserInput() function is called too many times' }
        ],
        correctAnswers: ['b'],
        explanation: 'In a repeat-until loop, the condition is checked after execution, so "quit" gets processed by processInput() before the loop terminates.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.8-4',
        text: 'A sorting algorithm uses nested loops:\n\nfor i = 0 to n-2\n  for j = i+1 to n-1\n    if array[i] > array[j]\n      swap(array[i], array[j])\n\nThis represents which type of algorithm, and what is its time complexity?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Selection sort with O(n) complexity' },
          { id: 'b', text: 'Bubble sort with O(n²) complexity' },
          { id: 'c', text: 'Insertion sort with O(n log n) complexity' },
          { id: 'd', text: 'Selection sort variant with O(n²) complexity' }
        ],
        correctAnswers: ['d'],
        explanation: 'This is a selection sort variant that compares each element with all following elements. The nested loops create O(n²) time complexity.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.8-5',
        text: 'A program monitors system performance using this loop:\n\nwhile system_running\n  metrics ← collectMetrics()\n  if metrics.memory > 90%\n    break\n  sleep(1)\n\nanalert("High memory usage detected")\n\nWhat is the most significant weakness in this monitoring approach?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The loop checks memory too frequently' },
          { id: 'b', text: 'The break statement exits the loop but doesn\'t stop the system' },
          { id: 'c', text: 'There\'s no mechanism to handle temporary memory spikes' },
          { id: 'd', text: 'The sleep function may cause the program to miss critical events' }
        ],
        correctAnswers: ['c'],
        explanation: 'The loop immediately triggers an alert on a single high reading without confirming if it\'s a sustained issue, potentially causing false alarms.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.9: Developing Algorithms (4 questions)
  {
    topicId: 'topic-3.9',
    questions: [
      {
        id: 'q3.9-1',
        text: 'A programmer needs to develop an algorithm to find duplicate emails in a user database. Which approach demonstrates the most efficient algorithmic thinking?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Compare every email with every other email (nested loops)' },
          { id: 'b', text: 'Sort the emails first, then check adjacent entries for duplicates' },
          { id: 'c', text: 'Use a hash table to track seen emails while iterating once' },
          { id: 'd', text: 'Convert all emails to lowercase and remove punctuation before comparing' }
        ],
        correctAnswers: ['c'],
        explanation: 'A hash table approach allows O(n) time complexity by checking each email against previously seen emails in constant time.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.9-2',
        text: 'When developing an algorithm to schedule tasks based on priority and deadline, which algorithmic design principle should be the primary consideration?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Minimize the number of lines of code required' },
          { id: 'b', text: 'Balance multiple competing objectives (priority vs. deadline)' },
          { id: 'c', text: 'Always process tasks in the order they were submitted' },
          { id: 'd', text: 'Ensure the algorithm can handle unlimited numbers of tasks' }
        ],
        correctAnswers: ['b'],
        explanation: 'Effective scheduling algorithms must balance competing objectives, requiring careful consideration of trade-offs between different criteria.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.9-3',
        text: 'A team is developing an algorithm to recommend products to customers. They start with a simple approach and plan to refine it based on user feedback. This demonstrates which important algorithmic development principle?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Premature optimization should be avoided' },
          { id: 'b', text: 'Iterative refinement based on real-world testing' },
          { id: 'c', text: 'Complex algorithms are always better than simple ones' },
          { id: 'd', text: 'User feedback is irrelevant to algorithmic design' }
        ],
        correctAnswers: ['b'],
        explanation: 'Starting simple and refining based on feedback is a fundamental principle of good algorithm development, allowing for evidence-based improvements.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.9-4',
        text: 'An algorithm development team faces this problem: "Find the shortest route between two cities." Which step should come first in their algorithmic development process?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Research existing shortest-path algorithms like Dijkstra\'s' },
          { id: 'b', text: 'Define what "shortest" means in the context of their specific problem' },
          { id: 'c', text: 'Start coding a solution immediately to test feasibility' },
          { id: 'd', text: 'Gather data about all possible routes between cities' }
        ],
        correctAnswers: ['b'],
        explanation: 'Problem definition is crucial - "shortest" could mean distance, time, cost, or other metrics. Clear requirements must precede algorithmic design.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.10: Lists (4 questions)
  {
    topicId: 'topic-3.10',
    questions: [
      {
        id: 'q3.10-1',
        text: 'A playlist application stores songs in a list: ["Song A", "Song B", "Song C", "Song D"]. After executing playlist.remove("Song B") followed by playlist.insert(1, "Song E"), what is the final order?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '["Song A", "Song E", "Song C", "Song D"]' },
          { id: 'b', text: '["Song A", "Song E", "Song B", "Song C", "Song D"]' },
          { id: 'c', text: '["Song E", "Song A", "Song C", "Song D"]' },
          { id: 'd', text: '["Song A", "Song C", "Song E", "Song D"]' }
        ],
        correctAnswers: ['a'],
        explanation: 'After removing "Song B": ["Song A", "Song C", "Song D"]. Then inserting "Song E" at position 1: ["Song A", "Song E", "Song C", "Song D"].',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.10-2',
        text: 'A program processes a list of student scores: [85, 92, 78, 96, 89]. It needs to find students who scored above average. Which approach demonstrates efficient list processing?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Calculate average inside the loop that checks each score' },
          { id: 'b', text: 'Calculate average first, then use a separate loop to find above-average scores' },
          { id: 'c', text: 'Sort the list first, then take the top half as above average' },
          { id: 'd', text: 'Use nested loops to compare each score with every other score' }
        ],
        correctAnswers: ['b'],
        explanation: 'Calculating the average once first (O(n)), then filtering in a second pass (O(n)) is more efficient than recalculating average for each comparison.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.10-3',
        text: 'A shopping cart system uses a list to store items. When a user removes an item, the system needs to update quantities and recalculate totals. Which list operation consideration is most important?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Maintaining items in alphabetical order at all times' },
          { id: 'b', text: 'Preserving the user\'s original item ordering preferences' },
          { id: 'c', text: 'Ensuring list operations don\'t invalidate other references to items' },
          { id: 'd', text: 'Minimizing the memory usage of each list element' }
        ],
        correctAnswers: ['c'],
        explanation: 'When other parts of the system reference cart items, removing items must be handled carefully to avoid broken references or inconsistent state.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.10-4',
        text: 'A program merges two sorted lists: list1 = [1, 5, 9] and list2 = [3, 7, 8, 12]. Using a two-pointer approach, what is the correct merged result?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '[1, 3, 5, 7, 8, 9, 12]' },
          { id: 'b', text: '[1, 5, 9, 3, 7, 8, 12]' },
          { id: 'c', text: '[1, 3, 5, 7, 9, 8, 12]' },
          { id: 'd', text: '[3, 1, 7, 5, 8, 9, 12]' }
        ],
        correctAnswers: ['a'],
        explanation: 'Two-pointer merge maintains sorted order: compare heads of both lists, take smaller value, advance that pointer. Result: [1, 3, 5, 7, 8, 9, 12].',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.11: Binary Search (4 questions)
  {
    topicId: 'topic-3.11',
    questions: [
      {
        id: 'q3.11-1',
        text: 'A binary search is performed on the sorted list [2, 5, 8, 12, 16, 23, 38, 45, 67, 78, 89, 99] looking for the value 23. How many comparisons will be made?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '2 comparisons' },
          { id: 'b', text: '3 comparisons' },
          { id: 'c', text: '4 comparisons' },
          { id: 'd', text: '6 comparisons' }
        ],
        correctAnswers: ['c'],
        explanation: 'First: compare with 45 (middle), 23 < 45. Second: compare with 12, 23 > 12. Third: compare with 16, 23 > 16. Fourth: compare with 23, found! Total: 4 comparisons.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.11-2',
        text: 'A programmer implements binary search but forgets to verify that the input list is sorted. What is the most likely outcome when searching an unsorted list?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The algorithm will automatically sort the list first' },
          { id: 'b', text: 'The search will take longer but still find the correct result' },
          { id: 'c', text: 'The search may fail to find elements that are actually present' },
          { id: 'd', text: 'The program will crash with a runtime error' }
        ],
        correctAnswers: ['c'],
        explanation: 'Binary search assumes sorted data to make elimination decisions. On unsorted data, it may eliminate the wrong half, missing elements that are present.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.11-3',
        text: 'A database system uses binary search to find records by ID in a sorted table of 1 million records. Approximately how many comparisons are needed in the worst case?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '10 comparisons' },
          { id: 'b', text: '20 comparisons' },
          { id: 'c', text: '1000 comparisons' },
          { id: 'd', text: '500,000 comparisons' }
        ],
        correctAnswers: ['b'],
        explanation: 'Binary search has O(log₂ n) complexity. For 1 million records: log₂(1,000,000) ≈ 20 comparisons in the worst case.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.11-4',
        text: 'A modified binary search needs to find the first occurrence of a value in a sorted list that may contain duplicates: [1, 3, 5, 5, 5, 7, 9]. When searching for 5, what modification to standard binary search is required?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Continue searching left even after finding a match' },
          { id: 'b', text: 'Use linear search once any 5 is found' },
          { id: 'c', text: 'Count all occurrences while searching' },
          { id: 'd', text: 'Start the search from the leftmost position' }
        ],
        correctAnswers: ['a'],
        explanation: 'To find the first occurrence, when target is found, continue searching the left half to ensure no earlier occurrence exists.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 3.12: Calling Procedures (4 questions)
  {
    topicId: 'topic-3.12',
    questions: [
      {
        id: 'q3.12-1',
        text: 'A program calls: result ← calculateTax(income: 50000, rate: 0.15, deductions: 5000). If the calculateTax procedure returns (income - deductions) * rate, what value is stored in result?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '6750' },
          { id: 'b', text: '7500' },
          { id: 'c', text: '6000' },
          { id: 'd', text: '8250' }
        ],
        correctAnswers: ['a'],
        explanation: '(50000 - 5000) * 0.15 = 45000 * 0.15 = 6750. The procedure subtracts deductions from income, then multiplies by the tax rate.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.12-2',
        text: 'A graphics program has these procedure calls:\n\ndrawCircle(x: 100, y: 200, radius: 50)\nsetColor("blue")\ndrawCircle(x: 150, y: 250, radius: 30)\n\nWhat is the most likely intended outcome?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Two circles, both blue' },
          { id: 'b', text: 'Two circles, first default color, second blue' },
          { id: 'c', text: 'Only the second circle is drawn' },
          { id: 'd', text: 'Two circles with different radii but same color' }
        ],
        correctAnswers: ['b'],
        explanation: 'The first circle is drawn with default color, then color is set to blue, then the second circle is drawn in blue.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.12-3',
        text: 'A program has this procedure call chain: main() calls processData(), which calls validateInput(), which calls checkFormat(). If checkFormat() encounters an error, which approach provides the best error handling?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'checkFormat() fixes the error and continues silently' },
          { id: 'b', text: 'checkFormat() returns an error code that propagates up the call chain' },
          { id: 'c', text: 'checkFormat() immediately terminates the entire program' },
          { id: 'd', text: 'checkFormat() calls main() directly to restart processing' }
        ],
        correctAnswers: ['b'],
        explanation: 'Returning error codes allows each level to decide how to handle the error, providing flexibility and maintaining proper separation of concerns.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3.12-4',
        text: 'A banking system calls: transferFunds(fromAccount: "123", toAccount: "456", amount: 1000). The procedure should ensure atomicity (all-or-nothing). Which implementation approach is most appropriate?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Immediately deduct from source account, then add to destination account' },
          { id: 'b', text: 'Verify both accounts exist and have sufficient funds before making any changes' },
          { id: 'c', text: 'Process the transfer in multiple separate procedure calls' },
          { id: 'd', text: 'Allow partial transfers if the full amount cannot be processed' }
        ],
        correctAnswers: ['b'],
        explanation: 'Verification before modification ensures atomicity - either the complete transfer succeeds or nothing changes, preventing inconsistent states.',
        isCustom: false,
        addedBy: null
      }
    ]
  }
];

async function seedBigIdea3Part2() {
  try {
    console.log('Starting to seed Big Idea 3 Part 2 questions...');

    for (const topicQuestions of part2Questions) {
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

    console.log('\n✅ Successfully added Big Idea 3 Part 2 questions!');
    console.log('\nSummary:');
    console.log('- Topics 3.7-3.12 seeded with challenging questions');
    console.log('- Questions emphasize real-world applications');
    console.log('- Distractors are plausible alternative solutions');
    console.log('- Total questions added: 25');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding questions:', error);
    process.exit(1);
  }
}

// Run the script
seedBigIdea3Part2();