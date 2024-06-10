import { axiosInstance } from '..';

interface RefreshType {
  accessToken: string;
  refreshToken: string;
}

export const getCode = async () => {
  return await axiosInstance.get('/my/groups/code');
};
export const getRefresh = async (data: RefreshType) => {
  return await axiosInstance.post('/refresh', data);
};
