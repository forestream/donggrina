import { NextRouter } from 'next/router';

export const isNav = (router: NextRouter) => {
  const navPaths = ['/login', '/start-family', '/404', '/start-pet'];
  return navPaths.some((path) => router.pathname.includes(path));
};
