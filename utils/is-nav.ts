import { NextRouter } from 'next/router';

export const isNav = (router: NextRouter) => {
  const navPaths = [
    '/calendar',
    '/family',
    '/diaries',
    '/growth',
    '/story',
    '/mypage',
    '/mypage/pet',
    '/mypage/family-management',
  ];
  return navPaths.some((path) => router.pathname === path);
};
