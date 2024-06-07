export interface DiaryDetails {
  data: DiaryDetailsData;
}

export interface DiaryDetailsData {
  createdDate: Date;
  authorProfile: string;
  petProfile: string;
  content: string;
  favoriteState: boolean;
  favoriteCount: number;
  comments: DiaryComment[];
  isMyDiary: boolean;
}

export interface DiaryComment {
  commentId: number;
  authorProfile: string;
  author: string;
  comment: string;
  isMyComment: boolean;
}
