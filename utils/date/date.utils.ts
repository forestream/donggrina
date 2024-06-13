import Core from './date.core';
import { dayMap } from './date.constant';
import { Days } from './date.type';

class Calendar extends Core {
  public DAY_LIST: (daysInMonth: number) => number[];
  public MONTH_LIST: number[];
  public YEAR_LIST: number[];

  constructor(date: Date) {
    super(date);

    this.DAY_LIST = (daysInMonth: number) =>
      Array(daysInMonth)
        .fill(0)
        .map((_, index) => index + 1);

    this.MONTH_LIST = Array(12)
      .fill(0)
      .map((_, index) => index);

    this.YEAR_LIST = [this.currentYear - 1, this.currentYear, this.currentYear + 1];
  }

  daysInMonth(currentYear?: number, currentMonth?: number) {
    const year = currentYear || this.currentYear;
    const month = currentMonth ?? this.currentMonth;
    return new Date(year, month + 1, 0).getDate();
  }

  calculateDay(currentYear?: number, currentMonth?: number, currentDate?: number) {
    const year = currentYear || this.currentYear;
    const month = currentMonth ?? this.currentMonth;
    const date = currentDate ?? this.currentDate;

    const calulateDay = new Date(year, month, date).getDay() as Days;
    return dayMap[calulateDay];
  }

  getToday() {
    return `${this.currentMonth + 1}월 ${this.currentDate}일 ${this.calculateDay()}요일`;
  }
}

const CalendarInstance = new Calendar(new Date());

export default CalendarInstance;
