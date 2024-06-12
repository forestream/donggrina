import Image from 'next/image';
import styles from './create-todo-button.module.scss';
import Link from 'next/link';
import { useCalendarContext } from '../calendar-compound/calendar';

export default function CreateTodoButton() {
  const calendarContext = useCalendarContext();
  const year = calendarContext.year;
  const month = calendarContext.month + 1;
  const date = calendarContext.date;

  return (
    <Link href={`/calendar/create?year=${year}&month=${month}&date=${date}`} className={styles.outer}>
      <Image src="images/calendar/new-todo.svg" alt="할일 추가 버튼" width={20} height={20} />
    </Link>
  );
}
