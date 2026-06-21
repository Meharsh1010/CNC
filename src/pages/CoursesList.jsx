import React, { useContext, useState } from 'react';
import { CoursesContext } from '../context/CoursesContext';
import { CourseCard } from '../components/CourseCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './CoursesList.module.css';

const CATEGORY_ICONS = {
  Enterprise: '🌐', Security: '🛡️', DataCenter: '🖥️',
  Automation: '⚙️', WebDevelopment: '💻',
};

export const CoursesList = () => {
  const { categories, filteredCourses, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useContext(CoursesContext);
  useScrollReveal();

  return (
    <div className={styles.page}>
      {/* Hero Header */}
      <div className="page-header">
        <div className="container">
          <h1 className="reveal">Training Catalog</h1>
          <p className="reveal reveal-delay-1">Choose from our comprehensive range of IT training courses</p>
        </div>
      </div>

      <div className={`${styles.layout} container`}>
        {/* Sidebar */}
        <aside className={`${styles.sidebar} reveal`}>
          <div className={styles.filterCard}>
            <h3 className={styles.filterTitle}>🔍 Search</h3>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterCard}>
            <h3 className={styles.filterTitle}>📂 Categories</h3>
            <div className={styles.categoryList}>
              <button
                className={`${styles.catBtn} ${!selectedCategory ? styles.catActive : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                <span>🎓</span> All Courses
                <span className={styles.catCount}>{filteredCourses.length}</span>
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`${styles.catBtn} ${selectedCategory === cat ? styles.catActive : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                >
                  <span>{CATEGORY_ICONS[cat] || '📚'}</span> {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid */}
        <main className={styles.main}>
          <div className={styles.resultsBar}>
            <p className={styles.resultsCount}>
              Showing <strong>{filteredCourses.length}</strong> courses
              {selectedCategory && <> in <span className={styles.catTag}>{selectedCategory}</span></>}
            </p>
            {selectedCategory && (
              <button className={styles.clearBtn} onClick={() => setSelectedCategory(null)}>
                ✕ Clear filter
              </button>
            )}
          </div>

          {filteredCourses.length > 0 ? (
            <div className={styles.grid}>
              {filteredCourses.map((course, i) => (
                <div key={course.id} className={`reveal reveal-delay-${(i % 3) + 1}`}>
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>🔍</div>
              <h3>No courses found</h3>
              <p>Try adjusting your search or clear filters</p>
              <button className={styles.resetBtn} onClick={() => { setSelectedCategory(null); setSearchQuery(''); }}>
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
