import React from 'react';
import styles from './growth-list.module.scss';

export default function GrowthListSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.Image} />
        <div className={styles.subHeader}>
          <div className={styles.categoryName} />
          <div className={styles.profile} />
        </div>
      </div>
      <div className={styles.text} />
    </div>
  );
}
