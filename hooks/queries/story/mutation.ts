import { useMutation, useQueryClient } from '@tanstack/react-query';
import storyApiInstance from '@/api/story';

export function usePostLike(status: boolean) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['post/like'],
    mutationFn: status ? storyApiInstance.deleteLikeStory : storyApiInstance.postLikeStory,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['post/comments'],
    mutationFn: storyApiInstance.createCommentStory,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
