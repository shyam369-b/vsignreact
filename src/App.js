import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contactpage'


function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home />} />
          

          {/* Redirect example */}
          <Route path="/pages/Contactpage" element={<Contact />} />

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
