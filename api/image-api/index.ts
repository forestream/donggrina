import { axiosFileInstance } from '..';

interface ImageType {
  files: FileList;
}

export const imageUplolad = async (data: ImageType) => {
  return await axiosFileInstance.post('/images', data);
};
