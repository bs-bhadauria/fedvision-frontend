import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <a href="#" className="logo">
          <span className="logo-icon"></span>
          Fed<span>Vision</span>
        </a>
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#features" onClick={handleLinkClick}>Features</a>
          <a href="#architecture" onClick={handleLinkClick}>Architecture</a>
          <a href="#calculator" onClick={handleLinkClick}>Economics</a>
          <a href="#metrics" onClick={handleLinkClick}>Validation</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </nav>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-sm btn-outline">Request Pilot</a>
        </div>
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;