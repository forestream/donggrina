import { FormEvent, FormEventHandler, KeyboardEventHandler } from 'react';
import { useCreateComment } from '@/hooks/queries/story/mutation';
import useRouterId from '@/hooks/utils/use-router-id';
import useTextarea from '@/hooks/utils/use-textarea';
import styles from './story-detail-add-comment.module.scss';

interface StoryDetailAddCommentProps {
  replyOwner: { author: string; replyId: number } | null;
  onReplyReset: () => void;
}

export default function StoryDetailAddComment(props: StoryDetailAddCommentProps) {
  const storyId = +useRouterId('storyId');
  const { ref, value, isDisbaled, handleValueChange, handleResizeHeight, handleResetValue } = useTextarea();
  const commentMutation = useCreateComment();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (isDisbaled) return;

    const data = props.replyOwner
      ? { content: value, parentCommentId: props.replyOwner.replyId }
      : { content: value, parentCommentId: null };

    commentMutation.mutate({ diaryId: storyId, data });
    handleResetValue();
    handleResizeHeight();
    props.onReplyReset();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.nativeEvent.isComposing) return;
    if (event.key === 'Enter' && event.shiftKey) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(event as unknown as FormEvent<HTMLFormElement>);
      handleResetValue();
    }
  };

  const textareaClassName = `${isDisbaled ? '' : styles.active} ${styles.textarea}`;

  return (
    <div className={styles.layout}>
      {props.replyOwner && (
        <span className={styles.reply}>{props.replyOwner.author}님에게 댓글을 남기는 중입니다..</span>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={textareaClassName}
          placeholder="댓글을 입력하세요"
          ref={ref}
          rows={1}
          value={value}
          onInput={handleResizeHeight}
          onChange={handleValueChange}
          onKeyDown={handleKeyDown}
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
