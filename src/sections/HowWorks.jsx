import React from "react";
import { FileUp, Printer as Printer3d, Package } from "lucide-react";
import {
  MotionWrapper,
  processContainer,
  processStep,
} from "../framer/animation";

import "../styles/howworks.css";

export default function HowWorks() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <MotionWrapper.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          From Concept to Creation — Simple & Transparent
        </MotionWrapper.h2>

        <MotionWrapper.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          We've streamlined our process to make it easy for you to get
          high-quality 3D models and prints with minimal hassle. Here's how we
          bring your ideas to life:
        </MotionWrapper.p>

        <MotionWrapper.div
          variants={processContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="process-steps"
        >
          <MotionWrapper.div variants={processStep} className="process-step">
            <div className="step-number">1</div>
            <div className="step-icon">
              <FileUp size={42} />
            </div>
            <h3>Submit Your Design</h3>
            <p>
              Send us your designs, sketches, or concept ideas through our
              secure quote form. We accept various file formats including CAD
              files, sketches, or even concept descriptions.
            </p>
          </MotionWrapper.div>

          <div className="process-connector">
            <div className="connector-line"></div>
          </div>

          <MotionWrapper.div variants={processStep} className="process-step">
            <div className="step-number">2</div>
            <div className="step-icon">
              <Printer3d size={42} />
            </div>
            <h3>Model & Print</h3>
            <p>
              Our experts create or refine your 3D model and prepare it for
              printing. We'll keep you updated throughout the process and send
              progress updates.
            </p>
          </MotionWrapper.div>

          <div className="process-connector">
            <div className="connector-line"></div>
          </div>

          <MotionWrapper.div variants={processStep} className="process-step">
            <div className="step-number">3</div>
            <div className="step-icon">
              <Package size={42} />
            </div>
            <h3>Review & Delivery</h3>
            <p>
              After quality checks, we'll deliver your finished product. For
              digital models, you'll receive the files via email. Physical
              models are carefully packaged and shipped to your address.
            </p>
          </MotionWrapper.div>
        </MotionWrapper.div>

        <MotionWrapper.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="process-cta"
        >
          <a href="#quote" className="btn btn-primary btn-large">
            Start Your Project
          </a>
        </MotionWrapper.div>
      </div>
    </section>
  );
}
