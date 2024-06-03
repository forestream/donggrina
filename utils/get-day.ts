import { CALENDAR_DAYS_KOREAN } from '@/lib/constants/calendar-constants';

export default function getDay(year: string, month: string, date: string) {
  const dateObj = new Date(+year, +month, +date);
  const day = dateObj.getDay();
  return CALENDAR_DAYS_KOREAN[day];
}
