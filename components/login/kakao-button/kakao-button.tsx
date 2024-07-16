import Link from 'next/link';
import styles from './kakao-button.module.scss';
import KakaoSVG from '@/public/images/login/kakao_logo.svg';
// import { config } from '@/config';

export default function KakaoButton() {
  // const kakaoURL = config.kakaoAuth;

  return (
    <Link className={styles.kakaoButton} href="/family">
      <KakaoSVG />
      <span>카카오로 로그인</span>
    </Link>
  );
}
