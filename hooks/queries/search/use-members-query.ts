import { fetchGroup } from '@/api/search';
import { useQuery } from '@tanstack/react-query';

const useMembersQuery = () =>
  useQuery({
    queryKey: ['members'],
    queryFn: () => fetchGroup(),
  });

export default useMembersQuery;
