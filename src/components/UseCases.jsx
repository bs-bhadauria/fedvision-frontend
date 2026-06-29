import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Building2, ShieldCheck, ShoppingBag, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

const useCaseData = {
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare & Hospital Surveillance',
    subtitle: 'Continuous ICU & Ward patient monitoring without recording or streaming sensitive video feeds.',
    icon: Stethoscope,
    color: '#ec4899',
    challenge: 'Strict HIPAA and DPDP regulations forbid streaming continuous patient footage to cloud servers due to severe privacy violation risks and data breach vulnerabilities.',
    solution: 'FedVision runs deep-learning anomaly detection locally on camera VRAM. Raw patient feeds are analyzed and purged instantly, sending only anonymous model weight updates over private 5G slices.',
    benefits: [
      '100% HIPAA & DPDP Privacy Compliance',
      'Instant Local Fall & Anomaly Alerts (<100ms)',
      'Zero Patient Video Storage or Cloud Leakage'
    ],
    stats: { primary: '0 MB', primaryLabel: 'Video Transferred', secondary: '100%', secondaryLabel: 'Patient Privacy' }
  },
  smartcity: {
    id: 'smartcity',
    title: 'Smart Cities & Intelligent Traffic',
    subtitle: 'City-wide congestion management and accident detection without tracking individual citizen faces.',
    icon: Building2,
    color: '#3b82f6',
    challenge: 'Monitoring thousands of public intersections generates exabytes of video data, overwhelming cellular networks and triggering public mass-surveillance backlash.',
    solution: 'Distributed cameras compute traffic flow vectors locally. Municipal servers aggregate global traffic prediction models without ever collecting individual license plates or citizen biometric identities.',
    benefits: [
      '99.96% Cellular Bandwidth Reduction',
      'Mass-Surveillance Proof Anonymization',
      'Real-time Multi-Intersection Coordination'
    ],
    stats: { primary: '99.9%', primaryLabel: 'Bandwidth Saved', secondary: '<50ms', secondaryLabel: 'Model Hot-Swap' }
  },
  defense: {
    id: 'defense',
    title: 'Corporate R&D & Defense Facilities',
    subtitle: 'High-security perimeter monitoring with zero risk of corporate espionage or intelligence leaks.',
    icon: ShieldCheck,
    color: '#10b981',
    challenge: 'High-security military installations and tech labs prohibit outside network connections, preventing cloud-based AI models from receiving security updates.',
    solution: 'FedVision allows air-gapped or localized 5G slice model aggregation. Security AI updates across multiple restricted compounds without any raw surveillance feeds crossing facility borders.',
    benefits: [
      'Zero Corporate Espionage Vulnerability',
      'Air-Gapped Local Server Aggregation',
      'Air-tight Perimeter Intrusion Detection'
    ],
    stats: { primary: '100%', primaryLabel: 'Air-Gapped Security', secondary: '0 Leak', secondaryLabel: 'Exfiltration Risk' }
  },
  retail: {
    id: 'retail',
    title: 'Retail Analytics & Commercial Hubs',
    subtitle: 'In-store foot-traffic heatmaps and customer journey insights with complete identity protection.',
    icon: ShoppingBag,
    color: '#8b5cf6',
    challenge: 'Retailers want actionable shopping analytics but face stringent GDPR penalties if customer biometric faces or personal identities are harvested.',
    solution: 'Edge sensors convert visual shoppers into mathematical flow vectors on-device. Store managers receive aggregated heatmaps and dwell times without saving any customer faces.',
    benefits: [
      'GDPR-Compliant Store Analytics',
      'Real-time Shopper Dwell & Flow Heatmaps',
      'Reduced Store Infrastructure Costs'
    ],
    stats: { primary: '10x', primaryLabel: 'Faster Insights', secondary: '100%', secondaryLabel: 'Anonymized Data' }
  }
};

const UseCases = () => {
  const [activeTab, setActiveTab] = useState('healthcare');
  const activeData = useCaseData[activeTab];
  const IconComponent = activeData.icon;

  return (
    <section id="use-cases" className="section" style={{ position: 'relative', background: 'rgba(11, 17, 32, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle" style={{ textTransform: 'uppercase', letterSpacing: '1.5px', color: '#8b5cf6', fontWeight: 600 }}>
            Vertical Solutions
          </span>
          <h2 className="section-title">Industry Vertical Customizer</h2>
          <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '12px auto 0', fontSize: '15px' }}>
            Explore how FedVision’s decentralized 5G edge architecture solves critical privacy and security challenges across key enterprise sectors.
          </p>
        </div>

        {/* Tab Navigation Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
          {Object.values(useCaseData).map((item) => {
            const TabIcon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 22px',
                  borderRadius: '30px',
                  border: isActive ? `1px solid ${item.color}` : '1px solid rgba(255,255,255,0.08)',
                  background: isActive ? `${item.color}20` : 'rgba(15, 23, 42, 0.6)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  fontSize: '14px',
                  fontWeight: isActive ? 600 : 400,
                  cursor: 'pointer',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s ease'
                }}
              >
                <TabIcon size={16} color={isActive ? item.color : '#94a3b8'} />
                {item.title.split('&')[0]}
              </button>
            );
          })}
        </div>

        {/* Dynamic Animated Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -15 }}
            transition={{ duration: 0.35 }}
            className="card"
            style={{
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(16px)',
              border: `1px solid ${activeData.color}40`,
              borderRadius: '20px',
              padding: '36px',
              boxShadow: `0 15px 35px ${activeData.color}15`
            }}
          >
            <div className="grid-2" style={{ gap: '32px', alignItems: 'center' }}>
              
              {/* Left Column: Details & Benefits */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', background: `${activeData.color}15`, color: activeData.color, fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>
                  <IconComponent size={16} />
                  {activeData.title}
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#f8fafc', marginBottom: '12px', lineHeight: '1.3' }}>
                  {activeData.subtitle}
                </h3>

                {/* Challenge Block */}
                <div style={{ background: 'rgba(239, 68, 68, 0.06)', borderLeft: '3px solid #ef4444', padding: '12px 16px', borderRadius: '0 8px 8px 0', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f87171', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                    <AlertCircle size={14} /> The Industry Challenge
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>
                    {activeData.challenge}
                  </p>
                </div>

                {/* Solution Block */}
                <div style={{ background: `${activeData.color}08`, borderLeft: `3px solid ${activeData.color}`, padding: '12px 16px', borderRadius: '0 8px 8px 0', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: activeData.color, fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                    <CheckCircle2 size={14} /> FedVision Edge Solution
                  </div>
                  <p style={{ color: '#cbd5e1', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>
                    {activeData.solution}
                  </p>
                </div>

                {/* Bulleted Benefits List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeData.benefits.map((benefit, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#e2e8f0' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: activeData.color }} />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Stats Callouts & Graphic Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ background: 'rgba(30, 41, 59, 0.6)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                    {activeData.stats.primaryLabel}
                  </div>
                  <div style={{ fontSize: '42px', fontWeight: 800, color: activeData.color, letterSpacing: '-1px', lineHeight: '1' }}>
                    {activeData.stats.primary}
                  </div>
                </div>

                <div style={{ background: 'rgba(30, 41, 59, 0.6)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{activeData.stats.secondaryLabel}</div>
                    <div style={{ fontSize: '24px', fontWeight: 700, color: '#f8fafc', marginTop: '2px' }}>{activeData.stats.secondary}</div>
                  </div>
                  <div style={{ background: `${activeData.color}20`, padding: '12px', borderRadius: '12px', color: activeData.color }}>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCases;
