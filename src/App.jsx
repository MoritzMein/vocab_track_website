import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import AppPreview from './components/AppPreview'
import Features from './components/Features'
import Statement from './components/Statement'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

function App() {
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
      <Nav />
      <Hero />
      <AppPreview />
      <Features />
      <Statement />
      <DownloadCTA />
      <Footer />
    </>
  )
}

export default App
