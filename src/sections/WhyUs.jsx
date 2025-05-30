import React, { useEffect } from "react";
import {
  BriefcaseBusiness,
  Rocket,
  Printer,
  Wrench,
  Handshake,
  ArrowRightIcon,
} from "lucide-react";
import {
  MotionWrapper,
  cardVariants,
  testimonialVariants,
} from "../framer/animation";

import "../styles/whyus.css";

const features = [
  {
    icon: BriefcaseBusiness,
    title: "Expertise You Can Trust",
    description: "Skilled designers and modelers with industry experience.",
  },
  {
    icon: Printer,
    title: "Cutting-Edge Technology",
    description: "Latest 3D printers & software for flawless results.",
  },
  {
    icon: Wrench,
    title: "Flexible Solutions",
    description: "From digital models to physical prototypes.",
  },
  {
    icon: Handshake,
    title: "Dedicated Support",
    description: "Guidance through every step of your project.",
  },
];

const WhyUs = () => {
  useEffect(() => {
    const wrappers = document.querySelectorAll(".card-wrapper");

    wrappers.forEach((wrapper) => {
      const card = wrapper.querySelector(".feature-card, .testimonial-card");

      wrapper.addEventListener("mousemove", (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
        const rotateY = ((x - centerX) / centerX) * -8;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      wrapper.addEventListener("mouseleave", () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
      });
    });
  }, []);

  return (
    <section className="why-choose-us" id="why-us">
      <h2 className="section-title">Quality, Speed & Precision — Built In</h2>

      <div className="features-grid">
        <div className="features-inner">
          {features.map((feature, index) => (
            <MotionWrapper.div
              className="card-wrapper"
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={cardVariants}
            >
              <div className="feature-card">
                <feature.icon
                  className="feature-icon"
                  size={40}
                  strokeWidth={1.5}
                />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </MotionWrapper.div>
          ))}
        </div>
        <MotionWrapper.div
          className="testimonial-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={testimonialVariants}
        >
          <div className="testimonial-icon">
            <Rocket size={25} strokeWidth={1.5} />
          </div>
          <p className="testimonial-text">
            “The team’s expertise made the whole process smooth and
            professional. Their attention to detail is unmatched.”
          </p>
          <div className="testimonial-author">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
              alt="Rahul M."
              className="author-image"
            />
            <div>
              <strong>Rahul M.</strong>
              <div className="author-role">Interior Designer</div>
            </div>
          </div>
          <button className="btn">
            See our Portfolio <ArrowRightIcon />
          </button>
        </MotionWrapper.div>
      </div>
    </section>
  );
};

export default WhyUs;
