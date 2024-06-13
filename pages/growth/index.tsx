import React from 'react';
import GrowthList from '@/components/growth/list';
import Calendar, { useCalendarContext } from '@/components/calendar-compound/calendar';
import styles from './growth.module.scss';
import getDay from '@/utils/get-day';
import AddButton from '@/components/common/add-button/add-button';

export default function GrowthPage() {
  const { year, month, date } = useCalendarContext();
  console.log(year, month, date);
  const day = getDay(year, month, date);
  return (
    <>
      <Calendar>
        <Calendar.Header>성장 기록</Calendar.Header>
        <Calendar.Year />
        <Calendar.Month />
        <Calendar.Weekly />
      </Calendar>
      <div className={styles.wrapper}>
        <p className={styles.date}>
          {month}월 {date}일 {day}
        </p>
        <div className={styles.listContainer}>
          <GrowthList />
          <GrowthList />
          <GrowthList />
          <GrowthList />
          <GrowthList />
        </div>
        <AddButton href={'/'} />
      </div>
    </>
  );
}
