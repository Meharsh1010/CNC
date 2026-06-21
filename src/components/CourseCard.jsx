import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TiltCard } from './TiltCard';
import styles from './CourseCard.module.css';

const CATEGORY_COLORS = {
  Enterprise: { bg: '#eff6ff', accent: '#3b82f6', badge: '#dbeafe', badgeText: '#1d4ed8' },
  Security: { bg: '#fff7ed', accent: '#f97316', badge: '#ffedd5', badgeText: '#c2410c' },
  DataCenter: { bg: '#f5f3ff', accent: '#7c3aed', badge: '#ede9fe', badgeText: '#5b21b6' },
  Automation: { bg: '#ecfdf5', accent: '#10b981', badge: '#d1fae5', badgeText: '#065f46' },
  WebDevelopment: { bg: '#fdf4ff', accent: '#a855f7', badge: '#fae8ff', badgeText: '#7e22ce' },
};

const LEVEL_COLORS = {
  Beginner: '#22c55e',
  Intermediate: '#f59e0b',
  Advanced: '#ef4444',
  Expert: '#8b5cf6',
};

const CATEGORY_ICONS = {
  Enterprise: '🌐',
  Security: '🛡️',
  DataCenter: '🖥️',
  Automation: '⚙️',
  WebDevelopment: '💻',
};

export const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const colors = CATEGORY_COLORS[course.category] || CATEGORY_COLORS.Enterprise;
  const levelColor = LEVEL_COLORS[course.level] || '#64748b';
  const icon = CATEGORY_ICONS[course.category] || '📚';

  return (
    <TiltCard className={styles.card} intensity={8}>
      {/* Top accent bar */}
      <div className={styles.accentBar} style={{ background: colors.accent }} />

      <div className={styles.cardBody}>
        {/* Header */}
        <div className={styles.cardHeader}>
          <div className={styles.iconWrap} style={{ background: colors.bg, color: colors.accent }}>
            <span>{icon}</span>
          </div>
          <span
            className={styles.categoryBadge}
            style={{ background: colors.badge, color: colors.badgeText }}
          >
            {course.category}
          </span>
        </div>

        {/* Title */}
        <h3 className={styles.title}>{course.name}</h3>
        <p className={styles.description}>{course.description}</p>

        {/* Meta */}
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <span className={styles.metaIcon}>⏱</span> {course.duration}
          </span>
          <span
            className={styles.levelBadge}
            style={{ background: `${levelColor}18`, color: levelColor }}
          >
            {course.level}
          </span>
        </div>

        {/* Features */}
        <ul className={styles.features}>
          {course.features?.slice(0, 3).map(f => (
            <li key={f} className={styles.featureItem}>
              <span className={styles.check} style={{ color: colors.accent }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className={styles.cardFooter}>
          <span className={styles.price}>{course.price}</span>
          <button
            className={`${styles.viewBtn} btn-shimmer`}
            onClick={() => navigate(`/courses/${course.id}`)}
            style={{ background: colors.accent }}
          >
            View Details →
          </button>
        </div>
      </div>
    </TiltCard>
  );
};
