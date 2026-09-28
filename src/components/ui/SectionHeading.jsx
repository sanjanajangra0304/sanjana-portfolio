import React from 'react'

export function SectionHeading({ index, eyebrow, title, accent, copy }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span className="eyebrow-line" />
          {eyebrow}
          <span className="eyebrow-index">{index} — SANJANA JANGRA</span>
        </div>
        <h2>
          {title}
          <br />
          <span className="gradient-word">{accent}</span>
        </h2>
      </div>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}
