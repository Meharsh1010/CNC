import React, { useContext, useState, useEffect } from 'react';
import { TestimonialsContext } from '../context/TestimonialsContext';
import styles from './TestimonialSlider.module.css';

export const TestimonialSlider = () => {
  const { randomTestimonials, averageRating } = useContext(TestimonialsContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(randomTestimonials);
  }, [randomTestimonials]);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentSlide];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2>What Our Students Say</h2>
        <div className={styles.ratingBadge}>
          <span className={styles.rating}>⭐ {averageRating}</span>
          <span className={styles.label}>Average Rating</span>
        </div>

        <div className={styles.sliderContainer}>
          <div className={styles.slide}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.review}>{currentTestimonial.review}</p>
            <div className={styles.author}>
              <img src={currentTestimonial.image} alt={currentTestimonial.name} />
              <div>
                <p className={styles.name}>{currentTestimonial.name}</p>
                <p className={styles.title}>{currentTestimonial.title}</p>
              </div>
            </div>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < currentTestimonial.rating ? styles.filled : ''}>
                  ★
                </span>
              ))}
            </div>
          </div>

          <button className={`${styles.navButton} ${styles.prev}`} onClick={prevSlide}>
            &#10094;
          </button>
          <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide}>
            &#10095;
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
