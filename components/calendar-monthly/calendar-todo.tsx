import Image from 'next/image';
import styles from './calendar-todo.module.scss';
import { useCalendarContext } from '../calendar-compound/calendar';
import { fetchDailyTodos, putTodoFinished } from '@/api/calendar/request';
import CalendarTodoProfile from './calendar-todo-profile';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ChangeEventHandler } from 'react';

export default function CalendarTodo() {
  const calendarContext = useCalendarContext();
  const { year, month, date } = calendarContext;
  const yearMonthDate = [year, (month + 1).toString().padStart(2, '0'), date.toString().padStart(2, '0')].join('-');

  const queryClient = useQueryClient();

  const {
    data: dailyTodos,
    error,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['dailyTodos', yearMonthDate],
    queryFn: () => fetchDailyTodos(yearMonthDate),
    placeholderData: (prevDailyTodos) => prevDailyTodos,
  });

  const finishedMutation = useMutation({
    mutationFn: (calendarId: string) => putTodoFinished(calendarId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['dailyTodos', yearMonthDate] }),
    onError: () => queryClient.resetQueries({ queryKey: ['dailyTodos', yearMonthDate] }),
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.defaultChecked = !e.target.defaultChecked;
    finishedMutation.mutate(e.target.id);
  };

  if (isPending) return <span>loading</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <>
      {dailyTodos.map((todo) => (
        <div key={todo.id} className={styles.outer}>
          <div className={styles.category}>카테고리</div>

          <div className={styles.todo}>
            <p>
              {todo.title} ({todo.dateTime.slice(-8, -3)})
            </p>
            <div className={styles.profiles}>
              <CalendarTodoProfile src={todo.memberProfileImageUrl} name={todo.nickname} />
              <CalendarTodoProfile src={todo.petProfileImageUrl} name={todo.petName} />
            </div>
          </div>

          <label className={styles.checkContainer}>
            <input
              id={todo.id.toString()}
              className={styles.checkbox}
              type="checkbox"
              onChange={handleChange}
              defaultChecked={todo.isFinished}
              disabled={finishedMutation.isPending}
            />
            <div className={styles.checkmarkContainer}>
              <Image
                className={styles.checkmark}
                src="/images/calendar/check.svg"
                alt="체크 표시"
                width={14}
                height={14}
              />
            </div>
          </label>
        </div>
      ))}
    </>
  );
}
