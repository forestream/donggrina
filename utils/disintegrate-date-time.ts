import { CALENDAR_DAYS_KOREAN } from './constants/calendar-constants';

export default function disintegrateDateTime(dateTime: string | undefined) {
  if (!dateTime) return { year: 2000, month: 1, date: 1, ampm: '오전', hour: 12, minute: 0, day: '일요일' };

  const year = new Date(dateTime).getFullYear();
  const month = new Date(dateTime).getMonth() + 1;
  const date = new Date(dateTime).getDate();
  const ampm = new Date(dateTime).getHours() >= 12 ? '오후' : '오전';
  const fullHour = new Date(dateTime).getHours();
  const hour = fullHour > 12 ? fullHour - 12 : fullHour === 0 ? 12 : fullHour;
  const minute = new Date(dateTime).getMinutes();
  const day = CALENDAR_DAYS_KOREAN[new Date(dateTime).getDay()];

  return { year, month, date, ampm, hour, minute, day };
}
