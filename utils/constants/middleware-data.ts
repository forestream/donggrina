export class MiddlewareData {
  constructor() {}
  PROTECTED_PAGES = [];
  PUBLIC_PAGES = [
    '/',
    '/start-family',
    '/calendar',
    '/start-pet',
    '/family',
    '/mypage',
    '/diaries',
    '/growth',
    '/story',
  ];
  FAMILY_PAGES = ['/start-pet', '/family', '/mypage', '/diaries', '/calendar', '/growth', '/story'];
  NON_FAMILY_PAGES = ['/start-family', '/start-family/entry-info', '/start-family/register-code'];
  MATCHER_PAGES = [
    '/start-family/:path*',
    '/',
    '/start-pet/:path',
    '/calendar/:path*',
    '/family/:path*',
    '/mypage/:path*',
    '/diaries/:path*',
    '/calendar/:path*',
    '/growth/:path*',
    '/story/:path*',
    '/mypage/:path*',
  ];
}
