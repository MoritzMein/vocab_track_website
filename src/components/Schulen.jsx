import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useForm, ValidationError } from '@formspree/react'
import './Schulen.css'

const LOESUNG_CARDS = [
  {
    icon: '/icons/icon-zeit.svg',
    title: 'Lehrer sparen wertvolle Zeit',
  },
  {
    icon: '/icons/icon-einblick.svg',
    title: 'Voller Einblick in das Lernverhalten',
  },
  {
    icon: '/icons/icon-sicher.svg',
    title: 'DSGVO-konform &\nsicher',
  },
]

export default function Schulen() {
  const [state, handleSubmit] = useForm('mqegrpgg')
  const { hash } = useLocation()

  // Mit #anfrage direkt zum Formular springen
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  if (state.succeeded) {
    return (
      <main className="schulen page-enter">
        <div className="schulen-header">
          <p className="schulen-brand"><span>Kontakt aufnehmen</span></p>
          <h1>Vielen Dank!</h1>
          <p className="schulen-intro">
            Ihre Anfrage ist eingegangen. Wir melden uns schnellstmöglich bei Ihnen.
          </p>
          <Link to="/" className="schulen-button">Zurück zur Startseite</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="schulen page-enter">
      <header className="schulen-header">
        <p className="schulen-brand"><span>Kontakt aufnehmen</span></p>
        <h1>Vokabellernen neu gedacht für Ihre Schule</h1>
        <p className="schulen-intro">
          VocabTrack verbindet Lehrer und Schüler digital. Weniger Aufwand für Lehrkräfte, mehr Lernfortschritt für Schüler — und voller Überblick für die Kursleitung.
        </p>
      </header>

      <section className="schulen-section">
        <h2>Was VocabTrack für Ihre Schule macht</h2>
        <ul className="schulen-cards">
          {LOESUNG_CARDS.map(card => (
            <li key={card.title} className="schulen-card">
              <img src={card.icon} alt="" width="64" height="64" className="schulen-card-icon" />
              <h3>{card.title}</h3>
            </li>
          ))}
        </ul>
      </section>

      <section className="schulen-section schulen-pilot">
        <h2>Zwei Monate kostenlos testen</h2>
        {/* Ausführlich auf dem Desktop, kürzer auf dem Handy (Umschalten in Schulen.css) */}
        <p className="schulen-pilot-long">
          Wir kommen an Ihre Schule und erklären VocabTrack in Ruhe. Danach testen Sie die App zwei Monate lang kostenlos in einigen Kursen. Erst dann entscheiden Sie, ob Sie VocabTrack weiter nutzen möchten.
        </p>
        <p className="schulen-pilot-short">
          Wir stellen VocabTrack an Ihrer Schule vor. Danach testen Sie die App zwei Monate kostenlos in einigen Kursen und entscheiden erst dann.
        </p>
      </section>

      <section className="schulen-section" id="anfrage">
        <h2>Interesse? Schreiben Sie uns.</h2>
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
            className="schulen-input schulen-textarea"
            name="nachricht"
            placeholder="Nachricht (optional)"
            rows="4"
          />
          <ValidationError field="nachricht" errors={state.errors} />

          <button
            type="submit"
            className="schulen-button schulen-submit"
            disabled={state.submitting}
          >
            {state.submitting ? 'Wird gesendet...' : 'Anfrage senden'}
          </button>
          <p className="form-privacy">
            Ihre Angaben verwenden wir nur, um Ihre Anfrage zu beantworten. Das Formular wird über
            den Dienst Formspree übermittelt. Mehr dazu in der{' '}
            <a href="/datenschutzerklaerung.pdf" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a>.
          </p>
        </form>
      </section>
    </main>
  )
}
