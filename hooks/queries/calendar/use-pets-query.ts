import { fetchPets } from '@/apis/calendar/request';
import { useQuery } from '@tanstack/react-query';

const usePetsQuery = () =>
  useQuery({
    queryKey: ['pets'],
    queryFn: () => fetchPets(),
    initialData: [],
  });

export default usePetsQuery;
