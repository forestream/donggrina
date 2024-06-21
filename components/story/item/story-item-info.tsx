import React, { MouseEvent } from 'react';
import Image from 'next/image';
import { Story } from '@/types/story';
import CalendarInstance from '@/utils/date/date.utils';
import styles from './story-item-info.module.scss';
import { usePostLike } from '@/hooks/queries/story/mutation';

interface StoryItemInfoProps
  extends Pick<Story, 'authorGroup' | 'date' | 'content' | 'favoriteCount' | 'commentCount' | 'favoriteState'> {
  storyId: number;
}

export default function StoryItemInfo(props: StoryItemInfoProps) {
  const likeMutation = usePostLike(props.favoriteState);
  const handleLikeClick = (event: MouseEvent) => {
    event.preventDefault();
    likeMutation.mutate(props.storyId);
  };

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
          <Image src="/images/comment-icon.svg" alt="댓글 개수" width={20} height={20} />
          <span>{props.commentCount}</span>
        </div>
        <div className={styles['info-feature']}>
          <button onClick={handleLikeClick}>
            {props.favoriteState ? (
              <Image src="/images/like-active-icon.svg" alt="좋아요 개수" width={20} height={20} />
            ) : (
              <Image src="/images/like-icon.svg" alt="좋아요 개수" width={20} height={20} />
            )}
          </button>
          <span>{props.favoriteCount}</span>
        </div>
      </div>
    </article>
  );
}
