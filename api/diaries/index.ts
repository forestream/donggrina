import { axiosInstance, axiosFileInstance } from '..';
import { DiaryData } from '@/types/diary/';

interface ImageUpload {
  images: File[];
}

interface DiaryPostType {
  pets: number[];
  images: number[];
  content: string;
  weather: string;
  isShare: boolean;
  date: string;
}

interface UpdateDiaryData {
  content: string;
}

export async function postDiariesImage(ImageData: ImageUpload) {
  const formData = new FormData();
  ImageData.images.forEach((image) => {
    formData.append('images', image);
  });

  try {
    const response = await axiosFileInstance.post('/images/diaries', formData);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Image upload error:', error);
    throw error;
  }
}

export async function postDiaries(diaryData: DiaryPostType) {
  try {
    const response = await axiosInstance.post('/diaries', diaryData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchDiaries(date: string): Promise<DiaryData[]> {
  try {
    const response = await axiosInstance.get<{ data: DiaryData[] }>(`/diaries?date=${date}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const deleteDiary = async (diaryId: number) => {
  try {
    const response = await axiosInstance.delete(`/diaries/${diaryId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete diary', error);
    throw error;
  }
};

export const updateDiary = async (diaryId: number, updateData: UpdateDiaryData) => {
  try {
    const response = await axiosInstance.put(`/diaries/${diaryId}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Failed to update diary', error);
    throw error;
  }
};
