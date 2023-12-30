import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="owner-info">
        <div className="owner-image">
          <img src="https://drive.google.com/uc?export=view&id=1LB3mnNdU-kO3OCjX9rM1f5Im5EOXNl1Y" alt="Owner" />
        </div>
        <div className="owner-details">
          <h2>Rajesh</h2>
          <p>Hey There! Rajesh here,I am a professional Photographer and Videographer over ten years of experience.I hope you have gone through my portfolio and hope you liked my work.Looking forward to hearing from you to capture your memories!😉😉</p>
        </div>
      </div>
      <div className="equipment-info">
        <h2>Our Equipment</h2>
        <div className="equipment-list">
          <div className="equipment-item">
            <img src="https://example.com/camera.jpg" alt="Camera" />
            <p>Canon EOS 5D Mark IV</p>
          </div>
          <div className="equipment-item">
            <img src="https://example.com/video-camera.jpg" alt="Video Camera" />
            <p>Sony A7S III</p>
          </div>
          <div className="equipment-item">
            <img src="https://example.com/drone.jpg" alt="Drone" />
            <p>DJI Mavic Air 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;