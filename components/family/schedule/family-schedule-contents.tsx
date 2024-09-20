import React from 'react';
import FamilyScheduleEmpty from './empty/family-schedule-empty';
import FamilyScheduleList from './list/family-schedule-list';
// import CalendarInstance from '@/utils/date/date.utils';
// import useDailyTodosQuery from '@/hooks/queries/calendar/use-daily-todos-query';
// import { DailyTodo } from '@/api/calendar/request.type';
import { SCHEDULE_QUERY } from '@/lib/mock/mock';

export default function FamilyScheduleContents() {
  // const date = CalendarInstance.getTodayData();
  // const scheduleQuery = useDailyTodosQuery(date);
  const scheduleQuery = SCHEDULE_QUERY;

  if (!scheduleQuery.data!.length) return <FamilyScheduleEmpty />;

  return <FamilyScheduleList data={scheduleQuery.data!} />;
}
