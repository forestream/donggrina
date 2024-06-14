import { create } from 'zustand';
import createSelectors from './utils';
import CalendarInstance from '@/utils/date/date.utils';

interface CalenderDateStore {
  year: number;
  month: number;
  date: number;
  onSelectedMonth: (month: number) => void;
  onSelectedDate: (date: number) => void;
  onSelectedYear: (year: number) => void;
  onResetToday: () => void;
}

const useCalendarDateStoreBase = create<CalenderDateStore>()((set) => ({
  year: CalendarInstance.currentYear,
  month: CalendarInstance.currentMonth,
  date: CalendarInstance.currentDate,
  onSelectedMonth: (month) => set(() => ({ month })),
  onSelectedDate: (date) => set(() => ({ date })),
  onSelectedYear: (year) => set(() => ({ year })),
  onResetToday: () =>
    set(() => ({
      year: CalendarInstance.currentYear,
      month: CalendarInstance.currentMonth,
      date: CalendarInstance.currentDate,
    })),
}));

const useCalenderDateStore = createSelectors(useCalendarDateStoreBase);

export default useCalenderDateStore;
