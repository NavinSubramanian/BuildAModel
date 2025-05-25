import React from 'react';
import { FileUp, Printer as Printer3d, Package } from 'lucide-react';

import '../styles/howworks.css'; 

export default function HowWorks() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <h2 className="section-title">From Concept to Creation — Simple & Transparent</h2>
        <p className="section-subtitle">
          We've streamlined our process to make it easy for you to get high-quality 3D models and prints 
          with minimal hassle. Here's how we bring your ideas to life:
        </p>
        
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <div className="step-icon">
              <FileUp size={42} />
            </div>
            <h3>Submit Your Design</h3>
            <p>
              Send us your designs, sketches, or concept ideas through our secure quote form. 
              We accept various file formats including CAD files, sketches, or even concept descriptions.
            </p>
          </div>
          
          <div className="process-connector">
            <div className="connector-line"></div>
          </div>
          
          <div className="process-step">
            <div className="step-number">2</div>
            <div className="step-icon">
              <Printer3d size={42} />
            </div>
            <h3>Model & Print</h3>
            <p>
              Our experts create or refine your 3D model and prepare it for printing. 
              We'll keep you updated throughout the process and send progress updates.
            </p>
          </div>
          
          <div className="process-connector">
            <div className="connector-line"></div>
          </div>
          
          <div className="process-step">
            <div className="step-number">3</div>
            <div className="step-icon">
              <Package size={42} />
            </div>
            <h3>Review & Delivery</h3>
            <p>
              After quality checks, we'll deliver your finished product. For digital models, you'll receive 
              the files via email. Physical models are carefully packaged and shipped to your address.
            </p>
          </div>
        </div>
        
        <div className="process-cta">
          <a href="#quote" className="btn btn-primary btn-large">Start Your Project</a>
        </div>
      </div>
    </section>
  );
}
