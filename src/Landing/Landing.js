import React from 'react';
import Button from '@mui/material/Button';
import './Landing.css';
import { Link } from 'react-router-dom';
import Leaderboard from '../Leaderboard/Leaderboard.js';
import Success from '../sc/Success.js';
import Carousel from '../carousel/Carousel.js';

export default function Landing() {
  return (
    <div>
      <div className="lan-all">
        <div className="lan-con">
          <div style={{ paddingLeft: 100,backgroundColor:"white"}}>
            <h1>We're Mobilizing 10 <br /> Million Volunteers <br /> by 2025</h1>
            <div style={{ fontSize: 20 }}>
              <p>Join the countless who trust VolunteerHub <br />to strengthen communities.
                Together, we're <br />creating a lasting impact together for today <br /> and the future. </p>
            </div>
            <span className="lan-span">
              <Link to="/apply">
                <Button className="applay-btn" variant="contained">Apply</Button>
              </Link>
            </span>
          </div>
        </div>
        <div className="lan-img"></div>
      </div>
      <br></br><br></br>
      <Success/>
      <br></br><br></br>
      <Leaderboard/>
      <br></br><br></br>
      <Carousel/>
      <br></br><br></br><br></br>
    </div>
  );
}
