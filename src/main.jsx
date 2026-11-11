import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
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
