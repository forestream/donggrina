import { axiosFileInstance } from '..';

interface ImageType {
  files: FileList;
}

export const imageUpload = async (data: ImageType) => {
  return await axiosFileInstance.post('/images', data);
};
