import React from 'react';
import styles from './family-schedule-list.module.scss';
import { DailyTodo } from '@/api/calendar/request.type';
import CalendarTodo from '@/components/calendar-monthly/calendar-todo';
import { motion } from 'framer-motion';
import { childrenHorizontalVariants, containerVariants } from '@/components/framer';
interface FamilyScheduleListProps {
  data: DailyTodo[];
}

export default function FamilyScheduleList(props: FamilyScheduleListProps) {
  return (
    <motion.ul className={styles['schedule-list']} variants={containerVariants} initial="hidden" animate="visible">
      {props.data.map((todo) => (
        <motion.li key={todo.id} variants={childrenHorizontalVariants}>
          <CalendarTodo todo={todo} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
