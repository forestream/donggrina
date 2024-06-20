import DropdownMenu from '@/components/kebab/kebab';
import styles from './diary-comment-reply.module.scss';
import useToggle from '@/hooks/use-toggle';
import CalendarTodoProfile from '@/components/calendar-monthly/calendar-todo-profile';
import { Child } from '@/api/diaries';
import useChildCommentMutation from '@/hooks/queries/diary/use-child-comment-mutation';
import { useState } from 'react';
import DiaryCommentEdit from './diary-comment-edit';
import useCommentPutMutation from '@/hooks/queries/diary/use-comment-put-mutation';

interface DiaryCommentReplyProps {
  comment: Child;
  diaryId: string;
}

export default function DiaryCommentReply({ comment, diaryId }: DiaryCommentReplyProps) {
  const [isEditing, setIsEditing] = useState(false);

  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  const commentPutMutation = useCommentPutMutation(diaryId, comment.commentId);
  const childCommentMutation = useChildCommentMutation(diaryId, comment.commentId);

  const handleEdit = () => {
    setIsEditing(true);
    onCloseToggle();
  };

  const handleCancel = () => setIsEditing(false);

  const handleDelete = () => childCommentMutation.mutate();

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
    </div>
  );
}
