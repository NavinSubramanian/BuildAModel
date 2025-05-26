import React, { useEffect, useState, useRef } from "react";

import "../styles/hero.css";
import HeroImage from "../images/hero.jpg";

import Testimonial from "../components/Testimonials";
import TestimonialCarousel from "../components/TestimonialCarousel";

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
  {
    id: 4,
    text: "Their modeling service exceeded our expectations in every way.",
    author: "Lena G.",
    role: "Creative Director",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const Hero = () => {
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

          <FadeInSection
            animationType="slide-left"
            className="hero-image-container"
          >
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
        <TestimonialCarousel testimonials={testimonials} />
      </FadeInSection>
    </>
  );
};

export default Hero;
