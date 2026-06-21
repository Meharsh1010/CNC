import React, { useState } from 'react';
import { TiltCard } from '../components/TiltCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Login.module.css';

export const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className={styles.page}>
      <div className={styles.bgDecor} />

      <div className={`${styles.wrapper} container`}>
        <TiltCard className={`${styles.card} reveal`} intensity={6}>
          {/* Logo */}
          <div className={styles.logoWrap}>
            <div className={styles.logo}>
              <svg viewBox="0 0 100 50" className={styles.logoSvg}>
                <path d="M45,25 C45,12 35,5 25,5 C10,5 5,18 5,25 C5,32 10,45 25,45 C35,45 42,38 45,30"
                  stroke="#38bdf8" strokeWidth="4" fill="none" />
                <path d="M30,45 L50,5 L70,45 L70,5"
                  stroke="#38bdf8" strokeWidth="4" fill="none" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className={styles.title}>Welcome Back</h1>
            <p className={styles.subtitle}>Sign in to your CNC student portal</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label>📧 Email Address</label>
              <input
                type="email" required
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                placeholder="you@email.com"
              />
            </div>
            <div className={styles.field}>
              <label>🔒 Password</label>
              <input
                type="password" required
                value={formData.password}
                onChange={e => setFormData(p => ({ ...p, password: e.target.value }))}
                placeholder="Enter your password"
              />
            </div>
            <div className={styles.forgotRow}>
              <label className={styles.rememberMe}>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className={styles.forgot}>Forgot password?</a>
            </div>
            <button type="submit" className={`${styles.loginBtn} btn-shimmer`} disabled={loading}>
              {loading ? <span className={styles.spinner} /> : 'Sign In →'}
            </button>
          </form>

          <div className={styles.divider}><span>or continue with</span></div>

          <button className={styles.googleBtn}>
            <span className={styles.googleG}>G</span> Sign in with Google
          </button>

          <p className={styles.registerNote}>
            Don't have an account?{' '}
            <a href="/contact">Contact us to enroll</a>
          </p>
        </TiltCard>
      </div>
    </div>
  );
};
