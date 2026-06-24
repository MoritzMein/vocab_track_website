import './TeacherView.css'

export default function TeacherView() {
  return (
    <section className="tv" data-reveal>
      <div className="tv-inner">
        <div className="tv-text">
          <h2 className="tv-heading">
            Voller Überblick.<br />Null Aufwand.
          </h2>
          <p className="tv-desc">
            Sehen Sie auf einen Blick, wer die Lektion abgeschlossen hat und wie gut —
            ohne einen einzigen Test schreiben zu müssen.
          </p>
          <ul className="tv-list">
            <li>Teilnahme und Prozentergebnis je Schüler</li>
            <li>Sanfte Erinnerung per Knopfdruck — kein Elternbrief, kein Konflikt</li>
            <li>Mehrere Kurse gleichzeitig verwalten</li>
            <li>Zugangscode von der Schulleitung erforderlich</li>
            <li>Kostenlos für Lehrkräfte</li>
          </ul>
        </div>
        <div className="tv-visual">
          <img
            src="/screenshots/teacher-dashboard.png"
            alt="Lehrer-Dashboard in VocabTrack"
            className="tv-screenshot"
          />
        </div>
      </div>
    </section>
  )
}
