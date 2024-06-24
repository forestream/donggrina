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
