import { PropsWithChildren, createContext, useContext } from 'react';
import * as Components from '@/components/calendar-compound/components';
import { CalendarInstance } from '@/utils/date/date.utils';
import { InitialState } from './calendar.type';
import useSelect from '@/hooks/use-select';

const initialState = {
  years: [],
  month: 1,
  date: 1,
  onSelectedMonth: () => {},
  onSelectedDate: () => {},
};

const CalendarContext = createContext<InitialState>(initialState);

export function useCalendarContext() {
  const calendarContext = useContext(CalendarContext);
  if (!calendarContext) throw new Error('Calendar Context에서 사용해야 합니다.');
  return calendarContext;
}

export default function Calendar(props: PropsWithChildren) {
  const { selectedItem: selectedMonth, handleSelectedItem: onSelectedMonth } = useSelect<number>(
    CalendarInstance.currentMonth,
  );
  const { selectedItem: selectedDate, handleSelectedItem: onSelectedDate } = useSelect<number>(
    CalendarInstance.currentDate,
  );

  const value = {
    years: [CalendarInstance.currentYear],
    month: selectedMonth,
    date: selectedDate,
    onSelectedMonth,
    onSelectedDate,
  };

  return (
    <CalendarContext.Provider value={value}>
      <section style={{ paddingTop: '54px' }}>{props.children}</section>
    </CalendarContext.Provider>
  );
}

Calendar.Year = Components.Year;
Calendar.Month = Components.Month;
Calendar.Weekly = Components.Weekly;
