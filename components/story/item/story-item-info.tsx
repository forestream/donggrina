import React from 'react';
import styles from './story-item-info.module.scss';
import Image from 'next/image';

export default function StoryItemInfo() {
  return (
    <div>
      <div className={styles['info-layout']}>
        <time>2024-06-20</time>
        <span>가족이름명</span>
      </div>
      <div className={styles['info-description']}>
        <p>오늘 뽀삐랑 같이 산책을 다녀왔어!</p>
      </div>
      <div className={styles['info-features']}>
        <div className={styles['info-feature']}>
          <Image src="images/comment-icon.svg" alt="댓글 개수" width={20} height={20} />
          <span>0</span>
        </div>
        <div className={styles['info-feature']}>
          <Image src="images/like-icon.svg" alt="좋아요 개수" width={20} height={20} />
          <span>0</span>
        </div>
      </div>
    </div>
  );
}
