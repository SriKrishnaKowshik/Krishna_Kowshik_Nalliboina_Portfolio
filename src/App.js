import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Navbar from './components/Navbar';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contactme';
import Resume from './components/Resume';

function App() {
  return (
 
    <div>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} /> 
          </Routes>
      </Router>
    </div>

  );
}

export default App;
