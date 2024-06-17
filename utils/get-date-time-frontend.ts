import { DateTime } from '@/types/calendar';

export default function getDateTimeFrontend(dateTime: DateTime) {
  if (Object.values(dateTime).includes(null)) return '';

  const { year, month, date, ampm, hour, minute } = dateTime;

  return `${year}-${month!.toString().padStart(2, '0')}-${date!.toString().padStart(2, '0')} ${ampm} ${hour!.toString().padStart(2, '0')}:${minute!.toString().padStart(2, '0')}`;
}
