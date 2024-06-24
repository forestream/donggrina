import { deleteParentComment } from '@/api/diaries';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useCommentDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['diaries', 'comments'],
    mutationFn: deleteParentComment,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['diaries'],
      }),
  });
};

export default useCommentDeleteMutation;
