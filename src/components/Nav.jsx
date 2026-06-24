import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="nav-brand-link" onClick={() => setOpen(false)}>
          <div className="nav-icon">V</div>
          <span className="nav-brand">VocabTrack</span>
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/schulen" className="nav-link">
          Für Schulen
        </Link>
        <a
          href="https://apps.apple.com/de/app/vocab-track/id6753958684"
          className="nav-appstore"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AppleIcon />
          App Store
        </a>
        <button
          className={`nav-hamburger${open ? ' nav-hamburger--open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menü öffnen"
        >
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      <div className={`nav-mobile-menu${open ? ' nav-mobile-menu--open' : ''}`}>
        <Link to="/schulen" className="nav-mobile-link" onClick={() => setOpen(false)}>
          Für Schulen
        </Link>
        <a
          href="https://apps.apple.com/de/app/vocab-track/id6753958684"
          className="nav-mobile-appstore"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <AppleIcon />
          Im App Store laden
        </a>
      </div>
    </nav>
  )
}

function HamburgerIcon() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
      <rect y="0" width="20" height="2" rx="1" fill="currentColor"/>
      <rect y="6" width="20" height="2" rx="1" fill="currentColor"/>
      <rect y="12" width="20" height="2" rx="1" fill="currentColor"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.2-150.3-99.7C27.2 736.4 1 656.8 1 577.4C1 384.5 127.4 282.7 252.3 282.7c61.6 0 112.7 40.5 151.6 40.5 37.2 0 95.7-42.7 165.1-42.7 26.5 0 108.2 2.6 168.1 80.4zm-240-166.1c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  )
}
