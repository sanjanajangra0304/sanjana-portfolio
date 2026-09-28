# Sanjana Jangra — Developer Portfolio

A modern, highly performant, and responsive developer portfolio for **Sanjana Jangra** — Full-Stack Developer & Generative AI Builder based in Mahendergarh, Haryana, India.

Built with **React**, **Vite**, **Framer Motion**, and **Lucide Icons** following modular component architecture, high contrast dark editorial aesthetics, and glassmorphism UI design.

---

## 🌟 Key Features

- **Personalized Hero & Branding**: Features Sanjana's professional developer photograph integrated into a glowing glassmorphism pill frame and circular logo mark.
- **Interactive AI Twin Chatbot**: Real-time interactive AI Assistant widget (powered by custom knowledge intent answers) with Sanjana's photo avatar.
- **Verified Production Projects**:
  - 🤖 **AI PDF Chatbot**: Generative AI / RAG document Q&A platform (LangChain, Pinecone, Hugging Face).
  - 🌍 **WanderLust**: Full-stack travel marketplace (Node.js, Express, MongoDB, EJS, Passport.js).
  - 📋 **Priority Hub**: Modern React task & priority management application.
  - 🌤️ **Quick Check Weather**: Live API weather dashboard (OpenWeather API).
- **Bilingual Support (EN / HI)**: One-click English & Hindi language switcher with `localStorage` state persistence.
- **Interactive Contact Form**: Direct glassmorphism contact form harmonized in lavender (`#d1c0ef`) and mint (`#b7ecd7`) palette.
- **Uncluttered 2-Tier Footer**: Structured brand summary, social action pills, and smooth back-to-top scroll.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, Framer Motion, Lucide React Icons
- **Styling**: Modern CSS3, Custom Properties, Glassmorphism, CSS Grid & Flexbox
- **State & Routing**: React Hooks (`useState`, `useEffect`, `useRef`), Framer Motion `AnimatePresence`
- **SEO & Performance**: OpenGraph Metadata, Sitemap.xml, Preloaded Fonts, UTF-8 clean

---

## 📁 Repository Architecture

```text
Portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sanjana.jpg
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Ambient.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── SkillCloud.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Journey.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── ChatWidget.jsx
│   │       ├── Reveal.jsx
│   │       └── SectionHeading.jsx
│   ├── data/
│   │   ├── content.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── styles/
│   │   ├── style.css
│   │   └── enhancements.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── DEPLOYMENT.md
├── index.html
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sanjanajangra0304/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup (Optional)**:
   ```bash
   cp .env.example .env
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Deploying to Vercel

1. Push code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Architect production portfolio codebase"
   git push origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new) -> **Import Repository**.
3. Select **Vite** preset.
4. Set Build Command: `npm run build` & Output Directory: `dist`.
5. Click **Deploy**.

---

## 📜 License & Copyright

© 2026 **Sanjana Jangra**. All rights reserved.
