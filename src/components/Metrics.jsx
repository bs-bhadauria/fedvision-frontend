import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cpu, ShieldCheck, Zap, BarChart3, HardDrive, ArrowUpRight, Play, Pause, RotateCcw } from 'lucide-react';

const benchmarkRoundsData = [
  { round: 0, label: 'Round 0 (Initial)', mAP: 99.71, precision: 91.24, recall: 99.13, time: 1.05, status: 'Initial Baseline' },
  { round: 1, label: 'Round 1', mAP: 99.70, precision: 93.83, recall: 98.70, time: 3.38, status: 'Weight Aggregated' },
  { round: 2, label: 'Round 2', mAP: 99.45, precision: 95.80, recall: 98.70, time: 8.28, status: 'Fine-tuned' },
  { round: 3, label: 'Round 3', mAP: 99.45, precision: 96.20, recall: 98.70, time: 13.03, status: 'Converging' },
  { round: 4, label: 'Round 4', mAP: 99.45, precision: 97.01, recall: 98.27, time: 17.86, status: 'Precision Boost' },
  { round: 5, label: 'Round 5', mAP: 99.46, precision: 97.42, recall: 98.27, time: 22.56, status: 'Mid-Point Evaluation' },
  { round: 6, label: 'Round 6', mAP: 99.45, precision: 98.68, recall: 97.40, time: 27.82, status: 'High Precision' },
  { round: 7, label: 'Round 7', mAP: 99.45, precision: 99.12, recall: 97.40, time: 32.68, status: 'Optimal Balance' },
  { round: 8, label: 'Round 8', mAP: 98.93, precision: 99.55, recall: 96.10, time: 37.73, status: 'Stabilized' },
  { round: 9, label: 'Round 9', mAP: 98.93, precision: 100.00, recall: 94.37, time: 42.79, status: '100% Precision Hit' },
  { round: 10, label: 'Round 10 (Final)', mAP: 99.27, precision: 100.00, recall: 93.94, time: 47.47, status: 'Peak Convergence' }
];

const hardwareTelemetry = [
  { metric: 'Bandwidth Saved', value: '99.96%', desc: '10MB weights vs continuous 4K video stream', icon: Zap, color: '#10b981' },
  { metric: 'Compilation Speed', value: '410s / epoch', desc: '48% faster via CUDA Graph caching & VRAM pooling', icon: Cpu, color: '#3b82f6' },
  { metric: 'Hot-Swap Latency', value: '<50 ms', desc: 'Zero downtime model replacement on live edge cameras', icon: Activity, color: '#8b5cf6' },
  { metric: 'Privacy Compliance', value: '100%', desc: 'DPDP & GDPR compliant (Zero raw video transfer)', icon: ShieldCheck, color: '#ec4899' }
];

const Metrics = () => {
  const [activeTab, setActiveTab] = useState('convergence'); // 'convergence' | 'telemetry'
  const [selectedRoundIdx, setSelectedRoundIdx] = useState(0); // Start at Round 0 for simulation
  const [isPlaying, setIsPlaying] = useState(true); // Auto simulation toggle

  // Auto-loop interval simulation
  useEffect(() => {
    let timer;
    if (isPlaying && activeTab === 'convergence') {
      timer = setInterval(() => {
        setSelectedRoundIdx((prevIdx) => (prevIdx + 1) % benchmarkRoundsData.length);
      }, 1600); // Step every 1.6s
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeTab]);

  const handleManualRoundSelect = (idx) => {
    setSelectedRoundIdx(idx);
    setIsPlaying(false); // Pause auto-simulation on manual inspection
  };

  const selectedData = benchmarkRoundsData[selectedRoundIdx];

  // SVG Chart Dimensions
  const chartWidth = 500;
  const chartHeight = 160;
  const padding = 25;

  // Calculate SVG points for Precision up to the CURRENT SELECTED ROUND (Progressive Live Graphing)
  const progressiveDataPoints = benchmarkRoundsData.slice(0, selectedRoundIdx + 1);
  const precisionPoints = progressiveDataPoints.map((d, index) => {
    const x = padding + (d.round / (benchmarkRoundsData.length - 1)) * (chartWidth - 2 * padding);
    // scale precision from 90% to 100%
    const y = chartHeight - padding - ((d.precision - 90) / 10) * (chartHeight - 2 * padding);
    return `${x},${y}`;
  }).join(' ');

  return (
    <section id="metrics" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle" style={{ textTransform: 'uppercase', letterSpacing: '1.5px', color: '#3b82f6', fontWeight: 600 }}>
            Empirical Validation
          </span>
          <h2 className="section-title">Real Benchmark Data Explorer</h2>
          <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '12px auto 0', fontSize: '15px' }}>
            Watch live simulated convergence or inspect authentic empirical metrics collected from 10 consecutive Federated Learning rounds.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
          <button
            onClick={() => setActiveTab('convergence')}
            className={`btn ${activeTab === 'convergence' ? 'btn-primary' : 'btn-outline'}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '30px', fontSize: '14px', cursor: 'pointer' }}
          >
            <BarChart3 size={16} />
            Model Convergence (10 Rounds)
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`btn ${activeTab === 'telemetry' ? 'btn-primary' : 'btn-outline'}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '30px', fontSize: '14px', cursor: 'pointer' }}
          >
            <HardDrive size={16} />
            Edge Hardware Telemetry
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'convergence' ? (
            <motion.div
              key="convergence-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid-2"
              style={{ gap: '24px' }}
            >
              {/* Left Column: Interactive Round Selector & Table */}
              <div className="card" style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div className="ctitle" style={{ fontSize: '17px', fontWeight: 600, color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    📈 FL Round Selector
                  </div>

                  {/* Play/Pause Control Pill */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      background: isPlaying ? 'rgba(16, 185, 129, 0.15)' : 'rgba(234, 179, 8, 0.15)',
                      color: isPlaying ? '#34d399' : '#facc15',
                      border: isPlaying ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(234, 179, 8, 0.3)',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                    {isPlaying ? 'Live Loop Active' : 'Simulation Paused'}
                  </button>
                </div>

                {/* Round Selector Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {benchmarkRoundsData.map((d, idx) => (
                    <button
                      key={d.round}
                      onClick={() => handleManualRoundSelect(idx)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: 'none',
                        background: selectedRoundIdx === idx ? '#3b82f6' : 'rgba(255, 255, 255, 0.05)',
                        color: selectedRoundIdx === idx ? '#ffffff' : '#94a3b8',
                        fontSize: '12px',
                        fontWeight: selectedRoundIdx === idx ? 600 : 400,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: selectedRoundIdx === idx ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
                      }}
                    >
                      R{d.round}
                    </button>
                  ))}
                </div>

                {/* Selected Round Card Inspection */}
                <motion.div 
                  key={selectedData.round}
                  initial={{ opacity: 0.7, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ background: 'rgba(30, 41, 59, 0.5)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                    <span style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '15px' }}>{selectedData.label} Metrics</span>
                    <span style={{ fontSize: '12px', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '6px' }}>
                      {selectedData.status}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }}>
                    <div style={{ background: 'rgba(15, 23, 42, 0.4)', padding: '10px', borderRadius: '8px' }}>
                      <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '4px' }}>Precision</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: selectedData.precision === 100 ? '#10b981' : '#38bdf8' }}>
                        {selectedData.precision.toFixed(2)}%
                      </div>
                    </div>
                    <div style={{ background: 'rgba(15, 23, 42, 0.4)', padding: '10px', borderRadius: '8px' }}>
                      <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '4px' }}>mAP @ 50</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: '#f43f5e' }}>
                        {selectedData.mAP.toFixed(2)}%
                      </div>
                    </div>
                    <div style={{ background: 'rgba(15, 23, 42, 0.4)', padding: '10px', borderRadius: '8px' }}>
                      <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '4px' }}>Recall</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: '#a855f7' }}>
                        {selectedData.recall.toFixed(2)}%
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '12px', fontSize: '12px', color: '#64748b', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Cumulative Elapsed Time: <b>{selectedData.time} mins</b></span>
                    <span>FL Cycle Sync: <b>Active</b></span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Dynamic Progressive Precision Curve SVG Chart */}
              <div className="card" style={{ background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="ctitle" style={{ fontSize: '17px', fontWeight: 600, color: '#f8fafc', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>📊 Live Precision Scaling Curve</span>
                    {isPlaying && <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 400 }}>● Live Drawing</span>}
                  </div>
                  <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px' }}>
                    Empirical data showing Precision ascending from <b>91.24%</b> in Round 0 to a flawless <b>100.00%</b> by Round 9.
                  </p>
                </div>

                {/* Custom SVG Line Chart with Live Progressive Path */}
                <div style={{ width: '100%', background: 'rgba(15, 23, 42, 0.8)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
                    {/* Grid lines */}
                    <line x1={padding} y1={padding} x2={chartWidth - padding} y2={padding} stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                    <line x1={padding} y1={chartHeight / 2} x2={chartWidth - padding} y2={chartHeight / 2} stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                    <line x1={padding} y1={chartHeight - padding} x2={chartWidth - padding} y2={chartHeight - padding} stroke="rgba(255,255,255,0.1)" />

                    {/* Progressive Precision Line */}
                    {precisionPoints && (
                      <polyline
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        points={precisionPoints}
                        style={{ transition: 'all 0.3s ease-out' }}
                      />
                    )}

                    {/* Dots for all points up to selected round */}
                    {benchmarkRoundsData.map((d, index) => {
                      if (index > selectedRoundIdx) return null; // Only draw points up to active round

                      const x = padding + (index / (benchmarkRoundsData.length - 1)) * (chartWidth - 2 * padding);
                      const y = chartHeight - padding - ((d.precision - 90) / 10) * (chartHeight - 2 * padding);
                      const isSelected = selectedRoundIdx === index;

                      return (
                        <g key={index} onClick={() => handleManualRoundSelect(index)} style={{ cursor: 'pointer' }}>
                          <circle
                            cx={x}
                            cy={y}
                            r={isSelected ? "7" : "4"}
                            fill={isSelected ? "#10b981" : "#3b82f6"}
                            stroke="#0f172a"
                            strokeWidth="2"
                          />
                        </g>
                      );
                    })}
                  </svg>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b', marginTop: '4px', padding: '0 4px' }}>
                    <span>Round 0 (91.2%)</span>
                    <span>Round 5 (97.4%)</span>
                    <span>Round 10 (100.0%)</span>
                  </div>
                </div>

                <div style={{ marginTop: '16px', background: 'rgba(59, 130, 246, 0.08)', borderRadius: '8px', padding: '12px', borderLeft: '3px solid #3b82f6', fontSize: '12.5px', color: '#cbd5e1' }}>
                  💡 <b>Key Finding:</b> As edge clients continuously exchange encrypted weight parameters over rounds, false positive rates drop to zero while maintaining high mAP accuracy.
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="telemetry-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}
            >
              {hardwareTelemetry.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="card"
                    style={{
                      background: 'rgba(15, 23, 42, 0.65)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justify: 'space-between',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{ background: `${item.color}20`, padding: '10px', borderRadius: '12px', color: item.color }}>
                        <IconComp size={22} />
                      </div>
                      <ArrowUpRight size={18} color="#64748b" />
                    </div>

                    <div>
                      <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '4px', fontWeight: 500 }}>{item.metric}</div>
                      <div style={{ fontSize: '26px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px', letterSpacing: '-0.5px' }}>{item.value}</div>
                      <p style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Metrics;