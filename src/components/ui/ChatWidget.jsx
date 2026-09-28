import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle, Minus, RotateCcw, Send, Sparkles, X } from 'lucide-react'

export function ChatWidget({ t }) {
  const [open, setOpen] = React.useState(false)
  const [messages, setMessages] = React.useState([])
  const [draft, setDraft] = React.useState('')
  const [typing, setTyping] = React.useState(false)
  const body = React.useRef(null)
  const inputRef = React.useRef(null)

  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [open])

  React.useEffect(() => {
    body.current?.scrollTo({ top: body.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  function answer(q) {
    const s = q.toLowerCase()
    if (/who|about|sanjana|intro|bio|परिचय|कौन/.test(s)) return t.chat.answers.bio
    if (/location|where|address|city|haryana|mahendergarh|रहती|कहाँ|स्थान|पता/.test(s)) return t.chat.answers.location
    if (/stack|skill|technolog|python|react|node|javascript|css|html|तकनी|कौशल|टूल/.test(s)) return t.chat.answers.stack
    if (/rag|pdf|langchain|pinecone|chatbot|दस्तावेज़|चैटबॉट/.test(s)) return t.chat.answers.rag
    if (/wanderlust|travel|mongodb|express|यात्रा/.test(s)) return t.chat.answers.wanderlust
    if (/priority|todo|task|उत्पादकता/.test(s)) return t.chat.answers.priority
    if (/weather|openweather|मौसम/.test(s)) return t.chat.answers.weather
    if (/project|work|build|made|प्रोजेक्ट|काम/.test(s)) return t.chat.answers.projects
    if (/cgpa|education|college|university|indus|btech|degree|school|पढ़ाई|शिक्षा|कॉलेज/.test(s)) return t.chat.answers.cgpa
    if (/opportun|hire|contact|email|job|linkedin|github|reach|संपर्क|ईमेल|नौकरी|अवसर/.test(s)) return t.chat.answers.opportunities
    return t.chat.fallback
  }

  function ask(q) {
    if (!q || !q.trim()) return
    const text = q.trim()
    setMessages(m => [...m, { from: 'you', text }])
    setDraft('')
    setTyping(true)
    setTimeout(() => {
      setMessages(m => [...m, { from: 'ai', text: answer(text) }])
      setTyping(false)
    }, 450)
  }

  const resetChat = () => {
    setMessages([])
    setDraft('')
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            className="chat-panel glass-card"
            aria-label={t.chat.title}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
          >
            <div className="chat-header">
              <div className="chat-avatar chat-avatar-img">
                <img src="/sanjana.jpg" alt="Sanjana AI Assistant" className="avatar-img-round" />
              </div>
              <div className="chat-head-label">
                <strong>
                  {t.chat.title} <Sparkles size={12} />
                </strong>
                <span>
                  <i />
                  {t.chat.online}
                </span>
              </div>
              {messages.length > 0 && (
                <button className="chat-close" onClick={resetChat} title="Reset chat" aria-label="Reset chat" style={{ marginRight: 6 }}>
                  <RotateCcw size={14} />
                </button>
              )}
              <button className="chat-close" onClick={() => setOpen(false)} aria-label={t.chat.close}>
                <Minus size={17} />
              </button>
            </div>

            <div ref={body} className="chat-body">
              <div className="ai-message">
                <span className="ai-mini-avatar ai-mini-img">
                  <img src="/sanjana.jpg" alt="Sanjana AI" className="avatar-img-round" />
                </span>
                <p>{t.chat.greeting}</p>
              </div>

              {messages.map((m, i) => (
                <div className={m.from === 'you' ? 'you-message' : 'ai-message'} key={i}>
                  {m.from === 'ai' && (
                    <span className="ai-mini-avatar ai-mini-img">
                      <img src="/sanjana.jpg" alt="Sanjana AI" className="avatar-img-round" />
                    </span>
                  )}
                  <p style={{ whiteSpace: 'pre-wrap' }}>{m.text}</p>
                </div>
              ))}

              {typing && (
                <div className="ai-message">
                  <span className="ai-mini-avatar ai-mini-img">
                    <img src="/sanjana.jpg" alt="Sanjana AI" className="avatar-img-round" />
                  </span>
                  <p className="typing">
                    <i />
                    <i />
                    <i />
                  </p>
                </div>
              )}
            </div>

            <div className="chat-suggestions">
              {t.chat.suggestions.slice(0, 3).map(q => (
                <button key={q} type="button" onClick={() => ask(q)}>
                  {q}
                  <ArrowUpRight size={11} />
                </button>
              ))}
            </div>

            <form
              className="chat-input"
              onSubmit={e => {
                e.preventDefault()
                ask(draft)
              }}
            >
              <input
                ref={inputRef}
                value={draft}
                onChange={e => setDraft(e.target.value)}
                placeholder={t.chat.placeholder}
                aria-label={t.chat.placeholder}
              />
              <button type="submit" aria-label={t.chat.send}>
                <Send size={15} />
              </button>
            </form>
            <div className="chat-disclaimer">{t.chat.disclaimer}</div>
          </motion.aside>
        )}
      </AnimatePresence>

      <button
        className={'chat-fab ' + (open ? 'chat-fab-open' : '')}
        onClick={() => setOpen(!open)}
        aria-label={open ? t.chat.close : t.chat.open}
        aria-expanded={open}
      >
        {open ? <X size={20} /> : <MessageCircle size={19} />}
        {!open && <span className="chat-fab-ping" />}
      </button>
    </>
  )
}
