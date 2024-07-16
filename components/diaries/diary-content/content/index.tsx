import React from 'react';
// import Link from 'next/link';
import styles from './content.module.scss';

interface ContentProps {
  content: string;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div className={styles.contentContainer}>
      {/* <Link href="/"> */}
      <p className={styles.content}>{content}</p>
      {/* </Link> */}
    </div>
  );
};

export default Content;
