import { useLayoutEffect } from 'react'
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

// Bei jedem Seitenwechsel oben starten; Links mit #Anker scrollen selbst
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
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
      </Routes>
      <Footer />
    </>
  )
}

export default App
