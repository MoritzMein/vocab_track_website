# Features Tabs + FAQ Accordion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing 3-card Features section with a tabbed feature overview and add a new FAQ accordion section to the VocabTrack homepage.

**Architecture:** `Features.jsx` is rewritten in-place with `useState` for the active tab; a new `FAQ.jsx` is created with `useState` for the open accordion item; `App.jsx` is updated to import and render `FAQ` between `Statement` and `DownloadCTA`.

**Tech Stack:** React 18, Vite, plain CSS (no test framework in project)

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Rewrite | `src/components/Features.jsx` | Tab navigation + feature cards per tab |
| Rewrite | `src/components/Features.css` | Tab button styles; keep grid/heading styles |
| Create | `src/components/FAQ.jsx` | Accordion with 7 Q&A items |
| Create | `src/components/FAQ.css` | Accordion item styles + max-height transition |
| Modify | `src/App.jsx` | Import FAQ, add between Statement and DownloadCTA |

---

### Task 1: Rewrite Features.jsx with tab navigation

**Files:**
- Rewrite: `src/components/Features.jsx`

- [ ] **Step 1: Replace Features.jsx entirely**

Write this file to `src/components/Features.jsx`:

```jsx
import { useState, useEffect, useRef } from 'react'
import './Features.css'

const TABS = [
  { id: 'schuler', label: 'Für Schüler' },
  { id: 'lehrer', label: 'Für Lehrer' },
  { id: 'plattform', label: 'Plattform' },
]

const FEATURES = {
  schuler: [
    {
      emoji: '🎯',
      title: 'Tägliche Lektionen',
      desc: 'Mit Tippfehler-Toleranz — 1 Fehler zählt als „fast richtig"',
    },
    {
      emoji: '🔥',
      title: 'Streak & Sofortfeedback',
      desc: 'Tägliche Motivation und direktes Feedback nach jeder Antwort',
    },
    {
      emoji: '🔔',
      title: 'Push-Benachrichtigungen',
      desc: 'Automatische Erinnerung bei neuen Lektionen vom Lehrer',
    },
    {
      emoji: '🎮',
      title: 'Spiele',
      desc: 'Streak Star, 1v1-Echtzeit-Duell, Block Blast und Tetris',
    },
    {
      emoji: '🎫',
      title: 'Ticket-Währung',
      desc: 'Durch gute Leistungen verdient, für Premium-Spiele einlösen',
    },
    {
      emoji: '🏆',
      title: 'Leaderboards',
      desc: 'Kurs-Ranglisten je Spiel',
    },
  ],
  lehrer: [
    {
      emoji: '👤',
      title: 'Lehrer-Account',
      desc: 'Bei der Registrierung „Ich bin Lehrer" auswählen',
    },
    {
      emoji: '📚',
      title: 'Kurse erstellen',
      desc: 'Vokabellisten einpflegen, tägliche Lektionen planen',
    },
    {
      emoji: '👥',
      title: 'Klassen verwalten',
      desc: 'Schüler per Einladungscode einladen, mehrere Kurse gleichzeitig',
    },
    {
      emoji: '🎓',
      title: 'Kostenlos für Lehrer',
      desc: 'Lehrkräfte zahlen nichts',
    },
  ],
  plattform: [
    {
      emoji: '📱',
      title: 'iOS & Android',
      desc: 'Auch iPad-optimiert',
    },
    {
      emoji: '🔑',
      title: 'Google & Apple Sign-In',
      desc: 'Schnelle Anmeldung ohne Passwort',
    },
    {
      emoji: '💳',
      title: '0,99 € / Monat',
      desc: 'Für Schüler, jederzeit kündbar',
    },
  ],
}

export default function Features() {
  const [activeTab, setActiveTab] = useState('schuler')
  const wordRef = useRef(null)

  useEffect(() => {
    const word = wordRef.current
    if (!word) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          word.classList.add('marker-animate')
        } else {
          word.classList.remove('marker-animate')
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(word)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="features" id="features" data-reveal>
      <div className="features-inner">
        <h2 className="features-heading">
          Was macht VocabTrack{' '}
          <span className="marker-word" ref={wordRef}>besonders?</span>
        </h2>

        <div className="features-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`features-tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="features-grid">
          {FEATURES[activeTab].map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-emoji">{f.emoji}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Features.jsx
git commit -m "feat: rewrite Features with tab navigation (Schüler/Lehrer/Plattform)"
```

---

### Task 2: Update Features.css

**Files:**
- Rewrite: `src/components/Features.css`

- [ ] **Step 1: Replace Features.css entirely**

Write this file to `src/components/Features.css`:

```css
.features {
  padding: 0 40px 80px;
  box-sizing: border-box;
  width: 100%;
}

.features-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.features-heading {
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 800;
  letter-spacing: -1.5px;
  color: #1a1a1a;
  line-height: 1.1;
  margin-bottom: 40px;
}

.marker-word {
  display: inline;
  font-weight: 900;
  background: linear-gradient(to bottom, transparent 45%, rgba(255, 104, 0, 0.4) 45%);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  padding: 0 4px;
}

.marker-word.marker-animate {
  background-size: 100% 100%;
  transition: background-size 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.features-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.features-tab {
  padding: 9px 20px;
  background: #e8dfd0;
  color: #888;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.features-tab.active {
  background: #1a1a1a;
  color: #fff;
  font-weight: 700;
}

.features-tab:not(.active):hover {
  background: #ddd5c8;
  color: #555;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 32px;
  background: white;
  border-radius: 16px;
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-2px);
}

.feature-emoji {
  font-size: 28px;
  line-height: 1;
}

.feature-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.3px;
}

.feature-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .features {
    padding: 0 20px 60px;
  }

  .features-heading {
    letter-spacing: -1px;
    margin-bottom: 28px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 24px 20px;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Features.css
git commit -m "style: update Features CSS for tab buttons and emoji cards"
```

---

### Task 3: Create FAQ.jsx

**Files:**
- Create: `src/components/FAQ.jsx`

- [ ] **Step 1: Create FAQ.jsx**

Write this file to `src/components/FAQ.jsx`:

```jsx
import { useState } from 'react'
import './FAQ.css'

const FAQS = [
  {
    q: 'Wie funktioniert das Abo?',
    a: '0,99 € pro Monat, jederzeit kündbar — direkt über den App Store oder Google Play.',
  },
  {
    q: 'Kann ich die App ohne Lehrer nutzen?',
    a: 'Nein, du brauchst einen aktiven Kurs von deinem Lehrer — ohne Einladungscode gibt es keine Lektionen.',
  },
  {
    q: 'Wie bekomme ich einen Einladungscode?',
    a: 'Von deinem Lehrer — er teilt ihn mit der Klasse, z. B. per Elternbrief oder im Unterricht.',
  },
  {
    q: 'Wie registriere ich mich als Lehrer?',
    a: 'Bei der Registrierung „Ich bin Lehrer" auswählen. Lehrer zahlen nichts.',
  },
  {
    q: 'Welche Fächer werden unterstützt?',
    a: 'Ausschließlich Fremdsprachen und Vokabeltraining.',
  },
  {
    q: 'Gibt es eine Web-Version?',
    a: 'Nein, VocabTrack gibt es nur als iOS- und Android-App.',
  },
  {
    q: 'Was sind Tickets?',
    a: 'Eine Belohnungswährung: durch gute Leistungen verdient, für Premium-Spiele wie Tetris und Block Blast einlösen.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq" data-reveal>
      <div className="faq-inner">
        <h2 className="faq-heading">Häufige Fragen</h2>
        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FAQ.jsx
git commit -m "feat: add FAQ accordion component with 7 Q&A items"
```

---

### Task 4: Create FAQ.css

**Files:**
- Create: `src/components/FAQ.css`

- [ ] **Step 1: Create FAQ.css**

Write this file to `src/components/FAQ.css`:

```css
.faq {
  padding: 0 40px 80px;
  box-sizing: border-box;
  width: 100%;
}

.faq-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.faq-heading {
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 800;
  letter-spacing: -1.5px;
  color: #1a1a1a;
  line-height: 1.1;
  margin-bottom: 48px;
}

.faq-list {
  max-width: 720px;
}

.faq-item {
  border-top: 1.5px solid #e0d8cc;
}

.faq-item:last-child {
  border-bottom: 1.5px solid #e0d8cc;
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 20px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.4;
}

.faq-icon {
  flex-shrink: 0;
  font-size: 20px;
  font-weight: 700;
  color: #FF6800;
  transition: transform 0.2s;
  line-height: 1;
}

.faq-answer {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-item.open .faq-answer {
  max-height: 200px;
  padding-bottom: 20px;
}

.faq-answer p {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 600px) {
  .faq {
    padding: 0 20px 60px;
  }

  .faq-heading {
    letter-spacing: -1px;
    margin-bottom: 32px;
  }

  .faq-question {
    font-size: 15px;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FAQ.css
git commit -m "style: add FAQ accordion CSS with max-height transition"
```

---

### Task 5: Wire FAQ into App.jsx

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add FAQ import and component to HomePage**

In `src/App.jsx`, add the import after the existing Statement import:

```jsx
import FAQ from './components/FAQ'
```

Replace the `<HomePage />` render function body:

```jsx
function HomePage() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
        } else {
          e.target.classList.remove('visible')
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <AppPreview />
      <Features />
      <Statement />
      <FAQ />
      <DownloadCTA />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/App.jsx
git commit -m "feat: add FAQ section to homepage between Statement and DownloadCTA"
```

---

### Task 6: Visual verification

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Open `http://localhost:5173` in the browser.

- [ ] **Step 2: Check Features section**

- All three tabs visible: „Für Schüler", „Für Lehrer", „Plattform"
- „Für Schüler" is active by default (dark background)
- Clicking „Für Lehrer" shows 4 cards; „Plattform" shows 3 cards
- Marker animation on „besonders?" fires on scroll
- Mobile (resize to < 600px): tabs wrap, grid collapses to 1 column

- [ ] **Step 3: Check FAQ section**

- 7 questions listed with dividers
- Clicking a question opens it (orange `−` icon, answer slides in)
- Clicking the same question closes it
- Clicking a second question closes the first and opens the second
- Mobile: text readable, no overflow

- [ ] **Step 4: Stop server and commit if all good**

```bash
git add -p  # verify no unintended changes
git commit -m "chore: visual verification complete — features tabs and FAQ accordion"
```
