import { useEffect, useRef } from 'react'
import './Features.css'
import person3 from '../assets/icons/person3.svg'
import sparklesOutline from '../assets/icons/sparkles-outline.svg'
import bookPages from '../assets/icons/book-pages.svg'

const features = [
  {
    id: 'klassenintern',
    icon: person3,
    title: 'Klassenintern',
    description: 'Speziell für deinen Kurs — deine Klasse, deine Vokabeln.',
  },
  {
    id: 'ki',
    icon: sparklesOutline,
    title: 'KI-Features',
    description: 'Intelligente Lernhilfe die sich anpasst und mitdenkt.',
  },
  {
    id: 'vokabeltest',
    icon: bookPages,
    title: 'Vokabeltest',
    description: 'Teste dein Wissen mit gezielten Übungen und Quizzen.',
  },
]

export default function Features() {
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
          Was macht Vocab Track{' '}
          <span className="marker-word" ref={wordRef}>besonders?</span>
        </h2>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.id} className="feature-card">
              <img src={f.icon} alt="" className="feature-icon" />
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
