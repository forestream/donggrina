import Image from 'next/image';
import styles from '../Header.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function MainHeader() {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  const handleSearchClick = () => {
    console.log('검색페이지 url 필요');
    // router.push() : 검색페이지 url 필요
  };
  return (
    <header className={styles.header}>
      <button className={`${styles.leftIcon} ${styles.mypageIcon}`} onClick={handleClick}>
        <Image src="/images/header/mypage-icon.svg" alt="마이페이지 아이콘" width={20} height={20} />
      </button>
      <div className={styles.imageBox}>
        <Link href="/family">
          <Image src="/images/header/logo.svg" alt="로고" fill />
        </Link>
      </div>
      <button className={styles.rightIcon} onClick={handleSearchClick}>
        <Image src="/images/header/search.svg" alt="검색 아이콘" width={20} height={20} />
      </button>
    </header>
  );
}
