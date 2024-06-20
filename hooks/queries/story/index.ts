import { useQuery } from '@tanstack/react-query';
import storyApiInstance from '../../../api/story';

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
