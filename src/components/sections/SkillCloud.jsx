import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '../ui/Reveal.jsx'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { skills } from '../../data/skills.js'

export function SkillCloud({ t }) {
  const [active, setActive] = React.useState('AI / GenAI')
  const keys = Object.keys(skills)

  return (
    <section className="section skills-section" id="skills">
      <div id="toolkit" style={{ scrollMarginTop: '105px' }} />
      <div className="wrap">
        <Reveal>
          <SectionHeading index="03" eyebrow={t.skills.eyebrow} title={t.skills.heading} accent={t.skills.accent} copy={t.skills.copy} />
        </Reveal>
        <Reveal delay={0.08} className="skill-panel glass-card">
          <div className="skill-tabs" role="tablist" aria-label={t.skills.eyebrow}>
            {keys.map((key, i) => (
              <button
                role="tab"
                aria-selected={active === key}
                id={'skill-tab-' + i}
                aria-controls="skill-panel"
                className={active === key ? 'active' : ''}
                onClick={() => setActive(key)}
                key={key}
              >
                <span>0{i + 1}</span>
                {key}
                <ChevronDown size={12} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              id="skill-panel"
              role="tabpanel"
              aria-labelledby={'skill-tab-' + keys.indexOf(active)}
              key={active}
              className="skill-chips"
              initial={{ opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.22 }}
            >
              {skills[active].map((x, i) => (
                <motion.span
                  className={'skill-chip chip-' + (i % 3)}
                  key={x}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.045 }}
                >
                  {x}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="skill-panel-foot">
            <span>
              <i />
              {t.skills.prompt}
            </span>
            <span>{String(skills[active].length).padStart(2, '0')} SKILLS</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
