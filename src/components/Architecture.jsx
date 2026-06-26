import React, { useState, useEffect } from 'react';

const Architecture = () => {
  // Active tab track karne ke liye React State
  const [activeTab, setActiveTab] = useState('input');
  
  // Edge simulation ke states
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [epoch, setEpoch] = useState(1);
  const [simBox, setSimBox] = useState({ person: true, car: false });

  // Cloud simulation state (YEH MISSING THA!)
  const [syncState, setSyncState] = useState('uploading');

  // Simulation Effects
  useEffect(() => {
    let progressTimer, boxTimer, syncTimer;

    // Tier 2 (Edge) logic
    if (activeTab === 'edge') {
      progressTimer = setInterval(() => {
        setTrainingProgress(prev => {
          if (prev >= 100) {
            setEpoch(e => e > 2 ? 1 : e + 1);
            return 0;
          }
          return prev + 2;
        });
      }, 100);

      boxTimer = setInterval(() => {
        const r = Math.random();
        setSimBox({
          person: r < 0.6 || r >= 0.3,
          car: r < 0.6
        });
      }, 2000);
    }

    // Tier 3 (Cloud) logic (YEH LOOP MISSING THA!)
    if (activeTab === 'cloud') {
      syncTimer = setInterval(() => {
        setSyncState(prev => prev === 'uploading' ? 'broadcasting' : 'uploading');
      }, 3000);
    }

    // Cleanup function
    return () => {
      clearInterval(progressTimer);
      clearInterval(boxTimer);
      clearInterval(syncTimer);
    };
  }, [activeTab]);

  return (
    <section id="architecture" className="section section-dark">
      
      {/* PURE CSS ANIMATIONS FOR TIER 3 DOTS (Gives the glow & reverse animation) */}
      <style>
        {`
          @keyframes moveLeftUp { 0% { top: 100%; left: 30%; opacity: 1; } 100% { top: 0%; left: 50%; opacity: 0.2; } }
          @keyframes moveLeftDown { 0% { top: 0%; left: 50%; opacity: 1; } 100% { top: 100%; left: 30%; opacity: 0.2; } }
          @keyframes moveRightUp { 0% { top: 100%; left: 70%; opacity: 1; } 100% { top: 0%; left: 50%; opacity: 0.2; } }
          @keyframes moveRightDown { 0% { top: 0%; left: 50%; opacity: 1; } 100% { top: 100%; left: 70%; opacity: 0.2; } }

          .v-dot { position: absolute; width: 8px; height: 8px; border-radius: 50%; transform: translate(-50%, -50%); }
          
          .dot-left-uploading { animation: moveLeftUp 1.5s infinite linear; background-color: #3b82f6; box-shadow: 0 0 10px #3b82f6; }
          .dot-left-broadcasting { animation: moveLeftDown 1.5s infinite linear; background-color: #10b981; box-shadow: 0 0 10px #10b981; }
          
          .dot-right-uploading { animation: moveRightUp 1.5s infinite linear; background-color: #3b82f6; box-shadow: 0 0 10px #3b82f6; }
          .dot-right-broadcasting { animation: moveRightDown 1.5s infinite linear; background-color: #10b981; box-shadow: 0 0 10px #10b981; }
        `}
      </style>

      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">System Architecture</span>
          <h2 className="section-title">The Three-Tier Operational Flow</h2>
        </div>
        
        {/* Tab Controls */}
        <div className="arch-tabs">
          <button 
            className={`tab-btn ${activeTab === 'input' ? 'active' : ''}`} 
            onClick={() => setActiveTab('input')}
          >
            1. Ingestion Layer
          </button>
          <button 
            className={`tab-btn ${activeTab === 'edge' ? 'active' : ''}`} 
            onClick={() => setActiveTab('edge')}
          >
            2. Local Edge Compute
          </button>
          <button 
            className={`tab-btn ${activeTab === 'cloud' ? 'active' : ''}`} 
            onClick={() => setActiveTab('cloud')}
          >
            3. Global Orchestrator
          </button>
        </div>

        <div className="arch-content-container">
          
          {/* TIER 1: INGESTION */}
          {activeTab === 'input' && (
            <div className="arch-content active" id="tab-input">
              <div className="grid-2">
                <div className="arch-text-col">
                  <h3>Tier 1: Video Ingestion (Legacy Setup)</h3>
                  <p>FedVision interfaces seamlessly with your existing, standard CCTV setup. Standard IP security cameras transmit raw feeds locally over LAN/Ethernet switches.</p>
                  <ul>
                    <li>Compatible with any standard RTSP IP camera.</li>
                    <li>Zero internet connectivity required at the camera level.</li>
                    <li>Captures raw 1080p frames at 30 FPS.</li>
                  </ul>
                </div>
                <div className="arch-visual-col">
                  <div className="network-diagram ingestion-diagram">
                    <div className="devices-row">
                      {[1, 2, 'N'].map((num) => (
                        <div key={num} className="diag-node camera-node">
                          <span className="live-dot"></span>
                          <span className="node-icon">📷</span>
                          <span className="node-name">Camera {num === 'N' ? 'N' : `0${num}`}</span>
                        </div>
                      ))}
                    </div>
                    
                    <svg className="conn-svg" viewBox="0 0 300 80" preserveAspectRatio="none">
                      <path d="M 50,10 L 150,70" fill="none" stroke="#1e293b" strokeWidth="2" />
                      <path d="M 150,10 L 150,70" fill="none" stroke="#1e293b" strokeWidth="2" />
                      <path d="M 250,10 L 150,70" fill="none" stroke="#1e293b" strokeWidth="2" />
                      
                      <circle r="3.5" fill="#06b6d4" filter="drop-shadow(0 0 3px #06b6d4)">
                        <animateMotion dur="2.2s" repeatCount="indefinite" path="M 50,10 L 150,70" />
                      </circle>
                      <circle r="3.5" fill="#06b6d4" filter="drop-shadow(0 0 3px #06b6d4)">
                        <animateMotion dur="2.2s" begin="0.7s" repeatCount="indefinite" path="M 150,10 L 150,70" />
                      </circle>
                      <circle r="3.5" fill="#06b6d4" filter="drop-shadow(0 0 3px #06b6d4)">
                        <animateMotion dur="2.2s" begin="1.4s" repeatCount="indefinite" path="M 250,10 L 150,70" />
                      </circle>
                    </svg>
                    
                    <div className="diag-node switch-node">
                      <span className="node-icon">🔌</span>
                      <span className="node-name">LAN Network Switch</span>
                      <div className="switch-leds">
                        <span className="led"></span><span className="led"></span><span className="led"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* TIER 2: EDGE AI */}
          {activeTab === 'edge' && (
            <div className="arch-content active" id="tab-edge">
              <div className="grid-2">
                <div className="arch-text-col">
                  <h3>Tier 2: Edge AI Processing (NVIDIA Jetson / Gateway)</h3>
                  <p>A ruggedized local mini-server or edge node (e.g., NVIDIA Jetson Orin) acts as the brain. It performs local frame capture, inference, and model fine-tuning.</p>
                  <ul>
                    <li><b>Faster R-CNN Model:</b> Runs local object detection (41M parameter model).</li>
                    <li><b>Active Learning:</b> Saves frames falling inside the "Confusion Zone" (50-75% confidence) to optimize local storage.</li>
                    <li><b>Data Annihilation:</b> Automatically permanently deletes processed frames. No video is ever stored.</li>
                    <li><b>Local Training:</b> Fine-tunes local parameters using local weights.</li>
                  </ul>
                </div>
                <div className="arch-visual-col">
                  <div className="network-diagram edge-diagram">
                    <div className="diag-node switch-node-small">
                      <span className="node-icon">🔌</span> LAN Switch Feed
                    </div>
                    
                    <svg className="conn-svg-vertical" viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M 50,0 L 50,50" fill="none" stroke="#1e293b" strokeWidth="2" />
                      <circle r="4" fill="#06b6d4" filter="drop-shadow(0 0 3px #06b6d4)">
                        <animateMotion dur="1.5s" repeatCount="indefinite" path="M 50,0 L 50,50" />
                      </circle>
                    </svg>
                    
                    <div className="diag-node edge-box-rich">
                      <div className="edge-box-header">
                        <span className="brain-icon">🧠</span>
                        <h4>FedVision Edge Node</h4>
                      </div>
                      
                      <div className="edge-box-body">
                        <div className="sim-feed">
                          <div className="feed-box">
                            {simBox.person && <div className="bounding-box person-box">Person: {Math.floor(90 + Math.random() * 9)}%</div>}
                            {simBox.car && <div className="bounding-box car-box">Car: {Math.floor(85 + Math.random() * 10)}%</div>}
                            <div className="scan-line"></div>
                          </div>
                          <span className="feed-label">Live Inference Stream</span>
                        </div>
                        
                        <div className="sim-telemetry">
                          <div className="telemetry-log">
                            <div className="log-line">[Inference] Scanning...</div>
                            <div className="log-line log-success">[Action] Video Annihilated</div>
                          </div>
                          
                          <div className="training-status">
                            <div className="status-row">
                              <span>Local Training:</span>
                              <span>Epoch {epoch}/3</span>
                            </div>
                            <div className="progress-track">
                              <div className="progress-fill" style={{ width: `${trainingProgress}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* TIER 3: CLOUD (FIXED: State loop and CSS glowing animations added) */}
          {activeTab === 'cloud' && (
            <div className="arch-content active" id="tab-cloud">
              <div className="grid-2">
                <div className="arch-text-col">
                  <h3>Tier 3: Global Federated Orchestration (Cloud Aggregator)</h3>
                  <p>A secure central server runs the Flower Federated Learning framework to compile weights from distributed edge boxes without seeing local feeds.</p>
                  <ul>
                    <li><b>gRPC Communication:</b> Transmits compressed weight updates (~10MB) via secure channels.</li>
                    <li><b>Federated Averaging (FedAvg):</b> Mathematically averages weights from active edge devices.</li>
                    <li><b>Hot Swapping:</b> Pushes updated super-model back to gateways, updating the detection model in &lt;50ms with zero downtime.</li>
                  </ul>
                </div>
                <div className="arch-visual-col">
                  <div className="network-diagram global-diagram" style={{ padding: '30px 20px', borderRadius: '12px', background: '#0B0F19' }}>
                    
                    {/* Flower Coordinator Box with Dynamic Glow */}
                    <div style={{
                        padding: '12px 20px',
                        border: `1px solid ${syncState === 'broadcasting' ? '#10b981' : '#f59e0b'}`,
                        boxShadow: syncState === 'broadcasting' ? '0 0 20px rgba(16, 185, 129, 0.15)' : 'none',
                        borderRadius: '8px',
                        display: 'flex', alignItems: 'center', gap: '15px',
                        transition: 'all 0.5s ease',
                        background: '#0f172a',
                        zIndex: 2,
                        position: 'relative'
                    }}>
                        <span style={{ fontWeight: 'bold', color: '#fff' }}>👑 Flower FL Coordinator</span>
                        <span style={{ 
                          fontSize: '12px', padding: '4px 10px', borderRadius: '20px', 
                          background: 'rgba(255,255,255,0.05)', 
                          color: syncState === 'broadcasting' ? '#10b981' : '#3b82f6',
                          transition: 'color 0.3s ease'
                        }}>
                          {syncState === 'uploading' ? 'Uploading weights (gRPC)...' : 'Broadcasting global model...'}
                        </span>
                    </div>

                    {/* V-Shape Connecting Lines and Animated Dots */}
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', height: '80px', marginTop: '-5px', zIndex: 1 }}>
                        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                          <line x1="50%" y1="0" x2="30%" y2="100%" stroke="#1e293b" strokeWidth="2" />
                          <line x1="50%" y1="0" x2="70%" y2="100%" stroke="#1e293b" strokeWidth="2" />
                        </svg>

                        {/* Pure CSS Dynamic Dots based on syncState */}
                        <div className={`v-dot dot-left-${syncState}`}></div>
                        <div className={`v-dot dot-right-${syncState}`}></div>
                    </div>

                    {/* Edge Boxes */}
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', padding: '0 20px', zIndex: 2, position: 'relative' }}>
                        <div style={{ padding: '10px 20px', background: '#0f172a', borderRadius: '8px', border: '1px solid #1e293b', color: '#cbd5e1', fontSize: '14px' }}>🧠 Edge Box 01</div>
                        <div style={{ padding: '10px 20px', background: '#0f172a', borderRadius: '8px', border: '1px solid #1e293b', color: '#cbd5e1', fontSize: '14px' }}>🧠 Edge Box N</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default Architecture;