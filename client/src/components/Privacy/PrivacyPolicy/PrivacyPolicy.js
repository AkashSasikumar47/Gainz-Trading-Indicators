import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <div className="section">
                <h1>Privacy Policy</h1>
                <p>Effective Date: 01/10/2023</p>
            </div>
            <div className="section">
                <h2>Overview</h2>
                <p>Welcome to GAINZ. We're dedicated to respecting your privacy while you explore our platform. This simplified Privacy Policy outlines how we handle your information.</p>
            </div>
            <div className="section">
                <h2>Information We Collect</h2>
                <ul>
                    <li>Contact Information: We may collect your name and email address if you contact us.</li>
                    <li>Usage Information: We collect data on how you use GAINZ to improve our content and user experience.</li>
                </ul>
            </div>
            <div className="section">
                <h2>How We Use Your Information</h2>
                <ul>
                    <li>Communication: Your contact information is used to respond to your inquiries and messages.</li>
                    <li>Platform Improvement: Usage data helps us enhance GAINZ for a better user experience.</li>
                </ul>
            </div>
            <div className="section">
                <h2>Data Sharing</h2>
                <p>We don't share your personal information with external parties.</p>
            </div>
            <div className="section">
                <h2>Security</h2>
                <p>We take basic security measures to protect your information, but please note that online data transmission is not entirely secure.</p>
            </div>
            <div className="section">
                <h2>Your Choices</h2>
                <p>You can reach out to us if you wish to review or update your information.</p>
            </div>
            <div className="section">
                <h2>Changes to This Policy</h2>
                <p>We may update this Privacy Policy, and changes will be posted on this page.</p>
            </div>
            <div className="section">
                <h2>Contact Us</h2>
                <p>If you have any privacy concerns or questions, please don't hesitate to <a href="/contact">contact us</a>.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
