import React from 'react';
import styles from './list.module.scss';
import Link from 'next/link';
import ListHeader from './list-header';

interface GrowthListProps {
  text: string;
  writer: string;
  pet: string;
  categoryName: string;
}

export default function GrowthList({ text, writer, pet, categoryName }: GrowthListProps) {
  return (
    <div className={styles.container}>
      <ListHeader writer={writer} categoryName={categoryName} pet={pet} />
      <Link href="/" className={styles.text}>
        text text text text text text text text text text texttext texttext texttext text text text text
      </Link>
    </div>
  );
}
