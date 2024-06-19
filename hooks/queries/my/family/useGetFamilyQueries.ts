import MyFamilyApi from '@/api/my/groups';
import { useQuery } from '@tanstack/react-query';

const myFamilyApi = new MyFamilyApi();

export const useGetFamilyAllQuery = () => {
  return useQuery({
    queryKey: ['familyDetails'],
    queryFn: async () => await myFamilyApi.myFamilyDetails().then((res) => res.data),
  });
};
