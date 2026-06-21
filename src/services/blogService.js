import blogsData from '../data/blogs.json';

export const blogService = {
  getAllBlogs: () => {
    try {
      return blogsData;
    } catch (error) {
      console.error('Error fetching all blogs:', error);
      return [];
    }
  },

  getBlogById: (id) => {
    try {
      return blogsData.find(blog => blog.id === parseInt(id)) || null;
    } catch (error) {
      console.error('Error fetching blog by ID:', error);
      return null;
    }
  },

  getBlogBySlug: (slug) => {
    try {
      return blogsData.find(blog => blog.slug === slug) || null;
    } catch (error) {
      console.error('Error fetching blog by slug:', error);
      return null;
    }
  },

  getCategories: () => {
    try {
      const categories = [...new Set(blogsData.map(blog => blog.category))];
      return categories;
    } catch (error) {
      console.error('Error fetching blog categories:', error);
      return [];
    }
  },

  getBlogsByCategory: (category) => {
    try {
      return blogsData.filter(blog => blog.category === category);
    } catch (error) {
      console.error('Error fetching blogs by category:', error);
      return [];
    }
  },

  searchBlogs: (query) => {
    try {
      const lowerQuery = query.toLowerCase();
      return blogsData.filter(blog =>
        blog.title.toLowerCase().includes(lowerQuery) ||
        blog.excerpt.toLowerCase().includes(lowerQuery) ||
        blog.content.toLowerCase().includes(lowerQuery)
      );
    } catch (error) {
      console.error('Error searching blogs:', error);
      return [];
    }
  },

  getRelatedBlogs: (blogId, limit = 3) => {
    try {
      const blog = blogService.getBlogById(blogId);
      if (!blog) return [];

      return blogsData
        .filter(b => b.category === blog.category && b.id !== blogId)
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching related blogs:', error);
      return [];
    }
  },

  getRecentBlogs: (limit = 5) => {
    try {
      return blogsData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching recent blogs:', error);
      return [];
    }
  }
};
