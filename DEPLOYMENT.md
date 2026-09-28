# Sanjana Jangra Portfolio — Deployment Guide

This portfolio is built with React.js, Vite, Framer Motion, and Tailwind/Custom CSS. It is production-ready for deployment on **Vercel** and **GitHub Pages**.

---

## 🚀 Deployment Instructions

### 1. Vercel Deployment (Recommended)

#### Option A: Deploy via Vercel Web Dashboard
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Production ready portfolio update"
   git branch -M main
   git remote add origin https://github.com/sanjanajangra0304/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New** → **Project**.
4. Import your GitHub repository (`portfolio`).
5. Vercel will automatically detect **Vite** settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. *(Optional)* Add Environment Variables under **Settings → Environment Variables**:
   - `VITE_POWERBI_EMBED_URL` (if an interactive Power BI public embed URL is available).
7. Click **Deploy**.

#### Option B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

---

## 🛠 Local Commands

- **Development server**: `npm run dev`
- **Production build**: `npm run build`
- **Preview production build**: `npm run preview`

---

## 🔒 Security & Best Practices

- `vercel.json` rewrite configured to route all traffic to `index.html` preventing 404s on deep links.
- External links use `target="_blank" rel="noopener noreferrer"`.
- Persistent language choice (`EN` | `हिंदी`) stored in `localStorage`.
