import { NextRouter } from 'next/router';
import React from 'react';
import BackHeader from './back-header';
import MainHeader from './main-header';
import CreateHeader from './create-header';

interface HeaderProps {
  router: NextRouter;
}
export default function Header({ router }: HeaderProps) {
  const MainPaths = ['/calendar', '/family', '/diaries', '/growth', '/story'];

  if (router.pathname === '/login' || router.pathname === '/landing' || router.pathname === '/404') {
    return <BackHeader />;
  } else if (MainPaths.some((path) => router.pathname === path)) {
    return <MainHeader />;
  } else {
    let headerName = '';

    if (router.pathname.includes('edit') || router.pathname.includes('create')) {
      if (router.pathname.includes('/calendar')) {
        headerName = '일정 등록';
      } else if (router.pathname.includes('/diaries')) {
        headerName = '다이어리';
      } else if (router.pathname.includes('/growth')) {
        headerName = '성장기록';
      }
    }

    return <CreateHeader headerName={headerName} />;
  }
}
