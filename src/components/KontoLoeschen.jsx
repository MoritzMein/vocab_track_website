import './KontoLoeschen.css'

export default function KontoLoeschen() {
  return (
    <section className="konto-loeschen">
      <div className="konto-loeschen-inner">
        <h1 className="konto-loeschen-heading">Konto löschen bei Vocab Track</h1>

        <p className="konto-loeschen-sub">
          So löschen Sie Ihr Konto und alle zugehörigen Daten:
        </p>

        <ol className="konto-loeschen-list">
          <li>Öffnen Sie die Vocab Track App.</li>
          <li>Tippen Sie links oben auf das Menü-Symbol.</li>
          <li>Wählen Sie „Einstellungen" → „Konto löschen".</li>
          <li>Bestätigen Sie den Löschvorgang durch erneute Anmeldung.</li>
        </ol>

        <h2 className="konto-loeschen-subheading">Gelöschte Daten</h2>
        <ul className="konto-loeschen-bullets">
          <li>Ihr Benutzerkonto (E-Mail, Name)</li>
          <li>Alle gespeicherten Vokabeln und Lernfortschritte</li>
          <li>Kursmitgliedschaften und Ergebnisse</li>
        </ul>

        <h2 className="konto-loeschen-subheading">Aufbewahrungsfrist</h2>
        <p className="konto-loeschen-text">
          Alle personenbezogenen Daten werden sofort und unwiderruflich gelöscht.
          Anonymisierte Backup-Daten können bis zu 30 Tage zur technischen Wiederherstellung aufbewahrt werden.
        </p>

        <p className="konto-loeschen-contact">
          Bei Fragen: <a href="mailto:vocab.track@gmail.com">vocab.track@gmail.com</a>
        </p>
      </div>
    </section>
  )
}
