import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
      <App />
    <Footer/>
  </StrictMode>,
)
