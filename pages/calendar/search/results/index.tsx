import Calendar from '@/components/calendar-compound/calendar';
import styles from './results.module.scss';
import CalendarContainer from '@/components/calendar-monthly/calendar-container';
import CreateTodoButton from '@/components/calendar-monthly/create-todo-button';
import CalendarTodoDate from '@/components/calendar-monthly/calendar-todo-date';
import CalendarInstance from '@/utils/date/date.utils';
import useSelect from '@/hooks/use-select';
import CalendarTodos from '@/components/calendar-monthly/calendar-todos';
import { useRouter } from 'next/router';
import useSearchTodosQuery from '@/hooks/queries/calendar/use-search-todos-query';
import getQueryString from '@/utils/search/get-query-string';
import { useEffect, useState } from 'react';
import countTodosFromSearch from '@/utils/search/count-todos-from-search';
import { MonthlyTodos } from '@/api/calendar/request.type';

export default function CalendarPage() {
  const router = useRouter();
  const [query, setQuery] = useState('keyword=&petNames=&writerNames=');

  useEffect(() => {
    if (!router.isReady) return;

    const keyword = getQueryString('keyword', [router.query.keyword] as string[]);
    const petNames = getQueryString('petNames', router.query.petNames as string[]);
    const writerNames = getQueryString('writerNames', router.query.writerNames as string[]);

    setQuery([keyword, petNames, writerNames].join('&'));
  }, [router.isReady]);

  const searchTodosQuery = useSearchTodosQuery(query);

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

  const monthlyTodos = countTodosFromSearch(searchTodosQuery.data).reduce<MonthlyTodos[]>((result, todo) => {
    if (todo.date.includes(`${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}`)) result.push(todo);

    return result;
  }, []);

  return (
    <main className={styles.outer}>
      <h2 style={{ marginTop: '54px' }}>검색 결과</h2>
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
        <CalendarContainer monthlyTodos={monthlyTodos} />
        <CalendarTodoDate />
        <CalendarTodos />
        <CreateTodoButton />
      </Calendar>
    </main>
  );
}
