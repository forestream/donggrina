import styles from './calendar-modal-time-selector.module.scss';

export default function CalendarModalTimeSelector({ hour, minute }) {
  return (
    <>
      <div className={styles.selected}>
        <span>오후</span>
        <span>{hour.toString().padStart(2, '0')}</span>
        <span>{minute.toString().padStart(2, '0')}</span>
      </div>
      <div className={styles.selector}>
        <div className={styles.scroller}>
          <div className={styles.amPm}></div>
        </div>
        <div className={styles.scroller}>
          <div className={styles.hours}></div>
        </div>
        <div className={styles.scroller}>
          <div className={styles.minutes}></div>
        </div>
      </div>
    </>
  );
}
