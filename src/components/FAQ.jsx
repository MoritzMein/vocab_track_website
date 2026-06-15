import { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    q: 'Wie funktioniert das Abo?',
    a: '0,99 € pro Monat, jederzeit kündbar — direkt über den App Store oder Google Play.',
  },
  {
    q: 'Kann ich die App ohne Lehrer nutzen?',
    a: 'Nein, du brauchst einen aktiven Kurs von deinem Lehrer — ohne Einladungscode gibt es keine Lektionen.',
  },
  {
    q: 'Wie bekomme ich einen Einladungscode?',
    a: 'Von deinem Lehrer — er teilt ihn mit der Klasse, z. B. per Elternbrief oder im Unterricht.',
  },
  {
    q: 'Wie registriere ich mich als Lehrer?',
    a: 'Bei der Registrierung „Ich bin Lehrer" auswählen. Lehrer zahlen nichts.',
  },
  {
    q: 'Welche Fächer werden unterstützt?',
    a: 'Ausschließlich Fremdsprachen und Vokabeltraining.',
  },
  {
    q: 'Gibt es eine Web-Version?',
    a: 'Nein, VocabTrack gibt es nur als iOS- und Android-App.',
  },
  {
    q: 'Was sind Tickets?',
    a: 'Eine Belohnungswährung: durch gute Leistungen verdient, für Premium-Spiele wie Tetris und Block Blast einlösen.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq" data-reveal>
      <div className="faq-inner">
        <h2 className="faq-heading">Häufige Fragen</h2>
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
