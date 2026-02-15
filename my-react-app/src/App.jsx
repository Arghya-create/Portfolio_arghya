import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <main>
        <div className="route-wrapper" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-root">
        <AppRoutes />
        <footer className="site-footer">© {new Date().getFullYear()} Arghya Dasgupta</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
