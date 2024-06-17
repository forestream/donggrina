import { LocalDateTime } from '../date';

export interface GrowthDetails {
  data: GrowthDetailsData;
}

export interface AddGrowthData {
  date: string;
  petName: string;
  category: string;
  content: GrowthDetailsContent;
}

export interface GrowthDetailsData {
  id: number;
  writerProfileImageUrl: string;
  petProfileImageUrl: string;
  category: string;
  content: GrowthDetailsContent;
  dateTime: LocalDateTime;
  nickname: string;
  isMine: boolean;
}

export interface GrowthDetailsContent {
  food: string | null;
  snack: string | null;
  abnormalSymptom: string | null;
  hospitalName: string | null;
  symptom: string | null;
  diagnosis: string | null;
  medicationMethod: string | null;
  price: number | null;
  memo: string | null;
}
