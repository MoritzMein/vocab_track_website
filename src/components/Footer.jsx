import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-brand">
        VocabTrack
      </Link>
      <nav className="footer-links" aria-label="Rechtliches und Kontakt">
        <Link to="/feedback">Feedback</Link>
        <a href="/impressum.pdf" target="_blank" rel="noopener noreferrer">Impressum</a>
        <a href="/datenschutzerklaerung.pdf" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>
      </nav>
    </footer>
  )
}
