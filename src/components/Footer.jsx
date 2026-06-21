import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={`${styles.grid} container`}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoBox}>
              <svg viewBox="0 0 100 50" className={styles.logoSvg}>
                <path d="M45,25 C45,12 35,5 25,5 C10,5 5,18 5,25 C5,32 10,45 25,45 C35,45 42,38 45,30"
                  stroke="#38bdf8" strokeWidth="4" fill="none" />
                <path d="M30,45 L50,5 L70,45 L70,5"
                  stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinejoin="round" />
              </svg>
              <span>CNC</span>
            </div>
            <p className={styles.brandDesc}>
              Core Networking Classes — India's leading IT training institute with 15+ years of excellence.
              100% Job Assurance. Real hardware. Expert trainers.
            </p>
            <div className={styles.socials}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className={`${styles.social} ${styles.fb}`} title="Facebook">f</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className={`${styles.social} ${styles.yt}`} title="YouTube">▶</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={`${styles.social} ${styles.li}`} title="LinkedIn">in</a>
            </div>
          </div>

          {/* Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul>
              {[
                { label: 'Home', to: '/' },
                { label: 'All Courses', to: '/courses' },
                { label: 'Rack Rental', to: '/rack-rental' },
                { label: 'Our Victory', to: '/victory' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact Us', to: '/contact' },
              ].map(l => (
                <li key={l.to}><Link to={l.to} className={styles.footerLink}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Top Courses</h4>
            <ul>
              {[
                { label: 'CCNA 200-301', to: '/courses/ccna' },
                { label: 'CCNP Enterprise', to: '/courses/ccnp' },
                { label: 'Palo Alto Networks', to: '/courses/palo-alto' },
                { label: 'Fortinet FortiGate', to: '/courses/fortigate' },
                { label: 'Cisco DevNet', to: '/courses/devnet' },
                { label: 'Ethical Hacking', to: '/courses/ceh' },
              ].map(l => (
                <li key={l.to}><Link to={l.to} className={styles.footerLink}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>📍</span>
                <span>Delhi NCR, India - 110001</span>
              </li>
              <li>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <a href="tel:+919625343392" className={styles.footerLink}>+91 962 534 3392</a><br />
                  <a href="tel:+919315344729" className={styles.footerLink}>+91 931 534 4729</a>
                </div>
              </li>
              <li>
                <span className={styles.contactIcon}>✉️</span>
                <a href="mailto:info@corenetworking.in" className={styles.footerLink}>info@corenetworking.in</a>
              </li>
              <li>
                <span className={styles.contactIcon}>🕐</span>
                <span>Mon–Sat: 10 AM – 10 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <p>© {year} Core Networking Classes. All rights reserved.</p>
          <p className={styles.rights}>Designed with ❤️ for aspiring network engineers.</p>
        </div>
      </div>
    </footer>
  );
};
