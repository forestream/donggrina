export interface Growth {
  data: GrowthData[];
}

export interface GrowthData {
  id: number;
  writerProfileImageUrl: string;
  petProfileImageUrl: string;
  category: string;
  dateTime: Date;
  nickname: string;
}
