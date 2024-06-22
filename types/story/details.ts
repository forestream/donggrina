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
  children: Reply[];
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

export interface UpdateCommentData {
  commentId: number;
  data: {
    content: string;
  };
}

export interface Reply {
  comment: string;
  commentAuthor: string;
  commentAuthorImage: string;
  commentId: number;
  date: string;
  isMyComment: boolean;
}
