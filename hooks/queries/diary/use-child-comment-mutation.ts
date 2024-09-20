import { deleteChildComment } from '@/apis/diaries';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useChildCommentMutation = (diaryId: string, commentId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['diaries', diaryId, 'comments', commentId],
    mutationFn: () => deleteChildComment(commentId),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['diaries', diaryId],
      }),
  });
};

export default useChildCommentMutation;
