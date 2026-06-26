import React from 'react';

const Gallery = () => {
  // Aapke public folder ke images ka array
  const images = [
    '/lab-photos/lab1.jpeg',
    '/lab-photos/lab2.jpeg',
    '/lab-photos/lab3.jpeg',
    '/lab-photos/lab4.jpeg',
    '/lab-photos/lab5.jpeg',
    '/lab-photos/lab6.jpeg',
    '/lab-photos/lab7.jpeg',
    '/lab-photos/lab8.jpeg',
    '/lab-photos/lab9.jpeg',
  ];

  // Infinite loop ke liye array ko double kar rahe hain
  const duplicatedImages = [...images, ...images];

  return (
    <section id="gallery" className="section" style={{ backgroundColor: '#090e1a', overflow: 'hidden' }}>
      
      {/* Premium Infinite Scroll CSS */}
      <style>
        {`
          .marquee-wrapper {
            position: relative;
            width: 100%;
            padding: 40px 0;
            display: flex;
            overflow: hidden;
            /* Fade edges for a premium look */
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }

          .marquee-track {
            display: flex;
            gap: 30px;
            width: max-content;
            /* 40 seconds for a smooth, slow pan */
            animation: scroll 40s linear infinite;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          .gallery-img {
            width: 350px;
            height: 250px;
            object-fit: cover;
            border-radius: 12px;
            border: 1px solid #1e293b;
            filter: grayscale(70%) opacity(0.8);
            transition: all 0.4s ease;
            cursor: pointer;
          }

          .gallery-img:hover {
            filter: grayscale(0%) opacity(1);
            transform: scale(1.05);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
            z-index: 10;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            /* Shift exactly half the track width because we duplicated the images */
            100% { transform: translateX(calc(-50% - 15px)); } 
          }

          /* Mobile adjustments */
          @media (max-width: 768px) {
            .gallery-img {
              width: 280px;
              height: 200px;
            }
          }
        `}
      </style>

      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">LAB VALIDATED (TRL 4-5)</span>
          
          {/* UPDATED MAIN TITLE */}
          <h2 className="section-title">Inside the 5G USECASE LAB, CUH</h2>
          
          {/* NEW HIGHLIGHTED SPONSOR LINE */}
          <p className="sponsor-highlight" style={{ fontSize: '1.4rem', color: '#06b6d4', fontWeight: 'bold', marginTop: '10px' }}>
            Sponsored by DoT, Government of India
          </p>

          <p style={{ color: '#94a3b8', marginTop: '15px', maxWidth: '600px', margin: '15px auto 0' }}>
            A glimpse into our real-world deployment, testing our edge gateways, configuring network switches, and stress-testing models on active hardware.
          </p>
        </div>
      </div>

      {/* The Infinite Auto-Scrolling Track */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {duplicatedImages.map((src, index) => (
            <img 
              key={index} 
              src={src} 
              alt={`FedVision Lab Hardware ${index}`} 
              className="gallery-img"
              loading="lazy"
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Gallery;