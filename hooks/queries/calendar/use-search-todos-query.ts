import { fetchTodosByQueries } from '@/apis/search';
import { useQuery } from '@tanstack/react-query';

const useSearchTodosQuery = (query: string) =>
  useQuery({
    queryKey: ['searchTodos', query],
    queryFn: () => fetchTodosByQueries(query),
    initialData: [],
  });

export default useSearchTodosQuery;
