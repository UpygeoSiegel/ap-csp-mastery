/**
 * Seed questions for Big Idea 5: Impact of Computing
 * Run with: node server/seeds/seed-bigidea5-questions.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questionsData = {
  'topic-5.1': [
    // Beneficial and Harmful Effects - 10 questions
    { text: 'Which is an example of a beneficial effect of computing?', type: 'multiple_choice', options: [{ id: 'a', text: 'Increased cyberbullying' }, { id: 'b', text: 'Faster access to medical information saving lives' }, { id: 'c', text: 'Job displacement' }, { id: 'd', text: 'Privacy violations' }], correctAnswers: ['b'], explanation: 'Computing enables rapid access to information that can save lives.' },
    { text: 'Which is an example of a harmful effect of computing?', type: 'multiple_choice', options: [{ id: 'a', text: 'Connecting with distant family' }, { id: 'b', text: 'Learning new skills online' }, { id: 'c', text: 'Spread of misinformation' }, { id: 'd', text: 'Improved medical diagnostics' }], correctAnswers: ['c'], explanation: 'Computing platforms can spread false information quickly and widely.' },
    { text: 'The same technology can be both beneficial and harmful. This is because:', type: 'multiple_choice', options: [{ id: 'a', text: 'Technology is unpredictable' }, { id: 'b', text: 'The impact depends on how it is used' }, { id: 'c', text: 'All technology is bad' }, { id: 'd', text: 'All technology is good' }], correctAnswers: ['b'], explanation: 'Technology is a tool; its impact depends on how people choose to use it.' },
    { text: 'Social media platforms have been credited with:', type: 'multiple_select', options: [{ id: 'a', text: 'Helping organize social movements' }, { id: 'b', text: 'Connecting people across distances' }, { id: 'c', text: 'Spreading misinformation' }, { id: 'd', text: 'Always being completely positive' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Social media has both positive (connection, organizing) and negative (misinformation) effects.' },
    { text: 'Automation can lead to:', type: 'multiple_select', options: [{ id: 'a', text: 'Increased efficiency' }, { id: 'b', text: 'Job displacement in some sectors' }, { id: 'c', text: 'Creation of new types of jobs' }, { id: 'd', text: 'No economic impact' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Automation increases efficiency but changes job markets - eliminating some jobs while creating others.' },
    { text: 'A computing innovation\'s effects are often:', type: 'multiple_choice', options: [{ id: 'a', text: 'Fully predictable before launch' }, { id: 'b', text: 'Difficult to fully predict, with unintended consequences' }, { id: 'c', text: 'Always positive' }, { id: 'd', text: 'Always negative' }], correctAnswers: ['b'], explanation: 'Many effects of technology are unintended and only discovered after widespread use.' },
    { text: 'Online learning platforms represent:', type: 'multiple_choice', options: [{ id: 'a', text: 'Only negative effects of computing' }, { id: 'b', text: 'A beneficial application that increases access to education' }, { id: 'c', text: 'No impact on education' }, { id: 'd', text: 'A replacement for all teachers' }], correctAnswers: ['b'], explanation: 'Online learning expands educational access, especially to those who cannot attend traditional schools.' },
    { text: 'Which factor should be considered when evaluating computing innovations?', type: 'multiple_select', options: [{ id: 'a', text: 'Who benefits from the technology' }, { id: 'b', text: 'Who might be harmed' }, { id: 'c', text: 'Unintended consequences' }, { id: 'd', text: 'Only the color of the interface' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Evaluating technology requires considering benefits, harms, and unintended consequences.' },
    { text: 'GPS navigation apps are beneficial because they:', type: 'multiple_choice', options: [{ id: 'a', text: 'Never make mistakes' }, { id: 'b', text: 'Help people find destinations and can improve emergency response' }, { id: 'c', text: 'Replace the need for maps entirely' }, { id: 'd', text: 'Work without any data collection' }], correctAnswers: ['b'], explanation: 'GPS apps help navigation and enable faster emergency response, though they also collect location data.' },
    { text: 'When a new technology is introduced, who should consider its potential impacts?', type: 'multiple_choice', options: [{ id: 'a', text: 'Only the developers' }, { id: 'b', text: 'Only the government' }, { id: 'c', text: 'Developers, users, policymakers, and society' }, { id: 'd', text: 'No one' }], correctAnswers: ['c'], explanation: 'Everyone has a role in considering and addressing technology\'s impacts.' }
  ],

  'topic-5.2': [
    // Digital Divide - 10 questions
    { text: 'What is the digital divide?', type: 'multiple_choice', options: [{ id: 'a', text: 'A mathematical concept' }, { id: 'b', text: 'The gap between those with and without access to technology and the internet' }, { id: 'c', text: 'A type of software' }, { id: 'd', text: 'A computer virus' }], correctAnswers: ['b'], explanation: 'The digital divide refers to unequal access to technology and internet connectivity.' },
    { text: 'Which factors contribute to the digital divide?', type: 'multiple_select', options: [{ id: 'a', text: 'Economic status' }, { id: 'b', text: 'Geographic location' }, { id: 'c', text: 'Age and education' }, { id: 'd', text: 'Hair color' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Economic status, location, age, and education all affect technology access.' },
    { text: 'Rural areas often face digital divide challenges because:', type: 'multiple_choice', options: [{ id: 'a', text: 'People there don\'t want internet' }, { id: 'b', text: 'Internet infrastructure is more expensive to build in less populated areas' }, { id: 'c', text: 'The internet doesn\'t work in rural areas' }, { id: 'd', text: 'Rural areas have too much internet' }], correctAnswers: ['b'], explanation: 'Building internet infrastructure in rural areas is expensive relative to the number of users served.' },
    { text: 'The digital divide can affect:', type: 'multiple_select', options: [{ id: 'a', text: 'Access to education' }, { id: 'b', text: 'Job opportunities' }, { id: 'c', text: 'Healthcare information' }, { id: 'd', text: 'Nothing important' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Technology access affects education, employment, healthcare, and many other life opportunities.' },
    { text: 'Which is NOT a solution to address the digital divide?', type: 'multiple_choice', options: [{ id: 'a', text: 'Public library computer access' }, { id: 'b', text: 'Subsidized internet programs' }, { id: 'c', text: 'Ignoring the problem' }, { id: 'd', text: 'Community technology centers' }], correctAnswers: ['c'], explanation: 'Libraries, subsidies, and community centers help; ignoring the problem does not.' },
    { text: 'Low-income families may face digital divide challenges because:', type: 'multiple_choice', options: [{ id: 'a', text: 'They don\'t need technology' }, { id: 'b', text: 'Devices and internet service can be expensive' }, { id: 'c', text: 'Technology is only for rich people' }, { id: 'd', text: 'They have too much technology' }], correctAnswers: ['b'], explanation: 'The cost of devices and monthly service fees creates barriers for low-income families.' },
    { text: 'During the COVID-19 pandemic, the digital divide became more visible because:', type: 'multiple_choice', options: [{ id: 'a', text: 'Everyone had equal internet access' }, { id: 'b', text: 'Remote learning and work required internet access that not everyone had' }, { id: 'c', text: 'The internet was shut down' }, { id: 'd', text: 'No one needed the internet' }], correctAnswers: ['b'], explanation: 'The shift to remote learning and work highlighted existing inequalities in internet access.' },
    { text: 'The global digital divide refers to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Differences within one country' }, { id: 'b', text: 'Differences in technology access between developed and developing countries' }, { id: 'c', text: 'A computer networking term' }, { id: 'd', text: 'A type of programming' }], correctAnswers: ['b'], explanation: 'The global digital divide describes disparities between nations in technology access.' },
    { text: 'Digital literacy is important because:', type: 'multiple_choice', options: [{ id: 'a', text: 'It\'s not important' }, { id: 'b', text: 'Having devices isn\'t useful without skills to use them effectively' }, { id: 'c', text: 'Only programmers need to use computers' }, { id: 'd', text: 'Technology uses itself' }], correctAnswers: ['b'], explanation: 'Access alone isn\'t enough; people need skills to use technology effectively.' },
    { text: 'Addressing the digital divide is important for:', type: 'multiple_choice', options: [{ id: 'a', text: 'Only technology companies' }, { id: 'b', text: 'Ensuring equal opportunity and participation in modern society' }, { id: 'c', text: 'Making technology companies richer' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: 'Closing the digital divide promotes equality and enables full participation in society.' }
  ],

  'topic-5.3': [
    // Computing Bias - 10 questions
    { text: 'What is computing bias?', type: 'multiple_choice', options: [{ id: 'a', text: 'Computers being too slow' }, { id: 'b', text: 'When computer systems reflect or amplify human biases' }, { id: 'c', text: 'A hardware malfunction' }, { id: 'd', text: 'A programming language' }], correctAnswers: ['b'], explanation: 'Computing bias occurs when systems unfairly favor or discriminate against certain groups.' },
    { text: 'How can bias enter a machine learning system?', type: 'multiple_select', options: [{ id: 'a', text: 'Through biased training data' }, { id: 'b', text: 'Through biased algorithm design' }, { id: 'c', text: 'Through biased interpretation of results' }, { id: 'd', text: 'Bias cannot enter machine learning systems' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Bias can enter at many stages: data collection, algorithm design, and result interpretation.' },
    { text: 'A facial recognition system that works poorly on certain skin tones demonstrates:', type: 'multiple_choice', options: [{ id: 'a', text: 'Perfect technology' }, { id: 'b', text: 'Bias in the training data or algorithm' }, { id: 'c', text: 'No problems' }, { id: 'd', text: 'Excellent design' }], correctAnswers: ['b'], explanation: 'Poor performance on certain groups often indicates biased or unrepresentative training data.' },
    { text: 'Why is bias in computing systems particularly concerning?', type: 'multiple_choice', options: [{ id: 'a', text: 'It\'s not concerning' }, { id: 'b', text: 'Automated systems can make biased decisions at scale, affecting many people' }, { id: 'c', text: 'Computers are always fair' }, { id: 'd', text: 'Only a few people use computers' }], correctAnswers: ['b'], explanation: 'Automated biased systems can discriminate against thousands or millions of people.' },
    { text: 'Who is responsible for addressing bias in computing systems?', type: 'multiple_choice', options: [{ id: 'a', text: 'Only users' }, { id: 'b', text: 'Only the government' }, { id: 'c', text: 'Developers, organizations, and policymakers all share responsibility' }, { id: 'd', text: 'No one' }], correctAnswers: ['c'], explanation: 'Addressing bias requires effort from developers, organizations, and policymakers.' },
    { text: 'A hiring algorithm trained on past hiring decisions might:', type: 'multiple_choice', options: [{ id: 'a', text: 'Always be fair' }, { id: 'b', text: 'Perpetuate historical biases in hiring' }, { id: 'c', text: 'Eliminate all bias' }, { id: 'd', text: 'Only hire programmers' }], correctAnswers: ['b'], explanation: 'If past decisions were biased, the algorithm learns and perpetuates those biases.' },
    { text: 'To reduce bias, developers should:', type: 'multiple_select', options: [{ id: 'a', text: 'Use diverse and representative training data' }, { id: 'b', text: 'Test systems on diverse populations' }, { id: 'c', text: 'Include diverse perspectives in the development team' }, { id: 'd', text: 'Ignore the problem' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Diverse data, testing, and teams help identify and reduce bias.' },
    { text: 'Algorithmic bias can affect decisions about:', type: 'multiple_select', options: [{ id: 'a', text: 'Loan approvals' }, { id: 'b', text: 'Job applications' }, { id: 'c', text: 'Criminal justice' }, { id: 'd', text: 'Nothing important' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Algorithmic bias affects many high-stakes decisions in finance, employment, and justice.' },
    { text: 'The phrase "garbage in, garbage out" relates to bias because:', type: 'multiple_choice', options: [{ id: 'a', text: 'It\'s about recycling' }, { id: 'b', text: 'Biased input data leads to biased outputs' }, { id: 'c', text: 'Computers produce garbage' }, { id: 'd', text: 'It\'s unrelated to bias' }], correctAnswers: ['b'], explanation: 'If training data contains bias, the system will produce biased results.' },
    { text: 'Awareness of computing bias helps:', type: 'multiple_choice', options: [{ id: 'a', text: 'Nothing' }, { id: 'b', text: 'Users and developers think critically about automated decisions' }, { id: 'c', text: 'Computers run faster' }, { id: 'd', text: 'Create more bias' }], correctAnswers: ['b'], explanation: 'Awareness leads to critical evaluation and efforts to reduce bias.' }
  ],

  'topic-5.4': [
    // Crowdsourcing - 10 questions
    { text: 'What is crowdsourcing?', type: 'multiple_choice', options: [{ id: 'a', text: 'A type of cloud computing' }, { id: 'b', text: 'Obtaining services or information from a large group of people, often online' }, { id: 'c', text: 'A social media platform' }, { id: 'd', text: 'A programming language' }], correctAnswers: ['b'], explanation: 'Crowdsourcing gathers input, services, or funding from many people, often via the internet.' },
    { text: 'Wikipedia is an example of crowdsourcing because:', type: 'multiple_choice', options: [{ id: 'a', text: 'It was written by one person' }, { id: 'b', text: 'Content is created and edited by millions of volunteer contributors' }, { id: 'c', text: 'It\'s a social media site' }, { id: 'd', text: 'It\'s not crowdsourced' }], correctAnswers: ['b'], explanation: 'Wikipedia relies on contributions from people worldwide to create and maintain content.' },
    { text: 'Crowdfunding platforms like Kickstarter use crowdsourcing for:', type: 'multiple_choice', options: [{ id: 'a', text: 'Software development' }, { id: 'b', text: 'Raising money from many small contributors' }, { id: 'c', text: 'Teaching coding' }, { id: 'd', text: 'Cloud storage' }], correctAnswers: ['b'], explanation: 'Crowdfunding uses crowds to collectively fund projects or ventures.' },
    { text: 'An advantage of crowdsourcing is:', type: 'multiple_choice', options: [{ id: 'a', text: 'It\'s always free' }, { id: 'b', text: 'It can gather diverse perspectives and large amounts of data quickly' }, { id: 'c', text: 'Information is always accurate' }, { id: 'd', text: 'Only experts participate' }], correctAnswers: ['b'], explanation: 'Crowdsourcing gathers diverse input and scales well for large tasks.' },
    { text: 'A challenge of crowdsourcing is:', type: 'multiple_choice', options: [{ id: 'a', text: 'Too few contributors' }, { id: 'b', text: 'Quality control and verifying accuracy of contributions' }, { id: 'c', text: 'It\'s too expensive' }, { id: 'd', text: 'There are no challenges' }], correctAnswers: ['b'], explanation: 'Ensuring quality and accuracy is difficult with many contributors.' },
    { text: 'Citizen science projects use crowdsourcing to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Replace all scientists' }, { id: 'b', text: 'Engage the public in collecting and analyzing scientific data' }, { id: 'c', text: 'Keep science secret' }, { id: 'd', text: 'Make science more expensive' }], correctAnswers: ['b'], explanation: 'Citizen science engages volunteers to help with data collection and research.' },
    { text: 'Open-source software development is a form of crowdsourcing because:', type: 'multiple_choice', options: [{ id: 'a', text: 'It\'s expensive' }, { id: 'b', text: 'Many developers contribute code voluntarily' }, { id: 'c', text: 'Only one company makes it' }, { id: 'd', text: 'It\'s secret' }], correctAnswers: ['b'], explanation: 'Open-source relies on community contributions to develop software.' },
    { text: 'Traffic apps like Waze use crowdsourcing for:', type: 'multiple_choice', options: [{ id: 'a', text: 'Creating maps from scratch' }, { id: 'b', text: 'Getting real-time traffic reports from users' }, { id: 'c', text: 'Selling cars' }, { id: 'd', text: 'Teaching driving' }], correctAnswers: ['b'], explanation: 'Users contribute real-time traffic data, benefiting all other users.' },
    { text: 'Distributed computing projects like SETI@home crowdsource:', type: 'multiple_choice', options: [{ id: 'a', text: 'Only money' }, { id: 'b', text: 'Computing power from volunteers\' computers' }, { id: 'c', text: 'Physical labor' }, { id: 'd', text: 'Office space' }], correctAnswers: ['b'], explanation: 'Distributed computing uses idle processing power from many computers.' },
    { text: 'For crowdsourcing to work well, there should be:', type: 'multiple_select', options: [{ id: 'a', text: 'Clear guidelines for contributors' }, { id: 'b', text: 'Ways to verify quality' }, { id: 'c', text: 'Incentives for participation' }, { id: 'd', text: 'Only one participant' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Successful crowdsourcing needs clear guidelines, quality control, and participation incentives.' }
  ],

  'topic-5.5': [
    // Legal and Ethical Concerns - 10 questions
    { text: 'What is intellectual property?', type: 'multiple_choice', options: [{ id: 'a', text: 'Physical property' }, { id: 'b', text: 'Creations of the mind that can be legally protected (ideas, inventions, creative works)' }, { id: 'c', text: 'A type of software' }, { id: 'd', text: 'Computer hardware' }], correctAnswers: ['b'], explanation: 'Intellectual property includes patents, copyrights, and other protected creative works.' },
    { text: 'Copyright protects:', type: 'multiple_choice', options: [{ id: 'a', text: 'Ideas themselves' }, { id: 'b', text: 'Original creative works like music, writing, and code' }, { id: 'c', text: 'All information on the internet' }, { id: 'd', text: 'Physical objects only' }], correctAnswers: ['b'], explanation: 'Copyright protects the expression of ideas in creative works, not the ideas themselves.' },
    { text: 'Using someone else\'s code without permission or attribution is:', type: 'multiple_choice', options: [{ id: 'a', text: 'Always acceptable' }, { id: 'b', text: 'Potentially copyright infringement and plagiarism' }, { id: 'c', text: 'Encouraged' }, { id: 'd', text: 'The only way to program' }], correctAnswers: ['b'], explanation: 'Using others\' code without permission or credit can violate copyright and academic integrity.' },
    { text: 'Creative Commons licenses allow creators to:', type: 'multiple_choice', options: [{ id: 'a', text: 'Keep all rights forever' }, { id: 'b', text: 'Share their work while specifying how others can use it' }, { id: 'c', text: 'Delete their work' }, { id: 'd', text: 'Prevent all use of their work' }], correctAnswers: ['b'], explanation: 'Creative Commons offers flexible licenses for sharing while retaining some rights.' },
    { text: 'Fair use allows limited use of copyrighted material for:', type: 'multiple_select', options: [{ id: 'a', text: 'Education' }, { id: 'b', text: 'Commentary and criticism' }, { id: 'c', text: 'Parody' }, { id: 'd', text: 'Any commercial purpose' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Fair use covers education, criticism, parody, and other transformative uses, but not unlimited commercial use.' },
    { text: 'Privacy concerns with computing include:', type: 'multiple_select', options: [{ id: 'a', text: 'Data collection without consent' }, { id: 'b', text: 'Surveillance' }, { id: 'c', text: 'Data breaches exposing personal information' }, { id: 'd', text: 'Faster computers' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Privacy concerns involve data collection, surveillance, and security breaches.' },
    { text: 'The ethical principle of informed consent means:', type: 'multiple_choice', options: [{ id: 'a', text: 'Collecting data secretly' }, { id: 'b', text: 'Users should understand and agree to how their data is used' }, { id: 'c', text: 'Consent is not needed' }, { id: 'd', text: 'Only companies decide data use' }], correctAnswers: ['b'], explanation: 'Informed consent requires users understand and agree to data collection practices.' },
    { text: 'Software piracy refers to:', type: 'multiple_choice', options: [{ id: 'a', text: 'A type of video game' }, { id: 'b', text: 'Illegally copying or distributing software' }, { id: 'c', text: 'Legal software sharing' }, { id: 'd', text: 'Open-source software' }], correctAnswers: ['b'], explanation: 'Software piracy is the unauthorized copying or distribution of copyrighted software.' },
    { text: 'Terms of Service agreements:', type: 'multiple_choice', options: [{ id: 'a', text: 'Are optional and meaningless' }, { id: 'b', text: 'Are legal contracts specifying rules for using a service' }, { id: 'c', text: 'Never mention data use' }, { id: 'd', text: 'Don\'t exist' }], correctAnswers: ['b'], explanation: 'Terms of Service are binding agreements that specify usage rules and data practices.' },
    { text: 'Open-source software:', type: 'multiple_choice', options: [{ id: 'a', text: 'Has no license' }, { id: 'b', text: 'Makes source code available and specifies how it can be used via licenses' }, { id: 'c', text: 'Cannot be used by anyone' }, { id: 'd', text: 'Is always public domain' }], correctAnswers: ['b'], explanation: 'Open-source provides code access but still uses licenses to govern use and modification.' }
  ],

  'topic-5.6': [
    // Safe Computing - 10 questions
    { text: 'What is phishing?', type: 'multiple_choice', options: [{ id: 'a', text: 'A type of fishing sport' }, { id: 'b', text: 'Fraudulent attempts to obtain sensitive information by pretending to be trustworthy' }, { id: 'c', text: 'A programming language' }, { id: 'd', text: 'A type of antivirus' }], correctAnswers: ['b'], explanation: 'Phishing uses deceptive emails or websites to steal personal information.' },
    { text: 'Strong passwords should include:', type: 'multiple_select', options: [{ id: 'a', text: 'A mix of uppercase and lowercase letters' }, { id: 'b', text: 'Numbers and special characters' }, { id: 'c', text: 'At least 12 characters' }, { id: 'd', text: 'Your name and birthday' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Strong passwords are long and include varied character types, not personal info.' },
    { text: 'Two-factor authentication improves security by:', type: 'multiple_choice', options: [{ id: 'a', text: 'Requiring only a password' }, { id: 'b', text: 'Requiring two different forms of verification' }, { id: 'c', text: 'Making login easier' }, { id: 'd', text: 'Eliminating passwords' }], correctAnswers: ['b'], explanation: '2FA adds a second verification method (like a phone code) beyond just a password.' },
    { text: 'Malware includes:', type: 'multiple_select', options: [{ id: 'a', text: 'Viruses' }, { id: 'b', text: 'Ransomware' }, { id: 'c', text: 'Spyware' }, { id: 'd', text: 'Legitimate software' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Malware is malicious software including viruses, ransomware, spyware, and more.' },
    { text: 'Encryption helps protect data by:', type: 'multiple_choice', options: [{ id: 'a', text: 'Deleting it' }, { id: 'b', text: 'Converting it to a coded format that only authorized parties can read' }, { id: 'c', text: 'Making it public' }, { id: 'd', text: 'Slowing down computers' }], correctAnswers: ['b'], explanation: 'Encryption scrambles data so only those with the key can decode and read it.' },
    { text: 'A data breach occurs when:', type: 'multiple_choice', options: [{ id: 'a', text: 'Data is properly secured' }, { id: 'b', text: 'Unauthorized access exposes sensitive or protected data' }, { id: 'c', text: 'You forget your password' }, { id: 'd', text: 'You use strong passwords' }], correctAnswers: ['b'], explanation: 'Data breaches involve unauthorized access to sensitive information.' },
    { text: 'Cookies on websites:', type: 'multiple_choice', options: [{ id: 'a', text: 'Are always harmful' }, { id: 'b', text: 'Can store information about your browsing activity' }, { id: 'c', text: 'Are edible' }, { id: 'd', text: 'Cannot track you' }], correctAnswers: ['b'], explanation: 'Cookies store browsing data, useful for convenience but can raise privacy concerns.' },
    { text: 'Public Wi-Fi networks can be risky because:', type: 'multiple_choice', options: [{ id: 'a', text: 'They are always fast' }, { id: 'b', text: 'Others on the network might intercept your data' }, { id: 'c', text: 'They are completely secure' }, { id: 'd', text: 'They require no password' }], correctAnswers: ['b'], explanation: 'Public Wi-Fi can be insecure, allowing others to potentially intercept your data.' },
    { text: 'To stay safe online, you should:', type: 'multiple_select', options: [{ id: 'a', text: 'Keep software updated' }, { id: 'b', text: 'Use unique passwords for different accounts' }, { id: 'c', text: 'Be cautious about clicking links in emails' }, { id: 'd', text: 'Share passwords freely' }], correctAnswers: ['a', 'b', 'c'], explanation: 'Updates, unique passwords, and cautious clicking help stay safe. Never share passwords.' },
    { text: 'Social engineering attacks exploit:', type: 'multiple_choice', options: [{ id: 'a', text: 'Computer hardware flaws' }, { id: 'b', text: 'Human psychology to manipulate people into revealing information' }, { id: 'c', text: 'Only technical vulnerabilities' }, { id: 'd', text: 'Nothing' }], correctAnswers: ['b'], explanation: 'Social engineering manipulates people, not systems, to gain access or information.' }
  ]
};

async function seedQuestions() {
  console.log('Seeding Big Idea 5 questions (10 per topic)...\n');

  let totalAdded = 0;

  for (const [topicId, questions] of Object.entries(questionsData)) {
    console.log(`Adding questions for ${topicId}...`);

    // Get topic info
    const topicDoc = await db.collection('topics').doc(topicId).get();
    const topic = topicDoc.exists ? topicDoc.data() : { name: topicId, bigIdeaId: 'big-idea-5' };

    // Delete existing questions for this topic first
    const existingQuestions = await db.collection('questions').where('topicId', '==', topicId).get();
    const batch = db.batch();
    existingQuestions.docs.forEach(doc => batch.delete(doc.ref));
    if (existingQuestions.size > 0) {
      await batch.commit();
      console.log(`  Deleted ${existingQuestions.size} existing questions`);
    }

    // Add new questions
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      const questionId = `${topicId}-q${i + 1}`;

      await db.collection('questions').doc(questionId).set({
        id: questionId,
        ...q,
        topicId,
        topicName: topic.name,
        bigIdeaId: 'big-idea-5',
        isCustom: false,
        addedBy: null,
        addedAt: new Date(),
        deactivated: false,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      totalAdded++;
    }

    console.log(`  Added ${questions.length} questions`);
  }

  console.log(`\nDone! Added ${totalAdded} questions total for Big Idea 5.`);
}

seedQuestions()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
