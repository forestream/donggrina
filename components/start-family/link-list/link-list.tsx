import Link from 'next/link';
import styles from './link-list.module.scss';

export default function LinkList() {
  return (
    <ul className={styles.linkList}>
      <li>
        <Link href={'/'}>가족만들기</Link>
      </li>
      <li>
        <Link href={'/'}>가족에 참여하기</Link>
      </li>
    </ul>
  );
}
