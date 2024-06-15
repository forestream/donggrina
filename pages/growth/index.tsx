import React from 'react';
// import GrowthList from '@/components/growth/list';
import Calendar from '@/components/calendar-compound/calendar';
import styles from './growth.module.scss';
import getDay from '@/utils/get-day';
import AddButton from '@/components/common/add-button/add-button';
import { useGetGrotwthByDateQuery } from '@/hooks/queries/growth/use-get-growth-queries';
import { convertToLocalDate } from '@/utils/convert-local-date';
import useCalenderDateStore from '@/store/calendar.store';

export default function GrowthPage() {
  const calenderStore = useCalenderDateStore();
  const year = useCalenderDateStore.use.year().toString();
  const month = (useCalenderDateStore.use.month() + 1).toString();
  const date = useCalenderDateStore.use.date().toString();
  const day = getDay(Number(year), Number(month), Number(date));
  const localDate = convertToLocalDate({ year, month, day: date });

  const { data: growthLists } = useGetGrotwthByDateQuery(localDate);
  console.log(growthLists);

  return (
    <>
      <Calendar value={calenderStore}>
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
          {/* <GrowthList text={text} writer={writer} pet={pet} categoryName={categortyName} /> */}
        </div>
        <AddButton href={'/'} />
      </div>
    </>
  );
}
