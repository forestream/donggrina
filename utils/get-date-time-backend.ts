export default function getDateTimeBackend(dateTime: string) {
  const [date, ampm, time] = dateTime.split(' ');
  const dateTimeBackend = new Date([date, time, ampm === '오전' ? 'am' : 'pm', 'UTC+0'].join(' '))
    .toISOString()
    .slice(0, -8);

  return dateTimeBackend;
}
