import { postComment } from '@/api/diaries';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCommentMutation = (diaryId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['comments', diaryId],
    mutationFn: (content: string, parentCommentId: number | null = null) =>
      postComment(diaryId, content, parentCommentId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['diaries', diaryId],
      }),
  });
};

export default useCommentMutation;
