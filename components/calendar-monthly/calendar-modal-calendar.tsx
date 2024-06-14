import getSeventhDate from '@/utils/get-seventh-date';
import styles from './calendar-modal-calendar.module.scss';
import getCalendarArray from '@/utils/get-calendar-array';
import { BaseSyntheticEvent, MouseEvent, useEffect } from 'react';
import { useCalendarContext } from '../calendar-compound/calendar';
import classNames from 'classnames';
import { ModalDateTime } from './calendar-modal';

interface CalendarModalCalendarProps {
  dateTime: ModalDateTime;
  onSelect: (type: string, e: BaseSyntheticEvent) => void;
}

export default function CalendarModalCalendar({ dateTime, onSelect }: CalendarModalCalendarProps) {
  const calendarContext = useCalendarContext();

  useEffect(() => {
    onSelect('year', { target: { innerText: calendarContext.year } } as BaseSyntheticEvent);
    onSelect('month', { target: { innerText: calendarContext.month + 1 } } as BaseSyntheticEvent);
    onSelect('date', { target: { innerText: calendarContext.date } } as BaseSyntheticEvent);
  }, [calendarContext.year, calendarContext.month, calendarContext.date]);

  const { year, month, date } = dateTime;
  const { calendarArray } = getCalendarArray(year, month);

  const calendarCellClassNames = (cellIndex: number) =>
    classNames(styles.calendarCell, {
      [styles.red]: getSeventhDate(cellIndex),
    });

  const handleDateClick = (e: MouseEvent) => {
    onSelect('date', e);
  };

  return (
    <div className={styles.container}>
      {calendarArray.map((calendarCell, i) =>
        typeof calendarCell === 'string' ? (
          <div key={i + 'empty'} className={calendarCellClassNames(i)}>
            {calendarCell}
          </div>
        ) : (
          <div key={calendarCell} onClick={handleDateClick} className={calendarCellClassNames(i)}>
            <div className={`${styles.date} ${calendarCell == date ? styles.selected : ''}`}>{calendarCell}</div>
          </div>
        ),
      )}
    </div>
  );
}
