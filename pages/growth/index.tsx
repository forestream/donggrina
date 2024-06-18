import React from 'react';
import GrowthList from '@/components/growth/list';
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
          {growthLists?.data.map((growth, index) => {
            return (
              <GrowthList
                key={index}
                nickname={growth.nickname}
                petImage={growth.petProfileImageUrl}
                writerImage={growth.writerProfileImageUrl}
                category={growth.category}
                text={growth.content}
                isMine={growth.isMine}
                petName={growth.petName}
              />
            );
          })}
        </div>
        <AddButton href={'/growth/create'} />
      </div>
    </>
  );
}
