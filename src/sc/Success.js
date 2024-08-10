import React from 'react';
import './Success.css';

const Success = () => {
  return (
    <div className="succession-plan">
      <h1>Succession Plan for Volunteer Social Media Manager</h1>
      <br></br><br></br>
      <div className="steps">
        <div className="step">
          <div className="icon master-role"></div>
          <h3>Master the Role</h3>
          <p>The current volunteer social media manager masters their duties and responsibilities.</p>
        </div>
        <div className="step">
          <div className="icon identify-successor"></div>
          <h3>Identify Potential Successor</h3>
          <p>The current volunteer social media manager and the volunteer coordinator work together to identify another volunteer who could take on the position.</p>
        </div>
        <div className="step">
          <div className="icon train-successor"></div>
          <h3>Train the Successor</h3>
          <p>The current volunteer social media manager brings their successor up to speed on their duties and responsibilities and prepares them to take over.</p>
        </div>
        <div className="step">
          <div className="icon move-successor"></div>
          <h3>Move the Successor into Their New Position</h3>
          <p>The volunteer social media manager leaves the volunteer program and their successor takes on their duties and responsibilities.</p>
        </div>
      </div>
    </div>
  );
};

export default Success;
