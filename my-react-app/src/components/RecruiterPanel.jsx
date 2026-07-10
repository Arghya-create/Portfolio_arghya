import React, { useEffect, useLayoutEffect, useState } from 'react'
import PROJECTS from '../constants/projects'

export default function RecruiterPanel({ open, onClose }) {
  const panelRef = React.useRef(null)
  const [offsets, setOffsets] = useState({ top: 64, bottom: 0 })

  useLayoutEffect(() => {
    function computeOffsets() {
      const nav = document.querySelector('.nav')
      const footer = document.querySelector('.site-footer')
      const top = nav ? Math.ceil(nav.getBoundingClientRect().bottom) : 64
      const bottom = footer ? Math.ceil(window.innerHeight - footer.getBoundingClientRect().top) : 0
      setOffsets({ top, bottom })
    }

    computeOffsets()
    window.addEventListener('resize', computeOffsets)
    return () => window.removeEventListener('resize', computeOffsets)
  }, [])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      window.addEventListener('keydown', onKey)
      // focus first focusable element in panel for accessibility
      setTimeout(() => {
        const el = panelRef.current && panelRef.current.querySelector('a,button')
        if (el) el.focus()
      }, 50)
    }
    return () => {
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  const topProjects = PROJECTS.slice(0, 3)

  const mailSubject = encodeURIComponent('Opportunity — Quick chat')
  const mailBody = encodeURIComponent(
    `Hi Arghya,%0D%0A%0D%0AI'm a recruiter/manager interested in your profile. Could we schedule a 15-minute call to discuss a role?%0D%0A%0D%0ABest regards,`
  )

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{ position: 'fixed', right: 0, zIndex: 1200 }}
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: offsets.top,
          right: 0,
          bottom: offsets.bottom,
          width: 380,
          maxWidth: '100%',
          minHeight: '49.5em',
          background: 'linear-gradient(180deg, #101010, #0f1724)',
          color: 'white',
          padding: 20,
          boxShadow: '-24px 0 40px rgba(2,6,23,0.6)',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <h3 style={{ margin: 0 }}>Recruiter View</h3>
            <div style={{ color: 'var(--muted)', fontSize: 13 }}>Condensed CV & quick actions</div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close recruiter panel"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: 20,
              cursor: 'pointer',
            }}
          >
            ×
          </button>
        </div>

        <section style={{ marginTop: 18 }}>
          <h4 style={{ margin: '6px 0' }}>Arghya Dasgupta</h4>
          <div style={{ color: 'var(--muted)', fontSize: 13 }}>
            Front-end Engineer · Team Lead · AI Lead
          </div>

          <ul style={{ paddingLeft: 16, marginTop: 12, color: 'var(--muted)' }}>
            <li>Master of Technology, Software Engineering — BITS Pilani</li>
            <li>10+ years building web products (teams up to ~10)</li>
            <li>Specialist: Angular, React, TypeScript, AI-assisted workflows</li>
          </ul>

          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <a
              href={`mailto:invinciblearghya@gmail.com?subject=${mailSubject}&body=${mailBody}`}
              style={{
                padding: '8px 10px',
                borderRadius: 8,
                background: '#0b84ff',
                color: 'white',
                textDecoration: 'none',
                fontSize: 14,
              }}
            >
              Email template
            </a>

            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '8px 10px',
                borderRadius: 8,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.06)',
                color: 'white',
                textDecoration: 'none',
                fontSize: 14,
              }}
            >
              Schedule call
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '8px 10px',
                borderRadius: 8,
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.06)',
                color: 'white',
                textDecoration: 'none',
                fontSize: 14,
              }}
            >
              Download resume
            </a>
          </div>
        </section>

        <section style={{ marginTop: 20 }}>
          <h4 style={{ marginBottom: 8 }}>Top projects</h4>
          <div style={{ display: 'grid', gap: 10 }}>
            {topProjects.map((p, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <div style={{ fontWeight: 600 }}>{p.title}</div>
                <div style={{ color: 'var(--muted)', fontSize: 13 }}>{p.duration}</div>
                <div style={{ marginTop: 6, color: 'var(--muted)', fontSize: 13 }}>
                  {p.about && p.about.substring(0, 120)}{p.about && p.about.length > 120 ? '…' : ''}
                </div>
                <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: 13, color: '#9cccff' }}
                    >
                      Repo
                    </a>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: 13, color: '#9cccff' }}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer style={{ marginTop: 20, color: 'var(--muted)', fontSize: 13 }}>
          <div>Tip: use the email template to quickly send a role brief.</div>
        </footer>
      </div>
    </div>
  )
}
