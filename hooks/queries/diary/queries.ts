import { useQuery } from '@tanstack/react-query';
import diaryApiInstance from '../../../api/diaries';

export function useFetchDiaryById(diaryId: number) {
  return useQuery({
    queryKey: ['diaries'],
    queryFn: () => diaryApiInstance.fetchDiary(diaryId),
  });
}
