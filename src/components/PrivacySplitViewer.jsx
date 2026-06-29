import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, ShieldAlert, ShieldCheck, Lock, Wifi, Server, Cpu } from 'lucide-react';

const PrivacySplitViewer = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0-100

  return (
    <section id="privacy-comparison" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle" style={{ textTransform: 'uppercase', letterSpacing: '1.5px', color: '#06b6d4', fontWeight: 600 }}>
            Architectural Audit
          </span>
          <h2 className="section-title">Side-by-Side Privacy Split-Viewer</h2>
          <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '12px auto 0', fontSize: '15px' }}>
            Compare vulnerable traditional cloud CCTV video streaming against FedVision's privacy-preserving 5G edge architecture.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div 
          style={{ 
            position: 'relative', 
            borderRadius: '20px', 
            overflow: 'hidden', 
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            background: '#090e1a',
            minHeight: '480px'
          }}
        >
          {/* Top Control Header */}
          <div style={{ padding: '16px 24px', background: 'rgba(15, 23, 42, 0.9)', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500 }}>Compare View Mode:</span>
              <span style={{ fontSize: '12px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', padding: '4px 10px', borderRadius: '6px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <ShieldAlert size={14} /> Traditional Cloud
              </span>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>vs</span>
              <span style={{ fontSize: '12px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '4px 10px', borderRadius: '6px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <ShieldCheck size={14} /> FedVision 5G Edge
              </span>
            </div>
            
            {/* Slider Position Range */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '240px' }}>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Slide Split:</span>
              <input 
                type="range" 
                min="10" 
                max="90" 
                value={sliderPos} 
                onChange={(e) => setSliderPos(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#3b82f6', cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Grid Layout containing Both Panels side-by-side */}
          <div style={{ display: 'grid', gridTemplateColumns: `${sliderPos}% ${100 - sliderPos}%`, minHeight: '420px', transition: 'grid-template-columns 0.05s linear' }}>
            
            {/* LEFT PANEL: TRADITIONAL CLOUD CCTV (RED VIBE) */}
            <div style={{ background: 'linear-gradient(135deg, rgba(30, 10, 15, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)', padding: '28px', borderRight: '2px solid #ef4444', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#f87171' }}>
                <AlertTriangle size={24} />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#fca5a5' }}>Traditional Cloud CCTV</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#ef4444', fontSize: '16px' }}>⚠️</span>
                  <div>
                    <strong style={{ color: '#fca5a5', fontSize: '13px', display: 'block' }}>Continuous Raw Video Streaming</strong>
                    <span style={{ color: '#cbd5e1', fontSize: '12px', lineHeight: '1.4' }}>Streams unencrypted 4K video feeds 24/7 over public networks to central servers.</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#ef4444', fontSize: '16px' }}>⚠️</span>
                  <div>
                    <strong style={{ color: '#fca5a5', fontSize: '13px', display: 'block' }}>High Risk of Hacking & Data Leaks</strong>
                    <span style={{ color: '#cbd5e1', fontSize: '12px', lineHeight: '1.4' }}>Centralized video databases are prime targets for cyberattacks and unauthorized interception.</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#ef4444', fontSize: '16px' }}>⚠️</span>
                  <div>
                    <strong style={{ color: '#fca5a5', fontSize: '13px', display: 'block' }}>Massive Cloud OPEX & Bandwidth Bottlenecks</strong>
                    <span style={{ color: '#cbd5e1', fontSize: '12px', lineHeight: '1.4' }}>Paying hundreds of thousands for cloud storage & bandwidth to process redundant video frames.</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px dashed #ef4444', padding: '10px 14px', borderRadius: '8px', color: '#f87171', fontSize: '12px', fontWeight: 600, marginTop: '8px', textAlign: 'center' }}>
                  ❌ NON-COMPLIANT with DPDP Act & GDPR Privacy Mandates
                </div>
              </div>
            </div>

            {/* RIGHT PANEL: FEDVISION 5G EDGE (GREEN VIBE) */}
            <div style={{ background: 'linear-gradient(135deg, rgba(6, 30, 22, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)', padding: '28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: '#34d399' }}>
                <ShieldCheck size={24} />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#6ee7b7' }}>FedVision 5G Edge</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#6ee7b7', fontSize: '13px', display: 'block' }}>Raw Video Locked inside Edge Device</strong>
                    <span style={{ color: '#cbd5e1', fontSize: '12px', lineHeight: '1.4' }}>Video frames are processed in VRAM and immediately discarded. Zero raw video transfer.</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#6ee7b7', fontSize: '13px', display: 'block' }}>Encrypted Mathematical Model Weights (ΔW)</strong>
                    <span style={{ color: '#cbd5e1', fontSize: '12px', lineHeight: '1.4' }}>Only anonymous model gradient updates (~10MB) are transmitted over ultra-secure 5G slices.</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: '#6ee7b7', fontSize: '13px', display: 'block' }}>99.96% Bandwidth Reduction & Zero Downtime</strong>
                    <span style={{ color: '#cbd5e1', fontSize: '12px', lineHeight: '1.4' }}>Eliminates network congestion while hot-swapping updated global models in &lt;50ms.</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', padding: '10px 14px', borderRadius: '8px', color: '#34d399', fontSize: '12px', fontWeight: 600, marginTop: '8px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <Lock size={14} /> 100% PRIVACY GUARANTEED (DPDP & GDPR Compliant)
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySplitViewer;
