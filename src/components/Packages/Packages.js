// components/Packages.js
import React from "react";
import { services } from ".././Services";
import "./Packages.css";

const Packages = () => {
  return (
    <div className="packages">
      <h1>Photography Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service">
            <h4>{service.title}</h4>
            <div className="packages-list">
              {service.packages.map((pkg, packageIndex) => (
                <div
                  key={packageIndex}
                  className={`package ${getPackageColorClass(pkg.name)}`}
                  style={{
                    maxHeight:
                      pkg.name === "Platinum Package"
                        ? "600px"
                        : pkg.name === "Gold Package"
                        ? "500px"
                        : "400px",
                  }}
                >
                  <div className="decoration">
                    {pkg.name === "Gold Package" && (
                      <span className="recommended">Recommended</span>
                    )}
                    {pkg.name === "Platinum Package" && (
                      <span className="popular">Most - Popular</span>
                    )}
                  </div>
                  <img src={pkg.image} alt={pkg.name} />
                  <div className="package-details">
                    <h5 className={getPackageColorClass(pkg.name)}>{pkg.name}</h5>
                    <p>{pkg.description}</p>
                    <h3>₹{pkg.cost}/-</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to get the color class based on the package name
const getPackageColorClass = (packageName) => {
  switch (packageName) {
    case "Platinum Package":
      return "platinum-text";
    case "Gold Package":
      return "gold-text";
    case "Silver Package":
      return "silver-text";
    default:
      return "";
  }
};

export default Packages;
