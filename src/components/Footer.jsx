import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" data-reveal>
      <div className="footer-left">
        <span className="footer-brand">VocabTrack</span>
      </div>
      <div className="footer-right">
        <a href="https://www.instagram.com/vocabtrack" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="/feedback">Feedback</a>
        <a href="/impressum.pdf" target="_blank" rel="noopener noreferrer">Impressum</a>
        <a href="/datenschutzerklaerung.pdf" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>
      </div>
    </footer>
  )
}
