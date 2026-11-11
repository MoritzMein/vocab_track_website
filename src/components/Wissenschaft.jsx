import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { METHODS, REFS, EXTRA } from './wissenschaftInhalt'
import './Wissenschaft.css'

// Wissenschaftliche Grundlagen von VocabTrack: zwölf Methoden mit Studien und Quellen
export default function Wissenschaft() {
  const mainRef = useRef(null)
  useCollapseOffscreen(mainRef)
  useCenterIllustrations(mainRef)
  useScrollToHash(mainRef)

  return (
    <main ref={mainRef} className="wissenschaft page-enter">
      <header className="wiss-header">
        <div className="wiss-header-text">
        <p className="wiss-brand"><span>Wissenschaft</span></p>
        <h1>Wissenschaftliche Fundierung von VocabTrack</h1>
        <p className="wiss-intro">
          Die beiden Kernprinzipien von VocabTrack sind <strong>aktives Abrufen</strong> und{' '}
          <strong>verteiltes Wiederholen</strong>. Eine große Übersichtsarbeit hat zehn verbreitete
          Lerntechniken verglichen, und genau diese beiden bekamen als einzige die Bestnote „high
          utility“ (Dunlosky et al., 2013). Viele weitere Funktionen bauen auf gut belegten Effekten
          auf: Feedback, Lernrichtung, lautes Sprechen und formatives Assessment. Beispielsätze
          zeigen, wie ein Wort im echten Satz verwendet wird. Spiele und Belohnungen sind solide belegt, vor allem für die
          Motivation. Für den Lernerfolg selbst ist die Studienlage dort gemischter. Wie das
          im echten Unterricht aussieht, zeigt unser{' '}
          <Link to="/pilotprojekt" className="wiss-intro-link">Pilotprojekt an einem Gymnasium in NRW</Link>.
        </p>
        <p className="wiss-stand">
          Stand: November 2026 · Alle Quellen über Crossref bzw. Verlagsseiten geprüft (Autoren, Jahr, Journal, Seiten, DOI)
        </p>
        </div>
        <img
          src="/wissenschaft-fundiert.svg"
          width="600"
          height="500"
          alt="Lernkurve mit Wiederholungen unter der Lupe"
          className="wiss-hero-image"
        />
      </header>

      <hr className="wiss-divider" />

      <section className="wiss-overview" aria-labelledby="wiss-uebersicht">
        <h2 id="wiss-uebersicht">Übersicht</h2>
        <ol className="wiss-overview-list">
          {METHODS.map((m, i) => (
            <li key={m.id}>
              <a href={`#${m.id}`} className="wiss-overview-item" onClick={jumpToCenter}>
                <span className="wiss-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="wiss-overview-text">
                  <span className="wiss-overview-method">{m.short}</span>
                  <span className="wiss-overview-principle">{m.principle}</span>
                </span>
                <span className={`wiss-bars wiss-bars--${m.level}`} title={`Evidenz: ${m.evidence}`}>
                  <span className="wiss-bars-icon" aria-hidden="true">
                    {[1, 2, 3].map(n => <span key={n} className={n <= m.level ? 'is-on' : ''} />)}
                  </span>
                  <span className="visually-hidden">Evidenz: {m.evidence}</span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <hr className="wiss-divider" />

      {METHODS.map((m, i) => (
        <section key={m.id} id={m.id} className={`wiss-method${i % 2 ? ' wiss-method--reverse' : ''}`}>
          <div className="wiss-method-text">
            <div className="wiss-method-main">
            <p className="wiss-method-meta">
              <span className="wiss-meta-number">{String(i + 1).padStart(2, '0')}</span>
              <span className="wiss-kicker">{m.kicker}</span>
              <EvidenceBars level={m.level}>{m.evidence}</EvidenceBars>
            </p>
            <h2>{m.title}</h2>
            <p className="wiss-does">{m.does}</p>
            <p className="wiss-why">{m.why}</p>

            {m.stat && (
              <p className="wiss-stat">
                <span className="wiss-stat-value">
                  {m.stat.value}
                  {m.stat.compare && <span className="wiss-stat-compare"> {m.stat.compare}</span>}
                </span>
                <span className="wiss-stat-label">{m.stat.label}</span>
                <span className="wiss-stat-source">{m.stat.source}</span>
              </p>
            )}
            </div>

            {/* Studien, Einordnung und Quellen aufklappbar, damit der Abschnitt kurz bleibt */}
            <details className="wiss-more">
              <summary>
                <span>Was die Forschung zeigt</span>
                <PlusIcon />
              </summary>
              <div className="wiss-more-body">
                <Points points={m.points} />

                {m.note && (
                  <div className="wiss-note">
                    <h3>{m.note.title}</h3>
                    {m.note.text && <p>{m.note.text}</p>}
                    <Points points={m.note.points} />
                    {m.note.outro && <p>{m.note.outro}</p>}
                  </div>
                )}

                <details className="wiss-sources">
                  <summary>{m.sources.length === 1 ? 'Quelle' : `Quellen (${m.sources.length})`}</summary>
                  <ul>
                    {m.sources.map(key => <li key={key}><Reference refKey={key} /></li>)}
                  </ul>
                </details>
              </div>
            </details>
          </div>

          {/* Platzhalter, bis die Illustration da ist (image in wissenschaftInhalt.jsx setzen) */}
          {m.image ? (
            <Illustration method={m} />
          ) : (
            <div className="wiss-method-image wiss-placeholder">Illustration folgt</div>
          )}
        </section>
      ))}

      <section className="wiss-section" aria-labelledby="wiss-ergaenzend">
        <h2 id="wiss-ergaenzend">Ergänzend: Vokabellernen per Smartphone allgemein</h2>
        {EXTRA.map(item => (
          <div key={item.ref} className="wiss-extra">
            <p>{item.text}</p>
            <p className="wiss-reference"><Reference refKey={item.ref} /></p>
          </div>
        ))}
      </section>

      {/* Aufklappbar; die Einträge bleiben im HTML, damit Suchmaschinen sie lesen */}
      <section className="wiss-section" aria-labelledby="wiss-literatur">
        <details className="wiss-literature">
          <summary>
            <h2 id="wiss-literatur">Literaturverzeichnis</h2>
            <ChevronIcon />
          </summary>
          <ul className="wiss-bibliography">
            {Object.keys(REFS).map(key => <li key={key}><Reference refKey={key} /></li>)}
          </ul>
        </details>
      </section>
    </main>
  )
}

// Beim Vorrendern auf dem Server gibt es kein Layout, dort reicht useEffect
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

// Kommt man mit #Anker auf die Seite (z. B. „Methoden genauer erkunden“), steht die Methode
// knapp unter der Navigation, so weit oben, dass von der Übersicht darüber nichts zu sehen ist.
// Das schrittweise Einblenden beginnt dann direkt bei dieser Methode statt am Seitenanfang.
function useScrollToHash(rootRef) {
  const { hash } = useLocation()
  useBrowserLayoutEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (!target) return
    const root = rootRef.current
    root.classList.remove('page-enter')
    const sections = [...root.children]
    const start = sections.indexOf(target)
    sections.slice(start, start + 8).forEach((el, i) => {
      el.style.animation = `section-in 0.5s ease ${0.15 + i * 0.2}s backwards`
    })
    const navHeight = document.querySelector('nav')?.getBoundingClientRect().bottom ?? 0
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 40
    window.scrollTo({ top, behavior: 'instant' })
  }, [hash, rootRef])
}

function scrollToCenter(target) {
  // Sichtbarer Bereich beginnt unter der festen Navigation
  const navHeight = document.querySelector('nav')?.getBoundingClientRect().bottom ?? 0
  const visible = window.innerHeight - navHeight
  const space = Math.max(24, (visible - target.offsetHeight) / 2)
  const top = target.getBoundingClientRect().top + window.scrollY - navHeight - space
  window.scrollTo({ top, behavior: 'smooth' })
}

// Sprung aus der Übersicht: Methode in die Mitte des Bildschirms scrollen statt an den oberen Rand.
// Ist sie höher als der sichtbare Bereich, bleibt der Anfang knapp unter der Navigation sichtbar.
function jumpToCenter(event) {
  const id = event.currentTarget.hash.slice(1)
  const target = document.getElementById(id)
  if (!target) return
  event.preventDefault()
  scrollToCenter(target)
  history.pushState(null, '', `#${id}`)
}

// Illustration mittig zum Textblock ausrichten, gemessen bis zur Unterkante der zugeklappten
// Forschungskarte. So verrutscht sie beim Aufklappen nicht. Ist sie höher als der Block, bleibt sie oben bündig.
function useCenterIllustrations(rootRef) {
  useEffect(() => {
    const sections = [...rootRef.current.querySelectorAll('.wiss-method')]
    const update = () => {
      const sideBySide = window.matchMedia('(min-width: 901px)').matches
      for (const section of sections) {
        const text = section.querySelector('.wiss-method-text')
        const summary = section.querySelector('.wiss-more summary')
        const image = section.querySelector('.wiss-method-image')
        // + 2 px: untere Randlinie der Karte
        const blockHeight = summary.getBoundingClientRect().bottom - text.getBoundingClientRect().top + 2
        const offset = sideBySide ? Math.max(0, (blockHeight - image.offsetHeight) / 2) : 0
        image.style.marginTop = `${offset}px`
      }
    }
    const observer = new ResizeObserver(update)
    sections.forEach(section => {
      observer.observe(section.querySelector('.wiss-method-text'))
      observer.observe(section.querySelector('.wiss-method-image'))
    })
    window.addEventListener('resize', update)
    update()
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [rootRef])
}

// Aufgeklappte Forschungskarten klappen wieder zu, sobald sie ganz aus dem Bild sind.
// Liegt die Karte über dem Bildschirm, wird erst zugeklappt, wenn das Scrollen zur Ruhe kommt:
// Ein Scroll-Ausgleich mitten im Schwung wirkt auf dem iPhone wie ein kurzes Neuladen.
function useCollapseOffscreen(rootRef) {
  useEffect(() => {
    const cards = rootRef.current.querySelectorAll('.wiss-more')
    const waiting = new Set()
    let timer

    const collapse = card => {
      card.open = false
      card.querySelectorAll('details[open]').forEach(d => { d.open = false })
    }

    // Zuklappen über dem Bildschirm, ohne dass der sichtbare Inhalt springt
    const collapseAbove = () => {
      for (const card of waiting) {
        waiting.delete(card)
        const rect = card.getBoundingClientRect()
        if (!card.open || rect.bottom > 0) continue
        const anchor = card.closest('section').nextElementSibling
        const before = anchor?.getBoundingClientRect().top
        collapse(card)
        const shift = anchor ? anchor.getBoundingClientRect().top - before : 0
        if (shift) window.scrollBy({ top: shift, behavior: 'instant' })
      }
    }

    const onScroll = () => {
      if (!waiting.size) return
      clearTimeout(timer)
      timer = setTimeout(collapseAbove, 250)
    }

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const card = entry.target
        if (entry.isIntersecting) {
          waiting.delete(card)
          continue
        }
        if (!card.open) continue
        if (entry.boundingClientRect.bottom <= 0) {
          waiting.add(card)
          onScroll()
        } else {
          // Unter dem Bildschirm: Zuklappen verschiebt nichts Sichtbares
          collapse(card)
        }
      }
    })
    cards.forEach(card => observer.observe(card))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [rootRef])
}

// Illustration, deren Animation nur läuft, solange man sie wirklich ansieht.
// Sonst schwebt sie nur (Animation „sw“). Das <img> bleibt für Suchmaschinen und ohne JavaScript;
// im Browser wird das SVG in ein Shadow DOM geladen, damit die Seite die Animationen steuern kann
// und sich die Klassennamen der einzelnen SVGs nicht in die Quere kommen.
function Illustration({ method: m }) {
  const ref = useRef(null)

  useEffect(() => {
    const host = ref.current
    let observer
    let cancelled = false

    fetch(m.image)
      .then(res => res.text())
      .then(text => {
        if (cancelled) return
        const root = host.shadowRoot ?? host.attachShadow({ mode: 'open' })
        root.innerHTML = `<style>svg{display:block;width:100%;height:auto}</style>${text}`
        const svg = root.querySelector('svg')
        svg.querySelectorAll('title').forEach(t => t.remove())
        svg.setAttribute('aria-label', m.alt ?? '')

        const main = () => root.getAnimations().filter(a => a.animationName !== 'sw')
        const stop = () => main().forEach(a => { a.pause(); a.currentTime = 0 })
        const start = () => main().forEach(a => { a.currentTime = 0; a.play() })
        stop()

        observer = new IntersectionObserver(
          ([entry]) => (entry.intersectionRatio >= 0.6 ? start() : stop()),
          { threshold: [0, 0.6] }
        )
        observer.observe(host)
      })
      .catch(() => {}) // Dann bleibt einfach das normale Bild stehen

    return () => {
      cancelled = true
      observer?.disconnect()
    }
  }, [m.image, m.alt])

  return (
    <div
      ref={ref}
      className="wiss-method-image wiss-method-image--illustration"
      style={m.imageScale ? { transform: `scale(${m.imageScale})` } : undefined}
    >
      <img src={m.image} alt={m.alt ?? ''} width={m.imageSize?.[0] ?? 600} height={m.imageSize?.[1] ?? 520} />
    </div>
  )
}

// Evidenz als Stärke-Anzeige mit drei Balken, wie ein Empfangssignal
function EvidenceBars({ level, children }) {
  return (
    <span className={`wiss-bars wiss-bars--${level}`}>
      <span className="wiss-bars-icon" aria-hidden="true">
        {[1, 2, 3].map(n => <span key={n} className={n <= level ? 'is-on' : ''} />)}
      </span>
      <span className="visually-hidden">Evidenz: </span>{children}
    </span>
  )
}

function ChevronIcon() {
  return (
    <svg className="wiss-chevron" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg className="wiss-more-icon" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function Points({ points }) {
  return (
    <ul className="wiss-list">
      {points.map(([lead, text]) => (
        <li key={lead}><strong>{lead}:</strong> {text}</li>
      ))}
    </ul>
  )
}

// Quellenangabe im APA-Stil mit DOI-Link
function Reference({ refKey }) {
  const r = REFS[refKey]
  const url = `https://doi.org/${r.doi}`
  return (
    <>
      {r.a} ({r.y}). {r.book ? <i>{r.book}</i> : <>{r.t} <i>{r.j}</i></>}{r.r}{' '}
      <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
    </>
  )
}
