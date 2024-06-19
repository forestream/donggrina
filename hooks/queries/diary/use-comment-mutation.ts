import { postComment } from '@/api/diaries';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCommentMutation = (diaryId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['diaries', diaryId, 'comments'],
    mutationFn: ({ content, parentCommentId = null }: { content: string; parentCommentId: number | null }) =>
      postComment(diaryId, content, parentCommentId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['diaries', diaryId],
      }),
  });
};

export default useCommentMutation;
