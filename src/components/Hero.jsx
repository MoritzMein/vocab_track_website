import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" data-reveal>
      <div className="hero-inner">
        <div className="hero-text">
          <h1>
            Wer hat eigentlich<br />
            <span className="highlight">gelernt?</span>
          </h1>
          <p className="hero-sub">
            VocabTrack gibt Lehrern Einblick in den Lernstand von jedem Schüler — und Schülern einen echten Grund zu lernen.
          </p>
          <div className="hero-cta">
            <a
              href="https://apps.apple.com/de/app/vocab-track/id6753958684"
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppleIcon />
              Im App Store laden
            </a>
            <span className="hero-platforms">iOS & Android · Kostenlos für Lehrer</span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/iphone-mockup.png"
            alt="VocabTrack App"
            className="hero-screenshot"
          />
        </div>
      </div>
    </section>
  )
}

function AppleIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.2-150.3-99.7C27.2 736.4 1 656.8 1 577.4C1 384.5 127.4 282.7 252.3 282.7c61.6 0 112.7 40.5 151.6 40.5 37.2 0 95.7-42.7 165.1-42.7 26.5 0 108.2 2.6 168.1 80.4zm-240-166.1c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  )
}
