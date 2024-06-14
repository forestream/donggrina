import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './family-diary-empty.module.scss';

export default function FamilyDiaryEmpty() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['diary-card']}>
        <p className={styles['diary-card__text']}>다이어리에 아직 작성 된 내용이 없어요!</p>
        <Link href="/" className={styles['diary-card__button']}>
          <Image src="images/family/add-black-icon.svg" alt="" width="20" height="20" />
          다이어리 작성하러 가기
        </Link>
        <div className={styles.ballon}>
          <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8.50555 14C10.0452 16.6667 13.8941 16.6667 15.4338 14L22.9393 1H1Z" fill="white" />
            <path
              d="M1 1L8.50555 14C10.0452 16.6667 13.8941 16.6667 15.4338 14L22.9393 1"
              stroke="#d9d9d9"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      <div className={styles['diary-image']}>
        <Image src="/images/family/family-dog-icon.svg" alt="" fill />
      </div>
    </div>
  );
}
