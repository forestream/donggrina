export interface DiaryComment {
  commentId: number;
  authorProfile: string;
  comment: string;
  isMyComment: boolean;
}

export interface DiaryDetail {
  date: string;
  authorImage: string;
  author: string;
  petIds: number[];
  petImages: string[];
  contentImageIds: number[];
  contentImages: string[];
  content: string;
  weather: string;
  favoriteState: boolean;
  favoriteCount: number;
  isMyDiary: boolean;
  comments: Comments[];
}

export interface Comments {
  commentId: number;
  commentAuthor: string;
  commentAuthorImage: string;
  comment: string;
  date: string;
  isMyComment: boolean;
  children: {
    commentId: number;
    commentAuthor: string;
    commentAuthorImage: string;
    comment: string;
    date: string;
    isMyComment: boolean;
  }[];
}
