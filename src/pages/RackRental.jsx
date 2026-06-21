import React, { useState } from 'react';
import { TiltCard } from '../components/TiltCard';
import { EnquiryModal } from '../components/EnquiryModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './RackRental.module.css';

const PLANS = [
  {
    name: 'Starter',
    price: '₹1,999',
    period: '/month',
    color: '#3b82f6',
    features: ['5 hrs/day access', 'CCNA topology', 'Remote access', 'Basic support', '2 Routers + 2 Switches'],
  },
  {
    name: 'Professional',
    price: '₹3,999',
    period: '/month',
    color: '#d17226',
    popular: true,
    features: ['12 hrs/day access', 'CCNP topology', 'Remote + in-lab', 'Priority support', '4 Routers + 4 Switches + Firewall'],
  },
  {
    name: 'Enterprise',
    price: '₹6,999',
    period: '/month',
    color: '#7c3aed',
    features: ['24/7 unlimited access', 'CCIE full topology', 'Remote + in-lab', 'Dedicated support', 'Full enterprise stack'],
  },
];

const FEATURES = [
  { icon: '🕐', title: '24/7 Access', desc: 'Round-the-clock access to physical racks anytime you need.' },
  { icon: '🌐', title: 'Remote Access', desc: 'Access your rack from anywhere via VPN — no commute required.' },
  { icon: '🔀', title: 'Cisco & Juniper', desc: 'Real enterprise-grade hardware from Cisco, Juniper, Palo Alto.' },
  { icon: '🔄', title: 'Topology Reset', desc: 'Reset your lab topology to factory defaults anytime.' },
  { icon: '📡', title: 'High Bandwidth', desc: 'Low latency, high-speed connections for smooth lab practice.' },
  { icon: '🛡️', title: 'Secure Environment', desc: 'Isolated environments — your configurations are always safe.' },
];

export const RackRental = () => {
  const [modalOpen, setModalOpen] = useState(false);
  useScrollReveal();

  return (
    <div className={styles.page}>
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <div className="page-header">
        <div className="container">
          <h1 className="reveal">🖥️ Rack Rental</h1>
          <p className="reveal reveal-delay-1">Access real enterprise hardware 24/7 — from anywhere in the world</p>
        </div>
      </div>

      {/* Features */}
      <section className={`${styles.featuresSection} section-padding`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal text-center`}>
            <div className="section-badge">Why Rent with Us</div>
            <h2>Real Hardware. Real Experience.</h2>
            <p>Practice on the same equipment used in top enterprise networks worldwide.</p>
          </div>
          <div className={styles.featuresGrid}>
            {FEATURES.map((f, i) => (
              <TiltCard key={f.title} className={`${styles.featureCard} reveal reveal-delay-${(i % 3) + 1}`}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={`${styles.pricingSection} section-padding`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal text-center`}>
            <div className="section-badge">Pricing Plans</div>
            <h2>Choose Your Lab Plan</h2>
            <p>Flexible plans for students, professionals, and enterprises.</p>
          </div>
          <div className={styles.plansGrid}>
            {PLANS.map((plan, i) => (
              <TiltCard
                key={plan.name}
                className={`${styles.planCard} ${plan.popular ? styles.planPopular : ''} reveal reveal-delay-${i + 1}`}
                intensity={plan.popular ? 10 : 7}
              >
                {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.planIcon} style={{ background: `${plan.color}18`, color: plan.color }}>🖥️</div>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>
                  <span style={{ color: plan.color }}>{plan.price}</span>
                  <small>{plan.period}</small>
                </div>
                <ul className={styles.planFeatures}>
                  {plan.features.map(f => (
                    <li key={f}><span style={{ color: plan.color }}>✓</span> {f}</li>
                  ))}
                </ul>
                <button
                  className={`${styles.planBtn} btn-shimmer`}
                  style={{ background: plan.color }}
                  onClick={() => setModalOpen(true)}
                >
                  Get Started →
                </button>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
