import React, { useState } from "react";
import "./FeedbackForm.css"; // Ensure to add your CSS styles here

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="feedback-form-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Feedback Form</h2>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter Name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter email" required />
        </div>
        <div className="input-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" placeholder="Enter subject" required />
        </div>
        <div className="input-group">
          <label>Rating:</label>
          <div className="star-rating">
            {[...Array(5)].map((star, index) => (
              <span
                key={index}
                className={index < rating ? "star filled" : "star"}
                onClick={() => handleRating(index + 1)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit &rarr;
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
