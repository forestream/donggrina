import React from 'react';
import Image from 'next/image';
import Avatar from '@/components/avatar/avatar';
import FamilyDiaryEmpty from '@/components/family/diary/family-diary-empty';
import styles from './family-diary.module.scss';

export default function FamilyDiary() {
  const isImage = true;
  const isImageClassName = isImage ? `${styles['diary-card']} ${styles.isImage}` : styles['diary-card'];

  return <FamilyDiaryEmpty />;

  return (
    <div className={styles['wrapper']}>
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
      </div>
      <div className={styles['diary-image']}>
        <Image src="/images/family/family-dog-icon.svg" alt="" fill />
      </div>
    </div>
  );
}
