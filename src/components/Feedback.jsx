import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'
import './Feedback.css'

const CATEGORIES = [
  { value: 'bug', label: 'Bug' },
  { value: 'problem', label: 'Problem' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'verbesserung', label: 'Verbesserungsvorschlag' },
]

export default function Feedback() {
  const [state, handleSubmit] = useForm('mqegrpgg')
  const [category, setCategory] = useState('')
  const [submitAttempted, setSubmitAttempted] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitAttempted(true)
    if (!category) return
    try {
      await handleSubmit(e.target)
    } catch (err) {
      console.error('Formspree submit error:', err)
    }
  }

  if (state.succeeded) {
    return (
      <section className="feedback">
        <div className="feedback-inner">
          <h1 className="feedback-heading">Danke!</h1>
          <p className="feedback-sub">
            Dein Feedback wurde erfolgreich gesendet. Wir melden uns bei dir, falls nötig.
          </p>
          <a href="/" className="feedback-back">Zurück zur Startseite</a>
        </div>
      </section>
    )
  }

  return (
    <section className="feedback">
      <div className="feedback-inner">
        <h1 className="feedback-heading">Feedback & Bugs melden</h1>
        <p className="feedback-sub">
          Hilf uns, VocabTrack besser zu machen. Wähle eine Kategorie und beschreibe dein Anliegen.
        </p>

        <form onSubmit={onSubmit} className="feedback-form">
          <div className="feedback-categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                type="button"
                className={`feedback-cat${category === cat.value ? ' active' : ''}`}
                onClick={() => setCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <input type="hidden" name="kategorie" value={category} />
          {submitAttempted && !category && (
            <p className="feedback-hint">Bitte wähle eine Kategorie.</p>
          )}

          <label className="feedback-label" htmlFor="email">
            E-Mail (optional, für Rückfragen)
          </label>
          <input
            className="feedback-input"
            id="email"
            type="email"
            name="email"
            placeholder="deine@email.de"
          />
          <ValidationError field="email" errors={state.errors} />

          <label className="feedback-label" htmlFor="message">
            Beschreibung
          </label>
          <textarea
            className="feedback-textarea"
            id="message"
            name="nachricht"
            rows="6"
            placeholder="Beschreibe dein Anliegen so genau wie möglich..."
            required
          />
          <ValidationError field="nachricht" errors={state.errors} />

          <button
            type="submit"
            className="feedback-submit"
            disabled={state.submitting}
          >
            {state.submitting ? 'Wird gesendet...' : 'Absenden'}
          </button>

          {state.errors && (Array.isArray(state.errors) ? state.errors.length > 0 : Object.keys(state.errors).length > 0) && (
            <p className="feedback-error">
              Beim Senden ist ein Fehler aufgetreten. Bitte versuch es erneut.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
