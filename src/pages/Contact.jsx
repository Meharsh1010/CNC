import React, { useState, useContext } from 'react';
import { EnquiryContext } from '../context/EnquiryContext';
import { TiltCard } from '../components/TiltCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Contact.module.css';

const INFO_CARDS = [
  { icon: '📍', title: 'Address', lines: ['Core Networking Classes', 'Delhi NCR, India - 110001'] },
  { icon: '📞', title: 'Phone', lines: ['+91 962 534 3392', '+91 931 534 4729'] },
  { icon: '✉️', title: 'Email', lines: ['info@corenetworking.in', 'support@corenetworking.in'] },
  { icon: '🕐', title: 'Hours', lines: ['Monday to Saturday', '10:00 AM – 10:00 PM IST'] },
];

export const Contact = () => {
  const { submitEnquiry } = useContext(EnquiryContext);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  useScrollReveal();

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    try {
      submitEnquiry(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError('Error submitting. Please try again.');
    }
  };

  return (
    <div className={styles.page}>
      <div className="page-header">
        <div className="container">
          <h1 className="reveal">📬 Get in Touch</h1>
          <p className="reveal reveal-delay-1">Have questions? We'd love to hear from you. Reach us anytime!</p>
        </div>
      </div>

      <div className={`${styles.body} container section-padding`}>
        {/* Left: Form */}
        <TiltCard className={`${styles.formCard} reveal`} intensity={4}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          {submitted && (
            <div className={styles.toast}>
              ✅ Message sent! We'll respond within 24 hours.
            </div>
          )}
          {error && <div className={styles.errorMsg}>{error}</div>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label>Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className={styles.field}>
                <label>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" />
              </div>
            </div>
            <div className={styles.field}>
              <label>Message *</label>
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals..." />
            </div>
            <button type="submit" className={`${styles.submitBtn} btn-shimmer`}>
              Send Message 🚀
            </button>
          </form>
        </TiltCard>

        {/* Right: Info */}
        <div className={`${styles.infoCol} reveal reveal-delay-1`}>
          {INFO_CARDS.map(card => (
            <TiltCard key={card.title} className={styles.infoCard} intensity={6}>
              <div className={styles.infoIcon}>{card.icon}</div>
              <div>
                <h4 className={styles.infoTitle}>{card.title}</h4>
                {card.lines.map(l => (
                  <p key={l} className={styles.infoLine}>{l}</p>
                ))}
              </div>
            </TiltCard>
          ))}

          {/* Map placeholder */}
          <TiltCard className={styles.mapCard} intensity={4}>
            <div className={styles.mapPlaceholder}>
              <span>📍 Delhi NCR, India</span>
              <p>Find us on Google Maps</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className={styles.mapLink}
              >
                Open in Maps →
              </a>
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
};
