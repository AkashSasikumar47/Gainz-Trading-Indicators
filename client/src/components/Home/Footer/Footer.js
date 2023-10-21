import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="FooterSection ContactInfo">
                <h3>Contact Us</h3>
                <p>Email: <a href="mailto:akashsasikumar47@gmail.com">akashsasikumar47@gmail.com</a></p>
                <p>Phone: <a href="tel:+91 9946927980">+91 9946927980</a></p>
                <p>&copy;GAINZ</p>
            </div>
            <div className="FooterSection QuickLinks">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/indicators">Indicators</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="FooterSection LegalInfo">
                <h3>Legal Information</h3>
                <ul>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Use</a></li>
                </ul>
            </div>
            <div className="FooterSection QuickLinks">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="https://github.com/AkashSasikumar47">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/akash-sasikumar47">Linkedin</a></li>
                    <li><a href="https://www.instagram.com/akash__sasikumar">Instagram</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
