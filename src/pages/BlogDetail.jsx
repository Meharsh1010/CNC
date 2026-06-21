import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';
import { TiltCard } from '../components/TiltCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './BlogDetail.module.css';

export const BlogDetail = () => {
  const { slug } = useParams();
  const { allBlogs: blogs } = useContext(BlogContext);
  const navigate = useNavigate();
  const blog = blogs.find(b => b.slug === slug);
  const related = blogs.filter(b => b.slug !== slug).slice(0, 3);
  useScrollReveal();

  if (!blog) return (
    <div className={styles.notFound}>
      <h2>Post not found</h2>
      <button onClick={() => navigate('/blog')}>← Back to Blog</button>
    </div>
  );

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`${styles.heroContent} container`}>
          <button className={styles.backBtn} onClick={() => navigate('/blog')}>← Back to Blog</button>
          <span className={styles.category}>{blog.category}</span>
          <h1 className={styles.title}>{blog.title}</h1>
          <div className={styles.meta}>
            <span>👤 {blog.author}</span>
            <span>📅 {new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={`${styles.body} container`}>
        <main className={`${styles.main} reveal`}>
          <TiltCard className={styles.contentCard} intensity={3}>
            <p className={styles.excerpt}>{blog.excerpt}</p>
            <div className={styles.divider} />
            <p className={styles.content}>{blog.content}</p>
            <p className={styles.content}>
              At Core Networking Classes, we ensure our students stay ahead of industry trends. Our expert trainers with years of hands-on experience guide you through practical implementations that mirror real-world enterprise environments. Join thousands of professionals who have transformed their careers with us.
            </p>
          </TiltCard>

          {/* Tags */}
          <div className={styles.tags}>
            {['Networking', blog.category, 'CNC Training', 'Career'].map(t => (
              <span key={t} className={styles.tag}># {t}</span>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={`${styles.sideCard} reveal reveal-delay-1`}>
            <h3>📚 Related Posts</h3>
            <div className={styles.relatedList}>
              {related.map(r => (
                <button key={r.id} className={styles.relatedItem} onClick={() => navigate(`/blog/${r.slug}`)}>
                  <span className={styles.relatedCat}>{r.category}</span>
                  <span className={styles.relatedTitle}>{r.title}</span>
                  <span className={styles.relatedDate}>{new Date(r.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                </button>
              ))}
            </div>
          </div>

          <TiltCard className={`${styles.ctaCard} reveal reveal-delay-2`} intensity={6}>
            <div className={styles.ctaIcon}>🚀</div>
            <h3>Start Your Journey</h3>
            <p>Join 10,000+ students trained by CNC.</p>
            <button className={`${styles.ctaBtn} btn-shimmer`} onClick={() => navigate('/courses')}>
              Explore Courses
            </button>
          </TiltCard>
        </aside>
      </div>
    </div>
  );
};
