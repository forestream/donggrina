import { LocalDateTime } from '../date';

export interface Growth {
  data: GrowthData[];
}

export interface GrowthData {
  id: number;
  writerProfileImageUrl: string;
  petProfileImageUrl: string;
  category: string;
  dateTime: LocalDateTime;
  nickname: string;
  isMine: boolean;
}
