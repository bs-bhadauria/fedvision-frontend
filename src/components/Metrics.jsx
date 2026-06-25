import React from 'react';
import { motion } from 'framer-motion';

const Metrics = () => {
  return (
    <section id="metrics" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Validation</span>
          <h2 className="section-title">Empirical Performance Validation</h2>
        </div>
        <div className="grid-2">
          {/* Table Card */}
          <motion.div 
            className="card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="ctitle">📈 Core Evaluation Results (mAP @ 0.50)</div>
            <p style={{ marginBottom: '12px' }}>Validation metrics measured over 3 rounds on a distributed multi-client edge setup:</p>
            <table>
              <thead>
                <tr>
                  <th>FL Round</th>
                  <th>mAP @ 50 IoU</th>
                  <th>Precision</th>
                  <th>Recall</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Round 0 (Initial)</td><td>94.88%</td><td>85.49%</td><td>94.37%</td></tr>
                <tr><td>Round 1</td><td>95.76%</td><td>84.94%</td><td>93.07%</td></tr>
                <tr><td>Round 2</td><td>95.00%</td><td>93.45%</td><td>92.64%</td></tr>
                <tr style={{ background: 'rgba(16, 185, 129, 0.05)', fontWeight: 700 }}>
                  <td>Round 3 (Final)</td>
                  <td className="good-text">94.75%</td>
                  <td className="good-text">92.67%</td>
                  <td className="good-text">93.07%</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            className="card card-blue" 
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="ctitle">⚡ Edge Optimization Statistics</div>
            <ul style={{ fontSize: '12.5px', lineHeight: '1.6', marginBottom: '8px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}><b>48% Speed Improvement:</b> Local fine-tuning compilation speed improved from 790s to 410s per epoch due to CUDA graph caching and VRAM memory pooling.</li>
              <li style={{ marginBottom: '8px' }}><b>99.96% Bandwidth Reduction:</b> Exchanging lightweight model updates (~10MB/client) instead of streaming continuous HD video streams eliminates network congestion.</li>
              <li><b>&lt;50ms Hot Swapping:</b> Multi-threaded edge runtime allows continuous inference, instantly loading updated server models with zero downtime.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;