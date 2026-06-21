import React, { createContext, useMemo } from 'react';
import { testimonialsService } from '../services/testimonialsService';

export const TestimonialsContext = createContext();

export const TestimonialsProvider = ({ children }) => {
  const allTestimonials = useMemo(() => testimonialsService.getAllTestimonials(), []);
  const averageRating = useMemo(() => testimonialsService.getAverageRating(), []);
  const randomTestimonials = useMemo(() => testimonialsService.getRandomTestimonials(6), []);

  const getTestimonialById = (id) => testimonialsService.getTestimonialById(id);

  const value = {
    allTestimonials,
    randomTestimonials,
    averageRating,
    getTestimonialById,
    totalTestimonials: allTestimonials.length
  };

  return (
    <TestimonialsContext.Provider value={value}>
      {children}
    </TestimonialsContext.Provider>
  );
};
