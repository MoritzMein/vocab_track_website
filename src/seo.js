// Titel und Beschreibung je Seite: für Google, KI-Suchen und Link-Vorschauen.
// Wird beim Build ins HTML geschrieben (scripts/prerender.js) und beim Seitenwechsel im Browser gesetzt.
export const SITE_URL = 'https://www.vocab-track.com'

export const PAGES = {
  '/': {
    title: 'VocabTrack – Die Vokabel-App für Klassen und Lehrer',
    description:
      'Klasseninternes Vokabellernen mit VocabTrack: Die ganze Klasse lernt gemeinsam im Klassenverband, und Lehrer sehen nach jeder Übung, wer gelernt hat. Für iOS und Android.',
    sitemap: true,
  },
  '/werdegang': {
    title: 'Wie VocabTrack entstanden ist – Werdegang der Vokabel-App für Klassen',
    description:
      'Von der Idee als Schüler über zwei Jahre Entwicklung bis zum Pilotprojekt an einem Gymnasium: der Werdegang von VocabTrack, der Vokabel-App für klasseninternes Vokabellernen.',
    sitemap: true,
  },
  '/pilotprojekt': {
    title: 'Pilotprojekt: VocabTrack an einem Gymnasium in NRW',
    description:
      'VocabTrack im Klassenverband: Auswertung der ersten fünf Wochen in einem Englischkurs der Einführungsphase mit 20 Schülern an einem Gymnasium in NRW.',
    sitemap: true,
  },
  '/schulen': {
    title: 'VocabTrack für Schulen – Kontakt aufnehmen',
    description:
      'Bringen Sie klasseninternes Vokabellernen an Ihre Schule: VocabTrack verbindet Lehrer und Schüler, spart Lehrkräften Zeit und ist DSGVO-konform. Jetzt Kontakt aufnehmen.',
    sitemap: true,
  },
  '/feedback': {
    title: 'Feedback & Bugs melden – VocabTrack',
    description: 'Fehler gefunden oder eine Idee für VocabTrack? Hier kannst du Feedback und Bugs melden.',
    sitemap: true,
  },
  '/schueler': {
    title: 'So lernen Schüler mit VocabTrack – Vokabel-App für Klassen',
    description:
      'Streaks, Erinnerungen und Widgets: So fühlt sich Vokabellernen mit VocabTrack für Schüler im Klassenverband an.',
  },
  '/vokabeltest': {
    title: 'Der Vokabeltest, neu gedacht – VocabTrack',
    description:
      'Vokabeltests für die ganze Klasse in wenigen Minuten erstellen, auf dem iPad schreiben lassen und automatisch auswerten – mit VocabTrack.',
  },
  '/wissenschaft': {
    title: 'Wissenschaftliche Fundierung von VocabTrack – Vokabellernen nach der Lernforschung',
    description:
      'Aktives Abrufen, verteiltes Wiederholen, Feedback und mehr: Auf welchen Studien die zwölf Lernmethoden von VocabTrack aufbauen, mit allen Quellen.',
    sitemap: true,
  },
  // Noch im Aufbau: nicht indexieren, bis Inhalt da ist
  '/konzept': {
    title: 'Das Konzept von VocabTrack – Vokabellernen im Klassenverband',
    description:
      'So funktioniert VocabTrack: klasseninternes Vokabellernen, bei dem Lehrkräfte und Schüler gemeinsam in einer App arbeiten.',
    noindex: true,
  },
  '/konto-loeschen': {
    title: 'Konto löschen – VocabTrack',
    description: 'So löschst du dein Konto bei VocabTrack.',
    noindex: true,
  },
}

export function pageMeta(pathname) {
  return PAGES[pathname] ?? PAGES['/']
}
