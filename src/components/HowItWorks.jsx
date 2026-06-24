import { useState } from 'react'
import './HowItWorks.css'

const STEPS = [
  {
    role: 'Lehrer',
    title: 'Kurs erstellen',
    desc: 'Vokabellisten anlegen, Lektionen planen und die Klasse per Einladungscode einladen.',
    mockup: '/Mockup_schritt_1.png',
  },
  {
    role: 'Schüler',
    title: 'Benachrichtigung erhalten',
    desc: 'Bei jeder neuen Lektion bekommen Schüler automatisch eine Push-Nachricht.',
    mockup: '/Mockup_schritt_2.png',
  },
  {
    role: 'Schüler',
    title: 'Mit KI lernen',
    desc: 'Interaktive 3D-Karten und KI-generierte Beispielsätze prägen die Vokabeln ein.',
    mockup: '/Mockup_schritt_3.png',
  },
  {
    role: 'Schüler',
    title: 'Abfrage mit Spaßfaktor',
    desc: 'Sofortiges Feedback, Streaks und Spiele machen aus Pflicht echte Motivation.',
    mockup: '/Mockup_schritt_4.png',
  },
  {
    role: 'Lehrer',
    title: 'Voller Überblick',
    desc: 'Wer hat gelernt? Wie gut? Sanfte Erinnerung per Knopfdruck an alle, die noch fehlen.',
    mockup: '/Mockup_schritt_5.png',
  },
]

export default function HowItWorks() {
  const [tourOpen, setTourOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="hiw" data-reveal>
      <div className="hiw-inner">
        <h2 className="hiw-heading">So funktioniert VocabTrack</h2>

        <div className="hiw-grid">
          {STEPS.map((step, i) => (
            <div key={i} className="hiw-card">
              <div className="hiw-card-meta">
                <span className="hiw-index">0{i + 1}</span>
                <span className={`hiw-role hiw-role--${step.role === 'Lehrer' ? 'lehrer' : 'schueler'}`}>
                  {step.role}
                </span>
              </div>
              <h3 className="hiw-title">{step.title}</h3>
              <p className="hiw-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="hiw-tour-trigger">
          <button
            className={`hiw-tour-btn ${tourOpen ? 'hiw-tour-btn--open' : ''}`}
            onClick={() => { setTourOpen(o => !o); setActiveStep(0) }}
          >
            App-Tour ansehen
            <svg className="hiw-tour-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {tourOpen && (
          <div className="hiw-tour">
            <div className="hiw-tour-steps">
              {STEPS.map((step, i) => (
                <button
                  key={i}
                  className={`hiw-tour-step ${activeStep === i ? 'active' : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  <span className="hiw-tour-step-num">0{i + 1}</span>
                  <div className="hiw-tour-step-content">
                    <div className="hiw-tour-step-header">
                      <span className={`hiw-tour-step-role hiw-role--${step.role === 'Lehrer' ? 'lehrer' : 'schueler'}`}>
                        {step.role}
                      </span>
                      <span className="hiw-tour-step-title">{step.title}</span>
                    </div>
                    <p className="hiw-tour-step-desc">{step.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="hiw-tour-visual">
              <div className="hiw-tour-phone-frame">
<img
                  key={activeStep}
                  src={STEPS[activeStep].mockup}
                  alt={STEPS[activeStep].title}
                  className="hiw-tour-mockup"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
