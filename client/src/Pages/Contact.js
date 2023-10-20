import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import Footer from './components/Home/Footer/Footer';
import ContactUs from './components/ContactUs'; // Your ContactUs component

function Contact() {
    return (
        <div className="Contact">
            <Navbar />
            <main className="main-content">
                <ContactUs />
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
