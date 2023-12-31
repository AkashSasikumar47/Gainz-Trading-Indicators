import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

function CTA() {
    return (
        <div className="CTA">
            <h2>Ready to Dive In?</h2>
            <h3>Let's Make Those Gains Together</h3>
            <p>
                Start exploring our indicator repositories and gain a competitive edge in the stock market. Whether you're new to trading or an experienced investor, GAINZ has something valuable to offer.
            </p>
            <Link to="/indicators" className="button">Learn More</Link>
        </div>
    );
}

export default CTA;
