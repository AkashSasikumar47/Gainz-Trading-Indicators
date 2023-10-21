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

export default Indicators;
