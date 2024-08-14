import React, { useState } from 'react';
import './DonateNow.css';

const DonateProduct = () => {
    const [donationAmount, setDonationAmount] = useState('');

    const handleDonationChange = (e) => {
        setDonationAmount(e.target.value);
    };

    return (
        <div className="gf-donate-page">
            <div className="gf-donate-container">
                <div className="gf-donate-image"></div>
                <div className="gf-donate-form-container">
                    <div className="gf-donation-progress">
                        <div className="gf-progress-bar">
                            <div className="gf-progress" style={{ width: '15%' }}></div>
                        </div>
                        <div className="gf-progress-info">
                            <span>$0 Raised</span>
                            <span>0 Donations</span>
                            <span>$1000 Goal</span>
                        </div>
                    </div>
                    <div className="gf-donation-buttons">
                        <button>Food</button>
                        <button>Cloth</button>
                        <button>Medicine</button>
                        <button>Custom Amount</button>
                    </div>
                    <div className="gf-donation-inputs">
                        <input type="text" placeholder="Name" /><br></br><br></br>
                        <input type="text" placeholder="product name" /><br></br><br></br>
                        <input type="text" placeholder="email" /><br></br><br></br>
                        <input type="text" placeholder="Address" />
                    </div>
                    <br></br>
                    
                    <br></br>
                    <button className="gf-submit-button">SUBMIT</button>
                </div>
            </div>
        </div>
    );
};

export default DonateProduct;
