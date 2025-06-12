import React, { useEffect, useState, useRef } from "react";

import "../styles/hero.css";
import HeroImage from "../images/hero.png";

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
      "https://picwish.com/wp-content/uploads/2022/10/cute-discord-pfp-cat.jpg",
  },
  {
    id: 2,
    text: "The team's expertise made the process smooth and professional.",
    author: "Rahul M.",
    role: "Interior Designer",
    image:
      "https://fiverr-res.cloudinary.com/videos/f_auto,q_auto,t_main1/wtfjata7jiiu6f4yd8z9/create-a-minimalist-logo-for-you.png",
  },
  {
    id: 3,
    text: "Exceptional quality and attention to detail on every model. Highly recommended!",
    author: "Gautham",
    role: "Product Designer",
    image:
      "https://tr.rbxcdn.com/180DAY-3f9aceb0bb3efd1c0283638edb3f84bf/420/420/Hat/Webp/noFilter",
  },
  {
    id: 4,
    text: "Their modeling service exceeded our expectations in every way.",
    author: "Anisha",
    role: "Creative Director",
    image:
      "https://admin.sportshackster.com/WallPaperMedia/PlayerWallPaperImage/anime-1_63861146753944.6.jpg",
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
              <a href="#quote" className="btn btn-primary">
                Request a Quote
              </a>
              <a href="#portfolio" className="btn btn-outline">
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
