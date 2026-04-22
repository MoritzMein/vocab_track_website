import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AppPreview from './components/AppPreview'
import Features from './components/Features'
import Statement from './components/Statement'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'
import Feedback from './components/Feedback'
import KontoLoeschen from './components/KontoLoeschen'

function HomePage() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
        } else {
          e.target.classList.remove('visible')
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <AppPreview />
      <Features />
      <Statement />
      <DownloadCTA />
    </>
  )
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/konto-loeschen" element={<KontoLoeschen />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
