import React, { useContext, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { CoursesContext } from '../context/CoursesContext';
import { CourseCard } from '../components/CourseCard';
import styles from './CategoryPage.module.css';

export const CategoryPage = ({ category: propCategory }) => {
  const { courseId } = useParams();
  const [searchParams] = useSearchParams();
  const { allCourses, setSelectedCategory, selectedCategory, filteredCourses } = useContext(CoursesContext);

  const categoryParam = searchParams.get('category');
  const displayCategory = propCategory || categoryParam || '';

  useEffect(() => {
    if (displayCategory) {
      setSelectedCategory(displayCategory);
    }
  }, [displayCategory, setSelectedCategory]);

  const getCategoryDescription = (cat) => {
    const descriptions = {
      'Routing': 'Master advanced routing technologies and protocols. Learn BGP, OSPF, and more.',
      'Switching': 'Learn data center and enterprise switching solutions. VLAN, Spanning Tree, and beyond.',
      'Security': 'Become a cybersecurity expert with CEH, Security+, Palo Alto, and more.',
      'Enterprise': 'Enterprise-level networking courses with CCNA, CCNP, and CCIE certifications.',
      'DataCenter': 'Modern data center technologies including ACI, Nexus, and virtualization.',
      'Automation': 'Network automation and DevOps with Python and Cisco DevNet.',
      'WebDevelopment': 'Web development from HTML/CSS basics to full-stack applications.'
    };
    return descriptions[cat] || `Explore our ${cat} courses and enhance your skills.`;
  };

  return (
    <div className={styles.categoryPage}>
      <div className={styles.header}>
        <h1>{displayCategory}</h1>
        <p>{getCategoryDescription(displayCategory)}</p>
      </div>

      <div className={styles.container}>
        <div className={styles.courseGrid}>
          <div className={styles.resultsInfo}>
            <p>Showing {filteredCourses.length} courses in {displayCategory}</p>
          </div>

          {filteredCourses.length > 0 ? (
            <div className={styles.grid}>
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>No courses found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
