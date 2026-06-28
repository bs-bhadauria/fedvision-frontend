import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  CheckCircle2,
  CloudOff,
  Cpu,
  Factory,
  GraduationCap,
  Hospital,
  IndianRupee,
  Landmark,
  Layers3,
  LineChart,
  Lock,
  Radar,
  Sparkles,
  Target,
  Users,
  Zap
} from 'lucide-react';
import PitchDeckScene from './PitchDeckScene';
import './pitchDeck.css';

const chapterLinks = [
  { id: 'pitch-deck-overview', label: 'Overview' },
  { id: 'pitch-deck-problem', label: 'Problem' },
  { id: 'pitch-deck-solution', label: 'Solution' },
  { id: 'pitch-deck-architecture', label: 'Architecture' },
  { id: 'pitch-deck-validation', label: 'Validation' },
  { id: 'pitch-deck-market', label: 'Market' },
  { id: 'pitch-deck-roadmap', label: 'Moat' },
  { id: 'pitch-deck-ask', label: 'Ask' }
];

const heroSignals = [
  { value: '167 MB', label: 'Validated global model' },
  { value: '99.96%', label: 'Raw-video payload avoided' },
  { value: '11', label: 'Verified Python modules in MVP' },
  { value: 'TRL 4-5', label: 'Lab validation stage' }
];

const overviewCards = [
  {
    icon: Sparkles,
    title: 'The hook',
    tone: 'emphasis',
    body:
      'What if every camera in a network could learn from every other camera without sharing a single video frame? FedVision turns that into a deployable product direction.'
  },
  {
    icon: Users,
    title: 'Founder + MVP snapshot',
    body:
      'Solo founder, B.Tech AI and ML student researcher, with a working federated computer vision MVP validated in a multi-client Flower and gRPC setup.'
  }
];

const technologyTags = [
  'PyTorch',
  'Faster R-CNN',
  'Federated Learning',
  '5G URLLC',
  'Edge AI',
  'Flower Framework',
  'OpenCV',
  'gRPC',
  'React Three Fiber',
  'DPDP-aligned design'
];

const problemCards = [
  {
    icon: Radar,
    title: 'Passive monitoring breaks under load',
    metric: '95% focus drop',
    body:
      'Operators watching dozens of feeds lose attention fast, so anomalies are still missed in the moment that action matters.'
  },
  {
    icon: CloudOff,
    title: 'Cloud streaming becomes a bandwidth trap',
    metric: '~200 ms latency',
    body:
      '24x7 HD uplinks create recurring storage and internet costs while still being too slow for real-time interventions.'
  },
  {
    icon: Lock,
    title: 'Privacy regulation turns central storage risky',
    metric: 'DPDP pressure',
    body:
      'Centralizing public surveillance footage increases compliance exposure, audit pressure, and institutional hesitation.'
  },
  {
    icon: IndianRupee,
    title: 'Replacing installed CCTV is financially painful',
    metric: 'CapEx heavy',
    body:
      'Most campuses, factories, and hospitals cannot justify ripping out working camera estates just to layer intelligence.'
  }
];

const solutionSteps = [
  {
    icon: Cpu,
    title: 'Edge inference at each site',
    body:
      'A retrofit gateway runs Faster R-CNN close to the camera, detects events locally, and keeps footage inside the premises.'
  },
  {
    icon: BrainCircuit,
    title: 'Selective local learning loop',
    body:
      'Only uncertain frames are retained for active learning, which cuts storage overhead and keeps annotation effort targeted.'
  },
  {
    icon: Layers3,
    title: 'Federated aggregation over 5G',
    body:
      'The network exchanges model weights instead of video, aggregates them centrally, and pushes a better global model back out.'
  }
];

const proofSignals = [
  {
    title: 'Working automated pipeline',
    body:
      'Frame capture, annotation, training, and aggregation already operate as one connected loop in the MVP.'
  },
  {
    title: 'Validated federated rounds',
    body:
      'The current setup has already produced an aggregated global model and measured convergence behavior.'
  },
  {
    title: '5G lab access',
    body:
      'University lab support creates a credible path from localhost simulation to physical multi-camera pilot.'
  }
];

const architectureSteps = [
  {
    icon: Cpu,
    title: 'At each gateway',
    body:
      'A retrofit edge box ingests the CCTV stream, runs Faster R-CNN locally, and keeps the raw frames inside the campus or facility network.'
  },
  {
    icon: Lock,
    title: 'Privacy boundary',
    body:
      'The pipeline sends no raw video to the cloud. Only compact mathematical weight updates move over the 5G link.'
  },
  {
    icon: Layers3,
    title: 'Federated aggregation',
    body:
      'A central Flower FedAvg server receives client updates, averages them, and maintains the evolving global super-model.'
  },
  {
    icon: Zap,
    title: 'Continuous broadcast',
    body:
      'The improved aggregated model is pushed back to all gateways, so the full network gets smarter without a central video pool.'
  }
];

const convergenceBars = [
  { round: 'R0', score: '94.8%', height: '74%' },
  { round: 'R1', score: '95.7%', height: '84%' },
  { round: 'R2', score: '95.0%', height: '89%' },
  { round: 'R3', score: '94.75%', height: '93%', active: true }
];

const sectorCards = [
  {
    icon: GraduationCap,
    title: 'Universities',
    body: 'Large campuses with distributed gates, hostels, labs, and limited monitoring staff.'
  },
  {
    icon: Landmark,
    title: 'Smart cities',
    body: 'Public deployments where privacy, uptime, and cost control all matter at the same time.'
  },
  {
    icon: Hospital,
    title: 'Hospitals',
    body: 'High-sensitivity environments that need response speed without cloud-heavy data handling.'
  },
  {
    icon: Factory,
    title: 'Industrial sites',
    body: 'Operational safety, perimeter monitoring, and offline resilience make edge-first AI compelling.'
  }
];

const revenueRows = [
  ['Edge hardware kit', 'One-time CapEx', 'Rs 50K to 1L / zone'],
  ['Site software license', 'Per-site license', 'Rs 5L to 10L'],
  ['AMC and support', 'Recurring annual revenue', 'Rs 1.5L to 2L / year']
];

const costRows = [
  ['Cloud GPU training', 'Rs 2L to 5L / month', 'Rs 0'],
  ['Cloud video storage', 'Rs 50K to 1L / month', 'Rs 0'],
  ['Dedicated bandwidth', 'Rs 50K / month', 'Standard 5G SIM plan'],
  ['5-year total cost', 'Rs 1.8Cr to 3.6Cr', 'Rs 12L to 18L']
];

const moatPoints = [
  'A rare combination of federated learning, production CV, and 5G-aware deployment in one prototype.',
  'Continuous learning architecture with double-buffered model swapping to avoid inference downtime.',
  'Active-learning based data selection that improves training signal without hoarding footage.',
  'A retrofit-first business case that makes adoption easier than smart-camera replacement.'
];

const roadmapSteps = [
  {
    phase: 'Phase 1',
    status: 'Complete',
    body: 'Core FL pipeline, person detection, and auto-annotation loop.'
  },
  {
    phase: 'Phase 2',
    status: 'In progress',
    body: '5G lab integration, MEC path, and pilot-ready edge deployment.'
  },
  {
    phase: 'Phase 3',
    status: 'Next',
    body: 'Multi-class objects, vehicle tracking, and richer event intelligence.'
  },
  {
    phase: 'Phase 4',
    status: 'Productization',
    body: 'Dashboard UX, zone alerts, VMS integrations, and field hardening.'
  }
];

const askItems = [
  'NVIDIA Jetson Orin class hardware and industrial 5G routers for fieldable edge kits.',
  'Weatherproof enclosure design for outdoor retrofit deployments.',
  'Expansion from localhost simulation to a physical 5-camera campus pilot on the university 5G core.',
  'Secure API and VMS interoperability work for existing control-room workflows.',
  'Patent filing and certification support for core innovations.'
];

const comparisonRows = [
  ['Video privacy', 'Cloud stream', 'Local recording risk', 'Local only'],
  ['Self-learning', 'Static model ops', 'No AI', 'Continuous updates'],
  ['Offline operation', 'No', 'Yes', 'Yes'],
  ['5-year cost', 'Rs 1.8Cr+', 'Rs 5L to 10L', 'Rs 12L to 18L'],
  ['DPDP alignment', 'Weak', 'Risky', 'Strong']
];

const sectionMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
};

const DeckCard = ({ icon: Icon, title, tone = '', eyebrow, children, className = '' }) => {
  return (
    <motion.article
      className={`pitch-card ${tone} ${className}`.trim()}
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{ y: -10, rotateX: -5, rotateY: 4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
    >
      {(Icon || eyebrow) && (
        <div className="pitch-card-topline">
          {Icon ? (
            <div className="pitch-card-icon">
              <Icon size={18} />
            </div>
          ) : null}
          {eyebrow ? <span className="pitch-card-eyebrow">{eyebrow}</span> : null}
        </div>
      )}
      {title ? <h3>{title}</h3> : null}
      <div className="pitch-card-body">{children}</div>
    </motion.article>
  );
};

const PitchDeck = () => {
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <div className="pitch-deck-shell">
      <motion.div className="pitch-progress-bar" style={{ scaleX: progressScale }} />

      <div className="pitch-ambient pitch-ambient-one"></div>
      <div className="pitch-ambient pitch-ambient-two"></div>

      <section id="pitch-deck" className="pitch-hero">
        <div className="container">
          <div className="pitch-hero-grid">
            <motion.div
              className="pitch-hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="pitch-badge-row">
                <span className="pitch-badge">DeepTech Startup Pitch</span>
                <span className="pitch-badge success">Privacy-first edge AI</span>
              </div>

              <h1 className="pitch-hero-title">
                FedVision turns legacy CCTV into a self-learning 5G surveillance network.
              </h1>

              <p className="pitch-hero-subtitle">
                Product architecture is now the hero itself: edge boxes keep footage local, 5G
                carries only model weights, and a Flower FedAvg server broadcasts the upgraded
                model back across the network.
              </p>

              <div className="pitch-hero-points">
                <div>
                  <BadgeCheck size={18} />
                  <span>Zero raw video leaves the site.</span>
                </div>
                <div>
                  <Zap size={18} />
                  <span>5G carries model weights, not surveillance feeds.</span>
                </div>
                <div>
                  <LineChart size={18} />
                  <span>90% lower 5-year ownership cost vs cloud-heavy AI.</span>
                </div>
              </div>

              <div className="pitch-button-row">
                <a href="#pitch-deck-validation" className="pitch-button">
                  Explore validation
                  <ArrowUpRight size={16} />
                </a>
                <a href="#pitch-deck-ask" className="pitch-button secondary">
                  Strategic ask
                </a>
              </div>
            </motion.div>

            <motion.div
              className="pitch-scene-frame"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            >
              <PitchDeckScene variant="hero" />
            </motion.div>
          </div>

          <div className="pitch-stat-strip">
            {heroSignals.map((signal) => (
              <div key={signal.label} className="pitch-stat-card">
                <div className="pitch-stat-value">{signal.value}</div>
                <div className="pitch-stat-label">{signal.label}</div>
              </div>
            ))}
          </div>

          <div className="pitch-chapter-pills">
            {chapterLinks.map((chapter) => (
              <a key={chapter.id} href={`#${chapter.id}`} className="pitch-chapter-pill">
                {chapter.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="pitch-main">
        <div className="container pitch-layout">
          <aside className="pitch-sidebar">
            <div className="pitch-sidebar-card">
              <span className="pitch-sidebar-label">Deck map</span>
              <div className="pitch-sidebar-links">
                {chapterLinks.map((chapter, index) => (
                  <a key={chapter.id} href={`#${chapter.id}`} className="pitch-sidebar-link">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{chapter.label}</strong>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="pitch-content">
            <motion.section id="pitch-deck-overview" className="pitch-section" {...sectionMotion}>
              <div className="pitch-section-header">
                <span className="pitch-section-eyebrow">01. Overview</span>
                <h2>Who built it, what exists today, and why the story matters.</h2>
                <p>
                  The original HTML deck is now transformed into a long-form page that still
                  respects the investor flow: hook, proof, economics, moat, and ask.
                </p>
              </div>

              <div className="pitch-grid two">
                {overviewCards.map((card) => (
                  <DeckCard key={card.title} icon={card.icon} title={card.title} tone={card.tone}>
                    <p>{card.body}</p>
                  </DeckCard>
                ))}
              </div>

              <div className="pitch-grid three compact">
                <DeckCard title="Founder" icon={Target}>
                  <p>Bhoopendra Singh Bhadauria, student innovator and solo founder.</p>
                </DeckCard>
                <DeckCard title="Institution" icon={Building2}>
                  <p>Central University of Haryana, with lab access and academic guidance.</p>
                </DeckCard>
                <DeckCard title="Theme" icon={Sparkles}>
                  <p>Artificial intelligence, edge computing, and 5G-enabled surveillance.</p>
                </DeckCard>
              </div>

              <div className="pitch-tag-cloud">
                {technologyTags.map((tag) => (
                  <span key={tag} className="pitch-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section id="pitch-deck-problem" className="pitch-section" {...sectionMotion}>
              <div className="pitch-section-header">
                <span className="pitch-section-eyebrow">02. Problem</span>
                <h2>The cloud-surveillance model is expensive, delayed, and privacy-fragile.</h2>
                <p>
                  FedVision exists because current CCTV intelligence models fail institutions on
                  three fronts at once: human monitoring fatigue, network economics, and data risk.
                </p>
              </div>

              <div className="pitch-grid four">
                {problemCards.map((card) => (
                  <DeckCard key={card.title} icon={card.icon} title={card.title}>
                    <div className="pitch-metric-chip">{card.metric}</div>
                    <p>{card.body}</p>
                  </DeckCard>
                ))}
              </div>
            </motion.section>

            <motion.section id="pitch-deck-solution" className="pitch-section" {...sectionMotion}>
              <div className="pitch-section-header">
                <span className="pitch-section-eyebrow">03. Solution</span>
                <h2>Edge AI plus federated learning makes surveillance private and compounding.</h2>
                <p>
                  The product thesis is simple: deploy intelligence near the camera, preserve raw
                  footage locally, and share only model knowledge across the network.
                </p>
              </div>

              <div className="pitch-solution-flow">
                {solutionSteps.map((step, index) => (
                  <React.Fragment key={step.title}>
                    <DeckCard icon={step.icon} title={step.title} className="pitch-flow-card">
                      <p>{step.body}</p>
                    </DeckCard>
                    {index < solutionSteps.length - 1 ? <div className="pitch-flow-connector"></div> : null}
                  </React.Fragment>
                ))}
              </div>

              <div className="pitch-grid two">
                <DeckCard title="Why it is different" icon={BrainCircuit} tone="emphasis">
                  <ul className="pitch-list">
                    <li>Continuous learning without central video pooling.</li>
                    <li>Active-learning frame selection to keep training focused.</li>
                    <li>Retrofit economics instead of smart-camera rip-and-replace.</li>
                  </ul>
                </DeckCard>

                <DeckCard title="Core technical innovations" icon={Cpu}>
                  <ul className="pitch-list">
                    <li>Double-buffered hot-swapping so inference keeps running during updates.</li>
                    <li>Persistent global-weight saving for resumable federated sessions.</li>
                    <li>5G-friendly payload model where only weights move over the network.</li>
                  </ul>
                </DeckCard>
              </div>
            </motion.section>

            <motion.section
              id="pitch-deck-architecture"
              className="pitch-section"
              {...sectionMotion}
            >
              <div className="pitch-section-header">
                <span className="pitch-section-eyebrow">04. Architecture</span>
                <h2>The exact federated model flow from the original deck is now animated.</h2>
                <p>
                  This is the missing slide from the static pitch: edge gateways, weight-only sync,
                  central FedAvg aggregation, and broadcast of the updated model to every box.
                </p>
              </div>

              <div className="pitch-architecture-stage">
                <PitchDeckScene variant="section" />
              </div>

              <div className="pitch-grid two compact">
                {architectureSteps.map((step) => (
                  <DeckCard key={step.title} icon={step.icon} title={step.title}>
                    <p>{step.body}</p>
                  </DeckCard>
                ))}
              </div>
            </motion.section>

            <motion.section id="pitch-deck-validation" className="pitch-section" {...sectionMotion}>
              <div className="pitch-section-header">
                <span className="pitch-section-eyebrow">05. Validation</span>
                <h2>There is already enough proof to justify a serious pilot.</h2>
                <p>
                  This is not just a concept deck. The current work has code, measured outputs, and
                  a clear next environment for real-world testing.
                </p>
              </div>

              <div className="pitch-grid three">
                {proofSignals.map((item) => (
                  <DeckCard key={item.title} icon={CheckCircle2} title={item.title}>
                    <p>{item.body}</p>
                  </DeckCard>
                ))}
              </div>

              <div className="pitch-grid two">
                <DeckCard title="Federated convergence snapshot" icon={LineChart} tone="dark">
                  <div className="pitch-chart">
                    {convergenceBars.map((bar) => (
                      <div key={bar.round} className="pitch-bar-column">
                        <div
                          className={`pitch-bar ${bar.active ? 'active' : ''}`}
                          style={{ height: bar.height }}
                        >
                          <span>{bar.score}</span>
                        </div>
                        <strong>{bar.round}</strong>
                      </div>
                    ))}
                  </div>
                </DeckCard>

                <DeckCard title="Validation milestones" icon={BadgeCheck}>
                  <ul className="pitch-list">
                    <li>Working MVP with automated training and aggregation loop.</li>
                    <li>Global model artifact produced and validated in a multi-client setup.</li>
                    <li>University-backed 5G lab path for moving from simulation to deployment.</li>
                  </ul>
                </DeckCard>
              </div>
            </motion.section>

            <motion.section id="pitch-deck-market" className="pitch-section" {...sectionMotion}>
              <div className="pitch-section-header">
                <span className="pitch-section-eyebrow">06. Market + Economics</span>
                <h2>Retrofit-first positioning makes the value proposition easier to buy.</h2>
                <p>
                  The strongest commercial angle is not just better AI. It is private intelligence
                  on top of camera estates institutions already own.
                </p>
              </div>

              <div className="pitch-grid four">
                {sectorCards.map((sector) => (
                  <DeckCard key={sector.title} icon={sector.icon} title={sector.title}>
                    <p>{sector.body}</p>
                  </DeckCard>
                ))}
              </div>

              <div className="pitch-grid two">
                <DeckCard title="Revenue model" icon={IndianRupee}>
                  <table className="pitch-table">
                    <thead>
                      <tr>
                        <th>Stream</th>
                        <th>Model</th>
                        <th>Pricing</th>
                      </tr>
                    </thead>
                    <tbody>
                      {revenueRows.map((row) => (
                        <tr key={row[0]}>
                          <td>{row[0]}</td>
                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </DeckCard>

                <DeckCard title="5-year cost comparison" icon={LineChart} tone="emphasis">
                  <table className="pitch-table">
                    <thead>
                      <tr>
                        <th>Cost component</th>
                        <th>Cloud AI</th>
                        <th>FedVision</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costRows.map((row) => (
                        <tr key={row[0]}>
                          <td>{row[0]}</td>
                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </DeckCard>
              </div>

              <div className="pitch-grid three compact">
                <DeckCard title="Cloud-heavy AI" icon={CloudOff}>
                  <div className="pitch-stat-inline negative">Rs 1.8Cr+</div>
                  <p>Indicative 5-year cost for 100 cameras in a cloud-first model.</p>
                </DeckCard>
                <DeckCard title="FedVision model" icon={IndianRupee} tone="emphasis">
                  <div className="pitch-stat-inline positive">Rs 15L</div>
                  <p>Target operating profile with local inference and federated updates.</p>
                </DeckCard>
                <DeckCard title="Value delta" icon={Target}>
                  <div className="pitch-stat-inline positive">~90% lower</div>
                  <p>Cost reduction becomes a sales wedge, not just a technical win.</p>
                </DeckCard>
              </div>
            </motion.section>

            <motion.section id="pitch-deck-roadmap" className="pitch-section" {...sectionMotion}>
              <div className="pitch-section-header">
                <span className="pitch-section-eyebrow">07. Moat + Roadmap</span>
                <h2>The advantage is technical depth plus a deployment story competitors skip.</h2>
                <p>
                  This is where the converted React experience leans in: a polished investor page
                  that communicates architecture and moat with more clarity than a static deck.
                </p>
              </div>

              <div className="pitch-grid two">
                <DeckCard title="Competitive landscape" icon={Radar}>
                  <table className="pitch-table">
                    <thead>
                      <tr>
                        <th>Feature</th>
                        <th>Cloud AI</th>
                        <th>Legacy CCTV</th>
                        <th>FedVision</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row[0]}>
                          <td>{row[0]}</td>
                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                          <td>{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </DeckCard>

                <DeckCard title="Barrier to entry" icon={Lock} tone="dark">
                  <ul className="pitch-list">
                    {moatPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </DeckCard>
              </div>

              <div className="pitch-roadmap">
                {roadmapSteps.map((step) => (
                  <DeckCard
                    key={step.phase}
                    title={step.phase}
                    eyebrow={step.status}
                    className="pitch-roadmap-card"
                  >
                    <p>{step.body}</p>
                  </DeckCard>
                ))}
              </div>
            </motion.section>

            <motion.section id="pitch-deck-ask" className="pitch-section" {...sectionMotion}>
              <div className="pitch-section-header">
                <span className="pitch-section-eyebrow">08. Team + Ask</span>
                <h2>The ask is focused: move from validated MVP into field-ready product.</h2>
                <p>
                  The closing section keeps the original deck intent intact while presenting it in a
                  more premium, website-native format.
                </p>
              </div>

              <div className="pitch-grid two">
                <DeckCard title="Founder" icon={Target} tone="emphasis">
                  <div className="pitch-person-block">
                    <div className="pitch-avatar">BS</div>
                    <div>
                      <strong>Bhoopendra Singh Bhadauria</strong>
                      <p>Solo founder, student researcher, and builder of the end-to-end MVP.</p>
                    </div>
                  </div>
                </DeckCard>

                <DeckCard title="Advisor" icon={Users}>
                  <div className="pitch-person-block">
                    <div className="pitch-avatar neutral">SK</div>
                    <div>
                      <strong>Dr. Sushil Kumar</strong>
                      <p>Academic guide with 5G lab infrastructure support and deployment guidance.</p>
                    </div>
                  </div>
                </DeckCard>
              </div>

              <div className="pitch-grid two">
                <DeckCard title="Strategic ask" icon={Zap}>
                  <ul className="pitch-list">
                    {askItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </DeckCard>

                <DeckCard title="Closing line" icon={Sparkles} tone="dark">
                  <div className="pitch-closing-quote">
                    <p>
                      India is deploying cameras at scale. FedVision argues they can become smarter,
                      more affordable, and less invasive at the same time.
                    </p>
                    <strong>Making surveillance smarter, not scarier.</strong>
                    <a href="#contact" className="pitch-inline-link">
                      Continue to pilot request
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </DeckCard>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;
