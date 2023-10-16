import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Explore from './components/Explore/Explore';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Explore />
      </main>

      <Footer />
    </div>
  );
}

export default App;
