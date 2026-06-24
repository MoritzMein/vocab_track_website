import { Link } from 'react-router-dom'
import './VokabelTestTeaser.css'

export default function VokabelTestTeaser() {
  return (
    <section className="vtt" data-reveal>
      <div className="vtt-inner">
        <span className="vtt-eyebrow">Vokabeltest</span>
        <h2 className="vtt-heading">
          Manchmal braucht<br />es doch einen Test.
        </h2>
        <p className="vtt-sub">
          Erstellt in Sekunden, gestartet per Code, sofort korrigiert — ohne einen einzigen Zettel.
        </p>
        <Link to="/vokabeltest" className="vtt-btn">
          Mehr erfahren
          <ChevronIcon />
        </Link>
      </div>
    </section>
  )
}

function ChevronIcon() {
  return (
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
      <path d="M1 1.5L7.5 7.5L1 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
