import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import Footer from './components/Home/Footer/Footer';
import TermsOfUse from './components/TermsOfUse';

function Terms() {
    return (
        <div className="Terms">
            <Navbar />
            <main className="main-content">
                <TermsOfUse />
            </main>
            <Footer />
        </div>
    );
}

export default Terms;
