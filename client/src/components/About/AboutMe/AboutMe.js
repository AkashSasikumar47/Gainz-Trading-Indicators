import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="about-me-section">
                <div className="about-me-content">
                    <h1 className="about-me-title">About Me</h1>
                    <h2 className="about-me-subtitle">Hi! I'm Akash Sasikumar 🚀</h2>
                    <p className="about-me-description">
                        I'm Akash Sasikumar, a student pursuing a degree in Computer Science and Engineering at SRM Institute of Science and Technology (SMIST). Beyond my academic pursuits, I'm passionate about trading, particularly in the world of equity and derivatives.
                    </p>
                </div>
            </div>

            <div className="about-me-section">
                <div className="about-me-content">
                    <h1 className="about-me-title">My Journey</h1>
                    <h2 className="about-me-subtitle">Combining Studies and Trading</h2>
                    <p className="about-me-description">
                        While focusing on my computer science studies, I also explore the exciting world of trading. This journey has led me to develop a unique set of trading indicators that I'm excited to share with you.
                    </p>
                </div>
            </div>

            <div className="about-me-section">
                <div className="about-me-content">
                    <h1 className="about-me-title">My Vision for GAINZ</h1>
                    <h2 className="about-me-subtitle">Empowering Traders</h2>
                    <p className="about-me-description">
                        My vision for GAINZ is to empower traders like you. I've crafted a set of trading indicators to provide the knowledge and tools you need to excel in the stock market. Let's level the playing field and enhance your trading strategies together.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
