import React, { useState, useEffect, useCallback } from "react";
import "./TestimonialsSlider.css";

const testimonials = [
  {
    id: 1,
    text: "Exceptional photography skills and a keen eye for detail. Every shot tells a story. Couldn't be happier with the results!",
    author: "Emily Johnson",
  },
  {
    id: 2,
    text: "Professional, friendly, and a pleasure to work with. Captured the essence of our special day perfectly. Highly recommend!",
    author: "John Davis",
  },
  {
    id: 3,
    text: "Amazing creativity and attention to composition. The photos exceeded our expectations. Truly a talented photographer!",
    author: "Jessica Martinez",
  },
  {
    id: 4,
    text: "Easygoing and patient. Made us feel comfortable during the shoot. The photos reflect the genuine emotions of the moment.",
    author: "Alex Turner",
  },
  {
    id: 5,
    text: "Incredible talent and a great understanding of light. The photos are stunning, and the entire experience was fantastic.",
    author: "Sophia Lee",
  },
];

const TestimonialsSlider = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const goToNextTestimonial = useCallback(() => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const testimonialIntervalId = setInterval(() => {
      goToNextTestimonial();
    }, 5000); // adjust testimonial slide transition speed

    return () => {
      clearInterval(testimonialIntervalId);
    };
  }, [goToNextTestimonial]);

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              index === testimonialIndex ? "active" : ""
            }`}
            style={{
              opacity: index === testimonialIndex ? 1 : 0.5,
              transform: `translateX(${-testimonialIndex * 100}%)`,
            }}
          >
            <div className="text-container">
              <p>{testimonial.text}</p>
            </div>
            <span>- {testimonial.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;