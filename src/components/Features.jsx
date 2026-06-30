import React from 'react';
import { motion } from 'framer-motion';
// Humne premium Lucide icons import kar liye hain
import { ShieldCheck, Banknote, Radio, BrainCircuit, PlugZap, Power } from 'lucide-react';

const Features = () => {
  // Scroll animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Naye SVG Icons ke saath aapka data
  const featuresData = [
    { 
      icon: <ShieldCheck size={22} color="#06b6d4" />, 
      title: "100% Privacy by Design", 
      desc: "Raw video never leaves your facility. Video frames are processed in-memory at the edge and permanently deleted. Fully compliant with India's DPDP Act 2023." 
    },
    { 
      icon: <Banknote size={22} color="#10b981" />, 
      title: "90% Cost Reduction", 
      desc: "By eliminating massive cloud uploads, continuous video storage, and cloud GPU processing, FedVision cuts 5-year Total Cost of Ownership by 90%." 
    },
    { 
      icon: <Radio size={22} color="#2563eb" />, 
      title: "5G Edge Optimization", 
      desc: "Designed to exploit high-speed, private 5G network slices. Exchanging lightweight weights (~10MB) preserves precious network bandwidth." 
    },
    { 
      icon: <Power size={22} color="#ef4444" />, 
      title: "Wake-on-Motion (Smart Sleep)", 
      desc: "Edge devices enter low-power deep sleep (<50mW) when idle. Detection wakes up instantly in VRAM upon motion trigger, extending battery life by 18x on wireless edge cameras." 
    },
    { 
      icon: <BrainCircuit size={22} color="#f59e0b" />, 
      title: "Continual Lifelong Learning", 
      desc: "Our custom strategy ensures model updates are saved persistently. The system gets smarter daily without requiring manual dataset annotations." 
    },
    { 
      icon: <PlugZap size={22} color="#06b6d4" />, 
      title: "Legacy Retrofitting", 
      desc: "No need to replace expensive analog or standard IP cameras. Our Edge Gateway box plugs directly into your existing NVR switches to upgrade them." 
    }
  ];

  return (
    <section id="features" className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Key Features</span>
          <h2 className="section-title">Why Enterprise Surveillance Needs FedVision</h2>
        </div>
        <motion.div 
          className="grid-3 card-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div key={index} className="v-card" variants={itemVariants}>
              {/* Icon Container */}
              <div className="v-icon">
                {feature.icon}
              </div>
              <h3 className="v-title">{feature.title}</h3>
              <p className="v-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;