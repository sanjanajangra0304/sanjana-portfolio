import React from 'react'
import { ArrowRight, ArrowUpRight, Check, Code2, Globe2, MapPin, Sparkles } from 'lucide-react'
import { Reveal } from '../ui/Reveal.jsx'
import { SectionHeading } from '../ui/SectionHeading.jsx'
import { projects } from '../../data/projects.js'
import { filtersCanonical, externalProps as external } from '../../data/skills.js'

function ProjectArt({ kind }) {
  if (kind === 'rag') {
    return (
      <div className="project-visual rag-visual">
        <div className="rag-glow" />
        <div className="rag-window">
          <div className="window-top">
            <span />
            <span />
            <span />
            <i />
            KNOWLEDGE BASE / INGESTION
          </div>
          <div className="rag-file">
            <span className="file-icon">PDF</span>
            <span>
              document-knowledge.pdf
              <small>24 pages / indexed</small>
            </span>
            <Check size={13} />
          </div>
          <div className="rag-line">
            Contextual document question answering
            <span />
          </div>
          <div className="rag-prompt">
            <span>Ask questions based on uploaded knowledge</span>
            <ArrowUpRight size={12} />
          </div>
          <div className="rag-answer">
            <i />
            <span>Answers grounded in document context.</span>
          </div>
        </div>
        <div className="art-floating-tag">
          <span>✦</span> GROUNDED ANSWERS
        </div>
      </div>
    )
  }

  if (kind === 'travel') {
    return (
      <div className="project-visual travel-visual">
        <div className="travel-sun" />
        <div className="travel-hill hill-a" />
        <div className="travel-hill hill-b" />
        <div className="travel-hill hill-c" />
        <span className="travel-label">
          <MapPin size={12} /> TRAVEL MARKETPLACE
        </span>
        <div className="travel-window">
          <span className="travel-window-title">Find and list stays.</span>
          <div className="travel-search">
            <span>Where to?</span>
            <span className="search-circle">
              <ArrowRight size={12} />
            </span>
          </div>
          <div className="travel-window-meta">
            DISCOVER & LIST STAYS <ArrowUpRight size={10} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={'project-visual simple-visual ' + kind + '-visual'}>
      <div className="simple-window">
        <span className="simple-icon">{kind === 'weather' ? 'WEATHER' : 'PRODUCTIVITY'}</span>
        <strong>{kind === 'weather' ? 'LIVE WEATHER SEARCH' : 'TASK & PRIORITY MANAGEMENT'}</strong>
        <div className="simple-bars">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ p, t, index, lang }) {
  return (
    <Reveal delay={(index % 3) * 0.055}>
      <article className={'project-card glass-card ' + p.visual}>
        <ProjectArt kind={p.visual} />
        <div className="project-info">
          <div className="project-meta">
            <span>{(lang === 'hi' ? p.hiCategory : p.category).toUpperCase()}</span>
            <span className={'project-status ' + (p.status === 'LIVE' ? 'project-status-live' : '')}>
              {p.status === 'LIVE' && <i />}
              {p.status === 'LIVE' ? t.projects.liveStatus : t.projects.projectStatus}
            </span>
          </div>
          <h3>{p.title}</h3>
          <p className="project-subtitle">{lang === 'hi' ? p.hiShort : p.shortDescription}</p>
          <p className="project-desc">{lang === 'hi' ? p.hiDetail : p.detailedDescription}</p>
          {p.features?.length > 0 && (
            <p className="project-highlight">
              <span>{t.projects.highlights}</span> {p.features.slice(0, 3).join(' / ')}
            </p>
          )}
          <div className="project-tags">
            {p.technologies.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="project-links">
            {p.liveUrl && (
              <a href={p.liveUrl} {...external} aria-label={`${t.projects.live}: ${p.title}`}>
                <Globe2 size={14} />
                {t.projects.live}
                <ArrowUpRight size={12} />
              </a>
            )}
            {p.githubUrl && (
              <a href={p.githubUrl} {...external} aria-label={`${t.projects.source}: ${p.title}`}>
                <Code2 size={14} />
                {t.projects.source}
                <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function Projects({ t, lang }) {
  const [filter, setFilter] = React.useState('All')
  const filtered = projects.filter(p => filter === 'All' || p.groups.includes(filter))
  const featured = filtered.filter(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <section id="work" className="section wrap projects-section">
      <div id="projects" style={{ scrollMarginTop: '105px' }} />
      <Reveal>
        <SectionHeading index="04" eyebrow={t.projects.eyebrow} title={t.projects.heading} accent={t.projects.accent} copy={t.projects.copy} />
      </Reveal>

      <div className="project-filter" role="group" aria-label={t.projects.filterLabel}>
        {filtersCanonical.map((f, i) => (
          <button key={f} className={filter === f ? 'active' : ''} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {t.projects.filters[i]}
          </button>
        ))}
      </div>

      {filtered.length === 0 && <p className="empty-projects">{t.projects.empty}</p>}

      {featured.length > 0 && (
        <>
          <div className="project-group-label">
            <span>{t.projects.featured}</span>
            <i />
          </div>
          <div className="project-list">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} p={p} t={t} lang={lang} index={i} />
            ))}
          </div>
        </>
      )}

      {rest.length > 0 && (
        <>
          <div className="project-group-label">
            <span>{filter === 'All' ? t.projects.all : filter}</span>
            <i />
          </div>
          <div className="project-list project-grid">
            {rest.map((p, i) => (
              <ProjectCard key={p.id} p={p} t={t} lang={lang} index={i + featured.length} />
            ))}
          </div>
        </>
      )}

      <div className="projects-foot">
        <span>04 PROJECTS & EXPERIMENTS</span>
        <span>
          MADE WITH CURIOSITY <Sparkles size={12} />
        </span>
      </div>
    </section>
  )
}
