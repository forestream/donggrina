import { axiosInstance } from '@/api';
import { DiaryData } from '@/types/diary';
import { GrowthData } from '@/types/growth';
import { useQuery } from '@tanstack/react-query';

async function fetchDiary(date: string) {
  return (await axiosInstance.get<DiaryData[]>(`diaries?date=${date}`)).data;
}

async function getGrowthByDate(date: string) {
  return (await axiosInstance.get<GrowthData[]>(`/growth?date=${date}`)).data;
}

export function useFetchGrowth(date: string) {
  return useQuery({
    queryKey: ['family/growth'],
    queryFn: () => getGrowthByDate(date),
  });
}

export function useFetchDiary(date: string) {
  return useQuery({
    queryKey: ['family/diary', date],
    queryFn: () => fetchDiary(date)!,
  });
}
