import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CoursesContext } from '../context/CoursesContext';
import { useTheme } from '../context/ThemeContext';
import styles from './Navigation.module.css';

const megaCourses = {
  enterprise: {
    label: 'Enterprise',
    icon: '🌐',
    color: styles.colBlue,
    items: ['CCNA 200-301', 'CCNP Enterprise', 'CCIE Enterprise', 'SD-WAN Solutions'],
    paths: ['/courses/ccna', '/courses/ccnp', '/courses/ccie', '/courses/sdwan'],
  },
  security: {
    label: 'Security',
    icon: '🛡️',
    color: styles.colOrange,
    items: ['Palo Alto Networks', 'Fortinet FortiGate', 'Ethical Hacking (CEH)'],
    paths: ['/courses/palo-alto', '/courses/fortigate', '/courses/ceh'],
  },
  datacenter: {
    label: 'Multi-Vendor',
    icon: '⚡',
    color: styles.colPurple,
    items: ['Cisco ACI', 'Cisco Nexus', 'Cisco DevNet', 'F5 LTM / GTM'],
    paths: ['/courses/aci', '/courses/nexus', '/courses/devnet', '/courses/f5'],
  },
};

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
    setMegaOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* ── TOP BAR ── */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          {/* Logo */}
          <div className={styles.logo} onClick={() => handleNav('/')}>
            <div className={styles.logoBox}>
              <svg viewBox="0 0 100 50" className={styles.logoSvg}>
                <path d="M45,25 C45,12 35,5 25,5 C10,5 5,18 5,25 C5,32 10,45 25,45 C35,45 42,38 45,30"
                  stroke="#38bdf8" strokeWidth="4" fill="none" />
                <path d="M30,45 L50,5 L70,45 L70,5"
                  stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinejoin="round" />
              </svg>
            </div>
            <span className={styles.logoTagline}>Growing Dreams.....</span>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🕐</div>
              <div>
                <span className={styles.contactTitle}>Business Hours</span>
                <span className={styles.contactSub}>Mon to Sat: 10 AM – 10 PM</span>
              </div>
            </div>
            <div className={styles.contactDivider} />
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📞</div>
              <div>
                <a href="tel:+919625343392" className={styles.contactPhone}>+91 962 534 3392</a>
                <a href="tel:+919315344729" className={styles.contactPhone}>+91 931 534 4729</a>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            {/* Theme toggle */}
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* CTA */}
            <button
              className={`${styles.ctaBtn} btn-shimmer`}
              onClick={() => handleNav('/contact')}
            >
              Get in Touch
              <span className={styles.ctaArrow}>→</span>
            </button>

            {/* Hamburger */}
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {/* ── NAV BAR ── */}
      <nav className={styles.navBar}>
        <div className={styles.navInner}>
          <div className={styles.navLinks}>
            <Link to="/" className={styles.navLink}>Home</Link>

            {/* Mega Menu */}
            <div
              className={styles.megaWrapper}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button className={styles.navLink}>
                Courses <span className={`${styles.chevron} ${megaOpen ? styles.chevronOpen : ''}`}>▾</span>
              </button>

              {megaOpen && (
                <div className={`${styles.megaMenu} glass`}>
                  {Object.values(megaCourses).map((col) => (
                    <div key={col.label} className={styles.megaCol}>
                      <h4 className={`${styles.megaColTitle} ${col.color}`}>
                        <span>{col.icon}</span> {col.label}
                      </h4>
                      <ul>
                        {col.items.map((item, i) => (
                          <li key={item}>
                            <button
                              className={styles.megaItem}
                              onClick={() => handleNav(col.paths[i])}
                            >
                              <span className={styles.megaDot} />
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className={styles.megaFooter}>
                    <button className={styles.megaViewAll} onClick={() => handleNav('/courses')}>
                      View All Courses →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link to="/rack-rental" className={styles.navLink}>Rack Rental</Link>
            <Link to="/blog" className={styles.navLink}>Blog</Link>
            <Link to="/victory" className={styles.navLink}>Our Victory</Link>
            <Link to="/ecertificate" className={styles.navLink}>E Certificate</Link>
            <Link to="/contact" className={styles.navLink}>Contact</Link>
            <Link to="/login" className={styles.navLink}>App Login</Link>
          </div>

          {/* Social Icons */}
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className={`${styles.socialLink} ${styles.fb}`} title="Facebook">f</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className={`${styles.socialLink} ${styles.yt}`} title="YouTube">▶</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={`${styles.socialLink} ${styles.li}`} title="LinkedIn">in</a>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {[
          { label: 'Home', path: '/' },
          { label: 'All Courses', path: '/courses' },
          { label: 'Rack Rental', path: '/rack-rental' },
          { label: 'Blog', path: '/blog' },
          { label: 'Our Victory', path: '/victory' },
          { label: 'E Certificate', path: '/ecertificate' },
          { label: 'Contact Us', path: '/contact' },
          { label: 'App Login', path: '/login' },
        ].map(item => (
          <button key={item.path} className={styles.mobileLink} onClick={() => handleNav(item.path)}>
            {item.label} <span>›</span>
          </button>
        ))}
      </div>
    </header>
  );
};
