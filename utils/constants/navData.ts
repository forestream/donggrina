import BookSVG from '@/public/images/nav/book.svg';
import CalendarSVG from '@/public/images/nav/calendar.svg';
import HomeSVG from '@/public/images/nav/home.svg';
import SmileSVG from '@/public/images/nav/smile.svg';
import UserSVG from '@/public/images/nav/user.svg';

export const NAV_LIST_DATA = [
  {
    text: '패밀리',
    RenderSvgComponent: BookSVG,
    href: '/family',
  },
  {
    text: '달력',
    RenderSvgComponent: CalendarSVG,
    href: '/calendar',
  },
  {
    text: '다이어리',
    RenderSvgComponent: HomeSVG,
    href: '/다이어리',
  },
  {
    text: '스토리',
    RenderSvgComponent: SmileSVG,
    href: '/스토리',
  },
  {
    text: '내정보',
    RenderSvgComponent: UserSVG,
    href: '/내정보',
  },
];
