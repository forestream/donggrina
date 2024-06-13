import Image from 'next/image';
import styles from './calendar-todo.module.scss';
import { useCalendarContext } from '../calendar-compound/calendar';
import { useEffect, useState } from 'react';
import { fetchDailyTodos } from '@/api/calendar/request';
import { Todo } from '@/api/calendar/request.type';
import CalendarTodoProfile from './calendar-todo-profile';

export default function CalendarTodo() {
  const [dailyTodos, setDailyTodos] = useState<Todo[]>([]);

  const calendarContext = useCalendarContext();
  const { year, month, date } = calendarContext;

  const handleLoad = async () => {
    const yearMonthDate = `${year}-${(month + 1).toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
    const data = await fetchDailyTodos(yearMonthDate);
    setDailyTodos(data);
  };

  console.log(dailyTodos);
  useEffect(() => {
    handleLoad();
  }, [year, month, date]);

  if (!dailyTodos.length) return;

  return (
    <>
      {dailyTodos.map((todo) => (
        <div className={styles.outer}>
          <div className={styles.category}>카테고리</div>

          <div className={styles.todo}>
            <p>
              {todo.title} ({todo.dateTime.slice(-8, -3)})
            </p>
            <div className={styles.profiles}>
              <CalendarTodoProfile src={todo.memberProfileImageUrl} name={todo.nickname} />
              <CalendarTodoProfile src={todo.petProfileImageUrl} name={todo.nickname} />
            </div>
          </div>

          <label className={styles.checkContainer}>
            <input className={styles.checkbox} type="checkbox" />
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
