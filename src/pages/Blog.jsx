import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { TiltCard } from '../components/TiltCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Blog.module.css';

const CATEGORY_COLORS = {
  Networking: { bg: '#eff6ff', color: '#3b82f6' },
  Security: { bg: '#fff7ed', color: '#f97316' },
  Automation: { bg: '#ecfdf5', color: '#10b981' },
  DataCenter: { bg: '#f5f3ff', color: '#7c3aed' },
  WebDevelopment: { bg: '#fdf4ff', color: '#a855f7' },
};

export const Blog = () => {
  const { allBlogs: blogs } = useContext(BlogContext);
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  useScrollReveal();

  const categories = [...new Set(blogs.map(b => b.category))];
  const filtered = activeCategory ? blogs.filter(b => b.category === activeCategory) : blogs;

  return (
    <div className={styles.page}>
      <div className="page-header">
        <div className="container">
          <h1 className="reveal">📰 Blog & Insights</h1>
          <p className="reveal reveal-delay-1">Stay ahead with the latest in networking, security, and technology</p>
        </div>
      </div>

      <div className={`${styles.body} container section-padding`}>
        {/* Category filters */}
        <div className={`${styles.filters} reveal`}>
          <button
            className={`${styles.filterBtn} ${!activeCategory ? styles.filterActive : ''}`}
            onClick={() => setActiveCategory(null)}
          >All Posts</button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            >{cat}</button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((blog, i) => {
            const c = CATEGORY_COLORS[blog.category] || { bg: '#f1f5f9', color: '#64748b' };
            return (
              <TiltCard
                key={blog.id}
                className={`${styles.blogCard} reveal reveal-delay-${(i % 3) + 1}`}
                intensity={7}
              >
                <div className={styles.blogImg} style={{ background: `linear-gradient(135deg, ${c.color}25, ${c.color}08)` }}>
                  <div className={styles.blogImgIcon} style={{ color: c.color }}>
                    {blog.category === 'Networking' ? '🌐' : blog.category === 'Security' ? '🛡️' : blog.category === 'Automation' ? '⚙️' : blog.category === 'DataCenter' ? '🖥️' : '💻'}
                  </div>
                </div>
                <div className={styles.blogBody}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogCat} style={{ background: c.bg, color: c.color }}>{blog.category}</span>
                    <span className={styles.blogDate}>{new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                  <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                  <div className={styles.blogFooter}>
                    <div className={styles.blogAuthor}>
                      <div className={styles.authorAvatar} style={{ background: c.color }}>
                        {blog.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span>{blog.author}</span>
                    </div>
                    <button
                      className={styles.readBtn}
                      style={{ color: c.color }}
                      onClick={() => navigate(`/blog/${blog.slug}`)}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};
