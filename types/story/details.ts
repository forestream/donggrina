export interface StoryDetails {
  data: StoryDetailsData;
}

export interface StoryDetailsData {
  authorProfile: string;
  authorGroup: string;
  images: string[];
  content: string;
  createdDate: Date;
  favoriteState: boolean;
  favoriteCount: number;
  comments: StoryComment[];
}

export interface StoryComment {
  commentId: number;
  commentsAuthorProfile: string;
  commentAuthor: string;
  content: string;
}
