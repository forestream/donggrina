import React from 'react';
import DiaryContent from '@/components/diaries/diary-content/diary-content';
import Calendar from '@/components/calendar-compound/calendar';
import useCalenderDateStore from '@/store/calendar.store';
import getDay from '@/utils/get-day';
import styles from './create.module.scss';

const Diaries = () => {
  const calenderStore = useCalenderDateStore();
  const year = useCalenderDateStore.use.year().toString();
  const month = (useCalenderDateStore.use.month() + 1).toString().padStart(2, '0');
  const date = useCalenderDateStore.use.date().toString().padStart(2, '0');
  const day = getDay(Number(year), Number(month), Number(date));
  const formattedDate = `${year}-${month}-${date}`;

  return (
    <>
      <Calendar value={calenderStore}>
        <Calendar.Header>다이어리</Calendar.Header>
        <Calendar.Year />
        <Calendar.Month />
        <Calendar.Weekly />
      </Calendar>
      <div className={styles.diaryContainer}>
        <div className={styles.date}>
          {month}월 {date}일 {day}
        </div>
        <div className={styles.diaryContent}>
          <DiaryContent date={formattedDate} />
        </div>
      </div>
    </>
  );
};

export default Diaries;
