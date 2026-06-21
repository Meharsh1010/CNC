import React, { useState, useContext } from 'react';
import { EnquiryContext } from '../context/EnquiryContext';
import styles from './EnquiryModal.module.css';

const COUNTRIES = [
  'India', 'United States', 'United Kingdom', 'Canada', 'Australia',
  'UAE', 'Saudi Arabia', 'Singapore', 'Germany', 'France',
  'Netherlands', 'New Zealand', 'South Africa', 'Other',
];

const COURSES = [
  'CCNA 200-301', 'CCNP Enterprise', 'CCIE Enterprise', 'CCNP Security',
  'CCIE Security', 'Palo Alto Networks', 'Fortinet FortiGate',
  'Ethical Hacking', 'Cisco ACI', 'SD-WAN Solutions', 'Cisco DevNet',
  'AWS Cloud', 'Azure Fundamentals', 'Linux Administration',
];

const HEAR_ABOUT = [
  'Google Search', 'Social Media (Facebook / Instagram)', 'YouTube',
  'LinkedIn', 'Friend / Colleague Referral', 'College / University',
  'WhatsApp', 'Other',
];

export const EnquiryModal = ({ isOpen, onClose }) => {
  const { submitEnquiry } = useContext(EnquiryContext);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', country: '',
    course: '', hearAbout: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = e =>
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    if (!formData.phone.trim()) errs.phone = 'Contact number is required';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    submitEnquiry(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', country: '', course: '', hearAbout: '', message: '' });
      onClose();
    }, 2800);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        {/* Gradient header banner */}
        <div className={styles.headerBanner}>
          <span className={styles.bannerIcon}>🎓</span>
          <div>
            <div>Free Course Enquiry</div>
            <div className={styles.headerSub}>Our expert will call you within 24 hours</div>
          </div>
        </div>

        {/* Close button */}
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>

        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <h3>Thank You!</h3>
            <p>Our experts will contact you within 24 hours to guide you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form} noValidate>

            {/* Row 1: Name + Phone */}
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label htmlFor="enq-name">
                  <span className={styles.fieldIcon}>👤</span> Name
                </label>
                <input
                  id="enq-name" type="text" name="name"
                  value={formData.name} onChange={handleChange}
                  placeholder="Your full name"
                  className={errors.name ? styles.inputError : ''}
                />
                {errors.name && <span className={styles.errMsg}>⚠ {errors.name}</span>}
              </div>

              <div className={styles.field}>
                <label htmlFor="enq-phone">
                  <span className={styles.fieldIcon}>📞</span> Phone
                </label>
                <input
                  id="enq-phone" type="tel" name="phone"
                  value={formData.phone} onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={errors.phone ? styles.inputError : ''}
                />
                {errors.phone && <span className={styles.errMsg}>⚠ {errors.phone}</span>}
              </div>
            </div>

            {/* Email (full width) */}
            <div className={styles.field}>
              <label htmlFor="enq-email">
                <span className={styles.fieldIcon}>✉️</span> Email Address
              </label>
              <input
                id="enq-email" type="email" name="email"
                value={formData.email} onChange={handleChange}
                placeholder="you@example.com"
                className={errors.email ? styles.inputError : ''}
              />
              {errors.email && <span className={styles.errMsg}>⚠ {errors.email}</span>}
            </div>

            {/* Row 2: Country + Course */}
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label htmlFor="enq-country">
                  <span className={styles.fieldIcon}>🌍</span> Country
                </label>
                <select id="enq-country" name="country" value={formData.country} onChange={handleChange}>
                  <option value="">Select Country</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="enq-hear">
                  <span className={styles.fieldIcon}>📣</span> Heard Via
                </label>
                <select id="enq-hear" name="hearAbout" value={formData.hearAbout} onChange={handleChange}>
                  <option value="">Select</option>
                  {HEAR_ABOUT.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>

            {/* Course interest */}
            <div className={styles.field}>
              <label htmlFor="enq-course">
                <span className={styles.fieldIcon}>💻</span> Course / Technology Interested In
              </label>
              <input
                id="enq-course" type="text" name="course"
                value={formData.course} onChange={handleChange}
                placeholder="e.g. CCNA, Ethical Hacking, AWS…"
                list="course-list"
              />
              <datalist id="course-list">
                {COURSES.map(c => <option key={c} value={c} />)}
              </datalist>
            </div>

            <div className={styles.divider} />

            {/* Buttons */}
            <div className={styles.btnRow}>
              <button type="button" className={styles.closeBtn} onClick={onClose}>Cancel</button>
              <button type="submit" className={styles.submitBtn}>
                🚀 Submit Enquiry
              </button>
            </div>

            <p className={styles.privacyNote}>🔒 Your details are safe. No spam, ever.</p>

          </form>
        )}
      </div>
    </div>
  );
};
