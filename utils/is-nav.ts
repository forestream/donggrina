import { NextRouter } from 'next/router';

export const isNav = (router: NextRouter) => {
  const navPaths = ['/calendar', '/family', '/diaries', '/growth', '/story'];
  return navPaths.some((path) => router.pathname === path);
};
