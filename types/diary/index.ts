export interface Diary {
  data: DiaryData;
}

export interface DiaryData {
  diaryId: number;
  createdDate: Date;
  authorProfile: string;
  author: string;
  petProfile: string;
  contentImages: string[];
  content: string;
  commentCount: number;
  favoriteCount: number;
  favoriteState: boolean;
  isMyDiary: boolean;
}
