import styles from './calendar.module.scss';
import CalendarContainer from '@/components/calendar/calendar-container';
import CalendarTodo from '@/components/calendar/calendar-todo';
import CreateTodoButton from '@/components/calendar/create-todo-button';
import getDay from '@/utils/get-day';
import validateDate from '@/utils/validate-date';
import validateMonth from '@/utils/validate-month';
import validateYear from '@/utils/validate-year';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

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

export type CalendarProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Calendar({ year, month, date }: CalendarProps) {
  const ymd = { year, month, date };
  const day = getDay(year, month, date);

  return (
    <main className={styles.outer}>
      <CalendarContainer {...ymd} />
      <p className={styles.date}>
        {month}월 {date}일 {day}
      </p>
      <CalendarTodo />
      <CreateTodoButton {...ymd} />
    </main>
  );
}
