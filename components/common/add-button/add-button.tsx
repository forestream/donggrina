import Link from 'next/link';
import styles from './add-button.module.scss';
import Image from 'next/image';

interface AddButtonProps {
  href: string;
}

export default function AddButton({ href }: AddButtonProps) {
  return (
    <Link href={href} className={styles.outer}>
      <Image src="/images/calendar/new-todo.svg" alt="추가 버튼" width={20} height={20} />
    </Link>
  );
}
