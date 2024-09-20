import { useMutation, useQueryClient } from '@tanstack/react-query';
import storyApiInstance from '@/apis/story';

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
    mutationKey: ['comments'],
    mutationFn: storyApiInstance.createCommentStory,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['comments'],
    mutationFn: storyApiInstance.deleteCommentStory,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useDeleteReplyComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['comments'],
    mutationFn: storyApiInstance.deleteReplyStroy,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useUpdateReplyComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['comments'],
    mutationFn: storyApiInstance.updateCommentStory,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useDeleteStory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['story'],
    mutationFn: storyApiInstance.deleteStory,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
