import { fetchDailyTodos } from '@/api/calendar/request';
import { useQuery } from '@tanstack/react-query';

export function useFetchSchedule(date: string) {
  return useQuery({
    queryKey: ['calendar/daily'],
    queryFn: () => fetchDailyTodos(date),
  });
}
