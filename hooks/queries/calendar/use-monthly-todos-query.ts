import { fetchDailyTodos, postRefreshToken } from '@/api/calendar/request';
import { useQuery } from '@tanstack/react-query';

const useMonthlyTodosQuery = (yearMonthDate: string) =>
  useQuery({
    queryKey: ['dailyTodos', yearMonthDate],
    queryFn: () => fetchDailyTodos(yearMonthDate),
    placeholderData: (prevDailyTodos) => prevDailyTodos,
    retry: (count) => {
      if (count > 1) return false;
      if (count === 0) postRefreshToken();
      return true;
    },
  });

export default useMonthlyTodosQuery;
