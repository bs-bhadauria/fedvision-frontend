import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Architecture = () => {
  const [activeTab, setActiveTab] = useState(3); // Defaulting to 3 for you to see the fix immediately
  const [syncState, setSyncState] = useState('uploading');

  // Yeh useEffect Animation Loop ko control karta hai (Uploading <-> Broadcasting)
  useEffect(() => {
    let interval;
    if (activeTab === 3) {
      interval = setInterval(() => {
        setSyncState(prev => prev === 'uploading' ? 'broadcasting' : 'uploading');
      }, 3000); // 3 seconds mein state flip hogi
    }
    return () => clearInterval(interval);
  }, [activeTab]);

  const tabs = [
    { id: 1, title: '1. Ingestion Layer' },
    { id: 2, title: '2. Local Edge Compute', badge: '🧠' },
    { id: 3, title: '3. Global Orchestrator' }
  ];

  return (
    <section id="architecture" className="section section-dark">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">SYSTEM ARCHITECTURE</span>
          <h2 className="section-title">The Three-Tier Operational Flow</h2>
        </div>

        <div className="grid-2 architecture-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px' }}>
          
          {/* Left Side: Tabs */}
          <div className="arch-tabs" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {tabs.map((tab) => (
              <div 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '20px',
                  backgroundColor: activeTab === tab.id ? '#2563eb' : '#0f172a',
                  color: '#fff',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  border: activeTab === tab.id ? '1px solid #3b82f6' : '1px solid #1e293b'
                }}
              >
                {tab.title}
                {tab.badge && activeTab !== tab.id && <span style={{ background: '#fff', borderRadius: '50%', padding: '5px 8px', fontSize: '12px' }}>{tab.badge}</span>}
              </div>
            ))}
          </div>

          {/* Right Side: Dynamic Content */}
          <div className="arch-content" style={{ backgroundColor: '#090e1a', padding: '30px', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <AnimatePresence mode="wait">
              
              {/* TIER 1 CONTENT */}
              {activeTab === 1 && (
                <motion.div 
                  key="tier1"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  <h3 style={{ color: '#3b82f6', marginBottom: '15px' }}>Tier 1: Video Ingestion (Legacy Setup)</h3>
                  <p style={{ color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>FedVision interfaces seamlessly with your existing, standard CCTV setup. Standard IP security cameras transmit raw feeds locally over LAN/Ethernet switches.</p>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '30px' }}>
                    <li>Compatible with any standard RTSP IP camera.</li>
                    <li>Zero internet connectivity required at the camera level.</li>
                    <li>Captures raw 1080p frames at 30 FPS.</li>
                  </ul>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                    <div style={{ background: '#1e293b', padding: '10px 15px', borderRadius: '8px' }}>📷 Camera 01</div>
                    <div style={{ background: '#1e293b', padding: '10px 15px', borderRadius: '8px' }}>📷 Camera N</div>
                    <span style={{ fontSize: '24px' }}>➡️</span>
                    <div style={{ background: '#3b82f6', padding: '10px 15px', borderRadius: '8px', fontWeight: 'bold' }}>🔌 LAN Switch</div>
                  </div>
                </motion.div>
              )}

              {/* TIER 2 CONTENT */}
              {activeTab === 2 && (
                <motion.div 
                  key="tier2"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  <h3 style={{ color: '#3b82f6', marginBottom: '15px' }}>Tier 2: Edge AI Processing (NVIDIA Jetson)</h3>
                  <p style={{ color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>A ruggedized local mini-server or edge node (e.g., NVIDIA Jetson Orin) acts as the brain. It performs local frame capture, inference, and model fine-tuning.</p>
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '30px' }}>
                    <li><strong>Faster R-CNN Model:</strong> Runs local object detection (41M parameter model).</li>
                    <li><strong>Active Learning:</strong> Saves frames inside the "Confusion Zone" (50-75% confidence) to optimize local storage.</li>
                    <li><strong>Data Annihilation:</strong> Automatically permanently deletes processed frames. No video is ever stored.</li>
                  </ul>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', background: '#0f172a', padding: '20px', borderRadius: '8px' }}>
                     <div style={{ color: '#10b981', fontWeight: 'bold' }}>🧠 FedVision Edge Node</div>
                     <div style={{ display: 'flex', gap: '15px', fontSize: '14px' }}>
                       <span style={{ background: '#ef4444', padding: '5px 10px', borderRadius: '4px' }}>Person: 94%</span>
                       <span style={{ background: '#3b82f6', padding: '5px 10px', borderRadius: '4px' }}>Car: 88%</span>
                     </div>
                  </div>
                </motion.div>
              )}

              {/* TIER 3 CONTENT (NOW WITH FULL BI-DIRECTIONAL ANIMATION) */}
              {activeTab === 3 && (
                <motion.div 
                  key="tier3"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                >
                  <h3 style={{ color: '#3b82f6', marginBottom: '15px' }}>Tier 3: Global Federated Orchestration</h3>
                  <p style={{ color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>A secure central server runs the Flower Federated Learning framework to compile weights from distributed edge boxes without seeing local feeds.</p>
                  
                  {/* Visual Animation Box */}
                  <div style={{ background: '#0B0F19', padding: '30px 20px', borderRadius: '12px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
                    
                    {/* Cloud Server / Coordinator */}
                    <div style={{
                       padding: '12px 20px',
                       border: `1px solid ${syncState === 'broadcasting' ? '#10b981' : '#f59e0b'}`,
                       boxShadow: syncState === 'broadcasting' ? '0 0 20px rgba(16, 185, 129, 0.15)' : 'none',
                       borderRadius: '8px',
                       display: 'flex', alignItems: 'center', gap: '15px',
                       transition: 'all 0.5s ease',
                       background: '#0f172a',
                       zIndex: 2
                    }}>
                       <span style={{ fontWeight: 'bold', color: '#fff' }}>👑 Flower FL Coordinator</span>
                       <span style={{ 
                         fontSize: '12px', padding: '4px 10px', borderRadius: '20px', 
                         background: 'rgba(255,255,255,0.05)', 
                         color: syncState === 'broadcasting' ? '#10b981' : '#94a3b8',
                         transition: 'color 0.3s ease'
                       }}>
                          {syncState === 'uploading' ? 'Uploading weights (gRPC)...' : 'Broadcasting global model...'}
                       </span>
                    </div>

                    {/* Connectors and Animated Dots */}
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', height: '80px', marginTop: '-5px', zIndex: 1 }}>
                       {/* Static SVG Lines */}
                       <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                          <line x1="50%" y1="0" x2="30%" y2="100%" stroke="#1e293b" strokeWidth="2" />
                          <line x1="50%" y1="0" x2="70%" y2="100%" stroke="#1e293b" strokeWidth="2" />
                       </svg>

                       {/* Dot 1 (Left Edge Box) */}
                       <motion.div
                          animate={{
                             top: syncState === 'uploading' ? ['100%', '0%'] : ['0%', '100%'],
                             left: syncState === 'uploading' ? ['30%', '50%'] : ['50%', '30%'],
                             backgroundColor: syncState === 'uploading' ? '#3b82f6' : '#10b981',
                             boxShadow: syncState === 'uploading' ? '0 0 10px #3b82f6' : '0 0 10px #10b981'
                          }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          style={{ position: 'absolute', width: '8px', height: '8px', borderRadius: '50%', transform: 'translate(-50%, -50%)' }}
                       />

                       {/* Dot 2 (Right Edge Box) */}
                       <motion.div
                          animate={{
                             top: syncState === 'uploading' ? ['100%', '0%'] : ['0%', '100%'],
                             left: syncState === 'uploading' ? ['70%', '50%'] : ['50%', '70%'],
                             backgroundColor: syncState === 'uploading' ? '#3b82f6' : '#10b981',
                             boxShadow: syncState === 'uploading' ? '0 0 10px #3b82f6' : '0 0 10px #10b981'
                          }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          style={{ position: 'absolute', width: '8px', height: '8px', borderRadius: '50%', transform: 'translate(-50%, -50%)' }}
                       />
                    </div>

                    {/* Edge Boxes */}
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', padding: '0 20px', zIndex: 2 }}>
                       <div style={{ padding: '10px 20px', background: '#0f172a', borderRadius: '8px', border: '1px solid #1e293b', color: '#cbd5e1', fontSize: '14px' }}>🧠 Edge Box 01</div>
                       <div style={{ padding: '10px 20px', background: '#0f172a', borderRadius: '8px', border: '1px solid #1e293b', color: '#cbd5e1', fontSize: '14px' }}>🧠 Edge Box N</div>
                    </div>

                  </div>
                  
                  <ul style={{ color: '#cbd5e1', lineHeight: '1.8', paddingLeft: '20px', marginTop: '20px', fontSize: '14px' }}>
                    <li><strong>gRPC Communication:</strong> Transmits compressed weight updates (~10MB) via secure channels.</li>
                    <li><strong>Hot Swapping:</strong> Pushes updated super-model back to gateways, updating the detection model in {'<'}50ms with zero downtime.</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;