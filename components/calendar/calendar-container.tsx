import getDateCount from '@/utils/get-date-count';
import styles from './calendar-container.module.scss';
import { CalendarProps } from '@/pages/calendar';
import { CALENDAR_DAYS, CALENDAR_EMPTY_DATES } from '@/lib/constants/calendar-constants';
import getFirstDay from '@/utils/get-first-day';
import Link from 'next/link';

export default function CalendarContainer({ year, month, date }: CalendarProps) {
  const dateCount = getDateCount(year as number, month as number);
  const firstDay = getFirstDay(year as number, month as number);
  const emptyDates = Array(CALENDAR_EMPTY_DATES[firstDay]).fill('');
  const dates = Array(dateCount)
    .fill(0)
    .map((_, i) => i + 1);
  const calendarArray = [...CALENDAR_DAYS, ...emptyDates, ...dates];

  return (
    <div className={styles.container}>
      {calendarArray.map((e, i) =>
        !e ? (
          <div></div>
        ) : (
          <Link
            key={e}
            className={`${styles.calendarCell} ${(i + 1) % 7 === 0 ? styles.red : ''}`}
            href={`/calendar?year=${year}&month=${month}&date=${e}`}
          >
            {e}
          </Link>
        ),
      )}
    </div>
  );
}
