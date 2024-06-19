import DropdownMenu from '@/components/kebab/kebab';
import styles from './diary-comment.module.scss';
import useToggle from '@/hooks/use-toggle';
import CalendarTodoProfile from '@/components/calendar-monthly/calendar-todo-profile';
import { Comment } from '@/api/diaries';

interface DiaryCommentProps {
  comment: Comment;
}

export default function DiaryComment({ comment }: DiaryCommentProps) {
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
              <DropdownMenu.Item onClick={() => {}}>삭제</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        )}
      </div>

      <p className={styles.commentDate}>{comment.date}</p>
      <p className={styles.commentContent}>{comment.comment}</p>
      <p className={styles.commentReply}>답글</p>
    </div>
  );
}
