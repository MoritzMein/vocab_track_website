# Scroll Reveal Animation — Design Spec

**Date:** 2026-03-29
**Status:** Approved

## Overview

Add scroll-triggered fade+scale reveal animations to all major page sections. When a section enters the viewport, it animates from `opacity: 0, scale(0.96)` to `opacity: 1, scale(1)`.

## Animation Style

- **Type:** Fade + Scale (opacity 0→1, transform scale 0.96→1)
- **Duration:** 0.7s
- **Easing:** `opacity` with `ease`, `transform` with `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like)
- **Trigger:** Once on first intersection (unobserved after firing — no re-animation on scroll up)
- **Threshold:** 10% of element visible (`threshold: 0.1`)

## Implementation Approach

Single global `IntersectionObserver` in `App.jsx` — one place, no per-component logic.

### CSS (`src/index.css`)

Two new rules appended to the existing global stylesheet:

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

### Observer (`src/App.jsx`)

Add a `useEffect` import and the following effect:

```js
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
```

### Sections receiving `data-reveal`

Add `data-reveal` to the root element of each component listed below. **Nav is excluded** (always visible on load).

| Component | File | Root element |
|-----------|------|--------------|
| Hero | `src/components/Hero.jsx` | `<section className="hero">` |
| AppPreview | `src/components/AppPreview.jsx` | `<div className="preview-wrapper">` |
| Features | `src/components/Features.jsx` | `<section className="features">` |
| Statement | `src/components/Statement.jsx` | `<section className="statement">` |
| DownloadCTA | `src/components/DownloadCTA.jsx` | `<section className="download-cta">` |
| Footer | `src/components/Footer.jsx` | `<footer className="footer">` |

## Files Changed

| Action | File |
|--------|------|
| Modify | `src/index.css` — append reveal CSS |
| Modify | `src/App.jsx` — add useEffect observer |
| Modify | `src/components/Hero.jsx` |
| Modify | `src/components/AppPreview.jsx` |
| Modify | `src/components/Features.jsx` |
| Modify | `src/components/Statement.jsx` |
| Modify | `src/components/DownloadCTA.jsx` |
| Modify | `src/components/Footer.jsx` |
