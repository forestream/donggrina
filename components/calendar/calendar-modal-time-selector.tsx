import { TIME_SELECTOR } from '@/lib/constants/calendar-constants';
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
          {TIME_SELECTOR.AM_PM.map((amPm) => (
            <div className={styles.amPm}>{amPm}</div>
          ))}
        </div>
        <div className={styles.scroller}>
          {TIME_SELECTOR.HOURS.map((hour) => (
            <div className={styles.hour}>{hour}</div>
          ))}
        </div>
        <div className={styles.scroller}>
          {TIME_SELECTOR.MINUTES.map((minute) => (
            <div className={styles.minute}>{minute}</div>
          ))}
        </div>
      </div>
    </>
  );
}
