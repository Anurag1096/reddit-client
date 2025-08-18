import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Home from './Page/Home/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <Home/>
    </App>
  </StrictMode>,
)
