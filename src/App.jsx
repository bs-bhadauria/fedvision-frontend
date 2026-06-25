import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Calculator from './components/Calculator';
import Metrics from './components/Metrics';
import Demonstration from './components/Demonstration'; // Naya component
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <Hero />
      <Features />
      <Architecture />
      <Calculator />
      <Metrics />
      
      {/* Embedded Videos Section */}
      <Demonstration />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;