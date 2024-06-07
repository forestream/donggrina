import Image from 'next/image';
import styles from './create-todo-button.module.scss';
import Link from 'next/link';
import { CalendarProps } from '@/pages/calendar';

export default function CreateTodoButton({ year, month, date }: CalendarProps) {
  return (
    <Link href={`/calendar/create?year=${year}&month=${month}&date=${date}`} className={styles.outer}>
      <Image src="images/calendar/new-todo.svg" alt="할일 추가 버튼" width={30} height={30} />
    </Link>
  );
}
