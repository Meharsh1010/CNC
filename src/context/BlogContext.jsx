import React, { createContext, useState, useMemo } from 'react';
import { blogService } from '../services/blogService';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const allBlogs = useMemo(() => blogService.getAllBlogs(), []);
  const categories = useMemo(() => blogService.getCategories(), []);
  const recentBlogs = useMemo(() => blogService.getRecentBlogs(5), []);

  const filteredBlogs = useMemo(() => {
    let filtered = allBlogs;

    if (selectedCategory) {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = blogService.searchBlogs(searchQuery);
    }

    return filtered;
  }, [selectedCategory, searchQuery, allBlogs]);

  const getBlogById = (id) => blogService.getBlogById(id);
  const getBlogBySlug = (slug) => blogService.getBlogBySlug(slug);
  const getRelatedBlogs = (blogId) => blogService.getRelatedBlogs(blogId, 3);

  const value = {
    allBlogs,
    categories,
    recentBlogs,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredBlogs,
    getBlogById,
    getBlogBySlug,
    getRelatedBlogs,
    totalBlogs: allBlogs.length
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
