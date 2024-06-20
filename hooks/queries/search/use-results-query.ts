import { TodoByQueries } from '@/api/calendar/request.type';
import { useQuery } from '@tanstack/react-query';

const useResultsQuery = (queryFn: (searchParams: string) => Promise<TodoByQueries[]>, searchParams: string) =>
  useQuery({
    queryKey: ['results'],
    queryFn: () => queryFn(searchParams),
  });

export default useResultsQuery;
