import React, { useState } from 'react';

const Calculator = () => {
  // Yeh React State hai jo number of cameras track karegi
  const [cameras, setCameras] = useState(50);

  // --- Calculations (Aapki main.js se converted) ---
  // Traditional Cloud AI Equations (5-Year Total in Lakhs)
  const cloudGpu = cameras * 0.9;
  const cloudStorage = cameras * 0.36;
  const cloudBandwidth = cameras * 0.45;
  const cloudTotal = cloudGpu + cloudStorage + cloudBandwidth;

  // FedVision Equations (5-Year Total in Lakhs)
  const gatewayBoxes = Math.ceil(cameras / 10);
  const edgeHardware = gatewayBoxes * 1.0; 
  const edgeBandwidth = gatewayBoxes * 0.36;
  const softwareAndAmc = 2.2;
  const edgeTotal = edgeHardware + edgeBandwidth + softwareAndAmc;

  // Net Savings
  const savings = cloudTotal - edgeTotal;

  // Slider change handler
  const handleSliderChange = (e) => {
    setCameras(parseInt(e.target.value));
  };

  return (
    <section id="calculator" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">ROI Calculator</span>
          <h2 className="section-title">Compare 5-Year Costs (TCO)</h2>
        </div>
        <div className="grid-2 calculator-layout">
          {/* Inputs Section */}
          <div className="calc-inputs card">
            <div className="ctitle">🔧 Deployment Scale</div>
            <p style={{ marginBottom: '20px' }}>
              Select the number of security cameras to calculate five-year cost comparisons.
            </p>
            
            <div className="range-container">
              <label htmlFor="camera-slider">
                Number of Cameras: <span id="camera-count">{cameras}</span>
              </label>
              <input 
                type="range" 
                id="camera-slider" 
                min="10" 
                max="500" 
                value={cameras} 
                step="10"
                onChange={handleSliderChange}
              />
              <div className="range-markers">
                <span>10</span>
                <span>100</span>
                <span>200</span>
                <span>350</span>
                <span>500</span>
              </div>
            </div>
            
            <div className="savings-highlight">
              <div className="sh-lbl">Five-Year Savings</div>
              <div className="sh-val">₹<span id="savings-val">{savings.toFixed(1)}</span> Lakh</div>
              <p>Compared to traditional centralized cloud AI architectures.</p>
            </div>
          </div>
          
          {/* Results Table Section */}
          <div className="calc-results">
            <div className="card card-dark">
              <div className="ctitle">💰 5-Year Cost Matrix Comparison</div>
              <table>
                <thead>
                  <tr>
                    <th>Cost Component</th>
                    <th>Cloud AI</th>
                    <th>FedVision</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cloud GPU Compute</td>
                    <td className="bad-text">₹<span>{cloudGpu.toFixed(1)}</span>L</td>
                    <td className="good-text">₹0</td>
                  </tr>
                  <tr>
                    <td>Cloud Storage (Video)</td>
                    <td className="bad-text">₹<span>{cloudStorage.toFixed(1)}</span>L</td>
                    <td className="good-text">₹0</td>
                  </tr>
                  <tr>
                    <td>Sustained Bandwidth</td>
                    <td className="bad-text">₹<span>{cloudBandwidth.toFixed(1)}</span>L</td>
                    <td>₹<span>{edgeBandwidth.toFixed(1)}</span>L <span style={{ fontSize: '9px', opacity: 0.7 }}>(5G)</span></td>
                  </tr>
                  <tr>
                    <td>Edge Hardware Kit</td>
                    <td className="good-text">₹0</td>
                    <td>₹<span>{edgeHardware.toFixed(1)}</span>L <span style={{ fontSize: '9px', opacity: 0.7 }}>(One-time)</span></td>
                  </tr>
                  <tr style={{ borderTop: '1.5px solid #2563eb', background: 'rgba(37, 99, 235, 0.1)', fontWeight: 700 }}>
                    <td>Total 5-Year TCO</td>
                    <td className="bad-text" style={{ fontSize: '14px' }}>₹<span>{cloudTotal.toFixed(1)}</span>L</td>
                    <td className="good-text" style={{ fontSize: '14px' }}>₹<span>{edgeTotal.toFixed(1)}</span>L</td>
                  </tr>
                </tbody>
              </table>
              <div className="alert-callout alert-green" style={{ marginTop: '12px', fontSize: '11px' }}>
                <b>Why so cheap?</b> Traditional systems stream raw video continuously. FedVision processes locally on local edge hardware, requiring only periodic SIM data plans for weight exchange[cite: 228].
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;