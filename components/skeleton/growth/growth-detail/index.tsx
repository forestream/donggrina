import React from 'react';
import styles from './growth-detail.module.scss';

export default function GrowthDetailSkeleton() {
  return (
    <div className={styles.inner}>
      <div className={styles.headerContainer}>
        <div className={styles.image} />
        <div className={styles.headerText}>
          <div className={styles.categoryName} />
          <div className={styles.profile} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.title} />
        <div className={styles.content} />
      </div>
    </div>
  );
}
