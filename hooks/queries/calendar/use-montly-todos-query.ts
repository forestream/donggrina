import { fetchMonthlyTodos } from '@/apis/calendar/request';
import { useQuery } from '@tanstack/react-query';

const useMonthlyTodosQuery = (yearMonth: string) =>
  useQuery({
    queryKey: ['monthlyTodos', yearMonth],
    queryFn: () => fetchMonthlyTodos(yearMonth),
    initialData: [],
  });

export default useMonthlyTodosQuery;
