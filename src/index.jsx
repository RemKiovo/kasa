import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Accueil from './pages/Accueil/Accueil'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Error from './pages/Error/Error'

import './index.scss'
import Footer from './components/Footer/Footer'
import Logement from './pages/Logement/Logement'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:logementId" element={<Logement />} />
      </Routes>
    </div>
    <Footer />
  </Router>
)
