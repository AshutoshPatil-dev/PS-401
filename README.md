---

# ⚔️ QuizQuest Arena – RPG Battle Trivia

A gamified educational system where your technical knowledge becomes your greatest weapon.

---

## 🎯 Features

* ⚔️ **RPG-style 2D Battles**
  Attack, Defend, and Ultimate moves driven by logic and correctness

* 🎮 **Gamified Score System**
  High-score tracking with LocalStorage persistence

* 📋 **Class System**

  * Frontend Swifts (Speed-focused)
  * Backend Brawlers (Power-focused)
  * Balanced Novices (Hybrid)

* 🚫 **Dynamic Boss Gauntlet**
  Face enemies like *Null Pointer Disciples* and *Legacy Grandmasters*

* 📊 **Adversary Analysis**
  Tracks correct vs. incorrect answers and generates accuracy reports

* 🔔 **Synthesized SFX**
  Real-time audio feedback using Web Audio API

* 🧠 **Technical Mastery Engine**
  Covers Programming, Web Development, and Core CS concepts

* 🔐 **Identity Verification**
  Session-based player selection system

---

## 📁 Project Structure

```
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
│   │   └── BattleLog.tsx    # Combat Data Tracker
│   │
│   ├── data/                # Content Storage
│   │   └── questions.ts     # Technical Trivia Pool
│   │
│   ├── hooks/               # Custom Hooks
│   │   └── useSound.ts      # Web Audio Synth Engine
│   │
│   ├── styles/              # Styling
│   │   └── index.css        # Tailwind Base Styles
│   │
│   ├── types.ts             # Global Type Definitions
│   ├── App.tsx              # Main Game Controller
│   └── main.tsx             # Entry Point
│
└── tsconfig.json
```

---

## 👥 Team Responsibilities

| Role           | Responsibility                               |
| -------------- | -------------------------------------------- |
| Battle Engine  | State management, turn logic, combat flow    |
| Content Design | Question creation & difficulty balancing     |
| Frontend / UX  | UI, responsiveness, HUD, score system        |
| VFX & Audio    | Animations (Framer Motion) & sound synthesis |

---

## ⚙️ Tech Stack

* **Frontend:** React 18, TypeScript, Tailwind CSS
* **Animations:** Framer Motion
* **Audio Engine:** Web Audio API
* **Build Tool:** Vite

---

## 🧠 Concept

> Most apps test your memory.
> **QuizQuest Arena tests your mastery under fire.**

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-repo/quizquest-arena.git
cd quizquest-arena
npm install
npm run dev
```

---

## 🎤 Demo Highlights

* Character Class Selection with unique stats
* Dynamic Arena Scaling based on boss difficulty
* Real-time synthesized combat feedback
* Post-battle performance analytics

---

## 📌 Future Improvements

* 🌐 Real-time Multiplayer Duels
* ☁️ Global Leaderboards (Firestore)
* 🛠️ Custom Question/Boss Editor
* 🧬 AI-based Adaptive Difficulty

---

## 🏁 Built for Hackathon

Crafted with speed, logic, and a passion for developer education. 🛡️

---
