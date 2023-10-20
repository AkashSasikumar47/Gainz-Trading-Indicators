import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <div className="title-section">
                <div className="title">Privacy Policy</div>
                <div className="effective-date">Effective Date: 01/10/2023</div>
            </div>
            <div className="section">
                <div className="section-title">Overview</div>
                <div className="section-content">
                    Welcome to GAINZ. We're dedicated to respecting your privacy while you explore our platform. This simplified Privacy Policy outlines how we handle your information.
                </div>
            </div>
            <div className="section">
                <div className="section-title">Information We Collect</div>
                <div className="section-content">
                    Contact Information: We may collect your name and email address if you contact us.<br />
                    Usage Information: We collect data on how you use GAINZ to improve our content and user experience.
                </div>
            </div>
            <div className="section">
                <div className="section-title">How We Use Your Information</div>
                <div className="section-content">
                    Communication: Your contact information is used to respond to your inquiries and messages.<br />
                    Platform Improvement: Usage data helps us enhance GAINZ for a better user experience.
                </div>
            </div>
            <div className="section">
                <div className="section-title">Data Sharing</div>
                <div className="section-content">
                    We don't share your personal information with external parties.
                </div>
            </div>
            <div className="section">
                <div className="section-title">Security</div>
                <div className="section-content">
                    We take basic security measures to protect your information, but please note that online data transmission is not entirely secure.
                </div>
            </div>
            <div className="section">
                <div className="section-title">Your Choices</div>
                <div className="section-content">
                    You can reach out to us if you wish to review or update your information.
                </div>
            </div>
            <div className="section">
                <div className="section-title">Changes to This Policy</div>
                <div className="section-content">
                    We may update this Privacy Policy, and changes will be posted on this page.
                </div>
            </div>
            <div className="section">
                <div className="section-title">Contact Us</div>
                <div className="section-content">
                    If you have any privacy concerns or questions, please don't hesitate to <span className="contact-link">contact us</span>.
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
