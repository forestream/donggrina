import { UpdateCommentData } from '@/types/story/details';
import { axiosInstance, axiosFileInstance } from '..';
import { DiaryData } from '@/types/diary/';
import { UpdateDiaryData } from '@/api/diaries';

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

export interface UpdateDiaryData {
  content: string;
  weather: string;
  isShare: boolean;
  date: string;
  pets: number[];
  images: (number | File)[];
}

export interface Child {
  commentId: number;
  commentAuthorImage: string;
  commentAuthor: string;
  comment: string;
  date: string;
  isMyComment: boolean;
  children: null;
}

export interface Comment {
  commentId: number;
  commentAuthorImage: string;
  commentAuthor: string;
  comment: string;
  date: string;
  isMyComment: boolean;
  children: Child[];
}

export interface Diary {
  authorImage: string;
  author: string;
  petImages: string[];
  contentImages: never[];
  content: string;
  date: string;
  weather: string;
  favoriteState: boolean;
  favoriteCount: number;
  comments: Comment[];
  isMyDiary: boolean;
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
    console.error('Failed to post diary', error);
    throw error;
  }
}

export async function fetchDiaries(date: string): Promise<DiaryData[]> {
  try {
    const response = await axiosInstance.get<{ data: DiaryData[] }>(`/diaries?date=${date}`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch diary', error);
    throw error;
  }
}

export async function fetchDiaryById(diaryId: string): Promise<Diary> {
  try {
    return (await axiosInstance.get<{ data: Diary }>(`/diaries/${diaryId}`)).data.data;
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
  const transformedData = { ...updateData, pets: [Number(updateData.pets[0])] };
  console.log(diaryId, transformedData);
  return (await axiosInstance.put(`/diaries/${diaryId}`, transformedData)).data;

  // const data = {
  //   pets:
  //   pedtsId: []
  //   images: []
  //   content:
  //   isShare:
  //   weather:
  //   date: updateData.data
  // };

  // const response = await axiosFileInstance.put(`/diaries/${diaryId}`, formData);

  // const formData = new FormData();
  // formData.append('content', updateData.content);
  // formData.append('weather', updateData.weather);
  // formData.append('isShare', updateData.isShare);
  // formData.append('date', updateData.date);

  // updateData.pets
  //   .filter((pet) => pet !== undefined)
  //   .forEach((pet, index) => {
  //     formData.append(`pets[${index}]`, pet.toString());
  //   });

  // updateData.images
  //   .filter((image) => image !== undefined)
  //   .forEach((image, index) => {
  //     if (image instanceof File) {
  //       formData.append('images', image);
  //     } else {
  //       formData.append(`images[${index}]`, image.toString());
  //     }
  //   });

  // try {

  //   return response.data;
  // } catch (error) {
  //   console.error('Failed to update diary: ', error);
  //   throw error;
  // }
};

export const postComment = async (diaryId: string, content: string, parentCommentId: number | null = null) => {
  try {
    const response = await axiosInstance.post(`/comments/${diaryId}`, { content, parentCommentId });
    console.log(response.data);
  } catch (error) {
    console.error('Failed to post comment', error);
  }
};

export const putComment = async ({ commentId, data }: UpdateCommentData) => {
  try {
    const response = await axiosInstance.put(`/comments/${commentId}`, data);
    console.log(response.data);
  } catch (error) {
    console.error('Failed to post comment', error);
  }
};

export const deleteParentComment = async (commentId: number) => {
  try {
    const response = await axiosInstance.delete(`/comments/parent/${commentId}`);
    console.log(response.data);
  } catch (error) {
    console.error('Failed to delete comment', error);
  }
};

export const deleteChildComment = async (commentId: number) => {
  try {
    const response = await axiosInstance.delete(`/comments/child/${commentId}`);
    console.log(response.data);
  } catch (error) {
    console.error('Failed to delete comment', error);
  }
};

class DiaryAPI {
  async fetchDiary(diaryId: number) {
    return (await axiosInstance.get(`/diaries/${diaryId}`)).data;
  }
}

const diaryApiInstance = new DiaryAPI();

export default diaryApiInstance;
