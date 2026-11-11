import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Schriften werden mit der Website ausgeliefert statt von Google Fonts geladen (DSGVO)
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import '@fontsource/caveat/700.css'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Vorgerenderte Seiten übernehmen, sonst (z. B. im Dev-Server) neu aufbauen
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
