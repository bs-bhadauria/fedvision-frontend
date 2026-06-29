import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const Demonstration = () => {
  return (
    <section id="demo" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Live Action</span>
          <h2 className="section-title">See FedVision in Action</h2>
          <p>Watch our lab-validated pilot showing local edge processing and end-to-end federated inferencing.</p>
        </div>
        
        <div className="grid-2">
            {/* Video 1: Working Demonstration */}
            <motion.div 
              className="card" 
              style={{ padding: '0', overflow: 'hidden', backgroundColor: '#090e1a' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ padding: '20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PlayCircle color="#06b6d4" size={24} /> 
                <h3 style={{ fontSize: '18px', margin: 0 }}>Working Demonstration</h3>
              </div>
              <div style={{ width: '100%', backgroundColor: '#000', aspectRatio: '16/9' }}>
                 {/* Native HTML5 Video Player */}
                 <video 
                    src="/videos/working-demo.mp4" 
                    controls 
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                 >
                    Your browser does not support the video tag.
                 </video>
              </div>
            </motion.div>

            {/* Video 2: End-to-End Inferencing */}
            <motion.div 
              className="card" 
              style={{ padding: '0', overflow: 'hidden', backgroundColor: '#090e1a' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={{ padding: '20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PlayCircle color="#3b82f6" size={24} /> 
                <h3 style={{ fontSize: '18px', margin: 0 }}>End-To-End Inferencing</h3>
              </div>
              <div style={{ width: '100%', backgroundColor: '#000', aspectRatio: '16/9' }}>
                 {/* Native HTML5 Video Player */}
                 <video 
                    src="/videos/inferencing-demo.mp4" 
                    controls 
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                 >
                    Your browser does not support the video tag.
                 </video>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Demonstration;