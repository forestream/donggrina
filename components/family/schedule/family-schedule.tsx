import React from 'react';
import FamilyScheduleContents from './family-schedule-contents';
import styles from './family-schedule.module.scss';
import Suspensive from '@/components/suspensive/suspensive';
import { useFetchSchedule } from '@/hooks/queries/family';
import CalendarInstance from '@/utils/date/date.utils';

export default function FamilySchedule() {
  const date = CalendarInstance.getTodayData();
  const scheduleQuery = useFetchSchedule(date);
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>일정기록</h2>
      <Suspensive isLoading={scheduleQuery.isLoading}>
        <FamilyScheduleContents />
      </Suspensive>
    </section>
  );
}
