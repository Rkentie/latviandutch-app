# 🇱🇻 ↔ 🇳🇱 Latvian-Dutch Language Learning App

A beautiful, interactive language learning application for mastering Latvian and Dutch vocabulary. Practice translations, track your progress, and compete on the leaderboard!

## ✨ Features

- **Bidirectional Learning**: Learn Latvian → Dutch or Dutch → Latvian
- **Flexible Lesson Lengths**: Choose from Quick (5 words) to Marathon (180 words)
- **Instant Feedback**: Get real-time feedback on your translations with spelling tolerance
- **Multi-language Interface**: Switch between English, Dutch, and Latvian UI
- **Leaderboard**: Complete Marathon mode to join the Hall of Fame
- **Progress Tracking**: View detailed round summaries with accuracy statistics
- **Interactive Tutorial**: First-time user walkthrough
- **Responsive Design**: Works beautifully on desktop and mobile

## 🚀 Live Demo

**Try it now:** [https://latviandutch-app.vercel.app/]

## 🛠️ Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Lucide React** - Beautiful icons
- **CSS Modules** - Styling
- **Vercel** - Deployment platform

## 📦 Installation

**Prerequisites:** Node.js 16 or higher

1. Clone the repository:
   ```bash
   git clone https://github.com/Rkentie/latviandutch-app.git
   cd latviandutch-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 How to Use

1. **Select Your Direction**: Choose whether you want to learn Latvian or Dutch
2. **Choose Lesson Length**: Slide to select 5, 15, 30, 60, or 180 words
3. **Start Learning**: Click on your preferred language card to begin
4. **Translate**: Type your translation and get instant feedback
5. **Complete Marathon**: Finish 180 words to save your score on the leaderboard!

## 🎯 Game Modes

- **Quick** (5 words) - Perfect for a quick practice session
- **Short** (15 words) - Short but effective learning
- **Medium** (30 words) - Standard practice session
- **Long** (60 words) - Deep dive into vocabulary
- **Marathon** (180 words) - Ultimate challenge with leaderboard entry

## 🏆 Scoring System

- **Perfect Answer (First Try)**: 10 points
- **Correct (Second Try)**: 5 points
- **Spelling Close Enough**: Full points with gentle reminder
- **Missed**: 0 points

## 📂 Project Structure

```
latviandutch-app/
├── components/          # React components
│   ├── Controls.tsx
│   ├── FeedbackDisplay.tsx
│   ├── Header.tsx
│   ├── VocabularyCard.tsx
│   └── ...
├── hooks/              # Custom React hooks
│   └── useGameLogic.ts
├── services/           # Business logic and data
│   ├── vocabularyService.ts
│   ├── leaderboardService.ts
│   └── translations.ts
├── utils/              # Utility functions
│   └── stringUtils.ts
├── types.ts            # TypeScript type definitions
└── App.tsx             # Main app component
```

## 🌐 Deployment

This app is deployed on Vercel. To deploy your own instance:

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Rkentie/latviandutch-app/issues).

## 📝 License

This project is open source and available under the MIT License.

## ❤️ About

Made with ❤️ for my ❤️ by Rogier Kentie

---

**Enjoy learning! 🎓**
