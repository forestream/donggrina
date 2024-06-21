import React from 'react';
import styles from './family-schedule-list.module.scss';
import { DailyTodo } from '@/api/calendar/request.type';
import CalendarTodo from '@/components/calendar-monthly/calendar-todo';

interface FamilyScheduleListProps {
  data: DailyTodo[];
}

export default function FamilyScheduleList(props: FamilyScheduleListProps) {
  return (
    <ul className={styles['schedule-list']}>
      {props.data.map((todo) => (
        <CalendarTodo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
