import React, { useState, useEffect, useCallback } from "react";
import "./Home.css";
import { slides } from "./slides";

const Home = () => {
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [goToNext]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="home-container">
      <div className="slider">
        <div className="slides-container" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-item">
              <img src={slide.url} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="arrow left-arrow" onClick={goToPrevious}>
          ❰
        </div>
        <div className="arrow right-arrow" onClick={goToNext}>
          ❱
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
