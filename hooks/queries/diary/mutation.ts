import { useMutation, useQueryClient } from '@tanstack/react-query';
import storyApiInstance from '@/apis/story';
import diaryApiInstance, {
  deleteChildComment,
  deleteDiary,
  deleteParentComment,
  putComment,
} from '../../../apis/diaries';

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

export function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['comments'],
    mutationFn: deleteParentComment,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useDeleteReplyComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['comments'],
    mutationFn: deleteChildComment,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useUpdateReplyComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['comments'],
    mutationFn: putComment,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useDeleteDiary() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['story'],
    mutationFn: deleteDiary,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}

export function useUpdateDiary() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['diaries'],
    mutationFn: diaryApiInstance.updateDiary,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
