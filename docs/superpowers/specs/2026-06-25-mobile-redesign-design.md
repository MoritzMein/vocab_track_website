# Mobile Redesign — Design Spec
**Datum:** 2026-06-25  
**Ziel:** Website auf Mobile-Geräten (iOS/Android, < 768 px) deutlich verbessern. Desktop bleibt unverändert.

---

## 1. Navigation

**Breakpoint:** `max-width: 768px`

- Alle nav-links und nav-appstore werden ausgeblendet
- Hamburger-Icon (☰) erscheint rechts
- Klick öffnet ein **Slide-down-Panel** direkt unter der Nav
  - Hintergrund: `rgba(250, 243, 232, 0.95)` mit `backdrop-filter: blur(12px)`
  - Animation: max-height 0 → auto, Opacity 0 → 1
  - Inhalt: „Für Schulen"-Link + App-Store-Button (vertikal gestapelt)
  - Schließen: erneuter Klick auf ✕-Icon (das den ☰ ersetzt)
- State-Management via React `useState` in `Nav.jsx`

---

## 2. Hero

**Breakpoint:** bereits vorhanden (`max-width: 960px` → 1 Spalte)

- Padding auf Mobile: `60px 20px 0` (statt 80px/24px)
- Letter-spacing auf `< 480px`: `-1px`
- CTA-Button: auf `< 400px` volle Breite (`width: 100%`)

---

## 3. Problem / VokabelTestTeaser

- Padding auf Mobile: `80px 20px` (statt 100px/24px)
- Letter-spacing Heading: `-1.5px` bei `< 480px`

---

## 4. HowItWorks

- Karten: 1 Spalte bei `< 480px` (bereits vorhanden)
- Tour-Panel Padding auf `< 480px`: `28px 20px`
- Kein breaking change nötig

---

## 5. StudentView — Swipeable Carousel

**Breakpoint:** `max-width: 768px`

- `.sv-trio` wird zu einem horizontalen Scroll-Container mit `scroll-snap-type: x mandatory`
- Jedes `.sv-phone` nimmt `80vw` Breite, `scroll-snap-align: center`
- Dot-Indikator: 3 Punkte, aktiver Punkt orange — per Intersection Observer aktualisiert
- Hover-Transforms werden auf Mobile deaktiviert
- Implementierung: Änderungen in `StudentView.jsx` + `StudentView.css`

---

## 6. TeacherView

- `tv-screenshot`: `width: 115%` → `width: 100%` bei `< 768px`
- Layout ist bereits einspaltig bei `< 960px`

---

## 7. Features

- Tab-Bar: bei `< 480px` horizontal scrollbar (`overflow-x: auto`, kein wrap)
- Bereits einspaltig bei `< 600px`

---

## 8. FAQ / DownloadCTA

- Nur minimale Padding-Anpassungen (bereits gut)

---

## Nicht geändert

- Desktop-Layout (alle Breakpoints > 768px)
- Inhalte / Texte
- Farbschema / Typografie-System
- Andere Seiten (Schulen, SchuelerPage, VokabelTest etc.) — separater Task
