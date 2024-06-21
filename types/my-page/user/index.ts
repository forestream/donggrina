export interface User {
  data: UserData;
}

export interface UserData {
  id: number;
  nickname: string;
  profileImageUrl: string;
  imageId: number | null;
}
