import { CALENDAR_DAYS, CALENDAR_EMPTY_DATES } from '@/lib/constants/calendar-constants';
import getDateCount from './get-date-count';
import getFirstDay from './get-first-day';

export default function getCalendarArray(year: number, month: number) {
  const dateCount = getDateCount(year, month);
  const firstDay = getFirstDay(year, month);
  const emptyDates = Array(CALENDAR_EMPTY_DATES[firstDay]).fill('');
  const dates = Array(dateCount)
    .fill(0)
    .map((_, i) => i + 1);
  const calendarArray = [...CALENDAR_DAYS, ...emptyDates, ...dates];

  return calendarArray;
}
