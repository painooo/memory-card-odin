import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MemoryCards from './Game.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MemoryCards />
  </StrictMode>,
)
