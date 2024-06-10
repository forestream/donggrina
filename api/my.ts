import { axiosInstance } from '.';

interface NamesDataType {
  name: string;
  nickname: string;
}

export const createFamily = async (namesData: NamesDataType) => {
  return await axiosInstance.post('/my/groups', namesData);
};

export const inquiryCode = async () => {
  return await axiosInstance.get('/my/groups/code');
};

export const deleteFamily = async (groupId: string) => {
  return await axiosInstance.delete(`/my/groups/${groupId}`);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('a');
      // try {
      //   const newAccessToken = await refreshAccessToken();
      //   originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      //   return axiosInstance(originalRequest);
      // } catch (refreshError) {
      //   return Promise.reject(refreshError);
      // }
    }
    return Promise.reject(error);
  },
);
