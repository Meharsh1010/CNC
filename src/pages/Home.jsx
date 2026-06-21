import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CoursesContext } from '../context/CoursesContext';
import { TestimonialsContext } from '../context/TestimonialsContext';
import { NetworkCanvas } from '../components/NetworkCanvas';
import { TiltCard } from '../components/TiltCard';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { EnquiryModal } from '../components/EnquiryModal';
import { CourseCard } from '../components/CourseCard';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Home.module.css';

const STATS = [
  { target: 10000, suffix: '+', label: 'Trained Candidates', color: 'blue' },
  { target: 200, suffix: '+', label: 'Corporate Tie-ups', color: 'blue' },
  { target: 98, suffix: '%', label: 'Placement Rate', color: 'orange' },
  { target: 15, suffix: '+', label: 'Years Excellence', color: 'blue' },
];

const FEATURES = [
  { icon: '🖥️', title: 'Real Racks', desc: '24/7 access to physical Cisco & Juniper enterprise devices.' },
  { icon: '💼', title: 'Job Guarantee', desc: 'Dedicated placement support in top IT MNCs.' },
  { icon: '🎓', title: 'Expert Trainers', desc: 'Industry-certified instructors with real-world experience.' },
  { icon: '🌐', title: 'Live Labs', desc: 'Hands-on network scenarios you will actually face on the job.' },
];

const COMPANIES = ['TCS', 'Infosys', 'Wipro', 'Accenture', 'HCL', 'Cognizant', 'Tech Mahindra', 'IBM'];

export const Home = () => {
  const { allCourses, categories } = useContext(CoursesContext);
  const { allTestimonials: testimonials } = useContext(TestimonialsContext);
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  useScrollReveal();

  // Auto-open enquiry modal on every page load / refresh
  useEffect(() => {
    const timer = setTimeout(() => setModalOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const featuredCourses = allCourses.slice(0, 6);

  return (
    <div className={styles.home}>
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ══════ HERO ══════ */}
      <section className={styles.hero}>
        <NetworkCanvas theme={theme} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroInner}>
          <div className={`${styles.heroText} reveal`}>
            <div className="section-badge">
              <span className="ping-dot"><span className="ping-dot-inner" /></span>
              Top IT Training Institute in India
            </div>
            <h1 className={`${styles.heroTitle} glow-text`}>
              Growing Dreams<br />With{' '}
              <span className={`${styles.heroHighlight} gradient-text`}>Core Networking</span>
            </h1>
            <p className={styles.heroDesc}>
              Master Cisco, Security, Cloud, and Web Development. Real-time hands-on
              corporate training with <strong>100% Job Assurance</strong>.
            </p>
            <div className={styles.heroBtns}>
              <button
                className={`${styles.heroBtn1} btn-shimmer`}
                onClick={() => navigate('/courses')}
              >
                Explore Courses 🚀
              </button>
              <button
                className={styles.heroBtn2}
                onClick={() => setModalOpen(true)}
              >
                Free Counseling →
              </button>
            </div>
          </div>

          {/* Floating 3D Cards */}
          <div className={styles.heroCards}>
            <TiltCard className={`${styles.floatCard} ${styles.floatCard1} reveal reveal-delay-1`}>
              <div className={styles.floatCardIcon} style={{ background: 'linear-gradient(135deg,#4b55c6,#60a5fa)' }}>🖥️</div>
              <h3>Real Racks</h3>
              <p>24/7 physical enterprise device access</p>
            </TiltCard>
            <TiltCard className={`${styles.floatCard} ${styles.floatCard2} reveal reveal-delay-2`}>
              <div className={styles.floatCardIcon} style={{ background: 'linear-gradient(135deg,#d17226,#fb923c)' }}>💼</div>
              <h3>Job Guarantee</h3>
              <p>Dedicated placement in top IT MNCs</p>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ══════ STATS ══════ */}
      <section className={styles.stats}>
        <div className={`${styles.statsInner} container`}>
          {STATS.map((s, i) => (
            <TiltCard
              key={s.label}
              className={`${styles.statCard} reveal reveal-delay-${i + 1}`}
            >
              <h3 className={`${styles.statNum} ${s.color === 'orange' ? styles.orange : styles.blue}`}>
                <AnimatedCounter target={s.target} suffix={s.suffix} />
              </h3>
              <p className={styles.statLabel}>{s.label}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ══════ FEATURES ══════ */}
      <section className={`${styles.features} section-padding`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal text-center`}>
            <div className="section-badge">Why Choose Us</div>
            <h2 className="glow-text">The CNC Advantage</h2>
            <p>Learn from certified professionals in real enterprise environments.</p>
          </div>
          <div className={styles.featuresGrid}>
            {FEATURES.map((f, i) => (
              <TiltCard key={f.title} className={`${styles.featureCard} reveal reveal-delay-${i + 1}`}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COURSES ══════ */}
      <section className={`${styles.coursesSection} section-padding`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal text-center`}>
            <div className="section-badge">Training Catalog</div>
            <h2 className="glow-text">Featured Courses</h2>
            <p>Start your learning journey with our top-rated programs</p>
          </div>
          <div className={styles.coursesGrid}>
            {featuredCourses.map((course, i) => (
              <div key={course.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          <div className={`${styles.viewAll} reveal`}>
            <button
              className={`btn-primary btn-shimmer`}
              onClick={() => navigate('/courses')}
            >
              View All Courses →
            </button>
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className={`${styles.testimonials} section-padding`}>
        <div className="container">
          <div className={`${styles.sectionHead} reveal text-center`}>
            <div className="section-badge">Google Reviews</div>
            <h2 className="glow-text">Success Stories</h2>
            <p>Real reviews from our network engineers placed in top companies</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t, i) => (
              <TiltCard
                key={t.id}
                className={`${styles.testimonialCard} reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className={styles.quoteIcon}>"</div>
                <div className={styles.stars}>{'★'.repeat(t.rating)}</div>
                <p className={styles.reviewText}>"{t.review}"</p>
                <div className={styles.reviewer}>
                  <div className={styles.avatar}>
                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.title}</span>
                  </div>
                  <span className={styles.googleIcon}>G</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ COMPANIES MARQUEE ══════ */}
      <section className={styles.marqueeSection}>
        <div className={`${styles.marqueeLabelWrap} reveal`}>
          <p className={styles.marqueeLabel}>Our graduates work at top companies</p>
        </div>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeInner}>
            {[...COMPANIES, ...COMPANIES].map((c, i) => (
              <span key={i} className={styles.marqueeItem}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className={`${styles.cta} section-padding`}>
        <div className="container">
          <TiltCard className={`${styles.ctaBox} reveal`} intensity={5}>
            <div className={styles.ctaContent}>
              <div className="section-badge" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Start Today
              </div>
              <h2 className={styles.ctaTitle}>Ready to Transform Your Career?</h2>
              <p className={styles.ctaDesc}>
                Join 10,000+ successful students who achieved their IT dreams with us.
              </p>
              <div className={styles.ctaBtns}>
                <button
                  className={`${styles.ctaPrimary} btn-shimmer`}
                  onClick={() => navigate('/courses')}
                >
                  Explore Courses 🚀
                </button>
                <button
                  className={styles.ctaSecondary}
                  onClick={() => setModalOpen(true)}
                >
                  Free Counseling →
                </button>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>
    </div>
  );
};
