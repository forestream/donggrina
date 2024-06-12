import { CALENDAR_DAYS, CALENDAR_EMPTY_DATES } from '@/lib/constants/calendar-constants';
import getDateCount from './get-date-count';
import getFirstDay from './get-first-day';

type TodoCount = {
  date: string;
  count: number;
};

interface CalendarArray {
  calendarArray: (string | number)[];
  todoCountsArray: (string | number)[];
}

export default function getCalendarArray(year: number, month: number, todoCounts: TodoCount[] = []): CalendarArray {
  const firstDay = getFirstDay(year, month);
  const emptyDates = Array(CALENDAR_EMPTY_DATES[firstDay]).fill('');

  const dateCount = getDateCount(year, month);
  const dates = Array(dateCount)
    .fill(0)
    .map((_, i) => i + 1);

  const editedTodoCounts = todoCounts.map(({ date, count }) => ({
    date: +date.split('-')[2],
    count,
  }));
  const counts = Array(dateCount).fill(0);
  editedTodoCounts.forEach(({ date, count }) => {
    counts[date - 1] = count;
  });

  const calendarArray = [...CALENDAR_DAYS, ...emptyDates, ...dates];
  const todoCountsArray = [...CALENDAR_DAYS, ...emptyDates, ...counts];
  return { calendarArray, todoCountsArray };
}
