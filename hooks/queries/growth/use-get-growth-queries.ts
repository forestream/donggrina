import { useQuery } from '@tanstack/react-query';
import GrowthAPI from '@/apis/growth';

const growthAPI = new GrowthAPI();

export const useGetGrotwthByDateQuery = (date: string) => {
  return useQuery({
    queryKey: ['growth', date],
    queryFn: () => growthAPI.getGrowthByDate(date),
  });
};

export const useGetGrowthDetailQuery = (growthId: number) => {
  return useQuery({
    queryKey: ['growth', growthId],
    queryFn: () => growthAPI.getGrowthDetails(growthId),
  });
};

export const useSearchGrowthQuery = (keyword: string, petNames: string[], writerNames: string[]) => {
  return useQuery({
    queryKey: ['growth', keyword],
    queryFn: () => growthAPI.getSearchGrowth(keyword, petNames, writerNames),
  });
};
