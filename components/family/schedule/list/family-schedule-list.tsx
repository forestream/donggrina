import React from 'react';
import FamilyScheduleItem from '@/components/family/schedule/item/family-schedule-item';
import styles from './family-schedule-list.module.scss';

export default function FamilyScheduleList() {
  return (
    <ul className={styles['schedule-list']}>
      <FamilyScheduleItem />
      <FamilyScheduleItem />
      <FamilyScheduleItem />
    </ul>
  );
}
