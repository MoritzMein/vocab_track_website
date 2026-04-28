# Schulen Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Neue `/schulen` Seite für Schulleitungs-Akquise mit Hero, Problem, Lösung, Pilotphase-Block und Kontaktformular — plus Nav-Link „Für Schulen".

**Architecture:** Neue Komponente `Schulen.jsx` + `Schulen.css` nach dem etablierten Muster (jede Komponente hat ihre eigene CSS-Datei). Route wird in `App.jsx` registriert, Nav-Link in `Nav.jsx` ergänzt. Formspree für das Kontaktformular (wie bestehende Feedback-Komponente).

**Tech Stack:** React, React Router, Formspree (`@formspree/react`), Inter (bereits geladen), CSS Modules per Komponente

---

### Task 1: Schulen.css erstellen

**Files:**
- Create: `src/components/Schulen.css`

- [ ] **Step 1: CSS-Datei anlegen**

```css
/* src/components/Schulen.css */

.schulen {
  padding: 80px 48px 120px;
  max-width: 860px;
  margin: 0 auto;
}

/* ── Hero ─────────────────────────────────── */

.schulen-hero {
  text-align: center;
  margin-bottom: 80px;
}

.schulen-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 104, 0, 0.9);
  margin-bottom: 20px;
}

.schulen-heading {
  font-size: clamp(36px, 5vw, 62px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -2.5px;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.schulen-sub {
  font-size: 18px;
  color: #555;
  line-height: 1.65;
  max-width: 560px;
  margin: 0 auto 28px;
}

.schulen-badges {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.schulen-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #1a1a1a;
  background: rgba(0, 0, 0, 0.05);
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  padding: 7px 14px;
  border-radius: 20px;
}

.schulen-badge-check {
  color: rgba(255, 104, 0, 0.9);
  font-weight: 800;
}

/* ── Sections ─────────────────────────────── */

.schulen-section {
  margin-bottom: 72px;
}

.schulen-section-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(255, 104, 0, 0.9);
  margin-bottom: 14px;
}

.schulen-section-heading {
  font-size: clamp(26px, 3vw, 36px);
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.15;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.schulen-section-text {
  font-size: 17px;
  color: #444;
  line-height: 1.7;
}

/* ── Lösung Cards ─────────────────────────── */

.schulen-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 8px;
}

.schulen-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.025);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 20px 22px;
}

.schulen-card-icon {
  font-size: 22px;
  flex-shrink: 0;
  margin-top: 2px;
}

.schulen-card-title {
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.schulen-card-text {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

/* ── Pilotphase ───────────────────────────── */

.schulen-pilot {
  background: linear-gradient(135deg, rgba(255, 104, 0, 0.07) 0%, rgba(255, 104, 0, 0.03) 100%);
  border: 1.5px solid rgba(255, 104, 0, 0.2);
  border-radius: 20px;
  padding: 32px 36px;
  margin-bottom: 72px;
}

.schulen-pilot .schulen-section-heading {
  margin-bottom: 10px;
}

/* ── Kontaktformular ──────────────────────── */

.schulen-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 8px;
}

.schulen-input,
.schulen-textarea {
  width: 100%;
  padding: 13px 16px;
  border-radius: 12px;
  border: 1.5px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  color: #1a1a1a;
  outline: none;
  transition: border-color 0.15s;
}

.schulen-input:focus,
.schulen-textarea:focus {
  border-color: rgba(0, 0, 0, 0.35);
}

.schulen-input::placeholder,
.schulen-textarea::placeholder {
  color: #bbb;
}

.schulen-textarea {
  resize: vertical;
  min-height: 110px;
}

.schulen-submit {
  margin-top: 6px;
  width: 100%;
  padding: 16px;
  border-radius: 14px;
  border: none;
  background-color: #1a1a1a;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.schulen-submit:hover:not(:disabled) {
  opacity: 0.78;
}

.schulen-submit:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.schulen-success {
  text-align: center;
  padding: 40px 0;
}

.schulen-success-heading {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 12px;
}

.schulen-success-text {
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 28px;
}

.schulen-back {
  display: inline-block;
  padding: 14px 28px;
  border-radius: 14px;
  background-color: #1a1a1a;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  transition: opacity 0.2s;
}

.schulen-back:hover {
  opacity: 0.78;
}

/* ── Responsive ───────────────────────────── */

@media (max-width: 768px) {
  .schulen {
    padding: 48px 24px 72px;
  }

  .schulen-heading {
    letter-spacing: -1.5px;
  }

  .schulen-hero {
    margin-bottom: 56px;
  }

  .schulen-section {
    margin-bottom: 52px;
  }

  .schulen-pilot {
    padding: 24px 20px;
    margin-bottom: 52px;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Schulen.css
git commit -m "feat: add Schulen page CSS"
```

---

### Task 2: Schulen.jsx erstellen

**Files:**
- Create: `src/components/Schulen.jsx`

Hinweis: Das Kontaktformular nutzt Formspree. Die Form-ID `mqegrpgg` ist dieselbe wie im Feedback-Formular — für die Produktion sollte ein separates Formspree-Formular angelegt werden, damit Schulanfragen getrennt eingehen. Für jetzt funktioniert dieselbe ID.

- [ ] **Step 1: Schulen.jsx anlegen**

```jsx
import { useForm, ValidationError } from '@formspree/react'
import './Schulen.css'

const LOESUNG_CARDS = [
  {
    icon: '⏱',
    title: 'Lehrer sparen wertvolle Zeit',
    text: 'Vokabellisten in Sekunden per KI generieren oder Schulbuch-Seiten einscannen — kein manuelles Abtippen, keine verlorenen Zettel.',
  },
  {
    icon: '📊',
    title: 'Voller Einblick in das Lernverhalten',
    text: 'Lehrer sehen auf einen Blick, wer aktiv lernt und wer hinterherhinkt — und können gezielt fördern, bevor der nächste Test kommt.',
  },
  {
    icon: '🔒',
    title: 'DSGVO-konform & sicher',
    text: 'Alle Daten werden auf europäischen Servern gespeichert. Datenschutz ist kein Nachgedanke, sondern Grundlage.',
  },
]

export default function Schulen() {
  const [state, handleSubmit] = useForm('mqegrpgg')

  if (state.succeeded) {
    return (
      <div className="schulen">
        <div className="schulen-success">
          <h1 className="schulen-success-heading">Vielen Dank!</h1>
          <p className="schulen-success-text">
            Ihre Anfrage ist eingegangen. Wir melden uns schnellstmöglich bei Ihnen.
          </p>
          <a href="/" className="schulen-back">Zurück zur Startseite</a>
        </div>
      </div>
    )
  }

  return (
    <div className="schulen" data-reveal>

      {/* Hero */}
      <div className="schulen-hero">
        <span className="schulen-label">Für Schulen</span>
        <h1 className="schulen-heading">
          Vokabellernen neu gedacht —<br />für Ihre Schule.
        </h1>
        <p className="schulen-sub">
          VocabTrack verbindet Lehrer und Schüler digital. Weniger Aufwand für Lehrkräfte, mehr Lernfortschritt für Schüler — und voller Überblick für die Schulleitung.
        </p>
        <div className="schulen-badges">
          <span className="schulen-badge">
            <span className="schulen-badge-check">✓</span> DSGVO-konform
          </span>
          <span className="schulen-badge">
            <span className="schulen-badge-check">✓</span> Kostenlos in der Pilotphase
          </span>
          <span className="schulen-badge">
            <span className="schulen-badge-check">✓</span> Europäische Server
          </span>
        </div>
      </div>

      {/* Problem */}
      <div className="schulen-section">
        <div className="schulen-section-label">Das Problem</div>
        <h2 className="schulen-section-heading">
          Das alte System kann gar nicht funktionieren.
        </h2>
        <p className="schulen-section-text">
          Schüler lernen keine Vokabeln — und Lehrkräfte haben nicht die Kapazität, dies jedes Mal zu kontrollieren. Klassische Vokabellisten gehen verloren, der Lernstand ist unsichtbar, und wertvolle Unterrichtszeit geht für Kontrolle drauf statt für Förderung.
        </p>
      </div>

      {/* Lösung */}
      <div className="schulen-section">
        <div className="schulen-section-label">Die Lösung</div>
        <h2 className="schulen-section-heading">
          Was VocabTrack für Ihre Schule macht
        </h2>
        <div className="schulen-cards">
          {LOESUNG_CARDS.map((card) => (
            <div key={card.title} className="schulen-card">
              <div className="schulen-card-icon">{card.icon}</div>
              <div>
                <div className="schulen-card-title">{card.title}</div>
                <div className="schulen-card-text">{card.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pilotphase */}
      <div className="schulen-pilot">
        <div className="schulen-section-label">Pilotphase</div>
        <h2 className="schulen-section-heading">Jetzt kostenlos starten</h2>
        <p className="schulen-section-text">
          VocabTrack befindet sich aktuell in der Pilotphase und ist für Schulen vollständig kostenlos. Schulen, die jetzt einsteigen, gestalten die Weiterentwicklung aktiv mit und profitieren von direktem Support.
        </p>
      </div>

      {/* Kontaktformular */}
      <div className="schulen-section">
        <div className="schulen-section-label">Kontakt</div>
        <h2 className="schulen-section-heading">Interesse? Schreiben Sie uns.</h2>
        <form className="schulen-form" onSubmit={handleSubmit}>
          <input
            className="schulen-input"
            type="text"
            name="name"
            placeholder="Ihr Name"
            required
          />
          <ValidationError field="name" errors={state.errors} />

          <input
            className="schulen-input"
            type="text"
            name="schule"
            placeholder="Schule & Ort"
            required
          />
          <ValidationError field="schule" errors={state.errors} />

          <input
            className="schulen-input"
            type="email"
            name="email"
            placeholder="E-Mail-Adresse"
            required
          />
          <ValidationError field="email" errors={state.errors} />

          <textarea
            className="schulen-textarea"
            name="nachricht"
            placeholder="Nachricht (optional)"
            rows="4"
          />
          <ValidationError field="nachricht" errors={state.errors} />

          <button
            type="submit"
            className="schulen-submit"
            disabled={state.submitting}
          >
            {state.submitting ? 'Wird gesendet...' : 'Anfrage senden'}
          </button>
        </form>
      </div>

    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Schulen.jsx
git commit -m "feat: add Schulen page component"
```

---

### Task 3: Route in App.jsx registrieren

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Import ergänzen**

In `src/App.jsx` nach dem bestehenden `KontoLoeschen`-Import einfügen:

```jsx
import Schulen from './components/Schulen'
```

- [ ] **Step 2: Route hinzufügen**

Direkt nach der `/konto-loeschen` Route einfügen:

```jsx
<Route path="/schulen" element={<Schulen />} />
```

- [ ] **Step 3: Prüfen ob App.jsx korrekt aussieht**

`src/App.jsx` sollte nun diese Routes enthalten:
```jsx
<Route path="/" element={<HomePage />} />
<Route path="/feedback" element={<Feedback />} />
<Route path="/konto-loeschen" element={<KontoLoeschen />} />
<Route path="/konzept" element={<Konzept />} />
<Route path="/schulen" element={<Schulen />} />
```

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "feat: register /schulen route"
```

---

### Task 4: Nav-Link „Für Schulen" ergänzen

**Files:**
- Modify: `src/components/Nav.jsx`

- [ ] **Step 1: Zweiten Nav-Link hinzufügen**

In `Nav.jsx` im `nav-right`-Div direkt vor dem bestehenden „Konzept"-Link einfügen:

```jsx
<Link to="/schulen" className="nav-link">
  Für Schulen
</Link>
```

Die `nav-right`-Div sollte danach so aussehen:
```jsx
<div className="nav-right">
  <Link to="/schulen" className="nav-link">
    Für Schulen
  </Link>
  <Link to="/konzept" className="nav-link">
    Konzept
  </Link>
  <a
    href="https://apps.apple.com"
    className="nav-appstore"
    target="_blank"
    rel="noopener noreferrer"
  >
    <AppleIcon />
    App Store
  </a>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Nav.jsx
git commit -m "feat: add Für Schulen nav link"
```
