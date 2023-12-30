import React from "react";
import "./OfferCard.css";

const OfferCard = ({ title, description }) => {

  return (
    <div className="offer-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default OfferCard;