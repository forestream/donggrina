import React from 'react';
import Avatar from '@/components/avatar/avatar';
import styles from './family-diary-item.module.scss';
import { DiaryData } from '@/types/diary';
import Image from 'next/image';

export default function FamilyDiaryItem(props: DiaryData) {
  const isImage = props.contentImage;
  const isImageClassName = isImage ? `${styles['diary-card']} ${styles.isImage}` : styles['diary-card'];

  return (
    <div className={isImageClassName}>
      <div className={styles['diary-card__profile']}>
        <Avatar image={props.authorImage} name={props.author} />
      </div>
      <div className={styles['diary-card__contents']}>
        <p className={styles['content-text']}>{props.content}</p>
        <div className={styles['content-image']}>
          {isImage && <Image src={props.contentImage} alt="이미지 썸네일" fill />}
        </div>
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
