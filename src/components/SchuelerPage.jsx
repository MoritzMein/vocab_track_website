import { useEffect } from 'react'
import './SchuelerPage.css'

const GAME_GROUPS = [
  {
    category: 'Spielen & nebenbei lernen',
    type: 'free',
    badge: 'Kostenlos',
    note: 'Diese Spiele sind kostenlos — sie machen Spaß und prägen dabei Vokabeln ein.',
    games: [
      {
        title: '1 gegen 1',
        desc: 'Inspiriert von beliebten Spielen: Eine richtige Antwort fügt dem Gegner Schaden zu, eine falsche dir selbst. Wir nutzen den Konkurrenzkampf unter Schülern, um sie fürs Lernen zu motivieren.',
        img: '/1v1.png',
      },
      {
        title: 'Streak Star',
        desc: 'Ziel ist es, eine möglichst hohe Streak aufzubauen — ohne einen einzigen Fehler. Kombiniert mit der Rangliste motiviert es Schüler, alle Vokabeln jederzeit zu kennen, da Streak Star aus dem gesamten Vokabular zieht, nicht nur aus einzelnen Lektionen.',
        img: '/streak_star.png',
      },
    ],
  },
  {
    category: 'Einfach Spaß haben',
    type: 'ticket',
    badge: '1 Ticket',
    note: 'Diese Spiele kosten ein Ticket und fördern räumliches Denken — eine wohlverdiente Belohnung fürs Lernen.',
    games: [
      {
        title: 'Block Blast',
        desc: 'Blöcke strategisch platzieren und Reihen auflösen. Fördert räumliches Denken.',
        img: '/Block_blast.png',
      },
      {
        title: 'Tetris',
        desc: 'Der Klassiker. Schnelles Denken, räumliche Vorstellung — und eine Pause, die man sich verdient hat.',
        img: '/tetris.png',
      },
    ],
  },
]

function Placeholder({ label, aspect = '9/16', width }) {
  return (
    <div className="sp-placeholder" style={{ aspectRatio: aspect, maxWidth: width }}>
      <span>{label}</span>
    </div>
  )
}

export default function SchuelerPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="sp">

      {/* ── Hero ── */}
      <section className="sp-hero">
        <div className="sp-hero-inner sp-hero-inner--centered">
          <span className="sp-eyebrow">Für Lehrer</span>
          <h1 className="sp-hero-heading">So fühlt sich<br />Lernen für deine<br />Schüler an.</h1>
          <p className="sp-hero-sub">
            Von Streaks bis Spielen — VocabTrack macht aus Hausaufgaben echte Motivation.
          </p>
        </div>
      </section>

      {/* ── Streaks & Motivation ── */}
      <section className="sp-section sp-section--white">
        <div className="sp-split sp-split--image-left">
          <div className="sp-split-visual">
            <div className="sp-phone-frame">
              <div className="sp-phone-island" />
              <img src="/Streaks_mockup.png" alt="Streak-Ansicht" className="sp-phone-screen" />
            </div>
          </div>
          <div className="sp-split-text">
            <span className="sp-label sp-label--orange">Motivation</span>
            <h2 className="sp-section-heading">Richtig in Folge.<br />Tickets verdient.</h2>
            <p className="sp-section-desc">
              Wer mehrere Vokabeln hintereinander richtig beantwortet, baut einen Streak auf. Je länger der Lauf, desto mehr Tickets gibt es als Belohnung — das spornt an, konzentriert zu bleiben.
            </p>
            <ul className="sp-bullets">
              <li>Streak-Zähler sichtbar bei jeder Abfrage</li>
              <li>Tickets als Belohnung für aufeinanderfolgende richtige Antworten</li>
              <li>Fortschrittsbalken in Echtzeit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Push Benachrichtigungen ── */}
      <section className="sp-section sp-section--gray">
        <div className="sp-split sp-split--image-right">
          <div className="sp-split-text">
            <span className="sp-label sp-label--blue">Für Lehrer</span>
            <h2 className="sp-section-heading">Du entscheidest,<br />wer erinnert wird.</h2>
            <p className="sp-section-desc">
              Schüler vergessen es manchmal. Mit einem Tippen schickst du einer einzelnen Person oder der ganzen Klasse eine Push-Benachrichtigung — direkt auf ihr Sperrbildschirm.
            </p>
            <ul className="sp-bullets">
              <li>Einzelne Schüler oder gesamte Klasse</li>
              <li>Eigene Nachricht oder vorgefertigter Text</li>
              <li>Kein Gruppenchat, kein Stress</li>
            </ul>
          </div>
          <div className="sp-split-visual">
            <div className="sp-phone-frame">
              <div className="sp-phone-island" />
              <img src="/Erinnern_mockup.png" alt="Push-Benachrichtigung senden" className="sp-phone-screen" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Spiele & Ticket-System ── */}
      <section className="sp-section sp-section--gray">
        <div className="sp-games-inner">
          <span className="sp-label sp-label--orange">Spielelemente</span>
          <h2 className="sp-section-heading">Lernen verdient Belohnung.</h2>
          <p className="sp-section-desc">
            Schüler verdienen Tickets durch Streaks beim Lernen und können sie gegen Spiele eintauschen — ähnlich wie in einer Spielhalle. Selbst die kostenlosen Spiele sind dabei so gestaltet, dass dabei noch etwas hängen bleibt.
          </p>

          {GAME_GROUPS.map((group, gi) => (
            <div key={gi} className="sp-game-group">
              <div className="sp-game-group-header">
                <span className="sp-game-group-title">{group.category}</span>
                <span className={`sp-game-badge sp-game-badge--${group.type}`}>{group.badge}</span>
              </div>
              <p className="sp-game-group-note">{group.note}</p>
              <div className="sp-games-row">
                {group.games.map((game, i) => (
                  <div key={i} className={`sp-game-card sp-game-card--${group.type}`}>
                    <div className="sp-game-info">
                      <h3 className="sp-game-title">{game.title}</h3>
                      <p className="sp-game-desc">{game.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Widgets ── */}
      <section className="sp-section sp-section--white">
        <div className="sp-widgets-inner">
          <div className="sp-widgets-text">
            <span className="sp-label sp-label--green">Widgets</span>
            <h2 className="sp-section-heading">Immer den Überblick —<br />ohne die App zu öffnen.</h2>
            <p className="sp-section-desc">
              Das VocabTrack-Widget zeigt Schülern direkt auf dem Homescreen, wie viele Vokabeln heute noch warten. Kein Suchen, kein Vergessen.
            </p>
          </div>
          <div className="sp-widgets-visual">
            <img
              src="/screenshots/widget.png"
              alt="VocabTrack Widget"
              className="sp-widget-img"
            />
          </div>
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="sp-section sp-section--coming-soon">
        <div className="sp-coming-inner">
          <span className="sp-label sp-label--gray">In Entwicklung</span>
          <h2 className="sp-coming-heading">Wir sind erst am Anfang.</h2>
          <p className="sp-coming-desc">
            VocabTrack wächst stetig weiter. Neue Spiele, mehr Lernmodi und tiefere Lehrereinblicke sind bereits in Arbeit.
          </p>
          <div className="sp-coming-pills">
            <span className="sp-pill">Mehrspieler-Modus</span>
            <span className="sp-pill">KI-Aussprachetraining</span>
            <span className="sp-pill">Klassen-Challenges</span>
            <span className="sp-pill">Lernplan-Assistent</span>
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section className="sp-cta">
        <h2 className="sp-cta-heading">Überzeug dich selbst.</h2>
        <p className="sp-cta-sub">Kostenlos für Lehrer. Einfach einladen, loslegen.</p>
        <a
          href="https://apps.apple.com/de/app/vocab-track/id6753958684"
          className="sp-cta-btn"
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
