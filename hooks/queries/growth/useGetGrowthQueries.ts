import { useQuery } from '@tanstack/react-query';
import GrowthAPI from '@/api/growth';

const growthAPI = new GrowthAPI();

export const useGetGrotwthByDateQuery = (date: string) => {
  return useQuery({
    queryKey: ['growth', date],
    queryFn: () => growthAPI.getGrowthByDate(date),
  });
};

export const useGetGrowthDetailQuery = (groupId: number) => {
  return useQuery({
    queryKey: ['growth', groupId],
    queryFn: () => growthAPI.getGrowthDetails(groupId),
  });
};

export const useSearchGrowthQuery = (keyword: string, petNames: string[], writerNames: string[]) => {
  return useQuery({
    queryKey: ['growth', keyword],
    queryFn: () => growthAPI.getSearchGrowth(keyword, petNames, writerNames),
  });
};
