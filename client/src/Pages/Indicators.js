import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import IndicatorHero from '../components/Indicators/IndicatorHero/IndicatorHero';
import IndicatorList from '../components/Indicators/IndicatorList/IndicatorList';

function Indicators() {
    return (
        <div>
            <Navbar />

            <main>
                <IndicatorHero />
                <IndicatorList />
            </main>

            <Footer />
        </div>
    );
}

Indicators.title = "Trading Indicators - Enhance Your Trading Strategies";
Indicators.description = "Explore a collection of trading indicators to enhance your trading strategies. Gainz Trading Indicators offers a range of technical indicators for traders and stock market enthusiasts.";

export default Indicators;
