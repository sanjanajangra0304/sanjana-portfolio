import React from 'react'
import { ArrowUpRight, AtSign, Check, Code2, Copy, Link2, Send } from 'lucide-react'
import { Reveal } from '../ui/Reveal.jsx'
import { socialLinks, externalProps as external } from '../../data/skills.js'

export function Contact({ t }) {
  const [copied, setCopied] = React.useState(false)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    const mailtoUrl = `mailto:${socialLinks.email}?subject=${encodeURIComponent('Portfolio Contact: ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`
    window.location.href = mailtoUrl
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section wrap">
      <Reveal>
        <div className="contact-panel glass-card">
          <div className="contact-orb" />
          <div className="eyebrow">
            <span className="eyebrow-line" />
            {t.contact.eyebrow}
          </div>
          <h2>
            {t.contact.headline1}
            <br />
            {t.contact.headline2} <span className="gradient-word">{t.contact.accent}</span>
          </h2>
          <p>{t.contact.copy}</p>

          <div className="contact-grid">
            <form className="contact-form-box" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">{t.contact.nameLabel}</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder={t.contact.namePlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">{t.contact.emailLabel}</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">{t.contact.messageLabel}</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              {submitted ? (
                <div className="form-success">
                  <Check size={18} />
                  <span>{t.contact.sentMessage}</span>
                </div>
              ) : (
                <button type="submit" className="button-primary submit-contact-btn">
                  {t.contact.send} <Send size={15} />
                </button>
              )}
            </form>

            <div className="contact-sidebar">
              <div className="contact-actions">
                <a className="button-primary" href={`mailto:${socialLinks.email}`}>
                  {t.contact.email} <AtSign size={15} />
                </a>
                <button className="contact-social" onClick={copyEmail} type="button" style={{ border: 0, background: 'none', cursor: 'pointer' }}>
                  {copied ? <Check size={14} style={{ color: '#b7ecd7' }} /> : <Copy size={14} />}
                  {copied ? t.contact.emailCopied : t.contact.copyEmail}
                </button>
                <a className="contact-social" href={socialLinks.linkedin} {...external}>
                  <Link2 size={14} />
                  {t.contact.linkedin}
                  <ArrowUpRight size={12} />
                </a>
                <a className="contact-social" href={socialLinks.github} {...external}>
                  <Code2 size={14} />
                  {t.contact.github}
                  <ArrowUpRight size={12} />
                </a>
              </div>

              <div className="contact-stamp">
                <span>SJ</span>
                <small>
                  AVAILABLE
                  <br />
                  FOR WHAT’S NEXT
                </small>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
