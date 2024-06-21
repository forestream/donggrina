import styles from './calendar-todo-profile.module.scss';
import Image from 'next/image';

interface CalendarTodoProfileProps {
  src: string;
  name: string;
}

export default function CalendarTodoProfile({ src, name }: CalendarTodoProfileProps) {
  if (!src) return;

  return (
    <div className={styles.outer}>
      <Image className={styles.image} src={src} alt="프로필 이미지" width={20} height={20} />
      <p>{name}</p>
    </div>
  );
}
