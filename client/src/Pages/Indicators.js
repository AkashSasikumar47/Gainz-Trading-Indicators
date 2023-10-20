import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import Footer from './components/Home/Footer/Footer';
import TradingIndicators from './components/TradingIndicators'; // Your TradingIndicators component

function Indicators() {
    return (
        <div className="Indicators">
            <Navbar />
            <main className="main-content">
                <TradingIndicators />
            </main>
            <Footer />
        </div>
    );
}

export default Indicators;
