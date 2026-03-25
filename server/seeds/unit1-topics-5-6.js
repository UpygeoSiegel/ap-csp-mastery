/**
 * Unit 1: Digital Information - Topics 1.5-1.6 Questions
 * Run with: node server/seeds/unit1-topics-5-6.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questionsData = {
  'di-5-representing-images': [
    {
      text: 'What is a pixel?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A type of image file' },
        { id: 'b', text: 'The smallest unit of a digital image' },
        { id: 'c', text: 'A color code' },
        { id: 'd', text: 'A measurement of screen size' }
      ],
      correctAnswers: ['b'],
      explanation: 'A pixel (picture element) is the smallest addressable element in a digital image.'
    },
    {
      text: 'What does RGB stand for in digital imaging?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Really Good Binary' },
        { id: 'b', text: 'Red, Green, Blue' },
        { id: 'c', text: 'Raster Graphics Bitmap' },
        { id: 'd', text: 'Resolution Graphics Bit' }
      ],
      correctAnswers: ['b'],
      explanation: 'RGB stands for Red, Green, Blue - the three primary colors used in digital displays.'
    },
    {
      text: 'In a standard 24-bit color image, how many bits are used for each color channel (R, G, B)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '4 bits' },
        { id: 'b', text: '8 bits' },
        { id: 'c', text: '16 bits' },
        { id: 'd', text: '24 bits' }
      ],
      correctAnswers: ['b'],
      explanation: '24-bit color divides into 8 bits each for Red, Green, and Blue (8+8+8=24).'
    },
    {
      text: 'How many different colors can be represented with 24-bit color depth?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '256 colors' },
        { id: 'b', text: '65,536 colors' },
        { id: 'c', text: 'About 16.7 million colors' },
        { id: 'd', text: '24 colors' }
      ],
      correctAnswers: ['c'],
      explanation: '2^24 = 16,777,216, approximately 16.7 million different colors.'
    },
    {
      text: 'What is the RGB value for pure red?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'RGB(255, 0, 0)' },
        { id: 'b', text: 'RGB(0, 255, 0)' },
        { id: 'c', text: 'RGB(0, 0, 255)' },
        { id: 'd', text: 'RGB(255, 255, 255)' }
      ],
      correctAnswers: ['a'],
      explanation: 'Pure red has maximum red (255), and no green or blue (0, 0).'
    },
    {
      text: 'What color does RGB(0, 0, 0) represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'White' },
        { id: 'b', text: 'Black' },
        { id: 'c', text: 'Gray' },
        { id: 'd', text: 'Red' }
      ],
      correctAnswers: ['b'],
      explanation: 'RGB(0, 0, 0) means no red, green, or blue light - resulting in black.'
    },
    {
      text: 'What color does RGB(255, 255, 255) represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Black' },
        { id: 'b', text: 'White' },
        { id: 'c', text: 'Gray' },
        { id: 'd', text: 'Yellow' }
      ],
      correctAnswers: ['b'],
      explanation: 'RGB(255, 255, 255) combines maximum red, green, and blue - creating white.'
    },
    {
      text: 'What is image resolution?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The file size of an image' },
        { id: 'b', text: 'The number of pixels in an image (width × height)' },
        { id: 'c', text: 'The number of colors used' },
        { id: 'd', text: 'The brightness of an image' }
      ],
      correctAnswers: ['b'],
      explanation: 'Resolution refers to the dimensions of an image in pixels, like 1920×1080.'
    },
    {
      text: 'An image is 100 pixels wide and 50 pixels tall. How many total pixels does it have?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '150 pixels' },
        { id: 'b', text: '500 pixels' },
        { id: 'c', text: '5,000 pixels' },
        { id: 'd', text: '10,000 pixels' }
      ],
      correctAnswers: ['c'],
      explanation: 'Total pixels = width × height = 100 × 50 = 5,000 pixels.'
    },
    {
      text: 'What is color depth (bit depth)?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'How dark colors appear' },
        { id: 'b', text: 'The number of bits used to represent each pixel\'s color' },
        { id: 'c', text: 'The total number of pixels' },
        { id: 'd', text: 'The size of the image file' }
      ],
      correctAnswers: ['b'],
      explanation: 'Color depth is the number of bits used per pixel, determining how many colors are possible.'
    },
    {
      text: 'How many colors can be represented with 8-bit color depth?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '8 colors' },
        { id: 'b', text: '64 colors' },
        { id: 'c', text: '256 colors' },
        { id: 'd', text: '65,536 colors' }
      ],
      correctAnswers: ['c'],
      explanation: '2^8 = 256 different colors can be represented with 8 bits.'
    },
    {
      text: 'Calculate the file size of an uncompressed 100×100 pixel image with 24-bit color:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '10,000 bytes' },
        { id: 'b', text: '30,000 bytes' },
        { id: 'c', text: '240,000 bytes' },
        { id: 'd', text: '2,400,000 bytes' }
      ],
      correctAnswers: ['b'],
      explanation: '100×100 pixels × 24 bits ÷ 8 bits/byte = 10,000 × 3 bytes = 30,000 bytes.'
    },
    {
      text: 'What happens when you increase the resolution of an image?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'File size decreases' },
        { id: 'b', text: 'File size increases' },
        { id: 'c', text: 'Colors become fewer' },
        { id: 'd', text: 'Image becomes darker' }
      ],
      correctAnswers: ['b'],
      explanation: 'More pixels means more data to store, increasing the file size.'
    },
    {
      text: 'A 1-bit image can display:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only black and white' },
        { id: 'b', text: '256 shades of gray' },
        { id: 'c', text: 'Millions of colors' },
        { id: 'd', text: 'Only one color' }
      ],
      correctAnswers: ['a'],
      explanation: '1 bit = 2 values = 2 colors, typically black (0) and white (1).'
    },
    {
      text: 'Which would create a larger file size?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '100×100 image with 8-bit color' },
        { id: 'b', text: '100×100 image with 24-bit color' },
        { id: 'c', text: 'They would be the same size' },
        { id: 'd', text: 'Cannot be determined' }
      ],
      correctAnswers: ['b'],
      explanation: '24-bit uses 3× more data per pixel than 8-bit, resulting in a larger file.'
    },
    {
      text: 'What is a raster image?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'An image made of mathematical formulas' },
        { id: 'b', text: 'An image made up of a grid of pixels' },
        { id: 'c', text: 'A 3D image' },
        { id: 'd', text: 'An animated image' }
      ],
      correctAnswers: ['b'],
      explanation: 'Raster images (bitmaps) are composed of a grid of individual pixels.'
    },
    {
      text: 'What happens when you zoom in on a raster image too much?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It stays perfectly sharp' },
        { id: 'b', text: 'Individual pixels become visible, making it look blocky' },
        { id: 'c', text: 'New details appear' },
        { id: 'd', text: 'The colors change' }
      ],
      correctAnswers: ['b'],
      explanation: 'Zooming reveals individual pixels because raster images have fixed resolution.'
    },
    {
      text: 'In hexadecimal color codes, #FF0000 represents:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Blue' },
        { id: 'b', text: 'Green' },
        { id: 'c', text: 'Red' },
        { id: 'd', text: 'Yellow' }
      ],
      correctAnswers: ['c'],
      explanation: '#FF0000: FF (255) red, 00 (0) green, 00 (0) blue = pure red.'
    },
    {
      text: 'What is the purpose of the alpha channel in RGBA?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'To add more colors' },
        { id: 'b', text: 'To control transparency' },
        { id: 'c', text: 'To improve resolution' },
        { id: 'd', text: 'To compress the image' }
      ],
      correctAnswers: ['b'],
      explanation: 'The alpha channel controls transparency, from fully opaque to fully transparent.'
    },
    {
      text: 'What color does RGB(128, 128, 128) represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Black' },
        { id: 'b', text: 'White' },
        { id: 'c', text: 'Medium gray' },
        { id: 'd', text: 'Light blue' }
      ],
      correctAnswers: ['c'],
      explanation: 'Equal values of R, G, and B create shades of gray. 128 is halfway between 0 and 255.'
    },
    {
      text: 'What is the relationship between color depth and file size?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Higher color depth means smaller files' },
        { id: 'b', text: 'Higher color depth means larger files' },
        { id: 'c', text: 'Color depth does not affect file size' },
        { id: 'd', text: 'Lower color depth means larger files' }
      ],
      correctAnswers: ['b'],
      explanation: 'More bits per pixel (higher color depth) requires more storage space.'
    },
    {
      text: 'A "megapixel" refers to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'One thousand pixels' },
        { id: 'b', text: 'One million pixels' },
        { id: 'c', text: 'One billion pixels' },
        { id: 'd', text: 'The size of a pixel' }
      ],
      correctAnswers: ['b'],
      explanation: 'Mega = million. A megapixel is 1,000,000 pixels.'
    },
    {
      text: 'A 12-megapixel camera could produce an image with resolution:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1,200 × 1,000 pixels' },
        { id: 'b', text: '4,000 × 3,000 pixels' },
        { id: 'c', text: '1,000 × 1,000 pixels' },
        { id: 'd', text: '12,000 × 1,000 pixels' }
      ],
      correctAnswers: ['b'],
      explanation: '4,000 × 3,000 = 12,000,000 pixels = 12 megapixels.'
    },
    {
      text: 'To create the color orange using RGB, you would need:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'High red, medium green, no blue' },
        { id: 'b', text: 'Equal amounts of all colors' },
        { id: 'c', text: 'High blue, high green, no red' },
        { id: 'd', text: 'Only red' }
      ],
      correctAnswers: ['a'],
      explanation: 'Orange is created by mixing red and some green. Example: RGB(255, 165, 0).'
    },
    {
      text: 'What does "lossless" mean when referring to image formats?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The image cannot be edited' },
        { id: 'b', text: 'No image quality is lost during compression' },
        { id: 'c', text: 'The image has no colors' },
        { id: 'd', text: 'The file cannot be copied' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossless formats preserve all original image data when compressing.'
    }
  ],

  'di-6-representing-sound': [
    {
      text: 'What is sampling in digital audio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Recording a short clip of audio' },
        { id: 'b', text: 'Measuring the amplitude of a sound wave at regular intervals' },
        { id: 'c', text: 'Copying audio from another source' },
        { id: 'd', text: 'Testing speakers' }
      ],
      correctAnswers: ['b'],
      explanation: 'Sampling captures the amplitude (height) of a sound wave at discrete time intervals.'
    },
    {
      text: 'What is sample rate?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'How loud the audio is' },
        { id: 'b', text: 'The number of samples taken per second' },
        { id: 'c', text: 'The length of an audio file' },
        { id: 'd', text: 'The number of audio channels' }
      ],
      correctAnswers: ['b'],
      explanation: 'Sample rate (measured in Hz or kHz) is how many times per second the audio is sampled.'
    },
    {
      text: 'What is the standard sample rate for CD-quality audio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '8,000 Hz' },
        { id: 'b', text: '22,050 Hz' },
        { id: 'c', text: '44,100 Hz' },
        { id: 'd', text: '96,000 Hz' }
      ],
      correctAnswers: ['c'],
      explanation: 'CD-quality audio uses 44,100 Hz (44.1 kHz), sampling 44,100 times per second.'
    },
    {
      text: 'What is bit depth in audio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'How long the audio file is' },
        { id: 'b', text: 'The number of bits used to represent each sample' },
        { id: 'c', text: 'The frequency of the sound' },
        { id: 'd', text: 'The volume level' }
      ],
      correctAnswers: ['b'],
      explanation: 'Bit depth determines how many different amplitude levels can be represented for each sample.'
    },
    {
      text: 'CD-quality audio uses 16-bit depth. How many different amplitude levels can this represent?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '16 levels' },
        { id: 'b', text: '256 levels' },
        { id: 'c', text: '32,768 levels' },
        { id: 'd', text: '65,536 levels' }
      ],
      correctAnswers: ['d'],
      explanation: '16 bits can represent 2^16 = 65,536 different amplitude levels.'
    },
    {
      text: 'What happens to audio quality when you increase the sample rate?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Quality decreases' },
        { id: 'b', text: 'Quality increases (more accurate representation)' },
        { id: 'c', text: 'No change in quality' },
        { id: 'd', text: 'Audio becomes louder' }
      ],
      correctAnswers: ['b'],
      explanation: 'Higher sample rates capture more detail of the original sound wave, improving quality.'
    },
    {
      text: 'What happens to file size when you increase the sample rate?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'File size decreases' },
        { id: 'b', text: 'File size increases' },
        { id: 'c', text: 'File size stays the same' },
        { id: 'd', text: 'It depends on the bit depth' }
      ],
      correctAnswers: ['b'],
      explanation: 'More samples per second means more data to store, increasing file size.'
    },
    {
      text: 'Why is 44.1 kHz used for CD audio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It was randomly chosen' },
        { id: 'b', text: 'It is more than twice the highest frequency humans can hear' },
        { id: 'c', text: 'It was the cheapest to implement' },
        { id: 'd', text: 'CDs can only store this rate' }
      ],
      correctAnswers: ['b'],
      explanation: 'Humans hear up to ~20 kHz. Nyquist theorem requires sampling at >40 kHz. 44.1 kHz provides margin.'
    },
    {
      text: 'What is the Nyquist theorem related to?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Image compression' },
        { id: 'b', text: 'The minimum sample rate needed to accurately capture a frequency' },
        { id: 'c', text: 'Internet speed' },
        { id: 'd', text: 'CPU processing' }
      ],
      correctAnswers: ['b'],
      explanation: 'Nyquist states you must sample at least twice the highest frequency to accurately reproduce it.'
    },
    {
      text: 'What is quantization in digital audio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Counting the number of samples' },
        { id: 'b', text: 'Converting continuous amplitude values to discrete digital values' },
        { id: 'c', text: 'Measuring frequency' },
        { id: 'd', text: 'Adding effects to audio' }
      ],
      correctAnswers: ['b'],
      explanation: 'Quantization rounds the actual amplitude to the nearest available digital level.'
    },
    {
      text: 'Higher bit depth in audio results in:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Longer audio files' },
        { id: 'b', text: 'More accurate representation of amplitude' },
        { id: 'c', text: 'Higher frequencies' },
        { id: 'd', text: 'Faster playback' }
      ],
      correctAnswers: ['b'],
      explanation: 'More bits allow more precise amplitude values, reducing quantization noise.'
    },
    {
      text: 'What is mono audio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Audio with one channel' },
        { id: 'b', text: 'Audio with two channels' },
        { id: 'c', text: 'Very loud audio' },
        { id: 'd', text: 'Compressed audio' }
      ],
      correctAnswers: ['a'],
      explanation: 'Mono (monaural) audio has a single channel, the same sound in all speakers.'
    },
    {
      text: 'Stereo audio uses how many channels?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '1 channel' },
        { id: 'b', text: '2 channels' },
        { id: 'c', text: '4 channels' },
        { id: 'd', text: '8 channels' }
      ],
      correctAnswers: ['b'],
      explanation: 'Stereo uses 2 channels (left and right) for a spatial audio experience.'
    },
    {
      text: 'How does stereo audio affect file size compared to mono?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Stereo is smaller' },
        { id: 'b', text: 'Stereo is approximately twice as large' },
        { id: 'c', text: 'They are the same size' },
        { id: 'd', text: 'Stereo is half the size' }
      ],
      correctAnswers: ['b'],
      explanation: 'Stereo requires storing two channels of data instead of one, roughly doubling the file size.'
    },
    {
      text: 'Calculate the file size of 1 second of CD-quality audio (44.1 kHz, 16-bit, stereo):',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'About 44 KB' },
        { id: 'b', text: 'About 88 KB' },
        { id: 'c', text: 'About 176 KB' },
        { id: 'd', text: 'About 352 KB' }
      ],
      correctAnswers: ['c'],
      explanation: '44,100 samples × 16 bits × 2 channels ÷ 8 bits/byte = 176,400 bytes ≈ 176 KB per second.'
    },
    {
      text: 'What is an analog signal?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A signal made of discrete values' },
        { id: 'b', text: 'A continuous signal that can take any value' },
        { id: 'c', text: 'A compressed signal' },
        { id: 'd', text: 'A digital signal' }
      ],
      correctAnswers: ['b'],
      explanation: 'Analog signals are continuous, with infinite possible values at any point in time.'
    },
    {
      text: 'What is lost when converting analog audio to digital?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The entire audio' },
        { id: 'b', text: 'Some detail between samples (continuous nature of the wave)' },
        { id: 'c', text: 'Nothing is lost' },
        { id: 'd', text: 'Only the loudest sounds' }
      ],
      correctAnswers: ['b'],
      explanation: 'Digital sampling captures snapshots at intervals; details between samples are lost or approximated.'
    },
    {
      text: 'Telephone audio typically uses 8 kHz sample rate. Why is this lower than CD audio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Phone speakers cannot play higher quality' },
        { id: 'b', text: 'Lower sample rate requires less bandwidth, and speech needs less fidelity than music' },
        { id: 'c', text: 'It was a design mistake' },
        { id: 'd', text: 'Higher rates do not work over phone lines' }
      ],
      correctAnswers: ['b'],
      explanation: 'Voice has a limited frequency range, so 8 kHz is adequate. Lower rates use less data.'
    },
    {
      text: 'What does "lossless" audio format mean?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The audio file cannot be deleted' },
        { id: 'b', text: 'The audio can be perfectly reconstructed from the compressed file' },
        { id: 'c', text: 'The audio cannot be copied' },
        { id: 'd', text: 'The audio has no compression' }
      ],
      correctAnswers: ['b'],
      explanation: 'Lossless compression reduces file size while allowing perfect reconstruction of the original.'
    },
    {
      text: 'Which of the following increases audio file size? (Select all that apply)',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Higher sample rate' },
        { id: 'b', text: 'Higher bit depth' },
        { id: 'c', text: 'More channels (stereo vs mono)' },
        { id: 'd', text: 'Longer duration' }
      ],
      correctAnswers: ['a', 'b', 'c', 'd'],
      explanation: 'All of these factors increase the amount of data needed to store the audio.'
    },
    {
      text: 'What is aliasing in audio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Copying audio' },
        { id: 'b', text: 'Distortion caused by sample rate that is too low for the frequencies present' },
        { id: 'c', text: 'Renaming an audio file' },
        { id: 'd', text: 'Adding echo effects' }
      ],
      correctAnswers: ['b'],
      explanation: 'Aliasing occurs when frequencies above half the sample rate are incorrectly represented.'
    },
    {
      text: '24-bit audio provides how many more amplitude levels than 16-bit audio?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: '8 more levels' },
        { id: 'b', text: '256 times as many levels' },
        { id: 'c', text: '50% more levels' },
        { id: 'd', text: 'The same number of levels' }
      ],
      correctAnswers: ['b'],
      explanation: '24-bit = 2^24 levels. 16-bit = 2^16 levels. 2^24 ÷ 2^16 = 2^8 = 256 times more levels.'
    },
    {
      text: 'What does ADC stand for in audio recording?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Audio Digital Controller' },
        { id: 'b', text: 'Analog-to-Digital Converter' },
        { id: 'c', text: 'Advanced Digital Compressor' },
        { id: 'd', text: 'Audio Data Channel' }
      ],
      correctAnswers: ['b'],
      explanation: 'An ADC converts continuous analog signals into discrete digital values.'
    },
    {
      text: 'What does DAC stand for in audio playback?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Digital-to-Analog Converter' },
        { id: 'b', text: 'Data Audio Channel' },
        { id: 'c', text: 'Dynamic Audio Compression' },
        { id: 'd', text: 'Digital Audio Controller' }
      ],
      correctAnswers: ['a'],
      explanation: 'A DAC converts digital samples back into analog signals for speakers to play.'
    },
    {
      text: 'Why might podcast audio use lower quality settings than music?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Podcasts are less important' },
        { id: 'b', text: 'Speech requires less fidelity than music, and smaller files are easier to download' },
        { id: 'c', text: 'Higher quality is impossible for speech' },
        { id: 'd', text: 'Podcast software cannot handle high quality' }
      ],
      correctAnswers: ['b'],
      explanation: 'Speech has a narrower frequency range, so lower quality is acceptable and reduces file size.'
    }
  ]
};

async function updateTopicsWithQuestions() {
  console.log('Adding questions to Unit 1 Topics 1.5-1.6...\n');

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
