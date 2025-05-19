import React from 'react';

import '../styles/others.css';

const Testimonial = ({ text, author, role, image }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <p className="testimonial-text">{text}</p>
        <div className="testimonial-author">
          <div className="author-image">
            <img src={image} alt={author} />
          </div>
          <div className="author-info">
            <h4>{author}</h4>
            <p>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
