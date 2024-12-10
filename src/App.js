import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contactpage'
import About from './pages/Aboutuspage'
import Services from './pages/Servicespage';


function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home />} />
          

          {/* Redirect */}
          <Route path="/pages/Contactpage" element={<Contact />} />
          <Route path="/pages/Aboutuspage" element={<About />} />
          <Route path="/pages/Servicespage" element={<Services />} />
          {/* Catch-all for undefined routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
