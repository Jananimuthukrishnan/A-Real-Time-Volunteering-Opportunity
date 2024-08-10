import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footcontainer">
                <div className="row">
                    <div className="ft-1">
                        <h3><span>Kind</span>Quest</h3>
                        <p>KindQuest Volunteering empowers individuals and communities through meaningful volunteer opportunities, promoting positive change and social impact.</p>
                        <div className="footer-icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="ft-2">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Organization</a></li>
                            <li><a href="/">Event</a></li>
                            <li><a href="/">Donate</a></li>
                            <li><a href="/">Login</a></li>
                        </ul>
                    </div>
                    <div className="ft-3">
                        <h5>Contact</h5>
                        <p><i className="fa-solid fa-phone-volume"></i> +91 173314</p>
                        <p><i className="fa-solid fa-envelope"></i> kindquest17@gmail.com</p>
                        <p><i className="fa-solid fa-map-marker-alt"></i> Kalyani, Nadia</p>
                    </div>
                    <div className="ft-4">
                        <h5>Connect With Us</h5>
                        <p><i className="fa-solid fa-envelope"></i> admin@Kindquestindia.com</p>
                        <p><i className="fa-solid fa-phone"></i> +91 88915 57706</p>
                        <div className="footer-icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
