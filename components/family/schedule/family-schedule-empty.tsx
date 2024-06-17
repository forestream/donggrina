import React from 'react';
import Image from 'next/image';
import Hyperlink from '@/components/common/button/hyperlink';
import styles from './family-schedule-empty.module.scss';

export default function FamilyScheduleEmpty() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src="images/family/alert-triangle.svg" alt="" fill />
      </div>
      <p className={styles.content}>오늘의 일정이 없습니다!</p>
      <div className={styles.link}>
        <Hyperlink href="/" className="primary" round>
          <Image src="images/family/add-black-icon.svg" alt="" width="20" height="20" className={styles.icon} />
          다이어리 작성하러 가기
        </Hyperlink>
      </div>
    </div>
  );
}
