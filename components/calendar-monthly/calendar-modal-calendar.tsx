import getSeventhDate from '@/utils/get-seventh-date';
import styles from './calendar-modal-calendar.module.scss';
import getCalendarArray from '@/utils/get-calendar-array';
import { BaseSyntheticEvent, MouseEvent, useEffect } from 'react';
import { DateTime } from '@/pages/calendar/create';
import { useCalendarContext } from '../calendar-compound/calendar';

interface CalendarModalCalendarProps {
  dateTime: DateTime;
  onSelect: (type: string, e: BaseSyntheticEvent) => void;
}

export default function CalendarModalCalendar({ dateTime, onSelect }: CalendarModalCalendarProps) {
  const calendarContext = useCalendarContext();

  useEffect(() => {
    calendarContext.onSelectedMonth(dateTime.month - 1);
  }, []);

  useEffect(() => {
    onSelect('month', { target: { innerText: calendarContext.month + 1 } } as BaseSyntheticEvent);
  }, [calendarContext.month]);

  const { year, month, date } = dateTime;
  const calendarArray = getCalendarArray(year, month);

  const handleDateClick = (e: MouseEvent) => {
    onSelect('date', e);
  };

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
            onClick={handleDateClick}
            className={`${styles.calendarCell} ${getSeventhDate(i) ? styles.red : ''}`}
          >
            <div className={`${styles.date} ${calendarCell == date ? styles.selected : ''}`}>{calendarCell}</div>
          </div>
        ),
      )}
    </div>
  );
}
