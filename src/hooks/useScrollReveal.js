import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = options;

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold, rootMargin });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
};
