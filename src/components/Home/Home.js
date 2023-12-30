import React from "react";
import ImageSlider from "./ImageSlider";
import TestimonialsSlider from "./TestimonialsSlider";
import OfferCard from "./OfferCard";
import CountdownTimer from "./CountdownTimer";
import PhotographyServices from "./PhotographyServices";
import "./Home.css";

const isWeekend = () => {
  const today = new Date().getDay();
  return today === 6 || today === 0; // Saturday (6) or Sunday (0)
};

const Home = () => {
  return (
    <div className="home-container">
      {/* Introduction Section */}
      <div className="introduction">
        <h1>Welcome to my Photography Journey</h1>
        <p>
          Explore the art of photography through my lens. Capturing moments that
          last a lifetime. From special occasions to everyday life, let's create
          memories together.
        </p>
      </div>

      {/* Image Slider Section */}
      <ImageSlider />

      {/* Special Offers Section */}
      <div className="special-offers">
        <h2>Special Offers</h2>
        <div className="offer-details">
          {isWeekend() ? (
            <>
              <p>
                Book your photography session today and avail of our special
                offers. Capture the moments that matter at discounted rates.
                Limited time only!
                <CountdownTimer />
              </p>
              {/* Render OfferCard components only on weekends */}
              <OfferCard
                title="Wedding Package"
                description="Hurray! Advance Happy Wedding. The best package for your PreWedding and Wedding shoots. Capture your best moments that happens once in a lifetime."
              />
              <OfferCard
                title="Family Package"
                description="Capture your family moments with our exclusive family package. Includes a complimentary photo frame."
              />
              <OfferCard
                title="Event Photography"
                description="Planning an event? Book our event photography services and receive a free canvas print of your favorite shot."
              />
            </>
          ) : (
            "Offer expired:( Another offer soon. Stay tuned !"
          )}
        </div>
      </div>

      {/* Services Section */}
      <PhotographyServices />

      {/* Testimonials Section */}
      <TestimonialsSlider />
    </div>
  );
};

export default Home;
