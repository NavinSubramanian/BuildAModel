import React, { useState } from "react";
import { MotionWrapper, fadeInUp, containerStagger } from "../framer/animation";

import DigitalMod from "../images/DigitalMod.jpg"
import ProductProto from "../images/ProductProto.JPG"
import ScaleModel from "../images/ScaleModel.JPG"
import UrbanPlan from "../images/UrbanPlan.jpg"
import "../styles/project.css";

// Data
const portfolioItems = [
  {
    id: 1,
    title: "Architectural Scale Model",
    category: "architecture",
    image: ScaleModel,
    description:
      "Detailed scale model of a contemporary residential complex featuring innovative sustainable design elements.",
  },
  {
    id: 2,
    title: "Product Prototype",
    category: "product",
    image: ProductProto,
    description:
      "Functional prototype for an ergonomic consumer electronics device, ready for user testing and refinement.",
  },
  {
    id: 3,
    title: "Urban Planning Model",
    category: "architecture",
    image: UrbanPlan,
    description:
      "Comprehensive city block model showing proposed development including green spaces and transit access.",
  },
  {
    id: 4,
    title: "Student Thesis Project",
    category: "student",
    image:
      "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop",
    description:
      "Award-winning architectural thesis model exploring biomimicry in structural design.",
  },
  {
    id: 5,
    title: "Before & After Digital Model",
    category: "digital",
    image: DigitalMod,
    description:
      "Visualization showing the transformation from initial concept to refined 3D model for client approval.",
  },
  {
    id: 6,
    title: "Medical Device Prototype",
    category: "product",
    image:
      "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Precise prototype of an innovative medical device developed in collaboration with healthcare professionals.",
  },
];

const Project = () => {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const handleItemClick = (id) => {
    setSelectedItem(id);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">See Our Work in Action</h2>
        <p className="section-subtitle">
          Browse our portfolio of completed projects across different
          industries. Each model showcases our attention to detail and
          commitment to bringing our clients' visions to life.
        </p>

        <div className="portfolio-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${
              filter === "architecture" ? "active" : ""
            }`}
            onClick={() => setFilter("architecture")}
          >
            Architecture
          </button>
          <button
            className={`filter-btn ${filter === "product" ? "active" : ""}`}
            onClick={() => setFilter("product")}
          >
            Products
          </button>
          <button
            className={`filter-btn ${filter === "student" ? "active" : ""}`}
            onClick={() => setFilter("student")}
          >
            Student
          </button>
          <button
            className={`filter-btn ${filter === "digital" ? "active" : ""}`}
            onClick={() => setFilter("digital")}
          >
            Digital
          </button>
        </div>

        <MotionWrapper.div
          variants={containerStagger}
          initial="hidden"
          animate="visible" 
          key={filter} 
          viewport={{ once: true, amount: 0.3 }}
          className="portfolio-grid"
        >
          {filteredItems.map((item) => (
            <MotionWrapper.div
              key={item.id}
              className="portfolio-item"
              variants={fadeInUp}
              onClick={() => handleItemClick(item.id)}
            >
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            </MotionWrapper.div>
          ))}
        </MotionWrapper.div>

        {selectedItem !== null && (
          <div className="portfolio-modal">
            <div className="modal-content">
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>

              {portfolioItems
                .filter((item) => item.id === selectedItem)
                .map((item) => (
                  <div key={item.id} className="modal-body">
                    <h3>{item.title}</h3>
                    <div className="modal-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <p className="modal-description">{item.description}</p>
                    <p className="modal-category">Category: {item.category}</p>
                  </div>
                ))}
            </div>
            <div className="modal-overlay" onClick={closeModal}></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
