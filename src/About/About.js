import React from 'react';
import './About.css';
import Addabt from '../addabt/Addabt';
import Benefits from '../Benefits/Benefits';
import Volunteer from '../vost/Volunteer';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-section">
        <div className="about-description">
          <h1>Volunteer for India</h1>
          <p>
            Volunteer for India aims to <strong>uplift the underprivileged population</strong> and
            solve <strong>pertinent social issues</strong> affecting communities across India through
            structured <strong>volunteering programs</strong>. Our aim is to enable every Indian to
            volunteer for social betterment. The organization, co-founded by Gautham Ravindran and
            Ramalingam Natarajan, is registered as a non-profit organization (under the Travancore-Cochin
            Literary, Scientific and Charitable Societies Registration Act, 1955) as Society for Promotion
            of Volunteerism, with the vision of promoting volunteerism as a national value.
          </p>
        </div>
        <div className="video-container">
          <video className="background-video" autoPlay loop muted>
            <source src="/video_about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="about-stats">
        <div className="stat-item">
          <h2>80+</h2>
          <p>Successful Projects</p>
        </div>
        <div className="stat-item">
          <h2>24</h2>
          <p>States</p>
        </div>
        <div className="stat-item">
          <h2>7k</h2>
          <p>Incredible Volunteers</p>
        </div>
        <div className="stat-item">
          <h2>70k+</h2>
          <p>Volunteering Hours in 2022</p>
        </div>
      </div>
      <Addabt/>
      <br></br>
      <Benefits/>
      <br></br>
      <Volunteer/>
      <br></br>
    </div>
    
  );
};

export default About;
