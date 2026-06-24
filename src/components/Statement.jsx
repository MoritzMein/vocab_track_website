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
        } else {
          el.classList.remove('highlight-animate')
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="statement" data-reveal>
      <div className="statement-inner">
        <h2 className="statement-heading">
          Das alte System kann{' '}
          <span className="statement-highlight" ref={highlightRef}>
            gar nicht funktionieren.
          </span>
        </h2>

        <p className="statement-body">
          Schüler lernen keine Vokabeln — und Lehrer haben keine Zeit, das
          jede Woche nachzuprüfen. Soll jede Stunde ein Vokabeltest
          geschrieben werden? Nein. Das kostet Zeit und belastet die Beziehung.
        </p>

        <p className="statement-quote">
          „Vokabeln sind nicht nur Wörter im Schulbuch — sondern die Bausteine
          für Beziehungen weit über das eigene Land hinaus."
        </p>
      </div>
    </section>
  )
}
