import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Indicators from './Pages/Indicators';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/indicators" element={<Indicators />} />
      </Routes>
    </Router>
  );
}

export default App;
