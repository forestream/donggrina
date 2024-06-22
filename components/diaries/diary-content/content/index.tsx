import React from 'react';
import Link from 'next/link';
import styles from './content.module.scss';

interface ContentProps {
  content: string;
  id: number;
}

const Content: React.FC<ContentProps> = ({ content, id }) => {
  return (
    <div className={styles.contentContainer}>
      <Link href={`/diaries/${id}`}>
        <p className={styles.content}>{content}</p>
      </Link>
    </div>
  );
};

export default Content;
