import React from 'react';
import styles from './content.module.scss';

interface ContentProps {
  content: string;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Content;
