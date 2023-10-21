import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import TermsConditions from '../components/Terms/TermsConditions/TermsConditions';

function Terms() {
    return (
        <div>
            <div>
                <Navbar />

                <main>
                    <TermsConditions />
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default Terms;
