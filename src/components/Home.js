import React from "react";
import './Home.css';
import { FaUserAlt, FaGraduationCap, FaLaptopCode, FaFileAlt } from 'react-icons/fa';
import { TbFileCertificate } from "react-icons/tb";
import { MdContactMail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Navbar from "./Navbar.js";

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div className="home_profile">
                <div className="Introduction">
                    <h2>Hello, I'm</h2>
                    <h1>Sri Krishna Kowshik</h1>
                    <p className="Intro-line">AI/ML Focused Computer Science Student</p>          
                </div>

                <strong className="explore">Explore</strong>
                <div className="button-grid">
                    <Link to="/about" className="btn-card">
                        <h3><FaUserAlt style={{ marginRight: '4px' }} /> About Me</h3>
                        <p className="btn-description">Explore my introduction summary.</p>
                    </Link>
                    <Link to="/education" className="btn-card">
                        <h3><FaGraduationCap style={{ marginRight: '4px' }} /> Education</h3>
                        <p className="btn-description">My Educational Journey.</p>
                    </Link>
                    <Link to="/projects" className="btn-card">
                        <h3><FaLaptopCode style={{ marginRight: '4px' }} /> Projects</h3>
                        <p className="btn-description">Explore My Projects - AI/ML.</p>
                    </Link>
                    <Link to="/certifications" className="btn-card">
                        <h3><TbFileCertificate style={{ marginRight: '4px' }} /> Certifications</h3>
                        <p className="btn-description">I got Certifications from Meta, Microsoft, Coursera.</p>
                    </Link>
                    <Link to="/contact" className="btn-card">
                        <h3><MdContactMail style={{ marginRight: '4px' }} /> Contact</h3>
                        <p className="btn-description">Contact Me for More Details and collaborations.</p>
                    </Link>
                    <Link to="/resume" className="btn-card">
                        <h3><FaFileAlt style={{ marginRight: '4px' }} /> Resume</h3>
                        <p className="btn-description">In Just One Go...</p>
                    </Link>
                </div>

                <footer>© 2025 Kowshik | All Rights Reserved</footer>
            </div>
        </div>
    );
};

export default Home;
