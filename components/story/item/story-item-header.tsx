import React from 'react';
import { AvatarImage, AvatarName } from '@/components/avatar/avatar';
import { Story } from '../../../types/story';
import { WEATHER_TYPES } from '@/lib/constants/diaries-constants';
import Image from 'next/image';
import styles from './story-item-header.module.scss';

export default function StoryItemHeader(
  props: Pick<Story, 'content' | 'author' | 'authorImage' | 'weather' | 'petImages' | 'images'>,
) {
  const weather = WEATHER_TYPES.find((weather) => weather.label === props.weather);

  const noImageStyle = props.images.length === 0 ? { marginBottom: '24px' } : undefined;

  return (
    <div className={styles['story-header']} style={noImageStyle}>
      <div className={styles['story-header__info']}>
        <div className={styles['header-info-owner']}>
          <AvatarImage image={props.authorImage} />
          <AvatarName>{props.author}</AvatarName>
        </div>
        <div className={styles['header-info-pets']}>
          {props.petImages.map((image, index) => (
            <AvatarImage image={image} key={image + index} />
          ))}
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
