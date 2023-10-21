import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import PrivacyPolicy from '../components/Privacy/PrivacyPolicy/PrivacyPolicy';

function Privacy() {
    return (
        <div>
            <Navbar />

            <main>
                <PrivacyPolicy />
            </main>

            <Footer />
        </div>
    );
}

export default Privacy;
