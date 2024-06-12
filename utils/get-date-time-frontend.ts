import { DateTime } from '@/pages/calendar/create';

export default function getDateTimeFrontend(dateTime: DateTime) {
  if (Object.values(dateTime).includes(null)) return '';

  const { year, month, date, ampm, hour, minute } = dateTime;

  return `${year}-${month}-${date} ${ampm} ${hour}:${minute}`;
}
