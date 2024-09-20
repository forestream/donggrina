export interface Member {
  id: number;
  imageId: number;
  name: string;
  nickname: string;
  profileImageUrl: string;
}

export interface Group {
  id: number;
  name: string;
  invitationCode: string;
  members: Member[];
  membersCount: number;
}

export interface TodoByQueries {
  id: number;
  title: string;
  category: string;
  dateTime: string;
  memberProfileImageUrl: string;
  nickname: string;
  petProfileImageUrl: string;
  petName: string;
  isFinished: boolean;
  isMine: boolean;
}

export interface DiaryByQueries {
  diaryId: number;
  authorImage: string;
  author: string;
  petImages: string[];
  content: string;
  contentImage: null;
  commentCount: number;
  favoriteCount: number;
  favoriteState: boolean;
  isMyDiary: boolean;
}

export interface GrowthByQueries {
  id: number;
  writerProfileImageUrl: string;
  petProfileImageUrl: string;
  category: string;
  content: string;
  dateTime: string;
  nickname: string;
  petName: string;
  isMine: boolean;
}
