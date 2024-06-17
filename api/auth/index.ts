import { axiosAuthInstance } from '..';

interface TokenType {
  accessToken: string;
  refreshToken: string;
}

export const reissuanceAt = async (token: TokenType) => {
  return await axiosAuthInstance.post('/refresh', token);
};
