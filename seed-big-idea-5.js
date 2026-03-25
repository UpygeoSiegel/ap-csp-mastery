const { db } = require('./server/firebase');

// Big Idea 5: Impact of Computing - Advanced Questions
// Topics: 5.1 Beneficial and Harmful Effects, 5.2 Digital Divide, 5.3 Computing Bias, 
//         5.4 Crowdsourcing, 5.5 Legal and Ethical Concerns, 5.6 Safe Computing

const bigIdea5Questions = [
  // Topic 5.1: Beneficial and Harmful Effects (4 questions)
  {
    topicId: 'topic-5.1',
    questions: [
      {
        id: 'q5.1-1',
        text: 'Social media platforms use algorithms to curate personalized feeds for users. While this increases user engagement and helps people discover relevant content, it also creates "echo chambers" where users primarily see information that confirms their existing beliefs. This scenario best illustrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'How computing innovations always produce more benefits than harms' },
          { id: 'b', text: 'The dual nature of computing innovations having both positive and negative impacts' },
          { id: 'c', text: 'Why algorithmic personalization should be completely eliminated' },
          { id: 'd', text: 'How social media platforms intentionally manipulate user behavior' }
        ],
        correctAnswers: ['b'],
        explanation: 'This exemplifies how computing innovations often have both beneficial effects (content discovery, engagement) and harmful effects (echo chambers, reduced exposure to diverse viewpoints).',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.1-2',
        text: 'Autonomous vehicles have the potential to significantly reduce traffic accidents caused by human error, but they also raise concerns about job displacement for professional drivers and ethical dilemmas in unavoidable accident scenarios. When evaluating this technology, which approach is most appropriate?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Focus only on safety benefits since they outweigh other concerns' },
          { id: 'b', text: 'Reject the technology due to potential negative consequences' },
          { id: 'c', text: 'Conduct comprehensive analysis of both benefits and harms across different stakeholder groups' },
          { id: 'd', text: 'Wait until all potential problems are completely solved before implementation' }
        ],
        correctAnswers: ['c'],
        explanation: 'Responsible evaluation of computing innovations requires comprehensive analysis of impacts on all stakeholders, weighing benefits against potential harms.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.1-3',
        text: 'A mobile health app helps users track symptoms and medication, improving treatment adherence and health outcomes. However, the app also collects detailed health data that could be valuable to insurance companies for risk assessment. This situation demonstrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Why health apps should not collect any personal data' },
          { id: 'b', text: 'The importance of transparent data practices and user control' },
          { id: 'c', text: 'How beneficial applications never have negative consequences' },
          { id: 'd', text: 'Why insurance companies should have access to all health data' }
        ],
        correctAnswers: ['b'],
        explanation: 'This highlights the need for clear data practices and user control over personal information when beneficial technologies also create privacy risks.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.1-4',
        text: 'Online learning platforms have made education more accessible to people worldwide, especially during the COVID-19 pandemic. However, they have also highlighted and potentially worsened educational inequalities for students without reliable internet access or devices. This example shows how computing innovations can:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Solve existing social problems without creating new ones' },
          { id: 'b', text: 'Amplify existing inequalities while providing new opportunities' },
          { id: 'c', text: 'Only benefit those who already have technological advantages' },
          { id: 'd', text: 'Automatically level the playing field for all participants' }
        ],
        correctAnswers: ['b'],
        explanation: 'Online learning demonstrates how computing innovations can simultaneously expand opportunities while amplifying existing inequalities based on access to technology.',
        isCustom: false,
        addedBy: null
      },
    ]
  },

  // Topic 5.2: Digital Divide (4 questions)
  {
    topicId: 'topic-5.2',
    questions: [
      {
        id: 'q5.2-1',
        text: 'A rural community lacks high-speed internet infrastructure, making it difficult for students to participate in online learning and for businesses to operate e-commerce platforms. The local government is deciding between immediate subsidies for satellite internet or long-term investment in fiber optic infrastructure. Which factors are most important to consider?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Only the upfront cost of each option' },
          { id: 'b', text: 'Long-term sustainability, speed, and reliability of each solution' },
          { id: 'c', text: 'Whether urban areas have already received similar investments' },
          { id: 'd', text: 'The technical complexity of implementing each option' }
        ],
        correctAnswers: ['b'],
        explanation: 'Addressing digital divide requires considering long-term sustainability, performance characteristics, and reliability to ensure lasting solutions for underserved communities.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.2-2',
        text: 'A study finds that while smartphone ownership is high across different income levels, higher-income households are more likely to have multiple devices, high-speed home internet, and newer technology. This pattern illustrates which aspect of the digital divide?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The digital divide only affects people who have no technology access' },
          { id: 'b', text: 'Quality and breadth of technology access vary even among those who have some access' },
          { id: 'c', text: 'Smartphone ownership has completely eliminated digital inequalities' },
          { id: 'd', text: 'Income has no relationship to technology access in modern society' }
        ],
        correctAnswers: ['b'],
        explanation: 'The digital divide includes not just binary access/no access, but also differences in quality, speed, and breadth of technology access across socioeconomic groups.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.2-3',
        text: 'An elderly person struggles to use online banking and government services because they lack digital literacy skills, even though they have internet access. Their adult children help them occasionally, but this creates dependency and limits their autonomy. This situation highlights:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Why elderly people should avoid using digital services entirely' },
          { id: 'b', text: 'The importance of digital literacy training and accessible interface design' },
          { id: 'c', text: 'How family support completely solves digital divide issues' },
          { id: 'd', text: 'Why all government services should return to paper-based systems' }
        ],
        correctAnswers: ['b'],
        explanation: 'This illustrates how the digital divide includes skills and literacy gaps, not just technology access, requiring both training and better interface design.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.2-4',
        text: 'A city provides free Wi-Fi in public spaces to help address digital inequities. However, usage data shows that people primarily use it for entertainment rather than educational or professional purposes. What does this suggest about addressing the digital divide?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Free Wi-Fi programs are ineffective and should be discontinued' },
          { id: 'b', text: 'People from lower-income backgrounds don\'t value educational technology' },
          { id: 'c', text: 'Providing access alone may not be sufficient without digital literacy support and relevant content' },
          { id: 'd', text: 'Entertainment use proves the program is meeting community needs effectively' }
        ],
        correctAnswers: ['c'],
        explanation: 'This demonstrates that bridging the digital divide requires more than just access - it also needs digital literacy education and relevant, accessible content and services.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 5.3: Computing Bias (4 questions)
  {
    topicId: 'topic-5.3',
    questions: [
      {
        id: 'q5.3-1',
        text: 'A hiring algorithm trained on historical company data consistently rates resumes with traditionally female names lower than identical resumes with traditionally male names. The company\'s historical hiring data shows a preference for male employees in technical roles. This situation illustrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'How algorithms are naturally objective and free from human bias' },
          { id: 'b', text: 'Why historical data should never be used to train algorithms' },
          { id: 'c', text: 'How algorithms can perpetuate and amplify existing human biases in data' },
          { id: 'd', text: 'Why hiring decisions should only be made by human managers' }
        ],
        correctAnswers: ['c'],
        explanation: 'This demonstrates how algorithms trained on biased historical data can perpetuate and systematize those biases, requiring careful attention to training data and algorithm design.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.3-2',
        text: 'A medical diagnosis AI system shows high accuracy overall but performs significantly worse for patients from certain ethnic backgrounds because the training dataset primarily included patients from other backgrounds. What is the most appropriate response to this bias?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Accept the lower accuracy as inevitable since the system works well overall' },
          { id: 'b', text: 'Collect more diverse training data and retrain the system to improve fairness' },
          { id: 'c', text: 'Use the system only for the groups where it shows high accuracy' },
          { id: 'd', text: 'Completely abandon AI approaches for medical diagnosis' }
        ],
        correctAnswers: ['b'],
        explanation: 'Addressing bias requires improving data representation and retraining systems to ensure equitable performance across all demographic groups.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.3-3',
        text: 'A social media platform\'s content moderation algorithm is more likely to flag posts written in non-standard English dialects as inappropriate, even when the content is harmless. This bias could result from:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Training data that predominantly featured standard English and associated non-standard dialects with problematic content' },
          { id: 'b', text: 'Intentional discrimination programmed by the algorithm developers' },
          { id: 'c', text: 'Hardware limitations that prevent accurate processing of diverse language patterns' },
          { id: 'd', text: 'User reports that consistently target speakers of non-standard dialects' }
        ],
        correctAnswers: ['a'],
        explanation: 'This linguistic bias likely stems from training data that wasn\'t representative of diverse language use patterns, leading to unfair treatment of certain dialect speakers.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.3-4',
        text: 'A predictive policing system recommends increased patrols in certain neighborhoods based on historical crime data. However, these neighborhoods have historically been over-policed, leading to higher arrest rates that may not reflect actual crime rates. This creates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'An accurate representation of where crime actually occurs' },
          { id: 'b', text: 'A feedback loop that reinforces and amplifies existing policing biases' },
          { id: 'c', text: 'An objective, data-driven approach to resource allocation' },
          { id: 'd', text: 'A system that automatically corrects historical discrimination' }
        ],
        correctAnswers: ['b'],
        explanation: 'This illustrates how biased historical data can create feedback loops where algorithmic recommendations reinforce and amplify existing systemic biases.',
        isCustom: false,
        addedBy: null
      },
    ]
  },

  // Topic 5.4: Crowdsourcing (4 questions)
  {
    topicId: 'topic-5.4',
    questions: [
      {
        id: 'q5.4-1',
        text: 'During a natural disaster, authorities use a crowdsourcing platform to gather real-time information about damage and needed resources from affected citizens. While this provides valuable, up-to-date information, what challenge must be carefully managed?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'The high cost of maintaining crowdsourcing platforms' },
          { id: 'b', text: 'Verifying the accuracy and reliability of user-submitted information' },
          { id: 'c', text: 'Preventing too many people from participating in the effort' },
          { id: 'd', text: 'Ensuring only trained professionals contribute information' }
        ],
        correctAnswers: ['b'],
        explanation: 'Crowdsourcing provides valuable distributed intelligence but requires mechanisms to verify accuracy and reliability of user-contributed content, especially in critical situations.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.4-2',
        text: 'A scientific research project uses crowdsourcing to have volunteers classify images of galaxies. The project processes millions of images much faster than professional astronomers could alone, and some volunteers make unexpected discoveries. However, the quality of classifications varies significantly between participants. This scenario demonstrates:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Why crowdsourcing should replace all professional scientific work' },
          { id: 'b', text: 'How crowdsourcing can scale human intelligence while requiring quality control measures' },
          { id: 'c', text: 'Why only trained scientists should analyze scientific data' },
          { id: 'd', text: 'How volunteers always produce lower-quality work than professionals' }
        ],
        correctAnswers: ['b'],
        explanation: 'This illustrates crowdsourcing\'s ability to harness distributed human intelligence and expertise while highlighting the need for quality control and validation mechanisms.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.4-3',
        text: 'A company uses a crowdsourcing platform to have workers perform small digital tasks for very low pay. While this provides income opportunities for people worldwide, critics argue it creates exploitative working conditions. This situation raises questions about:',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Whether crowdsourcing platforms should be completely banned' },
          { id: 'b', text: 'The ethical responsibilities of platforms regarding fair compensation and working conditions' },
          { id: 'c', text: 'Why traditional employment is always superior to crowdsourced work' },
          { id: 'd', text: 'How to prevent people from participating in crowdsourcing platforms' }
        ],
        correctAnswers: ['b'],
        explanation: 'This highlights ethical considerations in crowdsourcing, particularly regarding fair compensation, worker protections, and platform responsibilities for distributed workforce welfare.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.4-4',
        text: 'A mapping service uses crowdsourcing to keep its maps updated, allowing users to report road closures, new businesses, and traffic conditions. The system aggregates multiple reports to verify accuracy before updating maps. This approach demonstrates which benefit of crowdsourcing?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Crowdsourcing always produces more accurate data than professional sources' },
          { id: 'b', text: 'Distributed intelligence can provide real-time, comprehensive coverage with validation mechanisms' },
          { id: 'c', text: 'User-generated content requires no quality control or verification' },
          { id: 'd', text: 'Crowdsourcing is only effective for simple data collection tasks' }
        ],
        correctAnswers: ['b'],
        explanation: 'This demonstrates how crowdsourcing can leverage distributed intelligence to provide comprehensive, real-time data while using validation mechanisms to ensure accuracy.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 5.5: Legal and Ethical Concerns (4 questions)
  {
    topicId: 'topic-5.5',
    questions: [
      {
        id: 'q5.5-1',
        text: 'A software developer creates a mobile app that includes background music from popular songs without obtaining proper licensing. The developer argues that the music enhances user experience and the app is free. Which principle is most relevant to this situation?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Fair use allows any music to be used in educational or free applications' },
          { id: 'b', text: 'Intellectual property rights require proper licensing regardless of the app\'s commercial status' },
          { id: 'c', text: 'Copyright laws don\'t apply to mobile applications' },
          { id: 'd', text: 'User experience benefits justify using copyrighted material without permission' }
        ],
        correctAnswers: ['b'],
        explanation: 'Copyright protection applies regardless of whether the use is commercial. Proper licensing is required to use copyrighted music, even in free applications.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.5-2',
        text: 'A healthcare AI system makes treatment recommendations based on patient data. When the system recommends a treatment that leads to an adverse outcome, questions arise about liability. Who should be held responsible?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Only the AI system itself, since it made the recommendation' },
          { id: 'b', text: 'Only the patient, since they chose to use AI-assisted healthcare' },
          { id: 'c', text: 'A combination of developers, healthcare providers, and institutions, depending on their roles and responsibilities' },
          { id: 'd', text: 'No one, since AI systems cannot be held accountable for their decisions' }
        ],
        correctAnswers: ['c'],
        explanation: 'AI liability typically involves multiple stakeholders - developers who created the system, healthcare providers who used it, and institutions that deployed it, each bearing appropriate responsibility.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.5-3',
        text: 'A social media company receives a government request to provide user data for a criminal investigation. The company must balance law enforcement needs with user privacy rights. What ethical framework should guide their decision?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Always comply with any government request to support law enforcement' },
          { id: 'b', text: 'Never provide user data under any circumstances to protect privacy' },
          { id: 'c', text: 'Evaluate requests based on legal requirements, user consent, and proportionality of the investigation' },
          { id: 'd', text: 'Provide data only if users have explicitly agreed to share it with law enforcement' }
        ],
        correctAnswers: ['c'],
        explanation: 'Ethical data handling requires balancing competing interests: legal compliance, user privacy rights, legitimate law enforcement needs, and proportionality of requests.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.5-4',
        text: 'A programmer discovers a security vulnerability in their company\'s software that could potentially be exploited by malicious actors. The company wants to keep this information secret to avoid negative publicity. What ethical principle should guide the programmer\'s decision?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Loyalty to the employer always takes priority over other considerations' },
          { id: 'b', text: 'Public safety and user security should be prioritized over corporate image' },
          { id: 'c', text: 'Security vulnerabilities should never be disclosed to anyone' },
          { id: 'd', text: 'Only financial considerations matter when making security decisions' }
        ],
        correctAnswers: ['b'],
        explanation: 'Professional ethics in computing prioritize public welfare and user safety. Responsible disclosure of security vulnerabilities protects users, even when inconvenient for companies.',
        isCustom: false,
        addedBy: null
      }
    ]
  },

  // Topic 5.6: Safe Computing (5 questions)
  {
    topicId: 'topic-5.6',
    questions: [
      {
        id: 'q5.6-1',
        text: 'A teenager receives an email claiming to be from their bank, asking them to click a link and verify their account information due to "suspicious activity." The email looks official and creates urgency. What should the teenager do first?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Click the link immediately to secure their account' },
          { id: 'b', text: 'Contact the bank directly through official channels to verify the request' },
          { id: 'c', text: 'Forward the email to friends to warn them about the suspicious activity' },
          { id: 'd', text: 'Reply to the email asking for more information about the suspicious activity' }
        ],
        correctAnswers: ['b'],
        explanation: 'This appears to be a phishing attempt. The safest approach is to verify requests independently through official channels rather than trusting unsolicited communications.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.6-2',
        text: 'A student creates the same password for their school email, social media accounts, and online banking. When their social media account is compromised, what additional risks does this create?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'No additional risk since the compromised account is isolated' },
          { id: 'b', text: 'Risk of credential stuffing attacks on other accounts using the same password' },
          { id: 'c', text: 'Only risk to other social media accounts, since banks have separate security' },
          { id: 'd', text: 'Reduced security only until the original account is recovered' }
        ],
        correctAnswers: ['b'],
        explanation: 'Password reuse creates vulnerability to credential stuffing attacks, where attackers use compromised credentials to access other accounts with the same password.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.6-3',
        text: 'A family uses a smart home system with voice assistants, security cameras, and connected appliances. They keep the default passwords on most devices and don\'t regularly update firmware. What security risks does this create?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'No significant risk since smart home devices are inherently secure' },
          { id: 'b', text: 'Vulnerability to unauthorized access and potential privacy violations' },
          { id: 'c', text: 'Only risk of device malfunction, not security breaches' },
          { id: 'd', text: 'Risk only to the device manufacturer, not the home users' }
        ],
        correctAnswers: ['b'],
        explanation: 'Default passwords and unpatched firmware create significant security vulnerabilities, potentially allowing unauthorized access to devices and personal data.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.6-4',
        text: 'A employee receives a phone call from someone claiming to be from IT support, asking for their login credentials to "update the system." The caller knows some details about the employee\'s work environment. What type of attack is this, and how should the employee respond?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'This is legitimate IT support; provide the credentials to avoid system problems' },
          { id: 'b', text: 'This is likely social engineering; verify the caller\'s identity through official IT channels' },
          { id: 'c', text: 'This is a technical error; hang up and call back immediately' },
          { id: 'd', text: 'This is routine maintenance; provide credentials but ask for confirmation email' }
        ],
        correctAnswers: ['b'],
        explanation: 'This describes social engineering, where attackers use psychological manipulation and partial information to gain trust and extract sensitive information.',
        isCustom: false,
        addedBy: null
      },
      {
        id: 'q5.6-5',
        text: 'A student downloads a "free" game from an unofficial website. The game works but also installs additional software that tracks web browsing and displays advertisements. This scenario demonstrates which security principle?',
        type: 'multiple_choice',
        options: [
          { id: 'a', text: 'Free software is always safe since it has no commercial motive' },
          { id: 'b', text: 'Software from unofficial sources may contain malware or unwanted features' },
          { id: 'c', text: 'Advertisement tracking is a normal feature of all software' },
          { id: 'd', text: 'Game software cannot contain security threats' }
        ],
        correctAnswers: ['b'],
        explanation: 'This illustrates the risk of downloading software from untrusted sources, which may bundle legitimate applications with malware, adware, or privacy-violating software.',
        isCustom: false,
        addedBy: null
      }
    ]
  }
];

async function seedBigIdea5() {
  try {
    console.log('Starting to seed Big Idea 5 - Impact of Computing questions...');

    for (const topicQuestions of bigIdea5Questions) {
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

    console.log('\n✅ Successfully added Big Idea 5 questions!');
    console.log('\nSummary:');
    console.log('- Topic 5.1 (Beneficial and Harmful Effects): 4 questions on dual impacts of computing innovations');
    console.log('- Topic 5.2 (Digital Divide): 4 questions on access inequalities and solutions');  
    console.log('- Topic 5.3 (Computing Bias): 4 questions on algorithmic bias, fairness, and mitigation');
    console.log('- Topic 5.4 (Crowdsourcing): 4 questions on distributed collaboration benefits and challenges');
    console.log('- Topic 5.5 (Legal and Ethical Concerns): 4 questions on intellectual property, liability, and professional ethics');
    console.log('- Topic 5.6 (Safe Computing): 5 questions on cybersecurity threats and protective measures');
    console.log('- All questions emphasize critical thinking about societal impacts and ethical decision-making');
    console.log('- Distractors represent common misconceptions about computing\'s social implications');
    console.log('- Total questions added: 25');
    
    console.log('\n🎉 BIG IDEA 5 COMPLETE! 🎉');
    console.log('Impact of Computing topics now have comprehensive question coverage');
    console.log('Focus on real-world scenarios, ethical reasoning, and societal implications');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding questions:', error);
    process.exit(1);
  }
}

// Run the script
seedBigIdea5();