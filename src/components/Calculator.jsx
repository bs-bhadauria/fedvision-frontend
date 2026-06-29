import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Zap, ShieldCheck, Clock, DollarSign, Cpu, Wifi, Building } from 'lucide-react';

const facilities = [
  { id: 'airport', name: 'Smart Airport', baseMultiplier: 1.2, desc: 'High-density passenger tracking & perimeter security.' },
  { id: 'hospital', name: 'Hospital / ICU', baseMultiplier: 1.0, desc: 'Strict HIPAA patient privacy & bed-fall monitoring.' },
  { id: 'campus', name: 'University Campus', baseMultiplier: 1.1, desc: 'Wide-area distributed cameras across buildings.' },
  { id: 'smartcity', name: 'Smart City Hub', baseMultiplier: 1.5, desc: 'Multi-intersection traffic flow & anomaly detection.' }
];

const Calculator = () => {
  const [facility, setFacility] = useState('smartcity');
  const [cameras, setCameras] = useState(50);
  const [networkType, setNetworkType] = useState('5g'); // '4g' | '5g'

  const activeFacilityObj = facilities.find(f => f.id === facility) || facilities[0];

  // --- Real-Time Calculated Metrics ---
  // Bandwidth Saved (TB per month): ~0.45 TB per camera/month on continuous HD vs ~0.002 TB for weights
  const bandwidthSavedTB = (cameras * 0.45 * activeFacilityObj.baseMultiplier).toFixed(1);

  // Latency Saved (ms): 5G Slicing provides ~15ms latency vs 4G ~140ms
  const latencyMs = networkType === '5g' ? '< 15 ms' : '~ 120 ms';

  // Traditional Cloud AI Equations (5-Year Total in Lakhs)
  const cloudGpu = cameras * 0.9 * activeFacilityObj.baseMultiplier;
  const cloudStorage = cameras * 0.36;
  const cloudBandwidth = cameras * 0.45 * (networkType === '5g' ? 1.2 : 1.0);
  const cloudTotal = cloudGpu + cloudStorage + cloudBandwidth;

  // FedVision Equations (5-Year Total in Lakhs)
  const gatewayBoxes = Math.ceil(cameras / 10);
  const edgeHardware = gatewayBoxes * 1.0;
  const edgeBandwidth = gatewayBoxes * 0.36;
  const softwareAndAmc = 2.2;
  const edgeTotal = edgeHardware + edgeBandwidth + softwareAndAmc;

  // Savings in Lakhs and approx USD
  const savingsLakhs = cloudTotal - edgeTotal;
  const savingsUSD = Math.round(savingsLakhs * 1200);

  return (
    <section id="calculator" className="section" style={{ position: 'relative', background: '#070c18' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle" style={{ textTransform: 'uppercase', letterSpacing: '1.5px', color: '#10b981', fontWeight: 600 }}>
            Live System Simulator
          </span>
          <h2 className="section-title">Interactive Edge Network Sandbox</h2>
          <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '12px auto 0', fontSize: '15px' }}>
            Simulate your facility scale, network slicing, and real-time operational performance and cost savings.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '28px' }}>
          {/* Left Panel: Sandbox Controls */}
          <div className="card" style={{ background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
              <Sliders size={20} color="#10b981" />
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#f8fafc' }}>Simulation Parameters</h3>
            </div>

            {/* 1. Facility Type Selector */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '8px' }}>
                1. Select Facility Deployment Type:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {facilities.map((fac) => (
                  <button
                    key={fac.id}
                    onClick={() => setFacility(fac.id)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '10px',
                      border: facility === fac.id ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.06)',
                      background: facility === fac.id ? 'rgba(16, 185, 129, 0.15)' : 'rgba(30, 41, 59, 0.5)',
                      color: facility === fac.id ? '#34d399' : '#94a3b8',
                      fontSize: '12px',
                      fontWeight: facility === fac.id ? 600 : 400,
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {fac.name}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: '11px', color: '#64748b', marginTop: '6px', marginBot: 0 }}>{activeFacilityObj.desc}</p>
            </div>

            {/* 2. Camera Slider */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                  2. Number of Edge Cameras:
                </label>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '2px 10px', borderRadius: '8px' }}>
                  {cameras} Cameras
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={cameras}
                onChange={(e) => setCameras(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                <span>5 Nodes</span>
                <span>100 Nodes</span>
                <span>250 Nodes</span>
                <span>500 Nodes</span>
              </div>
            </div>

            {/* 3. Network Slicing Selection */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#cbd5e1', fontWeight: 600, marginBottom: '8px' }}>
                3. Network Infrastructure Mode:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setNetworkType('4g')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '10px',
                    border: networkType === '4g' ? '1px solid #3b82f6' : '1px solid rgba(255,255,255,0.06)',
                    background: networkType === '4g' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(30, 41, 59, 0.5)',
                    color: networkType === '4g' ? '#60a5fa' : '#94a3b8',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  📡 Standard 4G / Public Net
                </button>
                <button
                  onClick={() => setNetworkType('5g')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    borderRadius: '10px',
                    border: networkType === '5g' ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.06)',
                    background: networkType === '5g' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(30, 41, 59, 0.5)',
                    color: networkType === '5g' ? '#34d399' : '#94a3b8',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  ⚡ 5G Network Slice (Ultra Low Latency)
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Live Real-Time Results Counter Grid & Cost Matrix */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* 4 Real-Time Live Output Metric Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              
              <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '14px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                  <Zap size={14} /> Bandwidth Saved
                </div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.5px' }}>
                  {bandwidthSavedTB} <span style={{ fontSize: '14px', fontWeight: 500, color: '#94a3b8' }}>TB/mo</span>
                </div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Vs Continuous HD Streams</span>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '14px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#3b82f6', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                  <ShieldCheck size={14} /> Privacy Compliance
                </div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#34d399', letterSpacing: '-0.5px' }}>
                  100%
                </div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>DPDP & GDPR Verified</span>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '14px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8b5cf6', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                  <Clock size={14} /> Network Latency
                </div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.5px' }}>
                  {latencyMs}
                </div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Edge Sync Interval</span>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(236, 72, 153, 0.2)', borderRadius: '14px', padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ec4899', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                  <DollarSign size={14} /> 5-Yr Cost Saved
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#f43f5e', letterSpacing: '-0.5px' }}>
                  ₹{savingsLakhs.toFixed(1)}L <span style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: 400 }}>(${savingsUSD.toLocaleString()})</span>
                </div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Compared to Cloud AI</span>
              </div>

            </div>

            {/* Cost Matrix Table */}
            <div className="card" style={{ background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#f8fafc', marginBottom: '12px' }}>
                💰 5-Year Financial Breakdown
              </div>
              <table style={{ width: '100%', fontSize: '12.5px' }}>
                <thead>
                  <tr style={{ color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th style={{ textAlign: 'left', paddingBottom: '8px' }}>Cost Component</th>
                    <th style={{ textAlign: 'right', paddingBottom: '8px', color: '#f87171' }}>Cloud AI</th>
                    <th style={{ textAlign: 'right', paddingBottom: '8px', color: '#34d399' }}>FedVision 5G</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cloud GPUs & Storage</td>
                    <td style={{ textAlign: 'right', color: '#f87171' }}>₹{(cloudGpu + cloudStorage).toFixed(1)}L</td>
                    <td style={{ textAlign: 'right', color: '#34d399' }}>₹0</td>
                  </tr>
                  <tr>
                    <td>Sustained Bandwidth</td>
                    <td style={{ textAlign: 'right', color: '#f87171' }}>₹{cloudBandwidth.toFixed(1)}L</td>
                    <td style={{ textAlign: 'right', color: '#cbd5e1' }}>₹{edgeBandwidth.toFixed(1)}L</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid rgba(255,255,255,0.1)', fontWeight: 700 }}>
                    <td style={{ color: '#f8fafc', paddingTop: '8px' }}>Total 5-Yr TCO</td>
                    <td style={{ textAlign: 'right', color: '#f87171', paddingTop: '8px' }}>₹{cloudTotal.toFixed(1)}L</td>
                    <td style={{ textAlign: 'right', color: '#34d399', paddingTop: '8px' }}>₹{edgeTotal.toFixed(1)}L</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;