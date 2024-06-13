export interface Pet {
  petId: number;
  profileImage: string;
  name: string;
}

export interface Todo {
  id: number;
  title: string;
  category: string;
  dateTime: string;
  memberProfileImageUrl: string;
  nickname: string;
  petProfileImageUrl: string;
  isFinished: boolean;
  isMine: boolean;
}
