import useToggle from '@/hooks/use-toggle';
import styles from './calendar-todo.module.scss';
import CalendarTodoProfile from './calendar-todo-profile';
import DropdownMenu from '../kebab/kebab';
import Image from 'next/image';
import { ChangeEventHandler } from 'react';
import { Todo } from '@/api/calendar/request.type';
import useTodoFinishedMutation from '@/hooks/queries/calendar/use-todo-finished-mutation';
import useTodoDeleteMutation from '@/hooks/queries/calendar/use-todo-delete-mutation';

interface CalendarTodoProps {
  todo: Todo;
}

export default function CalendarTodo({ todo }: CalendarTodoProps) {
  const { isToggle: isOpen, handleCloseToggle: onCloseToggle, handleOpenToggle: onOpenToggle } = useToggle();

  const finishedMutation = useTodoFinishedMutation(todo);
  const deleteMutation = useTodoDeleteMutation(todo);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.defaultChecked = !e.target.defaultChecked;
    finishedMutation.mutate(e.target.id);
  };

  const handleDelete = () => {
    deleteMutation.mutate(todo.id.toString());
    onCloseToggle();
  };

  return (
    <div key={todo.id} className={styles.outer}>
      <div className={styles.category}>카테고리</div>

      <div className={styles.todo}>
        <p className={styles.todoTitle}>
          {todo.title} ({todo.dateTime.slice(-8, -3)})
        </p>
        <div className={styles.profiles}>
          <CalendarTodoProfile src={todo.memberProfileImageUrl} name={todo.nickname} />
          <CalendarTodoProfile src={todo.petProfileImageUrl} name={todo.petName} />
        </div>
      </div>

      <div className={styles.kebabCheck}>
        <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
          <DropdownMenu.Kebab />
          <DropdownMenu.Content>
            <DropdownMenu.Item>수정</DropdownMenu.Item>
            <DropdownMenu.Item onClick={handleDelete}>삭제</DropdownMenu.Item>
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
