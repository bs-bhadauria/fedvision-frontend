import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Gallery from './components/Gallery';
import Demonstration from './components/Demonstration';
import Calculator from './components/Calculator';
import Metrics from './components/Metrics';
import Contact from './components/Contact';
import Footer from './components/Footer';

const PitchDeck = lazy(() => import('./components/PitchDeck'));

const PITCH_DECK_PREFIX = 'pitch-deck';

const normaliseHash = (value = '') => {
  if (!value) {
    return '';
  }

  return value.startsWith('#') ? value : `#${value}`;
};

const getPageFromHash = (hash) =>
  hash.startsWith(`#${PITCH_DECK_PREFIX}`) ? 'pitchdeck' : 'landing';

const scrollToHashTarget = (hash) => {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const target = document.getElementById(hash.slice(1));

  if (!target) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const headerOffset = 96;
  const top =
    target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
};

function App() {
  const [activeHash, setActiveHash] = useState(() => window.location.hash || '');
  const [activePage, setActivePage] = useState(() =>
    getPageFromHash(window.location.hash || '')
  );

  useEffect(() => {
    const syncFromLocation = () => {
      const nextHash = window.location.hash || '';
      setActiveHash(nextHash);
      setActivePage(getPageFromHash(nextHash));
    };

    window.addEventListener('hashchange', syncFromLocation);
    window.addEventListener('popstate', syncFromLocation);

    return () => {
      window.removeEventListener('hashchange', syncFromLocation);
      window.removeEventListener('popstate', syncFromLocation);
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      scrollToHashTarget(activeHash);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeHash, activePage]);

  const updateHash = (nextHash = '') => {
    const hash = normaliseHash(nextHash);

    if (window.location.hash !== hash) {
      const nextUrl = hash
        ? `${window.location.pathname}${window.location.search}${hash}`
        : `${window.location.pathname}${window.location.search}`;

      window.history.pushState({}, '', nextUrl);
    }

    setActiveHash(hash);
    setActivePage(getPageFromHash(hash));
  };

  const handleLandingNavigation = (sectionId = '') => {
    updateHash(sectionId ? `#${sectionId}` : '');
  };

  const handlePitchDeckNavigation = (sectionId = PITCH_DECK_PREFIX) => {
    updateHash(`#${sectionId}`);
  };

  return (
    <div
      className="app-container"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Navbar
        activePage={activePage}
        onNavigateHome={handleLandingNavigation}
        onNavigatePitchDeck={handlePitchDeckNavigation}
      />

      <main style={{ flex: 1, padding: 0, overflowX: 'hidden' }}>
        <AnimatePresence mode="wait">
          {activePage === 'landing' ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Hero />
              <Features />
              <Architecture />
              <Gallery />
              <Demonstration />
              <Calculator />
              <Metrics />
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key="pitchdeck"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ width: '100%' }}
            >
              <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: '#07111f' }} />}>
                <PitchDeck />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
