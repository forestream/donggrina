import React, { PropsWithChildren } from 'react';
import styles from './calendar-year.module.scss';
import { useCalendarContext } from '../../calendar';

export default function CalendarYear() {
  const calendarContext = useCalendarContext();
  return (
    <ul className={styles['calendar-year-list']}>
      {calendarContext.years.map((year) => (
        <CalendarYearItem key={year}>{year}</CalendarYearItem>
      ))}
    </ul>
  );
}

function CalendarYearItem(props: PropsWithChildren) {
  return (
    <li className={styles['calendar-year-item']}>
      <button>{props.children}</button>
    </li>
  );
}
