import { NextRouter } from 'next/router';

export const isHeader = (router: NextRouter) => {
  return router.pathname === '/login' || router.pathname === '/landing' || router.pathname === '/404';
};
