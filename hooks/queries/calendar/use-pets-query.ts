import { fetchPets } from '@/api/calendar/request';
import { useQuery } from '@tanstack/react-query';

const usePetsQuery = () =>
  useQuery({
    queryKey: ['pets'],
    queryFn: () => fetchPets(),
  });

export default usePetsQuery;
