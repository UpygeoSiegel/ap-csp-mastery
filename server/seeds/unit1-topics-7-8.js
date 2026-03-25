/**
 * Unit 1: Digital Information - Topics 1.7-1.8 Questions
 * Run with: node server/seeds/unit1-topics-7-8.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questionsData = {
  'di-7-lossless-compression': [
    {
      text: 'What is lossless compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Compression that permanently removes data' },
        { id: 'b', text: 'Compression that allows perfect reconstruction of original data' },
        { id: 'c', text: 'Compression that only works on images' },
        { id: 'd', text: 'Compression that increases file size' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossless compression reduces file size while preserving all original data for perfect reconstruction.'
    },
    {
      text: 'Which of the following is an example of lossless compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'JPEG images' },
        { id: 'b', text: 'MP3 audio' },
        { id: 'c', text: 'ZIP files' },
        { id: 'd', text: 'Streaming video' }
      ],
      correctAnswers: ['c'],
      explanation: 'ZIP files use lossless compression - the original files can be perfectly restored.'
    },
    {
      text: 'What is run-length encoding (RLE)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Encoding data by running it through a program' },
        { id: 'b', text: 'Replacing repeated consecutive values with a count and value' },
        { id: 'c', text: 'Encrypting data for security' },
        { id: 'd', text: 'Converting text to binary' }
      ],
      correctAnswers: ['b'],
      explanation: 'RLE represents sequences like "AAAAA" as "5A" - storing the count and the value.'
    },
    {
      text: 'Using run-length encoding, how would you compress "BBBBBBBB"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'B8' },
        { id: 'b', text: '8B' },
        { id: 'c', text: 'BBBB2' },
        { id: 'd', text: '8' }
      ],
      correctAnswers: ['b'],
      explanation: 'RLE typically stores count first: 8 B\'s becomes "8B".'
    },
    {
      text: 'When is run-length encoding MOST effective?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Data with many unique values' },
        { id: 'b', text: 'Data with long sequences of repeated values' },
        { id: 'c', text: 'Random data' },
        { id: 'd', text: 'Encrypted data' }
      ],
      correctAnswers: ['b'],
      explanation: 'RLE works best when data has many consecutive repeating values to compress.'
    },
    {
      text: 'Why is lossless compression important for text documents?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It makes text faster to read' },
        { id: 'b', text: 'Losing any data would change the meaning of the document' },
        { id: 'c', text: 'Text cannot be compressed any other way' },
        { id: 'd', text: 'It is required by law' }
      ],
      correctAnswers: ['b'],
      explanation: 'Every character matters in text. Losing even one character could change meaning significantly.'
    },
    {
      text: 'Which file format uses lossless compression for images?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'JPEG' },
        { id: 'b', text: 'PNG' },
        { id: 'c', text: 'MP3' },
        { id: 'd', text: 'MP4' }
      ],
      correctAnswers: ['b'],
      explanation: 'PNG (Portable Network Graphics) uses lossless compression, preserving all image data.'
    },
    {
      text: 'What is Huffman coding?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A type of encryption' },
        { id: 'b', text: 'A lossless compression technique using shorter codes for common values' },
        { id: 'c', text: 'A programming language' },
        { id: 'd', text: 'A way to store passwords' }
      ],
      correctAnswers: ['b'],
      explanation: 'Huffman coding assigns shorter binary codes to more frequent values, reducing overall size.'
    },
    {
      text: 'In Huffman coding, more frequent characters get:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Longer codes' },
        { id: 'b', text: 'Shorter codes' },
        { id: 'c', text: 'The same length codes' },
        { id: 'd', text: 'No codes' }
      ],
      correctAnswers: ['b'],
      explanation: 'Frequent characters get shorter codes to minimize the total size of the encoded data.'
    },
    {
      text: 'What is a disadvantage of lossless compression compared to lossy?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It loses data' },
        { id: 'b', text: 'It typically achieves lower compression ratios' },
        { id: 'c', text: 'It cannot be decompressed' },
        { id: 'd', text: 'It only works on small files' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossless compression must preserve all data, so it cannot compress as much as lossy methods.'
    },
    {
      text: 'Which scenarios require lossless compression? (Select all that apply)',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Compressing executable programs' },
        { id: 'b', text: 'Backing up important documents' },
        { id: 'c', text: 'Medical imaging for diagnosis' },
        { id: 'd', text: 'Sharing vacation photos on social media' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Programs, documents, and medical images require exact data. Casual photos can tolerate some loss.'
    },
    {
      text: 'What is the compression ratio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The speed of compression' },
        { id: 'b', text: 'The ratio of original size to compressed size' },
        { id: 'c', text: 'The number of files compressed' },
        { id: 'd', text: 'The quality loss percentage' }
      ],
      correctAnswers: ['b'],
      explanation: 'Compression ratio compares original to compressed size, e.g., 10:1 means compressed to 1/10 original.'
    },
    {
      text: 'A 100 KB file compresses to 25 KB. What is the compression ratio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '2:1' },
        { id: 'b', text: '4:1' },
        { id: 'c', text: '25:1' },
        { id: 'd', text: '1:4' }
      ],
      correctAnswers: ['b'],
      explanation: '100 KB ÷ 25 KB = 4, so the ratio is 4:1 (compressed to 1/4 the original size).'
    },
    {
      text: 'Why might lossless compression not significantly reduce a file\'s size?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The compression software is broken' },
        { id: 'b', text: 'The data may already be compressed or have little redundancy' },
        { id: 'c', text: 'Lossless compression never works well' },
        { id: 'd', text: 'The file is too large' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data without patterns (random data or already compressed) cannot be compressed much further.'
    },
    {
      text: 'GIF images use lossless compression but have a limitation:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'They cannot be animated' },
        { id: 'b', text: 'They are limited to 256 colors' },
        { id: 'c', text: 'They cannot be displayed on the web' },
        { id: 'd', text: 'They lose quality each time saved' }
      ],
      correctAnswers: ['b'],
      explanation: 'GIF uses 8-bit color, limiting images to 256 colors maximum, but the compression is lossless.'
    },
    {
      text: 'FLAC is a lossless audio format. What does this mean for music listeners?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The music cannot be played' },
        { id: 'b', text: 'The audio quality is identical to the original recording' },
        { id: 'c', text: 'Files are larger than lossy formats' },
        { id: 'd', text: 'Both B and C' }
      ],
      correctAnswers: ['d'],
      explanation: 'FLAC preserves full quality but results in larger files than lossy formats like MP3.'
    },
    {
      text: 'What happens when you unzip a ZIP file?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The files are decompressed to their exact original state' },
        { id: 'b', text: 'Some data is permanently lost' },
        { id: 'c', text: 'The files become larger than original' },
        { id: 'd', text: 'The files are encrypted' }
      ],
      correctAnswers: ['a'],
      explanation: 'ZIP uses lossless compression, so files are restored exactly as they were.'
    },
    {
      text: 'Which pattern would compress BEST using run-length encoding?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'ABCDEFGH' },
        { id: 'b', text: 'AABBCCDD' },
        { id: 'c', text: 'AAAAAAAA' },
        { id: 'd', text: 'ABABABAB' }
      ],
      correctAnswers: ['c'],
      explanation: 'AAAAAAAA has 8 consecutive A\'s - compresses to "8A" (great compression).'
    },
    {
      text: 'Dictionary-based compression works by:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Looking up words in a dictionary' },
        { id: 'b', text: 'Building a dictionary of repeated patterns and referencing them' },
        { id: 'c', text: 'Translating data to another language' },
        { id: 'd', text: 'Removing all words from the data' }
      ],
      correctAnswers: ['b'],
      explanation: 'Algorithms like LZW build a dictionary of patterns and replace repetitions with references.'
    },
    {
      text: 'PNG compression is particularly good for:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Photographs with many colors' },
        { id: 'b', text: 'Images with large areas of solid color (like logos and diagrams)' },
        { id: 'c', text: 'Video files' },
        { id: 'd', text: 'Audio files' }
      ],
      correctAnswers: ['b'],
      explanation: 'PNG excels at compressing images with solid colors, sharp edges, and limited color palettes.'
    },
    {
      text: 'What is decompression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Making files larger' },
        { id: 'b', text: 'Restoring compressed data to its original form' },
        { id: 'c', text: 'Deleting compressed files' },
        { id: 'd', text: 'Adding data to a file' }
      ],
      correctAnswers: ['b'],
      explanation: 'Decompression reverses compression, restoring the original data.'
    },
    {
      text: 'Can you compress already compressed data significantly more?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Yes, always' },
        { id: 'b', text: 'No, because redundancy has already been removed' },
        { id: 'c', text: 'Only with lossy compression' },
        { id: 'd', text: 'Only with special software' }
      ],
      correctAnswers: ['b'],
      explanation: 'Compression removes redundancy. Compressing again finds little additional redundancy.'
    },
    {
      text: 'Which is a benefit of using lossless compression?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Original data can be perfectly recovered' },
        { id: 'b', text: 'Good for archiving important files' },
        { id: 'c', text: 'Always achieves smallest possible file size' },
        { id: 'd', text: 'Required for legal and medical documents' }
      ],
      correctAnswers: ['a', 'b', 'd'],
      explanation: 'Lossless preserves data perfectly, making it ideal for archives and critical documents. It does not always achieve the smallest size.'
    },
    {
      text: 'What type of compression does software source code require?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Lossy compression' },
        { id: 'b', text: 'Lossless compression' },
        { id: 'c', text: 'Either works equally well' },
        { id: 'd', text: 'No compression is possible' }
      ],
      correctAnswers: ['b'],
      explanation: 'Source code must be exact - one missing character could break the entire program.'
    },
    {
      text: 'The string "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB" would compress well using RLE because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It contains many different characters' },
        { id: 'b', text: 'It contains long runs of the same character' },
        { id: 'c', text: 'It is short' },
        { id: 'd', text: 'It contains only letters' }
      ],
      correctAnswers: ['b'],
      explanation: 'The long sequences of W\'s and B\'s can be represented as counts, dramatically reducing size.'
    }
  ],

  'di-8-lossy-compression': [
    {
      text: 'What is lossy compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Compression that preserves all original data' },
        { id: 'b', text: 'Compression that permanently removes some data to achieve smaller sizes' },
        { id: 'c', text: 'Compression that loses files' },
        { id: 'd', text: 'Compression that only works on text' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossy compression achieves smaller file sizes by discarding data considered less important.'
    },
    {
      text: 'Which of the following uses lossy compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'ZIP files' },
        { id: 'b', text: 'JPEG images' },
        { id: 'c', text: 'PNG images' },
        { id: 'd', text: 'Text documents' }
      ],
      correctAnswers: ['b'],
      explanation: 'JPEG uses lossy compression, sacrificing some image quality for smaller file sizes.'
    },
    {
      text: 'MP3 audio removes frequencies that:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Are the loudest' },
        { id: 'b', text: 'Humans cannot hear well or that are masked by other sounds' },
        { id: 'c', text: 'Make up the main melody' },
        { id: 'd', text: 'Are at normal speaking volume' }
      ],
      correctAnswers: ['b'],
      explanation: 'MP3 uses psychoacoustic models to remove frequencies less perceptible to human hearing.'
    },
    {
      text: 'What happens when you repeatedly save a JPEG image?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Quality improves' },
        { id: 'b', text: 'Quality degrades because compression is applied again each time' },
        { id: 'c', text: 'Nothing changes' },
        { id: 'd', text: 'The file gets larger' }
      ],
      correctAnswers: ['b'],
      explanation: 'Each save applies lossy compression again, removing more data and reducing quality.'
    },
    {
      text: 'Why is lossy compression acceptable for most images and audio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It is required by file formats' },
        { id: 'b', text: 'The removed data is often imperceptible to humans' },
        { id: 'c', text: 'Lossless compression does not work on images' },
        { id: 'd', text: 'It makes files easier to open' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossy compression targets data that humans cannot easily perceive, making the loss acceptable.'
    },
    {
      text: 'What is the main advantage of lossy compression over lossless?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Better quality' },
        { id: 'b', text: 'Much smaller file sizes' },
        { id: 'c', text: 'Faster to decompress' },
        { id: 'd', text: 'Works on more file types' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossy compression achieves significantly smaller files by discarding data.'
    },
    {
      text: 'Video streaming services use lossy compression primarily to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Improve video quality' },
        { id: 'b', text: 'Reduce bandwidth required for streaming' },
        { id: 'c', text: 'Make videos longer' },
        { id: 'd', text: 'Add special effects' }
      ],
      correctAnswers: ['b'],
      explanation: 'Smaller files require less bandwidth, enabling smooth streaming over internet connections.'
    },
    {
      text: 'Which factor does NOT affect JPEG compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Quality setting chosen' },
        { id: 'b', text: 'Image content complexity' },
        { id: 'c', text: 'The filename' },
        { id: 'd', text: 'Image resolution' }
      ],
      correctAnswers: ['c'],
      explanation: 'The filename has no effect on compression. Quality, content, and resolution all matter.'
    },
    {
      text: 'When would lossy compression be inappropriate?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Archiving original master recordings' },
        { id: 'b', text: 'Medical X-ray images for diagnosis' },
        { id: 'c', text: 'Legal documents' },
        { id: 'd', text: 'Posting photos to social media' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Critical data like masters, medical images, and legal docs require lossless. Social media photos can use lossy.'
    },
    {
      text: 'What is a "compression artifact"?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An old compressed file' },
        { id: 'b', text: 'A visible or audible flaw caused by lossy compression' },
        { id: 'c', text: 'A file that cannot be opened' },
        { id: 'd', text: 'A type of computer virus' }
      ],
      correctAnswers: ['b'],
      explanation: 'Artifacts are distortions like blocky pixels in images or sound distortion in audio from compression.'
    },
    {
      text: 'JPEG compression works by:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Removing pixels' },
        { id: 'b', text: 'Converting to grayscale' },
        { id: 'c', text: 'Reducing high-frequency detail that humans notice less' },
        { id: 'd', text: 'Shrinking the image dimensions' }
      ],
      correctAnswers: ['c'],
      explanation: 'JPEG removes high-frequency color variations that human vision is less sensitive to.'
    },
    {
      text: 'What is bitrate in audio/video compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The number of bits in a file' },
        { id: 'b', text: 'The amount of data used per second of playback' },
        { id: 'c', text: 'The speed of playback' },
        { id: 'd', text: 'The number of channels' }
      ],
      correctAnswers: ['b'],
      explanation: 'Bitrate (e.g., 128 kbps) indicates how much data is used per second. Higher = better quality.'
    },
    {
      text: 'A 128 kbps MP3 uses how much data per second?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '128 bytes' },
        { id: 'b', text: '128 kilobytes' },
        { id: 'c', text: '16 kilobytes (128 kilobits ÷ 8)' },
        { id: 'd', text: '1 megabyte' }
      ],
      correctAnswers: ['c'],
      explanation: '128 kilobits per second ÷ 8 bits/byte = 16 kilobytes per second.'
    },
    {
      text: 'Why might a photographer save images as RAW instead of JPEG?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'RAW files are smaller' },
        { id: 'b', text: 'RAW preserves all sensor data for maximum editing flexibility' },
        { id: 'c', text: 'RAW is easier to share' },
        { id: 'd', text: 'RAW loads faster' }
      ],
      correctAnswers: ['b'],
      explanation: 'RAW files contain uncompressed sensor data, allowing maximum quality and editing flexibility.'
    },
    {
      text: 'What quality setting should you use for JPEG if you want smallest file size?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Highest quality' },
        { id: 'b', text: 'Lowest quality' },
        { id: 'c', text: 'Quality does not affect file size' },
        { id: 'd', text: 'Medium quality' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lower quality = more compression = smaller files, but more visible artifacts.'
    },
    {
      text: 'H.264 and H.265 are standards for:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Text compression' },
        { id: 'b', text: 'Video compression' },
        { id: 'c', text: 'Image printing' },
        { id: 'd', text: 'Audio compression' }
      ],
      correctAnswers: ['b'],
      explanation: 'H.264 and H.265 (HEVC) are widely-used video compression standards.'
    },
    {
      text: 'Adaptive bitrate streaming adjusts video quality based on:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The time of day' },
        { id: 'b', text: 'The viewer\'s internet connection speed' },
        { id: 'c', text: 'The video\'s popularity' },
        { id: 'd', text: 'The viewer\'s age' }
      ],
      correctAnswers: ['b'],
      explanation: 'Adaptive streaming detects connection speed and adjusts quality to prevent buffering.'
    },
    {
      text: 'The tradeoff with lossy compression is:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Speed vs. compatibility' },
        { id: 'b', text: 'File size vs. quality' },
        { id: 'c', text: 'Cost vs. features' },
        { id: 'd', text: 'Security vs. accessibility' }
      ],
      correctAnswers: ['b'],
      explanation: 'More compression = smaller files but lower quality. Less compression = larger files but better quality.'
    },
    {
      text: 'What is perceptual coding in audio compression?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Coding based on human perception limitations' },
        { id: 'b', text: 'Making audio perceivably louder' },
        { id: 'c', text: 'Encoding messages in audio' },
        { id: 'd', text: 'Converting audio to text' }
      ],
      correctAnswers: ['a'],
      explanation: 'Perceptual coding removes sounds that humans cannot hear or notice due to masking effects.'
    },
    {
      text: 'Which format would result in the largest file for the same image?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'JPEG at high quality' },
        { id: 'b', text: 'JPEG at low quality' },
        { id: 'c', text: 'PNG' },
        { id: 'd', text: 'Cannot be determined' }
      ],
      correctAnswers: ['c'],
      explanation: 'PNG uses lossless compression, typically resulting in larger files than JPEG for photos.'
    },
    {
      text: 'Why do video calls sometimes look pixelated?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The camera is broken' },
        { id: 'b', text: 'Heavy compression is used to maintain real-time transmission over limited bandwidth' },
        { id: 'c', text: 'The software has bugs' },
        { id: 'd', text: 'The screen is dirty' }
      ],
      correctAnswers: ['b'],
      explanation: 'Video calls use aggressive compression to send video in real-time, causing visible artifacts.'
    },
    {
      text: 'Which audio format would an audiophile prefer for best quality?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Low bitrate MP3 (64 kbps)' },
        { id: 'b', text: 'Standard MP3 (128 kbps)' },
        { id: 'c', text: 'FLAC (lossless)' },
        { id: 'd', text: 'Compressed WAV' }
      ],
      correctAnswers: ['c'],
      explanation: 'FLAC is lossless, preserving original audio quality without any compression artifacts.'
    },
    {
      text: 'What is the primary purpose of the quality slider when saving a JPEG?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To change image dimensions' },
        { id: 'b', text: 'To balance between file size and image quality' },
        { id: 'c', text: 'To add filters' },
        { id: 'd', text: 'To change the file format' }
      ],
      correctAnswers: ['b'],
      explanation: 'The quality slider lets users choose their preferred tradeoff between size and quality.'
    },
    {
      text: 'Lossy compression is "good enough" when:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The removed data would not be noticed by the intended audience' },
        { id: 'b', text: 'Files need to be as small as possible regardless of quality' },
        { id: 'c', text: 'The computer has limited processing power' },
        { id: 'd', text: 'The original data is not important' }
      ],
      correctAnswers: ['a'],
      explanation: 'Lossy compression is acceptable when quality loss is imperceptible for the use case.'
    },
    {
      text: 'Why might streaming music services use different compression levels for mobile vs. home?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Mobile devices have smaller speakers' },
        { id: 'b', text: 'Mobile data costs more, so higher compression saves data' },
        { id: 'c', text: 'Home speakers cannot play compressed audio' },
        { id: 'd', text: 'There is no difference' }
      ],
      correctAnswers: ['b'],
      explanation: 'Mobile data is often limited/expensive, so services offer lower quality to reduce data usage.'
    }
  ]
};

async function updateTopicsWithQuestions() {
  console.log('Adding questions to Unit 1 Topics 1.7-1.8...\n');

  for (const [topicId, questions] of Object.entries(questionsData)) {
    const processedQuestions = questions.map((q, index) => ({
      ...q,
      id: `${topicId}-q${index + 1}`,
      isCustom: false,
      addedBy: null,
      addedAt: new Date(),
      deactivated: false
    }));

    await db.collection('topics').doc(topicId).update({
      questions: processedQuestions,
      updatedAt: new Date()
    });

    console.log(`Updated ${topicId} with ${processedQuestions.length} questions`);
  }

  console.log('\nDone!');
}

updateTopicsWithQuestions()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
