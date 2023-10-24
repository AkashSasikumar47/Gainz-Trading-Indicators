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

Privacy.title = "Privacy Policy - Gainz Trading Indicators";
Privacy.description = "Read our Privacy Policy to learn how Gainz Trading Indicators handles your data and privacy. We are committed to protecting your information.";

export default Privacy;
