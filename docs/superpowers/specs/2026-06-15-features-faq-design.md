# Feature-Sektion & FAQ — Design Spec
_Datum: 2026-06-15_

## Ziel

Zwei neue Sektionen auf der Startseite der VocabTrack-Website (vocab-track.com):
1. Eine vollständige Feature-Übersicht mit Tab-Navigation
2. Eine FAQ-Sektion mit Accordion

## Seitenreihenfolge (nach Änderung)

```
Hero → AppPreview → Features (neu, Tabs) → Statement → FAQ (neu) → DownloadCTA
```

---

## 1. Feature-Sektion

### Datei
`src/components/Features.jsx` + `src/components/Features.css` — komplett neu geschrieben (ersetzt bestehende 3-Karten-Version).

### Aufbau
- Sektion-Heading: „Was macht VocabTrack besonders?" (bestehendes Heading + marker-word-Animation bleiben)
- Drei Tab-Buttons: **Für Schüler** | **Für Lehrer** | **Plattform**
  - Aktiver Tab: dunkler Hintergrund (`#1a1a1a`) + weißer Text
  - Inaktive Tabs: `#e8dfd0` Hintergrund + `#888` Text
  - Border-Radius: `24px` (Pill-Form)
- Darunter: Feature-Karten im bestehenden weißen Karten-Stil (`background: white`, `border-radius: 16px`, `padding: 28px`)
- Grid: 3 Spalten auf Desktop, 1 Spalte auf Mobile (wie bisher)
- State via `useState`, kein URL-Routing

### Tab-Inhalte

**Für Schüler** (6 Karten):
| Emoji | Titel | Beschreibung |
|-------|-------|-------------|
| 🎯 | Tägliche Lektionen | Mit Tippfehler-Toleranz — 1 Fehler zählt als „fast richtig" |
| 🔥 | Streak & Sofortfeedback | Tägliche Motivation und direktes Feedback nach jeder Antwort |
| 🔔 | Push-Benachrichtigungen | Automatische Erinnerung bei neuen Lektionen vom Lehrer |
| 🎮 | Spiele | Streak Star (kostenlos), 1v1-Echtzeit-Duell (kostenlos), Block Blast (Ticket), Tetris (Ticket) |
| 🎫 | Ticket-Währung | Durch gute Leistungen verdient, für Premium-Spiele einlösen |
| 🏆 | Leaderboards | Kurs-Ranglisten je Spiel |

**Für Lehrer** (4 Karten):
| Emoji | Titel | Beschreibung |
|-------|-------|-------------|
| 👤 | Lehrer-Account | Bei der Registrierung „Ich bin Lehrer" auswählen |
| 📚 | Kurse erstellen | Vokabellisten einpflegen, tägliche Lektionen planen |
| 👥 | Klassen verwalten | Schüler per Einladungscode einladen, mehrere Kurse gleichzeitig |
| 🎓 | Kostenlos für Lehrer | Lehrkräfte zahlen nichts |

**Plattform** (3 Karten):
| Emoji | Titel | Beschreibung |
|-------|-------|-------------|
| 📱 | iOS & Android | Auch iPad-optimiert |
| 🔑 | Google & Apple Sign-In | Schnelle Anmeldung ohne Passwort |
| 💳 | 0,99 € / Monat | Für Schüler, jederzeit kündbar |

### CSS-Anpassungen
- Neue Tab-Styles: `.features-tabs`, `.features-tab`, `.features-tab.active`
- Bestehende `.feature-card`, `.feature-icon` werden nicht mehr benötigt (durch Emoji + neues Layout ersetzt)
- Emoji statt SVG-Icons

---

## 2. FAQ-Sektion

### Datei
Neue Dateien: `src/components/FAQ.jsx` + `src/components/FAQ.css`

### In App.jsx einbinden
`FAQ` nach `Statement`, vor `DownloadCTA` in `<HomePage />`.

### Aufbau
- Sektion-Heading: „Häufige Fragen"
- Max-Width: `720px`, zentriert im Container
- 7 Accordion-Items, durch Linien getrennt
- State: `openIndex` (null oder Index) — immer nur eine Frage offen
- Toggle-Icon: `+` (geschlossen) / `−` (offen) in Orange (`#FF6800`)
- Antwort: sanfte Höhen-Animation via CSS (`max-height` Transition)
- `data-reveal` für Scroll-Animation (wie alle anderen Sektionen)

### Fragen & Antworten

| # | Frage | Antwort |
|---|-------|---------|
| 1 | Wie funktioniert das Abo? | 0,99 € pro Monat, jederzeit kündbar — direkt über den App Store oder Google Play. |
| 2 | Kann ich die App ohne Lehrer nutzen? | Nein, du brauchst einen aktiven Kurs von deinem Lehrer — ohne Einladungscode gibt es keine Lektionen. |
| 3 | Wie bekomme ich einen Einladungscode? | Von deinem Lehrer — er teilt ihn mit der Klasse, z. B. per Elternbrief oder im Unterricht. |
| 4 | Wie registriere ich mich als Lehrer? | Bei der Registrierung „Ich bin Lehrer" auswählen. Lehrer zahlen nichts. |
| 5 | Welche Fächer werden unterstützt? | Ausschließlich Fremdsprachen und Vokabeltraining. |
| 6 | Gibt es eine Web-Version? | Nein, VocabTrack gibt es nur als iOS- und Android-App. |
| 7 | Was sind Tickets? | Eine Belohnungswährung: durch gute Leistungen verdient, für Premium-Spiele wie Tetris und Block Blast einlösen. |

---

## Technische Entscheidungen

- **Tab-State**: `useState` in `Features.jsx` — kein URL-State, kein Context nötig
- **Accordion-State**: `useState` in `FAQ.jsx` — ein `openIndex` (null = alle geschlossen)
- **Keine neuen Abhängigkeiten**: rein mit React + CSS
- **Emoji statt SVG**: für die Feature-Karten, einfacher zu pflegen
- **Bestehende Patterns beibehalten**: `data-reveal`, `max-width: 1200px`, `padding: 0 40px`, `#FAF3E8` Hintergrund
