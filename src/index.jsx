import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Accueil from './pages/Accueil'
import Header from './components/Header'
import About from './pages/About'
import Error from './pages/Error'
import GeneralPadding from './components/GeneralPadding'

import './index.scss'
import Footer from './components/Footer'
import Logement from './pages/Logement'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100dvh',
          justifyContent: 'space-between',
        }}
      >
        <GeneralPadding>
          <Header />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
            <Route path="/logement/:logementId" element={<Logement />} />
          </Routes>
        </GeneralPadding>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
)
