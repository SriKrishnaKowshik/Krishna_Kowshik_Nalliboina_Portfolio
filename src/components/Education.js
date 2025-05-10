import Sidebar from './Sidebar';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    return (
        <div>
            <Sidebar/>
            <div className='body'>
                <h2 className='Education'><FaGraduationCap style={{ marginRight: '6px' }} /> Educational Journey</h2>
                <div>
                    <h3 className='Edu-head'>Bachelors</h3>
                    <h3 className='Edu-name'>Kalasalingam Academy Of Research and Education</h3>
                    <ul className='Edu-list'>
                        <li>Krishnan Koil, Madurai, Tamil Nadu</li>
                        <li>2021 - 2015</li>
                        <li>CGPA: 8.43</li>
                    </ul>
                </div>
                <div>
                    <h3 className='Edu-head'>Intermediate Education</h3>
                    <h3 className='Edu-name'>Narayana Junior Collage</h3>
                    <ul className='Edu-list'>
                        <li>Nellore, Andhra Pradesh</li>
                        <li>2019 - 2021</li>
                        <li>Score: 949</li>
                    </ul>
                </div>
                <div>
                    <h3 className='Edu-head'>Secondary Education</h3>
                    <h3 className='Edu-name'>Ravindra Bharathi School</h3>
                    <ul className='Edu-list'>
                        <li>Nellore, Andhra Pradesh</li>
                        <li>2018 - 2019</li>
                        <li>CGPA: 9.8</li>
                    </ul>
                </div>

            </div>
        </div>
        
    );
}

export default Education;