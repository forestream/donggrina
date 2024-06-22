import React from 'react';
import DropdownMenu from '@/components/kebab/kebab';
import { AvatarImage, AvatarName } from '@/components/avatar/avatar';
import StoryDetailReplyComments from '@/components/story/detail/reply/story-detail-reply-comments';
import useToggle from '@/hooks/use-toggle';
import { useDeleteComment } from '@/hooks/queries/story/mutation';
import { StoryComment } from '@/types/story/details';
import styles from './story-detail-comment-item.module.scss';

interface StoryDetailCommentItemProps extends StoryComment {
  onReplyClick: (data: { author: string; replyId: number }) => void;
}

export default function StoryDetailCommentItem(props: StoryDetailCommentItemProps) {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  const deleteMutation = useDeleteComment();

  const updateFn = () => {
    console.log('Update');
    onCloseToggle();
  };

  const deleteFn = () => {
    deleteMutation.mutate(props.commentId);
    onCloseToggle();
  };

  return (
    <>
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
        <button
          className={styles['comment-item__reply']}
          onClick={props.onReplyClick.bind(null, { author: props.commentAuthor, replyId: props.commentId })}
        >
          댓글
        </button>
        <div className={styles['comment-item__kebab']}>
          <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
            <DropdownMenu.Kebab color="gray" />
            <DropdownMenu.Content>
              <DropdownMenu.Item onClick={updateFn}>수정</DropdownMenu.Item>
              <DropdownMenu.Item onClick={deleteFn}>삭제</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
        <StoryDetailReplyComments replyList={props.children} />
      </li>
    </>
  );
}
