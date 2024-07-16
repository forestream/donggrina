import { fetchGroup } from '@/apis/search';
import { useQuery } from '@tanstack/react-query';

const useMembersQuery = () =>
  useQuery({
    queryKey: ['members'],
    queryFn: () => fetchGroup(),
    initialData: {
      id: 0,
      name: '',
      invitationCode: '',
      members: [],
      membersCount: 0,
    },
  });

export default useMembersQuery;
