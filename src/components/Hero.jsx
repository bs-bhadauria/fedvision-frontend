import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="hero-section" style={{ backgroundColor: '#0B0F19', position: 'relative' }}>
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-[radial-gradient(circle,rgba(0,242,254,0.1)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="badge-container flex gap-3 mb-5" variants={itemVariants}>
            <span className="hero-badge text-xs font-bold uppercase tracking-wider">
              TRL 4-5 Lab Validated
            </span>
            <span className="hero-badge badge-green text-xs font-bold uppercase tracking-wider">
              DPDP Act 2023 Compliant
            </span>
          </motion.div>

          <motion.h1 className="hero-title text-5xl font-black tracking-tight text-white mb-4" variants={itemVariants}>
            Privacy-First AI Surveillance for <span>5G Smart Camera</span> Networks
          </motion.h1>
          
          <motion.p className="hero-desc text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl" variants={itemVariants}>
            Upgrade legacy CCTV setups into self-learning intelligent networks. FedVision runs computer vision locally at the edge, sharing only mathematical weight updates over 5G to centralize intelligence—never raw video.
          </motion.p>

          <motion.div className="hero-ctas flex gap-4" variants={itemVariants}>
            <a href="#calculator" className="btn btn-primary">
              Calculate Savings
            </a>
            <a href="#architecture" className="btn btn-secondary">
              How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual - Dashboard Mockup Container (Now FULLY included) */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="dashboard-mockup">
            <div className="mockup-header">
                <div className="mockup-dots"><span></span><span></span><span></span></div>
                <div className="mockup-title">FedVision Global Orchestrator</div>
            </div>
            <div className="mockup-body">
                <div className="mockup-grid">
                    <div className="mockup-card highlighted">
                        <div className="m-lbl">Active Edge Nodes</div>
                        <div className="m-val">32</div>
                    </div>
                    <div className="mockup-card">
                        <div className="m-lbl">Bandwidth Saved</div>
                        <div className="m-val" style={{ color: '#10b981' }}>99.96%</div>
                    </div>
                    <div className="mockup-card">
                        <div className="m-lbl">Global mAP</div>
                        <div className="m-val">94.75%</div>
                    </div>
                </div>
                <div className="mockup-chart-container">
                    <div className="chart-header">
                        <span>Federated Convergence (mAP)</span>
                        <span>3 Rounds</span>
                    </div>
                    <div className="chart-bars">
                        <div className="chart-bar-col">
                            <div className="chart-bar" style={{ height: '75%' }}><span>94.8%</span></div>
                            <div className="bar-lbl">R0</div>
                        </div>
                        <div className="chart-bar-col">
                            <div className="chart-bar" style={{ height: '85%' }}><span>95.7%</span></div>
                            <div className="bar-lbl">R1</div>
                        </div>
                        <div className="chart-bar-col">
                            <div className="chart-bar" style={{ height: '92%' }}><span>95.0%</span></div>
                            <div className="bar-lbl">R2</div>
                        </div>
                        <div className="chart-bar-col">
                            <div className="chart-bar active" style={{ height: '95%' }}><span>94.75%</span></div>
                            <div className="bar-lbl" style={{ color: '#2563eb', fontWeight: 700 }}>R3</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;