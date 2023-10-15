import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <div className="logo-text">GAINZ</div>
            </div>
            <div className="links">
                <div className="link">About</div>
                <div className="link">Indicators</div>
                <div className="link">Contact</div>
            </div>
        </div>
    );
}

export default Navbar;
