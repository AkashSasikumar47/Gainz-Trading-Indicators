import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="FooterSection ContactInfo">
                <h3>Contact Us</h3>
                <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
                <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
                <p>Address: 123 Main St, City, Country</p>
                <p>&copy;GAINZ</p>
            </div>
            <div className="FooterSection QuickLinks">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="FooterSection LegalInfo">
                <h3>Legal Information</h3>
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-use">Terms of Use</a></li>
                </ul>
            </div>
            <div className="FooterSection QuickLinks">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="https://github.com">Github</a></li>
                    <li><a href="https://www.linkedin.com">Linkedin</a></li>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
