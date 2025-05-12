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
          <FaHome style={{ marginRight: '7px' }} /><span>Home</span>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaUserAlt style={{ marginRight: '7px' }} /><span>About Me</span>
        </NavLink>
        <NavLink to="/education" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaGraduationCap style={{ marginRight: '7px' }} /><span>Education</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaLaptopCode style={{ marginRight: '7px' }} /><span>Projects</span>
        </NavLink>
        <NavLink to="/certifications" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <TbFileCertificate style={{ marginRight: '7px' }} /><span>Certifications</span>
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaFileAlt style={{ marginRight: '7px' }} /><span>Resume</span>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "side-item active" : "side-item"}>
          <FaMailBulk style={{ marginRight: '7px' }} /><span>Contact</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
