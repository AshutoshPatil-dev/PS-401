# ⚔️ QuizQuest Arena – RPG Battle Trivia
A gamified educational system where your technical knowledge is your greatest weapon.

🎯 Features
⚔️ **RPG-style 2D Battles** (Attack / Defend / Ultimate based on logic)
🎮 **Gamified Score & High-Score System** (LocalStorage Persistence)
📋 **Class System** (Frontend Swifts, Backend Brawlers, Balanced Novices)
🚫 **Dynamic Boss Gauntlet** (Facing Null Pointer Disciples & Legacy Grandmasters)
📊 **Adversary Analysis** (Correct vs. Wrong answer tracking & Accuracy reports)
🔔 **Synthesized SFX** (Web Audio API driven attack & feedback sounds)
🧠 **Technical Mastery Engine** (Programming, Web Dev, & CS Trivia)
🔐 **Identity Verification** (Session-based player selection)

📁 Project Structure
quizquest-arena/
│
├── index.html
├── package.json
├── README.md
│
├── public/                  # Static Assets
│   ├── hero.png             # Character Sprites
│   ├── villains/            # Boss Sprites
│   └── backgrounds/         # Arena Environments
│
├── src/
│   │
│   ├── components/          # Reusable UI Components
│   │   ├── BattleArena.tsx  # Core Animation Engine
│   │   ├── QuestionBox.tsx  # Logic Input UI
│   │   ├── Screens.tsx      # Start/End/Select Screens
│   │   └── BattleLog.tsx    # Real-time combat data
│   │
│   ├── data/                # Content Storage
│   │   └── questions.ts     # Curated Technical Trivia Pool
│   │
│   ├── hooks/               # Functional Hooks
│   │   └── useSound.ts      # Web Audio SFX Synthesizer
│   │
│   ├── styles/              # Styling
│   │   └── index.css        # Tailwind Foundations
│   │
│   ├── types.ts             # Global Type Definitions
│   ├── App.tsx              # Game Engine & Controller
│   └── main.tsx             # Entry Point
│
└── tsconfig.json            # TypeScript Configuration

👥 Team Responsibilities
| Role | Responsibility |
| :--- | :--- |
| **Battle Engine** | State management, turn logic, and collision timing |
| **Content Design** | Technical question pool curation & difficulty balancing |
| **Frontend/UX** | Responsive layouts, high-score tracking, and HUD design |
| **VFX & Audio** | Framer Motion animations & Web Audio API sound synthesis |

⚙️ Tech Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Animations:** Framer Motion (`motion/react`)
- **Audio Engine:** Web Audio API (Fully Synthesized Assets)
- **Build Tool:** Vite

🧠 Concept
“Most apps test your memory. QuizQuest Arena tests your mastery under fire.”

🚀 Getting Started
```bash
git clone https://github.com/your-repo/quizquest-arena.git
cd quizquest-arena
npm install
npm run dev
```

🎤 Demo Highlights
- **Character Class Selection:** Distinct stats for different developer roles.
- **Dynamic Arena Scaling:** Backgrounds and timers that shift based on boss difficulty.
- **Synthesized Feedback:** Real-time audio cues for every strike and parry.
- **Detailed Evaluation:** Post-battle accuracy reports and cultivation score tracking.

📌 Future Improvements
- 🌐 Real-time Multiplayer Duels
- ☁️ Global Leaderboards (Firestore Integration)
- 🛠️ Custom Boss/Question Editor for Instructors
- 🧬 AI-generated adaptive question difficulty

🏁 Built for Hackathon
Crafted with speed, logic, and a passion for dev education. 🛡️
