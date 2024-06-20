export interface Story {
  storyId: number;
  authorImage: string;
  author: string;
  authorGroup: string;
  images: string[];
  content: string;
  commentCount: number;
  favoriteCount: number;
  favoriteState: boolean;
  createdDate: string;
  isMyStory: boolean;
}

export interface StoryData {
  currentPage: number;
  hasMore: boolean;
  data: {
    response: Story[];
  };
}
