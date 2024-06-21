import React from 'react';
import styles from './content-image.module.scss';

interface ContentImageProps {
  contentImage?: string;
}

const ContentImage: React.FC<ContentImageProps> = ({ contentImage }) => {
  if (!contentImage) return null;

  return (
    <div className={styles.diarycontentImage}>
      <img src={contentImage} alt="content image" className={styles.diaryImage} />
    </div>
  );
};

export default ContentImage;
