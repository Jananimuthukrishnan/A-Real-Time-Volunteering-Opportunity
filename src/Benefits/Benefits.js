import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <div className="benefit-section">
      <h1>Volunteering Benefits</h1>
      <br></br><br></br>
      <div className="benefits-grid">
        <div className="benefit-card lower-stress">
          <p>Lower stress</p>
        </div>
        <div className="benefit-card physical-health">
          <p>Better physical health</p>
        </div>
        <div className="benefit-card happiness">
          <p>Feelings of happiness & well-being</p>
        </div>
        <div className="benefit-card new-friends">
          <p>Making new friends</p>
        </div>
        <div className="benefit-card developing-skills">
          <p>Developing skills</p>
        </div>
        <div className="benefit-card personal-growth">
          <p>Personal growth</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
