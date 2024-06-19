import DropdownMenu from '@/components/kebab/kebab';
import styles from './diary-comment.module.scss';
import useToggle from '@/hooks/use-toggle';
import CalendarTodoProfile from '@/components/calendar-monthly/calendar-todo-profile';
import { Comment } from '@/api/diaries';
import useParentCommentMutation from '@/hooks/queries/diary/use-parent-comment-mutation';
import { useState } from 'react';
import DiaryCommentForm from './diary-comment-form';
import DiaryCommentReply from './diary-comment-reply';
import useCommentMutation from '@/hooks/queries/diary/use-comment-mutation';

interface DiaryCommentProps {
  comment: Comment;
  diaryId: string;
}

export default function DiaryComment({ comment, diaryId }: DiaryCommentProps) {
  const [isReplying, setIsReplying] = useState(false);

  const commentMutation = useCommentMutation(diaryId);
  const parentCommentMutation = useParentCommentMutation(diaryId, comment.commentId);

  const handleDelete = () => parentCommentMutation.mutate();

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
              <DropdownMenu.Item onClick={() => {}}>수정</DropdownMenu.Item>
              <DropdownMenu.Item onClick={handleDelete}>삭제</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        )}
      </div>

      <p className={styles.commentDate}>{comment.date}</p>
      <p className={styles.commentContent}>{comment.comment}</p>
      <button onClick={handleClickReply} className={styles.commentReply}>
        답글
      </button>
      {isReplying && (
        <>
          {comment.children.map((child) => (
            <DiaryCommentReply key={child.commentId} comment={child} diaryId={diaryId} />
          ))}
          <DiaryCommentForm
            mutateFn={commentMutation.mutate}
            placeholder="답글 입력..."
            parentCommentId={comment.commentId}
          />
        </>
      )}
    </div>
  );
}
