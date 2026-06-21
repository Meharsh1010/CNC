import React, { useState, useContext } from 'react';
import { EnquiryContext } from '../context/EnquiryContext';
import styles from './EnquiryModal.module.css';

export const EnquiryModal = ({ isOpen, onClose }) => {
  const { submitEnquiry } = useContext(EnquiryContext);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    submitEnquiry(formData);
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', course: '', message: '' }); onClose(); }, 2500);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} glass`} onClick={e => e.stopPropagation()}>
        {/* Close */}
        <button className={styles.close} onClick={onClose}>✕</button>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerIcon}>📩</div>
          <h2 className={styles.title}>Get Free Counseling</h2>
          <p className={styles.subtitle}>Our experts will contact you within 24 hours</p>
        </div>

        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✅</div>
            <h3>Thank You!</h3>
            <p>We'll reach out to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label>Full Name *</label>
                <input
                  type="text" name="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.field}>
                <label>Phone Number *</label>
                <input
                  type="tel" name="phone" required
                  value={formData.phone} onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>
            <div className={styles.field}>
              <label>Email Address *</label>
              <input
                type="email" name="email" required
                value={formData.email} onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
            <div className={styles.field}>
              <label>Interested Course</label>
              <select name="course" value={formData.course} onChange={handleChange}>
                <option value="">Select a course...</option>
                <option>CCNA 200-301</option>
                <option>CCNP Enterprise</option>
                <option>CCIE Enterprise</option>
                <option>Palo Alto Networks</option>
                <option>Fortinet FortiGate</option>
                <option>Ethical Hacking</option>
                <option>Cisco ACI</option>
                <option>SD-WAN Solutions</option>
                <option>Cisco DevNet</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Message (Optional)</label>
              <textarea
                name="message" rows="3"
                value={formData.message} onChange={handleChange}
                placeholder="Tell us about your background or goals..."
              />
            </div>
            <button type="submit" className={`${styles.submitBtn} btn-shimmer`}>
              Send Enquiry 🚀
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
