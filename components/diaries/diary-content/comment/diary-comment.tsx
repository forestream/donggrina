import DropdownMenu from '@/components/kebab/kebab';
import styles from './diary-comment.module.scss';
import useToggle from '@/hooks/use-toggle';
import CalendarTodoProfile from '@/components/calendar-monthly/calendar-todo-profile';
import { Comment } from '@/api/diaries';
import useParentCommentMutation from '@/hooks/queries/diary/use-parent-comment-mutation';
import { useState } from 'react';
import DiaryCommentForm from './diary-comment-form';
import DiaryCommentReply from './diary-comment-reply';
import useCommentPostMutation from '@/hooks/queries/diary/use-comment-post-mutation';
import DiaryCommentEdit from './diary-comment-edit';
import useCommentPutMutation from '@/hooks/queries/diary/use-comment-put-mutation';

interface DiaryCommentProps {
  comment: Comment;
  diaryId: string;
}

export default function DiaryComment({ comment, diaryId }: DiaryCommentProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const commentPostMutation = useCommentPostMutation(diaryId);
  const commentPutMutation = useCommentPutMutation(diaryId, comment.commentId);
  const parentCommentMutation = useParentCommentMutation(diaryId, comment.commentId);

  const handleDelete = () => parentCommentMutation.mutate();
  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);

  const handleClickReply = () => {
    setIsReplying(!isReplying);
  };

  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  return (
    <div className={styles.outer} key={comment.commentId}>
      <div className={styles.commentProfile}>
        <CalendarTodoProfile name={comment.commentAuthor} src={comment.commentAuthorImage} />
        {comment.isMyComment && (
          <DropdownMenu value={{ isOpen, onCloseToggle, onOpenToggle }}>
            <DropdownMenu.Kebab />
            <DropdownMenu.Content>
              <DropdownMenu.Item onClick={handleEdit}>수정</DropdownMenu.Item>
              <DropdownMenu.Item onClick={handleDelete}>삭제</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        )}
      </div>
      <p className={styles.commentDate}>{comment.date}</p>
      {isEditing ? (
        <DiaryCommentEdit
          defaultValue={comment.comment}
          mutationFn={commentPutMutation.mutate}
          onCancel={handleCancel}
        />
      ) : (
        <p className={styles.commentContent}>{comment.comment}</p>
      )}
      <button onClick={handleClickReply} className={styles.commentReply}>
        답글
      </button>
      {isReplying && (
        <>
          {comment.children.map((child) => (
            <DiaryCommentReply key={child.commentId} comment={child} diaryId={diaryId} />
          ))}
          <DiaryCommentForm
            mutateFn={commentPostMutation.mutate}
            placeholder="답글 입력..."
            parentCommentId={comment.commentId}
          />
        </>
      )}
    </div>
  );
}
