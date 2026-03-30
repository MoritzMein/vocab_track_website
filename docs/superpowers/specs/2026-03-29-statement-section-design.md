# Statement Section — Design Spec

**Date:** 2026-03-29
**Status:** Approved

## Overview

Add a new `Statement` section between `<Features />` and `<DownloadCTA />` in App.jsx. The section presents a condensed problem-statement and vision text in an editorial, Apple-style layout to emotionally bridge the feature showcase and the download call-to-action.

## Placement

```
Nav → Hero → AppPreview → Features → [Statement] → DownloadCTA → Footer
```

## Content

**Headline:**
"Das alte System kann gar nicht funktionieren."
— "gar nicht funktionieren" gets the orange underline highlight (matching the existing `.highlight` pattern from Hero/Features).

**Body text (condensed):**
"Schüler lernen keine Vokabeln — und Lehrer haben nicht die Kapazität, jedes Mal zu kontrollieren. Soll jede Stunde ein Vokabeltest geschrieben werden? Nein. Das kostet Zeit und schädigt das Verhältnis."

**Closing quote:**
„Vokabeln sind nicht nur Wörter im Schulbuch — sondern der Baustein für Beziehungen weit über das eigene Land hinaus."
— italic, separated by a thin top border, slightly larger weight

## Visual Design

- **Background:** `#FAF3E8` (same as page — no color break)
- **Layout:** centered, max-width ~680px, generous vertical padding (80px top/bottom)
- **Headline:** `clamp(32px, 4.5vw, 56px)`, weight 800, letter-spacing -2px, matching existing heading style
- **Orange highlight:** same gradient underline technique as `.highlight` in Hero.css and Features.css (`background: linear-gradient(to bottom, transparent 45%, rgba(255,104,0,0.4) 45%)`)
- **Body text:** 17px, color `#555`, line-height 1.7
- **Closing quote:** 20px, weight 700, italic, `#1a1a1a`, separated by `border-top: 1px solid rgba(0,0,0,0.08)` with 28px padding-top

## Animation

Scroll-triggered reveal on the headline highlight — same IntersectionObserver pattern as `marker-word` in Features.css:
- Background-size animates from `0% 100%` to `100% 100%` on intersection (threshold 0.5)
- Transition: `background-size 0.8s cubic-bezier(0.4, 0, 0.2, 1)`

## Implementation

- New file: `src/components/Statement.jsx`
- New file: `src/components/Statement.css`
- Edit: `src/App.jsx` — import and render `<Statement />` between `<Features />` and `<DownloadCTA />`
