import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import Hero from '../components/Home/Hero/Hero';
import Aboutgainz from '../components/Home/Aboutgainz/Aboutgainz';
import Explore from '../components/Home/Explore/Explore';
import CTA from '../components/Home/CTA/CTA';

function HomePage() {
    return (
        <div>
            <Navbar />

            <main>
                <Hero />
                <Aboutgainz />
                <Explore />
                <CTA />
            </main>

            <Footer />
        </div>
    );
}

HomePage.title = "Gainz Trading Indicators - Your Source for Technical Indicators";
HomePage.description = "Gainz Trading Indicators provides a wide range of technical indicators to help you make informed trading decisions. Explore our collection of indicators for traders of all levels.";

export default HomePage;
