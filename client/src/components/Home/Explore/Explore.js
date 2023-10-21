// Explore.js
import React from 'react';
import './Explore.css';

function Explore() {
    return (
        <div className="Explore">
            <div className="ExploreSection">
                <div className="ExploreSectionHeader">
                    <div className="ExploreSectionTitle">Explore Our Indicator Repositories</div>
                </div>
            </div>

            <div className="ExploreSection">
                <div className="ExploreCard">
                    <div className="ExploreCardImage">
                        <img
                            src="/Assets/sample_images/img-1.jpg"
                            alt="A scenic mountain landscape"
                        />
                    </div>
                    <div className="ExploreCardTitle">Perfect for Beginners</div>
                    <div className="ExploreCardDescription">
                        For those just starting, this repository offers beginner-friendly technical indicators coded in Pine Script and compatible with TradingView. Dive into the world of trading with confidence.
                    </div>
                </div>
            </div>

            <div className="ExploreSection">
                <div className="ExploreCard">
                    <div className="ExploreCardImage">
                        <img
                            src="/Assets/sample_images/img-2.jpg"
                            alt="A scenic mountain landscape"
                        />
                    </div>
                    <div className="ExploreCardTitle">Elevate Your Game</div>
                    <div className="ExploreCardDescription">
                        For traders looking to take it up a notch, these intermediate-level indicators provide insights into market trends, volatility, and potential price movements. Fine-tune your strategies and make more informed decisions.
                    </div>
                </div>
            </div>

            <div className="ExploreSection">
                <div className="ExploreCard">
                    <div className="ExploreCardImage">
                        <img
                            src="/Assets/sample_images/img-3.jpg"
                            alt="A scenic mountain landscape"
                        />
                    </div>
                    <div className="ExploreCardTitle">For the Experts</div>
                    <div className="ExploreCardDescription">
                        Designed for the experienced, this repository offers a comprehensive collection of advanced technical indicators. Analyze price movements, identify trends, and predict potential market reversals.
                    </div>
                </div>
            </div>

            <div className="ExploreSection">
                <div className="ExploreCard">
                    <div className="ExploreCardImage">
                        <img
                            src="/Assets/sample_images/img-1.jpg"
                            alt="A scenic mountain landscape"
                        />
                    </div>
                    <div className="ExploreCardTitle">Customize Your Strategy</div>
                    <div className="ExploreCardDescription">
                        Tailor your trading strategies with these custom indicators. Unlock your trading potential, make informed decisions, and succeed in the dynamic world of financial markets.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
