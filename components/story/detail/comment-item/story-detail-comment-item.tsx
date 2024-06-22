import React from 'react';
import { AvatarImage, AvatarName } from '@/components/avatar/avatar';
import StoryDetailReplyComments from '@/components/story/detail/reply/story-detail-reply-comments';
import useToggle from '@/hooks/use-toggle';
import { useDeleteComment } from '@/hooks/queries/story/mutation';
import { StoryComment } from '@/types/story/details';
import styles from './story-detail-comment-item.module.scss';
import Kebab from '@/components/kebab';
import StoryDetailReplyUpdateForm from '../reply/story-detail-reply-update-form';
import useTextarea from '@/hooks/utils/use-textarea';

interface StoryDetailCommentItemProps extends StoryComment {
  onReplyClick: (data: { author: string; replyId: number }) => void;
}

export default function StoryDetailCommentItem(props: StoryDetailCommentItemProps) {
  const {
    isToggle: isOpenTextarea,
    handleCloseToggle: handleCloseTextarea,
    handleOpenToggle: handleOpenTextarea,
  } = useToggle();

  const deleteMutation = useDeleteComment();
  const { value: updateReplyValue, handleValueChange: handleUpdateReplyValue } = useTextarea(props.comment);

  const updateFn = async () => handleOpenTextarea();
  const deleteFn = () => deleteMutation.mutate(props.commentId);

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
          {isOpenTextarea ? (
            <StoryDetailReplyUpdateForm
              commentId={props.commentId}
              updateReplyValue={updateReplyValue}
              onCloseTextarea={handleCloseTextarea}
              onUpdateReplyValue={handleUpdateReplyValue}
            />
          ) : (
            <p>{props.comment}</p>
          )}
        </div>
        <button
          className={styles['comment-item__reply']}
          onClick={props.onReplyClick.bind(null, { author: props.commentAuthor, replyId: props.commentId })}
        >
          댓글
        </button>
        <div className={styles['comment-item__kebab']}>
          <Kebab updateFn={updateFn} deleteFn={deleteFn} />
        </div>
        <StoryDetailReplyComments replyList={props.children} />
      </li>
    </>
  );
}
