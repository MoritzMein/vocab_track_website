# Design: /schulen Seite

## Ziel

Eine dedizierte Landing Page für Schulleitungen, die per E-Mail angesprochen werden. Der Link zur Seite wird direkt in der Akquise-Mail mitgeschickt. Die Seite soll informieren, Vertrauen aufbauen und zur Kontaktaufnahme führen.

## Zielgruppen der Website (gesamt)

- **Startseite:** Schüler, Lehrer, Eltern — allgemeine Einführung in VocabTrack
- **/schulen:** Schulleitung — gezieltes Verkaufsgespräch per Seite

## Struktur der /schulen Seite

### 1. Hero
- Überschrift: „Vokabellernen neu gedacht — für Ihre Schule."
- 2 Sätze Subtext: Was VocabTrack ist und was es der Schule bringt
- Zwei Vertrauens-Badges: „✓ DSGVO-konform" und „✓ Kostenlos in der Pilotphase"
- Heller Hintergrund, identisch zur Startseite (warm, kein dunkler Hero)

### 2. Problem
- Label: „DAS PROBLEM"
- Headline: „Das alte System kann gar nicht funktionieren."
- Fließtext: Warum klassische Vokabellisten scheitern — unsichtbarer Lernstand, verlorene Listen, Unterrichtszeit geht für Kontrolle drauf

### 3. Lösung — 3 Punkte
- Label: „DIE LÖSUNG"
- Drei Punkte mit Icon, Titel und Beschreibung:
  1. **Lehrer sparen Zeit** — KI-Erstellung oder Scan, kein manuelles Abtippen
  2. **Voller Einblick in das Lernverhalten** — Lehrer sehen Lernstand jedes Schülers, können gezielt fördern
  3. **DSGVO-konform & sicher** — europäische Server, Datenschutz als Grundlage

### 4. Pilotphase-Block
- Label: „PILOTPHASE"
- Headline: „Jetzt kostenlos starten"
- Text: VocabTrack ist aktuell kostenlos für Schulen. Frühe Schulen gestalten die Weiterentwicklung mit.
- Hinweis: Abo-Modell ist für nach der Pilotphase geplant — wird auf der Seite nicht erwähnt

### 5. Kontaktformular
- Label: „KONTAKT"
- Headline: „Interesse? Schreiben Sie uns."
- Felder: Name, Schule & Ort, E-Mail-Adresse, Nachricht (optional)
- Submit-Button: „Anfrage senden"
- Formular-Backend: Formspree (konsistent mit bestehendem Feedback-Formular)

## Navigation

- Nav-Link „Für Schulen" wird in [Nav.jsx](../../../src/components/Nav.jsx) ergänzt
- Route `/schulen` wird in [App.jsx](../../../src/App.jsx) registriert
- Bestehende Vercel-Rewrite-Regel deckt die neue Route bereits ab

## Neue Dateien

- `src/components/Schulen.jsx`
- `src/components/Schulen.css`

## Design-Prinzipien

- Stil exakt wie Startseite: Font Inter, Farben #1a1a1a und Orange #ff6800, warmer heller Hintergrund, keine dunklen Hero-Blöcke
- Siezen — die Seite spricht Schulleitung an, kein „du"
- Kein Erwähnen des zukünftigen Abo-Modells auf der Seite
- DSGVO-Konformität und Kostenlosigkeit prominent hervorheben — das sind die stärksten Argumente
