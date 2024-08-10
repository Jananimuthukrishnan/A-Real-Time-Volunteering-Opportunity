import React from 'react';
import './Donate.css';
import DonateNow from './DonateNow';


const Donate = () => {
    return (
        <div className="donate-page">
            <div className="donate-header">
                <div className="donate-header-content">
                    <h1>DONATE</h1>
                    <h3>FOR THE POOR CHILDREN</h3>
                    <p>Every day we bring hope to millions of children in the world's hardest places as a sign of God's unconditional love.</p>
                    <button className="donate-button">Donate Now</button>
                </div>
            </div>
            <div className="donate-cards-container">
                <div className="donate-card">
                    <div className="donate-icon donate-volunteer-icon"></div>
                    <h2>BECOME A VOLUNTEER</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <button className="donate-card-button">Join us Now</button>
                </div>
                <div className="donate-card">
                    <div className="donate-icon donate-adopt-icon"></div>
                    <h2>ADOPT A CHILD</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <button className="donate-card-button">Contact us</button>
                </div>
                <div className="donate-card">
                    <div className="donate-icon donate-involved-icon"></div>
                    <h2>GET INVOLVED</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    <button className="donate-card-button">Donate us</button>
                </div>
                <div className="donate-card">
                    <div className="donate-icon donate-emergency-icon"></div>
                    <h2>EMERGENCY CASE</h2>
                    <p>+(012) 345 6789</p>
                    <button className="donate-card-button">Contact Now</button>
                </div>
            </div>
            <DonateNow/>
        </div>
    );
};

export default Donate;
