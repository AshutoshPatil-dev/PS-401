import { Question } from '../types';

export const questions: Question[] = [
  // Programming - Easy
  {
    id: 'p1',
    text: 'Which symbol is used for comments in JavaScript?',
    options: ['//', '#', '<!-- -->', '--'],
    correctAnswerIndex: 0,
    explanation: '// is used for single-line comments in JavaScript.',
    topic: 'Programming',
    difficulty: 'easy'
  },
  {
    id: 'p2',
    text: 'What does HTML stand for?',
    options: ['High Tech Multi Language', 'Hyper Text Markup Language', 'Hyper Tool Meta Language', 'Home Tool Markup Language'],
    correctAnswerIndex: 1,
    explanation: 'HTML stands for Hyper Text Markup Language, the standard for creating web pages.',
    topic: 'Programming',
    difficulty: 'easy'
  },
  {
    id: 'p3',
    text: 'Which data type is used for True/False values?',
    options: ['String', 'Integer', 'Boolean', 'Float'],
    correctAnswerIndex: 2,
    explanation: 'Boolean is a logical data type that can only have the values true or false.',
    topic: 'Programming',
    difficulty: 'easy'
  },
  // Programming - Medium
  {
    id: 'p4',
    text: 'What is the correct way to write an arrow function in JS?',
    options: ['function => {}', '() => {}', '() -> {}', 'function() -> {}'],
    correctAnswerIndex: 1,
    explanation: '() => {} is the standard syntax for ES6 arrow functions.',
    topic: 'Programming',
    difficulty: 'medium'
  },
  {
    id: 'p5',
    text: 'What is the purpose of the "git clone" command?',
    options: ['To delete a repository', 'To create a copy of a repository', 'To merge branches', 'To push code to GitHub'],
    correctAnswerIndex: 1,
    explanation: 'git clone creates a local copy of a remote repository.',
    topic: 'Programming',
    difficulty: 'medium'
  },
  // Programming - Hard
  {
    id: 'p6',
    text: 'What is the time complexity of a binary search algorithm?',
    options: ['O(n)', 'O(n^2)', 'O(log n)', 'O(1)'],
    correctAnswerIndex: 2,
    explanation: 'Binary search divides the search space in half each step, resulting in O(log n) complexity.',
    topic: 'Programming',
    difficulty: 'hard'
  },
  {
    id: 'p7',
    text: 'What does "Closure" in JavaScript refer to?',
    options: ['A function bundled with its lexical environment', 'A way to close the browser tab', 'A method to end a loop', 'A private variable'],
    correctAnswerIndex: 0,
    explanation: 'A closure is a function that remembers its outer variables even after the outer function has returned.',
    topic: 'Programming',
    difficulty: 'hard'
  },

  // General Knowledge - Easy
  {
    id: 'g1',
    text: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Rome'],
    correctAnswerIndex: 2,
    explanation: 'Paris is the capital and most populous city of France.',
    topic: 'General Knowledge',
    difficulty: 'easy'
  },
  {
    id: 'g2',
    text: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswerIndex: 1,
    explanation: 'Mars is often called the Red Planet because of iron oxide on its surface.',
    topic: 'General Knowledge',
    difficulty: 'easy'
  },
  {
    id: 'g3',
    text: 'How many continents are there on Earth?',
    options: ['5', '6', '7', '8'],
    correctAnswerIndex: 2,
    explanation: 'There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.',
    topic: 'General Knowledge',
    difficulty: 'easy'
  },
  // General Knowledge - Medium
  {
    id: 'g4',
    text: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
    correctAnswerIndex: 2,
    explanation: 'The Mona Lisa was painted by the Italian Renaissance artist Leonardo da Vinci.',
    topic: 'General Knowledge',
    difficulty: 'medium'
  },
  {
    id: 'g5',
    text: 'In which year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    correctAnswerIndex: 2,
    explanation: 'WWII ended in 1945 with the surrender of the Axis powers.',
    topic: 'General Knowledge',
    difficulty: 'medium'
  },
  // General Knowledge - Hard
  {
    id: 'g6',
    text: 'What is the smallest country in the world by land area?',
    options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
    correctAnswerIndex: 1,
    explanation: 'Vatican City is the smallest country, covering only about 44 hectares.',
    topic: 'General Knowledge',
    difficulty: 'hard'
  },
  {
    id: 'g7',
    text: 'What is the currency of Japan?',
    options: ['Yuan', 'Won', 'Yen', 'Baht'],
    correctAnswerIndex: 2,
    explanation: 'The Yen is the official currency of Japan.',
    topic: 'General Knowledge',
    difficulty: 'hard'
  },

  // Science / Technology - Easy
  {
    id: 's1',
    text: 'What is the main gas that humans breathe in to survive?',
    options: ['Nitrogen', 'Oxygen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswerIndex: 1,
    explanation: 'Humans need oxygen for cellular respiration.',
    topic: 'Science / Technology',
    difficulty: 'easy'
  },
  {
    id: 's2',
    text: 'What does "CPU" stand for?',
    options: ['Computer Processing Unit', 'Central Processing Unit', 'Core Processing Unit', 'Central Process Utility'],
    correctAnswerIndex: 1,
    explanation: 'CPU stands for Central Processing Unit, the "brain" of the computer.',
    topic: 'Science / Technology',
    difficulty: 'easy'
  },
  {
    id: 's3',
    text: 'Which is the largest organ of the human body?',
    options: ['Heart', 'Lungs', 'Liver', 'Skin'],
    correctAnswerIndex: 3,
    explanation: 'The skin is the largest organ, covering the entire outside of the body.',
    topic: 'Science / Technology',
    difficulty: 'easy'
  },
  // Science / Technology - Medium
  {
    id: 's4',
    text: 'What is the center of an atom called?',
    options: ['Neutron', 'Proton', 'Nucleus', 'Electron'],
    correctAnswerIndex: 2,
    explanation: 'The nucleus is the small, dense region at the center of an atom.',
    topic: 'Science / Technology',
    difficulty: 'medium'
  },
  {
    id: 's5',
    text: 'Which company developed the iPhone?',
    options: ['Samsung', 'Microsoft', 'Apple', 'Google'],
    correctAnswerIndex: 2,
    explanation: 'The iPhone was developed and is marketed by Apple Inc.',
    topic: 'Science / Technology',
    difficulty: 'medium'
  },
  // Science / Technology - Hard
  {
    id: 's6',
    text: 'What process do plants use to make their food from sunlight?',
    options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Transpiration'],
    correctAnswerIndex: 1,
    explanation: 'Photosynthesis is the process by which green plants use sunlight to synthesize nutrients.',
    topic: 'Science / Technology',
    difficulty: 'hard'
  },
  {
    id: 's7',
    text: 'What is the hardest natural substance on Earth?',
    options: ['Gold', 'Iron', 'Diamond', 'Quartz'],
    correctAnswerIndex: 2,
    explanation: 'Diamond is the hardest natural substance due to its crystal structure.',
    topic: 'Science / Technology',
    difficulty: 'hard'
  }
];
