import useToggle from '@/hooks/use-toggle';
import styles from './calendar-todo.module.scss';
import CalendarTodoProfile from './calendar-todo-profile';
import DropdownMenu from '../kebab/kebab';
import Image from 'next/image';
import { ChangeEventHandler, MouseEventHandler, useRef } from 'react';
import useTodoFinishedMutation from '@/hooks/queries/calendar/use-todo-finished-mutation';
import useTodoDeleteMutation from '@/hooks/queries/calendar/use-todo-delete-mutation';
import { useRouter } from 'next/router';
import { DailyTodo } from '@/apis/calendar/request.type';
import { TodoByQueries } from '@/apis/search/index.type';
import { CALENDAR_CATEGORIES } from '@/utils/constants/calendar-constants';

interface CalendarTodoProps {
  todo: DailyTodo & TodoByQueries;
}

export default function CalendarTodo({ todo }: CalendarTodoProps) {
  const router = useRouter();
  const optionRef = useRef<HTMLDivElement>(null);

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

  const handleEdit = () => {
    router.push(`/calendar/${todo.id}/edit`);
  };

  const handleClick: MouseEventHandler = (e) => {
    if (optionRef.current?.contains(e.target as Node)) return;
    router.push(`/calendar/${todo.id}`);
  };

  return (
    <div onClick={handleClick} className={styles.outer}>
      <div className={styles.category} style={{ backgroundColor: CALENDAR_CATEGORIES[todo.category].backgroundColor }}>
        <Image src={CALENDAR_CATEGORIES[todo.category].image} alt={todo.category} fill />
      </div>

      <div className={styles.todo}>
        <p className={styles.todoTitle}>
          {todo.title} ({todo.dateTime.slice(-8, -3)})
        </p>
        <div className={styles.profiles}>
          <CalendarTodoProfile src={todo.memberProfileImageUrl} name={todo.nickname} />
          <CalendarTodoProfile src={todo.petProfileImageUrl} name={todo.petName} />
        </div>
      </div>

      <div ref={optionRef} className={styles.kebabCheck}>
        <div className={styles.kebab}>
          {todo.isMine && (
            <DropdownMenu value={{ isOpen, onOpenToggle, onCloseToggle }}>
              <DropdownMenu.Kebab />
              <DropdownMenu.Content>
                <DropdownMenu.Item onClick={handleEdit}>수정</DropdownMenu.Item>
                <DropdownMenu.Item onClick={handleDelete}>삭제</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          )}
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
    </div>
  );
}
