import { axiosInstance } from '..';

interface TokenType {
  accessToken: string;
  refreshToken: string;
}

export const reissuanceAt = async (token: TokenType) => {
  return await axiosInstance.post('/refresh', token);
};
