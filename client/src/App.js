import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
