import Calendar from '@/components/calendar-compound/calendar';
import styles from './calendar.module.scss';
import CalendarContainer from '@/components/calendar-monthly/calendar-container';
import CalendarTodo from '@/components/calendar-monthly/calendar-todo';
import CreateTodoButton from '@/components/calendar-monthly/create-todo-button';
import CalendarTodoDate from '@/components/calendar-monthly/calendar-todo-date';

export type CalendarProps = {
  year: number;
  month: number;
  date: number;
};

export default function CalendarPage() {
  return (
    <main className={styles.outer}>
      <Calendar>
        <Calendar.Year />
        <Calendar.Month />
        <CalendarContainer />
        <CalendarTodoDate />
        <CalendarTodo />
        <CreateTodoButton />
      </Calendar>
    </main>
  );
}
