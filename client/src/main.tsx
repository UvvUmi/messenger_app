import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GuestLayout from './layouts/GuestLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GuestLayout/>
  </StrictMode>,
)
