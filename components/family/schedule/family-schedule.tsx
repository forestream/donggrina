import React from 'react';
import FamilyScheduleContents from './family-schedule-contents';
import styles from './family-schedule.module.scss';
import Suspensive from '@/components/suspensive/suspensive';
import CalendarInstance from '@/utils/date/date.utils';
import useDailyTodosQuery from '@/hooks/queries/calendar/use-daily-todos-query';
import FamilyCalendarSkeleton from '@/components/skeleton/family/calendar';

const FamilyScheduleSkeletonContainer = () => {
  return (
    <div className={styles.skeletonContainer}>
      <FamilyCalendarSkeleton />
      <FamilyCalendarSkeleton />
    </div>
  );
};

export default function FamilySchedule() {
  const date = CalendarInstance.getTodayData();
  const scheduleQuery = useDailyTodosQuery(date);
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>일정기록</h2>
      <Suspensive fallback={<FamilyScheduleSkeletonContainer />} isLoading={scheduleQuery.isLoading}>
        <FamilyScheduleContents />
      </Suspensive>
    </section>
  );
}
