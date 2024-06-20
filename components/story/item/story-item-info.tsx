import React from 'react';
import styles from './story-item-info.module.scss';
import Image from 'next/image';
import { Story } from '@/types/story';
import CalendarInstance from '@/utils/date/date.utils';

export default function StoryItemInfo(
  props: Pick<Story, 'authorGroup' | 'date' | 'content' | 'favoriteCount' | 'commentCount'>,
) {
  return (
    <article>
      <div className={styles['info-layout']}>
        <time>{CalendarInstance.getDateTime(props.date)}</time>
        <span>{props.authorGroup}</span>
      </div>
      <div className={styles['info-description']}>
        <p>{props.content}</p>
      </div>
      <div className={styles['info-features']}>
        <div className={styles['info-feature']}>
          <Image src="images/comment-icon.svg" alt="댓글 개수" width={20} height={20} />
          <span>{props.commentCount}</span>
        </div>
        <div className={styles['info-feature']}>
          <Image src="images/like-icon.svg" alt="좋아요 개수" width={20} height={20} />
          <span>{props.favoriteCount}</span>
        </div>
      </div>
    </article>
  );
}
