import Link from 'next/link';
import styles from './kakao-button.module.scss';
import KakaoSVG from '@/public/images/login/kakao_logo.svg';

export default function KakaoButton() {
  const kakaoURL = '백엔드에서 받기';

  return (
    <Link className={styles.kakaoButton} href={kakaoURL}>
      <KakaoSVG />
      <span>카카오로 로그인</span>
    </Link>
  );
}
