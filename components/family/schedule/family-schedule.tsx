import React from 'react';
import styles from './family-schedule.module.scss';
import FamilyScheduleItem from './family-schedule-item';

export default function FamilySchedule() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>성장기록</h2>
      <ul className={styles['schedule-list']}>
        <FamilyScheduleItem />
        <FamilyScheduleItem />
        <FamilyScheduleItem />
      </ul>
    </section>
  );
}
