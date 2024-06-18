import { useQuery } from '@tanstack/react-query';
import myPageApiInstance from '../../../../api/my/user';

export function useFetchProfile() {
  return useQuery({
    queryKey: ['my/profile'],
    queryFn: myPageApiInstance.getProfile,
  });
}
