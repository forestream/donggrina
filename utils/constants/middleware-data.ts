export class MiddlewareData {
  constructor() {}
  PROTECTED_PAGES = ['/start-family', '/calendar', '/start-pet', '/family', '/mypage', '/diaries'];
  PUBLIC_PAGES = ['/login'];
  FAMILY_PAGES = ['/start-pet', '/family', '/mypage', '/diaries', '/calendar'];
  NON_FAMILY_PAGES = ['/start-family', '/start-family/entry-info', '/start-family/register-code'];
  MATCHER_PAGES = [
    '/start-family/:path*',
    '/login',
    '/start-pet/:path',
    '/calendar/:path*',
    '/family/:path*',
    '/mypage/:path*',
    '/diaries/:path*',
    '/calendar/:path*',
  ];
}
