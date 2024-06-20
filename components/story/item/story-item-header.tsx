import React from 'react';
import { AvatarImage, AvatarName } from '@/components/avatar/avatar';
import styles from './story-item-header.module.scss';

export default function StoryItemHeader() {
  return (
    <div className={styles['story-header']}>
      <div className={styles['story-header__info']}>
        <div className={styles['header-info-owner']}>
          <AvatarImage />
          <AvatarName>배수지</AvatarName>
        </div>
        <div className={styles['header-info-pets']}>
          <AvatarImage />
          <AvatarImage />
          <AvatarImage />
        </div>
      </div>
      <div className={styles['story-header__weather']}></div>
    </div>
  );
}
