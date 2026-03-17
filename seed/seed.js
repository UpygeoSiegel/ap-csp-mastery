const { db } = require('../server/firebase');

// AP CSP Topics Data - First 5 Topics
const topicsData = [
  {
    id: 'unit1-topic1',
    name: 'Number systems and binary',
    unit: 'Unit 1: Digital Information',
    order: 1,
    questions: [
      {
        id: 'q1-1',
        text: 'What is the decimal value of the binary number 1011?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '9' },
          { id: 'b', text: '11' },
          { id: 'c', text: '13' },
          { id: 'd', text: '15' }
        ],
        correctAnswers: ['b'],
        explanation: 'Binary 1011 = (1×8) + (0×4) + (1×2) + (1×1) = 8 + 0 + 2 + 1 = 11',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-2',
        text: 'Which of the following is the binary representation of decimal 7?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '101' },
          { id: 'b', text: '110' },
          { id: 'c', text: '111' },
          { id: 'd', text: '1000' }
        ],
        correctAnswers: ['c'],
        explanation: 'Decimal 7 in binary is 111 (4+2+1 = 7)',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-3',
        text: 'Select all that apply: Which number systems are commonly used in computer science?',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Binary (base 2)' },
          { id: 'b', text: 'Decimal (base 10)' },
          { id: 'c', text: 'Hexadecimal (base 16)' },
          { id: 'd', text: 'Octal (base 8)' },
          { id: 'e', text: 'Base 5' }
        ],
        correctAnswers: ['a', 'b', 'c', 'd'],
        explanation: 'Binary, decimal, hexadecimal, and octal are all commonly used in computer science. Base 5 is not commonly used.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-4',
        text: 'What is the largest decimal number that can be represented with 4 bits?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '8' },
          { id: 'b', text: '15' },
          { id: 'c', text: '16' },
          { id: 'd', text: '31' }
        ],
        correctAnswers: ['b'],
        explanation: 'With 4 bits, you can represent 2^4 = 16 different values (0-15). The largest is 15 (binary 1111).',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-5',
        text: 'In hexadecimal notation, what does the digit "F" represent in decimal?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '10' },
          { id: 'b', text: '14' },
          { id: 'c', text: '15' },
          { id: 'd', text: '16' }
        ],
        correctAnswers: ['c'],
        explanation: 'In hexadecimal, F represents the decimal value 15. The hex digits are 0-9, A(10), B(11), C(12), D(13), E(14), F(15).',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-6',
        text: 'What is the binary equivalent of hexadecimal A?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '1010' },
          { id: 'b', text: '1100' },
          { id: 'c', text: '1111' },
          { id: 'd', text: '1001' }
        ],
        correctAnswers: ['a'],
        explanation: 'Hexadecimal A = decimal 10 = binary 1010',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-7',
        text: 'Which statement about number systems is correct?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Binary uses digits 0-2' },
          { id: 'b', text: 'Decimal uses digits 0-9' },
          { id: 'c', text: 'Hexadecimal uses digits 0-15' },
          { id: 'd', text: 'Octal uses digits 0-9' }
        ],
        correctAnswers: ['b'],
        explanation: 'Decimal uses digits 0-9. Binary uses 0-1, hexadecimal uses 0-9 and A-F, octal uses 0-7.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-8',
        text: 'How many bits are needed to represent decimal numbers from 0 to 63?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '5 bits' },
          { id: 'b', text: '6 bits' },
          { id: 'c', text: '7 bits' },
          { id: 'd', text: '8 bits' }
        ],
        correctAnswers: ['b'],
        explanation: '6 bits can represent 2^6 = 64 values (0-63). 5 bits would only give us 0-31.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-9',
        text: 'What is 15 + 7 in binary arithmetic?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '10110' },
          { id: 'b', text: '11000' },
          { id: 'c', text: '10111' },
          { id: 'd', text: '11110' }
        ],
        correctAnswers: ['a'],
        explanation: '15 (1111) + 7 (111) = 22 (10110) in binary',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-10',
        text: 'Select all correct statements about place values in binary:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'The rightmost bit represents 2^0' },
          { id: 'b', text: 'Each position is double the previous' },
          { id: 'c', text: 'The leftmost bit is the most significant' },
          { id: 'd', text: 'Binary uses powers of 10' }
        ],
        correctAnswers: ['a', 'b', 'c'],
        explanation: 'Binary uses powers of 2, not 10. The rightmost bit is 2^0=1, each position doubles, and the leftmost bit is most significant.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-11',
        text: 'What is the decimal value of binary 10101?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '19' },
          { id: 'b', text: '21' },
          { id: 'c', text: '23' },
          { id: 'd', text: '25' }
        ],
        correctAnswers: ['b'],
        explanation: 'Binary 10101 = 16 + 0 + 4 + 0 + 1 = 21',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-12',
        text: 'Which hexadecimal digit represents decimal 13?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'C' },
          { id: 'b', text: 'D' },
          { id: 'c', text: 'E' },
          { id: 'd', text: 'F' }
        ],
        correctAnswers: ['b'],
        explanation: 'D in hexadecimal represents decimal 13',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-13',
        text: 'What is the purpose of using different number systems in computing?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'To make calculations harder' },
          { id: 'b', text: 'To represent data efficiently for different purposes' },
          { id: 'c', text: 'To confuse programmers' },
          { id: 'd', text: 'To use more memory' }
        ],
        correctAnswers: ['b'],
        explanation: 'Different number systems allow efficient representation of data for various purposes (binary for machine code, hex for memory addresses, etc.)',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-14',
        text: 'Convert decimal 25 to binary:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '11001' },
          { id: 'b', text: '11010' },
          { id: 'c', text: '11011' },
          { id: 'd', text: '11100' }
        ],
        correctAnswers: ['a'],
        explanation: 'Decimal 25 = 16 + 8 + 1 = binary 11001',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-15',
        text: 'Select all that apply: In which situations would hexadecimal be preferred over decimal?',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Memory addresses' },
          { id: 'b', text: 'Color codes in web design' },
          { id: 'c', text: 'Basic arithmetic' },
          { id: 'd', text: 'Debugging machine code' },
          { id: 'e', text: 'Shopping calculations' }
        ],
        correctAnswers: ['a', 'b', 'd'],
        explanation: 'Hexadecimal is useful for memory addresses, color codes, and debugging because it compactly represents binary data. Basic arithmetic and shopping use decimal.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-16',
        text: 'What is the octal equivalent of decimal 64?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '80' },
          { id: 'b', text: '100' },
          { id: 'c', text: '110' },
          { id: 'd', text: '120' }
        ],
        correctAnswers: ['b'],
        explanation: 'Decimal 64 = 8^2 = 100 in octal (base 8)',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-17',
        text: 'Why do computers use binary internally?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It\'s easier for humans to understand' },
          { id: 'b', text: 'Electronic switches have two states: on/off' },
          { id: 'c', text: 'It uses less electricity' },
          { id: 'd', text: 'It was chosen randomly' }
        ],
        correctAnswers: ['b'],
        explanation: 'Computers use binary because electronic circuits naturally have two states - on (1) and off (0), making binary the most natural representation.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-18',
        text: 'What is the range of values that can be represented with 8 bits?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '0 to 127' },
          { id: 'b', text: '0 to 255' },
          { id: 'c', text: '0 to 256' },
          { id: 'd', text: '1 to 256' }
        ],
        correctAnswers: ['b'],
        explanation: '8 bits can represent 2^8 = 256 different values, ranging from 0 to 255.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-19',
        text: 'Convert hexadecimal 2F to decimal:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '45' },
          { id: 'b', text: '47' },
          { id: 'c', text: '49' },
          { id: 'd', text: '51' }
        ],
        correctAnswers: ['b'],
        explanation: 'Hex 2F = (2×16) + 15 = 32 + 15 = 47',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-20',
        text: 'Select all advantages of using hexadecimal notation:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'More compact than binary' },
          { id: 'b', text: 'Easy conversion to/from binary' },
          { id: 'c', text: 'Uses familiar 0-9 digits only' },
          { id: 'd', text: 'Commonly used in programming' },
          { id: 'e', text: 'Each hex digit represents 4 bits' }
        ],
        correctAnswers: ['a', 'b', 'd', 'e'],
        explanation: 'Hexadecimal is compact, easily converts to binary, is common in programming, and each digit represents 4 bits. It uses 0-9 and A-F.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-21',
        text: 'What happens when you add 1 to the largest value representable with n bits?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The result is still the largest value' },
          { id: 'b', text: 'An overflow occurs' },
          { id: 'c', text: 'The computer crashes' },
          { id: 'd', text: 'Nothing happens' }
        ],
        correctAnswers: ['b'],
        explanation: 'Adding 1 to the largest representable value causes an overflow, where the result cannot be represented with the available bits.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-22',
        text: 'Which statement about binary arithmetic is correct?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '1 + 1 = 2' },
          { id: 'b', text: '1 + 1 = 10' },
          { id: 'c', text: '1 + 1 = 11' },
          { id: 'd', text: '1 + 1 = 0' }
        ],
        correctAnswers: ['b'],
        explanation: 'In binary, 1 + 1 = 10 (which represents decimal 2)',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-23',
        text: 'How many unique values can be represented with 3 bits?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '6' },
          { id: 'b', text: '8' },
          { id: 'c', text: '9' },
          { id: 'd', text: '12' }
        ],
        correctAnswers: ['b'],
        explanation: '3 bits can represent 2^3 = 8 unique values (000, 001, 010, 011, 100, 101, 110, 111)',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-24',
        text: 'Select all correct conversions:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Binary 1100 = Decimal 12' },
          { id: 'b', text: 'Hexadecimal A = Decimal 10' },
          { id: 'c', text: 'Binary 1111 = Hexadecimal F' },
          { id: 'd', text: 'Decimal 8 = Binary 1000' },
          { id: 'e', text: 'Hexadecimal FF = Decimal 256' }
        ],
        correctAnswers: ['a', 'b', 'c', 'd'],
        explanation: 'All conversions are correct except FF = 255, not 256. (15×16 + 15 = 240 + 15 = 255)',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q1-25',
        text: 'What is the primary reason for learning different number systems in computer science?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'To impress other programmers' },
          { id: 'b', text: 'To understand how computers represent and process data' },
          { id: 'c', text: 'To make programming more difficult' },
          { id: 'd', text: 'To use more complex notation' }
        ],
        correctAnswers: ['b'],
        explanation: 'Understanding different number systems is essential for comprehending how computers represent and process data at the fundamental level.',
        isCustom: false,
        addedBy: null
      }
    ]
  },
  {
    id: 'unit1-topic2',
    name: 'Bits, bytes, and data representation',
    unit: 'Unit 1: Digital Information',
    order: 2,
    questions: [
      {
        id: 'q2-1',
        text: 'How many bits are in one byte?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '4' },
          { id: 'b', text: '6' },
          { id: 'c', text: '8' },
          { id: 'd', text: '16' }
        ],
        correctAnswers: ['c'],
        explanation: 'One byte consists of 8 bits. This is a fundamental unit of data storage in computers.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-2',
        text: 'What is the smallest unit of data in a computer?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Byte' },
          { id: 'b', text: 'Bit' },
          { id: 'c', text: 'Nibble' },
          { id: 'd', text: 'Word' }
        ],
        correctAnswers: ['b'],
        explanation: 'A bit (binary digit) is the smallest unit of data, representing a single 0 or 1.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-3',
        text: 'Select all that apply: Which of these are valid data sizes?',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Kilobyte (KB)' },
          { id: 'b', text: 'Megabyte (MB)' },
          { id: 'c', text: 'Gigabyte (GB)' },
          { id: 'd', text: 'Terabyte (TB)' },
          { id: 'e', text: 'Petabyte (PB)' }
        ],
        correctAnswers: ['a', 'b', 'c', 'd', 'e'],
        explanation: 'All listed options are valid data sizes, representing increasingly larger amounts of data storage.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-4',
        text: 'How many bytes are in a kilobyte (KB)?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '1000' },
          { id: 'b', text: '1024' },
          { id: 'c', text: '1048' },
          { id: 'd', text: '2048' }
        ],
        correctAnswers: ['b'],
        explanation: 'A kilobyte is 1024 bytes (2^10 bytes), though sometimes approximated as 1000 bytes in decimal systems.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-5',
        text: 'What does ASCII stand for?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'American Standard Code for Information Interchange' },
          { id: 'b', text: 'Advanced System Code for Internet Integration' },
          { id: 'c', text: 'Automated Standard Computer Information Index' },
          { id: 'd', text: 'American Software Code for International Integration' }
        ],
        correctAnswers: ['a'],
        explanation: 'ASCII stands for American Standard Code for Information Interchange, a character encoding standard.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-6',
        text: 'How many different characters can standard ASCII represent?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '64' },
          { id: 'b', text: '128' },
          { id: 'c', text: '256' },
          { id: 'd', text: '512' }
        ],
        correctAnswers: ['b'],
        explanation: 'Standard ASCII uses 7 bits, allowing for 2^7 = 128 different characters (0-127).',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-7',
        text: 'What type of data can be represented in binary?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Only numbers' },
          { id: 'b', text: 'Only text' },
          { id: 'c', text: 'Only images' },
          { id: 'd', text: 'All types of data' }
        ],
        correctAnswers: ['d'],
        explanation: 'Binary can represent all types of data including numbers, text, images, audio, video, and program instructions.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-8',
        text: 'Select all ways that images are commonly represented digitally:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Pixels with RGB values' },
          { id: 'b', text: 'Vector graphics with mathematical descriptions' },
          { id: 'c', text: 'Bitmap arrays' },
          { id: 'd', text: 'Compressed formats' },
          { id: 'e', text: 'Sound waves' }
        ],
        correctAnswers: ['a', 'b', 'c', 'd'],
        explanation: 'Images can be represented as pixels with RGB values, vector graphics, bitmaps, or compressed formats. Sound waves represent audio, not images.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-9',
        text: 'What does RGB stand for in digital image representation?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Real Graphics Blue' },
          { id: 'b', text: 'Red Green Blue' },
          { id: 'c', text: 'Random Generated Bitmap' },
          { id: 'd', text: 'Rapid Graphics Buffer' }
        ],
        correctAnswers: ['b'],
        explanation: 'RGB stands for Red Green Blue, the three primary colors used in digital displays and image representation.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-10',
        text: 'How many bits are typically used to represent each color component in RGB?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '4 bits' },
          { id: 'b', text: '6 bits' },
          { id: 'c', text: '8 bits' },
          { id: 'd', text: '16 bits' }
        ],
        correctAnswers: ['c'],
        explanation: '8 bits (1 byte) per color component is standard, allowing 256 levels (0-255) for each red, green, and blue component.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-11',
        text: 'What is the total number of possible colors in a standard 24-bit RGB system?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'About 16 thousand' },
          { id: 'b', text: 'About 65 thousand' },
          { id: 'c', text: 'About 16 million' },
          { id: 'd', text: 'About 16 billion' }
        ],
        correctAnswers: ['c'],
        explanation: '24-bit RGB uses 8 bits per component: 2^24 = 16,777,216 ≈ 16 million possible colors.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-12',
        text: 'Select all that apply: What factors affect the file size of a digital image?',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Image resolution (width × height)' },
          { id: 'b', text: 'Color depth (bits per pixel)' },
          { id: 'c', text: 'Compression method' },
          { id: 'd', text: 'File format' },
          { id: 'e', text: 'Monitor size' }
        ],
        correctAnswers: ['a', 'b', 'c', 'd'],
        explanation: 'Image file size depends on resolution, color depth, compression, and format. Monitor size affects display but not file size.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-13',
        text: 'What is a pixel?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'A type of computer processor' },
          { id: 'b', text: 'The smallest unit of a digital image' },
          { id: 'c', text: 'A compression algorithm' },
          { id: 'd', text: 'A file format' }
        ],
        correctAnswers: ['b'],
        explanation: 'A pixel (picture element) is the smallest controllable element of a digital image or display.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-14',
        text: 'How is sound typically digitized for computer storage?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'By converting it to text' },
          { id: 'b', text: 'By sampling the sound wave at regular intervals' },
          { id: 'c', text: 'By compressing the air molecules' },
          { id: 'd', text: 'By measuring the volume only' }
        ],
        correctAnswers: ['b'],
        explanation: 'Digital audio is created by sampling analog sound waves at regular intervals and converting the amplitude to digital values.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-15',
        text: 'What does "sampling rate" refer to in digital audio?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The volume of the sound' },
          { id: 'b', text: 'The frequency of measurements taken per second' },
          { id: 'c', text: 'The file size of the audio' },
          { id: 'd', text: 'The quality of the speakers' }
        ],
        correctAnswers: ['b'],
        explanation: 'Sampling rate is how many times per second the analog signal is measured and converted to digital form, measured in Hz.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-16',
        text: 'Select all that apply: Which of these affect the quality of digital audio?',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Sampling rate' },
          { id: 'b', text: 'Bit depth' },
          { id: 'c', text: 'Compression algorithm' },
          { id: 'd', text: 'File name' },
          { id: 'e', text: 'Number of channels (mono/stereo)' }
        ],
        correctAnswers: ['a', 'b', 'c', 'e'],
        explanation: 'Audio quality depends on sampling rate, bit depth, compression method, and channel count. File name doesn\'t affect quality.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-17',
        text: 'What is metadata in the context of digital files?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The main content of the file' },
          { id: 'b', text: 'Data that describes other data' },
          { id: 'c', text: 'Compressed file content' },
          { id: 'd', text: 'Backup copies of files' }
        ],
        correctAnswers: ['b'],
        explanation: 'Metadata is data that provides information about other data, such as file creation date, author, or image camera settings.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-18',
        text: 'Which statement about data representation is most accurate?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Computers can only store numbers' },
          { id: 'b', text: 'All data is ultimately represented as patterns of 0s and 1s' },
          { id: 'c', text: 'Text files contain actual letters' },
          { id: 'd', text: 'Images are stored as pictures' }
        ],
        correctAnswers: ['b'],
        explanation: 'All digital data, regardless of type, is ultimately represented as binary patterns of 0s and 1s in computer memory.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-19',
        text: 'What is the difference between a bit and a byte?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'A bit is larger than a byte' },
          { id: 'b', text: 'A byte contains 8 bits' },
          { id: 'c', text: 'They are the same size' },
          { id: 'd', text: 'A byte is used only for text' }
        ],
        correctAnswers: ['b'],
        explanation: 'A byte consists of 8 bits. A bit is the smallest unit (0 or 1), while a byte can represent larger values or characters.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-20',
        text: 'Select all examples of digital data types:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Integers' },
          { id: 'b', text: 'Floating-point numbers' },
          { id: 'c', text: 'Boolean values' },
          { id: 'd', text: 'Characters/strings' },
          { id: 'e', text: 'Physical objects' }
        ],
        correctAnswers: ['a', 'b', 'c', 'd'],
        explanation: 'Digital data types include integers, floating-point numbers, booleans, and characters. Physical objects are not digital data.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-21',
        text: 'How much data can a single bit store?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Two possible values (0 or 1)' },
          { id: 'b', text: 'Eight possible values' },
          { id: 'c', text: 'One letter' },
          { id: 'd', text: 'One number' }
        ],
        correctAnswers: ['a'],
        explanation: 'A single bit can store exactly two possible values: 0 or 1. This is the fundamental unit of digital information.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-22',
        text: 'What determines the resolution of a digital image?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The file size' },
          { id: 'b', text: 'The number of pixels (width × height)' },
          { id: 'c', text: 'The color depth' },
          { id: 'd', text: 'The compression ratio' }
        ],
        correctAnswers: ['b'],
        explanation: 'Image resolution is determined by the total number of pixels, expressed as width × height (e.g., 1920×1080).',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-23',
        text: 'Why do computers use binary to represent all data?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It\'s easier for humans to read' },
          { id: 'b', text: 'Electronic circuits can reliably distinguish between two states' },
          { id: 'c', text: 'It takes less memory' },
          { id: 'd', text: 'It\'s faster to calculate' }
        ],
        correctAnswers: ['b'],
        explanation: 'Binary is used because electronic circuits can reliably represent and distinguish between two states: on/off, high voltage/low voltage.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-24',
        text: 'Select all that apply: What information might be stored as metadata for a digital photo?',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Date and time taken' },
          { id: 'b', text: 'Camera model and settings' },
          { id: 'c', text: 'GPS location' },
          { id: 'd', text: 'File size' },
          { id: 'e', text: 'The actual image pixels' }
        ],
        correctAnswers: ['a', 'b', 'c', 'd'],
        explanation: 'Metadata includes date, camera info, location, and file properties. The actual image pixels are the primary data, not metadata.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q2-25',
        text: 'What is the relationship between file size and image quality?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Larger files always mean better quality' },
          { id: 'b', text: 'File size has no relationship to quality' },
          { id: 'c', text: 'Higher quality images generally require more data storage' },
          { id: 'd', text: 'Smaller files always mean better quality' }
        ],
        correctAnswers: ['c'],
        explanation: 'Generally, higher quality images (more pixels, more colors, less compression) require more storage space, though compression algorithms affect this relationship.',
        isCustom: false,
        addedBy: null
      }
    ]
  },
  {
    id: 'unit1-topic3',
    name: 'Text encoding (ASCII, Unicode)',
    unit: 'Unit 1: Digital Information',
    order: 3,
    questions: [
      {
        id: 'q3-1',
        text: 'What is the ASCII value of the uppercase letter "A"?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '64' },
          { id: 'b', text: '65' },
          { id: 'c', text: '66' },
          { id: 'd', text: '97' }
        ],
        correctAnswers: ['b'],
        explanation: 'The ASCII value of uppercase "A" is 65. Lowercase "a" is 97.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-2',
        text: 'What is a limitation of the original ASCII character set?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It only supports English characters' },
          { id: 'b', text: 'It\'s too slow to process' },
          { id: 'c', text: 'It uses too much memory' },
          { id: 'd', text: 'It\'s incompatible with modern computers' }
        ],
        correctAnswers: ['a'],
        explanation: 'ASCII only supports basic English characters and symbols, lacking support for international characters, accented letters, and non-Latin scripts.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-3',
        text: 'Select all that apply: Which characters are included in the ASCII character set?',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Uppercase letters A-Z' },
          { id: 'b', text: 'Lowercase letters a-z' },
          { id: 'c', text: 'Digits 0-9' },
          { id: 'd', text: 'Basic punctuation and symbols' },
          { id: 'e', text: 'Chinese characters' }
        ],
        correctAnswers: ['a', 'b', 'c', 'd'],
        explanation: 'ASCII includes English letters (upper and lowercase), digits, punctuation, and basic symbols. It does not include international characters like Chinese.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-4',
        text: 'What was Unicode created to solve?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Slow computer processing' },
          { id: 'b', text: 'Limited memory capacity' },
          { id: 'c', text: 'The need to represent all world languages and symbols' },
          { id: 'd', text: 'Network communication problems' }
        ],
        correctAnswers: ['c'],
        explanation: 'Unicode was created to provide a universal character encoding that can represent text from all writing systems and languages worldwide.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-5',
        text: 'How many bits does ASCII use to represent each character?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '6 bits' },
          { id: 'b', text: '7 bits' },
          { id: 'c', text: '8 bits' },
          { id: 'd', text: '16 bits' }
        ],
        correctAnswers: ['b'],
        explanation: 'Standard ASCII uses 7 bits per character, allowing for 128 different characters (0-127).',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-6',
        text: 'What is UTF-8?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'A type of computer processor' },
          { id: 'b', text: 'A variable-length Unicode encoding' },
          { id: 'c', text: 'A compression algorithm' },
          { id: 'd', text: 'A network protocol' }
        ],
        correctAnswers: ['b'],
        explanation: 'UTF-8 is a variable-length character encoding for Unicode that uses 1-4 bytes per character and is backward compatible with ASCII.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-7',
        text: 'Which character encoding is most commonly used on the web today?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'ASCII' },
          { id: 'b', text: 'UTF-8' },
          { id: 'c', text: 'UTF-16' },
          { id: 'd', text: 'ISO-8859-1' }
        ],
        correctAnswers: ['b'],
        explanation: 'UTF-8 is the dominant character encoding used on the web because of its efficiency and universal character support.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-8',
        text: 'Select all advantages of Unicode over ASCII:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Supports multiple languages' },
          { id: 'b', text: 'Includes emoji and symbols' },
          { id: 'c', text: 'Can represent mathematical symbols' },
          { id: 'd', text: 'Uses less memory' },
          { id: 'e', text: 'Backward compatible with ASCII' }
        ],
        correctAnswers: ['a', 'b', 'c', 'e'],
        explanation: 'Unicode supports multiple languages, emojis, mathematical symbols, and is backward compatible with ASCII. It typically uses more memory than ASCII.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-9',
        text: 'What happens when a computer encounters a character it cannot display?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The computer crashes' },
          { id: 'b', text: 'It shows a replacement character (like □ or ?)' },
          { id: 'c', text: 'It automatically downloads the character' },
          { id: 'd', text: 'It converts to ASCII' }
        ],
        correctAnswers: ['b'],
        explanation: 'When a character cannot be displayed (due to missing fonts or encoding issues), it typically shows a replacement character like □, ?, or �.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-10',
        text: 'What is the difference between character encoding and fonts?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'They are the same thing' },
          { id: 'b', text: 'Encoding assigns numbers to characters; fonts define their visual appearance' },
          { id: 'c', text: 'Fonts assign numbers; encoding defines appearance' },
          { id: 'd', text: 'Encoding is newer than fonts' }
        ],
        correctAnswers: ['b'],
        explanation: 'Character encoding (like UTF-8) assigns numeric codes to characters, while fonts determine how those characters are visually displayed.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-11',
        text: 'How many characters can Unicode represent?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '256' },
          { id: 'b', text: '65,536' },
          { id: 'c', text: 'Over 1 million' },
          { id: 'd', text: 'Unlimited' }
        ],
        correctAnswers: ['c'],
        explanation: 'Unicode can represent over 1 million characters (specifically 1,112,064 code points), covering virtually all writing systems.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-12',
        text: 'Select all that apply: What types of symbols are included in Unicode?',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Letters from various alphabets' },
          { id: 'b', text: 'Mathematical symbols' },
          { id: 'c', text: 'Emojis' },
          { id: 'd', text: 'Musical notation' },
          { id: 'e', text: 'Historical scripts' }
        ],
        correctAnswers: ['a', 'b', 'c', 'd', 'e'],
        explanation: 'Unicode includes all these types of symbols: letters, mathematical symbols, emojis, musical notation, and historical scripts.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-13',
        text: 'What does "backward compatibility" mean in the context of character encoding?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'New encoding can read old encoding' },
          { id: 'b', text: 'Old computers can use new encoding' },
          { id: 'c', text: 'Encoding works in reverse order' },
          { id: 'd', text: 'Characters can be undone' }
        ],
        correctAnswers: ['a'],
        explanation: 'Backward compatibility means that UTF-8 can correctly interpret ASCII-encoded text, making the transition seamless.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-14',
        text: 'Why might a text file display incorrectly when opened on a different computer?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The file is corrupted' },
          { id: 'b', text: 'Different character encoding interpretation' },
          { id: 'c', text: 'The computer is too slow' },
          { id: 'd', text: 'The file is too large' }
        ],
        correctAnswers: ['b'],
        explanation: 'Text may display incorrectly if the receiving computer interprets the character encoding differently than intended (e.g., ASCII vs UTF-8).',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-15',
        text: 'What is a "code point" in Unicode?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'A programming error' },
          { id: 'b', text: 'A unique number assigned to each character' },
          { id: 'c', text: 'A location in computer memory' },
          { id: 'd', text: 'A type of font' }
        ],
        correctAnswers: ['b'],
        explanation: 'A code point is a unique numerical identifier assigned to each character in Unicode (e.g., U+0041 for "A").',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-16',
        text: 'Select all that apply: Which are valid reasons to use Unicode instead of ASCII?',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Supporting international users' },
          { id: 'b', text: 'Displaying emoji in applications' },
          { id: 'c', text: 'Showing mathematical formulas' },
          { id: 'd', text: 'Faster processing speed' },
          { id: 'e', text: 'Future-proofing applications' }
        ],
        correctAnswers: ['a', 'b', 'c', 'e'],
        explanation: 'Unicode enables international support, emojis, mathematical symbols, and future compatibility. ASCII is generally faster due to smaller size.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-17',
        text: 'What is the ASCII value of the space character?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '0' },
          { id: 'b', text: '31' },
          { id: 'c', text: '32' },
          { id: 'd', text: '33' }
        ],
        correctAnswers: ['c'],
        explanation: 'The ASCII value of the space character is 32.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-18',
        text: 'How does UTF-8 maintain efficiency for English text?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It compresses all characters' },
          { id: 'b', text: 'It uses only 1 byte for ASCII characters' },
          { id: 'c', text: 'It removes unnecessary characters' },
          { id: 'd', text: 'It converts everything to binary' }
        ],
        correctAnswers: ['b'],
        explanation: 'UTF-8 uses variable-length encoding: ASCII characters use only 1 byte, while other characters use 2-4 bytes as needed.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-19',
        text: 'What does "plain text" mean in computing?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Text without formatting information' },
          { id: 'b', text: 'Text that is easy to read' },
          { id: 'c', text: 'Text written in English only' },
          { id: 'd', text: 'Text that is unencrypted' }
        ],
        correctAnswers: ['a'],
        explanation: 'Plain text contains only characters without any formatting information (no fonts, colors, styles), just the raw character data.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-20',
        text: 'Select all true statements about character encoding:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Every character has a unique numeric code' },
          { id: 'b', text: 'The same number can represent different characters in different encodings' },
          { id: 'c', text: 'Character encoding only affects how text is stored' },
          { id: 'd', text: 'Modern web browsers automatically detect encoding' },
          { id: 'e', text: 'Encoding affects how text is transmitted over networks' }
        ],
        correctAnswers: ['a', 'b', 'd', 'e'],
        explanation: 'Encoding assigns unique codes, numbers can mean different characters in different systems, browsers often auto-detect, and it affects transmission. It affects both storage and transmission.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-21',
        text: 'What is the primary advantage of ASCII\'s simplicity?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It supports more languages' },
          { id: 'b', text: 'It uses less storage space and processes faster' },
          { id: 'c', text: 'It displays better graphics' },
          { id: 'd', text: 'It\'s more secure' }
        ],
        correctAnswers: ['b'],
        explanation: 'ASCII\'s 7-bit encoding uses minimal storage space and can be processed very quickly, making it efficient for basic English text.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-22',
        text: 'How would a computer store the word "Hi" in ASCII?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'As two letters' },
          { id: 'b', text: 'As the numbers 72 and 105' },
          { id: 'c', text: 'As one combined value' },
          { id: 'd', text: 'As binary only' }
        ],
        correctAnswers: ['b'],
        explanation: '"H" has ASCII value 72 and "i" has ASCII value 105. The computer stores these as numeric values, which are then represented in binary.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-23',
        text: 'What problem would arise if there were no standard character encoding?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Computers would be faster' },
          { id: 'b', text: 'Different systems couldn\'t exchange text reliably' },
          { id: 'c', text: 'Files would be smaller' },
          { id: 'd', text: 'Programming would be easier' }
        ],
        correctAnswers: ['b'],
        explanation: 'Without standard encoding, different computer systems would interpret the same numeric values as different characters, making text exchange unreliable.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-24',
        text: 'Select all that apply: Which factors should be considered when choosing a character encoding?',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Languages that need to be supported' },
          { id: 'b', text: 'Storage space requirements' },
          { id: 'c', text: 'Compatibility with existing systems' },
          { id: 'd', text: 'The color of the text' },
          { id: 'e', text: 'Processing speed requirements' }
        ],
        correctAnswers: ['a', 'b', 'c', 'e'],
        explanation: 'Important factors include language support, storage efficiency, system compatibility, and processing speed. Text color is handled by formatting, not encoding.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q3-25',
        text: 'Why is UTF-8 considered a good compromise for web content?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It only supports English' },
          { id: 'b', text: 'It\'s efficient for ASCII while supporting all Unicode characters' },
          { id: 'c', text: 'It uses fixed-length encoding' },
          { id: 'd', text: 'It requires special browsers' }
        ],
        correctAnswers: ['b'],
        explanation: 'UTF-8 efficiently encodes ASCII text (1 byte per character) while still supporting the full Unicode character set when needed, making it ideal for the diverse web.',
        isCustom: false,
        addedBy: null
      }
    ]
  },
  {
    id: 'unit1-topic4',
    name: 'Analog vs. digital data and sampling',
    unit: 'Unit 1: Digital Information',
    order: 4,
    questions: [
      {
        id: 'q4-1',
        text: 'What is the main difference between analog and digital data?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Analog is newer than digital' },
          { id: 'b', text: 'Analog is continuous, digital is discrete' },
          { id: 'c', text: 'Analog is faster than digital' },
          { id: 'd', text: 'Digital is always more accurate' }
        ],
        correctAnswers: ['b'],
        explanation: 'Analog data is continuous and can have infinite values between any two points, while digital data consists of discrete values with specific, separate states.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-2',
        text: 'Which of these is an example of analog data?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'A digital photo' },
          { id: 'b', text: 'Sound waves in air' },
          { id: 'c', text: 'Text in a computer file' },
          { id: 'd', text: 'A spreadsheet' }
        ],
        correctAnswers: ['b'],
        explanation: 'Sound waves in air are analog because they vary continuously in amplitude and frequency. Digital photos, text files, and spreadsheets are all digital representations.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-3',
        text: 'Select all examples of analog information:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Temperature readings throughout a day' },
          { id: 'b', text: 'Light intensity' },
          { id: 'c', text: 'The number of students in a class' },
          { id: 'd', text: 'Radio waves' },
          { id: 'e', text: 'A vinyl record groove' }
        ],
        correctAnswers: ['a', 'b', 'd', 'e'],
        explanation: 'Temperature, light intensity, radio waves, and vinyl grooves are continuous. The number of students is discrete (you can\'t have 23.5 students).',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-4',
        text: 'What is sampling in the context of converting analog to digital?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Testing a small portion of data' },
          { id: 'b', text: 'Taking measurements at regular intervals' },
          { id: 'c', text: 'Compressing the data' },
          { id: 'd', text: 'Adding error correction' }
        ],
        correctAnswers: ['b'],
        explanation: 'Sampling is the process of taking measurements of an analog signal at regular time intervals to convert it into digital form.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-5',
        text: 'What is the sampling rate?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'How loud a sound is' },
          { id: 'b', text: 'How many samples are taken per second' },
          { id: 'c', text: 'The accuracy of each sample' },
          { id: 'd', text: 'The size of the digital file' }
        ],
        correctAnswers: ['b'],
        explanation: 'Sampling rate is the frequency at which samples are taken from an analog signal, typically measured in hertz (Hz) or samples per second.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-6',
        text: 'What happens to information when analog data is converted to digital?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'No information is lost' },
          { id: 'b', text: 'Some information is lost due to discrete sampling' },
          { id: 'c', text: 'Information is gained' },
          { id: 'd', text: 'Information is encrypted' }
        ],
        correctAnswers: ['b'],
        explanation: 'Converting analog to digital always involves some information loss because we can only capture discrete samples, not the continuous signal between samples.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-7',
        text: 'Select all factors that affect the quality of analog-to-digital conversion:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Sampling rate' },
          { id: 'b', text: 'Bit depth (resolution)' },
          { id: 'c', text: 'File format' },
          { id: 'd', text: 'The quality of the analog source' },
          { id: 'e', text: 'The computer\'s processing speed' }
        ],
        correctAnswers: ['a', 'b', 'd'],
        explanation: 'Sampling rate, bit depth, and source quality directly affect conversion quality. File format affects storage, and processing speed affects conversion time but not quality.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-8',
        text: 'What is quantization in digital sampling?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Deciding when to take samples' },
          { id: 'b', text: 'Converting continuous values to discrete levels' },
          { id: 'c', text: 'Compressing the digital data' },
          { id: 'd', text: 'Adding metadata to the file' }
        ],
        correctAnswers: ['b'],
        explanation: 'Quantization is the process of mapping continuous analog values to discrete digital levels, limited by the bit depth of the system.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-9',
        text: 'Why might a higher sampling rate be desirable?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It makes files smaller' },
          { id: 'b', text: 'It captures more detail from the analog signal' },
          { id: 'c', text: 'It processes faster' },
          { id: 'd', text: 'It uses less memory' }
        ],
        correctAnswers: ['b'],
        explanation: 'Higher sampling rates capture more frequent measurements, preserving more detail from the original analog signal, especially for high-frequency components.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-10',
        text: 'What is aliasing in digital sampling?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Using fake data' },
          { id: 'b', text: 'Distortion caused by insufficient sampling rate' },
          { id: 'c', text: 'Compression artifacts' },
          { id: 'd', text: 'Adding extra data' }
        ],
        correctAnswers: ['b'],
        explanation: 'Aliasing occurs when the sampling rate is too low to accurately capture high-frequency components, causing distortion in the digital representation.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-11',
        text: 'Select all advantages of digital data over analog data:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Can be copied without degradation' },
          { id: 'b', text: 'Easy to process with computers' },
          { id: 'c', text: 'Can be transmitted without noise accumulation' },
          { id: 'd', text: 'Takes up less physical space' },
          { id: 'e', text: 'Always more accurate than analog' }
        ],
        correctAnswers: ['a', 'b', 'c'],
        explanation: 'Digital data can be copied perfectly, is easily processed by computers, and resists noise accumulation. Physical space varies, and digital isn\'t always more accurate due to sampling limitations.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-12',
        text: 'In CD audio, what is the standard sampling rate?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: '22,050 Hz' },
          { id: 'b', text: '44,100 Hz' },
          { id: 'c', text: '48,000 Hz' },
          { id: 'd', text: '96,000 Hz' }
        ],
        correctAnswers: ['b'],
        explanation: 'CD audio uses a sampling rate of 44,100 Hz (44.1 kHz), which can capture frequencies up to about 22 kHz, covering the range of human hearing.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-13',
        text: 'What determines the bit depth in digital sampling?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'How often samples are taken' },
          { id: 'b', text: 'How many discrete levels can represent each sample' },
          { id: 'c', text: 'The size of the file' },
          { id: 'd', text: 'The speed of conversion' }
        ],
        correctAnswers: ['b'],
        explanation: 'Bit depth determines how many discrete levels are available to represent each sample value. More bits allow for more precise representations.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-14',
        text: 'How does increasing bit depth affect digital audio quality?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It increases the frequency range' },
          { id: 'b', text: 'It reduces quantization noise and increases dynamic range' },
          { id: 'c', text: 'It makes the file smaller' },
          { id: 'd', text: 'It has no effect on quality' }
        ],
        correctAnswers: ['b'],
        explanation: 'Higher bit depth provides more precise amplitude measurements, reducing quantization noise and increasing the dynamic range of the digital audio.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-15',
        text: 'Select all true statements about the Nyquist theorem:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Sampling rate must be at least twice the highest frequency' },
          { id: 'b', text: 'It prevents aliasing' },
          { id: 'c', text: 'It determines file compression ratios' },
          { id: 'd', text: 'It applies to all analog-to-digital conversion' },
          { id: 'e', text: 'It only applies to audio signals' }
        ],
        correctAnswers: ['a', 'b', 'd'],
        explanation: 'The Nyquist theorem states that sampling rate must be at least twice the highest frequency to avoid aliasing, and it applies to all analog-to-digital conversion, not just audio.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-16',
        text: 'What is an analog-to-digital converter (ADC)?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Software that edits digital files' },
          { id: 'b', text: 'Hardware that converts analog signals to digital' },
          { id: 'c', text: 'A type of digital storage' },
          { id: 'd', text: 'A compression algorithm' }
        ],
        correctAnswers: ['b'],
        explanation: 'An ADC is a hardware component that converts continuous analog signals into discrete digital representations through sampling and quantization.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-17',
        text: 'Why can\'t we perfectly recreate an analog signal from digital samples?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Digital files are corrupted' },
          { id: 'b', text: 'Computers are too slow' },
          { id: 'c', text: 'Information between samples is lost' },
          { id: 'd', text: 'Digital storage is unreliable' }
        ],
        correctAnswers: ['c'],
        explanation: 'Digital sampling captures values only at specific points in time. The continuous information that existed between those sample points is permanently lost.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-18',
        text: 'What is oversampling?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Taking too many samples and wasting space' },
          { id: 'b', text: 'Sampling at a rate higher than the minimum required' },
          { id: 'c', text: 'Sampling the wrong signal' },
          { id: 'd', text: 'Repeating the same sample multiple times' }
        ],
        correctAnswers: ['b'],
        explanation: 'Oversampling means sampling at a rate higher than the Nyquist rate, which can improve quality and make filtering easier.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-19',
        text: 'Select all examples of digital representations of analog phenomena:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Digital photography' },
          { id: 'b', text: 'MP3 audio files' },
          { id: 'c', text: 'Digital thermometers' },
          { id: 'd', text: 'Handwritten letters' },
          { id: 'e', text: 'Computer graphics' }
        ],
        correctAnswers: ['a', 'b', 'c', 'e'],
        explanation: 'Digital photos, MP3s, digital thermometer readings, and computer graphics are all digital representations. Handwritten letters are physical/analog.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-20',
        text: 'What happens when you zoom into a digital image far enough?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'You see infinite detail' },
          { id: 'b', text: 'You see individual pixels (discrete elements)' },
          { id: 'c', text: 'The image becomes analog' },
          { id: 'd', text: 'The image disappears' }
        ],
        correctAnswers: ['b'],
        explanation: 'Digital images are made of discrete pixels. When you zoom in enough, you can see the individual square pixels, demonstrating the discrete nature of digital data.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-21',
        text: 'How does digital sampling relate to image capture?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Images are always analog' },
          { id: 'b', text: 'Light is sampled spatially by pixels and quantized by bit depth' },
          { id: 'c', text: 'Images don\'t use sampling' },
          { id: 'd', text: 'Only time-based media use sampling' }
        ],
        correctAnswers: ['b'],
        explanation: 'Digital cameras sample light spatially (each pixel samples light from a specific area) and temporally (at the moment of capture), then quantize the intensity values.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-22',
        text: 'What is the trade-off between sampling rate and file size?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Higher sampling rate always means smaller files' },
          { id: 'b', text: 'Higher sampling rate generally means larger files' },
          { id: 'c', text: 'Sampling rate doesn\'t affect file size' },
          { id: 'd', text: 'The relationship varies randomly' }
        ],
        correctAnswers: ['b'],
        explanation: 'Higher sampling rates capture more samples per second, which generally results in larger file sizes but better quality representation.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-23',
        text: 'Why is understanding analog vs digital important in computer science?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It\'s only important for audio engineers' },
          { id: 'b', text: 'It helps understand how computers represent real-world data' },
          { id: 'c', text: 'It\'s not relevant to modern computing' },
          { id: 'd', text: 'It only matters for old technology' }
        ],
        correctAnswers: ['b'],
        explanation: 'Understanding analog vs digital is fundamental to computer science because it explains how continuous real-world phenomena are represented and processed by digital computers.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-24',
        text: 'Select all limitations of digital representation:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Limited resolution in time (sampling rate)' },
          { id: 'b', text: 'Limited precision in amplitude (quantization)' },
          { id: 'c', text: 'Cannot represent any real-world phenomena' },
          { id: 'd', text: 'Subject to approximation errors' },
          { id: 'e', text: 'Always requires more storage than analog' }
        ],
        correctAnswers: ['a', 'b', 'd'],
        explanation: 'Digital has limited time resolution, amplitude precision, and involves approximation. It can represent many phenomena, and storage requirements vary by application.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q4-25',
        text: 'What advantage does digital data have for long-term storage?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It takes up no physical space' },
          { id: 'b', text: 'It doesn\'t degrade when copied properly' },
          { id: 'c', text: 'It requires no storage medium' },
          { id: 'd', text: 'It lasts forever without any maintenance' }
        ],
        correctAnswers: ['b'],
        explanation: 'Digital data can be copied exactly without degradation, unlike analog recordings which lose quality with each copy. However, storage media still require maintenance.',
        isCustom: false,
        addedBy: null
      }
    ]
  },
  {
    id: 'unit1-topic5',
    name: 'Lossless vs. lossy compression',
    unit: 'Unit 1: Digital Information',
    order: 5,
    questions: [
      {
        id: 'q5-1',
        text: 'What is the main difference between lossless and lossy compression?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Lossless is faster than lossy' },
          { id: 'b', text: 'Lossless preserves all original data, lossy discards some' },
          { id: 'c', text: 'Lossy is newer technology than lossless' },
          { id: 'd', text: 'They are the same thing' }
        ],
        correctAnswers: ['b'],
        explanation: 'Lossless compression preserves all original data and can perfectly recreate the original file, while lossy compression discards some data to achieve better compression ratios.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-2',
        text: 'Which of these is an example of lossless compression?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'JPEG' },
          { id: 'b', text: 'MP3' },
          { id: 'c', text: 'ZIP' },
          { id: 'd', text: 'MP4' }
        ],
        correctAnswers: ['c'],
        explanation: 'ZIP is a lossless compression format. JPEG and MP3 are lossy formats, and MP4 can contain both lossy video and audio.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-3',
        text: 'Select all examples of lossy compression formats:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'JPEG (images)' },
          { id: 'b', text: 'MP3 (audio)' },
          { id: 'c', text: 'PNG (images)' },
          { id: 'd', text: 'MPEG (video)' },
          { id: 'e', text: 'GIF (images)' }
        ],
        correctAnswers: ['a', 'b', 'd'],
        explanation: 'JPEG, MP3, and MPEG are lossy formats. PNG and GIF are lossless compression formats.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-4',
        text: 'Why is lossy compression used despite losing data?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It\'s easier to implement' },
          { id: 'b', text: 'It achieves much better compression ratios' },
          { id: 'c', text: 'It\'s more secure' },
          { id: 'd', text: 'It processes faster' }
        ],
        correctAnswers: ['b'],
        explanation: 'Lossy compression is used because it can achieve much higher compression ratios by removing data that is less perceptible to humans, making files much smaller.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-5',
        text: 'When is lossless compression preferred over lossy compression?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'For streaming media' },
          { id: 'b', text: 'When file size is most important' },
          { id: 'c', text: 'When data integrity is critical' },
          { id: 'd', text: 'For mobile devices' }
        ],
        correctAnswers: ['c'],
        explanation: 'Lossless compression is preferred when data integrity is critical, such as for executable files, documents, or when the original must be perfectly recoverable.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-6',
        text: 'What happens when you compress and decompress a file using lossless compression?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Some quality is lost' },
          { id: 'b', text: 'The file becomes larger' },
          { id: 'c', text: 'You get back exactly the original file' },
          { id: 'd', text: 'The file format changes' }
        ],
        correctAnswers: ['c'],
        explanation: 'Lossless compression guarantees that decompressing a file will produce exactly the same file as the original, bit for bit.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-7',
        text: 'Select all factors that lossy compression algorithms typically consider:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Human perception limitations' },
          { id: 'b', text: 'File modification date' },
          { id: 'c', text: 'Redundancy in data' },
          { id: 'd', text: 'Less important vs. more important information' },
          { id: 'e', text: 'File name length' }
        ],
        correctAnswers: ['a', 'c', 'd'],
        explanation: 'Lossy compression considers human perception limits, data redundancy, and the relative importance of different information. File metadata like date and name don\'t affect compression decisions.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-8',
        text: 'What is meant by "compression ratio"?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'How fast the compression works' },
          { id: 'b', text: 'The comparison between original and compressed file sizes' },
          { id: 'c', text: 'The quality loss in compression' },
          { id: 'd', text: 'The number of times a file can be compressed' }
        ],
        correctAnswers: ['b'],
        explanation: 'Compression ratio is the ratio of the original file size to the compressed file size, indicating how much space is saved by compression.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-9',
        text: 'Why might you choose PNG over JPEG for an image?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'PNG files are always smaller' },
          { id: 'b', text: 'PNG preserves all image data without loss' },
          { id: 'c', text: 'PNG is faster to process' },
          { id: 'd', text: 'PNG has better colors' }
        ],
        correctAnswers: ['b'],
        explanation: 'PNG uses lossless compression, preserving all image data perfectly. This is important for images with sharp edges, text, or when you need to edit the image multiple times.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-10',
        text: 'What is "generation loss" in lossy compression?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Loss of file creation date' },
          { id: 'b', text: 'Quality degradation from repeated compression' },
          { id: 'c', text: 'Files becoming incompatible with older software' },
          { id: 'd', text: 'Compression taking longer over time' }
        ],
        correctAnswers: ['b'],
        explanation: 'Generation loss occurs when a lossy compressed file is decompressed, edited, and recompressed multiple times, causing cumulative quality degradation.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-11',
        text: 'Select all advantages of lossless compression:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Perfect data preservation' },
          { id: 'b', text: 'Can be safely edited and recompressed' },
          { id: 'c', text: 'Always produces smaller files' },
          { id: 'd', text: 'No quality degradation' },
          { id: 'e', text: 'Reversible process' }
        ],
        correctAnswers: ['a', 'b', 'd', 'e'],
        explanation: 'Lossless compression preserves data perfectly, allows safe editing, has no quality loss, and is reversible. However, it doesn\'t always produce smaller files than lossy compression.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-12',
        text: 'Which type of data should NEVER use lossy compression?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Music files for casual listening' },
          { id: 'b', text: 'Executable program files' },
          { id: 'c', text: 'Photos for social media' },
          { id: 'd', text: 'Streaming video' }
        ],
        correctAnswers: ['b'],
        explanation: 'Executable program files must never use lossy compression because any data loss would corrupt the program and make it non-functional.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-13',
        text: 'How does JPEG compression reduce file size?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It removes all color information' },
          { id: 'b', text: 'It discards visual details that humans are less likely to notice' },
          { id: 'c', text: 'It makes the image smaller in dimensions' },
          { id: 'd', text: 'It converts the image to black and white' }
        ],
        correctAnswers: ['b'],
        explanation: 'JPEG uses psychovisual modeling to discard image details that human eyes are less sensitive to, such as subtle color variations and high-frequency details.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-14',
        text: 'What is the main principle behind lossless compression?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Removing unimportant data' },
          { id: 'b', text: 'Finding and eliminating redundancy' },
          { id: 'c', text: 'Changing the file format' },
          { id: 'd', text: 'Reducing color depth' }
        ],
        correctAnswers: ['b'],
        explanation: 'Lossless compression works by finding patterns and redundancy in data and representing them more efficiently, without discarding any information.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-15',
        text: 'Select all scenarios where lossy compression is commonly acceptable:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Streaming music services' },
          { id: 'b', text: 'Archival document storage' },
          { id: 'c', text: 'Social media photo sharing' },
          { id: 'd', text: 'Video streaming platforms' },
          { id: 'e', text: 'Software installation files' }
        ],
        correctAnswers: ['a', 'c', 'd'],
        explanation: 'Lossy compression is acceptable for streaming music, social media photos, and video streaming where convenience and bandwidth matter more than perfect quality. Archival documents and software need lossless preservation.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-16',
        text: 'What is run-length encoding?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'A lossy compression technique' },
          { id: 'b', text: 'A lossless technique that compresses repeated data' },
          { id: 'c', text: 'A file encryption method' },
          { id: 'd', text: 'A way to speed up programs' }
        ],
        correctAnswers: ['b'],
        explanation: 'Run-length encoding is a simple lossless compression technique that represents consecutive identical values as a single value and count (e.g., "AAAAA" becomes "A5").',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-17',
        text: 'Why doesn\'t lossless compression work as well on already-compressed files?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Compressed files are corrupted' },
          { id: 'b', text: 'Most redundancy has already been removed' },
          { id: 'c', text: 'The computer gets confused' },
          { id: 'd', text: 'It\'s illegal to compress twice' }
        ],
        correctAnswers: ['b'],
        explanation: 'Already-compressed files have had most of their redundancy removed, leaving little pattern for further lossless compression to exploit.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-18',
        text: 'What is perceptual coding in lossy compression?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Compression based on human sensory limitations' },
          { id: 'b', text: 'Compression that changes perception of time' },
          { id: 'c', text: 'A lossless compression technique' },
          { id: 'd', text: 'Compression for text files only' }
        ],
        correctAnswers: ['a'],
        explanation: 'Perceptual coding exploits limitations of human perception (vision/hearing) to remove information that people typically can\'t detect, achieving better compression.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-19',
        text: 'Select all true statements about compression:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'All files can be compressed' },
          { id: 'b', text: 'Some files may grow in size when compressed' },
          { id: 'c', text: 'Compression always saves storage space' },
          { id: 'd', text: 'Different file types compress differently' },
          { id: 'e', text: 'Random data is hard to compress' }
        ],
        correctAnswers: ['a', 'b', 'd', 'e'],
        explanation: 'All files can be compressed, but some may grow larger. Different file types have different compression potential, and random data (lacking patterns) compresses poorly.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-20',
        text: 'What is the trade-off in lossy compression?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Speed vs. compatibility' },
          { id: 'b', text: 'File size vs. quality' },
          { id: 'c', text: 'Security vs. accessibility' },
          { id: 'd', text: 'Cost vs. performance' }
        ],
        correctAnswers: ['b'],
        explanation: 'The main trade-off in lossy compression is between file size and quality - smaller files come at the cost of reduced quality or data loss.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-21',
        text: 'Which compression type would be best for a text document?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Lossy, because text is not important' },
          { id: 'b', text: 'Lossless, to preserve every character exactly' },
          { id: 'c', text: 'No compression is needed' },
          { id: 'd', text: 'Either type works equally well' }
        ],
        correctAnswers: ['b'],
        explanation: 'Text documents require lossless compression because losing even a single character could change the meaning or make the document unreadable.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-22',
        text: 'What happens to JPEG quality when you save the same image multiple times?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Quality stays exactly the same' },
          { id: 'b', text: 'Quality improves over time' },
          { id: 'c', text: 'Quality degrades with each save' },
          { id: 'd', text: 'File size increases dramatically' }
        ],
        correctAnswers: ['c'],
        explanation: 'Each time you save a JPEG, lossy compression is reapplied, causing cumulative quality loss. This is why professionals often work with lossless formats until final output.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-23',
        text: 'Why is understanding compression important in computer science?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'It\'s only useful for multimedia applications' },
          { id: 'b', text: 'It affects storage, bandwidth, and user experience' },
          { id: 'c', text: 'It\'s becoming obsolete with faster internet' },
          { id: 'd', text: 'It only matters for old computers' }
        ],
        correctAnswers: ['b'],
        explanation: 'Compression is fundamental to modern computing, affecting how we store data, transmit it over networks, and deliver content to users efficiently.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-24',
        text: 'Select all factors that determine how well a file will compress:',
        type: 'multiple_select',
        options: [
          { id: 'a', text: 'Amount of redundancy in the data' },
          { id: 'b', text: 'File creation date' },
          { id: 'c', text: 'Patterns and repetition in the data' },
          { id: 'd', text: 'File name length' },
          { id: 'e', text: 'Randomness of the data' }
        ],
        correctAnswers: ['a', 'c', 'e'],
        explanation: 'Compression effectiveness depends on data redundancy, patterns/repetition, and randomness. Files with more patterns compress better; random data compresses poorly. Metadata like dates and names don\'t affect compression.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5-25',
        text: 'What is the best approach when you need both small file size and perfect quality?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Always use lossy compression' },
          { id: 'b', text: 'Always use lossless compression' },
          { id: 'c', text: 'Use lossy compression multiple times' },
          { id: 'd', text: 'Use lossless compression, or lossy only once at final output' }
        ],
        correctAnswers: ['d'],
        explanation: 'When you need both quality and size, work with lossless formats during editing to preserve quality, then apply lossy compression only once at the final output stage.',
        isCustom: false,
        addedBy: null
      }
    ]
  }
];

// Function to seed the database
async function seedDatabase() {
  try {
    console.log('Starting database seed...');
    
    // Clear existing topics (optional - remove in production)
    console.log('Clearing existing topics...');
    const existingTopics = await db.collection('topics').get();
    const batch = db.batch();
    existingTopics.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    await batch.commit();
    
    // Add all topics
    console.log('Adding topics...');
    for (const topic of topicsData) {
      await db.collection('topics').doc(topic.id).set(topic);
      console.log(`Added topic: ${topic.name}`);
    }
    
    console.log('Database seed completed successfully!');
    console.log(`Seeded ${topicsData.length} topics with ${topicsData.reduce((total, topic) => total + topic.questions.length, 0)} total questions.`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed if this file is executed directly
if (require.main === module) {
  seedDatabase().then(() => {
    console.log('Seed process complete. You can now start the server.');
    process.exit(0);
  }).catch(error => {
    console.error('Seed failed:', error);
    process.exit(1);
  });
}

module.exports = { topicsData, seedDatabase };