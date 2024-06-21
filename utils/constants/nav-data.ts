import BookSVG from '@/public/images/nav/book.svg';
import CalendarSVG from '@/public/images/nav/calendar.svg';
import HomeSVG from '@/public/images/nav/home.svg';
import SmileSVG from '@/public/images/nav/smile.svg';
import GrowthSVG from '@/public/images/nav/growth.svg';

export const NAV_LIST_DATA = [
  {
    text: '패밀리',
    RenderSvgComponent: BookSVG,
    href: '/family',
  },
  {
    text: '일정기록',
    RenderSvgComponent: CalendarSVG,
    href: '/calendar',
  },
  {
    text: '다이어리',
    RenderSvgComponent: HomeSVG,
    href: '/diaries',
  },
  {
    text: '성장기록',
    RenderSvgComponent: GrowthSVG,
    href: '/growth',
  },
  {
    text: '스토리',
    RenderSvgComponent: SmileSVG,
    href: '/스토리',
  },
];
