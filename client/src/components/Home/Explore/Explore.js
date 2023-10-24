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
                            src="/Assets/sample_images/Explore_section.png"
                            alt="A scenic mountain landscape"
                        />
                    </div>
                    <div className="ExploreCardTitle">Perfect for Beginners</div>
                    <div className="ExploreCardDescription">
                        Explore complex market insights with our expertly crafted indicators.
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Explore;
