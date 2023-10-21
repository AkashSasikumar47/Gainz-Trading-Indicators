import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me-container">

            <div className="about-me-section">
                <img
                    src="/Assets/sample_images/img-1.jpg"
                    alt="Student and Trader"
                    className="about-me-image"
                />
                <div className="about-me-content">
                    <h1 className="about-me-title">Get to Know Me</h1>
                    <h2 className="about-me-subtitle">Hi, I'm Akash Sasikumar!</h2>
                    <p className="about-me-description">
                        I'm a student pursuing a degree in Computer Science and Engineering at SRM Institute of Science and Technology (SMIST). Beyond the books, I'm passionate about trading, especially in the world of equity and derivatives.
                    </p>
                </div>
            </div>

            <div className="about-me-section">
                <img
                    src="/Assets/sample_images/img-2.jpg"
                    alt="Student and Trader"
                    className="about-me-image"
                />
                <div className="about-me-content">
                    <h1 className="about-me-title">My Journey</h1>
                    <h2 className="about-me-subtitle">Student and Trader</h2>
                    <p className="about-me-description">
                        I'm a student pursuing a degree in Computer Science and Engineering at SRM Institute of Science and Technology (SMIST). Beyond the books, I'm passionate about trading, especially in the world of equity and derivatives.
                    </p>
                </div>
            </div>

            <div className="about-me-section">
                <img
                    src="/Assets/sample_images/img-3.jpg"
                    alt="Empowering You"
                    className="about-me-image"
                />
                <div className="about-me-content">
                    <h1 className="about-me-title">My Vision for GAINZ</h1>
                    <h2 className="about-me-subtitle">Empowering You</h2>
                    <p className="about-me-description">
                        My goal with GAINZ is simple: I want to empower you, the trader. I've crafted a set of trading indicators to provide you with the knowledge and tools you need to succeed in the stock market. Let's level the playing field and boost your trading strategies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
