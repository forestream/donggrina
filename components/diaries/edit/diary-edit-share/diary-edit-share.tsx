import React from 'react';
import styles from './diary-edit-share.module.scss';
import { useFormContext } from 'react-hook-form';

export default function DiaryEditShare() {
  const { register } = useFormContext();

  return (
    <div className={styles.storyshareContainer}>
      <div className={styles.storyshare}>스토리에 공유하기</div>
      <label className={styles.toggle}>
        <input type="checkbox" {...register('isShare')} />
        <span className={styles.toggleSlide}></span>
      </label>
    </div>
  );
}
