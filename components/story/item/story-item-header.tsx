import React from 'react';
import { AvatarImage, AvatarName } from '@/components/avatar/avatar';
import { Story } from '../../../types/story';
import { WEATHER_TYPES } from '@/lib/constants/diaries-constants';
import Image from 'next/image';
import styles from './story-item-header.module.scss';

export default function StoryItemHeader(props: Pick<Story, 'content' | 'author' | 'authorImage' | 'weather'>) {
  const weather = WEATHER_TYPES.find((weather) => weather.label === props.weather);

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
      {weather && (
        <div className={styles['story-header__weather']}>
          <Image src={weather.selectedIcon} alt={weather.label} width={24} height={24} />
        </div>
      )}
    </div>
  );
}
