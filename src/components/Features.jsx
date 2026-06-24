import { useState, useEffect, useRef } from 'react'
import './Features.css'

const TABS = [
  { id: 'schuler', label: 'Für Schüler' },
  { id: 'lehrer', label: 'Für Lehrer' },
  { id: 'plattform', label: 'Plattform' },
]

const FEATURES = {
  schuler: [
    {
      emoji: '🎯',
      title: 'Tägliche Lektionen',
      desc: 'Mit Tippfehler-Toleranz — 1 Fehler zählt als „fast richtig"',
    },
    {
      emoji: '🔥',
      title: 'Streak & Sofortfeedback',
      desc: 'Tägliche Motivation und direktes Feedback nach jeder Antwort',
    },
    {
      emoji: '🔔',
      title: 'Push-Benachrichtigungen',
      desc: 'Automatische Erinnerung bei neuen Lektionen vom Lehrer',
    },
    {
      emoji: '🎮',
      title: 'Spiele',
      desc: 'Streak Star, 1v1-Echtzeit-Duell, Block Blast und Tetris',
    },
    {
      emoji: '🎫',
      title: 'Ticket-Währung',
      desc: 'Durch gute Leistungen verdient, für Premium-Spiele einlösen',
    },
    {
      emoji: '🏆',
      title: 'Leaderboards',
      desc: 'Kurs-Ranglisten je Spiel',
    },
  ],
  lehrer: [
    {
      emoji: '👤',
      title: 'Lehrer-Account',
      desc: 'Bei der Registrierung „Ich bin Lehrer" auswählen',
    },
    {
      emoji: '📚',
      title: 'Kurse erstellen',
      desc: 'Vokabellisten anlegen, tägliche Lektionen planen',
    },
    {
      emoji: '👥',
      title: 'Klassen verwalten',
      desc: 'Schüler per Einladungscode einladen, mehrere Kurse gleichzeitig',
    },
    {
      emoji: '🎓',
      title: 'Kostenlos für Lehrer',
      desc: 'Lehrkräfte zahlen nichts',
    },
  ],
  plattform: [
    {
      emoji: '📱',
      title: 'iOS & Android',
      desc: 'Auch iPad-optimiert',
    },
    {
      emoji: '🔑',
      title: 'Google & Apple Sign-In',
      desc: 'Schnelle Anmeldung ohne Passwort',
    },
    {
      emoji: '💳',
      title: '0,99 € / Monat',
      desc: 'Für Schüler, jederzeit kündbar',
    },
  ],
}

export default function Features() {
  const [activeTab, setActiveTab] = useState('schuler')
  const wordRef = useRef(null)

  useEffect(() => {
    const word = wordRef.current
    if (!word) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          word.classList.add('marker-animate')
        } else {
          word.classList.remove('marker-animate')
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(word)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="features" id="features" data-reveal>
      <div className="features-inner">
        <h2 className="features-heading">
          Was macht VocabTrack{' '}
          <span className="marker-word" ref={wordRef}>besonders?</span>
        </h2>

        <div className="features-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`features-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="features-grid">
          {FEATURES[activeTab].map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-emoji">{f.emoji}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
