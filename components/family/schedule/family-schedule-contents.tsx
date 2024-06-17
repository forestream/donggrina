import React from 'react';
import { useFetchSchedule } from '@/hooks/queries/family';
import FamilyScheduleEmpty from './empty/family-schedule-empty';
import FamilyScheduleList from './list/family-schedule-list';
import CalendarInstance from '@/utils/date/date.utils';

export default function FamilyScheduleContents() {
  const date = CalendarInstance.getTodayData();
  const scheduleQueries = useFetchSchedule(date);

  if (!scheduleQueries.data!.length) return <FamilyScheduleEmpty />;

  return <FamilyScheduleList />;
}
