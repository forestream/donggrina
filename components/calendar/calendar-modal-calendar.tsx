import getSeventhDate from '@/utils/get-seventh-date';
import styles from './calendar-modal-calendar.module.scss';
import getCalendarArray from '@/utils/get-calendar-array';
import { MouseEvent } from 'react';

interface CalendarModalCalendarProps {
  year: number;
  month: number;
  date: number;
  onSelect: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function CalendarModalCalendar({ year, month, date, onSelect }: CalendarModalCalendarProps) {
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
            onClick={onSelect}
            className={`${styles.calendarCell} ${getSeventhDate(i) ? styles.red : ''}`}
          >
            <div className={`${styles.date} ${calendarCell == date ? styles.selected : ''}`}>{calendarCell}</div>
          </div>
        ),
      )}
    </div>
  );
}
