export default function getFirstDay(year: number, month: number) {
  const firstDay = new Date(year, month - 1).getDay();
  return firstDay;
}
