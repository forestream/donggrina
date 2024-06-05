import Core from './date.core';
import { dayMap } from './date.constant';
import { Days } from './date.type';

interface DaysInMonth {
  currentYear: number;
  currentMonth: number;
}

class Calendar extends Core {
  constructor(date: Date) {
    super(date);
  }

  daysInMonth({ currentYear, currentMonth }: DaysInMonth) {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  }

  calculateDate(month: number, currentDate: number) {
    const calulateDay = new Date(this.currentYear, month, currentDate).getDay() as Days;
    return dayMap[calulateDay];
  }
}

export const CalendarInstance = new Calendar(new Date());
