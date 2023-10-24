import React from 'react';
import Navbar from '../components/Home/Navbar/Navbar';
import Footer from '../components/Home/Footer/Footer';
import ContactUs from '../components/Contact/ContactUs/ContactUs';

function Contact() {
    return (
        <div>
            <Navbar />

            <main>
                <ContactUs />
            </main>

            <Footer />
        </div>
    );
}

Contact.title = "Contact Gainz Trading Indicators - Get in Touch with Us";
Contact.description = "Contact Gainz Trading Indicators to get in touch with our team. We're here to answer your questions and provide assistance related to our trading indicators.";

export default Contact;
