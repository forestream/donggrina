import { DailyTodo, TodoByQueries } from '@/api/calendar/request.type';
import { useCalendarContext } from '../calendar-compound/calendar';
import CalendarTodo from './calendar-todo';
import useDailyTodosQuery from '@/hooks/queries/calendar/use-daily-todos-query';

interface CalendarTodosProps {
  dailyTodos: TodoByQueries[] | DailyTodo[];
}

export default function CalendarTodos({ dailyTodos }: CalendarTodosProps) {
  const calendarContext = useCalendarContext();
  const { year, month, date } = calendarContext;
  const yearMonthDate = [year, (month + 1).toString().padStart(2, '0'), date.toString().padStart(2, '0')].join('-');

  const { error, isPending, isError, isFetchedAfterMount } = useDailyTodosQuery(yearMonthDate);

  if (!isFetchedAfterMount) return;
  if (isPending) return <span>loading</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <>
      {dailyTodos.map((todo) => (
        <CalendarTodo key={todo.id} todo={todo} />
      ))}
    </>
  );
}
