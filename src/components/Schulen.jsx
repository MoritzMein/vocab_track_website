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
    <div className="schulen" data-reveal>

      {/* Hero */}
      <div className="schulen-hero">
        <span className="schulen-label">Für Schulen</span>
        <h1 className="schulen-heading">
          Vokabellernen neu gedacht —<br />für Ihre Schule.
        </h1>
        <p className="schulen-sub">
          VocabTrack verbindet Lehrer und Schüler digital. Weniger Aufwand für Lehrkräfte, mehr Lernfortschritt für Schüler — und voller Überblick für die Schulleitung.
        </p>
        <div className="schulen-badges">
          <span className="schulen-badge">
            <span className="schulen-badge-check">✓</span> DSGVO-konform
          </span>
          <span className="schulen-badge">
            <span className="schulen-badge-check">✓</span> Kostenlos in der Pilotphase
          </span>
          <span className="schulen-badge">
            <span className="schulen-badge-check">✓</span> Europäische Server
          </span>
        </div>
      </div>

      {/* Problem */}
      <div className="schulen-section">
        <div className="schulen-section-label">Das Problem</div>
        <h2 className="schulen-section-heading">
          Das alte System kann gar nicht funktionieren.
        </h2>
        <p className="schulen-section-text">
          Schüler lernen keine Vokabeln — und Lehrkräfte haben nicht die Kapazität, dies jedes Mal zu kontrollieren. Klassische Vokabellisten gehen verloren, der Lernstand ist unsichtbar, und wertvolle Unterrichtszeit geht für Kontrolle drauf statt für Förderung.
        </p>
      </div>

      {/* Lösung */}
      <div className="schulen-section">
        <div className="schulen-section-label">Die Lösung</div>
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
        <div className="schulen-section-label">Pilotphase</div>
        <h2 className="schulen-section-heading">Jetzt kostenlos starten</h2>
        <p className="schulen-section-text">
          VocabTrack befindet sich aktuell in der Pilotphase und ist für Schulen vollständig kostenlos. Schulen, die jetzt einsteigen, gestalten die Weiterentwicklung aktiv mit und profitieren von direktem Support.
        </p>
      </div>

      {/* Kontaktformular */}
      <div className="schulen-section">
        <div className="schulen-section-label">Kontakt</div>
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
