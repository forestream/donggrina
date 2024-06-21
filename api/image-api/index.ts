import { axiosFileInstance } from '..';

interface ImageType {
  files: File;
}

export const imageUpload = async (data: ImageType) => {
  return await axiosFileInstance.post('/images', data);
};
