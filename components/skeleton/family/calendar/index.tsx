import React from 'react';
import styles from './calendar-skeleton.module.scss';

export default function FamilyCalendarSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.category} />
        <div className={styles.content}>
          <div className={styles.title} />
          <div className={styles.profile} />
        </div>
      </div>
      <div className={styles.check} />
    </div>
  );
}
