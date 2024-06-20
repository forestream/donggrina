import { deleteParentComment } from '@/api/diaries';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useParentCommentMutation = (diaryId: string, commentId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['diaries', diaryId, 'comments', commentId],
    mutationFn: () => deleteParentComment(commentId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['diaries', diaryId],
      }),
  });
};

export default useParentCommentMutation;
