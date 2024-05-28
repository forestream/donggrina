import Image from 'next/image';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.leftArrow}>
        <Image src="/images/header/left-arrow.png" alt="뒤로 가기" fill />
      </button>
      <div className={styles.imageBox}>
        <Image src="/images/header/sub-logo.png" alt="로고" fill />
      </div>
    </header>
  );
}
