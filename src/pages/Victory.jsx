import React from 'react';
import { TiltCard } from '../components/TiltCard';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Victory.module.css';

const STATS = [
  { target: 10000, suffix: '+', label: 'Certificates Issued', icon: '📜', color: '#3b82f6' },
  { target: 99, suffix: '%', label: 'Course Completion', icon: '✅', color: '#22c55e' },
  { target: 95, suffix: '%', label: 'CCIE Pass Ratio', icon: '🏆', color: '#f59e0b' },
  { target: 100, suffix: '%', label: 'Job Placement', icon: '💼', color: '#d17226' },
];

const STORIES = [
  { name: 'Rahul Verma', from: 'Fresher → Senior NE', company: 'TCS', review: 'CNC transformed my career completely. The real rack access and expert trainers made all the difference. Got placed in TCS within 2 months of completing CCNP.' },
  { name: 'Priya Sharma', from: 'Helpdesk → Security Analyst', company: 'Infosys', review: "The Palo Alto training was phenomenal. Live firewall configurations on real hardware gave me the confidence to ace the interview and land my dream role." },
  { name: 'Amit Patel', from: 'Network Admin → CCIE', company: 'Accenture', review: "Best CCIE coaching in India. Neeraj sir's teaching style is unmatched. I cleared on my first attempt!" },
  { name: 'Neha Gupta', from: 'Fresher → DevOps Eng', company: 'HCL', review: "DevNet automation course changed everything. Python + network automation skills helped me land a package I never imagined as a fresher." },
  { name: 'Sanjay Singh', from: 'L1 Support → Firewall Admin', company: 'Capgemini', review: "FortiGate training with real appliances was incredible. Now managing enterprise firewalls at Capgemini with full confidence." },
  { name: 'Anjali Mishra', from: 'Student → Full-Stack Dev', company: 'Flipkart', review: "The JavaScript Full Stack course was project-based and very practical. Got placed in Flipkart as a web developer after just 4 months!" },
];

const COMPANIES = ['TCS', 'Infosys', 'Wipro', 'Accenture', 'HCL', 'Cognizant', 'Tech Mahindra', 'IBM', 'Capgemini', 'Flipkart'];

const PLACEMENTS = [
  { icon: '🏢', title: 'Corporate Placements', value: '200+', desc: 'Companies actively hiring our graduates' },
  { icon: '💰', title: 'Average Package', value: '₹8-15 LPA', desc: 'Depending on certification and experience' },
  { icon: '🚀', title: 'Career Growth', value: '80%', desc: 'Students promoted within 2 years' },
  { icon: '🌍', title: 'Global Reach', value: '15+', desc: 'Countries where our alumni work' },
];

export const Victory = () => {
  useScrollReveal();

  return (
    <div className={styles.page}>
      <div className="page-header">
        <div className="container">
          <h1 className="reveal">🏆 Our Victory</h1>
          <p className="reveal reveal-delay-1">Celebrating the success stories of 10,000+ students who transformed their careers</p>
        </div>
      </div>

      {/* Stats */}
      <section className={`${styles.statsSection} section-padding`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal text-center`}>
            <div className="section-badge">By the Numbers</div>
            <h2>Our Achievements</h2>
          </div>
          <div className={styles.statsGrid}>
            {STATS.map((s, i) => (
              <TiltCard key={s.label} className={`${styles.statCard} reveal reveal-delay-${i + 1}`}>
                <div className={styles.statIcon} style={{ background: `${s.color}15`, color: s.color }}>{s.icon}</div>
                <h3 className={styles.statNum} style={{ color: s.color }}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </h3>
                <p className={styles.statLabel}>{s.label}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className={`${styles.storiesSection} section-padding`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal text-center`}>
            <div className="section-badge">Student Stories</div>
            <h2>Transformations That Inspire</h2>
            <p>Real journeys from our successful students</p>
          </div>
          <div className={styles.storiesGrid}>
            {STORIES.map((s, i) => (
              <TiltCard key={s.name} className={`${styles.storyCard} reveal reveal-delay-${(i % 3) + 1}`} intensity={7}>
                <div className={styles.storyQuote}>"</div>
                <div className={styles.storyStars}>{'★'.repeat(5)}</div>
                <p className={styles.storyReview}>"{s.review}"</p>
                <div className={styles.storyAuthor}>
                  <div className={styles.storyAvatar}>
                    {s.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <strong>{s.name}</strong>
                    <span className={styles.storyJourney}>{s.from}</span>
                    <span className={styles.storyCompany}>@ {s.company}</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className={`${styles.placementsSection} section-padding`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal text-center`}>
            <div className="section-badge">Placement Achievements</div>
            <h2>Placement at a Glance</h2>
          </div>
          <div className={styles.placementsGrid}>
            {PLACEMENTS.map((p, i) => (
              <TiltCard key={p.title} className={`${styles.placementCard} reveal reveal-delay-${i + 1}`}>
                <div className={styles.placementIcon}>{p.icon}</div>
                <div className={styles.placementValue}>{p.value}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Companies marquee */}
      <section className={styles.marqueeSection}>
        <div className={`${styles.marqueeLabel} reveal text-center`}>
          <p>Our graduates work at India's top companies</p>
        </div>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeInner}>
            {[...COMPANIES, ...COMPANIES].map((c, i) => (
              <span key={i} className={styles.marqueeItem}>{c}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
