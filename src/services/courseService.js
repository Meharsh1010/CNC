import coursesData from '../data/courses.json';

export const courseService = {
  getAllCourses: () => {
    try {
      const allCourses = [];
      Object.keys(coursesData).forEach(category => {
        allCourses.push(...coursesData[category]);
      });
      return allCourses;
    } catch (error) {
      console.error('Error fetching all courses:', error);
      return [];
    }
  },

  getCoursesByCategory: (category) => {
    try {
      return coursesData[category] || [];
    } catch (error) {
      console.error('Error fetching courses by category:', error);
      return [];
    }
  },

  getCourseById: (id) => {
    try {
      const allCourses = courseService.getAllCourses();
      return allCourses.find(course => course.id === id) || null;
    } catch (error) {
      console.error('Error fetching course by ID:', error);
      return null;
    }
  },

  getCategories: () => {
    return Object.keys(coursesData);
  },

  searchCourses: (query) => {
    try {
      const allCourses = courseService.getAllCourses();
      const lowerQuery = query.toLowerCase();
      return allCourses.filter(course =>
        course.name.toLowerCase().includes(lowerQuery) ||
        course.description.toLowerCase().includes(lowerQuery)
      );
    } catch (error) {
      console.error('Error searching courses:', error);
      return [];
    }
  }
};
