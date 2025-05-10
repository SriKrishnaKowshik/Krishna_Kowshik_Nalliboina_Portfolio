import Sidebar from './Sidebar';
import './Projects.css';
import { LuScanFace } from "react-icons/lu";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { FaLaptopCode, FaHandHoldingWater } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { FaDisease } from "react-icons/fa6";

const Projects = () => {
    return (
        <div className='projects-body'>
            <Sidebar/>
            <div>
                <h2 className='projects'><FaLaptopCode size={38}/> Projects</h2>
                <div>
                    <h3><LuScanFace size={28} style={{ marginRight: '2px' }}/> FaceTrack: An Automated Attendance System Using Facial Recognition</h3>
                    <p className='projects-p'> 
                        FaceTrack is an automated attendance system that uses facial recognition technology to accurately and effectively
                        track attendance in real-time. By replacing traditional manual procedures, it enables a seamless, contactless process
                        with high accuracy across various conditions. The system offers a user-friendly interface, secure access controls, and
                        strong data protection, making it ideal for educational institutions and organizations.
                    </p>
                </div>
                <div>
                    <h3><AiOutlineMedicineBox style={{ marginRight: '7px' }}/>MedCare: My Doctor Healthcare App</h3>
                    <p className='projects-p'> 
                        MedCare is a web-based healthcare platform that uses AI to deliver health diagnoses and personalized medical
                        advice. It assists users in identifying heart, brain, and lung conditions while offering treatment options, medication
                        suggestions, and lifestyle guidance. The platform enables users to consult doctors online and schedule appointments
                        with ease. It stores medical records securely and monitors prescriptions and treatments. MedCare also offers
                        customized diet and food suggestions for better health.
                    </p>
                </div>
                <div>
                    <h3><FaHandHoldingWater style={{ marginRight: '8px' }}/>SmartWater: Intelligent Water Quality Monitoring System</h3>
                    <p className='projects-p'> 
                        SmartWater is an intelligent water quality monitoring system that utilizes machine learning to identify contamination
                        and provide safe water. It measures important parameters such as pH, turbidity, and hardness, giving real-time
                        information and predictive warnings. The system avoids health hazards by detecting anomalies at an early stage.
                        With an intuitive dashboard, it enables easy monitoring, trend analysis, and management of alarms. SmartWater is
                        meant to enable clean water availability in urban and rural environments.
                    </p>
                </div>    
                <div>
                    <h3><BiCameraMovie size={31} style={{ marginRight: '8px' }}/>WatchList: A Movie Recommendation Engine</h3>
                    <p className='projects-p'> 
                    WatchList is a movie recommendation system that uses AI to suggest personalized films based on user preferences. 
                    It analyzes genre, ratings, and past viewing history to recommend movies users will love. 
                    With an easy-to-use interface, users can create their own watchlist, track their progress, and discover new titles effortlessly. 
                    Whether you're a fan of action, romance, or drama, WatchList ensures you'll always find the perfect movie for your next viewing.
                    </p>
                </div>    
                <div>
                    <h3><FaDisease style={{ marginRight: '8px' }}/>SkinGuard: AI-Powered Skin Cancer Detection</h3>
                    <p className='projects-p'> 
                    SkinGuard is an AI-powered system designed to detect skin cancer using deep learning. 
                    By analyzing dermographic images, the model identifies potential signs of skin diseases like melanoma. 
                    With high accuracy, SkinGuard offers real-time predictions, helping users detect skin issues early for timely medical consultation. 
                    The system also provides valuable diagnostic insights and treatment recommendations, empowering proactive skin health management.                    </p>
                </div>    
            </div>      
        </div>
        
    );
}

export default Projects;