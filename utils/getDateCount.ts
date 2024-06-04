import isLeapYear from './isLeapYear';

export default function getDateCount(year: number, month: number) {
  const leapYear = isLeapYear(year);
  const dateArray = [31, leapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return dateArray[month - 1];
}
