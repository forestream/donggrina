import React from 'react';
import { AvatarImage, AvatarName } from '@/components/avatar/avatar';
import DiaryDetailReplyComments from '../reply/diary-detail-reply-comments';
import useToggle from '@/hooks/use-toggle';
import styles from './diary-detail-comment-item.module.scss';
import Kebab from '@/components/kebab';

import useTextarea from '@/hooks/utils/use-textarea';
import { Comment } from '@/apis/diaries';
import DiaryDetailReplyUpdateForm from '../reply/diary-detail-reply-update-form';
import { useDeleteComment } from '@/hooks/queries/diary/mutation';

interface DiaryDetailCommentItemProps extends Comment {
  onReplyClick: (data: { author: string; replyId: number }) => void;
}

export default function DiaryDetailCommentItem(props: DiaryDetailCommentItemProps) {
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
          <AvatarImage image={props.commentAuthorImage} />
          <div>
            <AvatarName>{props.commentAuthor}</AvatarName>
            <time className={styles['comment-item__date']}>2024-06-21</time>
          </div>
        </div>
        <div className={styles['comment-item__contents']}>
          {isOpenTextarea ? (
            <DiaryDetailReplyUpdateForm
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
        <DiaryDetailReplyComments replyList={props.children} />
      </li>
    </>
  );
}
