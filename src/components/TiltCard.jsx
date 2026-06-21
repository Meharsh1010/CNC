import React, { useRef, useCallback } from 'react';

export const TiltCard = ({ children, className = '', style = {}, intensity = 10, scale = 1.02 }) => {
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -intensity;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * intensity;

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
      card.style.boxShadow = `
        ${-ry * 0.5}px ${rx * 0.5}px 30px rgba(0,0,0,0.15),
        0 20px 40px rgba(0,0,0,0.1)
      `;
    });
  }, [intensity, scale]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.classList.add('resetting');
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.boxShadow = '';
    setTimeout(() => card && card.classList.remove('resetting'), 500);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      style={{ transformStyle: 'preserve-3d', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
