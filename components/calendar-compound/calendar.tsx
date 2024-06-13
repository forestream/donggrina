import { PropsWithChildren, createContext, useContext } from 'react';
import * as Components from '@/components/calendar-compound/components';
import CalendarInstance from '@/utils/date/date.utils';
import useSelect from '@/hooks/use-select';
import { InitialState } from './calendar.type';

const initialState = {
  year: CalendarInstance.currentYear,
  month: CalendarInstance.currentMonth,
  date: CalendarInstance.currentDate,
  onSelectedMonth: () => {},
  onSelectedDate: () => {},
  onSelectedYear: () => {},
  onResetToday: () => {},
};

const CalendarContext = createContext<InitialState>(initialState);

export function useCalendarContext() {
  const calendarContext = useContext(CalendarContext);
  if (!calendarContext) throw new Error('Calendar Context에서 사용해야 합니다.');
  return calendarContext;
}

export default function Calendar(props: PropsWithChildren) {
  const { selectedItem: selectedYear, handleSelectedItem: onSelectedYear } = useSelect<number>(
    CalendarInstance.currentYear,
  );
  const { selectedItem: selectedMonth, handleSelectedItem: onSelectedMonth } = useSelect<number>(
    CalendarInstance.currentMonth,
  );
  const { selectedItem: selectedDate, handleSelectedItem: onSelectedDate } = useSelect<number>(
    CalendarInstance.currentDate,
  );

  const onResetToday = () => {
    onSelectedYear(CalendarInstance.currentYear);
    onSelectedMonth(CalendarInstance.currentMonth);
    onSelectedDate(CalendarInstance.currentDate);
  };

  const value = {
    year: selectedYear,
    month: selectedMonth,
    date: selectedDate,
    onSelectedMonth,
    onSelectedDate,
    onSelectedYear,
    onResetToday,
  };

  return (
    <CalendarContext.Provider value={value}>
      <section style={{ paddingTop: '54px' }}>{props.children}</section>
    </CalendarContext.Provider>
  );
}

Calendar.Header = Components.Header;
Calendar.Year = Components.Year;
Calendar.Month = Components.Month;
Calendar.Weekly = Components.Weekly;
