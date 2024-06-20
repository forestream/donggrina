import { useQuery } from '@tanstack/react-query';
import { fetchDiaries, fetchDiaryById } from '@/api/diaries';
import { DiaryData } from '@/types/diary/';

export const useDiaries = (date: string) => {
  return useQuery<DiaryData[], Error>({
    queryKey: ['diaries', date],
    queryFn: () => fetchDiaries(date),
  });
};

export const useDiaryQuery = (diaryId: string) =>
  useQuery({
    queryKey: ['diaries', diaryId],
    queryFn: () => fetchDiaryById(diaryId),
  });
