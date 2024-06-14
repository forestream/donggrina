import Calendar from '@/components/calendar-compound/calendar';
import styles from './calendar.module.scss';
import CalendarContainer from '@/components/calendar-monthly/calendar-container';
import CalendarTodo from '@/components/calendar-monthly/calendar-todo';
import CreateTodoButton from '@/components/calendar-monthly/create-todo-button';
import CalendarTodoDate from '@/components/calendar-monthly/calendar-todo-date';
import CalendarInstance from '@/utils/date/date.utils';
import useSelect from '@/hooks/use-select';

export type CalendarProps = {
  year: number | null;
  month: number | null;
  date: number | null;
};

export default function CalendarPage() {
  const { selectedItem: selectedYear, handleSelectedItem: onSelectedYear } = useSelect<number>(
    CalendarInstance.currentYear,
  );
  const { selectedItem: selectedMonth, handleSelectedItem: onSelectedMonth } = useSelect<number>(
    CalendarInstance.currentMonth,
  );
  const { selectedItem: selectedDate, handleSelectedItem: onSelectedDate } = useSelect<number>(
    CalendarInstance.currentDate,
  );

  const onResetToday = () => {
    onSelectedYear(CalendarInstance.currentYear);
    onSelectedMonth(CalendarInstance.currentMonth);
    onSelectedDate(CalendarInstance.currentDate);
  };

  return (
    <main className={styles.outer}>
      <Calendar
        value={{
          year: selectedYear,
          month: selectedMonth,
          date: selectedDate,
          onSelectedMonth,
          onSelectedDate,
          onSelectedYear,
          onResetToday,
        }}
      >
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
