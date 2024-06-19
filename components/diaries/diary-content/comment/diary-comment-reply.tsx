import DropdownMenu from '@/components/kebab/kebab';
import styles from './diary-comment-reply.module.scss';
import useToggle from '@/hooks/use-toggle';
import CalendarTodoProfile from '@/components/calendar-monthly/calendar-todo-profile';
import { Child } from '@/api/diaries';
import useChildCommentMutation from '@/hooks/queries/diary/use-child-comment-mutation';

interface DiaryCommentReplyProps {
  comment: Child;
  diaryId: string;
}

export default function DiaryCommentReply({ comment, diaryId }: DiaryCommentReplyProps) {
  const childCommentMutation = useChildCommentMutation(diaryId, comment.commentId);

  const handleDelete = () => childCommentMutation.mutate();

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
    </div>
  );
}
