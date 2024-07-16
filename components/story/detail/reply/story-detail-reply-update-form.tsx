import React, { ChangeEvent, FormEvent, FormEventHandler, KeyboardEventHandler } from 'react';
import { useUpdateReplyComment } from '@/hooks/queries/story/mutation';
import styles from './story-detail-reply-update-form.module.scss';

interface ReplyUpdateForm {
  commentId: number;
  updateReplyValue: string;
  onCloseTextarea: () => void;
  onUpdateReplyValue: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function StoryDetailReplyUpdateForm(props: ReplyUpdateForm) {
  const updateReplyMutation = useUpdateReplyComment();

  const handleUpdateSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const value = { commentId: props.commentId, data: { content: props.updateReplyValue } };
    updateReplyMutation.mutate(value);
    props.onCloseTextarea();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === 'Escape') return props.onCloseTextarea();
    if (event.nativeEvent.isComposing) return;
    if (event.key === 'Enter' && event.shiftKey) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      handleUpdateSubmit(event as unknown as FormEvent<HTMLFormElement>);
    }
  };

  return (
    <form className={styles['reply-form']} onSubmit={handleUpdateSubmit}>
      <textarea
        value={props.updateReplyValue}
        className={styles.textarea}
        onChange={props.onUpdateReplyValue}
        onKeyDown={handleKeyDown}
      ></textarea>
      <button className={styles['reply-form__button']}>수정하기</button>
    </form>
  );
}
