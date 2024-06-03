import BookSVG from '@/public/images/nav/book.svg';
import CalendarSVG from '@/public/images/nav/calendar.svg';
import HomeSVG from '@/public/images/nav/home.svg';
import SmileSVG from '@/public/images/nav/smile.svg';
import UserSVG from '@/public/images/nav/user.svg';

export const NAVVALUE = [
  {
    text: '패밀리',
    SvgValue: BookSVG,
    href: '/family',
  },
  {
    text: '달력',
    SvgValue: CalendarSVG,
    href: '/달력',
  },
  {
    text: '다이어리',
    SvgValue: HomeSVG,
    href: '/다이어리',
  },
  {
    text: '스토리',
    SvgValue: SmileSVG,
    href: '/스토리',
  },
  {
    text: '내정보',
    SvgValue: UserSVG,
    href: '/내정보',
  },
];
