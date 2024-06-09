import axios from 'axios';

export const axiosInstance = (token: string) =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Cookie: `Authorization=${token}`,
    },
    withCredentials: true,
  });
