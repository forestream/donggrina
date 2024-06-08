import Calendar from '../../../components/calendar-compound/calendar';
import React from 'react';

export default function CalendarPage() {
  return (
    <Calendar>
      <Calendar.Year />
      <Calendar.Month />
      <Calendar.Weekly />
    </Calendar>
  );
}
