import React from 'react';
import Avatar from '@/components/avatar/avatar';
import styles from './family-schedule.module.scss';

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

function FamilyScheduleItem() {
  return (
    <li className={styles['schedule-list__item']}>
      <div className={styles['schedule-item__type']}></div>
      <div className={styles['schedule-item__content']}>
        <div className={styles['content-todo']}>산책 (09:00)</div>
        <Avatar border="gray" />
      </div>
      <div className={styles['schedule-item__input']}>
        <input type="checkbox" />
      </div>
    </li>
  );
}
