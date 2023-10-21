import React from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
    return (
        <div className="terms-conditions-container">
            <div className="section">
                <h1>Terms of Use</h1>
                <p>Effective Date: 01/10/2023</p>
            </div>
            <div className="section">
                <h2>Introduction</h2>
                <p>Welcome to GAINZ. The following terms outline the rules for using our website. By accessing or using GAINZ, you agree to abide by these terms.</p>
            </div>
            <div className="section">
                <h2>User Responsibilities</h2>
                <ul>
                    <li>You must be at least 18 years old to use GAINZ or have the consent of a legal guardian.</li>
                    <li>You are responsible for your interactions and content on our platform.</li>
                    <li>You agree not to engage in any harmful or illegal activities while using GAINZ.</li>
                </ul>
            </div>
            <div className="section">
                <h2>Intellectual Property</h2>
                <p>All content on GAINZ, including technical indicators and trading information, is protected by intellectual property rights. You may not use or reproduce our content without permission.</p>
            </div>
            <div className="section">
                <h2>Limitations of Liability</h2>
                <ul>
                    <li>We strive to provide accurate and helpful information, but we make no guarantees about the accuracy or completeness of the content.</li>
                    <li>We are not liable for any losses or damages resulting from your use of GAINZ or the information provided.</li>
                </ul>
            </div>
            <div className="section">
                <h2>Changes to Terms</h2>
                <p>We may update these Terms of Use, and any changes will be posted on this page.</p>
            </div>
            <div className="section">
                <h2>Termination</h2>
                <p>We reserve the right to terminate or suspend your access to GAINZ for violating these terms.</p>
            </div>
            <div className="section">
                <h2>Contact Us</h2>
                <p>If you have any questions or concerns about these Terms of Use, please feel free to <a href="/contact">contact us</a>.</p>
            </div>
        </div>
    );
};

export default TermsConditions;
