import { DailyTodo } from '@/apis/calendar/request.type';
import { useCalendarContext } from '../calendar-compound/calendar';
import CalendarTodo from './calendar-todo';
import useDailyTodosQuery from '@/hooks/queries/calendar/use-daily-todos-query';
import CalendarListSkeleton from '../skeleton/calendar/calendar-list-skeleton';
import { TodoByQueries } from '@/apis/search/index.type';

interface CalendarTodosProps {
  dailyTodos: TodoByQueries[] | DailyTodo[];
}

export default function CalendarTodos({ dailyTodos }: CalendarTodosProps) {
  const calendarContext = useCalendarContext();
  const { year, month, date } = calendarContext;
  const yearMonthDate = [year, (month + 1).toString().padStart(2, '0'), date.toString().padStart(2, '0')].join('-');

  const { error, isError, isLoading } = useDailyTodosQuery(yearMonthDate);

  if (isLoading) return <CalendarListSkeleton />;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <>
      {dailyTodos.map((todo) => (
        <CalendarTodo key={todo.id} todo={todo} />
      ))}
    </>
  );
}
