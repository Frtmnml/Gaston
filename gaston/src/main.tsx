import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { LoginPage } from './pages/Login/Login'
import { Home } from './pages/home/Home'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
