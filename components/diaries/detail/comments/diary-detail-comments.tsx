import React from 'react';

import styles from './diary-detail-comments.module.scss';
import { Comment } from '@/apis/diaries';
import DiaryDetailCommentItem from '../comment-item/diary-detail-comment-item';

interface DiaryDetailCommentsProps {
  comments: Comment[];
  onReplyClick: (data: { author: string; replyId: number }) => void;
}

export default function DiaryDetailComments(props: DiaryDetailCommentsProps) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles['comment-list']}>
        {props.comments.map((comment) => (
          <DiaryDetailCommentItem key={comment.commentId} {...comment} onReplyClick={props.onReplyClick} />
        ))}
      </ul>
    </div>
  );
}
