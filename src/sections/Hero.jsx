import React, { useEffect, useState, useRef } from "react";

import "../styles/hero.css";
import HeroImage from "../images/hero.jpg";
import Testimonial from "../components/Testimonials";
import FadeInSection from "../framer/FadeInSection";

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "BuildaModel brought our architectural vision to life with stunning accuracy and speed.",
    author: "Anita R.",
    role: "Architect",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 2,
    text: "The team's expertise made the process smooth and professional.",
    author: "Rahul M.",
    role: "Interior Designer",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 3,
    text: "Exceptional quality and attention to detail on every model. Highly recommended!",
    author: "Carlos B.",
    role: "Product Designer",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const Hero = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialRefs = useRef([]);
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const activeItem = testimonialRefs.current[activeTestimonial];

    if (track && activeItem) {
      const itemOffset = activeItem.offsetLeft;
      const itemWidth = activeItem.offsetWidth;
      const containerWidth = track.offsetWidth;

      const scrollTo = itemOffset - containerWidth / 2 + itemWidth / 2;

      track.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  }, [activeTestimonial]);

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-container">
          <FadeInSection className="hero-content">
            <h1 className="hero-title">
              Build Your Vision with Precision{" "}
              <span>3D Modeling & Printing</span>
            </h1>
            <p className="hero-subtitle">
              Expert 3D models for architects, designers, and businesses —
              crafted with accuracy and delivered fast.
            </p>
            <div className="hero-cta">
              <a href="#" className="btn btn-primary">
                Request a Quote
              </a>
              <a href="#" className="btn btn-outline">
                View Portfolio
              </a>
            </div>
          </FadeInSection>

          <FadeInSection animationType="slide-left" className="hero-image-container">
            <img
              src={HeroImage}
              alt="3D modeling example"
              className="hero-image"
            />
          </FadeInSection>
        </div>
      </section>

      <FadeInSection animationType="slide-up">
        <h2 className="testimonialMainText">
          Don't Belive Us? Hear from our clients!
        </h2>
      </FadeInSection>

      <FadeInSection animationType="slide-up" className="testimonials-carousel">
        <div className="testimonial-track">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (testimonialRefs.current[index] = el)}
              className={`testimonial-item ${
                index === activeTestimonial ? "active" : ""
              }`}
            >
              <Testimonial
                text={testimonial.text}
                author={testimonial.author}
                role={testimonial.role}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>

        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === activeTestimonial ? "active" : ""
              }`}
              onClick={() => setActiveTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </FadeInSection>
    </>
  );
};

export default Hero;
