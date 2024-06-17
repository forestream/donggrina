import React from 'react';
import Avatar from '@/components/avatar/avatar';
import styles from './family-diary-item.module.scss';

export default function FamilyDiaryItem() {
  const isImage = false;
  const isImageClassName = isImage ? `${styles['diary-card']} ${styles.isImage}` : styles['diary-card'];

  return (
    <div className={isImageClassName}>
      <div className={styles['diary-card__profile']}>
        <Avatar />
      </div>
      <div className={styles['diary-card__contents']}>
        <p className={styles['content-text']}>
          오늘 뽀삐랑 같이 산책을 다녀왔어!오늘 뽀삐랑 같이 산책을 다녀왔어! ...오늘 뽀삐랑 같이 산책을 다녀왔어!오늘
          뽀삐랑 같이 산책을 다녀왔어! ...오늘 뽀삐랑 같이 산책을 다녀왔어!오늘 뽀삐랑 같이 산책을 다녀왔어! ...
        </p>
        <div className={styles['content-image']}></div>
      </div>
      <div className={styles.ballon}>
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L8.50555 14C10.0452 16.6667 13.8941 16.6667 15.4338 14L22.9393 1H1Z" fill="white" />
          <path
            d="M1 1L8.50555 14C10.0452 16.6667 13.8941 16.6667 15.4338 14L22.9393 1"
            stroke="#8fcc93"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
