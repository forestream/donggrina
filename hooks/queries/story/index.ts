import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import storyApiInstance from '@/api/story';

interface Story {
  page?: number;
  size?: number;
}

export function useFetchStory({ page = 1, size = 10 }: Story) {
  return useQuery({
    queryKey: ['story'],
    queryFn: () => storyApiInstance.fetchStory(page, size),
  });
}

export function useInfiniteStory() {
  return useInfiniteQuery({
    queryKey: ['story'],
    queryFn: ({ pageParam = 0 }) => {
      console.log(pageParam);
      return storyApiInstance.fetchStory(pageParam, 10);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParams) => {
      if (lastPage.hasMore) {
        return lastPageParams + 1;
      }
    },
  });
}

export function useFetchDetailStory(diaryId: number) {
  return useQuery({
    queryKey: ['story-detail', diaryId],
    queryFn: () => storyApiInstance.fetchDetailStory(diaryId),
  });
}
