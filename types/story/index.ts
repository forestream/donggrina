export interface Story {
  data: StoryData;
}

export interface StoryData {
  storyId: number;
  authorProfile: string;
  author: string;
  authorGroup: string;
  images: string[];
  content: string;
  commentCount: number;
  favoriteCount: number;
  favoriteState: boolean;
  createdDate: Date;
  isMyStory: boolean;
}
