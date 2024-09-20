import { fetchDiariesByQueries, fetchGrowthsByQueries, fetchTodosByQueries } from '@/apis/search';

export const FILTERS = [
  {
    imageOn: '/images/search/calendar-on.svg',
    imageOff: '/images/search/calendar-off.svg',
    name: '일정기록',
    value: 'calendar',
  },
  {
    imageOn: '/images/search/diary-on.svg',
    imageOff: '/images/search/diary-off.svg',
    name: '다이어리',
    value: 'diary',
  },
  {
    imageOn: '/images/search/growth-on.svg',
    imageOff: '/images/search/growth-off.svg',
    name: '성장기록',
    value: 'growth',
  },
];

export const SERVICE_CONFIGS = {
  family: {
    isGlobalSearch: true,
    hasCalendar: false,
    path: '/family',
    api: '',
    queries: [],
    get() {},
  },
  calendar: {
    isGlobalSearch: false,
    hasCalendar: false,
    path: '/calendar/search/results',
    api: '/calendar/search',
    queries: ['keyword', 'petNames', 'writerNames'],
    get(searchParams: string) {
      return fetchTodosByQueries(searchParams);
    },
  },
  growth: {
    isGlobalSearch: false,
    hasCalendar: false,
    path: '/growth',
    api: '/growth/search',
    queries: ['keyword', 'petNames', 'writerNames'],
    get(searchParams: string) {
      return fetchGrowthsByQueries(searchParams);
    },
  },
  diary: {
    isGlobalSearch: false,
    hasCalendar: true,
    path: '/diary',
    api: '/diaries/search',
    queries: ['keyword', 'pet', 'author', 'date'],
    get(searchParams: string) {
      return fetchDiariesByQueries(searchParams);
    },
  },
};
