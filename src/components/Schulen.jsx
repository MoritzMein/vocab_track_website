import { useForm, ValidationError } from '@formspree/react'
import './Schulen.css'

const LOESUNG_CARDS = [
  {
    icon: '⏱',
    title: 'Lehrer sparen wertvolle Zeit',
    text: 'Vokabellisten in Sekunden per KI generieren oder Schulbuch-Seiten einscannen — kein manuelles Abtippen, keine verlorenen Zettel.',
  },
  {
    icon: '📊',
    title: 'Voller Einblick in das Lernverhalten',
    text: 'Lehrer sehen auf einen Blick, wer aktiv lernt und wer hinterherhinkt — und können gezielt fördern, bevor der nächste Test kommt.',
  },
  {
    icon: '🔒',
    title: 'DSGVO-konform & sicher',
    text: 'Alle Daten werden auf europäischen Servern gespeichert. Datenschutz ist kein Nachgedanke, sondern Grundlage.',
  },
]

export default function Schulen() {
  const [state, handleSubmit] = useForm('mqegrpgg')

  if (state.succeeded) {
    return (
      <div className="schulen">
        <div className="schulen-success">
          <h1 className="schulen-success-heading">Vielen Dank!</h1>
          <p className="schulen-success-text">
            Ihre Anfrage ist eingegangen. Wir melden uns schnellstmöglich bei Ihnen.
          </p>
          <a href="/" className="schulen-back">Zurück zur Startseite</a>
        </div>
      </div>
    )
  }

  return (
    <div className="schulen">

      {/* Hero */}
      <div className="schulen-hero">
        <h1 className="schulen-heading">
          Vokabellernen neu gedacht für <span className="schulen-highlight">Ihre Schule</span>
        </h1>
        <p className="schulen-sub">
          VocabTrack verbindet Lehrer und Schüler digital. Weniger Aufwand für Lehrkräfte, mehr Lernfortschritt für Schüler — und voller Überblick für die Kursleitung.
        </p>
      </div>

      {/* Problem */}
      <div className="schulen-section">
        <h2 className="schulen-section-heading">
          Das alte System kann gar nicht funktionieren.
        </h2>
        <p className="schulen-section-text">
          Vokabeln sollen eigentlich regelmäßig gelernt werden – in der Realität passiert das aber kaum. Die meisten Schüler lernen nur dann, wenn ein Test angekündigt ist. Der Grund dafür ist einfach. Niemand kann nachvollziehen, ob sie zwischendurch üben. Für die Schüler macht es also keinen spürbaren Unterschied, ob sie die Vokabeln wirklich gelernt haben oder nicht.
        </p>
        <p className="schulen-section-text" style={{ marginTop: '16px' }}>
          Lehrer stehen dabei vor einer schwierigen Situation. Jede Stunde einen Vokabeltest zu schreiben, nur um sicherzugehen, wäre extrem aufwändig, kostet wertvolle Unterrichtszeit und belastet das Verhältnis zwischen Lehrern und Schülern. Unangekündigte Tests sorgen für Misstrauen und das ständige Korrigieren hält Lehrkräfte von wichtigeren Aufgaben ab.
        </p>
        <p className="schulen-section-text" style={{ marginTop: '16px' }}>
          Das Ergebnis ist immer dasselbe. Vokabeln werden kaum gelernt, Tests erzeugen Stress und am Ende ist niemand wirklich zufrieden.
        </p>
      </div>

      {/* Lösung */}
      <div className="schulen-section">
        <h2 className="schulen-section-heading">
          Was VocabTrack für Ihre Schule macht
        </h2>
        <div className="schulen-cards">
          {LOESUNG_CARDS.map((card) => (
            <div key={card.title} className="schulen-card">
              <div className="schulen-card-icon">{card.icon}</div>
              <div>
                <div className="schulen-card-title">{card.title}</div>
                <div className="schulen-card-text">{card.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pilotphase */}
      <div className="schulen-pilot">
        <h2 className="schulen-section-heading">Jetzt kostenlos starten</h2>
        <p className="schulen-section-text">
          VocabTrack befindet sich aktuell in der Pilotphase und ist für Schulen vollständig kostenlos. Schulen, die jetzt einsteigen, gestalten die Weiterentwicklung aktiv mit und profitieren von direktem Support.
        </p>
      </div>

      {/* Kontaktformular */}
      <div className="schulen-section">
        <h2 className="schulen-section-heading">Interesse? Schreiben Sie uns.</h2>
        <form className="schulen-form" onSubmit={handleSubmit}>
          <input
            className="schulen-input"
            type="text"
            name="name"
            placeholder="Ihr Name"
            required
          />
          <ValidationError field="name" errors={state.errors} />

          <input
            className="schulen-input"
            type="text"
            name="schule"
            placeholder="Schule & Ort"
            required
          />
          <ValidationError field="schule" errors={state.errors} />

          <input
            className="schulen-input"
            type="email"
            name="email"
            placeholder="E-Mail-Adresse"
            required
          />
          <ValidationError field="email" errors={state.errors} />

          <textarea
            className="schulen-textarea"
            name="nachricht"
            placeholder="Nachricht (optional)"
            rows="4"
          />
          <ValidationError field="nachricht" errors={state.errors} />

          <button
            type="submit"
            className="schulen-submit"
            disabled={state.submitting}
          >
            {state.submitting ? 'Wird gesendet...' : 'Anfrage senden'}
          </button>
        </form>
      </div>

    </div>
  )
}
