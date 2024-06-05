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
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
}
