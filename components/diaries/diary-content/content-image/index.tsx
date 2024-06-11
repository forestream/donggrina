import React from 'react';
import styles from './content-image.module.scss';
import ContentsImage from '@/public/images/diaries/content-image.svg';

const ContentImage = () => {
  return (
    <div className={styles.diarycontentImage}>
      <ContentsImage alt="content image" />
    </div>
  );
};

export default ContentImage;
