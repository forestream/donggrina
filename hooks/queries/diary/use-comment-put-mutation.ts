// import { putComment } from '@/api/diaries';
// import { useMutation, useQueryClient } from '@tanstack/react-query';

// const useCommentPutMutation = (diaryId: string, commentId: number) => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationKey: ['diaries', diaryId, 'comments', commentId],
//     mutationFn: (data) => putComment({ commentId, data }),
//     onSuccess: () =>
//       queryClient.invalidateQueries({
//         queryKey: ['diaries', diaryId],
//       }),
//   });
// };

// export default useCommentPutMutation;
