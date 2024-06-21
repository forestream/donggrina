import React, { PropsWithChildren } from 'react';
import { useCalendarContext } from '../../calendar';
import styles from './calendar-header.module.scss';

export default function CalendarHeader(props: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{props.children}</h2>
      <TodayButton />
    </div>
  );
}

function TodayButton() {
  const calendarContext = useCalendarContext();
  return (
    <button className={styles['today-button']} onClick={calendarContext.onResetToday}>
      오늘 날짜
    </button>
  );
}
