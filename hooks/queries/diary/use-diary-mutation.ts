import { deleteDiary } from '@/apis/diaries';
import { useMutation } from '@tanstack/react-query';

const useDiaryMutation = (diaryId: string) => {
  return useMutation({
    mutationKey: ['diaries', diaryId],
    mutationFn: () => deleteDiary(+diaryId),
  });
};

export default useDiaryMutation;
