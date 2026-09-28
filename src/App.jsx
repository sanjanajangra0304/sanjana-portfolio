import React from 'react'
import { motion } from 'framer-motion'
import { content } from './data/content.js'
import { Ambient } from './components/layout/Ambient.jsx'
import { Header } from './components/layout/Header.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Hero } from './components/sections/Hero.jsx'
import { About } from './components/sections/About.jsx'
import { SkillCloud } from './components/sections/SkillCloud.jsx'
import { Projects } from './components/sections/Projects.jsx'
import { Journey } from './components/sections/Journey.jsx'
import { Contact } from './components/sections/Contact.jsx'
import { ChatWidget } from './components/ui/ChatWidget.jsx'
import './styles/style.css'
import './styles/enhancements.css'

export default function App() {
  const [lang, setLangState] = React.useState(() => {
    try {
      return localStorage.getItem('portfolio-language') === 'hi' ? 'hi' : 'en'
    } catch {
      return 'en'
    }
  })

  const t = content[lang] || content.en

  const setLang = value => {
    setLangState(value)
    try {
      localStorage.setItem('portfolio-language', value)
    } catch {}
  }

  React.useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.seo.title
    document.querySelector('#meta-description')?.setAttribute('content', t.seo.description)
    document.querySelector('#og-title')?.setAttribute('content', t.seo.title)
    document.querySelector('#og-description')?.setAttribute('content', t.seo.description)
    document.querySelector('#twitter-title')?.setAttribute('content', t.seo.title)
    document.querySelector('#twitter-description')?.setAttribute('content', t.seo.description)
  }, [lang, t])

  return (
    <>
      <Ambient />
      <Header lang={lang} setLang={setLang} t={t} />
      <motion.main key="visual" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.28 }}>
        <Hero t={t} lang={lang} />
        <About t={t} />
        <SkillCloud t={t} lang={lang} />
        <Projects t={t} lang={lang} />
        <Journey t={t} />
        <Contact t={t} />
      </motion.main>
      <Footer t={t} />
      <ChatWidget t={t} />
    </>
  )
}
