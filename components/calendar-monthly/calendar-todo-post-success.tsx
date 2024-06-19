import styles from './calendar-todo-post-success.module.scss';
import Button from '../common/button/button';
import { useRouter } from 'next/router';
import { MouseEventHandler, useRef } from 'react';

export default function CalendarTodoPostSuccess() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    router.push('/calendar');
  };

  const handleClickOutside: MouseEventHandler<HTMLDivElement> = (e) => {
    if (ref.current && !ref.current.contains(e.target as Node)) e.preventDefault();
  };

  return (
    <>
      <div onClick={handleClickOutside} className={styles.detector}></div>
      <div ref={ref} className={styles.outer}>
        <div className={styles.inner}>
          <p>일정기록 등록이 완료되었습니다.</p>
        </div>
        <div className={styles.button}>
          <Button className="primary" onClick={handleClick} leftRound rightRound>
            확인
          </Button>
        </div>
      </div>
    </>
  );
}
