import { NextRouter } from 'next/router';

export const isNav = (router: NextRouter) => {
  const navPaths = ['/calendar', '/family', '/diaries', '/growth', '/story'];
  console.log(navPaths.some((path) => router.pathname === path));
  return navPaths.some((path) => router.pathname === path);
};
