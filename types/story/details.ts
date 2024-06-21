import { StoryAPI } from '@/api/story';

export interface StoryDetails {
  data: StoryDetailsData;
}

export interface StoryDetailsData {
  author: string;
  authorGroup: string;
  authorImage: string;
  comments: StoryComment[];
  content: string;
  date: string;
  favoriteCount: number;
  favoriteState: boolean;
  images: string[];
  petImages: string[];
  weather: '맑음';
  isMyStory: boolean;
}

export interface StoryComment {
  commentId: number;
  commentsAuthorProfile: string;
  commentAuthor: string;
  comment: string;
}

export interface CreateCommentData {
  diaryId: number;
  data: {
    content: string;
    parentCommentId?: number | null;
  };
}
