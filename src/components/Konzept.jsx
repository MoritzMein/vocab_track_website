import { Link } from 'react-router-dom'
import './Konzept.css'

// Konzept von VocabTrack: Problem, Lösung, Belege. Texte vom Autor, nur sprachlich korrigiert.
export default function Konzept() {
  return (
    <main className="konzept page-enter">
      <header className="konzept-header">
        <p className="konzept-brand"><span>Konzept</span></p>
        <h1>Das Konzept hinter VocabTrack</h1>
      </header>

      <section className="konzept-section konzept-problem" aria-labelledby="konzept-problem">
        <h2 id="konzept-problem">Das Problem</h2>
        <p className="konzept-text">
          Schüler lernen keine Vokabeln, auch wenn sie als Hausaufgabe aufgegeben wurden, da der
          Lehrer sie nicht wie eine klassische Hausaufgabe kontrollieren kann. Also werden
          Vokabeltests geschrieben, die dem Lehrer viel Zeit bei der Erstellung und Korrektur
          abverlangen. Die meisten Schüler haben nicht gelernt, und so kommt es dazu, dass der Lehrer
          Zeit für einen Vokabeltest opfert und nur auf Frustration bei den Schülern trifft. Die
          Schüler sind genervt, weil sie bei den ganzen Klausuren und anderen Hausaufgaben die
          Vokabeln aus dem Blick verlieren.
        </p>
      </section>

      <section className="konzept-section konzept-solution" aria-labelledby="konzept-loesung">
        <div className="konzept-solution-text">
          <h2 id="konzept-loesung">Unsere Lösung</h2>
          <p className="konzept-text">
            Alle eben genannten Probleme lassen sich auf fehlende <strong>Transparenz</strong>{' '}
            zurückführen. Mit VocabTrack geben wir Lehrern die Möglichkeit, das Vokabellernen ihrer
            Schüler zu kontrollieren. Wenn doch ein Test geschrieben wird, verlangt er dem Lehrer
            nicht mehr so viel Zeit ab, und die Schüler können sich über die App mit
            spezialisierten Funktionen effektiver darauf vorbereiten.
          </p>
          <p className="konzept-text">
            Das kombiniert VocabTrack mit motivationssteigernden und effizienzsteigernden Features,
            sodass die Vokabeln tatsächlich hängen bleiben und das Lernen unkompliziert und angenehm
            ist.
          </p>
          <Link to="/wissenschaft#abrufen" className="konzept-more-link">
            Methoden genauer erkunden <ChevronRight />
          </Link>
        </div>
        <img
          src="/konzept-loesung.svg"
          width="560"
          height="400"
          alt="Eine Lupe schaut von oben auf den Lernstand der Klasse Englisch 9a; Ben hat nicht geübt und ist rot markiert"
          className="konzept-illustration"
        />
      </section>

      <section className="konzept-section konzept-section--last" aria-label="Belege">
        <div className="konzept-grid">
          <Link to="/wissenschaft" className="konzept-card konzept-proof">
            <h3>Alles wissenschaftlich fundiert</h3>
            <span className="konzept-proof-link">Zur Wissenschaft <ChevronRight /></span>
          </Link>
          <Link to="/pilotprojekt" className="konzept-card konzept-proof">
            <h3>Und im Klassenraum erprobt</h3>
            <span className="konzept-proof-link">Zum Pilotprojekt <ChevronRight /></span>
          </Link>
        </div>
      </section>
    </main>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}
