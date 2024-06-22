import React, { MouseEvent } from 'react';
import Image from 'next/image';
import styles from './diary-item-info.module.scss';
import { usePostLike } from '@/hooks/queries/story/mutation';
import { Diary } from '@/api/diaries';

interface DiaryItemInfoProps extends Pick<Diary, 'content' | 'favoriteCount' | 'favoriteState' | 'comments'> {
  diaryId: number;
}

export default function DiaryItemInfo(props: DiaryItemInfoProps) {
  const likeMutation = usePostLike(props.favoriteState);
  const handleLikeClick = (event: MouseEvent) => {
    event.preventDefault();
    likeMutation.mutate(props.diaryId);
  };

  const replyCount = props.comments.reduce((prev, cur) => prev + cur.children.length, 0);
  const commentCount = props.comments.length;
  const totalCommentcount = commentCount + replyCount;

  return (
    <article>
      <div className={styles['info-description']}>
        <p>{props.content}</p>
      </div>
      <div className={styles['info-features']}>
        <div className={styles['info-feature']}>
          <Image src="/images/comment-icon.svg" alt="댓글 개수" width={20} height={20} />
          <span>{totalCommentcount}</span>
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
