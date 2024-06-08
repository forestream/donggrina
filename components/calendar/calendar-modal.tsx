import getDateCount from '@/utils/get-date-count';
import styles from './calendar-modal.module.scss';
import { CalendarProps } from '@/pages/calendar';
import { CALENDAR_DAYS, CALENDAR_EMPTY_DATES, TIME_SELECTOR } from '@/lib/constants/calendar-constants';
import getFirstDay from '@/utils/get-first-day';
import getSeventhDate from '@/utils/get-seventh-date';
import { MouseEvent, useState } from 'react';
import CalendarModalTimeSelector from './calendar-modal-time-selector';

interface CalendarModalProps extends CalendarProps {
  hour: number;
  minute: number;
  onSelect: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function CalendarModal({
  year,
  month,
  date,
  hour: initHour,
  minute: initMinute,
  onSelect,
}: CalendarModalProps) {
  const [hour, setHour] = useState(initHour);
  const [minute, setMinute] = useState(initMinute);
  const [ampm, setAmpm] = useState(initHour < 12 ? TIME_SELECTOR.AM_PM[0] : TIME_SELECTOR.AM_PM[1]);

  const handleAmpmSelect = (value: string) => setAmpm(value);
  const handleHourSelect = (value: number) => setHour(value);
  const handleMinuteSelect = (value: number) => setMinute(value);

  const dateCount = getDateCount(year, month);
  const firstDay = getFirstDay(year, month);
  const emptyDates = Array(CALENDAR_EMPTY_DATES[firstDay]).fill('');
  const dates = Array(dateCount)
    .fill(0)
    .map((_, i) => i + 1);
  const calendarArray = [...CALENDAR_DAYS, ...emptyDates, ...dates];

  return (
    <div className={styles.outer}>
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
      <CalendarModalTimeSelector
        onAmpmSelect={handleAmpmSelect}
        onHourSelect={handleHourSelect}
        onMinuteSelect={handleMinuteSelect}
        ampm={ampm}
        hour={hour}
        minute={minute}
      />
      <button className={styles.save} type="button">
        저장하기
      </button>
    </div>
  );
}
