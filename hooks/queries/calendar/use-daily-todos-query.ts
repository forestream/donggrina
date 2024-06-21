import { fetchDailyTodos } from '@/api/calendar/request';
import { useQuery } from '@tanstack/react-query';

const useDailyTodosQuery = (yearMonthDate: string) =>
  useQuery({
    queryKey: ['dailyTodos', yearMonthDate],
    queryFn: () => fetchDailyTodos(yearMonthDate),
    placeholderData: (prevDailyTodos) => prevDailyTodos,
  });

export default useDailyTodosQuery;
