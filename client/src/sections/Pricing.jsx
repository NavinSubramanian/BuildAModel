import React from "react";
import { Check } from "lucide-react";
import { MotionWrapper } from "../framer/animation";

import "../styles/pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="section-title">Transparent Pricing for Every Project</h2>
        <p className="section-subtitle">
          We offer flexible pricing options to accommodate different project
          needs and budgets. From one-time models to ongoing collaborations, we
          have plans that work for you.
        </p>

        <div className="pricing-cards">
          {[...Array(3)].map((_, index) => (
            <MotionWrapper.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {index === 0 && (
                <div className="pricing-card">
                  <div className="pricing-header">
                    <h3>Basic Modeling</h3>
                    <p className="pricing-amount">
                      Starting at <span>$149</span>
                    </p>
                    <p className="pricing-description">
                      Perfect for simple projects with basic requirements
                    </p>
                  </div>
                  <ul className="pricing-features">
                    <li>
                      <Check size={18} />
                      <span>Simple 3D modeling</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>One revision round</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>Standard file formats</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>5-7 day delivery</span>
                    </li>
                  </ul>
                  <div className="pricing-cta">
                    <a href="#quote" className="btn btn-secondary">
                      Get Quote
                    </a>
                  </div>
                </div>
              )}

              {index === 1 && (
                <div className="pricing-card featured">
                  <div className="pricing-badge">Popular</div>
                  <div className="pricing-header">
                    <h3>Professional</h3>
                    <p className="pricing-amount">
                      Starting at <span>$299</span>
                    </p>
                    <p className="pricing-description">
                      Ideal for detailed projects requiring precision
                    </p>
                  </div>
                  <ul className="pricing-features">
                    <li>
                      <Check size={18} />
                      <span>Detailed 3D modeling</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>High-quality printing</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>Three revision rounds</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>Multiple file formats</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>3-5 day delivery</span>
                    </li>
                  </ul>
                  <div className="pricing-cta">
                    <a href="#quote" className="btn btn-primary">
                      Get Quote
                    </a>
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className="pricing-card">
                  <div className="pricing-header">
                    <h3>Enterprise</h3>
                    <p className="pricing-amount">Custom Pricing</p>
                    <p className="pricing-description">
                      Comprehensive solutions for businesses and institutions
                    </p>
                  </div>
                  <ul className="pricing-features">
                    <li>
                      <Check size={18} />
                      <span>Advanced modeling & printing</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>Unlimited revisions</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>Premium materials</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>Priority support</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>Express delivery options</span>
                    </li>
                    <li>
                      <Check size={18} />
                      <span>Volume discounts</span>
                    </li>
                  </ul>
                  <div className="pricing-cta">
                    <a href="#quote" className="btn btn-secondary">
                      Get Quote
                    </a>
                  </div>
                </div>
              )}
            </MotionWrapper.div>
          ))}
        </div>

        <MotionWrapper.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pricing-note"
        >
          <p>
            <strong>Note:</strong> All prices are starting points and may vary
            based on project complexity, materials, size, and other
            specifications. Contact us for a personalized quote.
          </p>
        </MotionWrapper.div>
      </div>
    </section>
  );
};

export default Pricing;
