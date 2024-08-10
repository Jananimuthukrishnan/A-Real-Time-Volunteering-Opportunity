import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [successMessage, setSuccessMessage] = useState('');

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle payment submission logic (e.g., sending data to a server)
        console.log('Payment method:', paymentMethod);
        // Simulate a successful payment
        setSuccessMessage('Payment Successful!');
    };

    return (
        <div className="payment-page-container">
            <div className="payment-form-container">
                <h2>Payment Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nameOnCard">Name on Card</label>
                        <input type="text" id="nameOnCard" name="nameOnCard" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="text" id="cardNumber" name="cardNumber" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <select id="paymentMethod" name="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
                            <option value="creditCard">Credit Card</option>
                            <option value="debitCard">Debit Card</option>
                            <option value="ruPay">RuPay</option>
                        </select>
                    </div>
                    <button type="submit">Make Payment</button>
                </form>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </div>
    );
};

export default Payment;
