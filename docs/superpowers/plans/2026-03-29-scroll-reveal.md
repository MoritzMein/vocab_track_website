# Scroll Reveal Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add scroll-triggered fade+scale reveal animations to all major page sections using a single global IntersectionObserver.

**Architecture:** Two CSS rules in `index.css` define the hidden/visible states. One `useEffect` in `App.jsx` sets up a single observer that watches all `[data-reveal]` elements. Each section component gets `data-reveal` on its root element — no per-component logic needed.

**Tech Stack:** React, CSS, IntersectionObserver API (built-in browser API, no library)

---

## File Map

| Action | File | Change |
|--------|------|--------|
| Modify | `src/index.css` | Append reveal CSS rules |
| Modify | `src/App.jsx` | Add `useEffect` observer |
| Modify | `src/components/Hero.jsx` | Add `data-reveal` to `<section>` |
| Modify | `src/components/AppPreview.jsx` | Add `data-reveal` to `<div>` |
| Modify | `src/components/Features.jsx` | Add `data-reveal` to `<section>` |
| Modify | `src/components/Statement.jsx` | Add `data-reveal` to `<section>` |
| Modify | `src/components/DownloadCTA.jsx` | Add `data-reveal` to `<section>` |
| Modify | `src/components/Footer.jsx` | Add `data-reveal` to `<footer>` |

---

### Task 1: Add reveal CSS to index.css

**Files:**
- Modify: `src/index.css`

Current `src/index.css` ends after the `body` rule. Append to the bottom of the file.

- [ ] **Step 1: Append the two reveal rules to `src/index.css`**

Add at the end of the file:

```css
[data-reveal] {
  opacity: 0;
  transform: scale(0.96);
}

[data-reveal].visible {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
```

- [ ] **Step 2: Verify CSS loaded**

Run: `npm run dev` (if not already running), open `http://localhost:5173`.
The page looks normal because no `data-reveal` attributes exist yet — the CSS rules have no targets. Confirm no console errors.

---

### Task 2: Add observer to App.jsx

**Files:**
- Modify: `src/App.jsx`

Current `src/App.jsx` (no React hooks imported yet):
```jsx
import Nav from './components/Nav'
import Hero from './components/Hero'
import AppPreview from './components/AppPreview'
import Features from './components/Features'
import Statement from './components/Statement'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

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

export default App
```

- [ ] **Step 1: Add `useEffect` import and observer to `src/App.jsx`**

Replace the entire file with:

```jsx
import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AppPreview from './components/AppPreview'
import Features from './components/Features'
import Statement from './components/Statement'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

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

export default App
```

- [ ] **Step 2: Verify dev server compiles without errors**

Check the terminal running `npm run dev` — no errors expected.
The page still looks blank (no `data-reveal` on any element yet, but the observer is set up).

---

### Task 3: Add `data-reveal` to all section components

**Files:**
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/AppPreview.jsx`
- Modify: `src/components/Features.jsx`
- Modify: `src/components/Statement.jsx`
- Modify: `src/components/DownloadCTA.jsx`
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Add `data-reveal` to Hero.jsx**

Change the opening tag of the returned JSX from:
```jsx
<section className="hero">
```
to:
```jsx
<section className="hero" data-reveal>
```

- [ ] **Step 2: Add `data-reveal` to AppPreview.jsx**

Change:
```jsx
<div className="preview-wrapper">
```
to:
```jsx
<div className="preview-wrapper" data-reveal>
```

- [ ] **Step 3: Add `data-reveal` to Features.jsx**

Change:
```jsx
<section className="features" id="features">
```
to:
```jsx
<section className="features" id="features" data-reveal>
```

- [ ] **Step 4: Add `data-reveal` to Statement.jsx**

Change:
```jsx
<section className="statement">
```
to:
```jsx
<section className="statement" data-reveal>
```

- [ ] **Step 5: Add `data-reveal` to DownloadCTA.jsx**

Change:
```jsx
<section className="download-cta">
```
to:
```jsx
<section className="download-cta" data-reveal>
```

- [ ] **Step 6: Add `data-reveal` to Footer.jsx**

Change:
```jsx
<footer className="footer">
```
to:
```jsx
<footer className="footer" data-reveal>
```

- [ ] **Step 7: Verify visually in the browser**

Open `http://localhost:5173` and check:
- On load, Hero is invisible for a split second then fades+scales in
- Scrolling down triggers each section to animate in as it enters the viewport
- Each section animates only once (scrolling back up and down again does not re-trigger)
- Nav is always visible (no animation — correct, it has no `data-reveal`)
