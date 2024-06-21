import React from 'react';
import { StoryComment } from '@/types/story/details';
import StoryDetailCommentItem from '@/components/story/detail/story-detail-comment-item';
import styles from './story-detail-comments.module.scss';

interface StoryDetailCommentsProps {
  comments: StoryComment[];
  onReplyClick: (id: number) => void;
}

export default function StoryDetailComments(props: StoryDetailCommentsProps) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles['comment-list']}>
        {props.comments.map((comment) => (
          <StoryDetailCommentItem key={comment.commentId} {...comment} onReplyClick={props.onReplyClick} />
        ))}
      </ul>
    </div>
  );
}
