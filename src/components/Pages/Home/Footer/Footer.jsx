import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-section contact-info">
                    <h2>Contact Information</h2>
                    <div className="contact-items">
                        <span><AiFillPhone /> &nbsp; +1 123 456 789</span>
                        <span><AiOutlineMail /> &nbsp; info@example.com</span>
                    </div>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Explore Ragpickers</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section contact-form">
                    <h2>Contact Us</h2>
                    <form action="#">
                        <input type="email" name="email" placeholder="Your Email" className="text-input contact-input" />
                        <textarea rows="4" name="message" placeholder="Your Message" className="text-input contact-input"></textarea>
                        <button type="submit" className="btn contact-btn">Send</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Waste Management Platform. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
