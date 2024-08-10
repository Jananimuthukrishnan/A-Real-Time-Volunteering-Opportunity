import React from 'react';
import './Volunteer.css';

const Volunteer = () => {
  return (
    <section className="volunteer-stories">
      <div className="vo-container">
        <div className="section-voheader">
          <h2>Read Volunteers' Stories</h2>
          <div className="vonavigation">
            <button className="nav-btn prev-btn">&#9664;</button>
            <button className="nav-btn next-btn">&#9654;</button>
          </div>
        </div>
        <div className="stories-grid">
          <div className="story-card story1">
            <div className="story-content">
              <h3>For this teen, the 20th placement was the</h3>
              <p>After more than a decade in foster care, and with his CASA volunteer by his side, Jeremy headed to a secure future with his adoptive family.</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </div>
          <div className="story-card story2">
            <div className="story-content">
              <h3>Teen succeeds in school with the help of a CASA</h3>
              <p>Thanks to his own hard work and the support of an adult with the time and initiative to enable his school success, Michael's now a full-time community college student.</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </div>
          <div className="story-card story3">
            <div className="story-content">
              <h3>CASA/GAL volunteers are more than a voice in</h3>
              <p>In becoming effective advocates, CASA/GAL volunteers become more.</p>
              <a href="#" className="read-more">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
