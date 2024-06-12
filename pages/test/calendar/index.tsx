import Calendar from '../../../components/calendar-compound/calendar';
import React from 'react';

export default function CalendarPage() {
  return (
    <Calendar>
      <Calendar.Header>다이어리</Calendar.Header>
      <Calendar.Year />
      <Calendar.Month />
      <Calendar.Weekly />
    </Calendar>
  );
}
