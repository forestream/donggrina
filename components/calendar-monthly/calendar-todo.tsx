import useToggle from '@/hooks/use-toggle';
import styles from './calendar-todo.module.scss';
import CalendarTodoProfile from './calendar-todo-profile';
import DropdownMenu from '../kebab/kebab';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo, putTodoFinished } from '@/api/calendar/request';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { Todo } from '@/api/calendar/request.type';

interface CalendarTodoProps {
  todo: Todo;
}

export default function CalendarTodo({ todo }: CalendarTodoProps) {
  const queryClient = useQueryClient();

  const finishedMutation = useMutation({
    mutationFn: (calendarId: string) => putTodoFinished(calendarId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dailyTodos', todo.dateTime.split('T')[0]] });
    },
    onError: () => queryClient.resetQueries({ queryKey: ['dailyTodos', todo.dateTime.split('T')[0]] }),
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.defaultChecked = !e.target.defaultChecked;
    finishedMutation.mutate(e.target.id);
  };

  const deleteMutation = useMutation({
    mutationFn: (calendarId: string) => deleteTodo(calendarId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['monthlyTodos', +todo.dateTime.split('-')[0], +todo.dateTime.split('-')[1]],
      });
      queryClient.invalidateQueries({ queryKey: ['dailyTodos', todo.dateTime.split('T')[0]] });
    },
  });

  const handleDelete: MouseEventHandler = (e) => {
    deleteMutation.mutate((e.target as Element).id);
  };

  const { isToggle, handleOpenToggle, handleCloseToggle } = useToggle();

  return (
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
            isOpen: isToggle,
            onOpenToggle: handleOpenToggle,
            onCloseToggle: () => setTimeout(() => handleCloseToggle(), 100),
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
  );
}
