import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="logo" style={{ marginBottom: '8px' }}>
            <span className="logo-icon"></span>
            Fed<span>Vision</span>
          </div>
          <p>Privacy-Preserving AI Surveillance Platform for 5G Networks</p>
        </div>
        <div className="footer-right">
          <p><b>Contact:</b> bhoopendrasinghbhadauria5@gmail.com | +91 9294824187</p>
          <p style={{ fontSize: '10px', marginTop: '8px', opacity: 0.6 }}>
            © {new Date().getFullYear()} FedVision. Developed by Bhoopendra Singh Bhadauria under academic guidance of Dr. Sushil Kumar, Central University of Haryana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;