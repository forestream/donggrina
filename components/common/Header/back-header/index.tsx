import Image from 'next/image';
import styles from '../Header.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

export function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <header className={styles.header}>
      <button className={styles.leftArrow} onClick={handleClick}>
        <Image src="/images/header/arrow-left-black.svg" alt="뒤로 가기" fill />
      </button>
      <div className={styles.imageBox}>
        <Link href="/family">
          <Image src="/images/header/logo.svg" alt="로고" fill />
        </Link>
      </div>
    </header>
  );
}
