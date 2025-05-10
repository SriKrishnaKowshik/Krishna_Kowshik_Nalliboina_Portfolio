import Sidebar from './Sidebar';
import './Contactme.css';
import { FaMailBulk, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaLink, FaRegHandPeace } from "react-icons/fa6";
import { PiHandHeartBold } from "react-icons/pi";

const Contactme = () => {
    return (
        <div className='contact-body'>
            <Sidebar />
            <div className="contact-content">
                <h2 className='contact-title'>
                    <FaMailBulk size={38} style={{ marginRight: '9px' }} />Connect with Me
                </h2>
                <p className="contact-subtext">I'm always open to discussing new opportunities, collaborations, or just a friendly tech chat.</p>
                <h3><FaLink/> Professional & Social Links</h3>
                <div className="contact-links">
                    <a href="mailto:nkowshik2@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="contact-icon" /> Email
                    </a>
                    <a href="https://github.com/SriKrishnaKowshik" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="contact-icon" /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/krishna-kowshik-2351k" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="contact-icon" /> LinkedIn
                    </a>
                </div>
                <p className='contact-foot'><FaRegHandPeace /> Feel free to reach out through any of the platforms above — I'd love to hear from you! <PiHandHeartBold size={18}/></p>
                
            </div>
        </div>
    );
}

export default Contactme;
