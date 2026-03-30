# Statement Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `Statement` section between `<Features />` and `<DownloadCTA />` that presents a condensed problem-statement and closing vision quote in an editorial, Apple-style layout.

**Architecture:** One new React component (`Statement.jsx` + `Statement.css`) registered in `App.jsx`. The headline highlight animates in on scroll using `IntersectionObserver` — the same pattern used in `Features.jsx`.

**Tech Stack:** React, CSS (no external libraries), Vite dev server

---

## File Map

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `src/components/Statement.jsx` | Component markup and scroll animation logic |
| Create | `src/components/Statement.css` | All styles for the Statement section |
| Modify | `src/App.jsx` | Import and render `<Statement />` |

---

### Task 1: Create Statement.css

**Files:**
- Create: `src/components/Statement.css`

- [ ] **Step 1: Create the CSS file**

```css
.statement {
  padding: 80px 48px;
  text-align: center;
}

.statement-inner {
  max-width: 680px;
  margin: 0 auto;
}

.statement-heading {
  font-size: clamp(32px, 4.5vw, 56px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
  color: #1a1a1a;
  margin-bottom: 28px;
}

.statement-highlight {
  display: inline;
  background: linear-gradient(to bottom, transparent 45%, rgba(255, 104, 0, 0.4) 45%);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  padding: 0 4px;
}

.statement-highlight.highlight-animate {
  background-size: 100% 100%;
  transition: background-size 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.statement-body {
  font-size: 17px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

.statement-quote {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.45;
  letter-spacing: -0.4px;
  font-style: italic;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 28px;
  max-width: 480px;
  margin: 0 auto;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Statement.css
git commit -m "feat: add Statement section styles"
```

---

### Task 2: Create Statement.jsx

**Files:**
- Create: `src/components/Statement.jsx`
- Reference: `src/components/Features.jsx` (same IntersectionObserver pattern)

- [ ] **Step 1: Create the component**

```jsx
import { useEffect, useRef } from 'react'
import './Statement.css'

export default function Statement() {
  const highlightRef = useRef(null)

  useEffect(() => {
    const el = highlightRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('highlight-animate')
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="statement">
      <div className="statement-inner">
        <h2 className="statement-heading">
          Das alte System kann{' '}
          <span className="statement-highlight" ref={highlightRef}>
            gar nicht funktionieren.
          </span>
        </h2>

        <p className="statement-body">
          Schüler lernen keine Vokabeln — und Lehrer haben nicht die Kapazität,
          jedes Mal zu kontrollieren. Soll jede Stunde ein Vokabeltest
          geschrieben werden? Nein. Das kostet Zeit und schädigt das Verhältnis.
        </p>

        <p className="statement-quote">
          „Vokabeln sind nicht nur Wörter im Schulbuch — sondern der Baustein
          für Beziehungen weit über das eigene Land hinaus."
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify the dev server compiles without errors**

Run: `npm run dev`
Expected: No errors in terminal, app loads at `http://localhost:5173`
(The component won't be visible yet — it's not imported in App.jsx)

- [ ] **Step 3: Commit**

```bash
git add src/components/Statement.jsx
git commit -m "feat: add Statement component"
```

---

### Task 3: Register Statement in App.jsx

**Files:**
- Modify: `src/App.jsx`

Current `App.jsx` renders:
```jsx
<Nav />
<Hero />
<AppPreview />
<Features />
<DownloadCTA />
<Footer />
```

- [ ] **Step 1: Add the import at the top of App.jsx** (after the existing imports)

```jsx
import Statement from './components/Statement'
```

- [ ] **Step 2: Render `<Statement />` between `<Features />` and `<DownloadCTA />`**

```jsx
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AppPreview />
      <Features />
      <Statement />
      <DownloadCTA />
      <Footer />
    </>
  )
}
```

- [ ] **Step 3: Verify visually in the browser**

Open `http://localhost:5173`, scroll past the Features section.
Check:
- The headline "Das alte System kann gar nicht funktionieren." appears centered
- Scrolling into the section triggers the orange underline animation on "gar nicht funktionieren."
- The closing quote is separated by a thin line and rendered in italic
- No layout breaks on narrow viewport (resize browser to ~375px width)

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "feat: render Statement section between Features and DownloadCTA"
```
