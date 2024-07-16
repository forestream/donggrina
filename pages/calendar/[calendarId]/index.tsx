import DropdownMenu from '@/components/kebab/kebab';
import styles from './calendar-id.module.scss';
import disintegrateDateTime from '@/utils/disintegrate-date-time';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import useToggle from '@/hooks/use-toggle';
import Image from 'next/image';
import Button from '@/components/common/button/button';
import CalendarTodoProfile from '@/components/calendar-monthly/calendar-todo-profile';
import useTodoFinishedMutation from '@/hooks/queries/calendar/use-todo-finished-mutation';
// import useTodoQuery from '@/hooks/queries/calendar/use-todo-query';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import useTodoDeleteMutation from '@/hooks/queries/calendar/use-todo-delete-mutation';
import { CALENDAR_CATEGORIES } from '@/utils/constants/calendar-constants';
import { TODO_BY_ID } from '@/lib/mock/mock';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {
    params: { calendarId },
  } = context as Params;

  return { props: { calendarId } };
}

export default function CalendarById({ calendarId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const queryClient = useQueryClient();
  // const { data: todo, isPending, isError, error } = useTodoQuery(calendarId);
  const {
    data: todo,
    isPending,
    isError,
    error,
  } = { data: TODO_BY_ID, isPending: false, isError: false, error: { message: '' } };
  const finishedMutation = useTodoFinishedMutation(todo);
  const deleteMutation = useTodoDeleteMutation(todo);

  const router = useRouter();

  const { year, month, date, ampm, hour, minute } = disintegrateDateTime(todo.dateTime);

  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  const handleClickEdit = () => {
    router.push(`/calendar/${calendarId}/edit`);
  };
  const handleClickDelete = () => {
    deleteMutation.mutate(calendarId, {
      onSuccess: () => router.push('/calendar'),
    });
  };

  const handleClickFinished = () => {
    finishedMutation.mutate(todo.id.toString(), {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todo', calendarId] }),
    });
  };

  if (isPending) return <p>loading</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <main className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.headerContainer}>
          <div>
            <div
              className={styles.categoryImage}
              style={{ backgroundColor: CALENDAR_CATEGORIES[todo.category].backgroundColor }}
            >
              <Image src={CALENDAR_CATEGORIES[todo.category].image} alt={todo.category} fill />
            </div>
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
          {todo.isMine && (
            <div className={styles.kebab}>
              <DropdownMenu value={{ isOpen, onCloseToggle, onOpenToggle }}>
                <DropdownMenu.Kebab />
                <DropdownMenu.Content>
                  <DropdownMenu.Item onClick={handleClickEdit}>수정</DropdownMenu.Item>
                  <DropdownMenu.Item onClick={handleClickDelete}>삭제</DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </div>
          )}
        </div>

        <div className={styles.memoContainer}>
          <Image src="/images/calendar/calendar.svg" alt="달력 아이콘" width={20} height={20} />
          <section className={styles.memo}>{todo.memo}</section>
        </div>

        <div className={styles.button}>
          <Button onClick={handleClickFinished} round className={todo.isFinished ? 'disabled' : 'primary'}>
            {todo.isFinished ? '완료 해제하기' : '완료로 표시하기'}
          </Button>
        </div>
      </div>
    </main>
  );
}
