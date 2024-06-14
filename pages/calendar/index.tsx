import Calendar from '@/components/calendar-compound/calendar';
import styles from './calendar.module.scss';
import CalendarContainer from '@/components/calendar-monthly/calendar-container';
import CalendarTodo from '@/components/calendar-monthly/calendar-todo';
import CreateTodoButton from '@/components/calendar-monthly/create-todo-button';
import CalendarTodoDate from '@/components/calendar-monthly/calendar-todo-date';

export type CalendarProps = {
  year: number | null;
  month: number | null;
  date: number | null;
};

export default function CalendarPage() {
  return (
    <main className={styles.outer}>
      <Calendar>
        <div style={{ position: 'relative', left: '-12px' }}>
          <Calendar.Year />
        </div>
        <div style={{ position: 'relative', left: '-12px' }}>
          <Calendar.Month />
        </div>
        <CalendarContainer />
        <CalendarTodoDate />
        <CalendarTodo />
        <CreateTodoButton />
      </Calendar>
    </main>
  );
}
