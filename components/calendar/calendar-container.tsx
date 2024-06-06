import getDateCount from '@/utils/get-date-count';
import styles from './calendar-container.module.scss';
import { CalendarProps } from '@/pages/calendar';
import { CALENDAR_DAYS, CALENDAR_EMPTY_DATES } from '@/lib/constants/calendar-constants';
import getFirstDay from '@/utils/get-first-day';
import Link from 'next/link';

export default function CalendarContainer({ year, month, date }: CalendarProps) {
  const dateCount = getDateCount(year, month);
  const firstDay = getFirstDay(year, month);
  const emptyDates = Array(CALENDAR_EMPTY_DATES[firstDay]).fill('');
  const dates = Array(dateCount)
    .fill(0)
    .map((_, i) => i + 1);
  const calendarArray = [...CALENDAR_DAYS, ...emptyDates, ...dates];

  return (
    <div className={styles.container}>
      {calendarArray.map((calendarCell, i) =>
        typeof calendarCell === 'string' ? (
          <div key={i + 'empty'} className={`${styles.calendarCell} ${(i + 1) % 7 === 0 ? styles.red : ''}`}>
            {calendarCell}
          </div>
        ) : (
          <Link
            key={calendarCell}
            className={`${styles.calendarCell} ${(i + 1) % 7 === 0 ? styles.red : ''}`}
            href={`/calendar?year=${year}&month=${month}&date=${calendarCell}`}
          >
            <div className={`${styles.date} ${calendarCell == date ? styles.selected : ''}`}>{calendarCell}</div>
            <div className={styles.todoIconContainer}>
              <div className={styles.todoIcon}></div>
              <div className={styles.todoIcon}></div>
              <div className={styles.todoIcon}></div>
            </div>
          </Link>
        ),
      )}
    </div>
  );
}
