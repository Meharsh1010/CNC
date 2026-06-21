import testimonialsData from '../data/testimonials.json';

export const testimonialsService = {
  getAllTestimonials: () => {
    try {
      return testimonialsData;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  },

  getTestimonialById: (id) => {
    try {
      return testimonialsData.find(t => t.id === id) || null;
    } catch (error) {
      console.error('Error fetching testimonial by ID:', error);
      return null;
    }
  },

  getRandomTestimonials: (count = 6) => {
    try {
      const shuffled = [...testimonialsData].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    } catch (error) {
      console.error('Error fetching random testimonials:', error);
      return [];
    }
  },

  getAverageRating: () => {
    try {
      if (testimonialsData.length === 0) return 0;
      const sum = testimonialsData.reduce((acc, t) => acc + t.rating, 0);
      return (sum / testimonialsData.length).toFixed(1);
    } catch (error) {
      console.error('Error calculating average rating:', error);
      return 0;
    }
  }
};
