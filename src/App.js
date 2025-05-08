import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Education from './Education';
// import Projects from './Projects';
// import Certifications from './Certifications';
// import Contact from './Contact';
// import Resume from './Resume';

function App() {
  // const location = useLocation();
  // const isHome = location.pathname === "/";

  return (
 
    <div>
      <Router>
        <Navbar />
        {/* {!isHome && <Sidebar />} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutme />} />
            {/* <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} /> */}
          </Routes>
      </Router>
    </div>

  );
}

export default App;
