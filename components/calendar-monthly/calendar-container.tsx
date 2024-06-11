import styles from './calendar-container.module.scss';
import { CalendarProps } from '@/pages/calendar';
import getSeventhDate from '@/utils/get-seventh-date';
import { useCalendarContext } from '../calendar-compound/calendar';
import getCalendarArray from '@/utils/get-calendar-array';

export default function CalendarContainer({ year }: CalendarProps) {
  const calendarContext = useCalendarContext();
  const date = calendarContext.date;
  const month = calendarContext.month + 1;

  const calendarArray = getCalendarArray(year, month);

  return (
    <div className={styles.container}>
      {calendarArray.map((calendarCell, i) =>
        typeof calendarCell === 'string' ? (
          <div key={i + 'empty'} className={`${styles.calendarCell} ${getSeventhDate(i) ? styles.red : ''}`}>
            {calendarCell}
          </div>
        ) : (
          <div
            key={calendarCell}
            onClick={calendarContext.onSelectedDate.bind(null, calendarCell)}
            className={`${styles.calendarCell} ${(i + 1) % 7 === 0 ? styles.red : ''}`}
          >
            <div className={`${styles.date} ${calendarCell == date ? styles.selected : ''}`}>{calendarCell}</div>
            <div className={styles.todoIconContainer}>
              <div className={styles.todoIcon}></div>
              <div className={styles.todoIcon}></div>
              <div className={styles.todoIcon}></div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
