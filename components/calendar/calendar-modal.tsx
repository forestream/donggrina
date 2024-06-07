import getDateCount from '@/utils/get-date-count';
import styles from './calendar-modal.module.scss';
import { CalendarProps } from '@/pages/calendar';
import { CALENDAR_DAYS, CALENDAR_EMPTY_DATES } from '@/lib/constants/calendar-constants';
import getFirstDay from '@/utils/get-first-day';
import getSeventhDate from '@/utils/get-seventh-date';
import { MouseEvent } from 'react';
import CalendarModalTimeSelector from './calendar-modal-time-selector';

interface CalendarModalProps extends CalendarProps {
  onSelect: (e: MouseEvent<HTMLDivElement>) => void;
}
export default function CalendarModal({ year, month, date, hour, minute, onSelect }: CalendarModalProps) {
  const dateCount = getDateCount(year, month);
  const firstDay = getFirstDay(year, month);
  const emptyDates = Array(CALENDAR_EMPTY_DATES[firstDay]).fill('');
  const dates = Array(dateCount)
    .fill(0)
    .map((_, i) => i + 1);
  const calendarArray = [...CALENDAR_DAYS, ...emptyDates, ...dates];

  return (
    <>
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
      <CalendarModalTimeSelector hour={hour} minute={minute} />
    </>
  );
}
