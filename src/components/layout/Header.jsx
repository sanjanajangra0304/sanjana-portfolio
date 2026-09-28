import React from 'react'
import { Menu, X } from 'lucide-react'

export function Header({ lang, setLang, t }) {
  const [menu, setMenu] = React.useState(false)

  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') setMenu(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setMenu(false)

  return (
    <header className="nav wrap">
      <a className="wordmark" href="#home" aria-label="Sanjana Jangra home" onClick={close}>
        <span className="logo-mark logo-avatar">
          <img src="/sanjana.jpg" alt="Sanjana Jangra logo mark" className="logo-img" />
        </span>
        <span className="wordmark-name">
          Sanjana Jangra
          <small>DEVELOPER PORTFOLIO · 2026</small>
        </span>
      </a>

      <nav className={menu ? 'navlinks nav-open' : 'navlinks'} aria-label={t.nav.landmark}>
        <a href="#home" onClick={close}>{t.nav.home}</a>
        <a href="#work" onClick={close}>{t.nav.work}<span>04</span></a>
        <a href="#about" onClick={close}>{t.nav.about}</a>
        <a href="#skills" onClick={close}>{t.nav.skills}</a>
        <a href="#journey" onClick={close}>{t.nav.journey}</a>
        <a href="#contact" onClick={close}>{t.nav.contact}</a>
      </nav>

      <div className="nav-actions">
        <div className="language-switch" role="group" aria-label={t.nav.language}>
          <button className={lang === 'en' ? 'selected' : ''} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
            EN
          </button>
          <span aria-hidden="true">/</span>
          <button className={lang === 'hi' ? 'selected' : ''} aria-pressed={lang === 'hi'} onClick={() => setLang('hi')}>
            {t.nav.hiLabel}
          </button>
        </div>

        <button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label={t.nav.menu} aria-expanded={menu}>
          {menu ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  )
}
