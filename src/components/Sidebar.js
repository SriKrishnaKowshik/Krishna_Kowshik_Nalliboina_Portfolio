import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt,FaGraduationCap, FaLaptopCode, FaFileAlt } from 'react-icons/fa';
import { TbFileCertificate } from "react-icons/tb";
import { MdContactMail } from 'react-icons/md';

import './Sidebar.css';  // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <h2 className="logo-text">My Portfolio</h2>
      </div>
      <div className="menu-container">
        <Link to="/" className="menu-item"><FaHome style={{ marginRight: '8px' }}/> Home</Link>
        <Link to="/about" className="menu-item"><FaUserAlt style={{ marginRight: '8px' }} /> About Me</Link>
        <Link to="/education" className="menu-item"><FaGraduationCap style={{ marginRight: '4px' }} /> Education</Link>
        <Link to="/projects" className="menu-item"><FaLaptopCode style={{ marginRight: '8px' }}/> Projects</Link>
        <Link to="/certifications" className="menu-item"><TbFileCertificate style={{ marginRight: '8px' }}/> Certifications</Link>
        <Link to="/resume" className="menu-item"><FaFileAlt style={{ marginRight: '8px' }}/> Resume</Link>
        <Link to="/contact" className="menu-item"><MdContactMail style={{ marginRight: '8px' }}/> Contact</Link>
      </div>
    </div>
  );
};

export default Sidebar;
