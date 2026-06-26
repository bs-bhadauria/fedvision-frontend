import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Gallery from './components/Gallery'; // <-- Imported the new Gallery component
import Demonstration from './components/Demonstration';
import Calculator from './components/Calculator';
import Metrics from './components/Metrics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      
      {/* The New Infinite Scrolling Gallery */}
      <Gallery />
      
      <Demonstration />
      <Calculator />
      <Metrics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;