import { Reply } from '@/types/story/details';
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { AvatarImage, AvatarName } from '@/components/avatar/avatar';
import DropdownMenu from '@/components/kebab/kebab';
import useToggle from '@/hooks/use-toggle';
import styles from './story-detail-reply-comment-item.module.scss';
import { useDeleteReplyComment, useUpdateReplyComment } from '@/hooks/queries/story/mutation';

export default function StoryDetailReplyCommentItem(props: Reply) {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();
  const deleteReplyMutation = useDeleteReplyComment();
  const updateReplyMutation = useUpdateReplyComment();

  const [isOpenTextarea, setIsOpenTextarea] = useState(false);

  const handleOpenTextarea = () => setIsOpenTextarea(true);

  const handleCloseTextarea = () => setIsOpenTextarea(false);

  const [updateReplyValue, setUpdateReplyValue] = useState(props.comment);

  const handleUpdateReplyValue: ChangeEventHandler<HTMLTextAreaElement> = (event) =>
    setUpdateReplyValue(event.target.value);

  const handleResetReplyValue = () => setUpdateReplyValue('');

  const handleUpdateSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const value = { commentId: props.commentId, data: { content: updateReplyValue } };
    updateReplyMutation.mutate(value);
    handleCloseTextarea();
  };

  const updateFn = async () => {
    handleOpenTextarea();
    console.log(updateReplyValue);
    onCloseToggle();
  };

  const deleteFn = () => {
    deleteReplyMutation.mutate(props.commentId);
    onCloseToggle();
  };

  return (
    <li className={styles['comment-item']}>
      <div className={styles['comment-item__info']}>
        <AvatarImage image={props.commentAuthorImage} />
        <div>
          <AvatarName>{props.commentAuthor}</AvatarName>
          <time className={styles['comment-item__date']}>{props.date}</time>
        </div>
      </div>
      <div className={styles['comment-item__contents']}>
        {isOpenTextarea ? (
          <form className={styles['reply-form']} onSubmit={handleUpdateSubmit}>
            <textarea value={updateReplyValue} className={styles.textarea} onChange={handleUpdateReplyValue}></textarea>
            <button className={styles['reply-form__button']}>수정하기</button>
          </form>
        ) : (
          <p>{props.comment}</p>
        )}
      </div>
      <div className={styles['comment-item__kebab']}>
        <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
          <DropdownMenu.Kebab color="gray" />
          <DropdownMenu.Content>
            <DropdownMenu.Item onClick={updateFn}>수정</DropdownMenu.Item>
            <DropdownMenu.Item onClick={deleteFn}>삭제</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
    </li>
  );
}
