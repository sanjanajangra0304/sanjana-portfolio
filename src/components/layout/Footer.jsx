import React from 'react'
import { ArrowUpRight, AtSign, Code2, Link2 } from 'lucide-react'
import { socialLinks, externalProps as external } from '../../data/skills.js'

export function Footer({ t }) {
  return (
    <footer className="footer-v2 wrap">
      <div className="footer-top-row">
        <div className="footer-brand">
          <a className="footer-avatar-circle" href="#home" aria-label="Sanjana Jangra Home">
            <img src="/sanjana.jpg" alt="Sanjana Jangra" className="logo-img" />
          </a>
          <div className="footer-brand-text">
            <span className="footer-brand-name">Sanjana Jangra</span>
            <span className="footer-brand-role">{t.footer.role || 'Full-Stack Developer'} · {t.hero.location}</span>
          </div>
        </div>

        <div className="footer-actions">
          <div className="footer-social-pills">
            <a href={socialLinks.github} {...external} aria-label="GitHub">
              <Code2 size={14} /> GITHUB
            </a>
            <a href={socialLinks.linkedin} {...external} aria-label="LinkedIn">
              <Link2 size={14} /> LINKEDIN
            </a>
            <a href={`mailto:${socialLinks.email}`} aria-label="Email Sanjana Jangra">
              <AtSign size={14} /> EMAIL
            </a>
          </div>
          <a className="footer-top-btn" href="#home">
            {t.footer.top} <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      <div className="footer-sub-row">
        <span>© 2026 Sanjana Jangra. All rights reserved.</span>
        <span>Crafted with React & Tailwind</span>
      </div>
    </footer>
  )
}
