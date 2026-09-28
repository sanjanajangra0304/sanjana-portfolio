import React from 'react'
import { ArrowRight, Check, GraduationCap } from 'lucide-react'
import { Reveal } from '../ui/Reveal.jsx'
import { SectionHeading } from '../ui/SectionHeading.jsx'

export function Journey({ t }) {
  const icons = [<GraduationCap size={15} key={0} />, <Check size={15} key={1} />, <Check size={15} key={2} />]
  return (
    <section className="section journey-section" id="journey">
      <div className="wrap">
        <Reveal>
          <SectionHeading index="05" eyebrow={t.journey.eyebrow} title={t.journey.heading} accent={t.journey.accent} copy={t.journey.copy} />
        </Reveal>
        <div className="timeline">
          {t.journey.items.map((x, i) => (
            <Reveal key={x.title} delay={i * 0.055}>
              <article className="timeline-item">
                <div className="timeline-icon">{icons[i]}</div>
                <div className="timeline-date">{x.date}</div>
                <div className="timeline-content glass-card">
                  <span className="timeline-type">{x.type}</span>
                  <h3>{x.title}</h3>
                  <p className="timeline-place">{x.place}</p>
                  <p className="timeline-detail">{x.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="education-note">
          <span>{t.journey.inProgress}</span>
          <span className="note-stroke" />
          <span>
            {t.journey.next} <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </section>
  )
}
