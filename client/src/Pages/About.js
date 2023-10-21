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

export default About;
