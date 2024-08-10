// Card.js
import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageClass }) => {
  return (
    <div className="card">
      <div className={`card-image ${imageClass}`}></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-button-wrapper">
        <Link to="/apply" className="card-button">Select</Link>
      </div>
    </div>
  );
};

export default Card;
