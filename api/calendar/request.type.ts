export interface MonthlyTodos {
  date: string;
  count: number;
}

export interface Pet {
  petId: number;
  imageUrl: string;
  name: string;
}

export interface DailyTodo {
  id: number;
  title: string;
  category: string;
  dateTime: string;
  memberProfileImageUrl: string;
  nickname: string;
  petProfileImageUrl: string;
  petName: string;
  isFinished: boolean;
  isMine: boolean;
}

export interface TodoById {
  id: number;
  title: string;
  memo: string;
  category: string;
  dateTime: string;
  writerProfileImageUrl: string;
  writerNickName: string;
  petProfileImageUrl: string;
  petName: string;
  isFinished: boolean;
  isMine: boolean;
}

export interface TodoByQueries {
  id: number;
  title: string;
  category: string;
  dateTime: string;
  memberProfileImageUrl: string;
  nickname: string;
  petProfileImageUrl: string;
  petName: string;
  isFinished: boolean;
  isMine: boolean;
}
