import React from 'react';
import styles from './content.module.scss';

const Content = ({ content }) => {
  return (
    <div>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Content;
