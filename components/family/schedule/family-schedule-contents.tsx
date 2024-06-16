import React from 'react';
import { useFetchSchedule } from '@/hooks/queries/family';
import FamilyScheduleEmpty from './family-schedule-empty';
import FamilyScheduleList from './family-schedule-list';

export default function FamilyScheduleContents() {
  const scheduleQueries = useFetchSchedule('2024-06-16');

  if (!scheduleQueries.data!.length) return <FamilyScheduleEmpty />;

  return <FamilyScheduleList />;
}
