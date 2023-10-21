import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className="Hero">
            <div className="HeroTextContainer">
                <div className="HeroTitle">Welcome to GAINZ</div>
                <div className="HeroSubtitle">Your Ultimate Trading Indicator Resource</div>
                <img src="/Assets/Miscellaneous/Down_Arrow.svg" alt="Down Arrow" className="ArrowIcon" />
            </div>
        </div>
    );
}

export default Hero;
