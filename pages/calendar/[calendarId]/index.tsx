import DropdownMenu from '@/components/kebab/kebab';
import styles from './calendar-id.module.scss';
import { fetchTodoById } from '@/api/calendar/request';
import disintegrateDateTime from '@/utils/disintegrate-date-time';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import useToggle from '@/hooks/use-toggle';
import Image from 'next/image';
import Button from '@/components/common/button/button';
import CalendarTodoProfile from '@/components/calendar-monthly/calendar-todo-profile';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    params: { calendarId },
    req: {
      cookies: { accessToken },
    },
  } = context as Params;

  const data = await fetchTodoById(calendarId, accessToken);

  return { props: { todo: data } };
}

export default function CalendarById({ todo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { year, month, date, ampm, hour, minute } = disintegrateDateTime(todo.dateTime);

  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  console.log(todo);

  return (
    <main className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <div>
            <div className={styles.tempImg}></div>
          </div>
          <div className={styles.headerText}>
            <p className={styles.category}>{todo.category}</p>
            <p>{todo.title}</p>
            <p className={styles.dateTime}>
              <span>
                {year}년 {month}월 {date}일
              </span>
              <span className={styles.dot}></span>
              <span>
                {ampm} {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')}
              </span>
            </p>
            <div className={styles.profiles}>
              <CalendarTodoProfile src={todo.writerProfileImageUrl} name={todo.writerNickName} />
              <CalendarTodoProfile src={todo.petProfileImageUrl} name={todo.petName} />
            </div>
          </div>
          <div className={styles.kebab}>
            <DropdownMenu value={{ isOpen, onCloseToggle, onOpenToggle }}>
              <DropdownMenu.Kebab />
              <DropdownMenu.Content>
                <DropdownMenu.Item>수정</DropdownMenu.Item>
                <DropdownMenu.Item>삭제</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        </div>

        <div className={styles.memoContainer}>
          <Image src="/images/calendar/calendar.svg" alt="달력 아이콘" width={20} height={20} />
          <section className={styles.memo}>{todo.memo}</section>
        </div>

        <div className={styles.button}>
          <Button round className={todo.isFinished ? 'disabled' : 'primary'}>
            {todo.isFinished ? '완료 해제하기' : '완료로 표시하기'}
          </Button>
        </div>
      </div>
    </main>
  );
}
