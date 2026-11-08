import { Link } from 'react-router-dom'
import './Pilotprojekt.css'

// Zahlen aus der Pilotauswertung (Englisch EF, 15.09. bis 18.10.2026, Stand 01.11.2026)
const THEMES = [
  {
    title: 'Lernerfolg und Nutzung',
    fazit: true,
    stats: [
      { value: '7.972', label: 'Abfragen' },
      { value: '329', label: 'pro Schüler' },
      { value: '93,6 %', label: 'richtig in Tests' },
      { value: '89,2 %', label: 'Note 1' },
    ],
  },
  {
    title: (
      <>
        <span>Niemand musste.</span>
        <span>Sie wollten <span className="pilot-underline">trotzdem<Swoosh /></span>.</span>
      </>
    ),
    titleClass: 'pilot-theme-title--big',
    text: 'Bei VocabTrack haben wir viele Mechanismen eingebaut, um die Schüler zu motivieren, sodass sie gerne von alleine lernen. Das Pilotprojekt hat uns gezeigt, dass die Schüler durch diese freiwillig und eigenständig über die Aufgabe der Lehrer hinaus lernen.',
    stats: [
      { value: '81 %', label: 'starten eine Abfrage nach einem Fehler neu' },
      { value: '79 ×', label: 'hat ein Schüler dieselbe Lektion gestartet', note: 'bis alles saß' },
    ],
  },
]

// Rückmeldung aus dem Kurs, aufgeteilt in Sprechblasen
const FEEDBACK = [
  <>Viele aus dem Kurs sagen, dass sie mit der App <em>bessere Noten</em> in Vokabeltests schreiben.</>,
  <>Die Vorbereitung auf einen Vokabeltest ist mit der App einfach, und sie können sich besser dazu <em>motivieren</em>.</>,
  <>Eine Mitschülerin meinte, die App mache <em>„süchtig“</em>: Wer einmal angefangen hat, will nicht aufhören, bis ein perfekter Durchgang gelingt.</>,
]

export default function Pilotprojekt() {
  return (
    <main className="pilot page-enter">
      <header className="pilot-header">
        <p className="pilot-brand"><span>Pilotprojekt</span></p>
        <h1>VocabTrack an einem Gymnasium in NRW</h1>
        <p className="pilot-intro">
          Seit dem Schuljahr 2026/27 läuft VocabTrack als Pilotprojekt in einem Englischkurs der Einführungsphase mit 20 Schülern. Hier ist die Auswertung der ersten fünf Wochen.
        </p>
      </header>

      {THEMES.map(theme => (
        <section key={theme.stats[0].value} className="pilot-theme">
          {theme.title && <h2 className={theme.titleClass}>{theme.title}</h2>}
          {theme.text && <p className="pilot-theme-text">{theme.text}</p>}
          {theme.fazit && <Fazit />}
          <ul className={`pilot-stats${theme.stats.length === 4 ? ' pilot-stats--four' : ''}`}>
            {theme.stats.map(stat => (
              <li key={stat.label} className="pilot-stat">
                {stat.note && <span className="pilot-stat-note" aria-hidden="true">{stat.note}</span>}
                <span className="pilot-stat-value">{stat.value}</span>
                <span className="pilot-stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="pilot-theme">
        <h2>Rückmeldung aus dem Kurs</h2>
        <ul className="pilot-bubbles">
          {FEEDBACK.map((text, i) => (
            <li key={i} className="pilot-bubble">{text}</li>
          ))}
        </ul>
      </section>

      <p className="pilot-source">
        Auswertung eines Englischkurses (EF) im Zeitraum 15.09. bis 18.10.2026 · Stand 01.11.2026
      </p>

      <Link to="/werdegang" className="pilot-back">Zurück zum Werdegang</Link>
    </main>
  )
}

function Fazit() {
  return (
    <div className="pilot-section pilot-fazit">
      <h2>Fazit</h2>
      <p>
        Das Pilotprojekt hat unsere Ansätze bestätigt und neue Anreize gesetzt. Fast <span className="pilot-highlight">90 % der Testergebnisse waren eine Note 1</span>, und innerhalb der ersten 5 Wochen wurden die Vokabeln <span className="pilot-highlight">7.972 Mal abgefragt</span>. Die Zahlen sprechen für sich. Die App wird nicht nur aktiv genutzt, sondern verbessert die Schüler auch, und das <span className="pilot-highlight">nachweislich</span>. Uns zeigt das, dass sich die 2 Jahre Entwicklung gelohnt haben, und gibt uns den Beweis, den wir brauchen, um jetzt an Schulen in ganz Deutschland zu expandieren.
      </p>
    </div>
  )
}

// Handgezeichnete Unterstreichung
function Swoosh() {
  return (
    <svg className="pilot-swoosh" viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
      <path d="M3 10 C 45 3, 120 2, 197 6" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}
