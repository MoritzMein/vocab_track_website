import { Link } from 'react-router-dom'
import './Werdegang.css'

// Stationen von der Idee bis zum Pilotprojekt
const STATIONS = [
  {
    date: '2024',
    title: 'Die Idee',
    text: 'Als Schüler ist mir selbst aufgefallen, wie das Vokabellernen immer wieder zu Stress auf Seiten der Schüler und der Lehrer führt. Da sich die Schule sowieso modernisiert und digitalisiert, habe ich darin eine Chance gesehen, genau das zu verbessern, um den Schulalltag für alle zu erleichtern.',
  },
  {
    date: '2024 – 2026',
    title: 'Zwei Jahre Entwicklung',
    text: 'Über die nächsten zwei Jahre habe ich die App entwickelt, getestet und immer wieder verbessert.',
  },
  {
    date: '27. April 2026',
    title: 'Im App Store und Play Store',
    text: 'Endlich war es so weit: VocabTrack ist im App Store und im Play Store erschienen.',
  },
  {
    date: 'Schuljahr 2026/27',
    title: 'Pilotprojekt an einem Gymnasium',
    text: 'Seit dem neuen Schuljahr läuft VocabTrack als Pilotprojekt an einem Gymnasium in NRW.',
    cta: { label: 'Mehr erfahren', to: '/pilotprojekt' },
  },
  {
    date: '2027',
    title: 'Schulen in ganz Deutschland',
    text: 'Als Nächstes soll VocabTrack an Schulen in ganz Deutschland ankommen. Möchten Sie mit Ihrer Schule Teil davon werden?',
    future: true,
    cta: { label: 'Jetzt Kontakt aufnehmen', to: '/schulen#anfrage' },
    image: '/schulen-illustration.svg',
    alt: 'Deutschlandkarte mit der Schule in NRW, an der VocabTrack läuft, und Orten, die dazukommen',
  },
]

export default function Werdegang() {
  return (
    <main className="werdegang page-enter">
      <header className="werdegang-header">
        <p className="werdegang-brand"><span>Werdegang</span></p>
        <h1>Wie VocabTrack entstanden ist</h1>
      </header>

      <ol className="werdegang-timeline page-enter-list">
        {STATIONS.map(station => (
          <li key={station.title} className={`werdegang-station${station.future ? ' werdegang-station--future' : ''}`}>
            <span className="werdegang-dot" aria-hidden="true" />
            <div className={`werdegang-card${station.image ? ' werdegang-card--image' : ''}`}>
              <div className="werdegang-card-text">
                <p className="werdegang-date">{station.date}</p>
                <h2>{station.title}</h2>
                <p>{station.text}</p>
                {station.cta && (
                  <Link to={station.cta.to} className="werdegang-button">{station.cta.label}</Link>
                )}
              </div>
              {station.image && (
                <img src={station.image} alt={station.alt} width="452" height="388" />
              )}
            </div>
          </li>
        ))}
      </ol>
    </main>
  )
}
