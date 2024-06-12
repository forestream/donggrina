import getDay from '@/utils/get-day';
import { useCalendarContext } from '../calendar-compound/calendar';
import styles from './calendar-todo-date.module.scss';

export default function CalendarTodoDate() {
  const calendarContext = useCalendarContext();
  const year = calendarContext.year;
  const month = calendarContext.month + 1;
  const date = calendarContext.date;
  const day = getDay(year, month, date);

  return (
    <p className={styles.date}>
      {month}월 {date}일 {day}
    </p>
  );
}
