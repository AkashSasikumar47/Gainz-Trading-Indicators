import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Logo">
                <div className="LogoText">GAINZ</div>
            </div>
            <div className="Menu">
                <div className="MenuItem">About</div>
                <div className="MenuItem">Indicators</div>
                <div className="MenuItem">Contact</div>
            </div>
        </div>
    );
}

export default Navbar;
