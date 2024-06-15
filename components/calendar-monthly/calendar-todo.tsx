import Image from 'next/image';
import styles from './calendar-todo.module.scss';
import { useCalendarContext } from '../calendar-compound/calendar';
import { deleteTodo, fetchDailyTodos, postRefreshToken, putTodoFinished } from '@/api/calendar/request';
import CalendarTodoProfile from './calendar-todo-profile';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import DropdownMenu from '../kebab/kebab';
// import useToggle from '@/hooks/use-toggle';

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
    retry: (count) => {
      if (count > 1) return false;
      if (count === 0) postRefreshToken();
      return true;
    },
  });

  const [kebabOpen, setKebabOpen] = useState<boolean[]>([]);

  useEffect(() => {
    if (dailyTodos) setKebabOpen(dailyTodos.map(() => false));
  }, [dailyTodos]);

  const finishedMutation = useMutation({
    mutationFn: (calendarId: string) => putTodoFinished(calendarId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dailyTodos', yearMonthDate] });
    },
    onError: () => queryClient.resetQueries({ queryKey: ['dailyTodos', yearMonthDate] }),
  });

  console.log(queryClient.getQueriesData({ queryKey: ['monthlyTodos', year, month + 1] }));

  const deleteMutation = useMutation({
    mutationFn: (calendarId: string) => deleteTodo(calendarId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['monthlyTodos', year, month + 1] });
      queryClient.invalidateQueries({ queryKey: ['dailyTodos', yearMonthDate] });
    },
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.defaultChecked = !e.target.defaultChecked;
    finishedMutation.mutate(e.target.id);
  };

  const handleDelete: MouseEventHandler = (e) => {
    deleteMutation.mutate((e.target as Element).id);
  };

  console.log(dailyTodos);

  // const { handleCloseToggle, handleOpenToggle, handleToggle, isToggle } = useToggle();

  if (isPending) return <span>loading</span>;
  if (isError) return <span>Error: {error.message}</span>;

  return (
    <>
      {dailyTodos.map((todo, i) => (
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

          <div className={styles.kebabCheck}>
            <DropdownMenu
              value={{
                isOpen: kebabOpen[i],
                onOpenToggle: () => {
                  setTimeout(() => setKebabOpen((prev) => [...prev.slice(0, i), !prev[i], ...prev.slice(i + 1)]), 0);
                },
                onCloseToggle: () => {
                  setTimeout(() => setKebabOpen((prev) => [...prev.slice(0, i), !prev[i], ...prev.slice(i + 1)]), 200);
                },
              }}
            >
              <DropdownMenu.Kebab />
              <DropdownMenu.Content>
                <DropdownMenu.Item>수정</DropdownMenu.Item>
                <DropdownMenu.Item>
                  <div onClick={handleDelete} id={todo.id.toString()}>
                    삭제
                  </div>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
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
        </div>
      ))}
    </>
  );
}
