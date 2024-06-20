import React from 'react';
import { AvatarImage, AvatarName } from '@/components/avatar/avatar';
import styles from './story-item-header.module.scss';
import { Story } from '../../../types/story';

export default function StoryItemHeader(props: Pick<Story, 'content' | 'author' | 'authorImage'>) {
  return (
    <div className={styles['story-header']}>
      <div className={styles['story-header__info']}>
        <div className={styles['header-info-owner']}>
          <AvatarImage image={props.authorImage} />
          <AvatarName>{props.author}</AvatarName>
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
