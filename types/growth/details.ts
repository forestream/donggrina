export interface GrowthDetails {
  data: GrowthDetailsData;
}

export interface GrowthDetailsData {
  id: number;
  writerProfileImageUrl: string;
  petProfileImageUrl: string;
  category: string;
  content: GrowthDetailsContent;
  dateTime: Date;
  nickname: string;
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
