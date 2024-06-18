export const FILTERS = [
  {
    imageOn: '/images/search/calendar-on.svg',
    imageOff: '/images/search/calendar-off.svg',
    name: '일정기록',
  },
  {
    imageOn: '/images/search/diary-on.svg',
    imageOff: '/images/search/diary-off.svg',
    name: '다이어리',
  },
  {
    imageOn: '/images/search/growth-on.svg',
    imageOff: '/images/search/growth-off.svg',
    name: '성장기록',
  },
];

export const SERVICE_CONFIGS = {
  family: {
    isGlobalSearch: true,
    path: '/family',
    queries: [],
  },
  calendar: {
    isGlobalSearch: false,
    path: '/calendar/search/results',
    queries: ['keyword', 'petNames', 'writerNames'],
  },
  growth: {
    isGlobalSearch: false,
    path: '/growth',
    queries: ['keyword', 'petNames', 'writerNames'],
  },
  diary: {
    isGlobalSearch: false,
    path: '/diary',
    queries: ['keyword', 'pet', 'author', 'date'],
  },
};
