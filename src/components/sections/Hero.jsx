import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Code2, Link2, MapPin, Sparkles } from 'lucide-react'
import { socialLinks, externalProps as external } from '../../data/skills.js'

export function Hero({ t }) {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          {t.hero.eyebrow}
          <span className="eyebrow-index">01 — INTRODUCTION</span>
        </div>
        <h1>
          {t.hero.headline1}
          <br />
          {t.hero.headline2} <span className="gradient-word">{t.hero.headline3}</span>
          <br />
          <span className="outline-word">{t.hero.headline4}</span>
        </h1>
        <p className="hero-description">
          {t.hero.role} <span className="dot-sep">·</span> {t.hero.specialty}
        </p>

        <div className="hero-bottom">
          <a className="button-primary" href="#work">
            {t.hero.explore} <ArrowDownRight size={16} />
          </a>
          <a className="hero-contact-link" href={`mailto:${socialLinks.email}`}>
            {t.hero.contact} <ArrowUpRight size={13} />
          </a>
          <span className="hero-location">
            <MapPin size={14} />
            {t.hero.location}
          </span>
        </div>

        <div className="hero-social">
          <a href={socialLinks.linkedin} {...external} aria-label="Sanjana Jangra on LinkedIn">
            <Link2 size={14} /> LINKEDIN <ArrowUpRight size={11} />
          </a>
          <a href={socialLinks.github} {...external} aria-label="Sanjana Jangra on GitHub">
            <Code2 size={14} /> GITHUB <ArrowUpRight size={11} />
          </a>
          <span className="social-divider" />
          <span className="open-status">
            <i />
            {t.hero.status}
          </span>
        </div>
      </div>

      <motion.div
        className="hero-art"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="portrait-orbit orbit-one" />
        <div className="portrait-orbit orbit-two" />
        <div className="portrait-frame">
          <img
            src="/sanjana.jpg"
            alt="Portrait of Sanjana Jangra, Full-Stack Developer"
            loading="eager"
            fetchPriority="high"
            className="hero-portrait-img"
            onError={e => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.parentElement.classList.add('portrait-fallback')
            }}
          />
          <div className="portrait-gloss" />
        </div>

        <div className="float-card float-hello">
          <span className="sparkle-icon">
            <Sparkles size={15} />
          </span>
          <span>
            curious by nature
            <small>builder by choice</small>
          </span>
        </div>

        <div className="float-card float-code">
          <span className="code-dot" />
          <span>
            crafting with care
            <small>MongoDB · Express · React · Node.js</small>
          </span>
        </div>

        <div className="art-caption">
          <span>FIG. 01</span>
          <i /> CREATIVITY IN MOTION
        </div>
        <div className="art-vertical">A LITTLE BIT OF LOGIC, A LOT OF HEART</div>
      </motion.div>

      <div className="hero-coordinate">28°16′ N &nbsp; 76°08′ E</div>
      <a className="scroll-cue" href="#about">
        <span>SCROLL TO DISCOVER</span>
        <ArrowDown size={13} />
      </a>
    </section>
  )
}
