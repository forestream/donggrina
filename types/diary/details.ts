export interface DiaryDetails {
  data: DiaryDetailsData;
}

export interface DiaryDetailsData {
  createdDate: Date;
  authorImage: string;
  author: string;
  petProfile: string;
  content: string;
  weather: string;
  favoriteState: boolean;
  favoriteCount: number;
  comments: DiaryComment[];
  isMyDiary: boolean;
}

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
