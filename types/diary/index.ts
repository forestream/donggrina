export interface Diary {
  data: DiaryData;
}

export interface DiaryData {
  diaryId: number;
  createdDate: string;
  authorImage: string;
  author: string;
  petImages: string[];
  contentImage: string[];
  content: string;
  commentCount: number;
  favoriteCount: number;
  favoriteState: boolean;
  isMyDiary: boolean;
}
