import React from 'react';
import styles from './family-schedule.module.scss';
import FamilyScheduleItem from './family-schedule-item';
import FamilyScheduleEmpty from './family-schedule-empty';

export default function FamilySchedule() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>일정기록</h2>
      <FamilyScheduleEmpty />
      {/* <ul className={styles['schedule-list']}>
        <FamilyScheduleItem />
        <FamilyScheduleItem />
        <FamilyScheduleItem />
      </ul> */}
    </section>
  );
}
