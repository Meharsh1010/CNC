import React from 'react';
import styles from './StatsBanner.module.css';

export const StatsBanner = () => {
  const stats = [
    {
      number: '10,000+',
      label: 'Students Trained'
    },
    {
      number: '95%',
      label: 'CCIE Pass Ratio'
    },
    {
      number: '100%',
      label: 'Job Assurance'
    },
    {
      number: '100+',
      label: 'Corporate Clients'
    }
  ];

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.number}>{stat.number}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
