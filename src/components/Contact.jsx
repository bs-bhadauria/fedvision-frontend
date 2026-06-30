import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '', org: '', email: '', phone: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Direct Web3Forms submission from the client side (Free tier requirement)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "e1081c39-fc20-410e-96f7-5bf652ae790d",
          name: formData.name,
          organization: formData.org,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: "New FedVision Pilot Request (Direct)"
        })
      });

      const json = await response.json();
      
      if (response.success || response.status === 200 || json.success) {
        setStatus('success');
      } else {
        alert(json.message || "Failed to send message.");
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error. Please check your internet connection.");
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section section-dark">
      <div className="container" style={{ maxWidth: '700px' }}>
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Schedule a Private Pilot</h2>
          <p>Deploy a private, 5G-enabled, DPDP-compliant surveillance pilot at your campus, warehouse, or facility.</p>
        </div>
        
        <div className="card contact-card">
          {status === 'success' ? (
            <div className="form-success-msg appear">
              <div className="success-icon">✓</div>
              <h3>Message Sent Securely!</h3>
              <p>Thank you for reaching out. We will get in touch with you shortly to schedule a pilot demonstration.</p>
              <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '20px' }}>
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required placeholder="Bhoopendra Singh" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="org">Organization</label>
                  <input type="text" id="org" required placeholder="University / Company" value={formData.org} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" required placeholder="name@organization.com" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" required placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" required placeholder="Tell us about your CCTV setup and requirement..." value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Verifying & Sending...' : 'Send Secure Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;