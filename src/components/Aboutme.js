import React from 'react';
import './Aboutme.css';
import Sidebar from './Sidebar';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { GiArcheryTarget } from 'react-icons/gi';
import { BsRocketTakeoffFill } from 'react-icons/bs';

const Aboutme = () => {
  return (
    <div className="body">
        <Sidebar/>
            <div className="aboutme-container">
            <h2 className="summary">Summary</h2>
            <h3 className='summary-headings'><BiSolidFoodMenu size={26} style={{marginRight: '8px'}} />Introduction</h3>
            <p className='summary-p'>
                I am SRI KRISHNA KOWSHIK, An AI/ML-focused Computer Science student with practical knowledge and a strong passion for 
                developing innovative solutions. Committed to being an extreme hard worker, dedicated to staying ahead of industry trends, 
                and applying technical knowledge to create significant outputs. Experienced in languages like Python, Java, and SQL, with good 
                background knowledge of machine learning, deep learning, and AI algorithms.
            </p>
            <h3 className='summary-headings'> <GiArcheryTarget style={{marginRight: '8px'}} />Skills</h3> 
                <ul className='summary-skill-list'>
                <li><b>Programming Languages:</b> Python, Java</li>
                <li><b>Web Development:</b> HTML-CSS, Bootstrap, JavaScript, React, Flask</li>
                <li><b>Database:</b> SQL, MySQL</li>
                <li><b>Technologies:</b> Machine Learning, Deep Learning, Neural Networs, TensorFlow</li>
                <li><b>Development Tools:</b> Git, GitHub, Visual Studio, Eclipse, Streamlit, Jupyter Notebook, Microsoft Office</li>
                </ul>

            <h3 className='summary-headings'><BsRocketTakeoffFill size={26} style={{marginRight: '8px'}} />Journey</h3>
            <p className='summary-p'>
                My interest in technology started during my school days when I became curious about how computers work. 
                I was fascinated by what happens behind the screen and how software controls everything. 
                This curiosity pushed me to choose Computer Science as my field of study in college.<br/><br/>
                As I explored more, I discovered Artificial Intelligence and Machine Learning. 
                The idea that machines could learn from data and make smart decisions excited me. 
                So, I chose AIML as my specialization during my bachelor's degree.
                I started learning ML through online courses, hands-on projects, and real-time experimentation. 
                Each small project taught me something new and encouraged me to dig deeper.
                I enjoy solving problems using data and creating models that can predict and help in real-life situations.
                This journey has made me more passionate about AI and ML.<br/><br/>
                I want to keep exploring new ideas, improving my skills, and building smart solutions that make a difference. 
                My goal is to grow continuously in this field and contribute to innovative developments.
            </p> <br/>
            <p className='summary-p'>Through my journey, I have gained experience in the following areas:</p>
            <br/>
            <ul className='summary-list'>
                    <li><b>Programming and Software Development:</b> Learned C, Python, Java, software engineering, and database systems.</li>
                    <li><b>Artificial Intelligence and Machine Learning:</b> Covered AI, ML, deep learning, NLP, and predictive analytics.</li>
                    <li><b>Core Computer Science:</b> Studied data structures, algorithms, OS, computer architecture, and compiler design.</li>
                    <li><b>Mathematics and Statistics:</b> Applied linear algebra, calculus, discrete math, and statistics to engineering problems.</li>
                    <li><b>Networks and IoT:</b> Gained knowledge in computer networks, IoT devices, and IT infrastructure.</li>
                    <li><b>Interdisciplinary Electives:</b> Explored cancer biology, forest management, and sustainable design.</li>
                    <li><b>Projects and Innovation:</b> Engaged in capstone projects, competitions, and certification programs.</li>
                </ul>
            </div>
    </div>

  );
};

export default Aboutme;
