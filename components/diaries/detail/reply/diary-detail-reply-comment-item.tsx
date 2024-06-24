import { Reply } from '@/types/story/details';
import { AvatarImage, AvatarName } from '@/components/avatar/avatar';
import useToggle from '@/hooks/use-toggle';
import useTextarea from '@/hooks/utils/use-textarea';
import styles from './diary-detail-reply-comment-item.module.scss';

import Kebab from '@/components/kebab';
import StoryDetailReplyUpdateForm from '@/components/story/detail/reply/story-detail-reply-update-form';
import { useDeleteReplyComment } from '@/hooks/queries/diary/mutation';

export default function DiaryDetailReplyCommentItem(props: Reply) {
  const {
    isToggle: isOpenTextarea,
    handleCloseToggle: handleCloseTextarea,
    handleOpenToggle: handleOpenTextarea,
  } = useToggle();

  const deleteReplyMutation = useDeleteReplyComment();

  const { value: updateReplyValue, handleValueChange: handleUpdateReplyValue } = useTextarea(props.comment);

  const updateFn = async () => handleOpenTextarea();
  const deleteFn = () => deleteReplyMutation.mutate(props.commentId);

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
      <div className={styles['comment-item__kebab']}>
        <Kebab updateFn={updateFn} deleteFn={deleteFn} />
      </div>
    </li>
  );
}
