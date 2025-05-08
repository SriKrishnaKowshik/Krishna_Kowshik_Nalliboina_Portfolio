import React from 'react';
import './Aboutme.css';
import Sidebar from './Sidebar';

const Aboutme = () => {
  return (
    <div>
    <Sidebar/>
    <div className="aboutme-container">
      <h3>About Me</h3>
      <p>
        I am Sri Krishna Kowshik, a passionate Computer Science student with a strong interest in Artificial Intelligence and Machine Learning. I thrive on solving real-world problems using innovative technology.
      </p>
      <p>
        With hands-on experience in Python, C++, and modern frameworks, I’ve built several impactful projects that demonstrate both technical skill and creativity.
      </p>
    </div>
    </div>

  );
};

export default Aboutme;
