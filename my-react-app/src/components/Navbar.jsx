import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import RecruiterPanel from './RecruiterPanel'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [recruiterOpen, setRecruiterOpen] = useState(false)

  return (
    <nav className={`nav ${open ? 'open' : ''}`}>
      <div className="nav-inner">
        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        <img src="/logo.png" alt="logo" className="nav-logo" />
        <div className="brand">Arghya</div>
        <button
          aria-pressed={recruiterOpen}
          onClick={() => setRecruiterOpen(true)}
          style={{
            marginLeft: 8,
            padding: '6px 10px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.06)',
            background: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            fontSize: 13,
          }}
        >
          Recruiter
        </button>
        </div>

        <div className="nav-links">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button aria-label="menu" className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen((o) => !o)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
      <RecruiterPanel open={recruiterOpen} onClose={() => setRecruiterOpen(false)} />
    </nav>
  )
}
