export interface Pet {
  petId: number;
  imageUrl: string;
  name: string;
}

export interface Todo {
  id: number;
  title: string;
  memo?: string;
  category: string;
  dateTime: string;
  memberProfileImageUrl: string;
  nickname: string;
  petProfileImageUrl: string;
  petName: string;
  isFinished: boolean;
  isMine: boolean;
}
