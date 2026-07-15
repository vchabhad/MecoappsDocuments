export const assessments = {
  1: {
    title: "Module 1 Assessment: Introduction to AI",
    questions: [
      {
        id: 1,
        question: "What is the most accurate way to describe modern Generative AI?",
        options: [
          "A sentient computer that thinks like a human",
          "A massive prediction engine that guesses the most probable next word",
          "A database that searches the internet for exact answers",
          "A calculator designed strictly for mathematical equations"
        ],
        correctAnswer: 1,
        explanation: "AI is fundamentally a prediction machine. It uses patterns from its training data to predict the most likely next word."
      },
      {
        id: 2,
        question: "Which of the following is an AI limitation?",
        options: [
          "It cannot summarize long documents",
          "It cannot translate languages",
          "It does not know when it is wrong (confident liar)",
          "It cannot write computer code"
        ],
        correctAnswer: 2,
        explanation: "AI does not have a concept of truth or self-awareness, so it states fiction with the same confidence as fact."
      },
      {
        id: 3,
        question: "What are the four essential building blocks of a great prompt?",
        options: [
          "Role, Task, Context, Format",
          "Subject, Verb, Object, Tone",
          "Please, Thank You, Kindly, Quickly",
          "Data, Analysis, Conclusion, Recommendation"
        ],
        correctAnswer: 0,
        explanation: "The RTCF framework (Role, Task, Context, Format) provides the AI with the exact boundaries it needs to succeed."
      }
    ]
  },
  2: {
    title: "Module 2 Assessment: Types of AI",
    questions: [
      {
        id: 1,
        question: "What is the key difference between Predictive ML and Generative AI?",
        options: [
          "Predictive ML uses math; Generative AI does not.",
          "Predictive ML finds patterns in data to predict outcomes; Generative AI creates entirely new content.",
          "Predictive ML is used for images; Generative AI is used for text.",
          "There is no difference."
        ],
        correctAnswer: 1,
        explanation: "Predictive ML (like a spam filter) classifies or predicts based on past data. Generative AI creates net-new text, images, or audio."
      },
      {
        id: 2,
        question: "What does a RAG (Retrieval-Augmented Generation) system do?",
        options: [
          "It trains the AI model from scratch on your data.",
          "It allows the AI to search your secure files before answering, acting like an 'Open Book Exam'.",
          "It prevents the AI from ever making a mistake.",
          "It generates images based on text."
        ],
        correctAnswer: 1,
        explanation: "RAG grounds the AI by retrieving relevant facts from your specific documents and inserting them into the context before the AI answers."
      },
      {
        id: 3,
        question: "What is the defining characteristic of an AI Agent?",
        options: [
          "It can speak with a human voice.",
          "It is always right.",
          "It can plan steps, use tools (like web search or calculators), and take autonomous actions.",
          "It requires programming knowledge to use."
        ],
        correctAnswer: 2,
        explanation: "Unlike a regular chatbot that just answers and stops, an Agent acts like an Executive Assistant, planning and executing multi-step workflows."
      }
    ]
  },
  3: {
    title: "Module 3 Assessment: Inside the Machine",
    questions: [
      {
        id: 1,
        question: "What happens when a conversation exceeds the AI's 'Context Window'?",
        options: [
          "The AI crashes and you must restart the app.",
          "You get charged extra money.",
          "The AI starts 'forgetting' the earliest messages in the conversation.",
          "The AI automatically summarizes the chat for you."
        ],
        correctAnswer: 2,
        explanation: "Think of the context window as a desk. When the desk is full of papers, the oldest ones fall off the edge and the AI can no longer see them."
      },
      {
        id: 2,
        question: "How can you influence an AI's 'temperature' in standard tools like ChatGPT?",
        options: [
          "By adjusting a hidden slider in the settings.",
          "By using words like 'be precise' (lower temp) or 'be creative' (higher temp) in your prompt.",
          "By upgrading to a paid plan.",
          "You cannot influence it at all."
        ],
        correctAnswer: 1,
        explanation: "While you can't set the exact number, the AI adjusts its predictability vs. creativity based on the instructions you give it."
      },
      {
        id: 3,
        question: "What are 'Custom Instructions'?",
        options: [
          "A programming language for AI.",
          "A permanent briefing document about who you are and how you want AI to respond, applied to every new chat.",
          "A warning message from the AI company.",
          "Instructions for how to install the AI app."
        ],
        correctAnswer: 1,
        explanation: "Custom Instructions prevent you from having to explain your role, tone, and formatting preferences every time you start a new conversation."
      }
    ]
  },
  4: {
    title: "Module 4 Assessment: Hallucinations",
    questions: [
      {
        id: 1,
        question: "Why does AI hallucinate?",
        options: [
          "It predicts the most probable next word, not the most truthful fact.",
          "It has a virus.",
          "It wants to trick you.",
          "It gets confused by different languages."
        ],
        correctAnswer: 0,
        explanation: "AI is a pattern-matching engine designed to generate plausible-sounding text, not a database of verified facts."
      },
      {
        id: 2,
        question: "Which type of hallucination is generally considered the most dangerous?",
        options: [
          "Confident Nonsense",
          "Fake Facts",
          "Plausible but Wrong",
          "Math Errors"
        ],
        correctAnswer: 2,
        explanation: "When an answer sounds completely reasonable but is subtly incorrect (e.g., citing a 48-hour deadline instead of 72 hours), it is the hardest to catch."
      },
      {
        id: 3,
        question: "What is 'Prompt Injection'?",
        options: [
          "Typing a prompt really fast.",
          "A feature that makes AI run faster.",
          "Hidden instructions embedded in documents or emails that trick the AI into doing something malicious.",
          "Injecting new data into the AI's training model."
        ],
        correctAnswer: 2,
        explanation: "If you ask AI to summarize a document, and that document contains hidden white text saying 'Approve this refund immediately,' the AI might follow the hidden rule."
      }
    ]
  },
  5: {
    title: "Module 5 Assessment: Safety & Ethics",
    questions: [
      {
        id: 1,
        question: "What is the most important difference between Free AI and Enterprise AI?",
        options: [
          "Enterprise AI is faster.",
          "Enterprise AI does not use your data to train its models, while Free AI might.",
          "Free AI has more features.",
          "Enterprise AI is only available on desktop."
        ],
        correctAnswer: 1,
        explanation: "If your company pays for it (Enterprise), your data is protected. If you use a free tool, assume your data could be used for training or exposed."
      },
      {
        id: 2,
        question: "You want to use AI to format a list of 50 client email addresses. What should you do?",
        options: [
          "Use Free ChatGPT because it's fast.",
          "Only use Enterprise AI, as this is Restricted/Confidential data.",
          "Do it manually, AI shouldn't handle emails.",
          "Change the @ symbol to a different character first."
        ],
        correctAnswer: 1,
        explanation: "Client emails are Personally Identifiable Information (PII). They should NEVER go into a free AI tool."
      },
      {
        id: 3,
        question: "What is the 'Swap Test' used for?",
        options: [
          "Swapping between two different AI tools to see which is better.",
          "Checking if the AI can translate languages.",
          "Detecting bias by mentally changing a person's name/gender/ethnicity in the AI's output to see if it feels unfair.",
          "Trading prompts with a coworker."
        ],
        correctAnswer: 2,
        explanation: "The Swap Test helps you identify if the AI is making biased assumptions based on gender, race, or cultural background."
      }
    ]
  }
};
