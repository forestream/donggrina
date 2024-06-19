export interface GrowthDetails {
  data: GrowthDetailsData;
}

// export interface AddGrowthData {
//   date: string;
//   petName: string;
//   category: string;
//   content: GrowthDetailsContent;
// }

export interface GrowthDetailsData {
  id: number;
  writerProfileImageUrl: string;
  petProfileImageUrl: string;
  category: string;
  content: GrowthDetailsContent;
  dateTime: string;
  nickname: string;
  isMine: boolean;
  petName: string;
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
