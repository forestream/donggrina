import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import { reissuanceAt } from './auth';
import { access } from 'fs';

const token = getCookie('accessToken');

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export const axiosFileInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export const axiosAuthInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

let isRefreshing = false;

axiosInstance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
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
        return reissuanceAt(data).then(({ data }) => {
          console.log(data);
          // setCookie('accessToken', )
          // axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
        });
      }
    }
    // return Promise.reject(error);
  },
);
