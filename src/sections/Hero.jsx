import React, { useEffect, useState } from "react";

import "../styles/hero.css";
import HeroImage from "../images/hero.jpg";
import Testimonial from "../components/Testimonials";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero" id="hero">
        <div className="hero-container">
          <div className="hero-content">
            {/* <p className="hero-tagline">Professional 3D Modeling Services</p> */}
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
          </div>

          <div className="hero-image-container">
            <img
              src={HeroImage}
              alt="3D modeling example"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <h2 className="testimonialMainText">
        Don't Belive Us? Hear from our clients!
      </h2>
      <div className="testimonials-carousel">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
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
      </div>
    </>
  );
};

export default Hero;
