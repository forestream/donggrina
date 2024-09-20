export const GROWTH = {
  data: {
    data: [
      {
        category: '병원 기록',
        content: '병원을 다녀옴',
        dateTime: { year: '2024', month: '6', day: '24', hour: '13', minute: '33', second: '00' },
        id: 3,
        isMine: true,
        nickname: '산도발',
        petName: '치즈',
        petProfileImageUrl: 'https://picsum.photos/id/237/200',
        writerProfileImageUrl: 'https://picsum.photos/id/238/200',
      },
    ],
  },
};

export const DIARY_QUERY = {
  data: [
    {
      author: '산도발',
      authorImage: 'https://picsum.photos/id/237/200',
      commentCount: 23,
      content: '즐거운 하루',
      contentImage: 'https://picsum.photos/id/238/200',
      createdDate: '2024-05-20T20:00:00',
      diaryId: 3,
      favoriteCount: 33,
      favoriteState: true,
      isMyDiary: true,
      petImages: ['3', '2'],
    },
  ],
};

export const SCHEDULE_QUERY = {
  data: [
    {
      id: 23,
      title: '미용 시키기',
      category: '미용',
      dateTime: '2024-07-30T09:00:00',
      memberProfileImageUrl: 'https://picsum.photos/id/23/200',
      nickname: '산도발',
      petProfileImageUrl: 'https://picsum.photos/id/37/200',
      petName: '바둑이',
      isFinished: false,
      isMine: true,
    },
  ],
};

export const TODO_BY_ID = {
  id: 23,
  title: '미용 시키기',
  memo: '털이 너무 자라서 미용시켜야 한다.',
  category: '미용',
  dateTime: '2024-07-30T09:00:00',
  writerProfileImageUrl: 'https://picsum.photos/id/23/200',
  writerNickName: '산도발',
  petProfileImageUrl: 'https://picsum.photos/id/37/200',
  petName: '바둑이',
  isFinished: false,
  isMine: true,
};

export const MONTLY_TODOS = [
  {
    date: '2024-07-21',
    count: 2,
  },
  {
    date: '2024-07-11',
    count: 1,
  },
  {
    date: '2024-07-24',
    count: 6,
  },
];

export const DAILY_TODOS = [
  {
    id: 23,
    title: '미용 시키기',
    category: '미용',
    dateTime: '2024-07-30T09:00:00',
    memberProfileImageUrl: 'https://picsum.photos/id/23/200',
    nickname: '산도발',
    petProfileImageUrl: 'https://picsum.photos/id/37/200',
    petName: '바둑이',
    isFinished: false,
    isMine: true,
  },
  {
    id: 24,
    title: '산책 시키기',
    category: '산책',
    dateTime: '2024-07-03T19:00:00',
    memberProfileImageUrl: 'https://picsum.photos/id/23/200',
    nickname: '산도발',
    petProfileImageUrl: 'https://picsum.photos/id/37/200',
    petName: '바둑이',
    isFinished: false,
    isMine: true,
  },
  {
    id: 25,
    title: '사료 구매하기',
    category: '사료 구입',
    dateTime: '2024-07-15T09:00:00',
    memberProfileImageUrl: 'https://picsum.photos/id/23/200',
    nickname: '산도발',
    petProfileImageUrl: 'https://picsum.photos/id/37/200',
    petName: '바둑이',
    isFinished: false,
    isMine: true,
  },
];
