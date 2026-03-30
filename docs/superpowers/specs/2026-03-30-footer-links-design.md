# Footer Links — Design Spec

**Date:** 2026-03-30
**Status:** Approved

## Overview

Update `Footer.jsx` to replace the existing links (Twitter, Instagram) with three links: Instagram, Impressum, Datenschutzerklärung. Layout and style remain unchanged.

## Layout

```
VocabTrack                    Instagram · Impressum · Datenschutzerklärung
```

- Brand left, links right — same as current footer
- All three links use the existing style: `font-size: 14px`, `color: #888`, hover `color: #1a1a1a`
- No CSS changes needed

## Links

| Label | href | Note |
|-------|------|-------|
| Instagram | `#` | Placeholder — user will provide URL later |
| Impressum | `#` | Placeholder — user will provide PDF link later |
| Datenschutzerklärung | `#` | Placeholder — user will provide PDF link later |

Instagram opens in a new tab (`target="_blank" rel="noopener noreferrer"`).
Impressum and Datenschutzerklärung open in a new tab as well (PDFs).

## Files Changed

| Action | File |
|--------|------|
| Modify | `src/components/Footer.jsx` |
