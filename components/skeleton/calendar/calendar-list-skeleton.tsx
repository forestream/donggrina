import styles from './calendar-list-skeleton.module.scss';

export default function CalendarListSkeleton() {
  return (
    <ul className={styles.calendarListSkeleton}>
      <li>
        <div className={styles.contentsBox}>
          <div className={styles.imgBox}></div>
          <div className={styles.textBox}>
            <strong></strong>
            <p></p>
          </div>
        </div>
        <div className={styles.checkBox}></div>
      </li>
      <li>
        <div className={styles.contentsBox}>
          <div className={styles.imgBox}></div>
          <div className={styles.textBox}>
            <strong></strong>
            <p></p>
          </div>
        </div>
        <div className={styles.checkBox}></div>
      </li>
      <li>
        <div className={styles.contentsBox}>
          <div className={styles.imgBox}></div>
          <div className={styles.textBox}>
            <strong></strong>
            <p></p>
          </div>
        </div>
        <div className={styles.checkBox}></div>
      </li>
    </ul>
  );
}
