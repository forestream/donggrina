import React from 'react';
import FamilyScheduleContents from './family-schedule-contents';
import FamilyScheduleFetcher from './family-schedule-fetcher';
import styles from './family-schedule.module.scss';

export default function FamilySchedule() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>일정기록</h2>
      <FamilyScheduleFetcher>
        <FamilyScheduleContents />
      </FamilyScheduleFetcher>
    </section>
  );
}
