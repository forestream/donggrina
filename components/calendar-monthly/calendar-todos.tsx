import { useCalendarContext } from '../calendar-compound/calendar';
import CalendarTodo from './calendar-todo';
import useDailyTodosQuery from '@/hooks/queries/calendar/use-daily-todos-query';

export default function CalendarTodos() {
  const calendarContext = useCalendarContext();
  const { year, month, date } = calendarContext;
  const yearMonthDate = [year, (month + 1).toString().padStart(2, '0'), date.toString().padStart(2, '0')].join('-');

  const { data: dailyTodos, error, isPending, isError } = useDailyTodosQuery(yearMonthDate);

  if (isPending) return <span>loading</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return <>{dailyTodos && dailyTodos.map((todo) => <CalendarTodo key={todo.id} todo={todo} />)}</>;
}
