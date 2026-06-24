import { useEffect } from 'react'
import './VokabelTest.css'

const OLD_PAIN = [
  'Vokabeln mühsam heraussuchen und zusammenstellen',
  'Test formatieren, ausdrucken, verteilen',
  'Stapel von Korrekturen — Abend für Abend',
]

export default function VokabelTest() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="vt">

      {/* ── Hero ── */}
      <section className="vt-hero">
        <div className="vt-hero-inner">
          <span className="vt-eyebrow">Für Lehrer</span>
          <h1 className="vt-hero-heading">Der Vokabeltest.<br />Neu gedacht.</h1>
          <p className="vt-hero-sub">
            Erstellt in Sekunden, gestartet per Code, korrigiert in Echtzeit — ohne einen einzigen Zettel.
          </p>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="vt-problem">
        <div className="vt-problem-inner">
          <p className="vt-problem-eyebrow">Früher</p>
          <h2 className="vt-problem-heading">Ein Vokabeltest bedeutete Arbeit.</h2>
          <p className="vt-problem-sub">
            Manchmal braucht man trotzdem einen klassischen Test — um zu prüfen ob Schüler wirklich gelernt haben oder wie breit ihr Vokabular mittlerweile aufgestellt ist. Aber der Aufwand dahinter war immer derselbe.
          </p>
          <ul className="vt-pain-list">
            {OLD_PAIN.map((p, i) => (
              <li key={i} className="vt-pain-item">
                <span className="vt-pain-cross">✕</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Test erstellen ── */}
      <section className="vt-section vt-section--white">
        <div className="vt-create-inner">
          <span className="vt-label vt-label--orange">Test erstellen</span>
          <h2 className="vt-section-heading">Manuell oder per KI.<br />In Sekunden fertig.</h2>
          <p className="vt-section-desc">
            Wähle Vokabeln aus vergangenen Lektionen selbst aus — oder lass die KI in einem Schritt einen vollständigen Test generieren.
          </p>
          <div className="vt-create-grid">
            <div className="vt-create-card">
              <div className="vt-create-phone">
                <div className="vt-phone-frame">
                  <div className="vt-phone-island" />
                  <img src="/Manuell.png" alt="Manuell Test erstellen" className="vt-phone-screen" />
                </div>
              </div>
              <div className="vt-create-text">
                <h3 className="vt-create-title">Manuell</h3>
                <p className="vt-create-desc">Vokabeln aus vergangenen Lektionen gezielt auswählen und zu einem Test zusammenstellen.</p>
              </div>
            </div>
            <div className="vt-create-card">
              <div className="vt-create-phone">
                <div className="vt-phone-frame">
                  <div className="vt-phone-island" />
                  <img src="/Ki.png" alt="KI Test erstellen" className="vt-phone-screen" />
                </div>
              </div>
              <div className="vt-create-text">
                <h3 className="vt-create-title">Mit KI</h3>
                <p className="vt-create-desc">Die KI generiert automatisch einen ausgewogenen Test aus dem gesamten Vokabular der Klasse.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Code & Beitreten ── */}
      <section className="vt-section vt-section--gray">
        <div className="vt-split">
          <div className="vt-split-text">
            <span className="vt-label vt-label--blue">Teststart</span>
            <h2 className="vt-section-heading">Code ans Whiteboard.<br />Jeder tritt bei.</h2>
            <p className="vt-section-desc">
              Mit einem Tippen erzeugst du einen Beitrittscode — einfach ans Whiteboard werfen. Schüler treten über ihr Handy oder iPad bei.
            </p>
            <ul className="vt-bullets">
              <li>Wer ist bereits drin — und wer fehlt noch</li>
              <li>Kein Raten: du siehst die vollständige Anwesenheitsliste</li>
              <li>Test startet erst wenn du es sagst</li>
            </ul>
          </div>
          <div className="vt-split-visual">
            <div className="vt-feature-card">
              <div className="vt-feature-card-label vt-label--green">Anwesend · 18</div>
              <div className="vt-student-list">
                {['Lisa S.', 'Tobias W.', 'Emma H.', 'Mark H.', 'Lena B.'].map(n => (
                  <div key={n} className="vt-student vt-student--present">
                    <span className="vt-student-dot" />
                    {n}
                  </div>
                ))}
              </div>
              <div className="vt-feature-card-label vt-feature-card-label--missing vt-label--orange">Fehlt noch · 4</div>
              <div className="vt-student-list">
                {['Moritz M.', 'Luis K.'].map(n => (
                  <div key={n} className="vt-student vt-student--missing">
                    <span className="vt-student-dot vt-student-dot--missing" />
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Während des Tests ── */}
      <section className="vt-section vt-section--white">
        <div className="vt-during-inner">
          <span className="vt-label vt-label--orange">Während des Tests</span>
          <h2 className="vt-section-heading">Fokus statt Chaos.</h2>
          <div className="vt-during-grid">
            <div className="vt-during-card">
              <div className="vt-during-icon">⏱</div>
              <h3 className="vt-during-title">Timer immer im Blick</h3>
              <p className="vt-during-desc">
                Schüler sehen jederzeit wie viel Zeit noch bleibt — kein nerviges Nachfragen, und ein natürlicher Anreiz zum Zeitmanagement.
              </p>
            </div>
            <div className="vt-during-card">
              <div className="vt-during-icon">🔒</div>
              <h3 className="vt-during-title">Kein Schummeln möglich</h3>
              <p className="vt-during-desc">
                Die App verhindert technisch, dass Schüler während des Tests die Anwendung verlassen — kein Nachschlagen, kein Umschalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sofortige Korrektur & PDF ── */}
      <section className="vt-section vt-section--gray">
        <div className="vt-dual-inner">
          <div className="vt-dual-card">
            <span className="vt-label vt-label--green">Auswertung</span>
            <h2 className="vt-section-heading">Fertig abgegeben.<br />Sofort korrigiert.</h2>
            <p className="vt-section-desc">
              Sobald ein Schüler abgibt, liegt das Ergebnis vor — für ihn und für dich. Kein langes Warten, keine Nervosität, kein Korrekturstapel.
            </p>
            <ul className="vt-bullets">
              <li>Schüler sehen ihr Ergebnis direkt nach Abgabe</li>
              <li>Du siehst den Klassenüberblick in Echtzeit</li>
              <li>Durchschnitt, Teilnahme, Einzelergebnisse auf einen Blick</li>
            </ul>
          </div>
          <div className="vt-dual-card">
            <span className="vt-label vt-label--blue">Bibliothek</span>
            <h2 className="vt-section-heading">Offiziell.<br />Jederzeit abrufbar.</h2>
            <p className="vt-section-desc">
              Schüler können jeden absolvierten Test jederzeit als PDF aus der Bibliothek herunterladen — ein offizielles Dokument, das bleibt.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="vt-cta">
        <h2 className="vt-cta-heading">Kein Zettel mehr.</h2>
        <p className="vt-cta-sub">Kostenlos für Lehrer. Einfach einladen, loslegen.</p>
        <a
          href="https://apps.apple.com/de/app/vocab-track/id6753958684"
          className="vt-cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AppleIcon />
          Im App Store laden
        </a>
      </section>

    </div>
  )
}

function AppleIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.2-150.3-99.7C27.2 736.4 1 656.8 1 577.4C1 384.5 127.4 282.7 252.3 282.7c61.6 0 112.7 40.5 151.6 40.5 37.2 0 95.7-42.7 165.1-42.7 26.5 0 108.2 2.6 168.1 80.4zm-240-166.1c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  )
}
