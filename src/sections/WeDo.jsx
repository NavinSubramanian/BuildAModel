import React from "react";
import {
  Box,
  DiamondPlus,
  TruckElectric,
  BookOpenText,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import {
  MotionWrapper,
  containerVariants,
  cardVariants2,
} from "../framer/animation";

import "../styles/wedo.css";
import FadeInSection from "../framer/FadeInSection";

const services = [
  {
    title: "Custom 3D Modeling",
    description:
      "Tailored 3D models for architecture, engineering, products, and art. Designed with precision and optimized for your specific use case.",
    icon: Box,
    dataColor: "orange",
  },
  {
    title: "High-Precision 3D Printing",
    description:
      "Professional 3D printing services using high-quality materials and cutting-edge technology to bring your models to life with excellent accuracy.",
    icon: DiamondPlus,
    dataColor: "blue",
  },
  {
    title: "Fast Turnaround & Delivery",
    description:
      "Reliable and quick project execution with timely delivery. Perfect for deadlines in academic, professional, or commercial settings.",
    icon: TruckElectric,
    dataColor: "teal",
  },
  {
    title: "Student & Professional Support",
    description:
      "Special services for students, freelancers, and businesses including consultation, discounts, and project collaboration support.",
    icon: BookOpenText,
    dataColor: "purple",
  },
  {
    title: "Prototyping & Product Testing",
    description:
      "Rapid prototyping solutions to test, validate, and iterate on your product ideas before moving into mass production.",
    icon: ShieldCheck,
    dataColor: "green",
  },
  {
    title: "3D File Repair & Optimization",
    description:
      "Fix, scale, and optimize your 3D files to ensure they are print-ready, watertight, and compatible with all major 3D printers.",
    icon: Wrench,
    dataColor: "amber",
  },
];

const WeDo = () => {
  return (
    <section className="whatWeDo" id="what-we-do">
      <div>
        <FadeInSection animationType="slide-right" className="whatdohead">
          <h2>What We Do</h2>
          <p>
            We specialize in turning your ideas into tangible reality. Whether
            you're an architect, interior designer, student, or business, we
            create high-quality digital 3D models and physical prototypes
            tailored to your needs.
          </p>
        </FadeInSection>
        <MotionWrapper.div
          className="servicesGrid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map(
            ({ title, description, icon: Icon, dataColor }, index) => (
              <MotionWrapper.div
                key={title}
                className="card"
                data-color={`${dataColor}`}
                variants={cardVariants2}
              >
                <div className="icon-wrapper">
                  <Icon className="icon-style" strokeWidth={1.5} size={20} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </MotionWrapper.div>
            )
          )}
        </MotionWrapper.div>
      </div>
    </section>
  );
};

export default WeDo;
