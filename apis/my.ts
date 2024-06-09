import { axiosInstance } from '.';

interface NamesDataType {
  name: string;
  nickname: string;
}

export const createFamily = (token: string, namesData: NamesDataType) => {
  const instance = axiosInstance(token);
  return instance.post('/my/groups', namesData);
};

export const inquiryCode = (token: string) => {
  return axiosInstance(token).get('/my/groups/code');
};
