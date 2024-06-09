import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const PROTECTED_PAGES = ['/start-family'];
const PUBLIC_PAGES = ['/login'];

export default function middleware(request: NextRequest) {
  const { cookies, nextUrl } = request;
  const path = nextUrl.pathname;
  const isProtectedPage = PROTECTED_PAGES.includes(path);
  const isPublicPage = PUBLIC_PAGES.includes(path);

  // 로그인 상태 확인
  const hasCookie = cookies.has('Authorization');

  // 쿼리 파라미터에서 token 값 확인
  const hasQuery = nextUrl.search.includes('token');

  // /start-family 페이지로 접근하는데 token이 있을 경우 : 페이지 접근
  // /start-family 페이지로 접근하는데 token이 없을 경우 : 리다이렉션
  // /start-family 페이지로 접근하는데 token이 없지만 쿠키가 있을 경우 : 페이지 접근
  // 추후 배포됐을 때 수정.
  if (path === '/start-family') {
    if (hasQuery || hasCookie) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
  }

  // 비로그인 상태일 때 로그인이 필요한 페이지에 접근 시 리다이렉션
  if (!hasCookie && isProtectedPage) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  // 로그인 상태일 때 로그인 페이지에 접근 시 리다이렉션
  if (hasCookie && isPublicPage) {
    return NextResponse.redirect(new URL('/', request.nextUrl.origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...PUBLIC_PAGES, ...PROTECTED_PAGES],
};
