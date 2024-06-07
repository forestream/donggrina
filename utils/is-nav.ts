import { NextRouter } from 'next/router';

export const isNav = (router: NextRouter) => {
  const navPaths = ['/login', '/start-family', '/404'];
  return navPaths.includes(router.pathname);
};
