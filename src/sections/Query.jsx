import React, { useState } from "react";
import { Shield } from "lucide-react";
import "../styles/query.css";

const Query = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
    hasFile: false,
    submitted: false,
    errors: {},
  });

  const validateForm = () => {
    const errors = {};

    if (!formState.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Email is invalid";
    }

    if (!formState.description.trim()) {
      errors.description = "Project description is required";
    }

    setFormState((prev) => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("company", formState.company);
      formData.append("description", formState.description);

      const fileInput = document.getElementById("file");
      if (fileInput && fileInput.files.length > 0) {
        formData.append("file", fileInput.files[0]);
      }

      try {
        const response = await fetch("https://bam-backend-blue.vercel.app/submit-form", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        if (result.success) {
          setFormState((prev) => ({ ...prev, submitted: true }));
        } else {
          alert("There was an error submitting your request.");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("Network error. Try again later.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: undefined,
      },
    }));
  };

  const handleFileChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      hasFile: e.target.files !== null && e.target.files.length > 0,
    }));
  };

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      company: "",
      description: "",
      hasFile: false,
      submitted: false,
      errors: {},
    });
  };

  return (
    <section id="quote" className="quote-section">
      <div className="container">
        <h2 className="section-title">Ready to Bring Your Ideas to Life?</h2>
        <p className="section-subtitle">
          Fill out the form below to request a quote for your project. We'll get
          back to you within 24 hours with pricing and timeline information.
        </p>

        <div className="quote-form-container">
          {formState.submitted ? (
            <div className="success-message">
              <h3>Thank You!</h3>
              <p>
                Your quote request has been submitted. We'll contact you shortly
                with more information.
              </p>
              <button className="btn btn-primary" onClick={resetForm}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={formState.errors.name ? "error" : ""}
                />
                {formState.errors.name && (
                  <p className="error-message">{formState.errors.name}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={formState.errors.email ? "error" : ""}
                />
                {formState.errors.email && (
                  <p className="error-message">{formState.errors.email}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="company">Company/School (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="description">
                  Project Description <span className="required">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={formState.description}
                  onChange={handleChange}
                  className={formState.errors.description ? "error" : ""}
                  placeholder="Please describe your project, including dimensions, materials preferences, and any specific requirements."
                ></textarea>
                {formState.errors.description && (
                  <p className="error-message">
                    {formState.errors.description}
                  </p>
                )}
              </div>

              <div className="form-group full-width">
                <label htmlFor="file">Upload Files (Optional)</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  multiple
                />
                <p className="file-help">
                  Upload sketches, drawings, or reference images (Max 10MB)
                </p>
              </div>

              <div className="form-submit">
                <button type="submit" className="btn btn-primary btn-large">
                  Request My Quote
                </button>
              </div>

              <div className="form-trust">
                <Shield size={16} />
                <span>Secure & Confidential</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Query;
