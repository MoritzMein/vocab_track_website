import { useEffect, useRef } from 'react'
import { mountLehrerIllustration } from '../illustrations/lehrerIllustration'
import FAQ from './FAQ'
import './Home.css'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.vocabtrack.app'

const LANGUAGES = [
  { icon: '/languages/englisch.svg', name: 'Englisch' },
  { icon: '/languages/franzoesisch.svg', name: 'Französisch' },
  { icon: '/languages/spanisch.svg', name: 'Spanisch' },
  { icon: '/languages/latein.svg', name: 'Latein', wide: true },
]

// Abschnitte unter dem Hero: Text und Bild, abwechselnd links und rechts
const FEATURES = [
  {
    title: 'Lehrer sehen, wer gelernt hat.',
    text: 'Nach jeder Übung sieht der Lehrer, wer teilgenommen hat und wie gut. Wer fehlt, fällt sofort auf. Ganz ohne Vokabeltest.',
    illustration: mountLehrerIllustration,
  },
  {
    title: 'Schüler lernen, weil es sich lohnt.',
    text: 'Streaks und Tickets belohnen jede richtige Antwort. Mit den Tickets schalten Schüler Spiele frei. Und weil die Abfrageart immer wieder wechselt, wird es nie eintönig.',
    image: '/lohnt-illustration.svg',
    alt: 'Brennende Streak, umgeben von Tickets, Controller, Mikrofon-Knopf und einem Kreuzworträtsel',
  },
  {
    title: 'Gelernt bleibt gelernt.',
    text: 'Alte Vokabeln werden immer wieder in neue Übungen eingestreut. So wiederholen Schüler ganz nebenbei, was sie schon können, und vergessen es auch nach Wochen nicht.',
    image: '/archiv-illustration.svg',
    alt: 'Goldene Archivkarte mit Archivstempel, Uhr und einer Punkteleiste, in der eine alte Vokabel wieder auftaucht',
  },
  {
    title: 'Und wenn doch ein Test sein muss?',
    text: 'Dann ist er in wenigen Minuten in der App erstellt. Schüler schreiben ihn auf dem iPad, Korrektur und Auswertung übernimmt die App. Und wer kein iPad hat, bekommt den Test per Knopfdruck auf Papier.',
    image: '/test-illustration.svg',
    alt: 'Zwei korrigierte Testblätter mit Häkchen und der Note 1+',
  },
]

export default function Home() {
  return (
    <main className="home page-enter">
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-brand"><span>VocabTrack</span></p>
          <h1>
            <span>Die Vokabel-App</span>
            <span>für die ganze Klasse</span>
          </h1>
          <div className="home-cta">
            <div className="home-cta-buttons">
              <a
                href="https://apps.apple.com/de/app/vocab-track/id6753958684"
                className="home-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppleIcon />
                Im App Store laden
              </a>
              <a
                href={PLAY_STORE_URL}
                className="home-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PlayIcon />
                Im Play Store laden
              </a>
            </div>
            <span className="home-cta-note">iOS & Android · Kostenlos für Lehrer</span>
          </div>
        </div>
        {/* Bühne: schwebende App-Bausteine hinter dem iPhone */}
        <div className="home-stage">
          <img
            src="/hero-bausteine.svg"
            width="1000"
            height="430"
            alt=""
            className="home-stage-bausteine"
          />
          <div className="home-phone">
            {/* Screenshot liegt hinter dem Rahmen im Bildschirmausschnitt */}
            <div className="home-phone-screen">
              <img
                src="/iphone-karteikarten.webp"
                width="920"
                height="2000"
                alt="Karteikarte in VocabTrack: umsetzbar – viable, mit Beispielsatz und Button Abfrage starten"
              />
            </div>
            <img
              src="/iphone-frame.webp"
              width="978"
              height="2000"
              alt=""
              className="home-phone-frame"
            />
          </div>
        </div>
      </section>

      <section className="home-languages" aria-label="Sprachen in VocabTrack">
        {/* Auf dem Handy als Laufband: die Liste steht doppelt da, damit es nahtlos weiterläuft */}
        <div className="home-languages-track">
          {[false, true].map(copy => (
            <ul key={String(copy)} className={copy ? 'home-languages-copy' : undefined} aria-hidden={copy || undefined}>
              {LANGUAGES.map(lang => (
                <li key={lang.name} className={`home-language${lang.wide ? ' home-language--wide' : ''}`}>
                  <img src={lang.icon} alt="" width="30" height="30" />
                  {lang.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {FEATURES.map((feature, i) => (
        <section
          key={feature.title}
          className={`home-feature${i % 2 ? ' home-feature--reverse' : ''}`}
        >
          <div className="home-feature-text">
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </div>
          {feature.illustration ? (
            <Illustration mount={feature.illustration} />
          ) : feature.image ? (
            <img src={feature.image} alt={feature.alt} width="560" height="480" className="home-feature-image" />
          ) : (
            <div className="home-feature-image home-feature-placeholder">Illustration folgt</div>
          )}
        </section>
      ))}

      <FAQ />
    </main>
  )
}

// Animierte Illustration, die sich selbst in ihr Element zeichnet
function Illustration({ mount }) {
  const ref = useRef(null)
  useEffect(() => mount(ref.current), [mount])
  return <div ref={ref} className="home-feature-image" />
}

function AppleIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.2-150.3-99.7C27.2 736.4 1 656.8 1 577.4C1 384.5 127.4 282.7 252.3 282.7c61.6 0 112.7 40.5 151.6 40.5 37.2 0 95.7-42.7 165.1-42.7 26.5 0 108.2 2.6 168.1 80.4zm-240-166.1c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
    </svg>
  )
}
