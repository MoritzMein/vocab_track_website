import './Konzept.css'

const STEPS = [
  {
    number: '01',
    title: 'Lehrer erstellt die Vokabelliste',
    text:
      'Der Lehrer legt eine neue Vokabellektion an und teilt sie direkt im Kurs. Vokabeln lassen sich blitzschnell per KI generieren oder mit der Kamera scannen — und stehen sofort für alle Schüler bereit.',
    img: '/Mockup_schritt_1.png',
  },
  {
    number: '02',
    title: 'Schüler lernen die Lektion',
    text:
      'Die Schüler treten dem Kurs bei und lernen die erstellte Vokabellektion in ihrem Tempo. Smarte Wiederholungen sorgen dafür, dass genau das geübt wird, was noch nicht sitzt.',
    img: '/Mockup_schritt_2.png',
  },
  {
    number: '03',
    title: 'Einsicht in das Lernverhalten',
    text:
      'Der Lehrer erhält eine detaillierte Einsicht in das Lernverhalten seiner Schüler — er sieht, wer aktiv lernt und wo es hakt, und kann gezielt nachhelfen, bevor der nächste Test kommt.',
    img: '/Mockup_schritt_3.png',
  },
]

export default function Konzept() {
  return (
    <section className="konzept">
      <div className="konzept-inner">
        <h1 className="konzept-heading">So funktioniert VocabTrack</h1>
        <p className="konzept-sub">
          In drei einfachen Schritten vom ersten Kurs bis zum sicheren Vokabelwissen.
        </p>

        <div className="konzept-steps">
          {STEPS.map((step) => (
            <div key={step.number} className="konzept-step">
              <div className="konzept-step-text">
                <span className="konzept-step-number">{step.number}</span>
                <h2 className="konzept-step-title">{step.title}</h2>
                <p className="konzept-step-desc">{step.text}</p>
              </div>
              <div className="konzept-step-visual">
                <img
                  src={step.img}
                  alt={step.title}
                  className="konzept-mockup"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
