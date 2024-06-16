import React from 'react';
import FamilyScheduleItem from './family-schedule-item';
import FamilyScheduleEmpty from './family-schedule-empty';
import { useFetchSchedule } from '@/hooks/queries/family';
import styles from './family-schedule.module.scss';

export default function FamilySchedule() {
  const scheduleQueries = useFetchSchedule('2024-06-16');

  if (scheduleQueries.isLoading) return <p>로딩중입니다.</p>;

  // console.log(scheduleQueries.data);
  // console.log(scheduleQueries.data);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>일정기록</h2>

      {!scheduleQueries.data!.length && <FamilyScheduleEmpty />}
      {!!scheduleQueries.data!.length && (
        <ul className={styles['schedule-list']}>
          <FamilyScheduleItem />
          <FamilyScheduleItem />
          <FamilyScheduleItem />
        </ul>
      )}
    </section>
  );
}
