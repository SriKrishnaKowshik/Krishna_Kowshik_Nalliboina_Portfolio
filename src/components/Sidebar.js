import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserAlt, FaGraduationCap, FaLaptopCode, FaFileAlt, FaMailBulk } from 'react-icons/fa';
import { TbFileCertificate } from "react-icons/tb";
import './Sidebar.css';

const Sidebar = () => {


  return (
    <div className="sidebar">
      <div className="logo-name">
        <h2 className="logo-text">My Portfolio</h2>
      </div>

      <div className="side-menu">
        <NavLink to="/" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaHome style={{ marginRight: '7px' }} />Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaUserAlt style={{ marginRight: '7px' }} />About Me
        </NavLink>
        <NavLink to="/education" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaGraduationCap style={{ marginRight: '7px' }} />Education
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaLaptopCode style={{ marginRight: '7px' }} />Projects
        </NavLink>
        <NavLink to="/certifications" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <TbFileCertificate style={{ marginRight: '7px' }} />Certifications
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaFileAlt style={{ marginRight: '7px' }} />Resume
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaMailBulk style={{ marginRight: '7px' }} />Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
