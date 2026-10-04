import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GestorGastosApp } from './GestorGastosApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GestorGastosApp />
  </StrictMode>,
)
