import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function AppRoutes() {
  const location = useLocation();

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
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <div className="site-root">
        {showSplash && (
          <div className="splash" role="status">
            <div className="splash-center">
              <div className="splash-ring" aria-hidden>
                <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="6"
                  />
                  <circle
                    className="spinner"
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="url(#g)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="260"
                    strokeDashoffset="65"
                  />
                  <defs>
                    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="splash-logo">
                <img src="/logo.png" alt="logo" />
              </div>
            </div>
          </div>
        )}

        <AppRoutes />
        <footer className="site-footer">
          © {new Date().getFullYear()} Arghya Dasgupta
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
