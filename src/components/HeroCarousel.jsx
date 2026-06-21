import React, { useState, useEffect } from 'react';
import styles from './HeroCarousel.module.css';

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Master Networking Excellence',
      subtitle: 'CCNA, CCNP, CCIE Certifications',
      cta: 'Enroll Now',
      color: '#1a5f7a'
    },
    {
      id: 2,
      title: 'Cybersecurity Expertise',
      subtitle: 'CEH, Security+, and More',
      cta: 'Get Started',
      color: '#e74c3c'
    },
    {
      id: 3,
      title: '100% Job Assurance',
      subtitle: 'Placement Support Guaranteed',
      cta: 'Learn More',
      color: '#27ae60'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundColor: slide.color }}
          >
            <div className={styles.slideContent}>
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className={styles.ctaButton}>{slide.cta}</button>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>
        &#10095;
      </button>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
