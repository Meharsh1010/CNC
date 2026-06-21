import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CoursesContext } from '../context/CoursesContext';
import { TiltCard } from '../components/TiltCard';
import { EnquiryModal } from '../components/EnquiryModal';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './CourseDetail.module.css';

const DELIVERABLES = [
  { icon: '📐', title: 'Core Fundamentals', desc: 'Deep dive into foundational networking concepts.' },
  { icon: '🏢', title: 'Enterprise Implementations', desc: 'Deploy real-world enterprise architectures.' },
  { icon: '🔧', title: 'Advanced Troubleshooting', desc: 'Identify and resolve complex network issues.' },
  { icon: '🖥️', title: 'Physical Rack Access', desc: '24/7 access to physical devices for labs.' },
];

export const CourseDetail = () => {
  const { courseId } = useParams();
  const { getCourseById } = useContext(CoursesContext);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [openSyllabus, setOpenSyllabus] = useState(null);
  const course = getCourseById(courseId);
  useScrollReveal();

  if (!course) {
    return (
      <div className={styles.notFound}>
        <h2>Course not found</h2>
        <button onClick={() => navigate('/courses')}>← Back to Courses</button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerGrid} />
        <div className={`${styles.bannerContent} container reveal`}>
          <span className={styles.bannerCategory}>{course.category}</span>
          <h1 className={styles.bannerTitle}>{course.name}</h1>
          <p className={styles.bannerDesc}>{course.description}</p>
          <div className={styles.bannerMeta}>
            <span className={styles.metaChip}>⏱ {course.duration}</span>
            <span className={styles.metaChip}>🎯 {course.level}</span>
            <span className={styles.metaChip}>👨‍🏫 {course.trainer}</span>
          </div>
          <div className={styles.bannerBtns}>
            <button className={`${styles.enrollBtn} btn-shimmer`} onClick={() => setModalOpen(true)}>
              Enroll Now — {course.price}
            </button>
            <button className={styles.backBtn} onClick={() => navigate('/courses')}>
              ← Back to Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className={`${styles.body} container`}>
        {/* Main */}
        <div className={styles.main}>
          {/* Overview */}
          <TiltCard className={`${styles.card} reveal`} intensity={4}>
            <h2 className={styles.cardTitle}>📖 Course Overview</h2>
            <p>This specialized training module covers everything from scratch to expert level. Designed for real-world application, our expert instructors guide you through immersive hands-on labs, live network scenarios, and complex enterprise architectures.</p>
            <p>By the end of this program, you will be fully equipped to handle enterprise-level challenges, architect robust solutions, and confidently clear global vendor certifications.</p>
          </TiltCard>

          {/* Deliverables */}
          <div className={`reveal reveal-delay-1`}>
            <h2 className={styles.sectionTitle}>✅ Key Deliverables</h2>
            <div className={styles.deliverablesGrid}>
              {DELIVERABLES.map(d => (
                <TiltCard key={d.title} className={styles.deliverableCard} intensity={6}>
                  <div className={styles.deliverableIcon}>{d.icon}</div>
                  <div>
                    <h4>{d.title}</h4>
                    <p>{d.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Syllabus */}
          <div className={`reveal reveal-delay-2`}>
            <h2 className={styles.sectionTitle}>📚 Course Syllabus</h2>
            <div className={styles.syllabusList}>
              {course.syllabus?.map((topic, i) => (
                <div
                  key={topic}
                  className={`${styles.syllabusItem} ${openSyllabus === i ? styles.syllabusOpen : ''}`}
                  onClick={() => setOpenSyllabus(openSyllabus === i ? null : i)}
                >
                  <div className={styles.syllabusHeader}>
                    <span className={styles.syllabusNum}>Module {String(i + 1).padStart(2, '0')}</span>
                    <span className={styles.syllabusTitle}>{topic}</span>
                    <span className={styles.syllabusChevron}>{openSyllabus === i ? '▲' : '▼'}</span>
                  </div>
                  {openSyllabus === i && (
                    <div className={styles.syllabusBody}>
                      <p>In-depth coverage of {topic} with practical labs and real-world scenarios.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className={`reveal reveal-delay-3`}>
            <h2 className={styles.sectionTitle}>🏆 What You Get</h2>
            <div className={styles.featuresGrid}>
              {course.features?.map(f => (
                <div key={f} className={styles.featureChip}>
                  <span className={styles.featureCheck}>✓</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <TiltCard className={`${styles.sidebarCard} reveal reveal-delay-1`} intensity={5}>
            <h3 className={styles.sidebarTitle}>Program Details</h3>
            <ul className={styles.detailsList}>
              <li><span>⏱</span><div><small>Duration</small><strong>{course.duration}</strong></div></li>
              <li><span>🎯</span><div><small>Level</small><strong>{course.level}</strong></div></li>
              <li><span>👨‍🏫</span><div><small>Trainer</small><strong>{course.trainer}</strong></div></li>
              <li><span>💰</span><div><small>Investment</small><strong className={styles.price}>{course.price}</strong></div></li>
              <li><span>📜</span><div><small>Certificate</small><strong>Yes, on completion</strong></div></li>
              <li><span>💼</span><div><small>Placement</small><strong>100% Assured</strong></div></li>
            </ul>
            <button
              className={`${styles.sidebarEnroll} btn-shimmer`}
              onClick={() => setModalOpen(true)}
            >
              🚀 Enroll Now
            </button>
            <p className={styles.sidebarNote}>🕐 Mon–Sat: 10 AM – 10 PM</p>
          </TiltCard>
        </aside>
      </div>
    </div>
  );
};
