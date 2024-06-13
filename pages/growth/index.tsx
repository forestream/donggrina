import React from 'react';
import GrowthList from '@/components/growth/list';
import Calendar from '@/components/calendar-compound/calendar';
import { GetServerSidePropsContext } from 'next';
import validateYear from '@/utils/validate-year';
import validateMonth from '@/utils/validate-month';
import validateDate from '@/utils/validate-date';
import { CalendarProps } from '../calendar';
import styles from './growth.module.scss';
import getDay from '@/utils/get-day';
import AddButton from '@/components/common/add-button/add-button';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let {
    query: { year, month, date },
  } = context;

  if (typeof year === 'object') year = year[0];
  if (typeof month === 'object') month = month[0];
  if (typeof date === 'object') date = date[0];

  const today = new Date();
  const [yearToday, monthToday] = [today.getFullYear(), today.getMonth() + 1];

  if (!validateYear(year)) year = String(yearToday);
  if (!validateMonth(month)) month = String(monthToday);
  if (!validateDate(date)) date = '1';

  return { props: { year: +(year as string), month: +(month as string), date: +(date as string) } };
}

export default function GrowthPage({ year, month, date }: CalendarProps) {
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
