import Calendar from '@/components/calendar-compound/calendar';
import styles from './calendar.module.scss';
import CalendarContainer from '@/components/calendar-monthly/calendar-container';
import CreateTodoButton from '@/components/calendar-monthly/create-todo-button';
import CalendarTodoDate from '@/components/calendar-monthly/calendar-todo-date';
import CalendarInstance from '@/utils/date/date.utils';
import useSelect from '@/hooks/use-select';
import CalendarTodos from '@/components/calendar-monthly/calendar-todos';

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
          onSelectedYear,
          onSelectedMonth,
          onSelectedDate,
          onResetToday,
        }}
      >
        <div className={styles.yearContainer} style={{ position: 'relative', left: '-12px' }}>
          <Calendar.Year />
          <p className={styles.resetToday} onClick={onResetToday}>
            오늘 날짜
          </p>
        </div>
        <div style={{ position: 'relative', left: '-12px' }}>
          <Calendar.Month />
        </div>
        <CalendarContainer />
        <CalendarTodoDate />
        <CalendarTodos />
        <CreateTodoButton />
      </Calendar>
    </main>
  );
}
