import React from 'react';
import styles from './list.module.scss';
import Link from 'next/link';
import ListHeader from './list-header';
import ListFooter from './list-footer';

interface GrowthListProps {
  text: string;
  writer: string;
  categoryName: string;
}

export default function GrowthList({ text, writer, categoryName }: GrowthListProps) {
  return (
    <Link href="/" className={styles.container}>
      <ListHeader writer={writer} categoryName={categoryName} />
      <div className={styles.text}>{text}</div>
      <ListFooter />
    </Link>
  );
}
