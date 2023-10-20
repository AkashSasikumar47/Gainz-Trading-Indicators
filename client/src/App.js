import React from 'react';
import Navbar from './components/Home/Navbar/Navbar';
import Footer from './components/Home/Footer/Footer';
import Hero from './components/Home/Hero/Hero';
import Aboutgainz from './components/Home/Aboutgainz/Aboutgainz';
import Explore from './components/Home/Explore/Explore';
import CTA from './components/Home/CTA/CTA';

import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="main-content">
        <Hero />
        <Aboutgainz />
        <Explore />
        <CTA />
        <Routes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
