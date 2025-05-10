import React from "react";
import './Home.css';
import { FaUserAlt, FaGraduationCap, FaLaptopCode, FaFileAlt, FaMailBulk } from 'react-icons/fa';
import { TbFileCertificate } from "react-icons/tb";
import { MdContactMail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="home_profile">
                <div className="Introduction">
                    <h2>Hello, I'm</h2>
                    <h1 className="name-kowshik">Sri Krishna Kowshik</h1>
                    <p className="Intro-line">AI/ML Focused Computer Science Student</p>          
                </div>

                <strong className="explore">Explore</strong>
                <div className="button-grid">
                    <Link to="/about" className="btn-card">
                        <h3><FaUserAlt style={{ marginRight: '4px' }} /> About Me</h3>
                        <p className="btn-description"> Know More About My Journey, Skills, and Experience.</p>
                    </Link>
                    <Link to="/education" className="btn-card">
                        <h3><FaGraduationCap style={{ marginRight: '4px' }} /> Education</h3>
                        <p className="btn-description">Explore My Academic Journey and Coursework.</p>
                    </Link>
                    <Link to="/projects" className="btn-card">
                        <h3><FaLaptopCode style={{ marginRight: '4px' }} /> Projects</h3>
                        <p className="btn-description">Check Out My AIML and Academic Projects.</p>
                    </Link>
                    <Link to="/certifications" className="btn-card">
                        <h3><TbFileCertificate style={{ marginRight: '4px' }} /> Certifications</h3>
                        <p className="btn-description">Certified By Meta, Microsoft, and Others.</p>
                    </Link>
                    <Link to="/resume" className="btn-card">
                        <h3><FaFileAlt style={{ marginRight: '4px' }} /> Resume</h3>
                        <p className="btn-description">Download My Resume.</p>
                    </Link>
                    <Link to="/contact" className="btn-card">
                        <h3><FaMailBulk style={{ marginRight: '4px' }} /> Contact</h3>
                        <p className="btn-description">Let's Connect for Collaborations & Ideas.</p>
                    </Link>
                </div>

                <footer>© 2025 Kowshik | All Rights Reserved</footer>
            </div>
        </div>
    );
};

export default Home;
