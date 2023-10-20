import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import Footer from './components/Home/Footer/Footer';
import AboutUs from './components/AboutUs';

function About() {
    return (
        <div className="About">
            <Navbar />
            <main className="main-content">
                <AboutUs />
            </main>
            <Footer />
        </div>
    );
}

export default About;
