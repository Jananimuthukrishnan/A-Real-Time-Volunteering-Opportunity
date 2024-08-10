import React, { useState } from 'react';
import './DonateNow.css';

const DonateNow = () => {
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
                    <div className="gf-donation-amount">
                        <label>Donation Progress Item</label>
                        <input
                            type="text"
                            value={donationAmount}
                            onChange={handleDonationChange}
                            placeholder="$150"
                        />
                    </div>
                    <div className="gf-donation-buttons">
                        <button>Food</button>
                        <button>Cloth</button>
                        <button>Medicine</button>
                        <button>Custom Amount</button>
                    </div>
                    <div className="gf-donation-inputs">
                        <input type="text" placeholder="Name" />
                    </div>
                    <br></br>
                    <div className="gf-payment-methods">
                        <label>Select Payment Method</label>
                        <br></br>
                        <div className="gf-payment-icons">
                            <div className="gf-payment-icon stripe"></div>
                            <div className="gf-payment-icon paypal"></div>
                            <div className="gf-payment-icon mollie"></div>
                            <div className="gf-payment-icon razorpay"></div>
                            <div className="gf-payment-icon paystack"></div>
                            <div className="gf-payment-icon paytm"></div>
                            <div className="gf-payment-icon square"></div>
                        </div>
                    </div>
                    <br></br>
                    <button className="gf-submit-button">SUBMIT</button>
                </div>
            </div>
        </div>
    );
};

export default DonateNow;
