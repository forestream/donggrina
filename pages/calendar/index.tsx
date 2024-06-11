import Calendar from '@/components/calendar-compound/calendar';
import styles from './calendar.module.scss';
import CalendarContainer from '@/components/calendar-monthly/calendar-container';
import CalendarTodo from '@/components/calendar-monthly/calendar-todo';
import CreateTodoButton from '@/components/calendar-monthly/create-todo-button';
import validateDate from '@/utils/validate-date';
import validateMonth from '@/utils/validate-month';
import validateYear from '@/utils/validate-year';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import CalendarTodoDate from '@/components/calendar-monthly/calendar-todo-date';

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

  return {
    props: {
      year: +(year as string),
      month: +(month as string),
      date: +(date as string),
    },
  };
}

export type CalendarProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function CalendarPage({ year, month, date }: CalendarProps) {
  const ymd = { year, month, date };

  return (
    <main className={styles.outer}>
      <Calendar>
        <Calendar.Year />
        <Calendar.Month />
        <CalendarContainer {...ymd} />
        <CalendarTodoDate {...ymd} />
        <CalendarTodo />
        <CreateTodoButton {...ymd} />
      </Calendar>
    </main>
  );
}
