export interface Story {
  diaryId: number;
  authorImage: string;
  author: string;
  authorGroup: string;
  images: string[];
  content: string;
  commentCount: number;
  favoriteCount: number;
  favoriteState: boolean;
  date: string;
  isMyStory: boolean;
  petImages: string[];
  weather: string;
}

export interface StoryData {
  currentPage: number;
  hasMore: boolean;
  response: Story[];
}
