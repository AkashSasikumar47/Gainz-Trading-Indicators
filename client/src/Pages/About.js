import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import AboutMe from '../components/About/AboutMe/AboutMe';
import AboutCTA from '../components/About/AboutCTA/AboutCTA';

function About() {
    return (
        <div>
            <Navbar />

            <main>
                <AboutMe />
                <AboutCTA />
            </main>

            <Footer />
        </div>
    );
}

About.title = "About Gainz Trading Indicators - Learn About Our Services";
About.description = "Discover more about Gainz Trading Indicators and our services. We provide a wide range of technical indicators to help traders make informed decisions.";

export default About;
