import React from 'react';
import styles from './image.module.scss';

const ImageSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonProfile}></div>
      <div className={styles.skeletonName}></div>
    </div>
  );
};

export default ImageSkeleton;
