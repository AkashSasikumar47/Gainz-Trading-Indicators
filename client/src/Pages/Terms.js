import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import TermsConditions from '../components/Terms/TermsConditions/TermsConditions';

function Terms() {
    return (
        <div>
            <Navbar />

            <main>
                <TermsConditions />
            </main>

            <Footer />
        </div>
    );
}

Terms.title = "Terms and Conditions - Gainz Trading Indicators";
Terms.description = "Read our Terms and Conditions to understand the rules and guidelines for using Gainz Trading Indicators. By accessing our services, you agree to abide by these terms.";

export default Terms;
