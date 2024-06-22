import { DiaryByQueries, GrowthByQueries, TodoByQueries } from '@/apis/search/index.type';
import { useQuery } from '@tanstack/react-query';

const useResultsQuery = (
  queryFn: (searchParams: string) => Promise<TodoByQueries[] & DiaryByQueries[] & GrowthByQueries[]>,
  searchParams: string,
) =>
  useQuery({
    queryKey: ['results'],
    queryFn: () => queryFn(searchParams),
  });

export default useResultsQuery;
