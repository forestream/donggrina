import Core from './date.core';
import { dayMap } from './date.constant';
import { Days } from './date.type';

class Calendar extends Core {
  public DAY_LIST: (daysInMonth: number) => number[];
  public MONTH_LIST: number[];

  constructor(date: Date) {
    super(date);

    this.DAY_LIST = (daysInMonth: number) =>
      Array(daysInMonth)
        .fill(0)
        .map((_, index) => index + 1);

    this.MONTH_LIST = Array(12)
      .fill(0)
      .map((_, index) => index);
  }

  daysInMonth(currentYear?: number, currentMonth?: number) {
    const year = currentYear || this.currentYear;
    const month = currentMonth ?? this.currentMonth;
    return new Date(year, month + 1, 0).getDate();
  }

  calculateDay(month: number, currentDate: number) {
    const calulateDay = new Date(this.currentYear, month, currentDate).getDay() as Days;
    return dayMap[calulateDay];
  }
}

const CalendarInstance = new Calendar(new Date());

export default CalendarInstance;
