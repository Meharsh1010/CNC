import React, { createContext, useState, useMemo } from 'react';
import { courseService } from '../services/courseService';

export const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allCourses = useMemo(() => courseService.getAllCourses(), []);
  const categories = useMemo(() => courseService.getCategories(), []);

  const filteredCourses = useMemo(() => {
    let filtered = allCourses;

    if (selectedCategory) {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = courseService.searchCourses(searchQuery);
    }

    return filtered;
  }, [selectedCategory, searchQuery, allCourses]);

  const getCourseById = (id) => courseService.getCourseById(id);

  const value = {
    allCourses,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    filteredCourses,
    getCourseById,
    totalCourses: allCourses.length
  };

  return (
    <CoursesContext.Provider value={value}>
      {children}
    </CoursesContext.Provider>
  );
};
