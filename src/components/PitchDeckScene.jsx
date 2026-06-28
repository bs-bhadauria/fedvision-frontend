import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Cpu, EyeOff, RadioTower, Send, Server } from 'lucide-react';

const edgeBoxes = ['Edge Box 1', 'Edge Box 2', 'Edge Box N'];

const railItems = [
  {
    icon: Camera,
    title: 'Local inference',
    body: 'Legacy CCTV stays on-premise and only the edge box sees the raw stream.'
  },
  {
    icon: Send,
    title: 'Weight sync over 5G',
    body: 'Only model deltas travel upward, keeping the network payload tiny and private.'
  },
  {
    icon: Server,
    title: 'FedAvg broadcast',
    body: 'The server aggregates learning and ships the improved global model back to gateways.'
  }
];

const floatTransition = {
  duration: 3.2,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut'
};

const packetTransition = {
  duration: 2.4,
  repeat: Infinity,
  ease: 'linear'
};

const PitchDeckScene = ({ variant = 'hero' }) => {
  return (
    <div className={`fed-arch fed-arch--${variant}`}>
      <div className="fed-arch__bg fed-arch__bg--one"></div>
      <div className="fed-arch__bg fed-arch__bg--two"></div>
      <div className="fed-arch__grid"></div>

      <div className="fed-arch__headline">
        <span>DECENTRALIZED WEIGHT SYNC OVER 5G</span>
      </div>

      <div className="fed-arch__boxes">
        {edgeBoxes.map((label, index) => (
          <motion.div
            key={label}
            className="fed-arch__edgebox"
            animate={{ y: [0, -8, 0] }}
            transition={{
              ...floatTransition,
              delay: index * 0.22
            }}
          >
            <div className="fed-arch__box-top">
              <Camera size={16} />
              <strong>{label}</strong>
            </div>
            <span className="fed-arch__box-sub">(Local Video)</span>
            <div className="fed-arch__feed">
              <div className="fed-arch__feed-frame">
                <motion.div
                  className="fed-arch__scanline"
                  animate={{ top: ['8%', '84%', '8%'] }}
                  transition={{ duration: 3.1, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="fed-arch__bbox fed-arch__bbox--one"
                  animate={{ opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="fed-arch__bbox fed-arch__bbox--two"
                  animate={{ opacity: [1, 0.45, 1] }}
                  transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <span>Inference and active learning stay local</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="fed-arch__weights-row">
        <div className="fed-arch__weights-col">
          <span>Weights (~10 MB)</span>
          <div className="fed-arch__beam">
            <motion.span
              className="fed-arch__packet"
              animate={{ y: ['0%', '100%'] }}
              transition={packetTransition}
            />
          </div>
        </div>

        <div className="fed-arch__privacy-callout">
          <EyeOff size={18} />
          <strong>NO RAW VIDEO TRANSMITTED</strong>
        </div>

        <div className="fed-arch__weights-col">
          <span>Weights (~10 MB)</span>
          <div className="fed-arch__beam">
            <motion.span
              className="fed-arch__packet"
              animate={{ y: ['0%', '100%'] }}
              transition={{ ...packetTransition, delay: 0.7 }}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="fed-arch__server"
        animate={{
          boxShadow: [
            '0 0 0 rgba(245, 158, 11, 0)',
            '0 0 34px rgba(245, 158, 11, 0.22)',
            '0 0 0 rgba(245, 158, 11, 0)'
          ]
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="fed-arch__box-top">
          <Server size={18} />
          <strong>Central FL Server</strong>
        </div>
        <span className="fed-arch__server-sub">(Flower FedAvg Strategy)</span>
        <div className="fed-arch__server-tags">
          <span>
            <RadioTower size={14} />
            Aggregates model updates
          </span>
          <span>
            <Cpu size={14} />
            Produces global super-model
          </span>
        </div>
      </motion.div>

      <div className="fed-arch__broadcast">
        <div className="fed-arch__beam fed-arch__beam--green">
          <motion.span
            className="fed-arch__packet fed-arch__packet--green"
            animate={{ y: ['100%', '0%'] }}
            transition={packetTransition}
          />
        </div>
        <span>Broadcast aggregated model to all gateways</span>
      </div>

      <div className="fed-arch__rail">
        {railItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              className="fed-arch__rail-card"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'mirror',
                delay: index * 0.26,
                ease: 'easeInOut'
              }}
            >
              <div className="fed-arch__rail-top">
                <Icon size={16} />
                <strong>{item.title}</strong>
              </div>
              <p>{item.body}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PitchDeckScene;
