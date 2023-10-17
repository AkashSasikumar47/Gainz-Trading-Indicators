import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <div className="CTA">
            <div className="CTAContent">
                <div className="CTATitle">
                    <h2>Ready to Dive In?</h2>
                </div>
                <div className="CTASubtitle">
                    <h3>Let's Make Those Gains Together</h3>
                </div>
                <div className="CTADescription">
                    <p>
                        Start exploring our indicator repositories and gain a competitive edge in the stock market. Whether you're new to trading or an experienced investor, GAINZ has something valuable to offer.
                    </p>
                </div>
                <div className="CTAButton">
                    <button>Explore Indicators</button>
                </div>
            </div>
            <div className="CTAImage">
                {/* You can add an image here */}
            </div>
        </div>
    );
};

export default CTA;