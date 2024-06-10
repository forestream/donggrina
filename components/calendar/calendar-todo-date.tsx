import getDay from '@/utils/get-day';
import { useCalendarContext } from '../calendar-compound/calendar';
import styles from './calendar-todo-date.module.scss';

interface CalendarTodoDateProps {
  year: number;
}

export default function CalendarTodoDate({ year }: CalendarTodoDateProps) {
  const calendarContext = useCalendarContext();

  const month = calendarContext.month + 1;
  const date = calendarContext.date;
  const day = getDay(year, month, date);

  return (
    <p className={styles.date}>
      {month}월 {date}일 {day}
    </p>
  );
}
