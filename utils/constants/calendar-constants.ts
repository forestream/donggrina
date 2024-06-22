export const CALENDAR_CATEGORIES: {
  [key: string]: {
    value: string;
    image: string;
    backgroundColor: string;
  };
} = {
  기념: {
    value: 'anniversary',
    image: '/images/calendar/category-anniversary.svg',
    backgroundColor: '#F4A4B1',
  },
  '사료 구입': {
    value: 'feed',
    image: '/images/calendar/category-feed.svg',
    backgroundColor: '#8FCC93',
  },
  미용: {
    value: 'grooming',
    image: '/images/calendar/category-grooming.svg',
    backgroundColor: '#61A0FF',
  },
  투약: {
    value: 'medicine',
    image: '/images/calendar/category-medicine.svg',
    backgroundColor: '#A4BDFF',
  },
  기타: {
    value: 'other',
    image: '/images/calendar/category-other.svg',
    backgroundColor: '#9EBF58',
  },
  목욕: {
    value: 'shower',
    image: '/images/calendar/category-shower.svg',
    backgroundColor: '#80D1FF',
  },
  병원: {
    value: 'vet',
    image: '/images/calendar/category-vet.svg',
    backgroundColor: '#9498FF',
  },
  산책: {
    value: 'walk',
    image: '/images/calendar/category-walk.svg',
    backgroundColor: '#FFBF5F',
  },
};

export const CALENDAR_DAYS = ['월', '화', '수', '목', '금', '토', '일'];

export const CALENDAR_EMPTY_DATES = [6, 0, 1, 2, 3, 4, 5];

export const CALENDAR_DAYS_KOREAN = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

export const TIME_SELECTOR: { [key: string]: string[] } = {
  ampm: ['오전', '오후'],
  hour: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  minute: [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
  ],
};

export const TIME_SELECTOR_HEIGHT = 130;

export const TODO_CATEGORY = ['산책', '사료 구입', '목욕', '병원', '투약', '미용', '기념', '기타'];
