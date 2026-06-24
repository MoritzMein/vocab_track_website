import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import StudentView from './components/StudentView'
import TeacherView from './components/TeacherView'
import VokabelTest from './components/VokabelTest'
import VokabelTestTeaser from './components/VokabelTestTeaser'
import FAQ from './components/FAQ'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'
import Feedback from './components/Feedback'
import KontoLoeschen from './components/KontoLoeschen'
import Schulen from './components/Schulen'
import SchuelerPage from './components/SchuelerPage'

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
      <Problem />
      <HowItWorks />
      <StudentView />
      <TeacherView />
      <VokabelTestTeaser />
      <FAQ />
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
        <Route path="/schulen" element={<Schulen />} />
        <Route path="/schueler" element={<SchuelerPage />} />
        <Route path="/vokabeltest" element={<VokabelTest />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
