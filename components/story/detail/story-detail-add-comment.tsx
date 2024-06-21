import React, { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react';
import styles from './story-detail-add-comment.module.scss';
import { useCreateComment } from '@/hooks/queries/story/mutation';

interface StoryDetailAddCommentProps {
  storyId: number;
  replyId: number | null;
  onReplyReset: () => void;
}

export default function StoryDetailAddComment(props: StoryDetailAddCommentProps) {
  const [commentValue, setCommentValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  };

  const handleCommentChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => setCommentValue(event.target.value);

  const isDisbaled = commentValue.trim().length === 0;

  const commentMutation = useCreateComment();

  const handleResetComment = () => setCommentValue('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    let data: { content: string; parentCommentId: number | null };

    if (props.replyId) {
      data = { content: commentValue, parentCommentId: props.replyId };
    } else {
      data = { content: commentValue, parentCommentId: null };
    }

    commentMutation.mutate({ diaryId: props.storyId, data });
    handleResetComment();
    props.onReplyReset();
  };

  return (
    <div className={styles.layout}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          placeholder="댓글을 입력하세요"
          ref={textareaRef}
          onInput={handleResizeHeight}
          rows={1}
          onChange={handleCommentChange}
          value={commentValue}
        ></textarea>
        <button className={styles.submit} type="submit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.93917 12.6463L7.69193 11.8972L7.69192 11.8972L7.69192 11.8972C5.33871 11.1128 4.16211 10.7206 4.16211 9.99985C4.16211 9.27909 5.33872 8.88689 7.69193 8.10249L16.2051 5.26476C17.8609 4.71283 18.6888 4.43687 19.1258 4.87388C19.5628 5.3109 19.2869 6.1388 18.7349 7.79459L15.8972 16.3078L15.8972 16.3078L15.8972 16.3078C15.1128 18.661 14.7206 19.8376 13.9998 19.8376C13.2791 19.8376 12.8869 18.661 12.1025 16.3078L11.3534 14.0605L15.7069 9.70696C16.0975 9.31643 16.0975 8.68327 15.7069 8.29275C15.3164 7.90222 14.6832 7.90222 14.2927 8.29275L9.93917 12.6463Z"
              fill={isDisbaled ? '#9E9E9E' : '#8FCC93'}
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
