// components/PhotographyServices.js
import React from "react";
import { Link } from "react-router-dom";
import { services } from ".././Services";
import "./PhotographyServices.css"; // Make sure to import your CSS file

const PhotographyServices = () => {
  return (
    <div className="photography-services">
      <h3>Photography Services</h3>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
            <Link to="/packages" className="explore-button">
              Explore <span className="arrow-icon">➔</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographyServices;
