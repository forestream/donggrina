import React from 'react';
import styles from './diary-skeleton.module.scss';

export default function FamilyDiarySkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.profile} />
        <div className={styles.name} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text} />
        <div className={styles.text} />
        <div className={styles.text} />
      </div>
    </div>
  );
}
