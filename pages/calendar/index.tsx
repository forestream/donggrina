import styles from './calendar.module.scss';
import CalendarContainer from '@/components/calendar/calendar-container';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    query: { year, month, date },
  } = context;

  const today = new Date();
  const [yearToday, monthToday, dateToday] = [today.getFullYear(), today.getMonth() + 1, today.getDate()];

  return { props: { year: year || yearToday, month: month || monthToday, date: date || dateToday } };
}

export type CalendarProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Calendar({ year, month, date }: CalendarProps) {
  const ymd = { year, month, date };

  return (
    <main className={styles.outer}>
      <CalendarContainer {...ymd} />
    </main>
  );
}
