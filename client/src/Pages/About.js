import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import AboutMe from '../components/About/AboutMe/AboutMe';
import CTA from '../components/Home/CTA/CTA';

function About() {
    return (
        <div>
            <Navbar />

            <main>
                <AboutMe />
                <CTA />
            </main>

            <Footer />
        </div>
    );
}

export default About;
