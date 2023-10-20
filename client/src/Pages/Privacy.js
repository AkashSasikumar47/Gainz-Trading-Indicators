import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import Footer from './components/Home/Footer/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';

function Privacy() {
    return (
        <div className="Privacy">
            <Navbar />
            <main className="main-content">
                <PrivacyPolicy />
            </main>
            <Footer />
        </div>
    );
}

export default Privacy;
