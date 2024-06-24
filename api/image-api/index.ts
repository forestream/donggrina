import { axiosFileInstance } from '..';

interface ImageType {
  files?: File;
  images?: File;
}

export const imageUpload = async (data: ImageType) => {
  return await axiosFileInstance.post('/images', data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const diaryImageUpload = async (data: ImageType) => {
  return await axiosFileInstance.post('/images/diaries', data);
};
