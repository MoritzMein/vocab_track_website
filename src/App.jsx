import { useEffect, useLayoutEffect } from 'react'
import { pageMeta } from './seo'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import VokabelTest from './components/VokabelTest'
import Footer from './components/Footer'
import Feedback from './components/Feedback'
import KontoLoeschen from './components/KontoLoeschen'
import Schulen from './components/Schulen'
import SchuelerPage from './components/SchuelerPage'
import Werdegang from './components/Werdegang'
import Pilotprojekt from './components/Pilotprojekt'
import Wissenschaft from './components/Wissenschaft'
import Konzept from './components/Konzept'

// Beim Vorrendern auf dem Server gibt es kein Layout, dort reicht useEffect
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

// Bei jedem Seitenwechsel oben starten; Links mit #Anker scrollen selbst
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useBrowserLayoutEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

// Titel und Beschreibung beim Seitenwechsel anpassen
function PageMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = pageMeta(pathname)
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <PageMeta />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/konto-loeschen" element={<KontoLoeschen />} />
        <Route path="/schulen" element={<Schulen />} />
        <Route path="/schueler" element={<SchuelerPage />} />
        <Route path="/vokabeltest" element={<VokabelTest />} />
        <Route path="/werdegang" element={<Werdegang />} />
        <Route path="/pilotprojekt" element={<Pilotprojekt />} />
        <Route path="/wissenschaft" element={<Wissenschaft />} />
        <Route path="/konzept" element={<Konzept />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
