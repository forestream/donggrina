import { useCalendarContext } from '../calendar-compound/calendar';
import { fetchDailyTodos, postRefreshToken } from '@/api/calendar/request';
import { useQuery } from '@tanstack/react-query';
import CalendarTodo from './calendar-todo';

export default function CalendarTodos() {
  const calendarContext = useCalendarContext();
  const { year, month, date } = calendarContext;
  const yearMonthDate = [year, (month + 1).toString().padStart(2, '0'), date.toString().padStart(2, '0')].join('-');

  const {
    data: dailyTodos,
    error,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['dailyTodos', yearMonthDate],
    queryFn: () => fetchDailyTodos(yearMonthDate),
    placeholderData: (prevDailyTodos) => prevDailyTodos,
    retry: (count) => {
      if (count > 1) return false;
      if (count === 0) postRefreshToken();
      return true;
    },
  });

  if (isPending) return <span>loading</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return <>{dailyTodos && dailyTodos.map((todo) => <CalendarTodo key={todo.id} todo={todo} />)}</>;
}
