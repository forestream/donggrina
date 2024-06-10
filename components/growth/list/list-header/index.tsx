import React from 'react';
import styles from './list-header.module.scss';

interface ListHeaderProps {
  categoryName: string;
  writer: string;
}

export default function ListHeader({ categoryName, writer }: ListHeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.category}>
        <div className={styles.categoryIcon} />
        <div className={styles.categoryName}>{categoryName}</div>
      </div>
      <div className={styles.writer}>{writer}</div>
    </div>
  );
}
