import React from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Reveal } from '../ui/Reveal.jsx'
import { SectionHeading } from '../ui/SectionHeading.jsx'

export function About({ t }) {
  return (
    <section id="about" className="section wrap about-section">
      <Reveal>
        <SectionHeading index="02" eyebrow={t.about.eyebrow} title={t.about.heading} accent={t.about.accent} copy={t.about.copy} />
      </Reveal>
      <Reveal delay={0.08} className="about-grid">
        <article className="about-note glass-card">
          <span className="card-kicker">
            {t.about.note}
            <ArrowUpRight size={13} />
          </span>
          <p>
            {t.about.quote1} <span className="text-lavender">{t.about.quote2}</span> <span className="text-mint">{t.about.quote3}</span>{' '}
            {t.about.quote4} {t.about.quote5}
          </p>
          <div className="about-foot">
            <span>COMPUTER SCIENCE · PRODUCT BUILDING</span>
            <Sparkles size={15} />
          </div>
        </article>

        <article className="stat-card glass-card">
          <span className="stat-label">PROJECTS & EXPERIMENTS</span>
          <strong>04</strong>
          <span className="stat-caption">{t.about.stat}</span>
          <div className="stat-decoration">
            {Array.from({ length: 15 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
        </article>

        <article className="focus-card glass-card">
          <span className="card-kicker">
            {t.about.current}
            <span className="tiny-cross">✳</span>
          </span>
          <div className="focus-item">
            <span className="focus-num">01</span>
            <span>
              {t.about.focus1}
              <small>{t.about.focus1sub}</small>
            </span>
            <ArrowUpRight size={15} />
          </div>
          <div className="focus-item">
            <span className="focus-num">02</span>
            <span>
              {t.about.focus2}
              <small>{t.about.focus2sub}</small>
            </span>
            <ArrowUpRight size={15} />
          </div>
        </article>
      </Reveal>
    </section>
  )
}
