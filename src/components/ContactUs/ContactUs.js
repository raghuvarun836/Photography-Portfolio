import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact-info</h2>
      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-phone-alt"></i>
          <p>+91-9949698825</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <p>sample123@gmail.com</p>
        </div>
        <div className="info-item map-item">
          <i className="fas fa-map-marker-alt"></i>
          <div className="map">
            {/* Embed your map iframe code here */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d573.7301172289798!2d77.58721469769594!3d14.67981523479853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701936802876!5m2!1sen!2sin"
              width="275"
              height="175"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
