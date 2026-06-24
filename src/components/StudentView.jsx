import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './StudentView.css'

const phones = [
  { src: '/screenshots/feedback-wrong.png', alt: 'Falsche Antwort' },
  { src: '/screenshots/feedback-almost.png', alt: 'Fast richtige Antwort' },
  { src: '/screenshots/feedback-correct.png', alt: 'Richtige Antwort' },
]

export default function StudentView() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setActiveIndex(index)
          }
        })
      },
      { root: el, threshold: 0.6 }
    )

    el.querySelectorAll('.sv-carousel-item').forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="sv" data-reveal>
      <div className="sv-inner">
        <div className="sv-header">
          <h2 className="sv-heading">Lernen, das sich anfühlt<br />wie ein Spiel.</h2>
          <p className="sv-sub">
            Sofortiges Feedback nach jeder Antwort. Streaks, die motivieren.
            KI, die den Kontext erklärt.
          </p>
        </div>

        {/* Desktop: 3 phones side by side */}
        <div className="sv-trio">
          <div className="sv-phone">
            <img src="/screenshots/feedback-wrong.png" alt="Falsche Antwort" />
          </div>
          <div className="sv-phone sv-phone--center">
            <img src="/screenshots/feedback-almost.png" alt="Fast richtige Antwort" />
          </div>
          <div className="sv-phone">
            <img src="/screenshots/feedback-correct.png" alt="Richtige Antwort" />
          </div>
        </div>

        {/* Mobile: swipeable carousel */}
        <div className="sv-carousel-wrapper">
          <div className="sv-carousel" ref={scrollRef}>
            {phones.map((phone, i) => (
              <div className="sv-carousel-item" key={i} data-index={i}>
                <img src={phone.src} alt={phone.alt} />
              </div>
            ))}
          </div>
          <div className="sv-dots">
            {phones.map((_, i) => (
              <span key={i} className={`sv-dot${activeIndex === i ? ' sv-dot--active' : ''}`} />
            ))}
          </div>
        </div>

        <div className="sv-cta">
          <Link to="/schueler" className="sv-learn-more">
            Mehr erfahren
            <ChevronIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ChevronIcon() {
  return (
    <svg width="9" height="15" viewBox="0 0 9 15" fill="none">
      <path d="M1 1.5L7.5 7.5L1 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
