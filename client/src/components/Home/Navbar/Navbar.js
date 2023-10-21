import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <Link to="/" className="Logo">
                <div className="LogoText">GAINZ</div>
            </Link>
            <div className="Menu">
                <Link to="/about" className="MenuItem">
                    About
                </Link>
                <Link to="/indicators" className="MenuItem">
                    Indicators
                </Link>
                <Link to="/contact" className="MenuItem">
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
