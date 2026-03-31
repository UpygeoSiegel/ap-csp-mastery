/**
 * Big Idea 5: Impact of Computing - Challenging Questions
 * 15 challenging questions per topic (90 total)
 * Run with: node server/seeds/bigIdea5-challenging.js
 */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
const { db } = require('../firebase');

const questions = {
  // TOPIC 5.1: BENEFICIAL AND HARMFUL EFFECTS (15 challenging questions)
  'topic-5.1': [
    {
      text: 'A social media platform uses an algorithm to recommend content to users based on their engagement history. The platform notices that users who engage with emotionally charged content tend to spend more time on the platform. Which of the following BEST describes a potential harmful effect of optimizing the algorithm for user engagement?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Users will see less relevant content over time.' },
        { id: 'b', text: 'The algorithm may promote divisive or sensational content because it generates more engagement, potentially contributing to social polarization.' },
        { id: 'c', text: 'The platform will become slower due to increased computational demands.' },
        { id: 'd', text: 'Users will spend less time on the platform because they become bored.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Engagement-optimized algorithms can create a feedback loop where emotionally charged, divisive content is promoted because it generates more clicks and comments. This is a documented concern with recommendation systems that optimize purely for engagement metrics.',
      difficulty: 'hard'
    },
    {
      text: 'A city implements a smart traffic system that uses sensors and AI to optimize traffic light timing. Which of the following statements about this computing innovation are TRUE?\n\nI. The system could reduce commute times and vehicle emissions.\nII. The system could create privacy concerns by tracking vehicle movements.\nIII. The system eliminates all traffic accidents.',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'I only' },
        { id: 'b', text: 'I and II only' },
        { id: 'c', text: 'II and III only' },
        { id: 'd', text: 'I, II, and III' }
      ],
      correctAnswers: ['b'],
      explanation: 'Smart traffic systems can reduce congestion and emissions (I is true) but may track vehicle movements raising privacy concerns (II is true). However, no traffic system can eliminate ALL accidents - this is an overstatement (III is false).',
      difficulty: 'hard'
    },
    {
      text: 'Telemedicine platforms allow patients to consult with doctors remotely via video calls. Which of the following represents an UNINTENDED consequence of widespread telemedicine adoption?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Patients can access healthcare more conveniently.' },
        { id: 'b', text: 'Doctors can see more patients in less time.' },
        { id: 'c', text: 'Physical examination limitations may lead to missed diagnoses that would have been caught in person.' },
        { id: 'd', text: 'Healthcare becomes more accessible to rural patients.' }
      ],
      correctAnswers: ['c'],
      explanation: 'While telemedicine has many benefits (A, B, D are intended positive outcomes), an unintended consequence is that some conditions requiring physical examination may be missed. Unintended consequences are effects that weren\'t the primary goal of the technology.',
      difficulty: 'hard'
    },
    {
      text: 'A company develops an AI system that can generate realistic images of human faces that don\'t belong to real people. Which of the following represents both a beneficial AND harmful application of this same technology?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Beneficial: Creating diverse stock photos without model releases; Harmful: Generating fake identities for fraud' },
        { id: 'b', text: 'Beneficial: Making computers faster; Harmful: Using more electricity' },
        { id: 'c', text: 'Beneficial: Storing more photos; Harmful: Taking up storage space' },
        { id: 'd', text: 'Beneficial: Replacing all photographers; Harmful: Photographers losing jobs' }
      ],
      correctAnswers: ['a'],
      explanation: 'This demonstrates how the same technology can have dual uses. Synthetic faces can legitimately be used for stock photography, advertising, or privacy protection, but the same capability enables identity fraud, deepfakes, and misinformation.',
      difficulty: 'hard'
    },
    {
      text: 'GPS navigation applications have transformed how people travel. Which of the following is LEAST likely to be a consequence of widespread GPS navigation use?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'People may become less skilled at reading physical maps and navigating without technology.' },
        { id: 'b', text: 'Emergency responders can locate people more quickly using shared location data.' },
        { id: 'c', text: 'All traffic congestion has been eliminated worldwide.' },
        { id: 'd', text: 'Previously quiet residential streets may experience increased traffic when apps route drivers through them.' }
      ],
      correctAnswers: ['c'],
      explanation: 'GPS apps cannot eliminate all traffic congestion - this is an exaggeration. The other options are documented effects: skill atrophy in navigation (A), improved emergency response (B), and the "Waze effect" of routing traffic through residential areas (D).',
      difficulty: 'hard'
    },
    {
      text: 'A school district implements a learning management system (LMS) that tracks detailed data on student behavior, including time spent on each assignment, number of login attempts, and patterns of activity. Which of the following concerns is MOST relevant when evaluating this system?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The LMS might be slower than paper-based assignments.' },
        { id: 'b', text: 'The extensive data collection could enable surveillance of students and create long-term records that affect their privacy and autonomy.' },
        { id: 'c', text: 'Students might learn more effectively with digital tools.' },
        { id: 'd', text: 'Teachers will have less work to do.' }
      ],
      correctAnswers: ['b'],
      explanation: 'When evaluating computing innovations, privacy implications of data collection are critical. Extensive tracking of student behavior raises concerns about surveillance, data persistence, and how this information might be used or misused.',
      difficulty: 'hard'
    },
    {
      text: 'Automation in manufacturing has both beneficial and harmful effects. A company automates 40% of its assembly line jobs. Which of the following BEST describes the complex impact of this decision?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only beneficial: Production increases and costs decrease.' },
        { id: 'b', text: 'Only harmful: Workers lose their jobs.' },
        { id: 'c', text: 'Mixed: Increased efficiency and potentially lower consumer prices, but job displacement for workers who may need retraining for new roles.' },
        { id: 'd', text: 'Neutral: There is no significant impact on anyone.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Automation creates complex tradeoffs. Benefits include increased efficiency, consistency, and potentially lower prices. Harms include job displacement, though automation may also create new jobs requiring different skills. Evaluating these impacts requires considering multiple stakeholders.',
      difficulty: 'hard'
    },
    {
      text: 'A fitness tracking app collects heart rate, location, sleep patterns, and exercise data from millions of users. This data is used to provide personalized health recommendations. Which of the following represents a potential harmful effect that might NOT be immediately obvious to users?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Users receive personalized fitness recommendations.' },
        { id: 'b', text: 'The app helps users track their progress toward fitness goals.' },
        { id: 'c', text: 'Aggregated health data could be sold to insurance companies who might use it to adjust premiums or deny coverage.' },
        { id: 'd', text: 'Users can share achievements with friends.' }
      ],
      correctAnswers: ['c'],
      explanation: 'While fitness apps provide obvious benefits, a less visible harm is how collected health data might be monetized. If health data is sold or shared with insurers, it could be used to discriminate against users - a consequence many users don\'t anticipate when signing up.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the following statements about the effects of computing innovations:\n\nI. The effects of a computing innovation can be both beneficial and harmful to the same individual.\nII. All effects of computing innovations can be predicted before the innovation is released.\nIII. Responsible development requires considering potential effects on different groups of people.\n\nWhich of the statements are TRUE?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'I only' },
        { id: 'b', text: 'I and III only' },
        { id: 'c', text: 'II and III only' },
        { id: 'd', text: 'I, II, and III' }
      ],
      correctAnswers: ['b'],
      explanation: 'Statement I is true - the same person can benefit and be harmed by the same technology (e.g., social media connects but also distracts). Statement II is false - many effects are unintended and unpredictable. Statement III is true - responsible development considers diverse stakeholders.',
      difficulty: 'hard'
    },
    {
      text: 'Online learning platforms became essential during a global pandemic, allowing education to continue remotely. Which of the following BEST illustrates how the same computing innovation can affect different groups differently?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'All students benefit equally from online learning regardless of their circumstances.' },
        { id: 'b', text: 'Students with reliable internet and devices could continue learning, while those without faced significant educational setbacks.' },
        { id: 'c', text: 'Online learning only benefits teachers, not students.' },
        { id: 'd', text: 'The technology itself determines whether outcomes are positive or negative.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Computing innovations affect different groups differently based on access, resources, and circumstances. Online learning helped some students but disadvantaged those lacking devices, internet access, or quiet study spaces - illustrating how impacts vary by demographic and socioeconomic factors.',
      difficulty: 'hard'
    },
    {
      text: 'A ride-sharing company introduces a feature that uses AI to predict when and where driver demand will be highest, allowing drivers to position themselves accordingly. Which stakeholders might experience HARMFUL effects from this feature?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Traditional taxi drivers who face increased competition from strategically positioned ride-share drivers' },
        { id: 'b', text: 'Passengers in areas predicted to have low demand, who may experience longer wait times' },
        { id: 'c', text: 'Ride-share drivers who follow the predictions and find more passengers' },
        { id: 'd', text: 'Passengers who can get rides more quickly in high-demand areas' }
      ],
      correctAnswers: ['a', 'b'],
      explanation: 'Computing innovations create winners and losers. Traditional taxi services may be further disrupted (A). Passengers in "unprofitable" areas may be underserved if drivers are directed elsewhere (B). Options C and D describe beneficial effects.',
      difficulty: 'hard'
    },
    {
      text: 'An e-commerce website uses algorithms to set dynamic prices, charging different customers different prices for the same product based on factors like browsing history, location, and device type. Which of the following ethical concerns does this practice raise?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The algorithm might run too slowly.' },
        { id: 'b', text: 'This practice could be considered price discrimination, potentially charging higher prices to customers perceived as willing or able to pay more.' },
        { id: 'c', text: 'The website might crash from too many users.' },
        { id: 'd', text: 'Customers might buy too many products.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Dynamic pricing based on user profiling raises ethical concerns about fairness and discrimination. Charging different prices based on perceived willingness to pay can disadvantage certain groups and raises questions about transparency and consent.',
      difficulty: 'hard'
    },
    {
      text: 'Facial recognition technology is being used in various contexts. Which of the following represents a scenario where the technology provides clear benefits with MINIMAL ethical concerns?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Law enforcement using it to monitor public spaces without informing citizens' },
        { id: 'b', text: 'A smartphone using it to unlock only for its registered owner, with the data stored locally on the device' },
        { id: 'c', text: 'Retail stores using it to track all customers\' movements and build profiles without consent' },
        { id: 'd', text: 'Employers using it to monitor employee productivity by analyzing facial expressions' }
      ],
      correctAnswers: ['b'],
      explanation: 'Phone unlocking with local storage provides convenience with minimal ethical concerns - the user consents, benefits directly, and data isn\'t shared. The other options involve surveillance without consent or power imbalances that raise significant ethical issues.',
      difficulty: 'hard'
    },
    {
      text: 'A hospital implements an AI diagnostic system that can detect certain cancers from medical images with high accuracy. However, the system was trained primarily on data from one demographic group. What is the MOST likely consequence of this limited training data?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The system will work perfectly for all patients.' },
        { id: 'b', text: 'The system may perform less accurately for patients from demographic groups underrepresented in the training data, potentially leading to missed diagnoses.' },
        { id: 'c', text: 'The system will refuse to analyze any images.' },
        { id: 'd', text: 'The system will automatically request more diverse training data.' }
      ],
      correctAnswers: ['b'],
      explanation: 'AI systems trained on non-representative data often perform worse on underrepresented groups. In medical AI, this can lead to serious consequences: missed diagnoses or misdiagnoses for certain populations. This is a critical consideration in evaluating healthcare AI.',
      difficulty: 'hard'
    },
    {
      text: 'When evaluating a computing innovation\'s effects, which approach is MOST appropriate?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Consider only the intended benefits described by the developers.' },
        { id: 'b', text: 'Consider only the potential harms to avoid being influenced by marketing.' },
        { id: 'c', text: 'Consider both intended and unintended effects, examine impacts on different stakeholder groups, and acknowledge that effects may change over time.' },
        { id: 'd', text: 'Assume all new technologies are neutral and have no significant effects.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Comprehensive evaluation of computing innovations requires examining both benefits and harms, considering multiple stakeholders (users, non-users, society), acknowledging unintended consequences, and recognizing that effects may evolve as technology is adopted more widely.',
      difficulty: 'hard'
    }
  ],

  // TOPIC 5.2: DIGITAL DIVIDE (15 challenging questions)
  'topic-5.2': [
    {
      text: 'A government program provides free tablets to all students in low-income schools. However, six months later, a study finds minimal improvement in educational outcomes for these students. Which of the following BEST explains why providing devices alone may not address the digital divide?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The tablets were the wrong brand.' },
        { id: 'b', text: 'Devices are only one component; students may still lack reliable internet access, digital literacy skills, technical support, and educational content appropriate for their needs.' },
        { id: 'c', text: 'Students don\'t need technology to learn.' },
        { id: 'd', text: 'The program was too expensive.' }
      ],
      correctAnswers: ['b'],
      explanation: 'The digital divide is multifaceted. Having a device isn\'t sufficient if students lack internet access, skills to use technology effectively, support when problems arise, or quality educational software. Addressing the divide requires a comprehensive approach.',
      difficulty: 'hard'
    },
    {
      text: 'During a shift to online services, a bank closes many physical branches in rural areas, directing customers to use mobile banking instead. Which of the following groups is MOST likely to be negatively impacted by this change?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Young professionals in urban areas with smartphones' },
        { id: 'b', text: 'Elderly rural residents who may lack internet access, smartphones, or digital literacy skills' },
        { id: 'c', text: 'Bank executives who approve the cost-saving measure' },
        { id: 'd', text: 'Software developers who build the mobile app' }
      ],
      correctAnswers: ['b'],
      explanation: 'The digital divide disproportionately affects certain demographics. Elderly rural residents often face multiple barriers: limited internet infrastructure in rural areas, fewer resources for technology, and less familiarity with digital tools. When services shift online, these groups may lose access entirely.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the following statements about the digital divide:\n\nI. The digital divide exists only between countries, not within countries.\nII. The digital divide can affect access to employment opportunities.\nIII. Solving the digital divide requires addressing both infrastructure and digital literacy.\n\nWhich statements are TRUE?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'I only' },
        { id: 'b', text: 'II only' },
        { id: 'c', text: 'II and III only' },
        { id: 'd', text: 'I, II, and III' }
      ],
      correctAnswers: ['c'],
      explanation: 'Statement I is false - the digital divide exists within countries (urban vs. rural, wealthy vs. poor neighborhoods). Statement II is true - many jobs require digital skills and online applications. Statement III is true - both access and skills are needed.',
      difficulty: 'hard'
    },
    {
      text: 'A city offers free public WiFi in its downtown business district. While this initiative helps some residents, it does NOT fully address the digital divide because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Free WiFi is always slow and unreliable.' },
        { id: 'b', text: 'It primarily benefits those who already live, work, or can travel to the downtown area, potentially excluding lower-income neighborhoods and those without transportation.' },
        { id: 'c', text: 'WiFi technology is outdated.' },
        { id: 'd', text: 'Businesses don\'t want customers using free WiFi.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Geographic placement of digital resources matters. Downtown WiFi may not reach residential areas where lower-income families live, and those without transportation or living far from downtown cannot easily access it. Equitable access requires considering where and how services are deployed.',
      difficulty: 'hard'
    },
    {
      text: 'A research study finds that students from higher-income families use internet access primarily for educational activities and skill development, while students from lower-income families use similar levels of internet access primarily for entertainment. This finding illustrates which aspect of the digital divide?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The "access gap" - differences in having internet access' },
        { id: 'b', text: 'The "usage gap" or "second-level digital divide" - differences in how technology is used even when access is similar' },
        { id: 'c', text: 'The "device gap" - differences in device quality' },
        { id: 'd', text: 'The "speed gap" - differences in internet connection speed' }
      ],
      correctAnswers: ['b'],
      explanation: 'The "second-level digital divide" refers to differences in how people use technology, not just whether they have access. Even with equal access, differences in digital literacy, guidance, and resources can lead to unequal benefits from technology.',
      difficulty: 'hard'
    },
    {
      text: 'An online-only job application system is implemented by a large employer. Which of the following actions would BEST help ensure the system doesn\'t exclude qualified candidates affected by the digital divide?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Make the website look more attractive' },
        { id: 'b', text: 'Provide alternative application methods (paper applications, phone applications) and partner with libraries and community centers where people can access computers and receive assistance' },
        { id: 'c', text: 'Only hire people who already have internet access at home' },
        { id: 'd', text: 'Require all applicants to complete a digital literacy test' }
      ],
      correctAnswers: ['b'],
      explanation: 'Inclusive design means providing alternatives for those without reliable internet access. Partnering with community organizations helps reach people who may need technology access and assistance to complete applications.',
      difficulty: 'hard'
    },
    {
      text: 'A developing nation invests heavily in installing fiber optic internet infrastructure in urban areas while rural areas remain unconnected. Which of the following BEST describes how this approach might affect the digital divide in that country?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It will completely eliminate the digital divide because the country now has modern infrastructure.' },
        { id: 'b', text: 'It may actually widen the digital divide by creating a larger gap between connected urban areas and unconnected rural areas.' },
        { id: 'c', text: 'Rural areas will automatically benefit from urban infrastructure.' },
        { id: 'd', text: 'Infrastructure investments have no impact on the digital divide.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Uneven infrastructure investment can worsen inequality. As urban areas gain advantages from connectivity (economic opportunities, services, education), rural areas may fall further behind, widening the divide rather than closing it.',
      difficulty: 'hard'
    },
    {
      text: 'A community technology center offers free computer access and training. The center is open Monday through Friday, 9 AM to 5 PM. Which population might this schedule inadvertently EXCLUDE?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Retired seniors' },
        { id: 'b', text: 'Stay-at-home parents with young children' },
        { id: 'c', text: 'Working adults with traditional 9-to-5 jobs who cannot access the center during their work hours' },
        { id: 'd', text: 'College students with flexible schedules' }
      ],
      correctAnswers: ['c'],
      explanation: 'Program design affects who can benefit. Working adults with standard business hours cannot visit a center that\'s only open during those same hours. Addressing the digital divide requires considering when and how different populations can access services.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following scenarios BEST demonstrates how the digital divide can create a feedback loop that perpetuates inequality?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A student with internet access researches better job opportunities, gets a higher-paying job, and can afford even better internet access, while a student without access misses opportunities and remains in a lower-income situation.' },
        { id: 'b', text: 'Everyone eventually gets the same access to technology.' },
        { id: 'c', text: 'Technology companies lower prices over time.' },
        { id: 'd', text: 'Government programs always eliminate inequality.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Digital inequality can compound over time. Those with access gain skills, information, and opportunities that improve their situation, while those without access miss these advantages and may fall further behind - a self-reinforcing cycle.',
      difficulty: 'hard'
    },
    {
      text: 'A school district provides all students with laptops for remote learning. Despite this, students from lower-income families still perform worse on average. Which factors beyond device access might explain this persistent achievement gap?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Unreliable home internet connections that make video lessons difficult' },
        { id: 'b', text: 'Lack of quiet, dedicated study space at home' },
        { id: 'c', text: 'Parents unable to help with technology problems due to work schedules or their own digital literacy' },
        { id: 'd', text: 'Having a laptop guarantees academic success' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'The digital divide encompasses more than device access. Home internet quality (A), study environment (B), and family support capacity (C) all affect whether students can effectively use technology for learning. A laptop alone cannot overcome these barriers.',
      difficulty: 'hard'
    },
    {
      text: 'The term "digital redlining" refers to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The process of underlining important digital text' },
        { id: 'b', text: 'Internet service providers offering slower speeds, higher prices, or no service at all in lower-income or minority neighborhoods, similar to historical discriminatory housing practices' },
        { id: 'c', text: 'Using red colors in website design' },
        { id: 'd', text: 'A type of computer virus' }
      ],
      correctAnswers: ['b'],
      explanation: 'Digital redlining describes discriminatory practices where telecommunications companies underinvest in infrastructure for certain communities, resulting in worse or no service. This perpetuates the digital divide along socioeconomic and racial lines.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following actions would be MOST effective at addressing multiple dimensions of the digital divide simultaneously?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Donating old computers to schools' },
        { id: 'b', text: 'A comprehensive program that provides subsidized broadband, affordable devices, digital literacy training, and ongoing technical support in underserved communities' },
        { id: 'c', text: 'Building one large internet tower in a central location' },
        { id: 'd', text: 'Requiring everyone to learn coding' }
      ],
      correctAnswers: ['b'],
      explanation: 'The digital divide has multiple dimensions: access (infrastructure and devices), affordability, skills (digital literacy), and support. Effective solutions address multiple barriers together rather than focusing on just one aspect.',
      difficulty: 'hard'
    },
    {
      text: 'A study comparing internet adoption across countries finds that some nations with lower income levels have higher mobile internet usage rates than wealthier nations with extensive landline infrastructure. This finding suggests that:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Wealthy nations don\'t need internet access.' },
        { id: 'b', text: 'Mobile technology can enable "leapfrogging" where countries skip older infrastructure stages and adopt newer technologies directly, potentially narrowing aspects of the global digital divide.' },
        { id: 'c', text: 'Mobile internet is always better than landline internet.' },
        { id: 'd', text: 'The digital divide doesn\'t really exist.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Technological leapfrogging occurs when developing regions adopt newer technologies without building older infrastructure first. Mobile internet has enabled some countries to achieve connectivity without expensive landline investments, though gaps in quality and affordability remain.',
      difficulty: 'hard'
    },
    {
      text: 'A tech company donates tablets loaded with educational software to schools in a developing country. The donation is well-intentioned but might fail to achieve its goals if:',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'The software is only available in English, but students speak a different language' },
        { id: 'b', text: 'Teachers haven\'t been trained on how to integrate the tablets into their teaching' },
        { id: 'c', text: 'There is no plan for device maintenance, repairs, or replacement' },
        { id: 'd', text: 'The tablets are a well-known brand' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Technology donations often fail without consideration of local context. Language barriers (A), teacher training (B), and long-term sustainability (C) are critical factors. Simply providing devices doesn\'t ensure educational benefit.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following BEST explains why addressing the digital divide is increasingly important for civic participation in democratic societies?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'People need internet access to watch entertainment.' },
        { id: 'b', text: 'As government services, political information, voter registration, and civic engagement increasingly move online, those without digital access may be excluded from participating fully in democracy.' },
        { id: 'c', text: 'Voting has always required computer skills.' },
        { id: 'd', text: 'Politicians only communicate through social media.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Digital access increasingly affects civic participation. As government services go online, political discourse moves to social media, and voter information becomes primarily digital, the digital divide becomes a barrier to full democratic participation.',
      difficulty: 'hard'
    }
  ],

  // TOPIC 5.3: COMPUTING BIAS (15 challenging questions)
  'topic-5.3': [
    {
      text: 'A company uses an AI system to screen job applications. The system was trained on data from the company\'s previous hiring decisions over the past 10 years. If the company\'s historical hiring practices favored certain demographic groups, what is the MOST likely outcome?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The AI will automatically correct for past biases.' },
        { id: 'b', text: 'The AI will learn and perpetuate the historical biases, continuing to disadvantage the same groups that were previously underrepresented.' },
        { id: 'c', text: 'The AI will hire randomly to ensure fairness.' },
        { id: 'd', text: 'Historical data has no impact on AI systems.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Machine learning systems learn patterns from training data. If historical hiring was biased, the AI learns those biased patterns and applies them to new decisions, potentially perpetuating or even amplifying historical discrimination.',
      difficulty: 'hard'
    },
    {
      text: 'A facial recognition system achieves 99% accuracy on light-skinned faces but only 85% accuracy on dark-skinned faces. This disparity is MOST likely caused by:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Dark-skinned faces being inherently harder for any system to recognize' },
        { id: 'b', text: 'The training dataset containing predominantly light-skinned faces, resulting in the system being better optimized for that group' },
        { id: 'c', text: 'A deliberate choice by developers to favor one group' },
        { id: 'd', text: 'Hardware limitations that affect certain skin tones' }
      ],
      correctAnswers: ['b'],
      explanation: 'Performance disparities in facial recognition typically result from unrepresentative training data. When datasets overrepresent certain demographics, systems learn to perform better on those groups. This is a well-documented issue in AI/ML systems.',
      difficulty: 'hard'
    },
    {
      text: 'A bank uses an algorithm to determine credit scores and loan eligibility. The algorithm does not directly use race as an input variable. However, it does use zip code, which correlates strongly with race due to historical housing segregation. This scenario demonstrates:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'That removing explicit demographic variables guarantees fairness' },
        { id: 'b', text: 'Proxy discrimination, where seemingly neutral variables can encode and perpetuate bias' },
        { id: 'c', text: 'That zip code has no relationship to race' },
        { id: 'd', text: 'Perfect algorithmic fairness' }
      ],
      correctAnswers: ['b'],
      explanation: 'Proxy variables are attributes that correlate with protected characteristics. Even when race isn\'t explicitly used, variables like zip code, name, or school can serve as proxies due to societal patterns, leading to discriminatory outcomes.',
      difficulty: 'hard'
    },
    {
      text: 'A search engine\'s autocomplete feature suggests search terms based on what users commonly search for. When users type a name common in a particular ethnic group, the autocomplete suggests terms related to criminal activity, while names common in other groups don\'t receive these suggestions. This represents:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The search engine accurately reflecting reality' },
        { id: 'b', text: 'A feedback loop where biased user behavior influences algorithm suggestions, which may then reinforce stereotypes' },
        { id: 'c', text: 'Neutral technology that has no social impact' },
        { id: 'd', text: 'An error that will automatically correct itself' }
      ],
      correctAnswers: ['b'],
      explanation: 'Autocomplete reflects patterns in user search behavior, which can include biases. When these biased patterns are reflected back to users, they can reinforce stereotypes, creating a feedback loop that amplifies societal biases.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the following approaches to reducing bias in AI systems:\n\nI. Using more diverse and representative training data\nII. Having diverse teams involved in system design and testing\nIII. Auditing systems for disparate impact across different groups\n\nWhich of these approaches can help reduce bias?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'I only' },
        { id: 'b', text: 'II only' },
        { id: 'c', text: 'I and III only' },
        { id: 'd', text: 'I, II, and III' }
      ],
      correctAnswers: ['d'],
      explanation: 'All three approaches help reduce bias. Diverse data helps systems learn from representative examples (I). Diverse teams bring different perspectives to identify potential biases (II). Auditing helps detect disparate impacts that might not be obvious (III).',
      difficulty: 'hard'
    },
    {
      text: 'A hospital\'s algorithm for allocating healthcare resources was found to systematically underestimate the health needs of Black patients compared to white patients with similar conditions. Investigation revealed the algorithm used healthcare spending as a proxy for health needs. Why did this create bias?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Healthcare spending perfectly measures health needs.' },
        { id: 'b', text: 'Due to barriers to healthcare access, Black patients historically spent less on healthcare despite having similar health needs, causing the algorithm to misidentify them as healthier.' },
        { id: 'c', text: 'The algorithm was too complex.' },
        { id: 'd', text: 'Algorithms cannot process healthcare data.' }
      ],
      correctAnswers: ['b'],
      explanation: 'This real case illustrates how seemingly objective measures can encode bias. Healthcare spending reflects access and resources, not just need. Groups facing barriers to care may spend less despite being sicker, and algorithms using spending as a proxy for need will underestimate their needs.',
      difficulty: 'hard'
    },
    {
      text: 'A content moderation AI was trained primarily on English-language data and struggles to accurately moderate content in other languages, often incorrectly flagging non-English content as inappropriate. This is an example of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The AI working as intended' },
        { id: 'b', text: 'Language and cultural bias resulting from training data that doesn\'t represent global users equally' },
        { id: 'c', text: 'Non-English content being inherently more problematic' },
        { id: 'd', text: 'A hardware limitation' }
      ],
      correctAnswers: ['b'],
      explanation: 'AI systems trained predominantly on English data may perform poorly on other languages and cultural contexts. This bias affects users whose primary language isn\'t English, resulting in unfair treatment on global platforms.',
      difficulty: 'hard'
    },
    {
      text: 'An online advertising system shows high-paying job advertisements to men more frequently than to women, even though the advertisers didn\'t request gender-based targeting. This outcome likely results from:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Random chance that will even out over time' },
        { id: 'b', text: 'The algorithm optimizing for click-through rates, which may be higher among men for these ads due to historical patterns, creating a feedback loop' },
        { id: 'c', text: 'Women not being interested in high-paying jobs' },
        { id: 'd', text: 'Legal requirements for job advertising' }
      ],
      correctAnswers: ['b'],
      explanation: 'Optimization algorithms can produce discriminatory outcomes even without explicit discriminatory intent. If historical data shows higher engagement from men for certain ads, the algorithm may learn to show those ads preferentially to men, perpetuating existing disparities.',
      difficulty: 'hard'
    },
    {
      text: 'A predictive policing algorithm identifies neighborhoods for increased police presence based on historical crime data. Which of the following represents a potential problem with this approach?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The algorithm is too accurate.' },
        { id: 'b', text: 'Historical crime data may reflect biased policing patterns rather than actual crime rates, potentially directing more policing to already over-policed communities.' },
        { id: 'c', text: 'Police should not use any technology.' },
        { id: 'd', text: 'The algorithm prevents all crime.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Historical crime data reflects where police have focused attention, not necessarily where crime actually occurs. If certain neighborhoods were historically over-policed, the algorithm may perpetuate this pattern, creating a self-fulfilling prophecy.',
      difficulty: 'hard'
    },
    {
      text: 'A team develops a voice recognition system and tests it primarily with speakers from one regional dialect. When deployed nationally, the system has significantly higher error rates for users with different accents. What should the team have done differently?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Released the system faster without testing' },
        { id: 'b', text: 'Tested only with professional voice actors' },
        { id: 'c', text: 'Collected training data and tested with diverse speakers representing the range of accents, dialects, and speech patterns in the intended user population' },
        { id: 'd', text: 'Required all users to speak in one standard accent' }
      ],
      correctAnswers: ['c'],
      explanation: 'Inclusive development requires representative data and testing. By testing only with one dialect, the team missed performance issues for other users. Diverse testing populations help identify disparities before deployment.',
      difficulty: 'hard'
    },
    {
      text: 'An AI system makes decisions that significantly affect people\'s lives, such as parole recommendations. Which of the following would be MOST important for ensuring accountability in such a system?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Keeping the algorithm completely secret to prevent gaming' },
        { id: 'b', text: 'Allowing affected individuals to understand how decisions are made, challenge errors, and having human oversight of algorithmic recommendations' },
        { id: 'c', text: 'Removing all human involvement to ensure objectivity' },
        { id: 'd', text: 'Using the algorithm\'s decision as final without review' }
      ],
      correctAnswers: ['b'],
      explanation: 'Accountability in algorithmic decision-making requires transparency about how decisions are made, mechanisms for individuals to challenge errors, and meaningful human oversight. Fully automated high-stakes decisions without accountability protections raise serious ethical concerns.',
      difficulty: 'hard'
    },
    {
      text: 'Which of the following statements about algorithmic bias is FALSE?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Bias can enter systems through biased training data.' },
        { id: 'b', text: 'Bias can result from choices made during algorithm design.' },
        { id: 'c', text: 'Using algorithms guarantees decisions will be fair because computers are objective.' },
        { id: 'd', text: 'Bias can be amplified when algorithms make decisions at scale.' }
      ],
      correctAnswers: ['c'],
      explanation: 'The statement that algorithms guarantee fairness is false. While computers execute instructions consistently, the data and design choices reflect human decisions that can embed bias. Algorithms can perpetuate or even amplify existing biases.',
      difficulty: 'hard'
    },
    {
      text: 'A recommendation algorithm for a video platform tends to recommend increasingly extreme content because such content generates more engagement. Users who start by watching mainstream content may be gradually directed toward more extreme viewpoints. This phenomenon is called:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Content diversification' },
        { id: 'b', text: 'Algorithmic radicalization or the "rabbit hole" effect, where engagement optimization can lead users toward extreme content' },
        { id: 'c', text: 'Balanced content curation' },
        { id: 'd', text: 'User preference matching' }
      ],
      correctAnswers: ['b'],
      explanation: 'When algorithms optimize for engagement, they may learn that extreme or emotionally provocative content keeps users watching longer. This can create pathways that progressively lead users toward more extreme content, a pattern documented in multiple platforms.',
      difficulty: 'hard'
    },
    {
      text: 'A company claims their AI hiring system is "fair" because it achieves equal accuracy across demographic groups. However, the system rejects a higher percentage of qualified candidates from one demographic group than others. This situation illustrates that:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Equal accuracy automatically means the system is fair.' },
        { id: 'b', text: 'There are multiple definitions of algorithmic fairness, and a system can satisfy one definition while violating another.' },
        { id: 'c', text: 'Demographic information should never be collected.' },
        { id: 'd', text: 'AI hiring systems are always fair.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Fairness in machine learning is complex, with multiple mathematical definitions that can conflict. A system might have equal accuracy but different false positive/negative rates across groups. Understanding these tradeoffs is essential for evaluating algorithmic fairness.',
      difficulty: 'hard'
    },
    {
      text: 'To address bias in a machine learning system used for loan decisions, a bank could take which of the following approaches?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Audit the system\'s decisions across different demographic groups to identify disparities' },
        { id: 'b', text: 'Review the training data for historical biases and consider how to address them' },
        { id: 'c', text: 'Provide applicants with explanations for decisions and meaningful appeal processes' },
        { id: 'd', text: 'Assume the algorithm is unbiased because it uses mathematical formulas' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Addressing algorithmic bias requires multiple approaches: auditing for disparate impact (A), examining training data for historical bias (B), and providing transparency and recourse for affected individuals (C). Simply assuming algorithms are fair (D) ignores how bias enters systems.',
      difficulty: 'hard'
    }
  ],

  // TOPIC 5.4: CROWDSOURCING (15 challenging questions)
  'topic-5.4': [
    {
      text: 'A wildlife conservation project asks volunteers to identify animals in millions of camera trap photos. This is an example of crowdsourcing because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The photos were taken by expensive cameras.' },
        { id: 'b', text: 'A large task is divided among many distributed participants, each contributing a small portion, to accomplish what would be impractical for a small team.' },
        { id: 'c', text: 'Only professional researchers are allowed to participate.' },
        { id: 'd', text: 'The project uses crowd-control barriers.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Crowdsourcing leverages distributed human effort to accomplish tasks at scale. By breaking millions of images into small tasks distributed across many volunteers, the project can process far more data than a small research team could alone.',
      difficulty: 'hard'
    },
    {
      text: 'A mapping company allows users to report road closures and traffic conditions in real-time. This crowdsourced data is used to provide navigation directions to all users. Which of the following is a potential LIMITATION of relying on crowdsourced data for this purpose?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Too many people might use the app.' },
        { id: 'b', text: 'Data quality may be inconsistent, and areas with fewer users may have less accurate or timely information.' },
        { id: 'c', text: 'The app will only work for professional drivers.' },
        { id: 'd', text: 'Crowdsourced data is always perfectly accurate.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Crowdsourced data quality depends on participation. Urban areas with many users get frequent, accurate updates, while rural areas with fewer users may have outdated or incomplete information. This can create geographic disparities in service quality.',
      difficulty: 'hard'
    },
    {
      text: 'Wikipedia relies on volunteer editors to create and maintain articles. Which of the following challenges has Wikipedia faced due to its crowdsourced model?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Vandalism and deliberate insertion of false information' },
        { id: 'b', text: 'Edit wars where contributors with opposing viewpoints repeatedly change articles' },
        { id: 'c', text: 'Systemic bias due to the demographic composition of active editors' },
        { id: 'd', text: 'Articles being too short because no one contributes' }
      ],
      correctAnswers: ['a', 'b', 'c'],
      explanation: 'Wikipedia has documented challenges with vandalism (A), edit wars (B), and systemic bias from editor demographics (C). Despite having millions of articles (contradicting D), these quality and bias issues require ongoing governance mechanisms to address.',
      difficulty: 'hard'
    },
    {
      text: 'A pharmaceutical company uses a crowdsourcing platform to have thousands of people contribute ideas for new drug delivery mechanisms. Compared to relying solely on in-house researchers, what is a key ADVANTAGE of this approach?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Crowdsourced ideas are always better than expert ideas.' },
        { id: 'b', text: 'Access to diverse perspectives and knowledge from people with varied backgrounds who might approach problems differently than internal experts.' },
        { id: 'c', text: 'It eliminates the need for any internal research.' },
        { id: 'd', text: 'Participants don\'t need any relevant knowledge.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Crowdsourcing can surface novel approaches by drawing on diverse expertise. Contributors from different fields or backgrounds may see solutions that domain experts miss. This "cognitive diversity" is a key benefit of open innovation.',
      difficulty: 'hard'
    },
    {
      text: 'A crisis response organization uses crowdsourced data from social media to map disaster damage in real-time. During a recent earthquake, volunteers tagged locations and damage types from photos posted online. What is a potential CONCERN with using this data for resource allocation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Social media users post too many photos.' },
        { id: 'b', text: 'Areas with higher social media usage and connectivity may be overrepresented, while areas with less connectivity (potentially also harder hit by the disaster) may be underrepresented.' },
        { id: 'c', text: 'Volunteers are too efficient at processing data.' },
        { id: 'd', text: 'All areas will have equal coverage in crowdsourced data.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Crowdsourced crisis data can have geographic bias. Areas with power, connectivity, and social media users generate more data, while devastated areas lacking these may be invisible in crowdsourced information, potentially directing resources away from the neediest areas.',
      difficulty: 'hard'
    },
    {
      text: 'Distributed computing projects like Folding@home use volunteers\' idle computer processing power to simulate protein folding. This represents crowdsourcing of:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Human creativity and ideas' },
        { id: 'b', text: 'Computational resources rather than human cognitive effort' },
        { id: 'c', text: 'Financial contributions' },
        { id: 'd', text: 'Physical labor' }
      ],
      correctAnswers: ['b'],
      explanation: 'Distributed computing crowdsources computational power rather than human thinking. Volunteers contribute their computers\' idle processing cycles, enabling simulations that would require impossibly expensive supercomputers if done centrally.',
      difficulty: 'hard'
    },
    {
      text: 'A company launches a crowdfunding campaign for a new product, promising to deliver the product to backers within 6 months. The campaign raises $2 million but the company fails to deliver. This illustrates which LIMITATION of crowdfunding?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Crowdfunding cannot raise significant money.' },
        { id: 'b', text: 'Backers assume risk as contributors, not traditional consumers, and may have limited recourse if projects fail to deliver on promises.' },
        { id: 'c', text: 'Crowdfunding platforms always guarantee delivery.' },
        { id: 'd', text: 'Only large companies can use crowdfunding.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Crowdfunding backers accept risk that projects may fail, be delayed, or differ from promises. Unlike traditional purchases, backers often have limited legal recourse. Platforms typically don\'t guarantee delivery, and failed projects are common.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the following statements about crowdsourcing:\n\nI. Crowdsourcing always produces higher quality results than expert work.\nII. Crowdsourcing can be effective when tasks can be broken into small, independent pieces.\nIII. Quality control mechanisms are important for crowdsourced projects.\n\nWhich statements are TRUE?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'I only' },
        { id: 'b', text: 'II only' },
        { id: 'c', text: 'II and III only' },
        { id: 'd', text: 'I, II, and III' }
      ],
      correctAnswers: ['c'],
      explanation: 'Statement I is false - crowdsourcing isn\'t always better than expert work; it depends on the task. Statement II is true - decomposable tasks work well for crowdsourcing. Statement III is true - without quality control, crowdsourced output quality varies widely.',
      difficulty: 'hard'
    },
    {
      text: 'A citizen science project asks volunteers to classify galaxies from telescope images. To ensure data quality, each image is shown to multiple volunteers and the final classification is based on consensus. This approach is called:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Single-point verification' },
        { id: 'b', text: 'Redundancy or agreement-based quality control, where multiple independent classifications are compared to identify the most reliable answer' },
        { id: 'c', text: 'Random sampling' },
        { id: 'd', text: 'Expert-only classification' }
      ],
      correctAnswers: ['b'],
      explanation: 'Redundancy is a common crowdsourcing quality control technique. By having multiple people independently classify each item and using consensus, random errors by individual contributors are filtered out, improving overall accuracy.',
      difficulty: 'hard'
    },
    {
      text: 'A labor union criticizes a company for using crowdsourcing platforms to pay workers very low wages for small tasks, arguing this undermines traditional employment. This concern relates to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Crowdsourcing always paying fair wages' },
        { id: 'b', text: 'The "gig economy" aspect of crowdsourcing, where workers may lack employment protections, benefits, and fair compensation associated with traditional employment' },
        { id: 'c', text: 'Crowdsourced workers being overpaid' },
        { id: 'd', text: 'The technical complexity of crowdsourcing platforms' }
      ],
      correctAnswers: ['b'],
      explanation: 'Crowdsourcing platforms can create labor concerns. Workers may be paid per-task amounts that translate to below-minimum-wage hourly rates, lack benefits, and have no employment protections. These "gig economy" issues are debated aspects of crowdsourcing.',
      difficulty: 'hard'
    },
    {
      text: 'Open-source software development, where volunteers contribute code that anyone can use and modify, is a form of crowdsourcing that has produced major software like Linux and Firefox. What makes open-source particularly effective for software development?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Software code cannot be divided into parts.' },
        { id: 'b', text: 'Contributors can work asynchronously on different modules, version control systems manage integration, and the code itself serves as documentation of contributions.' },
        { id: 'c', text: 'Only professional programmers can contribute.' },
        { id: 'd', text: 'Open-source projects have no structure or governance.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Software\'s modular nature suits crowdsourcing - developers can work on independent components asynchronously. Version control systems (like Git) enable coordination. Successful open-source projects do have governance structures to maintain quality and direction.',
      difficulty: 'hard'
    },
    {
      text: 'A music streaming service asks users to create and share playlists, which it then uses as a source of music recommendations. This is an example of crowdsourcing because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Users pay for the service.' },
        { id: 'b', text: 'The service relies on aggregate user behavior and contributions to provide value that would be difficult to create centrally.' },
        { id: 'c', text: 'Only music experts create playlists.' },
        { id: 'd', text: 'The playlists are generated by algorithms alone.' }
      ],
      correctAnswers: ['b'],
      explanation: 'User-generated playlists represent crowdsourced curation. Millions of users collectively contribute knowledge about which songs go together, creating recommendation value that no central team could replicate at that scale.',
      difficulty: 'hard'
    },
    {
      text: 'A research team wants to use crowdsourcing to translate medical documents into 100 languages. They are concerned about quality. Which approach would BEST address quality concerns while maintaining the benefits of crowdsourcing?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Accept all translations without review.' },
        { id: 'b', text: 'Implement multiple quality checks: require translators to pass qualification tests, have multiple translators work on each document, have expert reviewers check a sample of translations, and use back-translation verification.' },
        { id: 'c', text: 'Only use machine translation.' },
        { id: 'd', text: 'Translate into only one language.' }
      ],
      correctAnswers: ['b'],
      explanation: 'High-stakes crowdsourcing requires robust quality control. Multiple mechanisms - qualification testing, redundancy, expert review, and verification techniques - can help ensure crowdsourced translations meet quality standards for medical use.',
      difficulty: 'hard'
    },
    {
      text: 'A company uses a crowdsourcing platform to have workers label images for training an AI system. The workers are paid $0.01 per image labeled. Which of the following ethical considerations is MOST relevant?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The AI system might become too accurate.' },
        { id: 'b', text: 'Whether the compensation fairly values the workers\' time and contribution, and whether workers have meaningful choice in accepting such low-paid work' },
        { id: 'c', text: 'The images are interesting to label.' },
        { id: 'd', text: 'The company should use more expensive labeling methods.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Ethical crowdsourcing should consider fair compensation. Very low per-task payments that translate to below-minimum-wage hourly rates raise concerns about worker exploitation, especially when workers have limited alternatives.',
      difficulty: 'hard'
    },
    {
      text: 'During the COVID-19 pandemic, researchers used crowdsourcing to rapidly gather data on symptoms and spread. Compared to traditional epidemiological data collection, crowdsourced pandemic data was valuable because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'It completely replaced the need for official health data.' },
        { id: 'b', text: 'It could provide faster, more geographically distributed data collection than traditional public health surveillance, though with tradeoffs in accuracy and representativeness.' },
        { id: 'c', text: 'Crowdsourced medical data is always perfectly accurate.' },
        { id: 'd', text: 'Only medical professionals could contribute.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Crowdsourced health data offers speed and scale but with tradeoffs. Self-reported symptoms may be less accurate than clinical diagnosis, and participation is not random, creating biases. The data complements rather than replaces official surveillance.',
      difficulty: 'hard'
    }
  ],

  // TOPIC 5.5: LEGAL AND ETHICAL CONCERNS (15 challenging questions)
  'topic-5.5': [
    {
      text: 'A software developer finds useful code on a website and copies it into their commercial product without checking the license. Later, they discover the code was released under a license that requires any derivative works to also be open-sourced. What legal issue has the developer potentially created?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'No issue, as all online code is free to use.' },
        { id: 'b', text: 'Copyright infringement and license violation - using copyleft-licensed code in a proprietary product may require releasing the proprietary code as open source or removing the copied code.' },
        { id: 'c', text: 'The original author should have prevented copying.' },
        { id: 'd', text: 'Commercial use of code is always illegal.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Copyleft licenses (like GPL) require derivative works to maintain the same license. Using such code in proprietary software creates legal exposure. Developers must check licenses before incorporating external code.',
      difficulty: 'hard'
    },
    {
      text: 'A researcher uses data scraped from social media profiles to study political opinions without informing or obtaining consent from the users whose data was collected. Which ethical principles might this research violate?',
      type: 'multiple_select',
      options: [
        { id: 'a', text: 'Informed consent - participants were not made aware their data would be used for research' },
        { id: 'b', text: 'Privacy - data was collected without users\' knowledge or agreement' },
        { id: 'c', text: 'The research used computers' },
        { id: 'd', text: 'Respect for persons - treating people as means to an end rather than autonomous individuals' }
      ],
      correctAnswers: ['a', 'b', 'd'],
      explanation: 'Research ethics require informed consent (A), respect for privacy (B), and treating people as ends in themselves (D). Even publicly visible data raises ethical concerns when used for research without consent. Simply using computers (C) is not an ethical violation.',
      difficulty: 'hard'
    },
    {
      text: 'A student creates an AI-generated essay using a large language model and submits it as their own work without disclosure. This action:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Is completely acceptable since AI tools are just like calculators.' },
        { id: 'b', text: 'Likely violates academic integrity policies, as submitting AI-generated work as one\'s own without disclosure is a form of academic dishonesty.' },
        { id: 'c', text: 'Is encouraged by most educational institutions.' },
        { id: 'd', text: 'Has no ethical implications.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Most academic integrity policies require students to submit their own work and properly attribute outside sources. Submitting AI-generated content without disclosure typically violates these policies and misrepresents the student\'s actual work and learning.',
      difficulty: 'hard'
    },
    {
      text: 'A company collects user data and states in their Terms of Service that the data may be shared with "partners." The company then sells detailed user profiles to data brokers. Which ethical concern does this raise?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'No concern, as users agreed to the Terms of Service.' },
        { id: 'b', text: 'While potentially legal, vague Terms of Service that users rarely read fully may not constitute meaningful informed consent for extensive data monetization.' },
        { id: 'c', text: 'The company should have charged users more.' },
        { id: 'd', text: 'Data collection is always unethical.' }
      ],
      correctAnswers: ['b'],
      explanation: 'There\'s tension between legal compliance and ethical practice. Burying data practices in lengthy ToS that few read may satisfy legal requirements but raises questions about whether consent is truly informed and meaningful.',
      difficulty: 'hard'
    },
    {
      text: 'A teacher wants to show a short movie clip in class to teach about a historical event. Under fair use doctrine, this is MOST likely permitted if:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The teacher shows the entire movie repeatedly throughout the year.' },
        { id: 'b', text: 'The clip is a small portion used for educational commentary, unlikely to substitute for the original or harm its market value.' },
        { id: 'c', text: 'The teacher charges students admission to watch the clip.' },
        { id: 'd', text: 'The movie is very popular.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Fair use considers: purpose (educational favored), amount used (smaller portions favored), and market impact (uses that don\'t substitute for purchasing the original favored). A short clip for educational commentary typically qualifies.',
      difficulty: 'hard'
    },
    {
      text: 'The European Union\'s GDPR (General Data Protection Regulation) grants individuals the "right to be forgotten." This means:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Companies must delete all data after one year.' },
        { id: 'b', text: 'Individuals can request that organizations delete their personal data under certain circumstances, balancing privacy rights with other interests like free expression.' },
        { id: 'c', text: 'No one can ever remember anything about a person.' },
        { id: 'd', text: 'The internet automatically deletes old information.' }
      ],
      correctAnswers: ['b'],
      explanation: 'The right to be forgotten allows individuals to request deletion of personal data, though it\'s balanced against other rights. It doesn\'t apply universally to all data or override legitimate interests like journalism or historical records.',
      difficulty: 'hard'
    },
    {
      text: 'A tech company\'s AI assistant records and analyzes conversations in users\' homes to improve its services. The company\'s privacy policy mentions this practice but most users are unaware. Which concept BEST describes the ethical issue?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The company\'s legal compliance is the only relevant consideration.' },
        { id: 'b', text: 'Privacy by design - ethical technology development should default to protecting privacy and make data collection transparent and opt-in rather than hidden in policies.' },
        { id: 'c', text: 'Users should read every document they encounter.' },
        { id: 'd', text: 'AI assistants should never record anything.' }
      ],
      correctAnswers: ['b'],
      explanation: '"Privacy by design" holds that privacy protections should be built into systems by default, not buried in policies. Ethical practice would make recording transparent and require explicit opt-in rather than relying on users discovering the practice in documentation.',
      difficulty: 'hard'
    },
    {
      text: 'A journalist uses leaked documents to expose corporate wrongdoing. The documents reveal unethical practices but were obtained by a hacker who broke into the company\'s systems. Which ethical consideration is MOST relevant for the journalist?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Journalists should never report on leaked documents.' },
        { id: 'b', text: 'Balancing the public interest in exposing wrongdoing against concerns about benefiting from illegally obtained information and potentially encouraging future hacking.' },
        { id: 'c', text: 'The company deserved to be hacked.' },
        { id: 'd', text: 'Hacking is always acceptable if it exposes wrongdoing.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Journalists face complex ethical considerations with leaked data. Publishing may serve public interest, but using illegally obtained information raises questions about journalistic ethics, potential harm to innocent parties whose data was exposed, and whether it incentivizes illegal activity.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the following practices:\n\nI. Using a VPN to access content that is geographically restricted\nII. Creating a backup of software you legally purchased for personal use\nIII. Distributing copyrighted music files to thousands of people without permission\n\nWhich practice(s) are generally considered illegal in the United States?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'I only' },
        { id: 'b', text: 'III only' },
        { id: 'c', text: 'I and III' },
        { id: 'd', text: 'I, II, and III' }
      ],
      correctAnswers: ['b'],
      explanation: 'VPN use (I) is generally legal, though may violate ToS. Personal backups (II) are typically protected. Mass distribution of copyrighted content without permission (III) is clearly copyright infringement. Legal boundaries around digital practices can be nuanced.',
      difficulty: 'hard'
    },
    {
      text: 'An algorithm used in the criminal justice system to predict recidivism risk is not transparent about how it calculates risk scores. Defense attorneys cannot examine the algorithm to challenge its use against their clients. This situation raises concerns about:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The algorithm being too accurate.' },
        { id: 'b', text: 'Due process and the right to confront evidence - defendants should be able to examine and challenge evidence used against them, including algorithmic assessments.' },
        { id: 'c', text: 'Judges needing more technology training.' },
        { id: 'd', text: 'Criminals avoiding detection.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Due process rights include the ability to examine and challenge evidence. When opaque algorithms influence sentencing or bail decisions, defendants cannot effectively challenge their accuracy or check for errors, raising constitutional concerns.',
      difficulty: 'hard'
    },
    {
      text: 'A website allows users to upload content but uses AI to scan all uploads for copyrighted material and automatically removes matches. This system incorrectly removes some fair use content. What legal and ethical tensions does this illustrate?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Copyright enforcement can conflict with fair use rights, and automated systems may over-block legitimate uses, chilling free expression.' },
        { id: 'b', text: 'There is no tension; all copyright enforcement is appropriate.' },
        { id: 'c', text: 'Websites should never remove any content.' },
        { id: 'd', text: 'AI is always perfect at determining fair use.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Content filtering systems create tension between protecting copyright and enabling fair use. Automated systems cannot reliably determine fair use, which requires contextual judgment. Over-blocking can suppress legitimate speech and creativity.',
      difficulty: 'hard'
    },
    {
      text: 'A data broker compiles detailed profiles on millions of people by combining data from multiple sources - social media, purchase histories, location tracking, public records - without most people\'s knowledge. Which ethical principle is MOST directly at issue?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Free market principles support all data commerce.' },
        { id: 'b', text: 'Informational privacy and data autonomy - individuals have limited control over or knowledge about how their aggregated digital footprint is collected, combined, and used.' },
        { id: 'c', text: 'Data aggregation is technically difficult.' },
        { id: 'd', text: 'Public records should be secret.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Data aggregation from multiple sources creates comprehensive profiles that may reveal information people never intended to share. The lack of transparency and control raises fundamental questions about privacy and data autonomy.',
      difficulty: 'hard'
    },
    {
      text: 'A company discovers a security vulnerability in its software that exposes customer data. The company takes two weeks to develop a fix before notifying affected customers. Which ethical consideration is MOST relevant to the delayed notification?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Companies have no obligation to notify customers of breaches.' },
        { id: 'b', text: 'Customers may have been harmed during the delay without knowledge to protect themselves, raising questions about the duty to warn versus the desire to have a fix ready.' },
        { id: 'c', text: 'Two weeks is always the correct amount of time.' },
        { id: 'd', text: 'Security vulnerabilities should be kept secret forever.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Breach disclosure involves tradeoffs. Early notification allows people to protect themselves but may cause alarm before a fix exists. Delayed notification allows organized response but exposes people to unknown risks. Laws increasingly mandate timely disclosure.',
      difficulty: 'hard'
    },
    {
      text: 'Deepfake technology can create realistic videos of people saying or doing things they never did. Which of the following uses would raise the MOST serious ethical concerns?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A movie studio using the technology to de-age an actor with their consent' },
        { id: 'b', text: 'A museum using it to bring historical figures to life in educational exhibits with clear labeling' },
        { id: 'c', text: 'Creating fake videos of a political candidate making statements they never made and distributing them as real' },
        { id: 'd', text: 'Using deepfake technology to improve video call quality' }
      ],
      correctAnswers: ['c'],
      explanation: 'Deepfakes used to create false statements by real people, especially to influence elections, represent serious ethical concerns about misinformation, manipulation, and harm to individuals\' reputations. Unlike educational or consensual uses, political deepfakes aim to deceive.',
      difficulty: 'hard'
    },
    {
      text: 'A software license agreement is 50 pages long with complex legal language. Studies show the average user spends less than a minute before clicking "agree." Which ethical criticism is MOST valid regarding this situation?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Users should be legally required to read every word.' },
        { id: 'b', text: 'Such agreements may not represent meaningful consent, as they are designed in ways that make informed agreement impractical, raising questions about whether consent is genuine.' },
        { id: 'c', text: 'Software companies should not use any legal agreements.' },
        { id: 'd', text: 'Reading quickly is always sufficient.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Long, complex agreements that users cannot practically read raise questions about consent. If agreement terms would matter to users but are effectively hidden, consent may be more fictional than meaningful, though it may still be legally valid.',
      difficulty: 'hard'
    }
  ],

  // TOPIC 5.6: SAFE COMPUTING (15 challenging questions)
  'topic-5.6': [
    {
      text: 'A company suffers a data breach through a sophisticated phishing attack. Investigation reveals that an employee clicked a link in an email that appeared to be from IT support, entered their credentials, and the attacker used those credentials to access company systems. This scenario illustrates that:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Only technical security measures matter.' },
        { id: 'b', text: 'Humans are often the weakest link in security - social engineering attacks exploit human psychology rather than technical vulnerabilities.' },
        { id: 'c', text: 'The company should not use email.' },
        { id: 'd', text: 'Phishing attacks cannot be prevented.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Social engineering attacks target human behavior rather than technical systems. Even with strong technical security, an employee providing credentials to attackers can bypass many protections. Security awareness training is essential.',
      difficulty: 'hard'
    },
    {
      text: 'Multi-factor authentication (MFA) significantly improves account security by:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Making passwords longer' },
        { id: 'b', text: 'Requiring verification through multiple independent channels (something you know, have, or are), so stealing one factor alone is insufficient for access' },
        { id: 'c', text: 'Eliminating the need for passwords entirely' },
        { id: 'd', text: 'Making login faster' }
      ],
      correctAnswers: ['b'],
      explanation: 'MFA combines factors from different categories: knowledge (password), possession (phone/token), and biometrics (fingerprint). An attacker who steals a password still cannot access the account without the second factor, dramatically reducing compromise risk.',
      difficulty: 'hard'
    },
    {
      text: 'A user receives an email warning that their bank account will be closed unless they verify their information immediately by clicking a link. The email looks official and uses the bank\'s logo. What is the SAFEST course of action?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Click the link immediately since it appears urgent.' },
        { id: 'b', text: 'Reply to the email asking if it\'s legitimate.' },
        { id: 'c', text: 'Contact the bank directly through their official website or phone number - not through links in the email - to verify the communication.' },
        { id: 'd', text: 'Ignore all emails from the bank.' }
      ],
      correctAnswers: ['c'],
      explanation: 'Urgency is a common phishing tactic. Rather than clicking links or replying to potentially spoofed emails, users should independently contact organizations through known-good channels to verify any requests for sensitive information.',
      difficulty: 'hard'
    },
    {
      text: 'A company allows employees to use personal devices for work (BYOD - Bring Your Own Device). Which security concern is MOST specific to BYOD environments?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Employees might prefer working from home.' },
        { id: 'b', text: 'Personal devices may have less secure configurations, mix personal and corporate data, and be lost or stolen with corporate data accessible, complicating security management.' },
        { id: 'c', text: 'Personal devices are always more secure than company devices.' },
        { id: 'd', text: 'BYOD eliminates all security risks.' }
      ],
      correctAnswers: ['b'],
      explanation: 'BYOD introduces complexity: personal devices may lack enterprise security controls, employees may install risky applications, corporate data mixes with personal data, and device loss affects both personal and corporate security.',
      difficulty: 'hard'
    },
    {
      text: 'A website claims to use "military-grade encryption" for all data. This marketing term:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Guarantees the site cannot be hacked.' },
        { id: 'b', text: 'Is vague marketing language - what matters is which specific encryption standards are used, how they\'re implemented, and whether other security practices are sound.' },
        { id: 'c', text: 'Means the military manages the website.' },
        { id: 'd', text: 'Indicates the site uses no encryption.' }
      ],
      correctAnswers: ['b'],
      explanation: '"Military-grade encryption" is marketing terminology without specific meaning. AES-256 is commonly used by both military and civilian applications. Encryption is just one security factor; implementation quality, key management, and other practices matter equally.',
      difficulty: 'hard'
    },
    {
      text: 'A user\'s computer is infected with ransomware that encrypts all their files and demands payment in cryptocurrency for the decryption key. Which combination of practices would BEST have prevented or mitigated this attack?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using a faster computer' },
        { id: 'b', text: 'Regular offline/cloud backups, updated antimalware software, prompt security patching, and cautious behavior with email attachments' },
        { id: 'c', text: 'Paying ransoms promptly to avoid problems' },
        { id: 'd', text: 'Disconnecting from the internet permanently' }
      ],
      correctAnswers: ['b'],
      explanation: 'Defense in depth combines multiple strategies: backups ensure recovery without paying ransoms; antimalware may detect ransomware; patching closes vulnerabilities ransomware exploits; cautious behavior prevents initial infection.',
      difficulty: 'hard'
    },
    {
      text: 'Public key cryptography enables secure communication even when messages travel over insecure networks. Which of the following BEST explains why this works?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'The public key encrypts messages that only the corresponding private key can decrypt, so intercepted messages remain secure as long as the private key is protected.' },
        { id: 'b', text: 'Messages travel through special secure cables.' },
        { id: 'c', text: 'The public and private keys are the same.' },
        { id: 'd', text: 'Encryption makes messages travel faster.' }
      ],
      correctAnswers: ['a'],
      explanation: 'Public key cryptography uses mathematically linked key pairs. Anyone can encrypt with the public key, but only the private key holder can decrypt. This allows secure key exchange without needing a pre-shared secret.',
      difficulty: 'hard'
    },
    {
      text: 'A company\'s security policy requires passwords to be changed every 30 days. Recent security research suggests this policy may actually REDUCE security because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Changing passwords frequently is always better.' },
        { id: 'b', text: 'Frequent mandatory changes lead users to choose weaker passwords, increment numbers predictably, or write passwords down, potentially reducing overall security.' },
        { id: 'c', text: 'Users enjoy changing passwords frequently.' },
        { id: 'd', text: 'Passwords should never be changed.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Research shows frequent mandatory password changes often backfire. Users resort to weak, predictable patterns (Password1, Password2) or write passwords down. Security experts now often recommend strong, unique passwords changed only when compromised.',
      difficulty: 'hard'
    },
    {
      text: 'Consider the following security practices:\n\nI. Using the same password for all accounts so you only need to remember one\nII. Using a password manager to generate and store unique passwords for each account\nIII. Using multi-factor authentication where available\n\nWhich practices improve security?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'I only' },
        { id: 'b', text: 'II only' },
        { id: 'c', text: 'II and III only' },
        { id: 'd', text: 'I, II, and III' }
      ],
      correctAnswers: ['c'],
      explanation: 'Password reuse (I) is dangerous - one breach exposes all accounts. Password managers (II) enable unique, strong passwords for each account. MFA (III) adds protection beyond passwords. Both II and III significantly improve security.',
      difficulty: 'hard'
    },
    {
      text: 'A security researcher discovers a serious vulnerability in widely-used software. Which approach to disclosure balances security concerns?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Immediately publish all details publicly for maximum transparency.' },
        { id: 'b', text: 'Responsible disclosure: privately notify the software vendor, give them reasonable time to develop and deploy a fix, then publish details so users can verify they\'re protected.' },
        { id: 'c', text: 'Sell the vulnerability to the highest bidder.' },
        { id: 'd', text: 'Never tell anyone about security vulnerabilities.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Responsible disclosure balances competing interests: vendors need time to fix issues before attackers learn of them, but users deserve to know about vulnerabilities affecting them. Coordinated disclosure with a reasonable timeline achieves this balance.',
      difficulty: 'hard'
    },
    {
      text: 'A company stores passwords by applying a cryptographic hash function to each password. An attacker who breaches the database and obtains these hashes would find it difficult to recover the original passwords because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Hash functions are reversible.' },
        { id: 'b', text: 'Cryptographic hash functions are one-way: computing the hash from a password is fast, but reversing a hash to find the original input is computationally infeasible.' },
        { id: 'c', text: 'Hashes are stored in a different language.' },
        { id: 'd', text: 'Attackers cannot access databases.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Cryptographic hashes are one-way functions. While computing a hash is fast, there\'s no efficient way to reverse the process. Attackers must guess passwords and compare hashes - effective against common passwords but infeasible for strong ones.',
      difficulty: 'hard'
    },
    {
      text: 'An organization implements security awareness training after a phishing incident. Which of the following approaches is MOST likely to be effective?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A single annual lecture about security policies' },
        { id: 'b', text: 'Ongoing training with simulated phishing exercises, immediate feedback when employees click suspicious links, and clear procedures for reporting suspicious emails' },
        { id: 'c', text: 'Punishing employees who fail any security test' },
        { id: 'd', text: 'Only training IT staff about security' }
      ],
      correctAnswers: ['b'],
      explanation: 'Effective security awareness requires ongoing reinforcement, realistic practice through simulations, and learning opportunities when mistakes are made. Punitive approaches discourage reporting. Everyone, not just IT, needs training.',
      difficulty: 'hard'
    },
    {
      text: 'A user connects to a public WiFi network at a coffee shop to do online banking. Which of the following measures would BEST protect the user\'s banking session?',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Using the bank\'s mobile app over cellular data instead, or using a VPN if WiFi is necessary, ensuring the site uses HTTPS' },
        { id: 'b', text: 'Sitting in a corner so no one can see the screen' },
        { id: 'c', text: 'Banking quickly to minimize exposure time' },
        { id: 'd', text: 'Using the WiFi network named "Free Secure Banking WiFi"' }
      ],
      correctAnswers: ['a'],
      explanation: 'Public WiFi is susceptible to various attacks. Cellular data is generally more secure. VPNs encrypt traffic against network-level attacks. HTTPS protects against content interception. Suspicious network names may be attacker-controlled.',
      difficulty: 'hard'
    },
    {
      text: 'A company discovers that a former employee\'s credentials were used to access systems two weeks after their departure. This security failure is MOST directly related to:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'Insufficient network bandwidth' },
        { id: 'b', text: 'Inadequate offboarding procedures - account access should be terminated promptly when employees leave.' },
        { id: 'c', text: 'Too many passwords to manage' },
        { id: 'd', text: 'The employee using weak passwords' }
      ],
      correctAnswers: ['b'],
      explanation: 'Employee offboarding should include prompt access revocation. Delays create risk windows where former employees retain access. Good offboarding procedures systematically revoke access to all systems, accounts, and physical spaces.',
      difficulty: 'hard'
    },
    {
      text: 'Zero-day vulnerabilities are particularly dangerous because:',
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'They only work on the first day of the month.' },
        { id: 'b', text: 'They are vulnerabilities unknown to the software vendor, meaning no patch exists, so attackers can exploit them before any defense is possible.' },
        { id: 'c', text: 'They take zero seconds to exploit.' },
        { id: 'd', text: 'They can only affect zero users.' }
      ],
      correctAnswers: ['b'],
      explanation: 'Zero-day vulnerabilities are unknown to vendors (discovered "zero days" before a patch exists). Without patches available, traditional defenses like patching cannot protect against them, making them valuable for attackers.',
      difficulty: 'hard'
    }
  ]
};

async function seedChallengingQuestions() {
  console.log('Seeding Big Idea 5 Challenging Questions...');
  console.log('=========================================');

  let totalCount = 0;

  for (const topicId of Object.keys(questions)) {
    const topicQuestions = questions[topicId];
    console.log(`\nProcessing topic ${topicId}: ${topicQuestions.length} questions`);

    // Add questions to the questions collection
    for (let i = 0; i < topicQuestions.length; i++) {
      const q = topicQuestions[i];
      const qId = `${topicId}-challenge-${i + 1}`;

      await db.collection('questions').doc(qId).set({
        id: qId,
        text: q.text,
        type: q.type,
        options: q.options,
        correctAnswers: q.correctAnswers,
        explanation: q.explanation,
        difficulty: q.difficulty || 'hard',
        topicId: topicId,
        bigIdeaId: 'big-idea-5',
        isCustom: false,
        addedBy: 'system-challenging-v1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deactivated: false
      });

      totalCount++;
    }

    console.log(`  Added ${topicQuestions.length} questions for topic ${topicId}`);
  }

  console.log('\n=========================================');
  console.log(`Done! Added ${totalCount} challenging questions for Big Idea 5.`);
  console.log('Topics covered: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6');
  console.log('Questions per topic: 15');
}

seedChallengingQuestions()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error seeding questions:', error);
    process.exit(1);
  });
