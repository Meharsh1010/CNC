import React, { useState } from 'react';
import { TiltCard } from '../components/TiltCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './ECertificate.module.css';

const SAMPLE_CERT = {
  name: 'John Doe',
  course: 'CCNA 200-301',
  date: 'June 15, 2024',
  id: 'CNC-2024-CCNA-00142',
  grade: 'Distinction',
};

export const ECertificate = () => {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [cert, setCert] = useState(null);
  useScrollReveal();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    if (query.toLowerCase().includes('john') || query.toLowerCase().includes('cnc')) {
      setCert(SAMPLE_CERT);
    } else {
      setCert(null);
    }
  };

  return (
    <div className={styles.page}>
      <div className="page-header">
        <div className="container">
          <h1 className="reveal">🎓 E-Certificate Verification</h1>
          <p className="reveal reveal-delay-1">Verify and download your digital course completion certificate</p>
        </div>
      </div>

      <div className={`${styles.body} container section-padding`}>
        {/* Search */}
        <TiltCard className={`${styles.searchCard} reveal`} intensity={5}>
          <div className={styles.searchIcon}>🔍</div>
          <h2>Verify Your Certificate</h2>
          <p>Enter your name or certificate ID to look up your certificate</p>
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Enter your name or Certificate ID (e.g. CNC-2024-CCNA-00142)"
              className={styles.searchInput}
              required
            />
            <button type="submit" className={`${styles.searchBtn} btn-shimmer`}>
              Verify Certificate →
            </button>
          </form>
          <p className={styles.hint}>💡 Try: "John" or "CNC" for a demo</p>
        </TiltCard>

        {/* Result */}
        {searched && (
          cert ? (
            <div className={`${styles.certWrap} reveal`}>
              <div className={styles.certPreview}>
                <div className={styles.certBg}>
                  <div className={styles.certHeader}>
                    <div className={styles.certLogo}>CNC</div>
                    <div>
                      <h3>Core Networking Classes</h3>
                      <p>Certificate of Completion</p>
                    </div>
                  </div>
                  <div className={styles.certBody}>
                    <p className={styles.certPresentedTo}>This certifies that</p>
                    <h2 className={styles.certName}>{cert.name}</h2>
                    <p className={styles.certCourse}>has successfully completed</p>
                    <h3 className={styles.certCourseName}>{cert.course}</h3>
                    <div className={styles.certMeta}>
                      <span>📅 {cert.date}</span>
                      <span>🏅 {cert.grade}</span>
                      <span>🆔 {cert.id}</span>
                    </div>
                  </div>
                  <div className={styles.certFooter}>
                    <div className={styles.certSig}>
                      <div className={styles.certSigLine} />
                      <p>Authorized Signature</p>
                    </div>
                    <div className={styles.certSeal}>✦</div>
                  </div>
                </div>
              </div>
              <div className={styles.certActions}>
                <button className={`${styles.downloadBtn} btn-shimmer`}>
                  ⬇️ Download Certificate
                </button>
                <button className={styles.shareBtn}>
                  🔗 Share to LinkedIn
                </button>
              </div>
            </div>
          ) : (
            <div className={`${styles.notFound} reveal`}>
              <div className={styles.notFoundIcon}>❌</div>
              <h3>Certificate Not Found</h3>
              <p>No certificate found for "{query}". Please check and try again.</p>
            </div>
          )
        )}

        {/* Info cards */}
        <div className={styles.infoGrid}>
          {[
            { icon: '🔒', title: 'Tamper-Proof', desc: 'Every certificate has a unique ID verifiable online.' },
            { icon: '🌐', title: 'Globally Recognized', desc: 'Accepted by top MNCs in India and abroad.' },
            { icon: '📱', title: 'Digital First', desc: 'Share instantly on LinkedIn, resume portals, and email.' },
          ].map((item, i) => (
            <TiltCard key={item.title} className={`${styles.infoCard} reveal reveal-delay-${i + 1}`}>
              <div className={styles.infoIcon}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};
