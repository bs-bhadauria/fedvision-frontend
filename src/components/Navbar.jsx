import React, { useState } from 'react';

const landingLinks = [
  { label: 'Features', target: 'features', href: '#features', page: 'landing' },
  {
    label: 'Architecture',
    target: 'architecture',
    href: '#architecture',
    page: 'landing'
  },
  { label: 'Use Cases', target: 'use-cases', href: '#use-cases', page: 'landing' },
  { label: 'Economics', target: 'calculator', href: '#calculator', page: 'landing' },
  { label: 'Validation', target: 'metrics', href: '#metrics', page: 'landing' },
  { label: 'Contact', target: 'contact', href: '#contact', page: 'landing' }
];

const pitchDeckLinks = [
  {
    label: 'Overview',
    target: 'pitch-deck-overview',
    href: '#pitch-deck-overview',
    page: 'pitchdeck'
  },
  {
    label: 'Solution',
    target: 'pitch-deck-solution',
    href: '#pitch-deck-solution',
    page: 'pitchdeck'
  },
  {
    label: 'Architecture',
    target: 'pitch-deck-architecture',
    href: '#pitch-deck-architecture',
    page: 'pitchdeck'
  },
  {
    label: 'Validation',
    target: 'pitch-deck-validation',
    href: '#pitch-deck-validation',
    page: 'pitchdeck'
  },
  {
    label: 'Economics',
    target: 'pitch-deck-market',
    href: '#pitch-deck-market',
    page: 'pitchdeck'
  },
  {
    label: 'Ask',
    target: 'pitch-deck-ask',
    href: '#pitch-deck-ask',
    page: 'pitchdeck'
  }
];

const Navbar = ({ activePage, onNavigateHome, onNavigatePitchDeck }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = activePage === 'pitchdeck' ? pitchDeckLinks : landingLinks;

  const handleLogoClick = (event) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigateHome();
  };

  const handleNavClick = (event, link) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (link.page === 'pitchdeck') {
      onNavigatePitchDeck(link.target);
      return;
    }

    onNavigateHome(link.target);
  };

  const handlePitchDeckToggle = () => {
    setIsMobileMenuOpen(false);

    if (activePage === 'pitchdeck') {
      onNavigateHome();
      return;
    }

    onNavigatePitchDeck();
  };

  const handleRequestPilot = (event) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigateHome('contact');
  };

  return (
    <header className="header">
      <div className="nav-container">
        <a href="/" className="logo" onClick={handleLogoClick}>
          <span className="logo-icon"></span>
          Fed<span>Vision</span>
        </a>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-menu-link"
              onClick={(event) => handleNavClick(event, link)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <button
            type="button"
            className={`nav-pill ${activePage === 'pitchdeck' ? 'active' : ''}`}
            onClick={handlePitchDeckToggle}
          >
            {activePage === 'pitchdeck' ? 'Back to Home' : 'Pitch Deck'}
          </button>

          <a href="#contact" className="btn btn-sm btn-outline" onClick={handleRequestPilot}>
            Request Pilot
          </a>
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
