import React from 'react';
import styles from './growth-skeleton.module.scss';

export default function FamilyGrowthSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.category} />
      <div className={styles.profile} />
      <div className={styles.profile} />
    </div>
  );
}
