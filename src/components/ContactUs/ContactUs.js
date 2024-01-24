import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    shootLocation: "",
    preferredDate: "",
    additionalRequirements: "",
  });

  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://photography-portfolio-gk9f.onrender.com/api/contact",
        formData
      );

      console.log("Server Response:", response.data);

      setFormData({
        name: "",
        email: "",
        contactNo: "",
        shootLocation: "",
        preferredDate: "",
        additionalRequirements: "",
      });

      setSuccessMessage("Message sent successfully!");
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactNo">Contact No:</label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="shootLocation">Shoot Location:</label>
            <input
              type="text"
              id="shootLocation"
              name="shootLocation"
              value={formData.shootLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="preferredDate">Preferred Shoot Date:</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalRequirements">
              Additional Requirements:
            </label>
            <textarea
              id="additionalRequirements"
              name="additionalRequirements"
              value={formData.additionalRequirements}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enquire</button>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
        </form>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <h2>Contact Info</h2>
        <div className="info-item">
          <i className="fas fa-phone-alt"></i>
          <p>+91-9949698825</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <p>k.p.rajesh888@gmail.com</p>
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
