import { LocalDateTime } from '../date';

export interface GrowthDetails {
  data: GrowthDetailsData;
}

export interface AddGrowthData {
  date: string;
  petName: string;
  category: string;
  content: string;
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
  food: string;
  snack: string;
  abnormalSymptom: string;
  hospitalName: string;
  symptom: string;
  diagnosis: string;
  medicationMethod: string;
  price: number;
  memo: string;
}
