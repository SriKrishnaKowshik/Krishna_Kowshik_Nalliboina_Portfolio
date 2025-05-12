import Sidebar from './Sidebar';
import './Certifications.css';
import { TbFileCertificate } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Certifications = () => {
    return (
        <div className='certifications-body'>
            <Sidebar/>
            <div>
                <h2 className='certifications'><TbFileCertificate style={{ marginRight: '8px' }} />Certifications</h2>
                <div className='certifications-sec'>
                    <h3>Meta Front End Development Certificate</h3>
                    <a href="https://www.coursera.org/account/accomplishments/verify/BDUYBUD7GAHJ"  className='certifications-link'>
                        Front End Development by Meta Through Coursera
                        <MdOutlineKeyboardArrowRight className='certification-arrow'/>
                    </a>
                    <p className='certifications-p'>Click to view the certificate</p>
                </div>
                <div className='certifications-sec'>
                    <h3>Meta Programming with JavaScript Certificate</h3>
                    <a href="https://www.coursera.org/account/accomplishments/verify/EUVTF5KXUZCR"  className='certifications-link'>
                    Programming with JavaScript by Meta Through Coursera
                    <MdOutlineKeyboardArrowRight className='certification-arrow'/>
                    </a>
                    <p className='certifications-p'>Click to view the certificate</p>
                </div>
                <div className='certifications-sec'>
                    <h3>Microsoft Azure AI Fundamentals (AI-900) Certificate</h3>
                    <a href="https://learn.microsoft.com/api/credentials/share/en-us/SRIKRISHNAKOWSHIKNALLIBOINA-2748/AF3666122E726FC5?sharingId=E4D94DDA8173860C"  className='certifications-link'>
                    Microsoft Azure AI Fundamentals (AI-900)
                    <MdOutlineKeyboardArrowRight className='certification-arrow'/>
                    </a>
                    <p className='certifications-p'>Click to view the certificate</p>
                </div>
                <div className='certifications-sec'>
                    <h3>Edge Impulse Embedded Machine Learning Certificate</h3>
                    <a href="https://www.coursera.org/account/accomplishments/verify/85XJN3XN3RSJ"  className='certifications-link'>
                    Embedded Machine Learning by Edge Impulse Through Coursera
                    <MdOutlineKeyboardArrowRight className='certification-arrow'/>
                    </a>
                    <p className='certifications-p'>Click to view the certificate</p>
                </div>
                <div className='certifications-sec'>
                    <h3>Oracle Cloud Infrastructure Data Science Professional Certificate </h3>
                    <a href="/Oracle Cloud Infrastructure 2023 Data Science Professional.pdf"  rel="noopener noreferrer" className='certifications-link'>
                    Oracle Cloud Infrastructure 2023 Certified Data Science Professional
                    <MdOutlineKeyboardArrowRight className='certification-arrow'/>
                    </a>
                    <p className='certifications-p'>Click to view the certificate</p>
                </div>
            </div>         
        </div>
        
    );
}

export default Certifications;