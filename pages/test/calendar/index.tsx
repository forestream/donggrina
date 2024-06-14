import useCalenderDateStore from '@/store/calendar.store';
import Calendar from '../../../components/calendar-compound/calendar';
import React from 'react';

export default function CalendarPage() {
  // 모두 다 가져와야할 때.
  const calenderStore = useCalenderDateStore();

  // 데이터가 하나만 필요할 때. 아래와 같이 사용해야 성능적인 리렌더링 문제가 해결 됩니다.
  // const onSelectedMonth = useCalenderDateStore.use.onSelectedMonth();
  // const onSelectedDate = useCalenderDateStore.use.onSelectedDate();
  // const onSelectedYear = useCalenderDateStore.use.onSelectedYear();
  // const onResetToday = useCalenderDateStore.use.onResetToday();
  // const year = useCalenderDateStore.use.year();
  // const month = useCalenderDateStore.use.month();
  // const date = useCalenderDateStore.use.date();

  return (
    <Calendar value={calenderStore}>
      <Calendar.Header>다이어리</Calendar.Header>
      <Calendar.Year />
      <Calendar.Month />
      <Calendar.Weekly />
    </Calendar>
  );
}
