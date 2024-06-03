import styles from './calendar.module.scss';
import CalendarContainer from '@/components/calendar/calendar-container';
import getDay from '@/utils/get-day';
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

  if (!year || Number(year) < yearToday - 100 || Number(year) > yearToday + 100) year = String(yearToday);
  if (!month || Number(month) < 1 || Number(month) > 12) month = String(monthToday);
  if (!date || Number(date) < 1 || Number(date) > 31) date = '1';

  return { props: { year, month, date } };
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
    </main>
  );
}
