import Sidebar from './Sidebar';
import './Resume.css';
import { FaFileAlt, FaRegFilePdf  } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



const Resume = () => {
    return (
        <div className='resume-body'>
            <Sidebar/>
            <div>
                <h2 className='resume'><FaFileAlt size={35} style={{ marginRight: '4px' }} />Resume</h2>
                <p className="resume-description">
                     My resume provides a detailed overview of my educational journey, skills, technical proficiencies,<br/> project contributions, and certifications.
                </p>
            </div>
            <div className='resume-sec'>
                <a href="Sri_Krishna_Kowshik_CV.pdf" download className='resume-link'>
                    <FaRegFilePdf size={30} style={{ marginRight: '8px' }}/> 
                     Sri_Krishna_Kowshik_Resume.pdf
                    <MdOutlineKeyboardArrowRight className='resume-arrow'/>
                </a>
                <p className='resume-p'>Click to download my resume</p>
            </div>
        </div>
        
    );
}

export default Resume;