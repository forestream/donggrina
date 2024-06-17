import axios, { AxiosInstance } from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import { reissuanceAt } from './auth';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosFileInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

let isRefreshing = false;

const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = getCookie('accessToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const token = getCookie('accessToken');
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        if (!isRefreshing) {
          isRefreshing = true;
          const refresh = getCookie('refreshToken');
          const data = {
            accessToken: token!.toString(),
            refreshToken: refresh!.toString(),
          };
          try {
            const response = await reissuanceAt(data);
            const newAt = response.data.data;
            setCookie('accessToken', newAt);
            axios.defaults.headers['Authorization'] = `Bearer ${newAt}`;
            originalRequest.headers.Authorization = `Bearer ${newAt}`;
            isRefreshing = false;
            return axios(originalRequest);
          } catch (error) {
            console.log(`토큰 갱신 실패 ${error}`);
            isRefreshing = false;
          }
        }
      }
      return Promise.reject(error);
    },
  );
};

setupInterceptors(axiosInstance);
setupInterceptors(axiosFileInstance);
