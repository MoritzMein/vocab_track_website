import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    q: 'Was ist VocabTrack?',
    a: 'VocabTrack ist eine Vokabel-App für Schulklassen. Lehrer und Schüler lernen damit gemeinsam: Die Klasse übt die Vokabeln in der App, und der Lehrer sieht nach jeder Übung, wer gelernt hat.',
  },
  {
    q: 'Was bedeutet klasseninternes Vokabellernen?',
    a: 'Die ganze Klasse lernt dieselben Vokabeln in einem gemeinsamen Kurs, statt dass jeder Schüler für sich allein übt. So sieht der Lehrer jederzeit, wo die Klasse steht.',
  },
  {
    q: 'Wie funktioniert VocabTrack im Klassenverband?',
    a: 'Der Lehrer legt einen Kurs an, und die Schüler treten mit einem Einladungscode bei. Danach lernt die Klasse gemeinsam, und der Lehrer sieht nach jeder Übung, wer teilgenommen hat und wie gut.',
  },
  {
    q: 'Welche Sprachen gibt es?',
    a: 'Englisch, Französisch, Spanisch und Latein.',
  },
  {
    q: 'Kann man mit VocabTrack Vokabeltests schreiben?',
    a: 'Ja. Der Test ist in wenigen Minuten erstellt, die Schüler schreiben ihn auf dem iPad, und die App korrigiert und wertet ihn aus. Wer kein iPad hat, bekommt den Test auf Papier.',
  },
  {
    q: 'Ist VocabTrack DSGVO-konform?',
    a: 'Ja. Die Daten der App werden in Rechenzentren in der EU (Frankfurt) gespeichert. Alle Dienstleister, die Daten verarbeiten, sind vertraglich nach der DSGVO verpflichtet. Welche das sind, steht in der Datenschutzerklärung.',
  },
  {
    q: 'Wie bekommen Lehrer Zugang zu VocabTrack?',
    a: 'Zuerst nimmt die Schule Kontakt mit uns auf, zum Beispiel über diese Website. Gemeinsam wird geklärt, wie VocabTrack an der Schule eingesetzt werden kann. Hat sich die Schule entschieden, VocabTrack zu nutzen, bekommen die Lehrer einen Zugangscode. Damit registrieren sie sich in der App als Lehrer, legen ihre Kurse an und laden ihre Klassen per Einladungscode ein.',
  },
]

// FAQ-Daten für Google und KI-Suchen (schema.org FAQPage)
const FAQ_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
})

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="faq-heading">Häufige Fragen</h2>
      <ul className="faq-list">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <li key={item.q} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
              <h3>
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <PlusIcon />
                </button>
              </h3>
              {/* Antwort steht immer im HTML, damit Suchmaschinen sie lesen können */}
              <Answer id={`faq-answer-${i}`} open={isOpen} text={item.a} />
            </li>
          )
        })}
      </ul>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
    </section>
  )
}

// Antwort mit fester Pixelhöhe auf- und zuklappen. Das läuft auf dem iPhone flüssiger
// als das Animieren der Rasterhöhe, weil der Text darin nicht ständig neu umbrechen muss.
// Beim Vorrendern auf dem Server gibt es kein Layout, dort reicht useEffect
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

function Answer({ id, open, text }) {
  const ref = useRef(null)
  const first = useRef(true)

  useBrowserLayoutEffect(() => {
    const el = ref.current
    if (first.current) {
      first.current = false
      return
    }
    const full = el.scrollHeight
    if (open) {
      el.style.height = '0px'
      el.getBoundingClientRect() // Ausgangshöhe festschreiben, damit die Animation startet
      el.style.height = `${full}px`
    } else {
      el.style.height = `${full}px`
      el.getBoundingClientRect()
      el.style.height = '0px'
    }
    // Nach dem Aufklappen wieder frei wachsen lassen (z. B. beim Drehen des Handys).
    // Zeitgeber statt transitionend, weil das ohne Animation (reduzierte Bewegung) nie kommt.
    const timer = setTimeout(() => { if (open) el.style.height = 'auto' }, 300)
    return () => clearTimeout(timer)
  }, [open])

  return (
    <div id={id} ref={ref} className="faq-answer" style={{ height: 0 }}>
      <p>{text}</p>
    </div>
  )
}

function PlusIcon() {
  return (
    <svg className="faq-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}
