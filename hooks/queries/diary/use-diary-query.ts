import { useQuery } from '@tanstack/react-query';
import { fetchDiaries } from '@/api/diaries';
import { DiaryData } from '@/types/diary/';

export const useDiaries = (date: string) => {
  return useQuery<DiaryData[], Error>({
    queryKey: ['diaries', date],
    queryFn: () => fetchDiaries(date),
  });
};
