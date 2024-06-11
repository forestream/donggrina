import Image from 'next/image';
import styles from './calendar-todo.module.scss';

export default function CalendarTodo() {
  return (
    <div className={styles.outer}>
      <div className={styles.owner}>이미지</div>
      <div className={styles.todo}>
        <div>할일</div>
        <div>동물</div>
      </div>
      <label className={styles.checkContainer}>
        <input className={styles.checkbox} type="checkbox" />
        <div className={styles.checkmarkContainer}>
          <Image className={styles.checkmark} src="/images/calendar/check.svg" alt="체크 표시" width={14} height={14} />
        </div>
      </label>
    </div>
  );
}
