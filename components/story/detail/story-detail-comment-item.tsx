import React from 'react';
import { AvatarImage, AvatarName } from '../../avatar/avatar';
import DropdownMenu from '../../kebab/kebab';
import { StoryComment } from '../../../types/story/details';
import styles from './story-detail-comment-item.module.scss';
import useToggle from '../../../hooks/use-toggle';

interface StoryDetailCommentItemProps extends StoryComment {
  onReplyClick: (id: number) => void;
}

export default function StoryDetailCommentItem(props: StoryDetailCommentItemProps) {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  const updateFn = () => {
    console.log('Update');
    onCloseToggle();
  };

  const deleteFn = () => {
    console.log('Delete');
    onCloseToggle();
  };

  return (
    <li className={styles['comment-item']}>
      <div className={styles['comment-item__info']}>
        <AvatarImage image={props.commentsAuthorProfile} />
        <div>
          <AvatarName>{props.commentAuthor}</AvatarName>
          <time className={styles['comment-item__date']}>2024-06-21</time>
        </div>
      </div>
      <div className={styles['comment-item__contents']}>
        <p>{props.comment}</p>
      </div>
      <button className={styles['comment-item__reply']} onClick={props.onReplyClick.bind(null, props.commentId)}>
        댓글
      </button>
      <div className={styles['comment-item__kebab']}>
        <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
          <DropdownMenu.Kebab />
          <DropdownMenu.Content>
            <DropdownMenu.Item onClick={updateFn}>수정</DropdownMenu.Item>
            <DropdownMenu.Item onClick={deleteFn}>삭제</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
    </li>
  );
}
